import type { ReactNode } from 'react';

export interface ColumnFilterPopoverLocale {
	/** @default 'Filter column' */
	triggerAriaLabel?: string;
	/** @default 'Clear' */
	clearLabel?: string;
	/** @default 'Save' */
	saveLabel?: string;
}

export interface DsTableColumnFilterPopoverProps {
	/** Stable column / adapter id. Drives aria attributes. */
	filterId: string;
	/** Body rendered above the Clear / Save footer. */
	children: ReactNode;
	/** Whether the column has an applied filter; drives the trigger's active state. */
	hasActiveFilter: boolean;
	/** Commit the draft for this column. */
	onApply: () => void;
	/** Clear the draft and the applied value for this column. */
	onClear: () => void;
	/** Discard the draft when the popover closes without Save. */
	onCancel: () => void;
	locale?: ColumnFilterPopoverLocale;
	className?: string;
}
