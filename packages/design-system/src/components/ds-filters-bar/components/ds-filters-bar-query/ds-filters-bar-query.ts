import type { FC } from 'react';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import type { DsFiltersBarQueryProps } from './ds-filters-bar-query.types';

export const Query: FC<DsFiltersBarQueryProps> = () => {
	useDsFiltersBarContext();

	return null;
};

Query.displayName = 'DsFiltersBar.Query';
