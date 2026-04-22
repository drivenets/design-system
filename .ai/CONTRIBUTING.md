# Contributing

## Commit Conventions

Commits must follow **Conventional Commits** with a JIRA ticket prefix:

```
feat(AR-12345): add size prop to DsChip
fix(AR-12346): correct tooltip positioning on scroll
```

Enforced by commitlint with the `@drivenets/commitlint-plugin-internal`
`design-system/require-jira-ticket` rule (prefix: `AR`).

## Changeset Workflow

Every PR that changes published packages must include a changeset:

```bash
pnpm changeset
```

This creates a markdown file in `.changeset/` describing the change and its
semver bump (patch/minor/major). On merge to `main`, the `changesets/action`
aggregates pending changesets into a "Version Packages" PR that bumps versions
and updates changelogs.

- **Major bumps are blocked on `main`** — only allowed on the `next` branch
  (enforced by `.github/workflows/changeset.yml` via `check-major-version.ts`)
- To skip changelog for docs-only or infra changes, add the `skip changelog`
  label to the PR

## Pre-commit Hooks

Husky runs `lint-staged` on commit:

1. **cspell** — spell check on changed files
2. **oxfmt** — format check (not Prettier — the repo uses Oxfmt)
3. **tsgo --noEmit** — type check on changed TypeScript files
4. **eslint** — lint on changed JS/TS files

## PR Checks (CI)

The `pr.yml` workflow runs on every pull request:

- `pnpm lint` / `typecheck` / `test:coverage` / `build` + `build:lint`
- `test:requires-build` (depends on build output)
- Format check, syncpack, cspell, knip, dedupe, actionlint
- Uses `--affected` via Turborepo for incremental runs

## Code Style

- **Formatting**: Oxfmt (run `pnpm format` to auto-format)
- **Linting**: ESLint flat config with TypeScript ESLint strict, import-x, unicorn
- **Spelling**: cspell with local dictionary (`cspell/local-words.txt`)
- **Unused exports**: knip
- **Dependency versions**: syncpack
- **Package quality**: publint + attw (run as `build:lint`)

## Branch Strategy

- `main` — stable release branch, publishes to npm on merge
- `next` — pre-release branch for breaking changes (major bumps allowed here)
- Feature branches — PR into `main` or `next`

## Adding a New Component

1. Create the component directory under `src/components/ds-{name}/`
2. Follow the component anatomy pattern (see IMPLEMENTATION.md)
3. Add JSDoc to all props in `*.types.ts` (for MCP manifest quality)
4. Add Storybook stories showing all major variants
5. Add browser tests in `__tests__/ds-{name}.browser.test.tsx`
6. Export from `src/index.ts`
7. Run `pnpm changeset` to create a changelog entry
