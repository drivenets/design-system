/* eslint-disable vitest/expect-expect */
import { describe, expect, expectTypeOf, it } from 'vitest';
import type {
	DsBulkActionsItemProps,
	DsBulkActionsMenuEntry,
	DsBulkActionsProps,
} from './ds-bulk-actions.types';
import { computeBulkActionsOverflow } from './hooks/compute-bulk-actions-overflow';

type ClickHandler = () => void;

const chrome = {
	badgeWidth: 60,
	dismissWidth: 40,
	labelWidth: 120,
	gap: 4,
	moreWidth: 70,
};

describe('DsBulkActionsItemProps discriminated union', () => {
	it('allows click items with icon, label, and onClick', () => {
		expectTypeOf<{ icon: 'edit'; label: string; onClick: ClickHandler }>().toExtend<DsBulkActionsItemProps>();
		expectTypeOf<{
			icon: 'edit';
			label: string;
			onClick: ClickHandler;
			disabled: true;
			width: 120;
		}>().toExtend<DsBulkActionsItemProps>();
		expectTypeOf<{
			icon: 'edit';
			label: string;
			onClick: ClickHandler;
			width: 'fixed';
		}>().toExtend<DsBulkActionsItemProps>();
		expectTypeOf<{
			icon: 'edit';
			label: string;
			onClick: ClickHandler;
			width: 'fit-content';
		}>().toExtend<DsBulkActionsItemProps>();
	});

	it('allows menu items with icon, label, and menu', () => {
		expectTypeOf<{
			icon: 'share';
			label: string;
			menu: DsBulkActionsMenuEntry[];
		}>().toExtend<DsBulkActionsItemProps>();
		expectTypeOf<{
			icon: 'share';
			label: string;
			disabled: true;
			menu: Array<
				| {
						value: string;
						label: string;
						icon: 'mail';
						onSelect: ClickHandler;
						disabled: false;
						variant: 'error';
				  }
				| {
						value: string;
						label: string;
						menu: Array<{ value: string; label: string; onSelect: ClickHandler }>;
				  }
			>;
		}>().toExtend<DsBulkActionsItemProps>();
	});

	it('rejects mixing onClick with menu', () => {
		expectTypeOf<{
			icon: 'edit';
			label: string;
			onClick: ClickHandler;
			menu: DsBulkActionsMenuEntry[];
		}>().not.toExtend<DsBulkActionsItemProps>();
	});

	it('rejects children composition', () => {
		expectTypeOf<{ children: string }>().not.toExtend<DsBulkActionsItemProps>();
		expectTypeOf<{
			icon: 'edit';
			label: string;
			onClick: ClickHandler;
			children: string;
		}>().not.toExtend<DsBulkActionsItemProps>();
		expectTypeOf<{
			icon: 'share';
			label: string;
			menu: DsBulkActionsMenuEntry[];
			children: string;
		}>().not.toExtend<DsBulkActionsItemProps>();
	});

	it('requires icon, label, and either onClick or menu', () => {
		expectTypeOf<{ icon: 'edit'; label: string }>().not.toExtend<DsBulkActionsItemProps>();
		expectTypeOf<{ icon: 'edit'; onClick: ClickHandler }>().not.toExtend<DsBulkActionsItemProps>();
		expectTypeOf<{ label: string; onClick: ClickHandler }>().not.toExtend<DsBulkActionsItemProps>();
		expectTypeOf<{ icon: 'share'; menu: DsBulkActionsMenuEntry[] }>().not.toExtend<DsBulkActionsItemProps>();
	});
});

describe('DsBulkActionsMenuEntry', () => {
	it('allows a leaf with onSelect or a branch with nested menu, not both', () => {
		expectTypeOf<{
			value: string;
			label: string;
			icon: 'mail';
			onSelect: ClickHandler;
			disabled: true;
			variant: 'error';
		}>().toExtend<DsBulkActionsMenuEntry>();
		expectTypeOf<{
			value: string;
			label: string;
			menu: Array<{ value: string; label: string; onSelect: ClickHandler }>;
		}>().toExtend<DsBulkActionsMenuEntry>();
		expectTypeOf<{ value: string; label: string }>().toExtend<DsBulkActionsMenuEntry>();
		expectTypeOf<{
			value: string;
			label: string;
			onSelect: ClickHandler;
			menu: DsBulkActionsMenuEntry[];
		}>().not.toExtend<DsBulkActionsMenuEntry>();
	});
});

describe('DsBulkActionsProps', () => {
	it('accepts children action slots, menuPlacement, and locale.moreActionsLabel', () => {
		expectTypeOf<{
			selectedCount: number;
			onClearSelection: ClickHandler;
			menuPlacement: 'top';
			locale: { moreActionsLabel: string };
		}>().toExtend<DsBulkActionsProps>();

		expectTypeOf<DsBulkActionsProps>().toHaveProperty('children');
		expectTypeOf<DsBulkActionsProps>().toHaveProperty('menuPlacement');
		expectTypeOf<DsBulkActionsProps>().not.toHaveProperty('actions');
	});
});

describe('computeBulkActionsOverflow', () => {
	it('keeps every item visible when the bar is wide enough', () => {
		expect(
			computeBulkActionsOverflow({
				...chrome,
				containerWidth: 600,
				itemWidths: [70, 70, 70, 70],
			}),
		).toEqual({ visibleCount: 4, showMore: false, summaryLabelHidden: false });
	});

	it('collapses rightmost items into More and keeps the summary label', () => {
		expect(
			computeBulkActionsOverflow({
				...chrome,
				containerWidth: 450,
				itemWidths: [70, 70, 70, 70, 70],
			}),
		).toEqual({ visibleCount: 2, showMore: true, summaryLabelHidden: false });
	});

	it('hides the summary label only after collapsing to one visible action', () => {
		expect(
			computeBulkActionsOverflow({
				...chrome,
				containerWidth: 250,
				itemWidths: [70, 70, 70, 70, 70],
			}),
		).toEqual({ visibleCount: 1, showMore: true, summaryLabelHidden: true });
	});

	it('does not render More when a single item remains', () => {
		expect(
			computeBulkActionsOverflow({
				...chrome,
				containerWidth: 200,
				itemWidths: [70],
			}),
		).toEqual({ visibleCount: 1, showMore: false, summaryLabelHidden: true });
	});

	it('returns no actions when the bar has none', () => {
		expect(
			computeBulkActionsOverflow({
				...chrome,
				containerWidth: 400,
				itemWidths: [],
			}),
		).toEqual({ visibleCount: 0, showMore: false, summaryLabelHidden: false });
	});
});
