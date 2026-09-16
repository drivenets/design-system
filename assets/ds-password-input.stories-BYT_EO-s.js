import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-B7s6RIoB.js";import{n as r,t as i}from"./ds-password-input-CnecpifM.js";import{n as a,t as o}from"./ds-button-v3-BQcrZh_I.js";import{n as s,t as c}from"./ds-stack-DbPEq4gn.js";var l,u,d,f,p,m,h;function g(){return(g=e((()=>{l=t(),r(),a(),s(),u=n(),d={title:`Components/PasswordInput`,component:i,parameters:{layout:`centered`,docs:{description:{component:`A password field that masks input and provides a built-in button to toggle visibility between hidden and plain text.`}}},decorators:[e=>(0,u.jsx)(c,{width:`16rem`,children:(0,u.jsx)(e,{})})],argTypes:{size:{control:`select`,options:[`default`,`small`],description:`The size of the input field`},placeholder:{control:`text`,description:`Placeholder text for the input`},disabled:{control:`boolean`,description:`Whether the input is disabled`},onChange:{table:{disable:!0}},onValueChange:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},f={args:{placeholder:`Enter password`}},p={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,l.useState)(`initial-password`);return(0,u.jsxs)(c,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,children:[(0,u.jsx)(i,{placeholder:`Enter password`,value:e,onValueChange:t}),(0,u.jsxs)(c,{gap:`var(--2xs)`,children:[(0,u.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>t(`new-password`),children:`Set new password`}),(0,u.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>t(``),children:`Clear password`})]})]})}},m={args:{placeholder:`Enter password`,value:`secret-password`,disabled:!0}},h=[`Default`,`Controlled`,`Disabled`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter password'
  }
}`,...f.parameters?.docs?.source},description:{story:`The default password field. Input is masked and the trailing eye button
toggles visibility so users can verify what they typed.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:"Controlled password field where the parent owns the value via `value` and\n`onValueChange`. Use for sign-up and settings forms that validate the value.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter password',
    value: 'secret-password',
    disabled: true
  }
}`,...m.parameters?.docs?.source},description:{story:`Disabled password field that cannot be focused, edited, or toggled.`,...m.parameters?.docs?.description}}}})))()}g();export{p as Controlled,f as Default,m as Disabled,h as __namedExportsOrder,d as default};