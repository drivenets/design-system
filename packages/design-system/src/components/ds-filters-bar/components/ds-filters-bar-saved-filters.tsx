import { DsSavedFilters } from '../../ds-saved-filters';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type { DsFiltersBarSavedFiltersProps, DsFiltersBarSaveFilterProps } from '../ds-filters-bar.types';

export const SavedFilters = ({ onClear, ...props }: DsFiltersBarSavedFiltersProps) => {
	const { clear } = useDsFiltersBarContext();

	return (
		<DsSavedFilters.Trigger
			{...props}
			onClear={() => {
				clear();

				return onClear();
			}}
		/>
	);
};

SavedFilters.displayName = 'DsFiltersBar.SavedFilters';

export const SaveFilter = ({ disabled, ...props }: DsFiltersBarSaveFilterProps) => {
	const { isEmpty } = useDsFiltersBarContext();

	return <DsSavedFilters.Save {...props} disabled={disabled ?? isEmpty} />;
};

SaveFilter.displayName = 'DsFiltersBar.SaveFilter';
