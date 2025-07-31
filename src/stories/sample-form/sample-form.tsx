import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DsButton, DsCheckbox, DsCheckboxProps, DsFormControl, DsRadioGroup } from '@design-system/ui';
import { sampleFormSchema, SampleFormValues, SubscriptionType } from './sampleFormSchema';

const defaultValues = {
	name: '',
	email: '',
	description: '',
	acceptTerms: false as never,
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

	const handleSelectChange = (val: string) => {
		setValue('contactMethod', val, {
			shouldValidate: true,
			shouldTouch: true,
		});
	};

	const handleRadioChange = (val: string) => {
		setValue('subscription', val as SubscriptionType, {
			shouldValidate: true,
			shouldTouch: true,
		});
	};

	const handleCheckboxChange = (checked: DsCheckboxProps['checked']) => {
		setValue('acceptTerms', checked as never, {
			shouldValidate: true,
			shouldTouch: true,
		});
	};

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}
			>
				<DsFormControl
					label="Name"
					placeholder="Enter your name"
					required
					{...register('name', {
						onBlur: () => trigger('name'),
						onChange: () => trigger('name'),
					})}
					message={touchedFields.name ? errors.name?.message : undefined}
				/>

				<DsFormControl
					label="Email"
					placeholder="Enter your email"
					required
					type="email"
					{...register('email', {
						onBlur: () => trigger('email'),
						onChange: () => trigger('email'),
					})}
					message={touchedFields.email ? errors.email?.message : undefined}
				/>

				<Controller
					name="contactMethod"
					control={control}
					render={({ field }) => (
						<DsFormControl
							as="select"
							label="Preferred Contact Method"
							placeholder="Select a contact method"
							options={[
								{ label: 'Phone Call', value: 'phone', icon: 'call' },
								{ label: 'Email', value: 'email', icon: 'email' },
								{ label: 'SMS', value: 'sms', icon: 'sms' },
								{ label: 'In-App Notification', value: 'in_app', icon: 'notifications' },
							]}
							required
							value={field.value}
							onValueChange={handleSelectChange}
							onBlur={() => handleSelectChange(field.value)}
							message={touchedFields.contactMethod ? errors.contactMethod?.message : undefined}
						/>
					)}
				/>

				<DsFormControl
					as="textarea"
					label="Description"
					placeholder="Enter your description"
					required
					{...register('description', {
						onBlur: () => trigger('description'),
						onChange: () => trigger('description'),
					})}
					message={touchedFields.description ? errors.description?.message : undefined}
				/>

				<DsRadioGroup
					options={[
						{ label: 'Basic', value: 'basic' },
						{ label: 'Pro', value: 'pro' },
						{ label: 'Enterprise', value: 'enterprise' },
					]}
					value={watch('subscription') || ''}
					onValueChange={handleRadioChange}
				/>
				{errors.subscription && (
					<span style={{ color: 'red', fontSize: '12px' }}>{errors.subscription.message}</span>
				)}

				<DsCheckbox
					label="I accept the terms and conditions"
					checked={watch('acceptTerms')}
					onCheckedChange={handleCheckboxChange}
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
