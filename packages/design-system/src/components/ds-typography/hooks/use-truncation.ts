import { type RefObject, useCallback, useLayoutEffect, useState } from 'react';
import type { TooltipAnchorRect } from '../../ds-tooltip';

const OVERFLOW_TOLERANCE_PX = 1;
const FALLBACK_LINE_HEIGHT_RATIO = 1.2;
const DEFAULT_FONT_SIZE_PX = 16;
const ELLIPSIS = '\u2026';

interface Truncation {
	isTruncated: boolean;
	getAnchorRect: () => TooltipAnchorRect | null;
}

const ellipsisWidthCache = new Map<string, number>();
let ellipsisMeasureSpan: HTMLSpanElement | null = null;

const measureEllipsisWidth = (computed: CSSStyleDeclaration): number => {
	const cacheKey = `${computed.fontStyle}|${computed.fontWeight}|${computed.fontSize}|${computed.fontFamily}|${computed.letterSpacing}`;
	const cached = ellipsisWidthCache.get(cacheKey);

	if (cached !== undefined) {
		return cached;
	}

	ellipsisMeasureSpan ??= document.createElement('span');
	const span = ellipsisMeasureSpan;

	span.textContent = ELLIPSIS;
	span.style.position = 'absolute';
	span.style.visibility = 'hidden';
	span.style.whiteSpace = 'pre';
	span.style.fontStyle = computed.fontStyle;
	span.style.fontWeight = computed.fontWeight;
	span.style.fontSize = computed.fontSize;
	span.style.fontFamily = computed.fontFamily;
	span.style.letterSpacing = computed.letterSpacing;

	document.body.appendChild(span);
	const width = span.getBoundingClientRect().width;
	span.remove();

	ellipsisWidthCache.set(cacheKey, width);
	return width;
};

let measureRange: Range | null = null;

const measureFittingPrefixRight = (textNode: Text, maxRight: number): number => {
	measureRange ??= document.createRange();
	const range = measureRange;

	let low = 0;
	let high = textNode.length;
	let fittingLength = 0;

	while (low <= high) {
		const mid = (low + high) >>> 1;
		range.setStart(textNode, 0);
		range.setEnd(textNode, mid);

		if (range.getBoundingClientRect().right <= maxRight) {
			fittingLength = mid;
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	range.setStart(textNode, 0);
	range.setEnd(textNode, fittingLength);
	return range.getBoundingClientRect().right;
};

const getFirstTextNode = (element: HTMLElement): Text | null =>
	element.firstChild instanceof Text ? element.firstChild : null;

export const useTruncation = (
	ref: RefObject<HTMLElement | null>,
	enabled: boolean,
	deps: readonly unknown[] = [],
): Truncation => {
	const [isTruncated, setIsTruncated] = useState(false);

	useLayoutEffect(() => {
		const element = ref.current;

		if (!enabled || !element) {
			setIsTruncated(false);
			return;
		}

		const measure = () => {
			const overflowsHorizontally = element.scrollWidth - element.clientWidth > OVERFLOW_TOLERANCE_PX;
			const overflowsVertically = element.scrollHeight - element.clientHeight > OVERFLOW_TOLERANCE_PX;

			setIsTruncated(overflowsHorizontally || overflowsVertically);
		};

		const rafId = requestAnimationFrame(measure);

		const resizeObserver = new ResizeObserver(() => requestAnimationFrame(measure));
		resizeObserver.observe(element);

		return () => {
			cancelAnimationFrame(rafId);
			resizeObserver.disconnect();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref, enabled, ...deps]);

	const getAnchorRect = useCallback((): TooltipAnchorRect | null => {
		const element = ref.current;

		if (!element) {
			return null;
		}

		const rect = element.getBoundingClientRect();
		const computed = getComputedStyle(element);

		const paddingRight = parseFloat(computed.paddingRight) || 0;
		const borderRight = parseFloat(computed.borderRightWidth) || 0;
		const paddingBottom = parseFloat(computed.paddingBottom) || 0;
		const borderBottom = parseFloat(computed.borderBottomWidth) || 0;

		const fontSize = parseFloat(computed.fontSize) || DEFAULT_FONT_SIZE_PX;
		const lineHeight = parseFloat(computed.lineHeight) || fontSize * FALLBACK_LINE_HEIGHT_RATIO;

		const contentRight = rect.right - paddingRight - borderRight;
		const ellipsisWidth = measureEllipsisWidth(computed);

		const textNode = getFirstTextNode(element);
		const isSingleLine = computed.whiteSpace === 'nowrap';

		const ellipsisCenterX =
			isSingleLine && textNode
				? measureFittingPrefixRight(textNode, contentRight - ellipsisWidth) + ellipsisWidth / 2
				: contentRight - ellipsisWidth / 2;

		const lastLineBottom = rect.bottom - paddingBottom - borderBottom;

		return {
			x: ellipsisCenterX,
			y: lastLineBottom - lineHeight,
			width: 0,
			height: lineHeight,
		};
	}, [ref]);

	return { isTruncated, getAnchorRect };
};
