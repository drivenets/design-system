import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-select-selZPDHf.js";import{n as o,t as s}from"./ds-stack-5oRwpvZl.js";import{t as c}from"./ds-status-badge-CCH7b6q6.js";import{t as l}from"./ds-status-badge-CQK4pNDu.js";import{t as u}from"./ds-tag-MyJc0ZQS.js";import{t as d}from"./ds-tag-GpdL2tjr.js";var f,p=t((()=>{f=[`small`,`default`,`large`]})),m,h,g,_,v,y,b,x,S,C,w;t((()=>{m=e(n(),1),i(),p(),d(),l(),o(),h=r(),g={title:`Components/Select`,component:a,parameters:{layout:`centered`,docs:{description:{component:"A dropdown for choosing one or many options from a list. Supports search, icons, custom option/value rendering, and single or multiple selection. Always controlled via `value` and `onValueChange`."}}},decorators:[e=>(0,h.jsx)(s,{width:`16rem`,children:(0,h.jsx)(e,{})})],argTypes:{size:{control:`select`,options:f,description:`Select size variant`},placeholder:{control:`text`,description:`Placeholder text when no option is selected`},multiple:{control:`boolean`,description:`Whether multiple selections are allowed`},clearable:{control:`boolean`,description:`Whether the selection can be cleared`},disabled:{control:`boolean`,description:`Whether the select is disabled`},options:{table:{disable:!0}},value:{table:{disable:!0}},onValueChange:{table:{disable:!0}},onClear:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}}},_={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsx)(a,{options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`},{value:`elderberry`,label:`Elderberry`}],value:e,onValueChange:t,clearable:!0,onClear:()=>t(``)})}},v={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsx)(a,{options:[{value:`apple`,label:`Apple`,icon:`nutrition`},{value:`banana`,label:`Banana`,icon:`nutrition`},{value:`cherry`,label:`Cherry`,icon:`nutrition`}],value:e,onValueChange:t})}},y={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsx)(a,{options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`},{value:`elderberry`,label:`Elderberry`},{value:`fig`,label:`Fig`},{value:`grape`,label:`Grape`},{value:`honeydew`,label:`Honeydew`},{value:`kiwi`,label:`Kiwi`},{value:`lemon`,label:`Lemon`},{value:`mango`,label:`Mango`},{value:`nectarine`,label:`Nectarine`},{value:`orange`,label:`Orange`},{value:`papaya`,label:`Papaya`},{value:`quince`,label:`Quince`}],value:e,onValueChange:t})}},b={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,m.useState)([]);return(0,h.jsx)(a,{multiple:!0,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`},{value:`elderberry`,label:`Elderberry`}],value:e,onValueChange:t,clearable:!0,onClear:()=>t([])})}},x={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,m.useState)(``);return(0,h.jsx)(a,{options:[{value:`us`,label:`United States`},{value:`gb`,label:`United Kingdom`},{value:`de`,label:`Germany`},{value:`jp`,label:`Japan`}],value:e,onValueChange:t,renderOption:e=>(0,h.jsxs)(s,{gap:`var(--2xs)`,alignItems:`center`,children:[(0,h.jsx)(u,{label:e.value.toUpperCase(),size:`small`}),e.label]})})}},S={parameters:{docs:{source:{type:`code`}}},render:function(){let e={"v1.0":{status:`active`,label:`Live`},"v2.3":{status:`pending`,label:`Pending`},"v3.6":{status:`draft`,label:`Draft`}},[t,n]=(0,m.useState)(``);return(0,h.jsx)(a,{options:[{value:`v1.0`,label:`v1.0`},{value:`v2.3`,label:`v2.3`},{value:`v3.6`,label:`v3.6`}],value:t,onValueChange:n,renderValue:t=>{let n=e[t.value];return(0,h.jsxs)(s,{gap:`var(--2xs)`,alignItems:`center`,children:[t.label,n&&(0,h.jsx)(c,{status:n.status,label:n.label,size:`small`,ghost:!0})]})}})}},C={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:function(){let e=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}],[t,n]=(0,m.useState)(``);return(0,h.jsx)(s,{gap:`var(--standard)`,alignItems:`center`,children:f.map(r=>(0,h.jsx)(a,{size:r,options:e,value:t,onValueChange:n},r))})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsSelect options={[{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }, {
      value: 'date',
      label: 'Date'
    }, {
      value: 'elderberry',
      label: 'Elderberry'
    }]} value={value} onValueChange={setValue} clearable onClear={() => setValue('')} />;
  }
}`,..._.parameters?.docs?.source},description:{story:"The default single-select with a clear affordance. The parent owns the\nselected `value`; pass `clearable` with `onClear` to allow resetting it.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsSelect options={[{
      value: 'apple',
      label: 'Apple',
      icon: 'nutrition'
    }, {
      value: 'banana',
      label: 'Banana',
      icon: 'nutrition'
    }, {
      value: 'cherry',
      label: 'Cherry',
      icon: 'nutrition'
    }]} value={value} onValueChange={setValue} />;
  }
}`,...v.parameters?.docs?.source},description:{story:"Attach an `icon` to each option to reinforce its meaning in the dropdown.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsSelect options={[{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }, {
      value: 'date',
      label: 'Date'
    }, {
      value: 'elderberry',
      label: 'Elderberry'
    }, {
      value: 'fig',
      label: 'Fig'
    }, {
      value: 'grape',
      label: 'Grape'
    }, {
      value: 'honeydew',
      label: 'Honeydew'
    }, {
      value: 'kiwi',
      label: 'Kiwi'
    }, {
      value: 'lemon',
      label: 'Lemon'
    }, {
      value: 'mango',
      label: 'Mango'
    }, {
      value: 'nectarine',
      label: 'Nectarine'
    }, {
      value: 'orange',
      label: 'Orange'
    }, {
      value: 'papaya',
      label: 'Papaya'
    }, {
      value: 'quince',
      label: 'Quince'
    }]} value={value} onValueChange={setValue} />;
  }
}`,...y.parameters?.docs?.source},description:{story:`A searchable single-select. The filter input appears automatically once the
option list passes the search threshold (more than 13 options), so users can
narrow a long list by typing.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string[]>([]);
    return <DsSelect multiple options={[{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }, {
      value: 'date',
      label: 'Date'
    }, {
      value: 'elderberry',
      label: 'Elderberry'
    }]} value={value} onValueChange={setValue} clearable onClear={() => setValue([])} />;
  }
}`,...b.parameters?.docs?.source},description:{story:"Multi-select mode. Set `multiple` and hold the value as an array; selected\noptions render as chips inside the trigger.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsSelect options={[{
      value: 'us',
      label: 'United States'
    }, {
      value: 'gb',
      label: 'United Kingdom'
    }, {
      value: 'de',
      label: 'Germany'
    }, {
      value: 'jp',
      label: 'Japan'
    }]} value={value} onValueChange={setValue} renderOption={option => <DsStack gap="var(--2xs)" alignItems="center">
                        <DsTag label={option.value.toUpperCase()} size="small" />
                        {option.label}
                    </DsStack>} />;
  }
}`,...x.parameters?.docs?.source},description:{story:"Customize how each dropdown option renders with `renderOption`. The string\n`label` is still used for search, chips, and accessibility.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const versionStatus: Record<string, {
      status: DsStatus;
      label: string;
    }> = {
      'v1.0': {
        status: 'active',
        label: 'Live'
      },
      'v2.3': {
        status: 'pending',
        label: 'Pending'
      },
      'v3.6': {
        status: 'draft',
        label: 'Draft'
      }
    };
    const [value, setValue] = useState('');
    return <DsSelect options={[{
      value: 'v1.0',
      label: 'v1.0'
    }, {
      value: 'v2.3',
      label: 'v2.3'
    }, {
      value: 'v3.6',
      label: 'v3.6'
    }]} value={value} onValueChange={setValue} renderValue={selected => {
      const info = versionStatus[selected.value];
      return <DsStack gap="var(--2xs)" alignItems="center">
                            {selected.label}
                            {info && <DsStatusBadge status={info.status} label={info.label} size="small" ghost />}
                        </DsStack>;
    }} />;
  }
}`,...S.parameters?.docs?.source},description:{story:"Customize the selected value shown in the trigger with `renderValue` — here a\nstatus badge next to the label communicates each version's state.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: function Render() {
    const options: DsSelectOption[] = [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }];
    const [value, setValue] = useState('');
    return <DsStack gap="var(--standard)" alignItems="center">
                {selectSizes.map(size => <DsSelect key={size} size={size} options={options} value={value} onValueChange={setValue} />)}
            </DsStack>;
  }
}`,...C.parameters?.docs?.source},description:{story:`Size showcase. Not a usage example — see the individual stories for real code.`,...C.parameters?.docs?.description}}},w=[`Default`,`WithIcons`,`WithSearch`,`MultiSelect`,`CustomRenderOption`,`CustomRenderValue`,`Sizes`]}))();export{x as CustomRenderOption,S as CustomRenderValue,_ as Default,b as MultiSelect,C as Sizes,v as WithIcons,y as WithSearch,w as __namedExportsOrder,g as default};