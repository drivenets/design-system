---
name: component-api
description: Design public props for ds-* components in *.types.ts files. Use when editing ds-*.types.ts, Ds*Props interfaces, variant as const arrays, locale prop, onXChange callbacks, or changing component public API.
user-invocable: false
---

# Component API Skill

Conventions for `packages/design-system/src/components/**/ds-*.types.ts`.

## Requirements

| Requirement                           | Details                                                                |
| ------------------------------------- | ---------------------------------------------------------------------- |
| **Own props layer**                   | Don't expose all underlying library props                              |
| **Generic ref types**                 | `Ref<HTMLElement>` when it makes sense                                 |
| **Standard props**                    | Always support `className`, `style`, `ref`                             |
| **slotProps pattern**                 | MUI-style sub-component customization                                  |
| **Callback naming**                   | Prefer `onXChange`                                                     |
| **`null` for empty callback values**  | `(value: string \| null) => void` — not `undefined` for cleared values |
| **Single deprecation comment**        | In types file only                                                     |
| **Value props first, callbacks last** | Config → slot/render → callbacks                                       |
| **`locale` prop**                     | When component has hardcoded user-facing text                          |
| **Domain-agnostic naming**            | No product-specific terms in names or props                            |
| **No use-case-specific props**        | No `layout="form"` — keep API composable                               |

## Types file checklist

- Export variant arrays as `as const` + derived union type (Storybook `argTypes.options`).
- `Ds{Name}Props` interface in dedicated `.types.ts`.
- Prop JSDoc: document non-obvious behavior, units, or constraints; skip `ref`, `className`, and `style`. Don't restate the prop name or TypeScript type. See [ts-standards](../ts-standards/SKILL.md) for `@default` and export style.
- Don't `extends` Ark/library root props → [ark-ui](../ark-ui/SKILL.md).
- **Keep Figma Code Connect in sync.** If the component has a sibling `*.figma.ts` (Code Connect), update its mapping (`getEnum(...)` values, `example` JSX) whenever you change variant arrays, prop names, or defaults. `pnpm figma:lint` only checks the file parses — it will **not** catch a mapping that has silently drifted from the current API. Validate parse after editing: `pnpm --filter @drivenets/design-system figma:lint` (see [AGENTS.md](../../../AGENTS.md#figma-code-connect-parse)).

```typescript
// Good
interface DsSelectProps {
  value?: string | null;
  onValueChange?: (value: string | null) => void;
  ref?: Ref<HTMLElement>;
  className?: string;
}

// Bad — undefined for empty value
interface DsSelectProps {
  value?: string;
  onValueChange?: (value: string | undefined) => void;
}

// Bad — exposes library internals
interface DsToggleProps extends SwitchRootProps {}
```

## Related

- Ark primitives: [ark-ui](../ark-ui/SKILL.md)
- TS/JSDoc: [ts-standards](../ts-standards/SKILL.md)
- Implementation: [react-patterns](../react-patterns/SKILL.md)
- Scaffold: [component-scaffold](../component-scaffold/SKILL.md)
- Figma Code Connect: [figma-to-component](../figma-to-component/SKILL.md)
