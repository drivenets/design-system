# Flaky test tracker

Instructions for the weekly **Flaky test tracker** Routine ([AR-100283](https://drivenets.atlassian.net/browse/AR-100283)). The Routine's stored prompt only points here, so edit this file (in a PR) to change what it does. Setup, owner and handover: [README.md](README.md).

The Routine finds tests that fail and then pass without a code change, confirms them, files a Jira Bug for each one, fixes the clear cases in a PR, and posts a weekly summary to Slack.

## Settings

| Setting               | Value                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Repository            | `drivenets/design-system`                                                                                          |
| Workflow              | `PR Checks` (`.github/workflows/pr.yml`)                                                                           |
| Test jobs             | `Test`, `Storybook Docs Tests`, `Visual Tests`, `Build` (its `Run Tests With Build` step)                          |
| JUnit artifacts       | `junit-<job id>-attempt-<n>` (`junit-test`, `junit-docs-tests`, `junit-visual-tests`, `junit-build`), kept 14 days |
| Look-back window      | 7 days                                                                                                             |
| Jira                  | Project `AR`, issue type **Bug**, parent epic [AR-58393](https://drivenets.atlassian.net/browse/AR-58393)          |
| Jira component, label | `Design System`, `flaky-test`                                                                                      |
| Slack                 | `#design-system-ai-notifications`                                                                                  |
| Limits per run        | Confirm at most 5 candidates, open at most 2 fix PRs                                                               |

## 1. Collect candidates

List the `PR Checks` runs (`pr.yml`) completed in the last 7 days. Ignore cancelled runs and jobs that failed before any test ran (checkout, install, runner lost).

A test is a **candidate** when either holds:

- **Re-run signal (strong).** On the same commit (`head_sha`), a test job failed on one attempt and passed on a later one. Runs with `run_attempt > 1` are where to look; list their jobs with the `all` filter to see every attempt.
- **Cross-PR signal (weaker).** The same test failed on 2 or more PRs whose diffs don't touch that test file or the component it covers.

Not a candidate: a failure on a PR that changed the test or the component it tests, unless the same commit later passed without changes.

For each failed test job, get the failing test names:

1. Download the job's JUnit artifact for that attempt (`download_workflow_run_artifact`) and read the `<testcase>` elements with a `<failure>`. `classname` is the test file path relative to the package; `name` is `describe > test`.
2. If the artifact is missing or the download is blocked by the environment's network policy, read the job log instead (`get_job_logs`, failed jobs only) and take the Vitest `FAIL` lines and `::error file=…` annotations.

Write down for each candidate: package, test file, test name, Vitest project (`unit`, `browser`, `storybook`, `storybook-docs`, `storybook-visual`, `requires-build`), and every occurrence (PR, run URL, attempt, error message).

## 2. Skip what is already tracked

Search Jira before doing anything else for a candidate:

```
project = AR AND parent = AR-58393 AND labels = flaky-test AND statusCategory != Done AND text ~ "<test file name>"
```

If an open ticket exists, add one comment with the new occurrences (run links, dates) and don't confirm or open anything new for it. Also skip candidates with an open PR in this repo that already fixes them.

## 3. Confirm

Rank the remaining candidates (re-run signal first, then occurrence count) and confirm the top 5 in this cloud session. Run only the one test, 30 times:

```bash
pnpm --filter @drivenets/design-system exec vitest run <test file> --project=<project> -t "<test name>" --repeats=29
```

Then run the whole file 3 more times as separate commands, since some flakes only show up with a fresh browser or test order.

Use the package's own filter for tests outside design-system. `storybook-visual` tests need a Docker daemon, which the cloud environment doesn't run, so skip confirming them and file them as **not reproduced**.

Result per candidate:

- **Confirmed:** failed at least once locally. Record the failure rate (for example 3/33) and the error.
- **Not reproduced:** passed every time locally. Still file it if CI shows the re-run signal, or the cross-PR signal 3 or more times; otherwise only list it in the summary as "watching".

## 4. File a Jira Bug

One Bug per confirmed or filed test:

| Field       | Value                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| Summary     | `DAP \| Design System \| Flaky test: <ComponentName> – <short test name>`                                |
| Issue type  | Bug                                                                                                      |
| Parent      | AR-58393                                                                                                 |
| Component   | Design System                                                                                            |
| Labels      | `flaky-test`                                                                                             |
| Description | Test file and name, project, CI occurrences with run links, local result, error message, suspected cause |

Add a line saying it was filed by the flaky test tracker Routine and link this file.

## 5. Fix the clear cases

Open a fix PR (at most 2 per run) only when the cause is plainly in the test itself: a missing `await`, an assertion that doesn't wait (`expect` instead of `expect.element`/`vi.waitFor`), a fixed timeout, shared state between tests, a dependency on test order. Follow [`browser-tests`](../../../.agents/skills/browser-tests/SKILL.md) and the checkers in [AGENTS.md](../../../AGENTS.md#code-quality-checkers).

- Branch `claude/flaky-<jira key>`, commit `test(<package>): fix flaky <short test name> [<jira key>]`.
- Before pushing, run the same 30 repeats plus 3 file runs: all must pass.
- PR body: the ticket link, the cause, failure rate before and after. Add the `skip changelog` label (test-only change). CODEOWNERS requests the reviewers.
- Comment the PR link on the Jira ticket.

When the cause is in the component (a real race or timing bug), don't touch the test: describe the suspected cause in the ticket, which then goes through normal bug triage. When the cause is unclear, the ticket is the outcome.

## 6. Post the summary

Always post one message to `#design-system-ai-notifications`, even when nothing was found:

```
*Flaky test tracker* – week of <date>
Scanned <N> PR Checks runs (<M> re-runs) from the last 7 days.

New flaky tests: <count>
• <test> (<project>) – <failure rate or "not reproduced, CI only"> – <Jira link> [– fix PR <link>]
Already tracked, seen again: <list with Jira links, or "none">
Watching (seen once, not reproduced): <list or "none">
```

If the run couldn't finish (a tool or connector failed), post what it did and what failed instead.

## Never

- Skip, disable, quarantine or delete a test, or add `retry` / longer timeouts to make it pass.
- Open more than 2 PRs or file a duplicate ticket.
- Re-run CI jobs, push to branches other than `claude/flaky-*`, or merge anything.
- Change these instructions or the Routine itself from a run.
