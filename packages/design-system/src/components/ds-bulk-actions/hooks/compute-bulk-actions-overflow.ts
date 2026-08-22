const FIT_EPSILON_PX = 0.5;
const MIN_VISIBLE_ACTIONS = 1;
const STACK_GAP_COUNT_WITH_LABEL = 3;
const STACK_GAP_COUNT_WITHOUT_LABEL = 2;

export interface BulkActionsOverflowMetrics {
	containerWidth: number;
	badgeWidth: number;
	dismissWidth: number;
	labelWidth: number;
	itemWidths: number[];
	moreWidth: number;
	gap: number;
}

export interface BulkActionsOverflowState {
	visibleCount: number;
	showMore: boolean;
	summaryLabelHidden: boolean;
}

const sum = (values: number[]): number => values.reduce((total, value) => total + value, 0);

const chromeWidth = ({
	badgeWidth,
	dismissWidth,
	labelWidth,
	gap,
	hideLabel,
}: Pick<BulkActionsOverflowMetrics, 'badgeWidth' | 'dismissWidth' | 'labelWidth' | 'gap'> & {
	hideLabel: boolean;
}): number => {
	const gapCount = hideLabel ? STACK_GAP_COUNT_WITHOUT_LABEL : STACK_GAP_COUNT_WITH_LABEL;
	const labelPart = hideLabel ? 0 : labelWidth;

	return badgeWidth + dismissWidth + labelPart + gapCount * gap;
};

const fits = (usedWidth: number, containerWidth: number): boolean =>
	usedWidth <= containerWidth + FIT_EPSILON_PX;

/**
 * First-N visible / rightmost overflow, then hide the summary label as a last resort.
 * Dismiss and the count badge are never collapsed.
 */
export const computeBulkActionsOverflow = ({
	containerWidth,
	badgeWidth,
	dismissWidth,
	labelWidth,
	itemWidths,
	moreWidth,
	gap,
}: BulkActionsOverflowMetrics): BulkActionsOverflowState => {
	const itemCount = itemWidths.length;

	if (itemCount === 0) {
		return { visibleCount: 0, showMore: false, summaryLabelHidden: false };
	}

	const chrome = {
		badgeWidth,
		dismissWidth,
		labelWidth,
		gap,
	};

	if (fits(chromeWidth({ ...chrome, hideLabel: false }) + sum(itemWidths), containerWidth)) {
		return { visibleCount: itemCount, showMore: false, summaryLabelHidden: false };
	}

	for (let visibleCount = itemCount - 1; visibleCount >= MIN_VISIBLE_ACTIONS; visibleCount--) {
		const actionsWidth = sum(itemWidths.slice(0, visibleCount)) + moreWidth;

		if (fits(chromeWidth({ ...chrome, hideLabel: false }) + actionsWidth, containerWidth)) {
			return { visibleCount, showMore: true, summaryLabelHidden: false };
		}
	}

	return {
		visibleCount: MIN_VISIBLE_ACTIONS,
		showMore: itemCount > MIN_VISIBLE_ACTIONS,
		summaryLabelHidden: true,
	};
};
