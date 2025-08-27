import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { DsIcon } from '@design-system/ui';
import DsSpinner from '../../../ds-spinner/ds-spinner';
import DsButtonNew from './ds-button-new';
import { buttonSizes, buttonTypes, buttonVariants } from './ds-button-new.types';
import styles from './ds-button-new.stories.module.scss';

const meta: Meta<typeof DsButtonNew> = {
	title: 'Design System/Button',
	component: DsButtonNew,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		buttonType: {
			control: { type: 'select' },
			options: buttonTypes,
			description: 'Button type',
			table: {
				defaultValue: {
					summary: 'primary',
				},
			},
		},
		variant: {
			control: { type: 'select' },
			options: buttonVariants,
			table: {
				defaultValue: {
					summary: 'filled',
				},
			},
		},
		size: {
			control: { type: 'select' },
			options: buttonSizes,
			table: {
				defaultValue: {
					summary: 'medium',
				},
			},
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
};
export default meta;
type Story = StoryObj<typeof DsButtonNew>;

const defaultButtonText = 'Button Text';

export const DefaultButton: Story = {
	args: {
		buttonType: 'primary',
		variant: 'filled',
		size: 'large',
		disabled: false,
		children: (
			<>
				<DsIcon icon="check_circle" size="tiny" aria-hidden="true" />
				{defaultButtonText}
				<DsIcon icon="keyboard_arrow_down" size="tiny" aria-hidden="true" />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: defaultButtonText });
		await userEvent.click(button);
		await expect(button).toBeInTheDocument();
	},
};

export const WithSpinner: Story = {
	args: {
		buttonType: 'primary',
		variant: 'filled',
		size: 'large',
		disabled: false,
		children: (
			<>
				<DsSpinner />
				{defaultButtonText}
				<DsIcon icon="keyboard_arrow_down" size="tiny" aria-hidden="true" />
			</>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: defaultButtonText });
		await userEvent.click(button);
		await expect(button).toBeInTheDocument();
	},
};

export const Showcase: Story = {
	parameters: {
		layout: 'fullscreen',
	},
	render: function Render() {
		const defaultButtonChildren = (
			<>
				<DsIcon icon="check_circle" size="tiny" />
				{defaultButtonText}
				<DsIcon icon="keyboard_arrow_down" size="tiny" />
			</>
		);
		const iconButtonChildren = <DsIcon icon="check_circle" size="tiny" />;

		// Helper to check if a buttonType-variant combo is supported (based on SCSS class existence)
		const supportedCombos = [
			'primary-filled',
			// 'primary-ghost',
			'primary-danger',
			'secondary-filled',
			'secondary-ghost',
			'secondary-danger',
			'tertiary-filled',
			'tertiary-ghost',
			'tertiary-danger',
		];
		const isSupported = (buttonType: string, variant: string) =>
			supportedCombos.includes(`${buttonType}-${variant}`);

		const rowDefs = [
			{ label: 'Primary', buttonType: 'primary', icon: false },
			{ label: 'Secondary', buttonType: 'secondary', icon: false },
			{ label: 'Tertiary', buttonType: 'tertiary', icon: false },
			{ label: 'Icon Primary', buttonType: 'primary', icon: true },
			{ label: 'Icon Secondary', buttonType: 'secondary', icon: true },
			{ label: 'Icon Tertiary', buttonType: 'tertiary', icon: true },
		];

		const variants = ['filled', 'ghost', 'danger'];
		const sizes = ['small', 'medium', 'large'];
		const states = [false, true]; // false = default, true = disabled

		return (
			<div className={styles.showcaseContainer}>
				<table className={styles.showcaseTable}>
					<thead>
						<tr>
							<th className={styles.showcaseHeader}></th>
							{variants.map((variant) => (
								<th key={variant} colSpan={sizes.length * states.length} className={styles.showcaseHeader}>
									{variant.charAt(0).toUpperCase() + variant.slice(1)}
								</th>
							))}
						</tr>
						<tr>
							<th className={styles.showcaseHeader}></th>
							{variants.map((variant) =>
								sizes.map((size) =>
									states.map((disabled) => (
										<th
											key={`${variant}-${size}-${disabled ? 'disabled' : 'default'}`}
											className={styles.showcaseHeader}
										>
											{`${size}${disabled ? ' (disabled)' : ''}`}
										</th>
									)),
								),
							)}
						</tr>
					</thead>
					<tbody>
						{rowDefs.map((row) => (
							<tr key={row.label}>
								<td className={styles.showcaseCellBold}>{row.label}</td>
								{variants
									.map((variant) =>
										sizes.map((size) =>
											states.map((disabled) => {
												if (!isSupported(row.buttonType, variant)) {
													return (
														<td
															key={`${row.label}-${variant}-${size}-${disabled ? 'disabled' : 'default'}`}
															className={styles.showcaseCell}
														></td>
													);
												}
												return (
													<td
														key={`${row.label}-${variant}-${size}-${disabled ? 'disabled' : 'default'}`}
														className={styles.showcaseCell}
													>
														<div className={styles.showcaseCellInline}>
															<DsButtonNew
																buttonType={row.buttonType as (typeof buttonTypes)[number]}
																variant={variant as (typeof buttonVariants)[number]}
																size={size as (typeof buttonSizes)[number]}
																disabled={disabled}
															>
																{row.icon ? iconButtonChildren : defaultButtonChildren}
															</DsButtonNew>
														</div>
													</td>
												);
											}),
										),
									)
									.flat()}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	},
};
