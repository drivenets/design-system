/**
 * @type {import('stylelint').Config}
 */
export default {
	customSyntax: 'postcss-scss',
	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	rules: {
		'declaration-no-important': true,
		'color-no-hex': true,
		'selector-pseudo-class-disallowed-list': ['global'],
		'property-no-vendor-prefix': true,
		'value-no-vendor-prefix': true,
	},
};
