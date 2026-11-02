import type { Meta, StoryObj } from '@storybook/react-vite';
import { mapPinBadgeBorders, mapPinColors, mapPinRings, mapPinSizes } from './ds-map-pin.types';
import { DsMapPin } from './index';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsMapPin> = {
	title: 'Components/MapPin',
	component: DsMapPin,
	parameters: { layout: 'centered' },
	argTypes: {
		size: { control: 'select', options: mapPinSizes },
		color: { control: 'select', options: mapPinColors },
		ring: { control: 'select', options: mapPinRings },
		label: { control: 'text' },
		count: { control: 'number' },
		badge: { control: 'text' },
		badgeBorder: { control: 'select', options: mapPinBadgeBorders },
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

/** A pin with a short code. Hover it to see it lift from its tip. */
export const Default: Story = {
	args: {
		size: 'large',
		color: 'blue',
		label: 'T1',
		'aria-label': 'Central office T1, Haifa North',
	},
};

/** Use a different color for each kind of location, e.g. orange for access sites in Network View. */
export const Color: Story = {
	args: {
		size: 'medium',
		color: 'orange',
		label: 'FST',
		'aria-label': 'Access site FST, Haifa North',
	},
};

/** Show a count when several items share one location. */
export const Count: Story = {
	args: {
		size: 'small',
		color: 'teal',
		count: 8,
		'aria-label': '8 fiber broadband customer sites',
	},
};

/** Counts above 99 are capped so the text fits the core. */
export const CappedCount: Story = {
	args: {
		size: 'small',
		color: 'pink',
		count: 240,
		'aria-label': '240 carrier ethernet customer sites',
	},
};

/** A dotted ring marks a secondary status, e.g. a planned site in Network View. */
export const DottedRing: Story = {
	args: {
		size: 'large',
		color: 'blue',
		ring: 'dotted',
		label: 'T2',
		'aria-label': 'Central office T2, Haifa North, planned',
	},
};

/** A dashed ring marks another status, e.g. a site still being designed in Network View. */
export const DashedRing: Story = {
	args: {
		size: 'medium',
		color: 'orange',
		ring: 'dashed',
		label: 'PFP',
		'aria-label': 'Access site PFP, Haifa North, designed',
	},
};

/** A badge marks equipment at the location, e.g. an optical router in Network View. */
export const Badge: Story = {
	args: {
		size: 'large',
		color: 'blue',
		label: 'T1',
		badge: 'oR',
		'aria-label': 'Central office T1, Haifa North, with optical router',
	},
};

/** The badge border shows the status of what it marks, independently of the pin's ring. */
export const BadgeBorder: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="row" gap="var(--standard)" alignItems="flex-end">
			{mapPinBadgeBorders.map((badgeBorder) => (
				<DsMapPin
					key={badgeBorder}
					label="T3"
					badge="oR"
					badgeBorder={badgeBorder}
					aria-label={`Central office T3, optical router ${badgeBorder}`}
				/>
			))}
		</DsStack>
	),
};

/** The selected pin gets an outline in its own color and stays above unselected pins. */
export const Selected: Story = {
	args: {
		size: 'large',
		color: 'blue',
		label: 'T1',
		selected: true,
		'aria-label': 'Central office T1, Haifa North',
	},
};

/** Set `dragging` while the user moves the pin; it renders above every other pin. */
export const Dragging: Story = {
	args: {
		size: 'medium',
		color: 'blue',
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
			{mapPinColors.map((color) => (
				<DsStack key={color} direction="row" gap="var(--standard)" alignItems="flex-end">
					{mapPinRings.map((ring) => (
						<DsStack key={ring} direction="row" gap="var(--sm)" alignItems="flex-end">
							<DsMapPin
								size="large"
								color={color}
								ring={ring}
								label="T1"
								badge="oR"
								aria-label={`${color} ${ring}`}
							/>
							<DsMapPin
								size="small"
								color={color}
								ring={ring}
								count={8}
								aria-label={`${color} ${ring} count`}
							/>
							<DsMapPin
								color={color}
								ring={ring}
								label="T4+"
								selected
								aria-label={`${color} ${ring} selected`}
							/>
							<DsMapPin
								color={color}
								ring={ring}
								label="T4+"
								dragging
								aria-label={`${color} ${ring} dragging`}
							/>
						</DsStack>
					))}
				</DsStack>
			))}
		</DsStack>
	),
};
