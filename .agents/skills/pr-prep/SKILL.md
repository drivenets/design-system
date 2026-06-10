---
name: pr-prep
description: Prepare a PR for submission by running all checks, validating stories, and generating a changeset. Use when the user asks to prepare, check, or finalize a PR.
---

# PR Preparation Skill

Automate the pre-submission checklist from the `code-review` skill.

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

Use [AGENTS.md#code-quality-checkers](../../../AGENTS.md#code-quality-checkers) — lint changed paths, typecheck affected packages, run matching tests with `--run`. For [Other packages](../../../AGENTS.md#other-packages), use that section’s filter commands when the diff is not design-system-only.

For new components or substantial interaction/behavior changes, confirm an updated `*.browser.test.tsx` exists under the component's `__tests__/` when appropriate.

### Step 3: Review changed files against project rules

Read the matching skill(s) from the [code-review file → skill table](../code-review/SKILL.md#code-review-process) for paths in the diff. Flag violations found in the diff.

### Step 4: Validate SCSS files

For every `.module.scss` in the diff:

1. Search for `!important` -- flag any occurrence.
2. Search for hardcoded colors (hex values like `#xxx`) -- flag any not in a comment.
3. Search for `:global` -- flag any occurrence.
4. Search for `overflow: hidden` or `overflow: auto` -- flag for manual review (may be masking a layout bug).
5. Search for `-webkit-` prefixed properties -- flag any without a standard CSS fallback or `@supports` guard (e.g., `-webkit-scrollbar` without `scrollbar-width: none`).

### Step 5: Validate TypeScript files

For every `.tsx` / `.ts` in the diff:

1. Check for cross-component imports (importing from `../ds-other-component/`) -- flag as violation. Only allow main components imports, not utilities or subcomponents.
2. Check for `forwardRef` usage -- flag as deprecated.
3. Check for raw `<img` tags in component `.tsx` files (not stories) -- should use `DsAvatar` or an equivalent DS a component with fallback.
4. In `.stories.tsx` and `.browser.test.tsx` files, check for AI-generated test smell: assertions that only check `toBeTruthy()` / `toBeInTheDocument()` without testing behavior unique to that scenario -- flag as likely useless AI-generated test.

Date/time in stories and browser tests: follow [storybook](../storybook/SKILL.md) and [browser-tests](../browser-tests/SKILL.md)

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
[PASS/FAIL] Rule violations ....... {details}
[PASS/FAIL] No !important ........ {details}
[PASS/FAIL] No hardcoded colors .. {details}
[PASS/FAIL] No :global ........... {details}
[PASS/FAIL] No cross-component ... {details}
[PASS/FAIL] No forwardRef ........ {details}
[PASS/FAIL] No overflow:hidden ... {details}
[PASS/FAIL] No raw <img> ........ {details}
[PASS/FAIL] No webkit-only ..... {details}
[PASS/FAIL] No AI test slop .... {details}
[PASS/FAIL] Changeset ............ {details}

{N}/14 checks passed.
```

If all pass, the PR is ready for submission. If any fail, list the specific files and lines that need fixing.
