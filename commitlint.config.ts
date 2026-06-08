import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';
import designSystem from '@drivenets/commitlint-plugin-internal';

const config: UserConfig = {
	extends: ['@commitlint/config-conventional'],
	plugins: [designSystem],
	rules: {
		'design-system/require-jira-ticket': [RuleConfigSeverity.Error, 'always', { prefix: 'AR' }],
	},
};

export default config;
