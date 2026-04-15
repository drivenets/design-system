import type { ComponentProps } from 'react';
import { withResponsiveProps } from '../../utils/responsive';
import DsSplitButtonBase from './ds-split-button';
export { type DsSplitButtonSlotProps, splitButtonSizes } from './ds-split-button.types';

export const DsSplitButton = withResponsiveProps(DsSplitButtonBase, ['size']);

DsSplitButton.displayName = 'DsSplitButton';

export type DsSplitButtonProps = ComponentProps<typeof DsSplitButton>;
