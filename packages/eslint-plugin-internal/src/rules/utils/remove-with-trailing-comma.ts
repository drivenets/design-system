import type { TSESTree } from '@typescript-eslint/utils';
import type { RuleFixer, SourceCode } from '@typescript-eslint/utils/ts-eslint';

export function removeWithTrailingComma(sourceCode: SourceCode, fixer: RuleFixer, node: TSESTree.Node) {
	const trailingComma = sourceCode.getTokenAfter(node);
	const rangeEnd = trailingComma?.value === ',' ? trailingComma.range[1] : node.range[1];

	return fixer.removeRange([node.range[0], rangeEnd]);
}
