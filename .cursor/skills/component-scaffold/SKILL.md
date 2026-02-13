---
name: component-scaffold
description: Scaffold a new design system component with all required files, Ark UI integration, stories with play tests, and barrel export wiring. Use when the user asks to create, scaffold, or add a new component.
---

# Component Scaffold Skill

Scaffold a new design system component following all project conventions.

## Input

The user provides a component name (e.g., "tooltip", "progress-bar"). Normalize it to kebab-case for file names and PascalCase for code identifiers.

- File prefix: `ds-{name}` (e.g., `ds-tooltip`)
- Component name: `Ds{Name}` (e.g., `DsTooltip`)
- Directory: `packages/design-system/src/components/ds-{name}/`

## Steps

### Step 1: Check Ark UI for an existing primitive

Before writing any code, check if Ark UI already provides this component:

1. Call the Ark UI MCP `list_components` tool with `framework: "react"`.
2. If a matching component exists:
   - Call `get_component_props` with `framework: "react"` and the component name to get the full API.
   - Call `get_example` with `framework: "react"`, the component name, and `exampleId: "basic"` to get reference code.
   - Call `styling_guide` with the component name to get data attributes for SCSS.
   - Use the Ark primitive as the base. Do NOT expose all Ark props -- create an own props layer.
   - Do NOT duplicate Ark internal state with `useState`.
3. If no matching component exists, build a custom implementation.

### Step 2: Create the 5 component files

All files go in `packages/design-system/src/components/ds-{name}/`.

#### `ds-{name}.types.ts`

```typescript
import type { CSSProperties, ReactNode, Ref } from 'react';

export const ds{Name}Variants = ['...'] as const;
export type Ds{Name}Variant = (typeof ds{Name}Variants)[number];

export interface Ds{Name}Props {
  // Value props first
  ref?: Ref<HTMLElement>;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;

  // Slot props
  locale?: { /* any hardcoded strings */ };

  // Callbacks last
  onChange?: (value: unknown) => void;
}
```

Follow these rules:

- Value/config props first, then slot/render props, then callbacks last.
- Export variant arrays as `as const` for storybook argTypes.
- Use `Ref<HTMLElement>` for the ref type.
- Add `locale` prop if the component has any hardcoded user-facing text.

#### `ds-{name}.tsx`

```tsx
import classNames from 'classnames';
import styles from './ds-{name}.module.scss';
import type { Ds{Name}Props } from './ds-{name}.types';

const Ds{Name} = ({
  ref,
  className,
  style,
  children,
  ...rest
}: Ds{Name}Props) => {
  return (
    <div
      ref={ref}
      className={classNames(styles.root, className)}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Ds{Name};
```

Follow these rules:

- No `forwardRef` -- pass `ref` as a regular prop.
- Use `classNames` for conditional classes, not template literals.
- No unnecessary `useMemo` or `useCallback`.
- If wrapping an Ark UI primitive, hook into its callbacks to forward to own props. Do not mirror its internal state.

#### `ds-{name}.module.scss`

```scss
.root {
  display: flex;
  align-items: center;
}
```

Follow these rules:

- Use design tokens: `--color-*`, `--spacing-*`, `--font-size-*`.
- No hardcoded colors or spacing.
- No `!important`.
- No comments (unless genuinely complex).
- Use `0.2s` for transitions.
- Use `[data-focus-visible]` for focus states, `[data-disabled]` or `&:disabled` for disabled.
- Keep component-specific CSS variables in this file, not in `_root.scss`.
- Use `@mixin` for repeated patterns.

#### `ds-{name}.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import Ds{Name} from './ds-{name}';
import { ds{Name}Variants } from './ds-{name}.types';

const meta: Meta<typeof Ds{Name}> = {
  title: 'Design System/{Name}',
  component: Ds{Name},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ds{Name}Variants },
    className: { table: { disable: true } },
    style: { table: { disable: true } },
    ref: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof Ds{Name}>;

export const Default: Story = {
  args: {
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Add assertions using getByRole, getByText, getByLabelText
    // Use semantic assertions: toBeChecked, toBeDisabled, toBeVisible
    // Await all interactions
  },
};
```

Follow these rules:

- Every story MUST have a `play` function.
- Use `fn()` for all callback args.
- Use a11y queries: `getByRole`, `getByLabelText`, `getByText`. Never `getByTestId`.
- Import variant arrays from types for `argTypes.options`.
- Hide internal args (`className`, `style`, `ref`) with `table: { disable: true }`.
- No inline styles -- use `*.stories.module.scss` if needed.
- Add stories for: Default, each variant, Disabled, Controlled (if applicable), Localized (if has `locale` prop).

#### `index.ts`

```typescript
export { default as Ds{Name} } from './ds-{name}';
export type { Ds{Name}Props } from './ds-{name}.types';
```

Note: the barrel file uses `.ts` extension, not `.tsx`.

### Step 3: Wire the barrel export

Add the new component to `packages/design-system/src/index.ts` in **alphabetical order**:

```typescript
export * from './components/ds-{name}';
```

### Step 4: Validate

Run the following commands from the workspace root:

```bash
pnpm eslint packages/design-system/src/components/ds-{name}/
pnpm --filter @drivenets/design-system typecheck
```

Fix any errors before finishing.
