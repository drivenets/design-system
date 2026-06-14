import { type Plugin } from '@commitlint/types';
import { requireJiraTicket } from './rules/require-jira-ticket';
import { requireExclamationMark } from './rules/require-exclamation-mark';

export default {
	rules: {
		'design-system/require-jira-ticket': requireJiraTicket,
		'design-system/require-exclamation-mark': requireExclamationMark,
	},
} satisfies Plugin;
