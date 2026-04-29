# migrate-tokens

One-shot migration scripts that rewrite old design-system CSS custom property names (`--color-*`, `--spacing-*`, …) to the new token system across a codebase.

> **Lifespan.** These scripts exist to bridge a single token rename. They were used inside this repo to migrate `packages/design-system/**` and will be reused once more in the applications repo to migrate consumer code. **Once both migrations are complete, this folder should be deleted.**

## What it does

The migration is driven by the mapping table in [`packages/design-system/src/stories/token-migration.mdx`](../../packages/design-system/src/stories/token-migration.mdx). Each mapping has a status:

| Status    | Meaning                                | How the script handles it                                                   |
| --------- | -------------------------------------- | --------------------------------------------------------------------------- |
| `Renamed` | Same resolved value, new name          | Automatic find-and-replace                                                  |
| `Changed` | Same logical role, **different value** | Automatic find-and-replace; visual retest required                          |
| `Removed` | No new equivalent                      | Two-step: generate a prep report, fill in replacements manually, then apply |
| `New`     | New token with no old equivalent       | Ignored (nothing to rewrite)                                                |

Files in scope: `*.scss`, `*.css`, `*.ts`, `*.tsx`, `*.js`, `*.jsx` under `packages/`. The token source-of-truth files (`_root.scss`, `_colors.scss`, `_spacing.scss`) and all `*.mdx` files are excluded — see `replace-tokens.ts`.

## Files

| File                | Role                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `migrate.ts`        | CLI entry point. Orchestrates phases and writes reports to `reports/`.                                                                                                   |
| `parse-mappings.ts` | Parses the `token-migration.mdx` table into typed `Mapping[]`.                                                                                                           |
| `resolve-values.ts` | Resolves old/new token values from `_root.scss` / `_colors.scss` / `_spacing.scss` (follows `var(--…)` chains). Used to suggest nearest replacements for removed tokens. |
| `replace-tokens.ts` | Walks the file tree, applies boundary-safe replacements, returns per-token / per-file stats.                                                                             |
| `reports/`          | Markdown reports written by each phase. Treated as build output (regenerated each run, except `step-3-removed-prep.md` which is hand-edited).                            |

## Usage

Run from the **repo root**. All phases support `--dry-run` to preview changes without touching files.

### Phase 1 — Renamed (safe, automatic)

```bash
node scripts/migrate-tokens/migrate.ts renamed
```

Rewrites every `Renamed` token. Resolved values are identical, so no visual testing is needed. Writes `reports/step-1-renamed.md`.

### Phase 2 — Changed (automatic, but retest)

```bash
node scripts/migrate-tokens/migrate.ts changed
```

Rewrites every `Changed` token where the name differs, and lists usages of `Changed` tokens whose name is unchanged (those don't need a rewrite, but the value shifted under them — retest in place). Writes `reports/step-2-changed.md` with a per-component visual-retest checklist.

### Phase 3 — Removed (two steps, manual decisions)

`Removed` tokens have no automatic replacement, so the script asks a human to pick one.

**Step 3a — generate the prep report:**

```bash
node scripts/migrate-tokens/migrate.ts removed-prep
```

Writes `reports/step-3-removed-prep.md`. Each removed token gets a section with:

- the token's resolved old value,
- top suggested matches from the new token set (by RGB distance for colors, numeric distance for lengths),
- every usage in the codebase,
- a `**Replacement:** <fill in>` line.

Edit that line for each token to one of:

- a new token name (e.g. `` `--color-dap-green-100` ``),
- a literal value (e.g. `` `transparent` ``, `` `16px` ``) — substituted verbatim,
- `KEEP` — leave the old token's definition in place and skip rewrites.

The script refuses to overwrite an already-edited prep report. Pass `--force` to regenerate from scratch.

**Step 3b — apply the manual replacements:**

```bash
node scripts/migrate-tokens/migrate.ts removed-apply
```

Reads the filled-in prep report, performs the rewrites, and writes `reports/step-3-removed-apply.md`. Fails loudly if any `Replacement:` line is missing or still a `<placeholder>`.

### Dry-run

Append `--dry-run` to any phase to compute the report without writing files:

```bash
node scripts/migrate-tokens/migrate.ts changed --dry-run
```

## Reusing in the applications repo

The scripts are intentionally self-contained. To run them outside this repo:

1. Copy this `scripts/migrate-tokens/` folder into the apps repo.
2. Copy `packages/design-system/src/stories/token-migration.mdx` and the three source-of-truth SCSS files (`_root.scss`, `_colors.scss`, `_spacing.scss`, plus the new `_root_new.scss`) so `parse-mappings.ts` and `resolve-values.ts` resolve to the same paths — or adjust the `MDX_PATH` / `STYLES_DIR` constants at the top of those files.
3. Update `SCAN_ROOTS` in `replace-tokens.ts` to point at the apps repo's source folders, and update `ALWAYS_EXCLUDED_FILES` if it has its own token definitions.
4. Run the four phases in order: `renamed` → `changed` → `removed-prep` → (edit prep report) → `removed-apply`.

## Cleanup

When the applications-repo migration is done, delete:

- this folder (`scripts/migrate-tokens/`),
- `packages/design-system/src/stories/token-migration.mdx` (its only purpose is to feed these scripts and document the rename for consumers).
