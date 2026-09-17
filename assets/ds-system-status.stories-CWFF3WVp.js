import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./ds-system-status-CT7UNUpC.js";var r;function i(){return(i=e((()=>{r=[`healthy`,`neutral`,`error`,`in-progress`,`pending`,`alert`,`disabled`]})))()}var a,o,s,c;function l(){return(l=e((()=>{t(),i(),a={title:`Components/SystemStatus (Deprecated)`,component:n,parameters:{layout:`centered`,docs:{description:{component:"**Deprecated**: This component is deprecated. Please use `DsStatusBadge` instead. See the StatusBadge stories for the replacement component."}}},tags:[`deprecated`],argTypes:{status:{control:{type:`select`},options:r},label:{control:`text`,description:`Custom label text (optional)`}}},o={args:{status:`healthy`}},s={args:{status:`error`,label:`Critical Error`}},c=[`Default`,`CustomLabel`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'healthy'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Critical Error'
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as CustomLabel,o as Default,c as __namedExportsOrder,a as default};