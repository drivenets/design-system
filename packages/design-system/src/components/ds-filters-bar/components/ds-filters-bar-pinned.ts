import type { FC } from 'react';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type {
	DsFiltersBarPinnedProps,
	DsFiltersBarPinnedGroupProps,
	DsFiltersBarPinnedToggleProps,
} from '../ds-filters-bar.types';

export const Pinned: FC<DsFiltersBarPinnedProps> = () => {
	useDsFiltersBarContext();

	return null;
};

Pinned.displayName = 'DsFiltersBar.Pinned';

export const PinnedGroup: FC<DsFiltersBarPinnedGroupProps> = () => {
	useDsFiltersBarContext();

	return null;
};

PinnedGroup.displayName = 'DsFiltersBar.PinnedGroup';

export const PinnedToggle: FC<DsFiltersBarPinnedToggleProps> = () => {
	useDsFiltersBarContext();

	return null;
};

PinnedToggle.displayName = 'DsFiltersBar.PinnedToggle';
