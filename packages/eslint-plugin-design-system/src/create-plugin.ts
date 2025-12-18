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
	return renamePlugin(createNoRestrictedSyntax(...rules) as Plugin<TRules>, name);
}

/**
 * Hacky way to rename the plugin so the rules won't have generic names of `no-restricted-syntax/*`.
 *
 * See: https://github.com/bradzacher/eslint-no-restricted/issues/12
 */
function renamePlugin<TRules extends string>(plugin: Plugin<TRules>, newName: string): Plugin<TRules> {
	const oldName = plugin.meta.name;

	plugin.meta.name = newName;

	plugin.configs.recommended.name = `${newName}/recommended`;

	const renameFn = (ruleName: string) => ruleName.replace(new RegExp(`^${oldName}/`), `${newName}/`);

	plugin.rules = renameObjectKeys(plugin.rules, renameFn);
	plugin.configs.recommended.rules = renameObjectKeys(plugin.configs.recommended.rules || {}, renameFn);

	plugin.configs.recommended.plugins = {
		[newName]: plugin,
	};

	return plugin;
}

function renameObjectKeys(obj: Record<string, unknown>, renameFn: (key: string) => string) {
	const entries = Object.entries(obj).map(([key, value]) => {
		return [renameFn(key), value];
	});

	return Object.fromEntries(entries);
}
