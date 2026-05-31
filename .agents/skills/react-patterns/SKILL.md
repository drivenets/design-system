---
name: react-patterns
description: React patterns for design-system TSX including ds-* components, subcomponents, *.stories.tsx, and __tests__/*.browser.test.tsx. Use when editing hooks, useState, useEffect, ref prop, memoization, controlled state, or event handlers in @drivenets/design-system.
---

# React Patterns Skill

Applies to `packages/design-system/**/*.tsx` (components, stories, browser tests, icons).

## Memoization

| Requirement                                | Details                                                                  |
| ------------------------------------------ | ------------------------------------------------------------------------ |
| **No unnecessary `useMemo`/`useCallback`** | React Compiler handles most cases                                        |
| **Justify memoization**                    | Only when profiling shows real benefit                                   |
| **`ds-table/` exception**                  | Excluded from React Compiler (TanStack Table/Virtual) — allow to memoize |

```typescript
// Bad
const filteredItems = useMemo(() => items.filter((i) => i.active), [items]);
const handleClick = useCallback(() => onChange(value), [onChange, value]);

// Good
const filteredItems = items.filter((i) => i.active);
const handleClick = () => onChange(value);
```

## State management

| Requirement                               | Details                                             |
| ----------------------------------------- | --------------------------------------------------- |
| **Derived state over redundant state**    | Don't sync with `useEffect`                         |
| **No prop-to-state sync via `useEffect`** | Use derived values or key remounting                |
| **Controlled vs uncontrolled**            | Single API delegating to external or internal state |

```typescript
// Bad
const [local, setLocal] = useState(prop);
useEffect(() => setLocal(prop), [prop]);

// Good — use the shared hook in components
const [value, setValue] = useControlled(valueProp, onValueChange, defaultValue);
```

`useControlled` lives in `packages/design-system/src/utils/use-controlled.ts`. Controlled wrappers in tests/stories: see [browser-tests](../browser-tests/SKILL.md) and [storybook](../storybook/SKILL.md) — inline `useState` is fine there.

## Hooks

| Requirement                                  | Details                                      |
| -------------------------------------------- | -------------------------------------------- |
| **`useLayoutEffect` only for DOM reads**     | Or ref updates other hooks read before paint |
| **`useId` for SVG IDs**                      | clipPath, gradient, filter                   |
| **Extract complex hook logic**               | Small named pure functions                   |
| **`{ passive: true }` for scroll listeners** | scroll, wheel, touchmove                     |

## React 19

| Requirement         | Details                      |
| ------------------- | ---------------------------- |
| **No `forwardRef`** | Pass `ref` as a regular prop |

```tsx
const DsButton = ({ ref, ...props }: DsButtonProps) => <button ref={ref} {...props} />;
```

## Common pitfalls

| Requirement                           | Details                                      |
| ------------------------------------- | -------------------------------------------- |
| **Don't spread native objects**       | `{...file}` loses `File` prototype           |
| **Event propagation**                 | Stop propagation in nested clickable content |
| **Validate, don't silently fallback** | Reject bad input values                      |

## Related

- Stories: [storybook](../storybook/SKILL.md)
- Browser tests: [browser-tests](../browser-tests/SKILL.md)
- Ark wrappers: [ark-ui](../ark-ui/SKILL.md)
- Props: [component-api](../component-api/SKILL.md)
