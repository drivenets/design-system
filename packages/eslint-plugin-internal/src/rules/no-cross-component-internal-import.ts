import { type TSESTree } from '@typescript-eslint/utils';
import { createRule } from '../create-rule';

const CROSS_COMPONENT_DEEP_IMPORT_PATTERN = /^(?:\.\.\/)+(?:.*\/)?ds-[^/]+\/.+/;

type MessageId = 'noCrossComponentInternalImport';

export const noCrossComponentInternalImport = createRule<[], MessageId>({
	name: 'no-cross-component-internal-import',
	meta: {
		type: 'problem',
		docs: {
			description:
				"Disallow importing from another ds-* component's internal files. Use the component's barrel export instead.",
		},
		messages: {
			noCrossComponentInternalImport:
				"Don't import from another component's internals ({{ importPath }}). Use the barrel export or extract shared code to a shared util.",
		},
		schema: [],
	},
	defaultOptions: [],
	create(context) {
		function check(
			node: TSESTree.ImportDeclaration | TSESTree.ExportNamedDeclaration | TSESTree.ExportAllDeclaration,
		) {
			const source = node.source;

			if (!source) {
				return;
			}

			const importPath = source.value;

			if (CROSS_COMPONENT_DEEP_IMPORT_PATTERN.test(importPath)) {
				context.report({
					node: source,
					messageId: 'noCrossComponentInternalImport',
					data: { importPath },
				});
			}
		}

		return {
			ImportDeclaration: check,
			ExportNamedDeclaration: check,
			ExportAllDeclaration: check,
		};
	},
});
