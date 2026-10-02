import type {
	DsFilterField,
	DsFilterFieldCondition,
	DsFilterOperatorValue,
	DsFilterScalarField,
} from '../../ds-filters-bar.types';
import type { DsFiltersBarBuilderLocale } from './ds-filters-bar-builder.types';

const COMPLETE_NUMBER = /^-?\d+(\.\d+)?$/;

export interface BuilderDraft {
	fieldId: string | null;
	subfieldId: string | null;
	operator: DsFilterOperatorValue | null;
	/**
	 * Free-text, number, or date entry, including a chosen date preset's value
	 */
	valueText: string;
	/**
	 * Selected enum option. Absent for every other field type.
	 */
	optionValue: string | null;
	/**
	 * Text filtering the current list of choices. Unused while the input is the value itself.
	 */
	query: string;
}

export interface BuilderChoice {
	kind: 'field' | 'subfield' | 'operator' | 'option';
	id: string;
	label: string;
}

export interface BuilderPathSegment {
	key: string;
	text: string;
	emphasized: boolean;
}

export type BuilderInputMode = 'search' | 'value';

export interface BuilderStepView {
	inputMode: BuilderInputMode;
	placeholder: string;
	caption: string | null;
	inputValue: string;
	choices: ReadonlyArray<BuilderChoice>;
	selectedChoiceId: string | null;
	path: ReadonlyArray<BuilderPathSegment>;
}

type Locale = Required<DsFiltersBarBuilderLocale>;

interface ResolvedField {
	field: DsFilterField;
	scalar: DsFilterScalarField | null;
}

export const emptyBuilderDraft = (): BuilderDraft => ({
	fieldId: null,
	subfieldId: null,
	operator: null,
	valueText: '',
	optionValue: null,
	query: '',
});

const defaultOperator = (field: DsFilterScalarField): DsFilterOperatorValue | null =>
	field.operators[0]?.value ?? null;

const matchesQuery = (label: string, query: string): boolean => {
	const needle = query.trim().toLowerCase();

	if (!needle) {
		return true;
	}

	return label.toLowerCase().includes(needle);
};

const offeredFields = (
	fields: ReadonlyArray<DsFilterField>,
	suggestedFields: ReadonlyArray<string> | undefined,
): ReadonlyArray<DsFilterField> => {
	if (!suggestedFields) {
		return fields;
	}

	const seen = new Set<string>();

	return suggestedFields.flatMap((id) => {
		if (seen.has(id)) {
			return [];
		}

		seen.add(id);

		const field = fields.find((item) => item.id === id);

		return field ? [field] : [];
	});
};

const resolveField = (fields: ReadonlyArray<DsFilterField>, draft: BuilderDraft): ResolvedField | null => {
	const field = fields.find((item) => item.id === draft.fieldId);

	if (!field) {
		return null;
	}

	if (field.type !== 'compound') {
		return { field, scalar: field };
	}

	const scalar = field.subfields.find((item) => item.id === draft.subfieldId) ?? null;

	return { field, scalar };
};

const stepOf = (
	resolved: ResolvedField | null,
	draft: BuilderDraft,
): 'field' | 'subfield' | 'operator' | 'value' => {
	if (!resolved) {
		return 'field';
	}

	if (!resolved.scalar) {
		return 'subfield';
	}

	if (resolved.scalar.type !== 'enum' && !draft.operator) {
		return 'operator';
	}

	return 'value';
};

const isValueInput = (fields: ReadonlyArray<DsFilterField>, draft: BuilderDraft): boolean => {
	const resolved = resolveField(fields, draft);

	return stepOf(resolved, draft) === 'value' && resolved?.scalar?.type !== 'enum';
};

const fieldChoices = (
	fields: ReadonlyArray<DsFilterField>,
	draft: BuilderDraft,
	suggestedFields: ReadonlyArray<string> | undefined,
): ReadonlyArray<BuilderChoice> => {
	const query = draft.query.trim();
	const source = query ? fields : offeredFields(fields, suggestedFields);

	return source
		.filter((field) => matchesQuery(field.label, query))
		.map((field) => ({ kind: 'field', id: field.id, label: field.label }));
};

const subfieldChoices = (resolved: ResolvedField, query: string): ReadonlyArray<BuilderChoice> => {
	if (resolved.field.type !== 'compound') {
		return [];
	}

	return resolved.field.subfields
		.filter((subfield) => matchesQuery(subfield.label, query))
		.map((subfield) => ({ kind: 'subfield', id: subfield.id, label: subfield.label }));
};

const operatorChoices = (scalar: DsFilterScalarField, query: string): ReadonlyArray<BuilderChoice> =>
	scalar.operators
		.filter((operator) => matchesQuery(operator.label, query))
		.map((operator) => ({ kind: 'operator', id: operator.value, label: operator.label }));

const optionChoices = (scalar: DsFilterScalarField, query: string): ReadonlyArray<BuilderChoice> => {
	if (scalar.type === 'enum') {
		return scalar.options
			.filter((option) => matchesQuery(option.label, query))
			.map((option) => ({ kind: 'option', id: option.value, label: option.label }));
	}

	if (scalar.type === 'date') {
		return (scalar.presets ?? []).map((preset) => ({
			kind: 'option',
			id: preset.value,
			label: preset.label,
		}));
	}

	return [];
};

const valueLabel = (scalar: DsFilterScalarField | null, draft: BuilderDraft): string | null => {
	if (!scalar) {
		return null;
	}

	if (scalar.type === 'enum') {
		return scalar.options.find((option) => option.value === draft.optionValue)?.label ?? null;
	}

	const text = draft.valueText.trim();

	if (!text) {
		return null;
	}

	if (scalar.type === 'date') {
		return scalar.presets?.find((preset) => preset.value === text)?.label ?? text;
	}

	return text;
};

const pathOf = (resolved: ResolvedField | null, draft: BuilderDraft): ReadonlyArray<BuilderPathSegment> => {
	if (!resolved) {
		return [];
	}

	const segments: BuilderPathSegment[] = [{ key: 'field', text: resolved.field.label, emphasized: false }];

	if (resolved.scalar && resolved.field.type === 'compound') {
		segments.push({ key: 'subfield', text: resolved.scalar.label, emphasized: false });
	}

	if (resolved.scalar && resolved.scalar.type !== 'enum' && draft.operator) {
		const operator = resolved.scalar.operators.find((item) => item.value === draft.operator);

		segments.push({ key: 'operator', text: operator?.label ?? draft.operator, emphasized: false });
	}

	const value = valueLabel(resolved.scalar, draft);

	if (value) {
		segments.push({ key: 'value', text: value, emphasized: true });
	}

	return segments;
};

const selectedChoiceId = (scalar: DsFilterScalarField | null, draft: BuilderDraft): string | null => {
	if (!scalar) {
		return null;
	}

	if (scalar.type === 'enum') {
		return draft.optionValue;
	}

	if (scalar.type === 'date') {
		return scalar.presets?.some((preset) => preset.value === draft.valueText) ? draft.valueText : null;
	}

	return null;
};

/**
 * What the dialog shows for the current draft: the input, the caption, and the choices.
 */
export const describeBuilderStep = (
	fields: ReadonlyArray<DsFilterField>,
	draft: BuilderDraft,
	suggestedFields: ReadonlyArray<string> | undefined,
	locale: Locale,
): BuilderStepView => {
	const resolved = resolveField(fields, draft);
	const step = stepOf(resolved, draft);
	const scalar = resolved?.scalar ?? null;

	if (step === 'field') {
		return {
			inputMode: 'search',
			placeholder: locale.searchField,
			caption: locale.selectField,
			inputValue: draft.query,
			choices: fieldChoices(fields, draft, suggestedFields),
			selectedChoiceId: null,
			path: [],
		};
	}

	if (step === 'subfield' && resolved) {
		return {
			inputMode: 'search',
			placeholder: locale.searchSubfield,
			caption: locale.selectSubfield,
			inputValue: draft.query,
			choices: subfieldChoices(resolved, draft.query),
			selectedChoiceId: null,
			path: pathOf(resolved, draft),
		};
	}

	if (step === 'operator' && scalar) {
		return {
			inputMode: 'search',
			placeholder: locale.searchOperator,
			caption: locale.selectOperator,
			inputValue: draft.query,
			choices: operatorChoices(scalar, draft.query),
			selectedChoiceId: null,
			path: pathOf(resolved, draft),
		};
	}

	const choices = scalar ? optionChoices(scalar, scalar.type === 'enum' ? draft.query : '') : [];
	const searchingOptions = scalar?.type === 'enum';
	const presetLabel =
		scalar?.type === 'date'
			? scalar.presets?.find((preset) => preset.value === draft.valueText)?.label
			: undefined;

	return {
		inputMode: searchingOptions ? 'search' : 'value',
		placeholder: searchingOptions ? locale.searchValue : locale.valuePlaceholder,
		caption: choices.length > 0 || searchingOptions ? locale.selectValue : null,
		inputValue: searchingOptions ? draft.query : (presetLabel ?? draft.valueText),
		choices,
		selectedChoiceId: selectedChoiceId(scalar, draft),
		path: pathOf(resolved, draft),
	};
};

const clearedValue = {
	valueText: '',
	optionValue: null,
	query: '',
} as const;

/**
 * Moves the draft to the choice the user picked, dropping anything that came after it.
 */
export const chooseBuilderOption = (
	fields: ReadonlyArray<DsFilterField>,
	draft: BuilderDraft,
	choice: BuilderChoice,
): BuilderDraft => {
	if (choice.kind === 'field') {
		const field = fields.find((item) => item.id === choice.id);

		if (!field) {
			return draft;
		}

		return {
			...emptyBuilderDraft(),
			fieldId: field.id,
			operator: field.type === 'enum' ? defaultOperator(field) : null,
		};
	}

	const resolved = resolveField(fields, draft);

	if (!resolved) {
		return draft;
	}

	if (choice.kind === 'subfield' && resolved.field.type === 'compound') {
		const subfield = resolved.field.subfields.find((item) => item.id === choice.id);

		if (!subfield) {
			return draft;
		}

		return {
			...draft,
			...clearedValue,
			subfieldId: subfield.id,
			operator: subfield.type === 'enum' ? defaultOperator(subfield) : null,
		};
	}

	if (choice.kind === 'operator' && resolved.scalar) {
		const operator = resolved.scalar.operators.find((item) => item.value === choice.id);

		if (!operator) {
			return draft;
		}

		return { ...draft, ...clearedValue, operator: operator.value };
	}

	if (choice.kind === 'option' && resolved.scalar?.type === 'enum') {
		const option = resolved.scalar.options.find((item) => item.value === choice.id);

		if (!option) {
			return draft;
		}

		return { ...draft, query: '', optionValue: option.value };
	}

	if (choice.kind === 'option' && resolved.scalar?.type === 'date') {
		const preset = resolved.scalar.presets?.find((item) => item.value === choice.id);

		if (!preset) {
			return draft;
		}

		return { ...draft, query: '', valueText: preset.value };
	}

	return draft;
};

export const setBuilderInput = (
	fields: ReadonlyArray<DsFilterField>,
	draft: BuilderDraft,
	text: string,
): BuilderDraft => {
	if (isValueInput(fields, draft)) {
		return { ...draft, valueText: text };
	}

	return { ...draft, query: text };
};

/**
 * The condition this draft would add, without an id. `null` until every required step is filled
 * and a number value is a complete number.
 */
export const toFieldCondition = (
	fields: ReadonlyArray<DsFilterField>,
	draft: BuilderDraft,
): Omit<DsFilterFieldCondition, 'id'> | null => {
	const resolved = resolveField(fields, draft);

	if (!resolved?.scalar || !draft.operator) {
		return null;
	}

	const { field, scalar } = resolved;

	if (!scalar.operators.some((operator) => operator.value === draft.operator)) {
		return null;
	}

	const subfield = field.type === 'compound' ? scalar.id : undefined;
	const base = {
		kind: 'field' as const,
		field: field.id,
		...(subfield ? { subfield } : {}),
		operator: draft.operator,
	};

	if (scalar.type === 'enum') {
		if (!draft.optionValue || !scalar.options.some((option) => option.value === draft.optionValue)) {
			return null;
		}

		return { ...base, value: [draft.optionValue] };
	}

	const text = draft.valueText.trim();

	if (scalar.type === 'number') {
		if (!COMPLETE_NUMBER.test(text)) {
			return null;
		}

		return { ...base, value: Number(text) };
	}

	if (!text) {
		return null;
	}

	return { ...base, value: text };
};
