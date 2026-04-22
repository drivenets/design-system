import { defineConfig, globalIgnores } from 'eslint/config';
import baseConfig from './eslint.config.base';

export default defineConfig(
	...baseConfig,

	// Exclude packages (own ESLint config) and tools (standalone projects).
	globalIgnores(['./packages/**', './tools/**'], 'root/exclude-packages-and-tools'),
);
