import { type CSSProperties, type ReactNode, useEffect, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsDialog } from '../../ds-dialog';
import { DsDropdownMenu } from '../../ds-dropdown-menu';
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

const keepParent: DsTreeSortableProps['canDrop'] = ({ fromParent, toParent }) =>
	fromParent?.id === toParent?.id;

type OnCollectionChange = DsTreeSortableProps['onCollectionChange'];

const SortableTreeNode = ({
	node,
	indexPath,
	withoutHandle,
	disabledHandles,
}: {
	node: DsTreeNode;
	indexPath: number[];
	withoutHandle?: string[];
	disabledHandles?: string[];
}) => {
	const handle = withoutHandle?.includes(node.id) ? null : (
		<DsTree.DragHandle disabled={disabledHandles?.includes(node.id)} />
	);

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
								disabledHandles={disabledHandles}
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
		| 'size'
		| 'style'
	> & {
		nodes?: DsTreeNode[];
		/** Keep rendering the initial collection instead of the `next` one reported on drop */
		ignoreMoves?: boolean;
		withoutHandle?: string[];
		disabledHandles?: string[];
	};

const SortableTree = ({
	nodes = sortableNodes,
	canDrop,
	onCollectionChange,
	ignoreMoves = false,
	withoutHandle,
	disabledHandles,
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
						<SortableTreeNode
							key={node.id}
							node={node}
							indexPath={[index]}
							withoutHandle={withoutHandle}
							disabledHandles={disabledHandles}
						/>
					))}
				</DsTree.Tree>
			</DsTree.Sortable>
		</DsTree.Root>
	);
};

// Generated SCSS typings make classes `string` in typecheck but `string | undefined` in plain eslint
const byClass = (className: string | undefined) => `.${className ?? ''}`;

const rowOf = (value: string) =>
	document.querySelector(
		`[data-value="${value}"]:is([data-part="item"], [data-part="branch-control"])`,
	) as HTMLElement;

const branchOf = (value: string) => rowOf(value).closest('[data-part="branch"]') as HTMLElement;

const rootDropZone = () => document.querySelector('[data-drop-zone="root-end"]') as HTMLElement;

// The overlay clone has no a11y role or Ark part; its CSS module class is the only hook
const dragPreview = () => document.querySelector<HTMLElement>(byClass(styles.dragPreview));

/** The `<body>` child holding `element`: the stacking context it is layered by. */
const bodyLayerOf = (element: Element) =>
	Array.from(document.body.children).find((child) => child.contains(element)) as HTMLElement;

const zIndexOf = (element: Element) => Number(getComputedStyle(element).zIndex);

const ROW_PARTS = ':is([data-part="item"], [data-part="branch-control"])';

/** Rows shown in the overlay copy; a collapsed group's children are copied but hidden. */
const previewRows = () =>
	Array.from(dragPreview()?.querySelectorAll<HTMLElement>(ROW_PARTS) ?? []).filter((row) =>
		row.checkVisibility(),
	);

const previewNames = () =>
	previewRows().map(
		(row) => row.querySelector(':is([data-part="item-text"], [data-part="branch-text"])')?.textContent,
	);

const childOrder = (value?: string) => {
	const parent = value
		? branchOf(value).querySelector(':scope > [data-part="branch-content"]')
		: document.querySelector('[role="tree"]');

	return Array.from(parent?.children ?? [])
		.filter((element) => element.matches('[role="treeitem"]'))
		.map((element) => element.getAttribute('data-value'));
};

/** Every drop indicator currently in the DOM, as `value:position`. */
const dropIndicators = () =>
	Array.from(document.querySelectorAll('[data-drop]')).map(
		(element) =>
			`${element.getAttribute('data-value') ?? element.getAttribute('data-drop-zone') ?? ''}:${element.getAttribute('data-drop') ?? ''}`,
	);

/** Viewport Y of the shown drop line: where its dashed top border is painted. */
const dropLineY = () => {
	const element = document.querySelector('[data-drop]') as HTMLElement;
	const rect = element.getBoundingClientRect();
	const line = getComputedStyle(element, '::before');

	return line.top === 'auto'
		? rect.bottom - parseFloat(line.bottom) - parseFloat(line.borderTopWidth)
		: rect.top + parseFloat(line.top);
};

/** Viewport X where the shown drop line starts. */
const dropLineStartX = () => {
	const element = document.querySelector('[data-drop]') as HTMLElement;

	return element.getBoundingClientRect().left + parseFloat(getComputedStyle(element, '::before').left);
};

/** Viewport X where a row's content (after its indent) starts. */
const contentStartX = (value: string) =>
	rowOf(value).getBoundingClientRect().left + parseFloat(getComputedStyle(rowOf(value)).paddingLeft);

const isTransparent = (color: string) => color === 'rgba(0, 0, 0, 0)' || color === 'transparent';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Past DsTree.Sortable's 500ms auto-expand delay
const AUTO_EXPAND_WAIT_MS = 700;

// The handle is hidden from assistive tech while drag is pointer-only, so it has no role to query
const DRAG_HANDLE_SELECTOR = '[data-part="drag-handle"]';

// dnd-kit swallows clicks for 50ms after a drop, faster than a person can click or drag again
const CLICK_GUARD_MS = 60;

const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

const waitOutClickGuard = () => new Promise((resolve) => setTimeout(resolve, CLICK_GUARD_MS));

// A real key press: dnd-kit and any surrounding dialog or popover both listen for it on the document
const pressEscape = async () => {
	await userEvent.keyboard('{Escape}');
	await nextFrame();
};

const pointer = { x: 0, y: 0 };

const firePointer = (type: string, target: EventTarget, clientX: number, clientY: number) => {
	pointer.x = clientX;
	pointer.y = clientY;
	target.dispatchEvent(
		new PointerEvent(type, { clientX, clientY, bubbles: true, isPrimary: true, button: 0, pointerId: 1 }),
	);
};

const handleOf = (value: string) =>
	rowOf(value).querySelector<HTMLButtonElement>(DRAG_HANDLE_SELECTOR) ?? null;

/** Presses `from` (the row's drag handle by default) and moves past the 4px activation distance. */
const startDrag = async (value: string, from: Element | null = handleOf(value)) => {
	if (!from) {
		throw new Error(`Expected an element to press on "${value}"`);
	}

	const rect = from.getBoundingClientRect();
	const x = rect.left + rect.width / 2;
	const y = rect.top + rect.height / 2;

	firePointer('pointerdown', from, x, y);
	firePointer('pointermove', document, x, y + 6);
	await nextFrame();
};

/** Moves the pointer to `ratio` of the target's height: 0 is its top edge, 1 its bottom edge. */
const moveOver = async (target: string | Element | null, ratio: number) => {
	const element = typeof target === 'string' ? rowOf(target) : target;

	if (!element) {
		throw new Error('Expected a drop target');
	}

	const rect = element.getBoundingClientRect();

	firePointer('pointermove', document, pointer.x, rect.top + rect.height * ratio);
	await nextFrame();
};

const release = async () => {
	firePointer('pointerup', document, pointer.x, pointer.y);
	await nextFrame();
	await waitOutClickGuard();
};

/** Drags `value` by its handle onto `ratio` of `target`, waits for `until` when given, and drops. */
const drag = async (value: string, target: string | Element, ratio: number, until?: () => boolean) => {
	await startDrag(value);
	await moveOver(target, ratio);

	if (until) {
		await expect.poll(until).toBe(true);
	}

	await release();
};

const handleLocator = (value: string) => page.elementLocator(handleOf(value) as HTMLElement);

/** Waits out the expand animation, until `element` stops moving between frames. */
const waitForStableLayout = async (element: Element) => {
	let previous = Number.NaN;

	await expect
		.poll(async () => {
			const top = element.getBoundingClientRect().top;
			const stable = top === previous;
			previous = top;
			await nextFrame();

			return stable;
		})
		.toBe(true);
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

const deepNodes: DsTreeNode[] = [
	{
		id: 'level-1',
		name: 'Level 1',
		children: [
			{
				id: 'level-2',
				name: 'Level 2',
				children: [
					{
						id: 'level-3',
						name: 'Level 3',
						children: [
							{ id: 'leaf-1', name: 'Leaf 1' },
							{ id: 'leaf-2', name: 'Leaf 2' },
						],
					},
				],
			},
		],
	},
	{ id: 'tail', name: 'Tail' },
];

const DEEP_EXPANDED = ['level-1', 'level-2', 'level-3'];

const CUSTOM_INDENT = {
	'--ds-tree-row-start': '20px',
	'--ds-tree-indent-per-level': '30px',
} as CSSProperties;

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
			expect(document.querySelector(DRAG_HANDLE_SELECTOR)).toBeNull();
			expect(rootDropZone()).toBeNull();

			await startDrag('logs', rowOf('logs'));
			await moveOver('archive', 0.1);
			await release();

			expect(document.querySelector('[data-source], [data-drop]')).toBeNull();
			expect(dragPreview()).toBeNull();
			expect(childOrder()).toEqual(ROOT_ORDER);

			await getTreeItem('logs').click();
			await expect.element(getTreeItem('logs')).toHaveAttribute('aria-selected', 'true');
		});

		it('starts no drag from a disabled handle and keeps the row selectable', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} disabledHandles={['logs']} />);

			await expect.element(handleLocator('logs')).toBeDisabled();

			await startDrag('logs');
			await moveOver('archive', 0.1);
			expect(document.querySelector('[data-source], [data-drop]')).toBeNull();
			expect(dragPreview()).toBeNull();
			await release();

			expect(onCollectionChange).not.toHaveBeenCalled();
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

			await startDrag('logs', rowOf('logs').querySelector('[data-part="item-text"]'));
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

		it('keeps focus off the hidden handle when it is pressed', async () => {
			await page.render(<SortableTree />);

			await handleLocator('logs').click();

			expect(document.activeElement).not.toBe(handleOf('logs'));
		});

		it('does not select or expand when the handle is clicked without dragging', async () => {
			const onSelectionChange = vi.fn();
			const onExpandedChange = vi.fn();
			await page.render(
				<SortableTree onSelectionChange={onSelectionChange} onExpandedChange={onExpandedChange} />,
			);

			await expect.element(getTreeItem('logs')).not.toHaveAccessibleName(/drag/i);
			await expect.element(getTreeItem('logs').getByRole('checkbox')).toHaveAccessibleName('Logs');

			await handleLocator('logs').click();
			await handleLocator('monitoring').click();

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
			await expect.poll(dropIndicators).toEqual(['router-3:before']);

			await moveOver('router-3', 0.8);
			await expect.poll(dropIndicators).toEqual(['router-3:after']);
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
			await expect.poll(dropIndicators).toEqual(['archive:before']);
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
			await expect.poll(dropIndicators).toEqual([]);
		});

		it('offers before, inside and after on a collapsed group, and expands it on an inside drop', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			await startDrag('router-1');
			await moveOver('monitoring', 0.1);
			await expect.poll(dropIndicators).toEqual(['monitoring:before']);

			await moveOver('monitoring', 0.9);
			await expect.poll(dropIndicators).toEqual(['monitoring:after']);

			await moveOver('monitoring', 0.5);
			await expect.poll(dropIndicators).toEqual(['monitoring:inside']);
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
			await expect.poll(dropIndicators).toEqual(['network:before']);

			await moveOver('network', 0.95);
			await expect.poll(dropIndicators).toEqual(['network:inside']);
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
			await expect.poll(dropIndicators).toEqual(['archive:inside']);
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
			await expect.poll(dropIndicators).toEqual(['logs:before']);

			await moveOver('logs', 0.55);
			await expect.poll(dropIndicators).toEqual(['logs:after']);
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

		it('appends to the root list from the space below a last root row that is an expanded group', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			const nodes = sortableNodes.filter((node) => node.id !== 'logs');
			await page.render(
				<SortableTree
					nodes={nodes}
					defaultExpandedValue={['network', 'monitoring']}
					onCollectionChange={onCollectionChange}
				/>,
			);

			expect(rootDropZone().getBoundingClientRect().height).toBeGreaterThan(0);

			await startDrag('router-1');
			await moveOver(rootDropZone(), 0.5);
			await expect.poll(dropIndicators).toEqual(['root-end:after']);
			await release();

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'router-1',
					target: 'monitoring',
					position: 'after',
					fromParent: 'network',
					toParent: null,
				}),
			);
			expect(childOrder()).toEqual(['network', 'archive', 'monitoring', 'router-1']);
		});

		it('reserves no space below a last root leaf, whose own after zone appends to the root list', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			expect(rootDropZone().getBoundingClientRect().height).toBeCloseTo(0, 0);

			await drag('router-1', 'logs', 0.8);

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
				dropIndicators().forEach((row) => seen.add(row));
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

		it('resolves a fast release against the collection the consumer changed mid-drag', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			let insertHiddenRoot = () => {};

			const ChangingTree = () => {
				const [collection, setCollection] = useState(() => createDsTreeCollection(sortableNodes));

				useEffect(() => {
					insertHiddenRoot = () =>
						setCollection(createDsTreeCollection([{ id: 'hidden', name: 'Hidden' }, ...sortableNodes]));
				}, []);

				return (
					<DsTree.Root collection={collection} defaultExpandedValue={['network']}>
						<DsTree.Sortable onCollectionChange={onCollectionChange}>
							<DsTree.Tree>
								{collection.rootNode.children?.map((node, index) =>
									// Rendering nothing for it shifts every index path without moving a row
									node.id === 'hidden' ? null : (
										<SortableTreeNode key={node.id} node={node} indexPath={[index]} />
									),
								)}
							</DsTree.Tree>
						</DsTree.Sortable>
					</DsTree.Root>
				);
			};

			await page.render(<ChangingTree />);

			await startDrag('logs');
			await moveOver('router-2', 0.2);
			await expect.poll(dropIndicators).toEqual(['router-2:before']);

			insertHiddenRoot();
			await nextFrame();

			// Release in the same task as a move away, before dnd-kit reports the new `over`
			const rect = rowOf('logs').getBoundingClientRect();
			firePointer('pointermove', document, pointer.x, rect.top + rect.height / 2);
			firePointer('pointerup', document, pointer.x, pointer.y);
			await nextFrame();

			expect(onCollectionChange).toHaveBeenCalledOnce();
			const [next, details] = onCollectionChange.mock.calls[0] ?? [];
			expect(next?.rootNode.children?.map((child) => child.id)).toEqual([
				'hidden',
				'network',
				'archive',
				'monitoring',
			]);
			expect(next?.rootNode.children?.[1]?.children?.map((child) => child.id)).toEqual([
				'router-1',
				'logs',
				'router-2',
				'router-3',
			]);
			expect(details).toEqual(
				moveDetails({
					node: 'logs',
					target: 'router-2',
					position: 'before',
					fromParent: null,
					toParent: 'network',
				}),
			);
		});

		it('drops on the slot the indicator shows when released before it catches up', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			await startDrag('archive');
			await moveOver('monitoring', 0.5);
			await expect.poll(dropIndicators).toEqual(['monitoring:inside']);

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
			const hoverStart = performance.now();
			await moveOver('monitoring', 0.5);
			await expect.poll(dropIndicators).toEqual(['monitoring:inside']);
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

		it('never expands a disabled group or drops inside it, but drops next to it', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			const nodes = sortableNodes.map((item) =>
				item.id === 'monitoring' ? { ...item, disabled: true } : item,
			);
			await page.render(<SortableTree nodes={nodes} onCollectionChange={onCollectionChange} />);

			await startDrag('logs');
			await moveOver('monitoring', 0.5);
			await expect.poll(dropIndicators).toEqual(['monitoring:before']);

			// Nothing to poll for: the group must still be closed once the auto-expand delay has passed
			await wait(AUTO_EXPAND_WAIT_MS);
			expect(getTreeItem('monitoring').element()).toHaveAttribute('aria-expanded', 'false');

			await release();

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'logs',
					target: 'monitoring',
					position: 'before',
					fromParent: null,
					toParent: null,
				}),
			);
		});

		it('keeps auto-expanding later groups after an earlier group expands and pushes them down', async () => {
			const nestedNodes: DsTreeNode[] = [
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
					],
				},
				{ id: 'archive', name: 'Archive', children: [] },
				{
					id: 'monitoring',
					name: 'Monitoring',
					children: [{ id: 'alerts', name: 'Alerts' }],
				},
				{ id: 'logs', name: 'Logs' },
			];
			const expandedOf = (value: string) => getTreeItem(value).element().getAttribute('aria-expanded');

			await page.render(<SortableTree nodes={nestedNodes} defaultExpandedValue={['network', 'routers']} />);

			// Collapsing keeps the rows mounted, so expanding again registers no new drop targets
			await page.getByText('Network').click();
			await expect.poll(() => expandedOf('network')).toBe('false');
			await waitForStableLayout(rowOf('monitoring'));

			await startDrag('logs');
			await moveOver('network', 0.5);
			await expect.poll(() => expandedOf('network'), { timeout: 2000 }).toBe('true');
			await waitForStableLayout(rowOf('monitoring'));

			await moveOver('monitoring', 0.5);
			await expect.poll(dropIndicators).toEqual(['monitoring:inside']);
			await expect.poll(() => expandedOf('monitoring'), { timeout: 2000 }).toBe('true');

			await pressEscape();
			await release();
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
			await expect.poll(dropIndicators).toEqual(['monitoring:inside']);
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
			// The rejected inside slot falls back to the group's block, flipped to its useful side
			await expect.poll(dropIndicators).toEqual(['monitoring:before']);

			// Nothing to poll for: the group must still be closed once the auto-expand delay has passed
			await wait(AUTO_EXPAND_WAIT_MS);
			expect(getTreeItem('monitoring').element()).toHaveAttribute('aria-expanded', 'false');

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

		it('leaves a collapsed group collapsed when the consumer ignores an inside drop', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			const onExpandedChange = vi.fn();
			await page.render(
				<SortableTree
					ignoreMoves
					onCollectionChange={onCollectionChange}
					onExpandedChange={onExpandedChange}
				/>,
			);

			await drag('logs', 'monitoring', 0.5);

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				expect.objectContaining({ position: 'inside' }),
			);
			await nextFrame();
			expect(onExpandedChange).not.toHaveBeenCalled();
			await expect.element(getTreeItem('monitoring')).toHaveAttribute('aria-expanded', 'false');
		});

		it('keeps row refs attached while the indicator moves across rows', async () => {
			const logsRef = vi.fn<(element: HTMLDivElement | null) => void>();
			const collection = createDsTreeCollection<DsTreeNode>([
				{ id: 'alerts', name: 'Alerts' },
				{ id: 'dashboards', name: 'Dashboards' },
				{ id: 'logs', name: 'Logs' },
			]);

			await page.render(
				<DsTree.Root collection={collection}>
					<DsTree.Sortable onCollectionChange={vi.fn()}>
						<DsTree.Tree>
							{collection.rootNode.children?.map((node, index) => (
								<DsTree.NodeProvider key={node.id} node={node} indexPath={[index]}>
									<DsTree.Item ref={node.id === 'logs' ? logsRef : undefined}>
										<DsTree.DragHandle />
										<DsTree.ItemText>{node.name}</DsTree.ItemText>
									</DsTree.Item>
								</DsTree.NodeProvider>
							))}
						</DsTree.Tree>
					</DsTree.Sortable>
				</DsTree.Root>,
			);

			expect(logsRef).toHaveBeenCalledOnce();

			await startDrag('alerts');
			await moveOver('dashboards', 0.8);
			await expect.poll(dropIndicators).toEqual(['dashboards:after']);
			await moveOver('logs', 0.8);
			await expect.poll(dropIndicators).toEqual(['logs:after']);
			await pressEscape();
			await release();

			expect(logsRef).toHaveBeenCalledOnce();
			expect(logsRef).toHaveBeenCalledWith(rowOf('logs'));
		});

		it('evaluates canDrop once per slot while the pointer moves within it', async () => {
			const canDrop = vi.fn<NonNullable<DsTreeSortableProps['canDrop']>>(() => true);
			await page.render(<SortableTree canDrop={canDrop} />);

			await startDrag('logs');

			for (const ratio of [0.1, 0.15, 0.2]) {
				await moveOver('router-2', ratio);
			}
			await expect.poll(dropIndicators).toEqual(['router-2:before']);

			const slotCalls = canDrop.mock.calls.filter(
				([details]) => details.target.id === 'router-2' && details.position === 'before',
			);
			expect(slotCalls).toHaveLength(1);

			await pressEscape();
			await release();
		});

		it('re-checks canDrop when the consumer passes a new one mid-drag', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			let lock = () => {};

			const LockingTree = () => {
				const [locked, setLocked] = useState(false);
				useEffect(() => {
					lock = () => setLocked(true);
				}, []);

				return <SortableTree canDrop={() => !locked} onCollectionChange={onCollectionChange} />;
			};

			await page.render(<LockingTree />);

			await startDrag('logs');
			await moveOver('router-2', 0.2);
			await expect.poll(dropIndicators).toEqual(['router-2:before']);

			lock();
			await nextFrame();
			await release();

			expect(onCollectionChange).not.toHaveBeenCalled();
			expect(childOrder('network')).toEqual(NETWORK_ORDER);
		});

		it("flips a neighbor's half that keeps the order to its useful side, and ignores the node itself", async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree onCollectionChange={onCollectionChange} />);

			await startDrag('router-2');

			for (const [target, ratio, expected] of [
				['router-3', 0.2, ['router-3:after']],
				['router-1', 0.8, ['router-1:before']],
				['router-2', 0.5, []],
			] as const) {
				// Show a real slot first so the state below is a re-render, not a stale DOM
				await moveOver('logs', 0.2);
				await expect.poll(dropIndicators).toEqual(['logs:before']);

				await moveOver(target, ratio);
				await expect.poll(dropIndicators).toEqual([...expected]);
				expect(dragPreview()).not.toHaveAttribute('data-rejected');
			}

			await release();

			expect(onCollectionChange).not.toHaveBeenCalled();
			expect(childOrder('network')).toEqual(NETWORK_ORDER);

			await drag('router-2', 'router-3', 0.2);

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'router-2',
					target: 'router-3',
					position: 'after',
					fromParent: 'network',
					toParent: 'network',
				}),
			);
			expect(childOrder('network')).toEqual(['router-1', 'router-3', 'router-2']);
		});

		it('keeps plain upper and lower halves on a row that is not next to the node', async () => {
			await page.render(<SortableTree />);

			await startDrag('router-1');
			await moveOver('router-3', 0.2);
			await expect.poll(dropIndicators).toEqual(['router-3:before']);
			await moveOver('router-3', 0.8);
			await expect.poll(dropIndicators).toEqual(['router-3:after']);

			await pressEscape();
			await release();
		});

		it('rejects slots canDrop refuses: no indicator, not-allowed cursor, no drop', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			const canDrop = vi.fn<NonNullable<DsTreeSortableProps['canDrop']>>(
				(details) => details.target.id !== 'archive',
			);
			await page.render(<SortableTree canDrop={canDrop} onCollectionChange={onCollectionChange} />);

			await startDrag('logs');
			await moveOver('monitoring', 0.1);
			await expect.poll(dropIndicators).toEqual(['monitoring:before']);
			expect(dragPreview()).not.toHaveAttribute('data-rejected');
			expect(getComputedStyle(dragPreview() as HTMLElement).cursor).not.toBe('not-allowed');

			await moveOver('archive', 0.1);
			await expect.poll(dropIndicators).toEqual([]);
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
			await expect
				.poll(() =>
					canDrop.mock.calls.some(
						([details]) => details.target.id === 'archive' && details.position === 'inside',
					),
				)
				.toBe(true);
			expect(dropIndicators()).toEqual([]);
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
			await expect.poll(dropIndicators).toEqual(['logs:after']);
			expect(canDrop).toHaveBeenCalledWith(
				moveDetails({ node: 'network', target: 'logs', position: 'after', fromParent: null, toParent: null }),
			);

			for (const [target, ratio] of [
				['router-1', 0.2],
				['router-2', 0.8],
			] as const) {
				await moveOver(target, ratio);
				await expect.poll(() => dragPreview()?.hasAttribute('data-rejected')).toBe(true);
				expect(dropIndicators()).toEqual([]);
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
			await expect.poll(dropIndicators).toEqual(['monitoring:inside']);

			await pressEscape();
			await expect.poll(() => document.querySelector('[data-source], [data-drop]')).toBeNull();
			await expect.poll(dragPreview).toBeNull();
			await release();

			// A later hover expanding another group proves the cancelled one's delay has passed
			await startDrag('router-1');
			await moveOver('archive', 0.5);
			await expect.poll(dropIndicators).toEqual(['archive:inside']);
			await expect
				.poll(() => getTreeItem('archive').element().getAttribute('aria-expanded'), { timeout: 2000 })
				.toBe('true');
			await pressEscape();
			await release();

			expect(onCollectionChange).not.toHaveBeenCalled();
			expect(onExpandedChange).toHaveBeenCalledExactlyOnceWith(
				expect.objectContaining({ expandedValue: ['network', 'archive'] }),
			);
			await expect.element(getTreeItem('monitoring')).toHaveAttribute('aria-expanded', 'false');
			expect(childOrder('network')).toEqual(NETWORK_ORDER);
			expect(childOrder()).toEqual(ROOT_ORDER);
		});
	});

	describe('feedback', () => {
		it('draws "after" one row and "before" the next on the same pixel row', async () => {
			await page.render(<SortableTree />);

			await startDrag('router-1');
			await moveOver('router-2', 0.8);
			await expect.poll(dropIndicators).toEqual(['router-2:after']);
			const afterY = dropLineY();

			await moveOver('router-3', 0.2);
			await expect.poll(dropIndicators).toEqual(['router-3:before']);

			expect(dropLineY()).toBeCloseTo(afterY, 0);
			expect(afterY).toBeCloseTo(rowOf('router-3').getBoundingClientRect().top, 0);

			await pressEscape();
			await release();
		});

		it.each([
			{ indent: 'the default indent', style: undefined },
			{ indent: 'a custom indent', style: CUSTOM_INDENT },
		])('starts the line where the row content starts at every depth, with $indent', async ({ style }) => {
			await page.render(
				<SortableTree nodes={deepNodes} defaultExpandedValue={DEEP_EXPANDED} style={style} />,
			);

			await startDrag('tail');

			for (const value of ['level-1', 'level-2', 'level-3', 'leaf-2']) {
				await moveOver(value, 0.2);
				await expect.poll(dropIndicators).toEqual([`${value}:before`]);
				expect(dropLineStartX()).toBeCloseTo(contentStartX(value), 0);
			}

			// Inside lands as the first child, so the line starts where that child's content does
			await moveOver('level-3', 0.9);
			await expect.poll(dropIndicators).toEqual(['level-3:inside']);
			expect(dropLineStartX()).toBeCloseTo(contentStartX('leaf-1'), 0);

			await pressEscape();
			await release();
		});

		it('indents rows by --ds-tree-row-start and --ds-tree-indent-per-level', async () => {
			await page.render(
				<SortableTree nodes={deepNodes} defaultExpandedValue={DEEP_EXPANDED} style={CUSTOM_INDENT} />,
			);

			expect(parseFloat(getComputedStyle(rowOf('level-1')).paddingLeft)).toBeCloseTo(20, 0);
			expect(parseFloat(getComputedStyle(rowOf('leaf-1')).paddingLeft)).toBeCloseTo(110, 0);
		});

		it('draws a whole-block "after" from the group header content, on the pixel row of the next "before"', async () => {
			await page.render(<SortableTree canDrop={keepParent} />);

			await startDrag('logs');
			await moveOver('router-2', 0.8);
			await expect.poll(dropIndicators).toEqual(['network:after']);
			expect(dropLineStartX()).toBeCloseTo(contentStartX('network'), 0);
			const afterY = dropLineY();

			await moveOver('archive', 0.1);
			await expect.poll(dropIndicators).toEqual(['archive:before']);
			expect(dropLineY()).toBeCloseTo(afterY, 0);

			await pressEscape();
			await release();
		});

		it('keeps the line after the last child of a group visible below it', async () => {
			await page.render(<SortableTree />);

			await startDrag('router-1');
			await moveOver('router-3', 0.8);
			await expect.poll(dropIndicators).toEqual(['router-3:after']);

			const content = branchOf('network').querySelector('[data-part="branch-content"]') as HTMLElement;
			expect(getComputedStyle(content).overflow).toBe('visible');
			expect(dropLineY()).toBeCloseTo(rowOf('router-3').getBoundingClientRect().bottom, 0);

			await pressEscape();
			await release();
		});

		it('marks the slot with a dashed line alone, indented to the depth the node lands at', async () => {
			await page.render(<SortableTree />);

			const lineOf = (value: string) => getComputedStyle(rowOf(value), '::before');
			const px = (value: string) => parseFloat(value);
			const expectNoGroupHighlight = (value: string) => {
				const group = getComputedStyle(branchOf(value));
				expect(isTransparent(group.backgroundColor)).toBe(true);
				expect(group.boxShadow).toBe('none');
			};

			await startDrag('logs');
			await moveOver('router-2', 0.2);
			await expect.poll(dropIndicators).toEqual(['router-2:before']);
			expect(lineOf('router-2').borderTopStyle).toBe('dashed');
			expect(px(lineOf('router-2').borderTopWidth)).toBeGreaterThan(0);
			expect(px(lineOf('router-2').top)).toBeCloseTo(0, 0);
			expect(px(lineOf('router-2').left)).toBeCloseTo(px(getComputedStyle(rowOf('router-2')).paddingLeft), 0);
			expectNoGroupHighlight('network');

			await moveOver('router-2', 0.8);
			await expect.poll(dropIndicators).toEqual(['router-2:after']);
			expect(px(lineOf('router-2').bottom)).toBeCloseTo(-1, 0);

			// Inside lands as the first child: the line sits under the group row, at its children's indent
			await moveOver('monitoring', 0.5);
			await expect.poll(dropIndicators).toEqual(['monitoring:inside']);
			expect(lineOf('monitoring').borderTopStyle).toBe('dashed');
			expect(px(lineOf('monitoring').bottom)).toBeCloseTo(-1, 0);
			expect(px(lineOf('monitoring').left)).toBeGreaterThan(
				px(getComputedStyle(rowOf('monitoring')).paddingLeft),
			);
			expectNoGroupHighlight('monitoring');

			await moveOver('network', 0.1);
			await expect.poll(dropIndicators).toEqual(['network:before']);
			expect(lineOf('network').borderTopStyle).toBe('dashed');

			await pressEscape();
			await release();
		});

		it('dims the dragged row, and a group with its subtree, in place', async () => {
			await page.render(<SortableTree />);

			const opacityOf = (element: Element) => Number(getComputedStyle(element).opacity);

			await startDrag('router-1');
			await expect.element(page.elementLocator(rowOf('router-1'))).toHaveAttribute('data-source');
			expect(opacityOf(rowOf('router-1'))).toBeLessThan(1);
			expect(opacityOf(rowOf('router-2'))).toBe(1);
			await expect.element(getTreeItem('router-1').getByText('Router Alpha')).toBeVisible();
			await pressEscape();
			await release();
			await expect.poll(() => document.querySelector('[data-source]')).toBeNull();
			expect(opacityOf(rowOf('router-1'))).toBe(1);

			await startDrag('network');
			await expect.element(page.elementLocator(branchOf('network'))).toHaveAttribute('data-source');
			expect(opacityOf(branchOf('network'))).toBeLessThan(1);
			// The group block carries the mask once; its header and children must not dim it again
			expect(opacityOf(rowOf('network'))).toBe(1);
			expect(opacityOf(rowOf('router-1'))).toBe(1);
			expect(opacityOf(rowOf('logs'))).toBe(1);
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
				expect(previewNames()).toEqual(names);
				expect(previewRows().every((row) => row.querySelector(DRAG_HANDLE_SELECTOR))).toBe(true);
				expect(preview.querySelector('[data-part="node-checkbox"]')).toHaveAttribute('data-state', state);

				const style = getComputedStyle(preview);
				expect(Number(style.opacity)).toBeLessThan(1);
				expect(parseFloat(style.borderTopWidth)).toBeGreaterThan(0);
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

		it('portals the overlay out of the tree, hidden from assistive tech, with the tree size', async () => {
			await page.render(<SortableTree size="small" />);

			await startDrag('logs');
			await expect.poll(dragPreview).not.toBeNull();

			const preview = dragPreview() as HTMLElement;
			expect(preview.closest('[data-scope="tree-view"][data-part="root"]')).toBeNull();
			expect(preview).toHaveAttribute('aria-hidden', 'true');
			expect(preview).toHaveAttribute('data-size', 'small');

			const previewRow = preview.querySelector('[data-part="item"]') as HTMLElement;
			expect(getComputedStyle(previewRow).paddingTop).toBe(getComputedStyle(rowOf('logs')).paddingTop);

			await pressEscape();
			await release();
		});

		it('takes the pointer and keeps the row indent, but not the root box, in the drag preview', async () => {
			const rootStyle = { '--ds-tree-row-start': '24px', padding: '20px', height: 400 } as CSSProperties;
			await page.render(<SortableTree style={rootStyle} />);

			await startDrag('logs');
			await expect.poll(dragPreview).not.toBeNull();

			const preview = dragPreview() as HTMLElement;
			const previewRow = preview.querySelector('[data-part="item"]') as HTMLElement;
			expect(preview.contains(document.elementFromPoint(pointer.x, pointer.y))).toBe(true);
			expect(parseFloat(getComputedStyle(previewRow).paddingLeft)).toBeCloseTo(
				parseFloat(getComputedStyle(rowOf('logs')).paddingLeft),
				0,
			);
			expect(preview.getBoundingClientRect().height).toBeLessThan(
				rowOf('logs').getBoundingClientRect().height * 1.5,
			);

			await pressEscape();
			await release();
		});

		it('shows the drag preview above a DsDialog that contains the tree', async () => {
			await page.render(
				<DsDialog open title="Columns">
					<SortableTree />
				</DsDialog>,
			);

			await expect.element(page.getByRole('dialog', { name: 'Columns' })).toBeVisible();
			await startDrag('logs');
			await expect.poll(dragPreview).not.toBeNull();

			// Both are body-level stacking contexts; elementFromPoint can't be used since the modal disables body pointer events
			const dialogLayer = bodyLayerOf(page.getByRole('dialog', { name: 'Columns' }).element());
			expect(zIndexOf(bodyLayerOf(dragPreview() as HTMLElement))).toBeGreaterThan(zIndexOf(dialogLayer));

			await pressEscape();
			await release();
		});

		it('cancels a drag on Escape without closing the DsDialog around the tree', async () => {
			const onOpenChange = vi.fn();
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(
				<DsDialog open title="Columns" onOpenChange={onOpenChange}>
					<SortableTree onCollectionChange={onCollectionChange} />
				</DsDialog>,
			);

			await startDrag('logs');
			await moveOver('router-2', 0.2);
			await expect.poll(dropIndicators).toEqual(['router-2:before']);

			await pressEscape();
			await expect.poll(dropIndicators).toEqual([]);
			expect(onOpenChange).not.toHaveBeenCalled();

			await release();
			expect(onCollectionChange).not.toHaveBeenCalled();

			await pressEscape();
			expect(onOpenChange).toHaveBeenCalledWith(false);
		});

		it('shows the drag preview above a dropdown surface that contains the tree', async () => {
			await page.render(
				<DsDropdownMenu.Root open>
					<DsDropdownMenu.Trigger>
						<span>Columns</span>
					</DsDropdownMenu.Trigger>
					<DsDropdownMenu.Content>
						<SortableTree />
					</DsDropdownMenu.Content>
				</DsDropdownMenu.Root>,
			);

			await expect.element(getTreeItem('logs')).toBeVisible();
			await startDrag('logs');
			await expect.poll(dragPreview).not.toBeNull();

			const menuLayer = bodyLayerOf(rowOf('logs'));
			expect(zIndexOf(menuLayer)).toBeGreaterThan(0);
			expect(zIndexOf(bodyLayerOf(dragPreview() as HTMLElement))).toBeGreaterThan(zIndexOf(menuLayer));

			await pressEscape();
			await release();
		});

		it('settles the overlay with a drop animation after a cross-group move', async () => {
			const consoleError = vi.spyOn(console, 'error');

			try {
				await page.render(<SortableTree />);

				await drag('router-1', 'logs', 0.8);

				expect(childOrder()).toEqual([...ROOT_ORDER, 'router-1']);
				expect(previewNames()).toEqual(['Router Alpha']);
				await expect.poll(dragPreview, { timeout: 1000 }).toBeNull();

				expect(rowOf('router-1')).not.toHaveAttribute('data-source');
				expect(consoleError).not.toHaveBeenCalled();
			} finally {
				consoleError.mockRestore();
			}
		});

		it('keeps showing the dragged row while the overlay settles after the last child leaves its group', async () => {
			await page.render(<SortableTree defaultExpandedValue={['network', 'monitoring']} />);

			await drag('dashboards', 'logs', 0.8);

			expect(childOrder('monitoring')).toEqual(['alerts']);
			expect(previewNames()).toEqual(['Dashboards']);
			await expect.poll(dragPreview, { timeout: 1000 }).toBeNull();
		});

		it('drops into a collapsed group without settling the overlay toward the viewport corner', async () => {
			await page.render(<SortableTree defaultExpandedValue={['network', 'monitoring']} />);

			// Collapsing keeps the group's rows mounted, so the moved row lands in hidden content
			await page.getByText('Monitoring').click();
			await expect
				.poll(() => getTreeItem('monitoring').element().getAttribute('aria-expanded'))
				.toBe('false');
			await waitForStableLayout(rowOf('logs'));

			await startDrag('logs');
			await moveOver('monitoring', 0.5);
			await expect.poll(dropIndicators).toEqual(['monitoring:inside']);
			const releasedTop = (dragPreview() as HTMLElement).getBoundingClientRect().top;
			firePointer('pointerup', document, pointer.x, pointer.y);

			for (let frame = 0; frame < 10 && dragPreview(); frame++) {
				expect((dragPreview() as HTMLElement).getBoundingClientRect().top).toBeGreaterThanOrEqual(
					releasedTop,
				);
				await nextFrame();
			}
			expect(dragPreview()).toBeNull();
			expect(childOrder('monitoring')).toEqual(['logs', 'alerts', 'dashboards']);
			await expect.element(getTreeItem('monitoring')).toHaveAttribute('aria-expanded', 'true');
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

			const scrollTopSettles = async () => {
				const before = scroller.scrollTop;
				await nextFrame();

				return scroller.scrollTop === before;
			};

			await startDrag('column-1');
			await moveOver(scroller, 0.5);
			await expect.poll(scrollTopSettles).toBe(true);
			expect(scroller.scrollTop).toBe(0);

			await moveOver(scroller, 0.95);
			await expect.poll(() => scroller.scrollTop).toBeGreaterThan(0);

			await moveOver(scroller, 0.85);
			await expect.poll(scrollTopSettles).toBe(true);
			expect(scroller.scrollTop).toBeLessThan(scroller.scrollHeight - scroller.clientHeight);

			await pressEscape();
			await release();
		});
	});

	describe('group blocks', () => {
		it('targets an open sibling group as a whole block from any of its rows, by the block halves', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(<SortableTree canDrop={keepParent} onCollectionChange={onCollectionChange} />);

			await startDrag('monitoring');

			for (const [target, ratio, expected] of [
				['network', 0.7, 'network:before'],
				['router-1', 0.8, 'network:before'],
				['router-2', 0.2, 'network:after'],
				['router-2', 0.8, 'network:after'],
			] as const) {
				await moveOver(target, ratio);
				await expect.poll(dropIndicators).toEqual([expected]);
			}

			await release();

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'monitoring',
					target: 'network',
					position: 'after',
					fromParent: null,
					toParent: null,
				}),
			);
			expect(childOrder()).toEqual(['network', 'monitoring', 'archive', 'logs']);
			expect(childOrder('network')).toEqual(NETWORK_ORDER);
		});

		it('moves a group past an open neighbor group from the first pixel of that block', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			await page.render(
				<SortableTree
					defaultExpandedValue={['network', 'monitoring']}
					canDrop={keepParent}
					onCollectionChange={onCollectionChange}
				/>,
			);

			await startDrag('archive');
			await moveOver('monitoring', 0.05);
			await expect.poll(dropIndicators).toEqual(['monitoring:after']);
			await release();

			expect(childOrder()).toEqual(['network', 'monitoring', 'archive', 'logs']);
			expect(onCollectionChange).toHaveBeenLastCalledWith(
				expect.anything(),
				moveDetails({
					node: 'archive',
					target: 'monitoring',
					position: 'after',
					fromParent: null,
					toParent: null,
				}),
			);

			await startDrag('archive');

			for (const [target, ratio] of [
				['dashboards', 0.95],
				['alerts', 0.8],
				['monitoring', 0.1],
			] as const) {
				await moveOver(target, ratio);
				await expect.poll(dropIndicators).toEqual(['monitoring:before']);
			}

			await release();

			expect(childOrder()).toEqual(ROOT_ORDER);
			expect(onCollectionChange).toHaveBeenLastCalledWith(
				expect.anything(),
				moveDetails({
					node: 'archive',
					target: 'monitoring',
					position: 'before',
					fromParent: null,
					toParent: null,
				}),
			);
		});

		it('targets a nested sibling group as a whole block for a node of the same parent', async () => {
			const onCollectionChange = vi.fn<OnCollectionChange>();
			const nested: DsTreeNode[] = [
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
					],
				},
			];
			await page.render(
				<SortableTree
					nodes={nested}
					defaultExpandedValue={['network', 'routers']}
					canDrop={keepParent}
					onCollectionChange={onCollectionChange}
				/>,
			);

			await startDrag('firewall-1');

			for (const target of ['routers', 'router-1'] as const) {
				await moveOver(target, 0.2);
				await expect.poll(dropIndicators).toEqual(['routers:before']);
			}

			await release();

			expect(onCollectionChange).toHaveBeenCalledExactlyOnceWith(
				expect.anything(),
				moveDetails({
					node: 'firewall-1',
					target: 'routers',
					position: 'before',
					fromParent: 'network',
					toParent: 'network',
				}),
			);
			expect(childOrder('network')).toEqual(['firewall-1', 'routers']);
		});
	});
});

describe('DsTree checkbox rows', () => {
	const checkboxNodes: DsTreeNode[] = [
		{
			id: 'network',
			name: 'Network',
			children: [
				{ id: 'router-1', name: 'Router Alpha' },
				{ id: 'router-2', name: 'Router Beta' },
			],
		},
		{ id: 'logs', name: 'Logs' },
	];

	const renderCheckboxTree = (renderLogs?: (node: DsTreeNode, indexPath: number[]) => ReactNode) => {
		const onCheckedChange = vi.fn();
		const collection = createDsTreeCollection(checkboxNodes);

		return {
			onCheckedChange,
			screen: page.render(
				<DsTree.Root
					collection={collection}
					defaultExpandedValue={['network']}
					defaultCheckedValue={['router-1']}
					onCheckedChange={onCheckedChange}
				>
					<DsTree.Tree>
						{collection.rootNode.children?.map((node, index) =>
							renderLogs && node.id === 'logs' ? (
								renderLogs(node, [index])
							) : (
								<CheckboxTreeNode key={node.id} node={node} indexPath={[index]} />
							),
						)}
					</DsTree.Tree>
				</DsTree.Root>,
			),
		};
	};

	it('announces each row as checked, unchecked or mixed', async () => {
		await renderCheckboxTree().screen;

		await expect.element(page.getByRole('treeitem', { name: /^Router Alpha/, checked: true })).toBeVisible();
		await expect.element(page.getByRole('treeitem', { name: /^Router Beta/, checked: false })).toBeVisible();
		await expect.element(page.getByRole('treeitem', { name: /^Logs/, checked: false })).toBeVisible();
		await expect
			.element(page.getByRole('treeitem', { name: /^Network/ }))
			.toHaveAttribute('aria-checked', 'mixed');

		await page.getByRole('checkbox', { name: 'Router Beta' }).click();

		await expect.element(page.getByRole('treeitem', { name: /^Router Beta/, checked: true })).toBeVisible();
		await expect
			.element(page.getByRole('treeitem', { name: /^Network/ }))
			.toHaveAttribute('aria-checked', 'true');
	});

	it('leaves rows of a tree without checkboxes unannounced', async () => {
		const collection = createDsTreeCollection(checkboxNodes);
		await page.render(
			<DsTree.Root collection={collection} defaultExpandedValue={['network']}>
				<DsTree.Tree>
					{collection.rootNode.children?.map((node, index) => (
						<TreeNode key={node.id} node={node} indexPath={[index]} />
					))}
				</DsTree.Tree>
			</DsTree.Root>,
		);
		await expect.element(getTreeItem('router-1')).toBeVisible();

		expect(document.querySelector('[role="treeitem"][aria-checked]')).toBeNull();
	});

	it('shows and announces the checked state a row passes, and ignores clicks while disabled', async () => {
		const { onCheckedChange, screen } = renderCheckboxTree((node, indexPath) => (
			<DsTree.NodeProvider key={node.id} node={node} indexPath={indexPath}>
				<DsTree.Item>
					<DsTree.NodeCheckbox checked disabled />
					<DsTree.ItemText>{node.name}</DsTree.ItemText>
				</DsTree.Item>
			</DsTree.NodeProvider>
		));
		await screen;

		const checkbox = page.getByRole('checkbox', { name: 'Logs' });
		await expect.element(page.getByRole('treeitem', { name: /^Logs/, checked: true })).toBeVisible();
		await expect.element(checkbox).toHaveAttribute('aria-disabled', 'true');
		await expect.element(checkbox).toHaveAttribute('data-state', 'checked');

		await checkbox.click({ force: true });

		expect(onCheckedChange).not.toHaveBeenCalled();
		await expect.element(page.getByRole('treeitem', { name: /^Logs/, checked: true })).toBeVisible();
	});

	it('neither selects nor expands a row from its disabled checkbox, while the rest of the row still does', async () => {
		const onSelectionChange = vi.fn();
		const onExpandedChange = vi.fn();
		const collection = createDsTreeCollection(checkboxNodes);

		await page.render(
			<DsTree.Root
				collection={collection}
				onSelectionChange={onSelectionChange}
				onExpandedChange={onExpandedChange}
			>
				<DsTree.Tree>
					<DsTree.NodeProvider node={checkboxNodes[0]} indexPath={[0]}>
						<DsTree.Branch>
							<DsTree.BranchControl>
								<DsTree.NodeCheckbox checked={false} disabled />
								<DsTree.BranchText>Network</DsTree.BranchText>
							</DsTree.BranchControl>
						</DsTree.Branch>
					</DsTree.NodeProvider>
					<DsTree.NodeProvider node={checkboxNodes[1]} indexPath={[1]}>
						<DsTree.Item>
							<DsTree.NodeCheckbox checked={false} disabled />
							<DsTree.ItemText>Logs</DsTree.ItemText>
						</DsTree.Item>
					</DsTree.NodeProvider>
				</DsTree.Tree>
			</DsTree.Root>,
		);

		await page.getByRole('checkbox', { name: 'Network' }).click({ force: true });
		await page.getByRole('checkbox', { name: 'Logs' }).click({ force: true });

		expect(onExpandedChange).not.toHaveBeenCalled();
		expect(onSelectionChange).not.toHaveBeenCalled();
		await expect.element(getTreeItem('network')).toHaveAttribute('aria-expanded', 'false');

		await page.getByText('Logs').click();

		expect(onSelectionChange).toHaveBeenCalledWith(expect.objectContaining({ selectedValue: ['logs'] }));
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
