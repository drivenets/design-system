import { afterEach, beforeEach, expect, vi } from 'vitest';

const messages: string[] = [];
const allowed: RegExp[] = [];

export const allowConsoleMessages = (...patterns: RegExp[]) => {
	allowed.push(...patterns);
};

export const getUnexpectedConsoleMessages = () =>
	messages.filter((message) => !allowed.some((pattern) => pattern.test(message)));

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
