import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import styles from './ds-tag-filter.module.scss';
import type { DsTagFilterProps, TagFilterItem } from './ds-tag-filter.types';
import { useTagOverflowCalculation } from './hooks/use-tag-overflow-calculation';
import { DsTag, type DsTagProps } from '../ds-tag';
import { DsButtonV3 } from '../ds-button-v3';
import { DsIcon } from '../ds-icon';

/**
 * Design system TagFilter component
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
	const tagsAreaRef = useRef<HTMLDivElement>(null);
	const measurementRef = useRef<HTMLDivElement>(null);

	const { visibleTagCount, hasOverflow } = useTagOverflowCalculation({
		tagsAreaRef,
		measurementRef,
		totalItems: items.length,
		expanded,
	});

	const { clearButton = 'Clear all filters', showMore = 'Show more', showLess = 'Show less' } = locale;

	const visibleTags = expanded ? items : items.slice(0, visibleTagCount);
	const hiddenCount = items.length - visibleTagCount;

	if (items.length === 0) {
		return null;
	}

	// Merging per-item overrides with the filter-controlled props drops the
	// discriminated-union narrowing of `DsTagProps` (a known TS spread limitation),
	// so build the props once and assert the union type.
	const buildTagProps = (item: TagFilterItem): DsTagProps =>
		({
			...item.slotProps?.tag,
			label: item.label,
			selected: item.selected,
			onClick: onItemSelect ? () => onItemSelect(item) : undefined,
			onDelete: onItemDelete ? () => onItemDelete(item) : undefined,
		}) as DsTagProps;

	const renderTag = (item: TagFilterItem) => <DsTag key={item.id} {...buildTagProps(item)} />;

	const handleExpandToggle = () => {
		const newExpanded = !expanded;
		setExpanded(newExpanded);
		onExpand?.(newExpanded);
	};

	const measurementContainer = (
		<div ref={measurementRef} className={styles.measurementContainer} aria-hidden="true">
			{items.map((item) => (
				<DsTag key={item.id} data-measure-tag="" {...buildTagProps(item)} />
			))}
		</div>
	);

	const toggleLabel = expanded ? showLess : showMore;

	return (
		<>
			<div className={classNames(styles.container, className)} style={style}>
				<div ref={tagsAreaRef} className={styles.tagsArea} aria-live="polite">
					{visibleTags.map((item) => renderTag(item))}
				</div>

				<div className={styles.actions}>
					{hasOverflow && (
						<DsButtonV3
							variant="tertiary"
							size="small"
							className={styles.actionButton}
							aria-expanded={expanded}
							onClick={handleExpandToggle}
						>
							{`${toggleLabel} (${String(hiddenCount)})`}
							<DsIcon icon={expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} size="tiny" aria-hidden />
						</DsButtonV3>
					)}

					{onClearAll && (
						<DsButtonV3
							variant="tertiary"
							size="small"
							icon="close"
							className={styles.actionButton}
							onClick={onClearAll}
						>
							{clearButton}
						</DsButtonV3>
					)}
				</div>
			</div>
			{createPortal(measurementContainer, document.body)}
		</>
	);
};

DsTagFilter.displayName = 'DsTagFilter';

export default DsTagFilter;
