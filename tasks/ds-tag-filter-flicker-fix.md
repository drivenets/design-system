# DsTagFilter — stop the overflow-measurement flicker loop [AR-95666]

## Bug

<https://drivenets.atlassian.net/browse/AR-95666>

The TagFilter "Small Size" story re-lays out continuously (~0.3–0.6s period) with the
pointer idle: the tag row jumps between one and two rows and a delete (×) icon animates
in and out.

## Reproduction (confirmed)

Deterministic in `--project=browser` at a 1280x900 viewport, `SmallSize` items, with
`onItemDelete` supplied. Hovering the last visible tag makes the row height oscillate
between 26px and 60px indefinitely. Trigger widths found by sweeping the container in
20px steps: **540, 740, 920, 1040, 1060**. Away from those tipping points the layout is
stable, which is why only this story misbehaves.

## Root cause

Four defects compose into a closed feedback loop:

1. **Measurement ignores the hover state.** `getElementMeasurements` measures the
   off-screen clones in `.measurementContainer`, where `.deleteButton` is collapsed
   (`max-width: 0`). The live tag grows by the button width + `margin-left` on
   `:hover`, animated over 200ms. So `fitTagsInRow` packs N tags to exactly fill a row
   using a width each tag can exceed at any moment.
2. **`.tagsArea` is `flex-wrap: wrap`.** The overshoot from (1) wraps the last tag to a
   second row instead of being absorbed, changing the area's height.
3. **The `ResizeObserver` observes `tagsAreaRef`** — an element whose size is an _output_
   of the calculation (it is `flex: 1` beside an `.actions` block that only renders the
   toggle when `hasOverflow`, with a label whose width tracks `hiddenCount`). Output
   feeding input closes the loop.
4. **`calculateLayout` always calls `setState` with a fresh object**, so every observer
   tick re-renders even when `visibleTagCount` and `hasOverflow` are unchanged.

The cycle: hover grows the tag → it wraps → height changes → RO fires → recalculate →
the row re-lays out → the tag is no longer under the stationary pointer → it un-hovers
and shrinks (200ms) → un-wraps → RO fires → the tag is back under the pointer → repeat.
Two chained 200ms transitions match the reported period.

## Tasks

- [ ] **T1 — Regression test (RED).** Add a browser test asserting the row settles and
      stays settled with the pointer parked on the last visible tag, at the confirmed
      trigger widths. Must fail on `main`.
- [ ] **T2 — Measure the worst case.** Render the measurement clones with the delete
      affordance expanded and transitions disabled, so a measured width is the widest the
      tag can ever render. Space for the × is then reserved rather than discovered on hover.
- [ ] **T3 — Do not wrap while collapsed.** `.tagsArea` keeps `flex-wrap: wrap` only when
      `expanded`; collapsed it is `nowrap` so residual overshoot cannot change the height.
- [ ] **T4 — Observe a stable box.** Move the `ResizeObserver` to the outer container,
      whose width is set by the parent and does not depend on the calculation's result.
- [ ] **T5 — Make the update idempotent.** Bail out of `setState` when the computed
      `visibleTagCount` / `hasOverflow` are unchanged.
- [ ] **T6 — Verify.** `test:browser`, `test:unit`, `typecheck`, `lint`, and the docs
      snapshot for this component; refresh `ds-tag-filter.docs.snap` only if the public
      snippet genuinely changed.

## Acceptance criteria

- [ ] With the pointer resting on any tag, the row reaches a layout and does not change again.
- [ ] Holds at the confirmed trigger widths (540, 740, 920, 1040, 1060) and across a sweep.
- [ ] Hovering a tag never wraps the collapsed row to a second row.
- [ ] The delete button stays fully visible and clickable on hover — reserved, not clipped.
- [ ] `onItemDelete` / `onItemSelect` / `onClearAll` / expand-collapse behavior unchanged.
- [ ] Existing `ds-tag-filter` browser and utils tests still pass, unmodified.
- [ ] No change to `DsTag`'s public API.

## Out of scope

- Any change to `DsTag`'s hover-reveal interaction design (the × still appears on hover).
- The `aria-live="polite"` on the tags area (noisy, but pre-existing and separate).
- Reconciling the reporter's note that the × "isn't expected in this story" — `SmallSize`
  does pass `onItemDelete`, so the icon is correct; only the flicker is a defect.
- JS-driven responsive truncation of tag labels.

## Note for the PR description

Slightly fewer tags may fit on the first row than before, because the row now reserves
the delete button's width instead of discovering it on hover. That is the fix, not a
side effect: it is what stops the row resizing under the pointer.
