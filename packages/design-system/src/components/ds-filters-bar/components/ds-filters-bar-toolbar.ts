import type { FC } from 'react';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type { DsFiltersBarToolbarProps } from '../ds-filters-bar.types';

export const Toolbar: FC<DsFiltersBarToolbarProps> = () => {
	useDsFiltersBarContext();

	return null;
};

Toolbar.displayName = 'DsFiltersBar.Toolbar';
