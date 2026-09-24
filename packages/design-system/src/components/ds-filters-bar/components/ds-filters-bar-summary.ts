import type { FC } from 'react';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type { DsFiltersBarSummaryProps } from '../ds-filters-bar.types';

export const Summary: FC<DsFiltersBarSummaryProps> = () => {
	useDsFiltersBarContext();

	return null;
};

Summary.displayName = 'DsFiltersBar.Summary';
