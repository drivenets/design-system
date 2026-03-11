import { createRule } from '../create-rule';
import { getObjectProperty } from './utils/get-object-property';
import { resolveStoryMeta } from './utils/resolve-story-meta';
import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';
import type { RuleFixer, SourceCode } from '@typescript-eslint/utils/ts-eslint';

type MessageId = 'noAutodocsTag';

export const noAutodocsTag = createRule<[], MessageId>({
	name: 'no-autodocs-tag',
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow the "autodocs" tag in story meta.',
		},
		messages: {
			noAutodocsTag:
				"Remove the `autodocs` tag from the story meta. It's already defined globally for all stories.",
		},
		fixable: 'code',
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		return {
			ExportDefaultDeclaration(node) {
				const metaNode = resolveStoryMeta(context, node.declaration);

				if (!metaNode) {
					return;
				}

				const tagsProp = getObjectProperty({
					obj: metaNode,
					name: 'tags',
					predicate: (v) => v.type === AST_NODE_TYPES.ArrayExpression,
				});

				if (!tagsProp) {
					return;
				}

				const autodocsTag = tagsProp.value.elements.find((el) => {
					return el?.type === AST_NODE_TYPES.Literal && el.value === 'autodocs';
				});

				if (!autodocsTag) {
					return;
				}

				context.report({
					node: autodocsTag,
					messageId: 'noAutodocsTag',
					fix(fixer) {
						const sourceCode = context.sourceCode;
						const elements = tagsProp.value.elements;

						const shouldRemoveTagsProp = elements.length === 1;
						const nodeToRemove = shouldRemoveTagsProp ? tagsProp : autodocsTag;

						return removeWithTrailingComma(sourceCode, fixer, nodeToRemove);
					},
				});
			},
		};
	},
});

function removeWithTrailingComma(sourceCode: SourceCode, fixer: RuleFixer, node: TSESTree.Node) {
	const trailingComma = sourceCode.getTokenAfter(node);
	const rangeEnd = trailingComma?.value === ',' ? trailingComma.range[1] : node.range[1];

	return fixer.removeRange([node.range[0], rangeEnd]);
}
