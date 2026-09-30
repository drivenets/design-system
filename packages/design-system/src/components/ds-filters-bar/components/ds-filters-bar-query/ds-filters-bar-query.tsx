import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { DsFormControl } from '../../../ds-form-control';
import { useDsFiltersBarContext } from '../../ds-filters-bar.context';
import { parseFilterQuery, serializeFilterQuery, type DsFilterQueryError } from '../../query-language';
import styles from './ds-filters-bar-query.module.scss';
import { defaultDsFiltersBarQueryLocale, type DsFiltersBarQueryProps } from './ds-filters-bar-query.types';
import { QueryHelp } from './ds-filters-bar-query-help';

const QUERY_DEBOUNCE_MS = 300;

/**
 * Text the user typed, and the query text of the document it was typed over. The draft shows
 * while the field is focused, or while the document has not changed under it.
 */
interface Draft {
	text: string;
	base: string;
}

const QueryEditor = ({ disabled = false, locale, slots, className, style }: DsFiltersBarQueryProps) => {
	const bar = useDsFiltersBarContext();
	const strings = {
		...defaultDsFiltersBarQueryLocale,
		...locale,
		errors: { ...defaultDsFiltersBarQueryLocale.errors, ...locale?.errors },
		operators: { ...defaultDsFiltersBarQueryLocale.operators, ...locale?.operators },
	};

	const [draft, setDraft] = useState<Draft | null>(null);
	const [error, setError] = useState<DsFilterQueryError | null>(null);
	const [focused, setFocused] = useState(false);

	const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
	// The debounced commit runs after later renders, so it reads the latest document from here.
	const barRef = useRef(bar);

	useEffect(() => {
		barRef.current = bar;
	});

	useEffect(() => () => clearTimeout(timerRef.current), []);

	const activeDraft = draft && (focused || draft.base === bar.queryText) ? draft : null;
	const activeError = activeDraft ? error : null;

	/**
	 * Writes a valid query to the document and reports whether it was valid
	 */
	const commit = (text: string): boolean => {
		const current = barRef.current;
		const result = parseFilterQuery(text, current.fields, current.conditions);

		if (!result.ok) {
			setError(result.error);

			return false;
		}

		setError(null);

		const { conditions } = result;

		if (conditions) {
			const unchanged =
				conditions.length === current.conditions.length &&
				conditions.every((condition, index) => condition.id === current.conditions[index]?.id);

			if (!unchanged) {
				current.setConditions(conditions);
			}

			if (current.query !== null) {
				current.setQuery(null);
			}
		} else if (current.query !== text) {
			current.setQuery(text);
		}

		const base = conditions ? serializeFilterQuery(conditions) : text;

		setDraft((previous) => (previous?.text === text ? { text, base } : previous));

		return true;
	};

	const handleValueChange = (text: string) => {
		setDraft({ text, base: activeDraft?.base ?? bar.queryText });
		clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			timerRef.current = undefined;
			commit(text);
		}, QUERY_DEBOUNCE_MS);
	};

	const handleFocus = () => {
		setFocused(true);

		// The document changed while the field was away, so the draft no longer applies.
		if (draft && !activeDraft) {
			setDraft(null);
			setError(null);
		}
	};

	const handleBlur = () => {
		setFocused(false);

		if (!activeDraft) {
			return;
		}

		const pending = timerRef.current !== undefined;

		clearTimeout(timerRef.current);
		timerRef.current = undefined;

		const valid = pending ? commit(activeDraft.text) : error === null;

		// A valid draft gives way to the document's canonical text; an invalid one stays to be fixed.
		if (valid) {
			setDraft(null);
		}
	};

	return (
		<DsFormControl
			label={strings.label}
			hideLabel
			status={activeError ? 'error' : undefined}
			message={activeError ? strings.errors[activeError.code](activeError.text) : undefined}
			messageIcon="error"
			className={classNames(styles.root, className)}
			style={style}
		>
			<DsFormControl.CodeInput
				value={activeDraft?.text ?? bar.queryText}
				placeholder={strings.placeholder}
				disabled={disabled}
				invalid={activeError !== null}
				locale={{ searchPlaceholder: strings.searchPlaceholder, codeLabel: strings.label }}
				slots={{ endAdornment: <QueryHelp fields={bar.fields} locale={strings} content={slots?.help} /> }}
				onValueChange={handleValueChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
		</DsFormControl>
	);
};

export const Query = (props: DsFiltersBarQueryProps) => {
	const { resetRevision } = useDsFiltersBarContext();

	// Clearing also discards local drafts, errors and pending commits when the query text is unchanged.
	return <QueryEditor key={resetRevision} {...props} />;
};

Query.displayName = 'DsFiltersBar.Query';
