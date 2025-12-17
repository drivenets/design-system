import { FileError, FileMetadata, FileUploadAdapter, FileUploadResult, UploadedFile } from '../ds-file-upload-api.types';
import { FileUploadProps } from '../components/file-upload';
export interface UseFileUploadConfig {
    adapter: FileUploadAdapter;
    autoUpload?: boolean;
    maxConcurrent?: number;
    maxFiles?: number;
    metadata?: FileMetadata;
    onFileUploadComplete?: (fileId: string, result: FileUploadResult) => void;
    onFileUploadError?: (fileId: string, error: string) => void;
    onAllFileUploadsComplete?: () => void;
}
export interface UseFileUploadUserCallbacks {
    onFilesAdded?: (files: File[]) => void;
    onFileRemoved?: (fileId: string) => void;
    onFileDeleted?: (fileId: string) => void;
    onFileUploadCanceled?: (fileId: string) => void;
    onFileUploadRetried?: (fileId: string) => void;
}
export interface UseFileUploadReturn {
    files: UploadedFile[];
    acceptedFiles: UploadedFile[];
    addFiles: (newFiles: File[]) => UploadedFile[];
    addRejectedFiles: (filesWithErrors: {
        file: File;
        errors: FileError[];
    }[]) => void;
    removeFile: (fileId: string) => void;
    deleteFile: (fileId: string) => Promise<void>;
    uploadFile: (fileId: string) => Promise<void>;
    uploadAll: () => Promise<void>;
    cancelUpload: (fileId: string) => Promise<void>;
    retryUpload: (fileId: string) => Promise<void>;
    clearFiles: () => void;
    /**
     * Get props for FileUpload component with callback composition
     * @param userCallbacks Optional user callbacks to compose with internal logic
     * @returns Props ready to spread onto FileUpload component
     */
    getProps: (userCallbacks?: UseFileUploadUserCallbacks) => Pick<FileUploadProps, 'files' | 'acceptedFiles' | 'onFileAccept' | 'onFileReject' | 'onFileRemove' | 'onFileDelete' | 'onFileCancel' | 'onFileRetry'>;
}
/**
 * File upload state management hook
 */
export declare function useFileUpload({ adapter, autoUpload, maxConcurrent, maxFiles, metadata, onFileUploadComplete, onFileUploadError, onAllFileUploadsComplete, }: UseFileUploadConfig): UseFileUploadReturn;
//# sourceMappingURL=use-file-upload.d.ts.map