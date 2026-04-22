# DriveNets Design System — Agent Entry Point

## Component Knowledge: Use the MCP First

For **component props, types, stories, and usage examples**, always query the
Storybook MCP server before reading files from disk:

1. Call `list-all-documentation` to discover available components and docs entries
2. Call `get-documentation(id)` for full props, code snippets, and stories
3. Call `get-documentation-for-story(componentId, storyName)` for a specific variant

The MCP data is auto-generated from TypeScript source and Storybook stories —
it's always accurate and complete. See `tools/mcp-server/` for server setup.

## Architectural Context: Fall Back to `.ai/`

For questions the MCP can't answer — repo structure, build pipeline, contribution
workflow, styling architecture, testing strategy — read the `.ai/` docs:

| File                                    | Covers                                             |
| --------------------------------------- | -------------------------------------------------- |
| `.ai/OVERVIEW.md`                       | What the DS is, design philosophy, package summary |
| `.ai/ARCHITECTURE.md`                   | Monorepo structure, package map, build pipeline    |
| `.ai/IMPLEMENTATION.md`                 | Tech stack, component anatomy, key patterns        |
| `.ai/CONTRIBUTING.md`                   | PR process, changesets, commit conventions         |
| `.ai/operations.md`                     | Build, test, release, CI/CD                        |
| `.ai/testing.md`                        | Vitest, browser tests, Storybook play tests        |
| `.ai/features/01-styling-system.md`     | Tokens, SCSS modules, CSS custom properties        |
| `.ai/features/02-ark-ui-integration.md` | Ark UI headless primitives, wrapping patterns      |
| `.ai/MCP_TOOLS.md`                      | MCP server tools reference                         |

## Key Conventions

- All components are prefixed with `Ds` (e.g. `DsButton`, `DsTable`, `DsSelect`)
- Import from `@drivenets/design-system`; include `@drivenets/design-system/index.min.css`
- Props are defined in `*.types.ts` files next to each component
- Styling uses SCSS modules with CSS custom property tokens (`--color-*`, `--spacing-*`)
- Commits require JIRA ticket prefix (`AR-XXXXX: ...`) and conventional commit format
- PRs require a changeset (`pnpm changeset`) unless labeled `skip changelog`
