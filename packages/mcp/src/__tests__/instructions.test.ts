import { readFileSync } from 'node:fs';
import { GET_STORY_TOOL_NAME, GET_TOOL_NAME, LIST_TOOL_NAME } from '@storybook/mcp';
import { describe, expect, it } from 'vitest';

const instructions = readFileSync(new URL('../instructions.md', import.meta.url), 'utf-8');

const registeredToolNames = [LIST_TOOL_NAME, GET_TOOL_NAME, GET_STORY_TOOL_NAME];

describe('server instructions', () => {
	it('names every registered tool', () => {
		for (const toolName of registeredToolNames) {
			expect(instructions).toContain(`**${toolName}**`);
		}
	});

	it('names only registered tools', () => {
		const boldNames = (instructions.match(/\*\*[a-z]+(?:-[a-z]+)+\*\*/g) ?? []).map((bold) =>
			bold.slice(2, -2),
		);

		expect(boldNames.filter((name) => !registeredToolNames.includes(name))).toEqual([]);
	});
});
