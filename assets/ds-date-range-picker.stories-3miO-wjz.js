import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,r as a,t as o}from"./ds-segment-group-CxU3zRPC.js";import{n as s,t as c}from"./ds-stack-5oRwpvZl.js";import{n as l,t as u}from"./ds-date-picker-Cb20wJnc.js";import{n as d,t as f}from"./ds-date-range-picker-D0y0rKj8.js";var p=t((()=>{i(),a()})),m,h=t((()=>{m=[`horizontal`,`vertical`]})),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;t((()=>{g=e(n(),1),u(),p(),f(),h(),s(),_=r(),v={title:`Components/DateRangePicker`,component:d,parameters:{layout:`centered`},decorators:[e=>(0,_.jsx)(`div`,{style:{width:`500px`},children:(0,_.jsx)(e,{})})],argTypes:{orientation:{control:`select`,options:m},className:{table:{disable:!0}},slotProps:{table:{disable:!0}}}},y={},b={args:{withTime:!0}},x={args:{withTime:!0,defaultValue:[new Date(`2024-12-25T14:30:00`),new Date(`2024-12-31T18:00:00`)]}},S={decorators:[e=>(0,_.jsx)(`div`,{style:{width:`320px`},children:(0,_.jsx)(e,{})})],args:{orientation:`vertical`}},C={args:{withTime:!0,min:new Date(`2024-12-01T00:30:00`),max:new Date(`2025-01-31T23:20:00`)}},w={args:{value:[new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)],disabled:!0}},T={args:{value:[new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)],readOnly:!0}},E={args:{defaultValue:[new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)],hideClearAll:!0}},D={args:{slotProps:{startDateFormControl:{label:`From`},endDateFormControl:{label:`To`}}}},O={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,g.useState)([null,null]);return(0,_.jsx)(d,{value:e,onChange:t})}},k={args:{locale:{clearAllLabel:`Effacer tout`},defaultValue:[new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)]}},A={parameters:{docs:{source:{type:`code`}}},decorators:[e=>(0,_.jsx)(c,{direction:`row`,gap:`xs`,alignItems:`flex-end`,children:(0,_.jsx)(e,{})})],render:function(){let[e,t]=(0,g.useState)(`date`),[n,r]=(0,g.useState)(null),[i,a]=(0,g.useState)([null,null]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(o.Root,{value:e,onValueChange:e=>t(e??`date`),size:`default`,children:[(0,_.jsx)(o.Item,{value:`date`,label:`Date`}),(0,_.jsx)(o.Item,{value:`range`,label:`Range`})]}),e===`date`?(0,_.jsx)(l,{value:n,onChange:r}):(0,_.jsx)(d,{value:i,onChange:a})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source},description:{story:"The default range picker is uncontrolled with empty start and end dates. Value shape is\n`[startDate, endDate]` where each element is a `Date` or `null`.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true
  }
}`,...b.parameters?.docs?.source},description:{story:"Enable `withTime` to show a nested time picker inside each date field's calendar popover.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true,
    defaultValue: [new Date('2024-12-25T14:30:00'), new Date('2024-12-31T18:00:00')]
  }
}`,...x.parameters?.docs?.source},description:{story:"Pass `defaultValue` as a `[start, end]` tuple to pre-fill the range in uncontrolled mode.\nThe user can still change or clear either date.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px'
  }}>
                <Story />
            </div>],
  args: {
    orientation: 'vertical'
  }
}`,...S.parameters?.docs?.source},description:{story:`Stacks start and end pickers vertically instead of side by side.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true,
    min: new Date('2024-12-01T00:30:00'),
    max: new Date('2025-01-31T23:20:00')
  }
}`,...C.parameters?.docs?.source},description:{story:"Set `min` and `max` to constrain the selectable date range for both pickers. Dates outside\nthe range cannot be picked from the calendar.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
    disabled: true
  }
}`,...w.parameters?.docs?.source},description:{story:"The disabled state blocks all interaction on both pickers. Use `value` to show a fixed range.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    value: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
    readOnly: true
  }
}`,...T.parameters?.docs?.source},description:{story:`Read-only keeps the range visible but prevents editing. Inputs remain focusable for
copy/accessibility but values cannot be changed.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
    hideClearAll: true
  }
}`,...E.parameters?.docs?.source},description:{story:`Hides the "Clear all" action even when dates are selected.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    slotProps: {
      startDateFormControl: {
        label: 'From'
      },
      endDateFormControl: {
        label: 'To'
      }
    }
  }
}`,...D.parameters?.docs?.source},description:{story:'Override the default "Start date" / "End date" labels via `slotProps` on the wrapping\nform controls.',...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<DateRangeValue>([null, null]);
    return <DsDateRangePicker value={value} onChange={setValue} />;
  }
}`,...O.parameters?.docs?.source},description:{story:"In controlled mode the parent owns `value` and receives updates via `onChange`. Use this\nwhen the selected range drives other UI or must be validated externally.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    locale: {
      clearAllLabel: 'Effacer tout'
    },
    defaultValue: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')]
  }
}`,...k.parameters?.docs?.source},description:{story:"Custom clear-all button label via the `locale` prop.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  decorators: [Story => <DsStack direction="row" gap="xs" alignItems="flex-end">
                <Story />
            </DsStack>],
  render: function Render() {
    const [mode, setMode] = useState('date');
    const [dateValue, setDateValue] = useState<Date | null>(null);
    const [rangeValue, setRangeValue] = useState<DateRangeValue>([null, null]);
    return <>
                <DsSegmentGroup.Root value={mode} onValueChange={v => setMode(v ?? 'date')} size="default">
                    <DsSegmentGroup.Item value="date" label="Date" />
                    <DsSegmentGroup.Item value="range" label="Range" />
                </DsSegmentGroup.Root>

                {mode === 'date' ? <DsDatePicker value={dateValue} onChange={setDateValue} /> : <DsDateRangePicker value={rangeValue} onChange={setRangeValue} />}
            </>;
  }
}`,...A.parameters?.docs?.source},description:{story:`Composition pattern: toggle between a single date picker and a range picker with a segment
group. Not a built-in component feature — implement with local state in the parent.`,...A.parameters?.docs?.description}}},j=[`Default`,`WithTime`,`WithDefaultValue`,`Vertical`,`WithMinMax`,`Disabled`,`ReadOnly`,`HiddenClearAll`,`CustomLabels`,`Controlled`,`Localized`,`DateOrRange`]}))();export{O as Controlled,D as CustomLabels,A as DateOrRange,y as Default,w as Disabled,E as HiddenClearAll,k as Localized,T as ReadOnly,S as Vertical,x as WithDefaultValue,C as WithMinMax,b as WithTime,j as __namedExportsOrder,v as default};