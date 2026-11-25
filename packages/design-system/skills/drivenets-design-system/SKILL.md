---
name: drivenets-design-system
description: Build app UI with the DriveNets Design System (@drivenets/design-system) — pick the right Ds* component, look up its real props, and follow the Forms, Layouts, Colors and Typography guidelines. Use when writing, changing or reviewing React UI in an app that depends on @drivenets/design-system.
---

# DriveNets Design System

This skill ships inside `@drivenets/design-system`, so it matches the version the app has installed.

## 1. Look it up, never guess

Before you use a component, read its docs. Props, variants and compound parts change between versions.

**With the `drivenets-ds` MCP server** (`@drivenets/design-system-mcp`):

1. `docs-list` once per task. It returns every component and Guidelines entry with its ID.
2. `docs-show` with an ID from that list. It returns props, stories and code snippets.
3. `docs-show-story` for a story variant that `docs-show` did not include.

Only use IDs that `docs-list` returned. The MCP documents the latest design system, which can be ahead of the installed version. When the two disagree, the installed types win.

**Without the MCP**, read the installed sources:

- Props and JSDoc: `node_modules/@drivenets/design-system/src/components/ds-<name>/ds-<name>.types.ts`
- Every export: `node_modules/@drivenets/design-system/dist/index.d.ts`
- Humans can browse the Storybook at https://drivenets.github.io/design-system/

If a component, prop, variant or token is not documented, do not invent it. Say it was not found.

## 2. Read the Guidelines first

Before writing components, CSS or token references, read every Guidelines entry that touches the task (`docs-list` shows them under `Guidelines/`). If in doubt, read it.

| Guideline       | Read when                                                       |
| --------------- | --------------------------------------------------------------- |
| Forms           | Any form, field, validation or submit button                    |
| Layouts         | Arranging anything: pages, sections, field columns, action rows |
| Colors          | Any color in CSS, inline styles or a `color` prop               |
| Typography      | Any text styling                                                |
| Z-index         | Your own overlays, sticky headers or anything with `z-index`    |
| Token Migration | A Figma file or old code uses a token name you can't find       |

The Guidelines override Figma markup and your memory.

## 3. Rules

- **Ds\* components, not native controls or MUI.** No `<button>`, `<input>`, `<select>`, `<textarea>` or `<table>` when a Ds\* component exists, and no `@mui/*` imports.
- **Colors come from semantic tokens.** Use `var(--background-*)`, `var(--font-*)`, `var(--border-*)` and the other semantic tokens from Guidelines/Colors. Never hex, `rgb()` or primitive `--color-dap-*` tokens in app code.
- **Text uses `DsTypography` with a `variant`.** Raw typography tokens are only for SCSS where no variant fits.
- **Layout uses `DsStack` first, then `DsGrid` / `DsGridItem`** for two dimensions, `DsCard` to group, `DsDivider` to separate. No hand-rolled flex `div`s or percentage widths.
- **Forms use `react-hook-form` + `zod` + `DsFormControl`.** Bind every field with `Controller` (never `register`), put `DsFormControl` inside it, and don't gate submit on `isValid`. Guidelines/Forms has the full checklist.
- **Import from the package root:** `import { DsButtonV3 } from '@drivenets/design-system'`. Import `@drivenets/design-system/index.min.css` once at the app root.
- **No deprecated components or props.** Anything whose JSDoc says `@deprecated` is out, even if it still renders.

## 4. Which component

| You need                       | Use                                                                                                         |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| An action button               | `DsButtonV3` (`DsSplitButton` for a main action plus options)                                               |
| A labelled form field          | `DsFormControl` with `DsFormControl.TextInput`, `.Select`, `.Textarea`, `.NumberInput`, `.PasswordInput`, … |
| A standalone input             | `DsTextInput`, `DsNumberInput`, `DsPasswordInput`, `DsTextarea`                                             |
| Choose one from a list         | `DsSelect`; `DsAutocomplete` when the list needs search                                                     |
| Choose one of a few options    | `DsRadioGroup`, or `DsSegmentGroup` for a compact switcher                                                  |
| On/off                         | `DsToggle`; `DsCheckbox` / `DsCheckboxGroup` for selections                                                 |
| A number in a range            | `DsSlider`                                                                                                  |
| Dates and times                | `DsDatePicker`, `DsDateRangePicker`, `DsTimePicker`                                                         |
| File upload                    | `DsFileUpload`                                                                                              |
| Tabular data                   | `DsTable`; `DsFiltersBar` to filter it                                                                      |
| A dialog                       | `DsModal`                                                                                                   |
| A side sheet                   | `DsDrawer`                                                                                                  |
| Floating content on click      | `DsPopover` (compound: `.Root`, `.Trigger`, `.Panel`)                                                       |
| A hint on hover or focus       | `DsTooltip`                                                                                                 |
| A menu of actions              | `DsDropdownMenu`                                                                                            |
| An inline or page-wide message | `DsAlertBanner`                                                                                             |
| A transient notification       | `DsToastProvider` at the root, then `useToaster`                                                            |
| A status label                 | `DsStatusBadgeV2`                                                                                           |
| Tags and filter chips          | `DsTag`, `DsTagFilter`                                                                                      |
| Tabs                           | `DsTabs`, `DsVerticalTabs`                                                                                  |
| Steps in a flow                | `DsStepper`                                                                                                 |
| Nothing to show                | `DsEmptyState`                                                                                              |
| Loading                        | `DsSkeleton` for content, `DsSpinner` or `DsLoader` for in-progress states                                  |
| Icons                          | `DsIcon`                                                                                                    |

This table is a starting point. Confirm the component and its props with step 1 before you use it.

## 5. Deprecated → use instead

| Deprecated                         | Use instead                                                |
| ---------------------------------- | ---------------------------------------------------------- |
| `DsDialog`, `DsConfirmation`       | `DsModal`                                                  |
| `DsStatusBadge`, `DsSystemStatus`  | `DsStatusBadgeV2`                                          |
| `DsChip`                           | `DsTag`                                                    |
| `DsChipGroup`                      | `DsTagFilter`                                              |
| `DsDateInput`                      | `DsDatePicker` or `DsDateRangePicker`                      |
| `DsDropdownMenuLegacy`             | `DsDropdownMenu`                                           |
| `DsRadioGroupLegacy`               | `DsRadioGroup`                                             |
| `DsPopover` with a `trigger` prop  | `DsPopover.Root` + `DsPopover.Trigger` + `DsPopover.Panel` |
| `DsButton` without `design="v1.2"` | `design="v1.2"`, or `DsButtonV3` in new code               |

The ESLint plugin has the complete, current list.

## 6. Check your work

Run the app's ESLint on the files you changed. `@drivenets/eslint-plugin-design-system` (`configs.recommended`) flags native controls, MUI imports and deprecated components, and each message names the replacement. Fix what it reports in code you wrote. If the plugin is not set up, say so.
