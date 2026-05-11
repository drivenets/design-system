import{n as e}from"./chunk-BneVvdWh.js";import{i as t,n,r,t as i}from"./ds-system-status.types-Dzdq9NBR.js";var a,o,s,c;e((()=>{t(),i(),a={title:`Components/SystemStatus (Deprecated)`,component:r,parameters:{layout:`centered`,docs:{description:{component:"**Deprecated**: This component is deprecated. Please use `DsStatusBadge` instead. See the StatusBadge stories for the replacement component."}}},tags:[`deprecated`],argTypes:{status:{control:{type:`select`},options:n},label:{control:`text`,description:`Custom label text (optional)`}}},o={args:{status:`healthy`}},s={args:{status:`error`,label:`Critical Error`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'healthy'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Critical Error'
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`,`CustomLabel`]}))();export{s as CustomLabel,o as Default,c as __namedExportsOrder,a as default};