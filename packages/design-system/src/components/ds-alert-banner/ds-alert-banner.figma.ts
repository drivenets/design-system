// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=14850-7088
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-alert-banner
// component=DsAlertBanner
//
// `DsAlertBannerInlineV1` is the inline (bordered card) banner that sits in normal
// document flow. It maps to the controlled `DsAlertBanner` with `inline`. The
// full-width, top-of-viewport `DsAlertBannerGlobalV1` maps to the same component
// without `inline` — see `ds-alert-banner-global.figma.ts`.
import figma from 'figma';

const instance = figma.selectedInstance;

const variant = instance.getEnum('Type', {
	'Info Neutral': 'info-neutral',
	'Info Blue': 'info-blue',
	Warning: 'warning',
	Error: 'error',
	Success: 'success',
});

// The status icon is set automatically by `Type` in Figma; mirror that mapping so the
// snippet passes the matching `DsIcon` name.
const icon = instance.getEnum('Type', {
	'Info Neutral': 'info',
	'Info Blue': 'info',
	Warning: 'warning',
	Error: 'error',
	Success: 'check_circle',
});

const closable = instance.getBoolean('Show Dismiss Button');
const showTitle = instance.getBoolean('Show Titles');
const showActions = instance.getBoolean('Show Actions');

const closableAttr = closable ? ' closable' : '';
const titleLine = showTitle ? `\n\t<DsAlertBanner.Title>Title</DsAlertBanner.Title>` : '';
const actionsBlock = showActions
	? `\n\t<DsAlertBanner.Actions>\n\t\t<DsButtonV3 variant="secondary" size="small">Action</DsButtonV3>\n\t</DsAlertBanner.Actions>`
	: '';

export default {
	example: figma.code`<DsAlertBanner open onOpenChange={() => {}} inline variant="${variant}" icon="${icon}"${closableAttr}>${titleLine}
	<DsAlertBanner.Body>Description</DsAlertBanner.Body>${actionsBlock}
</DsAlertBanner>`,
	imports: [
		"import { DsAlertBanner } from '@drivenets/design-system';",
		"import { DsButtonV3 } from '@drivenets/design-system';",
	],
	id: 'ds-alert-banner',
	metadata: { nestable: false },
} satisfies figma.Template;
