import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-DVysNJuQ.js";import{n as r,t as i}from"./ds-date-picker-BeIo13Mn.js";var a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{a=t(),i(),o=n(),s={title:`Components/DatePicker`,component:r,parameters:{layout:`centered`},decorators:[e=>(0,o.jsx)(`div`,{style:{width:`320px`},children:(0,o.jsx)(e,{})})],argTypes:{withTime:{control:`boolean`},closeOnSelect:{control:`boolean`},disablePortal:{control:`boolean`},hideClearButton:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},placeholder:{control:`text`},locale:{control:`object`},className:{table:{disable:!0}},slotProps:{table:{disable:!0}}}},c={args:{name:`eventDate`}},l={args:{withTime:!0}},u={args:{withTime:!0,defaultValue:new Date(`2024-12-25T14:30:00Z`)}},d={args:{value:new Date(`2024-12-25T14:30:00Z`),disabled:!0}},f={args:{value:new Date(`2024-12-25T14:30:00Z`),readOnly:!0}},p={args:{withTime:!0,min:new Date(`2024-12-01T00:30:00Z`),max:new Date(`2025-01-31T23:20:00Z`)}},m={args:{value:new Date(`2024-12-25T14:30:00Z`),hideClearButton:!0}},h={args:{withTime:!0},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,a.useState)(new Date(`2026-01-15T09:45:00Z`));return(0,o.jsx)(r,{...e,value:t,onChange:n})}},g={args:{value:new Date(`2024-12-25T14:30:00Z`),withTime:!0,locale:{openCalendarLabel:`Open calendar`,clearLabel:`Clear date`,timeTriggerLabel:`Choose time`}}},_=[`Default`,`WithTime`,`WithDefaultValue`,`Disabled`,`ReadOnly`,`WithMinMax`,`HiddenClearButton`,`Controlled`,`Localized`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'eventDate'
  }
}`,...c.parameters?.docs?.source},description:{story:`The default date picker is uncontrolled — the user picks a date from the calendar or
types directly into the input. Reach for this when the parent does not need to own
the selected value.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true
  }
}`,...l.parameters?.docs?.source},description:{story:"Enable `withTime` to show a nested time picker inside the calendar popover. Use it when\nthe user must select both a date and a time in a single control.",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true,
    defaultValue: new Date('2024-12-25T14:30:00Z')
  }
}`,...u.parameters?.docs?.source},description:{story:"Pass `defaultValue` to pre-fill the input in uncontrolled mode. The value can still\nbe changed or cleared by the user.",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: new Date('2024-12-25T14:30:00Z'),
    disabled: true
  }
}`,...d.parameters?.docs?.source},description:{story:"The disabled state blocks all interaction and dims the control. Uses a fixed `value`\nfor display — no `onChange` is needed when the field is not editable. Use it when the\nfield depends on another selection that has not been made yet.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: new Date('2024-12-25T14:30:00Z'),
    readOnly: true
  }
}`,...f.parameters?.docs?.source},description:{story:"Read-only keeps the value visible but prevents editing. Uses a fixed `value` for\ndisplay — no `onChange` is needed when the field is not editable.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true,
    min: new Date('2024-12-01T00:30:00Z'),
    max: new Date('2025-01-31T23:20:00Z')
  }
}`,...p.parameters?.docs?.source},description:{story:"Set `min` and `max` to constrain the selectable date range. Dates outside the range\nare rejected on blur and cannot be picked from the calendar.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: new Date('2024-12-25T14:30:00Z'),
    hideClearButton: true
  }
}`,...m.parameters?.docs?.source},description:{story:`Hides the clear button even when a value is selected. By default the clear button
is shown whenever the picker has a value.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [value, setValue] = useState<Date | null>(new Date('2026-01-15T09:45:00Z'));
    return <DsDatePicker {...args} value={value} onChange={setValue} />;
  }
}`,...h.parameters?.docs?.source},description:{story:"In controlled mode the parent owns `value` and receives updates via `onChange`. Use\nthis pattern when the selected date drives other UI or must be validated externally.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: new Date('2024-12-25T14:30:00Z'),
    withTime: true,
    locale: {
      openCalendarLabel: 'Open calendar',
      clearLabel: 'Clear date',
      timeTriggerLabel: 'Choose time'
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`The \`locale\` prop overrides aria-labels for the calendar trigger, clear button, and
time trigger so the component can be translated. Only the strings passed are
overridden; omitted keys keep their defaults.`,...g.parameters?.docs?.description}}}})))()}v();export{h as Controlled,c as Default,d as Disabled,m as HiddenClearButton,g as Localized,f as ReadOnly,u as WithDefaultValue,p as WithMinMax,l as WithTime,_ as __namedExportsOrder,s as default};