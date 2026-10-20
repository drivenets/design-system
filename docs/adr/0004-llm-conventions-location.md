# Where agent conventions live

Implementation conventions for agents live in `.agents/skills/*/SKILL.md` (read fully when invoked). Checker commands and file → skill routing live only in [AGENTS.md](../../AGENTS.md). Domain vocabulary lives in [CONTEXT.md](../../CONTEXT.md); load-bearing decisions in `docs/adr/`. `.cursor/skills/` is a pointer to `.agents/skills/`.

Centralizing "how to edit" in skills keeps file-type guidance next to workflows (scaffold, review, pr-prep). AGENTS.md stays the single always-on entry for checkers and routing. CONTEXT.md stays a glossary without implementation noise.

**Exception (2026-10, [#799](https://github.com/drivenets/design-system/pull/799)):** rules that apply to every edit regardless of file type — comments, changesets, git and PRs — live in `AGENTS.md`, because skill bodies load only when invoked. The hand-kept skill catalog was dropped; both tools list skills by `description`.
