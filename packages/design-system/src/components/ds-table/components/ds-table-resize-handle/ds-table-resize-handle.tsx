import { useEffect, useRef, type MouseEvent, type PointerEvent, type TouchEvent } from 'react';
import { useDsTableContext } from '../../context/ds-table-context';
import { defaultDsTableLocale } from '../../ds-table.types';
import type { DsTableResizeHandleProps } from './ds-table-resize-handle.types';
import styles from './ds-table-resize-handle.module.scss';

const clientPointFromEvent = (event: Event): { x: number; y: number } | null => {
	if (event instanceof MouseEvent) {
		return { x: event.clientX, y: event.clientY };
	}

	if (typeof TouchEvent !== 'undefined' && event instanceof TouchEvent) {
		const touch = event.changedTouches[0];
		return touch ? { x: touch.clientX, y: touch.clientY } : null;
	}

	return null;
};

/**
 * Pointer handle straddling the right edge of a resizable header cell.
 *
 * Drag is TanStack v8 `header.getResizeHandler()`. Hover drives the full-height
 * overlay; double-click restores snapshot origin widths for this header's leaves.
 */
export const DsTableResizeHandle = <TData, TValue>({ header }: DsTableResizeHandleProps<TData, TValue>) => {
	const { resizeContainerRef, onResizeHover, onResizeDragStart, onResizeReset, locale } = useDsTableContext<
		TData,
		TValue
	>();
	const handleRef = useRef<HTMLDivElement>(null);
	const isPointerOverRef = useRef(false);
	const detachDragEndRef = useRef<(() => void) | null>(null);

	useEffect(
		() => () => {
			detachDragEndRef.current?.();
		},
		[],
	);

	const label = { ...defaultDsTableLocale, ...locale }.resizeColumn;

	const measureCellRightOffset = (): number | null => {
		const containerEl = resizeContainerRef?.current;
		const cellEl = handleRef.current?.closest<HTMLElement>('th');
		if (!containerEl || !cellEl) {
			return null;
		}
		return cellEl.getBoundingClientRect().right - containerEl.getBoundingClientRect().left;
	};

	const reportHover = () => {
		const offset = measureCellRightOffset();
		if (offset === null) {
			return;
		}
		onResizeHover?.(header.column.id, offset);
	};

	const clearHover = () => {
		isPointerOverRef.current = false;
		onResizeHover?.(null, null);
	};

	const syncHoverAtPoint = (clientX: number, clientY: number) => {
		const handleEl = handleRef.current;
		const doc = handleEl?.ownerDocument ?? document;
		const hit = doc.elementFromPoint(clientX, clientY);
		if (handleEl && hit && (hit === handleEl || handleEl.contains(hit))) {
			isPointerOverRef.current = true;
			reportHover();
			return;
		}

		clearHover();
	};

	const attachDragEndListeners = () => {
		detachDragEndRef.current?.();

		const doc = handleRef.current?.ownerDocument ?? document;
		const onDragEnd = (event: Event) => {
			detachDragEndRef.current?.();
			detachDragEndRef.current = null;

			const point = clientPointFromEvent(event);
			clearHover();

			const frame = handleRef.current?.ownerDocument.defaultView ?? window;
			frame.requestAnimationFrame(() => {
				if (!point) {
					return;
				}

				syncHoverAtPoint(point.x, point.y);
			});
		};

		doc.addEventListener('mouseup', onDragEnd);
		doc.addEventListener('touchend', onDragEnd);
		detachDragEndRef.current = () => {
			doc.removeEventListener('mouseup', onDragEnd);
			doc.removeEventListener('touchend', onDragEnd);
		};
	};

	const handlePointerEnter = () => {
		isPointerOverRef.current = true;
		reportHover();
	};

	const handlePointerLeave = () => {
		clearHover();
	};

	const startDrag = () => {
		const offset = measureCellRightOffset();
		if (offset !== null) {
			onResizeDragStart?.(offset);
		}
	};

	const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
		if (event.pointerType === 'touch') {
			return;
		}

		event.stopPropagation();
		startDrag();
		header.getResizeHandler(handleRef.current?.ownerDocument ?? document)(event);
		attachDragEndListeners();
	};

	const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
		event.stopPropagation();
		startDrag();
		header.getResizeHandler(handleRef.current?.ownerDocument ?? document)(event);
		attachDragEndListeners();
	};

	const handleReset = (event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		const leafIds = header.column.getLeafColumns().map((column) => column.id);
		onResizeReset?.(leafIds);
		if (isPointerOverRef.current) {
			reportHover();
		} else {
			clearHover();
		}
	};

	return (
		// Pointer-only by design: not in the tab order, no keyboard resize.
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- resize handle is pointer-only
		<div
			ref={handleRef}
			role="separator"
			aria-orientation="vertical"
			aria-label={label}
			className={styles.resizeHandle}
			onPointerDown={handlePointerDown}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
			onTouchStart={handleTouchStart}
			onClick={(event) => event.stopPropagation()}
			onDoubleClick={handleReset}
		/>
	);
};
