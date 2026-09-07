# DsTopBarNavigation

## Goal

Add a new `DsTopBarNavigation` compound component to `@drivenets/design-system` — the persistent app-level top bar (brand + app switcher, breadcrumb trail, reserved center zone, right-side actions). It is assembled entirely from existing DS components; no new third-party dependency is introduced.

## Acceptance criteria

- [ ] `DsTopBarNavigation` renders a 54px-tall bar with a white background and a bottom border, laying out its zones left-to-right.
- [ ] `DsTopBarNavigation.Logo` renders a blue block containing the slotted `logo` glyph and `wordmark` node.
- [ ] `.Logo` renders an apps button when `onAppsClick` is provided, and renders no apps button when it is omitted.
- [ ] Clicking the apps button calls `onAppsClick`.
- [ ] When `href` is set on `.Logo`, the logo lockup is a link to that destination.
- [ ] A wordmark longer than the default "DAP" widens `.Logo` instead of being clipped.
- [ ] `DsTopBarNavigation.Breadcrumb` clips an over-long breadcrumb trail instead of pushing `.Actions` off-screen.
- [ ] `DsTopBarNavigation.Actions` stays pinned to the right edge whether or not `.Center` is mounted.
- [ ] `DsTopBarNavigation.Notifications` with `count={13}` shows a red pill reading "13".
- [ ] `.Notifications` with `count={128}` shows a pill reading "99+".
- [ ] `.Notifications` with `count={0}` or no `count` shows the bell with no pill.
- [ ] The bell icon's padding is identical at `count={0}` and `count={13}` — the button never flips into `DsButtonV3`'s icon-only geometry, so the bell does not shift when the last notification is read.
- [ ] `.Notifications` exposes an accessible name that includes the unread count, and the visual pill is not announced separately.
- [ ] `.Notifications` accessible-name strings are overridable via `locale`.
- [ ] `DsTopBarNavigation.UserMenu` renders an avatar with a caret; clicking it opens a menu containing the passed children.
- [ ] Selecting a menu entry closes the menu.
- [ ] The component tree contains exactly one navigation landmark (the breadcrumb's own) — the bar root adds none.
- [ ] `DsTopBarNavigation` and all subcomponent prop types are importable from `@drivenets/design-system`.

## Decisions

Locked during grill-me. Not open for re-debate.

- **Name** — `ds-top-bar-navigation` / `DsTopBarNavigation`. No `V1` suffix (repo uses `-v2`/`-v3` for later generations only; Figma's `DsBreadcrumbV1` → `ds-breadcrumb` sets the precedent).
- **Shape** — compound component via `Object.assign`, matching `DsWorkspaceLayout` / `DsCatalogLayout`. All subcomponent prop types exported from the barrel.
- **Zones** — four: `.Logo`, `.Breadcrumb`, `.Center`, `.Actions`.
- **Parts** — `.Notifications` and `.UserMenu`, placed by the consumer inside `.Actions`.
- **`.Center`** — deliberately reserved for future content; empty today. Document as an intentional reservation.
- **`.Actions` is an open slot** — accepts arbitrary children (e.g. a NetGen `DsButtonV3`) alongside `.Notifications` / `.UserMenu`. This overrides Figma's "not a generic drop-zone" note.
- **Space distribution** — `.Center { flex: 1 }`, `.Actions { margin-inline-start: auto }`, `.Breadcrumb { min-width: 0; overflow: hidden }`. Works identically with `.Center` absent.
- **Root element** — plain `<div>`, no landmark. Avoids nesting a `<header>` inside `DsWorkspaceLayout.Header` and avoids a second navigation landmark around the breadcrumb's own. Rejects Figma's `role="navigation"` note as drift.
- **`.Logo` is tenant-neutral** — `logo` and `wordmark` are both `ReactNode` slots. The DS owns the frame, gaps and typography only. No brand SVG is vendored into the package.
- **`.Logo` sizing** — height fixed at 54px, `min-width: 174px` with auto-grow (fixed 174px would clip a slotted wordmark longer than "DAP").
- **`.Logo` apps button** — `DsButtonV3` `variant="tertiary"` `color="light"` `size="large"` `icon="apps"`, per the Code Connect snippet. Requires an `aria-label` from `locale`.
- **`.Notifications`** — wraps `DsButtonV3` `variant="tertiary"` `size="small"` `icon="notifications_active"`, count pill passed as children.
- **32px → 28px is accepted drift.** Figma's bell is 32px tall; `DsButtonV3` offers 28 (`small`) / 36 (`medium`). Snap to `small`; do not override another DS component's height from outside.
- **Count model** — `count?: number`. `0`/`undefined` hides the pill. Cap is hardcoded at 99 → `"99+"` (Figma states it as a content rule, not a knob). Pill is `aria-hidden`; the count reaches AT via the button's accessible name. No `aria-live` — a polite region on persistent chrome is noise.
- **`.UserMenu` owns its menu** — renders `DsDropdownMenu.Root` + a trigger built from `DsAvatar` (`size="regular"`, `type="circle"`) plus a 20px `arrow_drop_down` `DsIcon`, with menu entries passed as children. Positioning, Esc/outside-click and `aria-haspopup`/`aria-expanded` come from `DsDropdownMenu`.
- **No `.BotButton`.** With label and logo slotted it adds nothing over `DsButtonV3` props. `DsButtonV3`'s `highEmphasis` JSDoc already names NetGen as its reason to exist. NetGen ships as a Storybook example plus a Code Connect mapping instead.
- **Locale** — per-subcomponent `locale` prop, matching `DsWorkspaceLayout.SideMenu`. No root-level locale.
- **Figma is a seed, not truth.** Its fixed 920px left frame and absolutely-positioned breadcrumb at `x=204` are artifacts; use real flex. Its `py-[23px]` on a 54px box is nonsense; use a fixed height.

### Known drift to state in the PR description

- The NetGen button rendered as plain `DsButtonV3` will **not** match Figma: the design specifies a `--blue-grad-2` (#2ab2ff) border and a Poppins (`--font-family-heading`) 12px label; `variant="secondary"` gives the standard border token and Roboto. Accepted trade for zero new code.
- `DsButtonV3` sets `aria-pressed` unconditionally ([`ds-button-v3.tsx:44`](../packages/design-system/src/components/ds-button-v3/ds-button-v3.tsx)), so `.Notifications` will announce as a toggle button. Inherited defect — raise as a separate follow-up against `DsButtonV3`, do not fix here.
- The `<div>` root means a standalone bar contributes no `banner` landmark. Document that consumers using it outside a layout component should wrap it in their own `<header>`.

## Out of scope

- Any modification to `DsButtonV3` — including adding a `netgen` variant (Figma v04 intent) or fixing its unconditional `aria-pressed`.
- Any modification to `DsBreadcrumb` — including a `maxItems` / "first / … / last" collapse prop.
- JS-driven responsive collapse of the breadcrumb trail (no `ResizeObserver`, no measurement).
- Vendoring any brand asset (DAP favicon, wordmark SVG, AT&T mark) into the package.
- A `.BotButton` subcomponent.
- Tenant/company variants (`att` | `dap`).

## Design source

<https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=34524-145866&m=dev>

- File key: `nha3m67y7S57cHCSuQO2gp`
- Bar node: `34524:145866` (`DsTopBarNavigationV1`), main component `9543:40942`
- Bot button node: `40935:37071` (`DsBotButtonV1`)

## Touch

- `packages/design-system/src/components/ds-top-bar-navigation/` — new folder
  - `index.ts`
  - `ds-top-bar-navigation.tsx`
  - `ds-top-bar-navigation.types.ts`
  - `ds-top-bar-navigation.module.scss`
  - `ds-top-bar-navigation.stories.tsx`
  - `ds-top-bar-navigation.figma.ts`
  - `__tests__/ds-top-bar-navigation.browser.test.tsx`
- `packages/design-system/src/index.ts` — barrel export (alphabetical, after `ds-tooltip`)
- `packages/design-system/src/components/ds-button-v3/ds-bot-button.figma.ts` — **new file** for the `DsBotButtonV1` → `DsButtonV3` NetGen mapping. It cannot be an edit to `ds-button-v4.figma.ts` as originally planned: each Code Connect file exports a single template with one `id` and binds to its Figma node via the `// url=` header.
- `.changeset/` — new changeset (minor)

Reused, not modified: `ds-button-v3`, `ds-breadcrumb`, `ds-avatar`, `ds-icon`, `ds-dropdown-menu`.

## Steps

- [ ] 1. Read DS guidelines and the reused components' docs before writing any code (hard gate — no CSS values or token names from memory or from Figma raw output).
- [ ] 2. Write `ds-top-bar-navigation.types.ts` — root props plus `Logo` / `Breadcrumb` / `Center` / `Actions` / `Notifications` / `UserMenu` prop interfaces.
- [ ] 3. Write `ds-top-bar-navigation.module.scss` — zone layout, `.Logo` blue frame, notification pill. DS tokens only; any unmapped Figma value becomes a component-scoped variable, flagged for review.
- [ ] 4. Write `ds-top-bar-navigation.tsx` — compose `DsButtonV3`, `DsAvatar`, `DsIcon`, `DsDropdownMenu`; assemble via `Object.assign` with `displayName` on every subcomponent.
- [ ] 5. Add `index.ts` and the `src/index.ts` barrel export.
- [ ] 6. Write `ds-top-bar-navigation.stories.tsx` — assembled default matching the Figma frame; no-apps-button; counts 0 / 13 / 128; long-breadcrumb clipping; NetGen `DsButtonV3` in `.Actions`; user menu open.
- [ ] 7. Write `__tests__/ds-top-bar-navigation.browser.test.tsx` — capping, zero-count pill hiding, no-layout-shift between count 0 and 13, accessible name carrying the count, apps button conditional rendering, user menu open/select.
- [ ] 8. Write `ds-top-bar-navigation.figma.ts` and add the `DsBotButtonV1` → `DsButtonV3` mapping.
- [ ] 9. Rewrite pass — verify every color/spacing/typography/radius is a DS token, public props match `component-api` conventions (including domain-agnostic naming), and existing `ds-*` components are used wherever Figma shows equivalent UI.
- [ ] 10. Add a changeset and run all checkers.

## Skills per step

| Step | Read fully                                                                                                             |
| ---- | ---------------------------------------------------------------------------------------------------------------------- |
| 1    | [`figma-to-component`](../.claude/skills/figma-to-component/SKILL.md) (Step 3 gate)                                    |
| 2    | [`component-api`](../.claude/skills/component-api/SKILL.md), [`ts-standards`](../.claude/skills/ts-standards/SKILL.md) |
| 3    | [`scss`](../.claude/skills/scss/SKILL.md)                                                                              |
| 4    | [`react-patterns`](../.claude/skills/react-patterns/SKILL.md)                                                          |
| 5    | [`component-scaffold`](../.agents/skills/component-scaffold/SKILL.md)                                                  |
| 6    | [`storybook`](../.claude/skills/storybook/SKILL.md)                                                                    |
| 7    | [`browser-tests`](../.claude/skills/browser-tests/SKILL.md)                                                            |
| 8    | [`figma-to-component`](../.claude/skills/figma-to-component/SKILL.md) (Code Connect section)                           |
| 9    | [`component-api`](../.claude/skills/component-api/SKILL.md), [`deslop`](../.claude/skills/deslop/SKILL.md)             |
| 10   | [`pr-prep`](../.claude/skills/pr-prep/SKILL.md)                                                                        |

## Verify

Run from workspace root, on changed paths only.

```bash
pnpm eslint packages/design-system/src/components/ds-top-bar-navigation/
```

```bash
pnpm --filter @drivenets/design-system typecheck
```

```bash
pnpm --filter @drivenets/design-system test packages/design-system/src/components/ds-top-bar-navigation/ --run
```

```bash
pnpm --filter @drivenets/design-system test packages/design-system/tests/exports.test.ts --run
```

```bash
pnpm --filter @drivenets/design-system figma:lint
```
