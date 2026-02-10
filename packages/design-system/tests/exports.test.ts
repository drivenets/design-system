import fs from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('Design System exports', () => {
	const expectedLines = fs
		.readdirSync('./src/components')
		.toSorted()
		.map((component) => {
			return `export * from './components/${component}';`;
		});

	const actualContent = fs.readFileSync('./src/index.ts', 'utf-8');
	const actualLines = actualContent.split('\n').filter((line) => line.trim().length > 0);

	const tests = expectedLines.map((expectedLine, index) => {
		return [actualLines[index], expectedLine];
	});

	it('should export all components', () => {
		expect(actualLines.length).toBe(expectedLines.length);
	});

	// split expected by line and assert that each line is exported
	it.each(tests)('"%s" is exported from the package', (actual, expected) => {
		expect(actual).toBe(expected);
	});
});
