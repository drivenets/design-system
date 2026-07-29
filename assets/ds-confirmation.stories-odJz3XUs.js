import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{t as i}from"./compiler-runtime-Ct8J1Lnh.js";import{n as a,t as o}from"./ds-button-Cql27HAi.js";import{t as s}from"./ds-modal-CpY5jpQu.js";import{t as c}from"./ds-modal-BOfi4SLi.js";var l,u,d,f,p=t((()=>{l=i(),c(),u=r(),d=e=>{let t=(0,l.c)(2),n;return t[0]===e?n=t[1]:(n=(0,u.jsx)(s,{columns:4,closeOnEscape:!0,closeOnInteractOutside:!0,...e}),t[0]=e,t[1]=n),n},f=Object.assign(d,{displayName:`DsConfirmation`,Header:s.Header,Title:s.Title,CloseTrigger:s.CloseTrigger,Body:s.Body,Footer:s.Footer,Actions:s.Actions})})),m,h,g,_,v,y,b=t((()=>{m=`_customBodyContainer_1i6r5_1`,h=`_customBodyText_1i6r5_7`,g=`_radioGroup_1i6r5_12`,_=`_radioLabel_1i6r5_18`,v=`_infoNote_1i6r5_25`,y={customBodyContainer:m,customBodyText:h,radioGroup:g,radioLabel:_,infoNote:v}})),x,S,C,w,T,E,D,O;t((()=>{x=e(n(),1),p(),o(),b(),S=r(),C={title:`Components/Confirmation (Deprecated)`,component:f,tags:[`deprecated`],parameters:{layout:`centered`,docs:{description:{component:`@deprecated This component is deprecated. Use DsModal instead.
@see {@link ../ds-modal/ds-modal.stories} for examples of the replacement component.`}}},argTypes:{open:{control:{type:`boolean`}}}},w={render:function(){let[e,t]=(0,x.useState)(!1);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{onClick:()=>t(!0),children:`Open Confirmation`}),(0,S.jsxs)(f,{open:e,onOpenChange:t,children:[(0,S.jsxs)(f.Header,{children:[(0,S.jsx)(f.Title,{children:`Confirm Action`}),(0,S.jsx)(f.CloseTrigger,{})]}),(0,S.jsx)(f.Body,{children:`Are you sure you want to proceed with this action?`}),(0,S.jsx)(f.Footer,{children:(0,S.jsxs)(f.Actions,{children:[(0,S.jsx)(a,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>{console.log(`Reject clicked`),t(!1)},children:`No`}),(0,S.jsx)(a,{design:`v1.2`,variant:`filled`,size:`large`,onClick:()=>{console.log(`Accept clicked`),t(!1)},children:`Yes`})]})})]})]})}},T={render:function(){let[e,t]=(0,x.useState)(!1);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{onClick:()=>t(!0),children:`Open Confirmation`}),(0,S.jsxs)(f,{open:e,onOpenChange:t,children:[(0,S.jsxs)(f.Header,{children:[(0,S.jsx)(f.Title,{children:`Save Changes`}),(0,S.jsx)(f.CloseTrigger,{})]}),(0,S.jsx)(f.Body,{children:`Do you want to save your changes before closing?`}),(0,S.jsxs)(f.Footer,{children:[(0,S.jsx)(a,{design:`v1.2`,buttonType:`tertiary`,size:`large`,onClick:()=>{console.log(`Cancel clicked`),t(!1)},children:`Cancel`}),(0,S.jsxs)(f.Actions,{children:[(0,S.jsx)(a,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>{console.log(`Discard clicked`),t(!1)},children:`Discard`}),(0,S.jsx)(a,{design:`v1.2`,variant:`filled`,size:`large`,onClick:()=>{console.log(`Save clicked`),t(!1)},children:`Save`})]})]})]})]})}},E={render:function(){let[e,t]=(0,x.useState)(!1);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{onClick:()=>t(!0),children:`Open Confirmation`}),(0,S.jsxs)(f,{open:e,onOpenChange:t,children:[(0,S.jsxs)(f.Header,{children:[(0,S.jsx)(f.Title,{children:`Delete Item`}),(0,S.jsx)(f.CloseTrigger,{})]}),(0,S.jsx)(f.Body,{children:`Are you sure you want to delete this item? This action cannot be undone.`}),(0,S.jsx)(f.Footer,{children:(0,S.jsxs)(f.Actions,{children:[(0,S.jsx)(a,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>{console.log(`Cancel clicked`),t(!1)},children:`Cancel`}),(0,S.jsx)(a,{design:`v1.2`,variant:`danger`,size:`large`,onClick:()=>{console.log(`Delete clicked`),t(!1)},children:`Delete`})]})})]})]})}},D={render:function(){let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)(`option1`);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{onClick:()=>t(!0),children:`Open Custom Confirmation`}),(0,S.jsxs)(f,{style:{maxBlockSize:`none`},open:e,onOpenChange:t,children:[(0,S.jsxs)(f.Header,{children:[(0,S.jsx)(f.Title,{children:`Advanced Configuration`}),(0,S.jsx)(f.CloseTrigger,{})]}),(0,S.jsx)(f.Body,{children:(0,S.jsxs)(`div`,{className:y.customBodyContainer,children:[(0,S.jsx)(`p`,{className:y.customBodyText,children:`Please select your preferred configuration option:`}),(0,S.jsxs)(`div`,{className:y.radioGroup,children:[(0,S.jsxs)(`label`,{className:y.radioLabel,children:[(0,S.jsx)(`input`,{type:`radio`,name:`config-option`,value:`option1`,checked:n===`option1`,onChange:e=>r(e.target.value)}),(0,S.jsx)(`span`,{children:`Standard configuration (recommended)`})]}),(0,S.jsxs)(`label`,{className:y.radioLabel,children:[(0,S.jsx)(`input`,{type:`radio`,name:`config-option`,value:`option2`,checked:n===`option2`,onChange:e=>r(e.target.value)}),(0,S.jsx)(`span`,{children:`Advanced configuration with custom settings`})]}),(0,S.jsxs)(`label`,{className:y.radioLabel,children:[(0,S.jsx)(`input`,{type:`radio`,name:`config-option`,value:`option3`,checked:n===`option3`,onChange:e=>r(e.target.value)}),(0,S.jsx)(`span`,{children:`Custom configuration (manual setup)`})]})]}),(0,S.jsxs)(`div`,{className:y.infoNote,children:[(0,S.jsx)(`strong`,{children:`Note:`}),` This action will apply the selected configuration to your current project. You can change this setting later in the project settings.`]})]})}),(0,S.jsx)(f.Footer,{children:(0,S.jsxs)(f.Actions,{children:[(0,S.jsx)(a,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>{console.log(`Cancel clicked`),t(!1)},children:`Cancel`}),(0,S.jsx)(a,{design:`v1.2`,variant:`filled`,size:`large`,onClick:()=>{console.log(`Apply configuration:`,n),t(!1)},children:`Apply Configuration`})]})})]})]})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithCancel`,`Danger`,`CustomBody`]}))();export{D as CustomBody,E as Danger,w as Default,T as WithCancel,O as __namedExportsOrder,C as default};