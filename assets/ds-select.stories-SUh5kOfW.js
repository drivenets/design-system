import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{t as i}from"./compiler-runtime-Ct8J1Lnh.js";import{t as a}from"./ds-icon-BW3ZMuEi.js";import{t as o}from"./ds-icon-m9JGPUU6.js";import{n as s,t as c}from"./ds-select-selZPDHf.js";import{t as l}from"./ds-status-badge-CCH7b6q6.js";import{t as u}from"./ds-status-badge-CQK4pNDu.js";import{t as d}from"./ds-tag-MyJc0ZQS.js";import{t as f}from"./ds-tag-GpdL2tjr.js";var p,m=t((()=>{p=[`small`,`default`,`large`]})),h,g,_,v,y,b=t((()=>{h=`_sizesContainer_1kj1o_1`,g=`_sizeItem_1kj1o_7`,_=`_sizeLabel_1kj1o_12`,v=`_customOption_1kj1o_18`,y={sizesContainer:h,sizeItem:g,sizeLabel:_,customOption:v}})),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;t((()=>{x=i(),S=e(n(),1),s(),m(),f(),o(),u(),b(),C=r(),w={title:`Components/Select`,component:c,parameters:{layout:`centered`},argTypes:{options:{control:`object`,description:`Options to display in the select dropdown`},value:{description:`Controlled internally by each story wrapper`,table:{disable:!0}},onValueChange:{action:`value changed`,description:`Callback when the selected value changes`,table:{disable:!0}},onClear:{action:`clear`,description:`Callback when clear action is triggered`,table:{disable:!0}},placeholder:{control:`text`,description:`Placeholder text when no option is selected`},style:{control:`object`,description:`Additional styles to apply to the select container`},multiple:{control:`boolean`,description:`Whether multiple selections are allowed`},size:{control:`select`,options:p,description:`Select size variant`},clearable:{control:`boolean`,description:`Whether the selection can be cleared`},disabled:{control:`boolean`,description:`Whether the select is disabled`}}},T=e=>{let t=(0,x.c)(11),n,r,i;t[0]===e?(n=t[1],r=t[2],i=t[3]):({clearable:n,onClear:r,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i);let[a,o]=(0,S.useState)(``);if(n){let e;return t[4]!==r||t[5]!==i||t[6]!==a?(e=(0,C.jsx)(c,{...i,clearable:!0,onClear:r,value:a,onValueChange:o}),t[4]=r,t[5]=i,t[6]=a,t[7]=e):e=t[7],e}let s;return t[8]!==i||t[9]!==a?(s=(0,C.jsx)(c,{...i,value:a,onValueChange:o}),t[8]=i,t[9]=a,t[10]=s):s=t[10],s},E=e=>{let t=(0,x.c)(12),n,r,i;t[0]===e?(n=t[1],r=t[2],i=t[3]):({clearable:n,onClear:r,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i);let a;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(a=[],t[4]=a):a=t[4];let[o,s]=(0,S.useState)(a);if(n){let e;return t[5]!==r||t[6]!==i||t[7]!==o?(e=(0,C.jsx)(c,{...i,multiple:!0,clearable:!0,onClear:r,value:o,onValueChange:s}),t[5]=r,t[6]=i,t[7]=o,t[8]=e):e=t[8],e}let l;return t[9]!==i||t[10]!==o?(l=(0,C.jsx)(c,{...i,multiple:!0,value:o,onValueChange:s}),t[9]=i,t[10]=o,t[11]=l):l=t[11],l},D=e=>{let t=(0,x.c)(4);if(e.multiple){let n;return t[0]===e?n=t[1]:(n=(0,C.jsx)(E,{...e}),t[0]=e,t[1]=n),n}let n;return t[2]===e?n=t[3]:(n=(0,C.jsx)(T,{...e}),t[2]=e,t[3]=n),n},O=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`},{value:`elderberry`,label:`Elderberry`},{value:`fig`,label:`Fig`},{value:`grape`,label:`Grape`},{value:`honeydew`,label:`Honeydew`},{value:`indian-fig`,label:`Indian fig`},{value:`jackfruit`,label:`Jackfruit`},{value:`kiwi`,label:`Kiwi`},{value:`lemon`,label:`Lemon`},{value:`melon`,label:`Melon`}],k={render:e=>(0,C.jsx)(D,{...e}),args:{options:O,clearable:!0,style:{width:`200px`}}},A={render:e=>(0,C.jsx)(D,{...e}),args:{options:O.slice(0,3).map(e=>({...e,icon:`nutrition`})),style:{width:`200px`},clearable:!0}},j={render:e=>(0,C.jsxs)(`div`,{className:y.sizesContainer,children:[(0,C.jsxs)(`div`,{className:y.sizeItem,children:[(0,C.jsx)(`div`,{className:y.sizeLabel,children:`Large`}),(0,C.jsx)(D,{...e,size:`large`})]}),(0,C.jsxs)(`div`,{className:y.sizeItem,children:[(0,C.jsx)(`div`,{className:y.sizeLabel,children:`Default`}),(0,C.jsx)(D,{...e,size:`default`})]}),(0,C.jsxs)(`div`,{className:y.sizeItem,children:[(0,C.jsx)(`div`,{className:y.sizeLabel,children:`Small`}),(0,C.jsx)(D,{...e,size:`small`})]})]}),args:{options:O.slice(0,5),clearable:!0,style:{width:`200px`}},argTypes:{size:{table:{disable:!0}}}},M={render:e=>(0,C.jsx)(D,{...e}),args:{options:[...O,{value:`nectarine`,label:`Nectarine`}],clearable:!0,style:{width:`200px`}}},N={render:e=>(0,C.jsx)(D,{...e}),args:{options:O,style:{width:`250px`},multiple:!0,clearable:!0}},P={render:e=>(0,C.jsx)(D,{...e}),args:{options:[...O,{value:`nectarine`,label:`Nectarine`}],style:{width:`250px`},multiple:!0,clearable:!0}},F=[{value:`us`,label:`United States`},{value:`gb`,label:`United Kingdom`},{value:`de`,label:`Germany`},{value:`jp`,label:`Japan`},{value:`fr`,label:`France`}],I=e=>(0,C.jsxs)(`span`,{className:y.customOption,children:[(0,C.jsx)(d,{label:e.value.toUpperCase(),size:`small`}),e.label]}),L=[{value:`v0.8`,label:`v0.8`},{value:`v1.0`,label:`v1.0`},{value:`v1.4`,label:`v1.4`},{value:`v2.3`,label:`v2.3`},{value:`v3.6`,label:`v3.6`},{value:`v4.1`,label:`v4.1`}],R={"v0.8":{status:`active`,label:`Live`},"v1.0":{status:`active`,label:`Live`},"v1.4":{status:`running`,label:`Running`},"v2.3":{status:`pending`,label:`Pending`},"v3.6":{status:`draft`,label:`Draft`},"v4.1":{status:`failed`,label:`Failed`}},z={render:e=>(0,C.jsx)(D,{...e}),args:{options:F,renderOption:I,clearable:!0,style:{width:`250px`}}},B={render:e=>(0,C.jsx)(D,{...e}),args:{options:F,renderOption:I,multiple:!0,clearable:!0,style:{width:`300px`}}},V={render:e=>(0,C.jsx)(D,{...e}),args:{options:[...O,...F],renderOption:e=>(0,C.jsxs)(`span`,{className:y.customOption,children:[(0,C.jsx)(a,{icon:`public`,size:`tiny`}),e.label]}),clearable:!0,style:{width:`300px`}}},H={render:()=>{let[e,t]=(0,S.useState)(``);return(0,C.jsx)(c,{options:L,value:e,onValueChange:t,renderValue:e=>{let t=R[e.value];return(0,C.jsxs)(`span`,{className:y.customOption,children:[e.label,t&&(0,C.jsx)(l,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]})},clearable:!0,style:{width:`250px`}})}},U={render:()=>{let[e,t]=(0,S.useState)([]);return(0,C.jsx)(c,{options:F,value:e,onValueChange:t,renderOption:e=>(0,C.jsxs)(`span`,{className:y.customOption,children:[(0,C.jsx)(d,{label:e.value.toUpperCase(),size:`small`}),e.label]}),renderValue:e=>(0,C.jsx)(`span`,{className:y.customOption,children:e.map(e=>(0,C.jsx)(d,{label:e.value.toUpperCase(),size:`small`},e.value))}),multiple:!0,clearable:!0,style:{width:`300px`}})}},W={render:()=>{let[e,t]=(0,S.useState)(``);return(0,C.jsx)(c,{options:L,value:e,onValueChange:t,renderOption:e=>{let t=R[e.value];return t?(0,C.jsxs)(`span`,{className:y.customOption,children:[e.label,(0,C.jsx)(l,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]}):e.label},renderValue:e=>{let t=R[e.value];return(0,C.jsxs)(`span`,{className:y.customOption,children:[e.label,t&&(0,C.jsx)(l,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]})},clearable:!0,style:{width:`250px`}})}},G={render:()=>{let[e,t]=(0,S.useState)([]);return(0,C.jsx)(c,{options:L,value:e,onValueChange:t,renderOption:e=>{let t=R[e.value];return t?(0,C.jsxs)(`span`,{className:y.customOption,children:[e.label,(0,C.jsx)(l,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]}):e.label},renderValue:e=>{let t=e[0],n=t?R[t.value]:void 0;return(0,C.jsxs)(`span`,{className:y.customOption,children:[t?.label,n&&(0,C.jsx)(l,{status:n.status,label:n.label,size:`small`,ghost:!0,icon:`check_circle`}),e.length>1&&` +${String(e.length-1)}`]})},multiple:!0,clearable:!0,style:{width:`300px`}})}},K={render:e=>(0,C.jsx)(D,{...e}),args:{options:[...O,{value:`nectarine`,label:`Nectarine`}],clearable:!0,style:{width:`250px`}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: mockOptions,
    clearable: true,
    style: {
      width: '200px'
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <div className={styles.sizesContainer}>
            <div className={styles.sizeItem}>
                <div className={styles.sizeLabel}>Large</div>
                <ControlledSelectWrapper {...args} size="large" />
            </div>
            <div className={styles.sizeItem}>
                <div className={styles.sizeLabel}>Default</div>
                <ControlledSelectWrapper {...args} size="default" />
            </div>
            <div className={styles.sizeItem}>
                <div className={styles.sizeLabel}>Small</div>
                <ControlledSelectWrapper {...args} size="small" />
            </div>
        </div>,
  args: {
    options: mockOptions.slice(0, 5),
    clearable: true,
    style: {
      width: '200px'
    }
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: mockOptions,
    style: {
      width: '250px'
    },
    multiple: true,
    clearable: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: countryOptions,
    renderOption: renderCountryOption,
    clearable: true,
    style: {
      width: '250px'
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: countryOptions,
    renderOption: renderCountryOption,
    multiple: true,
    clearable: true,
    style: {
      width: '300px'
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: [...mockOptions, ...countryOptions],
    renderOption: option => <span className={styles.customOption}>
                <DsIcon icon="public" size="tiny" />
                {option.label}
            </span>,
    clearable: true,
    style: {
      width: '300px'
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const renderValue = (selected: DsSelectOption) => {
      const info = versionStatusMap[selected.value];
      return <span className={styles.customOption}>
                    {selected.label}
                    {info && <DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />}
                </span>;
    };
    return <DsSelect options={versionOptions} value={value} onValueChange={setValue} renderValue={renderValue} clearable style={{
      width: '250px'
    }} />;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    const renderOption = (option: DsSelectOption) => <span className={styles.customOption}>
                <DsTag label={option.value.toUpperCase()} size="small" />
                {option.label}
            </span>;
    const renderValue = (selected: DsSelectOption[]) => <span className={styles.customOption}>
                {selected.map(opt => <DsTag key={opt.value} label={opt.value.toUpperCase()} size="small" />)}
            </span>;
    return <DsSelect options={countryOptions} value={value} onValueChange={setValue} renderOption={renderOption} renderValue={renderValue} multiple clearable style={{
      width: '300px'
    }} />;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const renderOption = (option: DsSelectOption) => {
      const info = versionStatusMap[option.value];
      if (!info) {
        return option.label;
      }
      return <span className={styles.customOption}>
                    {option.label}
                    <DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />
                </span>;
    };
    const renderValue = (selected: DsSelectOption) => {
      const info = versionStatusMap[selected.value];
      return <span className={styles.customOption}>
                    {selected.label}
                    {info && <DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />}
                </span>;
    };
    return <DsSelect options={versionOptions} value={value} onValueChange={setValue} renderOption={renderOption} renderValue={renderValue} clearable style={{
      width: '250px'
    }} />;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    const renderOption = (option: DsSelectOption) => {
      const info = versionStatusMap[option.value];
      if (!info) {
        return option.label;
      }
      return <span className={styles.customOption}>
                    {option.label}
                    <DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />
                </span>;
    };
    const renderValue = (selected: DsSelectOption[]) => {
      const option = selected[0];
      const info = option ? versionStatusMap[option.value] : undefined;
      return <span className={styles.customOption}>
                    {option?.label}
                    {info && <DsStatusBadge status={info.status} label={info.label} size="small" ghost icon="check_circle" />}
                    {selected.length > 1 && \` +\${String(selected.length - 1)}\`}
                </span>;
    };
    return <DsSelect options={versionOptions} value={value} onValueChange={setValue} renderOption={renderOption} renderValue={renderValue} multiple clearable style={{
      width: '300px'
    }} />;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: [...mockOptions, {
      value: 'nectarine',
      label: 'Nectarine'
    }],
    clearable: true,
    style: {
      width: '250px'
    }
  }
}`,...K.parameters?.docs?.source}}},q=[`Default`,`WithIcons`,`Sizes`,`WithSearch`,`MultiSelect`,`MultiSelectWithSearch`,`CustomRenderOption`,`CustomRenderOptionMultiSelect`,`CustomRenderOptionWithSearch`,`CustomRenderValue`,`CustomRenderValueMultiSelect`,`CustomRenderValueAndOption`,`CustomRenderValueAndOptionMultiSelect`,`KeyboardInteractions`]}))();export{z as CustomRenderOption,B as CustomRenderOptionMultiSelect,V as CustomRenderOptionWithSearch,H as CustomRenderValue,W as CustomRenderValueAndOption,G as CustomRenderValueAndOptionMultiSelect,U as CustomRenderValueMultiSelect,k as Default,K as KeyboardInteractions,N as MultiSelect,P as MultiSelectWithSearch,j as Sizes,A as WithIcons,M as WithSearch,q as __namedExportsOrder,w as default};