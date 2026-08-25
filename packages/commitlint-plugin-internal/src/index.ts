import { type Plugin } from '@commitlint/types';
import { exclamationMark } from './rules/exclamation-mark';
import { requireJiraTicket } from './rules/require-jira-ticket';

export default {
	rules: {
		'internal/exclamation-mark': exclamationMark,
		'internal/require-jira-ticket': requireJiraTicket,
	},
} satisfies Plugin;
