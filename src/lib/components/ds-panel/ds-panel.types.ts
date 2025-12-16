import type * as Collapsible from '@radix-ui/react-collapsible';

export type DsPanelVariant = 'docked' | 'floating';

export type DsPanelProps = Collapsible.CollapsibleProps & {
	variant?: DsPanelVariant;
	disablePadding?: boolean;
	slotProps?: {
		collapseButton?: DsPanelCollapseButtonProps;
	};
};

export type DsPanelCollapseButtonProps = {
	onClick?: () => void;
	collapsed?: boolean;
};
