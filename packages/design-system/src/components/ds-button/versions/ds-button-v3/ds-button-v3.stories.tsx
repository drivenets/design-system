import type { Meta, StoryObj } from '@storybook/react-vite';
import classNames from 'classnames';
import { fn } from 'storybook/test';
import DsButtonV3 from './ds-button-v3';
import { buttonV3Colors, buttonV3Sizes, buttonV3Variants } from './ds-button-v3.types';
import storyStyles from './ds-button-v3.stories.module.scss';

const meta: Meta<typeof DsButtonV3> = {
	title: 'Design System/ButtonV3',
	component: DsButtonV3,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		color: { control: 'select', options: buttonV3Colors },
		variant: { control: 'select', options: buttonV3Variants },
		size: { control: 'select', options: buttonV3Sizes },
		onDark: { control: 'boolean' },
		loading: { control: 'boolean' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
	args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof DsButtonV3>;

export const Default: Story = {
	args: {
		color: 'default',
		variant: 'primary',
		size: 'medium',
		icon: 'check_circle',
		children: 'Button',
	},
};

const matrixRows = [
	...buttonV3Variants.map((v) => ({ label: v, loading: false })),
	{ label: 'loading', loading: true },
];

const defaultIconMatrixRows = [
	{ label: 'check circle', icon: 'check_circle', variant: 'primary', color: 'default', loading: false },
	{ label: 'info', icon: 'info', variant: 'secondary', color: 'default', loading: false },
	{ label: 'delete', icon: 'delete', variant: 'tertiary', color: 'negative', loading: false },
	{ label: 'loading', icon: 'check_circle', variant: 'primary', color: 'default', loading: true },
] as const;

const onDarkIconMatrixRows = [
	{
		label: 'arrow down',
		icon: 'keyboard_arrow_down',
		variant: 'primary',
		color: 'default',
		loading: false,
	},
	{ label: 'home', icon: 'home', variant: 'secondary', color: 'default', loading: false },
	{ label: 'info', icon: 'info', variant: 'tertiary', color: 'default', loading: false },
	{ label: 'loading', icon: 'info', variant: 'primary', color: 'default', loading: true },
] as const;

const MatrixGrid = ({ onDark = false, color }: { onDark?: boolean; color?: 'default' | 'negative' }) => (
	<div className={storyStyles.section}>
		<div className={storyStyles.columnHeaders}>
			{buttonV3Sizes.map((size) => (
				<span
					key={size}
					className={classNames(storyStyles.columnHeader, {
						[storyStyles.onDarkColumnHeader]: onDark,
					})}
				>
					{size.charAt(0).toUpperCase() + size.slice(1)}
				</span>
			))}
		</div>

		{matrixRows.map(({ label, loading }) => (
			<div key={label} className={storyStyles.row}>
				<span
					className={classNames(storyStyles.rowLabel, {
						[storyStyles.onDarkLabel]: onDark,
					})}
				>
					{label.charAt(0).toUpperCase() + label.slice(1)}
				</span>

				{buttonV3Sizes.map((size) => (
					<div key={size} className={storyStyles.cell}>
						<DsButtonV3
							color={color}
							variant={loading ? 'primary' : (label as (typeof buttonV3Variants)[number])}
							size={size}
							onDark={onDark}
							icon="check_circle"
							loading={loading}
							onClick={fn()}
						>
							{size !== 'tiny' ? 'Button' : undefined}
						</DsButtonV3>
					</div>
				))}
			</div>
		))}
	</div>
);

const IconMatrixGrid = ({
	rows,
	onDark = false,
}: {
	rows: ReadonlyArray<{
		label: string;
		icon: 'check_circle' | 'info' | 'delete' | 'keyboard_arrow_down' | 'home';
		variant: (typeof buttonV3Variants)[number];
		color: (typeof buttonV3Colors)[number];
		loading: boolean;
	}>;
	onDark?: boolean;
}) => (
	<div className={storyStyles.section}>
		<div className={storyStyles.columnHeaders}>
			{buttonV3Sizes.map((size) => (
				<span
					key={size}
					className={classNames(storyStyles.columnHeader, {
						[storyStyles.onDarkColumnHeader]: onDark,
					})}
				>
					{size.charAt(0).toUpperCase() + size.slice(1)}
				</span>
			))}
		</div>

		{rows.map(({ label, icon, loading, variant, color }) => (
			<div key={label} className={storyStyles.row}>
				<span
					className={classNames(storyStyles.rowLabel, {
						[storyStyles.onDarkLabel]: onDark,
					})}
				>
					{label.charAt(0).toUpperCase() + label.slice(1)}
				</span>

				{buttonV3Sizes.map((size) => {
					const ariaLabel = `${label} ${size}`;

					return (
						<div key={size} className={storyStyles.cell}>
							<DsButtonV3
								color={color}
								variant={variant}
								size={size}
								onDark={onDark}
								icon={icon}
								loading={loading}
								aria-label={ariaLabel}
								onClick={fn()}
							/>
						</div>
					);
				})}
			</div>
		))}
	</div>
);

export const MatrixDefault: Story = {
	parameters: { layout: 'fullscreen' },
	render: () => (
		<div className={storyStyles.matrix}>
			<p className={storyStyles.sectionTitle}>Default</p>
			<MatrixGrid color="default" />
		</div>
	),
};

export const MatrixNegative: Story = {
	parameters: { layout: 'fullscreen' },
	render: () => (
		<div className={storyStyles.matrix}>
			<p className={storyStyles.sectionTitle}>Negative</p>
			<MatrixGrid color="negative" />
		</div>
	),
};

export const MatrixOnDark: Story = {
	parameters: { layout: 'fullscreen' },
	render: () => (
		<div className={storyStyles.matrix}>
			<div className={storyStyles.onDark}>
				<p className={classNames(storyStyles.sectionTitle, storyStyles.onDarkSectionTitle)}>
					On Dark — Default
				</p>
				<MatrixGrid onDark />
			</div>
		</div>
	),
};

export const MatrixIcons: Story = {
	parameters: { layout: 'fullscreen' },
	render: () => (
		<div className={storyStyles.matrix}>
			<p className={storyStyles.sectionTitle}>Icons — Default</p>
			<IconMatrixGrid rows={defaultIconMatrixRows} />

			<div className={storyStyles.onDark}>
				<p
					className={classNames(
						storyStyles.sectionTitle,
						storyStyles.onDarkSectionTitle,
						storyStyles.sectionTitleSpaced,
					)}
				>
					Icons — On Dark
				</p>
				<IconMatrixGrid rows={onDarkIconMatrixRows} onDark />
			</div>
		</div>
	),
};
