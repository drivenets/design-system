import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{i as n,n as r,r as i,t as a}from"./ds-spinner.types-CduOzh_3.js";var o,s,c,l,u,d,f=e((()=>{o=`_modalOverlay_1qyhb_1`,s=`_modalContent_1qyhb_11`,c=`_modalText_1qyhb_23`,l=`_modalTextPrimary_1qyhb_27`,u=`_modalTextSecondary_1qyhb_38`,d={modalOverlay:o,modalContent:s,modalText:c,modalTextPrimary:l,modalTextSecondary:u}})),p,m,h,g,_,v;e((()=>{n(),a(),f(),p=t(),m={title:`Design System/Spinner`,component:i,parameters:{layout:`centered`},argTypes:{size:{control:{type:`select`},options:r,description:`The size of the spinner`},className:{control:`text`,description:`Additional CSS class names`},style:{control:`object`,description:`Inline styles to apply to the component`}}},h={args:{}},g={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,p.jsx)(i,{size:`small`}),(0,p.jsx)(`span`,{children:`Small`})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,p.jsx)(i,{size:`medium`}),(0,p.jsx)(`span`,{children:`Default`})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`8px`},children:[(0,p.jsx)(i,{size:`large`}),(0,p.jsx)(`span`,{children:`Large`})]})]})},_={render:()=>(0,p.jsx)(`div`,{className:d.modalOverlay,children:(0,p.jsxs)(`div`,{className:d.modalContent,children:[(0,p.jsx)(i,{}),(0,p.jsxs)(`div`,{className:d.modalText,children:[(0,p.jsx)(`p`,{className:d.modalTextPrimary,children:`Explanation text will describe the process.`}),(0,p.jsx)(`p`,{className:d.modalTextSecondary,children:`Two lines will be aimed for this.`})]})]})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <DsSpinner />
                <div className={styles.modalText}>
                    <p className={styles.modalTextPrimary}>Explanation text will describe the process.</p>
                    <p className={styles.modalTextSecondary}>Two lines will be aimed for this.</p>
                </div>
            </div>
        </div>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`AllSizes`,`ModalLoading`]}))();export{g as AllSizes,h as Default,_ as ModalLoading,v as __namedExportsOrder,m as default};