# Where agent conventions live

Implementation conventions for agents live in `.agents/skills/*/SKILL.md` (read fully when invoked). The skill index and checker commands live only in [AGENTS.md](../../AGENTS.md). Domain vocabulary lives in [CONTEXT.md](../../CONTEXT.md); load-bearing decisions in `docs/adr/`. `.cursor/skills/` is a pointer to `.agents/skills/`.

Centralizing "how to edit" in skills keeps file-type guidance next to workflows (scaffold, review, pr-prep). AGENTS.md stays the single always-on entry for checkers and routing. CONTEXT.md stays a glossary without implementation noise.
