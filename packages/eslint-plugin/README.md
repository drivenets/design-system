# DriveNets Design System ESLint Plugin

This ESLint plugin provides custom linting rules and configurations for projects using the DriveNets Design System.

It helps enforce best practices and migrating from deprecated components and props.

## Installation

First, install the package via your preferred package manager:

```bash
npm install @drivenets/eslint-plugin
# or
pnpm install @drivenets/eslint-plugin
# or
yarn add @drivenets/eslint-plugin
```

## Usage

> [!NOTE]
> This plugin supports only the new ESLint Flat Config format and requires ESLint 9.0.0 or higher.

To use the plugin, add it to your ESLint configuration file (e.g. `eslint.config.ts`).

You can either use the recommended config:

```TS
import { defineConfig } from 'eslint/config';
import designSystem from '@drivenets/eslint-plugin-design-system';

export default defineConfig(
  // ... your config
  designSystem.configs.recommended,
);
```

Or you can customize the rules as needed:

```TS
import { defineConfig } from 'eslint/config';
import designSystem from '@drivenets/eslint-plugin-design-system';

export default defineConfig(
  // ... your config
  {
    plugins: {
      '@drivenets/design-system': designSystem,
    },
    rules: {
      '@drivenets/design-system/no-native-button': 'off',
      '@drivenets/design-system/no-native-text-input': 'error',
    },
  }
);
```
