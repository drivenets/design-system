import { z } from 'zod';

export type SubscriptionType = 'basic' | 'pro' | 'enterprise';
const subscriptionTypes = ['basic', 'pro', 'enterprise'] as const satisfies SubscriptionType[];

export const sampleFormSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	description: z.string().min(20, 'Short description is required (min. 20 chars)'),
	quantity: z
		.number('Quantity is required')
		.min(1, 'Quantity must be at least 1')
		.max(100, 'Quantity cannot exceed 100'),
	birthDate: z.date('Birth date is required'),
	eventStartDate: z.date('Event start date is required'),
	eventEndDate: z.date('Event end date is required'),
	acceptTerms: z.boolean().refine((v) => v, 'You must accept the terms and conditions'),
	subscription: z.enum(subscriptionTypes, {
		error: () => 'Please select a subscription plan',
	}),
	contactMethod: z.string().nonempty('Please select a contact method'),
});

export type SampleFormValues = z.infer<typeof sampleFormSchema>;
