import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		isolate: false,
		include: ['src/**/*.test.ts'],
		coverage: {
			provider: 'v8',
			include: ['src/**/*.ts'],
			exclude: ['src/cli.ts', 'src/server.ts', 'src/**/*.test.ts'],
			thresholds: {
				'100': true,
			},
		},
	},
});
