import path from 'node:path';
import { RuleTester } from '@typescript-eslint/rule-tester';
import { consistentDeprecatedStories } from '../consistent-deprecated-stories';

const fixturesDir = path.resolve(__dirname, 'fixtures');

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			project: true,
			tsconfigRootDir: fixturesDir,
		},
	},
});

ruleTester.run('consistent-deprecated-stories', consistentDeprecatedStories, {
	valid: [
		{
			name: 'no component property is skipped',
			code: `
				const meta = {
					title: 'Design System/Overview',
				};

				export default meta;
			`,
		},

		{
			name: 'inline non-deprecated component without suffix or tag',
			code: `
				function DsButton() { return null; }

				const meta = {
					title: 'Design System/Button',
					component: DsButton,
				};

				export default meta;
			`,
		},

		{
			name: 'inline deprecated component with correct suffix and tag',
			code: `
				/** @deprecated */
				function DsChip() { return null; }

				const meta = {
					title: 'Design System/Chip (Deprecated)',
					component: DsChip,
					tags: ['autodocs', 'deprecated'],
				};

				export default meta;
			`,
		},

		{
			name: 'imported deprecated component with correct suffix and tag',
			code: `
				import { DsDeprecatedComponent } from './components';

				const meta = {
					title: 'Design System/DeprecatedComponent (Deprecated)',
					component: DsDeprecatedComponent,
					tags: ['deprecated'],
				};

				export default meta;
			`,
		},

		{
			name: 'imported non-deprecated component without suffix or tag',
			code: `
				import { DsActiveComponent } from './components';

				const meta = {
					title: 'Design System/ActiveComponent',
					component: DsActiveComponent,
				};

				export default meta;
			`,
		},

		{
			name: 'imported deprecated component with 2 suffixes',
			code: `
				import { DsDeprecatedComponent } from './components';

				const meta = {
					title: 'Design System/DeprecatedComponent (Classic) (Deprecated)',
					component: DsDeprecatedComponent,
					tags: ['deprecated'],
				};

				export default meta;
			`,
		},

		{
			name: 'imported deprecated namespaced component',
			code: `
				import { DsDeprecatedNamespacedComponent } from './components';

				const meta = {
					title: 'Design System/DeprecatedNamespacedComponent (Deprecated)',
					component: DsDeprecatedNamespacedComponent,
					tags: ['deprecated'],
				};

				export default meta;
			`,
		},

		{
			name: 'imported non-deprecated namespaced component',
			code: `
				import { DsActiveNamespacedComponent } from './components';

				const meta = {
					title: 'Design System/ActiveNamespacedComponent',
					component: DsActiveNamespacedComponent,
				};

				export default meta;
			`,
		},

		{
			name: 'imported deprecated component with type annotation',
			code: `
				import { DsDeprecatedTypedComponent } from './components';

				const meta = {
					title: 'Design System/DeprecatedTypedComponent (Deprecated)',
					component: DsDeprecatedTypedComponent,
					tags: ['deprecated'],
				};

				export default meta;
			`,
		},

		{
			name: 'imported deprecated sub-component',
			code: `
				import { DsSubComponents } from './components';

				const meta = {
					title: 'Design System/SubComponents.Deprecated (Deprecated)',
					component: DsSubComponents.Deprecated,
					tags: ['deprecated'],
				};

				export default meta;
			`,
		},

		{
			name: 'imported non-deprecated sub-component',
			code: `
				import { DsSubComponents } from './components';

				const meta = {
					title: 'Design System/SubComponents.Active',
					component: DsSubComponents.Active,
				};

				export default meta;
			`,
		},
	],

	invalid: [
		{
			name: 'missing both suffix and tags prop - fixes both',
			code: `
				/** @deprecated */
				function DsChip() { return null; }

				const meta = {
					title: 'Design System/Chip',
					component: DsChip,
				};

				export default meta;
			`,
			output: `
				/** @deprecated */
				function DsChip() { return null; }

				const meta = {
					title: 'Design System/Chip (Deprecated)',
					component: DsChip,\n\ttags: ['deprecated'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'missingDeprecatedTag',
					data: { component: 'DsChip' },
					line: 5,
					column: 18,
					endLine: 8,
					endColumn: 6,
				},
				{
					messageId: 'missingDeprecatedSuffix',
					data: { component: 'DsChip' },
					line: 6,
					column: 13,
					endLine: 6,
					endColumn: 33,
				},
			],
		},

		{
			name: 'has suffix but missing tag - appends to existing tags',
			code: `
				/** @deprecated */
				function DsChip() { return null; }

				const meta = {
					title: 'Design System/Chip (Deprecated)',
					component: DsChip,
					tags: ['autodocs'],
				};

				export default meta;
			`,
			output: `
				/** @deprecated */
				function DsChip() { return null; }

				const meta = {
					title: 'Design System/Chip (Deprecated)',
					component: DsChip,
					tags: ['autodocs', 'deprecated'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'missingDeprecatedTag',
					data: { component: 'DsChip' },
					line: 8,
					column: 6,
					endLine: 8,
					endColumn: 24,
				},
			],
		},

		{
			name: 'has tag but missing label - appends suffix',
			code: `
				/** @deprecated */
				function DsDialog() { return null; }

				const meta = {
					title: 'Design System/Dialog',
					component: DsDialog,
					tags: ['deprecated'],
				};

				export default meta;
			`,
			output: `
				/** @deprecated */
				function DsDialog() { return null; }

				const meta = {
					title: 'Design System/Dialog (Deprecated)',
					component: DsDialog,
					tags: ['deprecated'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'missingDeprecatedSuffix',
					data: { component: 'DsDialog' },
					line: 6,
					column: 13,
					endLine: 6,
					endColumn: 35,
				},
			],
		},

		{
			name: 'no title prop and no tags prop - fixes both',
			code: `
				/** @deprecated */
				function DsDialog() { return null; }

				const meta = {
					component: DsDialog,
				};

				export default meta;
			`,
			output: [
				`
				/** @deprecated */
				function DsDialog() { return null; }

				const meta = {
					component: DsDialog,\n\ttitle: 'DsDialog (Deprecated)',
				};

				export default meta;
			`,

				`
				/** @deprecated */
				function DsDialog() { return null; }

				const meta = {
					component: DsDialog,\n\ttitle: 'DsDialog (Deprecated)',\n\ttags: ['deprecated'],
				};

				export default meta;
			`,
			],
			errors: [
				{
					messageId: 'missingDeprecatedSuffix',
					data: { component: 'DsDialog' },
					line: 5,
					column: 18,
					endLine: 7,
					endColumn: 6,
				},
			],
		},

		{
			name: 'suffix in the middle - moves suffix to the end',
			code: `
				/** @deprecated */
				function DsChip() { return null; }

				const meta = {
					title: 'Design System/Chip (Deprecated) Old',
					component: DsChip,
					tags: ['deprecated'],
				};

				export default meta;
			`,
			output: `
				/** @deprecated */
				function DsChip() { return null; }

				const meta = {
					title: 'Design System/Chip Old (Deprecated)',
					component: DsChip,
					tags: ['deprecated'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'missingDeprecatedSuffix',
					data: { component: 'DsChip' },
					line: 6,
					column: 13,
					endLine: 6,
					endColumn: 50,
				},
			],
		},

		{
			name: 'suffix has multiple spaces - removes extra spaces',
			code: `
				/** @deprecated */
				function DsChip() { return null; }

				const meta = {
					title: 'Design System/Chip    (Deprecated)',
					component: DsChip,
					tags: ['deprecated'],
				};

				export default meta;
			`,
			output: `
				/** @deprecated */
				function DsChip() { return null; }

				const meta = {
					title: 'Design System/Chip (Deprecated)',
					component: DsChip,
					tags: ['deprecated'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'unformattedDeprecatedSuffix',
					data: { component: 'DsChip' },
					line: 6,
					column: 13,
					endLine: 6,
					endColumn: 49,
				},
			],
		},

		{
			name: 'inline default export without suffix and tags prop - fixes both',
			code: `
				/** @deprecated */
				function DsConfirmation() { return null; }

				export default {
					title: 'Design System/Confirmation',
					component: DsConfirmation,
				};
			`,
			output: `
				/** @deprecated */
				function DsConfirmation() { return null; }

				export default {
					title: 'Design System/Confirmation (Deprecated)',
					component: DsConfirmation,\n\ttags: ['deprecated'],
				};
			`,
			errors: [
				{
					messageId: 'missingDeprecatedTag',
					data: { component: 'DsConfirmation' },
					line: 5,
					column: 20,
					endLine: 8,
					endColumn: 6,
				},
				{
					messageId: 'missingDeprecatedSuffix',
					data: { component: 'DsConfirmation' },
					line: 6,
					column: 13,
					endLine: 6,
					endColumn: 41,
				},
			],
		},

		{
			name: 'imported deprecated component missing suffix and tags prop - fixes both',
			code: `
				import { DsDeprecatedComponent } from './components';

				const meta = {
					title: 'Design System/DeprecatedComponent',
					component: DsDeprecatedComponent,
				};

				export default meta;
			`,
			output: `
				import { DsDeprecatedComponent } from './components';

				const meta = {
					title: 'Design System/DeprecatedComponent (Deprecated)',
					component: DsDeprecatedComponent,\n\ttags: ['deprecated'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'missingDeprecatedTag',
					data: { component: 'DsDeprecatedComponent' },
					line: 4,
					column: 18,
					endLine: 7,
					endColumn: 6,
				},
				{
					messageId: 'missingDeprecatedSuffix',
					data: { component: 'DsDeprecatedComponent' },
					line: 5,
					column: 13,
					endLine: 5,
					endColumn: 48,
				},
			],
		},

		{
			name: 'imported deprecated component with type annotation missing suffix and tag',
			code: `
				import { DsDeprecatedTypedComponent } from './components';

				const meta = {
					title: 'Design System/DeprecatedTypedComponent',
					component: DsDeprecatedTypedComponent,
				};

				export default meta;
			`,
			output: `
				import { DsDeprecatedTypedComponent } from './components';

				const meta = {
					title: 'Design System/DeprecatedTypedComponent (Deprecated)',
					component: DsDeprecatedTypedComponent,\n\ttags: ['deprecated'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'missingDeprecatedTag',
					data: { component: 'DsDeprecatedTypedComponent' },
				},
				{
					messageId: 'missingDeprecatedSuffix',
					data: { component: 'DsDeprecatedTypedComponent' },
				},
			],
		},

		{
			name: 'imported renamed deprecated component missing suffix - fixes suffix',
			code: `
				import { DsDeprecatedComponent as DsDeprecatedComponentAlias } from './components';

				const meta = {
					title: 'Design System/DeprecatedComponent',
					component: DsDeprecatedComponentAlias,
					tags: ['deprecated'],
				};

				export default meta;
			`,
			output: `
				import { DsDeprecatedComponent as DsDeprecatedComponentAlias } from './components';

				const meta = {
					title: 'Design System/DeprecatedComponent (Deprecated)',
					component: DsDeprecatedComponentAlias,
					tags: ['deprecated'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'missingDeprecatedSuffix',
					data: { component: 'DsDeprecatedComponentAlias' },
					line: 5,
					column: 13,
					endLine: 5,
					endColumn: 48,
				},
			],
		},

		{
			name: 'non-deprecated component with deprecated suffix - removes suffix',
			code: `
				function DsButton() { return null; }

				const meta = {
					title: 'Design System/Button (Deprecated)',
					component: DsButton,
				};

				export default meta;
			`,
			output: `
				function DsButton() { return null; }

				const meta = {
					title: 'Design System/Button',
					component: DsButton,
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'noUnusedDeprecatedSuffix',
					data: { component: 'DsButton' },
					line: 5,
					column: 13,
					endLine: 5,
					endColumn: 48,
				},
			],
		},

		{
			name: 'non-deprecated component with only deprecated tag - removes the whole tags prop',
			code: `
				function DsButton() { return null; }

				const meta = {
					title: 'Design System/Button',
					component: DsButton,
					tags: ['deprecated'],
				};

				export default meta;
			`,
			output: `
				function DsButton() { return null; }

				const meta = {
					title: 'Design System/Button',
					component: DsButton,
					
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'noUnusedDeprecatedTag',
					data: { component: 'DsButton' },
					line: 7,
					column: 13,
					endLine: 7,
					endColumn: 25,
				},
			],
		},

		{
			name: 'non-deprecated component with deprecated tag and other tags - removes only the deprecated tag',
			code: `
				function DsButton() { return null; }

				const meta = {
					title: 'Design System/Button',
					component: DsButton,
					tags: ['!dev', 'deprecated', 'autodocs'],
				};

				export default meta;
			`,
			output: `
				function DsButton() { return null; }

				const meta = {
					title: 'Design System/Button',
					component: DsButton,
					tags: ['!dev',  'autodocs'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'noUnusedDeprecatedTag',
					data: { component: 'DsButton' },
					line: 7,
					column: 21,
					endLine: 7,
					endColumn: 33,
				},
			],
		},

		{
			name: 'imported deprecated namespaced component',
			code: `
				import { DsDeprecatedNamespacedComponent } from './components';

				const meta = {
					title: 'Design System/DeprecatedNamespacedComponent',
					component: DsDeprecatedNamespacedComponent,
				};

				export default meta;
			`,
			output: `
				import { DsDeprecatedNamespacedComponent } from './components';

				const meta = {
					title: 'Design System/DeprecatedNamespacedComponent (Deprecated)',
					component: DsDeprecatedNamespacedComponent,\n\ttags: ['deprecated'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'missingDeprecatedTag',
					data: { component: 'DsDeprecatedNamespacedComponent' },
					line: 4,
					column: 18,
					endLine: 7,
					endColumn: 6,
				},
				{
					messageId: 'missingDeprecatedSuffix',
					data: { component: 'DsDeprecatedNamespacedComponent' },
					line: 5,
					column: 13,
					endLine: 5,
					endColumn: 58,
				},
			],
		},

		{
			name: 'imported non-deprecated namespaced component',
			code: `
				import { DsActiveNamespacedComponent } from './components';

				const meta = {
					title: 'Design System/ActiveNamespacedComponent (Deprecated)',
					component: DsActiveNamespacedComponent,
					tags: ['deprecated'],
				};

				export default meta;
			`,
			output: `
				import { DsActiveNamespacedComponent } from './components';

				const meta = {
					title: 'Design System/ActiveNamespacedComponent',
					component: DsActiveNamespacedComponent,
					
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'noUnusedDeprecatedSuffix',
					data: { component: 'DsActiveNamespacedComponent' },
					line: 5,
					column: 13,
					endLine: 5,
					endColumn: 67,
				},
				{
					messageId: 'noUnusedDeprecatedTag',
					data: { component: 'DsActiveNamespacedComponent' },
					line: 7,
					column: 13,
					endLine: 7,
					endColumn: 25,
				},
			],
		},
		{
			name: 'imported deprecated sub-component',
			code: `
				import { DsSubComponents } from './components';

				const meta = {
					title: 'Design System/SubComponents.Deprecated',
					component: DsSubComponents.Deprecated,
				};

				export default meta;
			`,
			output: `
				import { DsSubComponents } from './components';

				const meta = {
					title: 'Design System/SubComponents.Deprecated (Deprecated)',
					component: DsSubComponents.Deprecated,\n\ttags: ['deprecated'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'missingDeprecatedTag',
					data: { component: 'DsSubComponents.Deprecated' },
					line: 4,
					column: 18,
					endLine: 7,
					endColumn: 6,
				},

				{
					messageId: 'missingDeprecatedSuffix',
					data: { component: 'DsSubComponents.Deprecated' },
					line: 5,
					column: 13,
					endLine: 5,
					endColumn: 53,
				},
			],
		},

		{
			name: 'imported non-deprecated sub-component',
			code: `
				import { DsSubComponents } from './components';

				const meta = {
					title: 'Design System/SubComponents.Active (Deprecated)',
					component: DsSubComponents.Active,
					tags: ['deprecated'],
				};

				export default meta;
			`,
			output: `
				import { DsSubComponents } from './components';

				const meta = {
					title: 'Design System/SubComponents.Active',
					component: DsSubComponents.Active,
					
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'noUnusedDeprecatedSuffix',
					data: { component: 'DsSubComponents.Active' },
					line: 5,
					column: 13,
					endLine: 5,
					endColumn: 62,
				},
				{
					messageId: 'noUnusedDeprecatedTag',
					data: { component: 'DsSubComponents.Active' },
					line: 7,
					column: 13,
					endLine: 7,
					endColumn: 25,
				},
			],
		},
	],
});
