import type { DsFilterCondition, DsFilterDocument, DsFilterDocumentInput } from './ds-filters-bar.types';

const POSITION_ID_PREFIX = 'filter-condition-';

const hasEveryId = (input: DsFilterDocumentInput): input is DsFilterDocument =>
	input.conditions !== undefined &&
	input.query !== undefined &&
	input.conditions.every((condition) => condition.id !== undefined);

/**
 * The full **Filter document** for `input`. A condition without an `id` gets
 * `filter-condition-<position>`, suffixed until no other condition of the document has it, so the
 * same input always gets the same ids. A document that is already full is returned as it is.
 */
export const toFilterDocument = (input: DsFilterDocumentInput): DsFilterDocument => {
	if (hasEveryId(input)) {
		return input;
	}

	const conditions = input.conditions ?? [];
	const taken = new Set(conditions.flatMap((condition) => condition.id ?? []));

	const withIds = conditions.map((condition, index): DsFilterCondition => {
		if (condition.id !== undefined) {
			return { ...condition, id: condition.id };
		}

		let id = `${POSITION_ID_PREFIX}${String(index)}`;

		for (let attempt = 1; taken.has(id); attempt++) {
			id = `${POSITION_ID_PREFIX}${String(index)}-${String(attempt)}`;
		}

		taken.add(id);

		return { ...condition, id };
	});

	return { conditions: withIds, query: input.query ?? null };
};
