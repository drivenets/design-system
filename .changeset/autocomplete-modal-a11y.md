---
'@drivenets/design-system': patch
---

Fix `DsAutocomplete` options being hidden from screen readers (`aria-hidden`) when rendered inside a `DsModal` or `DsDialog`, and `DsSelect` options becoming hidden after a `DsModal` is closed and reopened. Options are now exposed as a `listbox` of `option`s and can be picked with assistive technology, so consumer workarounds for this can be removed.
