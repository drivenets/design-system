---
name: handoff
description: Compact the current conversation into a handoff document for another agent to pick up.
argument-hint: 'What will the next session be used for?'
---

Write a handoff document summarizing the current conversation so a fresh agent can continue the work. Save it to a path from the shell temp-file command `mktemp -t handoff-XXXXXX.md` (read that path before you write to it).

Suggest the skills to be used, if any, by the next session.

Do not duplicate content already captured in other artifacts (execution plans from `/to-plan`, ADRs, commits, diffs). Reference them by path or URL instead.

If the user passed arguments, treat them as a description of what the next session will focus on and tailor the doc accordingly.
