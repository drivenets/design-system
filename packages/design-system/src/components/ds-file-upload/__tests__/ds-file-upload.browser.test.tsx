import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { DsFileUpload } from '..';
import { MockFileUploadAdapter } from '../stories/adapters/mock-file-upload-adapter';

const uploadTestFile = (name = 'test-document') => {
	const input = document.querySelector('input[type="file"]') as HTMLInputElement;
	const inputLocator = page.elementLocator(input);

	const file = new File([name], `${name}.pdf`, { type: 'application/pdf' });

	return userEvent.upload(inputLocator, file);
};

const fastAdapter = () => new MockFileUploadAdapter({ scenario: 'success', duration: 50, steps: 2 });

const slowAdapter = () => new MockFileUploadAdapter({ scenario: 'success', duration: 5000, steps: 10 });

describe('DsFileUpload', () => {
	describe('rendering', () => {
		it('should render the select file trigger button', async () => {
			await page.render(<DsFileUpload adapter={fastAdapter()} />);

			await expect.element(page.getByRole('button', { name: /select file/i })).toBeInTheDocument();
		});

		it('should hide info text when hideInfoText is true', async () => {
			await page.render(<DsFileUpload adapter={fastAdapter()} hideInfoText />);

			await expect.element(page.getByRole('button', { name: /select file/i })).toBeInTheDocument();
			await expect.element(page.getByText(/Only/)).not.toBeInTheDocument();
		});
	});

	describe('upload lifecycle', () => {
		it('should auto-upload file and show completion', async () => {
			const onFileUploadComplete = vi.fn();

			await page.render(<DsFileUpload adapter={fastAdapter()} onFileUploadComplete={onFileUploadComplete} />);

			await uploadTestFile();

			await expect.element(page.getByText('test-document.pdf')).toBeInTheDocument();
			await expect.element(page.getByText('Upload complete')).toBeInTheDocument();
			expect(onFileUploadComplete).toHaveBeenCalled();
		});

		it('should delete a completed file', async () => {
			const onFileDeleted = vi.fn();

			await page.render(<DsFileUpload adapter={fastAdapter()} onFileDeleted={onFileDeleted} />);

			await uploadTestFile();

			await expect.element(page.getByText('Upload complete')).toBeInTheDocument();

			await page.getByRole('button', { name: /delete/i }).click();

			expect(onFileDeleted).toHaveBeenCalled();
			await expect.element(page.getByText('test-document.pdf')).not.toBeInTheDocument();
		});

		it('should show uploading progress with cancel button', async () => {
			await page.render(<DsFileUpload adapter={slowAdapter()} />);

			await uploadTestFile();

			await expect.element(page.getByText('test-document.pdf')).toBeInTheDocument();
			await expect.element(page.getByText(/Uploading/)).toBeInTheDocument();
			await expect.element(page.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
		});

		it('should cancel an active upload', async () => {
			const onFileUploadCanceled = vi.fn();

			await page.render(<DsFileUpload adapter={slowAdapter()} onFileUploadCanceled={onFileUploadCanceled} />);

			await uploadTestFile();

			await expect.element(page.getByText(/Uploading/)).toBeInTheDocument();

			await page.getByRole('button', { name: /cancel/i }).click();

			await expect.element(page.getByText('Upload cancelled')).toBeInTheDocument();
			expect(onFileUploadCanceled).toHaveBeenCalled();
		});

		it('should show interrupted upload with retry option', async () => {
			const adapter = new MockFileUploadAdapter({
				scenario: 'interrupted',
				duration: 100,
				steps: 5,
				interruptAt: 30,
			});

			await page.render(<DsFileUpload adapter={adapter} />);

			await uploadTestFile();

			await expect.element(page.getByText('Upload interrupted')).toBeInTheDocument();
			await expect.element(page.getByRole('button', { name: /retry/i })).toBeInTheDocument();
		});

		it('should retry interrupted upload and complete', async () => {
			const onFileUploadComplete = vi.fn();
			const adapter = new MockFileUploadAdapter({
				scenario: 'interrupted',
				duration: 100,
				steps: 5,
				interruptAt: 30,
			});

			await page.render(<DsFileUpload adapter={adapter} onFileUploadComplete={onFileUploadComplete} />);

			await uploadTestFile();

			await expect.element(page.getByText('Upload interrupted')).toBeInTheDocument();

			await page.getByRole('button', { name: /retry/i }).click();

			await expect.element(page.getByText('Upload complete')).toBeInTheDocument();
			expect(onFileUploadComplete).toHaveBeenCalled();
		});

		it('should show error on fatal upload failure', async () => {
			const adapter = new MockFileUploadAdapter({ scenario: 'error', errorMessage: 'Server error' });
			const onFileUploadError = vi.fn();

			await page.render(<DsFileUpload adapter={adapter} onFileUploadError={onFileUploadError} />);

			await uploadTestFile();

			await expect.element(page.getByText('test-document.pdf')).toBeInTheDocument();
			await expect.element(page.getByText('Server error')).toBeInTheDocument();
			expect(onFileUploadError).toHaveBeenCalled();
		});
	});

	describe('validation', () => {
		it('should reject files exceeding maxFiles with TOO_MANY_FILES error', async () => {
			await page.render(<DsFileUpload adapter={fastAdapter()} maxFiles={1} />);

			await uploadTestFile('first');

			await expect.element(page.getByText('Upload complete')).toBeInTheDocument();

			await uploadTestFile('second');

			await expect.element(page.getByText('Too many files selected')).toBeInTheDocument();
		});

		it('should reject duplicate files with FILE_EXISTS error', async () => {
			await page.render(<DsFileUpload adapter={fastAdapter()} />);

			await uploadTestFile();

			await expect.element(page.getByText('Upload complete')).toBeInTheDocument();

			await uploadTestFile();

			await expect.element(page.getByText('File already exists')).toBeInTheDocument();
		});
	});
});
