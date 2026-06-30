import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BZRqByMK.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./compiler-runtime-CHM7rMef.js";import{t as a}from"./ds-icon-B_pcG-ZG.js";import{t as o}from"./ds-icon-Bz8JkhKP.js";import{t as s}from"./ds-status-badge-tS3nCNTS.js";import{t as c}from"./ds-status-badge-B4mljY_i.js";import{n as l,t as u}from"./ds-select-DjDCAEXx.js";import{i as d}from"./ds-tag.types-D0e5fmLD.js";import{t as f}from"./ds-tag-D4vH-lyY.js";var p,m,h,g,_,v=e((()=>{p=`_sizesContainer_1kj1o_1`,m=`_sizeItem_1kj1o_7`,h=`_sizeLabel_1kj1o_12`,g=`_customOption_1kj1o_18`,_={sizesContainer:p,sizeItem:m,sizeLabel:h,customOption:g}})),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{y=i(),b=t(n(),1),l(),f(),o(),c(),v(),x=r(),S={title:`Components/Select`,component:u,parameters:{layout:`centered`},argTypes:{options:{control:`object`,description:`Options to display in the select dropdown`},value:{description:`Controlled internally by each story wrapper`,table:{disable:!0}},onValueChange:{action:`value changed`,description:`Callback when the selected value changes`,table:{disable:!0}},onClear:{action:`clear`,description:`Callback when clear action is triggered`,table:{disable:!0}},placeholder:{control:`text`,description:`Placeholder text when no option is selected`},style:{control:`object`,description:`Additional styles to apply to the select container`},multiple:{control:`boolean`,description:`Whether multiple selections are allowed`},size:{control:`select`,options:[`default`,`small`],description:`Select size variant`},clearable:{control:`boolean`,description:`Whether the selection can be cleared`},disabled:{control:`boolean`,description:`Whether the select is disabled`}}},C=e=>{let t=(0,y.c)(11),n,r,i;t[0]===e?(n=t[1],r=t[2],i=t[3]):({clearable:n,onClear:r,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i);let[a,o]=(0,b.useState)(``);if(n){let e;return t[4]!==r||t[5]!==i||t[6]!==a?(e=(0,x.jsx)(u,{...i,clearable:!0,onClear:r,value:a,onValueChange:o}),t[4]=r,t[5]=i,t[6]=a,t[7]=e):e=t[7],e}let s;return t[8]!==i||t[9]!==a?(s=(0,x.jsx)(u,{...i,value:a,onValueChange:o}),t[8]=i,t[9]=a,t[10]=s):s=t[10],s},w=e=>{let t=(0,y.c)(12),n,r,i;t[0]===e?(n=t[1],r=t[2],i=t[3]):({clearable:n,onClear:r,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i);let a;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(a=[],t[4]=a):a=t[4];let[o,s]=(0,b.useState)(a);if(n){let e;return t[5]!==r||t[6]!==i||t[7]!==o?(e=(0,x.jsx)(u,{...i,multiple:!0,clearable:!0,onClear:r,value:o,onValueChange:s}),t[5]=r,t[6]=i,t[7]=o,t[8]=e):e=t[8],e}let c;return t[9]!==i||t[10]!==o?(c=(0,x.jsx)(u,{...i,multiple:!0,value:o,onValueChange:s}),t[9]=i,t[10]=o,t[11]=c):c=t[11],c},T=e=>{let t=(0,y.c)(4);if(e.multiple){let n;return t[0]===e?n=t[1]:(n=(0,x.jsx)(w,{...e}),t[0]=e,t[1]=n),n}let n;return t[2]===e?n=t[3]:(n=(0,x.jsx)(C,{...e}),t[2]=e,t[3]=n),n},E=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`},{value:`elderberry`,label:`Elderberry`},{value:`fig`,label:`Fig`},{value:`grape`,label:`Grape`},{value:`honeydew`,label:`Honeydew`},{value:`indian-fig`,label:`Indian fig`},{value:`jackfruit`,label:`Jackfruit`},{value:`kiwi`,label:`Kiwi`},{value:`lemon`,label:`Lemon`},{value:`melon`,label:`Melon`}],D={render:e=>(0,x.jsx)(T,{...e}),args:{options:E,clearable:!0,style:{width:`200px`}}},O={render:e=>(0,x.jsx)(T,{...e}),args:{options:E.slice(0,3).map(e=>({...e,icon:`nutrition`})),style:{width:`200px`},clearable:!0}},k={render:e=>(0,x.jsxs)(`div`,{className:_.sizesContainer,children:[(0,x.jsxs)(`div`,{className:_.sizeItem,children:[(0,x.jsx)(`div`,{className:_.sizeLabel,children:`Default`}),(0,x.jsx)(T,{...e,size:`default`})]}),(0,x.jsxs)(`div`,{className:_.sizeItem,children:[(0,x.jsx)(`div`,{className:_.sizeLabel,children:`Small`}),(0,x.jsx)(T,{...e,size:`small`})]})]}),args:{options:E.slice(0,5),clearable:!0,style:{width:`200px`}},argTypes:{size:{table:{disable:!0}}}},A={render:e=>(0,x.jsx)(T,{...e}),args:{options:[...E,{value:`nectarine`,label:`Nectarine`}],clearable:!0,style:{width:`200px`}}},j={render:e=>(0,x.jsx)(T,{...e}),args:{options:E,style:{width:`250px`},multiple:!0,clearable:!0}},M={render:e=>(0,x.jsx)(T,{...e}),args:{options:[...E,{value:`nectarine`,label:`Nectarine`}],style:{width:`250px`},multiple:!0,clearable:!0}},N=[{value:`us`,label:`United States`},{value:`gb`,label:`United Kingdom`},{value:`de`,label:`Germany`},{value:`jp`,label:`Japan`},{value:`fr`,label:`France`}],P=e=>(0,x.jsxs)(`span`,{className:_.customOption,children:[(0,x.jsx)(d,{label:e.value.toUpperCase(),size:`small`}),e.label]}),F=[{value:`v0.8`,label:`v0.8`},{value:`v1.0`,label:`v1.0`},{value:`v1.4`,label:`v1.4`},{value:`v2.3`,label:`v2.3`},{value:`v3.6`,label:`v3.6`},{value:`v4.1`,label:`v4.1`}],I={"v0.8":{status:`active`,label:`Live`},"v1.0":{status:`active`,label:`Live`},"v1.4":{status:`running`,label:`Running`},"v2.3":{status:`pending`,label:`Pending`},"v3.6":{status:`draft`,label:`Draft`},"v4.1":{status:`failed`,label:`Failed`}},L={render:e=>(0,x.jsx)(T,{...e}),args:{options:N,renderOption:P,clearable:!0,style:{width:`250px`}}},R={render:e=>(0,x.jsx)(T,{...e}),args:{options:N,renderOption:P,multiple:!0,clearable:!0,style:{width:`300px`}}},z={render:e=>(0,x.jsx)(T,{...e}),args:{options:[...E,...N],renderOption:e=>(0,x.jsxs)(`span`,{className:_.customOption,children:[(0,x.jsx)(a,{icon:`public`,size:`tiny`}),e.label]}),clearable:!0,style:{width:`300px`}}},B={render:()=>{let[e,t]=(0,b.useState)(``);return(0,x.jsx)(u,{options:F,value:e,onValueChange:t,renderValue:e=>{let t=I[e.value];return(0,x.jsxs)(`span`,{className:_.customOption,children:[e.label,t&&(0,x.jsx)(s,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]})},clearable:!0,style:{width:`250px`}})}},V={render:()=>{let[e,t]=(0,b.useState)([]);return(0,x.jsx)(u,{options:N,value:e,onValueChange:t,renderOption:e=>(0,x.jsxs)(`span`,{className:_.customOption,children:[(0,x.jsx)(d,{label:e.value.toUpperCase(),size:`small`}),e.label]}),renderValue:e=>(0,x.jsx)(`span`,{className:_.customOption,children:e.map(e=>(0,x.jsx)(d,{label:e.value.toUpperCase(),size:`small`},e.value))}),multiple:!0,clearable:!0,style:{width:`300px`}})}},H={render:()=>{let[e,t]=(0,b.useState)(``);return(0,x.jsx)(u,{options:F,value:e,onValueChange:t,renderOption:e=>{let t=I[e.value];return t?(0,x.jsxs)(`span`,{className:_.customOption,children:[e.label,(0,x.jsx)(s,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]}):e.label},renderValue:e=>{let t=I[e.value];return(0,x.jsxs)(`span`,{className:_.customOption,children:[e.label,t&&(0,x.jsx)(s,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]})},clearable:!0,style:{width:`250px`}})}},U={render:()=>{let[e,t]=(0,b.useState)([]);return(0,x.jsx)(u,{options:F,value:e,onValueChange:t,renderOption:e=>{let t=I[e.value];return t?(0,x.jsxs)(`span`,{className:_.customOption,children:[e.label,(0,x.jsx)(s,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]}):e.label},renderValue:e=>{let t=e[0],n=t?I[t.value]:void 0;return(0,x.jsxs)(`span`,{className:_.customOption,children:[t?.label,n&&(0,x.jsx)(s,{status:n.status,label:n.label,size:`small`,ghost:!0,icon:`check_circle`}),e.length>1&&` +${String(e.length-1)}`]})},multiple:!0,clearable:!0,style:{width:`300px`}})}},W={render:e=>(0,x.jsx)(T,{...e}),args:{options:[...E,{value:`nectarine`,label:`Nectarine`}],clearable:!0,style:{width:`250px`}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: mockOptions,
    clearable: true,
    style: {
      width: '200px'
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <div className={styles.sizesContainer}>
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: mockOptions,
    style: {
      width: '250px'
    },
    multiple: true,
    clearable: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: countryOptions,
    renderOption: renderCountryOption,
    clearable: true,
    style: {
      width: '250px'
    }
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G=[`Default`,`WithIcons`,`Sizes`,`WithSearch`,`MultiSelect`,`MultiSelectWithSearch`,`CustomRenderOption`,`CustomRenderOptionMultiSelect`,`CustomRenderOptionWithSearch`,`CustomRenderValue`,`CustomRenderValueMultiSelect`,`CustomRenderValueAndOption`,`CustomRenderValueAndOptionMultiSelect`,`KeyboardInteractions`]}))();export{L as CustomRenderOption,R as CustomRenderOptionMultiSelect,z as CustomRenderOptionWithSearch,B as CustomRenderValue,H as CustomRenderValueAndOption,U as CustomRenderValueAndOptionMultiSelect,V as CustomRenderValueMultiSelect,D as Default,W as KeyboardInteractions,j as MultiSelect,M as MultiSelectWithSearch,k as Sizes,O as WithIcons,A as WithSearch,G as __namedExportsOrder,S as default};