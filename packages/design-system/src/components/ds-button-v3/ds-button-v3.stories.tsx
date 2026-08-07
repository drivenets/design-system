import type { Meta, StoryObj } from '@storybook/react-vite';
import classNames from 'classnames';
import { fn } from 'storybook/test';
import { DsButtonV3 } from './index';
import {
	type ButtonV3Color,
	buttonV3Colors,
	buttonV3Sizes,
	type ButtonV3Variant,
	buttonV3Variants,
} from './ds-button-v3.types';
import storyStyles from './ds-button-v3.stories.module.scss';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsButtonV3> = {
	title: 'Components/ButtonV3',
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

const baseArgs = {
	color: 'default',
	size: 'medium',
	icon: 'check_circle',
	children: 'Button',
} as const;

/**
 * Shows a spinner in place of the icon and blocks interaction. Use while an
 * async action triggered by the button is in progress.
 */
export const Loading: Story = {
	args: { ...baseArgs, variant: 'primary', loading: true },
};

/**
 * Non-interactive state for an action that is currently unavailable.
 */
export const Disabled: Story = {
	args: { ...baseArgs, variant: 'primary', disabled: true },
};

/**
 * Compact square layout rendered when an `icon` is set without children. Always
 * pass an `aria-label` so the action is announced to assistive technology.
 */
export const IconOnly: Story = {
	args: {
		color: 'default',
		size: 'medium',
		variant: 'primary',
		icon: 'check_circle',
		'aria-label': 'Confirm',
	},
};

/**
 * Pressed / active state for toggle buttons and segmented controls. Reflected via
 * `aria-pressed` for assistive technology.
 */
export const Selected: Story = {
	args: { ...baseArgs, variant: 'secondary', selected: true },
};

/**
 * Palette tuned for dark-background surfaces. Use when the button sits on a dark
 * container rather than the default light UI.
 */
export const OnDark: Story = {
	args: { ...baseArgs, color: 'light', variant: 'primary' },
	decorators: [
		(Story) => (
			<div className={storyStyles.onDark}>
				<Story />
			</div>
		),
	],
};

/**
 * The `size` prop accepts a responsive object (`{ lg, md }`) as well as a static value.
 * Use the object form to adapt the button size across breakpoints; the static form
 * keeps a single size everywhere.
 */
export const ResponsiveSize: Story = {
	render: () => (
		<DsStack direction="row" alignItems="center" gap="var(--sm)">
			<DsButtonV3 size={{ lg: 'large', md: 'small' }}>lg: large / md: small</DsButtonV3>
			<DsButtonV3 size={{ lg: 'medium', md: 'tiny' }}>lg: medium / md: tiny</DsButtonV3>
			<DsButtonV3 size="medium">static: medium</DsButtonV3>
		</DsStack>
	),
};

// `color="light"` has no `primary-subtle`; its `primary` is styled as the subtle outline.
const getMatrixRows = (color?: ButtonV3Color) => {
	const variants =
		color === 'light' ? buttonV3Variants.filter((v) => v !== 'primary-subtle') : buttonV3Variants;

	return [...variants.map((v) => ({ label: v, loading: false })), { label: 'loading', loading: true }];
};

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
	const matrixRows = getMatrixRows(color);

	return (
		<DsStack gap="var(--sm)">
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
				<DsStack key={label} direction="row" alignItems="center" gap="var(--sm)">
					<span
						className={classNames(storyStyles.rowLabel, {
							[storyStyles.onDarkLabel]: isOnDark,
						})}
					>
						{label}
					</span>

					{buttonV3Sizes.map((size) => (
						<DsStack key={size} direction="row" justifyContent="center" flex={1}>
							<DsButtonV3
								color={color}
								variant={loading ? 'primary' : (label as (typeof buttonV3Variants)[number])}
								size={size}
								icon="check_circle"
								loading={loading}
							>
								{size !== 'tiny' ? 'Button' : undefined}
							</DsButtonV3>
						</DsStack>
					))}
				</DsStack>
			))}
		</DsStack>
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
	<DsStack gap="var(--sm)">
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
			<DsStack key={label} direction="row" alignItems="center" gap="var(--sm)">
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
						<DsStack key={size} direction="row" justifyContent="center" flex={1}>
							<DsButtonV3
								color={color}
								variant={variant}
								size={size}
								icon={icon}
								loading={loading}
								aria-label={ariaLabel}
							/>
						</DsStack>
					);
				})}
			</DsStack>
		))}
	</DsStack>
);

export const MatrixDefault: Story = {
	tags: ['!manifest'],
	parameters: {
		layout: 'fullscreen',
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => (
		<div className={storyStyles.matrix}>
			<p className={storyStyles.sectionTitle}>Default</p>
			<MatrixGrid color="default" />
		</div>
	),
};

export const MatrixError: Story = {
	tags: ['!manifest'],
	parameters: {
		layout: 'fullscreen',
		docs: { canvas: { sourceState: 'none' } },
	},
	render: () => (
		<div className={storyStyles.matrix}>
			<p className={storyStyles.sectionTitle}>Error</p>
			<MatrixGrid color="error" />
		</div>
	),
};

export const MatrixOnDark: Story = {
	tags: ['!manifest'],
	parameters: {
		layout: 'fullscreen',
		docs: { canvas: { sourceState: 'none' } },
	},
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
	tags: ['!manifest'],
	parameters: {
		layout: 'fullscreen',
		docs: { canvas: { sourceState: 'none' } },
	},
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
