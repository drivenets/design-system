import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-B5CbGZgU.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./ds-radio-group-CKNNZoAi.js";var o,s,c,l,u,d=t((()=>{o=`_customItem_iyooj_1`,s=`_customLabel_iyooj_8`,c=`_customLabelTitle_iyooj_12`,l=`_customLabelDescription_iyooj_16`,u={customItem:o,customLabel:s,customLabelTitle:c,customLabelDescription:l}})),f,p,m,h,g,_,v,y,b,x;t((()=>{f=e(n(),1),i(),d(),p=r(),{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Design System/RadioGroup`,component:a.Root,parameters:{layout:`centered`}},v={parameters:{docs:{description:{story:`A basic radio group with labels. Uses the compound component pattern where users compose Root and Item components.`}}},render:function(){let[e,t]=(0,f.useState)(`option2`);return(0,p.jsxs)(a.Root,{value:e,onValueChange:t,children:[(0,p.jsx)(a.Item,{value:`option1`,label:`Option 1`}),(0,p.jsx)(a.Item,{value:`option2`,label:`Option 2`}),(0,p.jsx)(a.Item,{value:`option3`,label:`Option 3`})]})},play:async({canvasElement:e})=>{let t=g(e),n=await t.findByRole(`radio`,{name:/Option 1/i}),r=await t.findByRole(`radio`,{name:/Option 2/i}),i=await t.findByRole(`radio`,{name:/Option 3/i});await m(r).toBeChecked(),await h.click(i),await m(r).not.toBeChecked(),await m(i).toBeChecked(),await h.click(n),await m(n).toBeChecked(),await m(i).not.toBeChecked()}},y={parameters:{docs:{description:{story:`Radio items can be disabled to prevent user interaction.`}}},render:function(){let[e,t]=(0,f.useState)(`option2`);return(0,p.jsxs)(a.Root,{value:e,onValueChange:t,children:[(0,p.jsx)(a.Item,{value:`option1`,label:`Disabled Option`,labelInfo:`This option is disabled`,disabled:!0}),(0,p.jsx)(a.Item,{value:`option2`,label:`Option 2`,labelInfo:`Available option`}),(0,p.jsx)(a.Item,{value:`option3`,label:`Option 3`})]})},play:async({canvasElement:e})=>{let t=g(e),n=await t.findByRole(`radio`,{name:/Disabled Option/i}),r=await t.findByRole(`radio`,{name:/Option 2/i});await m(r).toBeChecked(),await m(t.getByText(`This option is disabled`)).toBeInTheDocument(),await m(t.getByText(`Available option`)).toBeInTheDocument(),await h.click(n,{pointerEventsCheck:0}),await m(n).not.toBeChecked(),await m(r).toBeChecked()}},b={parameters:{docs:{description:{story:`For maximum flexibility, Item components can accept children for custom layouts. Useful for complex layouts or integration with other components.`}}},render:function(){let[e,t]=(0,f.useState)(`custom2`);return(0,p.jsxs)(a.Root,{value:e,onValueChange:t,children:[(0,p.jsx)(a.Item,{value:`custom1`,className:u.customItem,children:(0,p.jsxs)(`div`,{className:u.customLabel,children:[(0,p.jsx)(`div`,{className:u.customLabelTitle,children:`Custom Layout 1`}),(0,p.jsx)(`div`,{className:u.customLabelDescription,children:`With custom HTML structure`})]})}),(0,p.jsx)(a.Item,{value:`custom2`,className:u.customItem,children:(0,p.jsxs)(`div`,{className:u.customLabel,children:[(0,p.jsx)(`div`,{className:u.customLabelTitle,children:`Custom Layout 2`}),(0,p.jsx)(`div`,{className:u.customLabelDescription,children:`Complete control over rendering`})]})})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Locate the radio buttons by their role
    const option1 = await canvas.findByRole('radio', {
      name: /Option 1/i
    });
    const option2 = await canvas.findByRole('radio', {
      name: /Option 2/i
    });
    const option3 = await canvas.findByRole('radio', {
      name: /Option 3/i
    });

    // Assert that Option 2 is initially selected
    await expect(option2).toBeChecked();

    // Click on Option 3
    await userEvent.click(option3);

    // Assert that Option 2 is no longer selected
    await expect(option2).not.toBeChecked();

    // Assert that Option 3 is now selected
    await expect(option3).toBeChecked();

    // Click on Option 1
    await userEvent.click(option1);

    // Assert that Option 1 is now selected
    await expect(option1).toBeChecked();
    await expect(option3).not.toBeChecked();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Locate the radio buttons
    const option1 = await canvas.findByRole('radio', {
      name: /Disabled Option/i
    });
    const option2 = await canvas.findByRole('radio', {
      name: /Option 2/i
    });

    // Assert that Option 2 is initially selected
    await expect(option2).toBeChecked();

    // Assert that label info is displayed
    await expect(canvas.getByText('This option is disabled')).toBeInTheDocument();
    await expect(canvas.getByText('Available option')).toBeInTheDocument();

    // Attempt to click the disabled Option 1
    await userEvent.click(option1, {
      pointerEventsCheck: 0
    });

    // Assert that Option 1 remains unchecked
    await expect(option1).not.toBeChecked();
    // Assert that Option 2 is still selected
    await expect(option2).toBeChecked();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithDisabledItems`,`CustomComposition`]}))();export{b as CustomComposition,v as Default,y as WithDisabledItems,x as __namedExportsOrder,_ as default};