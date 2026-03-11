import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';
import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';

/**
 * Resolve the meta object of a story file either from a variable declaration or an inline export default:
 *
 * ```ts
 * const meta = {...};
 * export default meta;
 * ```
 * or
 * ```ts
 * export default {...};
 * ```
 */
export function resolveStoryMeta(
	context: RuleContext<string, readonly unknown[]>,
	declaration: TSESTree.DefaultExportDeclarations,
): TSESTree.ObjectExpression | null {
	const isInlineObject = declaration.type !== AST_NODE_TYPES.Identifier;

	if (isInlineObject) {
		return asObjectExpression(declaration);
	}

	const scope = context.sourceCode.getScope(declaration);
	const variable = scope.references.find((ref) => ref.identifier === declaration)?.resolved;
	const def = variable?.defs[0]?.node;

	if (def?.type === AST_NODE_TYPES.VariableDeclarator) {
		return asObjectExpression(def.init);
	}

	return null;
}

function asObjectExpression(node: TSESTree.Node | null): TSESTree.ObjectExpression | null {
	return node?.type === AST_NODE_TYPES.ObjectExpression ? node : null;
}
