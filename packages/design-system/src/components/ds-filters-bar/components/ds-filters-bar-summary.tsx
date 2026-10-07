import classNames from 'classnames';
import type { ReactNode } from 'react';
import { DsTypography } from '../../ds-typography';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import styles from '../ds-filters-bar.module.scss';
import {
	defaultDsFiltersBarSummaryLocale,
	type DsFiltersBarSummaryLocale,
	type DsFiltersBarSummaryProps,
} from '../ds-filters-bar.types';
import { toSummaryItems, type DsFiltersBarSummaryItem } from '../ds-filters-bar.utils';

interface SummaryPhrase {
	key: string;
	label: string;
	operator?: string;
	value?: string;
	delimited: boolean;
}

/**
 * Every phrase ends with `;`, except a saved filter that other items follow.
 */
const toPhrase = (
	item: DsFiltersBarSummaryItem,
	locale: Required<DsFiltersBarSummaryLocale>,
	isOnly: boolean,
): SummaryPhrase => {
	switch (item.kind) {
		case 'savedFilter':
			return { key: 'savedFilter', label: locale.activeSavedFilter, value: item.name, delimited: isOnly };
		case 'empty':
			return { key: 'empty', label: locale.emptyLabel, value: locale.emptyValue, delimited: true };
		case 'advancedQuery':
			return { key: 'advancedQuery', label: locale.advancedQuery, delimited: true };
		case 'search':
			return { key: `search:${item.id}`, label: locale.search, value: item.value, delimited: true };
		case 'condition':
			return {
				key: `condition:${item.id}`,
				label: item.label,
				operator: item.operator,
				value: item.value,
				delimited: true,
			};
	}
};

/**
 * `Label: value;`, or `Label operator: value;` with the operator in italics
 */
const renderPhrase = ({ key, label, operator, value, delimited }: SummaryPhrase) => {
	const hasValue = value !== undefined;

	return (
		<span key={key}>
			<span className={styles.summaryLabel}>
				{label}
				{hasValue && !operator && ':'}
			</span>
			{operator && (
				<>
					{' '}
					<span className={styles.summaryOperator}>{operator}</span>:
				</>
			)}
			{hasValue && ` ${value}`}
			{delimited && ';'}
		</span>
	);
};

/**
 * Phrases separated by a space, so the text reads as one line for assistive tech and copy
 */
const renderPhrases = (phrases: ReadonlyArray<SummaryPhrase>): ReactNode[] =>
	phrases.flatMap((phrase, index) => (index ? [' ', renderPhrase(phrase)] : [renderPhrase(phrase)]));

export const Summary = ({
	count,
	activeSavedFilterName,
	locale: localeProp,
	ref,
	className,
	style,
}: DsFiltersBarSummaryProps) => {
	const { fields, conditions, query, expanded } = useDsFiltersBarContext();
	const locale = { ...defaultDsFiltersBarSummaryLocale, ...localeProp };

	if (expanded) {
		return null;
	}

	const items = toSummaryItems({ conditions, query, fields, activeSavedFilterName });
	const phrases = items.map((item) => toPhrase(item, locale, items.length === 1));
	const savedFilter = items[0]?.kind === 'savedFilter' ? phrases[0] : undefined;
	const documentPhrases = savedFilter ? phrases.slice(1) : phrases;

	return (
		<div ref={ref} className={classNames(styles.summary, className)} style={style}>
			{savedFilter && (
				<>
					<span className={styles.summarySavedFilter}>{renderPhrase(savedFilter)}</span>{' '}
				</>
			)}
			{documentPhrases.length > 0 && (
				<>
					<DsTypography
						variant="body-xs-reg"
						truncate
						tooltip
						tooltipContent={renderPhrases(phrases)}
						className={styles.summaryConditions}
					>
						{renderPhrases(documentPhrases)}
					</DsTypography>{' '}
				</>
			)}
			{count !== undefined && (
				<>
					<span aria-hidden="true" className={styles.summaryCount}>
						({count})
					</span>
					<span role="status" className={styles.visuallyHidden}>
						{locale.resultCount(count)}
					</span>
				</>
			)}
		</div>
	);
};

Summary.displayName = 'DsFiltersBar.Summary';
