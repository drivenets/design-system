import { FileUploadFileMimeType } from '@ark-ui/react';
/**
 * File extension with leading dot
 * @example '.pdf', '.jpg', '.csv'
 */
export type FileExtension = `.${string}`;
/**
 * Accepted file type configuration
 * - Use string shorthand for common MIME types (uses built-in extensions map)
 * - Use object form to override or provide custom extensions
 */
export type AcceptedFileType = FileUploadFileMimeType | {
    mimeType: FileUploadFileMimeType;
    extensions: [FileExtension, ...FileExtension[]];
};
/**
 * Built-in extensions map for common MIME types
 */
export declare const EXTENSIONS_MAP: Record<FileUploadFileMimeType, FileExtension[]>;
//# sourceMappingURL=accept-types.d.ts.map