import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CbHMB79d.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";import{l as r,o as i,s as a}from"./blocks-Cq6iGg0H.js";import{t as o}from"./mdx-react-shim-BP_eHiSa.js";function s(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Guidelines/Forms`}),`
`,(0,l.jsx)(n.h1,{id:`forms`,children:`Forms`}),`
`,(0,l.jsxs)(n.p,{children:[`Forms in the design system are built with `,(0,l.jsx)(n.a,{href:`https://react-hook-form.com/`,rel:`nofollow`,children:(0,l.jsx)(n.code,{children:`react-hook-form`})}),` and
`,(0,l.jsx)(n.a,{href:`https://zod.dev/`,rel:`nofollow`,children:(0,l.jsx)(n.code,{children:`zod`})}),`, and every input is wrapped in
`,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-formcontrol-text--docs`,children:(0,l.jsx)(n.code,{children:`DsFormControl`})}),` so labels, required indicators, and
validation messages render consistently. This page describes the canonical pattern; for a runnable
reference see the `,(0,l.jsx)(n.a,{href:`?path=/story/examples-sampleform--default`,children:(0,l.jsx)(n.code,{children:`Examples/SampleForm`})}),` story.`]}),`
`,(0,l.jsx)(n.h2,{id:`related-components`,children:`Related components`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:`?path=/docs/design-system-formcontrol-text--docs`,children:(0,l.jsx)(n.code,{children:`DsFormControl`})}),`
(`,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-formcontrol-textarea--docs`,children:`Textarea`}),`,
`,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-formcontrol-number--docs`,children:`Number`}),`,
`,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-formcontrol-password--docs`,children:`Password`}),`,
`,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-formcontrol-select--docs`,children:`Select`}),`,
`,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-formcontrol-datepicker--docs`,children:`DatePicker`}),`,
`,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-formcontrol-timepicker--docs`,children:`TimePicker`}),`)`]}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`?path=/docs/design-system-textinput--docs`,children:(0,l.jsx)(n.code,{children:`DsTextInput`})})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`?path=/docs/design-system-select--docs`,children:(0,l.jsx)(n.code,{children:`DsSelect`})})}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:`?path=/docs/design-system-datepicker--docs`,children:(0,l.jsx)(n.code,{children:`DsDatePicker`})}),` /
`,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-daterangepicker--docs`,children:(0,l.jsx)(n.code,{children:`DsDateRangePicker`})}),` /
`,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-timepicker--docs`,children:(0,l.jsx)(n.code,{children:`DsTimePicker`})})]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:`?path=/docs/design-system-radiogroup--docs`,children:(0,l.jsx)(n.code,{children:`DsRadioGroup`})}),` /
`,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-checkbox--docs`,children:(0,l.jsx)(n.code,{children:`DsCheckbox`})})]}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`?path=/docs/design-system-buttonv3--docs`,children:(0,l.jsx)(n.code,{children:`DsButtonV3`})})}),`
`,(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:`?path=/docs/design-system-typography--docs`,children:(0,l.jsx)(n.code,{children:`DsTypography`})})}),`
`]}),`
`,(0,l.jsx)(n.h2,{id:`stack`,children:`Stack`}),`
`,(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:`Dependency`}),(0,l.jsx)(n.th,{children:`Why`})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:`react-hook-form`})}),(0,l.jsx)(n.td,{children:`Uncontrolled-by-default form state with minimal re-renders`})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:`zod`})}),(0,l.jsx)(n.td,{children:`Schema-first validation that also produces the form's TypeScript types`})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:`@hookform/resolvers/zod`})}),(0,l.jsxs)(n.td,{children:[`Bridges a Zod schema into `,(0,l.jsx)(n.code,{children:`react-hook-form`}),`'s validation lifecycle`]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:`DsFormControl`})}),(0,l.jsx)(n.td,{children:`Unifies label, required marker, status, and message rendering for every field`})]})]})]}),`
`,(0,l.jsx)(n.h2,{id:`set-up-the-form`,children:`Set up the form`}),`
`,(0,l.jsxs)(n.p,{children:[`Call `,(0,l.jsx)(n.code,{children:`useForm`}),` with the Zod resolver, a complete `,(0,l.jsx)(n.code,{children:`defaultValues`}),` object, and `,(0,l.jsx)(n.code,{children:`mode: 'onChange'`}),`.`]}),`
`,(0,l.jsxs)(n.p,{children:[`Wrap the tree in `,(0,l.jsx)(n.code,{children:`FormProvider`}),` so nested components can read
context when needed.`]}),`
`,(0,l.jsx)(a,{dark:!0,language:`tsx`,code:`
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sampleFormSchema, type SampleFormValues } from './sample-form-schema';

const defaultValues: Partial<SampleFormValues> = { name: '', email: ''};

const SampleForm = () => {

  const form = useForm<SampleFormValues>({
      resolver: zodResolver(sampleFormSchema),
      defaultValues,
      mode: 'onChange',
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: SampleFormValues) => {
      // ...submit side effect
  };

  return (
      <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>{/* fields */}</form>
      </FormProvider>
  );

};`}),`
`,(0,l.jsx)(n.h2,{id:`define-the-schema`,children:`Define the schema`}),`
`,(0,l.jsxs)(n.p,{children:[`Co-locate the schema in a `,(0,l.jsx)(n.code,{children:`<form-name>-schema.ts`}),` file next to the component. The
schema doubles as the form's type (`,(0,l.jsx)(n.code,{children:`z.infer`}),`) and as the source of every error message,
which keeps copy aligned across validation and UI.`]}),`
`,(0,l.jsx)(a,{dark:!0,language:`typescript`,code:`
import { z } from 'zod';

const subscriptionTypes = ['basic', 'pro', 'enterprise'] as const;

export const sampleFormSchema = z.object({
name: z.string().min(1, 'Name is required'),
email: z.string().email('Invalid email address'),
description: z.string().min(20, 'Short description is required (min. 20 chars)'),
quantity: z
	.number('Quantity is required')
	.min(1, 'Quantity must be at least 1')
	.max(100, 'Quantity cannot exceed 100'),
birthDate: z.date('Birth date is required'),
eventStartDate: z.date('Event start date is required'),
eventEndDate: z.date('Event end date is required'),
acceptTerms: z.boolean().refine((v) => v, 'You must accept the terms and conditions'),
subscription: z.enum(subscriptionTypes, {
	error: () => 'Please select a subscription plan',
}),
contactMethod: z.string().nonempty('Please select a contact method'),
});

export type SampleFormValues = z.infer<typeof sampleFormSchema>;`}),`
`,(0,l.jsxs)(n.h2,{id:`bind-every-control-with-controller`,children:[`Bind every control with `,(0,l.jsx)(n.code,{children:`Controller`})]}),`
`,(0,l.jsxs)(n.p,{children:[`Prefer `,(0,l.jsx)(n.code,{children:`Controller`}),` over `,(0,l.jsx)(n.code,{children:`register`}),`. A single pattern keeps every
field consistent: `,(0,l.jsx)(n.code,{children:`Controller`}),` is the outer element, `,(0,l.jsx)(n.code,{children:`DsFormControl`}),` lives
inside the `,(0,l.jsx)(n.code,{children:`render`}),` callback reading status and message from `,(0,l.jsx)(n.code,{children:`fieldState`}),`,
and the input itself is driven by `,(0,l.jsx)(n.code,{children:`field`}),`.
Do `,(0,l.jsx)(n.strong,{children:`not`}),` gate the error message on `,(0,l.jsx)(n.code,{children:`fieldState.isTouched`}),`.`]}),`
`,(0,l.jsx)(a,{dark:!0,language:`tsx`,code:`<Controller
  name="name"
  control={control}
  render={({ field, fieldState }) => (
      <DsFormControl
          label="Name"
          required
          status="error"
          messageIcon="cancel"
          message={fieldState.error?.message}
      >
          <DsFormControl.TextInput placeholder="Enter your name" {...field} />
      </DsFormControl>
  )}
/>

<Controller
  name="description"
  control={control}
  render={({ field, fieldState }) => (
      <DsFormControl
          label="Description"
          required
          status="error"
          messageIcon="cancel"
          message={fieldState.error?.message}
      >
          <DsFormControl.Textarea placeholder="Enter your description" {...field} />
      </DsFormControl>
  )}
/>`}),`
`,(0,l.jsxs)(n.h2,{id:`let-field-drive-value-dirty-and-touched-state`,children:[`Let `,(0,l.jsx)(n.code,{children:`field`}),` drive value, dirty, and touched state`]}),`
`,(0,l.jsxs)(n.p,{children:[`With `,(0,l.jsx)(n.code,{children:`mode: 'onChange'`}),`, `,(0,l.jsx)(n.code,{children:`field.onChange(value)`}),` already updates the value,
marks the field dirty, and triggers validation; `,(0,l.jsx)(n.code,{children:`field.onBlur()`}),` marks the field
touched. Skip custom `,(0,l.jsx)(n.code,{children:`setValue`}),` wrappers — and whenever the control accepts standard
input semantics (`,(0,l.jsx)(n.code,{children:`value`}),` + `,(0,l.jsx)(n.code,{children:`onChange(event)`}),` + `,(0,l.jsx)(n.code,{children:`onBlur`}),`), spread `,(0,l.jsx)(n.code,{children:`{...field}`}),` into it.
A custom mapper is only needed when the control expects a different callback shape (`,(0,l.jsx)(n.code,{children:`onValueChange`}),`, `,(0,l.jsx)(n.code,{children:`onCheckedChange`}),`, a`,(0,l.jsx)(n.code,{children:`Date`}),` object, etc.).`]}),`
`,(0,l.jsx)(n.h2,{id:`date-fields`,children:`Date fields`}),`
`,(0,l.jsxs)(n.p,{children:[`Store dates as Date objects. Single-date pickers follow the same Controller-outer pattern
as any other field. `,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-daterangepicker--docs`,children:(0,l.jsx)(n.code,{children:`DsDateRangePicker`})}),` is the
exception: it drives two form fields
simultaneously, so bind each field with `,(0,l.jsx)(n.code,{children:`useController`}),` and forward`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`field.value`}),` / `,(0,l.jsx)(n.code,{children:`field.onChange`}),` / `,(0,l.jsx)(n.code,{children:`field.onBlur`}),` through the range picker's
props and slots. Error state flows through
`,(0,l.jsx)(n.code,{children:`slotProps.startDateFormControl`}),` / `,(0,l.jsx)(n.code,{children:`slotProps.endDateFormControl`}),`;`,(0,l.jsx)(n.code,{children:`onBlur`}),` is
forwarded via `,(0,l.jsx)(n.code,{children:`slotProps.startDatePicker`}),` / `,(0,l.jsx)(n.code,{children:`slotProps.endDatePicker`}),`(
`,(0,l.jsx)(n.code,{children:`DsFormControl`}),` does not accept `,(0,l.jsx)(n.code,{children:`onBlur`}),`).`]}),`
`,(0,l.jsx)(a,{dark:!0,language:`tsx`,code:`
<Controller
name="birthDate"
control={control}
render={({ field, fieldState }) => (
	<DsFormControl
		label="Birth Date"
		required
		status="error"
		messageIcon="cancel"
		message={fieldState.error?.message}
	>
		<DsFormControl.DatePicker {...field} />
	</DsFormControl>
)}
/>

const { field: eventStartField } = useController({ name: 'eventStartDate', control });
const { field: eventEndField } = useController({ name: 'eventEndDate', control });

<DsDateRangePicker
  value={[eventStartField.value, eventEndField.value]}
  onChange={([start, end]) => {
      eventStartField.onChange(start);
      eventEndField.onChange(end);
  }}
  slotProps={{
      startDatePicker: { onBlur: eventStartField.onBlur },
      endDatePicker:   { onBlur: eventEndField.onBlur },
      startDateFormControl: {
          required: true,
          status: 'error',
          messageIcon: 'cancel',
          message: errors.eventStartDate?.message,
      },
      endDateFormControl: {
          required: true,
          status: 'error',
          messageIcon: 'cancel',
          message: errors.eventEndDate?.message,
      },
  }}
/>`}),`
`,(0,l.jsx)(n.h2,{id:`grouped-controls-radio-checkbox`,children:`Grouped controls (radio, checkbox)`}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:`?path=/docs/design-system-radiogroup--docs`,children:(0,l.jsx)(n.code,{children:`DsRadioGroup`})}),` and
`,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-checkbox--docs`,children:(0,l.jsx)(n.code,{children:`DsCheckbox`})}),` render their own labels, so they sit alongside —
not inside — `,(0,l.jsx)(n.code,{children:`DsFormControl`}),`. Wrap them in `,(0,l.jsx)(n.code,{children:`Controller`}),` just like any other field so RHF
owns value, dirty, and touched state. When you need to render an inline error message (for example below a
radio group), use `,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-typography--docs`,children:(0,l.jsx)(n.code,{children:`DsTypography`})}),` and the
`,(0,l.jsx)(n.code,{children:`--background-error`}),` token — never inline styles or raw HTML elements.`]}),`
`,(0,l.jsx)(a,{dark:!0,language:`tsx`,code:`
<Controller
  name="subscription"
  control={control}
  render={({ field, fieldState }) => (
      <>
          <DsRadioGroup.Root value={field.value ?? ''} onValueChange={field.onChange}>
              <DsRadioGroup.Item value="basic" label="Basic" />
              <DsRadioGroup.Item value="pro" label="Pro" />
              <DsRadioGroup.Item value="enterprise" label="Enterprise" />
          </DsRadioGroup.Root>
          {fieldState.isTouched && fieldState.error && (
              <DsTypography variant="body-xs-reg" style={{ color: 'var(--background-error)' }}>
                  {fieldState.error.message}
              </DsTypography>
          )}
      </>
  )}
/>

<Controller
  name="acceptTerms"
  control={control}
  render={({ field }) => (
      <DsCheckbox
          label="I accept the terms and conditions"
          checked={!!field.value}
          onCheckedChange={(checked) => field.onChange(checked === true)}
          onBlur={field.onBlur}
      />
  )}
/>`}),`
`,(0,l.jsx)(n.h2,{id:`submit-gating-and-reset`,children:`Submit gating and reset`}),`
`,(0,l.jsx)(n.p,{children:`Avoid disabling submit purely based on validation state. Users should be able to attempt submission and receive clear feedback about what needs fixing.`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsx)(n.li,{children:`Disable submit when no meaningful action can occur (e.g. no changes in edit forms)`}),`
`,(0,l.jsxs)(n.li,{children:[`Always disable while submitting, and surface the in-flight state through
`,(0,l.jsx)(n.a,{href:`?path=/docs/design-system-buttonv3--docs`,children:(0,l.jsx)(n.code,{children:`DsButtonV3`})}),`'s `,(0,l.jsx)(n.code,{children:`loading`}),` prop so the button renders its
spinner in place of the label`]}),`
`,(0,l.jsx)(n.li,{children:`Do not gate submit on isValid`}),`
`]}),`
`,(0,l.jsx)(n.p,{children:`For edit/update forms, disable until the user has made changes:`}),`
`,(0,l.jsx)(a,{dark:!0,language:`tsx`,code:`<DsButtonV3 type="submit" disabled={!isDirty || isSubmitting} loading={isSubmitting}>
  Submit
</DsButtonV3>`}),`
`,(0,l.jsx)(n.p,{children:`For create forms, keep submit enabled and rely on validation on submit:`}),`
`,(0,l.jsx)(a,{dark:!0,language:`tsx`,code:`<DsButtonV3 type="submit" disabled={isSubmitting} loading={isSubmitting}>
  Submit
</DsButtonV3>`}),`
`,(0,l.jsx)(n.h2,{id:`checklist`,children:`Checklist`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[`Schema lives in a sibling `,(0,l.jsx)(n.code,{children:`<form-name>-schema.ts`}),` and drives both types and copy.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`useForm`}),` uses `,(0,l.jsx)(n.code,{children:`zodResolver`}),`, `,(0,l.jsx)(n.code,{children:`mode: 'onChange'`}),`, and a complete
`,(0,l.jsx)(n.code,{children:`defaultValues`}),` object.`]}),`
`,(0,l.jsxs)(n.li,{children:[`The form tree is wrapped in `,(0,l.jsx)(n.code,{children:`FormProvider`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[`Every field is bound with `,(0,l.jsx)(n.code,{children:`Controller`}),` — never `,(0,l.jsx)(n.code,{children:`register`}),`. Reach for
`,(0,l.jsx)(n.code,{children:`useController`}),` only when one input drives multiple fields (for example
`,(0,l.jsx)(n.code,{children:`DsDateRangePicker`}),`).`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`Controller`}),` is the outer element; `,(0,l.jsx)(n.code,{children:`DsFormControl`}),` lives inside
`,(0,l.jsx)(n.code,{children:`render`}),` and reads status/message from `,(0,l.jsx)(n.code,{children:`fieldState`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[`Inline text (for example grouped-control error messages) uses `,(0,l.jsx)(n.code,{children:`DsTypography`}),` and
design tokens like `,(0,l.jsx)(n.code,{children:`{`}),`var(--background-error)`,(0,l.jsx)(n.code,{children:`}`}),` — no raw HTML or inline style colors.`]}),`
`,(0,l.jsxs)(n.li,{children:[`Inputs with standard `,(0,l.jsx)(n.code,{children:`value`}),`/`,(0,l.jsx)(n.code,{children:`onChange`}),`/`,(0,l.jsx)(n.code,{children:`onBlur`}),` semantics get
`,(0,l.jsx)(n.code,{children:`{...field}`}),` spread straight into them. Only map callbacks explicitly when the control
exposes a different shape (e.g. `,(0,l.jsx)(n.code,{children:`onValueChange`}),`, `,(0,l.jsx)(n.code,{children:`onCheckedChange`}),`, a`,(0,l.jsx)(n.code,{children:`Date`}),`
object) — no custom `,(0,l.jsx)(n.code,{children:`setValue`}),` helper.`]}),`
`,(0,l.jsxs)(n.li,{children:[`When one input writes to multiple fields at once (for example `,(0,l.jsx)(n.code,{children:`DsDateRangePicker`}),`),
create a `,(0,l.jsx)(n.code,{children:`useController`}),` per field and call each `,(0,l.jsx)(n.code,{children:`field.onChange`}),` in the
shared handler — do not reach for `,(0,l.jsx)(n.code,{children:`setValue`}),`. Forward `,(0,l.jsx)(n.code,{children:`field.onBlur`}),`
through the matching sub-component slot (e.g.
`,(0,l.jsx)(n.code,{children:`{`}),`slotProps.startDatePicker.onBlur`,(0,l.jsx)(n.code,{children:`}`}),`), not the form-control slot.`]}),`
`,(0,l.jsxs)(n.li,{children:[`Submit is `,(0,l.jsx)(n.strong,{children:`not`}),` gated on `,(0,l.jsx)(n.code,{children:`isValid`}),`.`,`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[`Edit forms: `,(0,l.jsx)(n.code,{children:`disabled={!isDirty || isSubmitting}`})]}),`
`,(0,l.jsxs)(n.li,{children:[`Create forms: `,(0,l.jsx)(n.code,{children:`disabled={isSubmitting}`})]}),`
`]}),`
`]}),`
`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),r()}))();export{c as default};