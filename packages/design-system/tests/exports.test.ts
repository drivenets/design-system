import fs from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('Design System exports', () => {
	it('should export all components from index', () => {
		// Arrange.
		const components = fs.readdirSync('./src/components').map((component) => {
			return `export * from './components/${component}';`;
		});

		// Assert.
		const indexFileContent = fs.readFileSync('./src/index.ts', 'utf-8');

		components.forEach((componentExport) => {
			expect(indexFileContent).toContain(componentExport);
		});
	});
});
