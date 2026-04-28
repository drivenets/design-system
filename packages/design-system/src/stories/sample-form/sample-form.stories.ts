import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, spyOn, userEvent as _userEvent, waitFor, within } from 'storybook/test';
import { faker } from '@faker-js/faker';
import SampleForm from './sample-form';

const meta: Meta<typeof SampleForm> = {
	title: 'Examples/SampleForm',
	component: SampleForm,
	tags: ['!autodocs'],
	parameters: {
		layout: 'centered',
	},
};

const userEvent = _userEvent.setup({ delay: null });

export default meta;
type Story = StoryObj<typeof SampleForm>;

export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const alertSpy = spyOn(window, 'alert').mockImplementation(() => {});

		const waitForMessage = async (text: string) => {
			await waitFor(async () => {
				await expect(canvas.getByText(text)).toBeInTheDocument();
			});
		};

		const waitForMessageGone = async (text: string) => {
			await waitFor(async () => {
				await expect(canvas.queryByText(text)).not.toBeInTheDocument();
			});
		};

		// 1. Initial state: first field has no error message
		const nameInput = canvas.getByLabelText('Name');
		await expect(canvas.queryByText('Name is required')).not.toBeInTheDocument();

		// 2. Click submit on empty form to trigger validation on all fields
		const submitButton = canvas.getByRole('button', { name: /submit/i });
		await userEvent.click(submitButton);

		// 3. Name
		await waitForMessage('Name is required');
		const fakeName = `${faker.person.firstName()} ${faker.person.lastName()}`;
		await userEvent.type(nameInput, fakeName);
		await waitForMessageGone('Name is required');

		// 4. Email — invalid text keeps the message, valid email removes it
		const emailInput = canvas.getByPlaceholderText('Enter your email');
		await waitForMessage('Invalid email address');
		await userEvent.type(emailInput, 'invalid-email');
		await waitForMessage('Invalid email address');
		const fakeEmail = faker.internet.email();
		await userEvent.clear(emailInput);
		await userEvent.type(emailInput, fakeEmail);
		await waitForMessageGone('Invalid email address');

		// 5. Quantity — value below min keeps the message, valid value removes it
		const quantityInput = canvas.getByPlaceholderText('Enter quantity');
		await waitForMessage('Quantity is required');
		await userEvent.type(quantityInput, '0');
		await waitForMessage('Quantity must be at least 1');
		await userEvent.clear(quantityInput);
		await userEvent.type(quantityInput, '1');
		await waitForMessageGone('Quantity must be at least 1');

		// 6. Birth date
		const dateInputs = canvas.getAllByPlaceholderText('mm/dd/yyyy');
		const birthDateInput = dateInputs[0] as HTMLElement;
		const eventStartDateInput = dateInputs[1] as HTMLElement;
		const eventEndDateInput = dateInputs[2] as HTMLElement;

		await waitForMessage('Birth date is required');
		await userEvent.type(birthDateInput, '12/25/2002');
		await userEvent.tab();
		await waitForMessageGone('Birth date is required');

		// 7. Event start date
		await waitForMessage('Event start date is required');
		await userEvent.type(eventStartDateInput, '01/15/2025');
		await userEvent.tab();
		await waitForMessageGone('Event start date is required');

		// 8. Event end date
		await waitForMessage('Event end date is required');
		await userEvent.type(eventEndDateInput, '01/20/2025');
		await userEvent.tab();
		await waitForMessageGone('Event end date is required');

		// 9. Contact method
		await waitForMessage('Please select a contact method');
		const contactMethodTrigger = canvas.getByLabelText('Preferred Contact Method');
		await userEvent.click(contactMethodTrigger);
		const contactOption = screen.getByRole('option', { name: 'Email' });
		await userEvent.click(contactOption);
		await waitForMessageGone('Please select a contact method');

		// 10. Description — short text keeps the message, long text removes it
		const descriptionInput = canvas.getByLabelText('Description');
		await waitForMessage('Short description is required (min. 20 chars)');
		await userEvent.type(descriptionInput, 'Short text');
		await waitForMessage('Short description is required (min. 20 chars)');
		const fakeDescription = faker.lorem.sentence(5);
		await userEvent.clear(descriptionInput);
		await userEvent.type(descriptionInput, fakeDescription);
		await waitForMessageGone('Short description is required (min. 20 chars)');

		// 11. Subscription
		await waitForMessage('Please select a subscription plan');
		const subscriptionOption = canvas.getByLabelText('Pro');
		await userEvent.click(subscriptionOption);
		await waitForMessageGone('Please select a subscription plan');

		// 12. Accept terms — check hides, uncheck shows again, check hides again
		await waitForMessage('You must accept the terms and conditions');
		const acceptTermsCheckbox = canvas.getByLabelText('I accept the terms and conditions');
		await userEvent.click(acceptTermsCheckbox);
		await waitForMessageGone('You must accept the terms and conditions');
		await userEvent.click(acceptTermsCheckbox);
		await waitForMessage('You must accept the terms and conditions');
		await userEvent.click(acceptTermsCheckbox);
		await waitForMessageGone('You must accept the terms and conditions');

		// 13. Submit again — alert is shown with stringified form values
		await userEvent.click(submitButton);
		const expectedData = JSON.stringify(
			{
				name: fakeName,
				email: fakeEmail,
				description: fakeDescription,
				quantity: 1,
				birthDate: new Date(2002, 11, 25).toISOString(),
				eventStartDate: new Date(2025, 0, 15).toISOString(),
				eventEndDate: new Date(2025, 0, 20).toISOString(),
				acceptTerms: true,
				subscription: 'pro',
				contactMethod: 'email',
			},
			null,
			2,
		);

		await waitFor(async () => {
			await expect(alertSpy).toHaveBeenCalledWith(expectedData);
		});
	},
};
