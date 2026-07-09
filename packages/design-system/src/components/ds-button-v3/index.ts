import { withResponsiveProps } from '../../utils/responsive';
import DsButtonV3Base from './ds-button-v3';

export const DsButtonV3 = withResponsiveProps(DsButtonV3Base, ['size']);

DsButtonV3.displayName = 'DsButtonV3';

export * from './ds-button-v3.types';
