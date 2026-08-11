---
name: to-plan
description: After grill-me (or equivalent resolved decisions), write a concise execution plan to a tasks/*.md ticket file that /implement can consume. No interviews, no issue tracker, no requirement expansion.
---

Package locked decisions from the conversation into a short execution plan. **Do not plan for the user** — only record what was already decided.

## Prerequisite

Grill-me (or equivalent) is finished: every branch resolved. If open questions remain, stop and tell the user to resume grilling.

## Do not

- Interview the user or ask for approval on scope
- Invent requirements, user stories, or alternatives
- Sketch modules for sign-off or propose architecture not already agreed
- Publish to an issue tracker or apply triage labels

## Do

1. Read the conversation for **locked decisions only**
2. Minimal codebase lookup — name real paths/packages to touch (not exploratory architecture)
3. **Write the plan to a file** — `tasks/<TICKET-or-kebab-slug>.md` (create `tasks/` if missing). This file is the ticket [`implement`](../implement/SKILL.md) consumes; chat-only output breaks that handoff. Use the template below.

<plan-template>

## Goal

One or two sentences.

## Acceptance criteria

Checkable behaviors, one per line — the contract `implement` maps each to a test. Phrase as observable outcomes ("clicking the trigger opens the panel"), not implementation steps.

## Decisions

Bullet list from grill-me — locked, no debate.

## Out of scope

What was explicitly excluded.

## Design source

Figma URL(s) if any, else omit.

## Touch

Paths and packages (concrete).

## Steps

Ordered checkboxes — implementation sequence only.

## Skills per step

Which skills to read fully per step (e.g. `component-scaffold`, `tdd`, `browser-tests`).

## Verify

Checkers from [AGENTS.md#code-quality-checkers](../../AGENTS.md#code-quality-checkers) (and [Other packages](../../AGENTS.md#other-packages) when applicable).

</plan-template>

When done, hand off with **`/implement tasks/<file>.md`** — it parses Goal + Acceptance criteria + Design source + Touch directly from this file.
