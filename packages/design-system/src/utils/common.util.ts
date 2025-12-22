/**
 * Converts a numeric or string size into a valid CSS length value.
 * Useful for normalizing style props where numbers should default to pixels.
 * @param v - Size value. Numbers are treated as pixels (e.g. `2` -> `"2px"`). Strings are returned as-is
 * (e.g. `"1rem"`, `"8%"`, `"calc(100% - 16px)"`). If `undefined`, no value is produced.
 * @returns CSS length string or `undefined` when input is `undefined`
 */
export const toCssSize = (v: number | string | undefined): string | undefined => {
	if (v === undefined) return undefined;
	return typeof v === 'number' ? `${v}px` : v;
};
