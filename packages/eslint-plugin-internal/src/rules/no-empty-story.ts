import { findVariable } from '@typescript-eslint/utils/ast-utils';
import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';
import { getObjectProperty } from './utils/get-object-property';
import { unwrapExpression } from './utils/unwrap-expression';
import { createRule } from '../create-rule';

type MessageId = 'noEmptyStory';

export const noEmptyStory = createRule<[], MessageId>({
	name: 'no-empty-story',
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow empty story definitions.',
		},
		messages: {
			noEmptyStory:
				'Empty stories are not allowed. Add non-empty `args` object, `render` function or `play` function.',
		},
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		const reported = new Set<TSESTree.Node>();

		function checkNode(node: TSESTree.Node) {
			node = unwrapExpression(node);

			// When 2 stories reference the same variable, we don't want to report it twice.
			if (reported.has(node)) {
				return;
			}

			switch (node.type) {
				// Node is an object, we just need to check if it's empty.
				case AST_NODE_TYPES.ObjectExpression:
					if (isEmptyStory(node)) {
						context.report({ node, messageId: 'noEmptyStory' });
						reported.add(node);
					}
					break;

				// Node is an identifier, probably a reference to a variable declaration, so we're following
				// the references chain (a story can reference a variable that references another variable),
				// and checking recursively.
				case AST_NODE_TYPES.Identifier: {
					const scope = context.sourceCode.getScope(node);
					const variable = findVariable(scope, node.name);

					variable?.defs.forEach((def) => {
						if (def.node.type === AST_NODE_TYPES.VariableDeclarator && def.node.init) {
							checkNode(def.node.init);
						}
					});

					break;
				}

				default:
					break;
			}
		}

		return {
			ExportNamedDeclaration(node) {
				if (node.declaration?.type !== AST_NODE_TYPES.VariableDeclaration) {
					return;
				}

				node.declaration.declarations.forEach((declaration) => {
					if (declaration.id.type === AST_NODE_TYPES.Identifier && declaration.init) {
						checkNode(declaration.init);
					}
				});
			},
		};
	},
});

function isEmptyStory(node: TSESTree.ObjectExpression) {
	if (isEmptyObject(node)) {
		return true;
	}

	const renderProp = getObjectProperty({ obj: node, name: 'render' });
	const playProp = getObjectProperty({ obj: node, name: 'play' });

	// We'll trust TypeScript here to ensure that as long as we have
	// `render` or `play` properties they should be valid.
	if (renderProp || playProp) {
		return false;
	}

	const argsProp = getObjectProperty({
		obj: node,
		name: 'args',
		// The `args` prop can be a plain object or reference to a variable.
		// We're not following the variable references when checking the `args` prop, because it's overkill
		// and we could assume that if the `args` prop is a reference to a variable, it should be non-empty.
		predicate: (v) => v.type === AST_NODE_TYPES.ObjectExpression || v.type === AST_NODE_TYPES.Identifier,
	});

	return !argsProp || isEmptyObject(argsProp.value);
}

function isEmptyObject(node: TSESTree.Expression): boolean {
	return node.type === AST_NODE_TYPES.ObjectExpression && node.properties.length === 0;
}
