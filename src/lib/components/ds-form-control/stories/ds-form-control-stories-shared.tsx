import { expect, userEvent, within } from 'storybook/test';

const message = 'Hello world Design System!';

export const DefaultDescription = () => (
	<>
		This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
		<button
			type="button"
			style={{
				background: 'none',
				border: 'none',
				padding: 0,
				margin: 0,
				cursor: 'pointer',
				color: 'var(--color-icon-primary)',
				textDecoration: 'underline',
				fontSize: 'inherit',
				fontFamily: 'inherit',
			}}
			onClick={() => alert('Learn more clicked!')}
		>
			Learn more
		</button>{' '}
		can be added.
	</>
);

export const sanityCheck = async <T extends HTMLInputElement | HTMLTextAreaElement>(
	canvasElement: HTMLElement,
) => {
	const canvas = within(canvasElement);
	const input = canvas.getByLabelText(/Input label.*/i) as T;

	// Simulate typing into the input field
	await userEvent.type(input, message);

	// Assert that the input value has been updated
	await expect(input.value).toBe(message);

	// Clear the input field
	await userEvent.clear(input);

	// Assert that the input value has been cleared
	await expect(input.value).toBe('');
};

export const checkDisabled = async <T extends HTMLInputElement | HTMLTextAreaElement>(
	canvasElement: HTMLElement,
) => {
	const canvas = within(canvasElement);
	const input = canvas.getByLabelText(/Input label.*/i) as T;

	// Assert that the input is disabled
	await expect(input).toBeDisabled();

	// Attempt to type into the disabled input
	await userEvent.type(input, 'Should not type');

	// Assert that the input value remains unchanged
	await expect(input.value).toBe('');
};
