// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=15271-7357
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-alert-banner
// component=DsAlertBanner
//
// `DsAlertBannerGlobalV1` is the full-width bar pinned to the top of the viewport. It
// maps to the same `DsAlertBanner` as the inline card but without `inline` (the
// default `global` layout) and with no title. See `ds-alert-banner.figma.ts` for the
// inline variant.
import figma from 'figma';

const instance = figma.selectedInstance;

const variant = instance.getEnum('Type', {
	'info neutral': 'info-neutral',
	'info blue': 'info-blue',
	warning: 'warning',
	error: 'error',
	success: 'success',
});

// The status icon is set automatically by `Type` in Figma; mirror that mapping so the
// snippet passes the matching `DsIcon` name.
const icon = instance.getEnum('Type', {
	'info neutral': 'info',
	'info blue': 'info',
	warning: 'warning',
	error: 'error',
	success: 'check_circle',
});

const closable = instance.getBoolean('Show Dismiss Button');
const showActions = instance.getBoolean('Show Actions');

const closableAttr = closable ? ' closable' : '';
const actionsBlock = showActions
	? `\n\t<DsAlertBanner.Actions>\n\t\t<DsButtonV3 variant="secondary" size="small">Action</DsButtonV3>\n\t</DsAlertBanner.Actions>`
	: '';

export default {
	example: figma.code`<DsAlertBanner open onOpenChange={() => {}} variant="${variant}" icon="${icon}"${closableAttr}>
	<DsAlertBanner.Body>Description</DsAlertBanner.Body>${actionsBlock}
</DsAlertBanner>`,
	imports: [
		"import { DsAlertBanner } from '@drivenets/design-system';",
		"import { DsButtonV3 } from '@drivenets/design-system';",
	],
	id: 'ds-alert-banner-global',
	metadata: { nestable: false },
} satisfies figma.Template;
