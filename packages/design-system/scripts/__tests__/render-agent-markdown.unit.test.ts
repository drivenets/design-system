import { describe, expect, it } from 'vitest';

import { renderAgentMarkdown, slimComponentsManifest, slimDocsManifest } from '../build-agent-docs';

const PACKAGE_ROOT = '/repo/packages/design-system';

type Component = Record<string, unknown> & { id: string };

const button: Component = {
	id: 'components-button',
	name: 'DsButton',
	summary: 'Triggers an action.',
	import: "import { DsButton } from '@drivenets/design-system';",
	reactDocgen: {
		props: {
			variant: {
				required: false,
				tsType: { name: 'union', raw: "'primary' | 'secondary'" },
				description: 'Visual style.',
				defaultValue: { value: "'primary'" },
			},
			onClick: {
				required: true,
				tsType: {
					name: 'signature',
					type: 'function',
					signature: {
						arguments: [{ name: 'event', type: { name: 'MouseEvent' } }],
						return: { name: 'void' },
					},
				},
			},
		},
	},
	stories: [
		{ name: 'Default', description: 'The main action on a page.', snippet: '<DsButton>Save</DsButton>' },
		{ name: 'Secondary', snippet: '<DsButton variant="secondary">Cancel</DsButton>' },
		{ name: 'Disabled', snippet: '<DsButton disabled>Save</DsButton>' },
		{ name: 'Loading', snippet: '<DsButton loading>Save</DsButton>' },
	],
};

const render = ({
	components = [button],
	docs = [],
}: { components?: Component[]; docs?: Component[] } = {}) =>
	renderAgentMarkdown({
		version: '0.29.0',
		components: slimComponentsManifest(
			{ v: 0, components: Object.fromEntries(components.map((component) => [component.id, component])) },
			PACKAGE_ROOT,
		),
		docs: slimDocsManifest(
			{ v: 0, docs: Object.fromEntries(docs.map((doc) => [doc.id, doc])) },
			PACKAGE_ROOT,
		),
	});

const file = (files: ReturnType<typeof render>, path: string) => files.find((f) => f.path === path)?.content;

describe('renderAgentMarkdown', () => {
	it('indexes guidelines first, by title, then components, in llms.txt', () => {
		// Arrange.
		const colors = {
			id: 'guidelines-colors--docs',
			name: 'Docs',
			title: 'Guidelines/Colors',
			summary: 'Color tokens.',
			content: '# Colors',
		};

		// Act.
		const files = render({ docs: [colors] });

		// Assert.
		expect(file(files, 'llms.txt')).toBe(
			[
				'# @drivenets/design-system 0.29.0',
				'',
				'> Components and design guidelines of the DriveNets design system, generated from the Storybook of the installed version.',
				'',
				'Read the guidelines before writing UI code. Each component file has its import, props and every Storybook example; in examples, `fn()` stands for your own event handler.',
				'',
				'## Guidelines',
				'',
				'- [Colors](guidelines/colors.md)',
				'',
				'## Components',
				'',
				'- [DsButton](components/button.md): Triggers an action.',
				'',
			].join('\n'),
		);
	});

	it('documents a component with its import, props and every story', () => {
		// Act.
		const files = render();

		// Assert.
		expect(file(files, 'components/button.md')).toBe(
			[
				'# DsButton',
				'',
				'Triggers an action.',
				'',
				'```tsx',
				"import { DsButton } from '@drivenets/design-system';",
				'```',
				'',
				'## Props',
				'',
				'```ts',
				'type DsButtonProps = {',
				'\t/**',
				'\t * Visual style.',
				"\t * @default 'primary'",
				'\t */',
				"\tvariant?: 'primary' | 'secondary';",
				'\tonClick: (event: MouseEvent) => void;',
				'};',
				'```',
				'',
				'## Examples',
				'',
				'### Default',
				'',
				'The main action on a page.',
				'',
				'```tsx',
				'<DsButton>Save</DsButton>',
				'```',
				'',
				'### Secondary',
				'',
				'```tsx',
				'<DsButton variant="secondary">Cancel</DsButton>',
				'```',
				'',
				'### Disabled',
				'',
				'```tsx',
				'<DsButton disabled>Save</DsButton>',
				'```',
				'',
				'### Loading',
				'',
				'```tsx',
				'<DsButton loading>Save</DsButton>',
				'```',
				'',
			].join('\n'),
		);
	});

	it('documents subcomponents with their own props', () => {
		// Arrange.
		const grid = {
			id: 'components-grid',
			name: 'DsGrid',
			subcomponents: {
				DsGridItem: {
					name: 'DsGridItem',
					import: "import { DsGridItem } from '@drivenets/design-system';",
					reactDocgen: { props: { span: { required: false, tsType: { name: 'number' } } } },
				},
			},
			stories: [],
		};

		// Act.
		const files = render({ components: [grid] });

		// Assert.
		expect(file(files, 'components/grid.md')).toContain(
			[
				'## Subcomponents',
				'',
				'### DsGridItem',
				'',
				'```tsx',
				"import { DsGridItem } from '@drivenets/design-system';",
				'```',
				'',
				'```ts',
				'type DsGridItemProps = {',
				'\tspan?: number;',
				'};',
				'```',
			].join('\n'),
		);
	});

	it('explains missing props when docgen failed', () => {
		// Arrange.
		const card = {
			id: 'components-card',
			name: 'DsCard.Root',
			error: {
				name: 'No component definition found',
				message: 'File: ./src/components/ds-card/index.ts\nError:\nNo suitable component definition found.',
			},
			stories: [{ name: 'Default', snippet: '<DsCard.Root />' }],
		};

		// Act.
		const files = render({ components: [card] });

		// Assert.
		expect(file(files, 'components/card.md')).toContain(
			[
				'## Props',
				'',
				"Props couldn't be extracted from the source:",
				'',
				'```',
				'File: ./src/components/ds-card/index.ts',
				'Error:',
				'No suitable component definition found.',
				'```',
				'',
				'## Examples',
			].join('\n'),
		);
	});

	it('flags deprecated components under the heading', () => {
		// Arrange.
		const chip = {
			id: 'components-chip',
			name: 'DsChip',
			summary: 'A compact element.',
			jsDocTags: {
				summary: ['A compact element.'],
				deprecated: ['Use `DsTag` instead.'],
				see: ['DsTag'],
			},
			stories: [],
		};

		// Act.
		const files = render({ components: [chip] });

		// Assert.
		expect(file(files, 'components/chip.md')).toBe(
			[
				'# DsChip',
				'',
				'> **Deprecated:** Use `DsTag` instead.',
				'> **See:** DsTag',
				'',
				'A compact element.',
				'',
			].join('\n'),
		);
	});

	it('writes each guideline as its own page', () => {
		// Arrange.
		const zIndex = {
			id: 'guidelines-z-index--docs',
			name: 'Docs',
			title: 'Guidelines/Z-Index',
			content: 'Use the `--z-index-*` tokens.',
		};

		// Act.
		const files = render({ docs: [zIndex] });

		// Assert.
		expect(file(files, 'guidelines/z-index.md')).toBe('# Z-Index\n\nUse the `--z-index-*` tokens.\n');
	});

	it('keeps multi-line prop docs readable and the import free of Storybook helpers', () => {
		// Arrange.
		const toggle = {
			id: 'components-toggle',
			name: 'DsToggle',
			import: "import { DsToggle } from '@drivenets/design-system';\nimport { fn } from 'storybook/test';",
			reactDocgen: {
				props: {
					size: {
						required: false,
						tsType: { name: 'string' },
						description: "Size of the toggle.\n@default 'medium'",
						defaultValue: { value: "'medium'" },
					},
				},
			},
			stories: [],
		};

		// Act.
		const files = render({ components: [toggle] });

		// Assert.
		expect(file(files, 'components/toggle.md')).toBe(
			[
				'# DsToggle',
				'',
				'```tsx',
				"import { DsToggle } from '@drivenets/design-system';",
				'```',
				'',
				'## Props',
				'',
				'```ts',
				'type DsToggleProps = {',
				'\t/**',
				'\t * Size of the toggle.',
				"\t * @default 'medium'",
				'\t */',
				'\tsize?: string;',
				'};',
				'```',
				'',
			].join('\n'),
		);
	});

	it('keeps only package imports in the import block', () => {
		// Arrange.
		const drawer = {
			id: 'components-drawer',
			name: 'DsDrawer',
			import: [
				"import { DsDrawer, DsStack } from '@drivenets/design-system';",
				"import DsDrawer from './ds-drawer';",
				'import {',
				'\tSettingsIcon,',
				'\tUserIcon,',
				"} from '../../stories/sample-menu-icons';",
				"import styles from './ds-drawer.stories.module.scss';",
			].join('\n'),
			stories: [],
		};

		// Act.
		const files = render({ components: [drawer] });

		// Assert.
		expect(file(files, 'components/drawer.md')).toContain(
			"```tsx\nimport { DsDrawer, DsStack } from '@drivenets/design-system';\n```",
		);
	});

	it('tells apart components that share a name, by page', () => {
		// Arrange.
		const table = { id: 'components-table', name: 'DsTable', summary: 'Data table.', stories: [] };
		const tableFilters = {
			id: 'components-table-filters',
			name: 'DsTable',
			summary: 'Data table.',
			stories: [],
		};

		// Act.
		const files = render({ components: [table, tableFilters] });

		// Assert.
		expect(file(files, 'llms.txt')).toContain(
			[
				'- [DsTable (table)](components/table.md): Data table.',
				'- [DsTable (table-filters)](components/table-filters.md): Data table.',
			].join('\n'),
		);
		expect(file(files, 'components/table-filters.md')).toMatch(/^# DsTable\n/);
	});

	it('leaves out story-only examples that the package does not export', () => {
		// Arrange.
		const sampleForm = { id: 'examples-sample-form', name: 'SampleForm', stories: [] };

		// Act.
		const files = render({ components: [button, sampleForm] });

		// Assert.
		expect(files.map((f) => f.path)).not.toContain('components/examples-sample-form.md');
		expect(file(files, 'llms.txt')).not.toContain('SampleForm');
	});

	it('fences code that itself contains a fence', () => {
		// Arrange.
		const codeInput = {
			id: 'components-code-input',
			name: 'DsCodeInput',
			stories: [{ name: 'Markdown', snippet: '<DsCodeInput value={````js\nrun();\n```` } />' }],
		};

		// Act.
		const files = render({ components: [codeInput] });

		// Assert.
		expect(file(files, 'components/code-input.md')).toContain(
			'`````tsx\n<DsCodeInput value={````js\nrun();\n```` } />\n`````',
		);
	});

	it('quotes multi-line tags, fences examples and hides tags Storybook consumes', () => {
		// Arrange.
		const tabs = {
			id: 'components-tabs',
			name: 'DsTabs',
			jsDocTags: {
				deprecated: ['Use `DsVerticalTabs`.\n\nRemoved in 1.0.'],
				example: ['<DsTabs />'],
				ignore: [''],
				import: ["import { DsTabs } from '@drivenets/design-system';"],
			},
			stories: [],
		};

		// Act.
		const files = render({ components: [tabs] });

		// Assert.
		expect(file(files, 'components/tabs.md')).toBe(
			[
				'# DsTabs',
				'',
				'> **Deprecated:** Use `DsVerticalTabs`.',
				'>',
				'> Removed in 1.0.',
				'',
				'**Example:**',
				'',
				'```tsx',
				'<DsTabs />',
				'```',
				'',
			].join('\n'),
		);
	});

	it('refuses two entries that would write the same page', () => {
		// Arrange.
		const overview = { id: 'overview--docs', name: 'Docs', title: 'Overview', content: '' };
		const guidelinesOverview = {
			id: 'guidelines-overview--docs',
			name: 'Docs',
			title: 'Guidelines/Overview',
		};

		// Act & Assert.
		expect(() => render({ docs: [overview, guidelinesOverview] })).toThrow(/guidelines\/overview\.md/);
	});

	it.each([
		{
			type: { name: 'union', elements: [{ name: 'literal', value: "'a'" }, { name: 'null' }] },
			expected: "'a' | null",
		},
		{ type: { name: 'intersection', elements: [{ name: 'A' }, { name: 'B' }] }, expected: 'A & B' },
		{ type: { name: 'Array', elements: [{ name: 'string' }] }, expected: 'string[]' },
		{
			type: { name: 'tuple', elements: [{ name: 'number' }, { name: 'string' }] },
			expected: '[number, string]',
		},
		{
			type: { name: 'Record', elements: [{ name: 'string' }, { name: 'number' }] },
			expected: 'Record<string, number>',
		},
		{
			type: {
				name: 'signature',
				type: 'object',
				signature: {
					properties: [
						{ key: 'id', value: { name: 'string', required: true } },
						{ key: 'label', value: { name: 'string' } },
					],
				},
			},
			expected: '{ id: string; label?: string }',
		},
		{ type: undefined, expected: 'any' },
	])('prints the $expected prop type', ({ type, expected }) => {
		// Arrange.
		const input = {
			id: 'components-input',
			name: 'DsInput',
			reactDocgen: { props: { value: { required: true, tsType: type } } },
			stories: [],
		};

		// Act.
		const files = render({ components: [input] });

		// Assert.
		expect(file(files, 'components/input.md')).toContain(`\tvalue: ${expected};`);
	});

	it("doesn't nest an example that its author already fenced", () => {
		// Arrange.
		const verticalTabs = {
			id: 'components-vertical-tabs',
			name: 'DsVerticalTabs',
			jsDocTags: { example: ['```tsx <DsVerticalTabs value={selected} /> ```'] },
			stories: [],
		};

		// Act.
		const files = render({ components: [verticalTabs] });

		// Assert.
		expect(file(files, 'components/vertical-tabs.md')).toContain(
			'**Example:**\n\n```tsx\n<DsVerticalTabs value={selected} />\n```',
		);
	});
});
