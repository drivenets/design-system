---
name: component-scaffold
description: Scaffold a new ds-* component (files, barrel export, validation). Use when the user asks to create, scaffold, or add a new component.
user-invocable: false
disable-model-invocation: true
---

# Component Scaffold Skill

Orchestrator only — read linked skills **fully** before each step.

## Input

Component name → kebab-case files, PascalCase identifiers.

- Prefix: `ds-{name}` · Component: `Ds{Name}`
- Dir: `packages/design-system/src/components/ds-{name}/`

## File manifest

```
ds-{name}/
├── index.ts
├── ds-{name}.types.ts
├── ds-{name}.tsx
├── ds-{name}.module.scss
├── ds-{name}.stories.tsx
└── __tests__/ds-{name}.browser.test.tsx   # when behavior matters
```

Copy structure from `ds-button` or `ds-checkbox` when unsure.

## Read order (mandatory)

| Step | Action                          | Read fully                                                                                                                   |
| ---- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 1    | Ark vs custom                   | [ark-ui](../ark-ui/SKILL.md)                                                                                                 |
| 2    | Create empty files per manifest | —                                                                                                                            |
| 3    | `ds-{name}.types.ts`            | [component-api](../component-api/SKILL.md), [ts-standards](../ts-standards/SKILL.md)                                         |
| 4    | `ds-{name}.tsx`                 | [react-patterns](../react-patterns/SKILL.md); [ark-ui](../ark-ui/SKILL.md) if primitive                                      |
| 4b   | `displayName` on export         | `Ds{Name}.displayName = 'Ds{Name}'` (each compound member: `Ds{Name}.Sub.displayName = 'Ds{Name}.Sub'`)                      |
| 5    | `ds-{name}.module.scss`         | [scss](../scss/SKILL.md)                                                                                                     |
| 6    | `ds-{name}.stories.tsx`         | [storybook](../storybook/SKILL.md) — import from `./index` when barrel/HOC exists; `meta.component` = public export          |
| 7    | `__tests__/*.browser.test.tsx`  | [browser-tests](../browser-tests/SKILL.md) — skip if presentational only                                                     |
| 8    | Barrel                          | `index.ts` exports; add `export * from './components/ds-{name}'` to `packages/design-system/src/index.ts` (**alphabetical**) |
| 9    | Validate                        | [AGENTS.md#code-quality-checkers](../../../AGENTS.md#code-quality-checkers) on touched paths                                 |

## `index.ts`

When the public export is a plain re-export:

```typescript
export { default as Ds{Name} } from './ds-{name}';
export type { Ds{Name}Props } from './ds-{name}.types';
```

When wrapped with `withResponsiveProps` (or similar HOC):

```typescript
import { withResponsiveProps } from '../../utils/responsive';
import Ds{Name}Base from './ds-{name}';

export const Ds{Name} = withResponsiveProps(Ds{Name}Base, ['size']);

Ds{Name}.displayName = 'Ds{Name}';

export type { Ds{Name}Props } from './ds-{name}.types';
```

Set `displayName` on the component in `ds-{name}.tsx` (or `index.ts` if wrapped). Stories must import from `./index` when a barrel/HOC is the public API.
