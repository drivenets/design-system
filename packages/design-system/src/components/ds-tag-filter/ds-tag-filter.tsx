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
 * Non-tag elements (label, expand/collapse, clear) sit in a header row.
 * Tags occupy the full width below, wrapping as needed.
 */
const DsTagFilter = ({
	items,
	size,
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

	const { visibleTagCount, hasOverflow } = useTagOverflowCalculation({
		containerRef,
		measurementRef,
		totalItems: items.length,
		expanded,
	});

	const {
		label = 'Filtered by:',
		clearButton = 'Clear all filters',
		showMore = 'Show more',
		showLess = 'Show less',
	} = locale;

	const visibleTags = expanded ? items : items.slice(0, visibleTagCount);
	const hiddenCount = items.length - visibleTagCount;

	if (items.length === 0) {
		return null;
	}

	const renderTag = (item: TagFilterItem) => {
		const tagProps = item.slotProps?.tag || {};

		return (
			<DsTag
				{...tagProps}
				key={item.id}
				label={item.label}
				size={size}
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

	const measurementContainer = (
		<div ref={measurementRef} className={styles.measurementContainer} aria-hidden="true">
			{items.map((item) => (
				<DsTag
					key={item.id}
					data-measure-tag=""
					label={item.label}
					size={size}
					selected={item.selected}
					onClick={onItemSelect ? () => onItemSelect(item) : undefined}
					onDelete={onItemDelete ? () => onItemDelete(item) : undefined}
				/>
			))}
		</div>
	);

	return (
		<>
			<div
				ref={containerRef}
				className={classNames(styles.container, expanded && styles.expanded, className)}
				style={style}
			>
				<div className={styles.header}>
					{label && (
						<DsTypography variant="body-sm-reg" className={styles.label}>
							{label}
						</DsTypography>
					)}

					<div className={styles.headerActions}>
						{hasOverflow && (
							<DsButton
								design="v1.2"
								buttonType="tertiary"
								variant="ghost"
								className={styles.actionButton}
								contentClassName={styles.ghostButtonContent}
								size="small"
								onClick={handleExpandToggle}
							>
								<DsIcon icon={expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />
								{expanded ? showLess : `${showMore} (${String(hiddenCount)})`}
							</DsButton>
						)}

						{onClearAll && (
							<DsButton
								design="v1.2"
								buttonType="tertiary"
								variant="ghost"
								className={styles.actionButton}
								contentClassName={styles.ghostButtonContent}
								size="small"
								onClick={onClearAll}
							>
								<DsIcon icon="close" />
								{clearButton}
							</DsButton>
						)}
					</div>
				</div>

				<div className={styles.tagsArea}>{visibleTags.map((item) => renderTag(item))}</div>
			</div>
			{createPortal(measurementContainer, document.body)}
		</>
	);
};

export default DsTagFilter;
