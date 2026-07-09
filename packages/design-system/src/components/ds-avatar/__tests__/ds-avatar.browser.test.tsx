import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsAvatar } from '../ds-avatar';

// 1x1 transparent PNG — loads reliably without network access.
const VALID_IMAGE =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

describe('DsAvatar', () => {
	it('renders the initials derived from the name when no image is provided', async () => {
		await page.render(<DsAvatar name="John Doe" />);

		await expect.element(page.getByText('JD')).toBeInTheDocument();
	});

	it('shows the full name in a tooltip on hover', async () => {
		await page.render(<DsAvatar name="John Doe" />);

		await page.getByText('JD').hover();

		await expect.element(page.getByRole('tooltip')).toHaveTextContent('John Doe');
	});

	it('renders the image with the name as its accessible label when alt is omitted', async () => {
		await page.render(<DsAvatar name="Jane Smith" src={VALID_IMAGE} />);

		const image = page.getByRole('img', { name: 'Jane Smith' });

		await expect.element(image).toBeInTheDocument();
		await expect.element(image).toHaveAttribute('src', VALID_IMAGE);
	});

	it('uses alt as the image accessible label when provided', async () => {
		await page.render(<DsAvatar name="Jane Smith" alt="Jane profile photo" src={VALID_IMAGE} />);

		await expect.element(page.getByRole('img', { name: 'Jane profile photo' })).toBeInTheDocument();
	});

	it('falls back to initials and fires onStatusChange("error") when the image fails to load', async () => {
		const onStatusChange = vi.fn();

		await page.render(
			<DsAvatar name="Ada Lovelace" src="/broken-avatar-image.png" onStatusChange={onStatusChange} />,
		);

		await expect.element(page.getByText('AL')).toBeVisible();
		await vi.waitFor(() => expect(onStatusChange).toHaveBeenCalledWith('error'));
	});

	it('renders initials for every size', async () => {
		await page.render(
			<>
				<DsAvatar size="xsm" name="Extra Small" />
				<DsAvatar size="sm" name="Sam Mitchell" />
				<DsAvatar size="regular" name="Rachel Evans" />
				<DsAvatar size="md" name="Mike Edwards" />
				<DsAvatar size="lg" name="Laura Adams" />
				<DsAvatar size="xl" name="Xavier Lee" />
			</>,
		);

		await expect.element(page.getByText('ES')).toBeInTheDocument();
		await expect.element(page.getByText('SM')).toBeInTheDocument();
		await expect.element(page.getByText('RE')).toBeInTheDocument();
		await expect.element(page.getByText('ME')).toBeInTheDocument();
		await expect.element(page.getByText('LA')).toBeInTheDocument();
		await expect.element(page.getByText('XL')).toBeInTheDocument();
	});

	it('renders initials for both shapes', async () => {
		await page.render(
			<>
				<DsAvatar type="circle" name="Chris Irving" />
				<DsAvatar type="rounded" name="Rose Oliver" />
			</>,
		);

		await expect.element(page.getByText('CI')).toBeInTheDocument();
		await expect.element(page.getByText('RO')).toBeInTheDocument();
	});
});
