import type { FC } from 'react';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type { DsFiltersBarViewSwitchProps } from '../ds-filters-bar.types';

export const ViewSwitch: FC<DsFiltersBarViewSwitchProps> = () => {
	useDsFiltersBarContext();

	return null;
};

ViewSwitch.displayName = 'DsFiltersBar.ViewSwitch';
