import ts from 'typescript';
import * as tsutils from 'ts-api-utils';
import type { ParserServicesWithTypeInformation, TSESTree } from '@typescript-eslint/utils';

/**
 * Fast and naive way to check if an identifier is deprecated.
 * It checks the Identifier's symbol directly for a `@ deprecated` tag, without checking cases
 * like `export { @ deprecated foo };`.
 *
 * A better & full solution would be something like typescript-eslint's implementation:
 * @see https://github.com/typescript-eslint/typescript-eslint/blob/fc5cd09de/packages/eslint-plugin/src/rules/no-deprecated.ts
 */
export function isDeprecated(services: ParserServicesWithTypeInformation, node: TSESTree.Node): boolean {
	const checker = services.program.getTypeChecker();
	const componentTsNode = services.esTreeNodeToTSNodeMap.get(node);

	const symbol = resolveSymbol(checker, componentTsNode);

	return symbol?.getJsDocTags().some((tag) => tag.name === 'deprecated') ?? false;
}

function resolveSymbol(checker: ts.TypeChecker, node: ts.Node): ts.Symbol | undefined {
	let symbol = checker.getSymbolAtLocation(node);

	if (symbol && tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.Alias)) {
		symbol = checker.getAliasedSymbol(symbol);
	}

	return symbol;
}
