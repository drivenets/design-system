# DriveNets Design System

Shared vocabulary for building and maintaining `ds-*` React components in this monorepo. Describes what things are called — not how to implement them (see `.agents/skills/` and [AGENTS.md](AGENTS.md)).

## Language

**Component**:
A public `Ds{Name}` export backed by a `ds-{name}/` folder (types, implementation, styles, stories).
_Avoid_: widget, element (unless HTML element), control (unless form field)

**Variant**:
A named visual or behavioral axis on a **Component**, backed by an `as const` array and union type in `*.types.ts`.
_Avoid_: mode, type (when meaning visual style), theme

**High-emphasis**:
A boolean shape axis on `DsButtonV3` that raises corner radius for prominent surfaces (Sign in, Landing, NetGen). Purely rounding — not a priority/emphasis level (do not conflate with the `primary` **Variant**, which is the "highest-emphasis" action).
_Avoid_: rounded, pill

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

**Empty state**:
Content a **Component** renders when it has genuinely zero data items. Distinct from a loading/skeleton state and from a transient frame where a virtualized body has not yet produced rows. Gate it on data count, never on rendered/virtual row count.
_Avoid_: no-data view, blank state, placeholder

**Icon**:
A monochrome glyph rendered by `DsIcon` — Material Symbols or a `special-*` custom SVG — at 16–32px, tinted with `currentColor`.
_Avoid_: rich icon, state icon (those tiles are **Illustrations**)

**Illustration**:
A 250×200 colorful empty-screen tile rendered by `DsIllustration` (clouds plus a scene). Not an **Icon**.
_Avoid_: rich icon, DAP_State Icon (as a code name), Cluster NE (for the Device tile)

**Successor component**:
A new **Component** folder that supersedes an older one while the old export remains (often `ds-{name}-v2` or `ds-{name}-v3`). Mark the old API `@deprecated` in types and stories; prefer the successor in new code.
_Avoid_: replacement, v2 component (as a synonym for the pattern name)

**Deprecated component**:
A **Component** (or prop type) still exported but documented as superseded; Storybook uses the `deprecated` tag.
_Avoid_: legacy, old (without linking to the successor)

**User card**:
A presentational **Component** (`DsUserCard`) showing a person's identity as an avatar plus a title (their name) and an optional subtitle (role, email, etc.). Display only — not clickable on its own.
_Avoid_: profile card, user tile, account card

**User menu**:
A composed pattern — not its own **Component** — built from a **Component** menu (`DsDropdownMenu`) with a **User card** in the header region and a single full-width action (typically logout) in the **Menu footer**. Assembled in product/story code, never exported as `DsUserMenu`.
_Avoid_: DsUserMenu, account menu (as a component name), profile dropdown

**Menu footer**:
A menu region for one full-width, prominent action (e.g. logout), distinct from the actions row (right-aligned Cancel/Apply-style buttons). Both are sticky, bordered regions of a **Component** menu.
_Avoid_: actions bar (that is the button row), toolbar

**Workspace page**:
A full-screen DAP route for a multi-step **Project** (create, view, or approve) with persistent header chrome and a structured body.
_Avoid_: project page, wizard page, fullscreen layout (generic)

**Workspace layout mode**:
Either the simple shell (`Header`, optional `SubHeader`, `Content`, optional `Footer`) or the extended shell that swaps root `Content` for `Body` plus optional `SideMenu`, `LeftPanel`, and `Content` nested inside `Body`. Extended regions are opt-in; root-level `Content` keeps the simple shell default and must not change behavior for existing consumers.
_Avoid_: layout prop, variant enum on the root component

**Workspace body**:
The region below the workspace header: optional top/bottom stepper bands plus a horizontal band for navigation chrome and main work area.
_Avoid_: content (when meaning the whole page), main

**Side menu panel** (workspace):
Optional workspace-body chrome: vertical section navigation (collapsed rail, hover expand, optional pin) beside the work area; does not set **Content area** horizontal margins.
_Avoid_: left nav, sidebar, catalog side menu (different page type)

**Left side panel** (workspace):
Optional docked panel in the workspace body that consumes width and pushes the **Content area** aside; when present, **Content area** uses 24px horizontal margins.
_Avoid_: drawer, right side panel, side menu panel

**Content area** (workspace):
The primary work column (`DsWorkspaceLayout.Content`): column layout with 24px vertical margins, 16px gap, and 40px horizontal margins (24px when a **Left side panel** is present). Layout chrome only — title line and content items are consumer markup inside the slot. `SideMenu` does not affect horizontal margins.
_Avoid_: main content, body, canvas (canvas is one kind of content)

**Right side panel** (workspace):
Optional drawer overlay scoped to the **Content area** only — workspace header and body chrome (side menu, left panel) stay visible; composed with `DsDrawer` inside **Content area**, not a push layout region.
_Avoid_: left side panel, side menu panel, modal, body-wide overlay (unless product explicitly requires it)

**Column group**:
A header that nests **Leaf columns** via TanStack `columns`. It has no own sizing entry; its width is the sum of its visible leaves.
_Avoid_: group column (as if it were a sized leaf)

**Leaf column**:
A table column with no nested children; the unit of column sizing and of a resize.
_Avoid_: child column, nested column

**Header label**:
The text in a **Leaf column** or **Column group** header cell.
_Avoid_: column title, header caption

**Utility column**:
A table-injected **Leaf column** (`select`, `expander`, or `reorder`) that is not in the consumer `columns` array.
_Avoid_: builtin column, synthetic column, feature column

**Fill column**:
A **Leaf column** with no explicit width that grows with remaining table space. Only when column resizing is off.
_Avoid_: auto column, fluid column

**Resize handle**:
Pointer target straddling the right edge of a header cell (**Leaf column** or **Column group**).
_Avoid_: resizer (when meaning the overlay)

**Resize overlay**:
Full-height divider for the active resize boundary (hover or drag).
_Avoid_: resize handle, drag line

**Scrollbar spacer**:
A header-only cell at the end of every header row that occupies the body’s vertical scrollbar width when that scrollbar is present.
_Avoid_: Scrollbar gutter, placeholder, gutter cell

## Relationships

- A **Component** exposes **Variants** and may accept **Locale** when it shows built-in user-facing text
- A **Component** may wrap a **Primitive** (Ark preferred; Radix only where already established)
- **Stories** document UI; **Browser tests** assert interaction — never duplicate behavior checks via Storybook `play`
- A **Successor component** supersedes a **Deprecated component**; both may ship until consumers migrate
- **Tokens** flow from design into SCSS; **Components** consume tokens, not raw hex from Figma in new work
- A **Component** shows its **Empty state** only when it has zero data items; a virtualized body gates **Empty state** on data count, never on the count of currently rendered (virtual) rows
- An **Icon** is not an **Illustration**; `DsIcon` never renders empty-screen tiles
- **Changesets** attach to package releases; a new **Component** or breaking API change typically needs one
- A **Workspace page** has one header and one **Workspace body**; the body may combine **Side menu panel**, **Left side panel**, **Content area**, and **Right side panel**
- **Side menu panel** and **Left side panel** differ: only **Left side panel** toggles **Content area** horizontal margins (24px vs 40px)
- **Left side panel** pushes layout; **Right side panel** overlays **Content area** via `DsDrawer` (no symmetric right layout slot)
- **Workspace layout mode** is opt-in: `Body` with `SideMenu` / `LeftPanel` adds horizontal chrome; `Content` always applies content-area spacing
- A **Column group** contains one or more **Leaf columns**; dragging its **Resize handle** changes those leaves’ widths, not a separate group size
- A **Header label** that does not fit its cell is shown as a single-line ellipsis; the full string is available while truncated
- A **Utility column** is a **Leaf column**; the table injects it when select, expand, or reorder is on
- A **Fill column** exists only when column resizing is off; with resizing on, every **Leaf column** has a pixel width
- A **Resize overlay** marks the boundary of a **Resize handle** interaction; it is not the handle itself
- A **Scrollbar spacer** is not a **Leaf column** and has no **Resize handle**
- Every header row of a **Column group** includes a **Scrollbar spacer**, not only the last row

## Example dialogue

> **Dev:** "Should I add a `play` function to the select story to verify the dropdown opens?"
> **Domain expert:** "No — that's a **Browser test**. Keep the **Story** for layout and controls only. Add `__tests__/ds-select.browser.test.tsx` if open/close behavior matters."

> **Dev:** "We're shipping `DsButtonV3` but `DsButton` is still exported."
> **Domain expert:** "That's a **Successor component**. Leave `DsButton` as **Deprecated component** with `@deprecated` JSDoc until product apps migrate; new internal usage should import **Successor** only."

> **Dev:** "Should the comments drawer cover the side menu?"
> **Domain expert:** "No — **Right side panel** overlays **Content area** only. Header and body chrome stay visible; use `DsDrawer` inside **Content area**, not a full-body overlay."

> **Dev:** "Should we add `ContentTitle` and `ContentItems` slots?"
> **Domain expert:** "No — **Content area** is `Content`. Workspace exposes layout regions; page content (title line, content items) stays in consumer children."

> **Dev:** "When I drag the group header, are we resizing the group as its own column?"
> **Domain expert:** "No — a **Column group** has no own size. The **Resize handle** on the group scales its **Leaf columns**. The **Resize overlay** follows that boundary."

> **Dev:** "Should I restore `overflow-y: scroll` on thead so Fill columns line up?"
> **Domain expert:** "No — that's a CSS scrollbar gutter. Put a **Scrollbar spacer** on every header row so borders reach the table edge, including between **Column group** rows."

> **Dev:** "When I make the expander column wider, does that also size the nested details columns?"
> **Domain expert:** "No — that width belongs to the expander **Utility column**. Nested details are consumer **Leaf columns**."

> **Dev:** "Should Cluster NE from the empty-screen tile go on `DsIcon` as `rich-cluster-ne`?"
> **Domain expert:** "No — that's an **Illustration**, variant `device`. `special-cluster-ne` is the **Icon**."

> **Dev:** "Should a long column title wrap onto two lines in the header?"
> **Domain expert:** "No — that's a **Header label**. It stays one line with an ellipsis; don't call it a column title."

## Flagged ambiguities

- "Adapter" in file-upload vs "adapter" in generic architecture docs — resolved: use **Upload adapter** in design-system context; architecture skill uses **Adapter** at a **seam** ([LANGUAGE.md](.agents/skills/improve-codebase-architecture/LANGUAGE.md)).
- "Group resize" was used to mean a sized group column — resolved: dragging a **Column group** **Resize handle** changes **Leaf column** widths only.
- "placeholder" in header layout meant **Scrollbar spacer**, not TanStack `header.isPlaceholder` (spanning-cell hole) and not **Empty state**.
- "Scrollbar gutter" meant CSS reservation on `thead`; the structure is a **Scrollbar spacer**.
- "Expandable column width" was used to mean nested details columns — resolved: that width belongs to the expander **Utility column**.
- "rich icon" / "state icon" / Figma DAP_State Icon — resolved: **Illustration**.
- "Cluster NE" on the linked empty-screen instance — resolved: **Illustration** variant `device`; `special-cluster-ne` remains the **Icon**.
