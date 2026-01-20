import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-CawOWBk2.js";import{D as a}from"./ds-radio-group-Vdml2kBP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D5F6wOnQ.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-BVAtCfJX.js";import"./index-tySxGykU.js";import"./index-CyED3uAL.js";import"./index-olW93a_3.js";import"./index-DEXVOLzB.js";import"./index-CuoYKess.js";const v="_customItem_iyooj_1",b="_customLabel_iyooj_8",y="_customLabelTitle_iyooj_12",R="_customLabelDescription_iyooj_16",i={customItem:v,customLabel:b,customLabelTitle:y,customLabelDescription:R},{expect:s,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,j={title:"Design System/RadioGroup",parameters:{layout:"centered"},tags:["autodocs"]},l={parameters:{docs:{description:{story:"A basic radio group with labels. Uses the compound component pattern where users compose Root and Item components."}}},render:function(){const[t,o]=d.useState("option2");return e.jsxs(a.Root,{value:t,onValueChange:o,children:[e.jsx(a.Item,{value:"option1",label:"Option 1"}),e.jsx(a.Item,{value:"option2",label:"Option 2"}),e.jsx(a.Item,{value:"option3",label:"Option 3"})]})},play:async({canvasElement:n})=>{const t=h(n),o=await t.findByRole("radio",{name:/Option 1/i}),c=await t.findByRole("radio",{name:/Option 2/i}),u=await t.findByRole("radio",{name:/Option 3/i});await s(c).toBeChecked(),await m.click(u),await s(c).not.toBeChecked(),await s(u).toBeChecked(),await m.click(o),await s(o).toBeChecked(),await s(u).not.toBeChecked()}},r={parameters:{docs:{description:{story:"Radio items can be disabled to prevent user interaction."}}},render:function(){const[t,o]=d.useState("option2");return e.jsxs(a.Root,{value:t,onValueChange:o,children:[e.jsx(a.Item,{value:"option1",label:"Disabled Option",labelInfo:"This option is disabled",disabled:!0}),e.jsx(a.Item,{value:"option2",label:"Option 2",labelInfo:"Available option"}),e.jsx(a.Item,{value:"option3",label:"Option 3"})]})},play:async({canvasElement:n})=>{const t=h(n),o=await t.findByRole("radio",{name:/Disabled Option/i}),c=await t.findByRole("radio",{name:/Option 2/i});await s(c).toBeChecked(),await s(t.getByText("This option is disabled")).toBeInTheDocument(),await s(t.getByText("Available option")).toBeInTheDocument(),await m.click(o,{pointerEventsCheck:0}),await s(o).not.toBeChecked(),await s(c).toBeChecked()}},p={parameters:{docs:{description:{story:"For maximum flexibility, Item components can accept children for custom layouts. Useful for complex layouts or integration with other components."}}},render:function(){const[t,o]=d.useState("custom2");return e.jsxs(a.Root,{value:t,onValueChange:o,children:[e.jsx(a.Item,{value:"custom1",className:i.customItem,children:e.jsxs("div",{className:i.customLabel,children:[e.jsx("div",{className:i.customLabelTitle,children:"Custom Layout 1"}),e.jsx("div",{className:i.customLabelDescription,children:"With custom HTML structure"})]})}),e.jsx(a.Item,{value:"custom2",className:i.customItem,children:e.jsxs("div",{className:i.customLabel,children:[e.jsx("div",{className:i.customLabelTitle,children:"Custom Layout 2"}),e.jsx("div",{className:i.customLabelDescription,children:"Complete control over rendering"})]})})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const _=["Default","WithDisabledItems","CustomComposition"];export{p as CustomComposition,l as Default,r as WithDisabledItems,_ as __namedExportsOrder,j as default};
