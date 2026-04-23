import { describe, expect, it, vi } from 'vitest';
import { renderHook } from 'vitest-browser-react';

import { useCheckboxSelectAll } from '../hooks/use-checkbox-select-all';

const items = ['react', 'solid', 'vue'] as const;

describe('useCheckboxSelectAll', () => {
	it('should return false when nothing is selected', async () => {
		const { result } = await renderHook(() =>
			useCheckboxSelectAll({ value: [], allValues: items, onValueChange: vi.fn() }),
		);

		expect(result.current.selectAllState).toBe(false);
		expect(result.current.selectedCount).toBe(0);
		expect(result.current.selectableCount).toBe(3);
	});

	it('should return indeterminate when some values are selected', async () => {
		const { result } = await renderHook(() =>
			useCheckboxSelectAll({ value: ['react'], allValues: items, onValueChange: vi.fn() }),
		);

		expect(result.current.selectAllState).toBe('indeterminate');
		expect(result.current.selectedCount).toBe(1);
	});

	it('should return true when all selectable values are selected', async () => {
		const { result } = await renderHook(() =>
			useCheckboxSelectAll({ value: [...items], allValues: items, onValueChange: vi.fn() }),
		);

		expect(result.current.selectAllState).toBe(true);
		expect(result.current.selectedCount).toBe(3);
	});

	it('should select all selectable values on toggle true', async () => {
		const onValueChange = vi.fn();
		const { result, act } = await renderHook(() =>
			useCheckboxSelectAll({ value: [], allValues: items, onValueChange }),
		);

		await act(() => {
			result.current.onSelectAllChange(true);
		});

		expect(onValueChange).toHaveBeenCalledWith(['react', 'solid', 'vue']);
	});

	it('should clear selectable values on toggle false', async () => {
		const onValueChange = vi.fn();
		const { result, act } = await renderHook(() =>
			useCheckboxSelectAll({ value: [...items], allValues: items, onValueChange }),
		);

		await act(() => {
			result.current.onSelectAllChange(false);
		});

		expect(onValueChange).toHaveBeenCalledWith([]);
	});

	it('should clear selectable values when called with indeterminate', async () => {
		const onValueChange = vi.fn();
		const { result, act } = await renderHook(() =>
			useCheckboxSelectAll({ value: ['react'], allValues: items, onValueChange }),
		);

		await act(() => {
			result.current.onSelectAllChange('indeterminate');
		});

		expect(onValueChange).toHaveBeenCalledWith([]);
	});

	it('should ignore non-selectable values when computing tri-state', async () => {
		const isSelectable = (value: (typeof items)[number]) => value !== 'vue';

		const { result } = await renderHook(() =>
			useCheckboxSelectAll({
				value: ['react', 'solid'],
				allValues: items,
				onValueChange: vi.fn(),
				isSelectable,
			}),
		);

		expect(result.current.selectAllState).toBe(true);
		expect(result.current.selectableCount).toBe(2);
		expect(result.current.selectedCount).toBe(2);
	});

	it('should preserve non-selectable selected values when toggling', async () => {
		const onValueChange = vi.fn();
		const isSelectable = (value: (typeof items)[number]) => value !== 'vue';

		const { result, act } = await renderHook(() =>
			useCheckboxSelectAll({
				value: ['vue'],
				allValues: items,
				onValueChange,
				isSelectable,
			}),
		);

		await act(() => {
			result.current.onSelectAllChange(true);
		});

		expect(onValueChange).toHaveBeenCalledWith(['vue', 'react', 'solid']);

		await act(() => {
			result.current.onSelectAllChange(false);
		});

		expect(onValueChange).toHaveBeenLastCalledWith(['vue']);
	});

	it('should return false when there are no selectable values', async () => {
		const { result } = await renderHook(() =>
			useCheckboxSelectAll({
				value: [],
				allValues: items,
				onValueChange: vi.fn(),
				isSelectable: () => false,
			}),
		);

		expect(result.current.selectAllState).toBe(false);
		expect(result.current.selectableCount).toBe(0);
	});
});
