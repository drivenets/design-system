# Design System UI Components Library

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test web` to execute the unit tests via [Vitest](https://vitest.dev/).

## Steps to generate a new component

Run the following command to generate a new component:

```bash
npx nx g ds-component --name my-component
```

## How this library was created

```bash
dap-workspace git:(andrei/storybook) ✗ nx g @nx/react:library web --directory=libs/web --importPath=@design-system/ui --publishable
```

Add Storybook support:

```bash
➜  web git:(andrei/storybook) ✗ pnpm dlx storybook@latest init --type react
```

This will install and start Storybook dev server on port 6006.
