import { createRule } from '../create-rule';

type MessageId = 'noVitestBrowserReact';

export const noVitestBrowserReact = createRule<[], MessageId>({
	name: 'no-vitest-browser-react',
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow importing from vitest-browser-react directly.',
		},
		messages: {
			noVitestBrowserReact:
				"Don't import from `vitest-browser-react` directly. Use `page` from `vitest/browser` instead (e.g. `page.render(<Component />)`).",
		},
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		return {
			ImportDeclaration(node) {
				if (node.source.value === 'vitest-browser-react') {
					context.report({
						node: node.source,
						messageId: 'noVitestBrowserReact',
					});
				}
			},
		};
	},
});
