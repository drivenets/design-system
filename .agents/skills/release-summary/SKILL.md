---
name: release-summary
description: Generate a Slack-ready "Design System Updates" announcement summarizing what changed in the latest published release versus the previous one, built from the GitHub Releases of drivenets/design-system. Use when the user asks for release notes, a release summary, a release announcement, "what shipped", or a changelog digest for Slack.
---

# Release summary

Turns the changesets-generated GitHub Releases of one publish batch into the announcement in [TEMPLATE.md](TEMPLATE.md).

## Workflow

1. **Find the release batch.** One `chore(release): publish` creates one GitHub Release per package, a few seconds apart.

   ```bash
   gh release list -R drivenets/design-system --limit 20 --json tagName,publishedAt
   ```

   The batch is every release published on the same day as the newest `@drivenets/design-system@*` tag. If the user names a version, use that version's batch instead.

2. **Fetch each release body** in the batch:

   ```bash
   gh release view '@drivenets/design-system@0.20.0' -R drivenets/design-system --json body -q .body
   ```

   Only these bodies are in scope. They already contain exactly the changes since the previous release, so do not diff git or read `.changeset/`.

3. **Classify every entry** by what it says, not by Minor/Patch. The semver bump does not decide the section.

   | Entry says                                        | Section                   |
   | ------------------------------------------------- | ------------------------- |
   | Adds a new `Ds*` component                        | New Components & Features |
   | Adds a prop, variant, state, token, icon or event | Improvements              |
   | Changes styles or defaults to match designs       | Improvements              |
   | Fixes a bug                                       | Fixes                     |
   | Updates dependencies                              | Tooling Updates           |
   | Another package's version bump                    | Tooling Updates           |
   | Story, docs or MCP manifest only                  | Drop (not user-facing)    |

4. **Rewrite each entry** for consumers:
   - New components: component name only, one per bullet (`• DsCodeInput`). Split entries that add two components.
   - Other entries: past tense, starting with `Added`, `Updated` or `Fixed`, with the component name in the sentence.
   - Drop commit hashes, backticks and quotes around names.
   - Collapse repeated `Update dependencies` entries into one bullet.
   - Merge entries that describe the same component change (e.g. a component and its follow-up state).
   - Keep the author's meaning. Do not invent impact that the entry does not state.

5. **Fill [TEMPLATE.md](TEMPLATE.md).** Omit a section that has no bullets. List every released package with its version in the intro line.

6. **Return the text** in a single fenced block so it pastes into Slack unchanged. Do not post it anywhere unless the user asks.

## Checklist

- [ ] Every user-facing entry from every release body is in exactly one section (or intentionally merged)
- [ ] No duplicate `Update dependencies` bullets
- [ ] Every released package and version appears in the intro
- [ ] Slack shortcodes (`:tada:`) and `•` bullets are used, not Markdown lists or Unicode emoji
