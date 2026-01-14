import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-CurGN41U.js";import{D as c}from"./ds-text-input-q7teNTC4.js";import{D as l}from"./ds-icon-DneVmv4a.js";import{t as H}from"./ds-text-input.types-CA2yGyah.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B49C16oM.js";const{expect:n,userEvent:r,waitFor:f,within:V}=__STORYBOOK_MODULE_TEST__,W={title:"Design System/TextInput",component:c,parameters:{layout:"centered",docs:{description:{component:"A flexible text input component that supports start and end adornments via props for easy customization."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:H,description:"The size of the input field"},disabled:{control:"boolean",description:"Whether the input is disabled"},placeholder:{control:"text",description:"The placeholder text"},value:{control:"text",description:"The current value"},onChange:{action:"changed"},onValueChange:{action:"value changed"}}},p={args:{placeholder:"Enter text...",size:"default",style:{width:"200px"}},play:async({canvasElement:o})=>{const e=V(o).getByPlaceholderText("Enter text...");await r.type(e,"Hello World"),await n(e).toHaveValue("Hello World"),await r.clear(e)}},v={args:{size:"small",placeholder:"Small input...",style:{width:"150px"}}},m={args:{value:"Hello World",placeholder:"Enter text..."}},x={args:{placeholder:"Disabled input",disabled:!0,style:{width:"200px"}}},h={render:function(a){const[e,s]=d.useState("initial value");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[t.jsx(c,{...a,value:e,onValueChange:u=>s(u)}),t.jsxs("div",{children:["Current value: ",e]}),t.jsx("button",{onClick:()=>s("updated value"),children:"Update value"}),t.jsx("button",{onClick:()=>s(""),children:"Clear value"})]})},args:{type:"text",placeholder:"Controlled input",style:{width:"200px"}},play:async({canvasElement:o})=>{const a=V(o),e=a.getByPlaceholderText("Controlled input"),s=a.getByText("Update value"),u=a.getByText("Clear value"),i=a.getByText("Current value: initial value");await n(e).toHaveValue("initial value"),await n(i).toHaveTextContent("Current value: initial value"),await r.click(s),await f(async()=>{await n(e).toHaveValue("updated value"),await n(i).toHaveTextContent("Current value: updated value")}),await r.clear(e),await r.type(e,"user input"),await f(async()=>{await n(i).toHaveTextContent("Current value: user input")}),await r.click(u),await f(async()=>{await n(e).toHaveValue(""),await n(i).toHaveTextContent("Current value:")})}},y={args:{placeholder:"Enter amount...",slots:{startAdornment:t.jsx("span",{style:{color:"var(--color-font-secondary)",fontSize:"12px",fontWeight:"bold"},children:"$"})},style:{width:"200px"}}},w={render:function(){const[a,e]=d.useState("");return t.jsx(c,{placeholder:"Enter text...",value:a,onValueChange:e,slots:{endAdornment:t.jsx("button",{type:"button",onClick:()=>e(""),children:t.jsx(l,{icon:"close",size:"tiny"})})},style:{width:"200px"}})}},g={render:function(){const[a,e]=d.useState("");return t.jsx(c,{placeholder:"Search...",value:a,onValueChange:e,slots:{startAdornment:t.jsx(l,{icon:"search",size:"tiny"}),endAdornment:t.jsx("button",{type:"button",onClick:()=>e(""),children:t.jsx(l,{icon:"close",size:"tiny"})})},style:{width:"200px"}})}},C={name:"Custom Adornments (Email)",render:function(){const[a,e]=d.useState("");return t.jsx(c,{size:"small",type:"email",placeholder:"Enter email address...",value:a,onValueChange:e,slots:{startAdornment:t.jsx("span",{style:{backgroundColor:"var(--color-background-action-weak)",borderRadius:"4px",padding:"2px 6px",fontSize:"12px",color:"var(--color-font-secondary)",fontWeight:"bold"},children:"@"}),endAdornment:t.jsx("button",{type:"button",onClick:()=>console.log("Send clicked"),children:t.jsx(l,{icon:"send",size:"tiny",filled:!!a})})},style:{width:"250px"}})},play:async({canvasElement:o})=>{const e=V(o).getByPlaceholderText("Enter email address...");await r.type(e,"test@example.com"),await n(e).toHaveValue("test@example.com"),await n(e).toHaveAttribute("type","email"),await r.clear(e)}},b={args:{value:"Disabled value",disabled:!0,slots:{startAdornment:t.jsx("button",{type:"button",disabled:!0,children:t.jsx(l,{icon:"lock",size:"tiny"})}),endAdornment:t.jsx("button",{type:"button",disabled:!0,children:t.jsx(l,{icon:"visibility",size:"tiny"})})},style:{width:"200px"}}},T={render:function(){const[a,e]=d.useState(""),s=!!a,u=E=>{e(E)},i=()=>{e("")};return t.jsxs(t.Fragment,{children:[t.jsx(c,{placeholder:"Type something...",value:a,onValueChange:u,slots:{startAdornment:t.jsx(l,{icon:"search",size:"tiny"}),endAdornment:s&&t.jsx("button",{type:"button",onClick:i,children:t.jsx(l,{icon:"close",size:"tiny"})})},style:{width:"200px"}}),t.jsxs("div",{style:{marginTop:"8px",fontSize:"12px",color:"var(--color-font-secondary)"},children:["Character count: ",a.length]})]})},play:async({canvasElement:o})=>{const a=V(o),e=a.getByPlaceholderText("Type something..."),s=a.getByText("Character count: 0");await n(e).toHaveValue(""),await n(s).toHaveTextContent("Character count: 0"),await r.type(e,"Hello World"),await n(e).toHaveValue("Hello World"),await n(s).toHaveTextContent("Character count: 11"),await r.clear(e),await n(e).toHaveValue(""),await n(s).toHaveTextContent("Character count: 0")}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    placeholder: 'Small input...',
    style: {
      width: '150px'
    }
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Hello World',
    placeholder: 'Enter text...'
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    style: {
      width: '200px'
    }
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter amount...',
    slots: {
      startAdornment: <span style={{
        color: 'var(--color-font-secondary)',
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Custom Adornments (Email)',
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsTextInput size="small" type="email" placeholder="Enter email address..." value={value} onValueChange={setValue} slots={{
      startAdornment: <span style={{
        backgroundColor: 'var(--color-background-action-weak)',
        borderRadius: '4px',
        padding: '2px 6px',
        fontSize: '12px',
        color: 'var(--color-font-secondary)',
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
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
        color: 'var(--color-font-secondary)'
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
}`,...T.parameters?.docs?.source}}};const I=["Default","Small","WithValue","Disabled","Controlled","WithStartAdornment","WithEndAdornment","WithBothAdornments","CustomEmailAdornments","DisabledAdornments","Interactive"];export{h as Controlled,C as CustomEmailAdornments,p as Default,x as Disabled,b as DisabledAdornments,T as Interactive,v as Small,g as WithBothAdornments,w as WithEndAdornment,y as WithStartAdornment,m as WithValue,I as __namedExportsOrder,W as default};
