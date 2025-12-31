import fs from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('Design System exports', () => {
	it('should export all components from index', () => {
		// Arrange.
		const expectedExports =
			fs
				.readdirSync('./src/components')
				.toSorted()
				.map((component) => {
					return `export * from './components/${component}';`;
				})
				.join('\n') + '\n';

		// Assert.
		const indexFileContent = fs.readFileSync('./src/index.ts', 'utf-8');

		expect(indexFileContent).toBe(expectedExports);
	});
});
