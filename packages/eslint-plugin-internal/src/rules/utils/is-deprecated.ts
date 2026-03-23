import ts from 'typescript';
import * as tsutils from 'ts-api-utils';
import { type ParserServicesWithTypeInformation, type TSESTree } from '@typescript-eslint/utils';

/**
 * Simple and naive way to check if a Node is deprecated.
 * It checks the Node's-related symbols directly for a `@ deprecated` tag, without checking cases
 * like `export { @ deprecated foo };`.
 *
 * A better & full solution would be something like typescript-eslint's implementation:
 * @see https://github.com/typescript-eslint/typescript-eslint/blob/fc5cd09de/packages/eslint-plugin/src/rules/no-deprecated.ts
 */
export function isDeprecated(services: ParserServicesWithTypeInformation, node: TSESTree.Node): boolean {
	const symbol = resolveSymbol(services, node);

	// The node has a direct `@deprecated` tag above it.
	if (hasDeprecatedTag(symbol)) {
		return true;
	}

	// Node doesn't have a direct `@deprecated` tag (i.e., `objectName.prop = deprecatedComponent`),
	// so we're following the assignment to check the actual type's symbol.
	const type = services.getTypeAtLocation(node);

	return hasDeprecatedTag(type.getSymbol());
}

function hasDeprecatedTag(symbol: ts.Symbol | undefined) {
	return symbol?.getJsDocTags().some((tag) => tag.name === 'deprecated') ?? false;
}

function resolveSymbol(
	services: ParserServicesWithTypeInformation,
	node: TSESTree.Node,
): ts.Symbol | undefined {
	let symbol = services.getSymbolAtLocation(node);

	if (symbol && tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.Alias)) {
		const checker = services.program.getTypeChecker();

		symbol = checker.getAliasedSymbol(symbol);
	}

	return symbol;
}
