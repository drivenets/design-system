import type { DsButtonProps as DsButtonLegacyProps } from './versions/ds-button-legacy/ds-button-legacy.types';
import type { DsButtonProps as DsButtonNewProps } from './versions/ds-button-new/ds-button-new.types';

export type DsButtonUnifiedProps =
	| (DsButtonLegacyProps & { design?: undefined | 'legacy' })
	| (DsButtonNewProps & { design: 'v1.2' });
