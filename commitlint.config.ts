import { RuleConfigSeverity } from '@commitlint/types';
import designSystem from '@drivenets/commitlint-plugin-design-system';

export default {
	extends: ['@commitlint/config-conventional'],
	plugins: [designSystem],
	rules: {
		'design-system/require-jira-ticket': [RuleConfigSeverity.Error, 'always', { prefix: 'AR' }],
	},
};
