import { createContext, useContext, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import styles from './ds-bulk-actions.module.scss';
import type {
	BulkActionsMenuPlacement,
	DsBulkActionsItemProps,
	DsBulkActionsProps,
} from './ds-bulk-actions.types';
import {
	getBulkActionItems,
	isMenuItemProps,
	itemToOverflowEntry,
	resolveItemWidth,
} from './ds-bulk-actions.utils';
import { ActionButton } from './components/action-button';
import { MenuEntries, TooltipMenuTrigger } from './components/menu-entries';
import { OverflowMeasure, OverflowMore } from './components/overflow';
import { useBulkActionsOverflow } from './hooks/use-bulk-actions-overflow';
import { DsButtonV3 } from '../ds-button-v3';
import { DsDropdownMenu } from '../ds-dropdown-menu';
import { DsStack } from '../ds-stack';
import { DsTooltip } from '../ds-tooltip';
import { DsTypography } from '../ds-typography';
import { mergeRefs } from '../../utils/merge-refs';

const EXIT_ANIMATION_MS = 300;

interface BulkActionsContextValue {
	menuPlacement: BulkActionsMenuPlacement;
}

const BulkActionsContext = createContext<BulkActionsContextValue>({ menuPlacement: 'bottom' });

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
