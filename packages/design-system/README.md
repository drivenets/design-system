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

## AI coding agents

To set up your app's coding agents (Cursor, Claude Code, Codex, …) to use the design system, paste this prompt into your agent from the app's root:

```text
Set up this repo's coding agents for the DriveNets Design System.
If @drivenets/design-system isn't a dependency yet, install it with the repo's package manager.
Then read node_modules/@drivenets/design-system/skills/drivenets-design-system/setup.md and follow it.
If that file doesn't exist, the installed version is too old: tell me, and don't upgrade without asking.
```

The agent follows [`setup.md`](https://github.com/drivenets/design-system/blob/main/packages/design-system/skills/drivenets-design-system/setup.md), which ships with the package. It:

- connects the design system MCP server, [`@drivenets/design-system-mcp`](https://github.com/drivenets/design-system/tree/main/packages/mcp), for the project;
- turns on the [ESLint plugin](https://github.com/drivenets/design-system/tree/main/packages/eslint-plugin)'s recommended rules, and asks you before changing existing code they flag;
- adds a short block to `AGENTS.md` that points agents at the design system skill, [`SKILL.md`](https://github.com/drivenets/design-system/blob/main/packages/design-system/skills/drivenets-design-system/SKILL.md).

Both files come from the installed package, so they match your version. Run the prompt again after upgrading to refresh the `AGENTS.md` block.

To install the skill natively in agents that support [skills](https://skills.sh), run:

```bash
npx skills add drivenets/design-system --skill drivenets-design-system
```

That copy follows the repository's `main` branch, not your installed version.
