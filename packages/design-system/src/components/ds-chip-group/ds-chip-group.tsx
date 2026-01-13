import type React from 'react';
import { useRef, useState } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { Root as VisuallyHidden } from '@radix-ui/react-visually-hidden';
import classNames from 'classnames';
import styles from './ds-chip-group.module.scss';
import type { DsChipGroupProps } from './ds-chip-group.types';
import { useChipRowCalculation } from './hooks/use-chip-row-calculation';
import { DsTypography } from '../ds-typography';
import DsChip from '../ds-chip/ds-chip';
import { DsCheckbox } from '../ds-checkbox';
import { DsButton } from '../ds-button';
import { DsIcon } from '../ds-icon';

/**
 * @deprecated This component is deprecated. Use `DsTagFilter` instead.
 * @see {@link ../ds-tag-filter} for the replacement component.
 */
const DsChipGroup: React.FC<DsChipGroupProps> = ({
	items,
	label = 'Filtered by:',
	onClearAll,
	onItemDelete,
	onItemSelect,
	className,
	style,
}) => {
	const [dialogOpen, setDialogOpen] = useState(false);
	const showAllChipsRef = useRef<HTMLDivElement>(null);
	const chipsWrapperRef = useRef<HTMLDivElement>(null);
	const visibleCount = useChipRowCalculation({
		chipsWrapperRef,
		totalFilters: items.length,
	});

	if (items.length === 0) {
		return null;
	}

	const hiddenCount = items.length - visibleCount;
	const showExpandButton = hiddenCount > 0;

	const handleOpenDialog = () => {
		setDialogOpen(true);
	};

	let dialogStyle: React.CSSProperties = {};
	if (showExpandButton && showAllChipsRef.current) {
		const rect = showAllChipsRef.current.getBoundingClientRect();
		dialogStyle = {
			position: 'fixed',
			top: rect.bottom + 4,
			left: rect.left,
		};
	}

	return (
		<div className={classNames(styles.container, className)} style={style}>
			{label && (
				<DsTypography variant="body-sm-reg" className={styles.label}>
					{label}
				</DsTypography>
			)}

			<div ref={chipsWrapperRef} className={styles.chipsWrapper}>
				{items.map((item, index) => (
					<DsChip
						key={item.id}
						label={item.label}
						selected={item.selected}
						onClick={() => onItemSelect?.(item)}
						onDelete={() => onItemDelete?.(item)}
						className={classNames({
							[styles.hidden]: index >= visibleCount,
						})}
					/>
				))}
				{showExpandButton && (
					<DsChip
						ref={showAllChipsRef}
						label={`+${String(hiddenCount)} ${hiddenCount === 1 ? 'item' : 'items'} show all`}
						onClick={handleOpenDialog}
						className={styles.expandChip}
					/>
				)}
			</div>

			{onClearAll && (
				<DsButton design="v1.2" buttonType="tertiary" variant="ghost" size="small" onClick={onClearAll}>
					<DsIcon icon="close" />
					Clear all
				</DsButton>
			)}

			<RadixDialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
				<VisuallyHidden>
					<RadixDialog.Title />
				</VisuallyHidden>
				<RadixDialog.Portal>
					<RadixDialog.Content style={dialogStyle} className={styles.dialog}>
						<div className={styles.dialogContent}>
							{items
								.filter((item, index) => index >= visibleCount)
								.map((item) => (
									<div key={item.id} className={styles.itemCheckbox}>
										<DsCheckbox
											id={`chip-${item.id}`}
											checked={item.selected}
											onCheckedChange={() => onItemSelect?.(item)}
											label={item.label}
										/>
									</div>
								))}
						</div>
					</RadixDialog.Content>
				</RadixDialog.Portal>
			</RadixDialog.Root>
		</div>
	);
};

export default DsChipGroup;
