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
export type AcceptedFileType =
	| FileUploadFileMimeType
	| {
			mimeType: FileUploadFileMimeType;
			extensions: [FileExtension, ...FileExtension[]];
	  };

/**
 * Built-in extensions map for common MIME types
 */
export const EXTENSIONS_MAP: Record<FileUploadFileMimeType, FileExtension[]> = {
	// Images - specific types
	'image/png': ['.png'],
	'image/gif': ['.gif'],
	'image/jpeg': ['.jpg', '.jpeg'],
	'image/svg+xml': ['.svg'],
	'image/webp': ['.webp'],
	'image/avif': ['.avif'],
	'image/heic': ['.heic', '.heif'],
	'image/bmp': ['.bmp'],

	// Applications
	'application/pdf': ['.pdf'],
	'application/zip': ['.zip'],
	'application/json': ['.json'],
	'application/xml': ['.xml'],
	'application/msword': ['.doc'],
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
	'application/vnd.ms-excel': ['.xls'],
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
	'application/vnd.ms-powerpoint': ['.ppt'],
	'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
	'application/rtf': ['.rtf'],
	'application/x-rar': ['.rar'],
	'application/x-7z-compressed': ['.7z'],
	'application/x-tar': ['.tar'],
	'application/vnd.microsoft.portable-executable': ['.exe', '.dll'],

	// Text
	'text/css': ['.css'],
	'text/csv': ['.csv'],
	'text/html': ['.html', '.htm'],
	'text/markdown': ['.md', '.markdown'],
	'text/plain': ['.txt'],

	// Fonts
	'font/ttf': ['.ttf'],
	'font/otf': ['.otf'],
	'font/woff': ['.woff'],
	'font/woff2': ['.woff2'],
	'font/eot': ['.eot'],
	'font/svg': ['.svg'],

	// Video
	'video/mp4': ['.mp4'],
	'video/webm': ['.webm'],
	'video/ogg': ['.ogv'],
	'video/quicktime': ['.mov'],
	'video/x-msvideo': ['.avi'],

	// Audio
	'audio/mpeg': ['.mp3'],
	'audio/ogg': ['.ogg', '.oga'],
	'audio/wav': ['.wav'],
	'audio/webm': ['.weba'],
	'audio/aac': ['.aac'],
	'audio/flac': ['.flac'],
	'audio/x-m4a': ['.m4a'],

	// Wildcards
	'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.bmp', '.avif', '.heic', '.heif'],
	'audio/*': ['.mp3', '.wav', '.ogg', '.oga', '.m4a', '.flac', '.aac', '.weba'],
	'video/*': ['.mp4', '.webm', '.ogv', '.mov', '.avi'],
	'text/*': ['.txt', '.html', '.htm', '.css', '.csv', '.md', '.markdown'],
	'application/*': [
		'.pdf',
		'.zip',
		'.json',
		'.xml',
		'.doc',
		'.docx',
		'.xls',
		'.xlsx',
		'.ppt',
		'.pptx',
		'.rtf',
		'.rar',
		'.7z',
		'.tar',
	],
	'font/*': ['.ttf', '.otf', '.woff', '.woff2', '.eot'],
} as const;
