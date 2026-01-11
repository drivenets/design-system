import type { HTMLAttributes, Ref, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './core-table.module.scss';

type TableProps = HTMLAttributes<HTMLTableElement> & { ref?: Ref<HTMLTableElement> };

function Table({ className, ...props }: TableProps) {
	return <table className={classnames(styles.table, className)} {...props} />;
}

Table.displayName = 'Table';

type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement> & {
	ref?: Ref<HTMLTableSectionElement>;
};

function TableHeader(props: TableHeaderProps) {
	return <thead {...props} />;
}

TableHeader.displayName = 'TableHeader';

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
	ref?: Ref<HTMLTableSectionElement>;
};

function TableBody(props: TableBodyProps) {
	return <tbody {...props} />;
}

TableBody.displayName = 'TableBody';

type TableFooterProps = HTMLAttributes<HTMLTableSectionElement> & {
	ref?: Ref<HTMLTableSectionElement>;
};

function TableFooter({ className, ...props }: TableFooterProps) {
	return <tfoot className={classnames(styles.tableFooter, className)} {...props} />;
}

TableFooter.displayName = 'TableFooter';

type TableRowProps = HTMLAttributes<HTMLTableRowElement> & {
	ref?: Ref<HTMLTableRowElement>;
};

function TableRow(props: TableRowProps) {
	return <tr {...props} />;
}

TableRow.displayName = 'TableRow';

type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement> & {
	ref?: Ref<HTMLTableCellElement>;
};

function TableHead({ className, ...props }: TableHeadProps) {
	return <th className={classnames(styles.tableHead, className)} {...props} />;
}

TableHead.displayName = 'TableHead';

type TableCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
	ref?: Ref<HTMLTableCellElement>;
};

function TableCell({ className, ...props }: TableCellProps) {
	return <td className={classnames(styles.tableCell, className)} {...props} />;
}

TableCell.displayName = 'TableCell';

type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement> & {
	ref?: Ref<HTMLTableCaptionElement>;
};

function TableCaption({ className, ...props }: TableCaptionProps) {
	return <caption className={classnames(styles.tableCaption, className)} {...props} />;
}

TableCaption.displayName = 'TableCaption';

export { Table, TableBody, TableCell, TableHead, TableHeader, TableRow };
