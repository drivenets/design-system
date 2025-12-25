import{j as i}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-DJPW-05a.js";import{D as w}from"./ds-password-input-DfRNrpMh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUbhxwPU.js";import"./ds-icon-KpcpguMC.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-BlISPb9c.js";import"./index-CQ-JdYCr.js";import"./index-CKS76wfi.js";import"./index-BOlOYjNG.js";import"./use-field-context-rW6R-8WL.js";const{expect:e,userEvent:s,waitFor:o,within:d}=__STORYBOOK_MODULE_TEST__,D={title:"Design System/PasswordInput",component:w,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","default"]},placeholder:{control:"text",description:"Placeholder text for the input"},disabled:{control:"boolean",description:"Whether the input is disabled"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Inline styles to apply to the component"}}},c={args:{placeholder:"Enter password",style:{width:"200px"}},play:async({canvasElement:r})=>{const a=d(r),t=a.getByPlaceholderText("Enter password"),n=a.getByRole("button",{name:/toggle password visibility/i});await s.type(t,"secret-password"),await e(t).toHaveValue("secret-password"),await e(t).toHaveAttribute("type","password"),await s.click(n),await o(async()=>{await e(t).toHaveAttribute("type","text")}),await s.click(n),await o(async()=>{await e(t).toHaveAttribute("type","password")}),await s.clear(t)}},p={render:function(a){const[t,n]=v.useState("initial-password");return i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[i.jsx(w,{...a,value:t,onValueChange:u=>n(u)}),i.jsxs("div",{children:["Current value: ",t]}),i.jsx("button",{onClick:()=>n("new-password"),children:"Set new password"}),i.jsx("button",{onClick:()=>n(""),children:"Clear password"})]})},args:{placeholder:"Enter password",style:{width:"200px"}},play:async({canvasElement:r})=>{const a=d(r),t=a.getByPlaceholderText("Enter password"),n=a.getByText("Set new password"),u=a.getByText("Clear password"),l=a.getByText("Current value: initial-password");await e(t).toHaveValue("initial-password"),await e(l).toHaveTextContent("Current value: initial-password"),await s.click(n),await o(async()=>{await e(t).toHaveValue("new-password"),await e(l).toHaveTextContent("Current value: new-password")}),await s.clear(t),await s.type(t,"user-input"),await o(async()=>{await e(l).toHaveTextContent("Current value: user-input")}),await s.click(u),await o(async()=>{await e(t).toHaveValue(""),await e(l).toHaveTextContent("Current value:")})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const f=["Default","Controlled"];export{p as Controlled,c as Default,f as __namedExportsOrder,D as default};
