import{j as p}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-CvzmvaDp.js";import{D as m}from"./ds-checkbox-0Ae-crWQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MI1g3Cpt.js";import"./index-DgDHOUSq.js";import"./index-CKYtPUNL.js";import"./index-DoUlMNEi.js";import"./index-BgyAiQwT.js";import"./index-nXYkHYRy.js";import"./ds-icon-C6DM5d0h.js";const h=["default","warning"],R={title:"Design System/Checkbox",component:m,parameters:{layout:"centered"},argTypes:{variant:{options:h,control:"radio"},label:{control:"text",description:"Label for the checkbox"},labelInfo:{control:"text",description:"Additional label info for the checkbox"},className:{control:"text",description:"Additional CSS class names"}}},e="Text for label",r="Text for info",a={args:{label:e,labelInfo:r,className:"custom-checkbox"}},n={render:function(){const[i,d]=u.useState("indeterminate");return p.jsx(m,{label:e,labelInfo:r,checked:i,onCheckedChange:l=>d(l)})}},t={args:{label:e,labelInfo:r,disabled:!0}},o={args:{variant:"warning"}},s={args:{variant:"warning",label:e,labelInfo:r}},c={render:function(){const[i,d]=u.useState("indeterminate");return p.jsx(m,{variant:"warning",label:e,labelInfo:r,checked:i,onCheckedChange:l=>d(l)})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    className: 'custom-checkbox'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');
    return <DsCheckbox label={label} labelInfo={labelInfo} checked={checked} onCheckedChange={newState => setChecked(newState)} />;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    label,
    labelInfo
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');
    return <DsCheckbox variant="warning" label={label} labelInfo={labelInfo} checked={checked} onCheckedChange={newState => setChecked(newState)} />;
  }
}`,...c.parameters?.docs?.source}}};const j=["Default","Indeterminate","Disabled","Warning","WarningWithLabel","WarningIndeterminate"];export{a as Default,t as Disabled,n as Indeterminate,o as Warning,c as WarningIndeterminate,s as WarningWithLabel,j as __namedExportsOrder,R as default};
