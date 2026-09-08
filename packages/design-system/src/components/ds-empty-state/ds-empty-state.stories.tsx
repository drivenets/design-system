import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsButtonV3 } from '../ds-button-v3';
import { DsIllustration } from '../ds-illustration';
import { DsEmptyState } from './index';
import { dsEmptyStateVariants } from './ds-empty-state.types';

const meta: Meta<typeof DsEmptyState> = {
	title: 'Components/EmptyState',
	component: DsEmptyState,
	parameters: { layout: 'centered' },
	argTypes: {
		variant: { control: 'select', options: dsEmptyStateVariants },
		illustration: { table: { disable: true } },
		action: { table: { disable: true } },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsEmptyState>;

/**
 * Default **no-data** empty state: the collection has no records. Illustration
 * and message are bundled; add `action` when the page should offer a create CTA.
 */
export const Default: Story = {
	args: {
		variant: 'noData',
	},
};

/**
 * **No-matches** empty state: a search or filter yielded zero items. The
 * collection itself may be non-empty.
 */
export const NoMatches: Story = {
	args: {
		variant: 'noMatches',
	},
};

/**
 * Pass `action` for a consumer-owned button (create, clear filters, etc.).
 * The inferred table default omits this slot.
 */
export const WithAction: Story = {
	args: {
		variant: 'noData',
	},
	render: (args) => <DsEmptyState {...args} action={<DsButtonV3 size="small">Add</DsButtonV3>} />,
};

/**
 * Override the bundled message without replacing the illustration or adding
 * an action.
 */
export const Message: Story = {
	args: {
		variant: 'noMatches',
		message: 'Aucun enregistrement correspondant.',
	},
};

/**
 * Replace the bundled art with a custom `DsIllustration`. Variant still
 * selects the default message unless `message` is also passed.
 */
export const CustomIllustration: Story = {
	args: {
		variant: 'noData',
	},
	render: (args) => <DsEmptyState {...args} illustration={<DsIllustration variant="no-documents" />} />,
};
