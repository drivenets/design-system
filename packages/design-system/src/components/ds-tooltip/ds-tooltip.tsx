import {
	createContext,
	isValidElement,
	useContext,
	useEffect,
	useRef,
	useState,
	type AriaAttributes,
	type PointerEvent,
	type Ref,
} from 'react';
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

const isAriaDisabled = (children: DsTooltipProps['children']) => {
	if (!isValidElement<{ 'aria-disabled'?: AriaAttributes['aria-disabled'] }>(children)) {
		return false;
	}

	const ariaDisabled = children.props['aria-disabled'];

	return ariaDisabled === true || ariaDisabled === 'true';
};

interface OuterTooltip {
	triggerId?: string;
	setSuppressed: (suppressed: boolean) => void;
}

/**
 * Lets a tooltip on an `aria-disabled` element (e.g. `DsButtonV3`'s `disabledReason`) keep closed
 * the tooltips wrapping that same element, such as an icon button's label. Otherwise zag shows
 * whichever opens first, and the outermost handlers always run first.
 */
const OuterTooltipContext = createContext<OuterTooltip | null>(null);

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
	const [suppressedByInner, setSuppressedByInner] = useState(false);
	const isDisabled = disabled || suppressedByInner;

	const tooltip = useTooltip({
		ids: triggerId ? { trigger: triggerId } : undefined,
		open,
		defaultOpen,
		disabled: isDisabled,
		interactive,
		openDelay,
		closeDelay,
		positioning: { placement, gutter: TOOLTIP_GUTTER_PX, getAnchorRect: getAnchorRect ?? undefined },
		onOpenChange: (details) => onOpenChange?.(details.open),
	});

	// Zag ignores pointer leave while disabled, so a tooltip disabled under the pointer keeps its
	// "opened by this pointer" flag and would skip the next hover. Replay the missed leave once enabled.
	const { id: resolvedTriggerId, onPointerLeave: replayPointerLeave } = tooltip.getTriggerProps();

	useEffect(() => {
		if (isDisabled || !leftWhileDisabled.current) {
			return;
		}

		leftWhileDisabled.current = false;
		replayPointerLeave?.({} as PointerEvent<HTMLButtonElement>);
	}, [isDisabled, replayPointerLeave]);

	const outerTooltip = useContext(OuterTooltipContext);
	const suppressOuter =
		resolvedTriggerId !== undefined && outerTooltip?.triggerId === resolvedTriggerId
			? outerTooltip.setSuppressed
			: undefined;
	// Being suppressed passes the takeover on, so it reaches every tooltip wrapping the element.
	const keepsOuterClosed = (!disabled && isAriaDisabled(children)) || suppressedByInner;

	useEffect(() => {
		if (!suppressOuter || !keepsOuterClosed) {
			return;
		}

		suppressOuter(true);

		return () => suppressOuter(false);
	}, [suppressOuter, keepsOuterClosed]);

	const trackDisabledLeave = {
		onPointerEnter: () => {
			leftWhileDisabled.current = false;
		},
		onPointerLeave: () => {
			if (isDisabled) {
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
			<OuterTooltipContext.Provider
				value={{ triggerId: resolvedTriggerId, setSuppressed: setSuppressedByInner }}
			>
				<Tooltip.Trigger
					asChild
					ref={ref as TriggerRef}
					{...mergeProps<Record<string, unknown>>(trackDisabledLeave, triggerProps)}
				>
					{children}
				</Tooltip.Trigger>
			</OuterTooltipContext.Provider>
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

/**
 * Short hint shown while the pointer rests on, or keyboard focus is on, the element it wraps.
 *
 * A natively disabled element never receives those events, so a tooltip on it never opens. To explain
 * why a `DsButtonV3` is disabled, set its `disabledReason` instead: the button stays focusable and the
 * reason takes over any tooltip wrapping it.
 *
 * @summary hint on hover and keyboard focus; explain a disabled DsButtonV3 with its `disabledReason`
 */
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
