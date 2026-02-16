import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		setupFiles: ['./vitest.setup.ts'],
		coverage: {
			provider: 'v8',
			thresholds: {
				'100': true,
			},
		},
	},
});
