import { useState, useRef, useMemo } from 'react';
import classNames from 'classnames';
import styles from './ds-tag-filter.module.scss';
import type { DsTagFilterProps } from './ds-tag-filter.types';
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
	onClearAll,
	onItemDelete,
	onItemSelect,
	className,
	style,
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

	const { label = 'Filtered by:', clearButton = 'Clear all filters' } = locale;

	// Split items into row sections
	const { row1Tags, row2Tags, hiddenTags } = useMemo(() => {
		const row1Tags = items.slice(0, row1TagCount);
		const row2Tags = items.slice(row1TagCount, row1TagCount + row2TagCount);
		const hiddenTags = expanded ? [] : items.slice(row1TagCount + row2TagCount);

		return {
			row1Tags,
			row2Tags,
			hiddenTags,
		};
	}, [expanded, items, row1TagCount, row2TagCount]);

	if (items.length === 0) {
		return null;
	}

	const hiddenCount = hiddenTags.length;
	const hasRow2Content = row2Tags.length > 0 || hasOverflow;

	const renderTag = (item: (typeof items)[0]) => (
		<DsTag
			key={item.id}
			label={item.label}
			selected={item.selected}
			onClick={onItemSelect ? () => onItemSelect(item) : undefined}
			onDelete={onItemDelete ? () => onItemDelete(item) : undefined}
		/>
	);

	return (
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
								expanded ? 'Collapse' : `+${String(hiddenCount)} ${hiddenCount === 1 ? 'filter' : 'filters'}`
							}
							selected={expanded}
							className={styles.expandTag}
							onClick={() => setExpanded((prev) => !prev)}
						/>
					)}
				</div>
			)}

			{/* Hidden measurement container - used to measure all elements for layout calculation */}
			<div ref={measurementRef} className={styles.measurementContainer} aria-hidden="true">
				{label && (
					<span data-measure-label="">
						<DsTypography variant="body-sm-reg" className={styles.label}>
							{label}
						</DsTypography>
					</span>
				)}
				{items.map((item) => (
					<span key={item.id} data-measure-tag="">
						<DsTag
							label={item.label}
							selected={item.selected}
							onClick={onItemSelect ? () => onItemSelect(item) : undefined}
							onDelete={onItemDelete ? () => onItemDelete(item) : undefined}
						/>
					</span>
				))}
				{onClearAll && (
					<span data-measure-clear="">
						<DsButton
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
					</span>
				)}
				<span data-measure-expand="">
					<DsTag label="+99 filters" className={styles.expandTag} />
				</span>
			</div>
		</div>
	);
};

export default DsTagFilter;
