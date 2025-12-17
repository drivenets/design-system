import { FileError, UploadedFile, UploadFileStatus } from '../ds-file-upload-api.types';
/**
 * Creates an UploadedFile object from a File with additional metadata
 */
export declare function createUploadedFile(file: File, status: UploadFileStatus, errors?: FileError[]): UploadedFile;
//# sourceMappingURL=file-factory.d.ts.map