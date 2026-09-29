import type { Ref } from 'react';
import { Popover } from '@ark-ui/react/popover';
import { mergeProps } from '@ark-ui/react/utils';
import { useHoverTriggerProps } from '../../ds-popover.hover-intent';
import type { DsPopoverTriggerProps } from '../../ds-popover.types';

export const PopoverTrigger = ({
	children,
	className,
	style,
	ref,
	...injectedProps
}: DsPopoverTriggerProps) => {
	const hoverProps = useHoverTriggerProps();

	return (
		<Popover.Trigger
			asChild
			// Injected handlers run first, so a hover pin's `preventDefault` (which cancels Ark's
			// toggle) does not also stop the outer wrapper, e.g. DsTooltip closing on click.
			{...mergeProps<Record<string, unknown>>(hoverProps, injectedProps)}
			// Keep the popover's markers when an outer `asChild` trigger (e.g. DsTooltip) injects its
			// own: zag falls back to finding the trigger by them once that wrapper's `id` wins.
			data-scope={undefined}
			data-part={undefined}
			data-state={undefined}
			className={className}
			style={style}
			ref={ref as Ref<HTMLButtonElement>}
		>
			{children}
		</Popover.Trigger>
	);
};

PopoverTrigger.displayName = 'DsPopover.Trigger';
