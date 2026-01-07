# DriveNets Design System Vite Plugin

This Vite plugin automatically includes the necessary font links for the DriveNets Design System in your Vite-powered application.

## Installation

First, install the package via your preferred package manager:

```bash
npm install @drivenets/vite-plugin
# or
pnpm install @drivenets/vite-plugin
# or
yarn add @drivenets/vite-plugin
```

## Usage

To use the plugin, add it to your Vite configuration file (e.g. `vite.config.ts`):

```TS
import { defineConfig } from 'vite';
import { vitePluginDesignSystem } from '@drivenets/vite-plugin';

export default defineConfig({
  // ... your config
  plugins: [vitePluginDesignSystem()],
});
```

This will automatically inject the required font links into the `<head>` section of your `index.html` file during the build process.
