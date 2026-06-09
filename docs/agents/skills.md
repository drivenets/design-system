# Agent skills in this repo

All project skills live in **`.agents/skills/`**. Convention guidance is skill-only; package import boundaries are `.cursor/rules/monorepo.mdc`.

**Full skill index:** [AGENTS.md#project-skills](../../AGENTS.md#project-skills) (always-on for agents).

**Glossary vs how-to:** domain terms in [CONTEXT.md](../../CONTEXT.md); implementation steps in skills; irreversible choices in [docs/adr/](../adr/).

## Layers

| Layer               | Path                              | Role                         |
| ------------------- | --------------------------------- | ---------------------------- |
| **Glossary**        | `CONTEXT.md`                      | Design-system vocabulary     |
| **ADRs**            | `docs/adr/`                       | Load-bearing decisions       |
| **Skill index**     | `AGENTS.md`                       | Checkers + catalog (bullets) |
| **Skill bodies**    | `.agents/skills/*/SKILL.md`       | Read fully when invoked      |
| **Package context** | `AGENTS.md#design-system-package` | File → skill map for ds-\*   |

## Typical flows

**Feature:** `grill-me` → `to-plan` → `component-scaffold` / `figma-to-component` → `tdd` + `storybook` + `browser-tests` → `pr-prep` + `code-review`

**Bug:** `diagnose` → `tdd` (regression) → checkers in `AGENTS.md`

**Domain / architecture (optional):** `grill-with-docs` when updating `CONTEXT.md` or ADRs; `improve-codebase-architecture` on demand

## Avoid

- Duplicating the skill catalog here — use `AGENTS.md` only
- Putting checker commands in rules — use `AGENTS.md` only

## Subagents

Cursor subagents: [subagents.md](subagents.md) — `.cursor/agents/ds-*.md`. Index bullets in [AGENTS.md](../../AGENTS.md#cursor-subagents-cursoragents).

## Agents

Cursor discovers `.agents/skills/` and `.cursor/agents/`. Domain docs: [domain.md](domain.md).
