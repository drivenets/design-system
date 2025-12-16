# Design System UI Components Library

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test web` to execute the unit tests via [Vitest](https://vitest.dev/).

## Steps to generate a new component

Run the following command to generate a new component:

```bash
npx nx generate @dap-workspace/dap-plugin:ds-component my-component
```

## How this library was created

```bash
dap-workspace git:(andrei/storybook) ✗ nx g @nx/react:library web --directory=libs/web --importPath=@drivenets/design-system --publishable
```

Add Storybook support:

```bash
➜  web git:(andrei/storybook) ✗ pnpm dlx storybook@latest init --type react
```

This will install and start Storybook dev server on port 6006.

## How to run Storybook

```bash
dap-workspace git:(andrei/storybook) ✗ npx nx run web:storybook
```
