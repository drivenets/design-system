# Styling System

## Overview

The DS uses **SCSS modules** for component-scoped styles and **CSS custom
properties** for design tokens. There are two token layers — a legacy flat
palette and a newer semantic token system — coexisting during a migration.

## Token Architecture

### Layer 1: Legacy Flat Palette (`_colors.scss`)

A flat SCSS map generates CSS custom properties with short names:

```scss
$colors: (
  deep-blue: #0b1b36,
  neutral-1: #f5f6f8,
  action-cta1: #2b6bf3,
  ...,
);
// Generates: --deep-blue, --neutral-1, --action-cta1, etc.
```

Applied to `:root` via the `applyRootColors` mixin.

### Layer 2: Semantic Tokens (`_root.scss`)

Structured CSS custom properties following a `--color-{category}-{step}` pattern:

```css
:root {
  --color-blue-500: ...;
  --color-primary-600: ...;
  --color-secondary-700-net-1: ...;
  --color-data-*: ...;
  --color-primary-700-default: ...;
}
```

Extended palettes: brand, gray, green, red, plus functional aliases.

### Migration State (`_root_updated.scss`)

A transitional file mapping older `--color-*` names to new `--color-dap-*` names.
Commented as "Temp step for moving into new tokens."

## Spacing

Defined in `_spacing.scss` as `:root` custom properties:

```css
:root {
  --base-unit: 4px;
  --spacing-1: 4px; /* 1 × base */
  --spacing-2: 8px; /* 2 × base */
  --spacing-3: 12px; /* 3 × base */
  --spacing-4: 16px; /* ... */
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-12: 48px;
  --spacing-24: 96px;

  /* DS v1.2 named scale */
  --spacing-none: 0;
  --spacing-4xs: 2px;
  --spacing-3xs: 4px;
  --spacing-2xs: 6px;
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 20px;
  --spacing-xl: 24px;
  --spacing-2xl: 32px;
  --spacing-3xl: 40px;
  --spacing-4xl: 48px;
  --spacing-5xl: 64px;
}
```

## Typography

Defined in `_variables.scss` as SCSS variables and in `_typography.scss` as mixins:

- **Font families**: Roboto (primary), Fira Mono (monospace), Material Symbols (icons)
- **Sizes, weights, line heights**: SCSS variables (`$font-size-*`, `$font-weight-*`, `$line-height-*`)
- **Mixins**: `h1`–`h7`, `p-xl`–`p-s`, `action*`, `line-clamp`, `ellipsis`

Components use the `DsTypography` component for text rendering rather than applying
typography mixins directly.

## SCSS Module Pattern

Each component has a `.module.scss` file that:

1. References tokens via CSS custom properties (not SCSS variables directly)
2. Is scoped to the component via CSS Modules (class name hashing)
3. May `@use` shared SCSS for mixins or variables when needed

```scss
// ds-button-new.module.scss
.button {
  background-color: var(--color-primary-600);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-family: var(--font-family-primary);
}
```

## Global Styles Entry Point

`src/styles/styles.scss` composes all global token files in order:

```
variables → reset → colors → typography → grid → utilities → spacing → scrollbars → root → shared
```

This is compiled into `index.min.css` during the library build and also loaded
in Storybook and browser test setup for accurate rendering.

## Source Files

| File                              | Contains                                            |
| --------------------------------- | --------------------------------------------------- |
| `src/styles/_colors.scss`         | Legacy flat color palette (SCSS map → CSS vars)     |
| `src/styles/_root.scss`           | Semantic color tokens (`--color-{category}-{step}`) |
| `src/styles/_root_updated.scss`   | Migration mapping (old → new token names)           |
| `src/styles/_spacing.scss`        | Spacing scale (`:root` CSS custom properties)       |
| `src/styles/_variables.scss`      | Typography SCSS variables, breakpoints              |
| `src/styles/_typography.scss`     | Typography mixins                                   |
| `src/styles/_grid-variables.scss` | Grid system variables                               |
| `src/styles/styles.scss`          | Composition entry point                             |
