import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';
import { findVariable } from '@typescript-eslint/utils/ast-utils';
import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';

/**
 * Resolve the expression behind a default export, following an identifier to the initializer of the
 * variable it refers to:
 *
 * ```ts
 * const value = {...};
 * export default value;
 * ```
 * or
 * ```ts
 * export default {...};
 * ```
 *
 * `satisfies` and `as` wrappers are preserved, so callers that only care about the underlying value
 * should pass the result through `unwrapExpression`.
 */
export function resolveDefaultExport(
	context: RuleContext<string, readonly unknown[]>,
	declaration: TSESTree.Node,
): TSESTree.Node | null {
	if (declaration.type !== AST_NODE_TYPES.Identifier) {
		return declaration;
	}

	const scope = context.sourceCode.getScope(declaration);
	const variable = findVariable(scope, declaration);
	const def = variable?.defs[0]?.node;

	if (def?.type !== AST_NODE_TYPES.VariableDeclarator) {
		return null;
	}

	return def.init;
}
