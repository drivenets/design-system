import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-CXNbvdbt.js";import{n as r,r as i,t as a}from"./ds-segment-group-BUee2CjK.js";import{n as o,t as s}from"./ds-stack-Cfw2JvVZ.js";import{n as c,t as l}from"./ds-date-picker-BfwqG_LP.js";import{n as u,t as d}from"./ds-date-range-picker-hJqs96Ib.js";function f(){return(f=e((()=>{r(),i()})))()}var p;function m(){return(m=e((()=>{p=[`horizontal`,`vertical`]})))()}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{h=t(),l(),f(),d(),m(),o(),g=n(),_={title:`Components/DateRangePicker`,component:u,parameters:{layout:`centered`,docs:{source:{type:`dynamic`}}},decorators:[e=>(0,g.jsx)(`div`,{style:{width:`500px`},children:(0,g.jsx)(e,{})})],argTypes:{orientation:{control:`select`,options:p},className:{table:{disable:!0}},slotProps:{table:{disable:!0}}}},v={},y={args:{withTime:!0}},b={args:{withTime:!0,defaultValue:[new Date(`2024-12-25T14:30:00`),new Date(`2024-12-31T18:00:00`)]}},x={decorators:[e=>(0,g.jsx)(`div`,{style:{width:`320px`},children:(0,g.jsx)(e,{})})],args:{orientation:`vertical`}},S={args:{withTime:!0,min:new Date(`2024-12-01T00:30:00`),max:new Date(`2025-01-31T23:20:00`)}},C={args:{value:[new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)],disabled:!0}},w={args:{value:[new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)],readOnly:!0}},T={args:{defaultValue:[new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)],hideClearAll:!0}},E={args:{slotProps:{startDateFormControl:{label:`From`},endDateFormControl:{label:`To`}}}},D={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,h.useState)([null,null]);return(0,g.jsx)(u,{value:e,onChange:t})}},O={args:{locale:{clearAllLabel:`Effacer tout`},defaultValue:[new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)]}},k={parameters:{docs:{source:{type:`code`}}},decorators:[e=>(0,g.jsx)(s,{direction:`row`,gap:`xs`,alignItems:`flex-end`,children:(0,g.jsx)(e,{})})],render:function(){let[e,t]=(0,h.useState)(`date`),[n,r]=(0,h.useState)(null),[i,o]=(0,h.useState)([null,null]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(a.Root,{value:e,onValueChange:e=>t(e??`date`),size:`default`,children:[(0,g.jsx)(a.Item,{value:`date`,label:`Date`}),(0,g.jsx)(a.Item,{value:`range`,label:`Range`})]}),e===`date`?(0,g.jsx)(c,{value:n,onChange:r}):(0,g.jsx)(u,{value:i,onChange:o})]})}},A=[`Default`,`WithTime`,`WithDefaultValue`,`Vertical`,`WithMinMax`,`Disabled`,`ReadOnly`,`HiddenClearAll`,`CustomLabels`,`Controlled`,`Localized`,`DateOrRange`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source},description:{story:"The default range picker is uncontrolled with empty start and end dates. Value shape is\n`[startDate, endDate]` where each element is a `Date` or `null`.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true
  }
}`,...y.parameters?.docs?.source},description:{story:"Enable `withTime` to show a nested time picker inside each date field's calendar popover.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true,
    defaultValue: [new Date('2024-12-25T14:30:00'), new Date('2024-12-31T18:00:00')]
  }
}`,...b.parameters?.docs?.source},description:{story:"Pass `defaultValue` as a `[start, end]` tuple to pre-fill the range in uncontrolled mode.\nThe user can still change or clear either date.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: '320px'
  }}>
                <Story />
            </div>],
  args: {
    orientation: 'vertical'
  }
}`,...x.parameters?.docs?.source},description:{story:`Stacks start and end pickers vertically instead of side by side.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true,
    min: new Date('2024-12-01T00:30:00'),
    max: new Date('2025-01-31T23:20:00')
  }
}`,...S.parameters?.docs?.source},description:{story:"Set `min` and `max` to constrain the selectable date range for both pickers. Dates outside\nthe range cannot be picked from the calendar.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
    disabled: true
  }
}`,...C.parameters?.docs?.source},description:{story:"The disabled state blocks all interaction on both pickers. Use `value` to show a fixed range.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
    readOnly: true
  }
}`,...w.parameters?.docs?.source},description:{story:`Read-only keeps the range visible but prevents editing. Inputs remain focusable for
copy/accessibility but values cannot be changed.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
    hideClearAll: true
  }
}`,...T.parameters?.docs?.source},description:{story:`Hides the "Clear all" action even when dates are selected.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:'Override the default "Start date" / "End date" labels via `slotProps` on the wrapping\nform controls.',...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"In controlled mode the parent owns `value` and receives updates via `onChange`. Use this\nwhen the selected range drives other UI or must be validated externally.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    locale: {
      clearAllLabel: 'Effacer tout'
    },
    defaultValue: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')]
  }
}`,...O.parameters?.docs?.source},description:{story:"Custom clear-all button label via the `locale` prop.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Composition pattern: toggle between a single date picker and a range picker with a segment
group. Not a built-in component feature — implement with local state in the parent.`,...k.parameters?.docs?.description}}}})))()}j();export{D as Controlled,E as CustomLabels,k as DateOrRange,v as Default,C as Disabled,T as HiddenClearAll,O as Localized,w as ReadOnly,x as Vertical,b as WithDefaultValue,S as WithMinMax,y as WithTime,A as __namedExportsOrder,_ as default};