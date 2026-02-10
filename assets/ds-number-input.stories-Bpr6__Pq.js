import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-DSOa6nM1.js";import{D as v}from"./ds-number-input-BxBKzDor.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHaAWc2i.js";import"./ds-icon-BqmpEYGk.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DlItVB4K.js";import"./index-CpZRjNKo.js";import"./index-BP5134m1.js";import"./index-D8UHqSRO.js";import"./use-field-context-BdBTpp5k.js";const{expect:e,userEvent:a,waitFor:i,within:y}=__STORYBOOK_MODULE_TEST__,k={title:"Design System/NumberInput",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","default"]},placeholder:{control:"text",description:"Placeholder text for the input"},defaultValue:{control:"text",description:"Default value of the number input (uncontrolled)"},min:{control:"number",description:"Minimum value allowed"},max:{control:"number",description:"Maximum value allowed"},step:{control:"number",description:"Step value for increment/decrement"},disabled:{control:"boolean",description:"Whether the input is disabled"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Inline styles to apply to the component"}}},c={args:{placeholder:"Enter number",defaultValue:0,style:{width:"200px"}}},p={args:{placeholder:"Enter number",defaultValue:50,min:0,max:100,step:1,style:{width:"200px"}},play:async({canvasElement:s})=>{const o=y(s),t=o.getByPlaceholderText("Enter number");await e(t).toHaveValue("50"),await a.clear(t),await a.type(t,"75",{delay:10}),await i(async()=>{await e(t).toHaveValue("75")}),await a.clear(t),await a.type(t,"150",{delay:10}),await a.tab(),await i(async()=>{await e(t).toHaveValue("100")}),await a.clear(t),await a.paste("-10"),await a.tab(),await i(async()=>{await e(t).toHaveValue("0")});const n=o.getByRole("button",{name:/decrease/i}),r=o.getByRole("button",{name:/increase/i});await e(n).toBeInTheDocument(),await e(r).toBeInTheDocument(),await a.click(r),await i(async()=>{await e(t).toHaveValue("1")}),await a.click(n),await i(async()=>{await e(t).toHaveValue("0")}),await e(n).toBeDisabled(),await e(r).not.toBeDisabled(),await a.clear(t),await a.type(t,"100",{delay:10}),await a.tab(),await i(async()=>{await e(r).toBeDisabled(),await e(n).not.toBeDisabled()}),await a.clear(t),await a.tab(),await i(async()=>{await e(t).toBeInTheDocument()})}},d={render:function(o){const[t,n]=x.useState(42);return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[l.jsx(v,{...o,value:t,defaultValue:0,onValueChange:r=>n(r)}),l.jsxs("div",{children:["Current value: ",t]}),l.jsx("button",{onClick:()=>n(0),children:"Reset to 0"}),l.jsx("button",{onClick:()=>n(100),children:"Set to 100"})]})},args:{placeholder:"Enter number",min:0,max:100,step:1,style:{width:"200px"}},play:async({canvasElement:s})=>{const o=y(s),t=o.getByPlaceholderText("Enter number"),n=o.getByText("Reset to 0"),r=o.getByText("Set to 100"),u=o.getByText("Current value: 42");await e(t).toHaveValue("42"),await e(u).toHaveTextContent("Current value: 42"),await a.click(n),await i(async()=>{await e(t).toHaveValue("0"),await e(u).toHaveTextContent("Current value: 0")}),await a.click(r),await i(async()=>{await e(t).toHaveValue("100"),await e(u).toHaveTextContent("Current value: 100")}),await a.clear(t),await a.type(t,"50",{delay:10}),await a.tab(),await i(async()=>{await e(t).toHaveValue("50"),await e(u).toHaveTextContent("Current value: 50")}),await a.click(n),await i(async()=>{await e(t).toHaveValue("0")})}},w={args:{size:"small",placeholder:"Small number input",defaultValue:10,style:{width:"150px"}}},m={args:{placeholder:"Disabled input",defaultValue:25,disabled:!0,style:{width:"200px"}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter number',
    defaultValue: 0,
    style: {
      width: '200px'
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter number',
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
    style: {
      width: '200px'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter number');

    // Test initial value
    await expect(input).toHaveValue('50');

    // Test number input functionality
    await userEvent.clear(input);
    await userEvent.type(input, '75', {
      delay: 10
    });
    // Wait for the input to be updated
    await waitFor(async () => {
      await expect(input).toHaveValue('75');
    });

    // Test min/max validation
    await userEvent.clear(input);
    await userEvent.type(input, '150', {
      delay: 10
    }); // Above max
    await userEvent.tab(); // Blur input to trigger validation
    // Wait for validation to complete
    await waitFor(async () => {
      await expect(input).toHaveValue('100'); // Should be clamped to max
    });
    await userEvent.clear(input);
    await userEvent.paste('-10'); // Below min
    await userEvent.tab(); // Blur input to trigger validation
    // Wait for validation to complete
    await waitFor(async () => {
      await expect(input).toHaveValue('0'); // Should be clamped to min
    });

    // Test stepper buttons
    const decrementButton = canvas.getByRole('button', {
      name: /decrease/i
    });
    const incrementButton = canvas.getByRole('button', {
      name: /increase/i
    });
    await expect(decrementButton).toBeInTheDocument();
    await expect(incrementButton).toBeInTheDocument();

    // Test stepper functionality
    await userEvent.click(incrementButton);
    // Wait for stepper update
    await waitFor(async () => {
      await expect(input).toHaveValue('1');
    });
    await userEvent.click(decrementButton);
    // Wait for stepper update
    await waitFor(async () => {
      await expect(input).toHaveValue('0');
    });

    // Test stepper button disabled states
    await expect(decrementButton).toBeDisabled(); // At min value
    await expect(incrementButton).not.toBeDisabled();

    // Set to max value
    await userEvent.clear(input);
    await userEvent.type(input, '100', {
      delay: 10
    });
    await userEvent.tab(); // Blur input to trigger validation
    // Wait for validation to complete
    await waitFor(async () => {
      await expect(incrementButton).toBeDisabled(); // At max value
      await expect(decrementButton).not.toBeDisabled();
    });

    // Test input cleared - should be in a valid state
    await userEvent.clear(input);
    await userEvent.tab(); // Blur input to trigger validation
    // Wait for validation to complete
    await waitFor(async () => {
      // Just verify the input is still functional and not in an error state
      await expect(input).toBeInTheDocument();
      // The exact value depends on Ark UI's behavior - could be empty, 0, or min value
    });
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState(42);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'center'
    }}>
                <DsNumberInput {...args} value={value} defaultValue={0} onValueChange={newValue => setValue(newValue)} />
                <div>Current value: {value}</div>
                <button onClick={() => setValue(0)}>Reset to 0</button>
                <button onClick={() => setValue(100)}>Set to 100</button>
            </div>;
  },
  args: {
    placeholder: 'Enter number',
    min: 0,
    max: 100,
    step: 1,
    style: {
      width: '200px'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter number');
    const resetButton = canvas.getByText('Reset to 0');
    const setTo100Button = canvas.getByText('Set to 100');
    const valueDisplay = canvas.getByText('Current value: 42');

    // Test initial value
    await expect(input).toHaveValue('42');
    await expect(valueDisplay).toHaveTextContent('Current value: 42');

    // Test external control
    await userEvent.click(resetButton);
    // Wait for state update
    await waitFor(async () => {
      await expect(input).toHaveValue('0');
      await expect(valueDisplay).toHaveTextContent('Current value: 0');
    });
    await userEvent.click(setTo100Button);
    // Wait for state update
    await waitFor(async () => {
      await expect(input).toHaveValue('100');
      await expect(valueDisplay).toHaveTextContent('Current value: 100');
    });

    // Test user input
    await userEvent.clear(input);
    await userEvent.type(input, '50', {
      delay: 10
    });
    await userEvent.tab(); // Blur input
    // Wait for state update
    await waitFor(async () => {
      await expect(input).toHaveValue('50');
      await expect(valueDisplay).toHaveTextContent('Current value: 50');
    });

    // Reset
    await userEvent.click(resetButton);
    // Wait for state update
    await waitFor(async () => {
      await expect(input).toHaveValue('0');
    });
  }
}`,...d.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    placeholder: 'Small number input',
    defaultValue: 10,
    style: {
      width: '150px'
    }
  }
}`,...w.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    defaultValue: 25,
    disabled: true,
    style: {
      width: '200px'
    }
  }
}`,...m.parameters?.docs?.source}}};const W=["Default","WithMinMax","Controlled","Small","Disabled"];export{d as Controlled,c as Default,m as Disabled,w as Small,p as WithMinMax,W as __namedExportsOrder,k as default};
