import { afterEach, beforeEach, expect, vi } from 'vitest';

const messages: string[] = [];
const allowed: RegExp[] = [];

export const allowConsoleMessages = (...patterns: RegExp[]) => {
	allowed.push(...patterns);
};

export const getUnexpectedConsoleMessages = () =>
	messages.filter((message) => !allowed.some((pattern) => pattern.test(message)));

// Only sees console.error/warn calls. jsdom reports its own "Not implemented" errors through its virtual
// console straight to stderr, so those don't fail a test.
export const failOnConsole = () => {
	beforeEach(() => {
		messages.length = 0;
		allowed.length = 0;

		for (const method of ['error', 'warn'] as const) {
			vi.spyOn(console, method).mockImplementation((...args: unknown[]) => {
				messages.push(args.map(String).join(' '));
			});
		}
	});

	afterEach(() => {
		vi.restoreAllMocks();

		expect(getUnexpectedConsoleMessages()).toEqual([]);
	});
};
