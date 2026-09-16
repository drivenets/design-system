---
'@drivenets/design-system': patch
---

Fix an open `DsTooltip` swallowing clicks on elements it overlaps.

Zag marks the tooltip _content_ pointer-transparent when `interactive` is `false`, but leaves the positioner that wraps it clickable. Since the positioner is sized to the content, an open tooltip blocked any control underneath it — a user whose cursor rested on a trigger could not click what the panel happened to cover.

The positioner is now `pointer-events: none`. Interactive tooltips are unaffected: their content re-enables itself with `pointer-events: auto`, which still applies under a `none` parent.
