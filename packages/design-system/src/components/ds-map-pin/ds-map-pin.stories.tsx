import type { Meta, StoryObj } from '@storybook/react-vite';
import { mapPinCategories, mapPinPlanningStatuses, mapPinSizes } from './ds-map-pin.types';
import { DsMapPin } from './index';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsMapPin> = {
	title: 'Components/MapPin',
	component: DsMapPin,
	parameters: { layout: 'centered' },
	argTypes: {
		size: { control: 'select', options: mapPinSizes },
		category: { control: 'select', options: mapPinCategories },
		planning: { control: 'select', options: mapPinPlanningStatuses },
		label: { control: 'text' },
		count: { control: 'number' },
		selected: { control: 'boolean' },
		dragging: { control: 'boolean' },
		'aria-label': { control: 'text' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
		onClick: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsMapPin>;

/** A deployed central office. Hover the pin to see it grow from its tip. */
export const Default: Story = {
	args: {
		size: 'large',
		category: 'central-office',
		label: 'T1',
		'aria-label': 'Central office T1, Haifa North',
	},
};

/** Medium is for central offices T3 and below and for access sites. */
export const AccessSite: Story = {
	args: {
		size: 'medium',
		category: 'access-site',
		label: 'FST',
		'aria-label': 'Access site FST, Haifa North',
	},
};

/** Small is for customer sites; show a count when several share one location. */
export const CustomerSiteCount: Story = {
	args: {
		size: 'small',
		category: 'fiber-broadband',
		count: 8,
		'aria-label': '8 fiber broadband customer sites',
	},
};

/** Counts above 99 are capped so the text fits the core. */
export const CappedCount: Story = {
	args: {
		size: 'small',
		category: 'carrier-ethernet',
		count: 240,
		'aria-label': '240 carrier ethernet customer sites',
	},
};

/** A dotted ring marks a site that is approved but not deployed yet. */
export const Planned: Story = {
	args: {
		size: 'large',
		category: 'central-office',
		planning: 'planned',
		label: 'T2',
		'aria-label': 'Central office T2, Haifa North, planned',
	},
};

/** A dashed ring marks a site that is still being designed. */
export const Designed: Story = {
	args: {
		size: 'medium',
		category: 'access-site',
		planning: 'designed',
		label: 'PFP',
		'aria-label': 'Access site PFP, Haifa North, designed',
	},
};

/** The selected pin gets an outline and stays above unselected pins. */
export const Selected: Story = {
	args: {
		size: 'large',
		category: 'central-office',
		label: 'T1',
		selected: true,
		'aria-label': 'Central office T1, Haifa North',
	},
};

/** Set `dragging` while the user moves the pin; it renders above every other pin. */
export const Dragging: Story = {
	args: {
		size: 'medium',
		category: 'central-office',
		label: 'T3',
		dragging: true,
		'aria-label': 'Central office T3, Haifa North',
	},
};

export const AllVariants: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="column" gap="var(--standard)">
			{mapPinCategories.map((category) => (
				<DsStack key={category} direction="row" gap="var(--standard)" alignItems="flex-end">
					{mapPinPlanningStatuses.map((planning) => (
						<DsStack key={planning} direction="row" gap="var(--sm)" alignItems="flex-end">
							<DsMapPin
								size={category === 'central-office' ? 'large' : 'medium'}
								category={category}
								planning={planning}
								label={category === 'central-office' ? 'T1' : 'CE'}
								aria-label={`${category} ${planning}`}
							/>
							<DsMapPin
								size="small"
								category={category}
								planning={planning}
								count={8}
								aria-label={`${category} ${planning} count`}
							/>
							<DsMapPin
								category={category}
								planning={planning}
								label="T4+"
								selected
								aria-label={`${category} ${planning} selected`}
							/>
							<DsMapPin
								category={category}
								planning={planning}
								label="T4+"
								dragging
								aria-label={`${category} ${planning} dragging`}
							/>
						</DsStack>
					))}
				</DsStack>
			))}
		</DsStack>
	),
};
