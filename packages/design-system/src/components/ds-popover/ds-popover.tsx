import { Popover } from '@ark-ui/react/popover';
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

export const toPlacement = (side: DsPopoverSide, align: DsPopoverAlign) =>
	align === 'center' ? side : (`${side}-${align}` as const);

const DsPopoverRoot = ({
	open,
	defaultOpen,
	side = 'bottom',
	align = 'center',
	gutter = 8,
	modal = false,
	children,
	onOpenChange,
}: DsPopoverRootProps) => (
	<Popover.Root
		open={open}
		defaultOpen={defaultOpen}
		modal={modal}
		positioning={{ placement: toPlacement(side, align), gutter }}
		onOpenChange={(details) => onOpenChange?.(details.open)}
	>
		{children}
	</Popover.Root>
);

const DsPopoverTrigger = ({ children, className }: DsPopoverTriggerProps) => (
	<Popover.Trigger asChild className={className}>
		{children}
	</Popover.Trigger>
);

const DsPopoverPanel = ({
	width = DEFAULT_PANEL_WIDTH,
	className,
	style,
	children,
	ref,
	'aria-label': ariaLabel,
}: DsPopoverPanelProps) => (
	<Portal>
		<Popover.Positioner>
			<Popover.Content
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

export const DsPopover = Object.assign(DsPopoverLegacy, {
	Root: DsPopoverRoot,
	Trigger: DsPopoverTrigger,
	Panel: DsPopoverPanel,
	Header: DsPopoverHeader,
	Content: DsPopoverContent,
	ContentItem: DsPopoverContentItem,
	Footer: DsPopoverFooter,
});
