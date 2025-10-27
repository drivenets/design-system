import { FileUploadAdapter, FileUploadOptions, FileUploadResult } from './file-upload-adapter.types';

/**
 * AWS S3 file upload adapter
 */
export class AwsS3FileUploadAdapter implements FileUploadAdapter {
	name = 'AWS S3';
	supportsResumable = true;
	supportsChunking = true;

	constructor(
		private config: {
			bucket: string;
			region: string;
			getPresignedUrl: (fileName: string) => Promise<string>;
		},
	) {}

	async upload(options: FileUploadOptions): Promise<FileUploadResult> {
		try {
			// Get presigned URL from your backend
			const presignedUrl = await this.config.getPresignedUrl(options.file.name);

			// For small files (<5MB), use single PUT
			if (options.file.size < 5 * 1024 * 1024) {
				return this.singlePartUpload(presignedUrl, options);
			}

			// For large files, use multipart upload
			return this.multipartUpload(presignedUrl, options);
		} catch (error) {
			return {
				success: false,
				error: error instanceof Error ? error.message : 'Upload failed',
			};
		}
	}

	private async singlePartUpload(url: string, options: FileUploadOptions): Promise<FileUploadResult> {
		const xhr = new XMLHttpRequest();

		return new Promise((resolve, reject) => {
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
			xhr.setRequestHeader('Content-Type', options.file.type || 'application/octet-stream');
			xhr.send(options.file);
		});
	}

	private async multipartUpload(baseUrl: string, options: FileUploadOptions): Promise<FileUploadResult> {
		// Implement AWS S3 multipart upload logic
		// This would involve: initiate, upload parts, complete
		// For brevity, delegating to singlePartUpload
		return this.singlePartUpload(baseUrl, options);
	}
}
