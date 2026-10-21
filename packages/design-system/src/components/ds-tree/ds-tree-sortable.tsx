import {
	createContext,
	use,
	useEffect,
	useEffectEvent,
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
const DROP_ANIMATION: DropAnimation = { duration: 200, easing: 'cubic-bezier(0.32, 0.72, 0, 1)' };
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const NODE_CHECKBOX_SELECTOR = '[data-scope="tree-view"][data-part="node-checkbox"]';

// Drag is pointer-only for now; dnd-kit's default announcements would read raw node ids in English
const SILENT_ANNOUNCEMENTS: Announcements = {
	onDragStart: () => undefined,
	onDragOver: () => undefined,
	onDragEnd: () => undefined,
	onDragCancel: () => undefined,
};

interface ActiveDrag {
	value: string;
	indexPath: number[];
	hasCheckbox: boolean;
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

interface DsTreeSortableContextValue {
	activeValue: string | null;
	drop: DropIndicator | null;
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

const isSameDrop = (a: DropIndicator | null, b: DropIndicator | null) =>
	a?.droppableId === b?.droppableId && a?.position === b?.position && a?.allowed === b?.allowed;

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

const DsTreeDragPreview = ({ active, rejected }: { active: ActiveDrag; rejected: boolean }) => {
	const treeView = useDsTreeViewContext();
	const node = treeView.collection.at(active.indexPath);

	if (!node) {
		return null;
	}

	const { checked } = treeView.getNodeState({ node, indexPath: active.indexPath });
	const checkboxState = checked === true ? 'checked' : checked === false ? 'unchecked' : 'indeterminate';

	return (
		<div className={styles.dragPreview} data-rejected={rejected ? '' : undefined}>
			<span className={styles.dragHandle} aria-hidden="true">
				<DsIcon icon="drag_indicator" size="tiny" />
			</span>

			{active.hasCheckbox && (
				<span className={styles.nodeCheckbox} data-state={checkboxState} aria-hidden="true">
					<span className={styles.nodeCheckboxBox}>
						{checkboxState === 'checked' && <DsIcon icon="check_small" size="tiny" variant="outlined" />}
						{checkboxState === 'indeterminate' && (
							<DsIcon icon="check_indeterminate_small" size="tiny" variant="outlined" />
						)}
					</span>
				</span>
			)}

			<span className={styles.itemText}>{node.name}</span>
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

	const [active, setActive] = useState<ActiveDrag | null>(null);
	const [drop, setDrop] = useState<DropState<T> | null>(null);

	const rowsRef = useRef(new Map<string, HTMLElement>());
	const pointerYRef = useRef(0);
	const stopTrackingRef = useRef<(() => void) | null>(null);

	const sensors = useSensors(
		useSensor(PointerSensor, { activationConstraint: { distance: ACTIVATION_DISTANCE } }),
	);

	const registerRow = (value: string, element: HTMLElement | null) => {
		if (element) {
			rowsRef.current.set(value, element);
		} else {
			rowsRef.current.delete(value);
		}
	};

	// dnd-kit reports `over` a render late; `undefined` means the pointer already left that droppable
	const resolveDrop = (
		dragged: ActiveDrag,
		overId: UniqueIdentifier | undefined,
	): DropState<T> | null | undefined => {
		if (overId === undefined) {
			return null;
		}

		const value = String(overId);
		const element = rowsRef.current.get(value);

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

		const move = targetPath && getDsTreeMove(collection, dragged.indexPath, targetPath, position);

		if (!move || move.status === 'noop') {
			return null;
		}

		const allowed = move.status === 'allowed' && (canDrop?.(move.details) ?? true);
		const { toParent } = move.details;

		return {
			droppableId: overId,
			position,
			containerValue: toParent ? collection.getNodeValue(toParent) : null,
			allowed,
			move,
		};
	};

	const stopTracking = () => {
		stopTrackingRef.current?.();
		stopTrackingRef.current = null;
	};

	const reset = () => {
		stopTracking();
		setActive(null);
		setDrop(null);
	};

	const handleDragStart = ({ active: dragged, activatorEvent }: DragStartEvent) => {
		const value = String(dragged.id);
		const indexPath = collection.getIndexPath(value);

		if (!indexPath) {
			return;
		}

		pointerYRef.current = getClientY(activatorEvent);

		const onPointerMove = (event: PointerEvent) => {
			pointerYRef.current = event.clientY;
		};

		window.addEventListener('pointermove', onPointerMove, { capture: true, passive: true });
		stopTrackingRef.current = () =>
			window.removeEventListener('pointermove', onPointerMove, { capture: true });

		setActive({
			value,
			indexPath,
			hasCheckbox: Boolean(rowsRef.current.get(value)?.querySelector(NODE_CHECKBOX_SELECTOR)),
		});
	};

	const handleDragMove = ({ over }: DragMoveEvent) => {
		if (!active) {
			return;
		}

		const next = resolveDrop(active, over?.id);

		if (next !== undefined) {
			setDrop((prev) => (isSameDrop(prev, next) ? prev : next));
		}
	};

	const handleDragEnd = ({ over }: DragEndEvent) => {
		const resolved = active ? resolveDrop(active, over?.id) : null;
		// Released before `over` caught up with the pointer: drop on the slot the indicator shows
		const result = resolved === undefined ? drop : resolved;
		reset();

		if (!active || !result?.allowed) {
			return;
		}

		const { move } = result;
		const { details } = move;

		if (
			details.position === 'inside' &&
			!treeView.expandedValue.includes(collection.getNodeValue(details.target))
		) {
			treeView.expand([collection.getNodeValue(details.target)]);
		}

		onCollectionChange(collection.move([active.indexPath], move.toIndexPath), details);
	};

	const autoExpandValue =
		drop?.allowed &&
		drop.position === 'inside' &&
		drop.containerValue &&
		!treeView.expandedValue.includes(drop.containerValue)
			? drop.containerValue
			: null;

	const expandBranch = useEffectEvent((value: string) => treeView.expand([value]));

	useEffect(() => {
		if (!autoExpandValue) {
			return;
		}

		const timeout = window.setTimeout(() => expandBranch(autoExpandValue), AUTO_EXPAND_DELAY);

		return () => window.clearTimeout(timeout);
	}, [autoExpandValue]);

	useEffect(() => () => stopTrackingRef.current?.(), []);

	const contextValue: DsTreeSortableContextValue = { activeValue: active?.value ?? null, drop, registerRow };

	return (
		<DsTreeSortableContext value={contextValue}>
			<DndContext
				sensors={sensors}
				collisionDetection={pointerWithin}
				measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
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
					registerRow={registerRow}
					isTarget={Boolean(drop?.allowed && drop.droppableId === rootEndId)}
				/>
				<DragOverlay dropAnimation={prefersReducedMotion ? null : DROP_ANIMATION}>
					{active && <DsTreeDragPreview active={active} rejected={Boolean(drop && !drop.allowed)} />}
				</DragOverlay>
			</DndContext>
		</DsTreeSortableContext>
	);
};

const useDsTreeSortableRow = (ref: Ref<HTMLDivElement> | undefined) => {
	const sortable = use(DsTreeSortableContext);
	const { value, disabled } = useTreeViewNodeContext();

	const draggable = useDraggable({ id: value, disabled });
	const { setNodeRef: setDroppableRef } = useDroppable({ id: value });

	if (!sortable) {
		throw new Error('DsTree sortable rows must render inside DsTree.Sortable');
	}

	const { drop, registerRow, activeValue } = sortable;
	const isTarget = Boolean(drop?.allowed && drop.droppableId === value);

	const dragContext: DsTreeRowDragContextValue = {
		setActivatorNodeRef: draggable.setActivatorNodeRef,
		listeners: draggable.listeners,
		disabled,
	};

	const rowProps = {
		ref: mergeRefs<HTMLDivElement>(ref, draggable.setNodeRef, setDroppableRef, (element) =>
			registerRow(value, element),
		),
		'data-drop': isTarget ? drop?.position : undefined,
		'data-source': activeValue === value ? '' : undefined,
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
	const sortable = use(DsTreeSortableContext);
	const { value } = useTreeViewNodeContext();

	if (!sortable) {
		return {};
	}

	const { drop, activeValue } = sortable;

	return {
		'data-drop-container': drop?.allowed && drop.containerValue === value ? '' : undefined,
		'data-source': activeValue === value ? '' : undefined,
	};
};

const DsTreeDragHandle = ({ className, style }: DsTreeDragHandleProps) => {
	const drag = use(DsTreeRowDragContext);

	if (!drag) {
		return null;
	}

	// Pointer-only for now: a labelled handle would add "drag" to every treeitem's accessible name
	return (
		<button
			ref={drag.setActivatorNodeRef}
			type="button"
			tabIndex={-1}
			aria-hidden="true"
			className={classNames(styles.dragHandle, className)}
			style={style}
			disabled={drag.disabled}
			{...drag.listeners}
			onClick={(event: MouseEvent<HTMLButtonElement>) => event.stopPropagation()}
		>
			<DsIcon icon="drag_indicator" size="tiny" />
		</button>
	);
};

DsTreeSortable.displayName = 'DsTree.Sortable';
DsTreeDragHandle.displayName = 'DsTree.DragHandle';

export { DsTreeSortable, DsTreeDragHandle };
