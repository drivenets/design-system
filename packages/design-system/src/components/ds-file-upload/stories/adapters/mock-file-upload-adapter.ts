import type { FileUploadAdapter, FileUploadOptions, FileUploadResult } from '../../ds-file-upload-api.types';
import { FatalFileUploadError, RetryableFileUploadError } from '../../errors/file-upload-errors';

export type MockScenario = 'success' | 'error' | 'interrupted' | 'slow' | 'fast';

export interface MockAdapterConfig {
	scenario?: MockScenario;
	duration?: number;
	steps?: number;
	interruptAt?: number; // Progress percentage to interrupt at (0-100)
	errorMessage?: string;
	delay?: number; // Initial delay before upload starts
}

/**
 * Mock adapter for testing and Storybook demonstrations
 * Simulates various upload scenarios without real network calls
 */
export class MockFileUploadAdapter implements FileUploadAdapter {
	private interruptedRuns = -1;
	private uploads = new Map<string, { cancelled: boolean }>();

	constructor(private config: MockAdapterConfig = {}) {}

	async upload(options: FileUploadOptions): Promise<FileUploadResult> {
		const {
			scenario = 'success',
			duration = 2000,
			steps = 20,
			interruptAt = 30,
			errorMessage = 'Upload failed',
			delay = 0,
		} = this.config;

		const { file, fileId, onProgress, signal } = options;

		// Track this upload for cancellation
		this.uploads.set(fileId, { cancelled: false });

		// Handle abort signal
		const checkCancelled = () => {
			if (signal?.aborted || this.uploads.get(fileId)?.cancelled) {
				this.uploads.delete(fileId);
				return true;
			}
			return false;
		};

		// Initial delay
		if (delay > 0) {
			await this.sleep(delay);
			if (checkCancelled()) {
				throw new RetryableFileUploadError('Upload cancelled');
			}
		}

		// Immediate error scenario
		if (scenario === 'error') {
			throw new FatalFileUploadError(errorMessage || 'Unsupported file type');
		}

		// Simulate upload progress
		const stepDuration = duration / steps;

		for (let i = 0; i <= steps; i++) {
			if (checkCancelled()) {
				throw new RetryableFileUploadError('Upload cancelled');
			}

			await this.sleep(stepDuration);

			const percentage = Math.min((i / steps) * 100, 100);

			onProgress?.(percentage);

			// Interrupt scenario - fail at specified progress
			if (scenario === 'interrupted' && percentage >= interruptAt && this.interruptedRuns % 2) {
				this.uploads.delete(fileId);
				this.interruptedRuns++;
				throw new RetryableFileUploadError(errorMessage || 'Network connection lost');
			}
		}

		this.interruptedRuns++;

		// Success!
		this.uploads.delete(fileId);
		return {
			url: `mock://uploaded/${file.name}`,
			metadata: {
				fileName: file.name,
				fileSize: file.size,
				fileType: file.type,
				uploadedAt: new Date().toISOString(),
			},
		};
	}

	async cancel(fileId: string): Promise<void> {
		const upload = this.uploads.get(fileId);
		if (upload) {
			upload.cancelled = true;
		}
	}

	private sleep(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
}

// Preset configurations for common scenarios
export const MockAdapterPresets = {
	/** Normal upload - completes successfully in 2-3 seconds */
	normal: (): MockFileUploadAdapter =>
		new MockFileUploadAdapter({
			scenario: 'success',
			duration: 2000 + Math.random() * 1000,
			steps: 20,
		}),

	/** Fast upload - completes quickly (good for demos) */
	fast: (): MockFileUploadAdapter =>
		new MockFileUploadAdapter({
			scenario: 'success',
			duration: 800,
			steps: 10,
		}),

	/** Slow upload - takes longer (good for testing cancel) */
	slow: (): MockFileUploadAdapter =>
		new MockFileUploadAdapter({
			scenario: 'success',
			duration: 10_000,
			steps: 30,
		}),

	/** Upload that fails at 30% progress */
	interrupted: (atProgress = 30): MockFileUploadAdapter =>
		new MockFileUploadAdapter({
			scenario: 'interrupted',
			duration: 2000,
			steps: 20,
			interruptAt: atProgress,
			errorMessage: 'Network connection lost',
		}),

	/** Upload that fails immediately with validation error */
	error: (message?: string): MockFileUploadAdapter =>
		new MockFileUploadAdapter({
			scenario: 'error',
			errorMessage: message || 'Unsupported file type',
		}),

	/** Upload with custom configuration */
	custom: (config: MockAdapterConfig): MockFileUploadAdapter => new MockFileUploadAdapter(config),
};
