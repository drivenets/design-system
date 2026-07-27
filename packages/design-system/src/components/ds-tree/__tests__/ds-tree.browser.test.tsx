import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsTree } from '../ds-tree';
import { createDsTreeCollection } from '../ds-tree.utils';
import type { DsTreeNode } from '../ds-tree.types';

const nodes: DsTreeNode[] = [
	{
		id: 'network',
		name: 'Network',
		children: [
			{ id: 'firewall-1', name: 'Firewall Primary' },
			{ id: 'firewall-2', name: 'Firewall Secondary' },
		],
	},
];

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

describe('DsTree', () => {
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
