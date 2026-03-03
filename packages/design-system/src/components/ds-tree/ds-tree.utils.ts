import { createTreeCollection } from '@ark-ui/react/tree-view';

import type { DsTreeNode } from './ds-tree.types';

export const createDsTreeCollection = <T extends DsTreeNode>(nodes: T[]) =>
	createTreeCollection<T>({
		nodeToValue: (node) => node.id,
		nodeToString: (node) => node.name,
		// Ark requires rootNode typed as T; the root is a synthetic container never exposed to consumers
		rootNode: { id: 'ROOT', name: '', children: nodes } as unknown as T,
	});
