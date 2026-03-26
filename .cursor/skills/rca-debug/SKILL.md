---
name: rca-debug
description: Structured root cause analysis for persistent bugs. Use when a bug resists simple fixes, when the user says "debug this", "RCA", or "this keeps failing".
---

# Root Cause Analysis Skill

For bugs that resist quick fixes. Do not patch symptoms -- find and fix the root cause.

## Steps

### Step 1: Reproduce

Create a minimal, reliable reproduction of the failure before attempting any fix.

1. State the **expected behavior** clearly.
2. Identify the **exact trigger** (input, sequence, timing) that causes the failure.
3. If possible, write a failing test (`*.browser.test.tsx` or unit test) that captures the bug.

Do not proceed to Step 2 until you can reproduce the failure on demand.

### Step 2: Hypothesize

Formulate a single, testable hypothesis about the cause.

Format: "Hypothesis: [specific claim about what is wrong and why]"

Example: "Hypothesis: The combobox input value resets because Ark's `onInputValueChange` fires after our `setValue` call, overwriting it with stale state."

### Step 3: Experiment

Design a non-destructive observation to prove or disprove the hypothesis.

- Add temporary logging, read state, inspect the call stack, check timing
- Do NOT apply a fix yet -- gather evidence first

State the result: "Confirmed" or "Disproven: [what the evidence actually showed]"

If disproven, return to Step 2 with a new hypothesis informed by the new evidence.

### Step 4: Fix

With a confirmed root cause, implement the minimal fix.

- Fix the cause, not the symptom
- If the root cause is in a shared component, check all consumers
- Follow project rules (`standards.mdc`, `react-patterns.mdc`, etc.)

### Step 5: Verify

1. Re-run the failing reproduction from Step 1 -- it must now pass.
2. Run related tests: `pnpm --filter <pkg> test <path> --run`
3. Lint and typecheck the affected package.

### Anti-patterns (forbidden)

- Applying a fix without a confirmed root cause
- Re-trying a previously failed fix without new evidence
- Patching a symptom (e.g. adding a null check) without understanding why the value is null
- Skipping reproduction and jumping straight to code changes
