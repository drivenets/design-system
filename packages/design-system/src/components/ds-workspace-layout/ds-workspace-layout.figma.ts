// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=32960-46399
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-workspace-layout
// component=DsWorkspaceLayout.Header
//
// Maps Part_workspace-header_v02 / DAP_workspace-header_v02. Figma `Type` selects the
// example Header composition; Figma `Status` is ignored (badge always shown).
// Layout divs are structural only — consumers supply their own header chrome CSS.
import figma from 'figma';

const instance = figma.selectedInstance;

const type =
	instance.getEnum('Type', {
		draft: 'draft',
		pending: 'pending',
		running: 'running',
	}) ?? 'draft';

const draftHeader = figma.code`<DsWorkspaceLayout.Header>
	{/* left / center / right — style with consumer CSS (flex row) */}
	<div>
		<DsButtonV3 variant="secondary" color="light" size="small" icon="close">
			Close
		</DsButtonV3>
	</div>
	<div>
		<DsTypography variant="body-sm-reg">Untitled Project -23-May-2024 04:47 PM</DsTypography>
		<DsIcon icon="info" size="tiny" />
		<DsStatusBadgeV2 phase="temporary" label="Draft" size="small" />
	</div>
	<div>
		<DsButtonV3 variant="secondary" color="light" size="small">
			Discard
		</DsButtonV3>
		<DsButtonV3 variant="primary" color="light" size="small">
			Save project
		</DsButtonV3>
		<DsButtonV3 variant="tertiary" color="light" size="small" icon="more_vert" aria-label="More actions" />
	</div>
</DsWorkspaceLayout.Header>`;

const pendingHeader = figma.code`<DsWorkspaceLayout.Header>
	{/* left / center / right — style with consumer CSS (flex row) */}
	<div>
		<DsButtonV3 variant="secondary" color="light" size="small" icon="close">
			Close
		</DsButtonV3>
	</div>
	<div>
		<DsTypography variant="body-sm-reg">Untitled Project -23-May-2024 04:47 PM</DsTypography>
		<DsIcon icon="info" size="tiny" />
		<DsStatusBadgeV2 phase="pending" label="Pending" size="small" />
	</div>
	<div>
		<DsButtonV3 variant="secondary" color="light" size="small">
			Discard
		</DsButtonV3>
		<DsButtonV3 variant="primary" color="light" size="small">
			Save project
		</DsButtonV3>
		<DsButtonV3 variant="tertiary" color="light" size="small" icon="more_vert" aria-label="More actions" />
	</div>
</DsWorkspaceLayout.Header>`;

const runningHeader = figma.code`<DsWorkspaceLayout.Header>
	{/* left / center / right — style with consumer CSS (flex row) */}
	<div>
		<DsButtonV3 variant="secondary" color="light" size="small" icon="close">
			Close
		</DsButtonV3>
		<DsButtonV3 variant="secondary" color="light" size="small" icon="keyboard_double_arrow_left">
			Previous
		</DsButtonV3>
		<DsButtonV3 variant="secondary" color="light" size="small">
			Next
		</DsButtonV3>
	</div>
	<div>
		<DsTypography variant="body-sm-reg">Untitled Project -23-May-2024 04:47 PM</DsTypography>
		<DsIcon icon="info" size="tiny" />
		<DsStatusBadgeV2 phase="execution" label="Running" size="small" />
	</div>
	<div>
		<DsIcon icon="history_2" size="small" />
		<DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
		<DsButtonV3 variant="tertiary" color="light" size="small" icon="more_vert" aria-label="More actions" />
	</div>
</DsWorkspaceLayout.Header>`;

const example = type === 'pending' ? pendingHeader : type === 'running' ? runningHeader : draftHeader;

export default {
	example,
	imports: [
		"import { DsWorkspaceLayout, DsButtonV3, DsTypography, DsIcon, DsStatusBadgeV2 } from '@drivenets/design-system';",
	],
	id: 'ds-workspace-layout-header',
	metadata: { nestable: true },
} satisfies figma.Template;
