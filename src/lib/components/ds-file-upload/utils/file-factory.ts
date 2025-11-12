import { FileError, UploadedFile, UploadFileStatus } from '../ds-file-upload-api.types';

/**
 * Creates an UploadedFile object from a File with additional metadata
 */
export function createUploadedFile(file: File, status: UploadFileStatus, errors?: FileError[]): UploadedFile {
	return {
		...file,
		id: `${file.name}-${Date.now()}-${Math.random()}`,
		name: file.name,
		size: file.size,
		type: file.type,
		progress: 0,
		status,
		errors,
	} satisfies UploadedFile;
}
