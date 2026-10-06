---
name: release
description: Run the Design System package release end-to-end — find the "chore(release): publish" PR, close and reopen it to trigger CI, approve and merge once checks pass, wait for npm publish, then post the release-summary announcement to Slack. Use when the user asks to release, publish, ship, or cut a release of the design-system packages, or to merge the release PR.
---

<!-- cspell:ignore JRKXGB -->

# Release

Repo: `drivenets/design-system` (pass `-R drivenets/design-system` to every `gh` call — `origin` may be a fork). Slack channel: `#dap-ask-design-system` (`C08T4JRKXGB`) — the only channel to post to.

Invoking this skill authorizes steps 1–6, including approving the PR as the user and merging it. The only prompt is the release-notes review in step 7.

## Workflow

Copy this checklist and tick it off as you go:

```
- [ ] 1. Prerequisites
- [ ] 2. Find the release PR
- [ ] 3. Close and reopen
- [ ] 4. Wait for required checks
- [ ] 5. Approve and merge
- [ ] 6. Wait for publish
- [ ] 7. Compose, review and post the announcement
```

1. **Prerequisites.** Run the checks in [SETUP.md](SETUP.md). If GitHub fails, stop and walk the user through its fix. If only Slack fails, tell the user and continue — step 7 falls back to returning the text for manual posting.

2. **Find the release PR.** Changesets opens it from `changeset-release/main`, authored by `github-actions`:

   ```bash
   gh pr list -R drivenets/design-system --head changeset-release/main --state open --json number,title,url,headRefOid
   ```

   None open → nothing to release, stop. Read the packages and versions it will publish from the `## @drivenets/...@x.y.z` headings in `gh pr view <n> -R drivenets/design-system --json body -q .body`, and tell the user which PR and versions you are releasing.

3. **Close and reopen** — required so CI runs with the right permissions:

   ```bash
   gh pr close <n> -R drivenets/design-system
   gh pr reopen <n> -R drivenets/design-system
   ```

4. **Wait for required checks.** Long-running (10–20 min) — run it in the background if your harness supports that, and re-run it if it times out:

   ```bash
   gh pr checks <n> -R drivenets/design-system --required --watch --fail-fast
   ```

   - Any check fails → stop, report the failing check and its URL. Do not merge or re-run.
   - `headRefOid` changed (Changesets re-pushes when `main` moves) → go back to step 3.

5. **Approve and merge.** `main` requires one approval, and a push dismisses it, so approve as the user only now:

   ```bash
   gh pr review <n> -R drivenets/design-system --approve
   gh pr merge <n> -R drivenets/design-system --squash --match-head-commit <headRefOid>
   ```

   Skip the approve if `reviewDecision` is already `APPROVED`. Squash is the only allowed method. If merge reports the branch is behind `main` or approval is rejected, see [Troubleshooting](SETUP.md#troubleshooting).

6. **Wait for publish.** The merge triggers the `Release` workflow, which publishes to npm and creates the GitHub Releases:

   ```bash
   gh pr view <n> -R drivenets/design-system --json mergeCommit -q .mergeCommit.oid
   gh run list -R drivenets/design-system --workflow release.yml --commit <oid> --json databaseId,status -q '.[0]'
   gh run watch <run-id> -R drivenets/design-system --exit-status
   ```

   The run can take a few seconds to appear — retry `gh run list` until it does. If it fails, stop and report the run URL. Then confirm `gh release list -R drivenets/design-system --limit 10` shows a tag for every version from step 2.

7. **Compose, review and post.** Follow [release-summary](../release-summary/SKILL.md) for the versions from step 2. Show the message and ask the user to check it covers the changes they expect — this is the one confirmation. Apply any edits they ask for, then send it unchanged to `C08T4JRKXGB` with the Slack MCP send-message tool and return the message link. Without Slack, return the text in a fenced block for manual posting.

## Done when

- [ ] Release PR is merged and the `Release` run succeeded
- [ ] A GitHub Release exists for every package version in the PR
- [ ] Announcement is posted (link returned) or handed to the user to post
