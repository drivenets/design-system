---
'@drivenets/design-system': minor
---

Add collapsible column groups to `DsTable` (matches the Figma "Column groups" spec).

What's new for consumers:

- Group columns using TanStack's nested `columns` API. A grouping column def renders a group header row
  above its leaf columns, and each group is separated from its neighbors with a side border in both the
  header and body.
- Mark a group collapsible by setting `meta.group = { collapsible: true }` on its column def. The group
  header then renders a collapse/expand toggle. Collapsing hides every leaf column in the group except
  those flagged `meta.keepVisibleWhenCollapsed`, and toggles the control back to "expand".
- Collapse state is uncontrolled by default (seed initial collapsed groups with
  `meta.group.defaultCollapsed`) or fully controlled via the new `collapsedColumnGroups` /
  `onColumnGroupsCollapsedChange` props. Collapse-driven visibility is layered on top of any
  `columnVisibility` you pass, so it never mutates your own state.
- New `locale` prop overrides the accessible labels for the group toggle (`collapseColumnGroup`,
  `expandColumnGroup`).

A new `Components/Table/Column Groups` Storybook section ships with default, initially-collapsed, and
controlled samples.
