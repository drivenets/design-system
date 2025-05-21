import { flexRender, type Table } from '@tanstack/react-table';
import classnames from 'classnames';
import { DsCheckbox } from '../ds-checkbox';
import DsIcon from '../ds-icon/ds-icon';
import { TableHead, TableHeader, TableRow } from './core-table';
import styles from './ds-table.module.scss';

interface DsTableHeaderProps<TData> {
  table: Table<TData>;
  stickyHeader?: boolean;
  bordered?: boolean;
  expandable?: boolean;
  selectable?: boolean;
}

const DsTableHeader = <TData, >({
  table,
  stickyHeader = true,
  bordered = true,
  expandable = false,
  selectable = false,
}: DsTableHeaderProps<TData>) => {
  return (
    <TableHeader className={classnames(stickyHeader && styles.stickyHeader)}>
      {table.getHeaderGroups().map(headerGroup => (
        <TableRow
          key={headerGroup.id}
          className={classnames(styles.headerRow, !bordered && styles.headerRowNoBorder)}
        >
          {selectable && (
            <TableHead className={classnames(styles.headerCell, styles.selectColumn)}>
              <DsCheckbox
                className={styles.checkboxContainer}
                checked={
                  table.getIsAllRowsSelected()
                    ? true
                    : table.getIsSomeRowsSelected()
                      ? 'indeterminate'
                      : false
                }
                onClick={e => {
                  e.stopPropagation();
                  const toggleHandler = table.getToggleAllRowsSelectedHandler();
                  toggleHandler(e);
                }}
              />
            </TableHead>
          )}
          {expandable && <TableHead className={styles.expandColumn} />}
          {headerGroup.headers.map(header => {
            return (
              <TableHead
                key={header.id}
                className={classnames(
                  styles.headerCell,
                  header.column.getCanSort() && styles.sortableHeader,
                )}
                onClick={header.column.getToggleSortingHandler()}
                style={{
                  width: header.getSize(),
                  minWidth: header.getSize(),
                }}
              >
                {header.isPlaceholder ? null : (
                  <div className={styles.headerSortContainer}>
                    <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                    {header.column.getCanSort() && (
                      <div className={styles.pageButtonIconContainer}>
                        {{
                          asc: <DsIcon icon="arrow_drop_up" className={styles.pageButtonIcon} />,
                          desc: <DsIcon icon="arrow_drop_down" className={styles.pageButtonIcon} />,
                        }[header.column.getIsSorted() as string] ?? (
                          <div className={styles.pageButtonIcon} />
                        )}
                      </div>
                    )}
                  </div>
                )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};

export default DsTableHeader;
