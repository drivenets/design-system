import React from 'react';
import { Row } from '@tanstack/react-table';
import { VirtualItem } from '@tanstack/react-virtual';
import type { IconType } from '@design-system/ui';

/**
 * Props for the table row component
 */
export interface TableRowProps<TData, TValue> {
	/**
	 * The row data from the table
	 */
	row: Row<TData>;

	/**
	 * Virtual row data for virtualized tables
	 */
	virtualRow?: VirtualItem;

	/**
	 * Whether the row is expandable
	 */
	expandable: boolean;

	/**
	 * Record of expanded row states
	 */
	expandedRows: Record<string, boolean>;

	/**
	 * Whether the row is selectable
	 */
	selectable: boolean;

	/**
	 * Whether the row is reorderable
	 */
	reorderable?: boolean;

	/**
	 * Optional function to handle row click
	 */
	onRowClick?: (data: TData) => void;

	/**
	 * Optional function to handle row double click
	 */
	onRowDoubleClick?: (data: TData) => void;

	/**
	 * Optional function to render the expanded row content
	 */
	renderExpandedRow?: (data: TData) => React.ReactNode;

	/**
	 * Whether the table is virtualized
	 */
	virtualized: boolean;

	/**
	 * Whether the table cells have borders
	 */
	bordered: boolean;

	/**
	 * Whether the row should highlight on hover
	 */
	highlightOnHover: boolean;

	/**
	 * Function to toggle the expanded state of a row
	 */
	toggleRowExpanded: (rowId: string) => void;

	/**
	 * Primary actions to be shown on each row (on hover)
	 */
	primaryRowActions?: Array<{
		/**
		 * Optional label text for the action
		 */
		label?: string;

		/**
		 * Icon to be displayed for the action
		 */
		icon: IconType;

		/**
		 * Optional tooltip text to show on hover
		 */
		tooltip?: string;

		/**
		 * Optional function to determine if the action should be disabled
		 */
		disabled?: (data: TData) => boolean;

		/**
		 * Function to be called when the action is clicked
		 */
		onClick: (data: TData) => void;
	}>;

	/**
	 * Secondary actions to be shown in a dropdown on each row (on hover)
	 */
	secondaryRowActions?: Array<{
		/**
		 * Label text for the action
		 */
		label: string;

		/**
		 * Icon to be displayed for the action
		 */
		icon: IconType;

		/**
		 * Optional function to determine if the action should be disabled
		 */
		disabled?: (data: TData) => boolean;

		/**
		 * Function to be called when the action is clicked
		 */
		onClick: (data: TData) => void;
	}>;
}
