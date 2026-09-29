---
'@drivenets/design-system': minor
---

Make `DsPopover` and `DsTooltip` controllable and composable on a shared trigger:

- `DsTooltip`: add controlled `open` / `defaultOpen` / `onOpenChange(open)`.
- `DsTooltip`, `DsPopover.Trigger` and `DsPopover.Anchor` forward `ref` and props injected by an outer `asChild` trigger, so a tooltip and a popover can share one trigger element (either nesting order; `DsPopover.Trigger > DsTooltip > element` is recommended).
- Add `DsPopover.CloseTrigger` (icon-only close button, `locale={{ close }}`, default `'Close'`) and a `DsPopover.Header` `actions` trailing slot to place it.
- `DsPopover.Root` `openOn="hover"`: a click pins the panel — clicking a hover-opened panel keeps it open, and a click-opened panel survives the pointer leaving until Escape, an outside click, the close button, or another trigger click.
