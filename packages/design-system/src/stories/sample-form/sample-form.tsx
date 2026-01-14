import {
	type ControllerRenderProps,
	type SubmitHandler,
	Controller,
	FormProvider,
	useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DsFormControl } from '../../components/ds-form-control';
import { DsRadioGroup } from '../../components/ds-radio-group';
import { DsCheckbox } from '../../components/ds-checkbox';
import { DsButton } from '../../components/ds-button';
import { sampleFormSchema, type SampleFormValues } from './sample-form-schema';

const defaultValues = {
	name: '',
	email: '',
	description: '',
	quantity: undefined,
	startDate: undefined,
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
		reset(defaultValues as never);
	};

	const handleValueChange = (
		field: ControllerRenderProps<SampleFormValues> | keyof SampleFormValues,
		value: string | number | true | undefined,
	) => {
		const name = typeof field === 'string' ? field : field.name;
		setValue(name, value ?? '', {
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
					message={touchedFields.name ? errors.name?.message : ''}
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
					message={touchedFields.email ? errors.email?.message : ''}
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
					message={touchedFields.quantity ? errors.quantity?.message : ''}
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
					label="Start Date"
					required
					status="error"
					messageIcon="cancel"
					message={touchedFields.startDate ? errors.startDate?.message : undefined}
				>
					<Controller
						name="startDate"
						control={control}
						render={({ field }) => (
							<DsFormControl.DateInput
								value={field.value}
								onValueChange={(value) => handleValueChange(field, value as string)}
							/>
						)}
					/>
				</DsFormControl>

				<DsFormControl
					label="Preferred Contact Method"
					required
					status="error"
					messageIcon="cancel"
					message={touchedFields.contactMethod ? errors.contactMethod?.message : ''}
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
								clearable
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
					message={touchedFields.description ? errors.description?.message : ''}
				>
					<DsFormControl.Textarea
						placeholder="Enter your description"
						{...register('description', {
							onBlur: () => trigger('description'),
							onChange: () => trigger('description'),
						})}
					/>
				</DsFormControl>

				<DsRadioGroup.Root
					value={watch('subscription')}
					onValueChange={(value) => handleValueChange('subscription', value as string)}
				>
					<DsRadioGroup.Item value="basic" label="Basic" />
					<DsRadioGroup.Item value="pro" label="Pro" />
					<DsRadioGroup.Item value="enterprise" label="Enterprise" />
				</DsRadioGroup.Root>
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
