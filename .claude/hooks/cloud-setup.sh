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

node_major="$(tr -d 'v[:space:]' <.nvmrc)"
pnpm_version="$(sed -n 's/.*"packageManager": *"pnpm@\([^"]*\)".*/\1/p' package.json)"

log="$(mktemp)"
trap 'rm -f "$log"' EXIT

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

# 1. Node (image ships 20–22 under /opt/nodeXX; the repo needs .nvmrc)
if [ "$("$NODE_PREFIX/bin/node" -v 2>/dev/null | cut -d. -f1)" != "v$node_major" ]; then
	run as_root env N_PREFIX="$NODE_PREFIX" "$(command -v npx)" -y n "$node_major"
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

# 3. Dependencies, skipped while the lockfile is unchanged
lock_sha="$(sha256sum pnpm-lock.yaml | cut -d' ' -f1)"

if [ "$(cat "$LOCK_STAMP" 2>/dev/null)" != "$lock_sha" ]; then
	run pnpm install --frozen-lockfile
	echo "$lock_sha" >"$LOCK_STAMP"
fi

# 4. Playwright Chromium: OS libraries once per VM, browser binary is a no-op when present
if [ ! -f "$STATE_DIR/playwright-deps" ]; then
	run as_root "$(command -v pnpm)" --filter @drivenets/design-system exec playwright install-deps chromium
	as_root mkdir -p "$STATE_DIR"
	as_root touch "$STATE_DIR/playwright-deps"
fi

# Not fatal: without Chromium only browser tests fail, so don't block the session over it
echo "cloud-setup: playwright install chromium"

if ! pnpm --filter @drivenets/design-system exec playwright install chromium >"$log" 2>&1; then
	echo "cloud-setup: WARNING Playwright Chromium not installed, browser tests won't run." >&2
	grep -m1 -o 'request blocked[^.]*' "$log" >&2 || tail -n 5 "$log" >&2
	echo "cloud-setup: allow cdn.playwright.dev in the environment's network access (docs/agents/cloud-environment.md)" >&2
fi

# 5. Chromium trusts the session's HTTPS proxy CA (curl and Node do already); without it Storybook can't load
# Google Fonts and screenshots show fallback fonts and raw icon names. Not fatal, redone when the bundle changes.
ca_bundle="$HOME/.ccr/ca-bundle.crt"
nssdb="$HOME/.pki/nssdb"

trust_proxy_ca() {
	local certs
	certs="$(mktemp -d)"

	if ! command -v certutil >/dev/null; then
		as_root apt-get update -qq && as_root apt-get install -y -qq libnss3-tools || return 1
	fi

	mkdir -p "$nssdb"
	[ -f "$nssdb/cert9.db" ] || certutil -d "sql:$nssdb" -N --empty-password || return 1

	awk -v dir="$certs" '/BEGIN CERTIFICATE/ { n++ } n { print > (dir "/" n ".pem") }' "$ca_bundle"

	for cert in "$certs"/*.pem; do
		certutil -d "sql:$nssdb" -A -t "C,," -n "cloud-proxy-$(basename "$cert" .pem)" -i "$cert" || return 1
	done

	rm -rf "$certs"
}

if [ -f "$ca_bundle" ]; then
	ca_sha="$(sha256sum "$ca_bundle" | cut -d' ' -f1)"

	if [ "$(cat "$STATE_DIR/proxy-ca" 2>/dev/null)" != "$ca_sha" ]; then
		echo "cloud-setup: trust proxy CA in Chromium"

		if trust_proxy_ca >"$log" 2>&1; then
			as_root mkdir -p "$STATE_DIR"
			echo "$ca_sha" | as_root tee "$STATE_DIR/proxy-ca" >/dev/null
		else
			echo "cloud-setup: WARNING proxy CA not trusted by Chromium, Storybook fonts won't load:" >&2
			tail -n 5 "$log" >&2
		fi
	fi
fi

echo "cloud-setup: node $(node -v), pnpm $(pnpm -v), dependencies ready"
