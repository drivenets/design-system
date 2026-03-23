import { createRule } from '../create-rule';
import { getComponentParts } from './utils/get-component-parts';
import { getStoryMetaProps } from './utils/get-story-meta-props';
import { resolveStoryMeta } from './utils/resolve-story-meta';
import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';

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
		const services = ESLintUtils.getParserServices(context);

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

			const { name: componentName } = getComponentParts(services, componentProp?.value);

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

function normalizeComponentName(name: string) {
	return name.replace(/\bDs([A-Z])/, '$1').trim();
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
