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
	'comment-bubble',
	'comment-card',
	'comment-indicator',
	'comments-drawer',
	'date-picker',
	'date-range-picker',
	'dialog',
	'divider',
	'drawer',
	'dropdown-menu',
	'empty-state',
	'expandable-text-input',
	'file-upload',
	'filter-status-icon',
	'form-control',
	'grid',
	'icon',
	'illustration',
	'key-value-pair',
	'loader',
	'main-menu',
	'modal',
	'number-input',
	'panel',
	'password-input',
	'popover',
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
	'table',
	'tabs',
	'tag',
	'tag-filter',
	'text-input',
	'textarea',
	'time-picker',
	'toast',
	'toggle',
	'tooltip',
	'top-bar-navigation',
	'tree',
	'typography',
	'vertical-tabs',
	'workspace-layout',
];

// Folders whose stories fan out into many story titles (each a separate manifest
// component) produce a single aggregated golden that runs to thousands of lines
// where every section shares the same `# DsTable` header — unnavigable for humans
// and agents alike. Split those into one golden per manifest component instead.
const SPLIT_PER_MANIFEST = new Set(['table']);

function getComponentSnapshotPath(name: string): string {
	const folder = `ds-${name}`;

	return path.join(packageRoot, 'src/components', folder, '__tests__/__snapshots__', `${folder}.docs.snap`);
}

// Names the per-manifest golden from the title-derived id so the file mirrors the
// story hierarchy (`components-table-selection` → `ds-table-selection.docs.snap`).
function getManifestSnapshotPath(name: string, component: ManifestComponent): string {
	const folder = `ds-${name}`;
	const fileName = component.id.replace(/^components-/, 'ds-');

	return path.join(packageRoot, 'src/components', folder, '__tests__/__snapshots__', `${fileName}.docs.snap`);
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
			const built = await Promise.all(
				manifestComponents.map(async (component) => {
					const page = await browser.newPage({
						viewport: { width: 1400, height: 900 },
						timezoneId: 'UTC',
					});

					try {
						return { component, document: await buildComponentDocsSnapshot(page, component) };
					} finally {
						await page.close();
					}
				}),
			);

			// Split folders write one golden per manifest component; the rest aggregate
			// every manifest component into a single colocated golden.
			const snapshots = SPLIT_PER_MANIFEST.has(name)
				? built.map(({ component, document }) => ({
						path: getManifestSnapshotPath(name, component),
						document,
					}))
				: [
						{
							path: getComponentSnapshotPath(name),
							document: built.map((entry) => entry.document).join('\n\n'),
						},
					];

			await Promise.all(
				snapshots.map(({ path: snapshotPath, document }) =>
					expect(document).toMatchFileSnapshot(snapshotPath),
				),
			);
		}, 180_000);
	}
});
