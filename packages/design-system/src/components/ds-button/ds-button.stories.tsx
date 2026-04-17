import type { Meta, StoryObj } from '@storybook/react-vite';
import classNames from 'classnames';
import { fn } from 'storybook/test';
import { DsButton } from './index';
import {
	type ButtonColor,
	buttonColors,
	buttonSizes,
	type ButtonVariant,
	buttonVariants,
} from './ds-button.types';
import storyStyles from './ds-button.stories.module.scss';

const meta: Meta<typeof DsButton> = {
	title: 'Design System/Button',
	component: DsButton,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		color: { control: 'select', options: buttonColors },
		variant: { control: 'select', options: buttonVariants },
		size: { control: 'select', options: buttonSizes },
		loading: { control: 'boolean' },
		disabled: { control: 'boolean' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
	args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof DsButton>;

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
	...buttonVariants.map((v) => ({ label: v, loading: false })),
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

const MatrixGrid = ({ color }: { color?: ButtonColor }) => {
	const isOnDark = color === 'light';

	return (
		<div className={storyStyles.section}>
			<div className={storyStyles.columnHeaders}>
				{buttonSizes.map((size) => (
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

					{buttonSizes.map((size) => (
						<div key={size} className={storyStyles.cell}>
							<DsButton
								color={color}
								variant={loading ? 'primary' : (label as (typeof buttonVariants)[number])}
								size={size}
								icon="check_circle"
								loading={loading}
								onClick={fn()}
							>
								{size !== 'tiny' ? 'Button' : undefined}
							</DsButton>
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
		variant: ButtonVariant;
		color: ButtonColor;
		loading: boolean;
	}>;
	isOnDark?: boolean;
}) => (
	<div className={storyStyles.section}>
		<div className={storyStyles.columnHeaders}>
			{buttonSizes.map((size) => (
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

				{buttonSizes.map((size) => {
					const ariaLabel = `${label} ${size}`;

					return (
						<div key={size} className={storyStyles.cell}>
							<DsButton
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

export const ResponsiveSize: Story = {
	parameters: { layout: 'centered' },
	render: () => (
		<div className={storyStyles.responsiveRow}>
			<DsButton size={{ lg: 'large', md: 'small' }} icon="check_circle" onClick={fn()}>
				lg: large / md: small
			</DsButton>

			<DsButton size={{ lg: 'medium', md: 'tiny' }} icon="check_circle" onClick={fn()}>
				lg: medium / md: tiny
			</DsButton>

			<DsButton size="medium" icon="check_circle" onClick={fn()}>
				static: medium
			</DsButton>
		</div>
	),
};
