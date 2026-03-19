import { describe, expect, it, vi } from 'vitest';
import { renderHook } from 'vitest-browser-react';

import { useControlled } from './use-controlled';

describe('useControlled', () => {
	describe('controlled mode', () => {
		it('should return the controlled value', async () => {
			const setValue = vi.fn();
			const { result } = await renderHook(() => useControlled('hello', setValue, undefined));

			expect(result.current[0]).toBe('hello');
		});

		it('should call the provided setValue', async () => {
			const setValue = vi.fn();
			const { result, act } = await renderHook(() => useControlled<string>('hello', setValue, ''));

			await act(() => {
				result.current[1]('world');
			});

			expect(setValue).toHaveBeenCalledWith('world');
		});

		it('should ignore the defaultValue when controlled', async () => {
			const setValue = vi.fn();
			const { result } = await renderHook(() => useControlled('controlled', setValue, 'default'));

			expect(result.current[0]).toBe('controlled');
		});
	});

	describe('uncontrolled mode', () => {
		it('should use defaultValue as the initial value', async () => {
			const { result } = await renderHook(() => useControlled<string>(undefined, undefined, 'fallback'));

			expect(result.current[0]).toBe('fallback');
		});

		it('should update internal state via the setter', async () => {
			const { result, act } = await renderHook(() => useControlled<string>(undefined, undefined, 'fallback'));

			expect(result.current[0]).toBe('fallback');

			await act(() => {
				result.current[1]('updated');
			});

			expect(result.current[0]).toBe('updated');
		});
	});

	describe('edge cases', () => {
		it('should treat value-only (no setValue) as uncontrolled', async () => {
			const { result, act } = await renderHook(() => useControlled('initial', undefined, undefined));

			await act(() => {
				result.current[1]('updated');
			});

			expect(result.current[0]).toBe('updated');
		});

		it('should treat setValue-only (no value) as uncontrolled', async () => {
			const setValue = vi.fn();
			const { result, act } = await renderHook(() => useControlled<string>(undefined, setValue, 'default'));

			expect(result.current[0]).toBe('default');

			await act(() => {
				result.current[1]('updated');
			});

			expect(result.current[0]).toBe('updated');
			expect(setValue).not.toHaveBeenCalled();
		});
	});
});
