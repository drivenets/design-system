import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';

/**
 * Unwrap a node if it is a `satisfies` or `as` expression.
 */
export function unwrapExpression<T extends TSESTree.Node | null>(
	node: T,
): null extends T ? null : TSESTree.Node {
	if (node?.type === AST_NODE_TYPES.TSSatisfiesExpression || node?.type === AST_NODE_TYPES.TSAsExpression) {
		return unwrapExpression(node.expression) as never;
	}

	return node as never;
}
