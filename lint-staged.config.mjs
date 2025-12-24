/**
 * @type {import('lint-staged').Configuration}
 */
export default {
	'!(*.js|*.mjs|*.ts|*.tsx)': 'prettier --write --ignore-unknown',
	'*.{js,mjs,ts,tsx}': ['eslint --max-warnings=0', 'prettier --write'],
};
