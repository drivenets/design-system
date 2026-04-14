import { withResponsiveProps } from '../../utils/responsive';
import { DsPanelBase } from './ds-panel';

export const DsPanel = withResponsiveProps(DsPanelBase, ['width']);
export type { DsPanelProps, DsPanelVariant, DsPanelCollapseButtonProps } from './ds-panel.types';
