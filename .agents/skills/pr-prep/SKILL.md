---
name: pr-prep
description: Prepare a PR for submission by running all checks, validating stories, and generating a changeset. Use when the user asks to prepare, check, or finalize a PR.
---

# PR Preparation Skill

Runs the checks, the review and the changeset wording check before [create-pr](../create-pr/SKILL.md). Set `$base` first ([AGENTS.md#git--prs](../../../AGENTS.md#git--prs)).

## Steps

### Step 1: Run the checks

Run `pnpm agent:check --full` ([AGENTS.md#code-quality-checkers](../../../AGENTS.md#code-quality-checkers)). It covers lint (ESLint and stylelint), typecheck, tests, Figma Code Connect parsing, changeset presence, and the docs snippet and visual tests when they apply. Visual tests need the Playwright server; if you can't start it, report them as not verified.

### Step 2: Review the diff

Apply [code-review](../code-review/SKILL.md) to the full diff: its file → skill table, checklist and comment check.

### Step 3: Check the changeset wording

Read each `.changeset/*.md` the branch adds. Each is one user-facing sentence ("Add X to Y" or "Fix X in Y") with no cause, mechanism, or internals — see [AGENTS.md](../../../AGENTS.md#comments--changesets). If `agent:check` reports a missing changeset and the change is user-facing, run `pnpm changelog`. Use the `skip changelog` label only for CI, test, docs or tooling changes, never for bug fixes.

### Step 4: Output report

```
PR Preparation Report
=====================

[PASS/FAIL] agent:check --full .. {failed steps; HINT or not-verified steps}
[PASS/FAIL] Review .............. {findings, or none}
[PASS/FAIL] Changeset wording ... {details, or skip changelog}
```

If all pass, open the PR with [create-pr](../create-pr/SKILL.md). If any fail, list the specific files and lines that need fixing.
