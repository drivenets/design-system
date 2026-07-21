/**
 * @type {import('lint-staged').Configuration}
 */
export default {
	'*': 'cspell --no-must-find-files',
	'!(*.js|*.mjs|*.ts|*.tsx)': 'oxfmt --no-error-on-unmatched-pattern',
	'*.{ts,tsx}': () => 'tsc --noEmit',
	'*.{js,mjs,ts,tsx}': ['oxfmt', 'eslint --max-warnings=0'],
};
