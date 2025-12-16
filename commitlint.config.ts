import { RuleConfigSeverity } from '@commitlint/types';
import { commitlintPluginDesignSystem } from './commitlint-plugin-design-system';

export default {
	extends: ['@commitlint/config-conventional'],
	plugins: [commitlintPluginDesignSystem],
	rules: {
		'editor/require-jira-ticket': [RuleConfigSeverity.Error, 'always', { prefix: 'AR' }],
	},
};
