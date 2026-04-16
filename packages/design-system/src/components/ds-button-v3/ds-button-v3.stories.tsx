import type { Meta, StoryObj } from '@storybook/react-vite';
import classNames from 'classnames';
import { fn } from 'storybook/test';
import DsButtonV3 from './ds-button-v3';
import {
	type ButtonV3Color,
	buttonV3Colors,
	buttonV3Sizes,
	type ButtonV3Variant,
	buttonV3Variants,
} from './ds-button-v3.types';
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
		loading: { control: 'boolean' },
		disabled: { control: 'boolean' },
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
	{ label: 'delete', icon: 'delete', variant: 'tertiary', color: 'error', loading: false },
	{ label: 'loading', icon: 'check_circle', variant: 'primary', color: 'default', loading: true },
] as const;

const onDarkIconMatrixRows = [
	{
		label: 'arrow down',
		icon: 'keyboard_arrow_down',
		variant: 'primary',
		color: 'light',
		loading: false,
	},
	{ label: 'home', icon: 'home', variant: 'secondary', color: 'light', loading: false },
	{ label: 'info', icon: 'info', variant: 'tertiary', color: 'light', loading: false },
	{ label: 'loading', icon: 'info', variant: 'primary', color: 'light', loading: true },
] as const;

const MatrixGrid = ({ color }: { color?: ButtonV3Color }) => {
	const isOnDark = color === 'light';

	return (
		<div className={storyStyles.section}>
			<div className={storyStyles.columnHeaders}>
				{buttonV3Sizes.map((size) => (
					<span
						key={size}
						className={classNames(storyStyles.columnHeader, {
							[storyStyles.onDarkColumnHeader]: isOnDark,
						})}
					>
						{size}
					</span>
				))}
			</div>

			{matrixRows.map(({ label, loading }) => (
				<div key={label} className={storyStyles.row}>
					<span
						className={classNames(storyStyles.rowLabel, {
							[storyStyles.onDarkLabel]: isOnDark,
						})}
					>
						{label}
					</span>

					{buttonV3Sizes.map((size) => (
						<div key={size} className={storyStyles.cell}>
							<DsButtonV3
								color={color}
								variant={loading ? 'primary' : (label as (typeof buttonV3Variants)[number])}
								size={size}
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
};

const IconMatrixGrid = ({
	rows,
	isOnDark = false,
}: {
	rows: ReadonlyArray<{
		label: string;
		icon: 'check_circle' | 'info' | 'delete' | 'keyboard_arrow_down' | 'home';
		variant: ButtonV3Variant;
		color: ButtonV3Color;
		loading: boolean;
	}>;
	isOnDark?: boolean;
}) => (
	<div className={storyStyles.section}>
		<div className={storyStyles.columnHeaders}>
			{buttonV3Sizes.map((size) => (
				<span
					key={size}
					className={classNames(storyStyles.columnHeader, {
						[storyStyles.onDarkColumnHeader]: isOnDark,
					})}
				>
					{size}
				</span>
			))}
		</div>

		{rows.map(({ label, icon, loading, variant, color }) => (
			<div key={label} className={storyStyles.row}>
				<span
					className={classNames(storyStyles.rowLabel, {
						[storyStyles.onDarkLabel]: isOnDark,
					})}
				>
					{label}
				</span>

				{buttonV3Sizes.map((size) => {
					const ariaLabel = `${label} ${size}`;

					return (
						<div key={size} className={storyStyles.cell}>
							<DsButtonV3
								color={color}
								variant={variant}
								size={size}
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

export const MatrixError: Story = {
	parameters: { layout: 'fullscreen' },
	render: () => (
		<div className={storyStyles.matrix}>
			<p className={storyStyles.sectionTitle}>Error</p>
			<MatrixGrid color="error" />
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
				<MatrixGrid color="light" />
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
				<IconMatrixGrid rows={onDarkIconMatrixRows} isOnDark />
			</div>
		</div>
	),
};
