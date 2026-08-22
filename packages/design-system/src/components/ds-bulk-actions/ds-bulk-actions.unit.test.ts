/* eslint-disable vitest/expect-expect */
import type { ReactNode } from 'react';
import { describe, expectTypeOf, it } from 'vitest';
import type {
	DsBulkAction,
	DsBulkActionCustom,
	DsBulkActionDefault,
	DsBulkActionsProps,
} from './ds-bulk-actions.types';

type BulkActionRender = () => ReactNode;
type BulkActionClickHandler = () => void;

describe('DsBulkAction discriminated union', () => {
	it('allows default actions with icon, label, and onClick', () => {
		expectTypeOf<{ icon: 'edit'; label: string; onClick: BulkActionClickHandler }>().toExtend<DsBulkAction>();
		expectTypeOf<{
			icon: 'edit';
			label: string;
			onClick: BulkActionClickHandler;
			disabled: true;
		}>().toExtend<DsBulkAction>();
	});

	it('allows custom actions with key and render', () => {
		expectTypeOf<{ key: string; render: BulkActionRender }>().toExtend<DsBulkAction>();
	});

	it('requires icon, label, and onClick on the default branch', () => {
		expectTypeOf<{ icon: 'edit'; label: string }>().not.toExtend<DsBulkAction>();
		expectTypeOf<{ icon: 'edit'; onClick: BulkActionClickHandler }>().not.toExtend<DsBulkAction>();
		expectTypeOf<{ label: string; onClick: BulkActionClickHandler }>().not.toExtend<DsBulkAction>();
	});

	it('requires key and render on the custom branch', () => {
		expectTypeOf<{ key: string }>().not.toExtend<DsBulkAction>();
		expectTypeOf<{ render: BulkActionRender }>().not.toExtend<DsBulkAction>();
	});

	it('types the custom branch via key', () => {
		expectTypeOf<DsBulkActionCustom['key']>().toEqualTypeOf<string>();
		expectTypeOf<DsBulkActionCustom['render']>().toEqualTypeOf<BulkActionRender>();
	});

	it('types the default branch without render', () => {
		expectTypeOf<DsBulkActionDefault['label']>().toEqualTypeOf<string>();
		expectTypeOf<DsBulkActionDefault['onClick']>().toEqualTypeOf<BulkActionClickHandler>();
	});

	it('accepts both branches in DsBulkActionsProps.actions', () => {
		expectTypeOf<{
			selectedCount: number;
			onClearSelection: BulkActionClickHandler;
			actions: [
				{ icon: 'edit'; label: string; onClick: BulkActionClickHandler },
				{ key: string; render: BulkActionRender },
			];
		}>().toExtend<DsBulkActionsProps>();
	});
});
