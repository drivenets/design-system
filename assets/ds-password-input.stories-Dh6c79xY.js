import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-button-v3-BnV8s8Ko.js";import{n as o,t as s}from"./ds-stack-GU0hZWeR.js";import{n as c,t as l}from"./ds-password-input-BewiMbeS.js";var u,d,f,p,m,h,g;t((()=>{u=e(n(),1),c(),i(),o(),d=r(),f={title:`Components/PasswordInput`,component:l,parameters:{layout:`centered`,docs:{description:{component:`A password field that masks input and provides a built-in button to toggle visibility between hidden and plain text.`}}},decorators:[e=>(0,d.jsx)(s,{width:`16rem`,children:(0,d.jsx)(e,{})})],argTypes:{size:{control:`select`,options:[`default`,`small`],description:`The size of the input field`},placeholder:{control:`text`,description:`Placeholder text for the input`},disabled:{control:`boolean`,description:`Whether the input is disabled`},onChange:{table:{disable:!0}},onValueChange:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},p={args:{placeholder:`Enter password`}},m={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,u.useState)(`initial-password`);return(0,d.jsxs)(s,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,children:[(0,d.jsx)(l,{placeholder:`Enter password`,value:e,onValueChange:t}),(0,d.jsxs)(s,{gap:`var(--2xs)`,children:[(0,d.jsx)(a,{variant:`secondary`,size:`small`,onClick:()=>t(`new-password`),children:`Set new password`}),(0,d.jsx)(a,{variant:`secondary`,size:`small`,onClick:()=>t(``),children:`Clear password`})]})]})}},h={args:{placeholder:`Enter password`,value:`secret-password`,disabled:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter password'
  }
}`,...p.parameters?.docs?.source},description:{story:`The default password field. Input is masked and the trailing eye button
toggles visibility so users can verify what they typed.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('initial-password');
    return <DsStack direction="column" gap="var(--sm)" alignItems="center">
                <DsPasswordInput placeholder="Enter password" value={value} onValueChange={setValue} />
                <DsStack gap="var(--2xs)">
                    <DsButtonV3 variant="secondary" size="small" onClick={() => setValue('new-password')}>
                        Set new password
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small" onClick={() => setValue('')}>
                        Clear password
                    </DsButtonV3>
                </DsStack>
            </DsStack>;
  }
}`,...m.parameters?.docs?.source},description:{story:"Controlled password field where the parent owns the value via `value` and\n`onValueChange`. Use for sign-up and settings forms that validate the value.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter password',
    value: 'secret-password',
    disabled: true
  }
}`,...h.parameters?.docs?.source},description:{story:`Disabled password field that cannot be focused, edited, or toggled.`,...h.parameters?.docs?.description}}},g=[`Default`,`Controlled`,`Disabled`]}))();export{m as Controlled,p as Default,h as Disabled,g as __namedExportsOrder,f as default};