import type { FC } from 'react';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import type { DsFiltersBarConditionsProps } from './ds-filters-bar-conditions.types';

export const Conditions: FC<DsFiltersBarConditionsProps> = () => {
	useDsFiltersBarContext();

	return null;
};

Conditions.displayName = 'DsFiltersBar.Conditions';
