import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-DSOa6nM1.js";import{D as r}from"./ds-modal-Cp6Zmcv3.js";import{D as t}from"./ds-button-LnGFio4X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BHaAWc2i.js";import"./ds-icon-BqmpEYGk.js";import"./ds-typography-C3l6pf2e.js";import"./index-D1fy_H2L.js";import"./index-CtuBjrKn.js";import"./portal-POY3b3h9.js";import"./create-split-props-u5h9OPvL.js";import"./index-CpZRjNKo.js";import"./index-BP5134m1.js";import"./index-D8UHqSRO.js";import"./use-locale-context-DlItVB4K.js";import"./dialog-title-CbQg1eze.js";import"./render-strategy-LM24PPjr.js";import"./use-presence-BeqnJczV.js";import"./index-DCeGkY33.js";import"./ds-button-legacy-hEidFb1r.js";import"./ds-button-new-CbWiQxOW.js";const n=a=>e.jsx(r,{columns:4,closeOnEscape:!0,closeOnInteractOutside:!0,...a});n.Header=r.Header;n.Title=r.Title;n.CloseTrigger=r.CloseTrigger;n.Body=r.Body;n.Footer=r.Footer;n.Actions=r.Actions;n.__docgenInfo={description:`@deprecated DsConfirmation is deprecated. Use DsModal instead.
@see {@link ../ds-modal} for the replacement component.`,methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null},{name:"Title",docblock:null,modifiers:["static"],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null},{name:"CloseTrigger",docblock:null,modifiers:["static"],params:[{name:"{ style, className }: { style?: CSSProperties; className?: string }",optional:!1,type:{name:"signature",type:"object",raw:"{ style?: CSSProperties; className?: string }",signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}}]}}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null},{name:"Actions",docblock:null,modifiers:["static"],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null}],displayName:"DsConfirmation",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:`Callback when modal open state changes
@param open - whether the modal is open`},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional CSS styles"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name"},children:{required:!0,tsType:{name:"ReactNode"},description:"Modal body content"}}};const C="_customBodyContainer_2kve2_1",y="_customBodyText_2kve2_7",h="_radioGroup_2kve2_12",D="_radioLabel_2kve2_18",v="_infoNote_2kve2_25",i={customBodyContainer:C,customBodyText:y,radioGroup:h,radioLabel:D,infoNote:v},M={title:"Design System/Confirmation (Deprecated)",component:n,parameters:{layout:"centered",docs:{description:{component:`@deprecated This component is deprecated. Use DsModal instead.
@see {@link ../ds-modal/ds-modal.stories} for examples of the replacement component.`}}},argTypes:{open:{control:{type:"boolean"}}}},p={render:function(){const[s,o]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),children:"Open Confirmation"}),e.jsxs(n,{open:s,onOpenChange:o,children:[e.jsxs(n.Header,{children:[e.jsx(n.Title,{children:"Confirm Action"}),e.jsx(n.CloseTrigger,{})]}),e.jsx(n.Body,{children:"Are you sure you want to proceed with this action?"}),e.jsx(n.Footer,{children:e.jsxs(n.Actions,{children:[e.jsx(t,{design:"v1.2",buttonType:"secondary",size:"large",onClick:()=>{console.log("Reject clicked"),o(!1)},children:"No"}),e.jsx(t,{design:"v1.2",variant:"filled",size:"large",onClick:()=>{console.log("Accept clicked"),o(!1)},children:"Yes"})]})})]})]})}},m={render:function(){const[s,o]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),children:"Open Confirmation"}),e.jsxs(n,{open:s,onOpenChange:o,children:[e.jsxs(n.Header,{children:[e.jsx(n.Title,{children:"Save Changes"}),e.jsx(n.CloseTrigger,{})]}),e.jsx(n.Body,{children:"Do you want to save your changes before closing?"}),e.jsxs(n.Footer,{children:[e.jsx(t,{design:"v1.2",buttonType:"tertiary",size:"large",onClick:()=>{console.log("Cancel clicked"),o(!1)},children:"Cancel"}),e.jsxs(n.Actions,{children:[e.jsx(t,{design:"v1.2",buttonType:"secondary",size:"large",onClick:()=>{console.log("Discard clicked"),o(!1)},children:"Discard"}),e.jsx(t,{design:"v1.2",variant:"filled",size:"large",onClick:()=>{console.log("Save clicked"),o(!1)},children:"Save"})]})]})]})]})}},u={render:function(){const[s,o]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),children:"Open Confirmation"}),e.jsxs(n,{open:s,onOpenChange:o,children:[e.jsxs(n.Header,{children:[e.jsx(n.Title,{children:"Delete Item"}),e.jsx(n.CloseTrigger,{})]}),e.jsx(n.Body,{children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsx(n.Footer,{children:e.jsxs(n.Actions,{children:[e.jsx(t,{design:"v1.2",buttonType:"secondary",size:"large",onClick:()=>{console.log("Cancel clicked"),o(!1)},children:"Cancel"}),e.jsx(t,{design:"v1.2",variant:"danger",size:"large",onClick:()=>{console.log("Delete clicked"),o(!1)},children:"Delete"})]})})]})]})}},g={render:function(){const[s,o]=c.useState(!1),[d,f]=c.useState("option1");return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),children:"Open Custom Confirmation"}),e.jsxs(n,{style:{maxBlockSize:"none"},open:s,onOpenChange:o,children:[e.jsxs(n.Header,{children:[e.jsx(n.Title,{children:"Advanced Configuration"}),e.jsx(n.CloseTrigger,{})]}),e.jsx(n.Body,{children:e.jsxs("div",{className:i.customBodyContainer,children:[e.jsx("p",{className:i.customBodyText,children:"Please select your preferred configuration option:"}),e.jsxs("div",{className:i.radioGroup,children:[e.jsxs("label",{className:i.radioLabel,children:[e.jsx("input",{type:"radio",name:"config-option",value:"option1",checked:d==="option1",onChange:l=>f(l.target.value)}),e.jsx("span",{children:"Standard configuration (recommended)"})]}),e.jsxs("label",{className:i.radioLabel,children:[e.jsx("input",{type:"radio",name:"config-option",value:"option2",checked:d==="option2",onChange:l=>f(l.target.value)}),e.jsx("span",{children:"Advanced configuration with custom settings"})]}),e.jsxs("label",{className:i.radioLabel,children:[e.jsx("input",{type:"radio",name:"config-option",value:"option3",checked:d==="option3",onChange:l=>f(l.target.value)}),e.jsx("span",{children:"Custom configuration (manual setup)"})]})]}),e.jsxs("div",{className:i.infoNote,children:[e.jsx("strong",{children:"Note:"})," This action will apply the selected configuration to your current project. You can change this setting later in the project settings."]})]})}),e.jsx(n.Footer,{children:e.jsxs(n.Actions,{children:[e.jsx(t,{design:"v1.2",buttonType:"secondary",size:"large",onClick:()=>{console.log("Cancel clicked"),o(!1)},children:"Cancel"}),e.jsx(t,{design:"v1.2",variant:"filled",size:"large",onClick:()=>{console.log("Apply configuration:",d),o(!1)},children:"Apply Configuration"})]})})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <>
                <DsButton onClick={() => setOpen(true)}>Open Confirmation</DsButton>
                <DsConfirmation open={open} onOpenChange={setOpen}>
                    <DsConfirmation.Header>
                        <DsConfirmation.Title>Confirm Action</DsConfirmation.Title>
                        <DsConfirmation.CloseTrigger />
                    </DsConfirmation.Header>
                    <DsConfirmation.Body>Are you sure you want to proceed with this action?</DsConfirmation.Body>
                    <DsConfirmation.Footer>
                        <DsConfirmation.Actions>
                            <DsButton design="v1.2" buttonType="secondary" size="large" onClick={() => {
              console.log('Reject clicked');
              setOpen(false);
            }}>
                                No
                            </DsButton>
                            <DsButton design="v1.2" variant="filled" size="large" onClick={() => {
              console.log('Accept clicked');
              setOpen(false);
            }}>
                                Yes
                            </DsButton>
                        </DsConfirmation.Actions>
                    </DsConfirmation.Footer>
                </DsConfirmation>
            </>;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <>
                <DsButton onClick={() => setOpen(true)}>Open Confirmation</DsButton>
                <DsConfirmation open={open} onOpenChange={setOpen}>
                    <DsConfirmation.Header>
                        <DsConfirmation.Title>Save Changes</DsConfirmation.Title>
                        <DsConfirmation.CloseTrigger />
                    </DsConfirmation.Header>
                    <DsConfirmation.Body>Do you want to save your changes before closing?</DsConfirmation.Body>
                    <DsConfirmation.Footer>
                        <DsButton design="v1.2" buttonType="tertiary" size="large" onClick={() => {
            console.log('Cancel clicked');
            setOpen(false);
          }}>
                            Cancel
                        </DsButton>
                        <DsConfirmation.Actions>
                            <DsButton design="v1.2" buttonType="secondary" size="large" onClick={() => {
              console.log('Discard clicked');
              setOpen(false);
            }}>
                                Discard
                            </DsButton>
                            <DsButton design="v1.2" variant="filled" size="large" onClick={() => {
              console.log('Save clicked');
              setOpen(false);
            }}>
                                Save
                            </DsButton>
                        </DsConfirmation.Actions>
                    </DsConfirmation.Footer>
                </DsConfirmation>
            </>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <>
                <DsButton onClick={() => setOpen(true)}>Open Confirmation</DsButton>
                <DsConfirmation open={open} onOpenChange={setOpen}>
                    <DsConfirmation.Header>
                        <DsConfirmation.Title>Delete Item</DsConfirmation.Title>
                        <DsConfirmation.CloseTrigger />
                    </DsConfirmation.Header>
                    <DsConfirmation.Body>
                        Are you sure you want to delete this item? This action cannot be undone.
                    </DsConfirmation.Body>
                    <DsConfirmation.Footer>
                        <DsConfirmation.Actions>
                            <DsButton design="v1.2" buttonType="secondary" size="large" onClick={() => {
              console.log('Cancel clicked');
              setOpen(false);
            }}>
                                Cancel
                            </DsButton>
                            <DsButton design="v1.2" variant="danger" size="large" onClick={() => {
              console.log('Delete clicked');
              setOpen(false);
            }}>
                                Delete
                            </DsButton>
                        </DsConfirmation.Actions>
                    </DsConfirmation.Footer>
                </DsConfirmation>
            </>;
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('option1');
    return <>
                <DsButton onClick={() => setOpen(true)}>Open Custom Confirmation</DsButton>
                <DsConfirmation style={{
        maxBlockSize: 'none'
      }} open={open} onOpenChange={setOpen}>
                    <DsConfirmation.Header>
                        <DsConfirmation.Title>Advanced Configuration</DsConfirmation.Title>
                        <DsConfirmation.CloseTrigger />
                    </DsConfirmation.Header>
                    <DsConfirmation.Body>
                        <div className={styles.customBodyContainer}>
                            <p className={styles.customBodyText}>Please select your preferred configuration option:</p>
                            <div className={styles.radioGroup}>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="config-option" value="option1" checked={selectedOption === 'option1'} onChange={e => setSelectedOption(e.target.value)} />
                                    <span>Standard configuration (recommended)</span>
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="config-option" value="option2" checked={selectedOption === 'option2'} onChange={e => setSelectedOption(e.target.value)} />
                                    <span>Advanced configuration with custom settings</span>
                                </label>
                                <label className={styles.radioLabel}>
                                    <input type="radio" name="config-option" value="option3" checked={selectedOption === 'option3'} onChange={e => setSelectedOption(e.target.value)} />
                                    <span>Custom configuration (manual setup)</span>
                                </label>
                            </div>
                            <div className={styles.infoNote}>
                                <strong>Note:</strong> This action will apply the selected configuration to your current
                                project. You can change this setting later in the project settings.
                            </div>
                        </div>
                    </DsConfirmation.Body>
                    <DsConfirmation.Footer>
                        <DsConfirmation.Actions>
                            <DsButton design="v1.2" buttonType="secondary" size="large" onClick={() => {
              console.log('Cancel clicked');
              setOpen(false);
            }}>
                                Cancel
                            </DsButton>
                            <DsButton design="v1.2" variant="filled" size="large" onClick={() => {
              console.log('Apply configuration:', selectedOption);
              setOpen(false);
            }}>
                                Apply Configuration
                            </DsButton>
                        </DsConfirmation.Actions>
                    </DsConfirmation.Footer>
                </DsConfirmation>
            </>;
  }
}`,...g.parameters?.docs?.source}}};const Y=["Default","WithCancel","Danger","CustomBody"];export{g as CustomBody,u as Danger,p as Default,m as WithCancel,Y as __namedExportsOrder,M as default};
