#!/bin/bash
# Bootstraps Claude Code cloud sessions: Node per .nvmrc, pnpm per packageManager, node_modules,
# Playwright Chromium. Each step is skipped when already in place. No-op locally.
#
# Runs twice in the shared environment (see docs/agents/cloud-environment.md):
# - as the environment setup script, on a throwaway clone, so the VM snapshot already has the toolchain,
#   the pnpm store and Chromium;
# - as the SessionStart hook, where only `pnpm install` is left to do (linking from the warm store).
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

if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
	echo "export PATH=\"$NODE_PREFIX/bin:\$PATH\"" >>"$CLAUDE_ENV_FILE"
fi

# 2. pnpm pinned to package.json#packageManager
if [ "$(pnpm -v 2>/dev/null)" != "$pnpm_version" ]; then
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

run pnpm --filter @drivenets/design-system exec playwright install chromium

echo "cloud-setup: node $(node -v), pnpm $(pnpm -v), dependencies and Playwright Chromium ready"
