export interface FileUploadOptions {
	file: File;
	fileId: string;
	metadata?: Record<string, string>;
	chunkSize?: number;
	onProgress?: (progress: FileUploadProgress) => void;
	signal?: AbortSignal;
}

export interface FileUploadProgress {
	percentage: number;
}

export interface FileUploadResult {
	success: boolean;
	url?: string;
	error?: string;
	metadata?: Record<string, never>;
}

export interface FileUploadAdapter {
	name: string;
	upload: (options: FileUploadOptions) => Promise<FileUploadResult>;
	pause?: (fileId: string) => Promise<void>;
	resume?: (fileId: string) => Promise<void>;
	cancel?: (fileId: string) => Promise<void>;
	supportsResumable?: boolean;
	supportsChunking?: boolean;
}
