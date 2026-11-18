import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsMapPin } from '../ds-map-pin';
import { cableLines, cableTypes } from './ds-cable.types';
import { DsCable } from './index';
import styles from './ds-cable.stories.module.scss';

const meta: Meta<typeof DsCable> = {
	title: 'Components/Cable',
	component: DsCable,
	parameters: { layout: 'centered' },
	decorators: [
		(Story) => (
			<div className={styles.stage}>
				<Story />
			</div>
		),
	],
	argTypes: {
		from: { control: 'object' },
		to: { control: 'object' },
		curvature: { control: { type: 'number', step: 0.05 } },
		path: { control: 'text' },
		type: { control: 'select', options: cableTypes },
		line: { control: 'select', options: cableLines },
		selected: { control: 'boolean' },
		'aria-label': { control: 'text' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
		onClick: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsCable>;

/** A cable between two points of its positioned parent. Without `onClick` it is a static image. */
export const Default: Story = {
	args: {
		from: { x: 40, y: 60 },
		to: { x: 320, y: 60 },
		'aria-label': 'Cable, Haifa North to Haifa South',
	},
};

/** Each kind of cable has its own color; keep one type per kind across the map. */
export const Type: Story = {
	args: {
		from: { x: 40, y: 60 },
		to: { x: 320, y: 60 },
		type: 'iof',
		'aria-label': 'IOF cable, Haifa North to Haifa South',
	},
};

/** A dotted line marks a secondary status, e.g. a planned cable in Network View. */
export const Dotted: Story = {
	args: {
		from: { x: 40, y: 60 },
		to: { x: 320, y: 60 },
		type: 'tie',
		line: 'dotted',
		'aria-label': 'Tie cable, Haifa North to Haifa South, planned',
	},
};

/** A dashed line marks another status, e.g. a cable still being designed in Network View. */
export const Dashed: Story = {
	args: {
		from: { x: 40, y: 60 },
		to: { x: 320, y: 60 },
		type: 'loop',
		line: 'dashed',
		'aria-label': 'Loop cable, Haifa North to Haifa South, designed',
	},
};

/** Bend a cable to route it around other content, or to tell apart cables that share both ends. */
export const Curved: Story = {
	args: {
		from: { x: 40, y: 100 },
		to: { x: 320, y: 100 },
		curvature: 0.25,
		type: 'iof',
		'aria-label': 'IOF cable, Haifa North to Haifa South',
	},
};

/** Pass path data when the route is more than a single bend, e.g. one projected from map coordinates. */
export const CustomPath: Story = {
	args: {
		path: 'M40 100C120 100 120 20 180 20S240 100 320 100',
		type: 'tie',
		'aria-label': 'Tie cable, Haifa North to Haifa South',
	},
};

/** The selected cable is heavier and stays above unselected cables. */
export const Selected: Story = {
	args: {
		from: { x: 40, y: 60 },
		to: { x: 320, y: 60 },
		selected: true,
		'aria-label': 'Cable, Haifa North to Haifa South',
	},
};

/** With `onClick` the cable reacts to hover, takes keyboard focus and is activated with Enter or Space. */
export const Interactive: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [selected, setSelected] = useState(false);

		return (
			<DsCable
				from={{ x: 40, y: 60 }}
				to={{ x: 320, y: 60 }}
				type="iof"
				selected={selected}
				aria-label="IOF cable, Haifa North to Haifa South"
				onClick={() => setSelected(!selected)}
			/>
		);
	},
};

/** Cables and pins share one positioned parent, so cable ends and pin tips use the same coordinates. */
export const BetweenPins: Story = {
	parameters: { docs: { source: { type: 'code' } } },
	render: function Render() {
		const [selectedId, setSelectedId] = useState<string | null>('iof');

		return (
			<div className={styles.map}>
				<DsCable
					from={{ x: 80, y: 200 }}
					to={{ x: 400, y: 120 }}
					type="iof"
					selected={selectedId === 'iof'}
					aria-label="IOF cable, Haifa North to Haifa South"
					onClick={() => setSelectedId('iof')}
				/>
				<DsCable
					from={{ x: 80, y: 200 }}
					to={{ x: 400, y: 120 }}
					curvature={0.2}
					type="tie"
					line="dotted"
					selected={selectedId === 'tie'}
					aria-label="Tie cable, Haifa North to Haifa South, planned"
					onClick={() => setSelectedId('tie')}
				/>
				<DsCable
					from={{ x: 80, y: 200 }}
					to={{ x: 400, y: 120 }}
					curvature={-0.2}
					type="loop"
					line="dashed"
					selected={selectedId === 'loop'}
					aria-label="Loop cable, Haifa North to Haifa South, designed"
					onClick={() => setSelectedId('loop')}
				/>
				<DsMapPin
					className={styles.pin}
					style={{ left: 80, top: 200 }}
					label="T1"
					aria-label="Central office T1, Haifa North"
				/>
				<DsMapPin
					className={styles.pin}
					style={{ left: 400, top: 120 }}
					label="T2"
					aria-label="Central office T2, Haifa South"
				/>
			</div>
		);
	},
};

const MATRIX_COLUMN_WIDTH = 112;
const MATRIX_ROW_HEIGHT = 32;
const MATRIX_CABLE_LENGTH = 64;
const MATRIX_PADDING = 20;
const matrixStates = [
	{ name: 'default', selected: false },
	{ name: 'selected', selected: true },
];

export const AllVariants: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<div className={styles.matrix}>
			{cableLines.flatMap((line, lineIndex) =>
				cableTypes.flatMap((type, typeIndex) =>
					matrixStates.flatMap((state, stateIndex) =>
						[false, true].map((interactive, interactiveIndex) => {
							const x = MATRIX_PADDING + (stateIndex * 2 + interactiveIndex) * MATRIX_COLUMN_WIDTH;
							const y = MATRIX_PADDING + (lineIndex * cableTypes.length + typeIndex) * MATRIX_ROW_HEIGHT;
							const name = `${type} ${line} ${state.name}${interactive ? ' interactive' : ''}`;

							return (
								<DsCable
									key={name}
									from={{ x, y }}
									to={{ x: x + MATRIX_CABLE_LENGTH, y }}
									type={type}
									line={line}
									selected={state.selected}
									aria-label={name}
									onClick={interactive ? () => undefined : undefined}
								/>
							);
						}),
					),
				),
			)}
		</div>
	),
};
