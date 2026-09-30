import type {
	DsFilterCondition,
	DsFilterField,
	DsFilterScalarField,
	DsFilterValue,
} from '../../../ds-filters-bar.types';
import { serializeFilterQuery } from '../../../query-language';

const EXAMPLE_FIELD_COUNT = 2;
const EXAMPLE_NUMBER = 10;
const EXAMPLE_DATE = '2026-01-01';
const EXAMPLE_TEXT = 'value';
const EXAMPLE_SEARCH = '"timeout"';

const exampleValue = (field: DsFilterScalarField): DsFilterValue => {
	switch (field.type) {
		case 'enum':
			return field.options.slice(0, 1).map((option) => option.value);
		case 'number':
			return EXAMPLE_NUMBER;
		case 'date':
			return field.presets?.[0]?.value ?? EXAMPLE_DATE;
		default:
			return EXAMPLE_TEXT;
	}
};

/**
 * A query built from the first fields of the schema, so the example always parses
 */
export const buildExampleQuery = (fields: ReadonlyArray<DsFilterField>): string => {
	const conditions = fields.slice(0, EXAMPLE_FIELD_COUNT).flatMap((field): DsFilterCondition[] => {
		const subfield = field.type === 'compound' ? field.subfields[0] : undefined;
		const scalar = field.type === 'compound' ? subfield : field;
		const operator = scalar?.operators[0];

		if (!scalar || !operator) {
			return [];
		}

		return [
			{
				kind: 'field',
				id: field.id,
				field: field.id,
				...(subfield && { subfield: subfield.id }),
				operator: operator.value,
				value: exampleValue(scalar),
			},
		];
	});

	return serializeFilterQuery(conditions) || EXAMPLE_SEARCH;
};
