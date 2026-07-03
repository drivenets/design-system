---
'@drivenets/design-system': patch
---

Fix `DsDrawer` intercepting pointer events while closed. A closed (or closing) drawer stays mounted and transformed; for inset/offset drawers this could land the invisible content over neighboring UI and swallow its clicks. Closed-state content is now `pointer-events: none`, so a closed drawer is fully click-through regardless of docked position, while open drawers (including during the open animation) stay interactive.
