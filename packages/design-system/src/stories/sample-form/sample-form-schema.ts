import { z } from 'zod';

export type SubscriptionType = 'basic' | 'pro' | 'enterprise';
const subscriptionTypes = ['basic', 'pro', 'enterprise'] as const satisfies SubscriptionType[];

export const sampleFormSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.email('Invalid email address'),
	description: z.string().min(20, 'Short description is required (min. 20 chars)'),
	quantity: z.number().min(1, 'Quantity must be at least 1').max(100, 'Quantity cannot exceed 100'),
	birthDate: z.iso.datetime('Birth date is required'),
	acceptTerms: z.boolean().refine((v) => v, 'You must accept the terms and conditions'),
	subscription: z.enum(subscriptionTypes, {
		error: () => 'Please select a subscription plan',
	}),
	contactMethod: z.string().nonempty('Please select a contact method'),
	eventStartDate: z.iso.datetime('Event start date is required'),
	eventEndDate: z.iso.datetime('Event end date is required'),
});

export type SampleFormValues = z.infer<typeof sampleFormSchema>;
