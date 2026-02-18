import { expect, userEvent, waitFor, within } from 'storybook/test';

export type TestScenario = 'normal' | 'interrupted' | 'error';

export interface MockFileOptions {
	name?: string;
	type?: string;
	size?: number;
}

/**
 * Returns a mock file for testing
 */
export const getMockFile = (options: MockFileOptions = {}): File => {
	const {
		name = 'test-document.pdf',
		type = 'application/pdf',
		size = 1024 * 100, // 100KB
	} = options;

	const file = new File(['test content'], name, { type });
	Object.defineProperty(file, 'size', {
		value: size,
		writable: false,
	});
	return file;
};

/**
 * Creates a test play function for Storybook interaction testing
 * Tests the complete upload lifecycle including success, error, and retry scenarios
 */
export const createTestPlayFunction = (scenario: TestScenario) => {
	return async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const mockFile = getMockFile();

		// Find and upload file
		const fileInput = canvasElement.querySelector<HTMLInputElement>('input[type="file"]');

		if (!fileInput) {
			throw new Error('File input not found');
		}

		await userEvent.upload(fileInput, mockFile);

		// Test based on scenario
		switch (scenario) {
			case 'normal':
				await testNormalUpload(canvasElement);
				break;
			case 'interrupted':
				await testInterruptedUpload(canvasElement);
				break;
			case 'error':
				await testErrorUpload(canvasElement);
				break;
		}
	};
};

/**
 * Test normal upload flow - file uploads successfully
 */
async function testNormalUpload(canvasElement: HTMLElement) {
	const canvas = within(canvasElement);

	// Wait for upload to start
	await waitFor(
		() => {
			const uploadingText = canvas.queryByText(/Uploading/i);
			return expect(uploadingText).toBeInTheDocument();
		},
		{ timeout: 1000 },
	);

	// Wait for upload to complete
	await waitFor(
		() => {
			const completeText = canvas.queryByText(/complete/i);
			return expect(completeText).toBeInTheDocument();
		},
		{ timeout: 5000 },
	);

	// Test delete button
	const deleteButton = canvas.getByLabelText(/delete/i);
	await userEvent.click(deleteButton);

	// Verify file was removed
	await waitFor(() => {
		const fileName = canvas.queryByText('test-document.pdf');
		return expect(fileName).not.toBeInTheDocument();
	});
}

/**
 * Test interrupted upload flow - upload fails mid-way and can be retried
 */
async function testInterruptedUpload(canvasElement: HTMLElement) {
	const canvas = within(canvasElement);

	// Wait for upload to start
	await waitFor(
		() => {
			const uploadingText = canvas.queryByText(/Uploading/i);
			return expect(uploadingText).toBeInTheDocument();
		},
		{ timeout: 1000 },
	);

	// Wait for interruption
	await waitFor(
		() => {
			const interruptedText = canvas.queryByText(/interrupted|lost|failed/i);
			return expect(interruptedText).toBeInTheDocument();
		},
		{ timeout: 5000 },
	);

	// Find and click retry button
	const retryButton = canvas.getByLabelText(/retry/i);
	await userEvent.click(retryButton);

	// Wait for retry to complete
	// Note: Retry uses normal adapter so it should succeed
	await waitFor(
		() => {
			const completeText = canvas.queryByText(/complete/i);
			return expect(completeText).toBeInTheDocument();
		},
		{ timeout: 5000 },
	);

	// Test delete button
	const deleteButton = canvas.getByLabelText(/delete/i);
	await userEvent.click(deleteButton);
}

/**
 * Test error upload flow - upload fails immediately
 */
async function testErrorUpload(canvasElement: HTMLElement) {
	const canvas = within(canvasElement);

	// Wait for error to appear
	await waitFor(
		() => {
			const errorText = canvas.queryByText(/failed|error|unsupported/i);
			return expect(errorText).toBeInTheDocument();
		},
		{ timeout: 2000 },
	);

	// Test remove button
	const removeButton = canvas.getByLabelText(/remove/i);
	await userEvent.click(removeButton);

	// Verify file was removed
	await waitFor(() => {
		const fileName = canvas.queryByText('test-document.pdf');
		return expect(fileName).not.toBeInTheDocument();
	});
}
