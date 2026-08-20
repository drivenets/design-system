export const mcp = Object.freeze({
	import: "import { DsTabs } from '@drivenets/design-system';",
	related: ['DsVerticalTabs', 'DsSmartTabs'],
	avoid: [
		'Do not render `DsTabs` as a single element. Compose `DsTabs.Root`, `DsTabs.List`, `DsTabs.Tab`, and `DsTabs.Content`.',
		'Each `DsTabs.Content` `value` must match a `DsTabs.Tab` `value`.',
	],
	example: `<DsTabs.Root defaultValue="overview">
  <DsTabs.List>
    <DsTabs.Tab value="overview" label="Overview" />
    <DsTabs.Tab value="settings" label="Settings" />
  </DsTabs.List>
  <DsTabs.Content value="overview">Overview</DsTabs.Content>
  <DsTabs.Content value="settings">Settings</DsTabs.Content>
</DsTabs.Root>`,
});
