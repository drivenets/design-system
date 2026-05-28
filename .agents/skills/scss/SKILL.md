---
name: scss
description: SCSS and CSS modules for design-system components. Use when editing *.scss, *.module.scss, design tokens, data-focus-visible, data-disabled, or component styles under packages/design-system.
---

# SCSS Skill

## Design tokens

| Requirement             | Details                              |
| ----------------------- | ------------------------------------ |
| **Use design tokens**   | all from `src/styles/_root_new.scss` |
| **No hardcoded colors** | CSS custom properties only           |

## Focus and interaction

| Requirement  | Details                                      |
| ------------ | -------------------------------------------- |
| **Focus**    | `[data-focus-visible]` for keyboard outlines |
| **Hover**    | `&:hover` with token colors                  |
| **Disabled** | `[data-disabled]` or `&:disabled`            |

Ark `data-*` attrs: [ark-ui](../ark-ui/SKILL.md).

## CSS modules

| Requirement          | Details                                       |
| -------------------- | --------------------------------------------- |
| **Avoid `:global`**  | Stay scoped                                   |
| **Use `classnames`** | Not template literals for conditional classes |

## Code style

| Requirement                         | Details                       |
| ----------------------------------- | ----------------------------- |
| **Use mixins**                      | Repeated size/state patterns  |
| **Pill border-radius**              | `9999px`                      |
| **Pseudo-element order**            | `content: ''` first           |
| **Logical property order**          | Position → box model → visual |
| **No comments**                     | Unless genuinely complex      |
| **No `!important`**                 | Refactor selectors instead    |
| **Transitions**                     | `0.2s` standard               |
| **Component-scoped variables**      | In component file             |
| **No webkit-only without fallback** | Cross-browser or `@supports`  |

```scss
.button {
  color: var(--color-text-primary);
  padding: var(--spacing-2) var(--spacing-4);
  transition: background-color 0.2s;

  &[data-focus-visible] {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }

  &[data-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
```

## Related

- [component-scaffold](../component-scaffold/SKILL.md)
- [ark-ui](../ark-ui/SKILL.md)
