---
name: pr-prep
description: Prepare a PR for submission by running all checks, validating stories, and generating a changeset. Use when the user asks to prepare, check, or finalize a PR.
---

# PR Preparation Skill

Automate the pre-submission checklist from `standards.mdc`.

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

### Step 3: Validate story files

For every `.stories.tsx` in the diff:

1. Check that every exported story has a `play` function. Search for `export const` declarations and verify each has `play:` or `play :`.
2. Check that callback args use `fn()` not inline functions.
3. Check for inline `style=` attributes -- should use `*.stories.module.scss` instead.

### Step 4: Validate SCSS files

For every `.module.scss` in the diff:

1. Search for `!important` -- flag any occurrence.
2. Search for hardcoded colors (hex values like `#xxx`) -- flag any not in a comment.
3. Search for `:global` -- flag any occurrence.

### Step 5: Validate TypeScript files

For every `.tsx` / `.ts` in the diff:

1. Check for cross-component imports (importing from `../ds-other-component/`) -- flag as violation. Only allow main components imports, not utilities or subcomponents.
2. Check for `forwardRef` usage -- flag as deprecated.
3. Check for `vi.useFakeTimers` in story files -- should use `mockdate`.

### Step 6: Check changeset

```bash
ls .changeset/*.md 2>/dev/null | grep -v README
```

- If no changeset file exists and this PR has user-facing changes, prompt the user to run `pnpm changelog`.
- If a changeset exists, read it and verify the message is user-facing ("Add X to Y" or "Fix X in Y"), not implementation details.
- Remind: use `skip changelog` label only for CI/test/docs changes, never for bug fixes.

### Step 7: Output report

Present a pass/fail checklist:

```
PR Preparation Report
=====================

[PASS/FAIL] Lint .................. {details}
[PASS/FAIL] Typecheck ............. {details}
[PASS/FAIL] Tests ................. {details}
[PASS/FAIL] Stories have play ..... {details}
[PASS/FAIL] No !important ........ {details}
[PASS/FAIL] No hardcoded colors .. {details}
[PASS/FAIL] No :global ........... {details}
[PASS/FAIL] No cross-component ... {details}
[PASS/FAIL] No forwardRef ........ {details}
[PASS/FAIL] Changeset ............ {details}

{N}/10 checks passed.
```

If all pass, the PR is ready for submission. If any fail, list the specific files and lines that need fixing.
