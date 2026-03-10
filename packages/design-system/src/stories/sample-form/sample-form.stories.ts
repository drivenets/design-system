import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, spyOn, userEvent, waitFor, within } from 'storybook/test';
import { faker } from '@faker-js/faker';
import SampleForm from './sample-form';

const meta: Meta<typeof SampleForm> = {
	title: 'Examples/Simple form',
	component: SampleForm,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof SampleForm>;

export const Default: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const alertSpy = spyOn(window, 'alert').mockImplementation(() => {});

		// Helper function to wait for validation messages
		const waitForMessage = async (text: string) => {
			await waitFor(async () => {
				await expect(canvas.getByText(text)).toBeInTheDocument();
			});
		};

		// 1. Activate name and then blur it will show message
		const nameInput = canvas.getByLabelText('Name');
		await userEvent.click(nameInput);
		await userEvent.tab();
		await waitForMessage('Name is required');

		// 2. Activate email and then blur it will show message
		const emailInput = canvas.getByPlaceholderText('Enter your email');
		await userEvent.click(emailInput);
		await userEvent.tab();
		await waitForMessage('Invalid email address');

		// 3. Activate contact method and then blur it will show message
		const contactMethodTrigger = canvas.getByLabelText('Preferred Contact Method');
		await userEvent.click(contactMethodTrigger);
		// tab doesn't really work here
		await userEvent.keyboard('{Escape}');
		await userEvent.click(emailInput);
		await waitForMessage('Please select a contact method');

		// 4. Activate description and then blur it will show message
		const descriptionInput = canvas.getByLabelText('Description');
		await userEvent.click(descriptionInput);
		await userEvent.tab();
		await waitForMessage('Short description is required (min. 20 chars)');

		// 5. Checking acceptTerms and then uncheck will show message
		const acceptTermsCheckbox = canvas.getByLabelText('I accept the terms and conditions');
		await userEvent.click(acceptTermsCheckbox);
		await userEvent.click(acceptTermsCheckbox);
		await waitForMessage('You must accept the terms and conditions');

		// 6. Activate start date and then blur it will show message
		const startDateInput = canvas.getByPlaceholderText('MM/DD/YYYY');
		await userEvent.click(startDateInput);
		await userEvent.tab();
		await waitForMessage('Start date is required');

		// 7. Typing random text inside email will (still) show message
		await userEvent.type(emailInput, 'invalid-email');
		await waitForMessage('Invalid email address');

		// 8. Typing random email inside email will hide the message
		const fakeEmail = faker.internet.email();
		await userEvent.clear(emailInput);
		await userEvent.type(emailInput, fakeEmail);
		await waitFor(async () => {
			await expect(canvas.queryByText('Invalid email address')).not.toBeInTheDocument();
		});

		// 9. Typing name inside name will hide the message
		const fakeName = `${faker.person.firstName()} ${faker.person.lastName()}`;
		await userEvent.type(nameInput, fakeName);
		await waitFor(async () => {
			await expect(canvas.queryByText('Name is required')).not.toBeInTheDocument();
		});

		// 10. Selecting contactMethod inside contactMethod will hide the message
		await userEvent.click(contactMethodTrigger);
		const contactOption = screen.getByRole('option', { name: 'Email' });
		await userEvent.click(contactOption);
		await waitFor(async () => {
			await expect(canvas.queryByText('Please select a contact method')).not.toBeInTheDocument();
		});

		// 11. Typing a valid date in start date will hide the message
		await userEvent.clear(startDateInput);
		const fakeDate = '12/25/2024';
		await userEvent.type(startDateInput, fakeDate);
		await userEvent.tab(); // Blur to trigger validation
		await waitFor(async () => {
			await expect(canvas.queryByText('Start date is required')).not.toBeInTheDocument();
		});

		// 12. Typing random text (less than 20 chars) inside description will (still) show message
		await userEvent.type(descriptionInput, 'Short text');
		await waitForMessage('Short description is required (min. 20 chars)');

		// 13. Typing random text (more than 20 chars) inside description will hide the message
		const fakeDescription = faker.lorem.sentence(5);
		await userEvent.clear(descriptionInput);
		await userEvent.type(descriptionInput, fakeDescription);
		await waitFor(async () => {
			await expect(
				canvas.queryByText('Short description is required (min. 20 chars)'),
			).not.toBeInTheDocument();
		});

		// 14. Checking acceptTerms will hide the message
		await userEvent.click(acceptTermsCheckbox);
		await waitFor(async () => {
			await expect(canvas.queryByText('You must accept the terms and conditions')).not.toBeInTheDocument();
		});

		// 15. Submit still disabled when subscription not selected
		const submitButton = canvas.getByRole('button', { name: /submit/i });
		await expect(submitButton).toBeDisabled();

		// 16. When subscription selected submit will be enabled
		const subscriptionOption = canvas.getByLabelText('Pro');
		await userEvent.click(subscriptionOption);
		await waitFor(async () => {
			await expect(submitButton).toBeEnabled();
		});

		// 17. Clicking submit will show alert containing stringified json of the values
		await userEvent.click(submitButton);
		const expectedData = JSON.stringify(
			{
				name: fakeName,
				email: fakeEmail,
				description: fakeDescription,
				quantity: 1,
				startDate: '2024-12-25',
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

		// 18. When closing the alert form is empty again (reset)
		await waitFor(async () => {
			await expect(nameInput).toHaveValue('');
			await expect(emailInput).toHaveValue('');
			await expect(contactMethodTrigger).toHaveTextContent(/Select a contact method|^$/);
			await expect(descriptionInput).toHaveValue('');
			await expect(startDateInput).toHaveValue('');
			await expect(acceptTermsCheckbox).not.toBeChecked();
			await expect(subscriptionOption).not.toBeChecked();
		});
	},
};
