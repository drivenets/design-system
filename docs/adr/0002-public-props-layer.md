# Public props layer on primitives

Each **Component** exposes a dedicated `Ds{Name}Props` in `*.types.ts`. Do not `extends` Ark or Radix root prop types — callers get a curated surface via [component-api](.agents/skills/component-api/SKILL.md). Cleared values in change callbacks use `null`, not `undefined`.

Hiding library prop surfaces prevents accidental coupling to Ark/Radix internals and keeps semver owned by the design system. `null` for "empty" makes controlled components explicit in TypeScript and matches existing select/input patterns.
