import { Controller, ControllerRenderProps, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DsButton, DsCheckbox, DsFormControl, DsRadioGroup } from '@design-system/ui';
import { sampleFormSchema, SampleFormValues } from './sampleFormSchema';

const defaultValues = {
	name: '',
	email: '',
	description: '',
	quantity: undefined,
	acceptTerms: false,
	subscription: undefined,
	contactMethod: '',
};

const SampleForm = () => {
	const methods = useForm<SampleFormValues>({
		resolver: zodResolver(sampleFormSchema),
		defaultValues,
		mode: 'onChange',
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isValid, touchedFields, isDirty },
		setValue,
		watch,
		trigger,
		reset,
		control,
	} = methods;

	const onSubmit: SubmitHandler<SampleFormValues> = (data: SampleFormValues) => {
		alert(JSON.stringify(data, null, 2));
		reset(defaultValues);
	};

	const handleValueChange = (
		field: ControllerRenderProps<SampleFormValues> | keyof SampleFormValues,
		value: string | number | true,
	) => {
		const name = typeof field === 'string' ? field : field.name;
		setValue(name, value, {
			shouldValidate: true,
			shouldTouch: true,
			shouldDirty: true,
		});
	};

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}
			>
				<DsFormControl
					id="name"
					label="Name"
					required
					status="error"
					messageIcon="cancel"
					message={touchedFields.name ? errors.name?.message : undefined}
				>
					<Controller
						name="name"
						control={control}
						render={({ field }) => (
							<DsFormControl.TextInput
								value={field.value}
								placeholder="Enter your name"
								onChange={(event) => handleValueChange(field, event.target.value)}
								onBlur={(event) => handleValueChange(field, event.target.value)}
							/>
						)}
					/>
				</DsFormControl>

				<DsFormControl
					label="Email"
					required
					status="error"
					messageIcon="cancel"
					message={touchedFields.email ? errors.email?.message : undefined}
				>
					<Controller
						name="email"
						control={control}
						render={({ field }) => (
							<DsFormControl.TextInput
								type="email"
								value={field.value}
								placeholder="Enter your email"
								onChange={(event) => handleValueChange(field, event.target.value)}
								onBlur={(event) => handleValueChange(field, event.target.value)}
							/>
						)}
					/>
				</DsFormControl>

				<DsFormControl
					label="Quantity"
					required
					status="error"
					messageIcon="cancel"
					message={touchedFields.quantity ? errors.quantity?.message : undefined}
				>
					<Controller
						name="quantity"
						control={control}
						render={({ field }) => (
							<DsFormControl.NumberInput
								placeholder="Enter quantity"
								min={1}
								max={100}
								step={1}
								onValueChange={(value) => handleValueChange(field, value)}
							/>
						)}
					/>
				</DsFormControl>

				<DsFormControl
					label="Preferred Contact Method"
					required
					status="error"
					messageIcon="cancel"
					message={touchedFields.contactMethod ? errors.contactMethod?.message : undefined}
				>
					<Controller
						name="contactMethod"
						control={control}
						render={({ field }) => (
							<DsFormControl.Select
								value={field.value}
								placeholder="Select a contact method"
								options={[
									{ label: 'Phone Call', value: 'phone', icon: 'call' },
									{ label: 'Email', value: 'email', icon: 'email' },
									{ label: 'SMS', value: 'sms', icon: 'sms' },
									{ label: 'In-App Notification', value: 'in_app', icon: 'notifications' },
								]}
								onClear={() => handleValueChange(field, '')}
								onValueChange={(value) => handleValueChange(field, value)}
								onBlur={() => handleValueChange(field, field.value)}
							/>
						)}
					/>
				</DsFormControl>

				<DsFormControl
					label="Description"
					required
					status="error"
					messageIcon="cancel"
					message={touchedFields.description ? errors.description?.message : undefined}
				>
					<DsFormControl.Textarea
						placeholder="Enter your description"
						{...register('description', {
							onBlur: () => trigger('description'),
							onChange: () => trigger('description'),
						})}
					/>
				</DsFormControl>

				<DsRadioGroup
					options={[
						{ label: 'Basic', value: 'basic' },
						{ label: 'Pro', value: 'pro' },
						{ label: 'Enterprise', value: 'enterprise' },
					]}
					value={watch('subscription') || ''}
					onValueChange={(value) => handleValueChange('subscription', value)}
				/>
				{errors.subscription && (
					<span style={{ color: 'red', fontSize: '12px' }}>{errors.subscription.message}</span>
				)}

				<DsCheckbox
					label="I accept the terms and conditions"
					checked={watch('acceptTerms')}
					onCheckedChange={(value) => handleValueChange('acceptTerms', value as true)}
				/>
				{errors.acceptTerms && (
					<span style={{ color: 'red', fontSize: '12px' }}>{errors.acceptTerms.message}</span>
				)}

				<DsButton type="submit" disabled={!isDirty || !isValid}>
					Submit
				</DsButton>
			</form>
		</FormProvider>
	);
};

export default SampleForm;
