import { createRule } from '../create-rule';
import { isDeprecated } from './utils/is-deprecated';
import { getObjectProperty } from './utils/get-object-property';
import { resolveStoryMeta } from './utils/resolve-story-meta';
import { AST_NODE_TYPES, ESLintUtils, type TSESTree } from '@typescript-eslint/utils';

type MessageId =
	| 'missingDeprecatedSuffix'
	| 'missingDeprecatedTag'
	| 'unformattedDeprecatedSuffix'
	| 'noUnusedDeprecatedTag'
	| 'noUnusedDeprecatedSuffix';

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
			missingDeprecatedSuffix: `{{ component }} is deprecated. The story title must have a "${SUFFIX}" suffix.`,

			missingDeprecatedTag: '{{ component }} is deprecated. The story must have a "deprecated" tag.',

			unformattedDeprecatedSuffix: `The "${SUFFIX}" suffix is case-sensitive and must have a single space before it.`,

			noUnusedDeprecatedSuffix: `{{ component }} is not deprecated. Remove the "${SUFFIX}" suffix.`,

			noUnusedDeprecatedTag: '{{ component }} is not deprecated. Remove the "deprecated" tag.',
		},
		fixable: 'code',
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		const services = ESLintUtils.getParserServices(context);

		function check(node: TSESTree.ExportDefaultDeclaration) {
			const metaNode = resolveStoryMeta(context, node.declaration);

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
			const isComponentDeprecated = isDeprecated(services, componentRef);

			const title = String(titleProp?.value.value);
			const hasSuffix = title.endsWith(SUFFIX);
			const suffixFormatted = title.match(new RegExp(`[^\\s]\\s${SUFFIX_ESCAPED}$`, 'g'));

			const tagsArray = tagsProp?.value;

			const deprecatedTag = tagsArray?.elements.find((el) => {
				return el?.type === AST_NODE_TYPES.Literal && el.value === 'deprecated';
			});

			const hasDeprecatedTag = !!deprecatedTag;

			if (!isComponentDeprecated) {
				// Report when a non-deprecated component has a `deprecated` suffix.
				if (titleProp && hasSuffix) {
					context.report({
						node: titleProp.value,
						messageId: 'noUnusedDeprecatedSuffix',
						data: { component: componentName },
						fix: (fixer) => {
							const replaced = title.replace(SUFFIX, '').trim();

							return fixer.replaceText(titleProp.value, `'${replaced}'`);
						},
					});
				}

				// Report when a non-deprecated component has a `deprecated` tag.
				if (hasDeprecatedTag) {
					context.report({
						node: deprecatedTag,
						messageId: 'noUnusedDeprecatedTag',
						data: { component: componentName },
						fix: (fixer) => {
							return fixer.remove(deprecatedTag);
						},
					});
				}

				return;
			}

			// Report when a deprecated component has no title.
			if (!titleProp) {
				context.report({
					node: metaNode,
					messageId: 'missingDeprecatedSuffix',
					data: { component: componentName },
					fix: (fixer) => {
						return fixer.insertTextAfter(componentProp, `,\n\ttitle: '${componentName} ${SUFFIX}'`);
					},
				});

				return;
			}

			// Report when a deprecated component is missing a title suffix or is not formatted correctly.
			if (!hasSuffix || !suffixFormatted) {
				context.report({
					node: titleProp.value,
					messageId: hasSuffix ? 'unformattedDeprecatedSuffix' : 'missingDeprecatedSuffix',
					data: { component: componentName },
					fix: (fixer) => {
						const base = title.replace(new RegExp(`\\s*${SUFFIX_ESCAPED}`, 'g'), '').trim();

						return fixer.replaceText(titleProp.value, `'${base} ${SUFFIX}'`);
					},
				});
			}

			// Report when a deprecated component is missing a `deprecated` tag.
			if (!hasDeprecatedTag) {
				context.report({
					node: tagsProp ?? metaNode,
					messageId: 'missingDeprecatedTag',
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
