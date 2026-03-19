import { AST_NODE_TYPES } from '@typescript-eslint/utils';
import { createRule } from '../create-rule';

type MessageId = 'noRenderImport' | 'noNamespaceImport';

export const noVitestBrowserReact = createRule<[], MessageId>({
	name: 'no-vitest-browser-react',
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow importing `render` from vitest-browser-react.',
		},
		messages: {
			noRenderImport:
				"Don't import `render` from `vitest-browser-react`. Use `page.render()` from `vitest/browser` instead.",

			noNamespaceImport:
				"Don't use namespace import from `vitest-browser-react`. Import specific named exports (e.g., `renderHook`) instead.",
		},
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		return {
			ImportDeclaration(node) {
				if (node.source.value !== 'vitest-browser-react') {
					return;
				}

				for (const specifier of node.specifiers) {
					if (specifier.type === AST_NODE_TYPES.ImportNamespaceSpecifier) {
						context.report({
							node: specifier,
							messageId: 'noNamespaceImport',
						});

						return;
					}

					if (
						specifier.type === AST_NODE_TYPES.ImportSpecifier &&
						specifier.imported.type === AST_NODE_TYPES.Identifier &&
						specifier.imported.name === 'render'
					) {
						context.report({
							node: specifier,
							messageId: 'noRenderImport',
						});
					}
				}
			},
		};
	},
});
