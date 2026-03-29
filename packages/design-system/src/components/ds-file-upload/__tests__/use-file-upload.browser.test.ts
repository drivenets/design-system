import { describe, expect, it, vi } from 'vitest';
import { renderHook } from 'vitest-browser-react';
import { useFileUpload, type FileUploadAdapter } from '..';
import { MockFileUploadAdapter } from '../stories/adapters/mock-file-upload-adapter';

const createMockFile = (name = 'test') => {
	return new File(['test'], `${name}.pdf`, { type: 'application/pdf' });
};

const fastAdapter = (): FileUploadAdapter =>
	new MockFileUploadAdapter({ scenario: 'success', duration: 50, steps: 2 });

const errorAdapter = (msg?: string): FileUploadAdapter =>
	new MockFileUploadAdapter({ scenario: 'error', errorMessage: msg });

const interruptedAdapter = (): FileUploadAdapter =>
	new MockFileUploadAdapter({
		scenario: 'interrupted',
		duration: 100,
		steps: 5,
		interruptAt: 30,
	});

const slowAdapter = (): FileUploadAdapter =>
	new MockFileUploadAdapter({ scenario: 'success', duration: 5000, steps: 10 });

const firstFile = (result: { current: ReturnType<typeof useFileUpload> }) => {
	const file = result.current.files[0];

	if (!file) {
		throw new Error('Expected at least one file');
	}

	return file;
};

const findFile = (result: { current: ReturnType<typeof useFileUpload> }, name: string) => {
	const file = result.current.files.find((f) => f.name === name);

	if (!file) {
		throw new Error(`Expected file "${name}" not found`);
	}

	return file;
};

describe('useFileUpload', () => {
	describe('auto-upload', () => {
		it('should upload files automatically when added', async () => {
			const onFileUploadComplete = vi.fn();
			const adapter = fastAdapter();

			const { result, act } = await renderHook(() => useFileUpload({ adapter, onFileUploadComplete }));

			await act(() => {
				result.current.addFiles([createMockFile()]);
			});

			await vi.waitFor(() => {
				expect(firstFile(result).status).toBe('completed');
			});

			expect(onFileUploadComplete).toHaveBeenCalled();
		});
	});

	describe('manual upload', () => {
		it('should keep files pending when autoUpload is false', async () => {
			const adapter = fastAdapter();

			const { result, act } = await renderHook(() => useFileUpload({ adapter, autoUpload: false }));

			await act(() => {
				result.current.addFiles([createMockFile()]);
			});

			expect(firstFile(result).status).toBe('pending');
		});

		it('should upload all pending files when uploadAll is called', async () => {
			const onFileUploadComplete = vi.fn();
			const adapter = fastAdapter();

			const { result, act } = await renderHook(() =>
				useFileUpload({ adapter, autoUpload: false, onFileUploadComplete }),
			);

			await act(() => {
				result.current.addFiles([createMockFile('doc-1'), createMockFile('doc-2')]);
			});

			expect(result.current.files).toHaveLength(2);
			expect(result.current.files.every((f) => f.status === 'pending')).toBe(true);

			await act(async () => {
				await result.current.uploadAll();
			});

			expect(findFile(result, 'doc-1.pdf').status).toBe('completed');
			expect(findFile(result, 'doc-2.pdf').status).toBe('completed');
			expect(onFileUploadComplete).toHaveBeenCalledTimes(2);
		});
	});

	describe('error handling', () => {
		it('should mark file as error on fatal upload failure', async () => {
			const onFileUploadError = vi.fn();
			const adapter = errorAdapter('Unsupported file type');

			const { result, act } = await renderHook(() => useFileUpload({ adapter, onFileUploadError }));

			await act(async () => {
				result.current.addFiles([createMockFile()]);
				await Promise.resolve();
			});

			expect(firstFile(result).status).toBe('error');
			expect(onFileUploadError).toHaveBeenCalledWith(expect.any(String), 'Unsupported file type');
		});
	});

	describe('interrupted upload', () => {
		it('should mark file as interrupted on retryable error', async () => {
			const adapter = interruptedAdapter();

			const { result, act } = await renderHook(() => useFileUpload({ adapter }));

			await act(() => {
				result.current.addFiles([createMockFile()]);
			});

			await vi.waitFor(
				() => {
					expect(firstFile(result).status).toBe('interrupted');
				},
				{ timeout: 2000 },
			);
		});

		it('should retry and complete after interrupted upload', async () => {
			const onFileUploadComplete = vi.fn();
			const adapter = interruptedAdapter();

			const { result, act } = await renderHook(() => useFileUpload({ adapter, onFileUploadComplete }));

			await act(() => {
				result.current.addFiles([createMockFile()]);
			});

			await vi.waitFor(
				() => {
					expect(firstFile(result).status).toBe('interrupted');
				},
				{ timeout: 2000 },
			);

			const fileId = firstFile(result).id;

			await act(async () => {
				await result.current.retryUpload(fileId);
			});

			await vi.waitFor(
				() => {
					expect(firstFile(result).status).toBe('completed');
				},
				{ timeout: 2000 },
			);

			expect(onFileUploadComplete).toHaveBeenCalled();
		});
	});

	describe('cancel upload', () => {
		it('should cancel an active upload', async () => {
			const adapter = slowAdapter();

			const { result, act } = await renderHook(() => useFileUpload({ adapter }));

			await act(() => {
				result.current.addFiles([createMockFile()]);
			});

			await vi.waitFor(() => {
				expect(firstFile(result).status).toBe('uploading');
			});

			const fileId = firstFile(result).id;

			await act(async () => {
				await result.current.cancelUpload(fileId);
			});

			expect(firstFile(result).status).toBe('cancelled');
		});
	});

	describe('max files', () => {
		it('should reject files exceeding maxFiles limit', async () => {
			const adapter = fastAdapter();

			const { result, act } = await renderHook(() => useFileUpload({ adapter, maxFiles: 1 }));

			await act(() => {
				result.current.addFiles([createMockFile('first')]);
			});

			await vi.waitFor(() => {
				expect(firstFile(result).status).toBe('completed');
			});

			await act(() => {
				result.current.addFiles([createMockFile('second')]);
			});

			const rejectedFile = findFile(result, 'second.pdf');
			expect(rejectedFile.status).toBe('error');
			expect(rejectedFile.errors).toContain('TOO_MANY_FILES');
		});
	});

	describe('duplicate files', () => {
		it('should reject duplicate files with FILE_EXISTS error', async () => {
			const adapter = fastAdapter();

			const { result, act } = await renderHook(() => useFileUpload({ adapter }));

			const mockFile = createMockFile('duplicate');

			await act(() => {
				result.current.addFiles([mockFile]);
			});

			await vi.waitFor(() => {
				expect(firstFile(result).status).toBe('completed');
			});

			await act(() => {
				result.current.addFiles([mockFile]);
			});

			expect(result.current.files).toHaveLength(2);

			const dupFile = result.current.files.find((f) => f.errors?.includes('FILE_EXISTS'));
			expect(dupFile).toBeDefined();
			expect(dupFile?.status).toBe('error');
		});
	});

	describe('remove and delete', () => {
		it('should remove a file from the list', async () => {
			const adapter = fastAdapter();

			const { result, act } = await renderHook(() => useFileUpload({ adapter, autoUpload: false }));

			await act(() => {
				result.current.addFiles([createMockFile()]);
			});

			const fileId = firstFile(result).id;

			await act(() => {
				result.current.removeFile(fileId);
			});

			expect(result.current.files).toHaveLength(0);
		});

		it('should delete a completed file and call adapter.delete', async () => {
			const deleteFn = vi.fn();
			const adapter = fastAdapter();
			adapter.delete = deleteFn;

			const { result, act } = await renderHook(() => useFileUpload({ adapter }));

			await act(() => {
				result.current.addFiles([createMockFile()]);
			});

			await vi.waitFor(() => {
				expect(firstFile(result).status).toBe('completed');
			});

			const fileId = firstFile(result).id;

			await act(async () => {
				await result.current.deleteFile(fileId);
			});

			expect(result.current.files).toHaveLength(0);
			expect(deleteFn).toHaveBeenCalledWith(fileId);
		});
	});

	describe('clear files', () => {
		it('should remove all files', async () => {
			const adapter = fastAdapter();

			const { result, act } = await renderHook(() => useFileUpload({ adapter, autoUpload: false }));

			await act(() => {
				result.current.addFiles([createMockFile('a'), createMockFile('b')]);
			});

			expect(result.current.files).toHaveLength(2);

			await act(() => {
				result.current.clearFiles();
			});

			expect(result.current.files).toHaveLength(0);
		});
	});
});
