import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-button-v3-BnV8s8Ko.js";import{n as o,t as s}from"./ds-stack-GU0hZWeR.js";import{i as c,n as l,r as u,t as d}from"./ds-form-control.types-N_Ak9LFl.js";var f,p,m,h,g,_,v,y,b,x,S;t((()=>{l(),i(),o(),c(),f=e(n(),1),p=r(),m={title:`Components/FormControl/Select`,component:u,parameters:{layout:`centered`,docs:{description:{component:`Form control wrapper that adds a label, description, validation status, and message around a select.`}}},decorators:[e=>(0,p.jsx)(s,{width:`19rem`,children:(0,p.jsx)(e,{})})],argTypes:{status:{control:{type:`select`},options:d,description:`Form control color status`,table:{defaultValue:{summary:d[0]}}},label:{control:`text`,description:`Label for the form control`},required:{control:`boolean`,description:`Indicates if the field is required`},message:{control:`text`,description:`Message to display below the form control`},messageIcon:{control:`text`,description:`Icon to display in the message`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},h={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)(``);return(0,p.jsx)(u,{label:`Input`,required:!0,message:`This is a message`,children:(0,p.jsx)(u.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})})}},g={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)(``);return(0,p.jsxs)(u,{label:`Input`,required:!0,children:[(0,p.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,p.jsx)(u.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})]})}},_={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)(``);return(0,p.jsxs)(u,{label:`Input`,required:!0,slots:{endAdornment:(0,p.jsx)(a,{variant:`tertiary`,size:`small`,icon:`info`,"aria-label":`Help`})},children:[(0,p.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,p.jsx)(u.Select,{value:e,onValueChange:t,clearable:!0,options:[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`}],placeholder:`Select an option`})]})}},v={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)(``);return(0,p.jsxs)(u,{status:`success`,label:`Input`,message:`This is a success caption under a select input.`,messageIcon:`check_circle`,children:[(0,p.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,p.jsx)(u.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})]})}},y={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)(``);return(0,p.jsxs)(u,{status:`error`,label:`Input`,message:`This is an error caption under a select input.`,messageIcon:`error`,children:[(0,p.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,p.jsx)(u.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})]})}},b={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)(``);return(0,p.jsxs)(u,{status:`warning`,label:`Input`,message:`This is a warning caption under a select input.`,messageIcon:`info`,children:[(0,p.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,p.jsx)(u.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}]})]})}},x={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)(``);return(0,p.jsxs)(u,{label:`Input`,children:[(0,p.jsx)(u.Description,{children:`Optional helper text that describes the field in up to two lines.`}),(0,p.jsx)(u.Select,{placeholder:`Select an option`,value:e,onValueChange:t,clearable:!0,options:[{label:`Option 1`,value:`option1`,icon:`download`},{label:`Option 2`,value:`option2`,icon:`save`},{label:`Option 3`,value:`option3`,icon:`description`}],disabled:!0})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Baseline clearable select with a label, required marker, and a helper message.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Adds a description above the select to explain the field before the user chooses.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Surfaces contextual help through an end-adornment button beside the field.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Success status confirms the chosen value passed validation.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Error status flags an invalid choice and pairs the message with an error icon.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Warning status highlights a choice that needs attention without blocking submission.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Disabled state prevents opening the dropdown while keeping the field visible.`,...x.parameters?.docs?.description}}},S=[`Default`,`WithDescription`,`WithHelpIcon`,`Success`,`Error`,`Warning`,`Disabled`]}))();export{h as Default,x as Disabled,y as Error,v as Success,b as Warning,g as WithDescription,_ as WithHelpIcon,S as __namedExportsOrder,m as default};