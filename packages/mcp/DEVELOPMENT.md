## Local development against an unpublished build

```bash
pnpm --filter @drivenets/design-system-mcp build
```

Wire the local build into your client:

```json
{
  "mcpServers": {
    "drivenets-ds-local": {
      "command": "node",
      "args": ["/absolute/path/to/design-system/packages/mcp-server/dist/cli.js"]
    }
  }
}
```

Or run directly from source with hot-reload:

```bash
pnpm --filter @drivenets/design-system-mcp dev
```

### Smoke test the protocol

```bash
printf '%s\n' \
  '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}' \
  '{"jsonrpc":"2.0","method":"notifications/initialized"}' \
  '{"jsonrpc":"2.0","id":2,"method":"tools/list"}' \
  | node packages/mcp-server/dist/cli.js
```

You should see a JSON-RPC `tools/list` response containing `list-all-documentation`, `get-documentation`, and `get-documentation-for-story`.

## Scripts

| Script            | Purpose                                             |
| ----------------- | --------------------------------------------------- |
| `pnpm build`      | Build with `tsdown` to `dist/`                      |
| `pnpm dev`        | Run `src/cli.ts` directly via `tsx` (no build step) |
| `pnpm start`      | Run the compiled `dist/cli.js`                      |
| `pnpm typecheck`  | `tsgo` typecheck                                    |
| `pnpm lint:build` | `publint` + `attw` against a `pnpm pack` tarball    |
