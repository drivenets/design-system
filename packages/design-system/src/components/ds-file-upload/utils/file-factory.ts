import type { FileError, UploadedFile, UploadFileStatus } from '../ds-file-upload-api.types';

/**
 * Creates an UploadedFile object from a File with additional metadata
 */
export function createUploadedFile(file: File, status: UploadFileStatus, errors?: FileError[]): UploadedFile {
	return {
		// eslint-disable-next-line @typescript-eslint/no-misused-spread -- We're fine with losing the prototype here
		...file,
		id: `${file.name}-${String(Date.now())}-${String(Math.random())}`,
		name: file.name,
		size: file.size,
		type: file.type,
		progress: 0,
		status,
		errors,
	} satisfies UploadedFile;
}
