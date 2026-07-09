import { chromium, type Browser, type Page } from 'playwright';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { readManifestSnippet } from '../../../../tests/storybook/read-manifest-snippet';
import { readShowCodeSnippet } from '../../../../tests/storybook/read-show-code';

const DOCS_STORY_ID = 'components-breadcrumb--docs';
const COMPONENT_ID = 'components-breadcrumb';

describe('DsBreadcrumb docs snippets', () => {
	let browser: Browser;
	let page: Page;

	beforeAll(async () => {
		browser = await chromium.launch({ headless: true });
		page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
	});

	afterAll(async () => {
		await browser.close();
	});

	describe('Default', () => {
		it('Show code panel matches staged authoring rules', async () => {
			const snippet = await readShowCodeSnippet(page, {
				docsStoryId: DOCS_STORY_ID,
				storyName: 'Default',
			});

			expect(snippet).toContain("type: 'code'");
			expect(snippet).toContain('withTanStackRouter');
			expect(snippet).toMatchSnapshot();
		});

		it('MCP manifest snippet matches staged authoring rules', async () => {
			const snippet = await readManifestSnippet(COMPONENT_ID, 'Default');

			expect(snippet).not.toContain('withTanStackRouter');
			expect(snippet).toMatchSnapshot();
		});
	});

	describe('With Dropdown', () => {
		it('Show code panel matches staged authoring rules', async () => {
			const snippet = await readShowCodeSnippet(page, {
				docsStoryId: DOCS_STORY_ID,
				storyName: 'With Dropdown',
			});

			expect(snippet).toContain("type: 'dropdown'");
			expect(snippet).toMatchSnapshot();
		});

		it('MCP manifest snippet matches staged authoring rules', async () => {
			const snippet = await readManifestSnippet(COMPONENT_ID, 'With Dropdown');

			expect(snippet).toContain("type: 'dropdown'");
			expect(snippet).toMatchSnapshot();
		});
	});
});
