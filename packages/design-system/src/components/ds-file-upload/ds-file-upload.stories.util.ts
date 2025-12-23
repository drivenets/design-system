import { expect, screen, userEvent, waitFor } from 'storybook/test';

export type TestScenario = 'normal' | 'interrupted' | 'error';

/**
 * Returns a mock file for testing
 */
const getMockFile = (): File => {
	const file = new File(['test content'], 'test-document.pdf', { type: 'application/pdf' });
	Object.defineProperty(file, 'size', {
		value: 1024 * 100, // 100KB
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
				await testNormalUpload();
				break;
			case 'interrupted':
				await testInterruptedUpload();
				break;
			case 'error':
				await testErrorUpload();
				break;
		}
	};
};

/**
 * Test normal upload flow - file uploads successfully
 */
async function testNormalUpload() {
	// Wait for upload to start
	await waitFor(
		() => {
			const uploadingText = screen.queryByText(/Uploading/i);
			return expect(uploadingText).toBeInTheDocument();
		},
		{ timeout: 1000 },
	);

	// Wait for upload to complete
	await waitFor(
		() => {
			const completeText = screen.queryByText(/complete/i);
			return expect(completeText).toBeInTheDocument();
		},
		{ timeout: 5000 },
	);

	// Test delete button
	const deleteButton = screen.getByLabelText(/delete/i);
	await userEvent.click(deleteButton);

	// Verify file was removed
	await waitFor(() => {
		const fileName = screen.queryByText('test-document.pdf');
		return expect(fileName).not.toBeInTheDocument();
	});
}

/**
 * Test interrupted upload flow - upload fails mid-way and can be retried
 */
async function testInterruptedUpload() {
	// Wait for upload to start
	await waitFor(
		() => {
			const uploadingText = screen.queryByText(/Uploading/i);
			return expect(uploadingText).toBeInTheDocument();
		},
		{ timeout: 1000 },
	);

	// Wait for interruption
	await waitFor(
		() => {
			const interruptedText = screen.queryByText(/interrupted|lost|failed/i);
			return expect(interruptedText).toBeInTheDocument();
		},
		{ timeout: 5000 },
	);

	// Find and click retry button
	const retryButton = screen.getByLabelText(/retry/i);
	await userEvent.click(retryButton);

	// Wait for retry to complete
	// Note: Retry uses normal adapter so it should succeed
	await waitFor(
		() => {
			const completeText = screen.queryByText(/complete/i);
			return expect(completeText).toBeInTheDocument();
		},
		{ timeout: 5000 },
	);

	// Test delete button
	const deleteButton = screen.getByLabelText(/delete/i);
	await userEvent.click(deleteButton);
}

/**
 * Test error upload flow - upload fails immediately
 */
async function testErrorUpload() {
	// Wait for error to appear
	await waitFor(
		() => {
			const errorText = screen.queryByText(/failed|error|unsupported/i);
			return expect(errorText).toBeInTheDocument();
		},
		{ timeout: 2000 },
	);

	// Test remove button
	const removeButton = screen.getByLabelText(/remove/i);
	await userEvent.click(removeButton);

	// Verify file was removed
	await waitFor(() => {
		const fileName = screen.queryByText('test-document.pdf');
		return expect(fileName).not.toBeInTheDocument();
	});
}
