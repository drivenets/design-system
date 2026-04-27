import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		isolate: false,
		coverage: {
			provider: 'v8',
			thresholds: {
				'100': true,
			},
		},
	},
});
