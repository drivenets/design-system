# Agent skills in this repo

All project skills live in **`.agents/skills/`**. Convention guidance is skill-only; package import boundaries are `.cursor/rules/monorepo.mdc`.

**Skill list:** both tools list skills by their `SKILL.md` `description`; there is no hand-kept catalog. File → skill routing: [AGENTS.md#design-system-package](../../AGENTS.md#design-system-package).

**Glossary vs how-to:** domain terms in [CONTEXT.md](../../CONTEXT.md); implementation steps in skills; irreversible choices in [docs/adr/](../adr/).

## Layers

| Layer               | Path                              | Role                                   |
| ------------------- | --------------------------------- | -------------------------------------- |
| **Glossary**        | `CONTEXT.md`                      | Design-system vocabulary               |
| **ADRs**            | `docs/adr/`                       | Load-bearing decisions                 |
| **Always-on rules** | `AGENTS.md`                       | Checkers, routing, cross-cutting rules |
| **Skill bodies**    | `.agents/skills/*/SKILL.md`       | Read fully when invoked                |
| **Package context** | `AGENTS.md#design-system-package` | File → skill map for ds-\*             |

## Typical flows

Two user-invoked orchestrators are the entry points — reach for these first; each expands into the chains below.

- **`/implement <ticket.md>`** — ticket → plan → build → test → verify. Assumes the ticket is already grilled/clear (it does **not** grill).
- **`/fix`** — small bug or adjustment on existing code; regression test → minimal fix → verify. No ticket, no plan gate.

**Feature (what `implement` runs):** before screenshots → `to-plan` (skip if trivial) → `component-scaffold` / `figma-to-component` → `tdd` + `storybook` + `browser-tests` + `docs-tests` → `ds-verifier` + `ds-review` → `pr-prep` + `code-review` → `create-pr`

**Bug (what `fix` runs):** before screenshot → reproduce (escalate to `diagnose` only if the cause is unclear) → `tdd` regression → `ds-verifier` → patch changeset → `create-pr`

**Planning (deliberate — not model-auto-invoked):** run `grill-me` → `to-plan` yourself to turn a loose idea into a clear ticket, _then_ hand it to `implement`. `grill-with-docs` when the decision touches `CONTEXT.md` or ADRs.

**Architecture (on demand):** `improve-codebase-architecture`

## Avoid

- Hand-kept skill catalogs — descriptions in `SKILL.md` are the list
- Putting checker commands in rules — use `AGENTS.md` only

## Subagents

Cursor subagents: [subagents.md](subagents.md) — `.cursor/agents/ds-*.md`. Index in [AGENTS.md](../../AGENTS.md#subagents).

## Agents

Cursor discovers `.agents/skills/` and `.cursor/agents/`. Domain docs: [domain.md](domain.md).
