import { createRule } from '../create-rule';
import { getObjectProperty } from './utils/get-object-property';
import { resolveStoryMeta } from './utils/resolve-story-meta';
import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';

type MessageId = 'invalidCategory' | 'invalidComponentName';
type Options = [];

const CATEGORIES = ['Design System', 'Examples'];
const DEFAULT_CATEGORY = CATEGORIES[0] as string;

export const consistentStoryTitles = createRule<Options, MessageId>({
	name: 'consistent-story-titles',
	meta: {
		type: 'problem',
		docs: {
			description:
				'Story titles must start with an allowed category followed by the component name without the "Ds" prefix.',
		},
		messages: {
			invalidCategory: `Story title must start with an allowed category (${CATEGORIES.join(', ')}).`,

			invalidComponentName:
				'Story title must include the component name without the "Ds" prefix ("{{ expectedName }}") after the category.',
		},
		fixable: 'code',
		schema: [],
	},
	create(context) {
		const check = (node: TSESTree.ExportDefaultDeclaration) => {
			const metaNode = resolveStoryMeta(context, node.declaration);

			if (!metaNode) {
				return;
			}

			const { titleProp, componentProp } = getStoryMetaProps(metaNode);

			if (!titleProp) {
				return;
			}

			const title = String(titleProp.value.value);
			const segments = title.split('/');
			const [categoryOrStoryName = '', ...rest] = segments;

			// Report invalid / missing category.
			if (!CATEGORIES.includes(categoryOrStoryName)) {
				const fixed =
					segments.length === 1
						? // One segment, assuming it's the story name, prepend the default category.
							[DEFAULT_CATEGORY, ...segments].join('/')
						: // Multiple segments, replace the first segment with the default category.
							[DEFAULT_CATEGORY, ...rest].join('/');

				context.report({
					node: titleProp.value,
					messageId: 'invalidCategory',
					fix(fixer) {
						return fixer.replaceText(titleProp.value, `'${fixed}'`);
					},
				});

				return;
			}

			const componentName = getComponentName(componentProp?.value);

			if (!componentName) {
				return;
			}

			const expectedComponentName = normalizeComponentName(componentName);
			const componentSegmentIndex = findComponentSegment(componentName, segments);

			// Report invalid / missing component name in title.
			if (componentSegmentIndex === -1) {
				context.report({
					node: titleProp.value,
					messageId: 'invalidComponentName',
					data: {
						expectedName: expectedComponentName,
					},
				});

				return;
			}

			const componentNameSegment = segments[componentSegmentIndex] as string;
			const normalizedComponentNameSegment = normalizeComponentName(componentNameSegment);

			const expectedTitle = segments
				.toSpliced(componentSegmentIndex, 1, normalizedComponentNameSegment)
				.join('/');

			// Report unformatted component name in title.
			if (title !== expectedTitle) {
				context.report({
					node: titleProp.value,
					messageId: 'invalidComponentName',
					data: {
						expectedName: expectedComponentName,
					},
					fix(fixer) {
						return fixer.replaceText(titleProp.value, `'${expectedTitle}'`);
					},
				});
			}
		};

		return {
			ExportDefaultDeclaration: check,
		};
	},
});

function getStoryMetaProps(metaNode: TSESTree.ObjectExpression) {
	const titleProp = getObjectProperty({
		obj: metaNode,
		name: 'title',
		predicate: (v) => v.type === AST_NODE_TYPES.Literal,
	});

	const componentProp = getObjectProperty({
		obj: metaNode,
		name: 'component',
		predicate: (v) => v.type === AST_NODE_TYPES.Identifier || v.type === AST_NODE_TYPES.MemberExpression,
	});

	return {
		titleProp,
		componentProp,
	};
}

function normalizeComponentName(name: string) {
	return name.replace(/\bDs([A-Z])/, '$1').trim();
}

function getComponentName(node: TSESTree.MemberExpression | TSESTree.Identifier | undefined) {
	if (!node) {
		return null;
	}

	if (node.type === AST_NODE_TYPES.Identifier) {
		return node.name;
	}

	if (node.object.type === AST_NODE_TYPES.Identifier) {
		return node.object.name;
	}

	return null;
}

// Guess the index of the component name in the title segments.
function findComponentSegment(componentName: string, segments: string[]) {
	const normalizedComponentName = normalizeComponentName(componentName);

	// Checking `.startsWith()` instead of `===` to allow for additional suffixes after the component
	// name (i.e. "Button (Deprecated)").
	const index = segments.findIndex((segment) => {
		return normalizeComponentName(segment).startsWith(normalizedComponentName);
	});

	return index;
}
