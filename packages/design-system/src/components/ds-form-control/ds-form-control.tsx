import { type ComponentType, createContext, useContext, useId } from 'react';
import type React from 'react';
import classNames from 'classnames';
import { DsIcon } from '../ds-icon';
import { DsSelect } from '../ds-select';
import { DsTextInput } from '../ds-text-input';
import { DsCodeInput } from '../ds-code-input';
import { DsTextarea } from '../ds-textarea';
import { DsNumberInput } from '../ds-number-input';
import { DsPasswordInput } from '../ds-password-input';
import type { DsFormControlDescriptionProps, DsFormControlProps } from './ds-form-control.types';
import styles from './ds-form-control.module.scss';
import { DsDateInput } from '../ds-date-input';
import { DsDatePicker } from '../ds-date-picker';
import { DsTimePicker } from '../ds-time-picker';

const FormControlContext = createContext<{
	controlId: string;
	/**
	 * Id of the message, while there is one
	 */
	messageId?: string;
} | null>(null);

const useFormControlContext = () => {
	const context = useContext(FormControlContext);
	if (!context) {
		throw new Error('useFormControlContext must be used within DsFormControl');
	}
	return context;
};

/**
 * HOC that automatically injects the controlId from form control context
 * into any component that expects an 'id' prop.
 *
 * @param Component - The component to wrap with form control context
 * @param displayName - Compound display name so Storybook Show code renders the member name
 * @returns A new component that automatically receives the controlId
 */
const controlify = <TProps extends { id?: string }>(
	Component: ComponentType<TProps>,
	displayName: string,
) => {
	const WrappedFormControl = (props: TProps) => {
		const { controlId } = useFormControlContext();
		return <Component id={controlId} {...props} />;
	};

	WrappedFormControl.displayName = displayName;

	return WrappedFormControl;
};

/**
 * Like `controlify`, and also points the control's `aria-describedby` at the message, for
 * components that accept it.
 */
const controlifyDescribed = <TProps extends { id?: string; 'aria-describedby'?: string }>(
	Component: ComponentType<TProps>,
	displayName: string,
) => {
	const WrappedFormControl = (props: TProps) => {
		const { controlId, messageId } = useFormControlContext();
		const describedBy = [messageId, props['aria-describedby']].filter(Boolean).join(' ') || undefined;

		return <Component id={controlId} {...props} aria-describedby={describedBy} />;
	};

	WrappedFormControl.displayName = displayName;

	return WrappedFormControl;
};

const DsFormControlDescription: React.FC<DsFormControlDescriptionProps> = ({ children, className }) => {
	return <div className={classNames(styles.description, className)}>{children}</div>;
};

const DsFormControlRoot = ({
	id,
	status,
	label,
	hideLabel = false,
	required = false,
	slots,
	message,
	messageIcon = 'info',
	className,
	style,
	children,
}: DsFormControlProps) => {
	const generatedId = useId();
	const messageId = useId();
	const controlId = id || generatedId;

	return (
		<FormControlContext.Provider value={{ controlId, messageId: message ? messageId : undefined }}>
			<div
				className={classNames(
					styles.container,
					className,

					// Casting because `info` doesn't have its own classname
					status && message && styles[status as keyof typeof styles],
				)}
				style={style}
			>
				{hideLabel ? (
					<label htmlFor={controlId} className={styles.visuallyHidden}>
						{label}
					</label>
				) : (
					<div className={styles.labelContainer}>
						<label
							htmlFor={controlId}
							className={classNames(styles.label, {
								[styles.required]: required,
							})}
						>
							{label}
						</label>
						{slots?.endAdornment && <div className={styles.endAdornment}>{slots.endAdornment}</div>}
					</div>
				)}

				{children}

				<div className={styles.messageRegion} aria-live="polite">
					{message && (
						<div className={styles.message}>
							<DsIcon icon={messageIcon} size="tiny" filled />
							<span id={messageId}>{message}</span>
						</div>
					)}
				</div>
			</div>
		</FormControlContext.Provider>
	);
};

DsFormControlDescription.displayName = 'DsFormControl.Description';

const DsFormControl = Object.assign(DsFormControlRoot, {
	displayName: 'DsFormControl',
	TextInput: controlify(DsTextInput, 'DsFormControl.TextInput'),
	CodeInput: controlifyDescribed(DsCodeInput, 'DsFormControl.CodeInput'),
	NumberInput: controlify(DsNumberInput, 'DsFormControl.NumberInput'),
	PasswordInput: controlify(DsPasswordInput, 'DsFormControl.PasswordInput'),
	/** @deprecated DsDateInput is deprecated. Use DsDatePicker or DsDateRangePicker instead. */
	DateInput: controlify(DsDateInput, 'DsFormControl.DateInput'),
	DatePicker: controlify(DsDatePicker, 'DsFormControl.DatePicker'),
	TimePicker: controlify(DsTimePicker, 'DsFormControl.TimePicker'),
	Textarea: controlify(DsTextarea, 'DsFormControl.Textarea'),
	Select: controlify(DsSelect, 'DsFormControl.Select'),
	Description: DsFormControlDescription,
});

export default DsFormControl;
