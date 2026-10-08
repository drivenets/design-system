import type { CSSProperties, ReactNode, Ref } from 'react';
import type { DsFilterFieldCondition, DsFilterResolvedOperator } from '../../ds-filters-bar.types';

/**
 * Strings of the add button and the condition chips, shared by the filters and builder views
 */
export interface DsFiltersBarConditionChipsLocale {
	/**
	 * Accessible name of the icon-only button that adds a condition
	 */
	addFilter?: string;
	/**
	 * Accessible name of a chip's remove button. Receives the whole condition in words, for example
	 * `Status not equals Active`, or the text of a search.
	 */
	removeCondition?: (condition: string) => string;
	/**
	 * Accessible name of a chip's operator menu button. Receives the field label, or the field and
	 * subfield labels for a compound field.
	 */
	operator?: (fieldLabel: string) => string;
	/**
	 * Operator menu item text, as in `≠ (not equals)`
	 */
	operatorOption?: (operator: DsFilterResolvedOperator) => string;
}

export const defaultDsFiltersBarConditionChipsLocale: Required<DsFiltersBarConditionChipsLocale> =
	Object.freeze({
		addFilter: 'Add filter',
		removeCondition: (condition: string) => `Remove filter: ${condition}`,
		operator: (fieldLabel: string) => `${fieldLabel} operator`,
		operatorOption: (operator: DsFilterResolvedOperator) => `${operator.symbol} (${operator.label})`,
	});

export interface ConditionChipsProps {
	locale: Required<DsFiltersBarConditionChipsLocale>;
	/**
	 * The dialog that the add button and the field chips open
	 */
	children?: ReactNode;
	ref?: Ref<HTMLDivElement>;
	className?: string;
	style?: CSSProperties;
	onAdd: () => void;
	/**
	 * Whether clicking this field chip edits it. A chip that cannot be edited is not clickable.
	 */
	canEdit: (condition: DsFilterFieldCondition) => boolean;
	onEdit: (condition: DsFilterFieldCondition) => void;
}
