import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium, type Browser, type Page } from 'playwright';
import { afterAll, beforeAll, describe, it } from 'vitest';
import { getStorySnippet, resolveComponents, type ManifestComponent } from './components-manifest';
import { readShowCodeSnippet } from './read-show-code';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(dirname, '../../');

const COMPONENTS = [
	'alert-banner',
	'autocomplete',
	'avatar',
	'avatar-group',
	'bot-button',
	'breadcrumb',
	'bulk-actions',
	'button-v3',
	'card',
	'catalog-layout',
	'checkbox',
	'date-picker',
	'date-range-picker',
	'dialog',
	'divider',
	'expandable-text-input',
	'file-upload',
	'filter-status-icon',
	'form-control',
	'grid',
	'icon',
	'key-value-pair',
	'loader',
	'main-menu',
	'number-input',
	'password-input',
	'progress-arc',
	'progress-donut',
	'progress-linear',
	'radio-group',
	'segment-group',
	'select',
	'skeleton',
	'slider',
	'smart-tabs',
	'spinner',
	'stack',
	'status-badge',
	'status-badge-v2',
	'stepper',
	'tabs',
	'tag',
	'tag-filter',
	'text-input',
	'textarea',
	'time-picker',
	'toggle',
	'top-bar-navigation',
	'tree',
	'typography',
	'vertical-tabs',
	'workspace-layout',
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
	COMPONENTS.map(async (name) => ({ name, manifestComponents: await resolveComponents(name) })),
);

describe('docs snippets', () => {
	let browser: Browser;

	beforeAll(async () => {
		browser = await chromium.launch({ headless: true });
	});

	afterAll(async () => {
		await browser.close();
	});

	for (const { name, manifestComponents } of components) {
		it.concurrent(`ds-${name} docs snippets match staged authoring rules`, async ({ expect }) => {
			// A folder may resolve to several manifest components (e.g. ds-form-control);
			// build each on its own page in parallel, then aggregate in resolved order.
			const sections = await Promise.all(
				manifestComponents.map(async (component) => {
					const page = await browser.newPage({
						viewport: { width: 1400, height: 900 },
						timezoneId: 'UTC',
					});

					try {
						return await buildComponentDocsSnapshot(page, component);
					} finally {
						await page.close();
					}
				}),
			);

			const document = sections.join('\n\n');

			await expect(document).toMatchFileSnapshot(getComponentSnapshotPath(name));
		}, 180_000);
	}
});
