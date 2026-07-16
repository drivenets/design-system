import type { Meta, StoryObj } from '@storybook/react-vite';
import DsSiteNode from './ds-site-node';
import { siteNodeStates } from './ds-site-node.types';
import { DsStack } from '../ds-stack';

const meta: Meta<typeof DsSiteNode> = {
	title: 'Components/SiteNode',
	component: DsSiteNode,
	parameters: { layout: 'centered' },
	argTypes: {
		state: {
			control: 'select',
			options: siteNodeStates,
			description: 'Scope/selection state; `overflow` renders a collapsed summary node',
		},
		tier: { control: 'text', description: 'Short tier label in the pill (e.g. "T1")' },
		siteCode: { control: 'text', description: 'Site identifier; truncates with a tooltip when it overflows' },
		overflowLabel: { control: 'text', description: 'Summary label for the collapsed branch (overflow only)' },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
		onClick: { table: { disable: true } },
	},
};

export default meta;
type Story = StoryObj<typeof DsSiteNode>;

export const Default: Story = {
	args: { state: 'default', tier: 'T1', siteCode: 'OKCAOKLU' },
};

export const Selected: Story = {
	args: { state: 'selected', tier: 'T1', siteCode: 'OKCAOKLU' },
};

export const Muted: Story = {
	args: { state: 'muted', tier: 'T1', siteCode: 'OKCAOKLU' },
};

export const Overflow: Story = {
	args: { state: 'overflow', overflowLabel: '+2 more' },
};

export const Truncated: Story = {
	args: { state: 'default', tier: 'T1', siteCode: 'OKCAOKLU-LONDON-01' },
};

export const AllStates: Story = {
	tags: ['!manifest'],
	render: () => (
		<DsStack direction="row" gap="var(--standard)" alignItems="center">
			<DsSiteNode state="default" tier="T1" siteCode="OKCAOKLU" />
			<DsSiteNode state="selected" tier="T1" siteCode="OKCAOKLU" />
			<DsSiteNode state="muted" tier="T1" siteCode="OKCAOKLU" />
			<DsSiteNode state="overflow" overflowLabel="+2 more" />
		</DsStack>
	),
};
