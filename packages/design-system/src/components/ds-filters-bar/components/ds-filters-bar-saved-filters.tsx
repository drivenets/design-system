import { DsSavedFilters, type DsSavedFilterItem } from '../../ds-saved-filters';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type {
	DsFiltersBarSavedFilter,
	DsFiltersBarSavedFiltersSlotProps,
	DsFiltersBarSaveFilterSlotProps,
} from '../ds-filters-bar.types';
import { afterSettled, documentKey } from '../ds-filters-bar.utils';
import { toFilterDocument } from '../filter-document';

/**
 * An Advanced query has no condition count, so its item shows none.
 */
const toItem = ({ id, name, document: input }: DsFiltersBarSavedFilter): DsSavedFilterItem => {
	const document = toFilterDocument(input);

	return document.query === null ? { id, name, count: document.conditions.length } : { id, name };
};

/**
 * Picker for **Saved filters**. Choosing one loads its document; clearing the active one also
 * empties the document.
 */
export const SavedFilters = ({ ref, className, style }: DsFiltersBarSavedFiltersSlotProps) => {
	const {
		document,
		savedFilters,
		activeSavedFilterId,
		activeSavedFilter,
		locale,
		setDocument,
		setActiveSavedFilterId,
		clear,
	} = useDsFiltersBarContext();

	if (!savedFilters) {
		return null;
	}

	const handleValueChange = (id: string | null) => {
		const item = savedFilters.items.find((saved) => saved.id === id);

		if (item) {
			setDocument(toFilterDocument(item.document));
		}

		setActiveSavedFilterId(item?.id ?? null);
	};

	const handleClear = () => {
		clear();
		setActiveSavedFilterId(null);
	};

	const handleDelete = (id: string) =>
		afterSettled(savedFilters.onDelete(id), () => {
			if (id === activeSavedFilterId) {
				setActiveSavedFilterId(null);
			}
		});

	return (
		<DsSavedFilters.Trigger
			ref={ref}
			items={savedFilters.items.map(toItem)}
			value={activeSavedFilter ? activeSavedFilterId : null}
			dirty={
				!!activeSavedFilter &&
				documentKey(toFilterDocument(activeSavedFilter.document)) !== documentKey(document)
			}
			locale={locale.savedFilters}
			className={className}
			style={style}
			onValueChange={handleValueChange}
			onClear={handleClear}
			onRename={savedFilters.onRename}
			onDelete={handleDelete}
		/>
	);
};

/**
 * Saves the document as a new **Saved filter**, which becomes the active one, or overwrites the
 * **Active saved filter**
 */
export const SaveFilter = ({ disabled, ref, className, style }: DsFiltersBarSaveFilterSlotProps) => {
	const { document, isEmpty, savedFilters, activeSavedFilter, locale, setActiveSavedFilterId } =
		useDsFiltersBarContext();

	if (!savedFilters) {
		return null;
	}

	const handleUpdate = () => {
		if (!activeSavedFilter) {
			return;
		}

		return savedFilters.onUpdate(activeSavedFilter.id, document);
	};

	return (
		<DsSavedFilters.Save
			ref={ref}
			items={savedFilters.items.map(toItem)}
			value={activeSavedFilter?.id ?? null}
			disabled={disabled ?? isEmpty}
			locale={locale.savedFilters}
			className={className}
			style={style}
			onUpdate={handleUpdate}
			onSaveAs={(name) => afterSettled(savedFilters.onSaveAs(name, document), setActiveSavedFilterId)}
		/>
	);
};
