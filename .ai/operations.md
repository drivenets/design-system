# Operations

## Local Development

```bash
pnpm install              # install all dependencies
pnpm start                # start Storybook dev server (packages/design-system)
pnpm test                 # run all tests except requires-build
pnpm build                # build all packages via Turborepo
pnpm lint                 # lint all packages
pnpm typecheck            # type check all packages
pnpm format               # auto-format with Oxfmt
pnpm format:check         # check formatting without modifying
```

## CI/CD Workflows

| Workflow               | Trigger                 | What it does                                                       |
| ---------------------- | ----------------------- | ------------------------------------------------------------------ |
| `pr.yml`               | Pull request            | Lint, typecheck, test, build, format check, syncpack, cspell, knip |
| `release.yml`          | Push to `main`          | `changesets/action` → `pnpm build && changeset publish` to npm     |
| `deploy-storybook.yml` | Push to `main` + manual | Build Storybook → push to `gh-pages` branch → GitHub Pages         |
| `changeset.yml`        | Pull request            | Verify changeset exists (unless `skip changelog` label)            |
| `pr-name-linter.yml`   | Pull request            | Validate PR title format                                           |
| `security.yml`         | Scheduled               | CodeQL security analysis                                           |

## Release Process

1. Developer creates a PR with a changeset (`pnpm changeset`)
2. PR merges to `main`
3. `changesets/action` collects all pending changesets and opens a "Version Packages" PR
4. That PR bumps `package.json` versions, updates `CHANGELOG.md` files
5. When the Version Packages PR merges, `release.yml` runs `pnpm build && changeset publish`
6. Packages are published to npm via GitHub Packages (trusted publishing)

## Storybook Deployment

Every push to `main` triggers `deploy-storybook.yml`:

1. Builds Storybook: `pnpm run --filter @drivenets/design-system build:storybook`
2. Copies `storybook-static/` contents
3. Checks out the `gh-pages` branch, replaces contents, commits, pushes
4. Live at: https://drivenets.github.io/design-system/

The MCP server (`tools/mcp-server`) fetches manifests from this URL by default.

## Useful Commands

```bash
pnpm lint:versions        # check dependency version consistency (syncpack)
pnpm lint:spell           # spell check (cspell)
pnpm lint:unused          # find unused exports (knip)
pnpm lint:dedupe          # check for duplicate dependencies
pnpm changelog            # create a changeset interactively
pnpm release              # build all + publish (CI only)
```
