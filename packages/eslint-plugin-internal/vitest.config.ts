import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		setupFiles: ['./vitest.setup.ts'],
		// Typed linting initialization can take a while
		testTimeout: 10000,
		coverage: {
			provider: 'v8',
			thresholds: {
				lines: 90,
			},
		},
	},
});
