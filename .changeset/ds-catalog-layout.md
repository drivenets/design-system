---
'@drivenets/design-system': minor
---

Add `DsCatalogLayout` compound layout for data-heavy catalog pages (tables/lists).

Provides the structural shell defined by design and lets consumers fill in app-specific content
(top bar, side menu items, results region, empty state):

- `DsCatalogLayout` / `DsCatalogLayout.Header` / `DsCatalogLayout.Body` / `DsCatalogLayout.Content`
- `DsCatalogLayout.SideMenu` — collapsible icon rail (60px) that overlays an expanded panel (256px)
  on hover, or pushes the content when `pinned`. Pass `onPinnedChange` to render the built-in
  pin/unpin button (top-right of the expanded panel, design-aligned). Reflects pinned state via a
  `data-pinned` attribute for descendant CSS targeting.
- `DsCatalogLayout.ContentHeader` — title row with optional trailing actions and an optional
  content-header item (e.g. a smart tabs group) below the title
