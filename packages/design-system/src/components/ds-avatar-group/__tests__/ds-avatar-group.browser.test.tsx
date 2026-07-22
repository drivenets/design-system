import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { DsAvatarGroup } from '../ds-avatar-group';

const sampleAvatars = [
	{ name: 'Alice Freeman', src: 'https://i.pravatar.cc/150?u=alice' },
	{ name: 'Bob Smith', src: 'https://i.pravatar.cc/150?u=bob' },
	{ name: 'Charlie Davis', src: 'https://i.pravatar.cc/150?u=charlie' },
	{ name: 'Diana Prince', src: 'https://i.pravatar.cc/150?u=diana' },
	{ name: 'Edward Norton', src: 'https://i.pravatar.cc/150?u=edward' },
	{ name: 'Fiona Gallagher', src: 'https://i.pravatar.cc/150?u=fiona' },
	{ name: 'George Miller', src: 'https://i.pravatar.cc/150?u=george' },
	{ name: 'Hannah Abbott', src: 'https://i.pravatar.cc/150?u=hannah' },
];

describe('DsAvatarGroup', () => {
	it('renders the +N overflow indicator when avatars exceed max', async () => {
		await page.render(<DsAvatarGroup avatars={sampleAvatars} max={5} />);

		await expect.element(page.getByText('+3')).toBeInTheDocument();
	});

	it('shows hidden avatar names in a tooltip when hovering the overflow indicator', async () => {
		await page.render(<DsAvatarGroup avatars={sampleAvatars} max={5} />);

		await page.getByText('+3').hover();

		const tooltip = page.getByRole('tooltip');
		await expect.element(tooltip).toHaveTextContent('Fiona Gallagher');
		await expect.element(tooltip).toHaveTextContent('George Miller');
		await expect.element(tooltip).toHaveTextContent('Hannah Abbott');
	});
});
