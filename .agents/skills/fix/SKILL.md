---
name: fix
description: Fast path for a small bug or adjustment in the design system — regression test, minimal fix, verify. Lightweight sibling to implement (no ticket, no plan gate). Use when the user reports a bug, says something is off/broken, or asks for a small tweak to an existing component.
---

# Fix (small bug / adjustment)

The fast path for small changes to **existing** code. No ticket file, no plan gate, no grilling. One vertical slice: pin the bug, fix it, prove it stays fixed.

For net-new features or ticket-driven work, use [implement](../implement/SKILL.md) instead. For pure style/cleanup with no behavior change, use [deslop](../deslop/SKILL.md).

## Step 0 — Restate

One line: expected vs actual (bug) or before vs after (adjustment). Name the component/file. If you can't state it crisply, ask — don't guess.

## Step 1 — Reproduce

- Behavior bug with an unclear cause → escalate to [diagnose](../diagnose/SKILL.md) (reproduce → minimize → hypothesize → instrument), then come back.
- Obvious repro (visual off-by, wrong prop default, clear logic slip) → skip `diagnose`, go straight to Step 2.

## Step 2 — Regression test first (do not skip)

Write ONE failing test that pins the bug via the public interface ([tdd](../tdd/SKILL.md), [browser-tests](../browser-tests/SKILL.md) for interaction). It must fail for the right reason **before** you touch the fix. A fix without a test that would have caught the bug is not done.

Exception: pure style-only adjustment with no behavioral contract (e.g. a token/spacing tweak) — a `*.browser.test.tsx` may not apply; say so explicitly and rely on Step 4 + visual check instead.

## Step 3 — Minimal fix

Smallest change that turns the test green. No refactoring past the bug, no drive-by "while I'm here" edits (open a separate `fix` for those). Root cause, not a patch over the symptom.

## Step 4 — Verify (do not skip)

`ds-verifier` subagent (readonly) — lint, typecheck, tests on **changed paths only** per [AGENTS.md#code-quality-checkers](../../../AGENTS.md#code-quality-checkers). Never mark done while red.

## Step 5 — Wrap

- Changeset: patch-level, user-facing wording ("Fix X in Ds{Name}"). Remind the user to run `pnpm changelog` if none exists.
- Leave changes uncommitted (per repo branch rules) unless the user asks to commit.
- Report: bug → test → fix in one block, plus checker results.

## Done when

- [ ] A test fails before the fix and passes after (or style-only exception stated)
- [ ] Fix is minimal and addresses root cause
- [ ] `ds-verifier` is green on changed paths
- [ ] Patch changeset added (or gap reported)
