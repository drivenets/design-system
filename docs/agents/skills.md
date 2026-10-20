# Agent skills in this repo

All project skills live in **`.agents/skills/`**. Convention guidance is skill-only; package import boundaries are in [AGENTS.md#other-packages](../../AGENTS.md#other-packages).

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

Which skill to reach for, and how they chain: run **`/ask-matt`** (source: [ask-matt](../../.agents/skills/ask-matt/SKILL.md)). Entry points: **`/implement <ticket.md>`** for ticket work, **`/fix`** for a small bug or adjustment.

## Avoid

- Hand-kept skill catalogs — descriptions in `SKILL.md` are the list
- Putting checker commands in rules — use `AGENTS.md` only

## Subagents

Cursor subagents: [subagents.md](subagents.md) — `.cursor/agents/ds-*.md`. Index in [AGENTS.md](../../AGENTS.md#subagents).

## Agents

Cursor discovers `.agents/skills/` and `.cursor/agents/`. Domain docs: [domain.md](domain.md).
