---
name: figma-to-component
description: Create a design system component from a Figma URL. Extracts design tokens, maps to CSS custom properties, and scaffolds the component. Use when the user provides a Figma link and asks to implement it.
---

# Figma-to-Component Skill

Bridge a Figma design to a fully scaffolded design system component.

## Input

The user provides a Figma URL in the format:
`https://figma.com/design/:fileKey/:fileName?node-id=:int1-:int2`

Extract:

- `fileKey` from the URL path
- `nodeId` from the `node-id` query parameter (replace `-` with `:`)

## Steps

### Step 1: Gather design context

Run these Figma MCP calls in parallel:

1. **`get_screenshot`** with `fileKey` and `nodeId` -- visual reference of the component.
2. **`get_design_context`** with `fileKey` and `nodeId`, `clientFrameworks: "react"`, `clientLanguages: "typescript,css"` -- generated code and design tokens.
3. **`get_variable_defs`** with `fileKey` and `nodeId` -- color, spacing, and typography variables used.

### Step 2: Map Figma tokens to CSS custom properties

Read `packages/design-system/src/styles/_root.scss` to find existing design tokens.

Map Figma variables to existing CSS custom properties:

- Colors: Figma color variables -> `--color-*` tokens
- Spacing: Figma spacing values -> `--spacing-*` tokens
- Typography: Figma font styles -> `--font-size-*` tokens
- Border radius: Figma radius values -> `--radius-*` tokens

If a Figma token has no matching CSS custom property, flag it and ask the user whether to add it to `_root.scss` or use a component-scoped variable.

### Step 3: Determine component name

Derive the component name from the Figma node name. Normalize to:

- File prefix: `ds-{name}` (kebab-case)
- Component name: `Ds{Name}` (PascalCase)

Confirm the name with the user before proceeding.

### Step 4: Scaffold using component-scaffold skill

Follow the **component-scaffold** skill steps exactly, but pre-fill:

- **SCSS file**: Use the mapped CSS custom properties from Step 2 instead of placeholders. Apply the layout, spacing, colors, and typography from the Figma design context.
- **Types file**: Derive props from the Figma design (variants, sizes, states visible in the design).
- **Component file**: If the Figma component maps to an Ark UI primitive (check via `list_components`), use it as the base.
- **Stories file**: Create stories for each variant/state visible in the Figma design.

### Step 5: Link via Code Connect (optional)

After the component is created and validated, offer to link it to Figma:

```
Call `add_code_connect_map` with:
- fileKey and nodeId from the original URL
- source: relative path to the component file (e.g., "packages/design-system/src/components/ds-{name}/ds-{name}.tsx")
- componentName: "Ds{Name}"
- label: "React"
```

This makes the component code visible in Figma's Dev Mode for designers.

### Step 6: Validate

Run from the workspace root:

```bash
pnpm format
pnpm eslint packages/design-system/src/components/ds-{name}/
pnpm --filter @drivenets/design-system typecheck
```

Fix any errors before finishing.
