---
'@drivenets/design-system': minor
---

Add `DsFiltersBar`, a filters toolbar with filter chips, a query builder, an advanced query, saved filters, pinned toggles and clear all. It is one component: `value` takes a filter document that may leave out `query` and condition ids, the bar reports full `DsFilterDocument`s, and its parts are customized through `slotProps` and a nested `locale`. Fields get their type's built-in operators unless they list some, and date fields list built-in presets such as `'last7Days'` by value. Also add `filterRows` and `useFilteredRows`, which filter in-memory rows by a filter document and count each pinned option, and export `parseFilterQuery`, `serializeFilterQuery` and the filter query types.
