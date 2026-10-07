import { flushSync } from 'react-dom';
import { DsButtonV3 } from '../../ds-button-v3';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import type { DsFiltersBarClearAllSlotProps } from '../ds-filters-bar.types';

const isFocusDropped = () => document.activeElement === null || document.activeElement === document.body;

/**
 * Empties the document, switches every toggle off and drops the **Active saved filter**; pins stay.
 * Renders only while there is something to clear, so it unmounts on click and hands focus to the
 * search input.
 */
export const ClearAll = ({ ref, className, style }: DsFiltersBarClearAllSlotProps) => {
	const {
		isEmpty,
		activeToggles,
		activeSavedFilter,
		activeSavedFilterId,
		locale,
		clear,
		setActiveToggles,
		setActiveSavedFilterId,
		search,
		disclosureRef,
	} = useDsFiltersBarContext();

	if (isEmpty && !activeToggles.length && !activeSavedFilter) {
		return null;
	}

	const handleClick = () => {
		// Flushed so the button is gone and Search, no longer locked by a query, can take focus.
		flushSync(() => {
			clear();

			if (activeToggles.length) {
				setActiveToggles([]);
			}

			if (activeSavedFilterId !== null) {
				setActiveSavedFilterId(null);
			}
		});

		search?.focus();

		// A search disabled through `slotProps` cannot take focus.
		if (isFocusDropped()) {
			disclosureRef.current?.focus();
		}
	};

	return (
		<DsButtonV3
			ref={ref}
			variant="tertiary"
			size="small"
			icon="close"
			className={className}
			style={style}
			onClick={handleClick}
		>
			{locale.clearAll.label}
		</DsButtonV3>
	);
};
