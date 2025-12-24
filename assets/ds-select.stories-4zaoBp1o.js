import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as O}from"./iframe-CfoIKJgh.js";import{D as v}from"./ds-select-dUzOtmhj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJAjyhEV.js";import"./ds-icon-VNWG3kaI.js";import"./ds-checkbox-C9zIv5kT.js";import"./index-BRlLrWIy.js";import"./index-COMTTJjz.js";import"./index-D9ZoIPge.js";import"./index-Bt-Zta-G.js";import"./index-Cqpkh16R.js";import"./ds-button-BgeKYMhI.js";import"./ds-button-legacy-BWgdAsGE.js";import"./ds-button-new-T4Kx9VLn.js";import"./ds-chip-BNxcHNIA.js";import"./ds-typography-Dl7AKOds.js";import"./index-DsjVDaBU.js";import"./use-locale-context-Zg5WiScW.js";import"./index-D39okjRg.js";import"./ds-text-input-FuTi6gyn.js";import"./index-9_0afuHY.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-Cli3v6QN.js";import"./use-field-context-38MJDld8.js";import"./portal-CWac_q6d.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-BsooUEcV.js";const{expect:r,screen:c,userEvent:n,within:W}=__STORYBOOK_MODULE_TEST__,ee={title:"Design System/Select",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object",description:"Options to display in the select dropdown"},value:{control:"text",description:"Value of the selected option"},onValueChange:{action:"value changed",description:"Callback when the selected value changes",table:{disable:!0}},placeholder:{control:"text",description:"Placeholder text when no option is selected"},style:{control:"object",description:"Additional styles to apply to the select container"},multiple:{control:"boolean",description:"Whether multiple selections are allowed"},clearable:{control:"boolean",description:"Whether the selection can be cleared"}}},l=({options:e,style:i,size:a,placeholder:s,clearable:h,multiple:g,disabled:y})=>{const[w,S]=O.useState(""),k=C=>{S(C)};return o.jsx(v,{options:e,value:w,onValueChange:k,style:i,size:a,placeholder:s,disabled:y,multiple:g,clearable:h})},x=async e=>{const i=W(e),a=i.getByRole("combobox");await n.click(a);const s=c.getByRole("option",{name:t[0].label});await r(s).not.toHaveAttribute("data-state","checked"),await n.click(s),await r(a).toHaveTextContent(t[0].label),await n.click(a);const h=c.getByRole("option",{name:t[1].label});await n.click(h),await r(a).toHaveTextContent(t[1].label),await n.click(a);const g=c.getByRole("option",{name:t[0].label});await r(g).not.toHaveAttribute("data-state","checked");const y=c.getByRole("option",{name:t[1].label});await r(y).toHaveAttribute("data-state","checked"),await n.click(a);const w=i.getByRole("button",{name:"Clear value"});await n.click(w),await r(a).toHaveTextContent("Click to select a value")},t=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"indian-fig",label:"Indian fig"},{value:"jackfruit",label:"Jackfruit"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"melon",label:"Melon"}],p={render:e=>o.jsx(l,{...e}),args:{options:t,clearable:!0,style:{width:"200px"}},play:async({canvasElement:e})=>{await x(e)}},u={render:e=>o.jsx(l,{...e}),args:{options:t.slice(0,3).map(e=>({...e,icon:"nutrition"})),style:{width:"200px"},clearable:!0},play:async({canvasElement:e})=>{await x(e)}},m={render:e=>o.jsx(l,{...e}),args:{options:[...t,{value:"nectarine",label:"Nectarine"}],clearable:!0,style:{width:"200px"}}},d={render:e=>o.jsx(l,{...e}),args:{options:t,style:{width:"250px"},multiple:!0,clearable:!0}},b={render:e=>o.jsx(l,{...e}),args:{options:[...t,{value:"nectarine",label:"Nectarine"}],style:{width:"250px"},multiple:!0,clearable:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: mockOptions,
    clearable: true,
    style: {
      width: '200px'
    }
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: mockOptions.slice(0, 3).map(item => ({
      ...item,
      icon: 'nutrition'
    })),
    style: {
      width: '200px'
    },
    clearable: true
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement);
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: [...mockOptions, {
      value: 'nectarine',
      label: 'Nectarine'
    }],
    clearable: true,
    style: {
      width: '200px'
    }
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: mockOptions,
    style: {
      width: '250px'
    },
    multiple: true,
    clearable: true
  }
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: [...mockOptions, {
      value: 'nectarine',
      label: 'Nectarine'
    }],
    style: {
      width: '250px'
    },
    multiple: true,
    clearable: true
  }
}`,...b.parameters?.docs?.source}}};const te=["Default","WithIcons","WithSearch","MultiSelect","MultiSelectWithSearch"];export{p as Default,d as MultiSelect,b as MultiSelectWithSearch,u as WithIcons,m as WithSearch,te as __namedExportsOrder,ee as default};
