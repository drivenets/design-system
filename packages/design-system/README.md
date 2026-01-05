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

```TSX
import '@drivenets/design-system/index.min.css';
```

You'll also need to import the relevant fonts in your `index.html` file.

We recommend using our provided Vite plugin to automatically include the necessary font links. You can find more information about the plugin in the [Vite Plugin README](https://github.com/drivenets/design-system/tree/main/packages/vite-plugin).

Or you can manually add the following lines to the `<head>` section of your `index.html` file:

```HTML
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" />

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
