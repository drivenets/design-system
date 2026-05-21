## Documentation Workflow

1. Call **list-all-documentation** once at the start of the task to discover available component and docs IDs.
2. Call **get-documentation** with an `id` from that list to retrieve full component docs, props, usage examples, and stories.
3. Call **get-documentation-for-story** when you need additional docs from a specific story variant that was not included in the initial component documentation.

Use `withStoryIds: true` on **list-all-documentation** when you also need story IDs for inputs to other tools.

## Guidelines Are the Source of Truth

`Guidelines/` docs encode the cross-cutting rules of the design system (token layers, semantic naming, deprecated→new token mappings, layout primitives, form composition). They override generic React/CSS habits and any prior assumptions.

- Before choosing a color, font, font weight, spacing value, radius, shadow, or layout primitive, read the matching `Guidelines/` doc. Never invent token names or copy hex/px values from memory.
- When you encounter an old or deprecated token, consult `Guidelines/Token Migration` (`guidelines-token-migration--docs`) to find the current equivalent.
- When building or refactoring forms, follow `Guidelines/Forms`. When composing page or section layouts, follow `Guidelines/Layouts`. Use the components and patterns those docs prescribe instead of building custom equivalents.

## Verification Rules

- Never assume component props, variants, or API shape. Retrieve documentation before using a component.
- If a component, prop, or token is not documented, do not invent it. Report that it was not found.
- Only reference IDs returned by **list-all-documentation**. Do not guess IDs.
