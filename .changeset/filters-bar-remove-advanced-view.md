---
'@drivenets/design-system': minor
---

Remove the advanced view and the Advanced query from `DsFiltersBar`.

- `filtersBarViews` `['filters', 'builder', 'advanced']` → `['filters', 'builder']`
- `views={['filters', 'builder', 'advanced']}` → `views={['filters', 'builder']}`; `view` / `defaultView` `'advanced'` → `'filters'` or `'builder'`
- `{ conditions, query }` in `value`, `defaultValue`, `onValueChange`, saved filters and `filterRows` → `{ conditions }`; write an `OR` of values as one condition, for example `status IN ("A", "B")`
- Stored saved filters that hold a `query` → rewrite them as `conditions`; a `query` alone loads as an empty document
- `emptyFilterDocument` `{ conditions: [], query: null }` → `{ conditions: [] }`
- `slotProps.query` and `DsFiltersBarQuerySlotProps` → remove them
- `locale.query`, `DsFiltersBarQueryLocale`, `defaultDsFiltersBarLocale.query` and `DsFiltersBarResolvedLocale['query']` → remove them
- `locale.summary.advancedQuery`, `locale.viewSwitch.lockedView` and `locale.viewSwitch.views.advanced` → remove them
- `parseFilterQuery`, `filterQueryErrorCodes` and the `DsFilterQuery*` types → remove them; `serializeFilterQuery` stays
