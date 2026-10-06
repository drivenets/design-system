import type { DsFilterCondition, DsFilterFieldCondition, DsFilterRange } from '../ds-filters-bar.types';

const AND = ' AND ';

const quote = (text: string) => `"${text.replace(/[\\"]/g, (char) => `\\${char}`)}"`;

const formatAtom = (value: string | number) => (typeof value === 'number' ? String(value) : quote(value));

const isRange = (
	value: DsFilterFieldCondition['value'],
): value is DsFilterRange<number> | DsFilterRange<string> => typeof value === 'object' && 'from' in value;

const serializeFieldCondition = (condition: DsFilterFieldCondition): string => {
	const { value, operator } = condition;
	const path = condition.subfield ? `${condition.field}.${condition.subfield}` : condition.field;

	if (isRange(value)) {
		if (value.from === null && value.to === null) {
			return `${path} = ()`;
		}

		return [
			value.from === null ? '' : `${path} >= ${formatAtom(value.from)}`,
			value.to === null ? '' : `${path} <= ${formatAtom(value.to)}`,
		]
			.filter(Boolean)
			.join(AND);
	}

	if (typeof value !== 'object') {
		return `${path} ${operator} ${formatAtom(value)}`;
	}

	const [only, ...others] = value;
	const negated = operator === '!=' || operator === 'NOT IN';

	if (!value.length) {
		return `${path} ${negated ? 'NOT IN' : 'IN'} ()`;
	}

	if (only !== undefined && !others.length && (operator === '=' || operator === '!=')) {
		return `${path} ${operator} ${formatAtom(only)}`;
	}

	return `${path} ${negated ? 'NOT IN' : 'IN'} (${value.map(formatAtom).join(', ')})`;
};

/**
 * Writes the conditions in the query language, joined by `AND`. The output parses back to the
 * same conditions, except that a range comes back as two clauses.
 */
export const serializeFilterQuery = (conditions: ReadonlyArray<DsFilterCondition>): string =>
	conditions
		.map((condition) =>
			condition.kind === 'search' ? quote(condition.text) : serializeFieldCondition(condition),
		)
		.filter(Boolean)
		.join(AND);
