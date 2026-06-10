import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-NTlmxmnx.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./ds-password-input-B97B5BUQ.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{o=t(n(),1),i(),s=r(),{expect:c,userEvent:l,waitFor:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/PasswordInput`,component:a,parameters:{layout:`centered`},argTypes:{size:{control:{type:`select`},options:[`small`,`default`]},placeholder:{control:`text`,description:`Placeholder text for the input`},disabled:{control:`boolean`,description:`Whether the input is disabled`},className:{control:`text`,description:`Additional CSS class names`},style:{control:`object`,description:`Inline styles to apply to the component`}}},p={args:{placeholder:`Enter password`,style:{width:`200px`}},play:async({canvasElement:e})=>{let t=d(e),n=t.getByPlaceholderText(`Enter password`),r=t.getByRole(`button`,{name:/toggle password visibility/i});await l.type(n,`secret-password`),await c(n).toHaveValue(`secret-password`),await c(n).toHaveAttribute(`type`,`password`),await l.click(r),await u(async()=>{await c(n).toHaveAttribute(`type`,`text`)}),await l.click(r),await u(async()=>{await c(n).toHaveAttribute(`type`,`password`)}),await l.clear(n)}},m={render:function(e){let[t,n]=(0,o.useState)(`initial-password`);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,alignItems:`center`},children:[(0,s.jsx)(a,{...e,value:t,onValueChange:e=>n(e)}),(0,s.jsxs)(`div`,{children:[`Current value: `,t]}),(0,s.jsx)(`button`,{onClick:()=>n(`new-password`),children:`Set new password`}),(0,s.jsx)(`button`,{onClick:()=>n(``),children:`Clear password`})]})},args:{placeholder:`Enter password`,style:{width:`200px`}},play:async({canvasElement:e})=>{let t=d(e),n=t.getByPlaceholderText(`Enter password`),r=t.getByText(`Set new password`),i=t.getByText(`Clear password`),a=t.getByText(`Current value: initial-password`);await c(n).toHaveValue(`initial-password`),await c(a).toHaveTextContent(`Current value: initial-password`),await l.click(r),await u(async()=>{await c(n).toHaveValue(`new-password`),await c(a).toHaveTextContent(`Current value: new-password`)}),await l.clear(n),await l.type(n,`user-input`),await u(async()=>{await c(a).toHaveTextContent(`Current value: user-input`)}),await l.click(i),await u(async()=>{await c(n).toHaveValue(``),await c(a).toHaveTextContent(`Current value:`)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter password',
    style: {
      width: '200px'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter password');
    const visibilityButton = canvas.getByRole('button', {
      name: /toggle password visibility/i
    });

    // Test password visibility toggle
    await userEvent.type(input, 'secret-password');
    await expect(input).toHaveValue('secret-password');
    await expect(input).toHaveAttribute('type', 'password');

    // Click the eye icon to show password
    await userEvent.click(visibilityButton);
    await waitFor(async () => {
      await expect(input).toHaveAttribute('type', 'text');
    });

    // Click again to hide password
    await userEvent.click(visibilityButton);
    await waitFor(async () => {
      await expect(input).toHaveAttribute('type', 'password');
    });

    // Reset
    await userEvent.clear(input);
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState('initial-password');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'center'
    }}>
                <DsPasswordInput {...args} value={value} onValueChange={newValue => setValue(newValue)} />
                <div>Current value: {value}</div>
                <button onClick={() => setValue('new-password')}>Set new password</button>
                <button onClick={() => setValue('')}>Clear password</button>
            </div>;
  },
  args: {
    placeholder: 'Enter password',
    style: {
      width: '200px'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter password');
    const setNewButton = canvas.getByText('Set new password');
    const clearButton = canvas.getByText('Clear password');
    const valueDisplay = canvas.getByText('Current value: initial-password');

    // Test initial value
    await expect(input).toHaveValue('initial-password');
    await expect(valueDisplay).toHaveTextContent('Current value: initial-password');

    // Test external control
    await userEvent.click(setNewButton);
    await waitFor(async () => {
      await expect(input).toHaveValue('new-password');
      await expect(valueDisplay).toHaveTextContent('Current value: new-password');
    });

    // Test user input
    await userEvent.clear(input);
    await userEvent.type(input, 'user-input');
    await waitFor(async () => {
      await expect(valueDisplay).toHaveTextContent('Current value: user-input');
    });

    // Test clear
    await userEvent.click(clearButton);
    await waitFor(async () => {
      await expect(input).toHaveValue('');
      await expect(valueDisplay).toHaveTextContent('Current value:');
    });
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Controlled`]}))();export{m as Controlled,p as Default,h as __namedExportsOrder,f as default};