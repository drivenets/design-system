<!-- cspell:ignore JRKXGB -->

# Release prerequisites

Run both checks before touching the release PR.

## GitHub CLI

```bash
gh auth status
gh api repos/drivenets/design-system --jq .permissions.push
```

| Result                                     | Fix                                                                                      |
| ------------------------------------------ | ---------------------------------------------------------------------------------------- |
| `command not found: gh`                    | `brew install gh` (macOS) — or see https://cli.github.com                                |
| `You are not logged into any GitHub hosts` | User runs `gh auth login` (GitHub.com → SSH or HTTPS → browser) in their own terminal    |
| `HTTP 404` / `HTTP 403` from `gh api`      | Logged-in account has no access — user must be a member of the `drivenets` org           |
| `false`                                    | Account lacks write access; ask a repo admin. Closing, approving and merging all need it |

The user must sign in themselves — never ask for or handle a token.

## Slack

Look for a Slack MCP tool that sends messages (name ends in `slack_send_message`; the prefix differs per install). Confirm access with the matching channel search tool for `dap-ask-design-system` — it should return `C08T4JRKXGB`.

If no Slack tool is available, tell the user how to connect one, then continue without it:

- **Claude Code / Claude desktop:** claude.ai → Settings → Connectors → Slack → Connect, then enable it for the session (`/mcp` in the CLI). A connector that shows `needs_auth` is signed in from the same place.
- **Cursor:** Settings → MCP → add the Slack MCP server and sign in.

## Troubleshooting

| Symptom                                      | Action                                                                                                                                |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| No checks start after reopen                 | Wait a minute, then close/reopen once more. Still nothing → stop and report                                                           |
| `gh pr merge`: head branch is not up to date | A newer push to `main` is still running its `Release` workflow, which re-pushes the release PR. Wait for it, then restart from step 3 |
| `gh pr merge`: head commit does not match    | Changesets pushed during the wait. Restart from step 3                                                                                |
| `Can not approve your own pull request`      | The user authored the head commit. Ask another maintainer to approve, then continue from the merge                                    |
| Review still required after approval         | A code owner is required for a file in the diff (see `.github/CODEOWNERS`). Ask a listed owner to approve                             |
| `Release` run fails                          | Stop and give the user the run URL. Do not post the announcement — packages may not be on npm                                         |
