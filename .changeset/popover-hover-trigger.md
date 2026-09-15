---
'@drivenets/design-system': minor
---

Add hover triggering to `DsPopover`, for hover-revealed panels that host focusable content (navigation links, actions) — the case `DsTooltip` cannot serve because it renders `role="tooltip"`.

**API shape — declarative, on `DsPopover.Root`:**

```tsx
<DsPopover.Root openOn="hover" openDelay={200} closeDelay={150}>
```

- `openOn?: 'click' | 'hover'` — default `'click'`. Named `openOn` rather than `trigger` because `DsPopover.Trigger` and the deprecated `<DsPopover trigger={…}>` prop already claim that word.
- `openDelay?: number` — default `200`, matching `DsTooltip`.
- `closeDelay?: number` — default `150`, deliberately non-zero so the pointer can cross the `gutter` gap onto the portalled panel without losing the handoff.

`'hover'` layers pointer intent **on top of** the existing behavior rather than replacing it: click and keyboard activation still toggle, Escape still closes, `modal` is unchanged, and a consumer-controlled `open` still wins (hover reports intent through `onOpenChange`, the parent decides). Touch pointers are ignored, so a tap stays a plain click on tablets.

Under `openOn="hover"` the panel does not take focus when it opens — hovering must not yank focus off whatever the user is actually using. Keyboard users tab from the trigger into the panel, which Ark proxies across the portal.

`DsTooltip`'s `interactive` prop has no counterpart here: a popover panel is always pointer-reachable.

Also in this release:

- Fix `DsTree.Branch`, `DsTree.BranchControl`, and `DsTree.BranchText` dropping injected props, so wrapping a tree row in `DsPopover.Trigger` (or `DsTooltip`) via `asChild` now actually wires up instead of silently doing nothing. Same defect previously fixed for `DsDropdownMenu.Item`.
- Fix the `DsTree.Root` `expandOnClick` JSDoc, which documented `@default false` while the implementation defaults to `true`.
