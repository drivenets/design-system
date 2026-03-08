import { createRule } from '../create-rule';

const VITEST_PATTERN = /\bvitest\b/;

type MessageId = 'noVitestInStories';

export const noVitestInStories = createRule<[], MessageId>({
	name: 'no-vitest-in-stories',
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow importing from vitest in story files.',
		},
		messages: {
			noVitestInStories:
				"Don't import from vitest in stories. Use @storybook/test instead (e.g. fn, expect, userEvent).",
		},
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		return {
			ImportDeclaration(node) {
				if (VITEST_PATTERN.test(node.source.value)) {
					context.report({
						node: node.source,
						messageId: 'noVitestInStories',
					});
				}
			},
		};
	},
});
