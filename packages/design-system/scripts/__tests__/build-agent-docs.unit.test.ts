import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { buildAgentDocs, slimComponentsManifest, slimDocsManifest } from '../build-agent-docs';

const PACKAGE_ROOT = '/ci/work/design-system/packages/design-system';

const createComponentsManifest = (component: Record<string, unknown> = {}) => ({
	v: 0,
	components: {
		'components-button': {
			id: 'components-button',
			name: 'DsButton',
			path: './src/components/ds-button/ds-button.stories.tsx',
			import: "import { DsButton } from '@drivenets/design-system';",
			reactDocgen: {
				displayName: 'DsButton',
				definedInFile: `${PACKAGE_ROOT}/src/components/ds-button/ds-button.tsx`,
				props: { disabled: { required: false, tsType: { name: 'boolean' } } },
			},
			stories: [{ name: 'Default', snippet: '<DsButton>Save</DsButton>' }],
			...component,
		},
	},
});

describe('slimComponentsManifest', () => {
	it('drops docgen source paths and keeps everything else', () => {
		// Act.
		const slim = slimComponentsManifest(createComponentsManifest(), PACKAGE_ROOT);

		// Assert.
		expect(slim).toStrictEqual({
			v: 0,
			components: {
				'components-button': {
					id: 'components-button',
					name: 'DsButton',
					path: './src/components/ds-button/ds-button.stories.tsx',
					import: "import { DsButton } from '@drivenets/design-system';",
					reactDocgen: {
						displayName: 'DsButton',
						props: { disabled: { required: false, tsType: { name: 'boolean' } } },
					},
					stories: [{ name: 'Default', snippet: '<DsButton>Save</DsButton>' }],
				},
			},
		});
	});

	it('makes subcomponent paths package-relative and drops their docgen source paths', () => {
		// Arrange.
		const manifest = createComponentsManifest({
			subcomponents: {
				DsGridItem: {
					name: 'DsGridItem',
					path: `${PACKAGE_ROOT}/src/components/ds-grid/index.ts`,
					reactDocgen: {
						displayName: 'DsGridItem',
						definedInFile: `${PACKAGE_ROOT}/src/components/ds-grid/ds-grid.tsx`,
						props: {},
					},
				},
			},
		});

		// Act.
		const slim = slimComponentsManifest(manifest, PACKAGE_ROOT);

		// Assert.
		expect(slim.components['components-button']?.subcomponents).toStrictEqual({
			DsGridItem: {
				name: 'DsGridItem',
				path: './src/components/ds-grid/index.ts',
				reactDocgen: { displayName: 'DsGridItem', props: {} },
			},
		});
	});

	it('keeps only the description of a docgen error, without the source dump', () => {
		// Arrange.
		const manifest = createComponentsManifest({
			reactDocgen: undefined,
			error: {
				name: 'No component definition found',
				message: [
					`File: ${PACKAGE_ROOT}/src/components/ds-card/index.ts`,
					'Error:',
					'No suitable component definition found.',
					'You can debug your component file in this playground: https://react-docgen.dev/playground',
					'Code:',
					"export { DsCard } from './ds-card';",
				].join('\n'),
			},
		});

		// Act.
		const slim = slimComponentsManifest(manifest, PACKAGE_ROOT);

		// Assert.
		expect(slim.components['components-button']?.error).toStrictEqual({
			name: 'No component definition found',
			message: 'File: ./src/components/ds-card/index.ts\nError:\nNo suitable component definition found.',
		});
	});
});

describe('slimComponentsManifest validation', () => {
	it('rejects ref-based (v1) manifests, whose referenced files are not shipped', () => {
		// Arrange.
		const manifest = { v: 1, components: {} };

		// Act & Assert.
		expect(() => slimComponentsManifest(manifest, PACKAGE_ROOT)).toThrow(/v1/);
	});

	it('fails when the slimmed manifest does not match the Storybook schema', () => {
		// Arrange.
		const manifest = createComponentsManifest({ name: 42 });

		// Act & Assert.
		expect(() => slimComponentsManifest(manifest, PACKAGE_ROOT)).toThrow(
			/components\.components-button\.name/,
		);
	});

	it('fails when an absolute path outside the package is left', () => {
		// Arrange.
		const manifest = createComponentsManifest({
			description: 'See /ci/work/design-system/node_modules/csstype/index.d.ts',
		});

		// Act & Assert.
		expect(() => slimComponentsManifest(manifest, PACKAGE_ROOT)).toThrow(/\/ci\/work\/design-system/);
	});

	it('accepts package names that read like the repo root', () => {
		// Arrange.
		const manifest = createComponentsManifest({
			import: "import '@drivenets/design-system/index.min.css';",
		});

		// Act & Assert.
		expect(() => slimComponentsManifest(manifest, '/design-system/packages/design-system')).not.toThrow();
	});
});

describe('slimDocsManifest', () => {
	it('validates guideline docs and makes their paths package-relative', () => {
		// Arrange.
		const manifest = {
			v: 0,
			docs: {
				'guidelines-colors--docs': {
					id: 'guidelines-colors--docs',
					name: 'Docs',
					title: 'Guidelines/Colors',
					path: `${PACKAGE_ROOT}/src/stories/colors.mdx`,
					content: '# Colors',
				},
			},
		};

		// Act.
		const slim = slimDocsManifest(manifest, PACKAGE_ROOT);

		// Assert.
		expect(slim.docs['guidelines-colors--docs']).toStrictEqual({
			id: 'guidelines-colors--docs',
			name: 'Docs',
			title: 'Guidelines/Colors',
			path: './src/stories/colors.mdx',
			content: '# Colors',
		});
	});

	it('fails when the docs manifest does not match the Storybook schema', () => {
		// Arrange.
		const manifest = { v: 0, docs: { colors: { id: 'colors' } } };

		// Act & Assert.
		expect(() => slimDocsManifest(manifest, PACKAGE_ROOT)).toThrow(/docs\.json[\s\S]*name/);
	});
});

describe('buildAgentDocs', () => {
	let tempDir: string;
	let packageRoot: string;

	beforeEach(() => {
		tempDir = mkdtempSync(join(tmpdir(), 'agent-docs-'));
		packageRoot = join(tempDir, 'packages', 'design-system');
	});

	afterEach(() => {
		rmSync(tempDir, { recursive: true, force: true });
	});

	it('writes minified, slimmed manifests from the Storybook build into manifests/', async () => {
		// Arrange.
		const storybookManifests = join(packageRoot, 'storybook-static', 'manifests');
		const docs = { v: 0, docs: { overview: { id: 'overview', name: 'Docs', content: '# Overview' } } };
		mkdirSync(storybookManifests, { recursive: true });
		writeFileSync(
			join(storybookManifests, 'components.json'),
			JSON.stringify(
				createComponentsManifest({
					reactDocgen: { definedInFile: `${packageRoot}/src/components/ds-button/ds-button.tsx`, props: {} },
				}),
				null,
				2,
			),
		);
		writeFileSync(join(storybookManifests, 'docs.json'), JSON.stringify(docs, null, 2));

		// Act.
		await buildAgentDocs(packageRoot);

		// Assert.
		const components = readFileSync(join(packageRoot, 'manifests', 'components.json'), 'utf8');
		expect(components).not.toContain('\n');
		expect(JSON.parse(components)).toStrictEqual({
			v: 0,
			components: {
				'components-button': {
					id: 'components-button',
					name: 'DsButton',
					path: './src/components/ds-button/ds-button.stories.tsx',
					import: "import { DsButton } from '@drivenets/design-system';",
					reactDocgen: { props: {} },
					stories: [{ name: 'Default', snippet: '<DsButton>Save</DsButton>' }],
				},
			},
		});
		expect(readFileSync(join(packageRoot, 'manifests', 'docs.json'), 'utf8')).toBe(JSON.stringify(docs));
	});
});
