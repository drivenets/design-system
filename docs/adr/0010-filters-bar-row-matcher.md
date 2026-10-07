# The design system matches rows for client-side data

The design system ships a **Row matcher**, `filterRows` with the `useFilteredRows` hook. It evaluates a **Filter document** (the **Filter conditions**, or the parsed **Advanced query**) and the switched-on **Pins** against in-memory rows. It returns the matching rows and a `getPinCount` to pass to `DsFiltersBar`. This supersedes the "result counts stay in product code" part of [ADR 0005](0005-filters-bar-document.md). A product that filters on its server ignores the matcher and passes its own counts.

The rules are fixed:

- **Text** comparisons ignore case.
- **Search text** matches any string or number value in the row.
- **Enum** values must be one of the condition's options.
- **Number** and **date** conditions compare against a single value or an inclusive range. Dates are compared as UTC calendar days of ISO 8601 strings.
- **Pins** narrow the rows the document matched. Pins on one field combine with OR, and different fields combine with AND. A **Pin**'s count is the number of the document's rows that pin alone matches.

Two things only the product knows are options:

- `getValue(row, field, subfield)` reads a value from a row. By default it reads `row[field]`, or `row[field][subfield]` for a compound field.
- `resolveDatePreset(preset, field)` turns a date preset such as `last7Days` into a date range. A preset it cannot resolve matches nothing.

Since [ADR 0006](0006-filters-bar-owns-query-language.md), the **Query language** belongs to the design system. Every product with a client-side table would otherwise reimplement the same grammar and the same rules. The pinned row cannot show counts without them.

## Considered options

- **A story-only example matcher (the status quo):** products copy it, and the copies drift.
- **An accessor on each field in the Field schema:** ties the UI schema to one row type, while the same schema also drives the query language and the builder.
- **Server-side matching only:** not every table is server-backed, and the stories need working data.

## Consequences

- The matching rules above become public behavior, so changing them is a breaking change.
- The **Field schema** stays row-agnostic. Mapping fields to rows is the matcher's option, not the field's.
