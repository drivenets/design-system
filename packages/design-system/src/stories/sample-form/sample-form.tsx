import { type SubmitHandler, Controller, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DsFormControl } from '../../components/ds-form-control';
import { DsDateRangePicker } from '../../components/ds-date-range-picker';
import { DsRadioGroup } from '../../components/ds-radio-group';
import { DsCheckbox } from '../../components/ds-checkbox';
import { DsButton } from '../../components/ds-button';
import { DsTypography } from '../../components/ds-typography';
import { sampleFormSchema, type SampleFormValues } from './sample-form-schema';

const defaultValues = {
	name: '',
	email: '',
	description: '',
	quantity: undefined,
	birthDate: undefined,
	eventStartDate: undefined,
	eventEndDate: undefined,
	acceptTerms: false,
	subscription: '',
	contactMethod: '',
};

// Normalize dates to UTC to account for timezone differences in local machines vs CI.
const toUTCMidnight = (date: Date) => new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

const setValueOptions = {
	shouldValidate: true,
	shouldTouch: true,
	shouldDirty: true,
} as const;

const SampleForm = () => {
	const methods = useForm<SampleFormValues>({
		resolver: zodResolver(sampleFormSchema),
		defaultValues: defaultValues as never,
		mode: 'all',
	});

	const {
		handleSubmit,
		formState: { errors, isValid, touchedFields, isDirty },
		setValue,
		watch,
		reset,
		control,
	} = methods;

	const onSubmit: SubmitHandler<SampleFormValues> = (data) => {
		alert(JSON.stringify(data, null, 2));
		reset(defaultValues as never);
	};

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}
			>
				<Controller
					name="name"
					control={control}
					render={({ field, fieldState }) => (
						<DsFormControl
							label="Name"
							required
							status="error"
							messageIcon="cancel"
							message={fieldState.isTouched ? fieldState.error?.message : ''}
						>
							<DsFormControl.TextInput placeholder="Enter your name" {...field} />
						</DsFormControl>
					)}
				/>

				<Controller
					name="email"
					control={control}
					render={({ field, fieldState }) => (
						<DsFormControl
							label="Email"
							required
							status="error"
							messageIcon="cancel"
							message={fieldState.isTouched ? fieldState.error?.message : ''}
						>
							<DsFormControl.TextInput type="email" placeholder="Enter your email" {...field} />
						</DsFormControl>
					)}
				/>

				<Controller
					name="quantity"
					control={control}
					render={({ field, fieldState }) => (
						<DsFormControl
							label="Quantity"
							required
							status="error"
							messageIcon="cancel"
							message={fieldState.isTouched ? fieldState.error?.message : ''}
						>
							<DsFormControl.NumberInput
								placeholder="Enter quantity"
								min={1}
								max={100}
								step={1}
								value={field.value}
								onValueChange={field.onChange}
								onBlur={field.onBlur}
							/>
						</DsFormControl>
					)}
				/>

				<Controller
					name="birthDate"
					control={control}
					render={({ field, fieldState }) => (
						<DsFormControl
							label="Birth Date"
							required
							status="error"
							messageIcon="cancel"
							message={fieldState.isTouched ? fieldState.error?.message : undefined}
						>
							<DsFormControl.DatePicker
								value={field.value ? new Date(field.value) : null}
								onChange={(date) => field.onChange(date ? toUTCMidnight(date).toISOString() : '')}
								onBlur={field.onBlur}
							/>
						</DsFormControl>
					)}
				/>

				<DsDateRangePicker
					value={[
						watch('eventStartDate') ? new Date(watch('eventStartDate')) : null,
						watch('eventEndDate') ? new Date(watch('eventEndDate')) : null,
					]}
					onChange={([start, end]) => {
						setValue('eventStartDate', start ? toUTCMidnight(start).toISOString() : '', setValueOptions);
						setValue('eventEndDate', end ? toUTCMidnight(end).toISOString() : '', setValueOptions);
					}}
					orientation="vertical"
					hideClearAll
					slotProps={{
						startDateFormControl: {
							required: true,
							status: 'error',
							messageIcon: 'cancel',
							message: touchedFields.eventStartDate ? errors.eventStartDate?.message : undefined,
						},
						endDateFormControl: {
							required: true,
							status: 'error',
							messageIcon: 'cancel',
							message: touchedFields.eventEndDate ? errors.eventEndDate?.message : undefined,
						},
					}}
				/>

				<Controller
					name="contactMethod"
					control={control}
					render={({ field, fieldState }) => (
						<DsFormControl
							label="Preferred Contact Method"
							required
							status="error"
							messageIcon="cancel"
							message={fieldState.isTouched ? fieldState.error?.message : ''}
						>
							<DsFormControl.Select
								value={field.value}
								placeholder="Select a contact method"
								options={[
									{ label: 'Phone Call', value: 'phone', icon: 'call' },
									{ label: 'Email', value: 'email', icon: 'email' },
									{ label: 'SMS', value: 'sms', icon: 'sms' },
									{ label: 'In-App Notification', value: 'in_app', icon: 'notifications' },
								]}
								clearable
								onClear={() => field.onChange('')}
								onValueChange={field.onChange}
								onBlur={field.onBlur}
							/>
						</DsFormControl>
					)}
				/>

				<Controller
					name="description"
					control={control}
					render={({ field, fieldState }) => (
						<DsFormControl
							label="Description"
							required
							status="error"
							messageIcon="cancel"
							message={fieldState.isTouched ? fieldState.error?.message : ''}
						>
							<DsFormControl.Textarea placeholder="Enter your description" {...field} />
						</DsFormControl>
					)}
				/>

				<Controller
					name="subscription"
					control={control}
					render={({ field, fieldState }) => (
						<>
							<DsRadioGroup.Root value={field.value} onValueChange={(value) => field.onChange(value ?? '')}>
								<DsRadioGroup.Item value="basic" label="Basic" />
								<DsRadioGroup.Item value="pro" label="Pro" />
								<DsRadioGroup.Item value="enterprise" label="Enterprise" />
							</DsRadioGroup.Root>
							{fieldState.isTouched && fieldState.error && (
								<DsTypography variant="body-xs-reg" style={{ color: 'var(--font-error)' }}>
									{fieldState.error.message}
								</DsTypography>
							)}
						</>
					)}
				/>

				<Controller
					name="acceptTerms"
					control={control}
					render={({ field, fieldState }) => (
						<>
							<DsCheckbox
								label="I accept the terms and conditions"
								checked={field.value}
								onCheckedChange={(checked) => field.onChange(checked === true)}
								onBlur={field.onBlur}
							/>
							{fieldState.isTouched && fieldState.error && (
								<DsTypography variant="body-xs-reg" style={{ color: 'var(--font-error)' }}>
									{fieldState.error.message}
								</DsTypography>
							)}
						</>
					)}
				/>

				<DsButton type="submit" disabled={!isDirty || !isValid}>
					Submit
				</DsButton>
			</form>
		</FormProvider>
	);
};

export default SampleForm;
