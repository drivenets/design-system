import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as O}from"./iframe-scWdy9I7.js";import{D as v}from"./ds-select-DMc68Vrj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BfwItnWH.js";import"./ds-icon-CDgp51PA.js";import"./ds-checkbox-uAFsjJo4.js";import"./index-BdJcV4Bk.js";import"./index-YaTj5zmu.js";import"./index-DbvqvABB.js";import"./index-DlfcXfSu.js";import"./index-CDVEj4M6.js";import"./ds-button-CJ5VENl5.js";import"./ds-button-legacy-BfRNxEOb.js";import"./ds-button-new-UyikxupT.js";import"./ds-chip-DO7ZswoU.js";import"./ds-typography-DN5hY2h2.js";import"./index-BgL5W9Er.js";import"./use-locale-context-CA6nG6sV.js";import"./index-1nE72n8G.js";import"./ds-text-input-CENRD0_d.js";import"./index-693eaRwx.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-DgmXvMMj.js";import"./use-field-context-BJoF0Jit.js";import"./portal-B-zg9Etn.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-CcGCDL2y.js";const{expect:n,screen:c,userEvent:r,within:W}=__STORYBOOK_MODULE_TEST__,ee={title:"Design System/Select",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object",description:"Options to display in the select dropdown"},value:{control:"text",description:"Value of the selected option"},onValueChange:{action:"value changed",description:"Callback when the selected value changes",table:{disable:!0}},placeholder:{control:"text",description:"Placeholder text when no option is selected"},style:{control:"object",description:"Additional styles to apply to the select container"},multiple:{control:"boolean",description:"Whether multiple selections are allowed"},clearable:{control:"boolean",description:"Whether the selection can be cleared"}}},l=({options:e,style:i,size:a,placeholder:s,clearable:h,multiple:g,disabled:y})=>{const[w,S]=O.useState(""),k=C=>{S(C)};return o.jsx(v,{options:e,value:w,onValueChange:k,style:i,size:a,placeholder:s,disabled:y,multiple:g,clearable:h})},x=async e=>{const i=W(e),a=i.getByRole("combobox");await r.click(a);const s=c.getByRole("option",{name:t[0].label});await n(s).not.toHaveAttribute("data-state","checked"),await r.click(s),await n(a).toHaveTextContent(t[0].label),await r.click(a);const h=c.getByRole("option",{name:t[1].label});await r.click(h),await n(a).toHaveTextContent(t[1].label),await r.click(a);const g=c.getByRole("option",{name:t[0].label});await n(g).not.toHaveAttribute("data-state","checked");const y=c.getByRole("option",{name:t[1].label});await n(y).toHaveAttribute("data-state","checked"),await r.keyboard("{Escape}");const w=i.getByRole("button",{name:"Clear value"});await r.click(w),await n(a).toHaveTextContent("Click to select a value")},t=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"indian-fig",label:"Indian fig"},{value:"jackfruit",label:"Jackfruit"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"melon",label:"Melon"}],p={render:e=>o.jsx(l,{...e}),args:{options:t,clearable:!0,style:{width:"200px"}},play:async({canvasElement:e})=>{await x(e)}},u={render:e=>o.jsx(l,{...e}),args:{options:t.slice(0,3).map(e=>({...e,icon:"nutrition"})),style:{width:"200px"},clearable:!0},play:async({canvasElement:e})=>{await x(e)}},d={render:e=>o.jsx(l,{...e}),args:{options:[...t,{value:"nectarine",label:"Nectarine"}],clearable:!0,style:{width:"200px"}}},m={render:e=>o.jsx(l,{...e}),args:{options:t,style:{width:"250px"},multiple:!0,clearable:!0}},b={render:e=>o.jsx(l,{...e}),args:{options:[...t,{value:"nectarine",label:"Nectarine"}],style:{width:"250px"},multiple:!0,clearable:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: mockOptions,
    style: {
      width: '250px'
    },
    multiple: true,
    clearable: true
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const te=["Default","WithIcons","WithSearch","MultiSelect","MultiSelectWithSearch"];export{p as Default,m as MultiSelect,b as MultiSelectWithSearch,u as WithIcons,d as WithSearch,te as __namedExportsOrder,ee as default};
