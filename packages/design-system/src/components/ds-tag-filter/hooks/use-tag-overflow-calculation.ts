import { type RefObject, useCallback, useLayoutEffect, useState } from 'react';
import { fitTagsInRow, getContainerAvailableWidth, getElementMeasurements } from '../utils';

interface UseTagOverflowCalculationOptions {
	containerRef: RefObject<HTMLDivElement | null>;
	measurementRef: RefObject<HTMLDivElement | null>;
	totalItems: number;
	expanded: boolean;
}

interface UseTagOverflowCalculationResult {
	visibleTagCount: number;
	hasOverflow: boolean;
}

/**
 * Custom hook to calculate how many tags fit in the available container width.
 *
 * Tags occupy the full container width. Non-tag elements (label, clear button,
 * expand control) live in a separate header row and don't affect the calculation.
 */
export const useTagOverflowCalculation = ({
	containerRef,
	measurementRef,
	totalItems,
	expanded,
}: UseTagOverflowCalculationOptions): UseTagOverflowCalculationResult => {
	const [state, setState] = useState<UseTagOverflowCalculationResult>({
		visibleTagCount: 0,
		hasOverflow: false,
	});

	const calculateLayout = useCallback(() => {
		if (!containerRef.current || !measurementRef.current) {
			return;
		}

		const container = containerRef.current;
		const measurementContainer = measurementRef.current;

		const { tagWidths, gap } = getElementMeasurements(measurementContainer);

		if (tagWidths.length === 0) {
			setState({ visibleTagCount: 0, hasOverflow: false });
			return;
		}

		const containerWidth = getContainerAvailableWidth(container);

		const { count } = fitTagsInRow(tagWidths, containerWidth, gap);
		const hasOverflow = count < tagWidths.length;

		setState({ visibleTagCount: count, hasOverflow });
	}, [containerRef, measurementRef]);

	useLayoutEffect(() => {
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

	if (expanded) {
		return {
			visibleTagCount: totalItems,
			hasOverflow: true,
		};
	}

	return state;
};
