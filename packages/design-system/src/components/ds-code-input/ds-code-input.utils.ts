export type TextSelectionDirection = 'forward' | 'backward' | 'none';

export interface TextSelection {
	start: number;
	end: number;
	direction: TextSelectionDirection;
}

const CANVAS_TAB_SIZE_FALLBACK = 2;

let measureContext: CanvasRenderingContext2D | null | undefined;

export const canonicalizeLf = (text: string) => text.replace(/\r\n?/g, '\n');

const getLogicalLines = (text: string) => canonicalizeLf(text).split('\n');

export const getLogicalLineCount = (text: string) => getLogicalLines(text).length;

export const getAdditionalLineCount = (text: string) => Math.max(0, getLogicalLineCount(text) - 1);

export const getLineAtIndex = (text: string, lineIndex: number) => getLogicalLines(text)[lineIndex] ?? '';

export const getLineIndexAtOffset = (text: string, offset: number) => {
	const lf = canonicalizeLf(text);
	const clamped = Math.min(Math.max(offset, 0), lf.length);

	return lf.slice(0, clamped).split('\n').length - 1;
};

export const getSelectedLineCount = (text: string, start: number, end: number) => {
	if (start === end) {
		return 0;
	}

	const from = Math.min(start, end);
	const to = Math.max(start, end);

	return getLineIndexAtOffset(text, to) - getLineIndexAtOffset(text, from) + 1;
};

export const readTextSelection = (element: HTMLTextAreaElement): TextSelection => ({
	start: element.selectionStart,
	end: element.selectionEnd,
	direction: element.selectionDirection,
});

export const applyTextSelection = (element: HTMLTextAreaElement, selection: TextSelection) => {
	const length = element.value.length;
	const start = Math.min(selection.start, length);
	const end = Math.min(selection.end, length);

	element.setSelectionRange(start, end, selection.direction);
};

const getLineHeight = (element: HTMLTextAreaElement) => {
	const parsed = Number.parseFloat(getComputedStyle(element).lineHeight);

	if (Number.isFinite(parsed)) {
		return parsed;
	}

	return Number.parseFloat(getComputedStyle(element).fontSize);
};

export const scrollToLogicalLine = (element: HTMLTextAreaElement, lineIndex: number) => {
	element.scrollTop = Math.max(0, lineIndex) * getLineHeight(element);
};

export const getVisibleLineIndex = (element: HTMLTextAreaElement) => {
	const lineHeight = getLineHeight(element);

	if (lineHeight <= 0) {
		return 0;
	}

	return Math.round(element.scrollTop / lineHeight);
};

export const measureTextWidth = (element: HTMLElement, text: string) => {
	if (measureContext === undefined) {
		measureContext = document.createElement('canvas').getContext('2d');
	}

	if (!measureContext) {
		return 0;
	}

	const computed = getComputedStyle(element);
	const tabSize = Number.parseInt(computed.tabSize, 10) || CANVAS_TAB_SIZE_FALLBACK;

	measureContext.font = `${computed.fontWeight} ${computed.fontSize} ${computed.fontFamily}`;

	return measureContext.measureText(text.replaceAll('\t', ' '.repeat(tabSize))).width;
};
