import {
	createContext,
	use,
	useEffect,
	useId,
	useRef,
	useState,
	useSyncExternalStore,
	type ComponentProps,
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
	DsTreeMoveDetails,
	DsTreeNode,
	DsTreeSortableProps,
} from './ds-tree.types';
import {
	isDsTreeGroup,
	resolveDsTreeDrop,
	resolveDsTreeSlot,
	type DsTreeDrop,
	type DsTreeDropContext,
} from './ds-tree.utils';

const ACTIVATION_DISTANCE = 4;
const AUTO_EXPAND_DELAY = 500;
const AUTO_SCROLL_EDGE = 0.1;
const REMEASURE_INTERVAL = 100;
const DROP_ANIMATION: DropAnimation = { duration: 200, easing: 'cubic-bezier(0.32, 0.72, 0, 1)' };
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const ROOT_SELECTOR = '[data-scope="tree-view"][data-part="root"]';
const DRAG_HANDLE_SELECTOR = '[data-part="drag-handle"]';
// Lookups by id, owner or value must keep finding only the real row, and the copy shows the row at rest
const PREVIEW_STRIPPED_ATTRIBUTES = [
	'id',
	'tabindex',
	'data-ownedby',
	'data-value',
	'data-source',
	'data-drop',
];

// Drag has no keyboard or screen-reader flow, and dnd-kit's default announcements would read raw node ids
const SILENT_ANNOUNCEMENTS: Announcements = {
	onDragStart: () => undefined,
	onDragOver: () => undefined,
	onDragEnd: () => undefined,
	onDragCancel: () => undefined,
};

interface ActiveDrag {
	value: string;
	size: string | undefined;
	// Copied at drag start: the overlay keeps rendering through the drop animation, after the move is applied
	preview: HTMLElement;
	// The tree root's class and inline style, so the consumer's row styles still apply to the copy
	rootClassName: string;
	// Custom properties only: the root's own box (padding, height, overflow) must not shape the preview
	rootCustomProperties: [string, string][];
}

type DropIndicator = Omit<DsTreeDrop<DsTreeNode>, 'move'>;

interface DsTreeSortableSnapshot<T extends DsTreeNode> {
	active: ActiveDrag | null;
	drop: DsTreeDrop<T> | null;
	skipDropAnimation: boolean;
}

interface CanDropCache<T extends DsTreeNode> {
	collection: UseTreeViewContext<T>['collection'];
	canDrop: DsTreeSortableProps<T>['canDrop'];
	results: Map<string, boolean>;
}

interface PendingExpand {
	node: string;
	group: string;
}

const isSameDrop = (a: DropIndicator | null, b: DropIndicator | null) =>
	a?.droppableId === b?.droppableId &&
	a?.position === b?.position &&
	a?.allowed === b?.allowed &&
	a?.block === b?.block;

const BRANCH_SELECTOR = '[data-scope="tree-view"][data-part="branch"]';

// Rows read their own slice of the drop state, though dnd-kit's context still re-renders every row when `over` changes
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

interface DsTreeRootDropZoneProps {
	id: string;
	isTarget: boolean;
	reserveSpace: boolean;
	registerRow: (value: string, element: HTMLElement | null) => void;
}

const DsTreeRootDropZone = ({ id, isTarget, reserveSpace, registerRow }: DsTreeRootDropZoneProps) => {
	const { setNodeRef } = useDroppable({ id });

	return (
		<div
			ref={mergeRefs<HTMLDivElement>(setNodeRef, (element) => registerRow(id, element))}
			className={styles.rootDropZone}
			data-drop-zone="root-end"
			data-reserve-space={reserveSpace ? '' : undefined}
			data-drop={isTarget ? 'after' : undefined}
			aria-hidden="true"
		/>
	);
};

const copyPreview = (source: HTMLElement) => {
	const copy = source.cloneNode(true) as HTMLElement;

	for (const element of [copy, ...copy.querySelectorAll('*')]) {
		PREVIEW_STRIPPED_ATTRIBUTES.forEach((name) => element.removeAttribute(name));
	}

	copy.querySelector(DRAG_HANDLE_SELECTOR)?.classList.add(styles.dragPreviewHandle);

	return copy;
};

const DsTreeDragPreview = ({ active, rejected }: { active: ActiveDrag; rejected: boolean }) => {
	const attachPreview = (host: HTMLDivElement | null) => {
		if (host) {
			host.className = classNames(active.rootClassName, styles.dragPreviewRoot);
			active.rootCustomProperties.forEach(([name, value]) => host.style.setProperty(name, value));
			host.replaceChildren(active.preview);
		}
	};

	return (
		<div
			className={styles.dragPreview}
			data-size={active.size}
			data-rejected={rejected ? '' : undefined}
			aria-hidden="true"
		>
			{/* Inert here, not on the preview, so the preview still takes the pointer and shows its cursor */}
			<div ref={attachPreview} data-size={active.size} inert />
		</div>
	);
};

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
	const canDropCacheRef = useRef<CanDropCache<T> | null>(null);
	const expandRef = useRef(treeView.expand);

	useEffect(() => {
		expandRef.current = treeView.expand;
	});

	const sensors = useSensors(
		useSensor(PointerSensor, { activationConstraint: { distance: ACTIVATION_DISTANCE } }),
	);

	// The pointer moves within a slot far more often than it changes slots, and canDrop is the consumer's code
	const cachedCanDrop = (details: DsTreeMoveDetails<T>) => {
		let cache = canDropCacheRef.current;

		if (cache?.collection !== collection || cache.canDrop !== canDrop) {
			cache = { collection, canDrop, results: new Map() };
			canDropCacheRef.current = cache;
		}

		const key = [details.node, details.target]
			.map((node) => collection.getNodeValue(node))
			.concat(details.position)
			.join('\0');
		let allowed = cache.results.get(key);

		if (allowed === undefined) {
			allowed = canDrop?.(details) ?? true;
			cache.results.set(key, allowed);
		}

		return allowed;
	};

	const dropContext = (draggedValue: string): DsTreeDropContext<T> => ({
		collection,
		expandedValue: treeView.expandedValue,
		canDrop: cachedCanDrop,
		draggedValue,
		rootEndId,
	});

	// dnd-kit reports `over` a render late; `undefined` means the pointer already left that droppable
	const resolveDrop = (dragged: ActiveDrag, overId: UniqueIdentifier | undefined) =>
		overId === undefined
			? null
			: resolveDsTreeDrop(dropContext(dragged.value), {
					hoveredId: String(overId),
					pointerY: pointerYRef.current,
					getRowRect: (value) => store.rows.get(value)?.getBoundingClientRect(),
					getBlockRect: (value) => store.rows.get(value)?.closest(BRANCH_SELECTOR)?.getBoundingClientRect(),
				});

	const stopTracking = () => {
		stopTrackingRef.current?.();
		stopTrackingRef.current = null;
	};

	const reset = () => {
		stopTracking();
		canDropCacheRef.current = null;
		store.update({ active: null, drop: null });
	};

	const handleDragStart = ({ active: dragged, activatorEvent }: DragStartEvent) => {
		const value = String(dragged.id);
		// The handle that started the drag sits in this row, which registered itself on mount
		const row = store.rows.get(value) as HTMLElement;
		const node = collection.findNode(value);
		const root = row.closest<HTMLElement>(ROOT_SELECTOR);

		pendingExpandRef.current = null;
		// PointerSensor is the only sensor, so drags always start from a pointer event
		pointerYRef.current = (activatorEvent as PointerEvent).clientY;

		// dnd-kit's event `delta` is scroll-adjusted and a render late, while rows are measured in the viewport now
		const onPointerMove = (event: PointerEvent) => {
			pointerYRef.current = event.clientY;
		};

		// Escape should only cancel the drag, and an outer popover or dialog skips an Escape that is already prevented
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				event.preventDefault();
			}
		};

		window.addEventListener('pointermove', onPointerMove, { capture: true, passive: true });
		window.addEventListener('keydown', onKeyDown, { capture: true });
		stopTrackingRef.current = () => {
			window.removeEventListener('pointermove', onPointerMove, { capture: true });
			window.removeEventListener('keydown', onKeyDown, { capture: true });
		};

		store.update({
			active: {
				value,
				size: root?.dataset.size,
				preview: copyPreview(
					node && isDsTreeGroup(node) ? (row.closest<HTMLElement>(BRANCH_SELECTOR) ?? row) : row,
				),
				rootClassName: root?.className ?? '',
				rootCustomProperties: Array.from(root?.style ?? [])
					.filter((name) => name.startsWith('--'))
					.map((name) => [name, root?.style.getPropertyValue(name) ?? '']),
			},
			skipDropAnimation: false,
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
		const { active: dragged, drop: shown } = current;
		const resolved = dragged ? resolveDrop(dragged, over?.id) : null;
		// Released before `over` caught up with the pointer: drop on the slot the indicator shows
		const result =
			resolved === undefined && dragged && shown
				? resolveDsTreeSlot(dropContext(dragged.value), shown).drop
				: (resolved ?? null);
		reset();

		if (!result?.allowed) {
			return;
		}

		const { move } = result;
		const { details } = move;
		const group = collection.getNodeValue(details.target);

		if (details.position === 'inside' && !treeView.expandedValue.includes(group)) {
			pendingExpandRef.current = { node: collection.getNodeValue(details.node), group };
			// The moved row sits in still-collapsed content (0×0 at the origin) when dnd-kit measures the settle target
			store.update({ skipDropAnimation: true });
		}

		onCollectionChange(collection.move([move.fromIndexPath], move.toIndexPath), details);
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
	const lastRoot = collection.getNodeChildren(collection.rootNode).at(-1);
	// An expanded group has no "after" zone, so only then is extra space needed to drop after the last row
	const isLastRootExpandedGroup = Boolean(
		lastRoot && isDsTreeGroup(lastRoot) && treeView.expandedValue.includes(collection.getNodeValue(lastRoot)),
	);

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
					reserveSpace={isLastRootExpandedGroup}
				/>
				{/* Portaled so a transformed ancestor (drawer, dialog) can't offset the fixed-position overlay */}
				<Portal>
					<div className={styles.dragLayer}>
						<DragOverlay dropAnimation={prefersReducedMotion || skipDropAnimation ? null : DROP_ANIMATION}>
							{active && <DsTreeDragPreview active={active} rejected={Boolean(drop && !drop.allowed)} />}
						</DragOverlay>
					</div>
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
		drop?.allowed && !drop.block && drop.droppableId === value ? drop.position : undefined,
	);
	const isSource = useSortableSelector(({ active }) => active?.value === value);

	const dragContext: DsTreeRowDragContextValue = {
		setActivatorNodeRef: draggable.setActivatorNodeRef,
		listeners: draggable.listeners,
		disabled,
	};

	const rowProps = {
		ref: mergeRefs<HTMLDivElement>(ref, draggable.setNodeRef, setDroppableRef, (element) =>
			sortable?.registerRow(value, element),
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
	const isSource = useSortableSelector(({ active }) => active?.value === value);
	const blockPosition = useSortableSelector(({ drop }) =>
		drop?.allowed && drop.block && drop.droppableId === value ? drop.position : undefined,
	);

	return {
		'data-drop': blockPosition,
		'data-source': isSource ? '' : undefined,
	};
};

const DsTreeDragHandle = ({ ref, className, style, disabled = false }: DsTreeDragHandleProps) => {
	const drag = use(DsTreeRowDragContext);

	if (!drag) {
		return null;
	}

	const isDisabled = drag.disabled || disabled;

	// Drag has no keyboard flow, so the handle stays out of focus and out of each treeitem's accessible name
	return (
		<button
			ref={mergeRefs<HTMLButtonElement>(ref, drag.setActivatorNodeRef)}
			type="button"
			tabIndex={-1}
			aria-hidden="true"
			data-part="drag-handle"
			className={classNames(styles.dragHandle, className)}
			style={style}
			disabled={isDisabled}
			{...(isDisabled ? undefined : drag.listeners)}
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
