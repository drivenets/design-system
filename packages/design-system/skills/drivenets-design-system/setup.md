# Set up this repo's coding agents for the DriveNets Design System

Follow these steps to set this repository up so coding agents use `@drivenets/design-system` correctly. Do them in order.

- Use the repo's own package manager. The lockfile tells you which: `pnpm-lock.yaml` means pnpm, `yarn.lock` yarn, `package-lock.json` npm, `bun.lock` bun.
- If the app lives in a sub-package of a monorepo, work in the package that depends on `@drivenets/design-system`.
- Don't commit anything. Leave every change for the human to review.

## 1. Design system package

If `@drivenets/design-system` was not a dependency before this setup and you just installed it, finish its basic setup from `node_modules/@drivenets/design-system/README.md`: import the CSS once at the app root and add the fonts.

If it was already installed, leave its version alone.

## 2. MCP server

The `@drivenets/design-system-mcp` server gives agents the component docs and Guidelines.

1. Look for an existing server named `drivenets-ds`, or any server that runs `@drivenets/design-system-mcp`, in the project's MCP config files (`.mcp.json`, `.cursor/mcp.json`, `.vscode/mcp.json`, `.codex/config.toml`, …). If there is one, skip to section 3.
2. Otherwise, pick the agents to configure: the agent you are, plus any agent whose project config the repo already has. The `add-mcp` IDs include `claude-code` (`.mcp.json`), `cursor` (`.cursor/mcp.json`), `vscode` (`.vscode/mcp.json`), `codex` (`.codex/config.toml`) and `gemini-cli` (`.gemini/settings.json`).
3. Run this from the repository root, with one `-a` per agent. Always pass `-a`: with `-y` and no `-a`, `add-mcp` writes config for every agent it supports.

   ```bash
   npx add-mcp@latest @drivenets/design-system-mcp --name drivenets-ds -y -a claude-code -a cursor
   ```

   This writes project-level config files. They are meant to be committed, so the whole team gets the server.

4. If the command fails, note the error for the report and go on. The manual config is in the MCP's README: https://github.com/drivenets/design-system/blob/main/packages/mcp/README.md

## 3. ESLint plugin

`@drivenets/eslint-plugin-design-system` flags native controls, MUI imports and deprecated components, so agents get deterministic feedback.

1. Find the ESLint config. The plugin needs ESLint 9 or later with a flat config (`eslint.config.*`). If the repo has no ESLint, or only a legacy `.eslintrc*`, don't set up or migrate ESLint. Note it for the report and skip to section 5.
2. Install `@drivenets/eslint-plugin-design-system` as a dev dependency.
3. Add the recommended config to the end of the flat config, keeping the file's existing structure:

   ```ts
   import designSystem from '@drivenets/eslint-plugin-design-system';

   export default defineConfig(
     // ...existing config
     designSystem.configs.recommended,
   );
   ```

   If the config exports a plain array instead of using `defineConfig`, add `designSystem.configs.recommended` as the array's last element.

## 4. Run ESLint

Run the repo's lint script, or `npx eslint .` if there isn't one.

If rules starting with `@drivenets/design-system/` report problems in existing code:

- Don't fix them.
- Don't change any rule's level.
- Count the problems per rule. You'll ask the human about them in section 7.

If ESLint fails for another reason, such as a missing peer dependency or a config error caused by your change, fix your change. Report anything else.

## 5. AGENTS.md block

Put this block in the `AGENTS.md` next to the `package.json` that depends on `@drivenets/design-system`, which is the repo root in a single-package repo. Copy it exactly:

```md
<!-- BEGIN:drivenets-design-system -->

## DriveNets Design System

This app's UI uses `@drivenets/design-system`. Before writing or changing UI code, read `node_modules/@drivenets/design-system/skills/drivenets-design-system/SKILL.md` and follow it. It matches the installed version.

- Use Ds* components. Never use native `<button>`, `<input>`, `<select>`, `<textarea>` or `<table>` elements, or MUI.
- Look up components and Guidelines with the `drivenets-ds` MCP server (`docs-list`, `docs-show`) instead of guessing props.
- Run ESLint after UI changes. `@drivenets/eslint-plugin-design-system` flags native elements and deprecated components.

<!-- END:drivenets-design-system -->
```

- If `AGENTS.md` already has the `BEGIN:drivenets-design-system` and `END:drivenets-design-system` markers, replace everything from the first marker to the second, markers included.
- If it exists without them, add the block at the end, after a blank line.
- If there is no `AGENTS.md`, create one containing only the block.
- Check that the `node_modules/...` path in the block resolves from the `AGENTS.md`'s directory. If you had to put `AGENTS.md` somewhere else, rewrite the path relative to it, for example `apps/web/node_modules/@drivenets/design-system/...`.

## 6. CLAUDE.md

If there is a `CLAUDE.md` in the same directory, and it neither contains the block nor imports `AGENTS.md`, add a line with `@AGENTS.md` so Claude Code reads the block. Don't create a `CLAUDE.md` if there isn't one.

## 7. Report

Finish with a short report:

- every file you created or changed;
- which agents got MCP config, or why that step was skipped or failed;
- whether the ESLint plugin is on, or why not;
- if section 4 found problems, a table of rule and count, then ask: fix them now, set those rules to `warn` for now, or leave them as errors?
- if the team uses Claude Code and there is no `CLAUDE.md`, say that a `CLAUDE.md` containing `@AGENTS.md` makes Claude Code read the block;
- a reminder to commit the MCP config files and `AGENTS.md`, and to restart the coding agent so it loads the new MCP server.
