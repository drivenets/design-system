import { createElement, Fragment, type FunctionComponent } from 'react';
import { describe, expect, it, vi } from 'vitest';
import type { DsBulkActionsItemProps } from './ds-bulk-actions.types';
import {
	getBulkActionItems,
	isItemElement,
	isSubmenuEntry,
	itemToOverflowEntry,
	resolveItemWidth,
} from './ds-bulk-actions.utils';

const StubItem: FunctionComponent<DsBulkActionsItemProps> = () => null;
StubItem.displayName = 'DsBulkActions.Item';

const createItem = (props: DsBulkActionsItemProps, key?: string) =>
	createElement(StubItem, { key, ...props });

const clickItem: DsBulkActionsItemProps = { icon: 'edit', label: 'Edit', onClick: () => {} };

describe('resolveItemWidth', () => {
	it('uses the fixed column when width is omitted', () => {
		expect(resolveItemWidth()).toEqual({ mode: 'fixed' });
	});

	it('uses the fixed column when width is fixed', () => {
		expect(resolveItemWidth('fixed')).toEqual({ mode: 'fixed' });
	});

	it('hugs the label when width is fit-content', () => {
		expect(resolveItemWidth('fit-content')).toEqual({ mode: 'fit-content' });
	});

	it('sets a custom pixel width via CSS variable', () => {
		expect(resolveItemWidth(120)).toEqual({
			mode: 'custom',
			buttonStyle: { '--ds-bulk-actions-item-width': '120px' },
		});
	});
});

describe('itemToOverflowEntry', () => {
	it('maps a click item to a leaf entry that keeps onSelect', () => {
		const onClick = vi.fn();
		const item: DsBulkActionsItemProps = {
			icon: 'edit',
			label: 'Edit',
			disabled: true,
			onClick,
		};

		expect(itemToOverflowEntry(item, 2)).toEqual({
			value: 'overflow-2',
			label: 'Edit',
			icon: 'edit',
			disabled: true,
			onSelect: onClick,
		});
	});

	it('maps a menu item to a branch entry that keeps the nested menu', () => {
		const menu = [{ value: 'mail', label: 'Mail', icon: 'mail' as const }];
		const item: DsBulkActionsItemProps = {
			icon: 'share',
			label: 'Share',
			menu,
		};

		expect(itemToOverflowEntry(item, 0)).toEqual({
			value: 'overflow-0',
			label: 'Share',
			icon: 'share',
			disabled: undefined,
			menu,
		});
	});
});

describe('isItemElement', () => {
	it('matches an element whose type carries the Item displayName', () => {
		expect(isItemElement(createItem(clickItem))).toBe(true);
	});

	it('rejects other elements, strings, and nullish children', () => {
		expect(isItemElement(createElement('div'))).toBe(false);
		expect(isItemElement('Notify')).toBe(false);
		expect(isItemElement(null)).toBe(false);
		expect(isItemElement(undefined)).toBe(false);
	});
});

describe('getBulkActionItems', () => {
	it('collects only Item elements and drops other children', () => {
		const first = createItem(clickItem, 'a');
		const second = createItem({ icon: 'delete_outline', label: 'Delete', onClick: () => {} }, 'b');

		const items = getBulkActionItems([first, 'text', createElement('span'), second, null]);

		expect(items).toEqual([first, second]);
	});

	it('flattens Item elements nested inside fragments', () => {
		const first = createItem(clickItem, 'a');
		const second = createItem({ icon: 'share', label: 'Share', onClick: () => {} }, 'b');
		const fragment = createElement(Fragment, null, second);

		expect(getBulkActionItems([first, fragment])).toEqual([first, second]);
	});

	it('returns an empty array when there are no Item children', () => {
		expect(getBulkActionItems(createElement('div'))).toEqual([]);
	});
});

describe('isSubmenuEntry', () => {
	it('identifies a branch entry with a nested menu', () => {
		expect(
			isSubmenuEntry({
				value: 'share',
				label: 'Share',
				menu: [{ value: 'mail', label: 'Mail' }],
			}),
		).toBe(true);
	});

	it('rejects a leaf entry with onSelect', () => {
		expect(
			isSubmenuEntry({
				value: 'edit',
				label: 'Edit',
				onSelect: () => undefined,
			}),
		).toBe(false);
	});
});
