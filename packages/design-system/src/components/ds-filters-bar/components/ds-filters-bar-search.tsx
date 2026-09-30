import classNames from 'classnames';
import { useEffect, useLayoutEffect, useRef, type KeyboardEvent } from 'react';
import { mergeRefs } from '../../../utils/merge-refs';
import { DsButtonV3 } from '../../ds-button-v3';
import { DsFormControl } from '../../ds-form-control';
import { DsIcon } from '../../ds-icon';
import { useDsFiltersBarContext } from '../ds-filters-bar.context';
import styles from '../ds-filters-bar.module.scss';
import { defaultDsFiltersBarSearchLocale, type DsFiltersBarSearchProps } from '../ds-filters-bar.types';
import { createSearchCondition } from '../ds-filters-bar.utils';
import { useReportedState } from '../use-reported-state';

const FOCUS_KEY = '/';
const EDITABLE_SELECTOR = 'input, textarea, select, [contenteditable]:not([contenteditable="false"])';

/**
 * `/` belongs to whatever the user is typing in, and to any open dialog.
 */
const isShortcutTarget = (target: EventTarget | null) =>
	!(target instanceof Element && (target.closest(EDITABLE_SELECTOR) || target.closest('[role="dialog"]')));

export const Search = ({
	value: valueProp,
	defaultValue = '',
	disabled: disabledProp = false,
	locale: localeProp,
	ref,
	className,
	style,
	onValueChange,
}: DsFiltersBarSearchProps) => {
	const { conditions, query, addCondition, registerSearch } = useDsFiltersBarContext();
	const locale = { ...defaultDsFiltersBarSearchLocale, ...localeProp };

	const [value, setValue] = useReportedState(valueProp, onValueChange, defaultValue);
	const inputRef = useRef<HTMLInputElement>(null);

	// An Advanced query is the only source, so a new condition would not reach the document.
	const disabled = disabledProp || query !== null;

	const edit = (text: string) => {
		setValue(text);
		inputRef.current?.focus();
	};

	// Chips call the latest `edit` through a handle registered once, so re-renders don't re-register.
	const editRef = useRef(edit);

	useLayoutEffect(() => {
		editRef.current = edit;
	});

	useEffect(() => {
		registerSearch({ edit: (text) => editRef.current(text) });

		return () => registerSearch(null);
	}, [registerSearch]);

	useEffect(() => {
		if (disabled) {
			return;
		}

		const handleKeyDown = (event: globalThis.KeyboardEvent) => {
			if (
				event.key !== FOCUS_KEY ||
				event.defaultPrevented ||
				event.ctrlKey ||
				event.metaKey ||
				event.altKey ||
				!isShortcutTarget(event.target)
			) {
				return;
			}

			event.preventDefault();
			inputRef.current?.focus();
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [disabled]);

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key !== 'Enter' || event.nativeEvent.isComposing) {
			return;
		}

		const condition = createSearchCondition(value);

		if (!condition) {
			return;
		}

		const isDuplicate = conditions.some((item) => item.kind === 'search' && item.text === condition.text);

		if (!isDuplicate) {
			addCondition(condition);
		}

		setValue('');
	};

	const handleClear = () => {
		setValue('');
		inputRef.current?.focus();
	};

	return (
		<DsFormControl
			label={locale.label}
			hideLabel
			className={classNames(styles.search, className)}
			style={style}
		>
			<DsFormControl.TextInput
				ref={mergeRefs(inputRef, ref)}
				size="small"
				value={value}
				placeholder={locale.placeholder}
				disabled={disabled}
				slots={{
					startAdornment: <DsIcon icon="search" size="tiny" aria-hidden />,
					endAdornment:
						value && !disabled ? (
							<DsButtonV3
								variant="tertiary"
								color="default"
								size="tiny"
								icon="close"
								aria-label={locale.clear}
								onClick={handleClear}
							/>
						) : undefined,
				}}
				onValueChange={setValue}
				onKeyDown={handleKeyDown}
			/>
		</DsFormControl>
	);
};

Search.displayName = 'DsFiltersBar.Search';
