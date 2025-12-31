import fs from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('Design System exports', () => {
	it('should export all components from index', () => {
		// Arrange.
		const expectedContent =
			fs
				.readdirSync('./src/components')
				.toSorted()
				.map((component) => {
					return `export * from './components/${component}';`;
				})
				.join('\n') + '\n';

		// Assert.
		const actualContent = fs.readFileSync('./src/index.ts', 'utf-8');

		expect(actualContent).toBe(expectedContent);
	});
});
