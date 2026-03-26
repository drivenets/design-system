# DriveNets Design System

## Structure

This monorepo contains the following packages:

| Package                                  | Description                                                         |
| ---------------------------------------- | ------------------------------------------------------------------- |
| `@drivenets/design-system`               | The core design system package                                      |
| `@drivenets/eslint-plugin-design-system` | ESLint plugin for enforcing design system rules                     |
| `@drivenets/vite-plugin-design-system`   | Vite plugin for integrating the design system                       |
| `@drivenets/commitlint-plugin-internal`  | Commitlint plugin for enforcing internal commit conventions         |
| `@drivenets/eslint-plugin-internal`      | ESLint plugin for enforcing internal conventions & coding standards |

## Storybook Deployment

[![Storybook](https://img.shields.io/badge/github-pages-ff4785?logo=storybook&style=for-the-badge)](https://drivenets.github.io/design-system/)

Storybook is automatically deployed to GitHub Pages on every PR merge to the default branch. Each deployment commit contains the corresponding source commit hash for reference.

## Development

### Prerequisites

- Node 24+
- pnpm 10.30.3

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

### Cursor AI Tooling

This repo includes rules, skills, and notepads in `.cursor/` to support AI-powered development.

#### Rules (`.cursor/rules/`)

Auto-applied contextual guidance for the AI agent.

| Rule                 | Scope                             | Description                                      |
| -------------------- | --------------------------------- | ------------------------------------------------ |
| `standards.mdc`      | Always                            | Code standards, component API design             |
| `checkers.mdc`       | Always                            | How to run lint / test / typecheck               |
| `react-patterns.mdc` | `**/*.tsx`, `**/*.ts`             | Hooks, memoization, React 19, Ark UI             |
| `storybook.mdc`      | `**/*.stories.tsx`                | Story layout, args, styling, mockdate            |
| `browser-tests.mdc`  | `**/__tests__/*.browser.test.tsx` | Vitest browser test patterns and a11y queries    |
| `scss.mdc`           | `**/*.scss`                       | Design tokens, no !important, mixins             |
| `design-system.mdc`  | `packages/**/components/**/*`     | Component conventions, primitive library choices |
| `monorepo.mdc`       | `packages/**/*`                   | Import boundaries                                |
| `code-review.mdc`    | Manual / on diff                  | PR workflow, checklist, inline review comments   |

#### Skills (`.cursor/skills/`)

Multi-step workflows the AI agent executes on request.

| Skill                   | Trigger                     | What it does                                                     |
| ----------------------- | --------------------------- | ---------------------------------------------------------------- |
| **component-scaffold**  | "Scaffold a new component"  | Checks Ark UI, creates files, wires exports, generates stories   |
| **figma-to-component**  | "Implement this Figma link" | Extracts design context + tokens from Figma, scaffolds component |
| **pr-prep**             | "Prepare my PR"             | Runs lint/typecheck/test on diff, validates changeset            |
| **migrate-story-tests** | "Migrate tests for ds-X"    | Converts Storybook play functions to Vitest browser tests        |
| **rca-debug**           | "Debug this" / "RCA"        | Structured root cause analysis for persistent bugs               |
| **deslop**              | "Clean up this code"        | Removes AI-generated code slop, fixes style                      |
| **get-pr-comments**     | "Get PR comments"           | Fetches and summarizes review comments from the active PR        |

#### Notepads (`.cursor/notepads/`)

Reusable prompt snippets you invoke with `@` in Cursor chat.

| Notepad          | Usage                                              |
| ---------------- | -------------------------------------------------- |
| **check-ark-ui** | Query Ark UI for primitives before building custom |

#### How to use

**Rules** activate automatically based on file context — no action needed.
The one exception is `code-review.mdc`, which you trigger manually:

```
"Review my changes"                →  inline REVIEW-* comments on your diff
```

**Skills** are triggered with natural language in chat:

```
"Scaffold a ds-tooltip component"  →  component-scaffold
"Implement this <figma-url>"       →  figma-to-component
"Prepare my PR"                    →  pr-prep
"Migrate tests for ds-toggle"      →  migrate-story-tests
"Debug this" / "RCA"               →  rca-debug
"Clean up this code"               →  deslop
"Get PR comments"                  →  get-pr-comments
```

**Notepads** are invoked with `@` in Cursor chat:

```
@check-ark-ui                      →  check Ark UI before building custom
```

#### Example: building a component from scratch

```
1. "Scaffold a ds-card component" (or "Implement this <figma-url>")
   → agent checks Ark UI for primitives, creates all files,
     wires barrel exports, generates stories (+ optional browser tests)
   → with a Figma URL: also extracts design tokens, maps to CSS
     custom properties, and pre-fills styles/variants/stories
   → rules like react-patterns, scss, storybook, design-system
     auto-apply as the agent touches .tsx, .scss, .stories.tsx files

2. Iterate on the component in chat
   → rules keep guiding the agent (tokens, no !important, a11y queries, etc.)

3. Add or extend `__tests__/*.browser.test.tsx` for interactions you care about

4. "Review my changes"
   → agent diffs against origin/main and drops inline REVIEW-* comments

5. Fix flagged issues

6. "Prepare my PR"
   → agent runs lint, typecheck, tests on changed files,
     validates stories/SCSS/TS patterns, checks changeset,
     outputs a pass/fail report

7. All green → push and open PR
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
