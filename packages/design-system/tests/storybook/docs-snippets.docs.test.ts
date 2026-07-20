import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium, type Browser, type Page } from 'playwright';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { readManifestSnippet } from './read-manifest-snippet';
import { readShowCodeSnippet } from './read-show-code';
import { getStorybookUrl } from './storybook-url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(dirname, '../../');

const COMPONENTS = ['ds-button-v3', 'ds-breadcrumb'];

interface ManifestStory {
	id: string;
	name: string;
	snippet?: string;
	description?: string;
}

interface ManifestComponent {
	id: string;
	name: string;
	path: string;
	stories?: ManifestStory[];
}

interface ComponentsManifest {
	components: Record<string, ManifestComponent>;
}

async function fetchComponentsManifest(): Promise<ComponentsManifest> {
	const storybookUrl = getStorybookUrl();
	const response = await fetch(`${storybookUrl}/manifests/components.json`);

	if (!response.ok) {
		throw new Error(`Failed to fetch components manifest (${String(response.status)}) from ${storybookUrl}`);
	}

	return (await response.json()) as ComponentsManifest;
}

function resolveAllowlistedComponents(
	manifest: ComponentsManifest,
	allowlist: string[],
): ManifestComponent[] {
	const allComponents = Object.values(manifest.components);

	return allowlist.map((folder) => {
		const component = allComponents.find((entry) => entry.path.includes(`/${folder}/`));

		if (!component) {
			throw new Error(`No manifest component found for folder "${folder}"`);
		}

		return component;
	});
}

function getComponentFolder(componentPath: string): string {
	const match = /components\/([^/]+)\//.exec(componentPath);

	if (!match?.[1]) {
		throw new Error(`Could not derive component folder from path "${componentPath}"`);
	}

	return match[1];
}

function getComponentSnapshotPath(componentPath: string): string {
	const folder = getComponentFolder(componentPath);

	return path.join(packageRoot, 'src/components', folder, '__tests__/__snapshots__', `${folder}.docs.snap`);
}

async function buildComponentDocsSnapshot(page: Page, component: ManifestComponent): Promise<string> {
	const sections: string[] = [`# ${component.name} docs snippets`, ''];

	for (const story of component.stories ?? []) {
		const showCode = await readShowCodeSnippet(page, {
			docsStoryId: `${component.id}--docs`,
			storyName: story.name,
		});
		const manifestSnippet = await readManifestSnippet(component.id, story.name);

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

const manifest = await fetchComponentsManifest();
const components = resolveAllowlistedComponents(manifest, COMPONENTS);

describe.sequential('docs snippets', () => {
	let browser: Browser;
	let page: Page;

	beforeAll(async () => {
		browser = await chromium.launch({ headless: true });
		page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
	});

	afterAll(async () => {
		await browser.close();
	});

	describe.each(components)('$name', (component) => {
		it('docs snippets match staged authoring rules', async () => {
			const document = await buildComponentDocsSnapshot(page, component);

			await expect(document).toMatchFileSnapshot(getComponentSnapshotPath(component.path));
		});
	});
});
