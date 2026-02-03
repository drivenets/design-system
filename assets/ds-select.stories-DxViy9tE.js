import{j as i}from"./jsx-runtime-u17CrQMm.js";import{r as O}from"./iframe-cDXgLNwq.js";import{D as k}from"./ds-select-N9EJed4Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAJkVsre.js";import"./ds-icon-DoWNvs5Z.js";import"./ds-checkbox-aoTdUDq4.js";import"./index-Dd2DMHDv.js";import"./index-BO8rjryU.js";import"./index-BVzgQ7cU.js";import"./index-BUJ_78C5.js";import"./index-BHmkvdNy.js";import"./ds-button-BcifrTMF.js";import"./ds-button-legacy-BOGnwb-1.js";import"./ds-button-new-OcMHQEGY.js";import"./ds-chip-DTJckDcU.js";import"./ds-typography-DTqeD6kQ.js";import"./index-BxU8oOR4.js";import"./use-locale-context-CWB5fLpi.js";import"./index-DlvIUqsm.js";import"./ds-text-input-Cx2nTy9a.js";import"./list-collection-Dc1WJxoZ.js";import"./index-BLXNfmeO.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-BbbpB-3u.js";import"./use-field-context-B_sF87mS.js";import"./portal-DDk-YuwG.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-CrUsv3FN.js";const{expect:l,screen:m,userEvent:a,within:f}=__STORYBOOK_MODULE_TEST__,te={title:"Design System/Select",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object",description:"Options to display in the select dropdown"},value:{control:"text",description:"Value of the selected option"},onValueChange:{action:"value changed",description:"Callback when the selected value changes",table:{disable:!0}},placeholder:{control:"text",description:"Placeholder text when no option is selected"},style:{control:"object",description:"Additional styles to apply to the select container"},multiple:{control:"boolean",description:"Whether multiple selections are allowed"},clearable:{control:"boolean",description:"Whether the selection can be cleared"}}},s=({options:e,style:c,size:t,placeholder:r,clearable:o,multiple:p,disabled:y})=>{const[w,v]=O.useState(""),x=C=>{v(C)};return i.jsx(k,{options:e,value:w,onValueChange:x,style:c,size:t,placeholder:r,disabled:y,multiple:p,clearable:o})},S=async e=>{const c=f(e),t=c.getByRole("combobox"),r=n[0],o=n[1];if(!r||!o)throw new Error("mockOptions must have at least 2 items");await a.click(t);const p=m.getByRole("option",{name:r.label});await l(p).not.toHaveAttribute("data-state","checked"),await a.click(p),await l(t).toHaveTextContent(r.label),await a.click(t);const y=m.getByRole("option",{name:o.label});await a.click(y),await l(t).toHaveTextContent(o.label),await a.click(t);const w=m.getByRole("option",{name:r.label});await l(w).not.toHaveAttribute("data-state","checked");const v=m.getByRole("option",{name:o.label});await l(v).toHaveAttribute("data-state","checked"),await a.click(t);const x=c.getByRole("button",{name:"Clear value"});await a.click(x),await l(t).toHaveTextContent("Click to select a value")},n=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"indian-fig",label:"Indian fig"},{value:"jackfruit",label:"Jackfruit"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"melon",label:"Melon"}],u={render:e=>i.jsx(s,{...e}),args:{options:n,clearable:!0,style:{width:"200px"}},play:async({canvasElement:e})=>{await S(e)}},d={render:e=>i.jsx(s,{...e}),args:{options:n.slice(0,3).map(e=>({...e,icon:"nutrition"})),style:{width:"200px"},clearable:!0},play:async({canvasElement:e})=>{await S(e)}},b={render:e=>i.jsx(s,{...e}),args:{options:[...n,{value:"nectarine",label:"Nectarine"}],clearable:!0,style:{width:"200px"}}},h={render:e=>i.jsx(s,{...e}),args:{options:n,style:{width:"250px"},multiple:!0,clearable:!0}},g={render:e=>i.jsx(s,{...e}),args:{options:[...n,{value:"nectarine",label:"Nectarine"}],style:{width:"250px"},multiple:!0,clearable:!0}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: mockOptions,
    style: {
      width: '250px'
    },
    multiple: true,
    clearable: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const ae=["Default","WithIcons","WithSearch","MultiSelect","MultiSelectWithSearch"];export{u as Default,h as MultiSelect,g as MultiSelectWithSearch,d as WithIcons,b as WithSearch,ae as __namedExportsOrder,te as default};
