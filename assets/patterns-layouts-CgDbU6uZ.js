import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CWE4U6O9.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";import{l as r,o as i,s as a}from"./blocks-CA-yiUdf.js";import{t as o}from"./mdx-react-shim-CfPhF1dB.js";function s(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Guidelines/Layouts`}),`
`,(0,l.jsx)(n.h1,{id:`layouts`,children:`Layouts`}),`
`,(0,l.jsx)(n.p,{children:`Compose layouts from design-system primitives instead of bespoke CSS. Pick the right primitive
for the job:`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:`?path=/docs/design-system-stack--docs`,children:(0,l.jsx)(n.code,{children:`DsStack`})}),` — 1D arrangement (form fields, toolbars, action
rows).`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:`?path=/docs/design-system-grid--docs`,children:(0,l.jsx)(n.code,{children:`DsGrid`})}),` / `,(0,l.jsx)(n.code,{children:`DsGridItem`}),` — 2D structure on a 12-column grid
(page layouts, two-column forms).`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:`?path=/docs/design-system-card--docs`,children:(0,l.jsx)(n.code,{children:`DsCard`})}),` — grouped surface with header/body/footer slots
(section grouping, side-panels).`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:`?path=/docs/design-system-divider--docs`,children:(0,l.jsx)(n.code,{children:`DsDivider`})}),` — horizontal or vertical separation between
sections.`]}),`
`]}),`
`,(0,l.jsx)(n.p,{children:`All layout props accept responsive values so a single tree adapts across breakpoints.`}),`
`,(0,l.jsx)(n.h2,{id:`when-to-use-which`,children:`When to use which`}),`
`,(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:`Primitive`}),(0,l.jsx)(n.th,{children:`Use for`}),(0,l.jsx)(n.th,{children:`Key props`})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:`DsStack`})}),(0,l.jsx)(n.td,{children:`Vertical stacks of form fields, horizontal rows of actions, anything flex-based`}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:`direction`}),`, `,(0,l.jsx)(n.code,{children:`gap`}),`, `,(0,l.jsx)(n.code,{children:`alignItems`}),`, `,(0,l.jsx)(n.code,{children:`justifyContent`}),`, `,(0,l.jsx)(n.code,{children:`flexWrap`}),`, `,(0,l.jsx)(n.code,{children:`flex`}),`, `,(0,l.jsx)(n.code,{children:`width`})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:`DsGrid`})}),(0,l.jsx)(n.td,{children:`Page layouts, side-by-side form columns, any 2D placement`}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:`columns`}),` (2–12), `,(0,l.jsx)(n.code,{children:`rows`}),` (1–8), `,(0,l.jsx)(n.code,{children:`gutter`}),`, `,(0,l.jsx)(n.code,{children:`margin`})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:`DsGridItem`})}),(0,l.jsxs)(n.td,{children:[`Cells inside `,(0,l.jsx)(n.code,{children:`DsGrid`})]}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:`colSpan`}),`, `,(0,l.jsx)(n.code,{children:`colStart`}),`, `,(0,l.jsx)(n.code,{children:`rowSpan`}),`, `,(0,l.jsx)(n.code,{children:`rowStart`})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:`DsCard`})}),(0,l.jsx)(n.td,{children:`Grouping a logical chunk (a section of a form, a summary panel, a selectable tile)`}),(0,l.jsxs)(n.td,{children:[(0,l.jsx)(n.code,{children:`size`}),`, `,(0,l.jsx)(n.code,{children:`selectable`}),`, `,(0,l.jsx)(n.code,{children:`selected`}),`, `,(0,l.jsx)(n.code,{children:`highlightSelected`}),`, `,(0,l.jsx)(n.code,{children:`disabled`})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:`DsDivider`})}),(0,l.jsx)(n.td,{children:`Separating sections inside a stack or card`}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:`orientation`})})]})]})]}),`
`,(0,l.jsxs)(n.p,{children:[`Reach for `,(0,l.jsx)(n.code,{children:`DsStack`}),` first. Only step up to `,(0,l.jsx)(n.code,{children:`DsGrid`}),` when you need two
dimensions or precise column alignment across rows.`]}),`
`,(0,l.jsx)(n.hr,{}),`
`,(0,l.jsx)(n.h2,{id:`composing-forms`,children:`Composing forms`}),`
`,(0,l.jsxs)(n.p,{children:[`Forms are stacks of `,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-formcontrol-text--docs`,children:(0,l.jsx)(n.code,{children:`DsFormControl`})}),`s. Use `,(0,l.jsx)(n.code,{children:`DsStack`}),` for the column of fields
and for the action row; use `,(0,l.jsx)(n.code,{children:`DsGrid`}),` when fields pair up side-by-side; use`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`DsCard`}),` to group related fields into visually distinct sections.`]}),`
`,(0,l.jsx)(n.h3,{id:`single-column-form`,children:`Single-column form`}),`
`,(0,l.jsx)(n.p,{children:`The canonical pattern: a vertical stack of fields, a divider, then a right-aligned action row.`}),`
`,(0,l.jsx)(a,{dark:!0,language:`tsx`,code:`<form onSubmit={handleSubmit(onSubmit)}>
  <DsStack direction="column" gap="16px" width="320px">
      <DsFormControl label="Name" required>
          <DsFormControl.TextInput placeholder="Enter your name" />
      </DsFormControl>

      <DsFormControl label="Email" required>
          <DsFormControl.TextInput type="email" placeholder="Enter your email" />
      </DsFormControl>

      <DsFormControl label="Description">
          <DsFormControl.Textarea placeholder="Tell us more" />
      </DsFormControl>

      <DsDivider />

      <DsStack direction="row" justifyContent="flex-end" gap="8px">
          <DsButton schema="secondary" variant="ghost">Cancel</DsButton>
          <DsButton type="submit">Submit</DsButton>
      </DsStack>
  </DsStack>

</form>`}),`
`,(0,l.jsx)(n.h3,{id:`two-column-form`,children:`Two-column form`}),`
`,(0,l.jsxs)(n.p,{children:[`Pair related fields (first/last name, start/end date) with `,(0,l.jsx)(n.code,{children:`DsGrid`}),` and`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`DsGridItem colSpan={6}`}),`. Fields that should span the full row use
`,(0,l.jsx)(n.code,{children:`colSpan="full"`}),`.`]}),`
`,(0,l.jsx)(a,{dark:!0,language:`tsx`,code:`<DsGrid columns={12} gutter={16}>
  <DsGridItem colSpan={6}>
      <DsFormControl label="First name" required>
          <DsFormControl.TextInput />
      </DsFormControl>
  </DsGridItem>
  <DsGridItem colSpan={6}>
      <DsFormControl label="Last name" required>
          <DsFormControl.TextInput />
      </DsFormControl>
  </DsGridItem>

  <DsGridItem colSpan="full">
      <DsFormControl label="Email" required>
          <DsFormControl.TextInput type="email" />
      </DsFormControl>
  </DsGridItem>

</DsGrid>`}),`
`,(0,l.jsx)(n.h3,{id:`grouped-sections-with-dscard`,children:`Grouped sections with DsCard`}),`
`,(0,l.jsxs)(n.p,{children:[`Longer forms are easier to scan when related fields live inside a `,(0,l.jsx)(n.code,{children:`DsCard`}),`. Put the
section title in `,(0,l.jsx)(n.code,{children:`DsCard.Header`}),`, the fields in `,(0,l.jsx)(n.code,{children:`DsCard.Body`}),` (nested`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`DsStack`}),`), and actions in `,(0,l.jsx)(n.code,{children:`DsCard.Footer`}),`.`]}),`
`,(0,l.jsx)(a,{dark:!0,language:`tsx`,code:`<DsCard.Root>
  <DsCard.Header>
      <DsTypography variant="heading4">Account</DsTypography>
  </DsCard.Header>
  <DsCard.Body>
      <DsStack direction="column" gap="16px">
          <DsFormControl label="Email" required>
              <DsFormControl.TextInput type="email" />
          </DsFormControl>
          <DsFormControl label="Password" required>
              <DsFormControl.TextInput type="password" />
          </DsFormControl>
      </DsStack>
  </DsCard.Body>
  <DsCard.Footer>
      <DsStack direction="row" justifyContent="flex-end" gap="8px">
          <DsButton schema="secondary" variant="ghost">Cancel</DsButton>
          <DsButton type="submit">Save</DsButton>
      </DsStack>
  </DsCard.Footer>
</DsCard.Root>`}),`
`,(0,l.jsxs)(n.p,{children:[`For multi-section forms, stack several cards with `,(0,l.jsx)(n.code,{children:`DsStack direction="column" gap="24px"`}),`, or separate in-card sub-sections with a horizontal `,(0,l.jsx)(n.code,{children:`DsDivider`}),`.`]}),`
`,(0,l.jsx)(n.h3,{id:`do--dont`,children:`Do / don't`}),`
`,(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:`Do`}),(0,l.jsx)(n.th,{children:`Don't`})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[`Wrap the form body in `,(0,l.jsx)(n.code,{children:`DsStack direction="column"`})]}),(0,l.jsxs)(n.td,{children:[`Use a raw `,(0,l.jsx)(n.code,{children:`div`}),` with inline flex styles`]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[`Use `,(0,l.jsx)(n.code,{children:`DsFormControl`}),` for every field (labels, required state, messages)`]}),(0,l.jsxs)(n.td,{children:[`Render bare inputs with a manual `,(0,l.jsx)(n.code,{children:`label`}),` element`]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[`Let `,(0,l.jsx)(n.code,{children:`DsGrid`}),` handle column math on a 12-col track`]}),(0,l.jsx)(n.td,{children:`Hand-roll percentage widths`})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:[`Align submit buttons with `,(0,l.jsx)(n.code,{children:`DsStack justifyContent="flex-end"`})]}),(0,l.jsxs)(n.td,{children:[`Rely on `,(0,l.jsx)(n.code,{children:`text-align: right`}),` on a wrapper`]})]})]})]}),`
`,(0,l.jsx)(n.hr,{}),`
`,(0,l.jsx)(n.h2,{id:`responsiveness`,children:`Responsiveness`}),`
`,(0,l.jsx)(n.p,{children:`The design system targets two breakpoints, defined in`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`src/utils/responsive.ts`}),`:`]}),`
`,(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:`Breakpoint`}),(0,l.jsx)(n.th,{children:`Matches`})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:`md`})}),(0,l.jsxs)(n.td,{children:[`narrow viewports (below `,(0,l.jsx)(n.code,{children:`--breakpoint-lg`}),`)`]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:`lg`})}),(0,l.jsxs)(n.td,{children:[`wide viewports (at or above `,(0,l.jsx)(n.code,{children:`--breakpoint-lg`}),`)`]})]})]})]}),`
`,(0,l.jsxs)(n.p,{children:[`Any layout prop declared as `,(0,l.jsx)(n.code,{children:`ResponsiveValue<T>`}),` accepts either a plain value or a
`,(0,l.jsx)(n.code,{children:`Partial<Record<'lg' | 'md', T>>`}),`. The wrapper resolves the right value for the current
breakpoint; the underlying component never sees the responsive object.`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`DsStack`}),` and `,(0,l.jsx)(n.code,{children:`DsGrid`}),` / `,(0,l.jsx)(n.code,{children:`DsGridItem`}),` are both wrapped with
`,(0,l.jsx)(n.code,{children:`withResponsiveProps`}),`, so their layout props are already responsive-aware.`]}),`
`,(0,l.jsx)(n.h3,{id:`example-stack-that-becomes-a-row-on-wide-screens`,children:`Example: stack that becomes a row on wide screens`}),`
`,(0,l.jsx)(a,{dark:!0,language:`tsx`,code:`<DsStack
  direction={{ md: 'column', lg: 'row' }}
  gap={{ md: 8, lg: 24 }}
  alignItems="center"
>
  <DsCard.Root>{/* ... */}</DsCard.Root>
  <DsCard.Root>{/* ... */}</DsCard.Root>
</DsStack>`}),`
`,(0,l.jsx)(n.h3,{id:`example-two-column-form-that-collapses-on-narrow-screens`,children:`Example: two-column form that collapses on narrow screens`}),`
`,(0,l.jsx)(a,{dark:!0,language:`tsx`,code:`<DsGrid columns={12} gutter={{ md: 8, lg: 16 }}>
  <DsGridItem colSpan={{ md: 'full', lg: 6 }}>
      <DsFormControl label="First name">
          <DsFormControl.TextInput />
      </DsFormControl>
  </DsGridItem>
  <DsGridItem colSpan={{ md: 'full', lg: 6 }}>
      <DsFormControl label="Last name">
          <DsFormControl.TextInput />
      </DsFormControl>
  </DsGridItem>
</DsGrid>`}),`
`,(0,l.jsx)(n.h3,{id:`when-props-arent-enough`,children:`When props aren't enough`}),`
`,(0,l.jsxs)(n.p,{children:[`For conditional rendering or logic that depends on the breakpoint, use the hooks exported from
`,(0,l.jsx)(n.code,{children:`responsive.ts`}),`:`]}),`
`,(0,l.jsx)(a,{dark:!0,language:`tsx`,code:`import { useBreakpoint, useResponsiveValue } from '@drivenets/design-system';

const Toolbar = () => {
const bp = useBreakpoint(); // 'lg' | 'md'
const maxItems = useResponsiveValue({ md: 3, lg: 8 });

  return bp === 'lg' ? <WideToolbar max={maxItems} /> : <CompactToolbar max={maxItems} />;

};`}),`
`,(0,l.jsxs)(n.p,{children:[`To give a custom component responsive props without rewriting it, wrap it with
`,(0,l.jsx)(n.code,{children:`withResponsiveProps`}),`:`]}),`
`,(0,l.jsx)(a,{dark:!0,language:`tsx`,code:`
import type { ComponentProps } from 'react';
import { withResponsiveProps } from '@drivenets/design-system';

interface MyComponentProps {
size: 'large' | 'medium' | 'small' | 'tiny';
label: string;
}

const MyComponent = ({ size, label }: MyComponentProps) => (

<div className={\`my-component my-component--\${size}\`}>{label}</div>
);

export const MyResponsiveComponent = withResponsiveProps(MyComponent, ['size']);

// No need to redefine the props — withResponsiveProps rewrites the listed keys
// to accept responsive values, and the type is inferred automatically:
type MyResponsiveComponentProps = ComponentProps<typeof MyResponsiveComponent>;

// Consumers can now pass:

<MyResponsiveComponent label="Hello" size={{ md: 'small', lg: 'large' }} />`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),r()}))();export{c as default};