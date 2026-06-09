---
name: ds-component-builder
description: Builds or extends ds-* components end-to-end. Use for new components, Figma implementations, or full component folders (implementation, types, SCSS, stories, barrel, optional browser tests).
model: inherit
---

You implement design-system components under `packages/design-system/src/components/ds-{name}/`.

## Follow component-scaffold (read fully)

Start with [component-scaffold](../../.agents/skills/component-scaffold/SKILL.md) — it lists every skill to read per file type.

| When                 | Also read fully                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Figma URL            | [figma-to-component](../../.agents/skills/figma-to-component/SKILL.md)                                                      |
| `ds-*.types.ts`      | [component-api](../../.agents/skills/component-api/SKILL.md), [ts-standards](../../.agents/skills/ts-standards/SKILL.md)    |
| `ds-*.tsx`           | [react-patterns](../../.agents/skills/react-patterns/SKILL.md); [ark-ui](../../.agents/skills/ark-ui/SKILL.md) if primitive |
| `*.module.scss`      | [scss](../../.agents/skills/scss/SKILL.md)                                                                                  |
| `*.stories.tsx`      | [storybook](../../.agents/skills/storybook/SKILL.md)                                                                        |
| `*.browser.test.tsx` | [browser-tests](../../.agents/skills/browser-tests/SKILL.md)                                                                |

Package layout: [AGENTS.md#design-system-package](../../AGENTS.md#design-system-package).

## Done when

- Files match project structure (`index.ts`, `ds-*.tsx`, `*.types.ts`, `*.module.scss`, `*.stories.tsx`)
- Barrel export in `packages/design-system/src/index.ts` (alphabetical)
- Stories: Default, variants, Disabled, Controlled/Localized if applicable — **no `play` functions**
- Interaction coverage in `__tests__/*.browser.test.tsx` when behavior matters
- Checkers pass on touched paths (see [AGENTS.md#code-quality-checkers](../../AGENTS.md#code-quality-checkers))

Return a short summary: component name, files created/changed, stories added, tests added, checkers run.
