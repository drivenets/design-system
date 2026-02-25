import { type ReactNode, useRef, useState } from 'react';
import { DsTextInput } from '../ds-text-input';
import { DsIcon } from '../ds-icon';
import classNames from 'classnames';
import styles from './ds-expandable-text-input.module.scss';
import { mergeRefs } from '../ds-table/utils/merge-refs';
import type { DsExpandableTextInputProps } from './ds-expandable-text-input.types';
import { DsButton } from '../ds-button';

export function DsExpandableTextInput({
	onClear,
	onExpandChange,
	icon,
	...props
}: DsExpandableTextInputProps) {
	const hasInitialValue = Boolean(props.value ?? props.defaultValue);

	const [expanded, _setExpanded] = useState(hasInitialValue);
	const [dirty, setDirty] = useState(hasInitialValue);
	const ref = useRef<HTMLInputElement>(null);

	const setExpanded = (newExpanded: boolean) => {
		_setExpanded(newExpanded);

		onExpandChange?.(newExpanded);

		if (!newExpanded) {
			setDirty(false);
		}
	};

	return (
		<DsTextInput
			{...props}
			ref={mergeRefs(ref, props.ref)}
			tabIndex={expanded ? 0 : -1}
			className={classNames(
				props.className,
				styles.expandableInput,
				expanded && styles.expanded,
				dirty && styles.dirty,
			)}
			onChange={(e) => {
				props.onChange?.(e);

				setDirty(Boolean(e.target.value));
			}}
			onBlur={(e) => {
				props.onBlur?.(e);

				const currentValue = props.value ?? ref.current?.value;

				if (!currentValue) {
					setExpanded(false);
				}
			}}
			slots={{
				inputWrapper: InputExpander,
				startAdornment: (
					<button
						type="button"
						className={styles.trigger}
						aria-label="Open text input"
						aria-hidden={expanded}
						tabIndex={expanded ? -1 : 0}
						onClick={() => {
							if (props.disabled) {
								return;
							}

							setExpanded(true);

							ref.current?.focus();
						}}
					>
						<DsIcon icon={icon} size="small" />
					</button>
				),

				endAdornment: (
					<DsButton
						design="v1.2"
						size="small"
						buttonType="tertiary"
						variant="filled"
						className={styles.clearTrigger}
						onClick={() => {
							setExpanded(false);

							if (ref.current) {
								ref.current.blur();

								// Manually clear the input in uncontrolled mode.
								ref.current.value = '';
							}

							onClear?.();
						}}
					>
						Clear
					</DsButton>
				),
			}}
		/>
	);
}

function InputExpander({ children }: { children: ReactNode }) {
	return <div className={styles.inputExpander}>{children}</div>;
}
