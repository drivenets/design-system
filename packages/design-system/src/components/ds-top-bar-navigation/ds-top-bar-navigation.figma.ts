// url=https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=9543-40942
// source=https://github.com/drivenets/design-system/tree/main/packages/design-system/src/components/ds-top-bar-navigation
// component=DsTopBarNavigation
//
// `DsTopBarNavigationV1` maps to the `DsTopBarNavigation` compound component. Figma models the
// bar as a fixed 920px left frame with an absolutely-positioned breadcrumb; in code the zones
// are flex (`.Logo` fixed-basis, `.Breadcrumb` shrinkable, `.Center` reserved, `.Actions`
// pinned right), so none of that geometry maps to props.
//
// The brand glyph and wordmark are consumer slots — no brand asset ships with the design
// system — so they are emitted as placeholders. Figma's `DsBotButtonV1` maps to `DsBotButton`,
// which is connected separately in `ds-bot-button/ds-bot-button.figma.ts`.
import figma from 'figma';

export default {
	example: figma.code`<DsTopBarNavigation>
	<DsTopBarNavigation.Logo logo={<img src="/brand-mark.svg" alt="" />} wordmark="DAP" href="/" onAppsClick={() => {}} />
	<DsTopBarNavigation.Breadcrumb>
		<DsBreadcrumb items={[]} />
	</DsTopBarNavigation.Breadcrumb>
	<DsTopBarNavigation.Center />
	<DsTopBarNavigation.Actions>
		<DsTopBarNavigation.Notifications count={13} onClick={() => {}} />
		<DsBotButton />
		<DsTopBarNavigation.UserMenu name="Full Name">
			<DsDropdownMenu.Item value="profile">Profile</DsDropdownMenu.Item>
		</DsTopBarNavigation.UserMenu>
	</DsTopBarNavigation.Actions>
</DsTopBarNavigation>`,
	imports: [
		"import { DsTopBarNavigation, DsBotButton, DsBreadcrumb, DsDropdownMenu } from '@drivenets/design-system';",
	],
	id: 'ds-top-bar-navigation',
	metadata: { nestable: false },
} satisfies figma.Template;
