import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { DsUserCard } from '../ds-user-card';

// 1x1 transparent PNG — loads reliably without network access.
const VALID_IMAGE =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

describe('DsUserCard', () => {
	it('renders the name as the title', async () => {
		await page.render(<DsUserCard name="Mockup Developer" />);

		await expect.element(page.getByRole('heading', { name: 'Mockup Developer' })).toBeVisible();
	});

	it('renders the subtitle when provided', async () => {
		await page.render(<DsUserCard name="Mockup Developer" subtitle="developer@mock.local" />);

		await expect.element(page.getByText('developer@mock.local')).toBeVisible();
	});

	it('omits the subtitle when not provided', async () => {
		await page.render(<DsUserCard name="Mockup Developer" />);

		await expect.element(page.getByText('developer@mock.local')).not.toBeInTheDocument();
	});

	it('shows avatar initials derived from the name when no image is provided', async () => {
		await page.render(<DsUserCard name="Mockup Developer" />);

		await expect.element(page.getByText('MD')).toBeVisible();
	});

	it('renders the avatar image with the name as its accessible label when src is provided', async () => {
		await page.render(<DsUserCard name="Jane Smith" src={VALID_IMAGE} />);

		const image = page.getByRole('img', { name: 'Jane Smith' });

		await expect.element(image).toBeInTheDocument();
		await expect.element(image).toHaveAttribute('src', VALID_IMAGE);
	});

	it('forwards className to the root element', async () => {
		await page.render(<DsUserCard name="Jane Smith" className="custom-card" />);

		const root = document.querySelector('.custom-card');

		expect(root).not.toBeNull();
		expect(root).toHaveTextContent('Jane Smith');
	});
});
