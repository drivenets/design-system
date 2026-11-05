---
enabled: true
---

<!-- cspell:ignore JRKXGB GMMS -->

# Weekly release

Instructions for the **Weekly release** Routine ([AR-100283](https://drivenets.atlassian.net/browse/AR-100283)). The Routine's stored prompt only points here, so edit this file (in a PR) to change what it does. Anyone can pause it by setting `enabled: false` above, see [Routine switch](README.md#routine-switch). Setup, owner and handover: [README.md](README.md).

The Routine releases the Design System packages every Wednesday morning without a human step: it merges the **Release PR** once its required checks pass, waits for npm publish, posts the announcement and asks for the DAP bump. It is the one Routine allowed to merge, and only the Release PR.

## Settings

| Setting      | Value                                                                       |
| ------------ | --------------------------------------------------------------------------- |
| Repository   | `drivenets/design-system`                                                   |
| Schedule     | `CRON_TZ=Europe/Warsaw 57 8 * * 3` (Wednesdays 08:57 Warsaw)                |
| Skill        | [`release`](../../../.agents/skills/release/SKILL.md)                       |
| Announcement | `#dap-ask-design-system` (`C08T4JRKXGB`)                                    |
| Status       | `#design-system-ai-notifications`                                           |
| Owner        | `@iromanchuk-dn` (Slack `U0ABK9GMMS8`), tagged when a publish fails         |
| Restarts     | At most 2 restarts from close and reopen when the release PR's head changes |

## Run

Nobody watches this session: never ask a question or wait for an answer. Follow the [`release`](../../../.agents/skills/release/SKILL.md) skill, with these additions:

1. **Prerequisites.** Do every GitHub step with the session's GitHub MCP tools, as listed in [GitHub tools](#github-tools). Skip the GitHub CLI check in the skill's [SETUP.md](../../../.agents/skills/release/SETUP.md): in a cloud session `gh auth status` always fails and `gh pr` commands are blocked, so this is the normal path, not a fallback. Don't mention `gh` or its login in the session or the reports. Slack is required; without it, stop and say so in the session (there's nowhere to post).
2. **Nothing to release.** If no Release PR is open, or its body has no `## @drivenets/…@x.y.z` headings, post `Weekly release: nothing to release` to the status channel and stop.
3. **Head changed.** When the skill sends you back to close and reopen, do it at most 2 times in one run, then stop and report.
4. **Someone else acted.** If the Release PR gets merged or closed by someone else during the run, stop and report. Don't post the announcement.

## GitHub tools

Use these in place of the `gh` commands in the skill. Repository: owner `drivenets`, repo `design-system`.

| Skill step             | Tool calls                                                                                                                                                                                                     |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2. Find the release PR | `list_pull_requests` with `head: drivenets:changeset-release/main`, `state: open`; then `pull_request_read` `get` for the body and `head.sha`                                                                  |
| 3. Close and reopen    | `update_pull_request` with `state: closed`, then `state: open`                                                                                                                                                 |
| 4. Wait for checks     | `pull_request_read` `get_check_runs` and `get_status` on the head; repeat until every required check has finished. Wait with a background command between reads, since a foreground `sleep` is blocked         |
| 5. Approve and merge   | `pull_request_review_write` `create` with `event: APPROVE`; then `merge_pull_request` with `merge_method: squash` and `expectedHeadSha`                                                                        |
| 6. Wait for publish    | `pull_request_read` `get` for `merge_commit_sha`; `actions_list` `list_workflow_runs` on `release.yml`, the run whose `head_sha` matches; `actions_get` `get_workflow_run` until it completes; `list_releases` |

The MCP tools can't read which checks are required. Get the names with this read-only REST call, which works in cloud sessions:

```bash
gh api repos/drivenets/design-system/rules/branches/main \
  --jq '[.[] | select(.type == "required_status_checks") | .parameters.required_status_checks[].context]'
```

## Reports

Post exactly one message to `#design-system-ai-notifications` per run, unless the switch is off:

| Outcome                                   | Message                                                                                             |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Released                                  | `Weekly release: shipped <package@version, …>` and the announcement link                            |
| Nothing to release                        | `Weekly release: nothing to release`                                                                |
| A required check failed                   | Check name and URL. Don't merge or re-run anything                                                  |
| Head changed more than 2 times            | The PR link and that `main` kept moving                                                             |
| Approve or merge refused                  | The PR link, the error, and `A maintainer can finish it with /release`                              |
| PR merged or closed by someone else       | The PR link and who did it                                                                          |
| `Release` run failed after the merge      | `<@U0ABK9GMMS8>`, the run URL, and that the packages may not be on npm. Don't post the announcement |
| Another step failed (a tool or connector) | What the run did, what failed, and whether the Release PR got merged                                |

## Never

- Merge anything other than the Release PR, or merge it with a failing or pending required check.
- Re-run CI, push commits, or edit the Release PR.
- Post the release notes anywhere other than `#dap-ask-design-system`, or post the DAP bump request as a top-level message.
- Change these instructions or the Routine itself from a run.
