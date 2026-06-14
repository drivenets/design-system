import { type Plugin } from '@commitlint/types';
import { exclamationMark } from './rules/exclamation-mark';
import { requireJiraTicket } from './rules/require-jira-ticket';

export default {
	rules: {
		'design-system/exclamation-mark': exclamationMark,
		'design-system/require-jira-ticket': requireJiraTicket,
	},
} satisfies Plugin;
