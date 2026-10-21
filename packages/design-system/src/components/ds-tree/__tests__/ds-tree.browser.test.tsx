import { useEffect, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page } from 'vitest/browser';
import { DsFilterStatusIcon } from '../../ds-filter-status-icon';
import { DsIcon } from '../../ds-icon';
import { DsPopover } from '../../ds-popover';
import { DsTree } from '../ds-tree';
import styles from '../ds-tree.module.scss';
import { createDsTreeCollection } from '../ds-tree.utils';
import type { DsTreeDropPosition, DsTreeNode, DsTreeRootProps, DsTreeSortableProps } from '../ds-tree.types';

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

describe('DsTree row parts forward injected props', () => {
	// Regression: the row parts used to destructure only className/style/children, so
	// an `asChild` trigger wrapping a row injected handlers into a void and the popover
	// silently never opened.
	it('opens a wrapping DsPopover.Trigger rendered asChild around a branch row', async () => {
		const collection = createDsTreeCollection(nodes);

		await page.render(
			<DsTree.Root collection={collection}>
				<DsTree.Tree>
					<DsTree.NodeProvider node={nodes[0]} indexPath={[0]}>
						<DsTree.Branch>
							<DsPopover.Root>
								<DsPopover.Trigger>
									<DsTree.BranchControl>
										<DsTree.BranchText>Network</DsTree.BranchText>
									</DsTree.BranchControl>
								</DsPopover.Trigger>
								<DsPopover.Panel>
									<DsPopover.Header>Network pages</DsPopover.Header>
									<DsPopover.Content>
										<DsPopover.ContentItem>Routers and firewalls</DsPopover.ContentItem>
									</DsPopover.Content>
								</DsPopover.Panel>
							</DsPopover.Root>
						</DsTree.Branch>
					</DsTree.NodeProvider>
				</DsTree.Tree>
			</DsTree.Root>,
		);

		await expect.element(page.getByText(/routers and firewalls/i)).not.toBeVisible();

		await page.getByText('Network').click();

		await expect.element(page.getByRole('dialog', { name: /network pages/i })).toBeVisible();
	});

	it('opens a wrapping DsPopover.Trigger rendered asChild around a leaf item', async () => {
		const collection = createDsTreeCollection(nodes);
		const leaf: DsTreeNode = { id: 'firewall-1', name: 'Firewall Primary' };

		await page.render(
			<DsTree.Root collection={collection}>
				<DsTree.Tree>
					<DsTree.NodeProvider node={leaf} indexPath={[0, 1]}>
						<DsPopover.Root>
							<DsPopover.Trigger>
								<DsTree.Item>
									<DsTree.ItemText>Firewall Primary</DsTree.ItemText>
								</DsTree.Item>
							</DsPopover.Trigger>
							<DsPopover.Panel>
								<DsPopover.Header>Firewall actions</DsPopover.Header>
								<DsPopover.Content>
									<DsPopover.ContentItem>Restart or drain</DsPopover.ContentItem>
								</DsPopover.Content>
							</DsPopover.Panel>
						</DsPopover.Root>
					</DsTree.NodeProvider>
				</DsTree.Tree>
			</DsTree.Root>,
		);

		await expect.element(page.getByText(/restart or drain/i)).not.toBeVisible();

		// `onClick` was always forwarded explicitly; the ARIA wiring the trigger
		// injects is what used to be dropped, leaving the row mute to screen readers.
		const row = page.getByRole('treeitem', { name: /firewall primary/i });
		await expect.element(row).toHaveAttribute('aria-haspopup', 'dialog');
		await expect.element(row).toHaveAttribute('aria-expanded', 'false');

		await page.getByText('Firewall Primary').click();

		await expect.element(page.getByRole('dialog', { name: /firewall actions/i })).toBeVisible();
		await expect.element(row).toHaveAttribute('aria-expanded', 'true');
	});
});

const sortableNodes: DsTreeNode[] = [
	{
		id: 'network',
		name: 'Network',
		children: [
			{ id: 'router-1', name: 'Router Alpha' },
			{ id: 'router-2', name: 'Router Beta' },
			{ id: 'router-3', name: 'Router Gamma', disabled: true },
		],
	},
	{ id: 'archive', name: 'Archive', children: [] },
	{
		id: 'monitoring',
		name: 'Monitoring',
		children: [
			{ id: 'alerts', name: 'Alerts' },
			{ id: 'dashboards', name: 'Dashboards' },
		],
	},
	{ id: 'logs', name: 'Logs' },
];

const columnGroupNodes: DsTreeNode[] = [
	{
		id: 'general',
		name: 'General',
		children: [
			{ id: 'name', name: 'Name' },
			{ id: 'status', name: 'Status' },
			{ id: 'created', name: 'Created' },
		],
	},
	{
		id: 'connectivity',
		name: 'Connectivity',
		children: [
			{ id: 'ip-address', name: 'IP address' },
			{ id: 'mac-address', name: 'MAC address' },
		],
	},
	{ id: 'location', name: 'Location', children: [{ id: 'site', name: 'Site' }] },
];

// Same rule as the "Sortable same group only" story (column manager)
const sameGroupOnly: DsTreeSortableProps['canDrop'] = ({ position, fromParent, toParent }) =>
	position !== 'inside' && fromParent?.id === toParent?.id;

type OnCollectionChange = DsTreeSortableProps['onCollectionChange'];

const SortableTreeNode = ({
	node,
	indexPath,
	withoutHandle,
}: {
	node: DsTreeNode;
	indexPath: number[];
	withoutHandle?: string[];
}) => {
	const handle = withoutHandle?.includes(node.id) ? null : <DsTree.DragHandle />;

	return (
		<DsTree.NodeProvider node={node} indexPath={indexPath}>
			{node.children ? (
				<DsTree.Branch>
					<DsTree.BranchControl>
						<DsTree.BranchIndicator />
						{handle}
						<DsTree.NodeCheckbox />
						<DsTree.BranchText>{node.name}</DsTree.BranchText>
					</DsTree.BranchControl>
					<DsTree.BranchContent>
						{node.children.map((child, index) => (
							<SortableTreeNode
								key={child.id}
								node={child}
								indexPath={[...indexPath, index]}
								withoutHandle={withoutHandle}
							/>
						))}
					</DsTree.BranchContent>
				</DsTree.Branch>
			) : (
				<DsTree.Item>
					{handle}
					<DsTree.NodeCheckbox />
					<DsTree.ItemText>{node.name}</DsTree.ItemText>
				</DsTree.Item>
			)}
		</DsTree.NodeProvider>
	);
};

type SortableTreeProps = Partial<Pick<DsTreeSortableProps, 'canDrop' | 'onCollectionChange'>> &
	Pick<
		DsTreeRootProps,
		| 'onSelectionChange'
		| 'onCheckedChange'
		| 'defaultCheckedValue'
		| 'expandedValue'
		| 'defaultExpandedValue'
		| 'onExpandedChange'
	> & {
		nodes?: DsTreeNode[];
		/** Keep rendering the initial collection instead of the `next` one reported on drop */
		ignoreMoves?: boolean;
		withoutHandle?: string[];
	};

const SortableTree = ({
	nodes = sortableNodes,
	canDrop,
	onCollectionChange,
	ignoreMoves = false,
	withoutHandle,
	defaultExpandedValue = ['network'],
	...rootProps
}: SortableTreeProps) => {
	const [collection, setCollection] = useState(() => createDsTreeCollection(nodes));

	return (
		<DsTree.Root collection={collection} defaultExpandedValue={defaultExpandedValue} {...rootProps}>
			<DsTree.Sortable
				canDrop={canDrop}
				onCollectionChange={(next, details) => {
					onCollectionChange?.(next, details);

					if (!ignoreMoves) {
						setCollection(next);
					}
				}}
			>
				<DsTree.Tree>
					{collection.rootNode.children?.map((node, index) => (
						<SortableTreeNode key={node.id} node={node} indexPath={[index]} withoutHandle={withoutHandle} />
					))}
				</DsTree.Tree>
			</DsTree.Sortable>
		</DsTree.Root>
	);
};

// Generated SCSS typings make classes `string` in typecheck but `string | undefined` in plain eslint
const byClass = (className: string | undefined) => `.${className ?? ''}`;

// Rows are Ark `item` / `branch-control` parts; both carry the node id in `data-value`.
const rowOf = (value: string) =>
	document.querySelector(
		`[data-value="${value}"]:is([data-part="item"], [data-part="branch-control"])`,
	) as HTMLElement;

const branchOf = (value: string) => rowOf(value).closest('[data-part="branch"]') as HTMLElement;

// The handle is hidden from assistive tech while drag is pointer-only, so it has no role to query
const handleOf = (value: string) =>
	rowOf(value).querySelector(byClass(styles.dragHandle)) as HTMLButtonElement;

const rootDropZone = () => document.querySelector('[data-drop-zone="root-end"]') as HTMLElement;

// The overlay clone has no a11y role or Ark part; its CSS module class is the only hook
const dragPreview = () => document.querySelector<HTMLElement>(byClass(styles.dragPreview));

const childOrder = (value?: string) => {
	const parent = value
		? branchOf(value).querySelector(':scope > [data-part="branch-content"]')
		: document.querySelector('[role="tree"]');

	return Array.from(parent?.children ?? [])
		.filter((element) => element.matches('[role="treeitem"]'))
		.map((element) => element.getAttribute('data-value'));
};

/** Every drop indicator currently in the DOM: `value:position` row edges and receiving groups. */
const dropIndicators = () => ({
	rows: Array.from(document.querySelectorAll('[data-drop]')).map(
		(element) =>
			`${element.getAttribute('data-value') ?? element.getAttribute('data-drop-zone') ?? ''}:${element.getAttribute('data-drop') ?? ''}`,
	),
	containers: Array.from(document.querySelectorAll('[data-drop-container]')).map((element) =>
		element.getAttribute('data-value'),
	),
});

const noIndicators = { rows: [], containers: [] };

const isTransparent = (color: string) => color === 'rgba(0, 0, 0, 0)' || color === 'transparent';

const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const pointer = { x: 0, y: 0 };

const firePointer = (type: string, target: EventTarget, clientX: number, clientY: number) => {
	pointer.x = clientX;
	pointer.y = clientY;
	target.dispatchEvent(
		new PointerEvent(type, { clientX, clientY, bubbles: true, isPrimary: true, button: 0, pointerId: 1 }),
	);
};

/** Presses `from` (the row's drag handle by default) and moves past the 4px activation distance. */
const startDrag = async (value: string, from: Element = handleOf(value)) => {
	const rect = from.getBoundingClientRect();
	const x = rect.left + rect.width / 2;
	const y = rect.top + rect.height / 2;

	firePointer('pointerdown', from, x, y);
	firePointer('pointermove', document, x, y + 6);
	await nextFrame();
};

/** Moves the pointer to `ratio` of the target's height: 0 is its top edge, 1 its bottom edge. */
const moveOver = async (target: string | HTMLElement, ratio: number) => {
	const rect = (typeof target === 'string' ? rowOf(target) : target).getBoundingClientRect();

	firePointer('pointermove', document, pointer.x, rect.top + rect.height * ratio);
	await nextFrame();
};

const release = async () => {
	firePointer('pointerup', document, pointer.x, pointer.y);
	await nextFrame();
};

const pressEscape = async () => {
	document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }));
	await nextFrame();
};

const drag = async (value: string, target: string | HTMLElement, ratio: number) => {
	await startDrag(value);
	await moveOver(target, ratio);
	await release();
};

const node = (id: string): unknown => expect.objectContaining({ id });

const moveDetails = (details: {
	node: string;
	target: string;
	position: DsTreeDropPosition;
	fromParent: string | null;
	toParent: string | null;
}) => ({
	node: node(details.node),
	target: node(details.target),
	position: details.position,
	fromParent: details.fromParent === null ? null : node(details.fromParent),
	toParent: details.toParent === null ? null : node(details.toParent),
});

const ROOT_ORDER = ['network', 'archive', 'monitoring', 'logs'];
const NETWORK_ORDER = ['router-1', 'router-2', 'router-3'];

describe('DsTree.Sortable', () => {
	describe('drag activation', () => {
		it('leaves rows plain and non-draggable without Sortable', async () => {
			const onSelectionChange = vi.fn();
			const collection = createDsTreeCollection(sortableNodes);

			await page.render(
				<DsTree.Root
					collection={collection}
					defaultExpandedValue={['network']}
					onSelectionChange={onSelectionChange}
				>
					<DsTree.Tree>
						{collection.rootNode.children?.map((child, index) => (
							<SortableTreeNode key={child.id} node={child} indexPath={[index]} />
						))}
					</DsTree.Tree>
				</DsTree.Root>,
			);

			await expect.element(getTreeItem('logs')).toBeVisible();
			expect(document.querySelector(byClass(styles.dragHandle))).toBeNull();
			expect(rootDropZone()).toBeNull();

			await startDrag('logs', rowOf('logs'));
			await moveOver('archive', 0.1);
			await release();

			expect(document.querySelector('[data-source], [data-drop], [data-drop-container]')).toBeNull();
			expect(dragPreview()).toBeNull();
			expect(childOrder()).toEqual(ROOT_ORDER);

			await getTreeItem('logs').click();
			await expect.element(getTreeItem('logs')).toHaveAttribute('aria-selected', 'true');
		});

		it('starts a drag only from the drag handle', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} withoutHandle={['archive']} />);

			expect(handleOf('archive')).toBeNull();

			await startDrag('archive', rowOf('archive'));
			await moveOver('logs', 0.8);
			await release();

			await startDrag('logs', rowOf('logs').querySelector('[data-part="item-text"]') as HTMLElement);
			await moveOver('network', 0.1);
			expect(document.querySelector('[data-source]')).toBeNull();
			expect(dragPreview()).toBeNull();
			await release();

			expect(onCollectionChange).not.toHaveBeenCalled();
			expect(childOrder()).toEqual(ROOT_ORDER);

			await startDrag('logs');
			await expect.element(page.elementLocator(rowOf('logs'))).toHaveAttribute('data-source');
			expect(dragPreview()).not.toBeNull();
			await pressEscape();
			await release();
		});

		it('keeps row presses selecting, expanding and checking inside Sortable', async () => {
			const onCheckedChange = vi.fn();
			await page.render(<SortableTree onCheckedChange={onCheckedChange} />);

			await page.getByText('Logs').click();
			await expect.element(getTreeItem('logs')).toHaveAttribute('aria-selected', 'true');

			await page.getByText('Monitoring').click();
			await expect.element(getTreeItem('monitoring')).toHaveAttribute('aria-expanded', 'true');

			await getTreeItem('logs').getByRole('checkbox').click();
			expect(onCheckedChange).toHaveBeenCalledWith(expect.objectContaining({ checkedValue: ['logs'] }));

			expect(document.querySelector('[data-source]')).toBeNull();
		});

		it('does not select or expand when the handle is clicked without dragging', async () => {
			const onSelectionChange = vi.fn();
			const onExpandedChange = vi.fn();
			await page.render(
				<SortableTree onSelectionChange={onSelectionChange} onExpandedChange={onExpandedChange} />,
			);

			await expect.element(page.getByRole('treeitem', { name: 'Logs', exact: true })).toBeInTheDocument();

			await page.elementLocator(handleOf('logs')).click();
			await page.elementLocator(handleOf('monitoring')).click();

			await expect.element(getTreeItem('logs')).toHaveAttribute('aria-selected', 'false');
			await expect.element(getTreeItem('monitoring')).toHaveAttribute('aria-expanded', 'false');
			expect(onSelectionChange).not.toHaveBeenCalled();
			expect(onExpandedChange).not.toHaveBeenCalled();
		});

		it('disables the handle of a disabled node so it cannot be dragged', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			expect(handleOf('router-3')).toBeDisabled();

			await startDrag('router-3');
			await moveOver('logs', 0.8);
			expect(document.querySelector('[data-source]')).toBeNull();
			expect(dragPreview()).toBeNull();
			await release();

			expect(onCollectionChange).not.toHaveBeenCalled();
			expect(childOrder('network')).toEqual(NETWORK_ORDER);
		});
	});

	describe('drop zones', () => {
		it('drops after the bottom part of a row, under the same parent', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			await startDrag('router-1');
			await moveOver('router-3', 0.2);
			await expect.poll(dropIndicators).toEqual({ rows: ['router-3:before'], containers: ['network'] });

			await moveOver('router-3', 0.8);
			await expect.poll(dropIndicators).toEqual({ rows: ['router-3:after'], containers: ['network'] });
			await release();

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'router-1',
					target: 'router-3',
					position: 'after',
					fromParent: 'network',
					toParent: 'network',
				}),
			);
			expect(childOrder('network')).toEqual(['router-2', 'router-3', 'router-1']);
		});

		it('drops before the top part of a root-level row, marked by the line alone', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			await startDrag('logs');
			await moveOver('archive', 0.1);
			await expect.poll(dropIndicators).toEqual({ rows: ['archive:before'], containers: [] });
			await release();

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'logs',
					target: 'archive',
					position: 'before',
					fromParent: null,
					toParent: null,
				}),
			);
			expect(childOrder()).toEqual(['network', 'logs', 'archive', 'monitoring']);
			await expect.poll(dropIndicators).toEqual(noIndicators);
		});

		it('offers before, inside and after on a collapsed group, and expands it on an inside drop', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			await startDrag('router-1');
			await moveOver('monitoring', 0.1);
			await expect.poll(dropIndicators).toEqual({ rows: ['monitoring:before'], containers: [] });

			await moveOver('monitoring', 0.9);
			await expect.poll(dropIndicators).toEqual({ rows: ['monitoring:after'], containers: [] });

			await moveOver('monitoring', 0.5);
			await expect.poll(dropIndicators).toEqual({ rows: ['monitoring:inside'], containers: ['monitoring'] });
			await expect.element(getTreeItem('monitoring')).toHaveAttribute('aria-expanded', 'false');
			await release();

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'router-1',
					target: 'monitoring',
					position: 'inside',
					fromParent: 'network',
					toParent: 'monitoring',
				}),
			);
			await expect.element(getTreeItem('monitoring')).toHaveAttribute('aria-expanded', 'true');
			expect(childOrder('monitoring')).toEqual(['router-1', 'alerts', 'dashboards']);
			await expect.element(getTreeItem('router-1')).toBeVisible();
		});

		it('treats the bottom edge of an expanded group as inside, never after', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			await startDrag('logs');
			await moveOver('network', 0.1);
			await expect.poll(dropIndicators).toEqual({ rows: ['network:before'], containers: [] });

			await moveOver('network', 0.95);
			await expect.poll(dropIndicators).toEqual({ rows: ['network:inside'], containers: ['network'] });
			await release();

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'logs',
					target: 'network',
					position: 'inside',
					fromParent: null,
					toParent: 'network',
				}),
			);
			expect(childOrder('network')).toEqual(['logs', ...NETWORK_ORDER]);
		});

		it('drops into an empty group, which then expands and collapses like any branch', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			await startDrag('router-1');
			await moveOver('archive', 0.5);
			await expect.poll(dropIndicators).toEqual({ rows: ['archive:inside'], containers: ['archive'] });
			await release();

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'router-1',
					target: 'archive',
					position: 'inside',
					fromParent: 'network',
					toParent: 'archive',
				}),
			);
			await expect.element(getTreeItem('archive')).toHaveAttribute('aria-expanded', 'true');
			expect(childOrder('archive')).toEqual(['router-1']);
			await expect.element(getTreeItem('router-1')).toBeVisible();

			await page.getByText('Archive').click();
			await expect.element(getTreeItem('archive')).toHaveAttribute('aria-expanded', 'false');
			await expect.poll(() => rowOf('router-1').checkVisibility()).toBe(false);
		});

		it('never nests under a leaf: its halves are before and after', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			await startDrag('archive');
			await moveOver('logs', 0.45);
			await expect.poll(dropIndicators).toEqual({ rows: ['logs:before'], containers: [] });

			await moveOver('logs', 0.55);
			await expect.poll(dropIndicators).toEqual({ rows: ['logs:after'], containers: [] });
			await release();

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({ node: 'archive', target: 'logs', position: 'after', fromParent: null, toParent: null }),
			);
			expect(childOrder()).toEqual(['network', 'monitoring', 'logs', 'archive']);
		});

		it('moves a node out of a group to the root level', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			await drag('router-2', 'logs', 0.8);

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'router-2',
					target: 'logs',
					position: 'after',
					fromParent: 'network',
					toParent: null,
				}),
			);
			expect(childOrder()).toEqual([...ROOT_ORDER, 'router-2']);
			expect(childOrder('network')).toEqual(['router-1', 'router-3']);
		});

		it('appends to the root list from the empty space below the last row', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			await startDrag('router-1');
			await moveOver(rootDropZone(), 0.5);
			await expect.poll(dropIndicators).toEqual({ rows: ['root-end:after'], containers: [] });
			expect(getComputedStyle(rootDropZone(), '::before').top).toBe('0px');
			await release();

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'router-1',
					target: 'logs',
					position: 'after',
					fromParent: 'network',
					toParent: null,
				}),
			);
			expect(childOrder()).toEqual([...ROOT_ORDER, 'router-1']);
		});

		it('ignores rows that stay mounted inside a collapsed group', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			const alerts = page.getByText('Alerts');

			await page.getByText('Monitoring').click();
			await expect.element(alerts).toBeVisible();
			await page.getByText('Monitoring').click();
			await expect.element(alerts).not.toBeVisible();
			await expect.element(alerts).toBeInTheDocument();

			await startDrag('router-1');

			const seen = new Set<string>();
			const { top } = rowOf('monitoring').getBoundingClientRect();
			const { bottom } = rowOf('logs').getBoundingClientRect();

			for (let y = top + 1; y < bottom; y += 3) {
				firePointer('pointermove', document, pointer.x, y);
				await nextFrame();
				dropIndicators().rows.forEach((row) => seen.add(row));
				dropIndicators().containers.forEach((container) => seen.add(String(container)));
			}

			expect(Array.from(seen).filter((entry) => /alerts|dashboards/.test(entry))).toEqual([]);
			expect(seen).toContain('logs:before');

			await moveOver('logs', 0.2);
			await release();

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'router-1',
					target: 'logs',
					position: 'before',
					fromParent: 'network',
					toParent: null,
				}),
			);
		});

		it('drops on the slot the indicator shows when released before it catches up', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			await startDrag('archive');
			await moveOver('monitoring', 0.5);
			await expect.poll(dropIndicators).toEqual({ rows: ['monitoring:inside'], containers: ['monitoring'] });

			// Release in the same task as the last move, before React renders the slot under the pointer
			const rect = rowOf('network').getBoundingClientRect();
			firePointer('pointermove', document, pointer.x, rect.top + rect.height * 0.1);
			firePointer('pointerup', document, pointer.x, pointer.y);
			await nextFrame();

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'archive',
					target: 'monitoring',
					position: 'inside',
					fromParent: null,
					toParent: 'monitoring',
				}),
			);
			expect(childOrder('monitoring')).toEqual(['archive', 'alerts', 'dashboards']);
		});
	});

	describe('auto-expand', () => {
		it('expands a collapsed group after hovering its inside zone for ~500ms', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			await startDrag('logs');
			await moveOver('monitoring', 0.5);
			await expect.poll(dropIndicators).toEqual({ rows: ['monitoring:inside'], containers: ['monitoring'] });
			const hoverStart = performance.now();
			expect(getTreeItem('monitoring').element()).toHaveAttribute('aria-expanded', 'false');

			await expect
				.poll(() => getTreeItem('monitoring').element().getAttribute('aria-expanded'), { timeout: 2000 })
				.toBe('true');
			expect(performance.now() - hoverStart).toBeGreaterThan(400);
			expect(dragPreview()).not.toBeNull();

			await pressEscape();
			await release();
			expect(onCollectionChange).not.toHaveBeenCalled();
		});

		it('keeps the hover timer running while the tree re-renders', async () => {
			function Ticking() {
				const [tick, setTick] = useState(0);

				useEffect(() => {
					const interval = setInterval(() => setTick((value) => value + 1), 50);

					return () => clearInterval(interval);
				}, []);

				return (
					<>
						<div data-ticks={tick} />
						<SortableTree canDrop={() => tick >= 0} />
					</>
				);
			}

			await page.render(<Ticking />);

			await startDrag('logs');
			await moveOver('monitoring', 0.5);
			await expect.poll(dropIndicators).toEqual({ rows: ['monitoring:inside'], containers: ['monitoring'] });
			const ticksAtHover = Number(document.querySelector('[data-ticks]')?.getAttribute('data-ticks'));

			await expect
				.poll(() => getTreeItem('monitoring').element().getAttribute('aria-expanded'), { timeout: 2000 })
				.toBe('true');
			expect(Number(document.querySelector('[data-ticks]')?.getAttribute('data-ticks'))).toBeGreaterThan(
				ticksAtHover + 3,
			);

			await pressEscape();
			await release();
		});

		it('does not expand a group whose inside slot canDrop rejects', async () => {
			const onExpandedChange = vi.fn();
			await page.render(
				<SortableTree
					canDrop={({ position }) => position !== 'inside'}
					onExpandedChange={onExpandedChange}
				/>,
			);

			await startDrag('logs');
			await moveOver('monitoring', 0.5);
			await expect.poll(() => dragPreview()?.hasAttribute('data-rejected')).toBe(true);

			await wait(800);
			await expect.element(getTreeItem('monitoring')).toHaveAttribute('aria-expanded', 'false');

			await release();
			await expect.element(getTreeItem('monitoring')).toHaveAttribute('aria-expanded', 'false');
			expect(onExpandedChange).not.toHaveBeenCalled();
		});

		it('reports the expansion through onExpandedChange under a controlled expandedValue', async () => {
			const onExpandedChange = vi.fn();
			const onCollectionChange = vi.fn<OnCollectionChange>();

			function ControlledExpanded() {
				const [expandedValue, setExpandedValue] = useState(['network']);

				return (
					<SortableTree
						expandedValue={expandedValue}
						onExpandedChange={(details) => {
							onExpandedChange(details.expandedValue);
							setExpandedValue(details.expandedValue);
						}}
						onCollectionChange={onCollectionChange}
					/>
				);
			}

			await page.render(<ControlledExpanded />);

			await drag('router-1', 'monitoring', 0.5);

			expect(onCollectionChange).toHaveBeenCalledOnce();
			expect(onExpandedChange).toHaveBeenCalledExactlyOnceWith(
				expect.arrayContaining(['network', 'monitoring']),
			);
			await expect.element(getTreeItem('monitoring')).toHaveAttribute('aria-expanded', 'true');
			await expect.element(getTreeItem('router-1')).toBeVisible();
		});
	});

	describe('move rules', () => {
		it('reports the moved collection without mutating the rendered one', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree ignoreMoves onCollectionChange={onCollectionChange} />);

			await drag('logs', 'network', 0.1);

			expect(onCollectionChange).toHaveBeenCalledOnce();
			const [next] = onCollectionChange.mock.calls[0] ?? [];
			expect(next?.rootNode.children?.map((child) => child.id)).toEqual([
				'logs',
				'network',
				'archive',
				'monitoring',
			]);

			expect(sortableNodes.map((child) => child.id)).toEqual(ROOT_ORDER);
			await getTreeItem('archive').click();
			await expect.element(getTreeItem('archive')).toHaveAttribute('aria-selected', 'true');
			expect(childOrder()).toEqual(ROOT_ORDER);
		});

		it("ignores drops next to the node's own position", async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			const canDrop = vi.fn<NonNullable<DsTreeSortableProps['canDrop']>>(() => true);
			await page.render(<SortableTree canDrop={canDrop} onCollectionChange={onCollectionChange} />);

			await startDrag('router-2');

			for (const [target, ratio] of [
				['router-3', 0.2],
				['router-1', 0.8],
				['router-2', 0.5],
			] as const) {
				// Show a real slot first so the empty state below is a re-render, not a stale DOM
				await moveOver('logs', 0.2);
				await expect.poll(dropIndicators).toEqual({ rows: ['logs:before'], containers: [] });

				await moveOver(target, ratio);
				await expect.poll(dropIndicators).toEqual(noIndicators);
				expect(dragPreview()).not.toHaveAttribute('data-rejected');
			}

			await release();

			const neighborTargets = canDrop.mock.calls.filter(([details]) => details.target.id !== 'logs');
			expect(neighborTargets).toEqual([]);

			expect(onCollectionChange).not.toHaveBeenCalled();
			expect(childOrder('network')).toEqual(NETWORK_ORDER);
		});

		it('rejects slots canDrop refuses: no indicator, not-allowed cursor, no drop', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			const canDrop = vi.fn<NonNullable<DsTreeSortableProps['canDrop']>>(
				(details) => details.target.id !== 'archive',
			);
			await page.render(<SortableTree canDrop={canDrop} onCollectionChange={onCollectionChange} />);

			await startDrag('logs');
			await moveOver('monitoring', 0.1);
			await expect.poll(dropIndicators).toEqual({ rows: ['monitoring:before'], containers: [] });
			expect(dragPreview()).not.toHaveAttribute('data-rejected');
			expect(getComputedStyle(dragPreview() as HTMLElement).cursor).not.toBe('not-allowed');

			await moveOver('archive', 0.1);
			await expect.poll(dropIndicators).toEqual(noIndicators);
			expect(canDrop).toHaveBeenLastCalledWith(
				moveDetails({
					node: 'logs',
					target: 'archive',
					position: 'before',
					fromParent: null,
					toParent: null,
				}),
			);
			expect(dragPreview()).toHaveAttribute('data-rejected');
			expect(getComputedStyle(dragPreview() as HTMLElement).cursor).toBe('not-allowed');

			await moveOver('archive', 0.5);
			await expect.poll(() => canDrop.mock.lastCall?.[0].position).toBe('inside');
			expect(dropIndicators()).toEqual(noIndicators);
			await release();

			expect(onCollectionChange).not.toHaveBeenCalled();
			expect(childOrder()).toEqual(ROOT_ORDER);
			await expect.element(getTreeItem('archive')).toHaveAttribute('aria-expanded', 'false');
		});

		it('never drops a group into itself or its descendants, even when canDrop allows it', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			const canDrop = vi.fn<NonNullable<DsTreeSortableProps['canDrop']>>(() => true);
			await page.render(<SortableTree canDrop={canDrop} onCollectionChange={onCollectionChange} />);

			await startDrag('network');
			await moveOver('logs', 0.8);
			await expect.poll(dropIndicators).toEqual({ rows: ['logs:after'], containers: [] });
			expect(canDrop).toHaveBeenCalledWith(
				moveDetails({ node: 'network', target: 'logs', position: 'after', fromParent: null, toParent: null }),
			);

			for (const [target, ratio] of [
				['router-1', 0.2],
				['router-2', 0.8],
			] as const) {
				await moveOver(target, ratio);
				await expect.poll(() => dragPreview()?.hasAttribute('data-rejected')).toBe(true);
				expect(dropIndicators()).toEqual(noIndicators);
			}

			await release();

			const subtreeTargets = canDrop.mock.calls.filter(([details]) =>
				['network', ...NETWORK_ORDER].includes(details.target.id),
			);
			expect(subtreeTargets).toEqual([]);
			expect(onCollectionChange).not.toHaveBeenCalled();
			expect(childOrder()).toEqual(ROOT_ORDER);
			expect(childOrder('network')).toEqual(NETWORK_ORDER);
		});

		it('cancels on Escape without moving, expanding or leaving indicators behind', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			const onExpandedChange = vi.fn();
			await page.render(
				<SortableTree onCollectionChange={onCollectionChange} onExpandedChange={onExpandedChange} />,
			);

			await startDrag('router-1');
			await moveOver('monitoring', 0.5);
			await expect.poll(dropIndicators).toEqual({ rows: ['monitoring:inside'], containers: ['monitoring'] });

			await pressEscape();
			await expect
				.poll(() => document.querySelector('[data-source], [data-drop], [data-drop-container]'))
				.toBeNull();
			await expect.poll(dragPreview).toBeNull();

			// Past the auto-expand delay: the cancelled hover must not expand the group
			await wait(700);
			await release();

			expect(onCollectionChange).not.toHaveBeenCalled();
			expect(onExpandedChange).not.toHaveBeenCalled();
			await expect.element(getTreeItem('monitoring')).toHaveAttribute('aria-expanded', 'false');
			expect(childOrder('network')).toEqual(NETWORK_ORDER);
			expect(childOrder()).toEqual(ROOT_ORDER);
		});
	});

	describe('feedback', () => {
		it('marks the slot with a dashed line alone, indented to the depth the node lands at', async () => {
			await page.render(<SortableTree />);

			const lineOf = (value: string) => getComputedStyle(rowOf(value), '::before');
			const expectNoGroupHighlight = (value: string) => {
				const group = getComputedStyle(branchOf(value));
				expect(isTransparent(group.backgroundColor)).toBe(true);
				expect(group.boxShadow).toBe('none');
			};

			await startDrag('logs');
			await moveOver('router-2', 0.2);
			await expect.poll(dropIndicators).toEqual({ rows: ['router-2:before'], containers: ['network'] });
			expect(lineOf('router-2').borderTopStyle).toBe('dashed');
			expect(lineOf('router-2').borderTopWidth).toBe('1px');
			expect(lineOf('router-2').top).toBe('0px');
			expect(lineOf('router-2').left).toBe(getComputedStyle(rowOf('router-2')).paddingLeft);
			expectNoGroupHighlight('network');

			await moveOver('router-2', 0.8);
			await expect.poll(dropIndicators).toEqual({ rows: ['router-2:after'], containers: ['network'] });
			expect(lineOf('router-2').bottom).toBe('0px');

			// Inside lands as the first child: the line sits under the group row, at its children's indent
			await moveOver('monitoring', 0.5);
			await expect.poll(dropIndicators).toEqual({ rows: ['monitoring:inside'], containers: ['monitoring'] });
			expect(lineOf('monitoring').borderTopStyle).toBe('dashed');
			expect(lineOf('monitoring').bottom).toBe('0px');
			expect(parseFloat(lineOf('monitoring').left)).toBeGreaterThan(
				parseFloat(getComputedStyle(rowOf('monitoring')).paddingLeft),
			);
			expectNoGroupHighlight('monitoring');

			await moveOver('network', 0.1);
			await expect.poll(dropIndicators).toEqual({ rows: ['network:before'], containers: [] });
			expect(lineOf('network').borderTopStyle).toBe('dashed');

			await pressEscape();
			await release();
		});

		it('keeps the dragged row, and a group with its subtree, in place behind a white mask', async () => {
			await page.render(<SortableTree />);

			const opacityOf = (element: Element) => getComputedStyle(element).opacity;

			await startDrag('router-1');
			await expect.element(page.elementLocator(rowOf('router-1'))).toHaveAttribute('data-source');
			expect(opacityOf(rowOf('router-1'))).toBe('0.3');
			expect(opacityOf(rowOf('router-2'))).toBe('1');
			await expect.element(getTreeItem('router-1').getByText('Router Alpha')).toBeVisible();
			await pressEscape();
			await release();
			await expect.poll(() => document.querySelector('[data-source]')).toBeNull();
			expect(opacityOf(rowOf('router-1'))).toBe('1');

			await startDrag('network');
			await expect.element(page.elementLocator(branchOf('network'))).toHaveAttribute('data-source');
			expect(opacityOf(branchOf('network'))).toBe('0.3');
			// The group block carries the mask once; its header and children must not dim it again
			expect(opacityOf(rowOf('network'))).toBe('1');
			expect(opacityOf(rowOf('router-1'))).toBe('1');
			expect(opacityOf(rowOf('logs'))).toBe('1');
			await expect.element(getTreeItem('router-2').getByText('Router Beta')).toBeVisible();
			await pressEscape();
			await release();
		});

		it('shows a clone of the dragged row, with its checkbox state, in the overlay', async () => {
			await page.render(<SortableTree defaultCheckedValue={['router-1']} />);

			const expectPreview = async (value: string, names: string[], state: string) => {
				await startDrag(value);
				await expect.poll(dragPreview).not.toBeNull();

				const preview = dragPreview() as HTMLElement;
				const rows = Array.from(preview.querySelectorAll(byClass(styles.dragPreviewRow)));
				expect(rows.map((row) => row.querySelector(byClass(styles.itemText))?.textContent)).toEqual(names);
				expect(rows.every((row) => row.querySelector(byClass(styles.dragHandle)))).toBe(true);
				expect(preview.querySelector('[data-state]')).toHaveAttribute('data-state', state);

				const style = getComputedStyle(preview);
				expect(style.opacity).toBe('0.85');
				expect(style.borderTopWidth).toBe('1px');
				expect(style.boxShadow).not.toBe('none');

				await pressEscape();
				await release();
				await expect.poll(dragPreview).toBeNull();
			};

			await expectPreview('router-1', ['Router Alpha'], 'checked');
			await expectPreview('logs', ['Logs'], 'unchecked');
			await expectPreview(
				'network',
				['Network', 'Router Alpha', 'Router Beta', 'Router Gamma'],
				'indeterminate',
			);
			await expectPreview('monitoring', ['Monitoring'], 'unchecked');
		});

		it('settles the overlay with a drop animation after a cross-group move', async () => {
			const consoleError = vi.spyOn(console, 'error');

			try {
				await page.render(<SortableTree />);

				await drag('router-1', 'logs', 0.8);

				expect(childOrder()).toEqual([...ROOT_ORDER, 'router-1']);
				expect(dragPreview()).not.toBeNull();
				await expect.poll(dragPreview, { timeout: 1000 }).toBeNull();

				expect(rowOf('router-1')).not.toHaveAttribute('data-source');
				expect(getComputedStyle(rowOf('router-1')).opacity).toBe('1');
				expect(consoleError).not.toHaveBeenCalled();
			} finally {
				consoleError.mockRestore();
			}
		});

		it('drops without animation when the user prefers reduced motion', async () => {
			const matchMedia = window.matchMedia.bind(window);
			const spy = vi.spyOn(window, 'matchMedia').mockImplementation((query) =>
				query.includes('prefers-reduced-motion')
					? ({
							matches: true,
							media: query,
							onchange: null,
							addEventListener: () => {},
							removeEventListener: () => {},
							addListener: () => {},
							removeListener: () => {},
							dispatchEvent: () => false,
						} as MediaQueryList)
					: matchMedia(query),
			);

			try {
				await page.render(<SortableTree />);

				await drag('router-1', 'logs', 0.8);

				expect(childOrder()).toEqual([...ROOT_ORDER, 'router-1']);
				expect(dragPreview()).toBeNull();
			} finally {
				spy.mockRestore();
			}
		});

		it('auto-scrolls the container only within the outer 10% of its height', async () => {
			const columns = Array.from({ length: 30 }, (_, index) => ({
				id: `column-${String(index)}`,
				name: `Column ${String(index)}`,
			}));

			await page.render(
				<div data-scroller style={{ height: 200, overflow: 'auto' }}>
					<SortableTree nodes={columns} />
				</div>,
			);

			const scroller = document.querySelector('[data-scroller]') as HTMLElement;

			await startDrag('column-1');
			await moveOver(scroller, 0.5);
			await wait(300);
			expect(scroller.scrollTop).toBe(0);

			await moveOver(scroller, 0.85);
			await wait(300);
			expect(scroller.scrollTop).toBe(0);

			await moveOver(scroller, 0.95);
			await expect.poll(() => scroller.scrollTop).toBeGreaterThan(0);

			await pressEscape();
			await release();
		});
	});

	describe('same group only (column manager)', () => {
		it('reorders columns within their group and groups among themselves', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(
				<SortableTree
					nodes={columnGroupNodes}
					defaultExpandedValue={['general', 'connectivity', 'location']}
					canDrop={sameGroupOnly}
					onCollectionChange={onCollectionChange}
				/>,
			);

			await drag('name', 'status', 0.8);
			expect(childOrder('general')).toEqual(['status', 'name', 'created']);

			await drag('connectivity', 'general', 0.1);
			expect(childOrder()).toEqual(['connectivity', 'general', 'location']);

			expect(onCollectionChange).toHaveBeenCalledTimes(2);
		});

		it('rejects moving a column to another group or nesting it', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(
				<SortableTree
					nodes={columnGroupNodes}
					defaultExpandedValue={['general', 'connectivity', 'location']}
					canDrop={sameGroupOnly}
					onCollectionChange={onCollectionChange}
				/>,
			);

			await startDrag('name');

			for (const [target, ratio] of [
				['ip-address', 0.2],
				['connectivity', 0.5],
				['location', 0.1],
				['location', 0.5],
			] as const) {
				await moveOver('created', 0.8);
				await expect.poll(dropIndicators).toEqual({ rows: ['created:after'], containers: ['general'] });

				await moveOver(target, ratio);
				await expect.poll(dropIndicators).toEqual(noIndicators);
				expect(dragPreview()).toHaveAttribute('data-rejected');
			}

			await release();

			expect(onCollectionChange).not.toHaveBeenCalled();
			expect(childOrder('general')).toEqual(['name', 'status', 'created']);
			expect(childOrder('connectivity')).toEqual(['ip-address', 'mac-address']);
		});
	});
});

describe('DsTree empty group', () => {
	it('renders an empty group as an unchecked branch that toggles its own value', async () => {
		const onCheckedChange = vi.fn();
		const collection = createDsTreeCollection<DsTreeNode>([{ id: 'archive', name: 'Archive', children: [] }]);

		await page.render(
			<DsTree.Root collection={collection} onCheckedChange={onCheckedChange}>
				<DsTree.Tree>
					{collection.rootNode.children?.map((node, index) => (
						<CheckboxTreeNode key={node.id} node={node} indexPath={[index]} />
					))}
				</DsTree.Tree>
			</DsTree.Root>,
		);

		const checkbox = page.getByRole('checkbox');
		await expect.element(checkbox).toHaveAttribute('aria-checked', 'false');

		await checkbox.click();

		expect(onCheckedChange).toHaveBeenCalledWith(expect.objectContaining({ checkedValue: ['archive'] }));
		await expect.element(checkbox).toHaveAttribute('aria-checked', 'true');

		await page.getByText('Archive').click();
		await expect.element(getTreeItem('archive')).toHaveAttribute('aria-expanded', 'true');
	});

	it('counts a nested empty group toward its parent checked state', async () => {
		const onCheckedChange = vi.fn<NonNullable<DsTreeRootProps['onCheckedChange']>>();
		const collection = createDsTreeCollection<DsTreeNode>([
			{
				id: 'network',
				name: 'Network',
				children: [
					{ id: 'router-1', name: 'Router Alpha' },
					{ id: 'archive', name: 'Archive', children: [] },
				],
			},
		]);

		await page.render(
			<DsTree.Root
				collection={collection}
				defaultExpandedValue={['network']}
				onCheckedChange={onCheckedChange}
			>
				<DsTree.Tree>
					{collection.rootNode.children?.map((node, index) => (
						<CheckboxTreeNode key={node.id} node={node} indexPath={[index]} />
					))}
				</DsTree.Tree>
			</DsTree.Root>,
		);

		const parent = getTreeItem('network').getByRole('checkbox').first();
		await expect.element(parent).toHaveAttribute('aria-checked', 'false');

		await getTreeItem('router-1').getByRole('checkbox').click();
		await expect.element(parent).toHaveAttribute('aria-checked', 'mixed');

		await parent.click();

		expect([...(onCheckedChange.mock.lastCall?.[0].checkedValue ?? [])].sort()).toEqual([
			'archive',
			'router-1',
		]);
		await expect.element(parent).toHaveAttribute('aria-checked', 'true');
	});
});
