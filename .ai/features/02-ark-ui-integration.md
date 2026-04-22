# Ark UI Integration

## Overview

The DS uses **Ark UI** (`@ark-ui/react`) as the primary headless component
library. Ark UI provides unstyled, accessible primitives that the DS wraps with
DriveNets styling (SCSS modules) and API conventions (`Ds` prefix, consistent
prop patterns).

## Pattern

The typical wrapping pattern:

1. Import the Ark UI primitive and its types
2. Define a `Ds*Props` interface extending or composing Ark's props
3. Compose Ark's compound components inside the DS component
4. Apply SCSS module classes for styling
5. Expose a simplified API to consumers

```typescript
// ds-modal.tsx
import { Dialog } from '@ark-ui/react/dialog';
import { Portal } from '@ark-ui/react/portal';
import styles from './ds-modal.module.scss';

export const DsModal = ({ open, onOpenChange, children, ...props }: DsModalProps) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange} {...props}>
    <Portal>
      <Dialog.Backdrop className={styles.backdrop} />
      <Dialog.Positioner>
        <Dialog.Content className={styles.content}>
          {children}
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
);
```

## Components Using Ark UI

Ark UI is used extensively across the DS. Key components:

| DS Component        | Ark UI Primitive                   | Notes                                    |
| ------------------- | ---------------------------------- | ---------------------------------------- |
| `DsSelect`          | `Select`, `createListCollection`   | Also uses `useSelect` hook               |
| `DsModal`           | `Dialog`, `Portal`                 | Wraps dialog + backdrop + positioner     |
| `DsDialog`          | `Dialog`, `Portal`                 | Variant of modal with different layout   |
| `DsDrawer`          | `Dialog`, `Portal`                 | Slide-out panel variant                  |
| `DsDropdownMenu`    | `Menu`                             | Dropdown trigger + menu items            |
| `DsTabs`            | `Tabs`                             | Tab list + panels                        |
| `DsToggle`          | `Switch`                           | Toggle/switch control                    |
| `DsToast`           | `Toast`, `Toaster`                 | Toast notifications                      |
| `DsFileUpload`      | `FileUpload`                       | Drag-and-drop file upload                |
| `DsAutocomplete`    | `Combobox`                         | Searchable select                        |
| `DsRadioGroup`      | `RadioGroup`                       | Radio button groups                      |
| `DsSegmentGroup`    | `SegmentGroup`                     | Segmented control                        |
| `DsDatePicker`      | `DatePicker`                       | Date selection                           |
| `DsDateRangePicker` | `DatePicker`                       | Date range variant                       |
| `DsTree`            | `TreeView`, `createTreeCollection` | Tree/hierarchy view                      |
| `DsAvatar`          | `Avatar`                           | User avatar with fallback                |
| `DsNumberInput`     | `NumberInput`                      | Numeric input with stepper               |
| `DsPasswordInput`   | — (custom)                         | Uses Ark patterns but not a direct wrap  |
| `DsPopover`         | `Popover`                          | Floating content panel                   |
| `DsTooltip`         | `Tooltip`                          | Hover tooltips                           |
| `DsProgress`        | `Progress`                         | Progress bar/indicator                   |
| `DsSteps`           | `@zag-js/steps`                    | Step wizard (uses Zag directly, not Ark) |

## Other Primitive Libraries

Not all components use Ark UI:

| Library                     | Used by                                                            |
| --------------------------- | ------------------------------------------------------------------ |
| **Radix UI**                | `DsCheckbox` (radix checkbox), some dialog/dropdown variants       |
| **@tanstack/react-table**   | `DsTable` (headless table with sorting, filtering, virtualization) |
| **@tanstack/react-virtual** | `DsTable` (row virtualization for large datasets)                  |
| **dnd-kit**                 | Drag-and-drop components                                           |
| **@zag-js**                 | `DsSteps` (state machine for multi-step flows)                     |

## Ark UI Version

Currently on `@ark-ui/react ^5.36.1`. Ark UI follows semver — minor updates
may add new primitives or features. Check the Ark UI changelog before upgrading.

## Controlled/Uncontrolled State

Ark UI primitives handle controlled/uncontrolled state internally. The DS
components expose the standard React pattern:

- `value` + `onValueChange` → controlled
- `defaultValue` → uncontrolled

Ark's internal state machine handles the switching, so DS components don't need
custom state management for this.
