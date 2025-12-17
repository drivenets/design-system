/**
 * Check if two files are equal based on name, size, and type
 *
 * @see https://github.com/chakra-ui/zag/blob/698fff1d2/packages/utilities/file-utils/src/is-file-equal.ts
 */
export function isFileEqual(file1: File, file2: File): boolean {
	return file1.name === file2.name && file1.size === file2.size && file1.type === file2.type;
}
