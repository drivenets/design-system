import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import classNames from 'classnames';
import { DsIcon, type IconSize } from '../../../ds-icon';
import styles from './ds-button-legacy.stories.module.scss';
import DsButtonLegacy from './ds-button-legacy';
import type { ButtonSchema, ButtonVariant } from './ds-button-legacy.types';
import { buttonSchemas, buttonSizes, buttonVariants } from './ds-button-legacy.types';

const meta: Meta<typeof DsButtonLegacy> = {
	title: 'Design System/Button (Legacy)',
	component: DsButtonLegacy,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		schema: {
			control: { type: 'select' },
			options: buttonSchemas,
			description: 'Button color schema',
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
type Story = StoryObj<typeof DsButtonLegacy>;

const defaultButtonText = 'Button Text';

export const DefaultButton: Story = {
	args: {
		schema: 'primary',
		variant: 'filled',
		disabled: false,
		children: defaultButtonText,
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
		const renderButtonRow = (
			schema: ButtonSchema,
			variant: ButtonVariant,
			disabled?: boolean,
			showIcon?: boolean,
			showTitle?: boolean,
		) => {
			return (
				<div className={classNames(styles.row)}>
					{buttonSizes.map((size) => (
						<DsButtonLegacy
							className={classNames(styles.buttonShowcase, {
								[styles[`iconButton-${size}`]]: !showTitle,
							})}
							key={`${schema}-${variant}-${size}`}
							schema={schema}
							variant={variant}
							size={size}
							disabled={disabled}
						>
							{showIcon && <DsIcon key={`${size}`} icon="add" size={size as IconSize} />}
							{showTitle && <span>{size} Button</span>}
						</DsButtonLegacy>
					))}
				</div>
			);
		};

		const renderButtonContainer = (
			schema: ButtonSchema,
			variant: ButtonVariant,
			disabled?: boolean,
			title?: boolean,
		) => {
			return (
				<div className={classNames(styles.variantContainer)} key={schema + variant}>
					{title && (
						<div className={classNames(styles.row)}>
							<h4 className={classNames(styles.variantTitle)}>{variant}</h4>
						</div>
					)}
					{renderButtonRow(schema, variant, disabled, false, true)}
					{renderButtonRow(schema, variant, disabled, true, false)}
					{renderButtonRow(schema, variant, disabled, true, true)}
				</div>
			);
		};

		return (
			<div className={classNames(styles.combinationsContainer)}>
				{buttonSchemas.map((schema) => (
					<div key={schema} className={classNames(styles.schemaContainer)}>
						<h3 className={classNames(styles.schemaTitle)}>{schema}</h3>

						{buttonVariants.map((variant) =>
							renderButtonContainer(schema, variant, false, schema === 'primary'),
						)}
					</div>
				))}
				<div className={classNames(styles.schemaContainer)}>
					<h3 className={classNames(styles.schemaTitle)}>Disabled</h3>

					{buttonVariants.map((variant) => renderButtonContainer('primary', variant, true))}
				</div>
			</div>
		);
	},
};
