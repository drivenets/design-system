# Routines

Scheduled Claude Code sessions that do recurring Design System chores ([AR-100283](https://drivenets.atlassian.net/browse/AR-100283)). They run in the shared `design-system` cloud environment ([cloud-environment.md](../cloud-environment.md)).

A Routine belongs to one person's claude.ai account: it runs as that person and uses their usage, Jira and Slack identity. Each Routine here keeps its instructions in this folder and its stored prompt only points to them, so anyone on the team can review a change in a PR, and recreate the Routine under their own account if the owner leaves.

## Current Routines

| Routine                                     | Schedule                     | What it does                                                                                   | Owner            |
| ------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------- | ---------------- |
| [Flaky test tracker](flaky-test-tracker.md) | Sundays 08:58 Asia/Jerusalem | Finds flaky tests in `PR Checks`, files Bugs under AR-58393, fixes clear cases, posts to Slack | `@iromanchuk-dn` |

Not a Routine: dependency updates. Dependabot already covers them (`.github/dependabot.yml`), see the decision on [AR-100283](https://drivenets.atlassian.net/browse/AR-100283).

## Flaky test tracker

| Field        | Value                                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Name         | `Flaky test tracker (design-system)`                                                                                                 |
| Trigger ID   | `trig_01M5SrYsBEiQzf3oShPPK5hX` (owner's account)                                                                                    |
| Schedule     | `CRON_TZ=Asia/Jerusalem 58 8 * * 0`                                                                                                  |
| Environment  | `design-system`                                                                                                                      |
| Repository   | `drivenets/design-system`, default branch                                                                                            |
| Session      | A new session on every run                                                                                                           |
| Connectors   | Atlassian (Jira), Slack. GitHub access comes from the Claude GitHub App.                                                             |
| Instructions | [flaky-test-tracker.md](flaky-test-tracker.md)                                                                                       |
| Output       | Jira Bugs under [AR-58393](https://drivenets.atlassian.net/browse/AR-58393), `claude/flaky-*` PRs, `#design-system-ai-notifications` |

Stored prompt:

```text
Run the weekly flaky test tracker for the drivenets/design-system repository.

Read docs/agents/routines/flaky-test-tracker.md from the repository's default branch and follow it exactly. That file is the source of truth for what to scan, how to confirm, where to file Jira Bugs, when to open fix PRs, and what to post to Slack.

If that file does not exist, post one message to the Slack channel #design-system-ai-notifications saying "Flaky test tracker: instructions file docs/agents/routines/flaky-test-tracker.md not found on the default branch, nothing was run", and stop.
```

## Creating or taking over a Routine

Do this when setting a Routine up for the first time, or when its owner leaves and someone else takes it over. The new owner needs:

- Access to `drivenets/design-system` through the Claude GitHub App ([claude.ai/code](https://claude.ai/code) asks on first use).
- The Atlassian and Slack connectors connected at [claude.ai/customize/connectors](https://claude.ai/customize/connectors).
- Membership in `#design-system-ai-notifications` (a private channel), so their Slack connector can post there.

Then, at [claude.ai/code](https://claude.ai/code) → **Routines** → **New routine**:

1. Name, schedule and stored prompt: copy them from the Routine's table above.
2. Repository: `drivenets/design-system`. Environment: `design-system`.
3. Connectors: enable the ones the table lists. A Routine created from a Claude session (instead of this page) may come without connectors or a repository; open it here and add them.
4. Save, then **Run now** once and check the Slack message and any tickets it filed.
5. Update the Owner and Trigger ID in this file in a PR.

The previous owner (or an org admin) should pause or delete their copy, so the Routine doesn't run twice.

## Changing a Routine

- **What it does:** edit its instructions file in a PR. The next run reads the default branch, so the change applies once merged.
- **Schedule, name or connectors:** the owner edits the Routine at claude.ai/code → Routines, then updates the table here.
- **Pause:** the owner toggles it off in the Routines list. Note it in this file if the pause is longer than a week.

## Limits

- A run is an unattended Claude session: it only does what the instructions allow, and everything it creates is a PR or a ticket for people to review. It never merges.
- Runs use the owner's usage limits.
- The cloud environment has no running Docker daemon, so Routines can't run the visual tests (`storybook-visual`).
