import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-RxI9bAYy.js";import{c as d}from"./index-BlcxGCkW.js";import{D as u}from"./ds-icon-BRUdx6bJ.js";import{D}from"./ds-typography-DYk-6nhB.js";import{P as v}from"./portal-CBB3-NF6.js";import{a as j,b as x,c as k,d as N,e as S,D as O}from"./dialog-title-DgLT6jjz.js";import{D as i}from"./ds-button-DQiwnNK1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Decedjlc.js";import"./index-DMghN3K2.js";import"./create-split-props-u5h9OPvL.js";import"./index-Bxh9dWS5.js";import"./index-gwzPaq3b.js";import"./index-CWucLLfh.js";import"./use-locale-context-DghkyWl0.js";import"./render-strategy-DW7kmbuQ.js";import"./use-presence-DRZhKhn3.js";import"./index-BxvCWgkP.js";import"./ds-button-legacy-q92oxbfe.js";import"./ds-button-new-D4SbnZH0.js";const B="_overlay_ctrjq_37",b="_modal_ctrjq_51",T="_content_ctrjq_70",_="_header_ctrjq_79",A="_footer_ctrjq_89",q="_actions_ctrjq_94",z="_title_ctrjq_101",R="_body_ctrjq_112",r={overlay:B,modal:b,content:T,header:_,footer:A,actions:q,title:z,body:R},n=({open:t,onOpenChange:s,style:o,className:c,children:m})=>{const a=h=>{s(h.open)};return e.jsx(j,{open:t,onOpenChange:a,modal:!0,closeOnEscape:!0,closeOnInteractOutside:!0,children:e.jsxs(v,{children:[e.jsx(x,{className:r.overlay}),e.jsx(k,{children:e.jsx(N,{className:d(r.modal,c),children:e.jsx("div",{style:o,className:r.content,children:m})})})]})})},P=({style:t,className:s,children:o})=>e.jsx("div",{style:t,className:d(r.header,s),children:o}),w=({style:t,className:s,children:o})=>e.jsx(S,{className:d(r.title,s),style:t,asChild:!0,children:e.jsx(D,{variant:"heading4",children:o})}),F=({style:t,className:s})=>e.jsx(O,{style:t,className:s,children:e.jsx(u,{icon:"close",size:"small"})}),H=({style:t,className:s,children:o})=>e.jsx("div",{style:t,className:d(r.body,s),children:o}),I=({style:t,className:s,children:o})=>e.jsx("div",{style:t,className:d(r.footer,s),children:o}),L=({style:t,className:s,children:o})=>e.jsx("div",{style:t,className:d(r.actions,s),children:o});n.Header=P;n.Title=w;n.CloseTrigger=F;n.Body=H;n.Footer=I;n.Actions=L;n.__docgenInfo={description:"Composable confirmation modal dialog.",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:`{
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
@param open - whether the modal is open`},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional CSS styles"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name"},children:{required:!0,tsType:{name:"ReactNode"},description:"Modal body content"}}};const G="_customBodyContainer_2kve2_1",E="_customBodyText_2kve2_7",Y="_radioGroup_2kve2_12",W="_radioLabel_2kve2_18",M="_infoNote_2kve2_25",l={customBodyContainer:G,customBodyText:E,radioGroup:Y,radioLabel:W,infoNote:M},ue={title:"Design System/Confirmation",component:n,parameters:{layout:"centered"},argTypes:{open:{control:{type:"boolean"}}}},g={render:function(){const[s,o]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>o(!0),children:"Open Confirmation"}),e.jsxs(n,{open:s,onOpenChange:o,children:[e.jsxs(n.Header,{children:[e.jsx(u,{style:{color:"var(--color-icon-information-secondary)"},icon:"info",size:"small"}),e.jsx(n.Title,{children:"Confirm Action"}),e.jsx(n.CloseTrigger,{})]}),e.jsx(n.Body,{children:"Are you sure you want to proceed with this action?"}),e.jsx(n.Footer,{children:e.jsxs(n.Actions,{children:[e.jsx(i,{design:"v1.2",buttonType:"secondary",size:"large",onClick:()=>{console.log("Reject clicked"),o(!1)},children:"No"}),e.jsx(i,{design:"v1.2",variant:"filled",size:"large",onClick:()=>{console.log("Accept clicked"),o(!1)},children:"Yes"})]})})]})]})}},f={render:function(){const[s,o]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>o(!0),children:"Open Confirmation"}),e.jsxs(n,{open:s,onOpenChange:o,children:[e.jsxs(n.Header,{children:[e.jsx(u,{style:{color:"var(--color-icon-warning)"},icon:"error",size:"small"}),e.jsx(n.Title,{children:"Save Changes"}),e.jsx(n.CloseTrigger,{})]}),e.jsx(n.Body,{children:"Do you want to save your changes before closing?"}),e.jsxs(n.Footer,{children:[e.jsx(i,{design:"v1.2",buttonType:"tertiary",size:"large",onClick:()=>{console.log("Cancel clicked"),o(!1)},children:"Cancel"}),e.jsxs(n.Actions,{children:[e.jsx(i,{design:"v1.2",buttonType:"secondary",size:"large",onClick:()=>{console.log("Discard clicked"),o(!1)},children:"Discard"}),e.jsx(i,{design:"v1.2",variant:"filled",size:"large",onClick:()=>{console.log("Save clicked"),o(!1)},children:"Save"})]})]})]})]})}},y={render:function(){const[s,o]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>o(!0),children:"Open Confirmation"}),e.jsxs(n,{open:s,onOpenChange:o,children:[e.jsxs(n.Header,{children:[e.jsx(u,{style:{color:"var(--color-icon-danger)"},icon:"cancel",size:"small"}),e.jsx(n.Title,{children:"Delete Item"}),e.jsx(n.CloseTrigger,{})]}),e.jsx(n.Body,{children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsx(n.Footer,{children:e.jsxs(n.Actions,{children:[e.jsx(i,{design:"v1.2",buttonType:"secondary",size:"large",onClick:()=>{console.log("Cancel clicked"),o(!1)},children:"Cancel"}),e.jsx(i,{design:"v1.2",variant:"danger",size:"large",onClick:()=>{console.log("Delete clicked"),o(!1)},children:"Delete"})]})})]})]})}},C={render:function(){const[s,o]=p.useState(!1),[c,m]=p.useState("option1");return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>o(!0),children:"Open Custom Confirmation"}),e.jsxs(n,{style:{maxBlockSize:"none"},open:s,onOpenChange:o,children:[e.jsxs(n.Header,{children:[e.jsx(u,{style:{color:"var(--color-icon-information-secondary)"},icon:"info",size:"small"}),e.jsx(n.Title,{children:"Advanced Configuration"}),e.jsx(n.CloseTrigger,{})]}),e.jsx(n.Body,{children:e.jsxs("div",{className:l.customBodyContainer,children:[e.jsx("p",{className:l.customBodyText,children:"Please select your preferred configuration option:"}),e.jsxs("div",{className:l.radioGroup,children:[e.jsxs("label",{className:l.radioLabel,children:[e.jsx("input",{type:"radio",name:"config-option",value:"option1",checked:c==="option1",onChange:a=>m(a.target.value)}),e.jsx("span",{children:"Standard configuration (recommended)"})]}),e.jsxs("label",{className:l.radioLabel,children:[e.jsx("input",{type:"radio",name:"config-option",value:"option2",checked:c==="option2",onChange:a=>m(a.target.value)}),e.jsx("span",{children:"Advanced configuration with custom settings"})]}),e.jsxs("label",{className:l.radioLabel,children:[e.jsx("input",{type:"radio",name:"config-option",value:"option3",checked:c==="option3",onChange:a=>m(a.target.value)}),e.jsx("span",{children:"Custom configuration (manual setup)"})]})]}),e.jsxs("div",{className:l.infoNote,children:[e.jsx("strong",{children:"Note:"})," This action will apply the selected configuration to your current project. You can change this setting later in the project settings."]})]})}),e.jsx(n.Footer,{children:e.jsxs(n.Actions,{children:[e.jsx(i,{design:"v1.2",buttonType:"secondary",size:"large",onClick:()=>{console.log("Cancel clicked"),o(!1)},children:"Cancel"}),e.jsx(i,{design:"v1.2",variant:"filled",size:"large",onClick:()=>{console.log("Apply configuration:",c),o(!1)},children:"Apply Configuration"})]})})]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <>
                <DsButton onClick={() => setOpen(true)}>Open Confirmation</DsButton>
                <DsConfirmation open={open} onOpenChange={setOpen}>
                    <DsConfirmation.Header>
                        <DsIcon style={{
            color: 'var(--color-icon-information-secondary)'
          }} icon="info" size="small" />
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <>
                <DsButton onClick={() => setOpen(true)}>Open Confirmation</DsButton>
                <DsConfirmation open={open} onOpenChange={setOpen}>
                    <DsConfirmation.Header>
                        <DsIcon style={{
            color: 'var(--color-icon-warning)'
          }} icon="error" size="small" />
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
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <>
                <DsButton onClick={() => setOpen(true)}>Open Confirmation</DsButton>
                <DsConfirmation open={open} onOpenChange={setOpen}>
                    <DsConfirmation.Header>
                        <DsIcon style={{
            color: 'var(--color-icon-danger)'
          }} icon="cancel" size="small" />
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
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('option1');
    return <>
                <DsButton onClick={() => setOpen(true)}>Open Custom Confirmation</DsButton>
                <DsConfirmation style={{
        maxBlockSize: 'none'
      }} open={open} onOpenChange={setOpen}>
                    <DsConfirmation.Header>
                        <DsIcon style={{
            color: 'var(--color-icon-information-secondary)'
          }} icon="info" size="small" />
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
}`,...C.parameters?.docs?.source}}};const ge=["Default","WithCancel","Danger","CustomBody"];export{C as CustomBody,y as Danger,g as Default,f as WithCancel,ge as __namedExportsOrder,ue as default};
