---
'@drivenets/design-system': minor
---

Add per-column filter popover to `DsTable` (matches the Figma "Filter by column content" spec) and migrate
the existing filter chip output from the deprecated `DsChipGroup` to `DsTagFilter`.

What's new for consumers:

- Opt a column into a header-anchored filter popover by setting `column.meta.filter = { adapterId }` (or
  `{ adapter }`) on the `ColumnDef`. The header now renders a hover-revealed filter funnel button next to
  the sort indicator that opens an Ark UI `Popover` with the adapter's filter UI and a `Clear` / `Save`
  footer. The button shows an active (filled) state while the column has an applied value.
- `useTableFilters` exposes three new per-column handlers — `applyColumnFilter`, `cancelColumnFilter`,
  `clearColumnFilter` — and a `renderColumnFilter(filterId)` helper. The hook also injects a resolved
  filter binding onto `meta.filter` of every enhanced column so the header can render the popover
  without further wiring.
- `createCheckboxFilterAdapter` gained `searchable`, `selectAll`, and `locale` options. `CheckboxFilter`
  now supports a search input and an "All" toggle (Figma alignment) and a `noMatches` empty state.
- `filterChips` from `useTableFilters` is now `TagFilterItem[]` (was `ChipItem[]`). Pass it straight to
  `DsTagFilter`. The chip metadata shape (`{ key, value }`) is unchanged so existing custom adapters
  continue to work.

A new `Components/Table/Column Filters` Storybook section ships with the spec's three samples
(header hover, popover open, applied chip bar) and a controlled-mode variant.
