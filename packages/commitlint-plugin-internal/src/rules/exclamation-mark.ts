import { type Rule } from '@commitlint/types';

export const exclamationMark: Rule<void> = ({ header }, when = 'never') => {
	if (!header) {
		return [true];
	}

	// To prevent ReDos. See:
	// https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS
	if (header.length > 1000) {
		throw new Error('Commit message is too long');
	}

	// Taken from:
	// https://github.com/conventional-changelog/commitlint/blob/9cd6a50e5/%40commitlint/rules/src/breaking-change-exclamation-mark.ts#L16
	const hasExclamationMark = /^(\w*)(?:\((.*)\))?!: (.*)$/.test(header);

	if (when === 'always') {
		return [
			hasExclamationMark,
			'Your commit type should end with an exclamation mark since it contains a breaking change (e.g., feat!: add feature)',
		];
	}

	return [
		!hasExclamationMark,
		'Your commit type should not end with an exclamation mark since it does not contain a breaking change (e.g., feat: add feature)',
	];
};
