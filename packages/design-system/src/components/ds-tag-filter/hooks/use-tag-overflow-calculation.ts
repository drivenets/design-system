import { type RefObject, useLayoutEffect, useState, useCallback } from 'react';

interface UseTagOverflowCalculationProps {
	containerRef: RefObject<HTMLDivElement | null>;
	measurementRef: RefObject<HTMLDivElement | null>;
	totalItems: number;
	expanded: boolean;
}

interface UseTagOverflowCalculationResult {
	row1TagCount: number;
	row2TagCount: number;
	hasOverflow: boolean;
	isCalculating: boolean;
}

// Extra space needed per row for animated delete button that appears on hover
const TAG_HOVER_BUTTON_SPACE = 20;

/**
 * Custom hook to calculate how many tags can fit in 2 rows.
 *
 * Row 1: Label + Tags + Clear Button
 * Row 2: Remaining Tags + Expand Tag (only if overflow)
 *
 * Measures actual element widths to determine optimal placement.
 */
export const useTagOverflowCalculation = ({
	containerRef,
	measurementRef,
	totalItems,
	expanded,
}: UseTagOverflowCalculationProps): UseTagOverflowCalculationResult => {
	const [row1TagCount, setRow1TagCount] = useState(0);
	const [row2TagCount, setRow2TagCount] = useState(0);
	const [hasOverflow, setHasOverflow] = useState(false);
	const [isCalculating, setIsCalculating] = useState(true);

	const calculateLayout = useCallback(() => {
		if (!containerRef.current || !measurementRef.current) {
			return;
		}

		const container = containerRef.current;
		const measurementContainer = measurementRef.current;

		// Get all measurable elements from the measurement container
		const tags = Array.from(measurementContainer.querySelectorAll('[data-measure-tag]'));
		const label = measurementContainer.querySelector('[data-measure-label]');
		const clearButton = measurementContainer.querySelector('[data-measure-clear]');
		const expandTag = measurementContainer.querySelector('[data-measure-expand]');

		if (tags.length === 0) {
			setRow1TagCount(0);
			setRow2TagCount(0);
			setHasOverflow(false);
			setIsCalculating(false);
			return;
		}

		// Get container width and account for padding
		const containerRect = container.getBoundingClientRect();
		const containerStyle = getComputedStyle(container);
		const paddingLeft = parseFloat(containerStyle.paddingLeft) || 0;
		const paddingRight = parseFloat(containerStyle.paddingRight) || 0;
		const containerWidth = containerRect.width - paddingLeft - paddingRight;

		// Get computed gap from CSS
		const computedStyle = getComputedStyle(measurementContainer);
		const gap = parseFloat(computedStyle.gap) || 8;

		// Measure fixed elements
		const labelWidth = label ? label.getBoundingClientRect().width + gap : 0;
		const clearButtonWidth = clearButton ? clearButton.getBoundingClientRect().width + gap : 0;
		// Fallback width for expand tag (~100px for "+99 filters" text) if measurement fails
		const expandTagWidth = expandTag ? expandTag.getBoundingClientRect().width + gap : 100;

		// Measure all tag widths
		const tagWidths = tags.map((tag) => tag.getBoundingClientRect().width);

		// Calculate Row 1 available space (Label + Tags + Clear Button)
		const row1AvailableWidth = containerWidth - labelWidth - clearButtonWidth - TAG_HOVER_BUTTON_SPACE;

		// First pass: Calculate how many tags fit in Row 1
		let row1Width = 0;
		let row1Count = 0;

		for (let i = 0; i < tagWidths.length; i++) {
			const tagWidth = tagWidths[i] + (row1Count > 0 ? gap : 0);
			if (row1Width + tagWidth <= row1AvailableWidth) {
				row1Width += tagWidth;
				row1Count++;
			} else {
				break;
			}
		}

		// Calculate remaining tags after Row 1
		const remainingTags = tagWidths.slice(row1Count);

		if (remainingTags.length === 0) {
			// All tags fit in Row 1, no overflow
			setRow1TagCount(row1Count);
			setRow2TagCount(0);
			setHasOverflow(false);
			setIsCalculating(false);
			return;
		}

		// First, calculate with expand tag reserved (pessimistic)
		const row2AvailableWithExpand = containerWidth - expandTagWidth - TAG_HOVER_BUTTON_SPACE;
		let row2Width = 0;
		let row2CountWithExpand = 0;

		for (let i = 0; i < remainingTags.length; i++) {
			const tagWidth = remainingTags[i] + (row2CountWithExpand > 0 ? gap : 0);
			if (row2Width + tagWidth <= row2AvailableWithExpand) {
				row2Width += tagWidth;
				row2CountWithExpand++;
			} else {
				break;
			}
		}

		// Check if there's overflow (more remaining tags than fit in Row 2 with expand)
		const overflowExists = remainingTags.length > row2CountWithExpand;

		if (overflowExists) {
			// Use the count with expand tag space reserved
			setRow1TagCount(row1Count);
			setRow2TagCount(row2CountWithExpand);
			setHasOverflow(true);
		} else {
			// No overflow - recalculate Row 2 without reserving expand tag space
			const row2AvailableWithoutExpand = containerWidth - TAG_HOVER_BUTTON_SPACE;
			let row2WidthFull = 0;
			let row2CountFull = 0;

			for (let i = 0; i < remainingTags.length; i++) {
				const tagWidth = remainingTags[i] + (row2CountFull > 0 ? gap : 0);
				if (row2WidthFull + tagWidth <= row2AvailableWithoutExpand) {
					row2WidthFull += tagWidth;
					row2CountFull++;
				} else {
					break;
				}
			}

			// Double-check: if even without expand tag we can't fit all, we have overflow
			if (row2CountFull < remainingTags.length) {
				setRow1TagCount(row1Count);
				setRow2TagCount(row2CountWithExpand);
				setHasOverflow(true);
			} else {
				setRow1TagCount(row1Count);
				setRow2TagCount(row2CountFull);
				setHasOverflow(false);
			}
		}

		setIsCalculating(false);
	}, [containerRef, measurementRef]);

	useLayoutEffect(() => {
		setIsCalculating(true);

		// Use requestAnimationFrame to ensure DOM is fully laid out
		const rafId = requestAnimationFrame(() => {
			calculateLayout();
		});

		const resizeObserver = new ResizeObserver(() => {
			requestAnimationFrame(() => {
				calculateLayout();
			});
		});

		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}

		return () => {
			cancelAnimationFrame(rafId);
			resizeObserver.disconnect();
		};
	}, [containerRef, measurementRef, totalItems, expanded, calculateLayout]);

	// When expanded, show all tags
	if (expanded) {
		return {
			row1TagCount,
			row2TagCount: totalItems - row1TagCount,
			hasOverflow: true, // Keep expand button visible to allow collapse
			isCalculating,
		};
	}

	return {
		row1TagCount,
		row2TagCount,
		hasOverflow,
		isCalculating,
	};
};
