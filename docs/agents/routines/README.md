<!-- cspell:ignore Mmnk Wapw XRTMM -->

# Routines

Scheduled Claude Code sessions that do recurring Design System chores ([AR-100283](https://drivenets.atlassian.net/browse/AR-100283)). They run in the shared `design-system` cloud environment ([cloud-environment.md](../cloud-environment.md)).

A Routine belongs to one person's claude.ai account: it runs as that person and uses their usage, Jira and Slack identity. Each Routine here keeps its instructions in this folder and its stored prompt only points to them, so anyone on the team can review a change in a PR, and recreate the Routine under their own account if the owner leaves.

## Current Routines

| Routine                                     | Schedule                       | What it does                                                                                                     | Owner            | Status |
| ------------------------------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ---------------- | ------ |
| [Flaky test tracker](flaky-test-tracker.md) | Mondays 07:58 Europe/Warsaw    | Finds flaky tests in `PR Checks`, files Bugs under AR-58393, fixes clear cases, posts to Slack                   | `@iromanchuk-dn` | on     |
| [Weekly release](weekly-release.md)         | Wednesdays 08:57 Europe/Warsaw | Merges the Release PR, waits for npm publish, posts the announcement and the DAP bump request                    | `@iromanchuk-dn` | on     |
| [Request triage](request-triage.md)         | Hourly 08–19 Israel, Sun–Fri   | Triages DS Bug tickets, asks reporters for missing info, opens fix and feature PRs and follows them until merged | `@iromanchuk-dn` | on     |

Status mirrors each instructions file's [Routine switch](#routine-switch).

## Routine switch

Every instructions file starts with YAML front matter holding its switch:

```yaml
---
enabled: true
---
```

The stored prompt reads it before following any instructions. Anything other than exactly `enabled: true` (`false`, a typo, a missing line) means off: the run ends at once without running, posting or changing anything.

To pause a Routine, anyone on the team opens a PR that sets `enabled: false` and updates its Status above. `docs/agents/routines/` has no code owners, so any teammate with write access can approve it. Runs read the default branch, so the pause applies from the next run once merged; a run already in progress finishes. Set it back to `true` the same way.

Every stored prompt starts with this check, with the Routine's file path filled in (the missing-file line comes first, so a deleted file is reported instead of skipped silently):

```text
Read docs/agents/routines/<file>.md from the repository's default branch.

If that file does not exist, post one message to the Slack channel #design-system-ai-notifications saying "<Routine name>: instructions file docs/agents/routines/<file>.md not found on the default branch, nothing was run", and stop.

If its YAML front matter does not contain exactly `enabled: true`, end the session immediately: do not run anything, post anything or change anything.
```

Not a Routine: dependency updates. Dependabot already covers them (`.github/dependabot.yml`), see the decision on [AR-100283](https://drivenets.atlassian.net/browse/AR-100283).

## Flaky test tracker

| Field         | Value                                                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Name          | `Flaky test tracker (design-system)`                                                                                                 |
| Trigger ID    | `trig_01M5SrYsBEiQzf3oShPPK5hX` (owner's account)                                                                                    |
| Schedule      | `CRON_TZ=Europe/Warsaw 58 7 * * 1`                                                                                                   |
| Environment   | `design-system`                                                                                                                      |
| Repository    | `drivenets/design-system`, default branch                                                                                            |
| Session       | A new session on every run                                                                                                           |
| Connectors    | Atlassian (Jira), Slack. GitHub access comes from the Claude GitHub App.                                                             |
| Notifications | Push and Slack to the owner when a run finishes                                                                                      |
| Instructions  | [flaky-test-tracker.md](flaky-test-tracker.md)                                                                                       |
| Output        | Jira Bugs under [AR-58393](https://drivenets.atlassian.net/browse/AR-58393), `claude/flaky-*` PRs, `#design-system-ai-notifications` |

Stored prompt:

```text
Run the weekly flaky test tracker for the drivenets/design-system repository.

Read docs/agents/routines/flaky-test-tracker.md from the repository's default branch.

If that file does not exist, post one message to the Slack channel #design-system-ai-notifications saying "Flaky test tracker: instructions file docs/agents/routines/flaky-test-tracker.md not found on the default branch, nothing was run", and stop.

If its YAML front matter does not contain exactly `enabled: true`, end the session immediately: do not run anything, post anything or change anything.

Otherwise follow the file exactly. It is the source of truth for what to scan, how to confirm, where to file Jira Bugs, when to open fix PRs, and what to post to Slack.
```

## Weekly release

| Field         | Value                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| Name          | `Weekly release (design-system)`                                                                          |
| Trigger ID    | `trig_01X45TtWapwQbXRTMM88H1rj` (owner's account)                                                         |
| Schedule      | `CRON_TZ=Europe/Warsaw 57 8 * * 3`                                                                        |
| Environment   | `design-system`                                                                                           |
| Repository    | `drivenets/design-system`, default branch                                                                 |
| Session       | A new session on every run                                                                                |
| Connectors    | Slack. GitHub access comes from the Claude GitHub App.                                                    |
| Notifications | Push and Slack to the owner when a run finishes                                                           |
| Instructions  | [weekly-release.md](weekly-release.md)                                                                    |
| Output        | Merged Release PR, npm packages, `#dap-ask-design-system` announcement, `#design-system-ai-notifications` |

Stored prompt:

```text
Run the weekly Design System release for the drivenets/design-system repository.

Read docs/agents/routines/weekly-release.md from the repository's default branch.

If that file does not exist, post one message to the Slack channel #design-system-ai-notifications saying "Weekly release: instructions file docs/agents/routines/weekly-release.md not found on the default branch, nothing was run", and stop.

If its YAML front matter does not contain exactly `enabled: true`, end the session immediately: do not run anything, post anything or change anything.

Otherwise follow the file exactly. It is the source of truth for when to skip, how to release, what to post to Slack and what to report.
```

## Request triage

| Field         | Value                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Name          | `Request triage (design-system)`                                                                                       |
| Trigger ID    | `trig_01KF3kEy9z9exh4Mmnk6u7PP` (owner's account)                                                                      |
| Schedule      | `CRON_TZ=Asia/Jerusalem 0 8-19 * * 0-5`                                                                                |
| Model         | Opus 5.5 (`claude-opus-5-5`): in shadow tests Sonnet stopped after writing a failing test, Opus finished the fix       |
| Environment   | `design-system`                                                                                                        |
| Repository    | `drivenets/design-system`, default branch                                                                              |
| Session       | A new session on every run                                                                                             |
| Connectors    | Atlassian (Jira), Figma, Slack. Remove every other connector. GitHub access comes from the Claude GitHub App.          |
| Notifications | Off (it runs hourly). Auto-fix on PR create: on                                                                        |
| Instructions  | [request-triage.md](request-triage.md)                                                                                 |
| Output        | Comments and `ds-bot*` labels on DS Bug tickets, `claude/ar-*` PRs labeled `ds-bot`, `#design-system-ai-notifications` |

Stored prompt:

```text
Run the hourly request triage for the drivenets/design-system repository.

Read docs/agents/routines/request-triage.md from the repository's default branch.

If that file does not exist, post one message to the Slack channel #design-system-ai-notifications saying "Request triage: instructions file docs/agents/routines/request-triage.md not found on the default branch, nothing was run", and stop.

If its YAML front matter does not contain exactly `enabled: true`, end the session immediately: do not run anything, post anything or change anything.

Otherwise follow the file exactly. It is the source of truth for which Jira tickets to pick up, what to ask reporters, what to implement and how to open PRs. Its Mode setting decides whether you may write anything.
```

Extra setup for this Routine: the owner needs a Figma Dev or Full seat in the Drivenets Figma org (a View seat allows only a few MCP calls a month), and the `ds-bot` label must exist in the GitHub repo (`gh label create ds-bot -R drivenets/design-system --description "Opened by the Request triage Routine"`). To test changes, set the Mode to `shadow` in a PR and use **Run now**: it processes only the shadow tickets and writes nothing.

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
5. Update the Owner and Trigger ID in this file in a PR. Tickets the Routine files are assigned to its owner automatically, so nothing else changes.

The previous owner (or an org admin) should pause or delete their copy, so the Routine doesn't run twice.

## Changing a Routine

- **What it does:** edit its instructions file in a PR. The next run reads the default branch, so the change applies once merged.
- **Schedule, name or connectors:** the owner edits the Routine at claude.ai/code → Routines, then updates the table here.
- **Pause:** anyone flips its [Routine switch](#routine-switch) in a PR. The owner can also toggle it off in the Routines list; note that here if it's longer than a week, since the repo switch won't show it.

## Limits

- A run is an unattended Claude session: it only does what the instructions allow, and everything it creates is a PR or a ticket for people to review. It never merges, except the Weekly release Routine, which approves and merges only the Release PR, and only when every required check is green.
- Runs use the owner's usage limits.
- Visual tests (`storybook-visual`) run in the cloud environment: its hook starts Docker, see [cloud-environment.md](../cloud-environment.md#storybook-and-visual-checks).
