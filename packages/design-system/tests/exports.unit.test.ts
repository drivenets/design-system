import fs from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('Design System exports', () => {
	const expectedLines = fs
		.readdirSync('./src/components')
		.toSorted()
		.map((component) => {
			return `export * from './components/${component}';`;
		});

	const utilityExports = ["export * from './utils/responsive';"];

	const allExpectedLines = [...expectedLines, ...utilityExports];

	const actualContent = fs.readFileSync('./src/index.ts', 'utf-8');
	const actualLines = actualContent.split('\n').filter((line) => line.trim().length > 0);

	const tests = allExpectedLines.map((expectedLine, index) => {
		return [actualLines[index], expectedLine];
	});

	it('should export all components and utilities', () => {
		expect(actualLines.length).toBe(allExpectedLines.length);
	});

	it.each(tests)('"%s" is exported from the package', (actual, expected) => {
		expect(actual).toBe(expected);
	});
});
