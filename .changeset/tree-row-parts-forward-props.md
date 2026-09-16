---
'@drivenets/design-system': patch
---

Fix `DsTree.Branch`, `DsTree.BranchControl` and `DsTree.BranchText` dropping injected props.

These parts destructured only `className` / `style` / `children` and forwarded nothing else to the underlying Ark element, so wrapping a tree row in an `asChild` trigger — `DsPopover.Trigger`, `DsTooltip` — silently did nothing. No error, no warning; it just read like a positioning bug. Same defect and fix shape as the `DsDropdownMenu.Item` fix in 0.19.0.

Also corrects the `DsTree.Root` `expandOnClick` JSDoc, which documented `@default false` while the implementation defaults to `true`.
