# Cursor subagents (design-system)

Specialized agents in **`.cursor/agents/`** — separate context from the main chat. Skills teach workflows; subagents run them in isolation or in parallel.

**When to use each subagent:** see bullets in [AGENTS.md#subagents](../../AGENTS.md#subagents).

## Invoke

- **Explicit:** `/ds-verifier`, `/ds-component-builder`, `/ds-browser-test-writer`, `/ds-review`
- **Natural:** “Use the ds-review subagent on this diff”
- **Automatic:** parent agent delegates when `description` matches the task

## vs skills

| Subagent                 | Primary skills                                                                                  |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| `ds-component-builder`   | `component-scaffold` (+ api, react, ark, scss, ts-standards, storybook, browser-tests per file) |
| `ds-browser-test-writer` | `browser-tests`, `migrate-story-tests`, `react-patterns`                                        |
| `ds-review`              | `code-review` + skills by changed file type                                                     |
| `ds-verifier`            | [AGENTS.md#code-quality-checkers](../../AGENTS.md#code-quality-checkers)                        |

Built-in Cursor subagents (`explore`, `bash`, `browser`) still apply for search, shell, and MCP browser work.

## Claude Code

`.claude/agents` is a symlink to `.cursor/agents`, so Claude Code uses the same files. Claude Code ignores `readonly`; read-only agents also set `disallowedTools: Write, Edit`.
