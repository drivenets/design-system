# Hotfix release

Publish a patch for an older version line, e.g. `0.18.2` while `main` is on `0.23.x`, for a consumer that can't upgrade yet. The fix lands on `main` first; the hotfix only backports it.

Unlike [SKILL.md](SKILL.md), nothing here is pre-authorized: confirm each merge with the user.

## How it works

- A **release branch** `release/X.Y.x` is cut from the `@drivenets/design-system@X.Y.Z` tag.
- On a push to `release/X.Y.x`, GitHub runs the `release.yml` stored on that branch (not `main`'s). It opens the release PR from `changeset-release/release/X.Y.x` and, once that merges, publishes under the `release-X.Y` npm dist-tag. `latest` stays on the newest `main` release.
- PRs into `release/**` need a changeset and accept **patch** bumps only: a minor bump would collide with a version already released from `main`. CI enforces this only on lines cut after hotfix support was added; on older lines, check it by hand.

## Steps

1. **Create the release branch** (skip if `release/X.Y.x` already exists). Needs `maintain` on the repo and a `gh` token with the `workflow` scope that is SSO-authorized for `drivenets`:

   ```bash
   gh api repos/drivenets/design-system/git/refs -f ref=refs/heads/release/X.Y.x \
     -f sha=$(git rev-list -n1 '@drivenets/design-system@X.Y.Z')
   ```

2. **Backport branch.** Branch from `release/X.Y.x`, cherry-pick the fix's squash commit from `main`, and run `pnpm install --frozen-lockfile` (the old line has its own lockfile and Playwright version).
   - Keep the source fix as is. Files that don't exist on the old line (newer tests, `*.docs.snap`) are dropped; add only the tests for the fix.
   - Add a **patch** changeset.

3. **Enable releases on an old tag.** Tags cut before hotfix support was added have a `release.yml` that only runs on `main`. Merging into such a branch publishes nothing — or, with only the trigger added, publishes as `latest`. Add both to that branch's `release.yml` in a separate `ci:` commit:
   - `release/**` under `on.push.branches`
   - `--tag release-X.Y` on the `changeset publish` command (older workflows pass it as `publish:`)

   Example: [#792](https://github.com/drivenets/design-system/pull/792) for `0.18.x`.

4. **Open the PR** into `release/X.Y.x` and merge it once CI passes.

5. **Release PR.** The `Release` run opens `chore(release): publish` against `release/X.Y.x`. Check it bumps only the expected package to `X.Y.(Z+1)`, then merge it.

6. **Verify.** The run creates the `@drivenets/design-system@X.Y.(Z+1)` tag and GitHub Release. npm can take a few minutes to show the version:

   ```bash
   npm view @drivenets/design-system dist-tags
   ```

   Expect `latest` unchanged and `release-X.Y` on the new version. Consumers pin the exact version.

Never merge `release/X.Y.x` into `main`: its workflow and versions belong to the old line.

## Troubleshooting

| Symptom                                                         | Action                                                                                                                                                                |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gh api … git/refs` returns `HTTP 404`                          | Token lacks the `workflow` scope (the new branch adds workflow files). User runs `gh auth refresh -h github.com -s workflow`                                          |
| `HTTP 403` "Resource protected by organization SAML"            | Token isn't SSO-authorized. User opens the link in the response's `X-GitHub-SSO` header, or runs `gh auth login -h github.com -s workflow` and authorizes `drivenets` |
| No `Release` run after merging into `release/X.Y.x`             | The branch's `release.yml` has no `release/**` trigger — see step 3                                                                                                   |
| `Release` fails at **Resolve publish arguments**                | The branch name isn't `release/X.Y.x` (e.g. `release/0.18` or `release/foo`). Nothing was opened or published; recreate the branch with the right name                |
| `Publish` job fails with an npm OIDC / trusted publishing error | Nothing was published. An npm package admin checks the trusted publisher settings                                                                                     |
| `Patch Only On Release Branches` check fails                    | The changeset is `minor` or `major`; change it to `patch`                                                                                                             |
