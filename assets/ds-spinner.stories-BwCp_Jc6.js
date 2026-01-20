import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./ds-spinner-C5DxNV3c.js";import"./index-D1Fjrw5D.js";import"./iframe-BxLkrgq8.js";import"./preload-helper-PPVm8Dsz.js";const r=["small","medium","large"],i="_modalOverlay_1qyhb_1",o="_modalContent_1qyhb_11",d="_modalText_1qyhb_23",c="_modalTextPrimary_1qyhb_27",m="_modalTextSecondary_1qyhb_38",s={modalOverlay:i,modalContent:o,modalText:d,modalTextPrimary:c,modalTextSecondary:m},v={title:"Design System/Spinner",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:r,description:"The size of the spinner"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Inline styles to apply to the component"}}},l={args:{}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{size:"small"}),e.jsx("span",{children:"Small"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{size:"medium"}),e.jsx("span",{children:"Default"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{size:"large"}),e.jsx("span",{children:"Large"})]})]})},n={render:()=>e.jsx("div",{className:s.modalOverlay,children:e.jsxs("div",{className:s.modalContent,children:[e.jsx(a,{}),e.jsxs("div",{className:s.modalText,children:[e.jsx("p",{className:s.modalTextPrimary,children:"Explanation text will describe the process."}),e.jsx("p",{className:s.modalTextSecondary,children:"Two lines will be aimed for this."})]})]})})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
            <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
                <DsSpinner size="small" />
                <span>Small</span>
            </div>
            <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
                <DsSpinner size="medium" />
                <span>Default</span>
            </div>
            <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
                <DsSpinner size="large" />
                <span>Large</span>
            </div>
        </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <DsSpinner />
                <div className={styles.modalText}>
                    <p className={styles.modalTextPrimary}>Explanation text will describe the process.</p>
                    <p className={styles.modalTextSecondary}>Two lines will be aimed for this.</p>
                </div>
            </div>
        </div>
}`,...n.parameters?.docs?.source}}};const f=["Default","AllSizes","ModalLoading"];export{t as AllSizes,l as Default,n as ModalLoading,f as __namedExportsOrder,v as default};
