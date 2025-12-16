import { type Plugin } from '@commitlint/types';
import { requireJiraTicket } from './rules/require-jira-ticket';

export const commitlintPluginDesignSystem = {
	rules: {
		'design-system/require-jira-ticket': requireJiraTicket,
	},
} satisfies Plugin;
