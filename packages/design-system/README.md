# DriveNets Design System

Official DriveNets Design System for application development in React.

## Installation

First, install the package via your preferred package manager:

```bash
npm install @drivenets/design-system
# or
pnpm install @drivenets/design-system
# or
yarn add @drivenets/design-system
```

Then, import the css styles in your application root (e.g., `main.tsx` or `App.tsx`):

```typescript
import '@drivenets/design-system/index.min.css';
```

You'll also need to import the relevant fonts in your `index.html` file.

We recommend using our provided Vite plugin to automatically include the necessary font links. You can find more information about the plugin in the [Vite Plugin README](https://github.com/drivenets/design-system/tree/main/packages/vite-plugin).

Or you can manually add the following lines to the `<head>` section of your `index.html` file:

```HTML
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0..1,0&display=block" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,400,0..1,0&display=block" />
```

## Usage

You can now use the DriveNets Design System components in your React application. Here's a simple example:

```typescript
import { DsButton } from '@drivenets/design-system';

export const App = () => {
  return (
      <DsButton onClick={() => alert('Button clicked!')}>Click Me</DsButton>
  );
};
```

## Testing with JSDOM

Components render and respond to user events in JSDOM-based test runners (Vitest or Jest with `jsdom`). JSDOM lacks a few browser APIs the components use, so add these stubs to your test setup file:

```typescript
// vitest.setup.ts (with Jest, use jest.fn() instead of vi.fn())
import { vi } from 'vitest';

window.matchMedia = vi.fn((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  addListener: vi.fn(),
  removeListener: vi.fn(),
  dispatchEvent: vi.fn(() => false),
}));

globalThis.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

Element.prototype.scrollTo = vi.fn();
Element.prototype.scrollIntoView = vi.fn();
HTMLCanvasElement.prototype.getContext = vi.fn(() => null);
```

Without them, most components throw `window.matchMedia is not a function` on render, `DsSelect` throws when it opens, and components that measure their content throw `ResizeObserver is not defined`. The `getContext` stub only silences JSDOM's "Not implemented" message from `DsCodeInput`.

Known limitations, because JSDOM does no layout:

- Elements have no size, so a `DsTable` with `virtualized` set renders no data rows. Leave `virtualized` off in tests that check rows.
- Truncation (tooltips on truncated text), overlay positioning and scroll behavior can't be asserted. Cover them in a real browser (for example Vitest browser mode or Playwright).
- Responsive layouts always render the medium breakpoint, since the `matchMedia` stub above never matches.

Query components by role and accessible name (`getByRole('combobox')`, `getByRole('dialog', { name: 'Title' })`) and drive them with `@testing-library/user-event`. The design system runs the same scenarios in [`tests/jsdom`](https://github.com/drivenets/design-system/tree/main/packages/design-system/tests/jsdom).
