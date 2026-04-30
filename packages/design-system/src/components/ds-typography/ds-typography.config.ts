import { ark } from '@ark-ui/react';

export const typographyVariantConfig = {
	'body-md-reg': { element: 'p', component: ark.p },
	'body-md-md': { element: 'p', component: ark.p },
	'body-md-semi-bold': { element: 'p', component: ark.p },
	'body-md-bold': { element: 'p', component: ark.p },
	'body-md-link': { element: 'a', component: ark.a },

	'body-sm-reg': { element: 'span', component: ark.span },
	'body-sm-md': { element: 'span', component: ark.span },
	'body-sm-semi-bold': { element: 'span', component: ark.span },
	'body-sm-bold': { element: 'span', component: ark.span },
	'body-sm-link': { element: 'a', component: ark.a },

	'body-xs-reg': { element: 'span', component: ark.span },
	'body-xs-md': { element: 'span', component: ark.span },
	'body-xs-semi-bold': { element: 'span', component: ark.span },
	'body-xs-bold': { element: 'span', component: ark.span },
	'body-xs-link': { element: 'a', component: ark.a },

	'code-sm-reg': { element: 'code', component: ark.code },
	'code-sm-semi-bold': { element: 'code', component: ark.code },
	'code-xs-reg': { element: 'code', component: ark.code },
	'code-xs-semi-bold': { element: 'code', component: ark.code },

	heading1: { element: 'h1', component: ark.h1 },
	heading2: { element: 'h2', component: ark.h2 },
	heading3: { element: 'h3', component: ark.h3 },
	heading4: { element: 'h4', component: ark.h4 },
} as const;

/** Semantic text colors backed by `--font-*` tokens in `_root_new.scss`. */
export const typographyColors = [
	'main',
	'secondary',
	'action',
	'action-hover',
	'action-secondary',
	'action-secondary-hover',
	'disabled',
	'light-disabled',
	'on-action',
	'on-disabled',
	'placeholder',
	'highlight',
	'success',
	'warning',
	'error',
	'code',
] as const;
