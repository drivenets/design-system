---
'@drivenets/design-system': patch
---

Fix `DsTagFilter` re-laying out its tag row continuously while the pointer rests on a tag. The overflow calculation budgeted each tag at its delete-button-collapsed width, so hovering a tag grew it past the budget, wrapped the row, and retriggered the measurement indefinitely. Tags are now measured at their widest state, the collapsed row no longer wraps, and the resize observer ignores height-only changes. Slightly fewer tags may fit on the first row, because the row now reserves the delete button's width instead of discovering it on hover.
