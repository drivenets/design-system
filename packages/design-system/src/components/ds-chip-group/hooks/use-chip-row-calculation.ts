import { type RefObject, useLayoutEffect, useState } from 'react';

interface UseChipRowCalculationProps {
	chipsWrapperRef: RefObject<HTMLDivElement | null>;
	totalFilters: number;
}

/**
 * Custom hook to calculate how many chips can fit in 2 rows
 * Uses a simple approach: render all, measure positions, hide overflow
 */
export const useChipRowCalculation = ({ chipsWrapperRef, totalFilters }: UseChipRowCalculationProps) => {
	const [visibleCount, setVisibleCount] = useState(totalFilters);

	useLayoutEffect(() => {
		const calculateVisibleChips = () => {
			if (!chipsWrapperRef.current) {
				return;
			}

			const wrapper = chipsWrapperRef.current;
			const children = Array.from(wrapper.children) as HTMLElement[];

			if (children.length === 0) {
				return;
			}

			const cs = getComputedStyle(wrapper);
			const gap = parseFloat(cs.columnGap || cs.gap || '0') || 8;
			let index;
			let line = 0;
			let total = 0;

			for (index = 0; index < children.length; index++) {
				const current = children[index];

				if (!current) {
					continue;
				}

				const offset = current.offsetWidth === wrapper.clientWidth ? 0 : gap;
				const next = offset + current.offsetWidth;

				if (total + next >= wrapper.clientWidth) {
					line++;
					if (line >= 2) {
						break;
					}
					total = next;
				} else {
					total += next;
				}
			}

			const result = Math.max(1, line < 2 ? index : index - 1);
			setVisibleCount(result);
		};

		// Use requestAnimationFrame to ensure DOM is fully laid out
		const rafId = requestAnimationFrame(() => {
			calculateVisibleChips();
		});

		const resizeObserver = new ResizeObserver(() => {
			requestAnimationFrame(() => {
				calculateVisibleChips();
			});
		});

		if (chipsWrapperRef.current) {
			resizeObserver.observe(chipsWrapperRef.current);
		}

		return () => {
			cancelAnimationFrame(rafId);
			resizeObserver.disconnect();
		};
	}, [chipsWrapperRef, totalFilters]);

	return visibleCount;
};
