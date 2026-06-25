import type figma from 'figma';

type FigmaTemplate = {
	id: Id;
	imports: [Import];
	example: figma.TemplateStringResult;
	metadata?: Omit<figma.TemplateMetadata, '__props'>;
};

type Id = `ds-${string}`;

type Import = `import { ${string} } from '@drivenets/design-system'`;

// Internal function for typing Figma Code Connect templates.
// Temporary solution until https://github.com/figma/code-connect/issues/403 is resolved.
export function defineFigmaTemplate<T extends FigmaTemplate>(template: T): T {
	return template;
}
