# Filters bar is one component configured by props

`DsFiltersBar` is a single **Component**, not a compound API. It renders every part itself in the Figma order: disclosure, then **Filter summary** or toolbar (saved filters, search, view switch, the **Filter view**, save, clear all), then the pinned row. The parts are **Internal components**. Consumers customize them through `slotProps` (props forwarded to one part, keyed by part), set strings through a nested `locale`, and leave out optional features by omitting props: no `savedFilters` means no saved-filter controls, and `views` limits the **Filter views**. The bar also owns the workflow state it can derive from the **Field schema** and the **Filter document**:

- one `value` (the **Filter document**) instead of separate `conditions` and `query`
- which **Pins** are switched on, and the pinned row built from `pins` and `fields`
- the **Active saved filter**, whether it is dirty, and loading a **Saved filter** into the document

Product code keeps the data, the persistence of **Saved filters** (through callbacks that receive the document), and the counts (`resultCount`, `getPinCount`).

The compound API cost about 110 lines of wiring per screen, and most of it was the same everywhere. It also allowed combinations that silently break: a toolbar with no disclosure, a summary inside the toolbar, a view switch with no views. Its usual benefits did not apply. Figma fixes the layout, so products should not reorder it. Leaving parts out is just as easy with props. And `DsFiltersBar` was a namespace object, so unused parts were bundled anyway.

## Considered options

- **Compound parts (`DsFiltersBar.Root`, `.Toolbar`, …), as built first:** flexible layout that no design asks for, at the cost of the wiring and the broken combinations above.
- **Compound parts plus a preset wrapper:** two APIs to document and test, and the preset would still need per-part props, which is what `slotProps` gives the single component.

## Consequences

- The decision is asymmetric. Exporting the parts later, if a product needs a layout the bar cannot express, is additive. Collapsing a published compound API would break every consumer. That is why this lands before the first public release.
- A layout nobody planned for, such as an extra toolbar button, needs a design-system change (a new slot) instead of consumer JSX.
- The root carries about 20 props. Per-part props stay out of it, in `slotProps`.
