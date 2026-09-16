---
'@drivenets/design-system': patch
---

Fix `DsTree.Branch`, `DsTree.BranchControl` and `DsTree.BranchText` dropping injected props.
Corrects the `DsTree.Root` `expandOnClick` JSDoc, which documented `@default false` while the implementation defaults to `true`.
