import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-DhmfSyCd.js";import{t as r}from"./ds-segment-group-DEiSQd4h.js";import{n as i,t as a}from"./ds-stack-Bs826QDs.js";import{n as o,t as s}from"./ds-date-picker-CvLeQ1xC.js";import{t as c}from"./ds-segment-group-DPTvU4x4.js";import{n as l,t as u}from"./ds-date-range-picker-BThILcSq.js";var d;function f(){return(f=e((()=>{d=[`horizontal`,`vertical`]})))()}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{p=t(),s(),c(),u(),f(),i(),m=n(),h={title:`Components/DateRangePicker`,component:l,parameters:{layout:`centered`,docs:{source:{type:`dynamic`}}},decorators:[e=>(0,m.jsx)(`div`,{style:{width:`500px`},children:(0,m.jsx)(e,{})})],argTypes:{orientation:{control:`select`,options:d},className:{table:{disable:!0}},slotProps:{table:{disable:!0}}}},g={},_={args:{withTime:!0}},v={args:{withTime:!0,defaultValue:[new Date(`2024-12-25T14:30:00`),new Date(`2024-12-31T18:00:00`)]}},y={decorators:[e=>(0,m.jsx)(`div`,{style:{width:`320px`},children:(0,m.jsx)(e,{})})],args:{orientation:`vertical`}},b={args:{withTime:!0,min:new Date(`2024-12-01T00:30:00`),max:new Date(`2025-01-31T23:20:00`)}},x={args:{value:[new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)],disabled:!0}},S={args:{value:[new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)],readOnly:!0}},C={args:{defaultValue:[new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)],hideClearAll:!0}},w={args:{slotProps:{startDateFormControl:{label:`From`},endDateFormControl:{label:`To`}}}},T={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,p.useState)([null,null]);return(0,m.jsx)(l,{value:e,onChange:t})}},E={args:{locale:{clearAllLabel:`Effacer tout`},defaultValue:[new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)]}},D={parameters:{docs:{source:{type:`code`}}},decorators:[e=>(0,m.jsx)(a,{direction:`row`,gap:`xs`,alignItems:`flex-end`,children:(0,m.jsx)(e,{})})],render:function(){let[e,t]=(0,p.useState)(`date`),[n,i]=(0,p.useState)(null),[a,s]=(0,p.useState)([null,null]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(r.Root,{value:e,onValueChange:e=>t(e??`date`),size:`default`,children:[(0,m.jsx)(r.Item,{value:`date`,label:`Date`}),(0,m.jsx)(r.Item,{value:`range`,label:`Range`})]}),e===`date`?(0,m.jsx)(o,{value:n,onChange:i}):(0,m.jsx)(l,{value:a,onChange:s})]})}},O=[`Default`,`WithTime`,`WithDefaultValue`,`Vertical`,`WithMinMax`,`Disabled`,`ReadOnly`,`HiddenClearAll`,`CustomLabels`,`Controlled`,`Localized`,`DateOrRange`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source},description:{story:"The default range picker is uncontrolled with empty start and end dates. Value shape is\n`[startDate, endDate]` where each element is a `Date` or `null`.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true
  }
}`,..._.parameters?.docs?.source},description:{story:"Enable `withTime` to show a nested time picker inside each date field's calendar popover.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true,
    defaultValue: [new Date('2024-12-25T14:30:00'), new Date('2024-12-31T18:00:00')]
  }
}`,...v.parameters?.docs?.source},description:{story:"Pass `defaultValue` as a `[start, end]` tuple to pre-fill the range in uncontrolled mode.\nThe user can still change or clear either date.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px'
  }}>
                <Story />
            </div>],
  args: {
    orientation: 'vertical'
  }
}`,...y.parameters?.docs?.source},description:{story:`Stacks start and end pickers vertically instead of side by side.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true,
    min: new Date('2024-12-01T00:30:00'),
    max: new Date('2025-01-31T23:20:00')
  }
}`,...b.parameters?.docs?.source},description:{story:"Set `min` and `max` to constrain the selectable date range for both pickers. Dates outside\nthe range cannot be picked from the calendar.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
    disabled: true
  }
}`,...x.parameters?.docs?.source},description:{story:"The disabled state blocks all interaction on both pickers. Use `value` to show a fixed range.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
    readOnly: true
  }
}`,...S.parameters?.docs?.source},description:{story:`Read-only keeps the range visible but prevents editing. Inputs remain focusable for
copy/accessibility but values cannot be changed.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
    hideClearAll: true
  }
}`,...C.parameters?.docs?.source},description:{story:`Hides the "Clear all" action even when dates are selected.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:'Override the default "Start date" / "End date" labels via `slotProps` on the wrapping\nform controls.',...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"In controlled mode the parent owns `value` and receives updates via `onChange`. Use this\nwhen the selected range drives other UI or must be validated externally.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    locale: {
      clearAllLabel: 'Effacer tout'
    },
    defaultValue: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')]
  }
}`,...E.parameters?.docs?.source},description:{story:"Custom clear-all button label via the `locale` prop.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Composition pattern: toggle between a single date picker and a range picker with a segment
group. Not a built-in component feature — implement with local state in the parent.`,...D.parameters?.docs?.description}}}})))()}k();export{T as Controlled,w as CustomLabels,D as DateOrRange,g as Default,x as Disabled,C as HiddenClearAll,E as Localized,S as ReadOnly,y as Vertical,v as WithDefaultValue,b as WithMinMax,_ as WithTime,O as __namedExportsOrder,h as default};