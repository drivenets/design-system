import { describe, expect, it, vi } from 'vitest';
import {
	applyTextSelection,
	canonicalizeLf,
	getAdditionalLineCount,
	getLineAtIndex,
	getLineIndexAtOffset,
	getLogicalLineCount,
	getSelectedLineCount,
	type TextSelection,
} from './ds-code-input.utils';

const multiline = 'SELECT *\nFROM devices\nWHERE id = 1';

const stubTextarea = (value: string) => {
	const setSelectionRange = vi.fn();

	return {
		element: { value, setSelectionRange } as unknown as HTMLTextAreaElement,
		setSelectionRange,
	};
};

describe('canonicalizeLf', () => {
	it('rewrites CRLF to LF', () => {
		expect(canonicalizeLf('a\r\nb')).toBe('a\nb');
	});

	it('rewrites a lone CR to LF', () => {
		expect(canonicalizeLf('a\rb')).toBe('a\nb');
	});

	it('leaves LF unchanged', () => {
		expect(canonicalizeLf('a\nb')).toBe('a\nb');
	});

	it('normalizes mixed endings in one string', () => {
		expect(canonicalizeLf('a\r\nb\rc\nd')).toBe('a\nb\nc\nd');
	});
});

describe('getLogicalLineCount', () => {
	it('counts an empty string as one logical line', () => {
		expect(getLogicalLineCount('')).toBe(1);
	});

	it('counts a trailing newline as an extra empty line', () => {
		expect(getLogicalLineCount('a\n')).toBe(2);
	});

	it('counts each logical line in multiline text', () => {
		expect(getLogicalLineCount(multiline)).toBe(3);
	});
});

describe('getAdditionalLineCount', () => {
	it('is zero for a single line, including empty text', () => {
		expect(getAdditionalLineCount('')).toBe(0);
		expect(getAdditionalLineCount('SELECT *')).toBe(0);
	});

	it('is the number of lines beyond the first', () => {
		expect(getAdditionalLineCount('a\n')).toBe(1);
		expect(getAdditionalLineCount(multiline)).toBe(2);
	});
});

describe('getLineAtIndex', () => {
	it('returns the line at a valid index', () => {
		expect(getLineAtIndex(multiline, 0)).toBe('SELECT *');
		expect(getLineAtIndex(multiline, 1)).toBe('FROM devices');
		expect(getLineAtIndex(multiline, 2)).toBe('WHERE id = 1');
	});

	it('returns an empty string when the index is out of range', () => {
		expect(getLineAtIndex(multiline, -1)).toBe('');
		expect(getLineAtIndex(multiline, 3)).toBe('');
	});

	it('splits CRLF text on logical lines', () => {
		expect(getLineAtIndex('hello\r\nworld', 0)).toBe('hello');
		expect(getLineAtIndex('hello\r\nworld', 1)).toBe('world');
	});
});

describe('getLineIndexAtOffset', () => {
	const text = 'hello\nworld';

	it('returns the first line at the start of the text', () => {
		expect(getLineIndexAtOffset(text, 0)).toBe(0);
	});

	it('stays on the previous line when the offset sits on a newline', () => {
		expect(getLineIndexAtOffset(text, 5)).toBe(0);
	});

	it('moves to the next line once the offset is past the newline', () => {
		expect(getLineIndexAtOffset(text, 6)).toBe(1);
	});

	it('clamps offsets below 0 and past the text length', () => {
		expect(getLineIndexAtOffset(text, -4)).toBe(0);
		expect(getLineIndexAtOffset(text, 100)).toBe(1);
	});

	it('maps offsets in CRLF text onto the same logical lines as LF', () => {
		const crlf = 'hello\r\nworld';

		expect(getLineIndexAtOffset(crlf, 5)).toBe(0);
		expect(getLineIndexAtOffset(crlf, 6)).toBe(1);
		expect(getLineIndexAtOffset(crlf, crlf.length)).toBe(1);
	});
});

describe('getSelectedLineCount', () => {
	const text = 'a\nb\nc';

	it('is zero when the range is collapsed, even in multiline text', () => {
		expect(getSelectedLineCount(text, 0, 0)).toBe(0);
		expect(getSelectedLineCount(text, 2, 2)).toBe(0);
	});

	it('is one when the range stays on a single line', () => {
		expect(getSelectedLineCount(text, 0, 1)).toBe(1);
	});

	it('counts each line the range crosses', () => {
		expect(getSelectedLineCount(text, 0, 2)).toBe(2);
		expect(getSelectedLineCount(text, 0, text.length)).toBe(3);
	});

	it('treats a reversed range the same as start-to-end', () => {
		expect(getSelectedLineCount(text, 2, 0)).toBe(getSelectedLineCount(text, 0, 2));
	});

	it('stays on one line when the range ends on a newline', () => {
		expect(getSelectedLineCount('hello\nworld', 0, 5)).toBe(1);
	});
});

describe('applyTextSelection', () => {
	it('restores the range and direction on the element', () => {
		const { element, setSelectionRange } = stubTextarea('abc');
		const selection: TextSelection = { start: 1, end: 2, direction: 'forward' };

		applyTextSelection(element, selection);

		expect(setSelectionRange).toHaveBeenCalledWith(1, 2, 'forward');
	});

	it('clamps the range to the current value length', () => {
		const { element, setSelectionRange } = stubTextarea('abc');

		applyTextSelection(element, { start: 10, end: 20, direction: 'none' });

		expect(setSelectionRange).toHaveBeenCalledWith(3, 3, 'none');
	});

	it('clamps only the end when start is still in range', () => {
		const { element, setSelectionRange } = stubTextarea('abc');

		applyTextSelection(element, { start: 1, end: 99, direction: 'backward' });

		expect(setSelectionRange).toHaveBeenCalledWith(1, 3, 'backward');
	});
});
