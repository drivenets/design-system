import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-slider-DI5Uxg4l.js";var o,s,c=t((()=>{o=[`value`,`range`],s=[`small`,`medium`,`large`]})),l,u,d,f,p,m,h,g,_,v;t((()=>{l=e(n(),1),i(),c(),u=r(),d={title:`Components/Slider`,component:a,parameters:{layout:`padded`},argTypes:{type:{control:`inline-radio`,options:o,description:`Single value or a [min, max] interval`},size:{control:`inline-radio`,options:s,description:`Drives thumb and track sizing together`},label:{control:`text`},min:{control:`number`},max:{control:`number`},step:{control:`number`},disabled:{control:`boolean`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1},onValueChange:{table:{disable:!0},control:!1},onValueChangeEnd:{table:{disable:!0},control:!1}}},f={args:{label:`Input label`,type:`value`,defaultValue:36,min:0,max:100}},p={args:{label:`Input label`,type:`range`,defaultValue:[36,60],min:0,max:100,thumbLabels:[`Minimum`,`Maximum`]}},m={args:{label:`Input label`,size:`small`,defaultValue:36}},h={args:{label:`Input label`,size:`large`,defaultValue:36}},g={args:{label:`Input label`,defaultValue:36,disabled:!0}},_={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,l.useState)(40);return(0,u.jsx)(a,{label:`Volume`,value:e,onValueChange:t,formatValue:e=>`${String(e)}%`})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    type: 'value',
    defaultValue: 36,
    min: 0,
    max: 100
  }
}`,...f.parameters?.docs?.source},description:{story:`A single-thumb slider selects one number from a bounded range. The output above the
track reflects the current value live while dragging.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    type: 'range',
    defaultValue: [36, 60],
    min: 0,
    max: 100,
    thumbLabels: ['Minimum', 'Maximum']
  }
}`,...p.parameters?.docs?.source},description:{story:"A range slider uses two thumbs to select a `[min, max]` interval; the thumbs cannot\ncross. Provide `thumbLabels` so each thumb has its own accessible name.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    size: 'small',
    defaultValue: 36
  }
}`,...m.parameters?.docs?.source},description:{story:"Size drives thumb and track thickness together — use `small` in dense layouts.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    size: 'large',
    defaultValue: 36
  }
}`,...h.parameters?.docs?.source},description:{story:"The `large` size gives a bigger hit target and a thicker track for prominent controls.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    defaultValue: 36,
    disabled: true
  }
}`,...g.parameters?.docs?.source},description:{story:`Disabled applies to the whole control, including the label row and numeric output.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<DsSliderValue>(40);
    return <DsSlider label="Volume" value={value} onValueChange={setValue} formatValue={current => \`\${String(current)}%\`} />;
  }
}`,..._.parameters?.docs?.source},description:{story:"Drive the value from external state via `value` + `onValueChange`. The output can be\nformatted with `formatValue` (here as a percentage).",..._.parameters?.docs?.description}}},v=[`Default`,`Range`,`Small`,`Large`,`Disabled`,`Controlled`]}))();export{_ as Controlled,f as Default,g as Disabled,h as Large,p as Range,m as Small,v as __namedExportsOrder,d as default};