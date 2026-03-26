import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';
import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';
import { unwrapExpression } from './unwrap-expression';

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
	const unwrappedDeclaration = unwrapExpression(declaration);

	const isInlineObject = unwrappedDeclaration.type !== AST_NODE_TYPES.Identifier;

	if (isInlineObject) {
		return asObjectExpression(unwrappedDeclaration);
	}

	const scope = context.sourceCode.getScope(unwrappedDeclaration);
	const variable = scope.references.find((ref) => ref.identifier === unwrappedDeclaration)?.resolved;
	const def = variable?.defs[0]?.node;

	if (def?.type === AST_NODE_TYPES.VariableDeclarator) {
		return asObjectExpression(unwrapExpression(def.init));
	}

	return null;
}

function asObjectExpression(node: TSESTree.Node | null): TSESTree.ObjectExpression | null {
	return node?.type === AST_NODE_TYPES.ObjectExpression ? node : null;
}
