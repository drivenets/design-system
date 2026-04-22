These are **test fixtures** — sample data that simulates the manifests Storybook
auto-generates during `pnpm build-storybook`.

They exist so you can run the MCP server locally without a full Storybook build:

```bash
MANIFESTS_DIR=$(pwd)/test-manifests node server.js
```

**Do not hand-maintain these files to match the real DS.** The real manifests are
generated automatically by `@storybook/addon-mcp` from TypeScript types, JSDoc,
stories, and MDX pages, then published to GitHub Pages. See `ARCHITECTURE.md` for
the full flow.
