import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-BBN61mV7.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./classnames-DN2IqHsz.js";import{t as a}from"./compiler-runtime-BGImCCMH.js";import{t as o}from"./ds-icon-BmTNe7Rg.js";import{t as s}from"./ds-icon-BNBaCtoD.js";import{_ as ee,a as c,c as te,g as ne,i as re,o as l,r as ie,s as ae,t as oe}from"./portal-DAA9_Yyy.js";import{t as u}from"./portal-DotV3e_c.js";var d=t((()=>{te(),l()})),f=t((()=>{ne()})),se=t((()=>{re()})),p,m,h,g,_,v,y,b,x,S,C,ce,le,w,T,ue,E,de,D,O,k,A,j=t((()=>{p=`_root_1mc8k_45`,m=`_control_1mc8k_52`,h=`_input_1mc8k_63`,g=`_iconButton_1mc8k_77`,_=`_startAdornment_1mc8k_133`,v=`_iconContainer_1mc8k_141`,y=`_clearButton_1mc8k_148`,b=`_trigger_1mc8k_176`,x=`_positioner_1mc8k_209`,S=`_content_1mc8k_214`,C=`_expand_1mc8k_1`,ce=`_collapse_1mc8k_1`,le=`_itemGroup_1mc8k_275`,w=`_item_1mc8k_275`,T=`_indicator_1mc8k_297`,ue=`_itemIcon_1mc8k_298`,E=`_itemText_1mc8k_328`,de=`_noMatches_1mc8k_342`,D=`_loading_1mc8k_343`,O=`_disabled_1mc8k_350`,k=`_invalid_1mc8k_369`,A={root:p,control:m,input:h,iconButton:g,startAdornment:_,iconContainer:v,clearButton:y,trigger:b,positioner:x,content:S,expand:C,collapse:ce,itemGroup:le,item:w,indicator:T,itemIcon:ue,itemText:E,noMatches:de,loading:D,disabled:O,invalid:k}}));function fe(e){return e.label}function pe(e){return e.value}var me,he,ge,M,N,P=t((()=>{me=a(),he=e(n(),1),d(),f(),se(),u(),ge=e(i(),1),j(),s(),M=r(),N=e=>{let t=(0,me.c)(53),{id:n,options:r,loading:i,style:a,className:s,placeholder:te,disabled:ne,invalid:re,onValueChange:l,onInputValueChange:u,onOpenChange:d,locale:f,highlightMatch:se,showTrigger:p,startAdornment:m}=e,h=r===void 0?[]:r,g=i===void 0?!1:i,_=te===void 0?`Start typing to search...`:te,v=ne===void 0?!1:ne,y=re===void 0?!1:re,b;t[0]===f?b=t[1]:(b=f===void 0?{}:f,t[0]=f,t[1]=b);let{loading:x,noMatches:S}=b,C=x===void 0?`Loading...`:x,ce=S===void 0?`No matches found`:S,le=se===void 0?!0:se,w=p===void 0?!0:p,[T,ue]=(0,he.useState)(``),E;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(E={sensitivity:`base`},t[2]=E):E=t[2];let de=ee(E),D=ae({items:T?h.filter(e=>de.contains(e.label,T)):h,itemToString:fe,itemToValue:pe}),O;t[3]===u?O=t[4]:(O=e=>{ue(e.inputValue),u?.(e.inputValue)},t[3]=u,t[4]=O);let k=O,j;t[5]===l?j=t[6]:(j=e=>{let t=e.items[0];l?.(t?.value??``)},t[5]=l,t[6]=j);let N=j,P;t[7]===d?P=t[8]:(P=e=>{d?.(e.open)},t[7]=d,t[8]=P);let F=P,I;t[9]!==s||t[10]!==v||t[11]!==y?(I=(0,ge.default)(A.root,{[A.disabled]:v,[A.invalid]:y},s),t[9]=s,t[10]=v,t[11]=y,t[12]=I):I=t[12];let L=I,R=c,z;t[13]===m?z=t[14]:(z=m&&(0,M.jsx)(`span`,{className:A.startAdornment,children:m}),t[13]=m,t[14]=z);let B;t[15]===_?B=t[16]:(B=(0,M.jsx)(c.Input,{className:A.input,placeholder:_}),t[15]=_,t[16]=B);let V;t[17]!==v||t[18]!==w?(V=(0,M.jsx)(c.Context,{children:e=>(0,M.jsxs)(`div`,{className:A.iconContainer,children:[e.inputValue&&!v&&(0,M.jsx)(`button`,{type:`button`,className:A.clearButton,"aria-label":`Clear`,onClick:()=>{e.setValue([]),e.setInputValue(``)},children:(0,M.jsx)(o,{icon:`close`,size:`medium`})}),w&&(0,M.jsx)(c.Trigger,{className:A.trigger,"aria-label":`Toggle dropdown`,children:(0,M.jsx)(o,{icon:`keyboard_arrow_down`,size:`medium`})})]})}),t[17]=v,t[18]=w,t[19]=V):V=t[19];let H;t[20]!==z||t[21]!==B||t[22]!==V?(H=(0,M.jsxs)(c.Control,{className:A.control,children:[z,B,V]}),t[20]=z,t[21]=B,t[22]=V,t[23]=H):H=t[23];let U=oe,W=c,G=A,K=c,q=A,J;t[24]!==g||t[25]!==C?(J=g&&(0,M.jsx)(`div`,{className:A.loading,children:C}),t[24]=g,t[25]=C,t[26]=J):J=t[26];let Y=!g&&D.items.length===0&&(0,M.jsx)(`div`,{className:A.noMatches,children:ce}),X=!g&&D.items.length>0&&(0,M.jsx)(c.ItemGroup,{className:A.itemGroup,children:D.items.map(e=>(0,M.jsxs)(c.Item,{item:e,className:A.item,children:[e.icon&&(0,M.jsx)(o,{className:A.itemIcon,icon:e.icon,"aria-hidden":`true`}),(0,M.jsx)(c.ItemText,{className:A.itemText,children:le?(0,M.jsx)(ie,{query:T,text:e.label,ignoreCase:!0}):e.label})]},e.value))}),Z;t[27]!==K.Content||t[28]!==q.content||t[29]!==J||t[30]!==Y||t[31]!==X?(Z=(0,M.jsxs)(K.Content,{className:q.content,children:[J,Y,X]}),t[27]=K.Content,t[28]=q.content,t[29]=J,t[30]=Y,t[31]=X,t[32]=Z):Z=t[32];let Q;t[33]!==W.Positioner||t[34]!==G.positioner||t[35]!==Z?(Q=(0,M.jsx)(W.Positioner,{className:G.positioner,children:Z}),t[33]=W.Positioner,t[34]=G.positioner,t[35]=Z,t[36]=Q):Q=t[36];let $;t[37]!==U||t[38]!==Q?($=(0,M.jsx)(U,{children:Q}),t[37]=U,t[38]=Q,t[39]=$):$=t[39];let _e;return t[40]!==D||t[41]!==v||t[42]!==k||t[43]!==F||t[44]!==N||t[45]!==n||t[46]!==y||t[47]!==L||t[48]!==a||t[49]!==R.Root||t[50]!==H||t[51]!==$?(_e=(0,M.jsxs)(R.Root,{id:n,collection:D,className:L,style:a,disabled:v,invalid:y,onInputValueChange:k,onValueChange:N,onOpenChange:F,closeOnSelect:!0,children:[H,$]}),t[40]=D,t[41]=v,t[42]=k,t[43]=F,t[44]=N,t[45]=n,t[46]=y,t[47]=L,t[48]=a,t[49]=R.Root,t[50]=H,t[51]=$,t[52]=_e):_e=t[52],_e}})),F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;t((()=>{F=e(n(),1),s(),P(),I=r(),{fn:L}=__STORYBOOK_MODULE_TEST__,R={title:`Components/Autocomplete`,component:N,parameters:{layout:`centered`},argTypes:{options:{control:`object`,description:`Options to display in the autocomplete dropdown`},placeholder:{control:`text`,description:`Placeholder text when input is empty`},highlightMatch:{control:`boolean`,description:`Whether to highlight the matching text in the dropdown options`},showTrigger:{control:`boolean`,description:`Whether to show the dropdown trigger (arrow) button`},startAdornment:{control:`object`,description:`Content to display at the start of the input (e.g., a search icon)`},locale:{control:`object`,description:`Locale strings for the autocomplete component`},disabled:{control:`boolean`,description:`Whether the autocomplete is disabled`}},args:{onValueChange:L(),onInputValueChange:L()}},z=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`},{value:`elderberry`,label:`Elderberry`},{value:`fig`,label:`Fig`},{value:`grape`,label:`Grape`},{value:`honeydew`,label:`Honeydew`},{value:`kiwi`,label:`Kiwi`},{value:`lemon`,label:`Lemon`},{value:`mango`,label:`Mango`},{value:`nectarine`,label:`Nectarine`}],B=[{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`},{value:`au`,label:`Australia`},{value:`de`,label:`Germany`},{value:`fr`,label:`France`},{value:`it`,label:`Italy`},{value:`es`,label:`Spain`},{value:`jp`,label:`Japan`},{value:`cn`,label:`China`}],V={render:e=>(0,I.jsx)(N,{...e}),args:{options:z,showTrigger:!0,placeholder:`Select or type to search...`,style:{width:`300px`}}},H={render:e=>(0,I.jsx)(N,{...e}),args:{options:z,showTrigger:!1,placeholder:`Start typing to search...`,style:{width:`300px`}}},U={render:e=>(0,I.jsx)(N,{...e}),args:{options:B,showTrigger:!1,startAdornment:(0,I.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`,style:{width:`300px`}}},W={render:()=>(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,I.jsxs)(`div`,{style:{width:`300px`},children:[(0,I.jsx)(`p`,{children:`Default (with trigger)`}),(0,I.jsx)(N,{options:z,showTrigger:!0,placeholder:`Select or type...`})]}),(0,I.jsxs)(`div`,{style:{width:`300px`},children:[(0,I.jsx)(`p`,{children:`Search Mode (no trigger)`}),(0,I.jsx)(N,{options:z,showTrigger:!1,placeholder:`Start typing...`})]}),(0,I.jsxs)(`div`,{style:{width:`300px`},children:[(0,I.jsx)(`p`,{children:`Search with Icon`}),(0,I.jsx)(N,{options:B,showTrigger:!1,startAdornment:(0,I.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`})]})]})},G={render:()=>(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,I.jsxs)(`div`,{style:{width:`300px`},children:[(0,I.jsx)(`p`,{children:`Disabled`}),(0,I.jsx)(N,{options:z,disabled:!0,placeholder:`Disabled autocomplete...`})]}),(0,I.jsxs)(`div`,{style:{width:`300px`},children:[(0,I.jsx)(`p`,{children:`Invalid`}),(0,I.jsx)(N,{options:z,invalid:!0,placeholder:`Invalid autocomplete...`})]})]})},K=150,q=async e=>(await new Promise(e=>setTimeout(e,K)),B.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))),J=async()=>(await new Promise(e=>setTimeout(e,K)),B),Y={render:e=>{let[t,n]=(0,F.useState)([]),[r,i]=(0,F.useState)(!1),a=async t=>{if(e.onInputValueChange?.(t),!t){n([]);return}i(!0),n(await q(t)),i(!1)};return(0,I.jsx)(N,{...e,options:t,loading:r,onInputValueChange:a,showTrigger:!1,startAdornment:(0,I.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries (async)...`,locale:{noMatches:`No results found`},style:{width:`300px`}})}},X={render:e=>{let[t,n]=(0,F.useState)([]),[r,i]=(0,F.useState)(!0);return(0,F.useEffect)(()=>{J().then(e=>{n(e),i(!1)})},[]),(0,I.jsx)(N,{...e,options:t,loading:r,placeholder:`Select a country...`,style:{width:`300px`}})}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <DsAutocomplete {...args} />,
  args: {
    options: mockOptions,
    showTrigger: true,
    placeholder: 'Select or type to search...',
    style: {
      width: '300px'
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <DsAutocomplete {...args} />,
  args: {
    options: mockOptions,
    showTrigger: false,
    placeholder: 'Start typing to search...',
    style: {
      width: '300px'
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <DsAutocomplete {...args} />,
  args: {
    options: countries,
    showTrigger: false,
    startAdornment: <DsIcon icon="search" size="medium" aria-label="search icon" />,
    placeholder: 'Search countries...',
    style: {
      width: '300px'
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
            <div style={{
      width: '300px'
    }}>
                <p>Default (with trigger)</p>
                <DsAutocomplete options={mockOptions} showTrigger placeholder="Select or type..." />
            </div>
            <div style={{
      width: '300px'
    }}>
                <p>Search Mode (no trigger)</p>
                <DsAutocomplete options={mockOptions} showTrigger={false} placeholder="Start typing..." />
            </div>
            <div style={{
      width: '300px'
    }}>
                <p>Search with Icon</p>
                <DsAutocomplete options={countries} showTrigger={false} startAdornment={<DsIcon icon="search" size="medium" aria-label="search icon" />} placeholder="Search countries..." />
            </div>
        </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
            <div style={{
      width: '300px'
    }}>
                <p>Disabled</p>
                <DsAutocomplete options={mockOptions} disabled placeholder="Disabled autocomplete..." />
            </div>
            <div style={{
      width: '300px'
    }}>
                <p>Invalid</p>
                <DsAutocomplete options={mockOptions} invalid placeholder="Invalid autocomplete..." />
            </div>
        </div>
}`,...G.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [options, setOptions] = useState<DsAutocompleteOption[]>([]);
    const [loading, setLoading] = useState(false);
    const handleInputValueChange = async (value: string) => {
      args.onInputValueChange?.(value);
      if (!value) {
        setOptions([]);
        return;
      }
      setLoading(true);
      const results = await fetchCountries(value);
      setOptions(results);
      setLoading(false);
    };
    return <DsAutocomplete {...args} options={options} loading={loading} onInputValueChange={handleInputValueChange} showTrigger={false} startAdornment={<DsIcon icon="search" size="medium" aria-label="search icon" />} placeholder="Search countries (async)..." locale={{
      noMatches: 'No results found'
    }} style={{
      width: '300px'
    }} />;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [options, setOptions] = useState<DsAutocompleteOption[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      void fetchAllCountries().then(results => {
        setOptions(results);
        setLoading(false);
      });
    }, []);
    return <DsAutocomplete {...args} options={options} loading={loading} placeholder="Select a country..." style={{
      width: '300px'
    }} />;
  }
}`,...X.parameters?.docs?.source}}},Z=[`Default`,`SearchMode`,`SearchWithIcon`,`AllVariants`,`States`,`AsyncSearch`,`AsyncOptions`]}))();export{W as AllVariants,X as AsyncOptions,Y as AsyncSearch,V as Default,H as SearchMode,U as SearchWithIcon,G as States,Z as __namedExportsOrder,R as default};