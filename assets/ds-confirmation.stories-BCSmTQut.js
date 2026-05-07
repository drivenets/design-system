import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-vTeSIeRQ.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./compiler-runtime-By_6jJKs.js";import{n as a,t as o}from"./ds-button-BQuzUuBT.js";import{t as s}from"./ds-modal-Dc3h6SVY.js";import{t as c}from"./ds-modal-IA3P5wer.js";var l,u,d,f=t((()=>{l=i(),c(),u=r(),d=e=>{let t=(0,l.c)(2),n;return t[0]===e?n=t[1]:(n=(0,u.jsx)(s,{columns:4,closeOnEscape:!0,closeOnInteractOutside:!0,...e}),t[0]=e,t[1]=n),n},d.Header=s.Header,d.Title=s.Title,d.CloseTrigger=s.CloseTrigger,d.Body=s.Body,d.Footer=s.Footer,d.Actions=s.Actions})),p,m,h,g,_,v,y=t((()=>{p=`_customBodyContainer_1i6r5_1`,m=`_customBodyText_1i6r5_7`,h=`_radioGroup_1i6r5_12`,g=`_radioLabel_1i6r5_18`,_=`_infoNote_1i6r5_25`,v={customBodyContainer:p,customBodyText:m,radioGroup:h,radioLabel:g,infoNote:_}})),b,x,S,C,w,T,E,D;t((()=>{b=e(n(),1),f(),o(),y(),x=r(),S={title:`Components/Confirmation (Deprecated)`,component:d,tags:[`deprecated`],parameters:{layout:`centered`,docs:{description:{component:`@deprecated This component is deprecated. Use DsModal instead.
@see {@link ../ds-modal/ds-modal.stories} for examples of the replacement component.`}}},argTypes:{open:{control:{type:`boolean`}}}},C={render:function(){let[e,t]=(0,b.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a,{onClick:()=>t(!0),children:`Open Confirmation`}),(0,x.jsxs)(d,{open:e,onOpenChange:t,children:[(0,x.jsxs)(d.Header,{children:[(0,x.jsx)(d.Title,{children:`Confirm Action`}),(0,x.jsx)(d.CloseTrigger,{})]}),(0,x.jsx)(d.Body,{children:`Are you sure you want to proceed with this action?`}),(0,x.jsx)(d.Footer,{children:(0,x.jsxs)(d.Actions,{children:[(0,x.jsx)(a,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>{console.log(`Reject clicked`),t(!1)},children:`No`}),(0,x.jsx)(a,{design:`v1.2`,variant:`filled`,size:`large`,onClick:()=>{console.log(`Accept clicked`),t(!1)},children:`Yes`})]})})]})]})}},w={render:function(){let[e,t]=(0,b.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a,{onClick:()=>t(!0),children:`Open Confirmation`}),(0,x.jsxs)(d,{open:e,onOpenChange:t,children:[(0,x.jsxs)(d.Header,{children:[(0,x.jsx)(d.Title,{children:`Save Changes`}),(0,x.jsx)(d.CloseTrigger,{})]}),(0,x.jsx)(d.Body,{children:`Do you want to save your changes before closing?`}),(0,x.jsxs)(d.Footer,{children:[(0,x.jsx)(a,{design:`v1.2`,buttonType:`tertiary`,size:`large`,onClick:()=>{console.log(`Cancel clicked`),t(!1)},children:`Cancel`}),(0,x.jsxs)(d.Actions,{children:[(0,x.jsx)(a,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>{console.log(`Discard clicked`),t(!1)},children:`Discard`}),(0,x.jsx)(a,{design:`v1.2`,variant:`filled`,size:`large`,onClick:()=>{console.log(`Save clicked`),t(!1)},children:`Save`})]})]})]})]})}},T={render:function(){let[e,t]=(0,b.useState)(!1);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a,{onClick:()=>t(!0),children:`Open Confirmation`}),(0,x.jsxs)(d,{open:e,onOpenChange:t,children:[(0,x.jsxs)(d.Header,{children:[(0,x.jsx)(d.Title,{children:`Delete Item`}),(0,x.jsx)(d.CloseTrigger,{})]}),(0,x.jsx)(d.Body,{children:`Are you sure you want to delete this item? This action cannot be undone.`}),(0,x.jsx)(d.Footer,{children:(0,x.jsxs)(d.Actions,{children:[(0,x.jsx)(a,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>{console.log(`Cancel clicked`),t(!1)},children:`Cancel`}),(0,x.jsx)(a,{design:`v1.2`,variant:`danger`,size:`large`,onClick:()=>{console.log(`Delete clicked`),t(!1)},children:`Delete`})]})})]})]})}},E={render:function(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(`option1`);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a,{onClick:()=>t(!0),children:`Open Custom Confirmation`}),(0,x.jsxs)(d,{style:{maxBlockSize:`none`},open:e,onOpenChange:t,children:[(0,x.jsxs)(d.Header,{children:[(0,x.jsx)(d.Title,{children:`Advanced Configuration`}),(0,x.jsx)(d.CloseTrigger,{})]}),(0,x.jsx)(d.Body,{children:(0,x.jsxs)(`div`,{className:v.customBodyContainer,children:[(0,x.jsx)(`p`,{className:v.customBodyText,children:`Please select your preferred configuration option:`}),(0,x.jsxs)(`div`,{className:v.radioGroup,children:[(0,x.jsxs)(`label`,{className:v.radioLabel,children:[(0,x.jsx)(`input`,{type:`radio`,name:`config-option`,value:`option1`,checked:n===`option1`,onChange:e=>r(e.target.value)}),(0,x.jsx)(`span`,{children:`Standard configuration (recommended)`})]}),(0,x.jsxs)(`label`,{className:v.radioLabel,children:[(0,x.jsx)(`input`,{type:`radio`,name:`config-option`,value:`option2`,checked:n===`option2`,onChange:e=>r(e.target.value)}),(0,x.jsx)(`span`,{children:`Advanced configuration with custom settings`})]}),(0,x.jsxs)(`label`,{className:v.radioLabel,children:[(0,x.jsx)(`input`,{type:`radio`,name:`config-option`,value:`option3`,checked:n===`option3`,onChange:e=>r(e.target.value)}),(0,x.jsx)(`span`,{children:`Custom configuration (manual setup)`})]})]}),(0,x.jsxs)(`div`,{className:v.infoNote,children:[(0,x.jsx)(`strong`,{children:`Note:`}),` This action will apply the selected configuration to your current project. You can change this setting later in the project settings.`]})]})}),(0,x.jsx)(d.Footer,{children:(0,x.jsxs)(d.Actions,{children:[(0,x.jsx)(a,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>{console.log(`Cancel clicked`),t(!1)},children:`Cancel`}),(0,x.jsx)(a,{design:`v1.2`,variant:`filled`,size:`large`,onClick:()=>{console.log(`Apply configuration:`,n),t(!1)},children:`Apply Configuration`})]})})]})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithCancel`,`Danger`,`CustomBody`]}))();export{E as CustomBody,T as Danger,C as Default,w as WithCancel,D as __namedExportsOrder,S as default};