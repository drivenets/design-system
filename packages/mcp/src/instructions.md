## Documentation Workflow

1. Call **docs-list** once at the start of the task to discover available component and docs IDs.
2. Call **docs-show** with an `id` from that list to retrieve full component docs, props, usage examples, and stories.
3. Call **docs-show-story** when you need additional docs from a specific story variant that was not included in the initial component documentation.

Use `withStoryIds: true` on **docs-list** when you also need story IDs for inputs to other tools.

## Guidelines Are the Source of Truth — MANDATORY PRE-STEP

BEFORE writing ANY code (components, CSS, inline styles, or token references), you MUST:

1. Identify all `Guidelines/*` doc IDs from the **docs-list** output.
2. Call **docs-show** for EVERY `Guidelines/*` doc that is relevant to the task (if in doubt, read it).

NEVER skip this step. NEVER write CSS values, token names, spacing, colors, typography, or layout code from memory or from Figma's raw output. The guidelines override all other sources including Figma markup.

## Verification Rules

- Never assume component props, variants, or API shape. Retrieve documentation before using a component.
- If a component, prop, or token is not documented, do not invent it. Report that it was not found.
- Only reference IDs returned by **docs-list**. Do not guess IDs.
