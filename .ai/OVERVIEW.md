# DriveNets Design System

The DriveNets Design System (DS) is a React component library providing the
shared UI foundation for all DAP applications. It ships 57+ reusable `Ds`-prefixed
components, a design token system, and Storybook documentation.

## Quick Facts

|                |                                                                           |
| -------------- | ------------------------------------------------------------------------- |
| **Package**    | `@drivenets/design-system` (published to GitHub Packages)                 |
| **Framework**  | React 19 + TypeScript                                                     |
| **Build**      | tsdown (rolldown-based) with React Compiler                               |
| **Styling**    | SCSS modules + CSS custom property tokens                                 |
| **Primitives** | Ark UI, Radix UI, @tanstack/react-table, @tanstack/react-virtual, dnd-kit |
| **Docs**       | Storybook 10 (deployed to GitHub Pages)                                   |
| **Testing**    | Vitest 4, Playwright browser mode, Storybook play tests                   |
| **Monorepo**   | pnpm workspaces + Turborepo                                               |
| **Repo**       | https://github.com/drivenets/design-system                                |
| **Storybook**  | https://drivenets.github.io/design-system/                                |

## For AI Agents

**Use the Storybook MCP for component knowledge** — it serves accurate, auto-generated
prop documentation, stories, and code snippets. See `AGENTS.md` in the repo root
for the full workflow.

**Use these `.ai/` docs for architectural context** — repo structure, contribution
workflow, styling system, and testing strategy are documented here because the MCP
doesn't cover them.

## Design Philosophy

- **Consistency over flexibility** — components enforce DAP's visual language;
  customization is through design tokens, not arbitrary style overrides
- **Headless-first** — most components wrap Ark UI or Radix primitives for
  accessibility and state management, then add DriveNets styling
- **TypeScript-strict** — all props are fully typed; JSDoc on prop interfaces
  feeds both IDE intellisense and MCP manifest quality
- **Storybook as documentation** — stories are the primary documentation source;
  the MCP server makes them queryable by AI agents
