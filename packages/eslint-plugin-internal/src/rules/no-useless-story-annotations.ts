import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';
import { storyNameFromExport } from 'storybook/internal/csf';
import { createRule } from '../create-rule';
import { getObjectProperty } from './utils/get-object-property';
import { removeWithTrailingComma } from './utils/remove-with-trailing-comma';
import { resolveStoryMeta } from './utils/resolve-story-meta';
import { unwrapExpression } from './utils/unwrap-expression';
import { getStringIfConstant } from '@typescript-eslint/utils/ast-utils';

type MessageId =
	| 'emptyArgs'
	| 'emptyParameters'
	| 'emptyArgTypes'
	| 'emptyTags'
	| 'emptyDecorators'
	| 'emptyPlay'
	| 'redundantName';

export const noUselessStoryAnnotations = createRule<[], MessageId>({
	name: 'no-useless-story-annotations',
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow useless story/meta annotations that have no effect.',
		},
		messages: {
			emptyArgs: 'Empty `args` has no effect. Remove it.',
			emptyParameters: 'Empty `parameters` has no effect. Remove it.',
			emptyArgTypes: 'Empty `argTypes` has no effect. Remove it.',
			emptyTags: 'Empty `tags` has no effect. Remove it.',
			emptyDecorators: 'Empty `decorators` has no effect. Remove it.',
			emptyPlay: 'Empty `play` function has no effect. Remove it.',
			redundantName: 'Story name "{{name}}" is auto-generated from the export name. Remove it.',
		},
		fixable: 'code',
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		function checkSharedAnnotations(obj: TSESTree.ObjectExpression) {
			checkEmptyObjectProp(obj, 'args', 'emptyArgs');
			checkEmptyObjectProp(obj, 'parameters', 'emptyParameters');
			checkEmptyObjectProp(obj, 'argTypes', 'emptyArgTypes');
			checkEmptyArrayProp(obj, 'tags', 'emptyTags');
			checkEmptyArrayProp(obj, 'decorators', 'emptyDecorators');
		}

		function checkEmptyObjectProp(obj: TSESTree.ObjectExpression, name: string, messageId: MessageId) {
			const prop = getObjectProperty({
				obj,
				name,
				predicate: (v) => v.type === AST_NODE_TYPES.ObjectExpression,
			});

			if (prop && prop.value.properties.length === 0) {
				report(prop.node, messageId);
			}
		}

		function checkEmptyArrayProp(obj: TSESTree.ObjectExpression, name: string, messageId: MessageId) {
			const prop = getObjectProperty({
				obj,
				name,
				predicate: (v) => v.type === AST_NODE_TYPES.ArrayExpression,
			});

			if (prop && prop.value.elements.length === 0) {
				report(prop.node, messageId);
			}
		}

		function checkEmptyPlay(obj: TSESTree.ObjectExpression) {
			const prop = getObjectProperty({
				obj,
				name: 'play',
				predicate: (v) =>
					v.type === AST_NODE_TYPES.ArrowFunctionExpression || v.type === AST_NODE_TYPES.FunctionExpression,
			});

			if (!prop) {
				return;
			}

			const { body } = prop.value;

			if (body.type === AST_NODE_TYPES.BlockStatement && body.body.length === 0) {
				report(prop.node, 'emptyPlay');
			}
		}

		function checkRedundantName(
			obj: TSESTree.ObjectExpression,
			propName: 'name' | 'storyName',
			exportName: string,
		) {
			const prop = getObjectProperty({
				obj,
				name: propName,
			});

			if (!prop) {
				return;
			}

			const generatedName = storyNameFromExport(exportName);
			const userDefinedName = getStringIfConstant(prop.value, context.sourceCode.getScope(prop.value));

			if (userDefinedName === generatedName) {
				report(prop.node, 'redundantName', { name: generatedName });
			}
		}

		function report(prop: TSESTree.Property, messageId: MessageId, data: Record<string, string> = {}) {
			context.report({
				node: prop.key,
				messageId,
				data,
				fix: (fixer) => removeWithTrailingComma(context.sourceCode, fixer, prop),
			});
		}

		return {
			ExportDefaultDeclaration(node) {
				const metaNode = resolveStoryMeta(context, node.declaration);

				if (metaNode) {
					checkSharedAnnotations(metaNode);
				}
			},

			ExportNamedDeclaration(node) {
				if (node.declaration?.type !== AST_NODE_TYPES.VariableDeclaration) {
					return;
				}

				node.declaration.declarations.forEach((declaration) => {
					if (declaration.id.type !== AST_NODE_TYPES.Identifier || !declaration.init) {
						return;
					}

					const storyObj = unwrapExpression(declaration.init);

					if (storyObj.type !== AST_NODE_TYPES.ObjectExpression) {
						return;
					}

					checkSharedAnnotations(storyObj);
					checkEmptyPlay(storyObj);
					checkRedundantName(storyObj, 'name', declaration.id.name);
					checkRedundantName(storyObj, 'storyName', declaration.id.name);
				});
			},
		};
	},
});
