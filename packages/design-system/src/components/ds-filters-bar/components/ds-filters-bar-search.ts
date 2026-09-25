import type { FC } from 'react';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type { DsFiltersBarSearchProps } from '../ds-filters-bar.types';

export const Search: FC<DsFiltersBarSearchProps> = () => {
	useDsFiltersBarContext();

	return null;
};

Search.displayName = 'DsFiltersBar.Search';
