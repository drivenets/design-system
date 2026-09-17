import { Popover } from '@ark-ui/react/popover';
import { useHoverTriggerProps } from '../../ds-popover.hover-intent';
import type { DsPopoverTriggerProps } from '../../ds-popover.types';

export const PopoverTrigger = ({ children, className }: DsPopoverTriggerProps) => {
	const hoverProps = useHoverTriggerProps();

	return (
		<Popover.Trigger asChild className={className} {...hoverProps}>
			{children}
		</Popover.Trigger>
	);
};

PopoverTrigger.displayName = 'DsPopover.Trigger';
