import { withResponsiveProps } from '../../utils/responsive';
import DsStatusBadgeV2Base from './ds-status-badge-v2';

export const DsStatusBadgeV2 = withResponsiveProps(DsStatusBadgeV2Base, ['size']);

export type {
	StatusBadgeV2Phase,
	StatusBadgeV2Variant,
	StatusBadgeV2Size,
	DsStatusBadgeV2BaseProps,
	DsStatusBadgeV2Props,
} from './ds-status-badge-v2.types';
export { statusBadgeV2Phases, statusBadgeV2Variants, statusBadgeV2Sizes } from './ds-status-badge-v2.types';
