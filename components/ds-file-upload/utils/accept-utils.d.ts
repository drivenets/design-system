import { FileUploadFileMimeType } from '@ark-ui/react';
import { AcceptedFileType, FileExtension } from '../types/accept-types';
/**
 * Extract file extensions from accept configuration
 * @param accept Array of accepted file types
 * @returns Array of file extensions
 */
export declare function getFileExtensions(accept: AcceptedFileType[]): FileExtension[];
/**
 * Extract MIME types from accept configuration
 * @param accept Array of accepted file types
 * @returns Array of MIME types
 */
export declare function getMimeTypes(accept: AcceptedFileType[]): FileUploadFileMimeType[];
//# sourceMappingURL=accept-utils.d.ts.map