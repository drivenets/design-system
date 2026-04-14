import type * as Collapsible from '@radix-ui/react-collapsible';

import type { ResponsiveValue } from '../../utils/responsive';

export type DsPanelVariant = 'docked' | 'floating';

export type DsPanelBaseProps = Omit<Collapsible.CollapsibleProps, 'onOpenChange'> & {
	variant?: DsPanelVariant;
	width?: number;
	draggable?: boolean;
	disablePadding?: boolean;
	slotProps?: {
		collapseButton?: DsPanelCollapseButtonProps;
	};
	onOpenChange?: (open: boolean) => void;
};

export type DsPanelProps = Omit<DsPanelBaseProps, 'width'> & {
	width?: ResponsiveValue<number>;
};

export type DsPanelCollapseButtonProps = {
	onClick?: () => void;
	collapsed?: boolean;
};
