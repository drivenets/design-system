import {
	comparisonFilterOperators,
	defaultDsFiltersBarLocale,
	enumFilterOperators,
	textFilterOperators,
	type DsFilterDatePresetValue,
	type DsFilterField,
	type DsFilterOperator,
	type DsFilterOperatorLocale,
	type DsFilterOperators,
	type DsFilterOperatorValue,
	type DsFilterOption,
	type DsFilterResolvedField,
	type DsFilterResolvedOperator,
	type DsFilterResolvedScalarField,
	type DsFilterScalarField,
	type DsFiltersBarResolvedLocale,
} from './ds-filters-bar.types';

/**
 * The strings a field's operators and presets take their words from
 */
export type DsFilterFieldsLocale = Pick<DsFiltersBarResolvedLocale, 'operators' | 'datePresets'>;

/**
 * An operator listed as a plain value takes its words from `words`; an object keeps the words it
 * sets. Omitted operators mean every operator of the type.
 */
const resolveOperators = <TValue extends DsFilterOperatorValue>(
	operators: DsFilterOperators<TValue> | undefined,
	allowed: ReadonlyArray<TValue>,
	words: Readonly<Record<TValue, Required<DsFilterOperatorLocale>>>,
): ReadonlyArray<DsFilterResolvedOperator<TValue>> =>
	(operators ?? allowed).map((operator) => {
		const written: DsFilterOperator<TValue> = typeof operator === 'object' ? operator : { value: operator };
		const word = words[written.value];

		return {
			value: written.value,
			label: written.label ?? word.label,
			symbol: written.symbol ?? word.symbol,
		};
	});

const resolvePresets = (
	presets: ReadonlyArray<DsFilterDatePresetValue | DsFilterOption> | undefined,
	labels: Readonly<Record<DsFilterDatePresetValue, string>>,
): ReadonlyArray<DsFilterOption> =>
	(presets ?? []).map((preset) =>
		typeof preset === 'string' ? { value: preset, label: labels[preset] } : preset,
	);

/**
 * The field with every operator and preset spelled out. Idempotent: a resolved field resolves to
 * the same words, whatever `locale`.
 */
export const resolveScalarField = (
	field: DsFilterScalarField,
	locale: DsFilterFieldsLocale = defaultDsFiltersBarLocale,
): DsFilterResolvedScalarField => {
	switch (field.type) {
		case 'enum':
			return {
				...field,
				operators: resolveOperators(field.operators, enumFilterOperators, locale.operators.enum),
			};
		case 'text':
			return {
				...field,
				operators: resolveOperators(field.operators, textFilterOperators, locale.operators.text),
			};
		case 'number':
			return {
				...field,
				operators: resolveOperators(field.operators, comparisonFilterOperators, locale.operators.number),
			};
		case 'date':
			return {
				...field,
				operators: resolveOperators(field.operators, comparisonFilterOperators, locale.operators.date),
				presets: resolvePresets(field.presets, locale.datePresets),
			};
	}
};

/**
 * The **Field schema** as every part reads it: built-in operators and presets filled in, with their
 * words from `locale` where the field does not set them
 */
export const resolveFields = (
	fields: ReadonlyArray<DsFilterField>,
	locale: DsFilterFieldsLocale = defaultDsFiltersBarLocale,
): ReadonlyArray<DsFilterResolvedField> =>
	fields.map((field) =>
		field.type === 'compound'
			? { ...field, subfields: field.subfields.map((subfield) => resolveScalarField(subfield, locale)) }
			: resolveScalarField(field, locale),
	);
