import { defineConfig, globalIgnores } from 'eslint/config';
import baseConfig from './eslint.config.base';

export default defineConfig(
	...baseConfig,

	// Exclude packages since they have their own ESLint configuration.
	globalIgnores(['./packages/**']),
);
