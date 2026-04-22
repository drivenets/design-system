# Implementation

## Tech Stack

| Layer                  | Technology                                                                                           |
| ---------------------- | ---------------------------------------------------------------------------------------------------- |
| UI framework           | React 19 + TypeScript                                                                                |
| Build                  | tsdown (rolldown-based), React Compiler                                                              |
| Styling                | SCSS modules + CSS custom property tokens                                                            |
| Component primitives   | Ark UI (`@ark-ui/react`), Radix UI, @tanstack/react-table, @tanstack/react-virtual, dnd-kit, @zag-js |
| Storybook              | Storybook 10 + Vite 8 + `@storybook/react-vite`                                                      |
| Testing                | Vitest 4, Playwright (browser mode), Storybook play tests                                            |
| Linting                | ESLint (flat config), TypeScript ESLint strict                                                       |
| Formatting             | Oxfmt (not Prettier)                                                                                 |
| Package publishing     | Changesets                                                                                           |
| Monorepo orchestration | Turborepo                                                                                            |

## Component Anatomy

Every `ds-*` component follows this file structure:

```
src/components/ds-{name}/
  index.ts                     # Barrel export
  ds-{name}.tsx                # Component implementation
  ds-{name}.types.ts           # Props interface with JSDoc (source of MCP manifest descriptions)
  ds-{name}.module.scss         # Scoped styles
  ds-{name}.stories.tsx         # Storybook stories
  ds-{name}.stories.module.scss # Story-specific styles (optional)
  __tests__/
    ds-{name}.browser.test.tsx  # Browser tests (Playwright via Vitest)
  utils.ts                      # Component-specific utilities (optional)
  utils.test.ts                 # Unit tests for utilities (optional)
```

Some components have sub-components in nested directories (e.g., `ds-table/components/`,
`ds-table/hooks/`, `ds-table/filters/`).

### Versioned Components

Components undergoing a design revision have a `versions/` directory:

```
src/components/ds-button/
  index.ts                              # Exports based on design prop
  ds-button.types.ts                    # Union type switching between versions
  versions/
    ds-button-new/                      # v1.2 design
      ds-button-new.tsx
      ds-button-new.types.ts
      ds-button-new.module.scss
      ds-button-new.stories.tsx
    ds-button-legacy/                   # Original design
      ...
```

The top-level component switches between versions based on a `design: 'v1.2'` prop.

## Key Patterns

### Props Interfaces

All props are defined in `*.types.ts` files as TypeScript interfaces. JSDoc
comments on props are extracted by `react-docgen` into the Storybook MCP manifest:

```typescript
export interface DsButtonProps {
  /** Visual variant: 'primary' for main actions, 'ghost' for subtle actions */
  variant?: ButtonVariant;
  /** The size of the button */
  size?: ButtonSize;
  /** When true, the button shows a loading spinner and is disabled */
  loading?: boolean;
}
```

### Controlled/Uncontrolled Pattern

Components follow React's standard controlled/uncontrolled pattern:

- `value` + `onValueChange` for controlled usage
- `defaultValue` for uncontrolled usage
- Both patterns are supported via Ark UI's built-in state management

### CSS Custom Properties for Theming

Components reference design tokens via CSS custom properties rather than
hard-coded values:

```scss
.button {
  background-color: var(--color-primary-600);
  padding: var(--spacing-8) var(--spacing-16);
  font-family: var(--font-family-primary);
}
```

### Barrel Exports

All components are re-exported from `src/index.ts`. Consumers import from the
package root:

```typescript
import { DsButton, DsTable, DsSelect } from '@drivenets/design-system';
```
