import { useEffect, useRef, useState, type FocusEvent } from 'react';
import { Popover } from '@ark-ui/react/popover';
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
import { toPlacement } from './ds-popover.utils';
import styles from './ds-popover.module.scss';
import type {
	DsPopoverContentItemProps,
	DsPopoverContentProps,
	DsPopoverFooterProps,
	DsPopoverHeaderProps,
	DsPopoverPanelProps,
	DsPopoverProps,
	DsPopoverRootProps,
} from './ds-popover.types';

const DEFAULT_PANEL_WIDTH = 400;

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
			// Trigger focus is lost when open on hover
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

const DsPopoverPanel = ({
	width = DEFAULT_PANEL_WIDTH,
	className,
	style,
	children,
	ref,
	'aria-label': ariaLabel,
}: DsPopoverPanelProps) => {
	const hoverProps = useHoverIntentProps();
	const intent = useHoverIntent();

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
		<PopoverTrigger>{trigger}</PopoverTrigger>
		<DsPopoverPanel className={className}>{children}</DsPopoverPanel>
	</DsPopoverRoot>
);

DsPopoverLegacy.displayName = 'DsPopover';
DsPopoverRoot.displayName = 'DsPopover.Root';
DsPopoverPanel.displayName = 'DsPopover.Panel';
DsPopoverHeader.displayName = 'DsPopover.Header';
DsPopoverContent.displayName = 'DsPopover.Content';
DsPopoverContentItem.displayName = 'DsPopover.ContentItem';
DsPopoverFooter.displayName = 'DsPopover.Footer';

export const DsPopover = Object.assign(DsPopoverLegacy, {
	Root: DsPopoverRoot,
	Trigger: PopoverTrigger,
	Panel: DsPopoverPanel,
	Header: DsPopoverHeader,
	Content: DsPopoverContent,
	ContentItem: DsPopoverContentItem,
	Footer: DsPopoverFooter,
});
