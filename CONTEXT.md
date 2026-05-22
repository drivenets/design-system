# DriveNets Design System

Shared vocabulary for building and maintaining `ds-*` React components in this monorepo. Describes what things are called — not how to implement them (see `.agents/skills/` and [AGENTS.md](AGENTS.md)).

## Language

**Component**:
A public `Ds{Name}` export backed by a `ds-{name}/` folder (types, implementation, styles, stories).
_Avoid_: widget, element (unless HTML element), control (unless form field)

**Variant**:
A named visual or behavioral axis on a **Component**, backed by an `as const` array and union type in `*.types.ts`.
_Avoid_: mode, type (when meaning visual style), theme

**Locale**:
Optional prop bag of user-facing strings for a **Component**; keys name the UI role (e.g. `loading`, `noMatches`). Use a dedicated `Ds{Name}Locale` interface when there are many keys.
_Avoid_: i18n, translations (this repo does not ship a global i18n framework)

**Primitive**:
Headless UI building block a **Component** wraps (Ark UI, legacy Radix, or TanStack for data-heavy UI).
_Avoid_: base component, underlying library

**Story**:
A Storybook example that documents appearance and controls for a **Component**; not an automated test.
_Avoid_: test, spec, play test

**Browser test**:
Vitest browser-mode spec in `__tests__/*.browser.test.tsx` that asserts user-visible behavior (clicks, keyboard, callbacks).
_Avoid_: unit test (for non-DOM logic), story test, play function

**Changeset**:
A changesets entry describing a consumer-facing package change for release notes and version bumps.
_Avoid_: changelog line, commit message

**Token**:
A design value (color, spacing, typography, etc.) exposed as a CSS custom property consumed in component styles.
_Avoid_: variable (unless CSS), constant (TypeScript)

**slotProps**:
MUI-style map of props passed to named subparts of a **Component** for customization without exposing library internals.
_Avoid_: sub props, child props

**Successor component**:
A new **Component** folder that supersedes an older one while the old export remains (often `ds-{name}-v2` or `ds-{name}-v3`). Mark the old API `@deprecated` in types and stories; prefer the successor in new code.
_Avoid_: replacement, v2 component (as a synonym for the pattern name)

**Deprecated component**:
A **Component** (or prop type) still exported but documented as superseded; Storybook uses the `deprecated` tag.
_Avoid_: legacy, old (without linking to the successor)

## Relationships

- A **Component** exposes **Variants** and may accept **Locale** when it shows built-in user-facing text
- A **Component** may wrap a **Primitive** (Ark preferred; Radix only where already established)
- **Stories** document UI; **Browser tests** assert interaction — never duplicate behavior checks via Storybook `play`
- A **Successor component** supersedes a **Deprecated component**; both may ship until consumers migrate
- **Tokens** flow from design into SCSS; **Components** consume tokens, not raw hex from Figma in new work
- **Changesets** attach to package releases; a new **Component** or breaking API change typically needs one

## Example dialogue

> **Dev:** "Should I add a `play` function to the select story to verify the dropdown opens?"
> **Domain expert:** "No — that's a **Browser test**. Keep the **Story** for layout and controls only. Add `__tests__/ds-select.browser.test.tsx` if open/close behavior matters."

> **Dev:** "We're shipping `DsButtonV3` but `DsButton` is still exported."
> **Domain expert:** "That's a **Successor component**. Leave `DsButton` as **Deprecated component** with `@deprecated` JSDoc until product apps migrate; new internal usage should import **Successor** only."

## Flagged ambiguities

- "Adapter" in file-upload vs "adapter" in generic architecture docs — resolved: use **Upload adapter** in design-system context; architecture skill uses **Adapter** at a **seam** ([LANGUAGE.md](.agents/skills/improve-codebase-architecture/LANGUAGE.md)).
