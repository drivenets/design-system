# Claude Code cloud environment

How Claude Code on the web ([claude.ai/code](https://claude.ai/code)) and Routines get a working checkout of this repo. Ticket: [AR-100283](https://drivenets.atlassian.net/browse/AR-100283).

All setup logic lives in one script, [`.claude/hooks/cloud-setup.sh`](../../.claude/hooks/cloud-setup.sh). It installs Node (per `.nvmrc`), pnpm (per `package.json#packageManager`), `node_modules` and Playwright Chromium, skipping whatever is already in place. It runs automatically as a `SessionStart` hook in every cloud session and does nothing locally.

## Using it

At [claude.ai/code](https://claude.ai/code), pick `drivenets/design-system`, then pick an environment in the selector above the message box:

- **design-system** (under **Organization**) — recommended, starts fastest.
- **Default** — also works; the hook installs everything on first start, which takes a few minutes longer.

## Creating the shared environment (org Owner, once)

`claude.ai/admin-settings` → **Cloud environments** → add an environment:

| Field                 | Value                       |
| --------------------- | --------------------------- |
| Name                  | `design-system`             |
| Network access        | Trusted                     |
| Environment variables | leave empty                 |
| Setup script          | paste the block below as is |

```bash
#!/bin/bash
set -euo pipefail

# Runs as root in /home/user, after the repo is cloned to /home/user/<repo> at the default branch
for hook in "$PWD"/*/.claude/hooks/cloud-setup.sh; do
	if [ -x "$hook" ]; then
		echo "setup: running $hook"
		CLAUDE_CODE_REMOTE=true CLAUDE_PROJECT_DIR="${hook%/.claude/hooks/cloud-setup.sh}" "$hook"
		exit 0
	fi
done

echo "setup: no .claude/hooks/cloud-setup.sh in $PWD/*/, the SessionStart hook will install everything"
```

The setup script runs as root after the repo is cloned at the default branch, and before Claude Code starts. It runs the same hook early so the VM snapshot already holds Node, pnpm, the pnpm store and Chromium, and the hook in each session has little or nothing left to do. If the hook isn't found, the setup script still succeeds and the session's hook does the work, just slower.

The setup script never needs editing. If `.nvmrc`, `packageManager` or the lockfile change after the snapshot was taken, the hook installs whatever differs, so sessions stay correct and only start slower until the snapshot is rebuilt.

Never put secrets in environment variables — everyone using the environment can read them. Jira and Slack access come from each person's own connectors (`claude.ai/customize/connectors`); GitHub access comes from the Claude GitHub App.

If a download is blocked under Trusted, switch network access to Custom, keep the default allowlist, and add the blocked host (likely candidates: `nodejs.org`, `cdn.playwright.dev`, `playwright.download.prss.microsoft.com`).

## Storybook and visual checks

The hook doesn't start Storybook — most sessions and Routines don't need it. When a task does, Claude runs `pnpm start` in the background and screenshots stories with the installed Chromium:

```bash
pnpm --filter @drivenets/design-system exec playwright screenshot --wait-for-timeout=1000 \
  "http://localhost:6006/iframe.html?id=<story-id>&viewMode=story" /tmp/story.png
```

Story IDs come from the DS MCP server (`list-all-documentation` with `withStoryIds: true`). The VM pauses after a few idle minutes and background processes stop, so start Storybook again after resuming.

## Limits

- VM: 4 vCPU, 16 GB RAM, 30 GB disk. Run checkers on changed files (see [AGENTS.md](../../AGENTS.md#code-quality-checkers)), not the full `ci:local`.
- Routines belong to an individual account and aren't shared; runs use the owner's identity and usage.
