import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-Do56P5yW.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./ds-icon-DGMb-Vpb.js";import{t as a}from"./ds-icon-Dd5s7jZ6.js";import{i as o,n as s,r as c,t as l}from"./ds-text-input.types-aijyoydl.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{u=t(n(),1),o(),a(),l(),d=r(),{expect:f,userEvent:p,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/TextInput`,component:c,parameters:{layout:`centered`,docs:{description:{component:`A flexible text input component that supports start and end adornments via props for easy customization.`}}},argTypes:{size:{control:{type:`select`},options:s,description:`The size of the input field`},disabled:{control:`boolean`,description:`Whether the input is disabled`},placeholder:{control:`text`,description:`The placeholder text`},value:{control:`text`,description:`The current value`},onChange:{action:`changed`},onValueChange:{action:`value changed`}}},_={args:{placeholder:`Enter text...`,size:`default`,style:{width:`200px`}},play:async({canvasElement:e})=>{let t=h(e).getByPlaceholderText(`Enter text...`);await p.type(t,`Hello World`),await f(t).toHaveValue(`Hello World`),await p.clear(t)}},v={args:{size:`small`,placeholder:`Small input...`,style:{width:`150px`}}},y={args:{value:`Hello World`,placeholder:`Enter text...`}},b={args:{placeholder:`Disabled input`,disabled:!0,style:{width:`200px`}}},x={render:function(e){let[t,n]=(0,u.useState)(`initial value`);return(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,alignItems:`center`},children:[(0,d.jsx)(c,{...e,value:t,onValueChange:e=>n(e)}),(0,d.jsxs)(`div`,{children:[`Current value: `,t]}),(0,d.jsx)(`button`,{onClick:()=>n(`updated value`),children:`Update value`}),(0,d.jsx)(`button`,{onClick:()=>n(``),children:`Clear value`})]})},args:{type:`text`,placeholder:`Controlled input`,style:{width:`200px`}},play:async({canvasElement:e})=>{let t=h(e),n=t.getByPlaceholderText(`Controlled input`),r=t.getByText(`Update value`),i=t.getByText(`Clear value`),a=t.getByText(`Current value: initial value`);await f(n).toHaveValue(`initial value`),await f(a).toHaveTextContent(`Current value: initial value`),await p.click(r),await m(async()=>{await f(n).toHaveValue(`updated value`),await f(a).toHaveTextContent(`Current value: updated value`)}),await p.clear(n),await p.type(n,`user input`),await m(async()=>{await f(a).toHaveTextContent(`Current value: user input`)}),await p.click(i),await m(async()=>{await f(n).toHaveValue(``),await f(a).toHaveTextContent(`Current value:`)})}},S={args:{placeholder:`Enter amount...`,slots:{startAdornment:(0,d.jsx)(`span`,{style:{color:`var(--font-secondary)`,fontSize:`12px`,fontWeight:`bold`},children:`$`})},style:{width:`200px`}}},C={render:function(){let[e,t]=(0,u.useState)(``);return(0,d.jsx)(c,{placeholder:`Enter text...`,value:e,onValueChange:t,slots:{endAdornment:(0,d.jsx)(`button`,{type:`button`,onClick:()=>t(``),children:(0,d.jsx)(i,{icon:`close`,size:`tiny`})})},style:{width:`200px`}})}},w={render:function(){let[e,t]=(0,u.useState)(``);return(0,d.jsx)(c,{placeholder:`Search...`,value:e,onValueChange:t,slots:{startAdornment:(0,d.jsx)(i,{icon:`search`,size:`tiny`}),endAdornment:(0,d.jsx)(`button`,{type:`button`,onClick:()=>t(``),children:(0,d.jsx)(i,{icon:`close`,size:`tiny`})})},style:{width:`200px`}})}},T={name:`Custom Adornments (Email)`,render:function(){let[e,t]=(0,u.useState)(``);return(0,d.jsx)(c,{size:`small`,type:`email`,placeholder:`Enter email address...`,value:e,onValueChange:t,slots:{startAdornment:(0,d.jsx)(`span`,{style:{backgroundColor:`var(--color-background-action-weak)`,borderRadius:`4px`,padding:`2px 6px`,fontSize:`12px`,color:`var(--font-secondary)`,fontWeight:`bold`},children:`@`}),endAdornment:(0,d.jsx)(`button`,{type:`button`,onClick:()=>console.log(`Send clicked`),children:(0,d.jsx)(i,{icon:`send`,size:`tiny`,filled:!!e})})},style:{width:`250px`}})},play:async({canvasElement:e})=>{let t=h(e).getByPlaceholderText(`Enter email address...`);await p.type(t,`test@example.com`),await f(t).toHaveValue(`test@example.com`),await f(t).toHaveAttribute(`type`,`email`),await p.clear(t)}},E={args:{value:`Disabled value`,disabled:!0,slots:{startAdornment:(0,d.jsx)(`button`,{type:`button`,disabled:!0,children:(0,d.jsx)(i,{icon:`lock`,size:`tiny`})}),endAdornment:(0,d.jsx)(`button`,{type:`button`,disabled:!0,children:(0,d.jsx)(i,{icon:`visibility`,size:`tiny`})})},style:{width:`200px`}}},D={render:function(){let[e,t]=(0,u.useState)(``),n=!!e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c,{placeholder:`Type something...`,value:e,onValueChange:e=>{t(e)},slots:{startAdornment:(0,d.jsx)(i,{icon:`search`,size:`tiny`}),endAdornment:n&&(0,d.jsx)(`button`,{type:`button`,onClick:()=>{t(``)},children:(0,d.jsx)(i,{icon:`close`,size:`tiny`})})},style:{width:`200px`}}),(0,d.jsxs)(`div`,{style:{marginTop:`8px`,fontSize:`12px`,color:`var(--font-secondary)`},children:[`Character count: `,e.length]})]})},play:async({canvasElement:e})=>{let t=h(e),n=t.getByPlaceholderText(`Type something...`),r=t.getByText(`Character count: 0`);await f(n).toHaveValue(``),await f(r).toHaveTextContent(`Character count: 0`),await p.type(n,`Hello World`),await f(n).toHaveValue(`Hello World`),await f(r).toHaveTextContent(`Character count: 11`),await p.clear(n),await f(n).toHaveValue(``),await f(r).toHaveTextContent(`Character count: 0`)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    size: 'default',
    style: {
      width: '200px'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter text...');

    // Test basic input functionality
    await userEvent.type(input, 'Hello World');
    await expect(input).toHaveValue('Hello World');

    // Reset
    await userEvent.clear(input);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    placeholder: 'Small input...',
    style: {
      width: '150px'
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Hello World',
    placeholder: 'Enter text...'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    style: {
      width: '200px'
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState('initial value');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'center'
    }}>
                <DsTextInput {...args} value={value} onValueChange={newValue => setValue(newValue)} />
                <div>Current value: {value}</div>
                <button onClick={() => setValue('updated value')}>Update value</button>
                <button onClick={() => setValue('')}>Clear value</button>
            </div>;
  },
  args: {
    type: 'text',
    placeholder: 'Controlled input',
    style: {
      width: '200px'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Controlled input');
    const updateButton = canvas.getByText('Update value');
    const clearButton = canvas.getByText('Clear value');
    const valueDisplay = canvas.getByText('Current value: initial value');

    // Test initial value
    await expect(input).toHaveValue('initial value');
    await expect(valueDisplay).toHaveTextContent('Current value: initial value');

    // Test external control
    await userEvent.click(updateButton);
    await waitFor(async () => {
      await expect(input).toHaveValue('updated value');
      await expect(valueDisplay).toHaveTextContent('Current value: updated value');
    });

    // Test user input
    await userEvent.clear(input);
    await userEvent.type(input, 'user input');
    await waitFor(async () => {
      await expect(valueDisplay).toHaveTextContent('Current value: user input');
    });

    // Test clear
    await userEvent.click(clearButton);
    await waitFor(async () => {
      await expect(input).toHaveValue('');
      await expect(valueDisplay).toHaveTextContent('Current value:');
    });
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter amount...',
    slots: {
      startAdornment: <span style={{
        color: 'var(--font-secondary)',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
                    $
                </span>
    },
    style: {
      width: '200px'
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsTextInput placeholder="Enter text..." value={value} onValueChange={setValue} slots={{
      endAdornment: <button type="button" onClick={() => setValue('')}>
                            <DsIcon icon="close" size="tiny" />
                        </button>
    }} style={{
      width: '200px'
    }} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsTextInput placeholder="Search..." value={value} onValueChange={setValue} slots={{
      startAdornment: <DsIcon icon="search" size="tiny" />,
      endAdornment: <button type="button" onClick={() => setValue('')}>
                            <DsIcon icon="close" size="tiny" />
                        </button>
    }} style={{
      width: '200px'
    }} />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Custom Adornments (Email)',
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsTextInput size="small" type="email" placeholder="Enter email address..." value={value} onValueChange={setValue} slots={{
      startAdornment: <span style={{
        backgroundColor: 'var(--color-background-action-weak)',
        borderRadius: '4px',
        padding: '2px 6px',
        fontSize: '12px',
        color: 'var(--font-secondary)',
        fontWeight: 'bold'
      }}>
                            @
                        </span>,
      endAdornment: <button type="button" onClick={() => console.log('Send clicked')}>
                            <DsIcon icon="send" size="tiny" filled={!!value} />
                        </button>
    }} style={{
      width: '250px'
    }} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Enter email address...');

    // Test email input
    await userEvent.type(input, 'test@example.com');
    await expect(input).toHaveValue('test@example.com');
    await expect(input).toHaveAttribute('type', 'email');

    // Reset
    await userEvent.clear(input);
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Disabled value',
    disabled: true,
    slots: {
      startAdornment: <button type="button" disabled={true}>
                    <DsIcon icon="lock" size="tiny" />
                </button>,
      endAdornment: <button type="button" disabled={true}>
                    <DsIcon icon="visibility" size="tiny" />
                </button>
    },
    style: {
      width: '200px'
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const showClear = !!value;
    const handleValueChange = (newValue: string) => {
      setValue(newValue);
    };
    const handleClear = () => {
      setValue('');
    };
    return <>
                <DsTextInput placeholder="Type something..." value={value} onValueChange={handleValueChange} slots={{
        startAdornment: <DsIcon icon="search" size="tiny" />,
        endAdornment: showClear && <button type="button" onClick={handleClear}>
                                <DsIcon icon="close" size="tiny" />
                            </button>
      }} style={{
        width: '200px'
      }} />
                <div style={{
        marginTop: '8px',
        fontSize: '12px',
        color: 'var(--font-secondary)'
      }}>
                    Character count: {value.length}
                </div>
            </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Type something...');
    const characterCount = canvas.getByText('Character count: 0');

    // Test initial state
    await expect(input).toHaveValue('');
    await expect(characterCount).toHaveTextContent('Character count: 0');

    // Test typing
    await userEvent.type(input, 'Hello World');
    await expect(input).toHaveValue('Hello World');
    await expect(characterCount).toHaveTextContent('Character count: 11');

    // Test clearing
    await userEvent.clear(input);
    await expect(input).toHaveValue('');
    await expect(characterCount).toHaveTextContent('Character count: 0');
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Small`,`WithValue`,`Disabled`,`Controlled`,`WithStartAdornment`,`WithEndAdornment`,`WithBothAdornments`,`CustomEmailAdornments`,`DisabledAdornments`,`Interactive`]}))();export{x as Controlled,T as CustomEmailAdornments,_ as Default,b as Disabled,E as DisabledAdornments,D as Interactive,v as Small,w as WithBothAdornments,C as WithEndAdornment,S as WithStartAdornment,y as WithValue,O as __namedExportsOrder,g as default};