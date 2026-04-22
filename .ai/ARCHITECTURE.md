# Architecture

## Monorepo Layout

```
drivenets-design-system/
  packages/
    design-system/           # @drivenets/design-system — the core React component library
    eslint-plugin/           # @drivenets/eslint-plugin-design-system — ESLint rules for DS consumers
    vite-plugin/             # @drivenets/vite-plugin-design-system — Vite integration plugin
    eslint-plugin-internal/  # Private — internal ESLint rules for this repo
    commitlint-plugin-internal/ # Private — JIRA ticket commitlint rules
  tools/
    mcp-server/              # @drivenets/ds-mcp-server — standalone Storybook MCP server
  .changeset/                # Changesets config and pending changes
  .github/                   # CI workflows, actions, CODEOWNERS
  .cursor/                   # Cursor rules and skills for AI-assisted development
  .husky/                    # Git hooks (commitlint, lint-staged)
```

**Orchestration**: Turborepo (`turbo.json`) — tasks: `lint`, `typecheck`, `test`,
`test:coverage`, `test:requires-build`, `build`, `build:lint`.

**Package manager**: pnpm 10.30.3 with workspace (`packages/*`). The `tools/`
directory is outside the pnpm workspace — `mcp-server` has its own `package.json`
and `node_modules`.

**Node version**: 24+ (pinned in `.nvmrc`).

## Package Map

| Package                               | npm Name                                 | Published | Purpose                                                      |
| ------------------------------------- | ---------------------------------------- | --------- | ------------------------------------------------------------ |
| `packages/design-system`              | `@drivenets/design-system`               | Yes       | Core React component library (57+ components, styles, utils) |
| `packages/eslint-plugin`              | `@drivenets/eslint-plugin-design-system` | Yes       | ESLint rules enforcing DS usage patterns for consumers       |
| `packages/vite-plugin`                | `@drivenets/vite-plugin-design-system`   | Yes       | Vite plugin for DS integration (font loading, etc.)          |
| `packages/eslint-plugin-internal`     | `@drivenets/eslint-plugin-internal`      | No        | Internal ESLint rules for Storybook/TS within this repo      |
| `packages/commitlint-plugin-internal` | `@drivenets/commitlint-plugin-internal`  | No        | Enforces `AR-XXXXX` JIRA prefix on commit messages           |
| `tools/mcp-server`                    | `@drivenets/ds-mcp-server`               | No        | Standalone MCP server serving component docs to AI agents    |

## Build Pipeline

### Library Build (`@drivenets/design-system`)

Built with **tsdown** (rolldown-based bundler):

- Entry: `src/index.ts`
- Output: CJS + ESM to `dist/`, with `.d.ts` type declarations
- CSS: `index.min.css` — compiled from SCSS via sass-embedded, minified, includes
  all global tokens and component styles
- React Compiler: enabled via custom rolldown plugin (`rolldown/react-compiler-rolldown-plugin.ts`)

### Storybook Build

- Config: `packages/design-system/.storybook/main.ts`
- Framework: `@storybook/react-vite` (Storybook 10 + Vite 8)
- Addons: `addon-vitest`, `addon-a11y`, `addon-docs`, `addon-mcp`
- Output: `storybook-static/` including `manifests/components.json` and `manifests/docs.json`

### Publish Pipeline

```
Developer creates PR with changeset
  → PR merges to main
  → changesets/action creates a "Version Packages" PR
  → Version PR merges → pnpm build && changeset publish
  → Packages published to npm (GitHub Packages)
```

### Storybook Deployment

```
Push to main
  → .github/workflows/deploy-storybook.yml
  → pnpm build:storybook
  → Copy storybook-static to gh-pages branch
  → Published at https://drivenets.github.io/design-system/
```

The MCP server fetches manifests from this GitHub Pages URL.
