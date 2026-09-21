import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-B-V3ECTD.js";import{n as r,t as i}from"./ds-slider-BX1DSBt0.js";var a,o;function s(){return(s=e((()=>{a=[`value`,`range`],o=[`small`,`medium`,`large`]})))()}var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{c=t(),r(),s(),l=n(),u={title:`Components/Slider`,component:i,parameters:{layout:`padded`},argTypes:{type:{control:`inline-radio`,options:a,description:`Single value or a [min, max] interval`},size:{control:`inline-radio`,options:o,description:`Drives thumb and track sizing together`},label:{control:`text`},min:{control:`number`},max:{control:`number`},step:{control:`number`},disabled:{control:`boolean`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1},onValueChange:{table:{disable:!0},control:!1},onValueChangeEnd:{table:{disable:!0},control:!1}}},d={args:{label:`Input label`,type:`value`,defaultValue:36,min:0,max:100}},f={args:{label:`Input label`,type:`range`,defaultValue:[36,60],min:0,max:100,thumbLabels:[`Minimum`,`Maximum`]}},p={args:{label:`Input label`,size:`small`,defaultValue:36}},m={args:{label:`Input label`,size:`large`,defaultValue:36}},h={args:{label:`Input label`,defaultValue:36,disabled:!0}},g={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,c.useState)(40);return(0,l.jsx)(i,{label:`Volume`,value:e,onValueChange:t,formatValue:e=>`${String(e)}%`})}},_=[`Default`,`Range`,`Small`,`Large`,`Disabled`,`Controlled`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    type: 'value',
    defaultValue: 36,
    min: 0,
    max: 100
  }
}`,...d.parameters?.docs?.source},description:{story:`A single-thumb slider selects one number from a bounded range. The output above the
track reflects the current value live while dragging.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    type: 'range',
    defaultValue: [36, 60],
    min: 0,
    max: 100,
    thumbLabels: ['Minimum', 'Maximum']
  }
}`,...f.parameters?.docs?.source},description:{story:"A range slider uses two thumbs to select a `[min, max]` interval; the thumbs cannot\ncross. Provide `thumbLabels` so each thumb has its own accessible name.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    size: 'small',
    defaultValue: 36
  }
}`,...p.parameters?.docs?.source},description:{story:"Size drives thumb and track thickness together — use `small` in dense layouts.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    size: 'large',
    defaultValue: 36
  }
}`,...m.parameters?.docs?.source},description:{story:"The `large` size gives a bigger hit target and a thicker track for prominent controls.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    defaultValue: 36,
    disabled: true
  }
}`,...h.parameters?.docs?.source},description:{story:`Disabled applies to the whole control, including the label row and numeric output.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Drive the value from external state via `value` + `onValueChange`. The output can be\nformatted with `formatValue` (here as a percentage).",...g.parameters?.docs?.description}}}})))()}v();export{g as Controlled,d as Default,h as Disabled,m as Large,f as Range,p as Small,_ as __namedExportsOrder,u as default};