import type { RuleDefinition } from '@eslint/core';
import type create from 'eslint-no-restricted/syntax';
import createNoRestrictedSyntax from 'eslint-no-restricted/syntax';

type RuleConfig<TName extends string> = Omit<create.RuleConfig, 'name'> & {
	name: TName;
};

type BasePlugin = ReturnType<typeof createNoRestrictedSyntax>;

export type Plugin<TRules extends string> = Omit<BasePlugin, 'rules'> & {
	rules: Record<TRules, RuleDefinition>;
};

/**
 * Typed wrapper around `createNoRestrictedSyntax`.
 *
 * See: https://github.com/bradzacher/eslint-no-restricted/issues/13
 */
export function createPlugin<TRules extends string>(
	name: string,
	...rules: Array<RuleConfig<TRules>>
): Plugin<TRules> {
	return createNoRestrictedSyntax(name, ...rules) as Plugin<TRules>;
}
