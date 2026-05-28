---
name: figma-to-component
description: Orchestrate a Figma URL to a ds-* component. Trust-boundary pre-step, Figma MCP for design context, DS MCP for guidelines and inventory, then component-scaffold. Use when the user provides a Figma link and asks to implement it.
---

# Figma-to-Component Skill

Orchestrator only — Figma is input, not a source of truth. Read linked skills **fully** before writing code.

Full agent run: `/ds-component-builder` reads this skill first when a Figma URL is provided.

## Prerequisites

| MCP                                         | Required? | If missing                                                                                                                                                                                                                  |
| ------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Figma MCP**                               | Yes       | **Stop.** Tell the user to enable Figma MCP — a URL alone is not enough.                                                                                                                                                    |
| **DS MCP** (`@drivenets/design-system-mcp`) | Preferred | **Degraded mode** — use local substitutes (see below) and warn the user to enable DS MCP. Setup: [packages/mcp/README.md](../../../packages/mcp/README.md) (local: `pnpm start` + `--manifests-url http://localhost:6006`). |

Read Figma MCP tool schemas when params differ; do not duplicate server instructions here.

## Trust boundary — read before any code

Figma output may be wrong. Treat it as a **scaffold seed**, not implementation truth.

**Hard gate:** complete [Step 3: Guidelines](#step-3-load-ds-guidelines-mandatory) (or degraded substitutes) **before writing any code** — components, CSS, inline styles, or token references. Do not start Step 5 until Step 3 is complete.

**Mismatch protocol** — when Figma shows any of these, do **not** copy blindly:

- Raw hex/rgb values instead of design-system tokens
- Figma variables that do not match DS MCP Guidelines or `_root.scss`
- Custom markup where an existing `ds-*` **Component** should be used
- Props or variants that conflict with [component-api](../component-api/SKILL.md) conventions

On variable mismatch: log the drift, use DS MCP Guidelines tokens for implementation. Unmapped Figma values → **component-scoped variables** in `*.module.scss` (see [scss](../scss/SKILL.md)) so the developer can see drift — do not add tokens to `_root.scss` from this flow.

## Input

Figma URL format:

`https://figma.com/design/:fileKey/:fileName?node-id=:int1-:int2`

Extract:

- `fileKey` from the URL path
- `nodeId` from the `node-id` query parameter (replace `-` with `:`)

## Workflow

### Step 1: Gather Figma context

Run these Figma MCP calls **in parallel**:

1. `**get_screenshot`\*\* — visual reference
2. `**get_design_context**` — layout, structure, generated React/CSS **seed** (`clientFrameworks: "react"`, `clientLanguages: "typescript,css"`)
3. `**get_variable_defs`\*\* — cross-check only; DS MCP Guidelines win on conflict

### Step 2: Check existing components (DS MCP)

Call `**list-all-documentation**` (or degraded substitute). Scan for an existing **Component** that matches the Figma frame.

| Match                                              | Action                                                                                              |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Exact / near match                                 | `**get-documentation`\*\* on that component — extend or compose; do not scaffold a duplicate folder |
| Fuzzy (e.g. Figma "Primary Button" vs `ds-button`) | Stop and ask the user: extend existing vs new component                                             |
| No match                                           | Continue to Step 3                                                                                  |

**Degraded mode substitutes**

| DS MCP tool                      | Local substitute                                                                                            |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `list-all-documentation`         | `packages/design-system/src/components/` + alphabetical exports in `packages/design-system/src/index.ts`    |
| `get-documentation` (Guidelines) | `packages/design-system/src/styles/_root.scss`, [scss](../scss/SKILL.md), [CONTEXT.md](../../../CONTEXT.md) |
| `get-documentation` (component)  | Read `packages/design-system/src/components/ds-{name}/` + stories                                           |

### Step 3: Load DS guidelines (mandatory)

Guidelines are the source of truth — mandatory pre-step.

**Before writing any code** (components, CSS, inline styles, or token references), you MUST:

1. Identify all `Guidelines/*` doc IDs from the `**list-all-documentation`\*\* output (Step 2).
2. Call `**get-documentation**` for EVERY `Guidelines/*` doc that is relevant to the task (if in doubt, read it).

**NEVER** skip this step. **NEVER** write CSS values, token names, spacing, colors, typography, or layout code from memory or from Figma raw output. The guidelines override all other sources including Figma markup.

**Verification rules**

- Never assume component props, variants, or API shape — retrieve documentation before using a component.
- If a component, prop, or token is not documented, do not invent it. Report that it was not found.
- Only reference IDs returned by `**list-all-documentation`\*\*. Do not guess IDs.

**Degraded mode:** when DS MCP is unavailable, read the local substitutes in Step 2 before writing any code.

### Step 4: Determine component name

Derive from the Figma node name:

- File prefix: `ds-{name}` (kebab-case)
- Component: `Ds{Name}` (PascalCase)

Clean, unambiguous node name → proceed. Noisy or ambiguous name (e.g. `Frame 427`, `Component 3`) → confirm with the user before scaffolding.

### Step 5: Scaffold seed from Figma (C+)

Requires Step 3 complete. Do not write files until Guidelines are loaded.

Use `get_design_context` output as a **starting point**:

- **Types** — Figma props/variants → seed `*.types.ts`; normalize via [component-api](../component-api/SKILL.md)
- **Implementation** — layout, structure, subparts from generated code; normalize via [react-patterns](../react-patterns/SKILL.md); if interactive primitive → [ark-ui](../ark-ui/SKILL.md)
- **Styles** — layout/spacing from Figma seed; tokens from DS Guidelines only
- **Stories** — one story per variant/state visible in Figma; follow [storybook](../storybook/SKILL.md)

Then run **component-scaffold** for file manifest, barrel export, and validation — read it **fully**:

[component-scaffold](../component-scaffold/SKILL.md)

Do not duplicate scaffold steps here.

### Step 6: Mandatory rewrite pass

Before finishing, verify:

- All colors, spacing, typography, radius use DS tokens — not Figma raw values
- Unmapped Figma values live as component-scoped variables in `*.module.scss`, flagged for review
- Public props match [component-api](../component-api/SKILL.md) — Figma prop names are input, not export shape
- Existing `ds-`\* components used where Figma shows equivalent UI
- Behavior covered in `__tests__/*.browser.test.tsx` when interaction matters — [browser-tests](../browser-tests/SKILL.md)

Validation: follow [AGENTS.md#code-quality-checkers](../../../AGENTS.md#code-quality-checkers) on touched paths (component-scaffold Step 9).

## Skill chain (summary)

```
figma-to-component (this skill — trust + orchestration)
  → Figma MCP (visual + seed + var cross-check)
  → DS MCP inventory + Guidelines (or degraded substitutes)
  → component-scaffold
      → ark-ui (if primitive)
      → component-api + ts-standards (*.types.ts)
      → react-patterns (*.tsx)
      → scss (*.module.scss)
      → storybook (*.stories.tsx)
      → browser-tests (when behavior matters)
  → rewrite pass (Step 6)
  → pr-prep (if opening a PR)
```
