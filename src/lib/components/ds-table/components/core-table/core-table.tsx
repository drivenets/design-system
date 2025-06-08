import classnames from 'classnames';
import * as React from 'react';
import styles from './core-table.module.scss';

type TableProps = React.HTMLAttributes<HTMLTableElement> & { ref?: React.Ref<HTMLTableElement> };
function Table({ className, ref, ...props }: TableProps) {
  return (
    <div className={classnames(styles.tableWrapper, className)}>
      <table ref={ref} className={classnames(styles.table, className)} {...props} />
    </div>
  );
}
Table.displayName = 'Table';

type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  ref?: React.Ref<HTMLTableSectionElement>;
};
function TableHeader({ className, ref, ...props }: TableHeaderProps) {
  return <thead ref={ref} className={classnames(styles.tableHeader, className)} {...props} />;
}
TableHeader.displayName = 'TableHeader';

type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  ref?: React.Ref<HTMLTableSectionElement>;
};
function TableBody({ className, ref, ...props }: TableBodyProps) {
  return <tbody ref={ref} className={classnames(styles.tableBody, className)} {...props} />;
}
TableBody.displayName = 'TableBody';

type TableFooterProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  ref?: React.Ref<HTMLTableSectionElement>;
};
function TableFooter({ className, ref, ...props }: TableFooterProps) {
  return <tfoot ref={ref} className={classnames(styles.tableFooter, className)} {...props} />;
}
TableFooter.displayName = 'TableFooter';

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  ref?: React.Ref<HTMLTableRowElement>;
};
function TableRow({ className, ref, ...props }: TableRowProps) {
  return <tr ref={ref} className={classnames(styles.tableRow, className)} {...props} />;
}
TableRow.displayName = 'TableRow';

type TableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
  ref?: React.Ref<HTMLTableCellElement>;
};
function TableHead({ className, ref, ...props }: TableHeadProps) {
  return <th ref={ref} className={classnames(styles.tableHead, className)} {...props} />;
}
TableHead.displayName = 'TableHead';

type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  ref?: React.Ref<HTMLTableCellElement>;
};
function TableCell({ className, ref, ...props }: TableCellProps) {
  return <td ref={ref} className={classnames(styles.tableCell, className)} {...props} />;
}
TableCell.displayName = 'TableCell';

type TableCaptionProps = React.HTMLAttributes<HTMLTableCaptionElement> & {
  ref?: React.Ref<HTMLTableCaptionElement>;
};
function TableCaption({ className, ref, ...props }: TableCaptionProps) {
  return <caption ref={ref} className={classnames(styles.tableCaption, className)} {...props} />;
}
TableCaption.displayName = 'TableCaption';

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow };
