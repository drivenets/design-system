import {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
	type FocusEvent,
	type PointerEvent,
} from 'react';
import { Popover, usePopoverContext } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import styles from './ds-popover.module.scss';
import type {
	DsPopoverAlign,
	DsPopoverContentItemProps,
	DsPopoverContentProps,
	DsPopoverFooterProps,
	DsPopoverHeaderProps,
	DsPopoverPanelProps,
	DsPopoverProps,
	DsPopoverRootProps,
	DsPopoverSide,
	DsPopoverTriggerProps,
} from './ds-popover.types';

const DEFAULT_PANEL_WIDTH = 400;
const DEFAULT_OPEN_DELAY_MS = 200;
const DEFAULT_CLOSE_DELAY_MS = 150;

interface HoverIntent {
	openDelay: number;
	closeDelay: number;
	/** Lets the panel report whether focus is currently inside it. */
	setFocusInPanel: (inPanel: boolean) => void;
	/** True once if the trigger is about to be re-focused by Ark's close-time restore. */
	consumeFocusRestore: () => boolean;
	/** Owns one shared timer, so moving trigger -> panel cancels the pending close. */
	schedule: (action: () => void, delay: number) => void;
}

const HoverIntentContext = createContext<HoverIntent | null>(null);

/**
 * Pointer handlers for the parts a hovering user can be over — the trigger and the
 * panel. Ark's popover machine has no hover support, so the intent timers live here;
 * opening still goes through the machine, so a controlled `open` keeps winning.
 */
const useHoverIntentProps = () => {
	const intent = useContext(HoverIntentContext);
	const { setOpen } = usePopoverContext();

	if (!intent) {
		return undefined;
	}

	const onPointerIntent = (event: PointerEvent, open: boolean, delay: number) => {
		// Touch fires pointerenter/leave around a tap; let the click toggle own that.
		if (event.pointerType === 'touch') {
			return;
		}

		intent.schedule(() => setOpen(open), delay);
	};

	return {
		onPointerEnter: (event: PointerEvent) => onPointerIntent(event, true, intent.openDelay),
		onPointerLeave: (event: PointerEvent) => onPointerIntent(event, false, intent.closeDelay),
	};
};

/**
 * Trigger props for hover mode: pointer intent plus keyboard reveal. A tab to the
 * trigger opens the panel, so keyboard users get the same affordance as pointer
 * users. Gated on `:focus-visible` — a mouse click focuses the button without it,
 * so this never races the click toggle.
 */
const useHoverTriggerProps = () => {
	const pointerProps = useHoverIntentProps();
	const intent = useContext(HoverIntentContext);
	const { setOpen } = usePopoverContext();

	if (!intent) {
		return undefined;
	}

	return {
		...pointerProps,
		onFocus: (event: FocusEvent<HTMLElement>) => {
			// Closing with focus inside the panel makes Ark re-focus the trigger; that
			// is a restore, not the user tabbing in, and must not reopen the panel.
			if (intent.consumeFocusRestore()) {
				return;
			}

			if (event.target.matches(':focus-visible')) {
				setOpen(true);
			}
		},
	};
};

export const toPlacement = (side: DsPopoverSide, align: DsPopoverAlign) =>
	align === 'center' ? side : (`${side}-${align}` as const);

const DsPopoverRoot = ({
	open,
	defaultOpen,
	side = 'bottom',
	align = 'center',
	gutter = 8,
	modal = false,
	openOn = 'click',
	openDelay = DEFAULT_OPEN_DELAY_MS,
	closeDelay = DEFAULT_CLOSE_DELAY_MS,
	getAnchorElement,
	children,
	onOpenChange,
}: DsPopoverRootProps) => {
	const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

	useEffect(() => () => clearTimeout(timer.current), []);

	const schedule = (action: () => void, delay: number) => {
		clearTimeout(timer.current);
		timer.current = setTimeout(action, delay);
	};

	const isHover = openOn === 'hover';

	// Ark restores focus to the trigger on every close. Under hover that fires even
	// when the user never touched the keyboard, yanking focus out of whatever they
	// were doing. Only restore when focus is genuinely inside the panel.
	const [focusInPanel, setFocusInPanel] = useState(false);
	const restoringFocus = useRef(false);

	const consumeFocusRestore = () => {
		const restoring = restoringFocus.current;
		restoringFocus.current = false;
		return restoring;
	};

	return (
		<Popover.Root
			open={open}
			defaultOpen={defaultOpen}
			modal={modal}
			// Ark machine prop, not the DOM attribute the a11y rule is about. Merely
			// hovering must not pull focus off whatever the user is actually using; Ark
			// still proxies tabbing into the portalled panel, so keyboard reach is intact.
			// eslint-disable-next-line jsx-a11y/no-autofocus
			autoFocus={!isHover}
			restoreFocus={!isHover || focusInPanel}
			positioning={{ placement: toPlacement(side, align), gutter, getAnchorElement }}
			onOpenChange={(details) => {
				if (!details.open && focusInPanel) {
					restoringFocus.current = true;
				}

				onOpenChange?.(details.open);
			}}
		>
			<HoverIntentContext.Provider
				value={isHover ? { openDelay, closeDelay, schedule, setFocusInPanel, consumeFocusRestore } : null}
			>
				{children}
			</HoverIntentContext.Provider>
		</Popover.Root>
	);
};

const DsPopoverTrigger = ({ children, className }: DsPopoverTriggerProps) => {
	const hoverProps = useHoverTriggerProps();

	return (
		<Popover.Trigger asChild className={className} {...hoverProps}>
			{children}
		</Popover.Trigger>
	);
};

const DsPopoverPanel = ({
	width = DEFAULT_PANEL_WIDTH,
	className,
	style,
	children,
	ref,
	'aria-label': ariaLabel,
}: DsPopoverPanelProps) => {
	const hoverProps = useHoverIntentProps();
	const intent = useContext(HoverIntentContext);

	const onFocus = () => intent?.setFocusInPanel(true);
	const onBlur = (event: FocusEvent<HTMLDivElement>) => {
		if (!event.currentTarget.contains(event.relatedTarget)) {
			intent?.setFocusInPanel(false);
		}
	};

	return (
		<Portal>
			<Popover.Positioner>
				<Popover.Content
					{...hoverProps}
					onFocus={onFocus}
					onBlur={onBlur}
					ref={ref}
					aria-label={ariaLabel}
					className={classNames(styles.panel, className)}
					style={{ ...style, width }}
				>
					{children}
				</Popover.Content>
			</Popover.Positioner>
		</Portal>
	);
};

const DsPopoverHeader = ({ icon, className, style, children }: DsPopoverHeaderProps) => (
	<div className={classNames(styles.header, className)} style={style}>
		{icon && <span className={styles.headerIcon}>{icon}</span>}
		<Popover.Title className={styles.title} asChild>
			<DsTypography variant="heading3" color="main">
				{children}
			</DsTypography>
		</Popover.Title>
	</div>
);

const DsPopoverContent = ({ className, style, children }: DsPopoverContentProps) => (
	<div className={classNames(styles.content, className)} style={style}>
		{children}
	</div>
);

const DsPopoverContentItem = ({
	status,
	headline,
	className,
	style,
	children,
}: DsPopoverContentItemProps) => {
	const hasHeader = Boolean(status) || Boolean(headline);

	return (
		<DsStack direction="column" gap="var(--xs)" className={className} style={style}>
			{hasHeader && (
				<DsStack direction="row" alignItems="center" gap="var(--xs)">
					{status}
					{headline && (
						<DsTypography variant="body-sm-semi-bold" color="main">
							{headline}
						</DsTypography>
					)}
				</DsStack>
			)}
			{children && (
				<DsTypography variant="body-sm-reg" color="main" asChild>
					<DsStack direction="row" alignItems="center" gap="var(--xs)">
						{children}
					</DsStack>
				</DsTypography>
			)}
		</DsStack>
	);
};

const DsPopoverFooter = ({ className, style, children }: DsPopoverFooterProps) => (
	<div className={classNames(styles.footer, className)} style={style}>
		{children}
	</div>
);

/**
 * Legacy single-element form. Keeps the old call signature and `side` default
 * ('top') compiling and opening, but now renders the new fixed-width panel —
 * styling differs from the old Radix popover and the Radix `Popover.Close`
 * context is no longer wired.
 * @deprecated Migrate to the compound API (`DsPopover.Root` / `.Trigger` / `.Panel`).
 */
const DsPopoverLegacy = ({
	trigger,
	children,
	className,
	side = 'top',
	align = 'center',
}: DsPopoverProps) => (
	<DsPopoverRoot side={side} align={align}>
		<DsPopoverTrigger>{trigger}</DsPopoverTrigger>
		<DsPopoverPanel className={className}>{children}</DsPopoverPanel>
	</DsPopoverRoot>
);

DsPopoverLegacy.displayName = 'DsPopover';
DsPopoverRoot.displayName = 'DsPopover.Root';
DsPopoverTrigger.displayName = 'DsPopover.Trigger';
DsPopoverPanel.displayName = 'DsPopover.Panel';
DsPopoverHeader.displayName = 'DsPopover.Header';
DsPopoverContent.displayName = 'DsPopover.Content';
DsPopoverContentItem.displayName = 'DsPopover.ContentItem';
DsPopoverFooter.displayName = 'DsPopover.Footer';

export const DsPopover = Object.assign(DsPopoverLegacy, {
	Root: DsPopoverRoot,
	Trigger: DsPopoverTrigger,
	Panel: DsPopoverPanel,
	Header: DsPopoverHeader,
	Content: DsPopoverContent,
	ContentItem: DsPopoverContentItem,
	Footer: DsPopoverFooter,
});
