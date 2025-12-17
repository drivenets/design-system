import type { HTMLAttributes, Ref, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './core-table.module.scss';

type TableProps = HTMLAttributes<HTMLTableElement> & { ref?: Ref<HTMLTableElement> };

function Table({ className, ref, ...props }: TableProps) {
	return <table ref={ref} className={classnames(styles.table, className)} {...props} />;
}

Table.displayName = 'Table';

type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement> & {
	ref?: Ref<HTMLTableSectionElement>;
};

function TableHeader({ className, ref, ...props }: TableHeaderProps) {
	return <thead ref={ref} className={classnames(styles.tableHeader, className)} {...props} />;
}

TableHeader.displayName = 'TableHeader';

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
	ref?: Ref<HTMLTableSectionElement>;
};

function TableBody({ className, ref, ...props }: TableBodyProps) {
	return <tbody ref={ref} className={classnames(styles.tableBody, className)} {...props} />;
}

TableBody.displayName = 'TableBody';

type TableFooterProps = HTMLAttributes<HTMLTableSectionElement> & {
	ref?: Ref<HTMLTableSectionElement>;
};

function TableFooter({ className, ref, ...props }: TableFooterProps) {
	return <tfoot ref={ref} className={classnames(styles.tableFooter, className)} {...props} />;
}

TableFooter.displayName = 'TableFooter';

type TableRowProps = HTMLAttributes<HTMLTableRowElement> & {
	ref?: Ref<HTMLTableRowElement>;
};

function TableRow({ className, ref, ...props }: TableRowProps) {
	return <tr ref={ref} className={classnames(styles.tableRow, className)} {...props} />;
}

TableRow.displayName = 'TableRow';

type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement> & {
	ref?: Ref<HTMLTableCellElement>;
};

function TableHead({ className, ref, ...props }: TableHeadProps) {
	return <th ref={ref} className={classnames(styles.tableHead, className)} {...props} />;
}

TableHead.displayName = 'TableHead';

type TableCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
	ref?: Ref<HTMLTableCellElement>;
};

function TableCell({ className, ref, ...props }: TableCellProps) {
	return <td ref={ref} className={classnames(styles.tableCell, className)} {...props} />;
}

TableCell.displayName = 'TableCell';

type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement> & {
	ref?: Ref<HTMLTableCaptionElement>;
};

function TableCaption({ className, ref, ...props }: TableCaptionProps) {
	return <caption ref={ref} className={classnames(styles.tableCaption, className)} {...props} />;
}

TableCaption.displayName = 'TableCaption';

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow };
