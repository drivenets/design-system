import { createRule } from '../create-rule';
import { getObjectProperty } from './utils/get-object-property';
import { resolveStoryMeta } from './utils/resolve-story-meta';

type MessageId = 'missing';

const requiredProperties = ['title', 'component'];

export const requireStoryParams = createRule<[], MessageId>({
	name: 'require-story-params',
	meta: {
		type: 'problem',
		docs: {
			description: 'Story meta must include a `component` property.',
		},
		messages: {
			missing: 'Story meta is missing a `{{ property }}` property.',
		},
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

				requiredProperties.forEach((property) => {
					const prop = getObjectProperty({
						obj: metaNode,
						name: property,
					});

					if (!prop) {
						context.report({
							node: metaNode,
							messageId: 'missing',
							data: { property },
						});
					}
				});
			},
		};
	},
});
