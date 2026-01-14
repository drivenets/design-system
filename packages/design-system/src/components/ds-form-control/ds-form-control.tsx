import { type ComponentType, createContext, useContext, useId } from 'react';
import type React from 'react';
import classNames from 'classnames';
import { DsIcon } from '../ds-icon';
import { DsSelect } from '../ds-select';
import { DsTextInput } from '../ds-text-input';
import { DsTextarea } from '../ds-textarea';
import { DsNumberInput } from '../ds-number-input';
import { DsPasswordInput } from '../ds-password-input';
import type { DsFormControlDescriptionProps, DsFormControlProps } from './ds-form-control.types';
import styles from './ds-form-control.module.scss';
import { DsDateInput } from '../ds-date-input';

const FormControlContext = createContext<{ controlId: string } | null>(null);

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
 * @returns A new component that automatically receives the controlId
 */
const controlify = <TProps extends { id?: string }>(Component: ComponentType<TProps>) => {
	return function WrappedFormControl(props: TProps) {
		const { controlId } = useFormControlContext();
		return <Component id={controlId} {...props} />;
	};
};

const DsFormControlDescription: React.FC<DsFormControlDescriptionProps> = ({ children, className }) => {
	return <div className={classNames(styles.description, className)}>{children}</div>;
};

const DsFormControl = ({
	id,
	status,
	label,
	required = false,
	slots,
	message,
	messageIcon = 'info',
	className,
	style,
	children,
}: DsFormControlProps) => {
	const generatedId = useId();
	const controlId = id || generatedId;

	return (
		<FormControlContext.Provider value={{ controlId }}>
			<div
				className={classNames(styles.container, status && message && styles[status], className)}
				style={style}
			>
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

				{children}

				{message && (
					<div className={styles.message}>
						<DsIcon icon={messageIcon} size="tiny" filled />
						<span className={styles.messageText}>{message}</span>
					</div>
				)}
			</div>
		</FormControlContext.Provider>
	);
};

DsFormControl.TextInput = controlify(DsTextInput);
DsFormControl.NumberInput = controlify(DsNumberInput);
DsFormControl.PasswordInput = controlify(DsPasswordInput);
DsFormControl.DateInput = controlify(DsDateInput);
DsFormControl.Textarea = controlify(DsTextarea);
DsFormControl.Select = controlify(DsSelect);
DsFormControl.Description = DsFormControlDescription;

export default DsFormControl;
