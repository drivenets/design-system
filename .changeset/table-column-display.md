---
'@drivenets/design-system': minor
---

Add `columnDisplay` to `DsTable`: a trailing header cell with a Columns button whose popup shows or hides columns, with a search field, column-group checkboxes (with a partial state), locked rows for columns with `enableHiding: false`, and an "All columns" checkbox. Columns whose `header` is not a string can set `meta.columnDisplayLabel`. When `columnVisibility` is omitted, the table now tracks visibility itself and still calls `onColumnVisibilityChange`.
