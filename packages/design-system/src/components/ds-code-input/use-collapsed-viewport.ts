import { type RefObject, useEffect, useRef, useState } from 'react';
import {
	getAdditionalLineCount,
	getLineAtIndex,
	getLineIndexAtOffset,
	getLogicalLineCount,
	getSelectedLineCount,
	getVisibleLineIndex,
	measureTextWidth,
	scrollToLogicalLine,
} from './query-document';

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

const readViewport = (textarea: HTMLTextAreaElement) => {
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

export const useCollapsedViewport = (
	textareaRef: RefObject<HTMLTextAreaElement | null>,
	value: string,
	ready: boolean,
	collapsed: boolean,
): CollapsedViewport => {
	const [focused, setFocused] = useState(false);
	const [visibleLine, setVisibleLine] = useState(1);
	const [caretLine, setCaretLine] = useState(1);
	const [totalLines, setTotalLines] = useState(1);
	const [selectedLines, setSelectedLines] = useState(0);
	const [fadeStart, setFadeStart] = useState(false);
	const [fadeEnd, setFadeEnd] = useState(false);
	const [clipped, setClipped] = useState(false);

	const revealCaretLine = () => {
		const textarea = textareaRef.current;

		if (!textarea) {
			return;
		}

		const lineIndex = getLineIndexAtOffset(textarea.value, textarea.selectionStart);

		scrollToLogicalLine(textarea, lineIndex);
		textarea.scrollLeft = Math.max(0, textarea.scrollLeft - CARET_INLINE_PADDING_PX);
		setVisibleLine(lineIndex + 1);
		setCaretLine(lineIndex + 1);
	};

	const revealCaretLineRef = useRef(revealCaretLine);

	revealCaretLineRef.current = revealCaretLine;

	useEffect(() => {
		const textarea = textareaRef.current;

		if (!textarea || !ready) {
			setFocused(false);

			return;
		}

		const sync = () => {
			const next = readViewport(textarea);

			setTotalLines(next.totalLines);
			setCaretLine(next.caretLine);
			setVisibleLine(next.visibleLine);
			setSelectedLines(next.selectedLines);
			setClipped(next.clipped);
			setFadeStart(next.fadeStart);
			setFadeEnd(next.fadeEnd);
		};

		const handleFocus = () => {
			setFocused(true);
			revealCaretLineRef.current();
			sync();
		};

		const handleBlur = () => {
			setFocused(false);
			scrollToLogicalLine(textarea, 0);
			textarea.scrollLeft = 0;
			sync();
		};

		const handleWheel = (event: WheelEvent) => {
			if (document.activeElement !== textarea || event.deltaY === 0) {
				return;
			}

			const snapshot = readViewport(textarea);
			const direction = event.deltaY > 0 ? 1 : -1;
			const nextLine = snapshot.visibleLine + direction;

			if (nextLine < 1 || nextLine > snapshot.totalLines) {
				return;
			}

			event.preventDefault();
			scrollToLogicalLine(textarea, nextLine - 1);
			setVisibleLine(nextLine);
			sync();
		};

		const handleBeforeInput = () => {
			const snapshot = readViewport(textarea);

			if (snapshot.caretLine !== snapshot.visibleLine) {
				revealCaretLineRef.current();
			}
		};

		textarea.addEventListener('select', sync);
		textarea.addEventListener('keyup', sync);
		textarea.addEventListener('click', sync);

		if (collapsed) {
			textarea.addEventListener('scroll', sync);
			textarea.addEventListener('focus', handleFocus);
			textarea.addEventListener('blur', handleBlur);
			textarea.addEventListener('wheel', handleWheel, { passive: false });
			textarea.addEventListener('beforeinput', handleBeforeInput);
			setFocused(document.activeElement === textarea);
		} else {
			setFocused(false);
		}

		const observer = new ResizeObserver(sync);

		observer.observe(textarea);
		sync();

		return () => {
			textarea.removeEventListener('select', sync);
			textarea.removeEventListener('keyup', sync);
			textarea.removeEventListener('click', sync);
			textarea.removeEventListener('scroll', sync);
			textarea.removeEventListener('focus', handleFocus);
			textarea.removeEventListener('blur', handleBlur);
			textarea.removeEventListener('wheel', handleWheel);
			textarea.removeEventListener('beforeinput', handleBeforeInput);
			observer.disconnect();
		};
	}, [ready, collapsed, value, textareaRef]);

	const additional = getAdditionalLineCount(value);
	const echoText = getLineAtIndex(value, caretLine - 1);

	let indicator: CollapsedIndicator | null = null;

	if (selectedLines > 1) {
		indicator = { kind: 'selection', selected: selectedLines, total: totalLines };
	} else if (focused && additional > 0) {
		indicator = { kind: 'line', current: visibleLine, total: totalLines };
	} else if (!focused && additional > 0) {
		indicator = { kind: 'plusN', count: additional };
	}

	return {
		focused,
		visibleLine,
		caretLine,
		totalLines: Math.max(totalLines, getLogicalLineCount(value)),
		indicator,
		fadeStart: focused && fadeStart,
		fadeEnd: focused && fadeEnd,
		showEllipsis: (!focused || !collapsed || !ready) && clipped,
		echoText,
		revealCaretLine,
	};
};
