// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=38148-43478
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-catalog-layout
// component=DsCatalogLayout
import figma from 'figma';

const instance = figma.selectedInstance;

const type =
	instance.getEnum('Type', {
		empty: 'empty',
		'collapsed side menu': 'collapsed',
		'hover to expand side menu': 'hover',
		'pin expanded side menu': 'pinned',
	}) ?? 'empty';

const hasSideMenu = type !== 'empty';
const pinnedAttr = type === 'pinned' ? 'pinned' : 'pinned={false}';

const sideMenu = hasSideMenu
	? figma.code`
		<DsCatalogLayout.SideMenu ${pinnedAttr} onPinnedChange={() => {}}>
			{/* DsTree / DsSideMenu navigation items */}
		</DsCatalogLayout.SideMenu>`
	: '';

const contentHeader =
	type === 'empty'
		? figma.code`<DsCatalogLayout.ContentHeader title={<DsTypography variant="heading3">Title</DsTypography>} />`
		: figma.code`<DsCatalogLayout.ContentHeader title={<DsTypography variant="heading3">Title</DsTypography>}>
				{/* DsSmartTabs */}
			</DsCatalogLayout.ContentHeader>`;

const contentBody =
	type === 'empty'
		? '{/* EmptyStateCard + DsButtonV3 (no data / clear filters) */}'
		: '{/* DsTable with data rows */}';

export default {
	example: figma.code`<DsCatalogLayout>
	<DsCatalogLayout.Header>{/* DsTopBarNavigation */}</DsCatalogLayout.Header>
	<DsCatalogLayout.Body>${sideMenu}
		<DsCatalogLayout.Content>
			${contentHeader}
			${contentBody}
		</DsCatalogLayout.Content>
	</DsCatalogLayout.Body>
</DsCatalogLayout>`,
	imports: ["import { DsCatalogLayout, DsTypography } from '@drivenets/design-system'"],
	id: 'ds-catalog-layout',
	metadata: { nestable: false },
};
