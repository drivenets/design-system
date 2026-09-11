# DsTag — filter variants and shape

## Goal

Extend the existing `DsTag` with two filter-oriented variants (`operator-filter`, `query-filter`) and three cross-cutting props (`shape`, `warning`, `onExpandClick`) so the complex filter views can build `field ≠ value` and `region › site` chips. No new component is introduced; `DsTag` stays a layout primitive and the consumer composes the interactive parts.

## Acceptance criteria

- [ ] `TagVariant` is `'default' | 'include' | 'exclude' | 'key-value' | 'operator-filter' | 'query-filter'`.
- [ ] `variant="operator-filter"` requires `value`; omitting it is a type error.
- [ ] `variant="query-filter"` requires `value`; omitting it is a type error.
- [ ] `value` remains forbidden on `default` / `include` / `exclude`.
- [ ] `variant="key-value"` renders `label` then `:` then `value`, with `label` in the medium weight and `value` muted — unchanged from today.
- [ ] `variant="query-filter"` renders `label` then a `keyboard_arrow_right` separator then `value`, with the emphasis flipped: `label` regular, `value` in the semi-bold weight.
- [ ] `variant="operator-filter"` renders `label`, then `slots.operator`, then `value`.
- [ ] `slots.operator` is ignored by every variant other than `operator-filter`.
- [ ] Clicking inside `slots.operator` does not fire the tag's own `onClick`.
- [ ] `shape="round"` renders a pill; `shape="default"` (and no `shape`) renders the current 4px radius.
- [ ] `shape` applies to all six variants at both `size` values.
- [ ] `warning` renders a trailing dot; without `warning` no dot is rendered.
- [ ] The warning dot exposes an accessible name, overridable via `locale.warningAriaLabel`.
- [ ] `onExpandClick` present renders a chevron button; absent renders none — the same contract as `onDelete`.
- [ ] Clicking the chevron calls `onExpandClick` and does not fire the tag's own `onClick`.
- [ ] `DsTag` holds no expanded state and renders no expanded region.
- [ ] `warning` and `onExpandClick` work on every variant, not just the filter ones.
- [ ] `disabled` suppresses the chevron the same way it suppresses the delete button.
- [ ] A long `value` still truncates with an ellipsis in `key-value`, `operator-filter` and `query-filter`.
- [ ] `TagShape` and the new props are importable from `@drivenets/design-system`.
- [ ] `DsTagFilter` compiles and behaves unchanged.

## Decisions

Locked during interview. Not open for re-debate.

- **Extend `DsTag`, do not fork.** One component, six variants.
- **Guiding rule: avoid configuration, allow composition.** Every new knob must be _state_, never a pass-through config bag.
- **The operator control is a slot, not a callback.** `slots.operator` — the consumer supplies its own `DsSelect` / `DsDropdownMenu`, fully wired. Rejected: `operator` + `onOperatorClick` + an `operators` list, because the operator set is field-dependent (`=` `≠` `>` `<` for numbers, `contains` / `starts with` for strings) and any such prop would be a pass-through that ages badly.
- **`DsButtonV4` is not built.** Figma nests it inside `operator-filter`; `slots.operator` means the consumer brings its own trigger, so the missing component is not a blocker.
- **`query-filter` is a real variant, not free-form content.** It is `key-value`-shaped with two deltas: a `›` chevron separator instead of `:`, and inverted emphasis (the tail segment is the strong one, because a drill-down path's leaf is what the user is looking at). Rejected: a `separator?: ReactNode` prop — it covers only the glyph, leaves typography wrong, and is exactly the configuration knob the rule forbids.
- **`shape` reuses `DsSkeleton`'s vocabulary:** `'default'` (4px) | `'round'` (pill). Not `pill` / `rounded`.
- **`warning` is a pure boolean** plus `locale.warningAriaLabel`, mirroring the existing `locale.deleteAriaLabel`. Rejected: a `warningMessage` prop, which would drag tooltip rendering into `DsTag`; the consumer wraps in `DsTooltip` and owns the copy.
- **`onExpandClick` is callback-only**, following the existing `onDelete` pattern — handler present ⇒ affordance renders. `DsTag` owns no expanded state and no `aria-expanded` region for now.
- **`key-value` keeps its colon as CSS generated content.** Reverted an earlier decision to move it into text: doing so changed the tag's text content and would have broken every consumer's `getByText('Category')` into `getByText('Category:')`. The colon now lives on a `.keyColon` modifier so `operator-filter`, which shares `.key`, takes none.
- **`shape: 'round'` overlaps `DsChip`** (already `border-radius: 100vmax`). Resolved with a docs note on when to reach for which, not a component merge.

## Out of scope

- Any new component; no `DsTagOperatorFilter`, no `DsTagQueryFilter`, no `DsButtonV4`.
- Expand _behavior_ — no internal `expanded` state, no `aria-expanded`, no disclosure region, no panel.
- `DsTag` owning the operator menu, its option list, or its open/close state.
- `DsTag` owning tooltip rendering or warning copy.
- Any change to `DsTagFilter` (`ds-tag-filter/`) — it must keep compiling, but gains nothing here.
- Reconciling `DsTag shape="round"` with `DsChip` beyond a docs note.
- JS-driven overflow measurement or responsive truncation of the tag row.

## Design source

<https://www.figma.com/design/nha3m67y7S57cHCSuQO2gp/DAP-Design-System-1.2?node-id=42392-88205&m=dev>

- File key: `nha3m67y7S57cHCSuQO2gp`
- Content frame: `42392:88205` (`Part_TagContent`) — five `type` values × two `size` values
- `type=operator-filter, size=medium`: `42392:88171` — `Label` + `DsButtonV4` trigger + `value`, with hidden `warning` ellipse and hidden `Part_expandCollapseBtn_v01`
- `type=query-filter, size=medium`: `42392:88032` — `Slot` containing `Label` + `DAP_GM_O_keyboard_arrow_right` + `Label`, same two hidden trailing elements

### Measured baseline (Storybook @ `901f7e30`, verified)

|                        | Figma 1.2 | Storybook today | delta |
| ---------------------- | --------- | --------------- | ----- |
| `size="medium"` height | 26px      | 30px            | +4    |
| `size="small"` height  | 22px      | 26px            | +4    |

- Cause: `.tag { padding: var(--3xs) var(--xs) }` — `--3xs` is 4px; the Figma heights only close at 2px (`--4xs`, already defined in `styles/_root.scss:453`).
  - small: 16px line + 2+2 padding + 1+1 border = 22 ✓
  - medium: 20px line + 2+2 padding + 1+1 border = 26 ✓
- Measured `key-value` emphasis: key `font-weight: 500` / `--font-main`, value `400` / `--font-secondary`, both `14px/20px`.
- **OPEN — not yet decided:** whether this task adopts the 26/22 heights. It is a pre-existing, cross-cutting deviation affecting every `DsTag` already in production, not something the new variants introduce.

- `shape` is **not** modelled in this node — it comes from the interview, not Figma. Confirm the round radius token against the design before hardcoding a value.

## Touch

- `packages/design-system/src/components/ds-tag/ds-tag.types.ts` — `tagVariants` grows by two, new `tagShapes` / `TagShape`, `shape` / `warning` / `onExpandClick` on the base props, `locale.warningAriaLabel`, `slots.operator`, union members for the two new variants
- `packages/design-system/src/components/ds-tag/ds-tag.module.scss` — drop `.key::after`, add separator / emphasis rules for `query-filter`, operator slot layout, `.round`, warning dot, chevron button
- `packages/design-system/src/components/ds-tag/ds-tag.tsx` — render branches for the two new variants, warning dot, chevron button, `stopPropagation` on the operator slot
- `packages/design-system/src/components/ds-tag/ds-tag.unit.test.ts` — `TagVariant` equality assertion and the `value`-required cases for both new variants
- `packages/design-system/src/components/ds-tag/__tests__/ds-tag.browser.test.tsx` — behavioral coverage
- `packages/design-system/src/components/ds-tag/ds-tag.stories.tsx` — stories for both variants, `shape`, `warning`, expand
- `packages/design-system/src/components/ds-tag/ds-tag.figma.ts` — map `operator-filter` / `query-filter` into the `Type` enum (currently only `default` / `include-exclude` / `key-value`)
- `packages/design-system/src/components/ds-tag/__tests__/__snapshots__/ds-tag.docs.snap` — regenerate
- `.changeset/` — new changeset (minor)

Reused, not modified: `ds-icon`, `ds-stack`, `ds-typography`. Must keep compiling: `ds-tag-filter`.

## Steps

- [ ] 1. Read the DS guidelines for types, SCSS and tests before writing code — no token names or radius values from memory.
- [ ] 2. Lock in the `key-value` separator and truncation behavior with browser tests **before** touching `.key::after`, so the refactor is provably behavior-preserving.
- [ ] 3. `ds-tag.types.ts` — extend `tagVariants`, add `tagShapes` / `TagShape`, add `shape` / `warning` / `onExpandClick` / `locale.warningAriaLabel` / `slots.operator`, and add the two union members requiring `value`.
- [ ] 4. `ds-tag.unit.test.ts` — update the `TagVariant` equality assertion and add required-`value` / forbidden-`value` cases for both new variants.
- [ ] 5. `ds-tag.module.scss` — remove `.key::after`, move the separator into markup, add `query-filter` emphasis, operator slot layout, `.round`, warning dot, chevron.
- [ ] 6. `ds-tag.tsx` — render the two new variants, the warning dot with its accessible name, the chevron gated on `onExpandClick`, and stop click propagation out of `slots.operator`.
- [ ] 7. `ds-tag.stories.tsx` — `OperatorFilter` (with a real `DsSelect` in the slot), `QueryFilter`, `Round`, `Warning`, `Expandable`, plus small-size coverage.
- [ ] 8. `__tests__/ds-tag.browser.test.tsx` — operator slot click isolation, chevron conditional render + isolation, warning dot presence and accessible name, `disabled` suppressing the chevron, ellipsis on long values.
- [ ] 9. `ds-tag.figma.ts` — add the two `Type` values and the new props to the emitted example.
- [ ] 10. Rewrite pass — confirm every color / spacing / radius is a DS token, props follow `component-api` naming, and add the `DsChip` vs `shape="round"` docs note.
- [ ] 11. Regenerate the docs snapshot, add a changeset, run all checkers.

## Skills per step

| Step | Read fully                                                                                                             |
| ---- | ---------------------------------------------------------------------------------------------------------------------- |
| 1    | [`figma-to-component`](../.claude/skills/figma-to-component/SKILL.md)                                                  |
| 2    | [`browser-tests`](../.claude/skills/browser-tests/SKILL.md), [`tdd`](../.claude/skills/tdd/SKILL.md)                   |
| 3    | [`component-api`](../.claude/skills/component-api/SKILL.md), [`ts-standards`](../.claude/skills/ts-standards/SKILL.md) |
| 4    | [`ts-standards`](../.claude/skills/ts-standards/SKILL.md)                                                              |
| 5    | [`scss`](../.claude/skills/scss/SKILL.md)                                                                              |
| 6    | [`react-patterns`](../.claude/skills/react-patterns/SKILL.md)                                                          |
| 7    | [`storybook`](../.claude/skills/storybook/SKILL.md)                                                                    |
| 8    | [`browser-tests`](../.claude/skills/browser-tests/SKILL.md)                                                            |
| 9    | [`figma-to-component`](../.claude/skills/figma-to-component/SKILL.md) (Code Connect section)                           |
| 10   | [`component-api`](../.claude/skills/component-api/SKILL.md), [`deslop`](../.claude/skills/deslop/SKILL.md)             |
| 11   | [`docs-tests`](../.claude/skills/docs-tests/SKILL.md), [`pr-prep`](../.claude/skills/pr-prep/SKILL.md)                 |

## Verify

Run from workspace root, on changed paths only.

```bash
pnpm eslint packages/design-system/src/components/ds-tag/
```

```bash
pnpm --filter @drivenets/design-system typecheck
```

```bash
pnpm --filter @drivenets/design-system test src/components/ds-tag/ --run
```

```bash
pnpm --filter @drivenets/design-system test src/components/ds-tag-filter/ --run
```

```bash
pnpm --filter @drivenets/design-system test tests/exports.unit.test.ts --run
```

```bash
pnpm --filter @drivenets/design-system figma:lint
```
