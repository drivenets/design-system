import { createRule } from '../create-rule';

type MessageId = 'noVitestInternal';

export const noVitestInternal = createRule<[], MessageId>({
	name: 'no-vitest-internal',
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow importing from vitest internal modules.',
		},
		messages: {
			noVitestInternal:
				"Don't import from `vitest/internal/*`. These are private APIs and may break without notice.",
		},
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		return {
			ImportDeclaration(node) {
				if (node.source.value.startsWith('vitest/internal')) {
					context.report({
						node: node.source,
						messageId: 'noVitestInternal',
					});
				}
			},
		};
	},
});
