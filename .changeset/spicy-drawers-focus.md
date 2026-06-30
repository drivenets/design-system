---
'@drivenets/design-system': minor
---

Add an `onOpenAutoFocus` prop to `DsDrawer`. Call `event.preventDefault()` to stop the drawer from stealing focus on open, keeping the caret where it was (e.g. in a text input that triggered the drawer) for type-ahead / popover patterns.
