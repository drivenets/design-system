import { useState } from 'react';
import classNames from 'classnames';
import { DsButton, DsIcon, DsModal, DsVerticalTabs, VerticalTabItem } from '@design-system/ui';
import { FilterModalProps } from './filter-modal.types';
import styles from './filter-modal.module.scss';

/**
 * Specialized filter modal with built-in filter navigation
 */
const FilterModal = ({
	open,
	onOpenChange,
	columns,
	style,
	className,
	onClearAll,
	onApply,
	filterNavItems = [],
	children,
	applyDisabled = false,
	clearAllDisabled = false,
}: FilterModalProps) => {
	const [selectedFilter, setSelectedFilter] = useState<VerticalTabItem>(filterNavItems[0]);

	return (
		<DsModal
			style={style}
			className={classNames(styles.filterModal, className)}
			open={open}
			onOpenChange={onOpenChange}
			columns={columns}
		>
			<DsModal.Header className={styles.filterHeader}>
				<div className={styles.headerLeft}>
					<DsIcon icon="filter_list" size="small" />
					<DsModal.Title>Filters</DsModal.Title>
				</div>
				<DsModal.CloseTrigger />
			</DsModal.Header>

			<DsModal.Body className={styles.filterBody}>
				<DsVerticalTabs
					items={filterNavItems}
					selectedItem={selectedFilter}
					onSelect={setSelectedFilter}
					className={styles.filterNav}
				/>
				<div className={styles.filterContent}>{children?.(selectedFilter)}</div>
			</DsModal.Body>

			<DsModal.Footer className={styles.filterFooter}>
				<DsButton
					design="v1.2"
					variant="filled"
					buttonType="secondary"
					onClick={onClearAll}
					disabled={clearAllDisabled}
				>
					<DsIcon icon="close" size="tiny" />
					Clear all
				</DsButton>
				<DsModal.Actions>
					<DsButton
						design="v1.2"
						variant="filled"
						buttonType="primary"
						onClick={onApply}
						disabled={applyDisabled}
					>
						Apply
					</DsButton>
				</DsModal.Actions>
			</DsModal.Footer>
		</DsModal>
	);
};

export default FilterModal;
