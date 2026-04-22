# DriveNets Design System

The DriveNets Design System (DS) is a React component library providing the shared UI foundation for all DAP applications.

## Quick Facts

- **Package**: `@drivenets/design-system` (published to GitHub Packages)
- **Framework**: React 19 + TypeScript
- **Styling**: SCSS modules with CSS custom property tokens
- **Component foundations**: Ark UI, Radix UI, @tanstack/react-table, @tanstack/react-virtual, dnd-kit
- **Docs**: Storybook (deployed to GitHub Pages)
- **Repo**: https://github.com/drivenets/design-system

## Architecture

```
packages/design-system/
  src/
    components/      # 63 ds-* components (Button, Table, Select, Dialog, etc.)
    styles/          # Design tokens, global styles, SCSS variables
    utils/           # Shared utilities
  .storybook/        # Storybook configuration
tools/
  mcp-server/        # Storybook MCP server for AI agent access
```

## For AI Agents

The DS exposes an MCP server that provides component documentation, props, and usage examples. See `tools/mcp-server/README.md` for setup and the [MCP tools reference](./MCP_TOOLS.md).

### Using DS Components

1. Query `list-all-documentation` to discover available components
2. Query `get-documentation` with the component ID for full props and stories
3. Import from `@drivenets/design-system` and include `@drivenets/design-system/index.min.css`

### Key Conventions

- All component names are prefixed with `Ds` (e.g., `DsButton`, `DsTable`)
- Components use CSS custom properties for theming (e.g., `--dn-color-primary`)
- Props follow controlled/uncontrolled patterns (React standard)
- `design: 'v1.2'` prop on some components enables newer design variants
