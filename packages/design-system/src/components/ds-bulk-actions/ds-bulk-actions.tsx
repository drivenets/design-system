import {
	Children,
	createContext,
	Fragment,
	isValidElement,
	useContext,
	useEffect,
	useRef,
	useState,
	type ButtonHTMLAttributes,
	type CSSProperties,
	type ReactElement,
	type ReactNode,
	type Ref,
	type RefObject,
} from 'react';
import classnames from 'classnames';
import styles from './ds-bulk-actions.module.scss';
import type {
	BulkActionsMenuPlacement,
	DsBulkActionsItemProps,
	DsBulkActionsMenuEntry,
	DsBulkActionsProps,
} from './ds-bulk-actions.types';
import {
	isMenuItemProps,
	isSubmenuEntry,
	itemToOverflowEntry,
	resolveItemWidth,
	type ItemWidthLayout,
} from './ds-bulk-actions.utils';
import { useBulkActionsOverflow } from './hooks/use-bulk-actions-overflow';
import { DsButtonV3 } from '../ds-button-v3';
import { DsDropdownMenu } from '../ds-dropdown-menu';
import { DsIcon, type IconType } from '../ds-icon';
import { DsStack } from '../ds-stack';
import { DsTooltip } from '../ds-tooltip';
import { DsTypography } from '../ds-typography';
import { mergeRefs } from '../../utils/merge-refs';

const EXIT_ANIMATION_MS = 300;
const SUBMENU_PLACEMENT = 'right-start' as const;

interface BulkActionsContextValue {
	menuPlacement: BulkActionsMenuPlacement;
}

const BulkActionsContext = createContext<BulkActionsContextValue>({ menuPlacement: 'bottom' });

interface ActionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
	icon: IconType;
	label: string;
	itemWidth?: ItemWidthLayout['mode'];
	ref?: Ref<HTMLButtonElement>;
}

const ActionButton = ({
	icon,
	label,
	onClick,
	disabled,
	className,
	style,
	itemWidth = 'fixed',
	ref,
	...rest
}: ActionButtonProps) => (
	<button
		className={classnames(styles.actionButton, className)}
		style={style}
		onClick={onClick}
		disabled={disabled}
		aria-label={label}
		data-item-width={itemWidth}
		{...rest}
		type="button"
		ref={ref}
	>
		<DsIcon icon={icon} size="small" />
		<DsTypography variant="body-xs-md" className={styles.actionLabel}>
			{label}
		</DsTypography>
	</button>
);

const MenuEntryLabel = ({ icon, label }: { icon?: IconType; label: string }) => (
	<>
		{icon ? <DsIcon icon={icon} /> : null}
		<span>{label}</span>
	</>
);

const MenuEntries = ({ entries }: { entries: DsBulkActionsMenuEntry[] }) => (
	<>
		{entries.map((entry) => {
			if (isSubmenuEntry(entry) && entry.menu.length > 0 && !entry.disabled) {
				return (
					<DsDropdownMenu.Root key={entry.value} positioning={{ placement: SUBMENU_PLACEMENT }}>
						<DsDropdownMenu.TriggerItem>
							<MenuEntryLabel icon={entry.icon} label={entry.label} />
						</DsDropdownMenu.TriggerItem>
						<DsDropdownMenu.Content>
							<MenuEntries entries={entry.menu} />
						</DsDropdownMenu.Content>
					</DsDropdownMenu.Root>
				);
			}

			return (
				<DsDropdownMenu.Item
					key={entry.value}
					value={entry.value}
					disabled={entry.disabled}
					variant={entry.variant}
					onSelect={'onSelect' in entry ? entry.onSelect : undefined}
				>
					<MenuEntryLabel icon={entry.icon} label={entry.label} />
				</DsDropdownMenu.Item>
			);
		})}
	</>
);

const TooltipMenuTrigger = ({
	icon,
	label,
	disabled,
	itemWidth,
	buttonStyle,
}: {
	icon: IconType;
	label: string;
	disabled?: boolean;
	itemWidth: ItemWidthLayout['mode'];
	buttonStyle?: CSSProperties;
}) => (
	<DsTooltip content={label}>
		<span className={styles.menuTriggerAnchor}>
			<DsDropdownMenu.Trigger asChild>
				<ActionButton
					icon={icon}
					label={label}
					disabled={disabled}
					itemWidth={itemWidth}
					style={buttonStyle}
				/>
			</DsDropdownMenu.Trigger>
		</span>
	</DsTooltip>
);

const Item = (props: DsBulkActionsItemProps) => {
	const { className, style, ref, width, icon, label, disabled } = props;
	const { menuPlacement } = useContext(BulkActionsContext);
	const { mode, buttonStyle } = resolveItemWidth(width);

	return (
		<div ref={ref} className={classnames(styles.actionItem, className)} style={style} data-item-width={mode}>
			{isMenuItemProps(props) ? (
				<DsDropdownMenu.Root positioning={{ placement: menuPlacement }}>
					<TooltipMenuTrigger
						icon={icon}
						label={label}
						disabled={disabled}
						itemWidth={mode}
						buttonStyle={buttonStyle}
					/>
					<DsDropdownMenu.Content>
						<MenuEntries entries={props.menu} />
					</DsDropdownMenu.Content>
				</DsDropdownMenu.Root>
			) : (
				<DsTooltip content={label}>
					<ActionButton
						icon={icon}
						label={label}
						onClick={props.onClick}
						disabled={disabled}
						itemWidth={mode}
						style={buttonStyle}
					/>
				</DsTooltip>
			)}
		</div>
	);
};

const isItemElement = (child: ReactNode): child is ReactElement<DsBulkActionsItemProps> => {
	if (!isValidElement(child)) {
		return false;
	}

	if (child.type === Item) {
		return true;
	}

	return (
		typeof child.type === 'function' &&
		'displayName' in child.type &&
		child.type.displayName === Item.displayName
	);
};

const getBulkActionItems = (children: ReactNode): ReactElement<DsBulkActionsItemProps>[] => {
	const items: ReactElement<DsBulkActionsItemProps>[] = [];

	Children.forEach(children, (child) => {
		if (isItemElement(child)) {
			items.push(child);
			return;
		}

		if (isValidElement(child) && child.type === Fragment) {
			items.push(...getBulkActionItems((child.props as { children?: ReactNode }).children));
		}
	});

	return items;
};

const OverflowMore = ({
	label,
	menuPlacement,
	entries,
}: {
	label: string;
	menuPlacement: BulkActionsMenuPlacement;
	entries: DsBulkActionsMenuEntry[];
}) => (
	<div className={styles.actionItem}>
		<DsDropdownMenu.Root positioning={{ placement: menuPlacement }}>
			<TooltipMenuTrigger icon="more_horiz" label={label} itemWidth="fixed" />
			<DsDropdownMenu.Content>
				<MenuEntries entries={entries} />
			</DsDropdownMenu.Content>
		</DsDropdownMenu.Root>
	</div>
);

const OverflowMeasure = ({
	items,
	moreActionsLabel,
	itemsSelectedLabel,
	measureRef,
}: {
	items: ReactElement<DsBulkActionsItemProps>[];
	moreActionsLabel: string;
	itemsSelectedLabel: string;
	measureRef: RefObject<HTMLDivElement | null>;
}) => (
	<div ref={measureRef} className={styles.measurementContainer} aria-hidden="true">
		{items.map((item, index) => {
			const { mode, buttonStyle } = resolveItemWidth(item.props.width);

			return (
				<div
					key={item.key ?? `measure-${String(index)}`}
					data-overflow-measure="item"
					data-item-width={mode}
					className={styles.actionItem}
					style={item.props.style}
				>
					<ActionButton
						icon={item.props.icon}
						label={item.props.label}
						tabIndex={-1}
						itemWidth={mode}
						style={buttonStyle}
					/>
				</div>
			);
		})}
		<div data-overflow-measure="more" className={styles.actionItem}>
			<ActionButton icon="more_horiz" label={moreActionsLabel} tabIndex={-1} />
		</div>
		<div data-overflow-measure="label">
			<DsTypography variant="body-md-semi-bold" className={styles.bulkActionsInfo}>
				{itemsSelectedLabel}
			</DsTypography>
		</div>
	</div>
);

/**
 * Floating or static toolbar for bulk operations on a selection.
 **/
const DsBulkActions = ({
	selectedCount,
	children,
	onClearSelection,
	placement = 'static',
	menuPlacement: menuPlacementProp,
	locale,
	className,
	style,
	ref,
}: DsBulkActionsProps) => {
	const [isRendered, setIsRendered] = useState(false);
	const [animationClass, setAnimationClass] = useState('');
	const isFloating = placement === 'floating';
	const menuPlacement = menuPlacementProp ?? (isFloating ? 'top' : 'bottom');

	const itemsSelectedLabel = locale?.itemsSelectedLabel ?? 'Items selected';
	const clearSelectionLabel = locale?.clearSelectionLabel ?? 'Clear selection';
	const moreActionsLabel = locale?.moreActionsLabel ?? 'More';

	const containerRef = useRef<HTMLDivElement>(null);
	const stackRef = useRef<HTMLDivElement>(null);
	const badgeRef = useRef<HTMLDivElement>(null);
	const dismissRef = useRef<HTMLButtonElement>(null);
	const measureRef = useRef<HTMLDivElement>(null);
	const items = getBulkActionItems(children);

	const { visibleCount, showMore, summaryLabelHidden } = useBulkActionsOverflow({
		active: isRendered,
		itemCount: items.length,
		style,
		containerRef,
		stackRef,
		badgeRef,
		dismissRef,
		measureRef,
	});

	useEffect(() => {
		if (selectedCount > 0) {
			if (!isRendered) {
				setIsRendered(true);
				setAnimationClass(isFloating ? styles.entering : '');
			}

			return;
		}

		if (isRendered) {
			if (isFloating) {
				setAnimationClass(styles.exiting);
				const timer = setTimeout(() => {
					setIsRendered(false);
					setAnimationClass('');
				}, EXIT_ANIMATION_MS);
				return () => clearTimeout(timer);
			}

			setIsRendered(false);
			setAnimationClass('');
		}
	}, [selectedCount, isRendered, isFloating]);

	if (!isRendered) {
		return null;
	}

	const clampedVisibleCount = Math.min(visibleCount, items.length);
	const visibleItems = items.slice(0, clampedVisibleCount);
	const overflowEntries = items
		.slice(clampedVisibleCount)
		.map((item, index) => itemToOverflowEntry(item.props, index));

	return (
		<BulkActionsContext.Provider value={{ menuPlacement }}>
			<div
				ref={mergeRefs(ref, containerRef)}
				role="toolbar"
				aria-label={itemsSelectedLabel}
				className={classnames(
					styles.bulkActionsContainer,
					isFloating && styles.floating,
					isFloating && animationClass,
					className,
				)}
				style={style}
			>
				<DsStack ref={stackRef} direction="row" alignItems="center" gap="var(--3xs)">
					<div ref={badgeRef} className={styles.selectedCountContainer} aria-live="polite" aria-atomic="true">
						<DsTypography variant="heading1" className={styles.selectedCountBadge}>
							{selectedCount}
						</DsTypography>
					</div>

					{summaryLabelHidden ? null : (
						<DsTypography variant="body-md-semi-bold" className={styles.bulkActionsInfo}>
							{itemsSelectedLabel}
						</DsTypography>
					)}

					<DsStack
						direction="row"
						alignItems="center"
						justifyContent="flex-end"
						flex="1 1 auto"
						flexWrap="nowrap"
						className={styles.bulkActionsActions}
					>
						{visibleItems}
						{showMore && overflowEntries.length > 0 ? (
							<OverflowMore
								label={moreActionsLabel}
								menuPlacement={menuPlacement}
								entries={overflowEntries}
							/>
						) : null}
					</DsStack>

					<DsButtonV3
						ref={dismissRef}
						variant="tertiary"
						size="medium"
						icon="close"
						aria-label={clearSelectionLabel}
						className={styles.dismissButton}
						onClick={onClearSelection}
					/>
				</DsStack>

				{items.length > 0 ? (
					<OverflowMeasure
						items={items}
						moreActionsLabel={moreActionsLabel}
						itemsSelectedLabel={itemsSelectedLabel}
						measureRef={measureRef}
					/>
				) : null}
			</div>
		</BulkActionsContext.Provider>
	);
};

DsBulkActions.displayName = 'DsBulkActions';
Item.displayName = 'DsBulkActions.Item';
DsBulkActions.Item = Item;

export default DsBulkActions;
