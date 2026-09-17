import {
	createContext,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
	type FocusEvent,
} from 'react';
import { Popover, type PopoverRootProps } from '@ark-ui/react/popover';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import { PopoverTrigger } from './components/popover-trigger';
import {
	DEFAULT_CLOSE_DELAY_MS,
	DEFAULT_OPEN_DELAY_MS,
	HoverIntentContext,
	useHoverIntent,
	useHoverIntentProps,
} from './ds-popover.hover-intent';
import { invokeCloseAutoFocus, toFocusEl, toPlacement } from './ds-popover.utils';
import styles from './ds-popover.module.scss';
import type {
	DsPopoverAnchorProps,
	DsPopoverContentItemProps,
	DsPopoverContentProps,
	DsPopoverFooterProps,
	DsPopoverHeaderProps,
	DsPopoverPanelProps,
	DsPopoverProps,
	DsPopoverRootProps,
} from './ds-popover.types';

const DEFAULT_PANEL_WIDTH = 400;
const MATCHED_PANEL_WIDTH = 'var(--reference-width)';

type PopoverOptionsContextValue = {
	matchAnchorWidth: boolean;
	registerAnchor: (el: HTMLElement | null) => void;
	registerContentId: (id: string | undefined) => void;
};

const PopoverOptionsContext = createContext<PopoverOptionsContextValue>({
	matchAnchorWidth: false,
	registerAnchor: () => undefined,
	registerContentId: () => undefined,
});

const DsPopoverRoot = ({
	open,
	defaultOpen,
	side = 'bottom',
	align = 'center',
	gutter = 8,
	modal = false,
	matchAnchorWidth = false,
	restoreFocus,
	openOn = 'click',
	openDelay = DEFAULT_OPEN_DELAY_MS,
	closeDelay = DEFAULT_CLOSE_DELAY_MS,
	getAnchorElement,
	children,
	onOpenAutoFocus,
	onCloseAutoFocus,
	onInteractOutside,
	onOpenChange,
}: DsPopoverRootProps) => {
	const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
	const anchorRef = useRef<HTMLElement | null>(null);
	const restoringFocus = useRef(false);
	const [contentId, setContentId] = useState<string>();
	const [focusInPanel, setFocusInPanel] = useState(false);

	useEffect(() => () => clearTimeout(timer.current), []);

	const schedule = (action: () => void, delay: number) => {
		clearTimeout(timer.current);
		timer.current = setTimeout(action, delay);
	};

	const isHover = openOn === 'hover';

	const consumeFocusRestore = () => {
		const restoring = restoringFocus.current;
		restoringFocus.current = false;

		return restoring;
	};

	const registerAnchor = (el: HTMLElement | null) => {
		anchorRef.current = el;
	};

	const ownsCloseFocus = restoreFocus === false && Boolean(onCloseAutoFocus);
	const initialFocusEl = toFocusEl(onOpenAutoFocus, 'openAutoFocus') as PopoverRootProps['initialFocusEl'];
	const finalFocusEl = ownsCloseFocus
		? undefined
		: (toFocusEl(onCloseAutoFocus, 'closeAutoFocus') as PopoverRootProps['finalFocusEl']);
	const arkRestoreFocus = ownsCloseFocus ? false : (restoreFocus ?? (!isHover || focusInPanel));

	return (
		<PopoverOptionsContext.Provider
			value={{ matchAnchorWidth, registerAnchor, registerContentId: setContentId }}
		>
			<Popover.Root
				open={open}
				defaultOpen={defaultOpen}
				modal={modal}
				ids={contentId ? { content: contentId } : undefined}
				// Trigger focus is lost when open on hover
				// eslint-disable-next-line jsx-a11y/no-autofocus
				autoFocus={!isHover}
				restoreFocus={arkRestoreFocus}
				positioning={{
					placement: toPlacement(side, align),
					gutter,
					sameWidth: matchAnchorWidth,
					...(getAnchorElement ? { getAnchorElement } : {}),
				}}
				initialFocusEl={initialFocusEl}
				finalFocusEl={finalFocusEl}
				persistentElements={[() => anchorRef.current]}
				onInteractOutside={
					onInteractOutside
						? (event) => {
								const dsEvent = new Event('interactOutside', { cancelable: true });
								onInteractOutside(dsEvent);

								if (dsEvent.defaultPrevented) {
									event.preventDefault();
								}
							}
						: undefined
				}
				onOpenChange={(details) => {
					if (!details.open && focusInPanel) {
						restoringFocus.current = true;
					}

					if (!details.open && ownsCloseFocus && onCloseAutoFocus) {
						invokeCloseAutoFocus(onCloseAutoFocus);
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
		</PopoverOptionsContext.Provider>
	);
};

const DsPopoverAnchor = ({ children, className }: DsPopoverAnchorProps) => {
	const { registerAnchor } = useContext(PopoverOptionsContext);

	return (
		<Popover.Anchor asChild className={className} ref={registerAnchor}>
			{children}
		</Popover.Anchor>
	);
};

const DsPopoverPanel = ({
	width,
	className,
	style,
	children,
	ref,
	id,
	'aria-label': ariaLabel,
}: DsPopoverPanelProps) => {
	const { matchAnchorWidth, registerContentId } = useContext(PopoverOptionsContext);
	const hoverProps = useHoverIntentProps();
	const intent = useHoverIntent();
	const resolvedWidth = width ?? (matchAnchorWidth ? MATCHED_PANEL_WIDTH : DEFAULT_PANEL_WIDTH);

	useLayoutEffect(() => {
		registerContentId(id);

		return () => registerContentId(undefined);
	}, [id, registerContentId]);

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
					style={{ ...style, width: resolvedWidth }}
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
		<PopoverTrigger>{trigger}</PopoverTrigger>
		<DsPopoverPanel className={className}>{children}</DsPopoverPanel>
	</DsPopoverRoot>
);

DsPopoverLegacy.displayName = 'DsPopover';
DsPopoverRoot.displayName = 'DsPopover.Root';
DsPopoverAnchor.displayName = 'DsPopover.Anchor';
DsPopoverPanel.displayName = 'DsPopover.Panel';
DsPopoverHeader.displayName = 'DsPopover.Header';
DsPopoverContent.displayName = 'DsPopover.Content';
DsPopoverContentItem.displayName = 'DsPopover.ContentItem';
DsPopoverFooter.displayName = 'DsPopover.Footer';

export const DsPopover = Object.assign(DsPopoverLegacy, {
	Root: DsPopoverRoot,
	Trigger: PopoverTrigger,
	Anchor: DsPopoverAnchor,
	Panel: DsPopoverPanel,
	Header: DsPopoverHeader,
	Content: DsPopoverContent,
	ContentItem: DsPopoverContentItem,
	Footer: DsPopoverFooter,
});
