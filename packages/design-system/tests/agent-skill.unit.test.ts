import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { beforeAll, describe, expect, it } from 'vitest';

const packageRoot = path.resolve(__dirname, '..');
const skillDir = path.join(packageRoot, 'skills/drivenets-design-system');
const skillDocs = ['SKILL.md', 'setup.md'];

const readSkillDoc = (name: string) => fs.readFileSync(path.join(skillDir, name), 'utf8');

const getPackageExports = () => {
	const entry = path.join(packageRoot, 'src/index.ts');
	const program = ts.createProgram([entry], { noEmit: true, skipLibCheck: true });
	const checker = program.getTypeChecker();
	const sourceFile = program.getSourceFile(entry);
	const moduleSymbol = sourceFile && checker.getSymbolAtLocation(sourceFile);

	if (!moduleSymbol) {
		throw new Error(`Cannot read the exports of ${entry}`);
	}

	return new Set(checker.getExportsOfModule(moduleSymbol).map((symbol) => symbol.name));
};

describe('drivenets-design-system agent skill', () => {
	let packageExports: Set<string>;

	beforeAll(() => {
		packageExports = getPackageExports();
	});

	it.each(skillDocs)('%s names only components the package exports', (name) => {
		const componentNames = new Set(readSkillDoc(name).match(/\bDs[A-Z]\w*/g));
		const unknown = [...componentNames].filter((componentName) => !packageExports.has(componentName));

		expect(unknown).toEqual([]);
	});

	it('setup.md points the AGENTS.md block at the shipped SKILL.md', () => {
		const skillPath = /node_modules\/@drivenets\/design-system\/(\S+\/SKILL\.md)/.exec(
			readSkillDoc('setup.md'),
		)?.[1];

		expect(skillPath).toMatch(/\/SKILL\.md$/);
		expect(fs.existsSync(path.join(packageRoot, skillPath ?? ''))).toBe(true);
	});

	it('the README and the Storybook Overview give the same setup prompt, pointing at the shipped setup.md', () => {
		const readme = fs.readFileSync(path.join(packageRoot, 'README.md'), 'utf8');
		const overview = fs.readFileSync(path.join(packageRoot, 'src/stories/overview.mdx'), 'utf8');

		const readmePrompt = /## AI coding agents[\s\S]*?```text\n([\s\S]*?)\n```/.exec(readme)?.[1];
		const overviewPrompt = /export const agentSetupPrompt = `([\s\S]*?)`;/.exec(overview)?.[1];
		const setupPath = /node_modules\/@drivenets\/design-system\/(\S+\/setup\.md)/.exec(
			readmePrompt ?? '',
		)?.[1];

		expect(readmePrompt).toBeDefined();
		expect(overviewPrompt).toBe(readmePrompt);
		expect(setupPath).toMatch(/\/setup\.md$/);
		expect(fs.existsSync(path.join(packageRoot, setupPath ?? ''))).toBe(true);
	});
});
