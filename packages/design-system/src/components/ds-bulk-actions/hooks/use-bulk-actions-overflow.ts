import { type CSSProperties, type RefObject, useLayoutEffect, useState } from 'react';
import { computeBulkActionsOverflow, type BulkActionsOverflowState } from './compute-bulk-actions-overflow';

const allVisible = (itemCount: number): BulkActionsOverflowState => ({
	visibleCount: itemCount,
	showMore: false,
	summaryLabelHidden: false,
});

const sameOverflowState = (prev: BulkActionsOverflowState, next: BulkActionsOverflowState): boolean =>
	prev.visibleCount === next.visibleCount &&
	prev.showMore === next.showMore &&
	prev.summaryLabelHidden === next.summaryLabelHidden;

const isConstrainedCssLength = (value: CSSProperties['width']): boolean => {
	if (value === undefined) {
		return false;
	}

	return (
		value !== 'auto' &&
		value !== 'fit-content' &&
		value !== 'max-content' &&
		value !== 'min-content' &&
		value !== 'none'
	);
};

// A bare `width` set via className cannot be detected here: the default
// `width: fit-content` also resolves to a pixel value, so computed `width` is
// ambiguous. Consumers must bound the toolbar via `style.width`, `style.maxWidth`,
// or a CSS `max-width` (detected below) to enable overflow.
const hasExplicitWidthConstraint = (element: HTMLElement, style?: CSSProperties): boolean => {
	if (isConstrainedCssLength(style?.width) || isConstrainedCssLength(style?.maxWidth)) {
		return true;
	}

	return getComputedStyle(element).maxWidth !== 'none';
};

interface UseBulkActionsOverflowOptions {
	active: boolean;
	itemCount: number;
	style?: CSSProperties;
	containerRef: RefObject<HTMLElement | null>;
	stackRef: RefObject<HTMLElement | null>;
	badgeRef: RefObject<HTMLElement | null>;
	dismissRef: RefObject<HTMLElement | null>;
	measureRef: RefObject<HTMLElement | null>;
}

export const useBulkActionsOverflow = ({
	active,
	itemCount,
	style,
	containerRef,
	stackRef,
	badgeRef,
	dismissRef,
	measureRef,
}: UseBulkActionsOverflowOptions): BulkActionsOverflowState => {
	const [state, setState] = useState<BulkActionsOverflowState>(() => allVisible(itemCount));
	const styleWidth = style?.width;
	const styleMaxWidth = style?.maxWidth;

	useLayoutEffect(() => {
		if (!active) {
			return;
		}

		const container = containerRef.current;

		if (!container) {
			return;
		}

		const constraintStyle = { width: styleWidth, maxWidth: styleMaxWidth };
		let observerRafId = 0;

		const measureLayout = () => {
			if (!hasExplicitWidthConstraint(container, constraintStyle) || itemCount === 0) {
				setState((prev) => {
					const next = allVisible(itemCount);
					return sameOverflowState(prev, next) ? prev : next;
				});
				return;
			}

			const stack = stackRef.current;
			const badge = badgeRef.current;
			const dismiss = dismissRef.current;
			const measure = measureRef.current;

			if (!stack || !badge || !dismiss || !measure) {
				return;
			}

			const itemWidths = Array.from(
				measure.querySelectorAll<HTMLElement>('[data-overflow-measure="item"]'),
			).map((el) => el.getBoundingClientRect().width);
			const moreEl = measure.querySelector<HTMLElement>('[data-overflow-measure="more"]');
			const labelEl = measure.querySelector<HTMLElement>('[data-overflow-measure="label"]');

			if (!moreEl || !labelEl || itemWidths.length !== itemCount) {
				return;
			}

			const gap = parseFloat(getComputedStyle(stack).columnGap || getComputedStyle(stack).gap) || 0;

			const next = computeBulkActionsOverflow({
				containerWidth: container.getBoundingClientRect().width,
				badgeWidth: badge.getBoundingClientRect().width,
				dismissWidth: dismiss.getBoundingClientRect().width,
				labelWidth: labelEl.getBoundingClientRect().width,
				itemWidths,
				moreWidth: moreEl.getBoundingClientRect().width,
				gap,
			});

			setState((prev) => (sameOverflowState(prev, next) ? prev : next));
		};

		measureLayout();

		const observer = new ResizeObserver(() => {
			cancelAnimationFrame(observerRafId);
			observerRafId = requestAnimationFrame(measureLayout);
		});

		observer.observe(container);

		if (measureRef.current) {
			observer.observe(measureRef.current);
		}

		return () => {
			cancelAnimationFrame(observerRafId);
			observer.disconnect();
		};
	}, [
		active,
		badgeRef,
		containerRef,
		dismissRef,
		itemCount,
		measureRef,
		stackRef,
		styleMaxWidth,
		styleWidth,
	]);

	return state;
};
