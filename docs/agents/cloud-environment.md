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
| Network access        | Custom, see below           |
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

The setup script never needs editing; see [How it stays up to date](#how-it-stays-up-to-date).

Never put secrets in environment variables — everyone using the environment can read them. Jira and Slack access come from each person's own connectors (`claude.ai/customize/connectors`); GitHub access comes from the Claude GitHub App.

**Network access:** Custom, with the default (Trusted) allowlist kept and these hosts added:

```
cdn.playwright.dev
playwright.download.prss.microsoft.com
```

Trusted already covers npm, nodejs.org and apt. The image ships an older Chromium in `/opt/pw-browsers`, and the Playwright version in the lockfile needs its own build from `cdn.playwright.dev`. Without it, the hook prints a warning and browser tests can't run; everything else still works.

## How it stays up to date

The code is never cached: every session starts from a fresh clone of the selected branch. The VM snapshot holds only what lives outside the repo: Node and pnpm in `/opt/node24`, the pnpm store, Playwright Chromium, OS packages and the proxy CA.

The snapshot is rebuilt when the setup script or the allowed network hosts change, and automatically about every 7 days. In between, the hook compares what the checkout needs with what is installed and adds only the difference:

| Change in the repo                | Session start                                      |
| --------------------------------- | -------------------------------------------------- |
| No dependency changes (most PRs)  | `node_modules` linked from the cached store        |
| Lockfile adds or bumps packages   | Only the new packages are downloaded               |
| `.nvmrc` or `packageManager` bump | The new Node or pnpm is installed                  |
| Playwright upgrade                | The matching Chromium is downloaded (about 150 MB) |

A stale snapshot never means a wrong toolchain, only a slower start until the next rebuild. After a big upgrade (Node, Playwright) an Owner can rebuild right away by saving any edit to the setup script, for example a comment.

## Storybook and visual checks

The hook doesn't start Storybook — most sessions and Routines don't need it. When a task does, Claude runs `pnpm start` in the background and screenshots stories with the installed Chromium:

```bash
pnpm --filter @drivenets/design-system exec playwright screenshot --wait-for-selector "#storybook-root > *" \
  "http://localhost:6006/iframe.html?id=<story-id>&viewMode=story" /tmp/story.png
```

The session's HTTPS traffic goes through a proxy with its own CA; the hook adds that CA to Chromium's certificate store so Google Fonts and icons render. Story IDs come from the DS MCP server (`list-all-documentation` with `withStoryIds: true`). The VM pauses after a few idle minutes and background processes stop, so start Storybook again after resuming.

## Limits

- VM: 4 vCPU, 16 GB RAM, 30 GB disk. Run checkers on changed files (see [AGENTS.md](../../AGENTS.md#code-quality-checkers)), not the full `ci:local`.
- Routines belong to an individual account and aren't shared; runs use the owner's identity and usage.
