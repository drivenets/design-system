---
name: to-plan
description: After grill-me (or equivalent resolved decisions), produce a concise execution plan for the next agent session. No interviews, no issue tracker, no requirement expansion.
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
3. Emit one markdown artifact using the template below (in chat, or a file if the user asks)

<plan-template>

## Goal

One or two sentences.

## Decisions

Bullet list from grill-me — locked, no debate.

## Out of scope

What was explicitly excluded.

## Touch

Paths and packages (concrete).

## Steps

Ordered checkboxes — implementation sequence only.

## Skills per step

Which skills to read fully per step (e.g. `component-scaffold`, `tdd`, `browser-tests`).

## Verify

Checkers from [AGENTS.md#code-quality-checkers](../../AGENTS.md#code-quality-checkers) (and [Other packages](../../AGENTS.md#other-packages) when applicable).

</plan-template>

When done, the user or next agent can start implementation (typically `tdd` + design-system skills).
