import type { CSSProperties, Ref } from 'react';

export const dsIllustrationVariants = [
	'configuration',
	'device',
	'done',
	'empty-inbox',
	'error',
	'go-filter',
	'no-connection',
	'no-credit-card',
	'no-device',
	'no-documents',
	'no-gps',
	'no-images',
	'no-items-cart',
	'no-messages',
	'no-search-result',
	'no-tasks',
	'site',
] as const;

export type DsIllustrationVariant = (typeof dsIllustrationVariants)[number];

export interface DsIllustrationProps {
	/**
	 * Which empty-screen tile to render.
	 * @default 'no-tasks'
	 */
	variant?: DsIllustrationVariant;

	className?: string;

	style?: CSSProperties;

	ref?: Ref<SVGSVGElement>;

	/**
	 * Decorative by default. Set `false` with `aria-label` when the tile is informative.
	 * @default true
	 */
	'aria-hidden'?: boolean | 'true' | 'false';

	'aria-label'?: string;
}
