---
name: deslop
description: Remove AI-generated code slop from the branch diff — needless comments, defensive checks, `any` casts, deep nesting. Use when the user says "deslop", "clean up this code", or "remove AI slop", or before a PR when a diff reads machine-written.
---

# Remove AI code slop

Check the diff against the main and remove AI-generated slop introduced in the branch.

## Focus Areas

- Extra comments that are unnecessary or inconsistent with the local style, except "TODO" comments
- Defensive checks or try/catch blocks that are abnormal for trusted code paths
- Casts to `any` used only to bypass type issues
- Deeply nested code that should be simplified with early returns
- Other patterns inconsistent with the file and surrounding codebase

## Guardrails

- Keep behavior unchanged unless fixing a clear bug.
- Prefer minimal, focused edits over broad rewrites.
- Keep the final summary concise (1–3 sentences).
