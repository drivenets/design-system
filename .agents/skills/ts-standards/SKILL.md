---
name: ts-standards
description: TypeScript conventions across the monorepo. Use when editing .ts or .tsx in any package, prop JSDoc in *.types.ts, as const variant arrays, Object.freeze config exports, or shared utils.
---

# TypeScript Standards Skill

Applies to `packages/**/*.ts` and `packages/**/*.tsx` (design-system, eslint-plugin, vite-plugin, commitlint, etc.).

## Types and exports

| Requirement                        | Details                                                                                      |
| ---------------------------------- | -------------------------------------------------------------------------------------------- |
| **No redundant JSDoc**             | Don't restate name or type; skip `@interface` / `@type`                                      |
| **Prop JSDoc on ds-\* APIs**       | [component-api](../component-api/SKILL.md) — `@default` in `*.types.ts` when helpful         |
| **Full type references**           | Import named types                                                                           |
| **Export from `.types.ts`**        | Dedicated type files for components                                                          |
| **Export variant arrays**          | `as const` for Storybook `argTypes.options` — see [component-api](../component-api/SKILL.md) |
| **`Object.freeze` config exports** | Prevent mutation on mapping objects                                                          |

```typescript
export const loaderVariants = ['spinner', 'pulsing'] as const;
export type LoaderVariant = (typeof loaderVariants)[number];

export const circleSizeMap: Record<AvatarSize, number> = Object.freeze({
  small: 24,
  medium: 32,
  large: 48,
});
```

## Code organization

| Requirement                    | Details                           |
| ------------------------------ | --------------------------------- |
| **Let code breathe**           | Whitespace between logical chunks |
| **Name magic numbers**         | Descriptive constants             |
| **Early returns**              | Simplify conditionals             |
| **No cross-component imports** | Extract shared logic to utils     |

## Related

- Component props API: [component-api](../component-api/SKILL.md)
- React TSX: [react-patterns](../react-patterns/SKILL.md)
