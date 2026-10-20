---
'@drivenets/design-system': minor
---

Add sticky columns to `DsTable`, set with `stickyColumns` or from the `columnDisplay` Columns button.

- `DsTable` now scrolls both ways in one container, with a sticky header, so the vertical scrollbar stays at the visible right edge.
- A virtualized `DsTable` takes its height from its parent; without a bounded height it collapses to zero height.
- The row actions column is narrower, matching Figma.
- The `columnDisplay` Columns button and popup match Figma.
