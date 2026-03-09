import { createRule } from '../create-rule';
import { isDeprecated } from './utils/is-deprecated';
import { getObjectProperty } from './utils/get-object-property';
import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';
import { AST_NODE_TYPES, ESLintUtils, type TSESTree } from '@typescript-eslint/utils';

type MessageId =
	| 'requireDeprecatedSuffix'
	| 'requireDeprecatedTag'
	| 'deprecatedSuffixNotFormatted'
	| 'disallowDeprecatedTag';

const SUFFIX = '(Deprecated)';
const SUFFIX_ESCAPED = SUFFIX.replace(/([()])/g, '\\$1');

export const consistentDeprecatedStories = createRule<[], MessageId>({
	name: 'consistent-deprecated-stories',
	meta: {
		type: 'problem',
		docs: {
			description: `Stories for deprecated components must include a "${SUFFIX}" title suffix and a "deprecated" tag.`,
		},
		messages: {
			requireDeprecatedSuffix: `{{ component }} is deprecated. The story title must have a "${SUFFIX}" suffix.`,

			requireDeprecatedTag: '{{ component }} is deprecated. The story must have a "deprecated" tag.',

			deprecatedSuffixNotFormatted: `The "${SUFFIX}" suffix is case-sensitive and must have a single space before it.`,

			disallowDeprecatedTag: '{{ component }} is not deprecated. Remove the "deprecated" tag.',
		},
		fixable: 'code',
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		const services = ESLintUtils.getParserServices(context);

		function check(node: TSESTree.ExportDefaultDeclaration) {
			const metaNode = resolveStoryMetaObject(context, node.declaration);

			if (!metaNode) {
				return;
			}

			const { componentProp, tagsProp, titleProp } = getStoryMetaProps(metaNode);

			// Skip when the component property is missing.
			if (!componentProp) {
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
						return fixer.insertTextAfter(componentProp, `,\n\ttitle: '${componentName} ${SUFFIX}'`);
					},
				});

				return;
			}

			const title = String(titleProp.value.value);
			const hasSuffix = title.endsWith(SUFFIX);
			const suffixFormatted = title.match(new RegExp(`[^\\s]\\s${SUFFIX_ESCAPED}$`, 'g'));

			// Report when the title doesn't have a suffix or is not formatted correctly.
			if (!hasSuffix || !suffixFormatted) {
				context.report({
					node: titleProp.value,
					messageId: hasSuffix ? 'deprecatedSuffixNotFormatted' : 'requireDeprecatedSuffix',
					data: { component: componentName },
					fix: (fixer) => {
						const base = title.replace(new RegExp(`\\s*${SUFFIX_ESCAPED}`, 'g'), '').trim();

						return fixer.replaceText(titleProp.value, `'${base} ${SUFFIX}'`);
					},
				});
			}

			const tagsArray = tagsProp?.value;

			const hasDeprecatedTag = tagsArray?.elements.some(
				(el) => el?.type === AST_NODE_TYPES.Literal && el.value === 'deprecated',
			);

			if (hasDeprecatedTag) {
				return;
			}

			// Report when the `tags` prop is missing or doesn't contain the `deprecated` tag.
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
function resolveStoryMetaObject(
	context: RuleContext<MessageId, []>,
	declaration: TSESTree.DefaultExportDeclarations,
): TSESTree.ObjectExpression | null {
	const isInlineObject = declaration.type !== AST_NODE_TYPES.Identifier;

	if (isInlineObject) {
		return toObjectExpression(declaration);
	}

	const scope = context.sourceCode.getScope(declaration);
	const variable = scope.references.find((ref) => ref.identifier === declaration)?.resolved;
	const def = variable?.defs[0]?.node;

	if (def?.type === AST_NODE_TYPES.VariableDeclarator) {
		return toObjectExpression(def.init);
	}

	return null;
}

function toObjectExpression(node: TSESTree.Node | null): TSESTree.ObjectExpression | null {
	return node?.type === AST_NODE_TYPES.ObjectExpression ? node : null;
}

function getStoryMetaProps(metaNode: TSESTree.ObjectExpression) {
	const tagsProp = getObjectProperty({
		obj: metaNode,
		name: 'tags',
		predicate: (v) => v.type === AST_NODE_TYPES.ArrayExpression,
	});

	const componentProp = getObjectProperty({
		obj: metaNode,
		name: 'component',
		predicate: (v) => v.type === AST_NODE_TYPES.Identifier,
	});

	const titleProp = getObjectProperty({
		obj: metaNode,
		name: 'title',
		predicate: (v) => v.type === AST_NODE_TYPES.Literal,
	});

	return {
		tagsProp,
		titleProp,
		componentProp,
	};
}
