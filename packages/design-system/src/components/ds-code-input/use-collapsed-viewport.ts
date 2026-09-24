import { type Dispatch, type RefObject, type SetStateAction, useEffect, useState } from 'react';
import {
	getAdditionalLineCount,
	getLineAtIndex,
	getLineIndexAtOffset,
	getLogicalLineCount,
	getSelectedLineCount,
	getVisibleLineIndex,
	measureTextWidth,
	scrollToLogicalLine,
} from './ds-code-input.utils';

const CARET_INLINE_PADDING_PX = 16;

export type CollapsedIndicator =
	| { kind: 'plusN'; count: number }
	| { kind: 'line'; current: number; total: number }
	| { kind: 'selection'; selected: number; total: number };

export interface CollapsedViewport {
	focused: boolean;
	visibleLine: number;
	caretLine: number;
	totalLines: number;
	indicator: CollapsedIndicator | null;
	fadeStart: boolean;
	fadeEnd: boolean;
	showEllipsis: boolean;
	echoText: string;
	revealCaretLine: () => void;
}

export interface CollapsedViewportHandlers {
	onSelect: () => void;
	onKeyUp: () => void;
	onClick: () => void;
	onScroll: () => void;
	onFocus: () => void;
	onBlur: () => void;
	onBeforeInput: () => void;
}

interface ViewportSnapshot {
	totalLines: number;
	caretLine: number;
	visibleLine: number;
	selectedLines: number;
	clipped: boolean;
	fadeStart: boolean;
	fadeEnd: boolean;
}

const initialSnapshot: ViewportSnapshot = {
	totalLines: 1,
	caretLine: 1,
	visibleLine: 1,
	selectedLines: 0,
	clipped: false,
	fadeStart: false,
	fadeEnd: false,
};

const snapshotsEqual = (left: ViewportSnapshot, right: ViewportSnapshot) =>
	left.totalLines === right.totalLines &&
	left.caretLine === right.caretLine &&
	left.visibleLine === right.visibleLine &&
	left.selectedLines === right.selectedLines &&
	left.clipped === right.clipped &&
	left.fadeStart === right.fadeStart &&
	left.fadeEnd === right.fadeEnd;

const readViewport = (textarea: HTMLTextAreaElement): ViewportSnapshot => {
	const value = textarea.value;
	const totalLines = getLogicalLineCount(value);
	const caretLine = getLineIndexAtOffset(value, textarea.selectionStart) + 1;
	const visibleLine = Math.min(getVisibleLineIndex(textarea) + 1, totalLines);
	const selectedLines = getSelectedLineCount(value, textarea.selectionStart, textarea.selectionEnd);
	const visibleText = getLineAtIndex(value, visibleLine - 1);
	const clipped = measureTextWidth(textarea, visibleText) > textarea.clientWidth;
	const fadeStart = textarea.scrollLeft > 0;
	const fadeEnd = textarea.scrollLeft + textarea.clientWidth < textarea.scrollWidth - 1;

	return {
		totalLines,
		caretLine,
		visibleLine,
		selectedLines,
		clipped,
		fadeStart,
		fadeEnd,
	};
};

const commitViewport = (
	textarea: HTMLTextAreaElement,
	setSnapshot: Dispatch<SetStateAction<ViewportSnapshot>>,
) => {
	const next = readViewport(textarea);

	setSnapshot((current) => (snapshotsEqual(current, next) ? current : next));
};

/**
 * The collapsed field shows one logical line. This hook tracks which line is
 * visible, where the caret is, overflow fades, and the +N / Ln x/y / selection chip.
 */
export const useCollapsedViewport = (
	textareaRef: RefObject<HTMLTextAreaElement | null>,
	value: string,
	ready: boolean,
	collapsed: boolean,
): CollapsedViewport & CollapsedViewportHandlers => {
	const [focused, setFocused] = useState(false);
	const [snapshot, setSnapshot] = useState(initialSnapshot);

	const sync = () => {
		const textarea = textareaRef.current;

		if (textarea) {
			commitViewport(textarea, setSnapshot);
		}
	};

	// Scroll so the caret line is the one visible row (used after collapse).
	const revealCaretLine = () => {
		const textarea = textareaRef.current;

		if (!textarea) {
			return;
		}

		const lineIndex = getLineIndexAtOffset(textarea.value, textarea.selectionStart);

		scrollToLogicalLine(textarea, lineIndex);
		textarea.scrollLeft = Math.max(0, textarea.scrollLeft - CARET_INLINE_PADDING_PX);
		setSnapshot((current) => ({
			...current,
			visibleLine: lineIndex + 1,
			caretLine: lineIndex + 1,
		}));
	};

	const onSelect = sync;
	const onKeyUp = sync;
	const onClick = sync;

	const onScroll = () => {
		if (collapsed) {
			sync();
		}
	};

	const onFocus = () => {
		if (!collapsed) {
			return;
		}

		setFocused(true);
		revealCaretLine();
		sync();
	};

	const onBlur = () => {
		if (!collapsed) {
			return;
		}

		const textarea = textareaRef.current;

		setFocused(false);

		if (textarea) {
			// Idle field always shows the start of the document.
			scrollToLogicalLine(textarea, 0);
			textarea.scrollLeft = 0;
		}

		sync();
	};

	const onBeforeInput = () => {
		if (!collapsed) {
			return;
		}

		const textarea = textareaRef.current;

		if (!textarea) {
			return;
		}

		const next = readViewport(textarea);

		// Typing while looking at another line: jump to the caret line first.
		if (next.caretLine !== next.visibleLine) {
			revealCaretLine();
		}
	};

	useEffect(() => {
		const textarea = textareaRef.current;

		if (!textarea || !ready) {
			setFocused(false);

			return;
		}

		const syncFromDom = () => commitViewport(textarea, setSnapshot);

		// React's onSelect is backed by selectionchange, so programmatic
		// `select` events (tests, setSelectionRange) still need a native listener.
		textarea.addEventListener('select', syncFromDom);

		// Line-by-line, not native pixel scroll — a one-row textarea would
		// otherwise feel broken. React's onWheel is passive, so this stays native.
		const handleWheel = (event: WheelEvent) => {
			if (document.activeElement !== textarea || event.deltaY === 0) {
				return;
			}

			const next = readViewport(textarea);
			const direction = event.deltaY > 0 ? 1 : -1;
			const nextLine = next.visibleLine + direction;

			if (nextLine < 1 || nextLine > next.totalLines) {
				return;
			}

			event.preventDefault();
			scrollToLogicalLine(textarea, nextLine - 1);
			syncFromDom();
		};

		let observer: ResizeObserver | undefined;

		if (collapsed) {
			textarea.addEventListener('wheel', handleWheel, { passive: false });
			setFocused(document.activeElement === textarea);
			observer = new ResizeObserver(syncFromDom);
			observer.observe(textarea);
		} else {
			setFocused(false);
		}

		syncFromDom();

		return () => {
			textarea.removeEventListener('select', syncFromDom);
			textarea.removeEventListener('wheel', handleWheel);
			observer?.disconnect();
		};
	}, [ready, collapsed, value, textareaRef]);

	const additional = getAdditionalLineCount(value);
	// Caret line, painted as a static stand-in while the real textarea lives in the overlay.
	const echoText = getLineAtIndex(value, snapshot.caretLine - 1);

	// Selection spanning lines > focused line position > idle +N.
	let indicator: CollapsedIndicator | null = null;

	if (snapshot.selectedLines > 1) {
		indicator = { kind: 'selection', selected: snapshot.selectedLines, total: snapshot.totalLines };
	} else if (focused && additional > 0) {
		indicator = { kind: 'line', current: snapshot.visibleLine, total: snapshot.totalLines };
	} else if (!focused && additional > 0) {
		indicator = { kind: 'plusN', count: additional };
	}

	return {
		focused,
		visibleLine: snapshot.visibleLine,
		caretLine: snapshot.caretLine,
		totalLines: Math.max(snapshot.totalLines, getLogicalLineCount(value)),
		indicator,
		fadeStart: focused && snapshot.fadeStart,
		fadeEnd: focused && snapshot.fadeEnd,
		showEllipsis: (!focused || !collapsed || !ready) && snapshot.clipped,
		echoText,
		revealCaretLine,
		onSelect,
		onKeyUp,
		onClick,
		onScroll,
		onFocus,
		onBlur,
		onBeforeInput,
	};
};
