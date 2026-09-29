import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { DsIcon } from '../../ds-icon';
import DsFormControl from '../ds-form-control';

const TYPED_VALUE = 'Hello world Design System!';

const LearnMoreDescription = () => (
	<DsFormControl.Description>
		This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
		<button type="button">Learn more</button> can be added.
	</DsFormControl.Description>
);

async function expectTypeAndClear(label: string) {
	const input = page.getByLabelText(label);

	await input.fill(TYPED_VALUE);
	await expect.element(input).toHaveValue(TYPED_VALUE);

	await input.clear();
	await expect.element(input).toHaveValue('');
}

describe('DsFormControl with TextInput', () => {
	it('should update and clear the value when typing', async () => {
		await page.render(
			<DsFormControl label="Input label" required message="This is a message">
				<DsFormControl.TextInput placeholder="Input" />
			</DsFormControl>,
		);

		await expect.element(page.getByText('This is a message')).toBeVisible();
		await expectTypeAndClear('Input label');
	});

	it('should wire an explicit id to the labelled control', async () => {
		await page.render(
			<DsFormControl id="email-field" label="Input label">
				<DsFormControl.TextInput placeholder="Input" />
			</DsFormControl>,
		);

		await expect.element(page.getByLabelText('Input label')).toHaveAttribute('id', 'email-field');
	});

	it('keeps the label as the accessible name when hideLabel is set', async () => {
		await page.render(
			<DsFormControl label="Input label" hideLabel>
				<DsFormControl.TextInput placeholder="Search" />
			</DsFormControl>,
		);

		await expect.element(page.getByRole('textbox', { name: 'Input label' })).toBeVisible();
	});

	it('describes a code input with the message', async () => {
		await page.render(
			<DsFormControl label="Query" status="error" message="Unknown field">
				<DsFormControl.CodeInput placeholder="Enter a query" />
			</DsFormControl>,
		);

		await expect.element(page.getByPlaceholder('Enter a query')).toHaveAccessibleDescription('Unknown field');
	});

	it('announces a message that appears after render', async () => {
		const { rerender } = await page.render(
			<DsFormControl label="Query">
				<DsFormControl.CodeInput placeholder="Enter a query" />
			</DsFormControl>,
		);

		const regionsBefore = [...document.querySelectorAll('[aria-live="polite"]')];

		await rerender(
			<DsFormControl label="Query" status="error" message="Unknown field">
				<DsFormControl.CodeInput placeholder="Enter a query" />
			</DsFormControl>,
		);

		await expect.element(page.getByText('Unknown field')).toBeVisible();

		// The live region is mounted with the form, before any message. A region that
		// appears together with the message is not announced by a screen reader.
		const region = page.getByText('Unknown field').element().closest('[aria-live="polite"]');

		expect(regionsBefore).toContain(region);
	});

	it('should support custom inline styles', async () => {
		await page.render(
			<DsFormControl label="Input label" required style={{ width: '300px' }}>
				<DsFormControl.TextInput placeholder="Input with custom width" />
			</DsFormControl>,
		);

		await expect.element(page.getByLabelText('Input label')).toBeVisible();
		await expectTypeAndClear('Input label');
	});

	it('should render a description alongside the input', async () => {
		await page.render(
			<DsFormControl label="Input label" required style={{ width: '300px' }}>
				<LearnMoreDescription />
				<DsFormControl.TextInput
					placeholder="Search"
					slots={{ startAdornment: <DsIcon icon="search" size="tiny" /> }}
				/>
			</DsFormControl>,
		);

		await expect.element(page.getByText(/This is a description text/i)).toBeVisible();
		await expect.element(page.getByRole('button', { name: 'Learn more' })).toBeVisible();
		await expectTypeAndClear('Input label');
	});

	it('should render an end adornment help action', async () => {
		await page.render(
			<DsFormControl
				label="Input label"
				required
				slots={{
					endAdornment: (
						<button type="button" aria-label="Help">
							<DsIcon icon="info" size="small" />
						</button>
					),
				}}
			>
				<LearnMoreDescription />
				<DsFormControl.TextInput
					placeholder="Search"
					slots={{ startAdornment: <DsIcon icon="search" size="tiny" /> }}
				/>
			</DsFormControl>,
		);

		await expect.element(page.getByRole('button', { name: 'Help' })).toBeVisible();
		await expectTypeAndClear('Input label');
	});

	it('should render a start adornment icon', async () => {
		await page.render(
			<DsFormControl label="Input label" required message="This is a message">
				<DsFormControl.TextInput
					placeholder="Input"
					slots={{ startAdornment: <DsIcon icon="call" size="tiny" /> }}
				/>
			</DsFormControl>,
		);

		await expect.element(page.getByLabelText('Input label')).toBeVisible();
		await expectTypeAndClear('Input label');
	});

	it.each([
		{
			status: 'success',
			message: 'This is a success caption under a text input.',
			messageIcon: 'check_circle',
		},
		{ status: 'error', message: 'This is an error caption under a text input.', messageIcon: 'error' },
		{ status: 'warning', message: 'This is a warning caption under a text input.', messageIcon: 'info' },
	] as const)('should display the $status status message', async ({ status, message, messageIcon }) => {
		await page.render(
			<DsFormControl label="Input label" status={status} message={message} messageIcon={messageIcon}>
				<LearnMoreDescription />
				<DsFormControl.TextInput />
			</DsFormControl>,
		);

		await expect.element(page.getByText(message)).toBeVisible();
		await expectTypeAndClear('Input label');
	});

	it('should be disabled and not editable', async () => {
		await page.render(
			<DsFormControl label="Input label" required>
				<DsFormControl.TextInput placeholder="Disabled Input" disabled />
			</DsFormControl>,
		);

		const input = page.getByLabelText('Input label');
		await expect.element(input).toBeDisabled();
		await expect.element(input).toHaveValue('');
	});
});
