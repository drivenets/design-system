import { describe, expect, it } from 'vitest';
import { RELOAD_NOTICE_ID, RELOAD_NOTICE_TEMPLATE_ID } from './chunk-reload-notice-ids';
import { createChunkReloadNoticeHead } from './create-chunk-reload-notice-head';

describe('createChunkReloadNoticeHead', () => {
	it('should embed the notice markup and styles from the html and css files', () => {
		const head = createChunkReloadNoticeHead();

		expect(head).toContain(`id="${RELOAD_NOTICE_TEMPLATE_ID}"`);
		expect(head).toContain(`id="${RELOAD_NOTICE_ID}"`);
		expect(head).toContain('A new version of the story documentation is available. Reloading…');
		expect(head).toContain(`#${RELOAD_NOTICE_ID}`);
	});
});
