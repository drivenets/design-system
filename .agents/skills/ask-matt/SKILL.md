---
name: ask-matt
description: Ask which skill or flow fits your situation. A router over the skills in this repo.
disable-model-invocation: true
---

# Ask Matt

You don't remember every skill, so ask. This is the **flow** view — how the skills chain from idea to shipped component. The file-type → skill map (which reference to read when editing a given file) lives in [AGENTS.md](../../../AGENTS.md#project-skills).

## Main flow: idea → ship

The route most component work travels.

1. **Sharpen** — **`/grill-me`** interviews you relentlessly, one question at a time, until every branch of the decision tree is resolved. Switch to **`/grill-with-docs`** when the work touches domain language or irreversible architecture: it challenges against `CONTEXT.md` + ADRs and updates them inline.
2. **Plan** — **`/to-plan`** packages the locked decisions into a short execution plan for the build session. No re-interview, no scope invention — only what was decided.
3. **Build** — scaffold with **`/component-scaffold`** (or **`/figma-to-component`** from a Figma URL), then build test-first with **`/tdd`**, stories with **`/storybook`**, behavior with **`/browser-tests`**, docs coverage with **`/docs-tests`**. Editing a specific file pulls its reference: `/component-api`, `/react-patterns`, `/ark-ui`, `/scss`, `/ts-standards`.
4. **Ship** — **`/pr-prep`** runs the checks + changeset; **`/code-review`** does the two-axis (Standards + Spec) review of the diff before you push.

## On-ramps

A starting situation that generates work, then merges onto the main flow.

- **Something's broken** → **`/diagnose`**: reproduce → minimize → hypothesize → instrument → fix, refusing to theorize until a **tight feedback loop** goes red on _this_ bug. Lock it down with a **`/tdd`** regression test.
- **Old Storybook `play` tests** → **`/migrate-story-tests`** converts them to **`/browser-tests`**.

## Codebase health

Not feature work — upkeep.

- **`/improve-codebase-architecture`** — surface **deepening opportunities** against `CONTEXT.md`; picking one feeds an idea back into the main flow at `/grill-me`. It's the survey that finds candidates; **`/codebase-design`** is the bench you design the chosen module on.

## Vocabulary underneath

Model-invoked references — reach for them when the **words**, not the process, are the problem; or let the skills above pull them in.

- **`/domain-modeling`** — sharpen the project's _domain_ language: resolve an overloaded term, record a hard-to-reverse decision as an ADR. The discipline `/grill-with-docs` drives to keep `CONTEXT.md` a clean glossary.
- **`/codebase-design`** — deep-module vocabulary (module, interface, depth, seam, leverage, locality) for designing a module's _shape_: a lot of behavior behind a small interface at a clean seam.

## Crossing sessions

- **`/handoff`** — compact the conversation into a markdown file so a **fresh session** can pick up. Forks the context; reference the file from the new thread.
- **`/compact`** (built-in) — stay in the **same conversation**, summarizing earlier turns. Use at phase breaks, not mid-phase. `/handoff` forks; `/compact` continues.

## Standalone

Off the main flow entirely.

- **`/research`** — a **background agent** investigates a question against **primary sources** and leaves a cited Markdown file in the repo. Keep working while it reads.
- **`/teach`** — learn a concept over multiple sessions, using the workspace as stateful scratch.
- **`/get-pr-comments`** — fetch and summarize the active PR's review comments.
- **`/deslop`** — strip AI-generated slop and fix style on a diff.
- **`/write-a-skill`** — author a new skill in `.agents/skills/`.
