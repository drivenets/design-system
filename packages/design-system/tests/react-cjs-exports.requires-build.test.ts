import fs from 'node:fs';
import path from 'node:path';
import { it, describe, expect, beforeAll } from 'vitest';

const packageCjs = path.resolve(__dirname, '../dist/index.cjs');

describe('React CJS export', () => {
	beforeAll(() => {
		if (!fs.existsSync(packageCjs)) {
			throw new Error('Please run `pnpm build` before running this test.');
		}
	});

	// This test ensures that the CJS build is valid (e.g. exporting components as functions and not as `{ default: Component }`).
	it('should export React in CJS', async () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore - Will exist when running the test.
		const { DsButton } = (await import(packageCjs)) as {
			DsButton: unknown;
		};

		expect(typeof DsButton).toBe('function');
	});
});
