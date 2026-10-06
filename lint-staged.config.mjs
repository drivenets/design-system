// design-sync state (.design-sync/, .ds-sync/, ds-bundle/) is authored to
// the design-sync skill's own conventions and excluded from the root
// tsconfig/eslint configs (see eslint.config.ts) - eslint emits a
// "file ignored" warning (counted by --max-warnings=0) when handed a path
// it's configured to ignore, so lint-staged must filter those paths out
// itself rather than relying on eslint's own ignore config.
/** @param {string} f */
const isDesignSync = (f) => /(^|\/)(\.design-sync|\.ds-sync|ds-bundle)\//.test(f);
/** @param {readonly string[]} filenames */
const notDesignSync = (filenames) => filenames.filter((f) => !isDesignSync(f));

/**
 * @type {import('lint-staged').Configuration}
 */
export default {
	'*': 'cspell --no-must-find-files',
	'!(*.js|*.mjs|*.ts|*.tsx)': 'oxfmt --no-error-on-unmatched-pattern',
	/** @param {readonly string[]} filenames */
	'*.{ts,tsx}': (filenames) => (notDesignSync(filenames).length ? 'tsc --noEmit' : []),
	/** @param {readonly string[]} filenames */
	'*.{js,mjs,ts,tsx}': (filenames) => {
		const files = notDesignSync(filenames).map((f) => JSON.stringify(f));
		return files.length ? [`oxfmt ${files.join(' ')}`, `eslint --max-warnings=0 ${files.join(' ')}`] : [];
	},
};
