import type { FC } from 'react';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type { DsFiltersBarSavedFiltersProps, DsFiltersBarSaveFilterProps } from '../ds-filters-bar.types';

export const SavedFilters: FC<DsFiltersBarSavedFiltersProps> = () => {
	useDsFiltersBarContext();

	return null;
};

SavedFilters.displayName = 'DsFiltersBar.SavedFilters';

export const SaveFilter: FC<DsFiltersBarSaveFilterProps> = () => {
	useDsFiltersBarContext();

	return null;
};

SaveFilter.displayName = 'DsFiltersBar.SaveFilter';
