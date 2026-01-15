import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import styles from './ds-tag-filter.module.scss';
import type { DsTagFilterProps, TagFilterItem } from './ds-tag-filter.types';
import { useTagOverflowCalculation } from './hooks/use-tag-overflow-calculation';
import { DsTypography } from '../ds-typography';
import { DsTag } from '../ds-tag';
import { DsButton } from '../ds-button';
import { DsIcon } from '../ds-icon';

/**
 * Design system TagFilter component
 *
 * A component for displaying active filters as tags with overflow handling.
 * Shows visible tags in up to 2 rows, with the Expand button to show hidden items.
 */
const DsTagFilter = ({
	items,
	locale = {},
	className,
	style,
	onClearAll,
	onItemDelete,
	onItemSelect,
	onExpand,
}: DsTagFilterProps) => {
	const [expanded, setExpanded] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const measurementRef = useRef<HTMLDivElement>(null);

	const { row1TagCount, row2TagCount, hasOverflow } = useTagOverflowCalculation({
		containerRef,
		measurementRef,
		totalItems: items.length,
		expanded,
	});

	const {
		label = 'Filtered by:',
		clearButton = 'Clear all filters',
		hiddenCountPlural = 'filters',
		hiddenCountSingular = 'filter',
		collapseTagLabel = 'Collapse',
	} = locale;

	// Split items into row sections
	const row1Tags = items.slice(0, row1TagCount);
	const row2Tags = items.slice(row1TagCount, row1TagCount + row2TagCount);
	const hiddenTags = expanded ? [] : items.slice(row1TagCount + row2TagCount);

	if (items.length === 0) {
		return null;
	}

	const hiddenCount = hiddenTags.length;
	const hasRow2Content = row2Tags.length > 0 || hasOverflow;

	const renderTag = (item: TagFilterItem) => {
		const tagProps = item.tagProps || {};

		return (
			<DsTag
				{...tagProps}
				key={item.id}
				label={item.label}
				selected={item.selected}
				onClick={onItemSelect ? () => onItemSelect(item) : undefined}
				onDelete={onItemDelete ? () => onItemDelete(item) : undefined}
			/>
		);
	};

	const handleExpandToggle = () => {
		const newExpanded = !expanded;
		setExpanded(newExpanded);
		onExpand?.(newExpanded);
	};

	// Measurement container rendered via portal to keep it outside the component's DOM tree
	// This prevents Testing Library from finding duplicate elements
	// We use it to calculate the number of remaining tags to render
	const measurementContainer = (
		<div ref={measurementRef} className={styles.measurementContainer} aria-hidden="true">
			{label && (
				<span data-measure-label="">
					<DsTypography variant="body-sm-reg" className={styles.label}>
						{label}
					</DsTypography>
				</span>
			)}
			{items.map((item) => (
				<DsTag
					key={item.id}
					data-measure-tag=""
					label={item.label}
					selected={item.selected}
					onClick={onItemSelect ? () => onItemSelect(item) : undefined}
					onDelete={onItemDelete ? () => onItemDelete(item) : undefined}
				/>
			))}
			{onClearAll && (
				<DsButton
					data-measure-clear=""
					design="v1.2"
					buttonType="tertiary"
					variant="ghost"
					className={styles.clearButton}
					contentClassName={styles.clearContent}
					size="small"
				>
					<DsIcon icon="close" />
					{clearButton}
				</DsButton>
			)}
			<DsTag data-measure-expand="" label="+99 filters" className={styles.expandTag} />
		</div>
	);

	/**
	 * IMPORTANT!
	 * If you make any changes to this layout (styling, JSX, anything that affects it.)
	 * Please, apply the exact same changes to the "measurementContainer"
	 */
	return (
		<>
			<div
				ref={containerRef}
				className={classNames(styles.container, expanded && styles.expanded, className)}
				style={style}
			>
				<div className={styles.row1}>
					{label && (
						<DsTypography variant="body-sm-reg" className={styles.label}>
							{label}
						</DsTypography>
					)}
					{row1Tags.map((item) => renderTag(item))}
					{onClearAll && (
						<DsButton
							design="v1.2"
							buttonType="tertiary"
							variant="ghost"
							className={styles.clearButton}
							contentClassName={styles.clearContent}
							size="small"
							onClick={onClearAll}
						>
							<DsIcon icon="close" />
							{clearButton}
						</DsButton>
					)}
				</div>

				{hasRow2Content && (
					<div className={styles.row2}>
						{row2Tags.map((item) => renderTag(item))}
						{hasOverflow && (
							<DsTag
								label={
									expanded
										? collapseTagLabel
										: `+${String(hiddenCount)} ${hiddenCount === 1 ? hiddenCountSingular : hiddenCountPlural}`
								}
								selected={expanded}
								className={styles.expandTag}
								onClick={handleExpandToggle}
							/>
						)}
					</div>
				)}
			</div>
			{createPortal(measurementContainer, document.body)}
		</>
	);
};

export default DsTagFilter;
