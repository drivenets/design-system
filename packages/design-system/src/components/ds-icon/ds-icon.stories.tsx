import type { Meta, StoryObj } from '@storybook/react-vite';
import { DsIcon } from './index';
import { DsStack } from '../ds-stack';
import { DsTypography } from '../ds-typography';
import { iconColors, iconSizes, iconVariants } from './ds-icon.types';
import { customIcons, type CustomIconName } from './custom-icons';

const meta: Meta<typeof DsIcon> = {
	title: 'Components/Icon',
	component: DsIcon,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		icon: {
			control: 'text',
			description: 'Material icon name, custom `special-*` name, or SVG component',
		},
		size: {
			control: 'select',
			options: iconSizes,
			description: 'Size of the icon',
		},
		variant: {
			control: 'select',
			options: iconVariants,
			description: 'Material icon variant style',
		},
		filled: {
			control: 'boolean',
			description: 'Whether the icon should be filled',
		},
		color: {
			control: 'select',
			options: iconColors,
			description: 'Semantic color token or raw CSS color',
		},
		onClick: { action: 'clicked' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsIcon>;

/** Default outlined Material icon referenced by name. */
export const Default: Story = {
	args: {
		icon: 'home',
		size: 'medium',
	},
};

/** Use `filled` for a solid glyph, e.g. to signal an active or selected state. */
export const Filled: Story = {
	args: {
		icon: 'favorite',
		size: 'medium',
		filled: true,
	},
};

/** The `rounded` variant renders softer, rounded Material glyphs. */
export const Rounded: Story = {
	args: {
		icon: 'settings',
		size: 'medium',
		variant: 'rounded',
	},
};

/** Pass a semantic color token to tint the icon with a `--icon-*` value. */
export const Colored: Story = {
	args: {
		icon: 'check_circle',
		size: 'medium',
		color: 'success',
	},
};

/** DriveNets-specific SVG icons are referenced by their `special-*` name. */
export const CustomIcon: Story = {
	args: {
		icon: 'special-market',
		size: 'medium',
	},
};

/** Reference of every icon size, from `tiny` to `extra-large`. */
export const Sizes: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack gap="var(--2xl)" alignItems="flex-end">
			{iconSizes.map((size) => (
				<DsStack key={size} direction="column" alignItems="center" gap="var(--2xs)">
					<DsIcon icon="home" size={size} />
					<DsTypography variant="body-xs-reg" color="secondary">
						{size}
					</DsTypography>
				</DsStack>
			))}
		</DsStack>
	),
};

/** Reference of the semantic color tokens available via the `color` prop. */
export const Colors: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="row" flexWrap="wrap" gap="var(--xl)">
			{iconColors.map((color) => (
				<DsStack key={color} direction="column" alignItems="center" gap="var(--2xs)" width="120px">
					<DsIcon icon="circle" size="medium" filled color={color} />
					<DsTypography variant="body-xs-reg" color="secondary">
						{color}
					</DsTypography>
				</DsStack>
			))}
		</DsStack>
	),
};

/** Gallery of representative Material icons; any Material Symbols name is valid. */
export const MaterialIcons: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => {
		const names = [
			'home',
			'search',
			'settings',
			'favorite',
			'delete',
			'check_circle',
			'error',
			'warning',
			'info',
			'add',
			'close',
			'edit',
			'download',
			'visibility',
			'lock',
			'notifications',
			'account_circle',
		] as const;

		return (
			<DsStack direction="row" flexWrap="wrap" gap="var(--xl)">
				{names.map((name) => (
					<DsStack key={name} direction="column" alignItems="center" gap="var(--2xs)" width="120px">
						<DsIcon icon={name} size="medium" />
						<DsTypography variant="body-xs-reg" color="secondary">
							{name}
						</DsTypography>
					</DsStack>
				))}
			</DsStack>
		);
	},
};

/** Gallery of the DriveNets custom `special-*` icons. */
export const CustomIcons: Story = {
	tags: ['!manifest'],
	parameters: { docs: { canvas: { sourceState: 'none' } } },
	render: () => (
		<DsStack direction="row" flexWrap="wrap" gap="var(--xl)">
			{(Object.keys(customIcons) as CustomIconName[]).map((name) => (
				<DsStack key={name} direction="column" alignItems="center" gap="var(--2xs)" width="140px">
					<DsIcon icon={name} size="medium" />
					<DsTypography variant="body-xs-reg" color="secondary">
						{name}
					</DsTypography>
				</DsStack>
			))}
		</DsStack>
	),
};
