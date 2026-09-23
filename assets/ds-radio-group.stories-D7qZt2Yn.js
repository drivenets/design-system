import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-CIo2UmkR.js";import{n as r,t as i}from"./ds-radio-group-CZal5c72.js";import{n as a,t as o}from"./ds-typography-HfolNiFP.js";import{n as s,t as c}from"./ds-stack-DBH-wF-7.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{l=t(),r(),s(),o(),u=n(),d={title:`Components/RadioGroup`,component:i.Root,parameters:{layout:`centered`,docs:{description:{component:"A single-select group of radio options. Compose `Root` with `Item` children; each item submits its `value` when selected."}}}},f={render:()=>(0,u.jsxs)(i.Root,{defaultValue:`option2`,children:[(0,u.jsx)(i.Item,{value:`option1`,label:`Option 1`}),(0,u.jsx)(i.Item,{value:`option2`,label:`Option 2`}),(0,u.jsx)(i.Item,{value:`option3`,label:`Option 3`})]})},p={render:()=>(0,u.jsxs)(i.Root,{defaultValue:`option2`,children:[(0,u.jsx)(i.Item,{value:`option1`,label:`Disabled Option`,labelInfo:`This option is disabled`,disabled:!0}),(0,u.jsx)(i.Item,{value:`option2`,label:`Option 2`,labelInfo:`Available option`}),(0,u.jsx)(i.Item,{value:`option3`,label:`Option 3`})]})},m={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,l.useState)(`option2`);return(0,u.jsxs)(i.Root,{value:e,onValueChange:t,children:[(0,u.jsx)(i.Item,{value:`option1`,label:`Option 1`}),(0,u.jsx)(i.Item,{value:`option2`,label:`Option 2`}),(0,u.jsx)(i.Item,{value:`option3`,label:`Option 3`})]})}},h={render:()=>(0,u.jsxs)(i.Root,{defaultValue:`custom2`,children:[(0,u.jsx)(i.Item,{value:`custom1`,children:(0,u.jsxs)(c,{direction:`column`,children:[(0,u.jsx)(a,{variant:`body-sm-semi-bold`,children:`Custom Layout 1`}),(0,u.jsx)(a,{variant:`body-xs-reg`,color:`secondary`,children:`With custom composed content`})]})}),(0,u.jsx)(i.Item,{value:`custom2`,children:(0,u.jsxs)(c,{direction:`column`,children:[(0,u.jsx)(a,{variant:`body-sm-semi-bold`,children:`Custom Layout 2`}),(0,u.jsx)(a,{variant:`body-xs-reg`,color:`secondary`,children:`Complete control over rendering`})]})})]})},g=[`Default`,`WithDisabledItems`,`Controlled`,`CustomComposition`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <DsRadioGroup.Root defaultValue="option2">
            <DsRadioGroup.Item value="option1" label="Option 1" />
            <DsRadioGroup.Item value="option2" label="Option 2" />
            <DsRadioGroup.Item value="option3" label="Option 3" />
        </DsRadioGroup.Root>
}`,...f.parameters?.docs?.source},description:{story:"A basic radio group with labels. Seed the initial choice with `defaultValue`\nfor uncontrolled usage where the group manages its own state.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <DsRadioGroup.Root defaultValue="option2">
            <DsRadioGroup.Item value="option1" label="Disabled Option" labelInfo="This option is disabled" disabled />
            <DsRadioGroup.Item value="option2" label="Option 2" labelInfo="Available option" />
            <DsRadioGroup.Item value="option3" label="Option 3" />
        </DsRadioGroup.Root>
}`,...p.parameters?.docs?.source},description:{story:"Disable individual items with the `disabled` prop to prevent selecting an\nunavailable option. Use `labelInfo` for supporting text under a label.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | null>('option2');
    return <DsRadioGroup.Root value={value} onValueChange={setValue}>
                <DsRadioGroup.Item value="option1" label="Option 1" />
                <DsRadioGroup.Item value="option2" label="Option 2" />
                <DsRadioGroup.Item value="option3" label="Option 3" />
            </DsRadioGroup.Root>;
  }
}`,...m.parameters?.docs?.source},description:{story:"Controlled radio group where the parent owns the value via\n`value`/`onValueChange`. Use when other UI must react to the selection.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <DsRadioGroup.Root defaultValue="custom2">
            <DsRadioGroup.Item value="custom1">
                <DsStack direction="column">
                    <DsTypography variant="body-sm-semi-bold">Custom Layout 1</DsTypography>
                    <DsTypography variant="body-xs-reg" color="secondary">
                        With custom composed content
                    </DsTypography>
                </DsStack>
            </DsRadioGroup.Item>
            <DsRadioGroup.Item value="custom2">
                <DsStack direction="column">
                    <DsTypography variant="body-sm-semi-bold">Custom Layout 2</DsTypography>
                    <DsTypography variant="body-xs-reg" color="secondary">
                        Complete control over rendering
                    </DsTypography>
                </DsStack>
            </DsRadioGroup.Item>
        </DsRadioGroup.Root>
}`,...h.parameters?.docs?.source},description:{story:"For richer options, pass custom `children` to an `Item` instead of `label`.\nCompose layout with `DsStack` and `DsTypography` for full control over each row.",...h.parameters?.docs?.description}}}})))()}_();export{m as Controlled,h as CustomComposition,f as Default,p as WithDisabledItems,g as __namedExportsOrder,d as default};