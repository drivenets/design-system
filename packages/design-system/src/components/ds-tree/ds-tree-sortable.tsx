import {
	createContext,
	use,
	useEffect,
	useId,
	useRef,
	useState,
	useSyncExternalStore,
	type ComponentProps,
	type CSSProperties,
	type MouseEvent,
	type Ref,
} from 'react';
import {
	DndContext,
	DragOverlay,
	MeasuringStrategy,
	PointerSensor,
	pointerWithin,
	useDraggable,
	useDroppable,
	useSensor,
	useSensors,
	type DragEndEvent,
	type DragMoveEvent,
	type Announcements,
	type DragStartEvent,
	type DraggableSyntheticListeners,
	type DropAnimation,
	type UniqueIdentifier,
} from '@dnd-kit/core';
import { Portal } from '@ark-ui/react/portal';
import {
	TreeView,
	useTreeViewContext,
	useTreeViewNodeContext,
	type UseTreeViewContext,
} from '@ark-ui/react/tree-view';
import classNames from 'classnames';

import { DsIcon } from '../ds-icon';
import { mergeRefs } from '../../utils/merge-refs';
import styles from './ds-tree.module.scss';
import type {
	DsTreeDragHandleProps,
	DsTreeDropPosition,
	DsTreeNode,
	DsTreeSortableProps,
} from './ds-tree.types';
import { getDsTreeDropPosition, getDsTreeMove, isDsTreeGroup, type DsTreeMove } from './ds-tree.utils';

const ACTIVATION_DISTANCE = 4;
const AUTO_EXPAND_DELAY = 500;
const AUTO_SCROLL_EDGE = 0.1;
const REMEASURE_INTERVAL = 100;
// Above DsDialog/DsDrawer/DsPopover layers (≤ 1200), so a tree inside them still shows the drag preview
const DRAG_OVERLAY_Z_INDEX = 1300;
const DROP_ANIMATION: DropAnimation = { duration: 200, easing: 'cubic-bezier(0.32, 0.72, 0, 1)' };
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const NODE_CHECKBOX_SELECTOR = '[data-scope="tree-view"][data-part="node-checkbox"]';

// Drag has no keyboard or screen-reader flow, and dnd-kit's default announcements would read raw node ids
const SILENT_ANNOUNCEMENTS: Announcements = {
	onDragStart: () => undefined,
	onDragOver: () => undefined,
	onDragEnd: () => undefined,
	onDragCancel: () => undefined,
};

type DsTreePreviewCheckbox = 'checked' | 'unchecked' | 'indeterminate';

interface DsTreePreviewRow {
	value: string;
	name: string;
	level: number;
	checkbox: DsTreePreviewCheckbox | null;
}

interface ActiveDrag {
	value: string;
	size: string | undefined;
	// Captured at drag start: the overlay keeps rendering through the drop animation, after the move is applied
	preview: DsTreePreviewRow[];
}

interface ResolvedDrop<T extends DsTreeNode> {
	key: string;
	collection: unknown;
	result: DropState<T> | null;
}

interface DropIndicator {
	droppableId: UniqueIdentifier;
	position: DsTreeDropPosition;
	containerValue: string | null;
	allowed: boolean;
}

interface DropState<T extends DsTreeNode> extends DropIndicator {
	move: DsTreeMove<T>;
}

interface DsTreeSortableSnapshot<T extends DsTreeNode> {
	active: ActiveDrag | null;
	drop: DropState<T> | null;
	skipDropAnimation: boolean;
}

interface PendingExpand {
	node: string;
	group: string;
}

const isSameDrop = (a: DropIndicator | null, b: DropIndicator | null) =>
	a?.droppableId === b?.droppableId && a?.position === b?.position && a?.allowed === b?.allowed;

// Rows subscribe to their own slice so moving the indicator re-renders only the rows it touches
const createSortableStore = <T extends DsTreeNode>() => {
	let snapshot: DsTreeSortableSnapshot<T> = { active: null, drop: null, skipDropAnimation: false };
	const listeners = new Set<() => void>();
	const rows = new Map<string, HTMLElement>();

	return {
		rows,
		getSnapshot: () => snapshot,
		subscribe: (listener: () => void) => {
			listeners.add(listener);

			return () => {
				listeners.delete(listener);
			};
		},
		update: (next: Partial<DsTreeSortableSnapshot<T>>) => {
			snapshot = { ...snapshot, ...next };
			listeners.forEach((listener) => listener());
		},
		registerRow: (value: string, element: HTMLElement | null) => {
			if (element) {
				rows.set(value, element);
			} else {
				rows.delete(value);
			}
		},
	};
};

interface DsTreeSortableContextValue {
	getSnapshot: () => { active: ActiveDrag | null; drop: DropIndicator | null };
	subscribe: (listener: () => void) => () => void;
	registerRow: (value: string, element: HTMLElement | null) => void;
}

interface DsTreeRowDragContextValue {
	setActivatorNodeRef: (element: HTMLElement | null) => void;
	listeners: DraggableSyntheticListeners;
	disabled: boolean;
}

const DsTreeSortableContext = createContext<DsTreeSortableContextValue | null>(null);
const DsTreeRowDragContext = createContext<DsTreeRowDragContextValue | null>(null);

export const useDsTreeSortableContext = () => use(DsTreeSortableContext);

// Ark types the context collection as `any`
const useDsTreeViewContext = <T extends DsTreeNode = DsTreeNode>() =>
	useTreeViewContext() as UseTreeViewContext<T>;

const useSortableSelector = <S,>(
	select: (snapshot: ReturnType<DsTreeSortableContextValue['getSnapshot']>) => S,
) => {
	const sortable = use(DsTreeSortableContext);

	return useSyncExternalStore(
		sortable?.subscribe ?? subscribeNever,
		() => select(sortable?.getSnapshot() ?? EMPTY_SNAPSHOT),
		() => select(EMPTY_SNAPSHOT),
	);
};

const EMPTY_SNAPSHOT = { active: null, drop: null };

const subscribeNever = () => () => undefined;

const subscribeReducedMotion = (onChange: () => void) => {
	const query = window.matchMedia(REDUCED_MOTION_QUERY);
	query.addEventListener('change', onChange);

	return () => query.removeEventListener('change', onChange);
};

const usePrefersReducedMotion = () =>
	useSyncExternalStore(
		subscribeReducedMotion,
		() => window.matchMedia(REDUCED_MOTION_QUERY).matches,
		() => false,
	);

const getClientY = (event: Event) =>
	'clientY' in event && typeof event.clientY === 'number' ? event.clientY : 0;

interface DsTreeRootDropZoneProps {
	id: string;
	isTarget: boolean;
	registerRow: (value: string, element: HTMLElement | null) => void;
}

const DsTreeRootDropZone = ({ id, isTarget, registerRow }: DsTreeRootDropZoneProps) => {
	const { setNodeRef } = useDroppable({ id });

	return (
		<div
			ref={mergeRefs<HTMLDivElement>(setNodeRef, (element) => registerRow(id, element))}
			className={styles.rootDropZone}
			data-drop-zone="root-end"
			data-drop={isTarget ? 'after' : undefined}
			aria-hidden="true"
		/>
	);
};

const toPreviewCheckbox = (checked: boolean | 'indeterminate'): DsTreePreviewCheckbox =>
	checked === true ? 'checked' : checked === false ? 'unchecked' : 'indeterminate';

const DsTreeDragPreview = ({ active, rejected }: { active: ActiveDrag; rejected: boolean }) => (
	<div
		className={styles.dragPreview}
		data-size={active.size}
		data-rejected={rejected ? '' : undefined}
		aria-hidden="true"
	>
		{active.preview.map(({ value, name, level, checkbox }) => (
			<div
				key={value}
				className={styles.dragPreviewRow}
				style={{ '--ds-tree-preview-level': level } as CSSProperties}
			>
				<span className={styles.dragHandle}>
					<DsIcon icon="drag_indicator" size="tiny" />
				</span>

				{checkbox && (
					<span className={styles.nodeCheckbox} data-state={checkbox}>
						<span className={styles.nodeCheckboxBox}>
							{checkbox === 'checked' && <DsIcon icon="check_small" size="tiny" variant="outlined" />}
							{checkbox === 'indeterminate' && (
								<DsIcon icon="check_indeterminate_small" size="tiny" variant="outlined" />
							)}
						</span>
					</span>
				)}

				<span className={styles.itemText}>{name}</span>
			</div>
		))}
	</div>
);

const DsTreeSortable = <T extends DsTreeNode = DsTreeNode>({
	children,
	canDrop,
	onCollectionChange,
}: DsTreeSortableProps<T>) => {
	const treeView = useDsTreeViewContext<T>();
	const { collection } = treeView;
	const rootEndId = `${useId()}-root-end`;
	const prefersReducedMotion = usePrefersReducedMotion();

	const [store] = useState(createSortableStore<T>);
	const { active, drop, skipDropAnimation } = useSyncExternalStore(
		store.subscribe,
		store.getSnapshot,
		store.getSnapshot,
	);

	const pointerYRef = useRef(0);
	const stopTrackingRef = useRef<(() => void) | null>(null);
	const pendingExpandRef = useRef<PendingExpand | null>(null);
	const resolvedRef = useRef<ResolvedDrop<T> | null>(null);
	const expandRef = useRef(treeView.expand);

	useEffect(() => {
		expandRef.current = treeView.expand;
	});

	const sensors = useSensors(
		useSensor(PointerSensor, { activationConstraint: { distance: ACTIVATION_DISTANCE } }),
	);

	// dnd-kit reports `over` a render late; `undefined` means the pointer already left that droppable
	const resolveDrop = (
		dragged: ActiveDrag,
		overId: UniqueIdentifier | undefined,
	): DropState<T> | null | undefined => {
		if (overId === undefined) {
			return null;
		}

		const value = String(overId);
		const element = store.rows.get(value);

		if (!element) {
			return null;
		}

		const rect = element.getBoundingClientRect();
		const pointerY = pointerYRef.current;

		if (pointerY < rect.top || pointerY > rect.bottom) {
			return undefined;
		}

		let targetPath: number[] | undefined;
		let position: DsTreeDropPosition;

		if (value === rootEndId) {
			const rootCount = collection.getNodeChildren(collection.rootNode).length;
			targetPath = rootCount > 0 ? [rootCount - 1] : undefined;
			position = 'after';
		} else {
			targetPath = collection.getIndexPath(value);
			const target = targetPath && collection.at(targetPath);

			if (!target) {
				return null;
			}

			position = getDsTreeDropPosition({
				pointerY,
				rect,
				isBranch: isDsTreeGroup(target),
				isExpanded: treeView.expandedValue.includes(value),
			});
		}

		const key = `${String(overId)}:${position}`;
		const cached = resolvedRef.current;

		if (cached?.key === key && cached.collection === collection) {
			return cached.result;
		}

		const fromPath = collection.getIndexPath(dragged.value);
		const move = fromPath && targetPath && getDsTreeMove(collection, fromPath, targetPath, position);
		let result: DropState<T> | null = null;

		if (move && move.status !== 'noop') {
			const { toParent } = move.details;

			result = {
				droppableId: overId,
				position,
				containerValue: toParent ? collection.getNodeValue(toParent) : null,
				allowed: move.status === 'allowed' && (canDrop?.(move.details) ?? true),
				move,
			};
		}

		resolvedRef.current = { key, collection, result };

		return result;
	};

	const stopTracking = () => {
		stopTrackingRef.current?.();
		stopTrackingRef.current = null;
	};

	const reset = () => {
		stopTracking();
		resolvedRef.current = null;
		store.update({ active: null, drop: null });
	};

	const getPreviewRows = (value: string): DsTreePreviewRow[] => {
		const rows: DsTreePreviewRow[] = [];
		const startPath = collection.getIndexPath(value);

		const visit = (indexPath: number[], level: number) => {
			const node = collection.at(indexPath);

			if (!node) {
				return;
			}

			const { checked, expanded } = treeView.getNodeState({ node, indexPath });
			rows.push({
				value: collection.getNodeValue(node),
				name: node.name,
				level,
				checkbox: toPreviewCheckbox(checked),
			});

			if (expanded) {
				collection.getNodeChildren(node).forEach((_, index) => visit([...indexPath, index], level + 1));
			}
		};

		if (startPath) {
			visit(startPath, 0);
		}

		return rows;
	};

	const handleDragStart = ({ active: dragged, activatorEvent }: DragStartEvent) => {
		const value = String(dragged.id);
		const row = store.rows.get(value);
		const preview = getPreviewRows(value);

		if (preview.length === 0) {
			return;
		}

		const hasCheckbox = Boolean(row?.querySelector(NODE_CHECKBOX_SELECTOR));

		pendingExpandRef.current = null;
		resolvedRef.current = null;
		store.update({ skipDropAnimation: false });
		pointerYRef.current = getClientY(activatorEvent);

		const onPointerMove = (event: PointerEvent) => {
			pointerYRef.current = event.clientY;
		};

		window.addEventListener('pointermove', onPointerMove, { capture: true, passive: true });
		stopTrackingRef.current = () =>
			window.removeEventListener('pointermove', onPointerMove, { capture: true });

		store.update({
			active: {
				value,
				size: row?.closest<HTMLElement>('[data-size]')?.dataset.size,
				preview: hasCheckbox ? preview : preview.map((previewRow) => ({ ...previewRow, checkbox: null })),
			},
		});
	};

	const handleDragMove = ({ over }: DragMoveEvent) => {
		const current = store.getSnapshot();

		if (!current.active) {
			return;
		}

		const next = resolveDrop(current.active, over?.id);

		if (next !== undefined && !isSameDrop(current.drop, next)) {
			store.update({ drop: next });
		}
	};

	const handleDragEnd = ({ over }: DragEndEvent) => {
		const current = store.getSnapshot();
		const resolved = current.active ? resolveDrop(current.active, over?.id) : null;
		// Released before `over` caught up with the pointer: drop on the slot the indicator shows
		const result = resolved === undefined ? current.drop : resolved;
		reset();

		const fromPath = current.active && collection.getIndexPath(current.active.value);

		if (!current.active || !fromPath || !result?.allowed) {
			return;
		}

		const { move } = result;
		const { details } = move;
		const group = collection.getNodeValue(details.target);

		if (details.position === 'inside' && !treeView.expandedValue.includes(group)) {
			pendingExpandRef.current = { node: current.active.value, group };
			// The moved row sits in still-collapsed content (0×0 at the origin) when dnd-kit measures the settle target
			store.update({ skipDropAnimation: true });
		}

		onCollectionChange(collection.move([fromPath], move.toIndexPath), details);
	};

	// Expand only once the consumer applies the move, so ignoring `next` leaves the group as it was
	useEffect(() => {
		const pending = pendingExpandRef.current;
		pendingExpandRef.current = null;

		const parentPath = pending && collection.getIndexPath(pending.node)?.slice(0, -1);
		const parent = parentPath?.length ? collection.at(parentPath) : undefined;

		if (pending && parent && collection.getNodeValue(parent) === pending.group) {
			expandRef.current([pending.group]);
		}
	}, [collection]);

	const autoExpandValue =
		drop?.allowed &&
		drop.position === 'inside' &&
		drop.containerValue &&
		!treeView.expandedValue.includes(drop.containerValue)
			? drop.containerValue
			: null;

	useEffect(() => {
		if (!autoExpandValue) {
			return;
		}

		const timeout = window.setTimeout(() => expandRef.current([autoExpandValue]), AUTO_EXPAND_DELAY);

		return () => window.clearTimeout(timeout);
	}, [autoExpandValue]);

	useEffect(() => () => stopTrackingRef.current?.(), []);

	const contextValue: DsTreeSortableContextValue = store;

	return (
		<DsTreeSortableContext value={contextValue}>
			<DndContext
				sensors={sensors}
				collisionDetection={pointerWithin}
				// dnd-kit only re-measures when drop targets mount, so rows shifted by an expanding group keep stale rects
				measuring={{
					droppable: { strategy: MeasuringStrategy.WhileDragging, frequency: REMEASURE_INTERVAL },
				}}
				autoScroll={{ threshold: { x: 0, y: AUTO_SCROLL_EDGE } }}
				accessibility={{ announcements: SILENT_ANNOUNCEMENTS }}
				onDragStart={handleDragStart}
				onDragMove={handleDragMove}
				onDragOver={handleDragMove}
				onDragEnd={handleDragEnd}
				onDragCancel={reset}
			>
				{children}
				<DsTreeRootDropZone
					id={rootEndId}
					registerRow={store.registerRow}
					isTarget={Boolean(drop?.allowed && drop.droppableId === rootEndId)}
				/>
				{/* Portaled so a transformed ancestor (drawer, dialog) can't offset the fixed-position overlay */}
				<Portal>
					<DragOverlay
						zIndex={DRAG_OVERLAY_Z_INDEX}
						dropAnimation={prefersReducedMotion || skipDropAnimation ? null : DROP_ANIMATION}
					>
						{active && <DsTreeDragPreview active={active} rejected={Boolean(drop && !drop.allowed)} />}
					</DragOverlay>
				</Portal>
			</DndContext>
		</DsTreeSortableContext>
	);
};

const useDsTreeSortableRow = (ref: Ref<HTMLDivElement> | undefined) => {
	const sortable = use(DsTreeSortableContext);
	const { value, disabled } = useTreeViewNodeContext();

	const draggable = useDraggable({ id: value, disabled });
	const { setNodeRef: setDroppableRef } = useDroppable({ id: value });
	const dropPosition = useSortableSelector(({ drop }) =>
		drop?.allowed && drop.droppableId === value ? drop.position : undefined,
	);
	const isSource = useSortableSelector(({ active }) => active?.value === value);

	if (!sortable) {
		throw new Error('DsTree sortable rows must render inside DsTree.Sortable');
	}

	const { registerRow } = sortable;

	const dragContext: DsTreeRowDragContextValue = {
		setActivatorNodeRef: draggable.setActivatorNodeRef,
		listeners: draggable.listeners,
		disabled,
	};

	const rowProps = {
		ref: mergeRefs<HTMLDivElement>(ref, draggable.setNodeRef, setDroppableRef, (element) =>
			registerRow(value, element),
		),
		'data-drop': dropPosition,
		'data-source': isSource ? '' : undefined,
	};

	return { rowProps, dragContext };
};

type ArkItemProps = ComponentProps<typeof TreeView.Item>;
type ArkBranchControlProps = ComponentProps<typeof TreeView.BranchControl>;

export const DsTreeSortableItem = ({ ref, children, ...props }: ArkItemProps) => {
	const { rowProps, dragContext } = useDsTreeSortableRow(ref);

	return (
		<DsTreeRowDragContext value={dragContext}>
			<TreeView.Item {...props} {...rowProps}>
				{children}
			</TreeView.Item>
		</DsTreeRowDragContext>
	);
};

export const DsTreeSortableBranchControl = ({ ref, children, ...props }: ArkBranchControlProps) => {
	const { rowProps, dragContext } = useDsTreeSortableRow(ref);

	return (
		<DsTreeRowDragContext value={dragContext}>
			<TreeView.BranchControl {...props} {...rowProps}>
				{children}
			</TreeView.BranchControl>
		</DsTreeRowDragContext>
	);
};

export const useDsTreeSortableBranchAttributes = () => {
	const { value } = useTreeViewNodeContext();
	const isContainer = useSortableSelector(({ drop }) =>
		Boolean(drop?.allowed && drop.containerValue === value),
	);
	const isSource = useSortableSelector(({ active }) => active?.value === value);

	return {
		'data-drop-container': isContainer ? '' : undefined,
		'data-source': isSource ? '' : undefined,
	};
};

const DsTreeDragHandle = ({ ref, className, style }: DsTreeDragHandleProps) => {
	const drag = use(DsTreeRowDragContext);

	if (!drag) {
		return null;
	}

	// Drag has no keyboard flow, so the handle stays out of focus and out of each treeitem's accessible name
	return (
		<button
			ref={mergeRefs<HTMLButtonElement>(ref, drag.setActivatorNodeRef)}
			type="button"
			tabIndex={-1}
			aria-hidden="true"
			className={classNames(styles.dragHandle, className)}
			style={style}
			disabled={drag.disabled}
			{...drag.listeners}
			onMouseDown={(event: MouseEvent<HTMLButtonElement>) => event.preventDefault()}
			onClick={(event: MouseEvent<HTMLButtonElement>) => event.stopPropagation()}
		>
			<DsIcon icon="drag_indicator" size="tiny" />
		</button>
	);
};

DsTreeSortable.displayName = 'DsTree.Sortable';
DsTreeDragHandle.displayName = 'DsTree.DragHandle';

export { DsTreeSortable, DsTreeDragHandle };
