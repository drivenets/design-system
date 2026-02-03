/**
 * @type {import('lint-staged').Configuration}
 */
export default {
	'*': 'cspell --no-must-find-files',
	'!(*.js|*.mjs|*.ts|*.tsx)': 'oxfmt --no-error-on-unmatched-pattern',
	'*.{js,mjs,ts,tsx}': ['eslint --max-warnings=0', 'oxfmt'],
};
