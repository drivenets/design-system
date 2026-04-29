# Phase 1 — Renamed tokens

> Trivial renames where the resolved value is identical. No visual testing required.

## Summary

- Files scanned: 758
- Files changed: 123
- Total replacements: 1360
- Unique tokens renamed: 276

## Excluded from rewrites

- `packages/design-system/src/styles/_root.scss`
- `packages/design-system/src/styles/_colors.scss`
- `packages/design-system/src/styles/_spacing.scss`
- `**/*.mdx (all docs, including token-migration.mdx and colors.mdx)`

## Replacements per token

| Old token                                               | Replacements |
| ------------------------------------------------------- | ------------ |
| `--spacing-xs`                                          | 131          |
| `--spacing-standard`                                    | 74           |
| `--color-font-secondary`                                | 73           |
| `--spacing-3xs`                                         | 72           |
| `--spacing-sm`                                          | 71           |
| `--color-background`                                    | 66           |
| `--color-font-main`                                     | 60           |
| `--color-background-selected`                           | 49           |
| `--color-border`                                        | 36           |
| `--color-background-secondary`                          | 35           |
| `--spacing-4xs`                                         | 33           |
| `--color-background-disable`                            | 33           |
| `--spacing-2xs`                                         | 31           |
| `--color-border-secondary`                              | 26           |
| `--color-background-action-hover-weak`                  | 26           |
| `--font-size-sm`                                        | 26           |
| `--color-background-deselected`                         | 24           |
| `--color-background-danger-strong`                      | 23           |
| `--color-background-selected-weak`                      | 21           |
| `--color-font-on-action`                                | 19           |
| `--spacing-lg`                                          | 19           |
| `--color-border-action-primary`                         | 16           |
| `--color-background-tertiary`                           | 16           |
| `--white`                                               | 14           |
| `--line-height-sm`                                      | 14           |
| `--color-background-success-strong`                     | 14           |
| `--color-background-action-secondary-hover`             | 13           |
| `--color-icon-secondary`                                | 12           |
| `--color-background-deselected-hover`                   | 12           |
| `--color-background-action-hover`                       | 12           |
| `--color-background-warning-strong`                     | 11           |
| `--color-background-action`                             | 11           |
| `--font-size-xs`                                        | 11           |
| `--spacing-xl`                                          | 11           |
| `--color-background-danger-weak`                        | 9            |
| `--color-border-contrast`                               | 9            |
| `--color-background-danger-strong-hover`                | 8            |
| `--line-height-xs`                                      | 8            |
| `--color-border-action-secondary`                       | 8            |
| `--neutral-2`                                           | 8            |
| `--font-size-md`                                        | 7            |
| `--color-font-action`                                   | 7            |
| `--color-dark-buttons-tertiary`                         | 7            |
| `--color-background-brand`                              | 7            |
| `--color-font-warning`                                  | 6            |
| `--spacing-md`                                          | 6            |
| `--neutral-4`                                           | 6            |
| `--color-dark-buttons-secondary-hover`                  | 6            |
| `--color-background-action-secondary`                   | 6            |
| `--color-background-selected-hover`                     | 5            |
| `--color-secondary-white`                               | 5            |
| `--line-height-md`                                      | 5            |
| `--color-dark-buttons-primary-hover`                    | 4            |
| `--color-border-action-secondary-hover`                 | 4            |
| `--color-icon-information-main`                         | 4            |
| `--spacing-3xl`                                         | 4            |
| `--color-primary-700-default`                           | 4            |
| `--color-secondary-100`                                 | 4            |
| `--color-secondary-300`                                 | 4            |
| `--color-background-warning`                            | 3            |
| `--color-icon-primary`                                  | 3            |
| `--color-icon-success`                                  | 3            |
| `--color-font-danger`                                   | 3            |
| `--font-size-2xl`                                       | 3            |
| `--color-background-action-tertiary`                    | 3            |
| `--color-background-info-strong`                        | 3            |
| `--neutral-1`                                           | 3            |
| `--neutral-10`                                          | 3            |
| `--color-border-action-primary-hover`                   | 3            |
| `--color-icon-inverse`                                  | 3            |
| `--color-background-info`                               | 2            |
| `--color-icon-warning`                                  | 2            |
| `--color-background-secondary-selected-weak`            | 2            |
| `--font-size-3xl`                                       | 2            |
| `--color-dark-buttons-secondary-light-hover-background` | 2            |
| `--color-dark-buttons-secondary-background`             | 2            |
| `--color-dark-buttons-secondary-light`                  | 2            |
| `--color-dark-buttons-primary`                          | 2            |
| `--color-brand-500-default`                             | 2            |
| `--color-outline-weak`                                  | 2            |
| `--spacing-2xl`                                         | 2            |
| `--color-secondary-500-net-4`                           | 2            |
| `--color-background-active-moderate`                    | 2            |
| `--color-icon-information-secondary`                    | 2            |
| `--color-data-fuchsia`                                  | 2            |
| `--color-border-danger-strong`                          | 1            |
| `--color-border-success`                                | 1            |
| `--color-data-yellow`                                   | 1            |
| `--color-background-action-inverse`                     | 1            |
| `--color-gray-100`                                      | 1            |
| `--color-orange-200`                                    | 1            |
| `--color-negative-400-default`                          | 1            |
| `--color-warning-400`                                   | 1            |
| `--color-purple-600`                                    | 1            |
| `--color-secondary-200`                                 | 1            |
| `--color-secondary-400`                                 | 1            |
| `--color-secondary-600-net-2`                           | 1            |
| `--color-secondary-800`                                 | 1            |
| `--color-primary-100`                                   | 1            |
| `--color-primary-800`                                   | 1            |
| `--color-data-amber`                                    | 1            |
| `--color-status-bg-inactive`                            | 1            |
| `--color-status-bg-progress`                            | 1            |
| `--color-data-light-purple`                             | 1            |
| `--color-status-bg-neutral`                             | 1            |
| `--color-status-bg-warning`                             | 1            |
| `--color-font-on-disabled`                              | 1            |
| `--color-data-purple`                                   | 1            |
| `--color-outline-moderate`                              | 1            |
| `--color-info-700`                                      | 1            |
| `--line-height-large`                                   | 1            |
| `--font-size-large`                                     | 1            |
| `--line-height-3xl`                                     | 1            |
| `--line-height-2xl`                                     | 1            |
| `--line-height-xl`                                      | 1            |
| `--font-size-xl`                                        | 1            |

## Affected files (grouped)

### `ds-alert-banner` (42 replacements)

- `packages/design-system/src/components/ds-alert-banner/ds-alert-banner.module.scss` — `--color-background-warning-strong`×1, `--color-background-danger-weak`×1, `--color-border-action-primary`×1, `--color-background-secondary`×1, `--color-border-danger-strong`×1, `--color-background-warning`×1, `--color-background-action`×1, `--color-background-info`×1, `--color-border-success`×1, `--color-font-secondary`×1, `--color-icon-secondary`×1, `--color-icon-primary`×1, `--color-icon-success`×1, `--color-icon-warning`×1, `--spacing-standard`×2, `--color-font-main`×1, `--color-border`×1, `--spacing-4xs`×2, `--spacing-2xs`×1, `--spacing-xs`×2, `--spacing-sm`×1
- `packages/design-system/src/components/ds-alert-banner/stories/ds-alert-banner.stories.module.scss` — `--color-background-secondary`×2, `--color-background-warning`×1, `--color-border-secondary`×2, `--color-font-secondary`×5, `--color-font-warning`×1, `--color-font-danger`×1, `--color-background`×1, `--spacing-standard`×1, `--color-border`×1, `--spacing-xs`×2, `--spacing-md`×1

### `ds-autocomplete` (25 replacements)

- `packages/design-system/src/components/ds-autocomplete/ds-autocomplete.module.scss` — `--color-background-secondary-selected-weak`×1, `--color-background-action-hover-weak`×3, `--color-background-deselected-hover`×3, `--color-background-danger-strong`×3, `--color-background-action-hover`×1, `--color-background-deselected`×3, `--color-border-action-primary`×1, `--color-background-disable`×2, `--color-background-action`×1, `--color-data-yellow`×1, `--color-font-main`×1, `--font-size-sm`×1, `--spacing-3xs`×2, `--spacing-xs`×2

### `ds-avatar` (11 replacements)

- `packages/design-system/src/components/ds-avatar/_mixins.scss` — `--font-size-3xl`×1, `--font-size-2xl`×1, `--font-size-md`×1, `--font-size-xs`×1, `--spacing-4xs`×1, `--spacing-3xs`×1, `--spacing-xs`×1
- `packages/design-system/src/components/ds-avatar/ds-avatar.module.scss` — `--color-background-deselected`×1, `--color-font-on-action`×1
- `packages/design-system/src/components/ds-avatar/ds-avatar.stories.module.scss` — `--spacing-standard`×2

### `ds-avatar-group` (7 replacements)

- `packages/design-system/src/components/ds-avatar-group/ds-avatar-group.module.scss` — `--color-font-action`×1, `--color-background`×3, `--spacing-3xs`×2
- `packages/design-system/src/components/ds-avatar-group/ds-avatar-group.stories.module.scss` — `--spacing-xl`×1

### `ds-breadcrumb` (9 replacements)

- `packages/design-system/src/components/ds-breadcrumb/ds-breadcrumb.module.scss` — `--color-background-action-secondary-hover`×1, `--color-background-action-tertiary`×1, `--color-background-selected-hover`×1, `--color-background-selected`×2, `--color-background-disable`×1, `--color-background-action`×1, `--color-font-main`×1, `--spacing-sm`×1

### `ds-button` (131 replacements)

- `packages/design-system/src/components/ds-button/versions/ds-button-legacy/ds-button-legacy.module.scss` — `--neutral-4`×2, `--white`×1
- `packages/design-system/src/components/ds-button/versions/ds-button-new/ds-button-new.module.scss` — `--color-dark-buttons-secondary-light-hover-background`×2, `--color-background-action-secondary-hover`×4, `--color-dark-buttons-secondary-background`×2, `--color-background-danger-strong-hover`×5, `--color-background-action-hover-weak`×4, `--color-dark-buttons-secondary-hover`×6, `--color-dark-buttons-secondary-light`×2, `--color-background-action-secondary`×4, `--color-dark-buttons-primary-hover`×4, `--color-background-action-inverse`×1, `--color-background-selected-hover`×1, `--color-background-danger-strong`×7, `--color-background-action-hover`×3, `--color-background-danger-weak`×4, `--color-background-deselected`×6, `--color-dark-buttons-tertiary`×7, `--color-background-secondary`×2, `--color-dark-buttons-primary`×2, `--color-background-selected`×7, `--color-background-disable`×13, `--color-background-action`×2, `--color-background-brand`×1, `--color-font-on-action`×6, `--color-background`×20, `--color-border`×6, `--spacing-4xs`×1, `--spacing-2xs`×2, `--spacing-sm`×1
- `packages/design-system/src/components/ds-button/versions/ds-button-new/ds-button-new.stories.module.scss` — `--color-brand-500-default`×1, `--color-secondary-white`×1, `--color-gray-100`×1

### `ds-button-v3` (11 replacements)

- `packages/design-system/src/components/ds-button-v3/ds-button-v3.module.scss` — `--line-height-md`×1, `--line-height-sm`×1, `--line-height-xs`×2, `--font-size-md`×1, `--font-size-sm`×1, `--font-size-xs`×2
- `packages/design-system/src/components/ds-button-v3/ds-button-v3.stories.module.scss` — `--font-size-sm`×1, `--font-size-xs`×2

### `ds-card` (24 replacements)

- `packages/design-system/src/components/ds-card/ds-card.module.scss` — `--color-background-selected-weak`×1, `--color-border-action-secondary`×3, `--color-border-action-primary`×2, `--color-border-contrast`×1, `--color-background`×1, `--spacing-standard`×1, `--spacing-xs`×3, `--spacing-sm`×1, `--spacing-xl`×1
- `packages/design-system/src/components/ds-card/ds-card.stories.module.scss` — `--color-background-tertiary`×1, `--color-border-secondary`×1, `--color-border-contrast`×1, `--color-orange-200`×1, `--spacing-3xs`×3, `--spacing-xs`×1, `--spacing-sm`×1, `--spacing-lg`×1

### `ds-checkbox` (21 replacements)

- `packages/design-system/src/components/ds-checkbox/ds-checkbox.module.scss` — `--color-background-action-secondary-hover`×2, `--color-background-action-hover-weak`×1, `--color-background-selected-hover`×1, `--color-background-warning-strong`×2, `--color-background-deselected`×1, `--color-background-selected`×5, `--color-background-disable`×4, `--color-background-warning`×1, `--color-font-secondary`×1, `--color-font-warning`×1, `--color-font-main`×1, `--spacing-4xs`×1

### `ds-chip` (20 replacements)

- `packages/design-system/src/components/ds-chip/ds-chip.module.scss` — `--color-border-action-secondary-hover`×1, `--color-background-action-hover-weak`×1, `--color-background-selected-weak`×1, `--color-border-action-primary`×1, `--color-icon-information-main`×1, `--color-background-selected`×1, `--color-border-contrast`×1, `--color-icon-secondary`×1, `--color-font-action`×1, `--color-background`×1, `--color-font-main`×1, `--spacing-4xs`×4, `--spacing-3xs`×4, `--spacing-xs`×1

### `ds-chip-group` (13 replacements)

- `packages/design-system/src/components/ds-chip-group/ds-chip-group.module.scss` — `--color-background-selected-weak`×1, `--color-border-secondary`×1, `--color-font-secondary`×1, `--color-outline-weak`×1, `--color-background`×1, `--spacing-standard`×2, `--spacing-3xs`×2, `--spacing-3xl`×1, `--spacing-xs`×3

### `ds-comment-bubble` (75 replacements)

- `packages/design-system/src/components/ds-comment-bubble/components/ds-comment-thread/ds-comment-thread.module.scss` — `--color-background-tertiary`×1, `--spacing-sm`×2
- `packages/design-system/src/components/ds-comment-bubble/components/ds-thread-item/ds-thread-item.module.scss` — `--color-background-tertiary`×1, `--color-font-secondary`×1, `--spacing-standard`×1, `--color-font-main`×3, `--line-height-md`×2, `--line-height-sm`×1, `--font-size-md`×2, `--font-size-sm`×1, `--spacing-3xs`×1, `--spacing-xs`×4, `--spacing-sm`×1, `--spacing-lg`×1
- `packages/design-system/src/components/ds-comment-bubble/ds-comment-bubble.module.scss` — `--color-background-warning-strong`×1, `--color-background-secondary`×1, `--color-primary-700-default`×1, `--color-background-tertiary`×1, `--color-border-secondary`×2, `--color-font-secondary`×1, `--color-font-warning`×1, `--color-font-danger`×1, `--color-background`×2, `--spacing-standard`×4, `--color-font-main`×4, `--line-height-sm`×5, `--color-border`×1, `--font-size-sm`×4, `--spacing-xs`×14, `--spacing-sm`×5
- `packages/design-system/src/components/ds-comment-bubble/ds-comment-bubble.stories.module.scss` — `--color-font-secondary`×2, `--spacing-standard`×1, `--spacing-sm`×1, `--spacing-xl`×1

### `ds-comment-card` (39 replacements)

- `packages/design-system/src/components/ds-comment-card/ds-comment-card.module.scss` — `--color-background-action-hover-weak`×5, `--color-background-warning-strong`×1, `--color-background-info-strong`×1, `--color-font-secondary`×3, `--color-background`×1, `--spacing-standard`×2, `--color-font-main`×2, `--line-height-sm`×2, `--line-height-xs`×2, `--color-border`×2, `--font-size-sm`×2, `--font-size-xs`×2, `--spacing-3xs`×6, `--spacing-xs`×4, `--spacing-sm`×1
- `packages/design-system/src/components/ds-comment-card/ds-comment-card.stories.module.scss` — `--color-font-secondary`×1, `--spacing-xs`×1, `--spacing-lg`×1

### `ds-comment-indicator` (28 replacements)

- `packages/design-system/src/components/ds-comment-indicator/ds-comment-indicator.module.scss` — `--color-background-danger-strong-hover`×1, `--color-border-action-secondary-hover`×2, `--color-background-warning-strong`×1, `--color-background-secondary`×1, `--color-background`×1, `--spacing-standard`×3, `--color-font-main`×1, `--color-border`×1
- `packages/design-system/src/components/ds-comment-indicator/ds-comment-indicator.stories.module.scss` — `--color-background-secondary`×1, `--color-font-secondary`×1, `--spacing-standard`×6, `--color-font-main`×2, `--line-height-md`×1, `--color-border`×1, `--font-size-sm`×3, `--spacing-xs`×2

### `ds-comments-drawer` (29 replacements)

- `packages/design-system/src/components/ds-comments-drawer/components/comments-filter-modal/comments-filter-modal.module.scss` — `--color-border-secondary`×1, `--color-font-secondary`×1, `--spacing-standard`×1, `--spacing-3xs`×2, `--spacing-xs`×1, `--spacing-sm`×4
- `packages/design-system/src/components/ds-comments-drawer/ds-comments-drawer.module.scss` — `--color-background-tertiary`×1, `--color-border-secondary`×1, `--color-font-secondary`×1, `--color-icon-secondary`×1, `--spacing-standard`×2, `--line-height-sm`×1, `--font-size-sm`×1, `--spacing-xs`×1, `--spacing-sm`×1, `--spacing-xl`×1
- `packages/design-system/src/components/ds-comments-drawer/ds-comments-drawer.stories.module.scss` — `--color-background-secondary`×1, `--color-font-secondary`×2, `--spacing-standard`×3, `--spacing-xs`×1, `--spacing-sm`×1

### `ds-confirmation` (3 replacements)

- `packages/design-system/src/components/ds-confirmation/ds-confirmation.stories.module.scss` — `--color-background-secondary`×1, `--color-font-secondary`×2

### `ds-date-input` (42 replacements)

- `packages/design-system/src/components/ds-date-input/ds-date-input.module.scss` — `--color-background-action-secondary-hover`×1, `--color-background-action-hover-weak`×1, `--color-background-action-hover`×2, `--color-background-deselected`×1, `--color-background-secondary`×2, `--color-background-selected`×1, `--color-background-disable`×2, `--color-background-brand`×1, `--color-font-on-action`×1, `--color-font-secondary`×2, `--color-background`×1, `--spacing-standard`×1, `--color-font-main`×3, `--color-border`×3, `--spacing-3xs`×2, `--spacing-2xs`×6, `--spacing-xs`×7, `--spacing-sm`×1, `--spacing-xl`×2
- `packages/design-system/src/components/ds-date-input/ds-date-input.stories.module.scss` — `--color-font-secondary`×2

### `ds-date-picker` (31 replacements)

- `packages/design-system/src/components/ds-date-picker/components/calendar-table.module.scss` — `--color-background-action-hover-weak`×1, `--color-background-action-hover`×1, `--color-background-selected`×1, `--color-background-brand`×1, `--color-font-on-action`×1, `--color-font-secondary`×1, `--color-background`×1, `--color-font-main`×1, `--color-border`×1, `--spacing-3xs`×1, `--spacing-2xs`×2, `--spacing-xs`×3
- `packages/design-system/src/components/ds-date-picker/components/calendar-view-control/calendar-view-control.module.scss` — `--color-font-secondary`×1, `--color-font-main`×2, `--spacing-2xs`×4, `--spacing-xs`×1, `--spacing-sm`×1
- `packages/design-system/src/components/ds-date-picker/components/day-view/day-view.module.scss` — `--spacing-xs`×1
- `packages/design-system/src/components/ds-date-picker/ds-date-picker.module.scss` — `--spacing-standard`×1
- `packages/design-system/src/components/ds-date-picker/ds-date-picker.stories.module.scss` — `--color-font-secondary`×2, `--spacing-standard`×1, `--spacing-xs`×2

### `ds-date-range-picker` (5 replacements)

- `packages/design-system/src/components/ds-date-range-picker/ds-date-range-picker.module.scss` — `--spacing-xs`×1
- `packages/design-system/src/components/ds-date-range-picker/ds-date-range-picker.stories.module.scss` — `--color-font-secondary`×1, `--spacing-xs`×3

### `ds-dialog` (2 replacements)

- `packages/design-system/src/components/ds-dialog/ds-dialog.module.scss` — `--neutral-1`×1, `--white`×1

### `ds-divider` (3 replacements)

- `packages/design-system/src/components/ds-divider/ds-divider.module.scss` — `--color-border-secondary`×1
- `packages/design-system/src/components/ds-divider/ds-divider.stories.module.scss` — `--color-brand-500-default`×1, `--color-secondary-white`×1

### `ds-drawer` (40 replacements)

- `packages/design-system/src/components/ds-drawer/ds-drawer.module.scss` — `--color-icon-secondary`×1, `--color-background`×1, `--spacing-standard`×3, `--color-font-main`×1, `--color-border`×3, `--spacing-3xs`×2, `--spacing-xs`×1, `--spacing-sm`×2
- `packages/design-system/src/components/ds-drawer/ds-drawer.stories.module.scss` — `--color-border-secondary`×1, `--color-font-secondary`×1, `--color-font-action`×3, `--color-background`×2, `--spacing-standard`×6, `--color-font-main`×1, `--color-border`×1, `--spacing-3xs`×1, `--spacing-2xs`×2, `--spacing-xs`×4, `--spacing-sm`×2, `--spacing-lg`×2

### `ds-dropdown-menu` (28 replacements)

- `packages/design-system/src/components/ds-dropdown-menu/ds-dropdown-menu.module.scss` — `--color-background-action-hover-weak`×1, `--color-background-selected`×1, `--color-border-secondary`×3, `--color-background`×3, `--spacing-4xs`×1, `--spacing-3xs`×3, `--spacing-xs`×5
- `packages/design-system/src/components/ds-dropdown-menu/ds-dropdown-menu.stories.scss` — `--color-background-danger-strong-hover`×1, `--color-background-selected-weak`×1, `--color-background-danger-weak`×1, `--color-font-secondary`×1, `--color-font-main`×1, `--spacing-xs`×2, `--spacing-sm`×1, `--neutral-1`×1, `--neutral-4`×1, `--white`×1

### `ds-expandable-text-input` (1 replacements)

- `packages/design-system/src/components/ds-expandable-text-input/ds-expandable-text-input.module.scss` — `--spacing-xs`×1

### `ds-file-upload` (40 replacements)

- `packages/design-system/src/components/ds-file-upload/components/file-upload-item/file-upload-item.module.scss` — `--color-background-success-strong`×2, `--color-background-warning-strong`×1, `--color-background-danger-strong`×2, `--color-background-danger-weak`×1, `--color-background-deselected`×1, `--color-background-selected`×2, `--color-background-tertiary`×1, `--color-border-secondary`×1, `--color-font-secondary`×1, `--color-font-warning`×1, `--color-background`×1, `--color-font-main`×1, `--spacing-4xs`×1, `--spacing-3xs`×2, `--spacing-2xs`×2, `--spacing-xs`×1, `--spacing-sm`×1
- `packages/design-system/src/components/ds-file-upload/components/file-upload/file-upload.module.scss` — `--color-background-danger-strong`×1, `--color-background-selected-weak`×2, `--color-background-deselected`×1, `--color-background-secondary`×1, `--color-background-selected`×2, `--color-background-disable`×1, `--color-font-secondary`×1, `--color-icon-secondary`×1, `--color-background`×1, `--color-border`×1, `--spacing-3xs`×2, `--spacing-2xs`×2, `--spacing-xs`×1, `--spacing-sm`×1

### `ds-filter-status-icon` (7 replacements)

- `packages/design-system/src/components/ds-filter-status-icon/ds-filter-status-icon.module.scss` — `--color-negative-400-default`×1, `--color-primary-700-default`×1, `--color-warning-400`×1, `--color-purple-600`×1
- `packages/design-system/src/components/ds-filter-status-icon/ds-filter-status-icon.stories.module.scss` — `--spacing-standard`×2, `--color-font-main`×1

### `ds-form-control` (13 replacements)

- `packages/design-system/src/components/ds-form-control/ds-form-control.module.scss` — `--color-background-success-strong`×1, `--color-background-danger-strong`×2, `--color-background-danger-weak`×1, `--color-font-secondary`×1, `--color-font-warning`×1, `--color-font-main`×1, `--spacing-4xs`×2, `--neutral-2`×1
- `packages/design-system/src/components/ds-form-control/stories/ds-form-control-stories-shared.tsx` — `--color-icon-primary`×1
- `packages/design-system/src/components/ds-form-control/stories/ds-form-control.stories.module.scss` — `--neutral-10`×1, `--neutral-2`×1

### `ds-grid` (6 replacements)

- `packages/design-system/src/components/ds-grid/ds-grid.stories.scss` — `--color-secondary-100`×1, `--color-secondary-200`×1, `--color-secondary-300`×1, `--color-secondary-400`×1, `--neutral-10`×1, `--white`×1

### `ds-key-value-pair` (22 replacements)

- `packages/design-system/src/components/ds-key-value-pair/ds-key-value-pair.module.scss` — `--color-font-secondary`×1, `--color-font-main`×1, `--spacing-4xs`×1, `--spacing-3xs`×2, `--spacing-xs`×1, `--spacing-sm`×2
- `packages/design-system/src/components/ds-key-value-pair/ds-key-value-pair.stories.module.scss` — `--color-font-secondary`×1, `--color-font-main`×1, `--color-border`×1, `--spacing-4xs`×2, `--spacing-3xs`×2, `--spacing-xs`×5, `--spacing-sm`×2

### `ds-loader` (8 replacements)

- `packages/design-system/src/components/ds-loader/ds-loader.stories.module.scss` — `--color-font-secondary`×1, `--spacing-standard`×2, `--spacing-2xl`×1, `--spacing-sm`×3, `--spacing-xl`×1

### `ds-modal` (9 replacements)

- `packages/design-system/src/components/ds-modal/ds-modal.module.scss` — `--color-background-brand`×1, `--color-border-secondary`×2, `--color-background`×1, `--spacing-standard`×1, `--color-font-main`×1, `--spacing-xs`×2, `--spacing-lg`×1

### `ds-panel` (10 replacements)

- `packages/design-system/src/components/ds-panel/ds-panel.module.scss` — `--color-background-action-tertiary`×1, `--color-border-action-primary`×3, `--color-border-secondary`×1, `--color-icon-secondary`×1, `--color-icon-primary`×1, `--color-border`×1, `--white`×2

### `ds-popover` (3 replacements)

- `packages/design-system/src/components/ds-popover/ds-popover.module.scss` — `--white`×2
- `packages/design-system/src/components/ds-popover/ds-popover.stories.scss` — `--neutral-2`×1

### `ds-progress-arc` (8 replacements)

- `packages/design-system/src/components/ds-progress-arc/ds-progress-arc.module.scss` — `--color-background-success-strong`×1, `--color-background-danger-strong`×1, `--color-background-selected`×1, `--color-background-tertiary`×1, `--color-icon-success`×1, `--color-font-main`×1
- `packages/design-system/src/components/ds-progress-arc/ds-progress-arc.stories.module.scss` — `--color-font-secondary`×1, `--font-size-sm`×1

### `ds-progress-donut` (8 replacements)

- `packages/design-system/src/components/ds-progress-donut/ds-progress-donut.module.scss` — `--color-background-success-strong`×1, `--color-background-danger-strong`×1, `--color-background-selected`×1, `--color-background-tertiary`×1, `--color-icon-success`×1, `--color-font-main`×1
- `packages/design-system/src/components/ds-progress-donut/ds-progress-donut.stories.module.scss` — `--color-font-secondary`×1, `--font-size-sm`×1

### `ds-progress-linear` (16 replacements)

- `packages/design-system/src/components/ds-progress-linear/ds-progress-linear.module.scss` — `--color-background-success-strong`×2, `--color-background-warning-strong`×1, `--color-background-danger-strong`×2, `--color-background-selected`×1, `--color-background-tertiary`×1, `--color-font-secondary`×1, `--color-font-warning`×1, `--color-font-main`×2, `--spacing-4xs`×2, `--spacing-3xs`×2
- `packages/design-system/src/components/ds-progress-linear/ds-progress-linear.stories.module.scss` — `--spacing-xl`×1

### `ds-radio-group` (12 replacements)

- `packages/design-system/src/components/ds-radio-group/ds-radio-group.module.scss` — `--color-primary-700-default`×2, `--color-secondary-500-net-4`×2, `--color-secondary-600-net-2`×1, `--color-secondary-100`×2, `--color-secondary-300`×2, `--color-secondary-800`×1, `--color-primary-100`×1, `--color-primary-800`×1

### `ds-segment-group` (20 replacements)

- `packages/design-system/src/components/ds-segment-group/ds-segment-group.module.scss` — `--color-background-action-secondary`×1, `--color-border-action-secondary`×1, `--color-background-secondary`×2, `--color-background-action`×1, `--color-border-contrast`×3, `--color-background`×2, `--color-font-main`×1, `--spacing-4xs`×2, `--spacing-3xs`×2, `--spacing-2xs`×2, `--spacing-xs`×1, `--spacing-sm`×1
- `packages/design-system/src/components/ds-segment-group/ds-segment-group.stories.module.scss` — `--color-secondary-100`×1

### `ds-select` (12 replacements)

- `packages/design-system/src/components/ds-select/ds-select.module.scss` — `--color-background-selected-weak`×1, `--color-background-selected`×1, `--color-border-secondary`×1, `--color-font-secondary`×2, `--spacing-3xs`×2, `--spacing-xs`×1
- `packages/design-system/src/components/ds-select/ds-select.stories.module.scss` — `--spacing-standard`×1, `--font-size-xs`×1, `--spacing-2xs`×2

### `ds-skeleton` (17 replacements)

- `packages/design-system/src/components/ds-skeleton/ds-skeleton.module.scss` — `--spacing-xs`×1
- `packages/design-system/src/components/ds-skeleton/ds-skeleton.stories.module.scss` — `--color-font-secondary`×1, `--spacing-standard`×7, `--spacing-sm`×6, `--spacing-xl`×2

### `ds-smart-tabs` (22 replacements)

- `packages/design-system/src/components/ds-smart-tabs/ds-smart-tabs.module.scss` — `--color-border-action-primary-hover`×2, `--color-border-action-secondary`×1, `--color-background-tertiary`×1, `--color-background-action`×2, `--color-font-secondary`×1, `--color-background`×2, `--color-font-main`×1, `--color-border`×1, `--spacing-xs`×1, `--spacing-sm`×1
- `packages/design-system/src/components/ds-smart-tabs/ds-smart-tabs.tsx` — `--color-background-active-moderate`×1, `--color-icon-information-secondary`×1, `--color-background-success-strong`×1, `--color-background-info-strong`×1, `--color-icon-information-main`×1, `--color-background-brand`×1, `--color-data-fuchsia`×1, `--color-icon-warning`×1, `--color-data-amber`×1

### `ds-spinner` (7 replacements)

- `packages/design-system/src/components/ds-spinner/ds-spinner.module.scss` — `--color-background-selected`×1
- `packages/design-system/src/components/ds-spinner/ds-spinner.stories.module.scss` — `--color-background-brand`×1, `--color-font-secondary`×1, `--color-font-main`×1, `--spacing-2xl`×1, `--spacing-lg`×2

### `ds-status-badge` (44 replacements)

- `packages/design-system/src/components/ds-status-badge/ds-status-badge.module.scss` — `--color-background-danger-strong-hover`×1, `--color-background-active-moderate`×1, `--color-icon-information-secondary`×1, `--color-background-success-strong`×2, `--color-background-warning-strong`×2, `--color-background-danger-strong`×1, `--color-icon-information-main`×1, `--color-background-disable`×1, `--color-status-bg-inactive`×1, `--color-status-bg-progress`×1, `--color-data-light-purple`×1, `--color-status-bg-neutral`×1, `--color-status-bg-warning`×1, `--color-font-on-disabled`×1, `--color-font-on-action`×7, `--color-icon-secondary`×3, `--color-data-fuchsia`×1, `--color-icon-inverse`×1, `--color-data-purple`×1, `--spacing-standard`×1, `--color-font-main`×1, `--spacing-4xs`×3, `--spacing-3xs`×4, `--spacing-xs`×2
- `packages/design-system/src/components/ds-status-badge/ds-status-badge.stories.module.scss` — `--spacing-3xl`×1, `--spacing-xs`×1, `--spacing-sm`×1, `--spacing-xl`×1

### `ds-stepper` (60 replacements)

- `packages/design-system/src/components/ds-stepper/ds-stepper.module.scss` — `--color-background-action-secondary-hover`×1, `--color-background-danger-strong`×2, `--color-background-danger-weak`×1, `--color-background-deselected`×1, `--color-background-selected`×6, `--color-outline-moderate`×1, `--color-border-contrast`×1, `--color-font-secondary`×3, `--color-font-action`×1, `--color-font-danger`×1, `--color-background`×1, `--spacing-standard`×3, `--color-font-main`×2, `--line-height-sm`×1, `--line-height-xs`×1, `--color-border`×2, `--font-size-md`×1, `--font-size-sm`×3, `--font-size-xs`×1, `--spacing-4xs`×5, `--spacing-3xs`×3, `--spacing-2xs`×2, `--spacing-xs`×4, `--spacing-sm`×6, `--spacing-md`×1, `--white`×2
- `packages/design-system/src/components/ds-stepper/ds-stepper.stories.module.scss` — `--color-background-success-strong`×3, `--color-secondary-white`×1

### `ds-system-status` (3 replacements)

- `packages/design-system/src/components/ds-system-status/ds-system-status.module.scss` — `--neutral-2`×2, `--white`×1

### `ds-table` (79 replacements)

- `packages/design-system/src/components/ds-table/components/ds-table-bulk-actions/ds-table-bulk-actions.module.scss` — `--spacing-3xs`×1, `--neutral-2`×2, `--neutral-4`×1, `--white`×2
- `packages/design-system/src/components/ds-table/components/ds-table-cell/ds-table-cell.module.scss` — `--color-background-action-hover-weak`×1, `--color-icon-secondary`×1, `--color-font-action`×1, `--spacing-sm`×1
- `packages/design-system/src/components/ds-table/components/ds-table-header/ds-table-header.module.scss` — `--color-background`×1, `--spacing-standard`×1, `--color-font-main`×1, `--neutral-4`×1
- `packages/design-system/src/components/ds-table/components/ds-table-row-virtualized/ds-table-row-virtualized.module.scss` — `--color-background-selected-weak`×2, `--color-background-secondary`×3, `--color-border-secondary`×1, `--spacing-standard`×2, `--color-font-main`×1
- `packages/design-system/src/components/ds-table/components/ds-table-row/ds-table-row.module.scss` — `--color-background-selected-weak`×2, `--color-background-secondary`×2, `--color-background-action`×1, `--color-border-secondary`×1, `--color-secondary-white`×1, `--spacing-standard`×2, `--color-font-main`×1
- `packages/design-system/src/components/ds-table/ds-table.module.scss` — `--color-background`×1
- `packages/design-system/src/components/ds-table/filters/components/range-filter/range-filter.module.scss` — `--color-border`×1
- `packages/design-system/src/components/ds-table/stories/components/progress-infographic/progress-infographic.module.scss` — `--neutral-10`×1
- `packages/design-system/src/components/ds-table/stories/ds-table.stories.module.scss` — `--color-background-action-hover-weak`×1, `--color-background-secondary`×2, `--color-background-selected`×1, `--color-border-secondary`×2, `--color-background-info`×1, `--color-font-secondary`×3, `--color-background`×3, `--spacing-standard`×2, `--color-font-main`×1, `--font-size-2xl`×1, `--font-size-md`×1, `--font-size-sm`×3, `--spacing-xs`×5, `--spacing-sm`×2, `--spacing-md`×3, `--spacing-lg`×3, `--white`×1
- `packages/design-system/src/components/ds-table/stories/filters-panel/components/last-edited-filter/last-edited-filter.module.scss` — `--color-font-secondary`×1, `--color-border`×1
- `packages/design-system/src/components/ds-table/styles/_mixins.scss` — `--color-border-action-primary`×1
- `packages/design-system/src/components/ds-table/styles/_variables.scss` — `--color-background-action-hover-weak`×1, `--color-icon-information-main`×1, `--color-background-secondary`×2, `--color-border`×1

### `ds-tabs` (67 replacements)

- `packages/design-system/src/components/ds-tabs/components/ds-tabs-content/ds-tabs-content.module.scss` — `--spacing-standard`×1
- `packages/design-system/src/components/ds-tabs/components/ds-tabs-list/ds-tabs-indicator.module.scss` — `--color-background-selected`×1
- `packages/design-system/src/components/ds-tabs/components/ds-tabs-list/ds-tabs-list.module.scss` — `--spacing-3xs`×1, `--spacing-xs`×2
- `packages/design-system/src/components/ds-tabs/components/ds-tabs-tab/ds-tabs-tab.module.scss` — `--color-background-action-secondary-hover`×1, `--color-background-action-secondary`×1, `--color-background-selected-weak`×3, `--color-background-secondary`×5, `--color-background-selected`×5, `--color-background-tertiary`×5, `--color-border-secondary`×1, `--color-font-secondary`×1, `--color-background`×5, `--spacing-standard`×2, `--color-font-main`×5, `--line-height-sm`×1, `--line-height-xs`×1, `--spacing-4xs`×2, `--spacing-3xs`×4, `--spacing-2xs`×2, `--spacing-xs`×4, `--spacing-sm`×3, `--spacing-lg`×1
- `packages/design-system/src/components/ds-tabs/ds-tabs.module.scss` — `--spacing-lg`×1
- `packages/design-system/src/components/ds-tabs/ds-tabs.stories.module.scss` — `--color-background-selected`×1, `--color-background-tertiary`×1, `--color-font-secondary`×1, `--spacing-standard`×1, `--color-font-main`×1, `--spacing-2xs`×1, `--spacing-xs`×1, `--spacing-lg`×2

### `ds-tag` (19 replacements)

- `packages/design-system/src/components/ds-tag/ds-tag.module.scss` — `--color-background-action-secondary-hover`×1, `--color-border-action-secondary-hover`×1, `--color-background-selected-weak`×1, `--color-border-action-secondary`×2, `--color-border-action-primary`×3, `--color-background-secondary`×1, `--color-border-contrast`×2, `--color-icon-secondary`×2, `--color-background`×2, `--spacing-3xs`×3, `--spacing-xs`×1

### `ds-tag-filter` (11 replacements)

- `packages/design-system/src/components/ds-tag-filter/ds-tag-filter.module.scss` — `--color-background-selected-weak`×1, `--color-font-secondary`×1, `--color-outline-weak`×1, `--spacing-standard`×1, `--spacing-3xs`×1, `--spacing-xs`×6

### `ds-text-input` (4 replacements)

- `packages/design-system/src/components/ds-text-input/ds-text-input.module.scss` — `--spacing-xs`×1
- `packages/design-system/src/components/ds-text-input/ds-text-input.stories.tsx` — `--color-font-secondary`×3

### `ds-time-picker` (13 replacements)

- `packages/design-system/src/components/ds-time-picker/components/time-item/time-item.module.scss` — `--color-background-action-hover-weak`×2, `--color-border-action-secondary`×1, `--color-background-selected`×1, `--color-font-on-action`×1, `--color-font-main`×1, `--color-border`×1
- `packages/design-system/src/components/ds-time-picker/components/time-scroller/time-scroller.module.scss` — `--color-background`×1, `--spacing-xs`×2
- `packages/design-system/src/components/ds-time-picker/ds-time-picker.stories.module.scss` — `--color-font-secondary`×1, `--font-size-sm`×1, `--spacing-sm`×1

### `ds-toast` (11 replacements)

- `packages/design-system/src/components/ds-toast/ds-toast.module.scss` — `--color-background-success-strong`×1, `--color-background-warning-strong`×1, `--color-background-danger-strong`×1, `--color-background-info-strong`×1, `--color-font-on-action`×1, `--color-icon-inverse`×1, `--spacing-standard`×1, `--spacing-4xs`×2, `--spacing-xs`×1, `--spacing-sm`×1

### `ds-toggle` (17 replacements)

- `packages/design-system/src/components/ds-toggle/ds-toggle.module.scss` — `--color-background-deselected-hover`×4, `--color-background-selected-hover`×2, `--color-background-action-hover`×2, `--color-background-deselected`×1, `--color-background-selected`×2, `--color-background-disable`×2, `--color-font-secondary`×1, `--color-icon-inverse`×1, `--color-background`×1, `--spacing-xs`×1

### `ds-tooltip` (5 replacements)

- `packages/design-system/src/components/ds-tooltip/ds-tooltip.module.scss` — `--color-background-brand`×1, `--color-font-on-action`×1, `--spacing-xs`×1, `--spacing-sm`×1, `--neutral-1`×1

### `ds-tree` (28 replacements)

- `packages/design-system/src/components/ds-tree/ds-tree.module.scss` — `--color-background-action-secondary-hover`×1, `--color-background-action-hover-weak`×2, `--color-border-action-primary-hover`×1, `--color-background-deselected`×1, `--color-background-selected`×2, `--color-background-disable`×3, `--color-border-secondary`×1, `--color-secondary-white`×1, `--color-font-secondary`×4, `--color-secondary-300`×1, `--color-font-main`×3, `--spacing-3xs`×4, `--spacing-2xs`×1, `--spacing-xs`×2
- `packages/design-system/src/components/ds-tree/ds-tree.stories.module.scss` — `--color-info-700`×1

### `ds-vertical-tabs` (17 replacements)

- `packages/design-system/src/components/ds-vertical-tabs/ds-vertical-tabs.module.scss` — `--color-background-action-secondary-hover`×1, `--color-background-action-tertiary`×1, `--color-background-secondary`×1, `--color-background-selected`×1, `--color-font-secondary`×2, `--color-font-main`×2, `--color-border`×1, `--spacing-3xl`×2, `--spacing-xs`×1, `--spacing-lg`×1
- `packages/design-system/src/components/ds-vertical-tabs/ds-vertical-tabs.stories.module.scss` — `--color-background-selected`×1, `--color-font-secondary`×1, `--color-background`×1, `--spacing-xs`×1

### `stories` (12 replacements)

- `packages/design-system/src/stories/overview.module.scss` — `--color-font-secondary`×3, `--spacing-standard`×1, `--spacing-xs`×2, `--spacing-sm`×2, `--spacing-md`×1, `--spacing-lg`×3

### `styles` (90 replacements)

- `packages/design-system/src/styles/_scrollbars.scss` — `--color-background-deselected-hover`×2, `--color-background-secondary`×4
- `packages/design-system/src/styles/_typography.scss` — `--line-height-large`×1, `--font-size-large`×1, `--line-height-3xl`×1, `--line-height-2xl`×1, `--line-height-xl`×1, `--line-height-md`×1, `--line-height-sm`×2, `--line-height-xs`×2, `--font-size-3xl`×1, `--font-size-2xl`×1, `--font-size-xl`×1, `--font-size-md`×1, `--font-size-sm`×2, `--font-size-xs`×2
- `packages/design-system/src/styles/mixins/_list.scss` — `--neutral-2`×1, `--neutral-4`×1
- `packages/design-system/src/styles/shared/_dropdown.scss` — `--color-background-secondary-selected-weak`×1, `--color-background-selected-weak`×1, `--color-background-deselected`×1, `--color-background-selected`×1, `--color-border-secondary`×1, `--color-background`×1, `--color-font-main`×1, `--font-size-sm`×1, `--spacing-xs`×1
- `packages/design-system/src/styles/shared/_input.scss` — `--color-background-action-hover-weak`×2, `--color-background-deselected-hover`×3, `--color-background-selected-weak`×4, `--color-background-action-hover`×3, `--color-background-deselected`×6, `--color-border-action-primary`×4, `--color-background-disable`×4, `--color-background-action`×2, `--color-border-secondary`×1, `--color-background`×3, `--color-font-main`×1, `--color-border`×4, `--spacing-4xs`×1, `--spacing-3xs`×5, `--spacing-xs`×4, `--spacing-sm`×8
