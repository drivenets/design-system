import fs from 'node:fs';
import path from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';

const bundles = ['index.js', 'index.cjs'].map((file) => path.resolve(__dirname, '../dist', file));

describe.each(bundles)('Breakpoint exports in %s', (bundle) => {
	let breakpointExports: [string, unknown][];

	beforeAll(async () => {
		if (!fs.existsSync(bundle)) {
			throw new Error('Please run `pnpm build` before running this test.');
		}

		const exports = (await import(bundle)) as Record<string, unknown>;

		breakpointExports = Object.entries(exports).filter(([name]) => name.startsWith('BREAKPOINT_'));
	});

	it('should export at least one breakpoint', () => {
		expect(breakpointExports.length).toBeGreaterThan(0);
	});

	it('should export every breakpoint as a finite number', () => {
		for (const [name, value] of breakpointExports) {
			expect(Number.isFinite(value), `${name} is ${String(value)}`).toBe(true);
		}
	});
});
