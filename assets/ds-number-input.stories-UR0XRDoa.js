import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-B68LYriB.js";import{n as r,t as i}from"./ds-number-input-DCehU57n.js";import{n as a,t as o}from"./ds-button-v3-r5RBr4Hk.js";import{n as s,t as c}from"./ds-stack-C03o04TL.js";var l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{l=t(),r(),a(),s(),u=n(),d={title:`Components/NumberInput`,component:i,parameters:{layout:`centered`,docs:{description:{component:`A numeric input with increment/decrement steppers and optional min/max clamping. Use it for quantities, ports, or any value constrained to a numeric range.`}}},decorators:[e=>(0,u.jsx)(c,{width:`12rem`,children:(0,u.jsx)(e,{})})],argTypes:{size:{control:`select`,options:[`default`,`small`],description:`The size of the input field`},placeholder:{control:`text`,description:`Placeholder text for the input`},defaultValue:{control:`number`,description:`Default value of the number input (uncontrolled)`},min:{control:`number`,description:`Minimum value allowed`},max:{control:`number`,description:`Maximum value allowed`},step:{control:`number`,description:`Step value for increment/decrement`},disabled:{control:`boolean`,description:`Whether the input is disabled`},onChange:{table:{disable:!0}},onValueChange:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},f={args:{placeholder:`Enter number`,defaultValue:0}},p={args:{placeholder:`Enter number`,defaultValue:50,min:0,max:100,step:1}},m={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,l.useState)(42);return(0,u.jsxs)(c,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,children:[(0,u.jsx)(i,{placeholder:`Enter number`,min:0,max:100,step:1,value:e,onValueChange:t}),(0,u.jsxs)(c,{gap:`var(--2xs)`,children:[(0,u.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>t(0),children:`Reset to 0`}),(0,u.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>t(100),children:`Set to 100`})]})]})}},h={args:{size:`small`,placeholder:`Small number input`,defaultValue:10}},g={args:{placeholder:`Disabled input`,defaultValue:25,disabled:!0}},_=[`Default`,`WithMinMax`,`Controlled`,`Small`,`Disabled`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter number',
    defaultValue: 0
  }
}`,...f.parameters?.docs?.source},description:{story:"The default numeric input with steppers. Use `defaultValue` for uncontrolled\nusage when the parent does not need to track the value.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter number',
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1
  }
}`,...p.parameters?.docs?.source},description:{story:"Constrain input to a range with `min`, `max`, and `step`. Values are clamped\non blur and the steppers disable at the range bounds.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState(42);
    return <DsStack direction="column" gap="var(--sm)" alignItems="center">
                <DsNumberInput placeholder="Enter number" min={0} max={100} step={1} value={value} onValueChange={setValue} />
                <DsStack gap="var(--2xs)">
                    <DsButtonV3 variant="secondary" size="small" onClick={() => setValue(0)}>
                        Reset to 0
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small" onClick={() => setValue(100)}>
                        Set to 100
                    </DsButtonV3>
                </DsStack>
            </DsStack>;
  }
}`,...m.parameters?.docs?.source},description:{story:"Controlled input where the parent owns the value via `value` and\n`onValueChange`. Use when other UI must react to the number.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    placeholder: 'Small number input',
    defaultValue: 10
  }
}`,...h.parameters?.docs?.source},description:{story:`Compact size for dense forms and toolbars.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    defaultValue: 25,
    disabled: true
  }
}`,...g.parameters?.docs?.source},description:{story:`Disabled input that cannot be focused, edited, or stepped.`,...g.parameters?.docs?.description}}}})))()}v();export{m as Controlled,f as Default,g as Disabled,h as Small,p as WithMinMax,_ as __namedExportsOrder,d as default};