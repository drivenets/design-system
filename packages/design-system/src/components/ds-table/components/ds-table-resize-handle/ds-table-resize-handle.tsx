import {
	useEffect,
	useRef,
	type KeyboardEvent,
	type MouseEvent,
	type PointerEvent,
	type TouchEvent,
} from 'react';
import { useDsTableContext } from '../../context/ds-table-context';
import { defaultDsTableLocale } from '../../ds-table.types';
import {
	RESIZE_KEYBOARD_STEP,
	RESIZE_KEYBOARD_STEP_LARGE,
	RESIZE_MIN_COLUMN_WIDTH,
} from '../../utils/constants';
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
 * Handle straddling the right edge of a resizable header cell.
 *
 * Drag is TanStack v8 `header.getResizeHandler()`. Hover drives the full-height
 * overlay; double-click restores snapshot origin widths for this header's
 * leaves. As a focusable `separator`, Arrow keys nudge the width (Shift for a
 * larger step) for keyboard operability (WCAG 2.1.1).
 */
export const DsTableResizeHandle = <TData, TValue>({ header }: DsTableResizeHandleProps<TData, TValue>) => {
	const {
		resizeContainerRef,
		onResizeHover,
		onResizeDragStart,
		onResizeReset,
		onResizeKeyboardNudge,
		locale,
	} = useDsTableContext<TData, TValue>();
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
		// The overlay is absolutely positioned inside the horizontally scrollable
		// container, so its offset must be in the container's scrolled content
		// space — add `scrollLeft` to the viewport-relative distance.
		return (
			cellEl.getBoundingClientRect().right - containerEl.getBoundingClientRect().left + containerEl.scrollLeft
		);
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

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
			return;
		}

		event.preventDefault();
		event.stopPropagation();
		const step = event.shiftKey ? RESIZE_KEYBOARD_STEP_LARGE : RESIZE_KEYBOARD_STEP;
		const delta = event.key === 'ArrowRight' ? step : -step;
		onResizeKeyboardNudge?.(header.column.id, delta);
	};

	// Only leaves expose a meaningful min; a group boundary's min/max would be
	// misleading, so announce the current size but omit bounds for groups.
	const isLeaf = header.subHeaders.length === 0;

	// A focusable role="separator" with aria-valuenow/valuemin and arrow-key
	// handling is the WAI-ARIA window-splitter pattern, which is interactive.
	// jsx-a11y's role taxonomy does not model focusable separators, so its
	// non-interactive rules misfire on this element.
	/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex */
	return (
		<div
			ref={handleRef}
			role="separator"
			aria-orientation="vertical"
			aria-label={label}
			tabIndex={0}
			aria-valuenow={Math.round(header.getSize())}
			aria-valuemin={isLeaf ? (header.column.columnDef.minSize ?? RESIZE_MIN_COLUMN_WIDTH) : undefined}
			className={styles.resizeHandle}
			onPointerDown={handlePointerDown}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
			onTouchStart={handleTouchStart}
			onClick={(event) => event.stopPropagation()}
			onDoubleClick={handleReset}
			onKeyDown={handleKeyDown}
		/>
	);
	/* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-tabindex */
};
