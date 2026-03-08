import path from 'node:path';
import { RuleTester } from '@typescript-eslint/rule-tester';
import { consistentDeprecatedStories } from '../consistent-deprecated-stories';

const fixturesDir = path.resolve(__dirname, 'fixtures');

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			projectService: {
				allowDefaultProject: ['*.ts'],
			},
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
				import { DsDeprecatedFixture } from './components';

				const meta = {
					title: 'Design System/DeprecatedFixture (Deprecated)',
					component: DsDeprecatedFixture,
					tags: ['deprecated'],
				};

				export default meta;
			`,
		},

		{
			name: 'imported non-deprecated component without suffix or tag',
			code: `
				import { DsActiveFixture } from './components';

				const meta = {
					title: 'Design System/ActiveFixture',
					component: DsActiveFixture,
				};

				export default meta;
			`,
		},

		{
			name: 'imported deprecated component with 2 suffixes',
			code: `
				import { DsDeprecatedFixture } from './components';

				const meta = {
					title: 'Design System/DeprecatedFixture (Classic) (Deprecated)',
					component: DsDeprecatedFixture,
					tags: ['deprecated'],
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
					messageId: 'requireDeprecatedTag',
					data: { component: 'DsChip' },
					line: 5,
					column: 18,
					endLine: 8,
					endColumn: 6,
				},
				{
					messageId: 'requireDeprecatedSuffix',
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
					messageId: 'requireDeprecatedTag',
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
					messageId: 'requireDeprecatedSuffix',
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
					messageId: 'requireDeprecatedSuffix',
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
					messageId: 'requireDeprecatedSuffix',
					data: { component: 'DsChip' },
					line: 6,
					column: 13,
					endLine: 6,
					endColumn: 50,
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
					messageId: 'requireDeprecatedTag',
					data: { component: 'DsConfirmation' },
					line: 5,
					column: 20,
					endLine: 8,
					endColumn: 6,
				},
				{
					messageId: 'requireDeprecatedSuffix',
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
				import { DsDeprecatedFixture } from './components';

				const meta = {
					title: 'Design System/DeprecatedFixture',
					component: DsDeprecatedFixture,
				};

				export default meta;
			`,
			output: `
				import { DsDeprecatedFixture } from './components';

				const meta = {
					title: 'Design System/DeprecatedFixture (Deprecated)',
					component: DsDeprecatedFixture,\n\ttags: ['deprecated'],
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'requireDeprecatedTag',
					data: { component: 'DsDeprecatedFixture' },
					line: 4,
					column: 18,
					endLine: 7,
					endColumn: 6,
				},
				{
					messageId: 'requireDeprecatedSuffix',
					data: { component: 'DsDeprecatedFixture' },
					line: 5,
					column: 13,
					endLine: 5,
					endColumn: 46,
				},
			],
		},
	],
});
