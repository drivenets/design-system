import type figma from 'figma';

// Internal type for Figma Code Connect templates.
// Temporary solution until https://github.com/figma/code-connect/issues/403 is resolved.
declare module 'figma' {
	export interface Template {
		id: Id;
		imports: [DsImport, ...AnyImport[]];
		example: figma.TemplateStringResult;
		metadata?: Omit<figma.TemplateMetadata, '__props'>;
	}

	type Id = `ds-${string}`;

	type DsImport = `import { ${string} } from '@drivenets/design-system';`;

	type AnyImport = `import ${string} from '${string}';`;
}
