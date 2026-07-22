import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium, type Browser, type Page } from 'playwright';
import { afterAll, beforeAll, describe, it } from 'vitest';
import { getStorySnippet, resolveComponent, type ManifestComponent } from './components-manifest';
import { readShowCodeSnippet } from './read-show-code';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(dirname, '../../');

const COMPONENTS = [
	'alert-banner',
	'autocomplete',
	'avatar',
	'avatar-group',
	'breadcrumb',
	'button-v3',
	'card',
	'catalog-layout',
	'checkbox',
	'date-picker',
	'date-range-picker',
	'dialog',
];

function getComponentSnapshotPath(name: string): string {
	const folder = `ds-${name}`;

	return path.join(packageRoot, 'src/components', folder, '__tests__/__snapshots__', `${folder}.docs.snap`);
}

async function buildComponentDocsSnapshot(page: Page, component: ManifestComponent): Promise<string> {
	const sections: string[] = [`# ${component.name} docs snippets`, ''];

	for (const story of component.stories ?? []) {
		const showCode = await readShowCodeSnippet(page, {
			docsStoryId: `${component.id}--docs`,
			storyName: story.name,
		});
		const manifestSnippet = await getStorySnippet(component.id, story.name);

		sections.push(
			`## ${story.name}`,
			'',
			'### Show code',
			showCode,
			'',
			'### MCP manifest',
			manifestSnippet,
			'',
		);
	}

	return sections.join('\n').trimEnd();
}

const components = await Promise.all(
	COMPONENTS.map(async (name) => ({ name, component: await resolveComponent(name) })),
);

describe('docs snippets', () => {
	let browser: Browser;

	beforeAll(async () => {
		browser = await chromium.launch({ headless: true });
	});

	afterAll(async () => {
		await browser.close();
	});

	for (const { name, component } of components) {
		it.concurrent(`${component.name} docs snippets match staged authoring rules`, async ({ expect }) => {
			const page = await browser.newPage({ viewport: { width: 1400, height: 900 }, timezoneId: 'UTC' });

			try {
				const document = await buildComponentDocsSnapshot(page, component);

				await expect(document).toMatchFileSnapshot(getComponentSnapshotPath(name));
			} finally {
				await page.close();
			}
		});
	}
});
