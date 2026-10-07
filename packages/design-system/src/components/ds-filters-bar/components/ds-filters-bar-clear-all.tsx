import { flushSync } from 'react-dom';
import { DsButtonV3 } from '../../ds-button-v3';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import { defaultDsFiltersBarClearAllLocale, type DsFiltersBarClearAllProps } from '../ds-filters-bar.types';

const isFocusDropped = () => document.activeElement === null || document.activeElement === document.body;

export const ClearAll = ({
	locale: localeProp,
	ref,
	className,
	style,
	onClick,
}: DsFiltersBarClearAllProps) => {
	const { isEmpty, clear, search, disclosureRef } = useDsFiltersBarContext();
	const locale = { ...defaultDsFiltersBarClearAllLocale, ...localeProp };

	if (isEmpty) {
		return null;
	}

	const handleClick = () => {
		// Flushed so the button is gone and Search, no longer locked by a query, can take focus.
		flushSync(() => {
			clear();
			onClick?.();
		});

		// The button unmounts with the empty document; keep focus in the bar unless `onClick` moved it.
		if (isFocusDropped()) {
			search?.focus();
		}

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
			{locale.label}
		</DsButtonV3>
	);
};

ClearAll.displayName = 'DsFiltersBar.ClearAll';
