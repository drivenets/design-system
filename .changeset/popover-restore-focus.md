---
'@drivenets/design-system': patch
---

Add `restoreFocus` prop to `DsPopover.Root`. Set it to `false` when a popover item opens a `DsModal` (or another dialog) so the closing popover doesn't restore focus to its trigger and fight the dialog's focus trap.
