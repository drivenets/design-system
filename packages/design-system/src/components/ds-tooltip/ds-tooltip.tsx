import { isValidElement, type Ref } from 'react';
import { ark } from '@ark-ui/react/factory';
import { Tooltip } from '@ark-ui/react/tooltip';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './ds-tooltip.module.scss';
import type { DsTooltipProps } from './ds-tooltip.types';

const OPEN_DELAY_MS = 200;
const CLOSE_DELAY_MS = 0;
const TOOLTIP_GUTTER_PX = 0;

// Ark types the trigger ref as a button; the slotted element may be any HTMLElement.
type TriggerRef = Ref<HTMLButtonElement>;

/**
 * The id the trigger element ends up with. The child's own `id` wins Ark's `asChild`
 * merge, then an id injected by an outer trigger. Sharing it keeps both machines
 * pointed at the same element.
 */
const getTriggerId = (children: DsTooltipProps['children'], injectedId: string | undefined) => {
	const childId = isValidElement<{ id?: string }>(children) ? children.props.id : undefined;

	return childId ?? injectedId;
};

const DsTooltip = ({
	content,
	children,
	placement = 'top',
	disabled = false,
	interactive = false,
	openDelay = OPEN_DELAY_MS,
	closeDelay = CLOSE_DELAY_MS,
	getAnchorRect,
	open,
	defaultOpen,
	slotProps,
	onOpenChange,
	ref,
	...triggerProps
}: DsTooltipProps) => {
	if (content === undefined) {
		// Still a transparent slot, so props from an outer `asChild` trigger reach the element.
		return isValidElement(children) ? (
			<ark.span asChild ref={ref} {...triggerProps}>
				{children}
			</ark.span>
		) : (
			children
		);
	}

	const triggerId = getTriggerId(children, triggerProps.id);

	return (
		<Tooltip.Root
			ids={triggerId ? { trigger: triggerId } : undefined}
			open={open}
			// Zag skips its controlled guard when another tooltip is already visible
			// (instant open), so let a controlled `open` decide what renders.
			present={open}
			defaultOpen={defaultOpen}
			interactive={interactive}
			openDelay={openDelay}
			closeDelay={closeDelay}
			disabled={disabled}
			positioning={{ placement, gutter: TOOLTIP_GUTTER_PX, getAnchorRect: getAnchorRect ?? undefined }}
			lazyMount
			unmountOnExit
			onOpenChange={(details) => onOpenChange?.(details.open)}
		>
			<Tooltip.Trigger asChild ref={ref as TriggerRef} {...triggerProps}>
				{children}
			</Tooltip.Trigger>
			<Portal>
				<Tooltip.Positioner className={styles.positioner}>
					<Tooltip.Content
						className={classNames(styles.tooltip, slotProps?.content?.className)}
						style={slotProps?.content?.style}
					>
						{isValidElement(content) ? content : <span className={styles.text}>{content}</span>}
						<Tooltip.Arrow className={styles.arrow}>
							<Tooltip.ArrowTip />
						</Tooltip.Arrow>
					</Tooltip.Content>
				</Tooltip.Positioner>
			</Portal>
		</Tooltip.Root>
	);
};

DsTooltip.displayName = 'DsTooltip';

export default DsTooltip;
