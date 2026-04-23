import type { ComponentProps } from 'react';
import { withResponsiveProps } from '../../utils/responsive';
import DsButtonBase from './ds-button';

export {
	buttonVariants,
	buttonColors,
	buttonSizes,
	type ButtonVariant,
	type ButtonColor,
	type ButtonSize,
} from './ds-button.types';

export const DsButton = withResponsiveProps(DsButtonBase, ['size']);

DsButton.displayName = 'DsButton';

export type DsButtonProps = ComponentProps<typeof DsButton>;
