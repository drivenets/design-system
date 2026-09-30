# Release summary template

Replace `{…}` placeholders. Remove any section with no bullets.

```
Design System Updates :tada:
In the latest release we've shipped {packages} :sparkles: with the following updates:

:sparkles: New Components & Features
• {DsComponent}

:rocket: Improvements
• {Added / Updated …}

:bug: Fixes
• {Fixed …}

:loudspeaker: Tooling Updates
• Updated dependencies across the Design System packages
• {@drivenets/package} updated to {version}

As always, please update when possible and let us know if you run into any issues :raised_hands:
```

`{packages}` joins `@name@version` pairs with `, ` and a final `and`, e.g. `@drivenets/design-system@0.19.0 and @drivenets/design-system-mcp@0.1.5`.

## Example (0.19.0)

```
Design System Updates :tada:
In the latest release we've shipped @drivenets/design-system@0.19.0 and @drivenets/design-system-mcp@0.1.5 :sparkles: with the following updates:

:sparkles: New Components & Features
• DsTopBarNavigation
• DsBotButton
• DsBulkActions
• DsEmptyState
• DsMainMenu
• DsIllustration

:rocket: Improvements
• Added text ellipsis support for DsTable column headers
• Added configurable widths for select, expand, and reorder columns in DsTable
• Added interactive, openDelay, and closeDelay props to DsTooltip
• Updated default colors for secondary and tertiary variants of DsButtonV3

:bug: Fixes
• Fixed redundant space on the right side of the DsTable header
• Fixed DsDropdownMenu.Item dropping injected props, allowing wrapping DsTooltip components using asChild to open correctly on hover

:loudspeaker: Tooling Updates
• Updated dependencies across the Design System packages
• @drivenets/design-system-mcp updated to 0.1.5

As always, please update when possible and let us know if you run into any issues :raised_hands:
```
