---
name: ark-ui
description: Check Ark UI primitives via MCP and integrate them in ds-* components without duplicating internal state. Use before building a custom component, wrapping Ark primitives, or when the user mentions Ark UI MCP.
---

# Ark UI Skill

Before custom code, check if Ark UI already provides a primitive.

## MCP workflow

1. `list_components` with `framework: "react"`.
2. If a match exists:
   - `get_component_props` — `framework: "react"`, component name.
   - `get_example` — `framework: "react"`, component name, `exampleId: "basic"`.
   - `styling_guide` — component name (data attributes for SCSS).
3. If no match — build custom.

## What to extract from Ark API

| Topic           | Action                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| Props to expose | Subset only — own props layer ([component-api](../component-api/SKILL.md)); never `extends ArkRootProps` |
| Internal state  | Ark owns it — no mirroring with `useState`                                                               |
| Callbacks       | Wrap and forward to own props; do not replace Ark handlers                                               |
| Styling         | `data-*` attrs from styling guide → [scss](../scss/SKILL.md)                                             |

## Implementation patterns

| Requirement                        | Details                                         |
| ---------------------------------- | ----------------------------------------------- |
| Don't duplicate Ark internal state | Inputs, selects, comboboxes, etc.               |
| Don't override Ark callbacks       | Hook `onInputValueChange`-style APIs to forward |

```typescript
// Bad
const [inputValue, setInputValue] = useState('');
<Combobox.Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

// Good
<Combobox.Root onInputValueChange={({ inputValue }) => onInputChange?.(inputValue)}>
  <Combobox.Input />
</Combobox.Root>
```

## Related

- Public API on `*.types.ts`: [component-api](../component-api/SKILL.md)
- SCSS state selectors: [scss](../scss/SKILL.md)
- Figma workflow: [figma-to-component](../figma-to-component/SKILL.md)
- New component flow: [component-scaffold](../component-scaffold/SKILL.md)
