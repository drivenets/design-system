import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';
import { createRule } from '../create-rule';

const TEST_ID_ATTRIBUTE = /\b(data-)?testid\b/;
const TEST_ID_DATASET_KEY = 'testid';

type MessageId = 'noTestIdAttribute';

export const noTestId = createRule<[], MessageId>({
	name: 'no-test-id',
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow `data-testid` attributes.',
		},
		messages: {
			noTestIdAttribute:
				"Don't use `data-testid`. Query by role, label, or text so tests reflect how users find elements.",
		},
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		const report = (node: TSESTree.Node) => {
			context.report({
				node,
				messageId: 'noTestIdAttribute',
			});
		};

		return {
			JSXAttribute(node) {
				if (node.name.type !== AST_NODE_TYPES.JSXIdentifier || !TEST_ID_ATTRIBUTE.test(node.name.name)) {
					return;
				}

				report(node.name);
			},

			// Covers object keys, property signatures, string literal types, `setAttribute()` arguments, and
			// CSS selectors.
			//
			// It might cause false positive, but it simplifies the rule and we don't expect `testid` strings
			// anyway.
			Literal(node) {
				if (typeof node.value !== 'string' || !TEST_ID_ATTRIBUTE.test(node.value)) {
					return;
				}

				report(node);
			},

			TemplateElement(node) {
				if (!TEST_ID_ATTRIBUTE.test(node.value.raw)) {
					return;
				}

				report(node);
			},

			MemberExpression(node) {
				if (node.property.type !== AST_NODE_TYPES.Identifier || node.property.name !== TEST_ID_DATASET_KEY) {
					return;
				}

				if (!isDatasetAccess(node.object)) {
					return;
				}

				report(node.property);
			},
		};
	},
});

const isDatasetAccess = (node: TSESTree.Node) => {
	if (node.type === AST_NODE_TYPES.Identifier) {
		return node.name === 'dataset';
	}

	return (
		node.type === AST_NODE_TYPES.MemberExpression &&
		node.property.type === AST_NODE_TYPES.Identifier &&
		node.property.name === 'dataset'
	);
};
