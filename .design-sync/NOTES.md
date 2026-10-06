# design-sync notes — @drivenets/design-system

## Setup

- pnpm isn't on PATH on this machine; the global `corepack enable` symlink step
  fails with EACCES (no write access to `/usr/local/bin`). Use `corepack pnpm
<cmd>` directly instead of `pnpm <cmd>` — it downloads/activates the pinned
  version (12.4.1) without needing the symlink.
- `npx storybook build` on its own downloads a FRESH standalone `storybook`
  package from the registry, which can't resolve `@storybook/react-vite` from
  this repo's pnpm-isolated `node_modules`. Build the reference storybook from
  inside `packages/design-system` using the package's own local binary:
  `corepack pnpm exec storybook build -c .storybook -o <abs-path-to-sb-reference>`.
- Build inputs: `--node-modules packages/design-system/node_modules` (react/
  react-dom live there, not hoisted to repo root) and `--entry
packages/design-system/dist/index.js` (package's own source repo has no
  `node_modules/@drivenets/design-system` self-symlink).

## [GENERAL] titleMap — every storybook title needs an explicit entry

`titleParts()` in `lib/common.mjs` checks the RAW segment name (or its
titleMap-mapped value) against the exported-symbol set — it never auto-adds
the package's `Ds` prefix. Since every component here exports as `Ds<Name>`
but stories are titled `Components/<Name>` (no prefix), **all ~90 titles
needed an explicit titleMap entry**, not just the handful the build log
initially flagged as ambiguous. Re-sync should re-use the committed
`config.json` titleMap as-is; only ADD entries for brand-new components.

Sub-groupings worth knowing:

- `Components/Table/<X>` (Active Row, Column Groups, Columns, Editable,
  Expansion, Filters, Filters Panel, Loading, Resizable Columns, Row Actions,
  Search, Selection, Virtualized) are all additional story FILES for the same
  `DsTable` component, not separate components — mapped to `"DsTable"`.
- `Components/FormControl/<X>` (CodeInput, DateInput, DatePicker, Number,
  Password, Select, Text, Textarea, TimePicker) are composition demos showing
  `DsFormControl` wrapping each input type — mapped to the INPUT's own export
  (e.g. `"Number": "DsNumberInput"`), which is what a consumer would actually
  import. These stories ADD to that input component's story set alongside its
  own standalone top-level story.
- `(Deprecated)` suffixed titles: `Chip`, `ChipGroup`, `Confirmation`,
  `DateInput`, `DropdownMenuLegacy`, `SystemStatus` are all still real public
  exports (`DsChip`, `DsChipGroup`, etc.) despite the Storybook label — synced
  normally. `ButtonLegacy (Deprecated)` is the ONLY exception: there is no
  public `DsButtonLegacy` export (legacy rendering is an internal prop on
  `DsButton` itself) — excluded (`titleMap: null`).
- Non-visual guideline/example docs excluded via `null`: `Colors`, `Forms`,
  `Layouts`, `Overview`, `TokenMigration`, `SampleForm`, `Scrollbars`.

## [GENERAL] Repo gap — three components aren't in the public barrel

`DsFiltersBar`, `DsSavedFilters`, `DsToggleFilterData` all have full source,
stories, and tests under `packages/design-system/src/components/`, and each
component's own `index.ts` exports correctly — but none of the three is
re-exported from `packages/design-system/src/index.ts`. They are NOT part of
the published package's public API today. Excluded from this sync
(`titleMap: null`) per "ship what's actually built" — flagged to the repo
owner; worth fixing the barrel and re-running this sync once that lands
(`DsFiltersBar` in particular was the subject of the most recent feature
commit, AR-97344).

## [GENERAL] Two global rendering bugs found and fixed — read this before any re-sync

Every component rendered completely unstyled on the first full build. Root
causes (both confirmed via direct `react-dom/server` SSR + Playwright
console/network inspection of the shipped bundle, not guesswork):

1. **React Compiler incompatibility (upstream design-sync tool bug, not a
   repo fix).** `packages/design-system/tsdown.config.ts` registers
   `reactCompilerRolldownPlugin()`, so every compiled component imports
   `{ c as _c } from 'react/compiler-runtime'`. The design-sync converter's
   `bundle.mjs` `reactShim` redirects `react/compiler-runtime` to the same
   shim as `react`/`react/jsx-runtime`, which only defines `jsx`/`jsxs`/
   `jsxDEV`/`Fragment` — no `c` export — so every component threw
   `(0, import_compiler_runtime.c) is not a function` at mount (silently, in
   the browser: React 18+'s `createRoot().render()` doesn't rethrow render
   errors to the caller, it just reports and leaves things visually broken,
   which is why this looked like a pure CSS failure, not a JS exception).
   **Workaround applied for this sync only**: temporarily removed
   `reactCompilerRolldownPlugin()` from `tsdown.config.ts`, rebuilt `dist/`
   (gitignored, not committed), ran the sync, then reverted the config file
   and rebuilt the real `dist/` again at close-out so the repo's working
   tree and published package behavior are unaffected. React Compiler is a
   pure build-time memoization optimization — removing it doesn't change
   component behavior/props/API, so this is safe for verification purposes.
   **This is NOT fixed in the repo** — it recurs on every future sync until
   either the design-sync tool's `react-shim` adds a real `react/
compiler-runtime` `c()` implementation (filed as product feedback) or
   this package's build drops React Compiler. A re-sync must repeat the
   temporary tsdown.config.ts edit, or a different workaround will be
   needed.
2. **Kebab-case/PascalCase naming mismatch (repo-specific, fixed via a
   committed fork).** This repo's convention is kebab-case folders/files
   (`ds-avatar/ds-avatar.tsx`) exporting PascalCase names (`DsAvatar`). The
   design-sync converter's `exportedComponentFor()` (in `story-imports.mjs`)
   decides whether a story's relative component import should redirect to
   the real compiled bundle (correct CSS modules) or get bundled fresh from
   source (story-preview-only esbuild pass with no Sass preprocessor, so
   `.module.scss` imports silently resolve to `{}`) — and it only does exact
   string equality between the resolved file/folder name and the export
   name. Since `"ds-avatar" !== "DsAvatar"`, EVERY component in this repo
   failed that check and got the broken from-source path. Fixed via a
   committed fork at `.design-sync/overrides/story-imports.mjs` (declared in
   `cfg.libOverrides`) that adds a kebab→Pascal normalization fallback.
   **This fork should keep working automatically on future re-syncs** — no
   repeat action needed unless the repo's naming convention changes.

**One component this fork can't reach**: `DsButton`'s own story imports the
INTERNAL `DsButtonNew`/`DsButtonLegacy` implementations directly (neither is
itself a public package export — only the unified `DsButton` wrapper is), so
no name-normalization can resolve them to the real bundle. Fixed with an
owned preview (`.design-sync/previews/DsButton.tsx`) that renders the real
public `DsButton` export (with `design="v1.2"` to reach the same
implementation) instead of relying on the generated story-module wrapper.
The `Showcase` story's table chrome is recreated with inline styles (plain
borders) instead of the original's story-local `.module.scss` (which hits
the same from-source-SCSS limitation, decorative only — graded `close`).

**Also fixed via an owned preview**: `DsTypography`'s `Truncate`/
`TruncateMultiline`/`TruncateWithTooltip`/`ColorsOnDark` stories use a
`withTruncateBox` decorator / `onDark` wrapper class from a story-local
`.module.scss` (same from-source-SCSS limitation) — without it, truncation
had no width constraint to truncate against. `.design-sync/previews/
DsTypography.tsx` inlines the same CSS as plain style objects.

**Any OTHER component whose story imports a story-local `.module.scss` for
decorative/structural wrapper purposes** (not just styling the component
itself) will have the same gap — watch for stories using custom decorators
with their own stylesheet during grading; the symptom is a layout/sizing
difference, not a color/typography difference. Confirmed recurring on:
`DsBulkActions`, `DsSmartTabs`, `DsVerticalTabs`, `DsDropdownMenu`,
`DsMainMenu`, `DsProgressTaskBar`, `DsSpinner`, `DsStepper` (all fixed via
owned previews inlining the same CSS as plain style objects). **Wrinkle**:
when the target only forwards `className` (not `style`) — e.g. `DsStep`'s
`slotProps.indicator` — inline `style` isn't possible; use a literal
non-module class name plus a scoped `<style>` tag in the owned preview
(see `DsStepper`'s `CustomizedVertical` story).

**Separate, narrower capture-tool limitation** (not the scss gap): a story
whose root content is purely `position: fixed` (e.g. `DsSpinner`'s
`ModalLoading`, a full-screen modal overlay) makes `#storybook-root`
collapse to a 0-size box in the STORYBOOK reference capture itself —
`position:fixed` contributes no size to its parent, so `el.screenshot()`
on the root captures a tiny/wrong-size image on the reference side. Not
`sb-error`, not a portal/cardMode case — no config lever fixes it. Graded
`close` rather than `match` for the affected story; flag for awareness,
not a stop-the-batch issue.

## [GENERAL] Harness body padding (24px) is narrower than storybook's canvas chrome (~16px/side)

`.ds-sync/lib/emit.mjs` gives every `?story=` preview page a fixed
`body{padding:24px}` ("the graded framing" gutter, intentional per its own
comment), while storybook's own canvas/docs chrome is narrower. The net
content area in the preview ends up ~16-24px narrower than storybook's —
invisible for most components, but can tip a width-sensitive overflow calc
(`DsTagFilter`'s "Show more (N)" collapse triggered one tag earlier than
storybook on 2 of 6 stories, confirmed via pixel-bbox measurement, graded
`close`). Not fixable from an owned preview (no component-level wrapper
controls the harness page's body padding). Watch for this on any other
width-reactive component (tables, filter bars, nav bars, responsive
wrapping) in future syncs — it's a harness framing characteristic, not a
component defect.

## [GENERAL] CRITICAL — non-portaled overlays render blank (harness-level, affects the real uploaded preview, not just grading)

Every per-story card wrapper the converter emits (`.ds-cell` for the grid
product card, `.ds-single` for both the `?story=` grading capture AND the
single-story product card) carries `transform: translateZ(0)`. Per the CSS
spec, a `transform` on an element establishes a new containing block for
_all_ descendants — including `position: fixed` AND `position: absolute`
ones, even with no intervening `position` ancestor. `DsDrawer` defaults to
`portal={false}` and its `Dialog.Positioner` uses `position:absolute;
inset:0` expecting to size against the viewport — instead it resolves
against the transformed `.ds-cell`/`.ds-single` wrapper, whose only child is
itself absolutely positioned (no in-flow content), so the wrapper collapses
to height 0 and the whole drawer renders blank. `DsCommentsDrawer` (built on
`DsDrawer`, never overrides `portal`) hits this on its Default/Empty/Custom
Empty Message stories. **`DsDrawer` itself will hit the identical bug** —
confirmed its own stories carry the same `"portal": false` capture fact,
still ungraded as of this note. `DsDialog` escapes only because it
hardcodes a Radix `Portal` internally, unrelated to this card-wrapper
transform.

This is NOT just a grading artifact — the SAME wrapper/transform ships in
the real uploaded `components/**/<Name>.html` product cards, so any
claude.ai/design user who opens a non-portaled `DsDrawer`-based component's
card in the design-system pane would see the same blank render.

**Verified**: `cfg.overrides.<Name>.cardMode: "single"` does NOT help —
`.ds-single{transform:translateZ(0)}` in `emit.mjs` carries the identical
transform as `.ds-cell`, so single-card mode hits the same containing-block
trap. The skill's "fixed-position containment" description for single mode
must refer to something else (clipping/overflow), not this.

**`DsDrawer` itself DOES expose a public `portal?: boolean` prop** (default
`false`, uses `@ark-ui/react/portal`'s `Portal` when true — `ds-drawer.tsx`).
An owned preview passing `portal={true}` is a legitimate, representative
fix: it's real supported public API, not a misrepresentation, and a DOM
portal escapes the transformed wrapper entirely by mounting into a
different DOM subtree. **Apply this when grading `DsDrawer` directly.**

**`DsCommentsDrawer` does NOT forward a `portal` prop** — it hardcodes
`<DsDrawer open={...} onOpenChange={...} position="start" columns={4}>`
with no portal control exposed in `DsCommentsDrawerProps`, so there is NO
representative owned-preview fix available without misrepresenting the
component (faking a prop it doesn't actually accept). Left graded
`mismatch` with the full diagnosis — this is the honest grade. Worth
flagging to the component owner as a possible **real production bug**, not
just a sync artifact: any consuming app that renders `DsCommentsDrawer`
inside a `transform`-bearing ancestor (increasingly common for virtualized
lists, sticky headers, CSS containment/performance optimization) would hit
the identical blank-render bug outside of this sync entirely. Consider
exposing a `portal` prop on `DsCommentsDrawer` that forwards to its
internal `DsDrawer`.

## Known limitation — DsBreadcrumb (and anything embedding it) throws: duplicate `@tanstack/react-router` context

`DsBreadcrumb` imports `useLocation` from `@tanstack/react-router` directly
(a peer dependency, not bundled into `dist/`) and throws `TypeError: Cannot
read properties of null (reading 'stores')` in every preview — confirmed via
a Playwright console/pageerror probe, not guesswork. Root cause: the
CONVERTER'S two-bundle architecture duplicates the dependency. The main
`_ds_bundle.js` (re-bundled from `dist/index.js`) gets its own copy of
`@tanstack/react-router` with its own React Context object; the STORY
module (bundled fresh FROM SOURCE in the separate preview-compile pass,
since router-provider decorators aren't package exports) gets a SECOND,
different copy with a different Context object. The story's
`<RouterProvider>` and the component's internal `useRouter()`/
`useLocation()` calls never see the same Context identity even though the
JSX nests correctly — same failure class as "two copies of a context
library" but for a THIRD-PARTY dependency, not a DS component. No clean
config fix exists: `cfg.storyImports.shim` only resolves import paths to
DS component export NAMES via `exportedComponentFor()` (folder/file-name
matching) — it has no mechanism to redirect an arbitrary third-party
package import to the main bundle's already-bundled copy of that same
package. Fixing this properly needs either forking `story-imports.mjs`
further (special-case redirect for shared context-providing dependencies)
or an upstream converter capability (a `cfg.sharedDeps`-style option) that
doesn't currently exist — flagged as design-sync tooling feedback.
**Affects**: `DsBreadcrumb` (both stories), and any component embedding it —
`DsTopBarNavigation`'s `Default`/`Without Apps Button`/`Long Breadcrumb`/
`With Main Menu` stories (4 of 8) fail the same way; its other 4 stories
(no breadcrumb slot rendered) are unaffected. Graded `mismatch`/honest
failure for the affected stories rather than worked around (an owned
preview dropping the router dependency would misrepresent the real
component and would permanently shadow any future real fix).

## [GENERAL] storybook's built-in `layout: 'centered'`/`'padded'` parameter isn't replicated

Storybook's native `parameters.layout = 'centered'` wraps every story in a
flex-centering container in the real reference render. The converter has
no mechanism for this at all (confirmed via grep — nothing in `.ds-sync/lib`
reads `parameters.layout`), so a component whose own root is an
unconstrained block-level box (no explicit `width`, only `min-width`)
stretches to fill the harness page in the preview instead of shrink-wrapping
to content like it does under storybook's centering wrapper. Hit `DsCard`
specifically (fixed via an owned preview wrapping each single-card story in
the same centering flex container) — components whose content is naturally
inline-sized (buttons, triggers) or already flex-wrapped (e.g. `DsStack`)
don't show it. Watch for this on any card/panel/tile-like component with an
unconstrained root and `layout: 'centered'`/`'padded'` in future syncs — a
`cfg`-level fix (replicate the storybook parameter as a wrapper) would be
better than a per-component owned-preview workaround if it recurs widely.

## [GENERAL] CRITICAL — DsGrid's own `.ds-grid` class collides with the harness's own page-chrome class of the same name

`ds-grid.tsx` renders `classNames('ds-grid', {'ds-grid-cols-N':..., 'ds-grid-rows-N':...}, className)` on its root — a real, public, non-module global class (`packages/design-system/src/styles/_grid.scss`: `.ds-grid{display:grid;grid-template-columns:repeat(12,1fr);...}`). `.ds-sync/lib/emit.mjs` ALSO emits an inline `<style>` on every product/compare card defining `.ds-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px;...}` for the harness's OWN per-story card layout. Same selector, same specificity, harness's inline `<style>` is later in document order, so it wins the cascade.

**Confirmed via direct DOM/computed-style inspection** (not guesswork): the component's own modifier classes and the real `.ds-grid{grid-template-columns:repeat(12,1fr)}` bundle rule both exist correctly, but `getComputedStyle(.ds-grid).gridTemplateColumns` resolves to the HARNESS's `auto-fit,minmax(320px,1fr)` formula, and `gap` resolves to the harness's `20px` not the component's own `16px` default.

**NOT grading-only** — the same wrapper/class collision ships in the real uploaded product card, so any claude.ai/design user who opens the `DsGrid` card sees the same broken (non-12-column) layout. No owned-preview workaround exists (the colliding class name is baked into the shipped component, not the story/preview). `emit.mjs` is off-limits to fork (app-contract surface) — this is upstream design-sync tooling feedback, not a repo fix. **Suggested fix for the tool maintainers**: rename the harness's per-story-card layout class to something namespaced that can never collide with a real component's class name (e.g. `.ds-sync-card-grid`).

## DsTable — two unresolved, time-boxed findings (component-specific, not global)

- **"Progress as Infographic" (Columns sub-file)**: custom cell-renderer classes (colored status pills, progress bar) come from a story-local `.module.scss` — same recurring pattern as elsewhere, not fixed this pass (51-story component, time-boxed). Real fix: an owned preview for just this one story inlining the renderer's styles as plain style objects.
- **Virtualized sub-file (6 stories)**: renders a completely empty table body (zero rows, zero empty-state illustration) in every story. Root cause not fully isolated — matches the general class of "container needs a measured height before the screenshot, harness doesn't give it one" (same class as `DsSpinner`'s `ModalLoading` capture issue). Needs the same kind of direct DOM/ResizeObserver inspection used for the `DsGrid` finding above.
- **Grading-contract gap**: `DsTable` has multiple stories across its 14 sub-files sharing the exact same display name ("Default" ×3, "Empty State" ×2, "With Controls" ×2). `compare.mjs` keys grades purely by display name, so duplicates can't be graded independently — one verdict gets forced onto all instances sharing a name (e.g. the base table's working "Empty State" and the broken Virtualized "Empty State" share one key, graded `mismatch` conservatively so the real failure isn't masked). Minor grading-contract limitation, not fixable from this repo.

## Known benign warning — DsSpinner's RENDER_THIN / "mounts have no text and paint nothing"

After setting `cardMode: "single", primaryStory: "Default"` (to fix a
GRID_OVERFLOW from `ModalLoading`'s fixed-position overlay), validate flags
`DsSpinner` with `[RENDER_THIN]` ("mounts have no text and paint nothing").
Confirmed benign by inspecting the actual screenshot: the component
correctly renders its spinning arc graphic — it's legitimately icon-only
with no text content, which is exactly the shape this heuristic can't
distinguish from a truly blank/broken render. No action needed on future
syncs if this warning reappears for the same reason.

## Known limitation — DsFileUpload story module won't compile

`ds-file-upload.stories.tsx` has a top-level `import adapterExampleCode from
'./stories/adapters/simple-file-upload-adapter.ts?raw'` (shows example
adapter code as text in the docs panel). Plain esbuild resolution strips the
`?raw` query suffix before the file is loaded, so the `.ts` file gets parsed
as TypeScript (not loaded as text) and fails with "No matching export ... for
import default" since the file only has named exports. `cfg.storyImports.
loaders` can't selectively target this (it's keyed by extension on the
POST-strip path, which is indistinguishable from any other `.ts` import) —
fixing it properly needs an `onLoad` plugin keyed on esbuild's `args.suffix`,
which means forking `story-imports.mjs` (last-resort escape hatch). Not done
yet — low priority since it only affects one cosmetic code-snippet display,
not the rendered component. `DsFileUpload` currently ships with its generated
(un-owned) preview showing a fallback/floor card until this is forked or the
story's raw-import pattern changes.

## Re-sync risks

- This is the first sync run from a fresh local checkout against a project
  (`DAPDS Latest`, owned by Catalin Mateiu) that was already populated by a
  prior sync from a different machine/session. No local `.design-sync/
previews/` or prior NOTES.md existed, so this run authored the titleMap,
  config, and this file from scratch by reverse-engineering the existing
  remote `_ds_sync.json` anchor (matching namespace `DrivenetsDesignSystem`)
  and the repo's actual Storybook/export surface.
- 73 components are now mapped vs. ~60 in the remote anchor — the gap is
  real new components added to the repo since the project was last synced
  (DsBotButton, DsBulkActions, DsCard, DsCatalogLayout, DsCheckboxGroup,
  DsChip, DsChipGroup, DsCodeInput, DsConfirmation, DsDateInput,
  DsDropdownMenuLegacy, DsEmptyState, DsGrid, DsIcon, DsIllustration,
  DsMainMenu, DsPinToggle, DsProgressTaskBar, DsSegmentGroup... — see the
  driver's `added` list for the authoritative set), not a sync regression.
- `DsButton`'s own stories moved to `versions/ds-button-new/` — if a future
  resync shows `DsButton`'s sourceKey changed, check whether that's a real
  content change or just the file move settling (the file move already
  happened before this sync, so it's baked into the current sourceKey/hash
  the anchor will be built from here).
