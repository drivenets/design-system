import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';

import {
	enrichManifest,
	enrichManifestFile,
	extractDeclaredProps,
	isNoiseSnippet,
	sanitizeSnippet,
	toPublicImport,
	type ComponentsManifest,
	type ManifestComponent,
} from './enrich-mcp-manifest';

const PACKAGE_ROOT = '/pkg';

const buttonTypes = `
import type { ButtonHTMLAttributes, Ref } from 'react';

export interface DsButtonV3BaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	ref?: Ref<HTMLButtonElement>;
	color?: 'default' | 'error';
	variant?: 'primary' | 'secondary';
	size?: 'medium' | 'small';
	highEmphasis?: boolean;
	icon?: string;
	loading?: boolean;
}

export interface DsButtonV3Props extends Omit<DsButtonV3BaseProps, 'size'> {
	size?: 'medium' | 'small';
}
`;

const layoutTypes = `
import type { ComponentPropsWithRef } from 'react';

/**
 * @deprecated Use DsWorkspaceLayout instead.
 */
export interface DsPanelProps extends ComponentPropsWithRef<'div'> {
	/**
	 * Fill the parent instead of the viewport.
	 * @default false
	 */
	fillParent?: boolean;
	pinned?: boolean;
}
`;

function widget(overrides: Partial<ManifestComponent> = {}): ManifestComponent {
	return {
		id: 'components-widget',
		name: 'DsWidget',
		path: './src/components/ds-widget/ds-widget.stories.tsx',
		import: 'import { DsWidget, DsStack } from "@drivenets/design-system";',
		stories: [],
		...overrides,
	};
}

function manifest(components: Record<string, ManifestComponent>): ComponentsManifest {
	return { v: 0, components };
}

function typesFs(folder: string, source: string) {
	const typesPath = `${PACKAGE_ROOT}/src/components/${folder}/${folder}.types.ts`;

	return {
		readFileSync: (path: string) => {
			if (path !== typesPath) {
				throw new Error(`ENOENT ${path}`);
			}

			return source;
		},
	};
}

describe('sanitizeSnippet', () => {
	it('rewrites fn() and action() to empty arrow functions', () => {
		expect(sanitizeSnippet("<DsButtonV3 onClick={fn()} onHover={action('hover')} />")).toBe(
			'<DsButtonV3 onClick={() => {}} onHover={() => {}} />',
		);
	});
});

describe('isNoiseSnippet', () => {
	it('drops React.Fragment and HOC internals without a public Ds* component', () => {
		expect(isNoiseSnippet('const Default = () => <React.Fragment><div /></React.Fragment>;')).toBe(true);
		expect(isNoiseSnippet('const Default = () => <>\n  <span />\n</>;')).toBe(true);
		expect(isNoiseSnippet('const Default = () => <withResponsiveProps />')).toBe(true);
		expect(isNoiseSnippet('const Default = () => <P onClick={() => {}} />;')).toBe(true);
		expect(isNoiseSnippet('const Default = () => <DsButtonV3>Save</DsButtonV3>;')).toBe(false);
		expect(isNoiseSnippet('const Default = () => <React.Fragment><DsDialog /></React.Fragment>;')).toBe(
			false,
		);
		expect(isNoiseSnippet('const Default = () => <>\n  <DsCard />\n</>;')).toBe(false);
	});
});

describe('toPublicImport', () => {
	it('emits the public Ds* import, using the root name for compound members', () => {
		expect(toPublicImport('DsButtonV3')).toBe("import { DsButtonV3 } from '@drivenets/design-system';");
		expect(toPublicImport('DsTabs.Root')).toBe("import { DsTabs } from '@drivenets/design-system';");
	});
});

describe('extractDeclaredProps', () => {
	it('keeps Ds*Props keys and stops at HTML attribute bases', () => {
		const extracted = extractDeclaredProps(buttonTypes, ['DsButtonV3Props']);

		expect([...extracted.keys].sort()).toEqual([
			'color',
			'highEmphasis',
			'icon',
			'loading',
			'ref',
			'size',
			'variant',
		]);
		expect(extracted.keys.has('onClick')).toBe(false);
		expect(extracted.keys.has('disabled')).toBe(false);
	});

	it('uses a fallback sentence when @deprecated has no successor text', () => {
		const extracted = extractDeclaredProps(
			`
/**
 * @deprecated
 */
export interface DsBareProps {
	value?: string;
}
`,
			['DsBareProps'],
		);

		expect(extracted.deprecated).toBe('This component is deprecated.');
	});

	it('follows non-exported base types referenced by Ds*Props', () => {
		const source = `
type DsThingBaseProps = {
	value?: string;
	onValueChange?: (value: string | null) => void;
};

/**
 * @deprecated Use DsOther instead.
 */
export type DsThingProps = DsThingBaseProps & {
	size?: 's' | 'm';
};
`;
		const extracted = extractDeclaredProps(source, ['DsThingProps']);

		expect(extracted.deprecated).toBe('Use DsOther instead.');
		expect([...extracted.keys].sort()).toEqual(['onValueChange', 'size', 'value']);
	});

	it('reads @deprecated and successor from types JSDoc', () => {
		const extracted = extractDeclaredProps(layoutTypes, ['DsPanelProps']);

		expect(extracted.deprecated).toBe('Use DsWorkspaceLayout instead.');
		expect([...extracted.keys].sort()).toEqual(['fillParent', 'pinned']);
	});

	it('keeps Pick keys from an imported props type', () => {
		const extracted = extractDeclaredProps(
			`
import type { DatePickerRootProps } from '@ark-ui/react/date-picker';

export interface DsDatePickerProps extends Pick<
	DatePickerRootProps,
	'disabled' | 'readOnly' | 'id' | 'open' | 'name'
> {
	value?: Date | null;
	onChange?: (value: Date | null) => void;
}
`,
			['DsDatePickerProps'],
		);

		expect([...extracted.keys].sort()).toEqual([
			'disabled',
			'id',
			'name',
			'onChange',
			'open',
			'readOnly',
			'value',
		]);
		expect(extracted.incomplete).toBe(false);
	});

	it('keeps react-docgen props when Ds*Props omits an unresolved component type', () => {
		const result = enrichManifest(
			manifest({
				checkbox: widget({
					id: 'components-checkbox',
					name: 'DsCheckbox',
					path: './src/components/ds-checkbox/ds-checkbox.stories.tsx',
					reactDocgen: {
						props: {
							checked: { description: 'Controlled checked state' },
							label: { description: 'Visible label' },
							about: { description: 'HTML about' },
						},
					},
				}),
			}),
			{
				packageRoot: PACKAGE_ROOT,
				...typesFs(
					'ds-checkbox',
					`
import type { ComponentPropsWithoutRef } from 'react';
import { type Checkbox } from '@ark-ui/react/checkbox';

export interface DsCheckboxProps extends Omit<
	ComponentPropsWithoutRef<typeof Checkbox.Root>,
	'onCheckedChange' | 'value'
> {
	label?: string;
	onCheckedChange?: (checked: boolean) => void;
}
`,
				),
			},
		);

		expect(result.components['checkbox']?.reactDocgen?.props).toMatchObject({
			checked: { description: 'Controlled checked state' },
			label: { description: 'Visible label' },
			onCheckedChange: { required: false },
		});
	});
});

describe('enrichManifest', () => {
	it('sanitizes snippets, sets the public import, and drops Fragment stories', () => {
		const result = enrichManifest(
			manifest({
				widget: widget({
					stories: [
						{
							name: 'Default',
							snippet: 'const Default = () => <DsWidget onClick={fn()}>Go</DsWidget>;',
						},
						{
							name: 'Broken',
							snippet: 'const Broken = () => <P onClick={fn()} />;',
						},
					],
				}),
			}),
			{ packageRoot: PACKAGE_ROOT },
		);

		expect(result.components['widget']?.import).toBe("import { DsWidget } from '@drivenets/design-system';");
		expect(result.components['widget']?.stories).toEqual([
			{
				name: 'Default',
				snippet: 'const Default = () => <DsWidget onClick={() => {}}>Go</DsWidget>;',
			},
		]);
	});

	it('filters the prop table to declared Ds*Props keys', () => {
		const result = enrichManifest(
			manifest({
				button: widget({
					id: 'components-buttonv3',
					name: 'DsButtonV3',
					path: './src/components/ds-button-v3/ds-button-v3.stories.tsx',
					reactDocgen: {
						displayName: 'DsButtonV3',
						props: {
							variant: { description: 'Visual variant' },
							onClick: { description: 'HTML click' },
							onMouseEnter: { description: 'HTML hover' },
							about: { description: 'HTML about' },
						},
					},
				}),
			}),
			{ packageRoot: PACKAGE_ROOT, ...typesFs('ds-button-v3', buttonTypes) },
		);

		expect(Object.keys(result.components['button']?.reactDocgen?.props ?? {}).sort()).toEqual([
			'color',
			'highEmphasis',
			'icon',
			'loading',
			'ref',
			'size',
			'variant',
		]);
	});

	it('seeds a Ds*Props table when react-docgen failed', () => {
		const result = enrichManifest(
			manifest({
				panel: widget({
					id: 'components-panel',
					name: 'DsPanel',
					path: './src/components/ds-panel/ds-panel.stories.tsx',
					error: { name: 'No component definition found', message: 'compound' },
				}),
			}),
			{ packageRoot: PACKAGE_ROOT, ...typesFs('ds-panel', layoutTypes) },
		);

		expect(Object.keys(result.components['panel']?.reactDocgen?.props ?? {}).sort()).toEqual([
			'fillParent',
			'pinned',
		]);
		expect(result.components['panel']?.description).toContain(
			'**Deprecated:** Use DsWorkspaceLayout instead.',
		);
		expect(result.components['panel']?.jsDocTags?.deprecated).toEqual(['Use DsWorkspaceLayout instead.']);
	});

	it('keeps an icon-only Default as the canonical example', () => {
		const iconOnly = `const Default = () => <DsButtonV3 icon="check_circle" aria-label="Confirm" />;`;
		const withChildren = `const Label = () => <DsButtonV3>Save</DsButtonV3>;`;
		const result = enrichManifest(
			manifest({
				button: widget({
					name: 'DsButtonV3',
					stories: [
						{ name: 'Label', snippet: withChildren },
						{ name: 'Default', snippet: iconOnly },
					],
				}),
			}),
			{ packageRoot: PACKAGE_ROOT },
		);

		expect(result.components['button']?.stories?.[0]).toEqual({ name: 'Default', snippet: iconOnly });
	});

	it('adds a public import and rewrites storybook fn() without a second docs source', () => {
		const result = enrichManifest(
			manifest({
				widget: widget({
					stories: [{ name: 'Default', snippet: '<DsWidget onClick={fn()} />' }],
				}),
			}),
			{ packageRoot: PACKAGE_ROOT },
		);

		expect(result.components['widget']?.import).toBe("import { DsWidget } from '@drivenets/design-system';");
		expect(result.components['widget']?.stories?.[0]?.snippet).toBe('<DsWidget onClick={() => {}} />');
	});
});

describe('enrichManifestFile', () => {
	let dir: string | undefined;

	afterEach(() => {
		if (dir) {
			rmSync(dir, { recursive: true, force: true });
			dir = undefined;
		}
	});

	it('throws when the storybook manifest is missing', async () => {
		dir = mkdtempSync(join(tmpdir(), 'enrich-mcp-'));
		const manifestPath = join(dir, 'storybook-static/manifests/components.json');

		await expect(enrichManifestFile(dir)).rejects.toThrow(`MCP manifest not found at ${manifestPath}`);
	});

	it('rewrites the storybook manifest in place', async () => {
		dir = mkdtempSync(join(tmpdir(), 'enrich-mcp-'));
		const manifestPath = join(dir, 'storybook-static/manifests/components.json');

		mkdirSync(join(dir, 'storybook-static/manifests'), { recursive: true });
		writeFileSync(
			manifestPath,
			JSON.stringify({
				v: 0,
				components: {
					widget: widget({
						stories: [{ name: 'Default', snippet: '<DsWidget onClick={fn()} />' }],
					}),
				},
			}),
		);

		await expect(enrichManifestFile(dir)).resolves.toBe(manifestPath);

		const result = JSON.parse(readFileSync(manifestPath, 'utf8')) as ComponentsManifest;

		expect(result.components['widget']?.import).toBe("import { DsWidget } from '@drivenets/design-system';");
		expect(result.components['widget']?.stories?.[0]?.snippet).toBe('<DsWidget onClick={() => {}} />');
	});
});
