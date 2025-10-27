import {
	FileUploadAdapter,
	FileUploadOptions,
	FileUploadProgress,
	FileUploadResult,
} from './file-upload-adapter.types';

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
export class MockAdapter implements FileUploadAdapter {
	name = 'Mock Upload';
	supportsResumable = false;
	supportsChunking = false;

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
				return { success: false, error: 'Upload cancelled' };
			}
		}

		// Immediate error scenario
		if (scenario === 'error') {
			return {
				success: false,
				error: errorMessage || 'Unsupported file type',
			};
		}

		// Simulate upload progress
		const stepDuration = duration / steps;

		for (let i = 0; i <= steps; i++) {
			if (checkCancelled()) {
				return { success: false, error: 'Upload cancelled' };
			}

			await this.sleep(stepDuration);

			const percentage = Math.min((i / steps) * 100, 100);

			const progress: FileUploadProgress = {
				percentage,
			};

			onProgress?.(progress);

			// Interrupt scenario - fail at specified progress
			if (scenario === 'interrupted' && percentage >= interruptAt && this.interruptedRuns % 2) {
				this.uploads.delete(fileId);
				this.interruptedRuns++;
				return {
					success: false,
					error: errorMessage || 'Network connection lost',
				};
			}
		}

		this.interruptedRuns++;

		// Success!
		this.uploads.delete(fileId);
		return {
			success: true,
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
	normal: (): MockAdapter =>
		new MockAdapter({
			scenario: 'success',
			duration: 2000 + Math.random() * 1000,
			steps: 20,
		}),

	/** Fast upload - completes quickly (good for demos) */
	fast: (): MockAdapter =>
		new MockAdapter({
			scenario: 'success',
			duration: 800,
			steps: 10,
		}),

	/** Slow upload - takes longer (good for testing pause/cancel) */
	slow: (): MockAdapter =>
		new MockAdapter({
			scenario: 'success',
			duration: 5000,
			steps: 30,
		}),

	/** Upload that fails at 30% progress */
	interrupted: (atProgress = 30): MockAdapter =>
		new MockAdapter({
			scenario: 'interrupted',
			duration: 2000,
			steps: 20,
			interruptAt: atProgress,
			errorMessage: 'Network connection lost',
		}),

	/** Upload that fails immediately with validation error */
	error: (message?: string): MockAdapter =>
		new MockAdapter({
			scenario: 'error',
			errorMessage: message || 'Unsupported file type',
		}),

	/** Upload with custom configuration */
	custom: (config: MockAdapterConfig): MockAdapter => new MockAdapter(config),
};
