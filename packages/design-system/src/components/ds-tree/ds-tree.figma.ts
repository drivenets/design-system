// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=34873-157787
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-tree
// component=DsTree
//
// `DsTreeV2` is the collection-driven tree. Figma models the branch/item sub-parts
// (branch-control, branch-text, item-text, indicators, indent guide) as separate
// components and exposes `side nav` / `map` / `workflows` preview presets via
// `Property 1`, but code never hand-assembles those parts: it composes `DsTree.Root`
// with a `createDsTreeCollection` data source and one recursive `DsTree.NodeProvider`
// renderer. The snippet is the canonical usage referenced by the Storybook docs.
import figma from 'figma';

export default {
	example: figma.code`const collection = createDsTreeCollection([
	{
		id: 'network',
		name: 'Network',
		children: [
			{ id: 'routers', name: 'Routers', children: [{ id: 'router-1', name: 'Router Alpha' }] },
			{ id: 'firewall-1', name: 'Firewall Primary' },
		],
	},
	{ id: 'monitoring', name: 'Monitoring', children: [{ id: 'alerts', name: 'Alerts' }] },
]);

<DsTree.Root collection={collection} defaultExpandedValue={['network']}>
	<DsTree.Tree>
		{collection.rootNode.children?.map((node, index) => (
			<DsTree.NodeProvider key={node.id} node={node} indexPath={[index]}>
				{node.children ? (
					<DsTree.Branch>
						<DsTree.BranchControl>
							<DsTree.BranchIndicator />
							<DsTree.BranchText>{node.name}</DsTree.BranchText>
						</DsTree.BranchControl>
						<DsTree.BranchContent>
							<DsTree.BranchIndentGuide />
							{/* recurse over node.children with another DsTree.NodeProvider */}
						</DsTree.BranchContent>
					</DsTree.Branch>
				) : (
					<DsTree.Item>
						<DsTree.ItemIndicator />
						<DsTree.ItemText>{node.name}</DsTree.ItemText>
					</DsTree.Item>
				)}
			</DsTree.NodeProvider>
		))}
	</DsTree.Tree>
</DsTree.Root>`,
	imports: ["import { DsTree, createDsTreeCollection } from '@drivenets/design-system';"],
	id: 'ds-tree',
	metadata: { nestable: false },
} satisfies figma.Template;
