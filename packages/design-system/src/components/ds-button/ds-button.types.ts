import type { DsButtonProps as DsButtonLegacyProps } from './versions/ds-button-legacy/ds-button-legacy.types';
import type { DsButtonProps as DsButtonNewProps } from './versions/ds-button-new/ds-button-new.types';

export type DsButtonUnifiedProps =
	| (DsButtonLegacyProps & {
			/**
			 * Selects the legacy button implementation. Accepts `DsButtonLegacyProps`.
			 * Omit or pass `'legacy'` to opt into this branch.
			 */
			design?: undefined | 'legacy';
	  })
	| (DsButtonNewProps & {
			/**
			 * Selects the new (v1.2) button implementation. Accepts `DsButtonNewProps`.
			 */
			design: 'v1.2';
	  });
