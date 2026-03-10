import { createRule } from '../create-rule';

type MessageId = 'noUselessTsxExtension';

export const noUselessTsxExtension = createRule<[], MessageId>({
	name: 'no-useless-tsx-extension',
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow `.tsx` file extension when the file contains no JSX.',
		},
		messages: {
			noUselessTsxExtension: 'File has a `.tsx` extension but contains no JSX. Rename it to `.ts`.',
		},
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		const filename = context.filename;

		if (!filename.endsWith('.tsx')) {
			return {};
		}

		let hasJsx = false;

		return {
			JSXElement() {
				hasJsx = true;
			},

			JSXFragment() {
				hasJsx = true;
			},

			'Program:exit'(node) {
				if (!hasJsx) {
					context.report({
						node,
						loc: {
							line: 1,
							column: 1,
						},
						messageId: 'noUselessTsxExtension',
					});
				}
			},
		};
	},
});
