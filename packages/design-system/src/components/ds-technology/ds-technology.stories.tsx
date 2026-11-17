import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { technologyStages, technologyTypes } from './ds-technology.types';
import { DsTechnology } from './index';
import { DsTag } from '../ds-tag';
import { DsTypography } from '../ds-typography';
import styles from './ds-technology.stories.module.scss';

const meta: Meta<typeof DsTechnology> = {
	title: 'Components/Technology',
	component: DsTechnology,
	parameters: { layout: 'centered' },
	argTypes: {
		type: { control: 'select', options: technologyTypes },
		stage: { control: 'select', options: technologyStages },
		path: { control: 'text' },
		selected: { control: 'boolean' },
		'aria-label': { control: 'text' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
		onClick: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsTechnology>;

/** The sample curve of one technology, for legends and filters. The color is fixed per `type`. */
export const Default: Story = {
	args: {
		type: 'och',
	},
};

/** A dotted line marks a path that is planned but not deployed yet. */
export const Planned: Story = {
	args: {
		type: 'oms',
		stage: 'planned',
	},
};

/** A dashed line marks a path that is still being designed. */
export const Designed: Story = {
	args: {
		type: 'fbb-gpon',
		stage: 'designed',
	},
};

/** The selected line is thicker and sits on a light halo, so it stands out from the lines around it. */
export const Selected: Story = {
	args: {
		type: 'ots',
		selected: true,
		'aria-label': 'OTS link Haifa North to Tel Aviv',
	},
};

/**
 * With `onClick` the line is a button: hover or focus it to see the feedback, activate it with a click,
 * Enter or Space. Give it an `aria-label` that identifies the path.
 */
export const Clickable: Story = {
	args: {
		type: 'carrier-ethernet-customer',
		'aria-label': 'Carrier Ethernet service Haifa North to Tel Aviv',
		onClick: fn(),
	},
};

/** Give the sample curve a size to fit it next to a label; the line keeps its thickness. */
export const InLegend: Story = {
	render: (args) => (
		<DsTag label="ODU" slots={{ icon: <DsTechnology {...args} className={styles.legendSample} /> }} />
	),
	args: {
		type: 'odu',
	},
};

/**
 * Pass `path` to draw the line between two points. Inside a parent `<svg>` the path uses that parent's
 * coordinates, so many lines can share one canvas.
 */
export const CustomPath: Story = {
	render: (args) => (
		<svg className={styles.canvas}>
			<DsTechnology {...args} />
		</svg>
	),
	args: {
		type: 'fbb-pon-network',
		path: 'M24 136 C120 16 216 16 336 96',
		'aria-label': 'PON network link, site A to site B',
	},
};

/**
 * Keep the selection in state and render the selected line last, so its halo covers the lines it
 * crosses.
 */
export const Selectable: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [selectedId, setSelectedId] = useState<string | null>('och');

		const lines = [
			{
				id: 'och',
				type: 'och',
				label: 'OCH service, site A to site B',
				path: 'M24 136 C120 16 216 16 336 40',
			},
			{
				id: 'odu',
				type: 'odu',
				label: 'ODU service, site A to site C',
				path: 'M24 136 C140 150 240 60 336 136',
			},
			{
				id: 'oms',
				type: 'oms',
				label: 'OMS link, site D to site C',
				path: 'M24 24 C120 120 240 150 336 136',
			},
		] as const;

		const ordered = [...lines].sort((a, b) => Number(a.id === selectedId) - Number(b.id === selectedId));

		return (
			<svg className={styles.canvas}>
				{ordered.map((line) => (
					<DsTechnology
						key={line.id}
						type={line.type}
						path={line.path}
						selected={line.id === selectedId}
						aria-label={line.label}
						onClick={() => setSelectedId(line.id === selectedId ? null : line.id)}
					/>
				))}
			</svg>
		);
	},
};

export const AllVariants: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<div className={styles.matrix}>
			{technologyTypes.map((type) => (
				<div key={type} className={styles.matrixRow}>
					<DsTypography variant="body-xs-reg">{type}</DsTypography>
					{technologyStages.map((stage) => (
						<DsTechnology key={stage} type={type} stage={stage} />
					))}
					{technologyStages.map((stage) => (
						<DsTechnology key={stage} type={type} stage={stage} selected />
					))}
					<DsTechnology type={type} aria-label={`${type} clickable`} onClick={() => undefined} />
				</div>
			))}
		</div>
	),
};
