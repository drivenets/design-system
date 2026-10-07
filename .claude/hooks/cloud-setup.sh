#!/bin/bash
# Bootstraps Claude Code cloud sessions: Node per .nvmrc, pnpm per packageManager, node_modules,
# Playwright Chromium. Each step is skipped when already in place. No-op locally.
#
# Runs twice in the shared environment (see docs/agents/cloud-environment.md):
# - from the environment setup script, so the VM snapshot already has the toolchain, the pnpm store and Chromium;
# - as the SessionStart hook, where whatever is still missing gets installed.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
	exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}"

NODE_PREFIX=/opt/node24
STATE_DIR=/var/lib/ds-cloud-setup
LOCK_STAMP=node_modules/.cloud-setup-lock-sha

node_version="$(tr -d 'v[:space:]' <.nvmrc)"
pnpm_version="$(sed -n 's/.*"packageManager": *"pnpm@\([^"]*\)".*/\1/p' package.json)"

log="$(mktemp)"
trap 'rm -f "$log"' EXIT

# Like run, but a failure is only a warning: the step's feature is lost, the session still works
try_run() {
	echo "cloud-setup: $*"

	if ! "$@" >"$log" 2>&1; then
		echo "cloud-setup: WARNING '$*' failed:" >&2
		tail -n 10 "$log" >&2
		return 1
	fi
}

run() {
	echo "cloud-setup: $*"

	if ! "$@" >"$log" 2>&1; then
		echo "cloud-setup: '$*' failed:" >&2
		tail -n 40 "$log" >&2
		exit 1
	fi
}

as_root() {
	if [ "$(id -u)" -eq 0 ]; then
		"$@"
	else
		sudo -n "$@"
	fi
}

# 1. Node (image ships 20–22 under /opt/nodeXX; the repo needs .nvmrc, a major like "24" or a full version)
installed_node="$("$NODE_PREFIX/bin/node" -v 2>/dev/null | tr -d v || true)"

if [ "$installed_node" != "$node_version" ] && [ "${installed_node#"$node_version".}" = "$installed_node" ]; then
	run as_root env N_PREFIX="$NODE_PREFIX" "$(command -v npx)" -y n "$node_version"
fi

export PATH="$NODE_PREFIX/bin:$PATH"

# CI=true like GitHub Actions: no display, so Vitest browser tests and Storybook must run headless
if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
	for line in "export PATH=\"$NODE_PREFIX/bin:\$PATH\"" "export CI=true"; do
		grep -qxF "$line" "$CLAUDE_ENV_FILE" 2>/dev/null || echo "$line" >>"$CLAUDE_ENV_FILE"
	done
fi

# 2. pnpm pinned to package.json#packageManager, installed next to Node 24. Checked from / because inside the
# repo any pnpm reports the packageManager version: it switches to a self-downloaded copy that turbo can't exec.
if [ "$(cd / && "$NODE_PREFIX/bin/pnpm" -v 2>/dev/null)" != "$pnpm_version" ]; then
	run as_root "$NODE_PREFIX/bin/npm" install -g "pnpm@$pnpm_version"
fi

# 3. Dependencies. Every session starts from a fresh clone, so this always runs on a new session (linking from the
# cached pnpm store); the stamp only skips it on resume while the lockfile is unchanged.
lock_sha="$(sha256sum pnpm-lock.yaml | cut -d' ' -f1)"

if [ "$(cat "$LOCK_STAMP" 2>/dev/null)" != "$lock_sha" ]; then
	run pnpm install --frozen-lockfile
	echo "$lock_sha" >"$LOCK_STAMP"
fi

# 4. Playwright Chromium: OS libraries once per VM, browser binary is a no-op when present. Not fatal: without
# Chromium only browser tests and screenshots fail, so don't block the session over it.
if [ ! -f "$STATE_DIR/playwright-deps" ] &&
	try_run as_root "$(command -v pnpm)" --filter @drivenets/design-system exec playwright install-deps chromium; then
	as_root mkdir -p "$STATE_DIR"
	as_root touch "$STATE_DIR/playwright-deps"
fi

if ! try_run pnpm --filter @drivenets/design-system exec playwright install chromium; then
	echo "cloud-setup: browser tests won't run; allow cdn.playwright.dev in the environment's network access" \
		"(docs/agents/cloud-environment.md)" >&2
fi

# 5. Chromium trusts the session's HTTPS proxy CA (curl and Node do already); without it Storybook can't load
# Google Fonts and screenshots show fallback fonts and raw icon names. Not fatal, redone when the bundle changes.
ca_bundle="$HOME/.ccr/ca-bundle.crt"
system_ca_bundle=/etc/ssl/certs/ca-certificates.crt
nssdb="$HOME/.pki/nssdb"

split_bundle() {
	awk -v dir="$2" '/BEGIN CERTIFICATE/ { n++ } n { print > (dir "/" n ".pem") }' "$1"
}

fingerprint() {
	openssl x509 -in "$1" -noout -fingerprint -sha256 | cut -d= -f2 | tr -d :
}

trust_proxy_ca() {
	local work cert nick
	local -a selected=()
	work="$(mktemp -d)"
	mkdir -p "$work/bundle" "$work/system"

	if ! command -v certutil >/dev/null; then
		as_root apt-get update -qq && as_root apt-get install -y -qq libnss3-tools || return 1
	fi

	mkdir -p "$nssdb"
	[ -f "$nssdb/cert9.db" ] || certutil -d "sql:$nssdb" -N --empty-password || return 1

	# The bundle is the system roots plus the proxy CA: keep only what the system store doesn't have
	split_bundle "$ca_bundle" "$work/bundle"
	[ -f "$system_ca_bundle" ] && split_bundle "$system_ca_bundle" "$work/system"

	for cert in "$work"/system/*.pem; do
		[ -f "$cert" ] && fingerprint "$cert" >>"$work/system-fingerprints"
	done

	for cert in "$work"/bundle/*.pem; do
		grep -qxF "$(fingerprint "$cert")" "$work/system-fingerprints" 2>/dev/null || selected+=("$cert")
	done

	# Proxy CA already in the system store (or no system store): Chromium only reads NSS, so trust the whole bundle
	[ "${#selected[@]}" -gt 0 ] || selected=("$work"/bundle/*.pem)

	# Drop what an earlier bundle imported, so a rotated CA doesn't stay trusted
	certutil -d "sql:$nssdb" -L | awk '$1 ~ /^cloud-proxy-/ { print $1 }' | while read -r nick; do
		certutil -d "sql:$nssdb" -D -n "$nick"
	done

	for cert in "${selected[@]}"; do
		nick="cloud-proxy-$(fingerprint "$cert" | cut -c1-16)"
		certutil -d "sql:$nssdb" -A -t "C,," -n "$nick" -i "$cert" || return 1
	done

	echo "imported ${#selected[@]} certificate(s)"
	rm -rf "$work"
}

if [ -f "$ca_bundle" ]; then
	ca_sha="$(sha256sum "$ca_bundle" | cut -d' ' -f1)"

	if [ "$(cat "$STATE_DIR/proxy-ca" 2>/dev/null)" != "$ca_sha" ] && try_run trust_proxy_ca; then
		tail -n 1 "$log"
		as_root mkdir -p "$STATE_DIR"
		echo "$ca_sha" | as_root tee "$STATE_DIR/proxy-ca" >/dev/null
	fi
fi

echo "cloud-setup: node $(node -v), pnpm $(pnpm -v), dependencies ready"
