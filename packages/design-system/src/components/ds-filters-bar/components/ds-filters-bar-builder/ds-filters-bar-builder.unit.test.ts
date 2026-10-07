import { describe, expect, it } from 'vitest';
import type { DsFilterField, DsFilterFieldCondition } from '../../ds-filters-bar.types';
import { defaultDsFiltersBarBuilderLocale } from './ds-filters-bar-builder.types';
import {
	type BuilderDraft,
	builderDraftFromCondition,
	chooseBuilderOption,
	describeBuilderStep,
	emptyBuilderDraft,
	setBuilderInput,
	toFieldCondition,
} from './ds-filters-bar-builder.utils';

const FIELDS: ReadonlyArray<DsFilterField> = [
	{
		type: 'compound',
		id: 'input',
		label: 'Input',
		subfields: [
			{
				type: 'text',
				id: 'name',
				label: 'Name',
				operators: [
					{ value: '~', label: 'Contains' },
					{ value: '=', label: 'Equal' },
				],
			},
			{ type: 'text', id: 'vendor', label: 'Vendor', operators: [{ value: '=', label: 'Equal' }] },
		],
	},
	{ type: 'text', id: 'output', label: 'Output', operators: [{ value: '=', label: 'Equal' }] },
	{
		type: 'enum',
		id: 'status',
		label: 'Status',
		operators: [
			{ value: '=', label: 'equals' },
			{ value: '!=', label: 'not equals' },
		],
		options: [
			{ value: 'active', label: 'Active' },
			{ value: 'pending', label: 'Pending' },
		],
	},
	{ type: 'number', id: 'parents', label: 'Parents', operators: [{ value: '>', label: 'greater than' }] },
	{
		type: 'date',
		id: 'lastRun',
		label: 'Last run',
		operators: [{ value: '=', label: 'is' }],
		presets: [{ value: 'today', label: 'Today' }],
	},
];

const SUGGESTED = ['input', 'missing', 'status', 'input'];

const viewOf = (draft: BuilderDraft) =>
	describeBuilderStep(FIELDS, draft, SUGGESTED, defaultDsFiltersBarBuilderLocale);

const choose = (draft: BuilderDraft, id: string) => {
	const choice = viewOf(draft).choices.find((item) => item.id === id);

	if (!choice) {
		throw new Error(`No choice ${id}`);
	}

	return chooseBuilderOption(FIELDS, draft, choice);
};

describe('query builder draft', () => {
	it('offers suggested fields, then searches every field', () => {
		expect(viewOf(emptyBuilderDraft()).choices.map((choice) => choice.id)).toEqual(['input', 'status']);

		const searching = setBuilderInput(FIELDS, emptyBuilderDraft(), 'out');

		expect(viewOf(searching).choices.map((choice) => choice.label)).toEqual(['Output']);
	});

	it('builds a compound text condition and emphasizes only the value', () => {
		let draft = choose(emptyBuilderDraft(), 'input');
		draft = choose(draft, 'name');
		draft = choose(draft, '~');
		draft = setBuilderInput(FIELDS, draft, ' AAA ');

		expect(viewOf(draft).path.map((segment) => [segment.text, segment.emphasized])).toEqual([
			['Input', false],
			['Name', false],
			['Contains', false],
			['AAA', true],
		]);
		expect(toFieldCondition(FIELDS, draft)).toEqual({
			kind: 'field',
			field: 'input',
			subfield: 'name',
			operator: '~',
			value: 'AAA',
		});
	});

	it('skips the operator for an enum and stores one option', () => {
		let draft = choose(emptyBuilderDraft(), 'status');

		expect(viewOf(draft).caption).toBe('Select a value');
		expect(viewOf(draft).choices.map((choice) => choice.label)).toEqual(['Active', 'Pending']);

		draft = choose(draft, 'active');

		expect(toFieldCondition(FIELDS, draft)).toEqual({
			kind: 'field',
			field: 'status',
			operator: '=',
			value: ['active'],
		});
	});

	it('accepts only a complete number', () => {
		let draft = setBuilderInput(FIELDS, emptyBuilderDraft(), 'par');
		draft = choose(draft, 'parents');
		draft = choose(draft, '>');
		draft = setBuilderInput(FIELDS, draft, '12.');

		expect(toFieldCondition(FIELDS, draft)).toBeNull();

		draft = setBuilderInput(FIELDS, draft, '12.5');

		expect(toFieldCondition(FIELDS, draft)?.value).toBe(12.5);
	});

	it('stores a date preset value and shows its label', () => {
		let draft = setBuilderInput(FIELDS, emptyBuilderDraft(), 'last');
		draft = choose(draft, 'lastRun');
		draft = choose(draft, '=');
		draft = choose(draft, 'today');

		expect(viewOf(draft).inputValue).toBe('Today');
		expect(viewOf(draft).path.at(-1)).toEqual({ key: 'value', text: 'Today', emphasized: true });
		expect(toFieldCondition(FIELDS, draft)?.value).toBe('today');
	});

	it('clears the search once a field is chosen', () => {
		const searching = setBuilderInput(FIELDS, emptyBuilderDraft(), 'stat');
		const draft = choose(searching, 'status');

		expect(draft.query).toBe('');
		expect(viewOf(draft).placeholder).toBe('Search value');
	});
});

describe('builderDraftFromCondition', () => {
	it.each<DsFilterFieldCondition>([
		{ kind: 'field', id: 'c1', field: 'input', subfield: 'name', operator: '~', value: 'AAA' },
		{ kind: 'field', id: 'c2', field: 'status', operator: '!=', value: ['pending'] },
		{ kind: 'field', id: 'c3', field: 'parents', operator: '>', value: 12.5 },
		{ kind: 'field', id: 'c4', field: 'lastRun', operator: '=', value: 'today' },
	])('fills every step from a condition the builder can hold: $field', (condition) => {
		const rebuilt = toFieldCondition(FIELDS, builderDraftFromCondition(FIELDS, condition));

		expect({ ...rebuilt, id: condition.id }).toEqual(condition);
	});

	it('shows the condition as the selection path', () => {
		const draft = builderDraftFromCondition(FIELDS, {
			kind: 'field',
			id: 'c1',
			field: 'input',
			subfield: 'name',
			operator: '~',
			value: 'AAA',
		});

		expect(viewOf(draft).path.map((segment) => segment.text)).toEqual(['Input', 'Name', 'Contains', 'AAA']);
		expect(viewOf(draft).inputValue).toBe('AAA');
	});

	it('opens an enum with several values at its value step, keeping the operator', () => {
		const draft = builderDraftFromCondition(FIELDS, {
			kind: 'field',
			id: 'c1',
			field: 'status',
			operator: '!=',
			value: ['active', 'pending'],
		});

		expect(draft).toEqual({ ...emptyBuilderDraft(), fieldId: 'status', operator: '!=' });
		expect(viewOf(draft).caption).toBe('Select a value');
		expect(toFieldCondition(FIELDS, draft)).toBeNull();
	});

	it('opens a range at its value step with the value empty', () => {
		const draft = builderDraftFromCondition(FIELDS, {
			kind: 'field',
			id: 'c1',
			field: 'lastRun',
			operator: '=',
			value: { from: '2024-01-01', to: null },
		});

		expect(draft).toEqual({ ...emptyBuilderDraft(), fieldId: 'lastRun', operator: '=' });
		expect(viewOf(draft).placeholder).toBe('Value');
	});

	it('drops an operator the field does not offer, reopening at the operator step', () => {
		const draft = builderDraftFromCondition(FIELDS, {
			kind: 'field',
			id: 'c1',
			field: 'input',
			subfield: 'vendor',
			operator: '~',
			value: 'Acme',
		});

		expect(draft).toEqual({ ...emptyBuilderDraft(), fieldId: 'input', subfieldId: 'vendor' });
		expect(viewOf(draft).caption).toBe('Select an operator');
	});

	it('starts empty for a field missing from the schema', () => {
		expect(
			builderDraftFromCondition(FIELDS, {
				kind: 'field',
				id: 'c1',
				field: 'gone',
				operator: '=',
				value: 'x',
			}),
		).toEqual(emptyBuilderDraft());
	});
});
