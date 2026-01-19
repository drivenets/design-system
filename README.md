# DriveNets Design System

## Structure

This monorepo is structured as any other standard multi-package repository you're familiar with, and contains the following packages:

- `@drivenets/design-system`: The core design system package.
- `@drivenets/eslint-plugin-design-system`: An ESLint plugin for enforcing design system rules (deprecated components, best practices, etc.).
- `@drivenets/vite-plugin-design-system`: A Vite plugin for integrating the design system into Vite projects (injecting styles and assets).
- `@drivenets/commitlint-plugin-design-system`: An internal Commitlint plugin for enforcing commit message conventions related to the design system.

## Storybook Deployment

[![](https://img.shields.io/badge/github-pages-ff4785?logo=storybook&style=for-the-badge)](https://drivenets.github.io/design-system/)

Storybook is automatically deployed to GitHub Pages on every PR merge to the default branch.

Each deployment commit contains the commit hash of the corresponding default branch commit in its message for easy reference.

## Development

### Prerequisites

- Node 24+
- pnpm 10.0.0

We recommend using tools like [fnm](https://github.com/Schniz/fnm), [nvm](https://github.com/nvm-sh/nvm), and/or [mise](https://github.com/jdx/mise) to manage these versions for you.

### Getting Started

Clone the repository, install the dependencies, and start your development:

```bash
git clone https://github.com/drivenets/design-system

cd design-system

pnpm install
```

### Available Scripts

These are the most commonly used scripts in development:

- `pnpm start`: Starts a local storybook server for the design system.
- `pnpm format`: Formats the codebase.
- `pnpm lint`: Lints the codebase.
- `pnpm typecheck`: Runs TypeScript type checking.
- `pnpm test`: Tests all packages in the monorepo.
- `pnpm build`: Builds all packages in the monorepo.
- `pnpm changelog`: Interactively adds a changelog entry for the changed packages.

These are scripts that run in the CI workflows for each PR. You might not need to run them often, but they are useful to know about:

- `pnpm lint:spell`: Checks for spelling errors.
- `pnpm lint:versions`: Ensures consistent package versions across the monorepo.
- `pnpm lint:unused`: Detects unused code and dependencies.

### Development Workflow

- Create a new branch for your feature or bugfix.
- Make your changes, ensuring to run the relevant scripts (linting, testing, etc.) locally.
- Commit your changes with a descriptive message following the Conventional Commits standard (e.g., `feat(design-system): add new button component [TICKET-ID]`).
- Add a changelog entry if needed using `pnpm changelog`.
  See [Intro to Using Changesets](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md) and [Adding a Changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md) for more details.
- Push your branch and open a pull request for review.

> [!NOTE]
> Since we're squashing commits when merging, only the PR name will be validated as a Conventional Commit message, so don't bother too much about each individual commit message.

## Technologies

We're using the following technologies in this monorepo:

- **Monorepo Management**: [Turborepo](https://turborepo.com/docs)
- **Package Management**: [pnpm](https://pnpm.io/)
- **Linting**: [ESLint](https://eslint.org/) and [Typescript ESLint](https://typescript-eslint.io/) with strict config
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **Code Formatting**: [Prettier](https://prettier.io/)
- **Testing**: [Vitest](https://vitest.dev/) with [Browser Mode](https://vitest.dev/guide/browser/) and [Playwright](https://playwright.dev/)
- **Building**: [tsdown](https://tsdown.dev/) with [React Compiler](https://react.dev/learn/react-compiler) and [Sass Embedded](https://www.npmjs.com/package/sass-embedded)
- **Package Validation**: [publint](https://github.com/publint/publint) and [attw](https://github.com/arethetypeswrong/arethetypeswrong.github.io)
- **Documentation**: [Storybook](https://storybook.js.org/)
- **Unused Code Detection**: [Knip](https://knip.dev/)
- **Dependency Version Consistency**: [Syncpack](https://jamiemason.github.io/syncpack/)
- **Spell Checking**: [CSpell](https://cspell.org/)
- **Commit Linting**: [Commitlint](https://commitlint.js.org/) with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
  standards and a [custom plugin](./packages/commitlint-plugin/) for JIRA tickets
- **Changelog and Release Management**: [Changesets](https://github.com/changesets/changesets)
- **Security Scanning**: [CodeQL](https://codeql.github.com/) in [GitHub Actions](https://github.com/github/codeql-action)
