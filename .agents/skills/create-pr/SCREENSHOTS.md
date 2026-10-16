# PR screenshots

## Capture

Shoot the Storybook story canvas, not the docs page, so before and after match pixel for pixel.

```bash
pnpm --filter @drivenets/design-system start   # http://localhost:6006
pnpm --filter @drivenets/design-system screenshot <story-id> <out.png>
```

- `<story-id>` is the `?path=/story/<id>` part of the Storybook URL, e.g. `components-toast--long-content`.
- Defaults: 1280×720 viewport, device scale factor 2, light theme (the only one). Override with `--width`, `--height`, `--url` (e.g. a PR's Netlify preview).
- States behind a click (open toast, menu, dialog) → `--click "<visible text>"`, repeatable. Hover, focus or typing → drive your browser tool on the same canvas URL and viewport.
- Name files `before-<state>.png` / `after-<state>.png`, e.g. `before-long-content.png`.

Before: capture on the base commit before the first edit, and upload right away so the URLs survive across sessions and machines. Forgot → `git worktree add ../ds-before $(git merge-base HEAD drivenets/main)`, run Storybook there, capture.

## Host

Images never go into the PR branch. They go on the `pr-screenshots` branch of your fork, one `AR-XXXX/` folder per ticket:

```bash
.agents/skills/create-pr/scripts/upload-screenshots.sh AR-1234 before-long-content.png after-long-content.png
```

The script commits to `origin/pr-screenshots` without checking it out, pushes, and prints one URL per file, pinned to the commit SHA. Paste them into the body's before/after table with `width="420"` and an `alt` that says what is wrong / what changed.
