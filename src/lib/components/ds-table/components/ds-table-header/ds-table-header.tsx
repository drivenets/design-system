import { flexRender } from '@tanstack/react-table';
import classnames from 'classnames';
import { DsCheckbox, DsIcon } from '@design-system/ui';
import { TableHead, TableHeader, TableRow } from '../core-table';
import styles from './ds-table-header.module.scss';
import stylesShared from '../../styles/shared/ds-table-shared.module.scss';
import { DsTableHeaderProps } from './ds-table-header.types';

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
                className={stylesShared.checkboxContainer}
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
                          <div
                            className={classnames(styles.pageButtonIcon, stylesShared.pageButtonIcon)}
                          />
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
