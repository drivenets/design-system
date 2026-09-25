import type { FC } from 'react';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type { DsFiltersBarClearAllProps } from '../ds-filters-bar.types';

export const ClearAll: FC<DsFiltersBarClearAllProps> = () => {
	useDsFiltersBarContext();

	return null;
};

ClearAll.displayName = 'DsFiltersBar.ClearAll';
