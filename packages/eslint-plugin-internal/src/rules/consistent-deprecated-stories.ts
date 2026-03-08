import { createRule } from '../create-rule';
import { isDeprecated } from './utils/is-deprecated';
import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';
import { AST_NODE_TYPES, ESLintUtils, type TSESTree } from '@typescript-eslint/utils';
import { getObjectProperty } from './utils/get-object-property';

type MessageId =
	| 'requireDeprecatedSuffix'
	| 'requireDeprecatedTag'
	| 'deprecatedSuffixNotFormatted'
	| 'disallowDeprecatedTag';

export const consistentDeprecatedStories = createRule<[], MessageId>({
	name: 'consistent-deprecated-stories',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Stories for deprecated components must include a "(Deprecated)" title suffix and a "deprecated" tag.',
		},
		messages: {
			requireDeprecatedSuffix:
				'{{ component }} is deprecated. The story title must have a "(Deprecated)" suffix.',

			requireDeprecatedTag: '{{ component }} is deprecated. The story must have a "deprecated" tag.',

			deprecatedSuffixNotFormatted:
				'The "(Deprecated)" suffix is case-sensitive and must have a single space before it.',

			disallowDeprecatedTag: '{{ component }} is not deprecated. Remove the "deprecated" tag.',
		},
		fixable: 'code',
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		const services = ESLintUtils.getParserServices(context);

		function check(node: TSESTree.ExportDefaultDeclaration) {
			const metaNode = resolveMetaObject(context, node.declaration);

			if (!metaNode || metaNode.type !== AST_NODE_TYPES.ObjectExpression) {
				return;
			}

			const tagsProp = getObjectProperty(metaNode, 'tags');
			const titleProp = getObjectProperty(metaNode, 'title');
			const componentProp = getObjectProperty(metaNode, 'component');

			// Skip invalid (e.g., non-variable-reference) components.
			if (componentProp?.value.type !== AST_NODE_TYPES.Identifier) {
				return;
			}

			const componentRef = componentProp.value;
			const componentName = componentRef.name;

			// Skip non-deprecated components.
			if (!isDeprecated(services, componentRef)) {
				return;
			}

			// Report when the title is missing.
			if (!titleProp) {
				context.report({
					node: metaNode,
					messageId: 'requireDeprecatedSuffix',
					data: { component: componentName },
					fix: (fixer) => {
						return fixer.insertTextAfter(componentProp, `,\n\ttitle: '${componentName} (Deprecated)'`);
					},
				});

				return;
			}

			// Skip checking when title is not a literal value (i.e., reference to a variable)
			if (titleProp.value.type !== AST_NODE_TYPES.Literal) {
				return;
			}

			const title = String(titleProp.value.value);

			const hasSuffix = title.endsWith('(Deprecated)');
			const suffixFormatted = title.match(/[^\s]\s\(Deprecated\)$/g);

			// Report when the title doesn't have a suffix or is not formatted correctly.
			if (!hasSuffix || !suffixFormatted) {
				context.report({
					node: titleProp.value,
					messageId: hasSuffix ? 'deprecatedSuffixNotFormatted' : 'requireDeprecatedSuffix',
					data: { component: componentName },

					fix: (fixer) => {
						const base = title.replace(/\s*\(Deprecated\)/g, '').trimEnd();

						return fixer.replaceText(titleProp.value, `'${base} (Deprecated)'`);
					},
				});
			}

			const tagsArray = tagsProp?.value.type === AST_NODE_TYPES.ArrayExpression ? tagsProp.value : null;

			const hasDeprecatedTag = tagsArray?.elements.some(
				(el) => el?.type === AST_NODE_TYPES.Literal && el.value === 'deprecated',
			);

			// Report when the tags prop is missing or doesn't contain the deprecated tag.
			if (!hasDeprecatedTag) {
				context.report({
					node: tagsProp ?? metaNode,
					messageId: 'requireDeprecatedTag',
					data: { component: componentName },
					fix: (fixer) => {
						// Create the tags property if it doesn't exist.
						if (!tagsProp) {
							const lastProperty = metaNode.properties.at(-1);

							return lastProperty
								? fixer.insertTextAfter(lastProperty, ",\n\ttags: ['deprecated']")
								: fixer.insertTextAfter(metaNode, "\n\ttags: ['deprecated']");
						}

						// Append the deprecated tag to the tags array.
						const lastTag = tagsArray?.elements.at(-1);

						return lastTag
							? fixer.insertTextAfter(lastTag, ", 'deprecated'")
							: fixer.replaceText(tagsProp.value, "['deprecated']");
					},
				});
			}
		}

		return {
			ExportDefaultDeclaration: check,
		};
	},
});

/**
 * Resolve the meta object either from a variable declaration or an export default declaration:
 *
 * ```ts
 * const meta = {...};
 *
 * export default meta;
 * ```
 * or
 * ```ts
 * export default {...};
 * ```
 */
function resolveMetaObject(
	context: RuleContext<MessageId, []>,
	declaration: TSESTree.DefaultExportDeclarations,
): TSESTree.Expression | undefined {
	if (declaration.type !== AST_NODE_TYPES.Identifier) {
		return declaration as TSESTree.Expression;
	}

	const scope = context.sourceCode.getScope(declaration);
	const variable = scope.references.find((ref) => ref.identifier === declaration)?.resolved;
	const def = variable?.defs[0]?.node;

	if (def?.type === AST_NODE_TYPES.VariableDeclarator) {
		return def.init ?? undefined;
	}

	return undefined;
}
