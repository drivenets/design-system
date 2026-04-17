import { withResponsiveProps } from '../../utils/responsive';
import DsButtonBase from './ds-button';

export * from './ds-button.types';

export const DsButton = withResponsiveProps(DsButtonBase, ['size']);

DsButton.displayName = 'DsButton';
