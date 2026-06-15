import { flexRender } from '@tanstack/react-table';
import { DsIcon } from '../../../ds-icon';
import { TableHead } from '../core-table';
import { useDsTableContext } from '../../context/ds-table-context';
import { getGroupColumnSizeStyle } from '../../grouping';
import { defaultDsTableLocale } from '../../ds-table.types';
import type { DsTableGroupHeaderCellProps } from './ds-table-group-header-cell.types';
import styles from './ds-table-group-header-cell.module.scss';

export const DsTableGroupHeaderCell = <TData, TValue>({
	header,
}: DsTableGroupHeaderCellProps<TData, TValue>) => {
	const { collapsedColumnGroups, onToggleColumnGroup, locale } = useDsTableContext<TData, TValue>();

	const groupId = header.column.id;
	const visibleLeafColumns = header.column.getLeafColumns().filter((leaf) => leaf.getIsVisible());
	const groupStyle = getGroupColumnSizeStyle(visibleLeafColumns);

	const isCollapsible = header.column.columnDef.meta?.group?.collapsible ?? false;
	const isCollapsed = collapsedColumnGroups?.includes(groupId) ?? false;

	const mergedLocale = { ...defaultDsTableLocale, ...locale };
	const toggleLabel = isCollapsed ? mergedLocale.expandColumnGroup : mergedLocale.collapseColumnGroup;

	const handleToggle = () => onToggleColumnGroup?.(groupId);

	return (
		<TableHead className={styles.groupHeaderCell} style={groupStyle} colSpan={header.colSpan}>
			<div className={styles.groupHeaderContent}>
				<span className={styles.groupLabel}>
					{flexRender(header.column.columnDef.header, header.getContext())}
				</span>
				{isCollapsible && (
					<button
						type="button"
						className={styles.collapseToggle}
						aria-label={toggleLabel}
						aria-expanded={!isCollapsed}
						title={toggleLabel}
						onClick={handleToggle}
					>
						<DsIcon icon={isCollapsed ? 'chevron_right' : 'chevron_left'} size="small" />
					</button>
				)}
			</div>
		</TableHead>
	);
};
