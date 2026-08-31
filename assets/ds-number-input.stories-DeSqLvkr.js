import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-button-v3-DKBJbP0e.js";import{n as o,t as s}from"./ds-stack-5oRwpvZl.js";import{n as c,t as l}from"./ds-number-input-Q7uuejXs.js";var u,d,f,p,m,h,g,_,v;t((()=>{u=e(n(),1),c(),i(),o(),d=r(),f={title:`Components/NumberInput`,component:l,parameters:{layout:`centered`,docs:{description:{component:`A numeric input with increment/decrement steppers and optional min/max clamping. Use it for quantities, ports, or any value constrained to a numeric range.`}}},decorators:[e=>(0,d.jsx)(s,{width:`12rem`,children:(0,d.jsx)(e,{})})],argTypes:{size:{control:`select`,options:[`default`,`small`],description:`The size of the input field`},placeholder:{control:`text`,description:`Placeholder text for the input`},defaultValue:{control:`number`,description:`Default value of the number input (uncontrolled)`},min:{control:`number`,description:`Minimum value allowed`},max:{control:`number`,description:`Maximum value allowed`},step:{control:`number`,description:`Step value for increment/decrement`},disabled:{control:`boolean`,description:`Whether the input is disabled`},onChange:{table:{disable:!0}},onValueChange:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},p={args:{placeholder:`Enter number`,defaultValue:0}},m={args:{placeholder:`Enter number`,defaultValue:50,min:0,max:100,step:1}},h={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,u.useState)(42);return(0,d.jsxs)(s,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,children:[(0,d.jsx)(l,{placeholder:`Enter number`,min:0,max:100,step:1,value:e,onValueChange:t}),(0,d.jsxs)(s,{gap:`var(--2xs)`,children:[(0,d.jsx)(a,{variant:`secondary`,size:`small`,onClick:()=>t(0),children:`Reset to 0`}),(0,d.jsx)(a,{variant:`secondary`,size:`small`,onClick:()=>t(100),children:`Set to 100`})]})]})}},g={args:{size:`small`,placeholder:`Small number input`,defaultValue:10}},_={args:{placeholder:`Disabled input`,defaultValue:25,disabled:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter number',
    defaultValue: 0
  }
}`,...p.parameters?.docs?.source},description:{story:"The default numeric input with steppers. Use `defaultValue` for uncontrolled\nusage when the parent does not need to track the value.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter number',
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1
  }
}`,...m.parameters?.docs?.source},description:{story:"Constrain input to a range with `min`, `max`, and `step`. Values are clamped\non blur and the steppers disable at the range bounds.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Controlled input where the parent owns the value via `value` and\n`onValueChange`. Use when other UI must react to the number.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    placeholder: 'Small number input',
    defaultValue: 10
  }
}`,...g.parameters?.docs?.source},description:{story:`Compact size for dense forms and toolbars.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    defaultValue: 25,
    disabled: true
  }
}`,..._.parameters?.docs?.source},description:{story:`Disabled input that cannot be focused, edited, or stepped.`,..._.parameters?.docs?.description}}},v=[`Default`,`WithMinMax`,`Controlled`,`Small`,`Disabled`]}))();export{h as Controlled,p as Default,_ as Disabled,g as Small,m as WithMinMax,v as __namedExportsOrder,f as default};