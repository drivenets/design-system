import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsCommentIndicator } from '../index';

describe('DsCommentIndicator', () => {
	it('should render placeholder type with "Add comment" label', async () => {
		await page.render(<DsCommentIndicator type="placeholder" onClick={vi.fn()} />);

		const indicator = page.getByRole('button', { name: /add comment/i });

		await expect.element(indicator).toBeInTheDocument();
		await expect.element(indicator).toHaveAttribute('aria-label', 'Add comment');
	});

	it('should render default type with "View comment" label', async () => {
		await page.render(
			<DsCommentIndicator type="default" avatarSrc="https://i.pravatar.cc/40?img=1" onClick={vi.fn()} />,
		);

		const indicator = page.getByRole('button', { name: /view comment/i });

		await expect.element(indicator).toBeInTheDocument();
		await expect.element(indicator).toHaveAttribute('aria-label', 'View comment');
	});

	it('should render action-required type with "View comment" label and actionRequired class', async () => {
		await page.render(
			<DsCommentIndicator
				type="action-required"
				avatarSrc="https://i.pravatar.cc/40?img=2"
				onClick={vi.fn()}
			/>,
		);

		const indicator = page.getByRole('button', { name: /view comment/i });

		await expect.element(indicator).toBeInTheDocument();
		await expect.element(indicator).toHaveClass(/actionRequired/);
	});
});
