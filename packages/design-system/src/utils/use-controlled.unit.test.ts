import { describe, expect, it, vi } from 'vitest';
import { useState } from 'react';

const mockSetInternal = vi.fn();

vi.mock('react', () => ({
	useState: vi.fn((init: unknown) => [init, mockSetInternal]),
}));

import { useControlled } from './use-controlled';

describe('useControlled', () => {
	describe('controlled mode', () => {
		it('should return the provided value and setValue', () => {
			const setValue = vi.fn();
			const [resolved, resolvedSet] = useControlled('hello', setValue);

			expect(resolved).toBe('hello');
			expect(resolvedSet).toBe(setValue);
		});

		it('should ignore the defaultValue when controlled', () => {
			const setValue = vi.fn();
			const [resolved] = useControlled('controlled', setValue, 'default');

			expect(resolved).toBe('controlled');
		});
	});

	describe('uncontrolled mode', () => {
		it('should return internal state when value and setValue are undefined', () => {
			const [resolved, resolvedSet] = useControlled<string>(undefined, undefined, 'fallback');

			expect(resolved).toBe('fallback');
			expect(resolvedSet).toBe(mockSetInternal);
		});

		it('should use defaultValue as the initial state', () => {
			useControlled<number>(undefined, undefined, 42);

			expect(useState).toHaveBeenCalledWith(42);
		});

		it('should fall back to undefined when no defaultValue is given', () => {
			const [resolved] = useControlled<string>();

			expect(resolved).toBeUndefined();
		});
	});

	describe('edge cases', () => {
		it('should treat value-only (no setValue) as uncontrolled', () => {
			const [, resolvedSet] = useControlled('value-only');

			expect(resolvedSet).toBe(mockSetInternal);
		});

		it('should treat setValue-only (no value) as uncontrolled', () => {
			const setValue = vi.fn();
			const [, resolvedSet] = useControlled(undefined, setValue, 'default');

			expect(resolvedSet).toBe(mockSetInternal);
		});
	});
});
