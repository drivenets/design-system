---
name: pr-prep
description: Prepare a PR for submission by running all checks, validating stories, and generating a changeset. Use when the user asks to prepare, check, or finalize a PR.
---

# PR Preparation Skill

Automate the pre-submission checklist from `code-review.mdc`.

## Steps

### Step 1: Identify changed files

```bash
git diff origin/main --name-only
```

Categorize files by type:

- `*.tsx` / `*.ts` -- TypeScript source files
- `*.stories.tsx` -- Story files
- `*.module.scss` -- Style files
- `*.test.ts` / `*.test.tsx` -- Test files
- `*.browser.test.tsx` -- Vitest browser tests (live next to components under `__tests__/`)
- `.changeset/*.md` -- Changeset files

### Step 2: Run checkers on changed files only

Run these in parallel where possible:

**Lint** (on each changed TS/TSX/SCSS file):

```bash
pnpm eslint <file1> <file2> ...
```

**Typecheck** (per affected package):

```bash
pnpm --filter @drivenets/design-system typecheck
```

**Tests** (if test files or source files with matching tests changed):

```bash
pnpm --filter @drivenets/design-system test <test-file> --run
```

For new components or substantial interaction/behavior changes, confirm an updated `*.browser.test.tsx` exists under the component’s `__tests__/` when appropriate.

### Step 3: Review changed files against project rules

For each changed file, apply the relevant cursor rules (`scss.mdc`, `react-patterns.mdc`, `storybook.mdc`, `standards.mdc`). Flag violations found in the diff.

### Step 4: Check changeset

```bash
ls .changeset/*.md 2>/dev/null | grep -v README
```

- If no changeset file exists and this PR has user-facing changes, prompt the user to run `pnpm changelog`.
- If a changeset exists, read it and verify the message is user-facing ("Add X to Y" or "Fix X in Y"), not implementation details.
- Remind: use `skip changelog` label only for CI/test/docs changes, never for bug fixes.

### Step 5: Output report

Present a pass/fail checklist:

```
PR Preparation Report
=====================

[PASS/FAIL] Lint .................. {details}
[PASS/FAIL] Typecheck ............. {details}
[PASS/FAIL] Tests ................. {details}
[PASS/FAIL] Rule violations ....... {details}
[PASS/FAIL] Changeset ............. {details}

{N}/5 checks passed.
```

If all pass, the PR is ready for submission. If any fail, list the specific files and lines that need fixing.
