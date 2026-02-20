import { useState } from 'react';
import { createTreeCollection } from '@ark-ui/react/tree-view';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import { DsFilterStatusIcon } from '../ds-filter-status-icon';
import { DsIcon } from '../ds-icon';
import { DsTree } from './ds-tree';
import { dsTreeSizes, type DsTreeNode, type DsTreeSize } from './ds-tree.types';

const sideNavCollection = createTreeCollection<DsTreeNode>({
	nodeToValue: (node) => node.id,
	nodeToString: (node) => node.name,
	rootNode: {
		id: 'ROOT',
		name: '',
		children: [
			{
				id: 'network',
				name: 'Network',
				children: [
					{
						id: 'routers',
						name: 'Routers',
						children: [
							{ id: 'router-1', name: 'Router Alpha' },
							{ id: 'router-2', name: 'Router Beta' },
							{ id: 'router-3', name: 'Router Gamma' },
						],
					},
					{
						id: 'switches',
						name: 'Switches',
						children: [
							{ id: 'switch-1', name: 'Switch A' },
							{ id: 'switch-2', name: 'Switch B' },
						],
					},
					{ id: 'firewall-1', name: 'Firewall Primary' },
					{ id: 'firewall-2', name: 'Firewall Secondary' },
				],
			},
			{
				id: 'monitoring',
				name: 'Monitoring',
				children: [
					{ id: 'alerts', name: 'Alerts' },
					{ id: 'dashboards', name: 'Dashboards' },
					{ id: 'logs', name: 'Logs' },
				],
			},
			{
				id: 'settings',
				name: 'Settings',
				children: [
					{ id: 'general', name: 'General' },
					{ id: 'users', name: 'Users' },
				],
			},
		],
	},
});

const mapLayersWithIconsCollection = createTreeCollection<DsTreeNode>({
	nodeToValue: (node) => node.id,
	nodeToString: (node) => node.name,
	rootNode: {
		id: 'ROOT',
		name: '',
		children: [
			{
				id: 'facilities',
				name: 'Facilities',
				children: [
					{ id: 'facility-1', name: 'Data Center A' },
					{ id: 'facility-2', name: 'Data Center B' },
					{ id: 'facility-3', name: 'Data Center C' },
				],
			},
			{
				id: 'data-centers',
				name: 'Data Centers',
				children: [
					{ id: 'dc-east', name: 'East' },
					{ id: 'dc-west', name: 'West' },
				],
			},
			{
				id: 'customer-premise',
				name: 'Customer Premise',
				children: [
					{ id: 'cp-1', name: 'Site Alpha' },
					{ id: 'cp-2', name: 'Site Beta' },
				],
			},
			{
				id: 'devices',
				name: 'Devices',
				children: [
					{
						id: 'optical',
						name: 'Optical',
						children: [
							{ id: 'olt', name: 'OLT', icon: 'layers' },
							{ id: 'roadm', name: 'ROADM', icon: 'layers' },
							{ id: 'oms', name: 'OMS', icon: 'layers' },
						],
					},
					{
						id: 'copper',
						name: 'Copper',
						children: [
							{ id: 'dslam', name: 'DSLAM', icon: 'layers' },
							{ id: 'msan', name: 'MSAN', icon: 'layers' },
						],
					},
				],
			},
			{
				id: 'routers',
				name: 'Routers',
				children: [
					{ id: 'router-core', name: 'Core Router' },
					{ id: 'router-edge', name: 'Edge Router' },
				],
			},
			{
				id: 'tdm',
				name: 'TDM',
				children: [{ id: 'tdm-1', name: 'TDM Switch A' }],
			},
			{
				id: 'network-mgmt',
				name: 'Network Management',
				children: [
					{ id: 'nms', name: 'NMS' },
					{ id: 'ems', name: 'EMS' },
				],
			},
			{
				id: 'link-type',
				name: 'Link Type',
				children: [
					{ id: 'fiber', name: 'Fiber' },
					{ id: 'wireless', name: 'Wireless' },
				],
			},
			{
				id: 'link-speeds',
				name: 'Link Speeds',
				children: [
					{ id: 'speed-1g', name: '1 Gbps' },
					{ id: 'speed-10g', name: '10 Gbps' },
				],
			},
		],
	},
});

const workflowCollection = createTreeCollection<DsTreeNode>({
	nodeToValue: (node) => node.id,
	nodeToString: (node) => node.name,
	rootNode: {
		id: 'ROOT',
		name: '',
		children: [
			{
				id: 'workflow-1234',
				name: 'Workflow 1234',
				icon: 'home',
				children: [
					{
						id: 'sw-running-02',
						name: 'SW running 02',
						icon: 'account_tree',
						children: [
							{ id: 'task-1', name: 'Task Alpha', status: 'running', icon: 'dns' },
							{ id: 'task-2', name: 'Task Beta', status: 'running', icon: 'storage' },
							{ id: 'task-3', name: 'Task Gamma', status: 'failed', icon: 'memory', disabled: true },
						],
					},
					{
						id: 'sw-running-06',
						name: 'SW running 06',
						icon: 'account_tree',
						disabled: true,
						children: [{ id: 'task-4', name: 'Task Delta', status: 'paused', icon: 'cloud' }],
					},
					{ id: 'error-task', name: 'Error task name', status: 'failed', icon: 'warning' },
					{ id: 'running-task', name: 'Running task name', status: 'running', icon: 'dns' },
				],
			},
		],
	},
});

const SideNavDsTreeNode = ({ node, indexPath }: { node: DsTreeNode; indexPath: number[] }) => (
	<DsTree.NodeProvider node={node} indexPath={indexPath}>
		{node.children ? (
			<DsTree.Branch>
				<DsTree.BranchControl>
					<DsTree.BranchIndicator />
					<DsTree.BranchText>{node.name}</DsTree.BranchText>
				</DsTree.BranchControl>

				<DsTree.BranchContent>
					<DsTree.BranchIndentGuide />
					{node.children.map((child, index) => (
						<SideNavDsTreeNode key={child.id} node={child} indexPath={[...indexPath, index]} />
					))}
				</DsTree.BranchContent>
			</DsTree.Branch>
		) : (
			<DsTree.Item>
				<DsTree.ItemIndicator />
				<DsTree.ItemText>{node.name}</DsTree.ItemText>
			</DsTree.Item>
		)}
	</DsTree.NodeProvider>
);

const CheckboxWithIconsNode = ({ node, indexPath }: { node: DsTreeNode; indexPath: number[] }) => (
	<DsTree.NodeProvider node={node} indexPath={indexPath}>
		{node.children ? (
			<DsTree.Branch>
				<DsTree.BranchControl>
					<DsTree.BranchIndicator />
					<DsTree.NodeCheckbox />
					<DsTree.BranchText>{node.name}</DsTree.BranchText>
				</DsTree.BranchControl>

				<DsTree.BranchContent>
					<DsTree.BranchIndentGuide />
					{node.children.map((child, index) => (
						<CheckboxWithIconsNode key={child.id} node={child} indexPath={[...indexPath, index]} />
					))}
				</DsTree.BranchContent>
			</DsTree.Branch>
		) : (
			<DsTree.Item>
				<DsTree.ItemIndicator />
				<DsTree.NodeCheckbox />
				<DsTree.ItemText>
					{node.icon && <DsIcon icon={node.icon} size="tiny" />}
					{node.name}
				</DsTree.ItemText>
			</DsTree.Item>
		)}
	</DsTree.NodeProvider>
);

const WorkflowDsTreeNode = ({
	node,
	indexPath,
	onNavigate,
	size = 'medium',
}: {
	node: DsTreeNode;
	indexPath: number[];
	onNavigate: (nodeId: string) => void;
	size?: DsTreeSize;
}) => (
	<DsTree.NodeProvider node={node} indexPath={indexPath}>
		{node.children ? (
			<DsTree.Branch>
				<DsTree.BranchControl>
					<DsTree.BranchIndicator />
					<DsTree.BranchText>
						{node.icon && <DsIcon icon={node.icon} size="tiny" />}
						{node.name}
					</DsTree.BranchText>
				</DsTree.BranchControl>

				<DsTree.BranchContent>
					<DsTree.BranchIndentGuide />
					{node.children.map((child, index) => (
						<WorkflowDsTreeNode
							key={child.id}
							node={child}
							indexPath={[...indexPath, index]}
							onNavigate={onNavigate}
							size={size}
						/>
					))}
				</DsTree.BranchContent>
			</DsTree.Branch>
		) : (
			<DsTree.Item>
				<DsTree.ItemIndicator />
				<DsTree.ItemText>
					{node.status && <DsFilterStatusIcon status={node.status} size="tiny" />}
					{node.icon && <DsIcon icon={node.icon} size="tiny" />}
					{node.name}
				</DsTree.ItemText>

				<DsTree.ItemAction onClick={() => onNavigate(node.id)}>
					<DsIcon icon="outbound" size="tiny" style={{ color: 'var(--color-info-700)' }} />
				</DsTree.ItemAction>
			</DsTree.Item>
		)}
	</DsTree.NodeProvider>
);

const meta: Meta<typeof DsTree.Root> = {
	title: 'Design System/Tree',
	component: DsTree.Root,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		size: { control: 'select', options: dsTreeSizes },
		className: { table: { disable: true } },
		style: { table: { disable: true } },
		ref: { table: { disable: true } },
	},
};

export default meta;

type Story = StoryObj<typeof DsTree.Root>;

export const Default: Story = {
	args: {
		size: 'medium',
		onSelectionChange: fn(),
		onExpandedChange: fn(),
	},
	render: (args) => (
		<DsTree.Root
			collection={sideNavCollection}
			defaultExpandedValue={['network']}
			size={args.size}
			onSelectionChange={args.onSelectionChange}
			onExpandedChange={args.onExpandedChange}
		>
			<DsTree.Tree>
				{sideNavCollection.rootNode.children?.map((node, index) => (
					<SideNavDsTreeNode key={node.id} node={node} indexPath={[index]} />
				))}
			</DsTree.Tree>
		</DsTree.Root>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Network')).toBeVisible();

		const routersText = canvas.getByText('Routers');
		await expect(routersText).toBeVisible();

		await userEvent.click(routersText);

		const routerAlphaText = await canvas.findByText('Router Alpha');
		await userEvent.click(routerAlphaText);

		const routerAlphaItem = routerAlphaText.closest('[role="treeitem"]');
		await expect(routerAlphaItem).toHaveAttribute('data-selected');
	},
};

export const Controlled: Story = {
	args: {
		size: 'medium',
	},
	render: function Render(args) {
		const [selectedValue, setSelectedValue] = useState<string[]>([]);
		const [expandedValue, setExpandedValue] = useState<string[]>(['network']);

		return (
			<div>
				<div>Selected: {selectedValue.length > 0 ? selectedValue.join(', ') : 'none'}</div>

				<div>Expanded: {expandedValue.length > 0 ? expandedValue.join(', ') : 'none'}</div>

				<DsTree.Root
					size={args.size}
					collection={sideNavCollection}
					selectedValue={selectedValue}
					onSelectionChange={(details: { selectedValue: string[] }) =>
						setSelectedValue(details.selectedValue)
					}
					expandedValue={expandedValue}
					onExpandedChange={(details: { expandedValue: string[] }) => setExpandedValue(details.expandedValue)}
				>
					<DsTree.Tree>
						{sideNavCollection.rootNode.children?.map((node, index) => (
							<SideNavDsTreeNode key={node.id} node={node} indexPath={[index]} />
						))}
					</DsTree.Tree>
				</DsTree.Root>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Selected: none')).toBeVisible();
		await expect(canvas.getByText(/Expanded:.*network/)).toBeVisible();

		await userEvent.click(canvas.getByText('Routers'));
		await expect(canvas.getByText(/Expanded:.*routers/)).toBeVisible();

		const routerAlphaText = await canvas.findByText('Router Alpha');
		await userEvent.click(routerAlphaText);
		await expect(canvas.getByText('Selected: router-1')).toBeVisible();
	},
};

export const CheckboxWithIcons: Story = {
	args: {
		onCheckedChange: fn(),
		onExpandedChange: fn(),
	},
	render: (args) => (
		<DsTree.Root
			size={args.size}
			collection={mapLayersWithIconsCollection}
			defaultCheckedValue={['data-centers', 'dc-east', 'dc-west', 'oms']}
			defaultExpandedValue={['devices', 'optical']}
			onCheckedChange={args.onCheckedChange}
			onExpandedChange={args.onExpandedChange}
		>
			<DsTree.Tree>
				{mapLayersWithIconsCollection.rootNode.children?.map((node, index) => (
					<CheckboxWithIconsNode key={node.id} node={node} indexPath={[index]} />
				))}
			</DsTree.Tree>
		</DsTree.Root>
	),
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Devices')).toBeVisible();
		await expect(canvas.getByText('OLT')).toBeVisible();

		const oltItem = canvas.getByText('OLT').closest('[role="treeitem"]');
		const oltCheckbox = oltItem?.querySelector('[data-part="node-checkbox"]');
		if (oltCheckbox) {
			await userEvent.click(oltCheckbox);
			await expect(args.onCheckedChange).toHaveBeenCalled();
		}
	},
};

export const WithStatusIcons: Story = {
	args: {
		size: 'medium',
		onSelectionChange: fn(),
		onExpandedChange: fn(),
	},
	render: function Render(args) {
		const onNavigate = fn();

		return (
			<DsTree.Root
				size={args.size}
				collection={workflowCollection}
				defaultExpandedValue={['workflow-1234', 'sw-running-02', 'sw-running-06']}
				onSelectionChange={args.onSelectionChange}
				onExpandedChange={args.onExpandedChange}
			>
				<DsTree.Tree>
					{workflowCollection.rootNode.children?.map((node, index) => (
						<WorkflowDsTreeNode
							key={node.id}
							node={node}
							indexPath={[index]}
							onNavigate={onNavigate}
							size={args.size}
						/>
					))}
				</DsTree.Tree>
			</DsTree.Root>
		);
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Workflow 1234')).toBeVisible();
		await expect(canvas.getByText('Task Alpha')).toBeVisible();

		const taskGammaItem = canvas.getByText('Task Gamma').closest('[role="treeitem"]');
		await expect(taskGammaItem).toHaveAttribute('data-disabled');

		const swRunning06Item = canvas.getByText('SW running 06').closest('[role="treeitem"]');
		await expect(swRunning06Item).toHaveAttribute('data-disabled');

		await userEvent.click(canvas.getByText('Task Alpha'));
		const taskAlphaItem = canvas.getByText('Task Alpha').closest('[role="treeitem"]');
		await expect(taskAlphaItem).toHaveAttribute('data-selected');
		await expect(args.onSelectionChange).toHaveBeenCalled();

		const actionButton = taskAlphaItem?.querySelector('button');
		if (actionButton) {
			await userEvent.click(actionButton);
			await expect(taskAlphaItem).toHaveAttribute('data-selected');
		}
	},
};
