import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsTypography } from '../ds-typography';
import { DsIllustration } from './index';
import { dsIllustrationVariants } from './ds-illustration.types';
import styles from './ds-illustration.stories.module.scss';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsIllustration> = {
	title: 'Components/Illustration',
	component: DsIllustration,
	parameters: { layout: 'centered' },
	argTypes: {
		variant: { control: 'select', options: dsIllustrationVariants },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
		'aria-hidden': { table: { disable: true } },
		'aria-label': { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsIllustration>;

export const Default: Story = {
	args: {
		variant: 'no-tasks',
	},
};

/**
 * Every published tile. Visual catalog only — pick a `variant` in product code.
 */
export const Showcase: Story = {
	tags: ['!manifest'],
	parameters: {
		layout: 'fullscreen',
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => (
		<div className={styles.showcase}>
			{dsIllustrationVariants.map((variant) => (
				<DsStack key={variant} direction="column" alignItems="center" gap="var(--xs)">
					<DsIllustration variant={variant} />
					<DsTypography color="secondary" variant="body-sm-reg">
						{variant}
					</DsTypography>
				</DsStack>
			))}
		</div>
	),
};
