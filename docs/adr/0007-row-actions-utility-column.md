# Row actions live in their own utility column

`DsTable` used to render **Row actions** inside the last consumer **Leaf column**'s cells. Nothing reserved room for them there. A **Fill column** can shrink to `minWidth: 0`, an explicit `size` pins the column to that exact width, and with resizing on the column can be dragged down to `RESIZE_MIN_COLUMN_WIDTH`. In every one of those cases the actions were clipped (AR-98416). The actions now get a trailing **Utility column** (`__dsRowActions`), injected like `select`, `expander` and `reorder`. Its size, `minSize` and `maxSize` are all pinned to one width, and resizing and sorting are off. That width is computed from the declared actions: one slot per primary action, plus the "more" trigger when any secondary actions exist. It comes from TS constants that mirror the SCSS values. The last consumer column keeps its own sizing, so its content is never starved by the actions.

## Considered options

- **A minimum width on the last consumer column** (the floor becomes that column's effective `minSize`, or a CSS `min-width`). This overrides the consumer's `size` and `minSize`. At the floor the column's own content gets 0px, unless a content minimum is also hardcoded. A CSS-only floor would also drift out of sync with TanStack sizing: the resize overlay and `onColumnSizingChange` would report widths the cell doesn't actually render at.
- **Measuring the rendered actions in the DOM.** This needs an extra layout pass and makes the width jump on first render. It also doesn't fit the seeded, numeric sizing model that column resizing relies on.

## Consequences

- Every row gets one more cell and the header gets one more empty cell. Anything that counts cells (colSpans, snapshots, consumer `td:last-child` selectors) sees the extra column.
- `__dsRowActions` is omitted from the public `onColumnSizingChange` payload, like the other utility ids. The id is namespaced because the table replaces that column's cell content, so a consumer column can never collide with it.
- With `resizableColumns`, widths are seeded once. When the actions column width changes after seeding (actions declared later or removed), consumer leaves that were filling the container shift by the difference, internally and without `onColumnSizingChange`, the same way they absorb the **Scrollbar spacer**. A persisted `columnSizing` that already filled the container before this change is restored as-is, so the table overflows horizontally by the actions width.
- Pinning the actions to the right edge (sticky) later only means making this one column sticky.
