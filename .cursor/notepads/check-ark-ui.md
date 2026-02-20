## Check Ark UI for Component

I'm about to build a component. Before writing custom code, check if Ark UI already provides a primitive for it.

Steps:

1. Call the Ark UI MCP `list_components` tool with `framework: "react"` to get all available components.
2. If a matching component exists (framework: "react"):
   - Get the components name and get the full API.
   - Get the basic usage example.
   - Get a styling guide with the component name to show data attributes I can use in SCSS.
3. If no match exists, tell me, so I know to build custom.

When showing the Ark UI API, highlight:

- Which props I should expose in my own props layer (don't expose all Ark props)
- Which state Ark manages internally (so I don't duplicate with `useState`)
- Which callbacks I should wrap to forward to my own props
- Which data attributes I can use in SCSS for styling states
