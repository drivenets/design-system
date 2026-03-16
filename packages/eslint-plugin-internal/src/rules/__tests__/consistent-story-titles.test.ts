import { RuleTester } from '@typescript-eslint/rule-tester';
import { consistentStoryTitles } from '../consistent-story-titles';

const ruleTester = new RuleTester();

ruleTester.run('consistent-story-titles', consistentStoryTitles, {
	valid: [
		{
			name: 'correct title with Design System category',
			code: `
				const meta = {
					component: DsButton,
					title: 'Design System/Button',
				};

				export default meta;
			`,
		},

		{
			name: 'correct title with Examples category',
			code: `
				const meta = {
					component: DsButton,
					title: 'Examples/Button',
				};

				export default meta;
			`,
		},

		{
			name: 'additional segments after component name',
			code: `
				const meta = {
					component: DsButton,
					title: 'Design System/Button/Primary',
				};

				export default meta;
			`,
		},

		{
			name: 'additional segments before component name',
			code: `
				const meta = {
					component: DsButton,
					title: 'Design System/SubGroup/Button',
				};

				export default meta;
			`,
		},

		{
			name: 'no title property',
			code: `
				const meta = {
					component: DsButton,
				};

				export default meta;
			`,
		},

		{
			name: 'valid category without component property',
			code: `
				const meta = {
					title: 'Design System/Button',
				};

				export default meta;
			`,
		},

		{
			name: 'component without Ds prefix',
			code: `
				const meta = {
					component: Button,
					title: 'Design System/Button',
				};

				export default meta;
			`,
		},

		{
			name: 'component with compound name',
			code: `
				const meta = {
					component: Button.Root,
					title: 'Design System/Button',
				};

				export default meta;
			`,
		},

		{
			name: 'non-object default export',
			code: `
				const meta = 'not an object';

				export default meta;
			`,
		},

		{
			name: 'inline export with correct title',
			code: `
				export default {
					component: DsButton,
					title: 'Design System/Button',
				};
			`,
		},

		{
			name: 'multi-word component name',
			code: `
				const meta = {
					component: DsAlertBanner,
					title: 'Design System/AlertBanner',
				};

				export default meta;
			`,
		},

		{
			name: 'component name with suffix in title',
			code: `
				const meta = {
					component: DsButton,
					title: 'Design System/Button (Deprecated)',
				};

				export default meta;
			`,
		},
	],

	invalid: [
		{
			name: 'wrong category - replaces with default',
			code: `
				const meta = {
					component: DsButton,
					title: 'Wrong/Button',
				};

				export default meta;
			`,
			output: `
				const meta = {
					component: DsButton,
					title: 'Design System/Button',
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'invalidCategory',
					line: 4,
					column: 13,
					endLine: 4,
					endColumn: 27,
				},
			],
		},

		{
			name: 'single segment title - prepends default category',
			code: `
				const meta = {
					component: DsButton,
					title: 'Button',
				};

				export default meta;
			`,
			output: `
				const meta = {
					component: DsButton,
					title: 'Design System/Button',
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'invalidCategory',
					line: 4,
					column: 13,
					endLine: 4,
					endColumn: 21,
				},
			],
		},

		{
			name: 'component name not found in any title segment',
			code: `
				const meta = {
					component: DsButton,
					title: 'Design System/Card',
				};

				export default meta;
			`,
			output: null,
			errors: [
				{
					messageId: 'invalidComponentName',
					data: {
						expectedName: 'Button',
					},
					line: 4,
					column: 13,
					endLine: 4,
					endColumn: 33,
				},
			],
		},

		{
			name: 'Ds prefix in title segment - normalizes to stripped name',
			code: `
				const meta = {
					component: DsButton,
					title: 'Design System/DsButton',
				};

				export default meta;
			`,
			output: `
				const meta = {
					component: DsButton,
					title: 'Design System/Button',
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'invalidComponentName',
					data: {
						expectedName: 'Button',
					},
					line: 4,
					column: 13,
					endLine: 4,
					endColumn: 37,
				},
			],
		},

		{
			name: 'component with compound name - normalizes to stripped name',
			code: `
				const meta = {
					component: DsButton.Root,
					title: 'Design System/DsButton',
				};

				export default meta;
			`,
			output: `
				const meta = {
					component: DsButton.Root,
					title: 'Design System/Button',
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'invalidComponentName',
					data: {
						expectedName: 'Button',
					},
					line: 4,
					column: 13,
					endLine: 4,
					endColumn: 37,
				},
			],
		},

		{
			name: 'wrong category preserves additional segments',
			code: `
				const meta = {
					component: DsAlertBanner,
					title: 'Wrong/AlertBanner/Inline',
				};

				export default meta;
			`,
			output: `
				const meta = {
					component: DsAlertBanner,
					title: 'Design System/AlertBanner/Inline',
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'invalidCategory',
					line: 4,
					column: 13,
					endLine: 4,
					endColumn: 39,
				},
			],
		},

		{
			name: 'Ds prefix in title with additional segments',
			code: `
				const meta = {
					component: DsAlertBanner,
					title: 'Design System/DsAlertBanner/Inline',
				};

				export default meta;
			`,
			output: `
				const meta = {
					component: DsAlertBanner,
					title: 'Design System/AlertBanner/Inline',
				};

				export default meta;
			`,
			errors: [
				{
					messageId: 'invalidComponentName',
					data: {
						expectedName: 'AlertBanner',
					},
					line: 4,
					column: 13,
					endLine: 4,
					endColumn: 49,
				},
			],
		},

		{
			name: 'inline export with wrong category',
			code: `
				export default {
					component: DsButton,
					title: 'Wrong/Button',
				};
			`,
			output: `
				export default {
					component: DsButton,
					title: 'Design System/Button',
				};
			`,
			errors: [
				{
					messageId: 'invalidCategory',
					line: 4,
					column: 13,
					endLine: 4,
					endColumn: 27,
				},
			],
		},
	],
});
