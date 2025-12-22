import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as O}from"./iframe-CnRjz4P3.js";import{D as v}from"./ds-select-BusOJlLO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DUHsNX3d.js";import"./ds-icon-BGI0mXDL.js";import"./ds-checkbox-BvTxYTWq.js";import"./index-Dlpq4Ivw.js";import"./index-VN5fCwUY.js";import"./index-DwI7o4wO.js";import"./index-Cch5V9si.js";import"./index-DxQbjA9p.js";import"./ds-button-CaAlr-8h.js";import"./ds-button-legacy-BMrP1-EM.js";import"./ds-button-new-uNjQ3OM-.js";import"./ds-chip-DDsyFqMQ.js";import"./ds-typography-D-uLgvrc.js";import"./index-B8--fxqu.js";import"./use-locale-context-D7G4jXwE.js";import"./index-DdfFi1fD.js";import"./ds-text-input-DqlJ1Wrz.js";import"./index-B3JjP0um.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-BpIsu44M.js";import"./use-field-context-iwgf-9Ee.js";import"./portal-ABLXUED2.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-CXXWS5Mi.js";const{expect:r,screen:c,userEvent:n,within:W}=__STORYBOOK_MODULE_TEST__,ee={title:"Design System/Select",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object",description:"Options to display in the select dropdown"},value:{control:"text",description:"Value of the selected option"},onValueChange:{action:"value changed",description:"Callback when the selected value changes",table:{disable:!0}},placeholder:{control:"text",description:"Placeholder text when no option is selected"},style:{control:"object",description:"Additional styles to apply to the select container"},multiple:{control:"boolean",description:"Whether multiple selections are allowed"},clearable:{control:"boolean",description:"Whether the selection can be cleared"}}},l=({options:e,style:i,size:a,placeholder:s,clearable:h,multiple:g,disabled:y})=>{const[w,S]=O.useState(""),k=C=>{S(C)};return o.jsx(v,{options:e,value:w,onValueChange:k,style:i,size:a,placeholder:s,disabled:y,multiple:g,clearable:h})},x=async e=>{const i=W(e),a=i.getByRole("combobox");await n.click(a);const s=c.getByRole("option",{name:t[0].label});await r(s).not.toHaveAttribute("data-state","checked"),await n.click(s),await r(a).toHaveTextContent(t[0].label),await n.click(a);const h=c.getByRole("option",{name:t[1].label});await n.click(h),await r(a).toHaveTextContent(t[1].label),await n.click(a);const g=c.getByRole("option",{name:t[0].label});await r(g).not.toHaveAttribute("data-state","checked");const y=c.getByRole("option",{name:t[1].label});await r(y).toHaveAttribute("data-state","checked"),await n.click(a);const w=i.getByRole("button",{name:"Clear value"});await n.click(w),await r(a).toHaveTextContent("Click to select a value")},t=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"indian-fig",label:"Indian fig"},{value:"jackfruit",label:"Jackfruit"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"melon",label:"Melon"}],p={render:e=>o.jsx(l,{...e}),args:{options:t,clearable:!0,style:{width:"200px"}},play:async({canvasElement:e})=>{await x(e)}},u={render:e=>o.jsx(l,{...e}),args:{options:t.slice(0,3).map(e=>({...e,icon:"nutrition"})),style:{width:"200px"},clearable:!0},play:async({canvasElement:e})=>{await x(e)}},m={render:e=>o.jsx(l,{...e}),args:{options:[...t,{value:"nectarine",label:"Nectarine"}],clearable:!0,style:{width:"200px"}}},d={render:e=>o.jsx(l,{...e}),args:{options:t,style:{width:"250px"},multiple:!0,clearable:!0}},b={render:e=>o.jsx(l,{...e}),args:{options:[...t,{value:"nectarine",label:"Nectarine"}],style:{width:"250px"},multiple:!0,clearable:!0}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
