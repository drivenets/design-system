import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-DVysNJuQ.js";import{n as r,t as i}from"./ds-button-v3-B2euxeVc.js";import{n as a,t as o}from"./ds-stack-Dy-M5AZb.js";import{n as s,t as c}from"./ds-form-control-Cw13I7Ya.js";import{n as l,t as u}from"./ds-form-control.types-CRY_JX1X.js";var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{l(),r(),a(),s(),d=t(),f=n(),p={title:`Components/FormControl/Select`,component:c,parameters:{layout:`centered`,docs:{description:{component:`Form control wrapper that adds a label, description, validation status, and message around a select.`}}},decorators:[e=>(0,f.jsx)(o,{width:`19rem`,children:(0,f.jsx)(e,{})})],argTypes:{status:{control:{type:`select`},options:u,description:`Form control color status`,table:{defaultValue:{summary:u[0]}}},label:{control:`text`,description:`Label for the form control`},required:{control:`boolean`,description:`Indicates if the field is required`},message:{control:`text`,description:`Message to display below the form control`},messageIcon:{control:`text`,description:`Icon to display in the message`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},m={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,d.useState)(``);return(0,f.jsx)(c,{label:`Input`,required:!0,message:`This is a message`,children:(0,f.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})})}},h={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,d.useState)(``);return(0,f.jsxs)(c,{label:`Input`,required:!0,children:[(0,f.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})]})}},g={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,d.useState)(``);return(0,f.jsxs)(c,{label:`Input`,required:!0,slots:{endAdornment:(0,f.jsx)(i,{variant:`tertiary`,size:`small`,icon:`info`,"aria-label":`Help`})},children:[(0,f.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(c.Select,{value:e,onValueChange:t,clearable:!0,options:[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`}],placeholder:`Select an option`})]})}},_={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,d.useState)(``);return(0,f.jsxs)(c,{status:`success`,label:`Input`,message:`This is a success caption under a select input.`,messageIcon:`check_circle`,children:[(0,f.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})]})}},v={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,d.useState)(``);return(0,f.jsxs)(c,{status:`error`,label:`Input`,message:`This is an error caption under a select input.`,messageIcon:`error`,children:[(0,f.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})]})}},y={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,d.useState)(``);return(0,f.jsxs)(c,{status:`warning`,label:`Input`,message:`This is a warning caption under a select input.`,messageIcon:`info`,children:[(0,f.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})]})}},b={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,d.useState)(``);return(0,f.jsxs)(c,{label:`Input`,children:[(0,f.jsx)(c.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,f.jsx)(c.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}],disabled:!0})]})}},x=[`Default`,`WithDescription`,`WithHelpIcon`,`Success`,`Error`,`Warning`,`Disabled`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
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
  }
}`,...m.parameters?.docs?.source},description:{story:`Baseline clearable select with a label, required marker, and a helper message.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl label="Input" required={true}>
                <DsFormControl.Description>
                    Optional helper text that describes the field in up to two lines.
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
  }
}`,...h.parameters?.docs?.source},description:{story:`Adds a description above the select to explain the field before the user chooses.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl label="Input" required={true} slots={{
      endAdornment: <DsButtonV3 variant="tertiary" size="small" icon="info" aria-label="Help" />
    }}>
                <DsFormControl.Description>
                    Optional helper text that describes the field in up to two lines.
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
  }
}`,...g.parameters?.docs?.source},description:{story:`Surfaces contextual help through an end-adornment button beside the field.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl status="success" label="Input" message="This is a success caption under a select input." messageIcon="check_circle">
                <DsFormControl.Description>
                    Optional helper text that describes the field in up to two lines.
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
  }
}`,..._.parameters?.docs?.source},description:{story:`Success status confirms the chosen value passed validation.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl status="error" label="Input" message="This is an error caption under a select input." messageIcon="error">
                <DsFormControl.Description>
                    Optional helper text that describes the field in up to two lines.
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
  }
}`,...v.parameters?.docs?.source},description:{story:`Error status flags an invalid choice and pairs the message with an error icon.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl status="warning" label="Input" message="This is a warning caption under a select input." messageIcon="info">
                <DsFormControl.Description>
                    Optional helper text that describes the field in up to two lines.
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
  }
}`,...y.parameters?.docs?.source},description:{story:`Warning status highlights a choice that needs attention without blocking submission.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsFormControl label="Input">
                <DsFormControl.Description>
                    Optional helper text that describes the field in up to two lines.
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
  }
}`,...b.parameters?.docs?.source},description:{story:`Disabled state prevents opening the dropdown while keeping the field visible.`,...b.parameters?.docs?.description}}}})))()}S();export{m as Default,b as Disabled,v as Error,_ as Success,y as Warning,h as WithDescription,g as WithHelpIcon,x as __namedExportsOrder,p as default};