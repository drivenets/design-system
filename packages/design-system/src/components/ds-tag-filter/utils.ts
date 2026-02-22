export interface FitTagsResult {
	count: number;
	usedWidth: number;
}

export interface ElementMeasurements {
	tagWidths: number[];
	gap: number;
}

/**
 * Calculate how many tags fit within the available width.
 * Pure function for easy testing.
 */
export function fitTagsInRow(tagWidths: number[], availableWidth: number, gap: number): FitTagsResult {
	let usedWidth = 0;
	let count = 0;

	for (const tagWidth of tagWidths) {
		const widthWithGap = tagWidth + (count > 0 ? gap : 0);
		if (usedWidth + widthWithGap <= availableWidth) {
			usedWidth += widthWithGap;
			count++;
		} else {
			break;
		}
	}

	return { count, usedWidth };
}

/**
 * Calculate the available width inside a container, accounting for padding.
 */
export function getContainerAvailableWidth(container: HTMLDivElement): number {
	const containerRect = container.getBoundingClientRect();
	const containerStyle = getComputedStyle(container);
	const paddingLeft = parseFloat(containerStyle.paddingLeft) || 0;
	const paddingRight = parseFloat(containerStyle.paddingRight) || 0;
	return containerRect.width - paddingLeft - paddingRight;
}

/**
 * Measure tag widths and gap inside the measurement container.
 */
export function getElementMeasurements(measurementContainer: HTMLDivElement): ElementMeasurements {
	const tags = Array.from(measurementContainer.querySelectorAll('[data-measure-tag]'));

	const computedStyle = getComputedStyle(measurementContainer);
	const gap = parseFloat(computedStyle.gap) || 8;

	const tagWidths = tags.map((tag) => tag.getBoundingClientRect().width);

	return { tagWidths, gap };
}
