import { type RefObject, useCallback, useLayoutEffect, useRef, useState } from 'react';
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

	const lastObservedWidths = useRef(new WeakMap<Element, number>());

	const calculateLayout = useCallback(() => {
		if (!tagsAreaRef.current || !measurementRef.current) {
			return;
		}

		const tagsArea = tagsAreaRef.current;
		const measurementContainer = measurementRef.current;

		const { tagWidths, gap } = getElementMeasurements(measurementContainer);

		if (tagWidths.length === 0) {
			setState((previous) =>
				previous.visibleTagCount === 0 && !previous.hasOverflow
					? previous
					: { visibleTagCount: 0, hasOverflow: false },
			);
			return;
		}

		const availableWidth = getContainerAvailableWidth(tagsArea);

		const { count } = fitTagsInRow(tagWidths, availableWidth, gap);
		const hasOverflow = count < tagWidths.length;

		// Bail out when nothing moved, so an observer tick cannot cause a re-render on its own.
		setState((previous) =>
			previous.visibleTagCount === count && previous.hasOverflow === hasOverflow
				? previous
				: { visibleTagCount: count, hasOverflow },
		);
	}, [tagsAreaRef, measurementRef]);

	useLayoutEffect(() => {
		let observerRafId = 0;

		const rafId = requestAnimationFrame(() => {
			calculateLayout();
		});

		const resizeObserver = new ResizeObserver((entries) => {
			const widthChanged = entries.some((entry) => {
				const { width } = entry.contentRect;
				if (lastObservedWidths.current.get(entry.target) === width) {
					return false;
				}
				lastObservedWidths.current.set(entry.target, width);
				return true;
			});

			if (!widthChanged) {
				return;
			}

			cancelAnimationFrame(observerRafId);
			observerRafId = requestAnimationFrame(() => {
				calculateLayout();
			});
		});

		if (tagsAreaRef.current) {
			resizeObserver.observe(tagsAreaRef.current);
		}

		if (measurementRef.current) {
			resizeObserver.observe(measurementRef.current);
		}

		return () => {
			cancelAnimationFrame(rafId);
			cancelAnimationFrame(observerRafId);
			resizeObserver.disconnect();
		};
	}, [tagsAreaRef, measurementRef, totalItems, expanded, calculateLayout]);

	// While expanded, keep hasOverflow true so a width edge case can't hide the collapse control.
	if (expanded) {
		return { ...state, hasOverflow: true };
	}

	return state;
};
