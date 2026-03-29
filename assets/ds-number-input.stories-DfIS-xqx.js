import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CfnbrWkB.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./ds-number-input-DZ8puBdu.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;t((()=>{o=e(n(),1),i(),s=r(),{expect:c,userEvent:l,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Design System/NumberInput`,component:a,parameters:{layout:`centered`},argTypes:{size:{control:{type:`select`},options:[`small`,`default`]},placeholder:{control:`text`,description:`Placeholder text for the input`},defaultValue:{control:`text`,description:`Default value of the number input (uncontrolled)`},min:{control:`number`,description:`Minimum value allowed`},max:{control:`number`,description:`Maximum value allowed`},step:{control:`number`,description:`Step value for increment/decrement`},disabled:{control:`boolean`,description:`Whether the input is disabled`},className:{control:`text`,description:`Additional CSS class names`},style:{control:`object`,description:`Inline styles to apply to the component`}}},p={args:{placeholder:`Enter number`,defaultValue:0,style:{width:`200px`}}},m={args:{placeholder:`Enter number`,defaultValue:50,min:0,max:100,step:1,style:{width:`200px`}},play:async({canvasElement:e})=>{let t=d(e),n=t.getByPlaceholderText(`Enter number`);await c(n).toHaveValue(`50`),await l.clear(n),await l.type(n,`75`,{delay:10}),await u(async()=>{await c(n).toHaveValue(`75`)}),await l.clear(n),await l.type(n,`150`,{delay:10}),await l.tab(),await u(async()=>{await c(n).toHaveValue(`100`)}),await l.clear(n),await l.paste(`-10`),await l.tab(),await u(async()=>{await c(n).toHaveValue(`0`)});let r=t.getByRole(`button`,{name:/decrease/i}),i=t.getByRole(`button`,{name:/increase/i});await c(r).toBeInTheDocument(),await c(i).toBeInTheDocument(),await l.click(i),await u(async()=>{await c(n).toHaveValue(`1`)}),await l.click(r),await u(async()=>{await c(n).toHaveValue(`0`)}),await c(r).toBeDisabled(),await c(i).not.toBeDisabled(),await l.clear(n),await l.type(n,`100`,{delay:10}),await l.tab(),await u(async()=>{await c(i).toBeDisabled(),await c(r).not.toBeDisabled()}),await l.clear(n),await l.tab(),await u(async()=>{await c(n).toBeInTheDocument()})}},h={render:function(e){let[t,n]=(0,o.useState)(42);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,alignItems:`center`},children:[(0,s.jsx)(a,{...e,value:t,defaultValue:0,onValueChange:e=>n(e)}),(0,s.jsxs)(`div`,{children:[`Current value: `,t]}),(0,s.jsx)(`button`,{onClick:()=>n(0),children:`Reset to 0`}),(0,s.jsx)(`button`,{onClick:()=>n(100),children:`Set to 100`})]})},args:{placeholder:`Enter number`,min:0,max:100,step:1,style:{width:`200px`}},play:async({canvasElement:e})=>{let t=d(e),n=t.getByPlaceholderText(`Enter number`),r=t.getByText(`Reset to 0`),i=t.getByText(`Set to 100`),a=t.getByText(`Current value: 42`);await c(n).toHaveValue(`42`),await c(a).toHaveTextContent(`Current value: 42`),await l.click(r),await u(async()=>{await c(n).toHaveValue(`0`),await c(a).toHaveTextContent(`Current value: 0`)}),await l.click(i),await u(async()=>{await c(n).toHaveValue(`100`),await c(a).toHaveTextContent(`Current value: 100`)}),await l.clear(n),await l.type(n,`50`,{delay:10}),await l.tab(),await u(async()=>{await c(n).toHaveValue(`50`),await c(a).toHaveTextContent(`Current value: 50`)}),await l.click(r),await u(async()=>{await c(n).toHaveValue(`0`)})}},g={args:{size:`small`,placeholder:`Small number input`,defaultValue:10,style:{width:`150px`}}},_={args:{placeholder:`Disabled input`,defaultValue:25,disabled:!0,style:{width:`200px`}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter number',
    defaultValue: 0,
    style: {
      width: '200px'
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    placeholder: 'Small number input',
    defaultValue: 10,
    style: {
      width: '150px'
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    defaultValue: 25,
    disabled: true,
    style: {
      width: '200px'
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithMinMax`,`Controlled`,`Small`,`Disabled`]}))();export{h as Controlled,p as Default,_ as Disabled,g as Small,m as WithMinMax,v as __namedExportsOrder,f as default};