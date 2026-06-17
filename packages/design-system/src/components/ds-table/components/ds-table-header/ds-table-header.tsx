import { flexRender } from '@tanstack/react-table';
import classnames from 'classnames';
import { DsIcon } from '../../../ds-icon';
import { TableHead, TableHeader, TableRow } from '../core-table';
import styles from './ds-table-header.module.scss';
import stylesShared from '../../styles/shared/ds-table-shared.module.scss';
import type { DsTableHeaderProps } from './ds-table-header.types';
import { useDsTableContext } from '../../context/ds-table-context';
import { getColumnSizeStyle } from '../../utils/column-size';
import { SELECT_COLUMN_ID } from '../../utils/constants';
import { DsStack } from '../../../ds-stack';
import { DsTableColumnFilterPopover } from '../../filters/components/column-filter-popover';
import type { ResolvedColumnFilter } from '../../filters/types/filter-adapter.types';
import { DsTableGroupHeaderCell } from '../ds-table-group-header-cell';
import { isFirstLeafColumnOfGroup } from '../../grouping';

const DsTableHeader = <TData,>({ table }: DsTableHeaderProps<TData>) => {
	const { stickyHeader, bordered, virtualized } = useDsTableContext<TData, unknown>();

	return (
		<TableHeader
			className={classnames(stickyHeader && styles.stickyHeader, virtualized && styles.virtualizedHeader)}
		>
			{table.getHeaderGroups().map((headerGroup) => (
				<TableRow
					key={headerGroup.id}
					className={classnames(
						styles.headerRow,
						!bordered && styles.headerRowNoBorder,
						virtualized && styles.headerRowVirtualized,
					)}
				>
					{headerGroup.headers.map((header) => {
						if (header.isPlaceholder) {
							return (
								<TableHead
									key={header.id}
									className={styles.headerCell}
									style={getColumnSizeStyle(header.getSize())}
								/>
							);
						}

						if (header.subHeaders.length > 0) {
							return <DsTableGroupHeaderCell key={header.id} header={header} />;
						}

						const headerStyle = getColumnSizeStyle(header.column.getSize());
						const canSort = header.column.getCanSort();
						const isSelectColumn = header.column.id === SELECT_COLUMN_ID;
						const isGroupStart = isFirstLeafColumnOfGroup(header.column);

						const metaFilter = header.column.columnDef.meta?.filter;
						const resolvedFilter: ResolvedColumnFilter | undefined =
							metaFilter && 'render' in metaFilter ? metaFilter : undefined;
						const hasActiveColumnFilter = resolvedFilter?.hasActiveFilter ?? false;

						return (
							<TableHead
								key={header.id}
								className={classnames(
									styles.headerCell,
									canSort && styles.sortableHeader,
									isSelectColumn && styles.selectHeaderCell,
									resolvedFilter && styles.filterableHeader,
									hasActiveColumnFilter && styles.filterActive,
									isGroupStart && styles.groupStart,
								)}
								onClick={header.column.getToggleSortingHandler()}
								style={headerStyle}
							>
								<div className={styles.headerSortContainer}>
									<DsStack direction="column" justifyContent="center" width="100%">
										{flexRender(header.column.columnDef.header, header.getContext())}
									</DsStack>
									{canSort && (
										<div className={styles.pageButtonIconContainer}>
											{{
												asc: (
													<DsIcon
														icon="arrow_drop_up"
														className={classnames(styles.pageButtonIcon, stylesShared.pageButtonIcon)}
													/>
												),
												desc: (
													<DsIcon
														icon="arrow_drop_down"
														className={classnames(styles.pageButtonIcon, stylesShared.pageButtonIcon)}
													/>
												),
											}[header.column.getIsSorted() as string] ?? (
												<div className={classnames(styles.pageButtonIcon, stylesShared.pageButtonIcon)} />
											)}
										</div>
									)}
									{resolvedFilter && (
										<div className={styles.filterTriggerContainer}>
											<DsTableColumnFilterPopover
												hasActiveFilter={resolvedFilter.hasActiveFilter}
												onApply={resolvedFilter.onApply}
												onClear={resolvedFilter.onClear}
												onCancel={resolvedFilter.onCancel}
											>
												{resolvedFilter.render()}
											</DsTableColumnFilterPopover>
										</div>
									)}
								</div>
							</TableHead>
						);
					})}
				</TableRow>
			))}
		</TableHeader>
	);
};

export default DsTableHeader;
