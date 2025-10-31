import React, { useRef, useState } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import classNames from 'classnames';
import { DsButton, DsCheckbox, DsChip, DsIcon, DsTypography } from '@design-system/ui';
import styles from './chip-filter-panel.module.scss';
import { ChipFilterPanelProps } from './chip-filter-panel.types';

/**
 * Chip filter widget
 */
const ChipFilterPanel: React.FC<ChipFilterPanelProps> = ({
	filters,
	onClearAll,
	maxVisibleFilters = 5,
	className,
	style,
}) => {
	const [dialogOpen, setDialogOpen] = useState(false);
	const showAllFiltersRef = useRef<HTMLDivElement>(null);

	const visibleFilters = filters.slice(0, maxVisibleFilters);
	const hiddenCount = filters.length - maxVisibleFilters;
	const showExpandButton = hiddenCount > 0;

	const handleOpenDialog = () => {
		setDialogOpen(true);
	};

	if (filters.length === 0) {
		return null;
	}

	let dialogStyle: React.CSSProperties = {};
	if (showExpandButton && showAllFiltersRef.current) {
		const rect = showAllFiltersRef.current.getBoundingClientRect();
		dialogStyle = {
			position: 'fixed',
			top: rect.bottom + 4,
			left: rect.left,
		};
	}

	return (
		<div className={classNames(styles.container, className)} style={style}>
			<div className={styles.chipsWrapper}>
				<DsTypography variant="body-sm-reg" className={styles.label}>
					Filtered by:
				</DsTypography>

				{visibleFilters.map((filter) => (
					<DsChip key={filter.id} label={filter.label} onDelete={filter.onDelete} />
				))}

				{showExpandButton && (
					<DsChip
						ref={showAllFiltersRef}
						label={`+${hiddenCount} filters show all`}
						onClick={handleOpenDialog}
						className={styles.expandChip}
					/>
				)}

				<DsButton design="v1.2" buttonType="tertiary" variant="ghost" size="small" onClick={onClearAll}>
					<DsIcon icon="close" />
					Clear all filters
				</DsButton>
			</div>

			<RadixDialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
				<RadixDialog.Portal>
					<RadixDialog.Content style={dialogStyle} className={styles.dialog}>
						<div className={styles.dialogContent}>
							{filters.map((filter) => (
								<div key={filter.id} className={styles.filterCheckbox}>
									<DsCheckbox
										id={`filter-${filter.id}`}
										checked={true}
										onChange={() => filter.onDelete?.()}
										label={filter.label}
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

export default ChipFilterPanel;
