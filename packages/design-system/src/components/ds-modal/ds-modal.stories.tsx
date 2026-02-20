import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, screen, userEvent, waitFor, within } from 'storybook/test';
import { useState } from 'react';
import { Dialog } from '@ark-ui/react/dialog';
import { faker } from '@faker-js/faker';
import { type SubmitHandler, Controller, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DsModal from './ds-modal';
import styles from './ds-modal.stories.module.scss';
import { DsButton } from '../ds-button';
import { DsFormControl } from '../ds-form-control';
import { DsRadioGroup } from '../ds-radio-group';
import { DsCheckbox } from '../ds-checkbox';
import { DsIcon } from '../ds-icon';

const meta: Meta<typeof DsModal> = {
	title: 'Design System/Modal',
	component: DsModal,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		open: false,
	},
	argTypes: {
		open: {
			control: 'boolean',
			description: 'Controls whether the modal is open',
		},
		dividers: {
			control: 'boolean',
			description: 'Show full-width dividers between header, body, and footer sections',
		},
		columns: {
			control: 'select',
			options: Array(12)
				.fill(0)
				.map((_, i) => i + 1),
			description: 'Number of grid columns for modal width',
		},
		className: {
			control: 'text',
			description: 'Additional CSS class names',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DsModal>;

// Form schema for the modal
const modalFormSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.email('Invalid email address'),
	department: z.string().min(1, 'Please select a department'),
	role: z.string().min(1, 'Please select a role'),
	description: z.string().min(20, 'Description must be at least 20 characters'),
	acceptTerms: z.boolean().refine((v) => v, 'You must accept the terms and conditions'),
	subscription: z.enum(['basic', 'pro', 'enterprise'], {
		error: () => 'Please select a subscription plan',
	}),
});

type ModalFormValues = z.infer<typeof modalFormSchema>;

const defaultFormValues: ModalFormValues = {
	name: '',
	email: '',
	department: '',
	role: '',
	description: '',
	acceptTerms: false,
	subscription: 'basic' as const,
};

export const Default: Story = {
	render: function Render() {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div className={styles.storyContainer}>
				<div className={styles.storyHeader}>
					<h2>Default Modal</h2>
					<p>The default variant has an inset header underline and no footer border.</p>
					<DsButton design="v1.2" size="large" onClick={() => setIsOpen(true)}>
						Open Modal
					</DsButton>
				</div>

				<DsModal open={isOpen} columns={4} onOpenChange={setIsOpen}>
					<DsModal.Header>
						<DsModal.Title>Modal Title</DsModal.Title>
						<DsModal.CloseTrigger />
					</DsModal.Header>
					<DsModal.Body>
						<p>This is the default modal variant with simple content.</p>
					</DsModal.Body>
					<DsModal.Footer>
						<DsModal.Actions>
							<DsButton design="v1.2" buttonType="secondary" size="large" onClick={() => setIsOpen(false)}>
								Cancel
							</DsButton>
							<DsButton design="v1.2" variant="filled" size="large" onClick={() => setIsOpen(false)}>
								Confirm
							</DsButton>
						</DsModal.Actions>
					</DsModal.Footer>
				</DsModal>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const openModalButton = canvas.getByRole('button', { name: /open modal/i });
		await userEvent.click(openModalButton);

		await waitFor(() => {
			return expect(screen.getByRole('dialog')).toBeVisible();
		});

		await expect(screen.getByRole('heading', { name: /modal title/i })).toBeVisible();

		const confirmButton = screen.getByRole('button', { name: /confirm/i });
		await userEvent.click(confirmButton);

		await waitFor(() => {
			return expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
		});
	},
	parameters: {
		docs: {
			description: {
				story: 'Default modal variant with inset header underline and no footer border.',
			},
		},
	},
};

export const Divided: Story = {
	render: function Render() {
		const [isOpen, setIsOpen] = useState(false);
		const [submittedData, setSubmittedData] = useState<ModalFormValues | null>(null);

		const methods = useForm<ModalFormValues>({
			resolver: zodResolver(modalFormSchema),
			defaultValues: defaultFormValues,
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

		const onSubmit: SubmitHandler<ModalFormValues> = (data: ModalFormValues) => {
			setSubmittedData(data);
			setIsOpen(false);
			reset(defaultFormValues);
		};

		const handleReset = () => {
			reset(defaultFormValues);
		};

		const handleValueChange = (field: keyof ModalFormValues, value: string | boolean | null) => {
			setValue(field, value === 'indeterminate' ? false : (value as ModalFormValues[typeof field]), {
				shouldValidate: true,
				shouldTouch: true,
				shouldDirty: true,
			});
		};

		return (
			<div className={styles.storyContainer}>
				<div className={styles.storyHeader}>
					<h2>Interactive Form Modal Demo</h2>
					<p>
						Click the button below to open a form modal. Fill out the form and click &#34;Save Changes&#34; to
						see the results displayed here.
					</p>
					<DsButton design="v1.2" size="large" onClick={() => setIsOpen(true)}>
						Open Form Modal
					</DsButton>
				</div>

				{submittedData && (
					<div className={styles.formResults}>
						<h3 className={styles.formResultsTitle}>Form Results:</h3>
						<div className={styles.formResultsGrid}>
							<div>
								<strong>Name:</strong> {submittedData.name}
							</div>
							<div>
								<strong>Email:</strong> {submittedData.email}
							</div>
							<div>
								<strong>Department:</strong> {submittedData.department}
							</div>
							<div>
								<strong>Role:</strong> {submittedData.role || 'Not specified'}
							</div>
							<div>
								<strong>Description:</strong> {submittedData.description}
							</div>
							<div>
								<strong>Subscription:</strong> {submittedData.subscription}
							</div>
							<div>
								<strong>Terms Accepted:</strong> {submittedData.acceptTerms ? 'Yes' : 'No'}
							</div>
						</div>
						<DsButton
							design="v1.2"
							buttonType="secondary"
							size="small"
							onClick={() => setSubmittedData(null)}
							className={styles.clearResultsButton}
						>
							Clear Results
						</DsButton>
					</div>
				)}

				<DsModal open={isOpen} columns={8} dividers onOpenChange={setIsOpen}>
					<DsModal.Header>
						<DsModal.Title>User Profile Form</DsModal.Title>
						<DsModal.CloseTrigger />
					</DsModal.Header>
					<DsModal.Body>
						<FormProvider {...methods}>
							<div className={styles.formSection}>
								{/* Basic Information Section */}
								<div>
									<h3 className={styles.formSectionTitle}>Basic Information</h3>
									<div className={styles.formGrid}>
										<DsFormControl
											label="Full Name"
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
														placeholder="Enter full name"
														onChange={(event) => handleValueChange('name', event.target.value)}
														onBlur={(event) => handleValueChange('name', event.target.value)}
													/>
												)}
											/>
										</DsFormControl>
										<DsFormControl
											label="Email Address"
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
														placeholder="Enter email address"
														onChange={(event) => handleValueChange('email', event.target.value)}
														onBlur={(event) => handleValueChange('email', event.target.value)}
													/>
												)}
											/>
										</DsFormControl>
									</div>
								</div>

								{/* Work Information Section */}
								<div>
									<h3 className={styles.formSectionTitle}>Work Information</h3>
									<div className={styles.formGrid}>
										<DsFormControl
											label="Department"
											required
											status="error"
											messageIcon="cancel"
											message={touchedFields.department ? errors.department?.message : undefined}
										>
											<Controller
												name="department"
												control={control}
												render={({ field }) => (
													<DsFormControl.Select
														value={field.value}
														placeholder="Select a department"
														options={[
															{ label: 'Engineering', value: 'engineering' },
															{ label: 'Product', value: 'product' },
															{ label: 'Design', value: 'design' },
															{ label: 'Marketing', value: 'marketing' },
															{ label: 'Sales', value: 'sales' },
															{ label: 'HR', value: 'hr' },
														]}
														clearable
														onValueChange={(value) => handleValueChange('department', value)}
														onBlur={() => handleValueChange('department', field.value)}
													/>
												)}
											/>
										</DsFormControl>
										<DsFormControl
											label="Role"
											required
											status="error"
											messageIcon="cancel"
											message={touchedFields.role ? errors.role?.message : undefined}
										>
											<Controller
												name="role"
												control={control}
												render={({ field }) => (
													<DsFormControl.Select
														value={field.value}
														placeholder="Select a role"
														options={[
															{ label: 'Manager', value: 'manager' },
															{ label: 'Senior', value: 'senior' },
															{ label: 'Mid-level', value: 'mid' },
															{ label: 'Junior', value: 'junior' },
															{ label: 'Intern', value: 'intern' },
														]}
														clearable
														onValueChange={(value) => handleValueChange('role', value)}
														onBlur={() => handleValueChange('role', field.value)}
													/>
												)}
											/>
										</DsFormControl>
									</div>
								</div>

								{/* Subscription Section */}
								<div>
									<h3 className={styles.formSectionTitle}>Subscription Plan</h3>
									<DsRadioGroup.Root
										value={watch('subscription')}
										onValueChange={(value) => handleValueChange('subscription', value)}
									>
										<DsRadioGroup.Item value="basic" label="Basic" />
										<DsRadioGroup.Item value="pro" label="Pro" />
										<DsRadioGroup.Item value="enterprise" label="Enterprise" />
									</DsRadioGroup.Root>
									{errors.subscription && (
										<span className={styles.errorMessage}>{errors.subscription.message}</span>
									)}
								</div>

								{/* Additional Information Section */}
								<div>
									<h3 className={styles.formSectionTitle}>Additional Information</h3>
									<DsFormControl
										label="Description"
										required
										status="error"
										messageIcon="cancel"
										message={touchedFields.description ? errors.description?.message : undefined}
									>
										<DsFormControl.Textarea
											placeholder="Enter a brief description about the user (min. 20 characters)..."
											{...register('description', {
												onBlur: () => trigger('description'),
												onChange: () => trigger('description'),
											})}
										/>
									</DsFormControl>
								</div>

								{/* Terms and Conditions */}
								<div>
									<DsCheckbox
										label="I accept the terms and conditions"
										checked={watch('acceptTerms')}
										onCheckedChange={(value) => handleValueChange('acceptTerms', value)}
									/>
									{errors.acceptTerms && (
										<span className={styles.errorMessage}>{errors.acceptTerms.message}</span>
									)}
								</div>
							</div>
						</FormProvider>
					</DsModal.Body>
					<DsModal.Footer>
						<DsModal.Actions>
							<DsButton design="v1.2" buttonType="secondary" size="large" onClick={handleReset}>
								Reset
							</DsButton>
							<DsButton
								design="v1.2"
								size="large"
								disabled={!isDirty || !isValid}
								onClick={handleSubmit(onSubmit)}
							>
								Save Changes
							</DsButton>
						</DsModal.Actions>
					</DsModal.Footer>
				</DsModal>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const waitForMessage = async (text: string) => {
			await waitFor(() => {
				return expect(screen.getByText(text)).toBeInTheDocument();
			});
		};

		const openModalButton = canvas.getByRole('button', { name: /open form modal/i });
		await userEvent.click(openModalButton);

		await waitFor(() => {
			return expect(screen.getByText('User Profile Form')).toBeVisible();
		});

		// 2. Test form validation by interacting with fields and blurring them
		// Test name field validation
		const nameInput = screen.getByLabelText('Full Name');
		await userEvent.click(nameInput);
		await userEvent.tab();
		await waitForMessage('Name is required');

		// Test email field validation
		const emailInput = screen.getByLabelText('Email Address');
		await userEvent.click(emailInput);
		await userEvent.tab();
		await waitForMessage('Invalid email address');

		// Test department field validation
		const departmentSelect = screen.getByLabelText('Department');
		await userEvent.click(departmentSelect);
		await userEvent.tab();
		await waitForMessage('Please select a department');

		// Test role field validation
		const roleSelect = screen.getByLabelText('Role');
		await userEvent.click(roleSelect);
		await userEvent.tab();
		await waitForMessage('Please select a role');

		// Test description field validation
		const descriptionInput = screen.getByLabelText('Description');
		await userEvent.click(descriptionInput);
		await userEvent.tab();
		await waitForMessage('Description must be at least 20 characters');

		// Test terms checkbox validation
		const acceptTermsCheckbox = screen.getByLabelText('I accept the terms and conditions');
		await userEvent.click(acceptTermsCheckbox);
		await userEvent.click(acceptTermsCheckbox);
		await waitForMessage('You must accept the terms and conditions');

		// 3. Fill out the form with valid data
		// Fill name
		const fakeName = `${faker.person.firstName()} ${faker.person.lastName()}`;
		await userEvent.type(nameInput, fakeName);
		await waitFor(() => {
			return expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
		});

		// Fill email
		const fakeEmail = faker.internet.email();
		await userEvent.clear(emailInput);
		await userEvent.type(emailInput, fakeEmail);
		await waitFor(() => {
			return expect(screen.queryByText('Invalid email address')).not.toBeInTheDocument();
		});

		// Select department
		await userEvent.click(departmentSelect);
		const departmentOption = screen.getByRole('option', { name: 'Product' });
		await userEvent.click(departmentOption);
		await waitFor(() => {
			return expect(screen.queryByText('Please select a department')).not.toBeInTheDocument();
		});

		// Select role
		await userEvent.click(roleSelect);
		const roleOption = screen.getByRole('option', { name: 'Manager' });
		await userEvent.click(roleOption);
		await waitFor(() => {
			return expect(screen.queryByText('Please select a role')).not.toBeInTheDocument();
		});

		// Fill description
		const fakeDescription = faker.lorem.sentence(5);
		await userEvent.clear(descriptionInput);
		await userEvent.type(descriptionInput, fakeDescription);
		await waitFor(() => {
			return expect(screen.queryByText('Description must be at least 20 characters')).not.toBeInTheDocument();
		});

		// Select subscription
		const subscriptionOption = screen.getByLabelText('Pro');
		await userEvent.click(subscriptionOption);
		await waitFor(() => {
			return expect(screen.queryByText('Please select a subscription plan')).not.toBeInTheDocument();
		});

		// Accept terms
		await userEvent.click(acceptTermsCheckbox);
		await waitFor(() => {
			return expect(screen.queryByText('You must accept the terms and conditions')).not.toBeInTheDocument();
		});

		// 4. Verify submit button is enabled
		const saveButton = screen.getByRole('button', { name: /save changes/i });
		await waitFor(() => {
			return expect(saveButton).toBeEnabled();
		});

		// 5. Submit the form
		await userEvent.click(saveButton);

		// 6. Verify modal is closed and results are displayed
		await waitFor(() => {
			return expect(screen.queryByText('User Profile Form')).not.toBeVisible();
		});

		const checkResult = (text: string) => {
			return expect(
				canvas.getByText((content, element) => {
					return element?.textContent === text;
				}),
			).toBeInTheDocument();
		};

		// Verify results are displayed
		await waitFor(async () => {
			await expect(canvas.getByText('Form Results:')).toBeInTheDocument();
			await checkResult(`Name: ${fakeName}`);
			await checkResult(`Email: ${fakeEmail}`);
			await checkResult('Role: manager');
			await checkResult('Department: product');
			await checkResult(`Description: ${fakeDescription}`);
			await checkResult('Subscription: pro');
			await checkResult('Terms Accepted: Yes');
		});

		// 7. Test reset functionality
		await userEvent.click(openModalButton);
		await waitFor(() => {
			return expect(screen.getByText('User Profile Form')).toBeInTheDocument();
		});

		// Verify form is reset to default values
		await waitFor(async () => {
			await expect(nameInput).toHaveValue('');
			await expect(emailInput).toHaveValue('');
			await expect(descriptionInput).toHaveValue('');
			await expect(acceptTermsCheckbox).not.toBeChecked();
		});

		// 8. Test reset button
		// Fill some data first
		await userEvent.type(nameInput, 'Test Name');
		await userEvent.type(emailInput, 'test@example.com');
		await userEvent.type(descriptionInput, 'This is a test description that is long enough');
		await userEvent.click(acceptTermsCheckbox);

		// Click reset button
		const resetButton = screen.getByRole('button', { name: /reset/i });
		await userEvent.click(resetButton);

		// Verify form is reset
		await waitFor(async () => {
			await expect(nameInput).toHaveValue('');
			await expect(emailInput).toHaveValue('');
			await expect(descriptionInput).toHaveValue('');
			await expect(acceptTermsCheckbox).not.toBeChecked();
		});

		// Exit the modal form
		await userEvent.keyboard('{Escape}');

		// 9. Test clear results functionality
		await userEvent.click(canvas.getByRole('button', { name: /clear results/i }));
		await waitFor(() => {
			return expect(canvas.queryByText('Form Results:')).not.toBeInTheDocument();
		});
	},
	parameters: {
		docs: {
			description: {
				story:
					'The divided layout adds full-width borders on header and footer for clear visual separation. This example demonstrates form state management using react-hook-form with Zod validation.',
			},
		},
	},
};

// Custom story - Button-launched modal with custom header and footer
export const Custom: Story = {
	render: function Render() {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div className={styles.storyContainer}>
				<div className={styles.storyHeader}>
					<h2>Custom Modal Demo</h2>
					<p>Click the button below to open a custom modal with custom header and footer content.</p>
					<DsButton design="v1.2" size="large" onClick={() => setIsOpen(true)}>
						Open Custom Modal
					</DsButton>
				</div>

				<DsModal open={isOpen} columns={4} dividers onOpenChange={setIsOpen}>
					<DsModal.Header>
						<div className={styles.customHeader}>
							<button className={styles.headerButton}>⋯</button>
							<Dialog.CloseTrigger className={styles.headerButton}>✕</Dialog.CloseTrigger>
						</div>
					</DsModal.Header>
					<DsModal.Body>
						<div className={styles.formSection}>
							{/* First Section */}
							<div>
								<h3 className={styles.formSectionTitle}>Project Details</h3>
								<div className={styles.formGrid}>
									<div>
										<label htmlFor="project-name" className={styles.inputLabel}>
											Project Name
										</label>
										<input
											id="project-name"
											type="text"
											placeholder="Enter project name"
											className={styles.inputField}
										/>
									</div>
									<div>
										<label htmlFor="category" className={styles.inputLabel}>
											Category
										</label>
										<input
											id="category"
											type="text"
											placeholder="Select category"
											className={styles.inputField}
										/>
									</div>
								</div>
							</div>

							{/* Second Section */}
							<div>
								<h3 className={styles.formSectionTitle}>Team Information</h3>
								<div className={styles.formGrid}>
									<div>
										<label htmlFor="team-lead" className={styles.inputLabel}>
											Team Lead
										</label>
										<input
											id="team-lead"
											type="text"
											placeholder="Enter team lead name"
											className={styles.inputField}
										/>
									</div>
									<div>
										<label htmlFor="team-size" className={styles.inputLabel}>
											Team Size
										</label>
										<input
											id="team-size"
											type="text"
											placeholder="Number of team members"
											className={styles.inputField}
										/>
									</div>
								</div>
							</div>

							{/* Third Group */}
							<div>
								<div className={styles.formGridThree}>
									<div>
										<label htmlFor="budget" className={styles.inputLabel}>
											Budget
										</label>
										<input
											id="budget"
											type="text"
											placeholder="Enter budget amount"
											className={styles.inputField}
										/>
									</div>
									<div>
										<label htmlFor="timeline" className={styles.inputLabel}>
											Timeline
										</label>
										<input
											id="timeline"
											type="text"
											placeholder="Project duration"
											className={styles.inputField}
										/>
									</div>
									<button className={styles.addButton}>+</button>
								</div>
							</div>

							{/* File Upload Section */}
							<div>
								<h3 className={styles.formSectionTitle}>Project Documents</h3>
								<div className={styles.fileUploadArea}>
									<button className={styles.uploadButton}>☁️ Upload file</button>
									<div className={styles.uploadText}>or drag and drop to upload</div>
								</div>
							</div>
						</div>
					</DsModal.Body>
					<DsModal.Footer>
						<div className={styles.customFooter}>
							<div className={styles.statusBadge}>All done</div>
							<DsModal.Actions className={styles.customActions}>
								<button className={styles.footerButton}>Discard</button>
								<button className={styles.footerButtonPrimary}>Save Changes</button>
							</DsModal.Actions>
						</div>
					</DsModal.Footer>
				</DsModal>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const openButton = canvas.getByRole('button', { name: /open custom modal/i });
		await userEvent.click(openButton);

		await waitFor(() => {
			return expect(screen.getByRole('dialog')).toBeVisible();
		});

		await expect(screen.getByText('Project Details')).toBeVisible();

		const closeButton = screen.getByRole('button', { name: /✕/i });
		await userEvent.click(closeButton);

		await waitFor(() => {
			return expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
		});
	},
	parameters: {
		docs: {
			description: {
				story:
					'A custom modal with custom header and footer content, demonstrating how to override the default modal structure with custom components.',
			},
		},
	},
};

export const WithIcon: Story = {
	render: function Render() {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div className={styles.storyContainer}>
				<div className={styles.storyHeader}>
					<h2>Modal with Icon</h2>
					<p>Example showing how to add an icon to the modal header.</p>
					<DsButton design="v1.2" size="large" onClick={() => setIsOpen(true)}>
						Open Modal
					</DsButton>
				</div>

				<DsModal open={isOpen} columns={4} onOpenChange={setIsOpen}>
					<DsModal.Header>
						<DsIcon icon="info" size="small" />
						<DsModal.Title>Session Timeout</DsModal.Title>
						<DsModal.CloseTrigger />
					</DsModal.Header>
					<DsModal.Body>
						<p>Your session will expire in 5 minutes due to inactivity.</p>
					</DsModal.Body>
				</DsModal>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const openModalButton = canvas.getByRole('button', { name: /open modal/i });
		await userEvent.click(openModalButton);

		await waitFor(() => {
			return expect(screen.getByRole('dialog')).toBeVisible();
		});

		await expect(screen.getByRole('heading', { name: /session timeout/i })).toBeVisible();
		await expect(screen.getByText(/session will expire/i)).toBeVisible();

		await userEvent.keyboard('{Escape}');

		await waitFor(() => {
			return expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
		});
	},
	parameters: {
		docs: {
			description: {
				story:
					'Example showing how to add an icon to the modal header by composing DsIcon with DsModal.Header.',
			},
		},
	},
};

export const WithoutHeader: Story = {
	render: function Render() {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div className={styles.storyContainer}>
				<div className={styles.storyHeader}>
					<h2>Modal Without Header</h2>
					<p>Modal with only body and footer content, no header section.</p>
					<DsButton design="v1.2" size="large" onClick={() => setIsOpen(true)}>
						Open Modal
					</DsButton>
				</div>

				<DsModal open={isOpen} columns={4} onOpenChange={setIsOpen}>
					<DsModal.Body>
						<p>
							This modal has no header section. Use this pattern when you want a cleaner look without the
							header underline.
						</p>
					</DsModal.Body>
					<DsModal.Footer>
						<DsModal.Actions>
							<DsButton design="v1.2" buttonType="secondary" size="large" onClick={() => setIsOpen(false)}>
								Close
							</DsButton>
							<DsButton design="v1.2" variant="filled" size="large" onClick={() => setIsOpen(false)}>
								Continue
							</DsButton>
						</DsModal.Actions>
					</DsModal.Footer>
				</DsModal>
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const openModalButton = canvas.getByRole('button', { name: /open modal/i });
		await userEvent.click(openModalButton);

		await waitFor(() => {
			return expect(screen.getByRole('dialog')).toBeVisible();
		});

		const dialog = screen.getByRole('dialog');
		await expect(within(dialog).getByText(/no header section/i)).toBeVisible();

		const continueButton = screen.getByRole('button', { name: /continue/i });
		await expect(continueButton).toBeVisible();

		await userEvent.click(continueButton);

		await waitFor(() => {
			return expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
		});
	},
	parameters: {
		docs: {
			description: {
				story:
					'Modal without a header component - use this pattern instead of a variant when you want no header underline.',
			},
		},
	},
};
