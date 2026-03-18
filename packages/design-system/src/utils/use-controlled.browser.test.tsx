import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';

import { useControlled } from './use-controlled';

describe('useControlled', () => {
	describe('controlled mode', () => {
		it('should return the controlled value', async () => {
			const setValue = vi.fn();

			const Wrapper = () => {
				const [value] = useControlled('hello', setValue, undefined);
				return <span>{value}</span>;
			};

			await page.render(<Wrapper />);

			await expect.element(page.getByText('hello')).toBeVisible();
		});

		it('should call the provided setValue', async () => {
			const setValue = vi.fn();

			const Wrapper = () => {
				const [value, set] = useControlled<string>('hello', setValue, '');
				return (
					<button type="button" onClick={() => set('world')}>
						{value}
					</button>
				);
			};

			await page.render(<Wrapper />);
			await page.getByRole('button').click();

			expect(setValue).toHaveBeenCalledWith('world');
		});

		it('should ignore the defaultValue when controlled', async () => {
			const setValue = vi.fn();

			const Wrapper = () => {
				const [value] = useControlled('controlled', setValue, 'default');
				return <span>{value}</span>;
			};

			await page.render(<Wrapper />);

			await expect.element(page.getByText('controlled')).toBeVisible();
		});
	});

	describe('uncontrolled mode', () => {
		it('should use defaultValue as the initial value', async () => {
			const Wrapper = () => {
				const [value] = useControlled<string>(undefined, undefined, 'fallback');
				return <span>{value}</span>;
			};

			await page.render(<Wrapper />);

			await expect.element(page.getByText('fallback')).toBeVisible();
		});

		it('should update internal state via the setter', async () => {
			const Wrapper = () => {
				const [value, setValue] = useControlled<string>(undefined, undefined, 'fallback');
				return (
					<button type="button" onClick={() => setValue('updated')}>
						{value}
					</button>
				);
			};

			await page.render(<Wrapper />);
			await expect.element(page.getByText('fallback')).toBeVisible();

			await page.getByRole('button').click();

			await expect.element(page.getByText('updated')).toBeVisible();
		});
	});

	describe('edge cases', () => {
		it('should treat value-only (no setValue) as uncontrolled', async () => {
			const Wrapper = () => {
				const [value, setValue] = useControlled('initial', undefined, undefined);
				return (
					<button type="button" onClick={() => setValue('updated')}>
						{value}
					</button>
				);
			};

			await page.render(<Wrapper />);
			await page.getByRole('button').click();

			await expect.element(page.getByText('updated')).toBeVisible();
		});

		it('should treat setValue-only (no value) as uncontrolled', async () => {
			const setValue = vi.fn();

			const Wrapper = () => {
				const [value, set] = useControlled<string>(undefined, setValue, 'default');
				return (
					<button type="button" onClick={() => set('updated')}>
						{value}
					</button>
				);
			};

			await page.render(<Wrapper />);
			await expect.element(page.getByText('default')).toBeVisible();

			await page.getByRole('button').click();

			await expect.element(page.getByText('updated')).toBeVisible();
			expect(setValue).not.toHaveBeenCalled();
		});
	});
});
