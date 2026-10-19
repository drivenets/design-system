import { isValidElement, useEffect, useRef, type PointerEvent, type Ref } from 'react';
import { ark } from '@ark-ui/react/factory';
import { Tooltip, useTooltip } from '@ark-ui/react/tooltip';
import { mergeProps } from '@ark-ui/react/utils';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import styles from './ds-tooltip.module.scss';
import type { DsAsChildTriggerProps } from '../../utils/as-child-trigger-props';
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

type TooltipWithContentProps = Omit<DsTooltipProps, keyof DsAsChildTriggerProps> & {
	ref: DsTooltipProps['ref'];
	triggerProps: Omit<DsAsChildTriggerProps, 'ref'>;
};

const TooltipWithContent = ({
	content,
	children,
	placement,
	disabled,
	interactive,
	openDelay,
	closeDelay,
	getAnchorRect,
	open,
	defaultOpen,
	slotProps,
	onOpenChange,
	ref,
	triggerProps,
}: TooltipWithContentProps) => {
	const triggerId = getTriggerId(children, triggerProps.id);
	const leftWhileDisabled = useRef(false);

	const tooltip = useTooltip({
		ids: triggerId ? { trigger: triggerId } : undefined,
		open,
		defaultOpen,
		disabled,
		interactive,
		openDelay,
		closeDelay,
		positioning: { placement, gutter: TOOLTIP_GUTTER_PX, getAnchorRect: getAnchorRect ?? undefined },
		onOpenChange: (details) => onOpenChange?.(details.open),
	});

	// Zag ignores pointer leave while disabled, so a tooltip disabled under the pointer keeps its
	// "opened by this pointer" flag and would skip the next hover. Replay the missed leave once enabled.
	const replayPointerLeave = tooltip.getTriggerProps().onPointerLeave;

	useEffect(() => {
		if (disabled || !leftWhileDisabled.current) {
			return;
		}

		leftWhileDisabled.current = false;
		replayPointerLeave?.({} as PointerEvent<HTMLButtonElement>);
	}, [disabled, replayPointerLeave]);

	const trackDisabledLeave = {
		onPointerEnter: () => {
			leftWhileDisabled.current = false;
		},
		onPointerLeave: () => {
			if (disabled) {
				leftWhileDisabled.current = true;
			}
		},
	};

	return (
		<Tooltip.RootProvider
			value={tooltip}
			// Zag skips its controlled guard when another tooltip is already visible
			// (instant open), so let a controlled `open` decide what renders.
			present={open}
			lazyMount
			unmountOnExit
		>
			<Tooltip.Trigger
				asChild
				ref={ref as TriggerRef}
				{...mergeProps<Record<string, unknown>>(trackDisabledLeave, triggerProps)}
			>
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
		</Tooltip.RootProvider>
	);
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

	return (
		<TooltipWithContent
			content={content}
			placement={placement}
			disabled={disabled}
			interactive={interactive}
			openDelay={openDelay}
			closeDelay={closeDelay}
			getAnchorRect={getAnchorRect}
			open={open}
			defaultOpen={defaultOpen}
			slotProps={slotProps}
			onOpenChange={onOpenChange}
			ref={ref}
			triggerProps={triggerProps}
		>
			{children}
		</TooltipWithContent>
	);
};

DsTooltip.displayName = 'DsTooltip';

export default DsTooltip;
