import { chromium, type Browser, type Page } from 'playwright';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { readManifestSnippet } from '../../../../tests/storybook/read-manifest-snippet';
import { readShowCodeSnippet } from '../../../../tests/storybook/read-show-code';

const DOCS_STORY_ID = 'components-buttonv3--docs';
const COMPONENT_ID = 'components-buttonv3';

describe('DsButtonV3 docs snippets', () => {
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

			expect(snippet).toContain('Button');
			expect(snippet).toContain('check_circle');
			expect(snippet).toMatchSnapshot();
		});

		it('MCP manifest snippet matches staged authoring rules', async () => {
			const snippet = await readManifestSnippet(COMPONENT_ID, 'Default');

			expect(snippet).toMatchSnapshot();
		});
	});

	describe('Loading', () => {
		it('Show code panel matches staged authoring rules', async () => {
			const snippet = await readShowCodeSnippet(page, {
				docsStoryId: DOCS_STORY_ID,
				storyName: 'Loading',
			});

			expect(snippet).toContain('loading');
			expect(snippet).toMatchSnapshot();
		});

		it('MCP manifest snippet matches staged authoring rules', async () => {
			const snippet = await readManifestSnippet(COMPONENT_ID, 'Loading');

			expect(snippet).toMatchSnapshot();
		});
	});

	describe('Disabled', () => {
		it('Show code panel matches staged authoring rules', async () => {
			const snippet = await readShowCodeSnippet(page, {
				docsStoryId: DOCS_STORY_ID,
				storyName: 'Disabled',
			});

			expect(snippet).toContain('disabled');
			expect(snippet).toMatchSnapshot();
		});

		it('MCP manifest snippet matches staged authoring rules', async () => {
			const snippet = await readManifestSnippet(COMPONENT_ID, 'Disabled');

			expect(snippet).toMatchSnapshot();
		});
	});

	describe('Icon Only', () => {
		it('Show code panel matches staged authoring rules', async () => {
			const snippet = await readShowCodeSnippet(page, {
				docsStoryId: DOCS_STORY_ID,
				storyName: 'Icon Only',
			});

			expect(snippet).toContain('Confirm');
			expect(snippet).toMatchSnapshot();
		});

		it('MCP manifest snippet matches staged authoring rules', async () => {
			const snippet = await readManifestSnippet(COMPONENT_ID, 'Icon Only');

			expect(snippet).toMatchSnapshot();
		});
	});

	describe('Selected', () => {
		it('Show code panel matches staged authoring rules', async () => {
			const snippet = await readShowCodeSnippet(page, {
				docsStoryId: DOCS_STORY_ID,
				storyName: 'Selected',
			});

			expect(snippet).toContain('selected');
			expect(snippet).toMatchSnapshot();
		});

		it('MCP manifest snippet matches staged authoring rules', async () => {
			const snippet = await readManifestSnippet(COMPONENT_ID, 'Selected');

			expect(snippet).toMatchSnapshot();
		});
	});

	describe('On Dark', () => {
		it('Show code panel matches staged authoring rules', async () => {
			const snippet = await readShowCodeSnippet(page, {
				docsStoryId: DOCS_STORY_ID,
				storyName: 'On Dark',
			});

			expect(snippet).toContain('light');
			expect(snippet).toMatchSnapshot();
		});

		it('MCP manifest snippet matches staged authoring rules', async () => {
			const snippet = await readManifestSnippet(COMPONENT_ID, 'On Dark');

			expect(snippet).toContain('light');
			expect(snippet).toMatchSnapshot();
		});
	});

	describe('Responsive Size', () => {
		it('Show code panel matches staged authoring rules', async () => {
			const snippet = await readShowCodeSnippet(page, {
				docsStoryId: DOCS_STORY_ID,
				storyName: 'Responsive Size',
			});

			expect(snippet).toContain('<DsStack');
			expect(snippet).toMatchSnapshot();
		});

		it('MCP manifest snippet matches staged authoring rules', async () => {
			const snippet = await readManifestSnippet(COMPONENT_ID, 'Responsive Size');

			expect(snippet).toContain('<DsStack');
			expect(snippet).toMatchSnapshot();
		});
	});
});
