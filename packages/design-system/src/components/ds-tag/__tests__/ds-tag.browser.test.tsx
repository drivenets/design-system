import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';

import DsTag from '../ds-tag';
import { DsIcon } from '../../ds-icon';

describe('DsTag', () => {
	it('renders the label and exposes no button role without handlers', async () => {
		await page.render(<DsTag label="Default Tag" />);

		await expect.element(page.getByText('Default Tag')).toBeInTheDocument();
		await expect.element(page.getByRole('button')).not.toBeInTheDocument();
	});

	it('fires onClick on every click', async () => {
		const onClick = vi.fn();
		await page.render(<DsTag label="Clickable Tag" onClick={onClick} />);

		const tag = page.getByRole('button', { name: 'Clickable Tag' });

		await tag.click();
		expect(onClick).toHaveBeenCalledTimes(1);

		await tag.click();
		expect(onClick).toHaveBeenCalledTimes(2);
	});

	it('toggles aria-pressed on click and removes itself on delete (controlled)', async () => {
		function Controlled() {
			const [deleted, setDeleted] = useState(false);
			const [selected, setSelected] = useState(true);

			if (deleted) {
				return <span>Poof! Deleted!</span>;
			}

			return (
				<DsTag
					selected={selected}
					label="Controlled"
					onDelete={() => setDeleted(true)}
					onClick={() => setSelected(!selected)}
				/>
			);
		}

		await page.render(<Controlled />);

		const tag = page.getByRole('button', { name: 'Controlled' });
		await expect.element(tag).toHaveAttribute('aria-pressed', 'true');

		await tag.click();
		await expect.element(tag).not.toHaveAttribute('aria-pressed');

		await tag.click();
		await expect.element(tag).toHaveAttribute('aria-pressed', 'true');

		await tag.hover();
		await page.getByRole('button', { name: 'Delete tag' }).click();

		await expect.element(page.getByText('Poof! Deleted!')).toBeInTheDocument();
		await expect.element(tag).not.toBeInTheDocument();
	});

	it('does not render a delete button or fire callbacks when disabled', async () => {
		const onClick = vi.fn();
		const onDelete = vi.fn();
		await page.render(<DsTag label="Disabled Tag" selected disabled onClick={onClick} onDelete={onDelete} />);

		const tag = page.getByRole('button', { name: 'Disabled Tag' });
		await expect.element(tag).toHaveAttribute('aria-disabled', 'true');
		await expect.element(page.getByRole('button', { name: 'Delete tag' })).not.toBeInTheDocument();

		await tag.click({ force: true });
		expect(onClick).not.toHaveBeenCalled();
		expect(onDelete).not.toHaveBeenCalled();
	});
});

describe('DsTag variants', () => {
	it('renders the include icon', async () => {
		await page.render(<DsTag label="Include Tag" variant="include" />);

		await expect.element(page.getByText('Include Tag')).toBeInTheDocument();
		await expect.element(page.getByText('check_circle')).toBeInTheDocument();
	});

	it('renders the exclude icon', async () => {
		await page.render(<DsTag label="Exclude Tag" variant="exclude" />);

		await expect.element(page.getByText('do_not_disturb_on')).toBeInTheDocument();
	});

	it('renders a custom slot icon instead of the variant icon', async () => {
		await page.render(
			<DsTag
				label="Custom Icon Tag"
				variant="include"
				slots={{ icon: <DsIcon icon="star" size="tiny" /> }}
			/>,
		);

		await expect.element(page.getByText('star')).toBeInTheDocument();
		await expect.element(page.getByText('check_circle')).not.toBeInTheDocument();
	});
});

describe('DsTag keyboard interaction', () => {
	it('fires onClick when Enter or Space is pressed on the tag', async () => {
		const onClick = vi.fn();
		await page.render(<DsTag label="Keyboard Tag" onClick={onClick} />);

		(page.getByRole('button', { name: 'Keyboard Tag' }).element() as HTMLElement).focus();

		await userEvent.keyboard('{Enter}');
		expect(onClick).toHaveBeenCalledTimes(1);

		await userEvent.keyboard(' ');
		expect(onClick).toHaveBeenCalledTimes(2);
	});

	it('fires onDelete when Backspace or Delete is pressed on the tag', async () => {
		const onClick = vi.fn();
		const onDelete = vi.fn();
		await page.render(<DsTag label="Keyboard Tag" onClick={onClick} onDelete={onDelete} />);

		(page.getByRole('button', { name: 'Keyboard Tag' }).element() as HTMLElement).focus();

		await userEvent.keyboard('{Backspace}');
		expect(onDelete).toHaveBeenCalledTimes(1);

		await userEvent.keyboard('{Delete}');
		expect(onDelete).toHaveBeenCalledTimes(2);

		expect(onClick).not.toHaveBeenCalled();
	});

	it('fires onDelete and stops propagation when the delete button is activated by keyboard', async () => {
		const onClick = vi.fn();
		const onDelete = vi.fn();
		await page.render(<DsTag label="Keyboard Tag" onClick={onClick} onDelete={onDelete} />);

		await page.getByRole('button', { name: 'Keyboard Tag' }).hover();

		const deleteButton = page.getByRole('button', { name: 'Delete tag' });
		await expect.element(deleteButton).toBeVisible();
		(deleteButton.element() as HTMLElement).focus();

		await userEvent.keyboard('{Enter}');
		expect(onDelete).toHaveBeenCalledTimes(1);

		await userEvent.keyboard(' ');
		expect(onDelete).toHaveBeenCalledTimes(2);

		expect(onClick).not.toHaveBeenCalled();
	});
});

describe('DsTag key-value variant', () => {
	it('renders key and value with an auto-rendered colon', async () => {
		await page.render(<DsTag variant="key-value" label="Category" value="Networking" />);

		await expect.element(page.getByText('Category')).toBeInTheDocument();
		await expect.element(page.getByText('Networking')).toBeInTheDocument();

		// Colon is a CSS pseudo-element, so it never reaches the DOM/AX tree;
		// assert it via computed style of the key's `::after`.
		const keyAfter = window.getComputedStyle(page.getByText('Category').element(), '::after').content;
		expect(keyAfter).toMatch(/:/);
	});

	it('fires onDelete from the revealed delete button', async () => {
		const onDelete = vi.fn();
		await page.render(<DsTag variant="key-value" label="Category" value="Networking" onDelete={onDelete} />);

		// Delete button is hidden until the tag is hovered/focused.
		await page.getByRole('button', { name: 'Category' }).hover();

		const deleteButton = page.getByRole('button', { name: 'Delete tag' });
		await expect.element(deleteButton).toBeVisible();
		await deleteButton.click();

		expect(onDelete).toHaveBeenCalledOnce();
	});
});
