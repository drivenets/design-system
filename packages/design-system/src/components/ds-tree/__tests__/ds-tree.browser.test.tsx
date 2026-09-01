import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsFilterStatusIcon } from '../../ds-filter-status-icon';
import { DsIcon } from '../../ds-icon';
import { DsTree } from '../ds-tree';
import { createDsTreeCollection } from '../ds-tree.utils';
import type { DsTreeNode } from '../ds-tree.types';

const nodes: DsTreeNode[] = [
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
				],
			},
			{ id: 'firewall-1', name: 'Firewall Primary' },
			{ id: 'firewall-2', name: 'Firewall Secondary' },
		],
	},
];

const checkboxNodes: DsTreeNode[] = [
	{
		id: 'devices',
		name: 'Devices',
		children: [
			{
				id: 'optical',
				name: 'Optical',
				children: [{ id: 'olt', name: 'OLT', icon: 'layers' }],
			},
		],
	},
];

const workflowNodes: DsTreeNode[] = [
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
		],
	},
];

// Tree items expose their node id via a `data-value` attribute; matching on it keeps
// selection precise even when accessible names are duplicated across branches.
const getTreeItem = (value: string) =>
	page.elementLocator(document.querySelector(`[role="treeitem"][data-value="${value}"]`) as HTMLElement);

const TreeNode = ({ node, indexPath }: { node: DsTreeNode; indexPath: number[] }) => (
	<DsTree.NodeProvider node={node} indexPath={indexPath}>
		{node.children ? (
			<DsTree.Branch>
				<DsTree.BranchControl>
					<DsTree.BranchIndicator />
					<DsTree.BranchText>{node.name}</DsTree.BranchText>
				</DsTree.BranchControl>
				<DsTree.BranchContent>
					{node.children.map((child, index) => (
						<TreeNode key={child.id} node={child} indexPath={[...indexPath, index]} />
					))}
				</DsTree.BranchContent>
			</DsTree.Branch>
		) : (
			<DsTree.Item>
				<DsTree.ItemText>{node.name}</DsTree.ItemText>
			</DsTree.Item>
		)}
	</DsTree.NodeProvider>
);

const CheckboxTreeNode = ({ node, indexPath }: { node: DsTreeNode; indexPath: number[] }) => (
	<DsTree.NodeProvider node={node} indexPath={indexPath}>
		{node.children ? (
			<DsTree.Branch>
				<DsTree.BranchControl>
					<DsTree.BranchIndicator />
					<DsTree.NodeCheckbox />
					<DsTree.BranchText>{node.name}</DsTree.BranchText>
				</DsTree.BranchControl>
				<DsTree.BranchContent>
					{node.children.map((child, index) => (
						<CheckboxTreeNode key={child.id} node={child} indexPath={[...indexPath, index]} />
					))}
				</DsTree.BranchContent>
			</DsTree.Branch>
		) : (
			<DsTree.Item>
				<DsTree.NodeCheckbox />
				<DsTree.ItemText>
					{node.icon && <DsIcon icon={node.icon} size="tiny" />}
					{node.name}
				</DsTree.ItemText>
			</DsTree.Item>
		)}
	</DsTree.NodeProvider>
);

const WorkflowTreeNode = ({
	node,
	indexPath,
	onNavigate,
}: {
	node: DsTreeNode;
	indexPath: number[];
	onNavigate: (nodeId: string) => void;
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
					{node.children.map((child, index) => (
						<WorkflowTreeNode
							key={child.id}
							node={child}
							indexPath={[...indexPath, index]}
							onNavigate={onNavigate}
						/>
					))}
				</DsTree.BranchContent>
			</DsTree.Branch>
		) : (
			<DsTree.Item>
				<DsTree.ItemText>
					{node.status && <DsFilterStatusIcon status={node.status} size="tiny" />}
					{node.icon && <DsIcon icon={node.icon} size="tiny" />}
					{node.name}
				</DsTree.ItemText>
				<DsTree.ItemAction onClick={() => onNavigate(node.id)}>
					<DsIcon icon="outbound" size="tiny" />
				</DsTree.ItemAction>
			</DsTree.Item>
		)}
	</DsTree.NodeProvider>
);

describe('DsTree', () => {
	it('expands a branch and selects a leaf node', async () => {
		const collection = createDsTreeCollection(nodes);

		await page.render(
			<DsTree.Root collection={collection} defaultExpandedValue={['network']}>
				<DsTree.Tree>
					{collection.rootNode.children?.map((node, index) => (
						<TreeNode key={node.id} node={node} indexPath={[index]} />
					))}
				</DsTree.Tree>
			</DsTree.Root>,
		);

		await expect.element(getTreeItem('network')).toBeVisible();
		await expect.element(getTreeItem('routers')).toBeVisible();

		await getTreeItem('routers').getByRole('button').click();

		const routerAlpha = getTreeItem('router-1');
		await routerAlpha.click();
		await expect.element(routerAlpha).toHaveAttribute('aria-selected', 'true');
	});

	it('reflects selection and expansion through controlled state', async () => {
		function Controlled() {
			const collection = createDsTreeCollection(nodes);
			const [selectedValue, setSelectedValue] = useState<string[]>([]);
			const [expandedValue, setExpandedValue] = useState(['network']);

			return (
				<div>
					<div>Selected: {selectedValue.length > 0 ? selectedValue.join(', ') : 'none'}</div>
					<div>Expanded: {expandedValue.length > 0 ? expandedValue.join(', ') : 'none'}</div>
					<DsTree.Root
						collection={collection}
						selectedValue={selectedValue}
						onSelectionChange={(details) => setSelectedValue(details.selectedValue)}
						expandedValue={expandedValue}
						onExpandedChange={(details) => setExpandedValue(details.expandedValue)}
					>
						<DsTree.Tree>
							{collection.rootNode.children?.map((node, index) => (
								<TreeNode key={node.id} node={node} indexPath={[index]} />
							))}
						</DsTree.Tree>
					</DsTree.Root>
				</div>
			);
		}

		await page.render(<Controlled />);

		await expect.element(page.getByText('Selected: none')).toBeVisible();
		await expect.element(page.getByText(/Expanded:.*network/)).toBeVisible();

		await getTreeItem('routers').getByRole('button').click();
		await expect.element(page.getByText(/Expanded:.*routers/)).toBeVisible();

		await getTreeItem('router-1').click();
		await expect.element(page.getByText('Selected: router-1')).toBeVisible();
	});

	it('calls onCheckedChange when a leaf checkbox is toggled', async () => {
		const onCheckedChange = vi.fn();
		const collection = createDsTreeCollection(checkboxNodes);

		await page.render(
			<DsTree.Root
				collection={collection}
				defaultExpandedValue={['devices', 'optical']}
				onCheckedChange={onCheckedChange}
			>
				<DsTree.Tree>
					{collection.rootNode.children?.map((node, index) => (
						<CheckboxTreeNode key={node.id} node={node} indexPath={[index]} />
					))}
				</DsTree.Tree>
			</DsTree.Root>,
		);

		await expect.element(getTreeItem('devices')).toBeVisible();
		await expect.element(getTreeItem('olt')).toBeVisible();

		await getTreeItem('olt').getByRole('checkbox').click();
		expect(onCheckedChange).toHaveBeenCalled();
	});

	it('marks disabled nodes and keeps selection when an item action fires', async () => {
		const onSelectionChange = vi.fn();
		const onNavigate = vi.fn();
		const collection = createDsTreeCollection(workflowNodes);

		await page.render(
			<DsTree.Root
				collection={collection}
				defaultExpandedValue={['workflow-1234', 'sw-running-02', 'sw-running-06']}
				onSelectionChange={onSelectionChange}
			>
				<DsTree.Tree>
					{collection.rootNode.children?.map((node, index) => (
						<WorkflowTreeNode key={node.id} node={node} indexPath={[index]} onNavigate={onNavigate} />
					))}
				</DsTree.Tree>
			</DsTree.Root>,
		);

		await expect.element(getTreeItem('workflow-1234')).toBeVisible();
		await expect.element(getTreeItem('task-1')).toBeVisible();

		await expect.element(getTreeItem('task-3')).toHaveAttribute('data-disabled');
		await expect.element(getTreeItem('sw-running-06')).toHaveAttribute('data-disabled');

		const taskAlpha = getTreeItem('task-1');
		await taskAlpha.click();
		await expect.element(taskAlpha).toHaveAttribute('aria-selected', 'true');
		expect(onSelectionChange).toHaveBeenCalled();

		await taskAlpha.getByRole('button').click();
		await expect.element(taskAlpha).toHaveAttribute('aria-selected', 'true');
		expect(onNavigate).toHaveBeenCalledWith('task-1');
	});

	it('marks the controlled focusedValue node with data-focus', async () => {
		function Controlled() {
			const collection = createDsTreeCollection(nodes);
			const [focusedValue, setFocusedValue] = useState<string | null>('firewall-1');

			return (
				<DsTree.Root
					collection={collection}
					defaultExpandedValue={['network']}
					focusedValue={focusedValue}
					onFocusChange={(details) => setFocusedValue(details.focusedValue)}
				>
					<DsTree.Tree>
						{collection.rootNode.children?.map((node, index) => (
							<TreeNode key={node.id} node={node} indexPath={[index]} />
						))}
					</DsTree.Tree>
				</DsTree.Root>
			);
		}

		await page.render(<Controlled />);

		const primary = page.getByRole('treeitem', { name: /Firewall Primary/i });
		const secondary = page.getByRole('treeitem', { name: /Firewall Secondary/i });

		await expect.element(primary).toHaveAttribute('data-focus');
		await expect.element(secondary).not.toHaveAttribute('data-focus');
	});

	it('moves focus and calls onFocusChange when another node is clicked', async () => {
		const onFocusChange = vi.fn();

		function Controlled() {
			const collection = createDsTreeCollection(nodes);
			const [focusedValue, setFocusedValue] = useState<string | null>('firewall-1');

			return (
				<DsTree.Root
					collection={collection}
					defaultExpandedValue={['network']}
					focusedValue={focusedValue}
					onFocusChange={(details) => {
						setFocusedValue(details.focusedValue);
						onFocusChange(details.focusedValue);
					}}
				>
					<DsTree.Tree>
						{collection.rootNode.children?.map((node, index) => (
							<TreeNode key={node.id} node={node} indexPath={[index]} />
						))}
					</DsTree.Tree>
				</DsTree.Root>
			);
		}

		await page.render(<Controlled />);

		const secondary = page.getByRole('treeitem', { name: /Firewall Secondary/i });
		await secondary.click();

		await expect.element(secondary).toHaveAttribute('data-focus');
		expect(onFocusChange).toHaveBeenCalledWith('firewall-2');
	});
});
