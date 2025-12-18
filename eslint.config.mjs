import { defineConfig, globalIgnores } from 'eslint/config';
import baseConfig from './eslint.config.base.mjs';

export default defineConfig(
	...baseConfig,

	globalIgnores(['./packages/**']),
);
