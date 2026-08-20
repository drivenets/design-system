export const mcp = Object.freeze({
	import: "import { DsToastProvider, useToaster } from '@drivenets/design-system';",
	related: ['DsToastProvider', 'useToaster'],
	avoid: [
		'Do not render `DsToast` in the page tree. `DsToast` is not a public export.',
		'Wrap the application with `DsToastProvider`, then call `useToaster().createToast(...)` from a child.',
	],
	example: `const { createToast } = useToaster();

createToast({
  variant: 'success',
  title: 'Saved',
  description: 'Changes were stored.',
});`,
});
