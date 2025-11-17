import { FileUploadFileMimeType } from '@ark-ui/react';
import { AcceptedFileType, EXTENSIONS_MAP, FileExtension } from '../types/accept-types';

/**
 * Extract file extensions from accept configuration
 * @param accept Array of accepted file types
 * @returns Array of file extensions
 */
export function getFileExtensions(accept: AcceptedFileType[]): FileExtension[] {
	return accept.flatMap((item) => {
		if (typeof item === 'string') {
			return EXTENSIONS_MAP[item] ?? [];
		}
		return item.extensions;
	});
}

/**
 * Extract MIME types from accept configuration
 * @param accept Array of accepted file types
 * @returns Array of MIME types
 */
export function getMimeTypes(accept: AcceptedFileType[]): FileUploadFileMimeType[] {
	return accept.map((item) => (typeof item === 'string' ? item : item.mimeType));
}
