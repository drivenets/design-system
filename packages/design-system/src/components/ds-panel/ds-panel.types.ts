import type * as Collapsible from '@radix-ui/react-collapsible';

export type DsPanelVariant = 'docked' | 'floating';

export type DsPanelProps = Omit<Collapsible.CollapsibleProps, 'onOpenChange'> & {
	variant?: DsPanelVariant;
	draggable?: boolean;
	disablePadding?: boolean;
	slotProps?: {
		collapseButton?: DsPanelCollapseButtonProps;
	};
	onOpenChange?: (open: boolean) => void;
};

export type DsPanelCollapseButtonProps = {
	onClick?: () => void;
	collapsed?: boolean;
};
