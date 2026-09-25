import type { CSSProperties } from 'react';

export interface DsFiltersBarQueryLocale {
	placeholder?: string;
}

export const defaultDsFiltersBarQueryLocale: Required<DsFiltersBarQueryLocale> = Object.freeze({
	placeholder: 'status = "Active" AND trigger = "Scheduled"',
});

/**
 * Advanced query view: one-line code field with an overlay for long queries.
 */
export interface DsFiltersBarQueryProps {
	/**
	 * @default false
	 */
	disabled?: boolean;
	locale?: DsFiltersBarQueryLocale;
	className?: string;
	style?: CSSProperties;
}
