import { describe, expect, it } from 'vitest';
import { createUploadedFile } from './file-factory';

describe('createUploadedFile', () => {
	const makeFile = (name = 'test.txt', content = 'hello') =>
		new File([content], name, { type: 'text/plain' });

	it('should preserve originalFile reference', () => {
		const mockFile = makeFile();
		const uploaded = createUploadedFile(mockFile, 'pending');

		expect(uploaded.originalFile).toBe(mockFile);
	});

	it('should preserve originalFile through object spread (retry scenario)', () => {
		const mockFile = makeFile('data.bin', 'bytes');
		const uploaded = createUploadedFile(mockFile, 'pending');
		const data = { ...uploaded, status: 'uploading' as const };

		expect(data.originalFile).toBe(mockFile);
	});

	it('should set upload metadata correctly', () => {
		const name = 'test.txt';
		const content = 'hello';
		const mockFile = makeFile(name, content);
		const uploaded = createUploadedFile(mockFile, 'error', ['TOO_LARGE']);

		expect(uploaded.status).toBe('error');
		expect(uploaded.progress).toBe(0);
		expect(uploaded.errors).toEqual(['TOO_LARGE']);
		expect(uploaded.name).toBe(name);
		expect(uploaded.size).toBe(content.length);
		expect(uploaded.type).toBe('text/plain');
		expect(uploaded.id).toMatch(new RegExp(`^${name}-`));
	});
});
