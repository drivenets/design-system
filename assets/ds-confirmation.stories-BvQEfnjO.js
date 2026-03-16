import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BtUy5DzV.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{n as i,t as a}from"./ds-button-DwJBDRHG.js";import{t as o}from"./ds-modal-BaE-oGTq.js";import{t as s}from"./ds-modal-DluLTQUT.js";var c,l,u=t((()=>{s(),c=r(),l=e=>(0,c.jsx)(o,{columns:4,closeOnEscape:!0,closeOnInteractOutside:!0,...e}),l.Header=o.Header,l.Title=o.Title,l.CloseTrigger=o.CloseTrigger,l.Body=o.Body,l.Footer=o.Footer,l.Actions=o.Actions,l.__docgenInfo={description:`@deprecated DsConfirmation is deprecated. Use DsModal instead.
@see {@link ../ds-modal} for the replacement component.`,methods:[{name:`Header`,docblock:null,modifiers:[`static`],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:`signature`,type:`object`,raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:`style`,value:{name:`CSSProperties`,required:!1}},{key:`className`,value:{name:`string`,required:!1}},{key:`children`,value:{name:`ReactNode`,required:!0}}]}}}],returns:null},{name:`Title`,docblock:null,modifiers:[`static`],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:`signature`,type:`object`,raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:`style`,value:{name:`CSSProperties`,required:!1}},{key:`className`,value:{name:`string`,required:!1}},{key:`children`,value:{name:`ReactNode`,required:!0}}]}}}],returns:null},{name:`CloseTrigger`,docblock:null,modifiers:[`static`],params:[{name:`{ style, className }: { style?: CSSProperties; className?: string }`,optional:!1,type:{name:`signature`,type:`object`,raw:`{ style?: CSSProperties; className?: string }`,signature:{properties:[{key:`style`,value:{name:`CSSProperties`,required:!1}},{key:`className`,value:{name:`string`,required:!1}}]}}}],returns:null},{name:`Body`,docblock:null,modifiers:[`static`],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:`signature`,type:`object`,raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:`style`,value:{name:`CSSProperties`,required:!1}},{key:`className`,value:{name:`string`,required:!1}},{key:`children`,value:{name:`ReactNode`,required:!0}}]}}}],returns:null},{name:`Footer`,docblock:null,modifiers:[`static`],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:`signature`,type:`object`,raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:`style`,value:{name:`CSSProperties`,required:!1}},{key:`className`,value:{name:`string`,required:!1}},{key:`children`,value:{name:`ReactNode`,required:!0}}]}}}],returns:null},{name:`Actions`,docblock:null,modifiers:[`static`],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:`signature`,type:`object`,raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:`style`,value:{name:`CSSProperties`,required:!1}},{key:`className`,value:{name:`string`,required:!1}},{key:`children`,value:{name:`ReactNode`,required:!0}}]}}}],returns:null}],displayName:`DsConfirmation`,props:{open:{required:!0,tsType:{name:`boolean`},description:`Whether the modal is open`},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:`Callback when modal open state changes
@param open - whether the modal is open`},style:{required:!1,tsType:{name:`CSSProperties`},description:`Additional CSS styles`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name`},children:{required:!0,tsType:{name:`ReactNode`},description:`Modal body content`}}}})),d,f,p,m,h,g,_=t((()=>{d=`_customBodyContainer_2kve2_1`,f=`_customBodyText_2kve2_7`,p=`_radioGroup_2kve2_12`,m=`_radioLabel_2kve2_18`,h=`_infoNote_2kve2_25`,g={customBodyContainer:d,customBodyText:f,radioGroup:p,radioLabel:m,infoNote:h}})),v,y,b,x,S,C,w,T;t((()=>{v=e(n(),1),u(),a(),_(),y=r(),b={title:`Design System/Confirmation (Deprecated)`,component:l,tags:[`deprecated`],parameters:{layout:`centered`,docs:{description:{component:`@deprecated This component is deprecated. Use DsModal instead.
@see {@link ../ds-modal/ds-modal.stories} for examples of the replacement component.`}}},argTypes:{open:{control:{type:`boolean`}}}},x={render:function(){let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{onClick:()=>t(!0),children:`Open Confirmation`}),(0,y.jsxs)(l,{open:e,onOpenChange:t,children:[(0,y.jsxs)(l.Header,{children:[(0,y.jsx)(l.Title,{children:`Confirm Action`}),(0,y.jsx)(l.CloseTrigger,{})]}),(0,y.jsx)(l.Body,{children:`Are you sure you want to proceed with this action?`}),(0,y.jsx)(l.Footer,{children:(0,y.jsxs)(l.Actions,{children:[(0,y.jsx)(i,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>{console.log(`Reject clicked`),t(!1)},children:`No`}),(0,y.jsx)(i,{design:`v1.2`,variant:`filled`,size:`large`,onClick:()=>{console.log(`Accept clicked`),t(!1)},children:`Yes`})]})})]})]})}},S={render:function(){let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{onClick:()=>t(!0),children:`Open Confirmation`}),(0,y.jsxs)(l,{open:e,onOpenChange:t,children:[(0,y.jsxs)(l.Header,{children:[(0,y.jsx)(l.Title,{children:`Save Changes`}),(0,y.jsx)(l.CloseTrigger,{})]}),(0,y.jsx)(l.Body,{children:`Do you want to save your changes before closing?`}),(0,y.jsxs)(l.Footer,{children:[(0,y.jsx)(i,{design:`v1.2`,buttonType:`tertiary`,size:`large`,onClick:()=>{console.log(`Cancel clicked`),t(!1)},children:`Cancel`}),(0,y.jsxs)(l.Actions,{children:[(0,y.jsx)(i,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>{console.log(`Discard clicked`),t(!1)},children:`Discard`}),(0,y.jsx)(i,{design:`v1.2`,variant:`filled`,size:`large`,onClick:()=>{console.log(`Save clicked`),t(!1)},children:`Save`})]})]})]})]})}},C={render:function(){let[e,t]=(0,v.useState)(!1);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{onClick:()=>t(!0),children:`Open Confirmation`}),(0,y.jsxs)(l,{open:e,onOpenChange:t,children:[(0,y.jsxs)(l.Header,{children:[(0,y.jsx)(l.Title,{children:`Delete Item`}),(0,y.jsx)(l.CloseTrigger,{})]}),(0,y.jsx)(l.Body,{children:`Are you sure you want to delete this item? This action cannot be undone.`}),(0,y.jsx)(l.Footer,{children:(0,y.jsxs)(l.Actions,{children:[(0,y.jsx)(i,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>{console.log(`Cancel clicked`),t(!1)},children:`Cancel`}),(0,y.jsx)(i,{design:`v1.2`,variant:`danger`,size:`large`,onClick:()=>{console.log(`Delete clicked`),t(!1)},children:`Delete`})]})})]})]})}},w={render:function(){let[e,t]=(0,v.useState)(!1),[n,r]=(0,v.useState)(`option1`);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i,{onClick:()=>t(!0),children:`Open Custom Confirmation`}),(0,y.jsxs)(l,{style:{maxBlockSize:`none`},open:e,onOpenChange:t,children:[(0,y.jsxs)(l.Header,{children:[(0,y.jsx)(l.Title,{children:`Advanced Configuration`}),(0,y.jsx)(l.CloseTrigger,{})]}),(0,y.jsx)(l.Body,{children:(0,y.jsxs)(`div`,{className:g.customBodyContainer,children:[(0,y.jsx)(`p`,{className:g.customBodyText,children:`Please select your preferred configuration option:`}),(0,y.jsxs)(`div`,{className:g.radioGroup,children:[(0,y.jsxs)(`label`,{className:g.radioLabel,children:[(0,y.jsx)(`input`,{type:`radio`,name:`config-option`,value:`option1`,checked:n===`option1`,onChange:e=>r(e.target.value)}),(0,y.jsx)(`span`,{children:`Standard configuration (recommended)`})]}),(0,y.jsxs)(`label`,{className:g.radioLabel,children:[(0,y.jsx)(`input`,{type:`radio`,name:`config-option`,value:`option2`,checked:n===`option2`,onChange:e=>r(e.target.value)}),(0,y.jsx)(`span`,{children:`Advanced configuration with custom settings`})]}),(0,y.jsxs)(`label`,{className:g.radioLabel,children:[(0,y.jsx)(`input`,{type:`radio`,name:`config-option`,value:`option3`,checked:n===`option3`,onChange:e=>r(e.target.value)}),(0,y.jsx)(`span`,{children:`Custom configuration (manual setup)`})]})]}),(0,y.jsxs)(`div`,{className:g.infoNote,children:[(0,y.jsx)(`strong`,{children:`Note:`}),` This action will apply the selected configuration to your current project. You can change this setting later in the project settings.`]})]})}),(0,y.jsx)(l.Footer,{children:(0,y.jsxs)(l.Actions,{children:[(0,y.jsx)(i,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>{console.log(`Cancel clicked`),t(!1)},children:`Cancel`}),(0,y.jsx)(i,{design:`v1.2`,variant:`filled`,size:`large`,onClick:()=>{console.log(`Apply configuration:`,n),t(!1)},children:`Apply Configuration`})]})})]})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithCancel`,`Danger`,`CustomBody`]}))();export{w as CustomBody,C as Danger,x as Default,S as WithCancel,T as __namedExportsOrder,b as default};