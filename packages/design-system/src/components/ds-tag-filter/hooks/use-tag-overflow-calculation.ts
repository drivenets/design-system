import { type RefObject, useCallback, useLayoutEffect, useState } from 'react';
import { fitTagsInRow, getContainerAvailableWidth, getElementMeasurements } from '../utils';

interface UseTagOverflowCalculationOptions {
	tagsAreaRef: RefObject<HTMLDivElement | null>;
	measurementRef: RefObject<HTMLDivElement | null>;
	totalItems: number;
	expanded: boolean;
}

interface UseTagOverflowCalculationResult {
	visibleTagCount: number;
	hasOverflow: boolean;
}

/**
 * Custom hook to calculate how many tags fit on the first row of the tags-area.
 */
export const useTagOverflowCalculation = ({
	tagsAreaRef,
	measurementRef,
	totalItems,
	expanded,
}: UseTagOverflowCalculationOptions): UseTagOverflowCalculationResult => {
	const [state, setState] = useState<UseTagOverflowCalculationResult>({
		visibleTagCount: 0,
		hasOverflow: false,
	});

	const calculateLayout = useCallback(() => {
		if (!tagsAreaRef.current || !measurementRef.current) {
			return;
		}

		const tagsArea = tagsAreaRef.current;
		const measurementContainer = measurementRef.current;

		const { tagWidths, gap } = getElementMeasurements(measurementContainer);

		if (tagWidths.length === 0) {
			setState({ visibleTagCount: 0, hasOverflow: false });
			return;
		}

		const availableWidth = getContainerAvailableWidth(tagsArea);

		const { count } = fitTagsInRow(tagWidths, availableWidth, gap);
		const hasOverflow = count < tagWidths.length;

		setState({ visibleTagCount: count, hasOverflow });
	}, [tagsAreaRef, measurementRef]);

	useLayoutEffect(() => {
		const rafId = requestAnimationFrame(() => {
			calculateLayout();
		});

		const resizeObserver = new ResizeObserver(() => {
			requestAnimationFrame(() => {
				calculateLayout();
			});
		});

		if (tagsAreaRef.current) {
			resizeObserver.observe(tagsAreaRef.current);
		}

		return () => {
			cancelAnimationFrame(rafId);
			resizeObserver.disconnect();
		};
	}, [tagsAreaRef, measurementRef, totalItems, expanded, calculateLayout]);

	return state;
};
