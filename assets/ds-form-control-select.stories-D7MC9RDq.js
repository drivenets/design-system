import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-D3BBxIUs.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{i}from"./ds-icon.types-BUQmi_Fe.js";import{t as a}from"./ds-icon-Ba1aj46h.js";import{i as o,n as s,r as c,t as l}from"./ds-form-control.types-C1GxRsrT.js";import{r as u,t as d}from"./ds-form-control-stories-shared-Deonlm99.js";import{n as f,t as p}from"./ds-form-control.stories.module-DAOhSfpf.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;t((()=>{s(),a(),o(),u(),m=e(n(),1),f(),h=r(),{expect:g,screen:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Components/FormControl/Select`,component:c,parameters:{layout:`centered`},argTypes:{status:{control:{type:`select`},options:l,description:`Form control color status`,table:{defaultValue:{summary:l[0]}}},label:{control:`text`,description:`Label for the form control`},required:{control:`boolean`,description:`Indicates if the field is required`},message:{control:`text`,description:`Message to display below the form control`},messageIcon:{control:`text`,description:`Icon to display in the message`},className:{control:`text`,description:`Additional CSS class names`},style:{control:`object`,description:`Additional styles to apply to the component`}}},S=async e=>{let t=b(e),n=t.getByRole(`combobox`,{name:`Input`}),r=async()=>{await v.click(n);let e=t.getByRole(`button`,{name:`Clear value`});await v.click(e),await v.click(n)};await g(n).toHaveTextContent(`Select an option`),await v.click(n);let i=_.getByRole(`option`,{name:`Option 1`});await g(i).toBeInTheDocument(),await g(_.getByRole(`option`,{name:`Option 2`})).toBeInTheDocument(),await g(_.getByRole(`option`,{name:`Option 3`})).toBeInTheDocument(),await v.click(i),await y(async()=>{await g(n).toHaveTextContent(`Option 1`)}),await r(),await y(async()=>{await g(n).toHaveTextContent(`Select an option`)}),await v.click(n);let a=_.getByRole(`option`,{name:`Option 2`});await v.click(a),await g(n).toHaveTextContent(`Option 2`),await r(),await g(n).toHaveTextContent(`Select an option`),await g(t.queryByRole(`button`,{name:`Clear value`})).not.toBeInTheDocument()},C=async e=>{let t=b(e),n=t.getByRole(`combobox`);await g(n).toBeDisabled(),await v.click(n),await g(t.queryByText(`Option 1`)).not.toBeVisible()},w={render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsx)(c,{label:`Input`,required:!0,message:`This is a message`,children:(0,h.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})})},play:async({canvasElement:e})=>{await S(e)}},T={render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsx)(c,{label:`Input`,required:!0,style:{width:`300px`},children:(0,h.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})})},play:async({canvasElement:e})=>{await S(e)}},E={render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsx)(c,{label:`Input`,required:!0,style:{width:`400px`,padding:`16px`,border:`2px solid #e0e0e0`,borderRadius:`8px`,backgroundColor:`#f9f9f9`},children:(0,h.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})})},play:async({canvasElement:e})=>{await S(e)}},D={render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsxs)(c,{label:`Input`,required:!0,style:{width:`300px`},children:[(0,h.jsx)(c.Description,{children:(0,h.jsx)(d,{})}),(0,h.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})]})},play:async({canvasElement:e})=>{await S(e)}},O={render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsxs)(c,{label:`Input`,required:!0,slots:{endAdornment:(0,h.jsx)(`button`,{type:`button`,className:p.helpIcon,onClick:()=>alert(`Help clicked!`),"aria-label":`Help`,children:(0,h.jsx)(i,{icon:`info`,size:`small`})})},children:[(0,h.jsx)(c.Description,{children:(0,h.jsx)(d,{})}),(0,h.jsx)(c.Select,{value:e,onValueChange:t,clearable:!0,options:[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`}],placeholder:`Select an option`})]})},play:async({canvasElement:e})=>{await S(e)}},k={render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsxs)(c,{status:`success`,label:`Input`,message:`This is a success caption under a select input.`,messageIcon:`check_circle`,children:[(0,h.jsx)(c.Description,{children:(0,h.jsx)(d,{})}),(0,h.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})]})},play:async({canvasElement:e})=>{await S(e)}},A={render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsxs)(c,{status:`error`,label:`Input`,message:`This is an error caption under a select input.`,messageIcon:`error`,children:[(0,h.jsx)(c.Description,{children:(0,h.jsx)(d,{})}),(0,h.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})]})},play:async({canvasElement:e})=>{await S(e)}},j={render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsxs)(c,{status:`warning`,label:`Input`,message:`This is a warning caption under a select input.`,messageIcon:`info`,children:[(0,h.jsx)(c.Description,{children:(0,h.jsx)(d,{})}),(0,h.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})]})},play:async({canvasElement:e})=>{await S(e)}},M={render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsxs)(c,{label:`Input`,children:[(0,h.jsx)(c.Description,{children:(0,h.jsx)(d,{})}),(0,h.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}],disabled:!0})]})},play:async({canvasElement:e})=>{await C(e)}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl label="Input" required={true} message="This is a message">
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl label="Input" required={true} style={{
      width: '300px'
    }}>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl label="Input" required={true} style={{
      width: '400px',
      padding: '16px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl label="Input" required={true} style={{
      width: '300px'
    }}>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl label="Input" required={true} slots={{
      endAdornment: <button type="button" className={styles.helpIcon} onClick={() => alert('Help clicked!')} aria-label="Help">
                            <DsIcon icon="info" size="small" />
                        </button>
    }}>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Select value={value} onValueChange={setValue} clearable options={[{
        value: 'option1',
        label: 'Option 1'
      }, {
        value: 'option2',
        label: 'Option 2'
      }, {
        value: 'option3',
        label: 'Option 3'
      }]} placeholder="Select an option" />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl status="success" label="Input" message="This is a success caption under a select input." messageIcon="check_circle">
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl status="error" label="Input" message="This is an error caption under a select input." messageIcon="error">
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl status="warning" label="Input" message="This is a warning caption under a select input." messageIcon="info">
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl label="Input">
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.Select placeholder="Select an option" value={value} onValueChange={setValue} clearable options={[{
        label: 'Option 1',
        value: 'option1',
        icon: 'download'
      }, {
        label: 'Option 2',
        value: 'option2',
        icon: 'save'
      }, {
        label: 'Option 3',
        value: 'option3',
        icon: 'description'
      }]} disabled />
            </DsFormControl>;
  },
  play: async ({
    canvasElement
  }) => {
    await checkDisabled(canvasElement);
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`WithCustomWidth`,`WithCustomStyles`,`WithDescription`,`WithHelpIcon`,`Success`,`Error`,`Warning`,`Disabled`]}))();export{w as Default,M as Disabled,A as Error,k as Success,j as Warning,E as WithCustomStyles,T as WithCustomWidth,D as WithDescription,O as WithHelpIcon,N as __namedExportsOrder,x as default};