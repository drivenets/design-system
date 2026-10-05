# Visual tests on Stories in a pinned Playwright container

DsTable regressions kept slipping past manual testing, so **Stories** tagged `visual` get a **Visual test**: Vitest's `toMatchScreenshot` runs from a Storybook `afterEach` in a dedicated `storybook-visual` project, and **Baselines** are committed PNGs. The browser runs in the `mcr.microsoft.com/playwright` image matching our `playwright` version (Vitest connects over `connectOptions.wsEndpoint`), so macOS and CI render the same pixels (within a 200-pixel budget per screenshot) and anyone can update baselines with `-u`. This is an interim step: the long-term target is Chromatic, so stabilization lives in stories (seeded data, pinned fonts, `parameters.chromatic.*`) and carries over unchanged.

## Considered Options

- **Adopt Chromatic instead (not used today)** — best review UI, but paid per snapshot and uploads Storybook to a third party; deferred, not rejected.
- **Screenshots in Browser tests (`composeStories`)** — can capture interaction states, but every new story must be wired by hand. Stories already document appearance (ADR 0003), so snapshotting them needs no `play` functions.
- **Playwright Test against `storybook-static`** — mature diffing, but adds a second test runner.
- **Per-platform or CI-only baselines** — either doubles the PNGs or removes the local feedback loop.
- **Git LFS** — not worth the clone/CI/quota setup for a few MB that go away when we move to Chromatic.

## Consequences

- `pnpm test` does not run Visual tests (they need Docker); CI runs them in the `visual-tests` job.
- Visual runs load fonts from pinned `@fontsource/*` and `material-symbols` packages instead of Google Fonts, so upstream font updates never change baselines. Bump them deliberately and regenerate baselines.
- Bumping `playwright` changes the container image and may require regenerating baselines.
- The container is pinned to `linux/amd64` (CI's architecture); Chromium renders some pixels differently on arm64, so Apple Silicon runs it under emulation. Locally that only matters when you run `test:visual`: the first container start takes ~40s and a DsTable run ~40s. CI runs the job whenever `@drivenets/design-system` is affected (~1m40s).
- Zero tolerance doesn't hold on GitHub-hosted runners: their CPU models vary, and anti-aliased half-pixel edges (e.g. DsTable header and last-row checkbox borders) move by up to ~150 pixels between runs. Each screenshot therefore allows 200 mismatched pixels (0.02%). A 1px layout change across a row of elements moves well over 1,000, but a 1px shift of a single small element can slip through.
- Screenshots capture the whole `document.body` at 1280×800. Vitest's best practices recommend capturing only the component, but stories are full-page fixtures, and popovers, menus and drawers render in portals outside the story root.
- The budget is an absolute pixel count, not `allowedMismatchedPixelRatio`. The noise comes from individual element edges, so it doesn't shrink with the screenshot. A ratio would make smaller screenshots flaky. Since every screenshot is the same size, the two are equivalent today. The real fix is putting those checkboxes on whole pixels, after which the budget can drop.
