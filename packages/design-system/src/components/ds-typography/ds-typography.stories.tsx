import type { Meta, StoryObj } from '@storybook/react-vite';
import classNames from 'classnames';
import { DsStack } from '../ds-stack';
import { DsTypography } from './index';
import { typographyColors, typographyVariantConfig } from './ds-typography.config';
import storyStyles from './ds-typography.stories.module.scss';

const variantOptions = Object.keys(typographyVariantConfig);
const sample = 'The quick brown fox jumps over the lazy dog.';

const meta: Meta<typeof DsTypography> = {
	title: 'Components/Typography',
	component: DsTypography,
	parameters: { layout: 'padded' },
	argTypes: {
		variant: { control: 'select', options: variantOptions },
		color: { control: 'select', options: typographyColors },
		asChild: { control: 'boolean' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
	args: {
		variant: 'body-md-reg',
		children: sample,
	},
};

export default meta;
type Story = StoryObj<typeof DsTypography>;

export const Default: Story = {
	args: {
		variant: 'body-md-reg',
		color: 'main',
		children: sample,
	},
};

export const Variants: Story = {
	parameters: { controls: { disable: true } },
	render: () => (
		<DsStack direction="column" gap="var(--sm)">
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>heading1</code>
				<DsTypography variant="heading1">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>heading2</code>
				<DsTypography variant="heading2">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>heading3</code>
				<DsTypography variant="heading3">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>heading4</code>
				<DsTypography variant="heading4">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-md-reg</code>
				<DsTypography variant="body-md-reg">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-md-md</code>
				<DsTypography variant="body-md-md">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-md-semi-bold</code>
				<DsTypography variant="body-md-semi-bold">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-md-bold</code>
				<DsTypography variant="body-md-bold">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-md-link</code>
				<DsTypography variant="body-md-link">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-sm-reg</code>
				<DsTypography variant="body-sm-reg">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-sm-md</code>
				<DsTypography variant="body-sm-md">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-sm-semi-bold</code>
				<DsTypography variant="body-sm-semi-bold">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-sm-bold</code>
				<DsTypography variant="body-sm-bold">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-sm-link</code>
				<DsTypography variant="body-sm-link">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-xs-reg</code>
				<DsTypography variant="body-xs-reg">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-xs-md</code>
				<DsTypography variant="body-xs-md">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-xs-semi-bold</code>
				<DsTypography variant="body-xs-semi-bold">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-xs-bold</code>
				<DsTypography variant="body-xs-bold">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>body-xs-link</code>
				<DsTypography variant="body-xs-link">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>code-sm-reg</code>
				<DsTypography variant="code-sm-reg">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>code-sm-semi-bold</code>
				<DsTypography variant="code-sm-semi-bold">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>code-xs-reg</code>
				<DsTypography variant="code-xs-reg">{sample}</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>code-xs-semi-bold</code>
				<DsTypography variant="code-xs-semi-bold">{sample}</DsTypography>
			</div>
		</DsStack>
	),
};

export const Colors: Story = {
	parameters: { controls: { disable: true } },
	render: () => (
		<DsStack direction="column" gap="var(--sm)">
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>main</code>
				<DsTypography variant="body-md-md" color="main">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>secondary</code>
				<DsTypography variant="body-md-md" color="secondary">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>action</code>
				<DsTypography variant="body-md-md" color="action">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>action-hover</code>
				<DsTypography variant="body-md-md" color="action-hover">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>action-secondary</code>
				<DsTypography variant="body-md-md" color="action-secondary">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>action-secondary-hover</code>
				<DsTypography variant="body-md-md" color="action-secondary-hover">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>disabled</code>
				<DsTypography variant="body-md-md" color="disabled">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>placeholder</code>
				<DsTypography variant="body-md-md" color="placeholder">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>highlight</code>
				<DsTypography variant="body-md-md" color="highlight">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>success</code>
				<DsTypography variant="body-md-md" color="success">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>warning</code>
				<DsTypography variant="body-md-md" color="warning">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>error</code>
				<DsTypography variant="body-md-md" color="error">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>code</code>
				<DsTypography variant="body-md-md" color="code">
					{sample}
				</DsTypography>
			</div>
		</DsStack>
	),
};

export const ColorsOnDark: Story = {
	parameters: { controls: { disable: true }, layout: 'fullscreen' },
	render: () => (
		<div className={storyStyles.onDark}>
			<div className={storyStyles.row}>
				<code className={classNames(storyStyles.label, storyStyles.onDarkLabel)}>on-action</code>
				<DsTypography variant="body-md-md" color="on-action">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={classNames(storyStyles.label, storyStyles.onDarkLabel)}>on-disabled</code>
				<DsTypography variant="body-md-md" color="on-disabled">
					{sample}
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={classNames(storyStyles.label, storyStyles.onDarkLabel)}>light-disabled</code>
				<DsTypography variant="body-md-md" color="light-disabled">
					{sample}
				</DsTypography>
			</div>
		</div>
	),
};

export const EscapeHatch: Story = {
	parameters: { controls: { disable: true } },
	render: () => (
		<DsStack direction="column" gap="var(--sm)">
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>{'color="success"'}</code>
				<DsTypography variant="body-md-md" color="success">
					Semantic token.
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>{'color="var(--color-dap-purple-600)"'}</code>
				<DsTypography variant="body-md-md" color="var(--color-dap-purple-600)">
					Custom primitive token via color prop.
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>{'color="#ff8800"'}</code>
				<DsTypography variant="body-md-md" color="#ff8800">
					Inline hex color via color prop.
				</DsTypography>
			</div>
			<div className={storyStyles.row}>
				<code className={storyStyles.label}>style overrides color prop</code>
				<DsTypography variant="body-md-md" color="success" style={{ color: '#d70a00' }}>
					Inline style still wins when both are set.
				</DsTypography>
			</div>
		</DsStack>
	),
};

export const AsChild: Story = {
	parameters: { controls: { disable: true } },
	render: () => (
		<DsStack direction="column" gap="var(--sm)">
			<DsTypography variant="heading3" asChild>
				<a href="#anchor">Heading rendered as anchor via asChild</a>
			</DsTypography>
			<DsTypography variant="body-md-md" color="action" asChild>
				<button type="button">Button styled like body-md-md / action</button>
			</DsTypography>
		</DsStack>
	),
};
