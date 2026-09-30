import { useLayoutEffect, type Ref } from 'react';
import { Popover } from '@ark-ui/react/popover';
import { mergeProps } from '@ark-ui/react/utils';
import { useDsPopoverContext } from '../../ds-popover.context';
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
	const { registerTriggerId } = useDsPopoverContext();
	const injectedId = injectedProps.id;

	// Runs before the Root machine's own layout effect, so even a panel open on mount finds it.
	useLayoutEffect(() => {
		registerTriggerId(injectedId);

		return () => registerTriggerId(undefined);
	}, [injectedId, registerTriggerId]);

	return (
		<Popover.Trigger
			asChild
			// Injected handlers run first, so a hover pin's `preventDefault` (which cancels Ark's
			// toggle) does not also stop the outer wrapper, e.g. DsTooltip closing on click.
			{...mergeProps<Record<string, unknown>>(hoverProps, injectedProps)}
			// Keep the popover's markers when an outer `asChild` trigger (e.g. DsTooltip) injects its own.
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
