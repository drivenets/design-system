import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CSbDELzH.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{i,n as a,r as o,t as s}from"./ds-checkbox.types-D4n5gpGs.js";var c,l,u,d,f,p,m,h,g,_,v,y;t((()=>{c=e(n(),1),i(),a(),l=r(),u={title:`Design System/Checkbox`,component:o,parameters:{layout:`centered`},argTypes:{variant:{options:s,control:`radio`},label:{control:`text`,description:`Label for the checkbox`},labelInfo:{control:`text`,description:`Additional label info for the checkbox`},className:{control:`text`,description:`Additional CSS class names`}}},d=`Text for label`,f=`Text for info`,p={args:{label:d,labelInfo:f,className:`custom-checkbox`}},m={render:function(){let[e,t]=(0,c.useState)(`indeterminate`);return(0,l.jsx)(o,{label:d,labelInfo:f,checked:e,onCheckedChange:e=>t(e)})}},h={args:{label:d,labelInfo:f,disabled:!0}},g={args:{variant:`warning`}},_={args:{variant:`warning`,label:d,labelInfo:f}},v={render:function(){let[e,t]=(0,c.useState)(`indeterminate`);return(0,l.jsx)(o,{variant:`warning`,label:d,labelInfo:f,checked:e,onCheckedChange:e=>t(e)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    className: 'custom-checkbox'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');
    return <DsCheckbox label={label} labelInfo={labelInfo} checked={checked} onCheckedChange={newState => setChecked(newState)} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    label,
    labelInfo
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');
    return <DsCheckbox variant="warning" label={label} labelInfo={labelInfo} checked={checked} onCheckedChange={newState => setChecked(newState)} />;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Indeterminate`,`Disabled`,`Warning`,`WarningWithLabel`,`WarningIndeterminate`]}))();export{p as Default,h as Disabled,m as Indeterminate,g as Warning,v as WarningIndeterminate,_ as WarningWithLabel,y as __namedExportsOrder,u as default};