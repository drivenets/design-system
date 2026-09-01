import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-radio-group-K7XkmB_l.js";import{n as o,t as s}from"./ds-typography-BLoO5j9q.js";import{n as c,t as l}from"./ds-stack-GU0hZWeR.js";var u,d,f,p,m,h,g,_;t((()=>{u=e(n(),1),i(),c(),s(),d=r(),f={title:`Components/RadioGroup`,component:a.Root,parameters:{layout:`centered`,docs:{description:{component:"A single-select group of radio options. Compose `Root` with `Item` children; each item submits its `value` when selected."}}}},p={render:()=>(0,d.jsxs)(a.Root,{defaultValue:`option2`,children:[(0,d.jsx)(a.Item,{value:`option1`,label:`Option 1`}),(0,d.jsx)(a.Item,{value:`option2`,label:`Option 2`}),(0,d.jsx)(a.Item,{value:`option3`,label:`Option 3`})]})},m={render:()=>(0,d.jsxs)(a.Root,{defaultValue:`option2`,children:[(0,d.jsx)(a.Item,{value:`option1`,label:`Disabled Option`,labelInfo:`This option is disabled`,disabled:!0}),(0,d.jsx)(a.Item,{value:`option2`,label:`Option 2`,labelInfo:`Available option`}),(0,d.jsx)(a.Item,{value:`option3`,label:`Option 3`})]})},h={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,u.useState)(`option2`);return(0,d.jsxs)(a.Root,{value:e,onValueChange:t,children:[(0,d.jsx)(a.Item,{value:`option1`,label:`Option 1`}),(0,d.jsx)(a.Item,{value:`option2`,label:`Option 2`}),(0,d.jsx)(a.Item,{value:`option3`,label:`Option 3`})]})}},g={render:()=>(0,d.jsxs)(a.Root,{defaultValue:`custom2`,children:[(0,d.jsx)(a.Item,{value:`custom1`,children:(0,d.jsxs)(l,{direction:`column`,children:[(0,d.jsx)(o,{variant:`body-sm-semi-bold`,children:`Custom Layout 1`}),(0,d.jsx)(o,{variant:`body-xs-reg`,color:`secondary`,children:`With custom composed content`})]})}),(0,d.jsx)(a.Item,{value:`custom2`,children:(0,d.jsxs)(l,{direction:`column`,children:[(0,d.jsx)(o,{variant:`body-sm-semi-bold`,children:`Custom Layout 2`}),(0,d.jsx)(o,{variant:`body-xs-reg`,color:`secondary`,children:`Complete control over rendering`})]})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <DsRadioGroup.Root defaultValue="option2">
            <DsRadioGroup.Item value="option1" label="Option 1" />
            <DsRadioGroup.Item value="option2" label="Option 2" />
            <DsRadioGroup.Item value="option3" label="Option 3" />
        </DsRadioGroup.Root>
}`,...p.parameters?.docs?.source},description:{story:"A basic radio group with labels. Seed the initial choice with `defaultValue`\nfor uncontrolled usage where the group manages its own state.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <DsRadioGroup.Root defaultValue="option2">
            <DsRadioGroup.Item value="option1" label="Disabled Option" labelInfo="This option is disabled" disabled />
            <DsRadioGroup.Item value="option2" label="Option 2" labelInfo="Available option" />
            <DsRadioGroup.Item value="option3" label="Option 3" />
        </DsRadioGroup.Root>
}`,...m.parameters?.docs?.source},description:{story:"Disable individual items with the `disabled` prop to prevent selecting an\nunavailable option. Use `labelInfo` for supporting text under a label.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"Controlled radio group where the parent owns the value via\n`value`/`onValueChange`. Use when other UI must react to the selection.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"For richer options, pass custom `children` to an `Item` instead of `label`.\nCompose layout with `DsStack` and `DsTypography` for full control over each row.",...g.parameters?.docs?.description}}},_=[`Default`,`WithDisabledItems`,`Controlled`,`CustomComposition`]}))();export{h as Controlled,g as CustomComposition,p as Default,m as WithDisabledItems,_ as __namedExportsOrder,f as default};