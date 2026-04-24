import { Controller, FormProvider, useController, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DsFormControl } from '../../components/ds-form-control';
import { DsDateRangePicker } from '../../components/ds-date-range-picker';
import { DsRadioGroup } from '../../components/ds-radio-group';
import { DsCheckbox } from '../../components/ds-checkbox';
import { DsTypography } from '../../components/ds-typography';
import { sampleFormSchema, type SampleFormValues } from './sample-form-schema';
import { useState } from 'react';
import { DsButtonV3 } from '../../components/ds-button-v3';

const defaultValues = {
	name: '',
	email: '',
	description: '',
	quantity: null,
	birthDate: null,
	eventStartDate: null,
	eventEndDate: null,
	acceptTerms: false,
	subscription: '',
	contactMethod: '',
};

const SampleForm = () => {
	const methods = useForm<SampleFormValues>({
		resolver: zodResolver(sampleFormSchema),
		defaultValues: defaultValues as never,
		mode: 'onChange',
	});

	const {
		handleSubmit,
		formState: { errors },
		control,
	} = methods;

	const { field: eventStartField } = useController({ name: 'eventStartDate', control });
	const { field: eventEndField } = useController({ name: 'eventEndDate', control });

	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = async (data: SampleFormValues) => {
		setIsSubmitting(true);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		alert(JSON.stringify(data, null, 2));
		setIsSubmitting(false);
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
							message={fieldState.error?.message}
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
							message={fieldState.error?.message}
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
							message={fieldState.error?.message}
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
							message={fieldState.error?.message}
						>
							<DsFormControl.DatePicker {...field} />
						</DsFormControl>
					)}
				/>

				<DsDateRangePicker
					value={[eventStartField.value, eventEndField.value]}
					onChange={([start, end]) => {
						eventStartField.onChange(start);
						eventEndField.onChange(end);
					}}
					orientation="vertical"
					hideClearAll
					slotProps={{
						startDatePicker: { onBlur: eventStartField.onBlur },
						endDatePicker: { onBlur: eventEndField.onBlur },
						startDateFormControl: {
							required: true,
							status: 'error',
							messageIcon: 'cancel',
							message: errors.eventStartDate?.message,
						},
						endDateFormControl: {
							required: true,
							status: 'error',
							messageIcon: 'cancel',
							message: errors.eventEndDate?.message,
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
							message={fieldState.error?.message}
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
							message={fieldState.error?.message}
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
							{fieldState.error && (
								<DsTypography variant="body-xs-reg" style={{ color: 'var(--background-error)' }}>
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
							{fieldState.error && (
								<DsTypography variant="body-xs-reg" style={{ color: 'var(--background-error)' }}>
									{fieldState.error.message}
								</DsTypography>
							)}
						</>
					)}
				/>

				<DsButtonV3 type="submit" disabled={isSubmitting} loading={isSubmitting}>
					Submit
				</DsButtonV3>
			</form>
		</FormProvider>
	);
};

export default SampleForm;
