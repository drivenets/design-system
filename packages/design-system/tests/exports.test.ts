import fs from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('Design System exports', () => {
	const expectedLines = fs.readdirSync('./src/components').map((component) => {
		return `export * from './components/${component}';`;
	});

	const actualContent = fs.readFileSync('./src/index.ts', 'utf-8');
	const actualLines = actualContent.split('\n');

	// split expected by line and assert that each line is exported
	it.each(expectedLines)('"%s" is exported from the package', (expectedExport) => {
		expect(actualLines.some((actualExport) => actualExport === expectedExport)).toBe(true);
	});
});
