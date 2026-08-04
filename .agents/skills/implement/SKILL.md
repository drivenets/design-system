---
name: implement
description: Drive a markdown ticket file to a tested, checker-clean implementation. Orchestrates plan, build, test, and verify using existing skills and subagents. Assumes the ticket is already grilled/clear. Use when the user points to a .md ticket, spec, or issue file and says implement, build, or ship it.
---

# Implement (ticket → tested code)

Orchestrator only — read each linked skill **fully** before the step that uses it. Delegate heavy work to subagents to keep this context clean.

## Input

A markdown file acting as the ticket/spec (path given by the user, e.g. `tasks/AR-12345.md`). If no file is given, ask for the path — do not invent requirements.

## Step 0 — Parse the ticket

Read the file and extract:

- **Goal** — one or two sentences.
- **Acceptance criteria** — the checkable behaviors. If absent, list what you infer and confirm with the user before building.
- **Scope / out-of-scope** — paths, components, packages to touch.
- **Design source** — Figma URL? → route through [figma-to-component](../figma-to-component/SKILL.md).

Restate the goal + criteria back to the user in one short block before proceeding.

## Step 1 — Plan (skip only if trivial)

The ticket is assumed already grilled — decisions are locked in the file. **Do not grill the user.** If the ticket is genuinely ambiguous or self-contradictory, stop and surface it rather than inventing requirements.

- Ticket already has **Steps** + **Skills per step** (authored by [to-plan](../to-plan/SKILL.md)) → use them as-is, skip planning.
- Loose ticket (human/Jira), non-trivial → run [to-plan](../to-plan/SKILL.md) to add the execution structure.
- Trivial (1–2 obvious steps, no architectural choice) → skip planning.

Track the plan steps with the todo tool so nothing is dropped.

## Step 2 — Build

Choose the path from the ticket:

| Ticket is about                       | Delegate to                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------------- |
| New / extended `ds-*` component       | `ds-component-builder` subagent (wraps [component-scaffold](../component-scaffold/SKILL.md)) |
| Figma design → component              | [figma-to-component](../figma-to-component/SKILL.md) → `ds-component-builder`                |
| Logic / util / plugin (non-component) | [tdd](../tdd/SKILL.md) here, red-green-refactor                                              |
| Bug fix                               | [diagnose](../diagnose/SKILL.md) → [tdd](../tdd/SKILL.md) regression test                    |

Prefer test-first ([tdd](../tdd/SKILL.md)) for anything with behavior. One vertical slice at a time.

## Step 3 — Test

Behavioral coverage lives in `*.browser.test.tsx`. Delegate to the `ds-browser-test-writer` subagent (wraps [browser-tests](../browser-tests/SKILL.md)) when the ticket adds interaction. Every acceptance criterion from Step 0 must map to at least one assertion — no render-only smoke tests.

## Step 4 — Verify (do not skip)

1. `ds-verifier` subagent (readonly) — lint, typecheck, tests on **changed paths only** per [AGENTS.md#code-quality-checkers](../../../AGENTS.md#code-quality-checkers). Never mark done while red.
2. `ds-review` subagent (readonly) — reviews the branch diff for rule violations the checkers can't catch (forwardRef, cross-component imports, hardcoded colors, AI test slop, stale Code Connect). Returns ≤10 findings.

Fix findings from both, then re-run. Do not proceed while either is red.

## Step 5 — Wrap

- [pr-prep](../pr-prep/SKILL.md) — full pre-submission checklist + changeset.
- Report: files changed, acceptance criteria → test mapping, checker results. Leave changes uncommitted (per repo branch rules) unless the user asks to commit.

## Done when

- [ ] Every acceptance criterion is covered by a passing test
- [ ] `ds-verifier` is green on changed paths
- [ ] `ds-review` findings are resolved (or consciously deferred)
- [ ] `pr-prep` checklist passes (or gaps are reported)
