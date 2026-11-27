---
status: supersedes ADR-0006 and the Advanced-query parts of ADR-0005
---

# Filters bar drops the advanced view and the Advanced query

`DsFiltersBar` has two **Filter views**, filters and builder. The **Filter document** is `{ conditions }`: its **Filter conditions** are its only source. They combine with `AND`, and the values inside one condition with `OR`. There is no `query` on the document, no query editor, no `OR` or parentheses, and no view locking. The bar keeps `serializeFilterQuery`, a public helper that writes conditions as **Query language** text, in place of the consumer's `formatQuery` from ADR 0005; inside the bar it only compares documents. Nothing parses that text, so the parser, the validator and their error codes are gone.

No product uses the advanced view (checked with the product teams, AR-109416). Keeping it would make every new field kind (tree, group, scoped search) round-trip through the grammar and the parser. The products map the document to their own APIs, so the grammar does not save them work. This supersedes [ADR 0006](0006-filters-bar-owns-query-language.md), and the parts of [ADR 0005](0005-filters-bar-document.md) about the **Advanced query** as a second source. The rest of ADR 0005 still stands: the bar owns one typed **Filter document**, every view reads and writes it, and **Pins** stay outside it.

## Considered options

- **Keep the advanced view but hide it by default (`views`):** every new field kind would still need a grammar, a parser and a compatibility rule.
- **Keep `parseFilterQuery` as a public helper:** nothing in the bar uses it, and a parser for text the bar never reads would drift from what the views can show.
