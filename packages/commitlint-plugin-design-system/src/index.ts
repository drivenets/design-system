import { type Plugin } from '@commitlint/types';
import { requireJiraTicket } from './rules/require-jira-ticket';

export default {
	rules: {
		'design-system/require-jira-ticket': requireJiraTicket,
	},
} satisfies Plugin;
