import type { CSSProperties, Ref } from 'react';

export interface DsSavedFilterItem {
	id: string;
	name: string;
	/**
	 * Number of **Filter conditions** in this snapshot. Omit to hide the trailing count.
	 */
	count?: number;
}

export interface DsSavedFiltersLocale {
	savedFilters?: string;
	noSavedFilters?: string;
	saveFilter?: string;
	/**
	 * Menu item for overwriting the active snapshot. `{name}` is replaced with the active name.
	 */
	updateFilter?: string;
	saveAsNew?: string;
	renameFilter?: string;
	deleteFilter?: string;
	nameLabel?: string;
	confirm?: string;
	cancel?: string;
	close?: string;
	unsavedChanges?: string;
	rowActions?: string;
	expandAriaLabel?: string;
	clearAriaLabel?: string;
	saveAsTitle?: string;
	renameTitle?: string;
	deleteTitle?: string;
	/**
	 * Confirmation body. `{name}` is replaced with the snapshot name.
	 */
	deleteMessage?: string;
	deleteConfirm?: string;
}

export const defaultDsSavedFiltersLocale: Required<DsSavedFiltersLocale> = Object.freeze({
	savedFilters: 'Saved filters',
	noSavedFilters: 'No saved filters yet. Build a filter, then choose “Save filter”.',
	saveFilter: 'Save filter',
	updateFilter: 'Update “{name}”',
	saveAsNew: 'Save as a new filter',
	renameFilter: 'Rename filter',
	deleteFilter: 'Delete filter',
	nameLabel: 'Filter name',
	confirm: 'Save',
	cancel: 'Cancel',
	close: 'Close',
	unsavedChanges: 'Unsaved changes',
	rowActions: 'Filter actions',
	expandAriaLabel: 'Open saved filters',
	clearAriaLabel: 'Clear filters',
	saveAsTitle: 'Save as a new filter',
	renameTitle: 'Rename filter',
	deleteTitle: 'Delete filter',
	deleteMessage: 'Delete “{name}”? This cannot be undone.',
	deleteConfirm: 'Delete',
});

/**
 * Return a Promise to keep the launching control in a loading state until it settles.
 */
export type DsSavedFiltersAsyncHandler<Args extends unknown[] = []> = (...args: Args) => void | Promise<void>;

export interface DsSavedFiltersTriggerProps {
	items: ReadonlyArray<DsSavedFilterItem>;
	/**
	 * Id of the **Active saved filter**, or `null` when none is applied.
	 */
	value: string | null;
	/**
	 * Whether the working document diverged from the **Active saved filter**.
	 */
	dirty?: boolean;
	locale?: DsSavedFiltersLocale;
	ref?: Ref<HTMLDivElement>;
	className?: string;
	style?: CSSProperties;
	onValueChange: (id: string | null) => void;
	onClear: DsSavedFiltersAsyncHandler;
	onRename: DsSavedFiltersAsyncHandler<[id: string, name: string]>;
	onDelete: DsSavedFiltersAsyncHandler<[id: string]>;
}

export interface DsSavedFiltersSaveProps {
	items: ReadonlyArray<DsSavedFilterItem>;
	/**
	 * Id of the **Active saved filter**, or `null` when none is applied.
	 */
	value: string | null;
	/**
	 * Blocks saving, for example while there is nothing to save
	 * @default false
	 */
	disabled?: boolean;
	locale?: DsSavedFiltersLocale;
	ref?: Ref<HTMLButtonElement>;
	className?: string;
	style?: CSSProperties;
	onUpdate: DsSavedFiltersAsyncHandler;
	onSaveAs: DsSavedFiltersAsyncHandler<[name: string]>;
}
