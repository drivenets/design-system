export const mcp = Object.freeze({
	import: "import { DsWorkspaceLayout } from '@drivenets/design-system';",
	related: ['DsDrawer', 'DsCatalogLayout'],
	avoid: [
		'Do not import `Header` / `Content` as separate components — they are `DsWorkspaceLayout.*` members.',
		'Put right-side overlays in `Content` with `DsDrawer` and `portal={false}`.',
		'Nest `Content` inside `Body` when using `SideMenu` or `LeftPanel`.',
	],
	example: `<DsWorkspaceLayout>
  <DsWorkspaceLayout.Header>Header</DsWorkspaceLayout.Header>
  <DsWorkspaceLayout.Content>Content</DsWorkspaceLayout.Content>
</DsWorkspaceLayout>`,
});
