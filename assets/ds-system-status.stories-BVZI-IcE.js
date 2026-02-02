import{D as s}from"./ds-system-status-7vkhQuVT.js";import"./jsx-runtime-u17CrQMm.js";import"./index-DK2miGf9.js";import"./iframe-DeS_gruE.js";import"./preload-helper-PPVm8Dsz.js";const r=["healthy","neutral","error","in-progress","pending","alert","disabled"],l={title:"Design System/System Status (Deprecated)",component:s,parameters:{layout:"centered",docs:{description:{component:"**Deprecated**: This component is deprecated. Please use `DsStatusBadge` instead. See the StatusBadge stories for the replacement component."}}},tags:["autodocs","deprecated"],argTypes:{status:{control:{type:"select"},options:r},label:{control:"text",description:"Custom label text (optional)"}}},e={args:{status:"healthy"}},t={args:{status:"error",label:"Critical Error"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'healthy'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Critical Error'
  }
}`,...t.parameters?.docs?.source}}};const m=["Default","CustomLabel"];export{t as CustomLabel,e as Default,m as __namedExportsOrder,l as default};
