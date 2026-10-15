#!/bin/bash
# Bootstraps Claude Code cloud sessions: Node per .nvmrc, pnpm per packageManager, node_modules,
# Playwright Chromium, Docker for visual tests. Each step is skipped when already in place. No-op locally.
#
# Runs twice in the environment (see docs/agents/cloud-environment.md):
# - from the environment setup script with DS_CLOUD_SNAPSHOT=true, so the VM snapshot already has the toolchain,
#   the pnpm store, Chromium and the visual-tests Docker image;
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
public_roots_dir=/usr/share/ca-certificates/mozilla
nssdb="$HOME/.pki/nssdb"

split_bundle() {
	awk -v dir="$2" '/BEGIN CERTIFICATE/ { n++ } n { print > (dir "/" n ".pem") }' "$1"
}

fingerprint() {
	openssl x509 -in "$1" -noout -fingerprint -sha256 | cut -d= -f2 | tr -d :
}

trust_proxy_ca() {
	local work cert nick
	local -a proxy_cas=()
	work="$(mktemp -d)"

	if ! command -v certutil >/dev/null; then
		as_root apt-get update -qq && as_root apt-get install -y -qq libnss3-tools || return 1
	fi

	mkdir -p "$nssdb"
	[ -f "$nssdb/cert9.db" ] || certutil -d "sql:$nssdb" -N --empty-password || return 1

	# The bundle is the public (Mozilla) roots plus the proxy CAs, which may also be in the system store already:
	# the proxy CAs are whatever isn't a public root
	for cert in "$public_roots_dir"/*.crt; do
		[ -f "$cert" ] && fingerprint "$cert" >>"$work/public-roots"
	done

	[ -s "$work/public-roots" ] || {
		echo "no public roots in $public_roots_dir, can't tell the proxy CAs apart"
		return 1
	}

	split_bundle "$ca_bundle" "$work"

	for cert in "$work"/*.pem; do
		grep -qxF "$(fingerprint "$cert")" "$work/public-roots" || proxy_cas+=("$cert")
	done

	# Drop what an earlier run imported, so a rotated CA doesn't stay trusted
	certutil -d "sql:$nssdb" -L | awk '$1 ~ /^cloud-proxy-/ { print $1 }' | while read -r nick; do
		certutil -d "sql:$nssdb" -D -n "$nick"
	done

	# A CA already in NSS under another nickname keeps it; importing it again is a no-op
	for cert in "${proxy_cas[@]}"; do
		nick="cloud-proxy-$(fingerprint "$cert" | cut -c1-16)"
		certutil -d "sql:$nssdb" -A -t "C,," -n "$nick" -i "$cert" || return 1
	done

	echo "trusted ${#proxy_cas[@]} proxy CA(s): $(for cert in "${proxy_cas[@]}"; do
		openssl x509 -in "$cert" -noout -subject -nameopt multiline | sed -n 's/ *commonName *= //p'
	done | paste -sd ';' -)"
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

# 6. Docker for visual tests (`pnpm test:visual:server`). The image ships Docker Engine but its daemon stops with the VM,
# so it's started on every session and resume (~1s). The ~3.5 GB Playwright image is pulled only for the snapshot: a
# session started before the next rebuild after a Playwright bump pulls it on the first `test:visual:server`. Not fatal.
DOCKER_READY_TIMEOUT_S=10
DOCKER_STOP_TIMEOUT_S=30
DOCKER_PID_FILE=/var/run/docker.pid
PLAYWRIGHT_IMAGE_REPO=mcr.microsoft.com/playwright

start_docker() {
	as_root setsid sh -c 'exec dockerd </dev/null >>/var/log/dockerd.log 2>&1' &

	for _ in $(seq "$DOCKER_READY_TIMEOUT_S"); do
		as_root docker info >/dev/null 2>&1 && return 0
		sleep 1
	done

	echo "dockerd not ready after ${DOCKER_READY_TIMEOUT_S}s, see /var/log/dockerd.log"
	return 1
}

# Same tag as scripts/visual-test-server.ts; older versions are removed so a bump doesn't double the disk use
pull_playwright_image() {
	local version image old
	version="$(cd packages/design-system && node -p "require('playwright/package.json').version")"
	image="$PLAYWRIGHT_IMAGE_REPO:v$version-noble"

	as_root docker image inspect "$image" >/dev/null 2>&1 ||
		as_root docker pull --platform linux/amd64 "$image" || return 1

	as_root docker images --format '{{.Repository}}:{{.Tag}}' "$PLAYWRIGHT_IMAGE_REPO" | { grep -vxF "$image" || true; } |
		while read -r old; do
			as_root docker rmi "$old" || return 1
		done
}

# Stop cleanly so the snapshot doesn't capture Docker's databases mid-write
stop_docker() {
	local pid
	pid="$(cat "$DOCKER_PID_FILE" 2>/dev/null)" || return 0
	as_root kill "$pid"

	for _ in $(seq "$DOCKER_STOP_TIMEOUT_S"); do
		as_root kill -0 "$pid" 2>/dev/null || return 0
		sleep 1
	done

	echo "dockerd still running after ${DOCKER_STOP_TIMEOUT_S}s"
	return 1
}

if command -v dockerd >/dev/null && { as_root docker info >/dev/null 2>&1 || try_run start_docker; }; then
	if [ "${DS_CLOUD_SNAPSHOT:-}" = "true" ]; then
		try_run pull_playwright_image ||
			echo "cloud-setup: allow mcr.microsoft.com in the environment's network access" \
				"(docs/agents/cloud-environment.md)" >&2
		try_run stop_docker || true
	fi
fi

echo "cloud-setup: node $(node -v), pnpm $(pnpm -v), dependencies ready"
