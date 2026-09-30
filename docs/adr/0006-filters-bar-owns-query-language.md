# Filters bar owns the query language

The advanced view parses and validates query text in one design-system grammar (the **Query language**), and only valid queries reach `DsFiltersBar.Root`. A **Compatible query** (clauses joined only by `AND`) is converted into **Filter conditions**, so no view locks. Any other valid query (`OR`, parentheses) becomes the **Advanced query** and locks the filters and builder views. The bar also serializes conditions back to query text itself, which replaces the consumer's `formatQuery`. Validation is driven only by the **Field schema**, and each field type's allowed operators come from a fixed set (`= != > >= < <= IN NOT IN ~ !~`). This supersedes the "bar never parses the query" clause of [ADR 0005](0005-filters-bar-document.md); the single-active-source **Filter document** still stands.

We reversed 0005 because the epic asks that only views unable to express a query be disabled, and that products only ever receive valid queries. Neither is possible without parsing. No product needs a different grammar, and the **Field schema** is the extension point: consumers narrow what can be queried by narrowing the schema.

## Considered options

- **Consumer `validateQuery` / `parseQuery` hooks, with the grammar kept in product code:** every view would always lock, and each product would reimplement the same grammar.
- **`@atlaskit/jql-*`:** the editor requires React 18 and ProseMirror (more than 0.5 MB gzipped). The parser alone is about 100 KB gzipped of ANTLR runtime. Its grammar reserves `.` and 178 words (`date`, `count`, …) and has no free-text clause.
- **Lezer or CodeMirror 6:** these add a declarative grammar and editor features, at 20–140 KB gzipped. For CodeMirror that also means rewriting `DsCodeInput`. We deferred this until highlighting and autocomplete are needed. We use a hand-written tokenizer and recursive-descent parser with no dependencies, and its tokens can drive both features later.
