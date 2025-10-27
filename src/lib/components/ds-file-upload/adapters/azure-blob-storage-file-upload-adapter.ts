import { FileUploadAdapter, FileUploadOptions, FileUploadResult } from './file-upload-adapter.types';

/**
 * Azure blob storage file upload adapter
 */
export class AzureBlobStorageFileUploadAdapter implements FileUploadAdapter {
	name = 'Azure Blob Storage';
	supportsResumable = true;
	supportsChunking = true;

	constructor(
		private config: {
			containerUrl: string;
			getSasToken: (fileName: string) => Promise<string>;
		},
	) {}

	async upload(options: FileUploadOptions): Promise<FileUploadResult> {
		try {
			const sasToken = await this.config.getSasToken(options.file.name);
			const blobUrl = `${this.config.containerUrl}/${options.file.name}?${sasToken}`;

			// Azure automatically handles chunking based on file size
			return this.blockBlobUpload(blobUrl, options);
		} catch (error) {
			return {
				success: false,
				error: error instanceof Error ? error.message : 'Upload failed',
			};
		}
	}

	private async blockBlobUpload(url: string, options: FileUploadOptions): Promise<FileUploadResult> {
		const xhr = new XMLHttpRequest();

		return new Promise((resolve) => {
			xhr.upload.addEventListener('progress', (e) => {
				if (e.lengthComputable && options.onProgress) {
					options.onProgress({
						// uploadedBytes: e.loaded,
						// totalBytes: e.total,
						percentage: (e.loaded / e.total) * 100,
					});
				}
			});

			xhr.addEventListener('load', () => {
				if (xhr.status >= 200 && xhr.status < 300) {
					resolve({ success: true, url });
				} else {
					resolve({ success: false, error: `Upload failed: ${xhr.statusText}` });
				}
			});

			xhr.addEventListener('error', () => {
				resolve({ success: false, error: 'Network error' });
			});

			if (options.signal) {
				options.signal.addEventListener('abort', () => {
					xhr.abort();
					resolve({ success: false, error: 'Upload cancelled' });
				});
			}

			xhr.open('PUT', url);
			xhr.setRequestHeader('x-ms-blob-type', 'BlockBlob');
			xhr.setRequestHeader('Content-Type', options.file.type || 'application/octet-stream');
			xhr.send(options.file);
		});
	}
}

// Simple Backend Adapter (multipart/form-data)
export class BackendAdapter implements FileUploadAdapter {
	name = 'Backend Upload';
	supportsResumable = false;
	supportsChunking = false;

	constructor(
		private config: {
			endpoint: string;
			headers?: Record<string, string>;
		},
	) {}

	async upload(options: FileUploadOptions): Promise<FileUploadResult> {
		const formData = new FormData();
		formData.append('file', options.file);

		if (options.metadata) {
			Object.entries(options.metadata).forEach(([key, value]) => {
				formData.append(key, value);
			});
		}

		const xhr = new XMLHttpRequest();

		return new Promise((resolve) => {
			xhr.upload.addEventListener('progress', (e) => {
				if (e.lengthComputable && options.onProgress) {
					options.onProgress({
						// uploadedBytes: e.loaded,
						// totalBytes: e.total,
						percentage: (e.loaded / e.total) * 100,
					});
				}
			});

			xhr.addEventListener('load', () => {
				if (xhr.status >= 200 && xhr.status < 300) {
					try {
						const response = JSON.parse(xhr.responseText);
						resolve({ success: true, url: response.url, metadata: response });
					} catch {
						resolve({ success: true });
					}
				} else {
					resolve({ success: false, error: `Upload failed: ${xhr.statusText}` });
				}
			});

			xhr.addEventListener('error', () => {
				resolve({ success: false, error: 'Network error' });
			});

			if (options.signal) {
				options.signal.addEventListener('abort', () => {
					xhr.abort();
					resolve({ success: false, error: 'Upload cancelled' });
				});
			}

			xhr.open('POST', this.config.endpoint);

			if (this.config.headers) {
				Object.entries(this.config.headers).forEach(([key, value]) => {
					xhr.setRequestHeader(key, value);
				});
			}

			xhr.send(formData);
		});
	}
}
