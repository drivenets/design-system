import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BUxaTXVU.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./ds-radio-group-JCUXXAah.js";var o,s,c,l,u,d=e((()=>{o=`_customItem_iyooj_1`,s=`_customLabel_iyooj_8`,c=`_customLabelTitle_iyooj_12`,l=`_customLabelDescription_iyooj_16`,u={customItem:o,customLabel:s,customLabelTitle:c,customLabelDescription:l}})),f,p,m,h,g,_,v;e((()=>{f=t(n(),1),i(),d(),p=r(),m={title:`Components/RadioGroup`,component:a.Root,parameters:{layout:`centered`}},h={parameters:{docs:{description:{story:`A basic radio group with labels. Uses the compound component pattern where users compose Root and Item components.`}}},render:function(){let[e,t]=(0,f.useState)(`option2`);return(0,p.jsxs)(a.Root,{value:e,onValueChange:t,children:[(0,p.jsx)(a.Item,{value:`option1`,label:`Option 1`}),(0,p.jsx)(a.Item,{value:`option2`,label:`Option 2`}),(0,p.jsx)(a.Item,{value:`option3`,label:`Option 3`})]})}},g={parameters:{docs:{description:{story:`Radio items can be disabled to prevent user interaction.`}}},render:function(){let[e,t]=(0,f.useState)(`option2`);return(0,p.jsxs)(a.Root,{value:e,onValueChange:t,children:[(0,p.jsx)(a.Item,{value:`option1`,label:`Disabled Option`,labelInfo:`This option is disabled`,disabled:!0}),(0,p.jsx)(a.Item,{value:`option2`,label:`Option 2`,labelInfo:`Available option`}),(0,p.jsx)(a.Item,{value:`option3`,label:`Option 3`})]})}},_={parameters:{docs:{description:{story:`For maximum flexibility, Item components can accept children for custom layouts. Useful for complex layouts or integration with other components.`}}},render:function(){let[e,t]=(0,f.useState)(`custom2`);return(0,p.jsxs)(a.Root,{value:e,onValueChange:t,children:[(0,p.jsx)(a.Item,{value:`custom1`,className:u.customItem,children:(0,p.jsxs)(`div`,{className:u.customLabel,children:[(0,p.jsx)(`div`,{className:u.customLabelTitle,children:`Custom Layout 1`}),(0,p.jsx)(`div`,{className:u.customLabelDescription,children:`With custom HTML structure`})]})}),(0,p.jsx)(a.Item,{value:`custom2`,className:u.customItem,children:(0,p.jsxs)(`div`,{className:u.customLabel,children:[(0,p.jsx)(`div`,{className:u.customLabelTitle,children:`Custom Layout 2`}),(0,p.jsx)(`div`,{className:u.customLabelDescription,children:`Complete control over rendering`})]})})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A basic radio group with labels. Uses the compound component pattern where users compose Root and Item components.'
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Radio items can be disabled to prevent user interaction.'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | null>('option2');
    return <DsRadioGroup.Root value={value} onValueChange={setValue}>
                <DsRadioGroup.Item value="option1" label="Disabled Option" labelInfo="This option is disabled" disabled />
                <DsRadioGroup.Item value="option2" label="Option 2" labelInfo="Available option" />
                <DsRadioGroup.Item value="option3" label="Option 3" />
            </DsRadioGroup.Root>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'For maximum flexibility, Item components can accept children for custom layouts. Useful for complex layouts or integration with other components.'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | null>('custom2');
    return <DsRadioGroup.Root value={value} onValueChange={setValue}>
                <DsRadioGroup.Item value="custom1" className={styles.customItem}>
                    <div className={styles.customLabel}>
                        <div className={styles.customLabelTitle}>Custom Layout 1</div>
                        <div className={styles.customLabelDescription}>With custom HTML structure</div>
                    </div>
                </DsRadioGroup.Item>
                <DsRadioGroup.Item value="custom2" className={styles.customItem}>
                    <div className={styles.customLabel}>
                        <div className={styles.customLabelTitle}>Custom Layout 2</div>
                        <div className={styles.customLabelDescription}>Complete control over rendering</div>
                    </div>
                </DsRadioGroup.Item>
            </DsRadioGroup.Root>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithDisabledItems`,`CustomComposition`]}))();export{_ as CustomComposition,h as Default,g as WithDisabledItems,v as __namedExportsOrder,m as default};