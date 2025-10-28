export interface FileUploadOptions {
	file: File;
	fileId: string;
	metadata?: Record<string, string>;
	chunkSize?: number;
	onProgress?: (progress: number) => void;
	signal?: AbortSignal;
}

export interface FileUploadResult {
	success: boolean;
	url?: string;
	error?: string;
	isRetryable?: boolean;
	metadata?: Record<string, never>;
}

export interface FileUploadAdapter {
	name: string;
	upload: (options: FileUploadOptions) => Promise<FileUploadResult>;
	cancel?: (fileId: string) => Promise<void>;
	supportsResumable?: boolean;
	supportsChunking?: boolean;
}
