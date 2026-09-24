import type { FC } from 'react';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type { DsFiltersBarViewProps } from '../ds-filters-bar.types';

export const View: FC<DsFiltersBarViewProps> = () => {
	useDsFiltersBarContext();

	return null;
};

View.displayName = 'DsFiltersBar.View';
