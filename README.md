# DriveNets Design System

## Structure

This monorepo contains the following packages:

| Package                                  | Description                                                                               |
| ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| `@drivenets/design-system`               | The core design system package                                                            |
| `@drivenets/eslint-plugin-design-system` | ESLint plugin for enforcing design system rules                                           |
| `@drivenets/vite-plugin-design-system`   | Vite plugin for integrating the design system                                             |
| `@drivenets/commitlint-plugin-internal`  | Commitlint plugin for enforcing internal commit conventions                               |
| `@drivenets/eslint-plugin-internal`      | ESLint plugin for enforcing internal conventions & coding standards                       |
| `@drivenets/design-system-mcp`           | MCP server exposing Storybook component docs to AI clients ([packages/mcp](packages/mcp)) |

## Storybook Deployment

[![Storybook](https://img.shields.io/badge/github-pages-ff4785?logo=storybook&style=for-the-badge)](https://drivenets.github.io/design-system/)

Storybook is automatically deployed to GitHub Pages on every PR merge to the default branch. Each deployment commit contains the corresponding source commit hash for reference.

## Development

### Prerequisites

- Node 24+
- pnpm 11+

We recommend [fnm](https://github.com/Schniz/fnm), [nvm](https://github.com/nvm-sh/nvm), or [mise](https://github.com/jdx/mise) to manage these versions.

### Getting Started

```bash
git clone https://github.com/drivenets/design-system
cd design-system
pnpm install
```

### Available Scripts

**Development**

| Script           | Description                         |
| ---------------- | ----------------------------------- |
| `pnpm start`     | Start local Storybook server        |
| `pnpm format`    | Format the codebase                 |
| `pnpm lint`      | Lint the codebase                   |
| `pnpm typecheck` | Run TypeScript type checking        |
| `pnpm test`      | Test all packages                   |
| `pnpm build`     | Build all packages                  |
| `pnpm changelog` | Interactively add a changelog entry |

**CI (run automatically per PR)**

| Script               | Description                         |
| -------------------- | ----------------------------------- |
| `pnpm lint:spell`    | Check for spelling errors           |
| `pnpm lint:versions` | Ensure consistent package versions  |
| `pnpm lint:unused`   | Detect unused code and dependencies |

### Development Workflow

1. Create a new branch for your feature or bugfix.
2. Make your changes, running the relevant scripts locally (lint, test, typecheck).
3. Commit using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (e.g., `feat(design-system): add new button component [TICKET-ID]`).
4. Add a changelog entry with `pnpm changelog`.
   See [Intro to Using Changesets](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md) and [Adding a Changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md) for details.
   If your change doesn't require a release, add the `skip changelog` label to the PR instead.
5. Push your branch and open a pull request.

> [!NOTE]
> Since we squash-merge, only the PR title is validated as a Conventional Commit message -- don't worry about individual commit messages.

---

### AI development

LLM skills and subagents live in this repo.

- [docs/agents/README.md](docs/agents/README.md) — agent doc index
- [AGENTS.md](AGENTS.md) — checkers and skill catalog
- [CONTEXT.md](CONTEXT.md) — design-system vocabulary for agents (Component, Variant, Locale, …); glossary only, not how-to
- [docs/adr/](docs/adr/) — load-bearing decisions agents must not contradict (primitive stack, props layer, interaction testing, doc layout)

#### DS MCP (`@drivenets/design-system-mcp`)

Stdio MCP server for Storybook manifests (props, stories, guidelines, snippets). Full setup: [packages/mcp/README.md](packages/mcp/README.md).

- **Published** — `npx @drivenets/design-system-mcp` (GitHub Pages manifests)
- **Local** — `pnpm start`, then MCP with `--manifests-url http://localhost:6006` ([details](packages/mcp/README.md#local-storybook-unpublished-changes))
  - before that run `pnpm --filter @drivenets/design-system-mcp build`

```
{
  "mcpServers": {
    "drivenets-ds": {
      "command": "npx",
      "args": ["-y", "@drivenets/design-system-mcp"]
    },
    "drivenets-ds-local": {
      "command": "node",
      "args": [
        "packages/mcp/dist/cli.js",
        "--manifests-url",
        "http://localhost:6006"
      ]
    }
  }
}
```

---

## Technologies

| Category                   | Tools                                                                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Monorepo**               | [Turborepo](https://turborepo.com/docs)                                                                                                                 |
| **Package Manager**        | [pnpm](https://pnpm.io/)                                                                                                                                |
| **Linting**                | [ESLint](https://eslint.org/) + [TypeScript ESLint](https://typescript-eslint.io/)                                                                      |
| **Type Checking**          | [TypeScript](https://www.typescriptlang.org/)                                                                                                           |
| **Formatting**             | [Oxfmt](https://oxc.rs/docs/guide/usage/formatter)                                                                                                      |
| **Testing**                | [Vitest](https://vitest.dev/) + [Browser Mode](https://vitest.dev/guide/browser/) + [Playwright](https://playwright.dev/)                               |
| **Building**               | [tsdown](https://tsdown.dev/) + [React Compiler](https://react.dev/learn/react-compiler) + [Sass Embedded](https://www.npmjs.com/package/sass-embedded) |
| **Package Validation**     | [publint](https://github.com/publint/publint) + [attw](https://github.com/arethetypeswrong/arethetypeswrong.github.io)                                  |
| **Documentation**          | [Storybook](https://storybook.js.org/)                                                                                                                  |
| **Unused Code Detection**  | [Knip](https://knip.dev/)                                                                                                                               |
| **Dependency Consistency** | [Syncpack](https://jamiemason.github.io/syncpack/)                                                                                                      |
| **Spell Checking**         | [CSpell](https://cspell.org/)                                                                                                                           |
| **Commit Linting**         | [Commitlint](https://commitlint.js.org/) + [custom plugin](packages/commitlint-plugin/src/index.ts) for JIRA                                            |
| **Changelog & Releases**   | [Changesets](https://github.com/changesets/changesets)                                                                                                  |
| **Security**               | [CodeQL](https://codeql.github.com/) via [GitHub Actions](https://github.com/github/codeql-action)                                                      |
