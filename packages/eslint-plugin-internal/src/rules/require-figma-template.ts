import { createRule } from '../create-rule';
import { resolveDefaultExport } from './utils/resolve-default-export';
import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';

type MessageId = 'requireFigmaTemplate' | 'requireFigmaTemplateType';

export const requireFigmaTemplate = createRule<[], MessageId>({
	name: 'require-figma-template',
	meta: {
		type: 'problem',
		docs: {
			description: 'Require the default export of a Code Connect file to satisfy `figma.Template`.',
		},
		messages: {
			requireFigmaTemplate: 'A Figma template file must have a default export.',

			requireFigmaTemplateType:
				'The default export must be annotated with `satisfies figma.Template` so the template is type-checked.',
		},
		fixable: 'code',
		schema: [],
		defaultOptions: [],
	},
	create(context) {
		let hasDefaultExport = false;

		return {
			ExportDefaultDeclaration(node) {
				hasDefaultExport = true;

				const expression = resolveDefaultExport(context, node.declaration);

				if (expression?.type === AST_NODE_TYPES.TSSatisfiesExpression) {
					if (isFigmaTemplate(expression.typeAnnotation)) {
						return;
					}

					// Invalid satisfies: `export {...} satisfies NotFigmaTemplate;`
					context.report({
						node: expression.typeAnnotation,
						messageId: 'requireFigmaTemplateType',
						fix: (fixer) => fixer.replaceText(expression.typeAnnotation, 'figma.Template'),
					});

					return;
				}

				// Object: `export {...};`, `const template = {...}; export default template;`
				if (expression?.type === AST_NODE_TYPES.ObjectExpression) {
					context.report({
						node: expression,
						messageId: 'requireFigmaTemplateType',
						fix: (fixer) => fixer.insertTextAfter(expression, ' satisfies figma.Template'),
					});

					return;
				}

				// Anything else: `export function foo() {...};`, `export default class {...};`, etc.
				context.report({
					node: node.declaration,
					messageId: 'requireFigmaTemplateType',
				});
			},

			'Program:exit'() {
				if (!hasDefaultExport) {
					context.report({
						loc: {
							start: { line: 1, column: 0 },
							end: { line: 1, column: 1 },
						},
						messageId: 'requireFigmaTemplate',
					});
				}
			},
		};
	},
});

function isFigmaTemplate(typeAnnotation: TSESTree.TypeNode): boolean {
	if (typeAnnotation.type !== AST_NODE_TYPES.TSTypeReference) {
		return false;
	}

	const typeName = typeAnnotation.typeName;

	return (
		typeName.type === AST_NODE_TYPES.TSQualifiedName &&
		typeName.left.type === AST_NODE_TYPES.Identifier &&
		typeName.left.name === 'figma' &&
		typeName.right.name === 'Template'
	);
}
