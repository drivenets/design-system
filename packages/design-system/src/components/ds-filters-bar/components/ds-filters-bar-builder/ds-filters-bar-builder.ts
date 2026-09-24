import type { FC } from 'react';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import type { DsFiltersBarBuilderProps } from './ds-filters-bar-builder.types';

export const Builder: FC<DsFiltersBarBuilderProps> = () => {
	useDsFiltersBarContext();

	return null;
};

Builder.displayName = 'DsFiltersBar.Builder';
