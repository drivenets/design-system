import type { DsFilterCondition, DsFilterFieldCondition } from '../ds-filters-bar.types';
import { createConditionId } from '../ds-filters-bar.utils';
import type { DsFilterQueryClause, DsFilterQueryNode, DsFilterQuerySearch } from './query-language.types';

type ConditionLeaf = DsFilterQueryClause | DsFilterQuerySearch;

const isLeaf = (node: DsFilterQueryNode): node is ConditionLeaf =>
	node.kind === 'clause' || node.kind === 'search';

/**
 * The clauses of a query the **Filter conditions** can hold — clauses joined only by `AND` — or
 * `null` when it uses `OR` or parentheses.
 */
const leavesOf = (node: DsFilterQueryNode): ReadonlyArray<ConditionLeaf> | null => {
	if (isLeaf(node)) {
		return [node];
	}

	if (node.kind === 'and' && node.children.every(isLeaf)) {
		return node.children.filter(isLeaf);
	}

	return null;
};

const valueKey = (value: DsFilterFieldCondition['value']) =>
	typeof value === 'object' && 'from' in value ? [value.from, value.to] : value;

/**
 * Built from the parts that give a condition its meaning, in a fixed order, so conditions from a
 * saved filter or a server match whatever order their keys arrive in
 */
const contentKey = (condition: DsFilterCondition) =>
	JSON.stringify(
		condition.kind === 'search'
			? [condition.kind, condition.text]
			: [
					condition.kind,
					condition.field,
					condition.subfield ?? null,
					condition.operator,
					valueKey(condition.value),
				],
	);

const toCondition = (leaf: ConditionLeaf, id: string): DsFilterCondition =>
	leaf.kind === 'search'
		? { kind: 'search', id, text: leaf.text }
		: {
				kind: 'field',
				id,
				field: leaf.field,
				...(leaf.subfield && { subfield: leaf.subfield }),
				operator: leaf.operator,
				value: leaf.value,
			};

/**
 * Keeps the id of a previous condition with the same content, so re-parsing while the user types
 * does not replace every condition.
 */
export const toConditions = (
	node: DsFilterQueryNode,
	previous: ReadonlyArray<DsFilterCondition>,
): ReadonlyArray<DsFilterCondition> | null => {
	const leaves = leavesOf(node);

	if (!leaves) {
		return null;
	}

	const available = new Map<string, string[]>();

	for (const condition of previous) {
		const key = contentKey(condition);

		available.set(key, [...(available.get(key) ?? []), condition.id]);
	}

	return leaves.map((leaf) => {
		const fresh = toCondition(leaf, '');
		const reused = available.get(contentKey(fresh))?.shift();

		return { ...fresh, id: reused ?? createConditionId() };
	});
};
