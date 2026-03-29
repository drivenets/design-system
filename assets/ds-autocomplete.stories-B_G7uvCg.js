import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CfnbrWkB.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{t as i}from"./classnames-BKwtnCRs.js";import{t as a}from"./compiler-runtime-ViUGhnvY.js";import{i as o}from"./ds-icon.types-BtW2eqBQ.js";import{t as s}from"./ds-icon-DWdiymyi.js";import{n as ee,t as te}from"./list-collection-DGkdDZzO.js";import{c as ne,d as re,f as ie,h as ae,i as oe,l as se,m as ce,n as le,p as ue,r as c,s as de,t as fe,u as pe}from"./highlight-DCX6Gq6v.js";import{t as me}from"./portal-BYX-O28W.js";import{t as l}from"./portal-XQqi83l7.js";var u=t((()=>{ee(),ne()})),d=t((()=>{c()})),he=t((()=>{le()})),f,p,m,h,g,_,v,y,b,x,S,ge,_e,C,w,ve,T,ye,E,D,O,k,A=t((()=>{f=`_root_18evi_41`,p=`_control_18evi_48`,m=`_input_18evi_59`,h=`_iconButton_18evi_74`,g=`_startAdornment_18evi_130`,_=`_iconContainer_18evi_138`,v=`_clearButton_18evi_145`,y=`_trigger_18evi_173`,b=`_positioner_18evi_206`,x=`_content_18evi_211`,S=`_expand_18evi_1`,ge=`_collapse_18evi_1`,_e=`_itemGroup_18evi_272`,C=`_item_18evi_272`,w=`_indicator_18evi_294`,ve=`_itemIcon_18evi_295`,T=`_itemText_18evi_325`,ye=`_noMatches_18evi_339`,E=`_loading_18evi_340`,D=`_disabled_18evi_347`,O=`_invalid_18evi_367`,k={root:f,control:p,input:m,iconButton:h,startAdornment:g,iconContainer:_,clearButton:v,trigger:y,positioner:b,content:x,expand:S,collapse:ge,itemGroup:_e,item:C,indicator:w,itemIcon:ve,itemText:T,noMatches:ye,loading:E,disabled:D,invalid:O}}));function be(e){return e.label}function xe(e){return e.value}var Se,Ce,we,j,M,N=t((()=>{Se=a(),Ce=e(n(),1),u(),d(),he(),l(),we=e(i(),1),A(),s(),j=r(),M=e=>{let t=(0,Se.c)(53),{id:n,options:r,loading:i,style:a,className:s,placeholder:ee,disabled:ne,invalid:le,onValueChange:c,onInputValueChange:l,onOpenChange:u,locale:d,highlightMatch:he,showTrigger:f,startAdornment:p}=e,m=r===void 0?[]:r,h=i===void 0?!1:i,g=ee===void 0?`Start typing to search...`:ee,_=ne===void 0?!1:ne,v=le===void 0?!1:le,y;t[0]===d?y=t[1]:(y=d===void 0?{}:d,t[0]=d,t[1]=y);let{loading:b,noMatches:x}=y,S=b===void 0?`Loading...`:b,ge=x===void 0?`No matches found`:x,_e=he===void 0?!0:he,C=f===void 0?!0:f,[w,ve]=(0,Ce.useState)(``),T;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(T={sensitivity:`base`},t[2]=T):T=t[2];let ye=oe(T),E=te({items:w?m.filter(e=>ye.contains(e.label,w)):m,itemToString:be,itemToValue:xe}),D;t[3]===l?D=t[4]:(D=e=>{ve(e.inputValue),l?.(e.inputValue)},t[3]=l,t[4]=D);let O=D,A;t[5]===c?A=t[6]:(A=e=>{let t=e.items[0];c?.(t?.value??``)},t[5]=c,t[6]=A);let M=A,N;t[7]===u?N=t[8]:(N=e=>{u?.(e.open)},t[7]=u,t[8]=N);let P=N,F;t[9]!==s||t[10]!==_||t[11]!==v?(F=(0,we.default)(k.root,{[k.disabled]:_,[k.invalid]:v},s),t[9]=s,t[10]=_,t[11]=v,t[12]=F):F=t[12];let I=F,L=de,R;t[13]===p?R=t[14]:(R=p&&(0,j.jsx)(`span`,{className:k.startAdornment,children:p}),t[13]=p,t[14]=R);let z;t[15]===g?z=t[16]:(z=(0,j.jsx)(ue,{className:k.input,placeholder:g}),t[15]=g,t[16]=z);let B;t[17]!==_||t[18]!==C?(B=(0,j.jsx)(ae,{children:e=>(0,j.jsxs)(`div`,{className:k.iconContainer,children:[e.inputValue&&!_&&(0,j.jsx)(`button`,{type:`button`,className:k.clearButton,"aria-label":`Clear`,onClick:()=>{e.setValue([]),e.setInputValue(``)},children:(0,j.jsx)(o,{icon:`close`,size:`medium`})}),C&&(0,j.jsx)(se,{className:k.trigger,"aria-label":`Toggle dropdown`,children:(0,j.jsx)(o,{icon:`keyboard_arrow_down`,size:`medium`})})]})}),t[17]=_,t[18]=C,t[19]=B):B=t[19];let V;t[20]!==R||t[21]!==z||t[22]!==B?(V=(0,j.jsxs)(ce,{className:k.control,children:[R,z,B]}),t[20]=R,t[21]=z,t[22]=B,t[23]=V):V=t[23];let H=me,U=de,W=k,G=de,K=k,q;t[24]!==h||t[25]!==S?(q=h&&(0,j.jsx)(`div`,{className:k.loading,children:S}),t[24]=h,t[25]=S,t[26]=q):q=t[26];let J=!h&&E.items.length===0&&(0,j.jsx)(`div`,{className:k.noMatches,children:ge}),Y=!h&&E.items.length>0&&(0,j.jsx)(re,{className:k.itemGroup,children:E.items.map(e=>(0,j.jsxs)(ie,{item:e,className:k.item,children:[e.icon&&(0,j.jsx)(o,{className:k.itemIcon,icon:e.icon,"aria-hidden":`true`}),(0,j.jsx)(pe,{className:k.itemText,children:_e?(0,j.jsx)(fe,{query:w,text:e.label,ignoreCase:!0}):e.label})]},e.value))}),X;t[27]!==G.Content||t[28]!==K.content||t[29]!==q||t[30]!==J||t[31]!==Y?(X=(0,j.jsxs)(G.Content,{className:K.content,children:[q,J,Y]}),t[27]=G.Content,t[28]=K.content,t[29]=q,t[30]=J,t[31]=Y,t[32]=X):X=t[32];let Z;t[33]!==U.Positioner||t[34]!==W.positioner||t[35]!==X?(Z=(0,j.jsx)(U.Positioner,{className:W.positioner,children:X}),t[33]=U.Positioner,t[34]=W.positioner,t[35]=X,t[36]=Z):Z=t[36];let Q;t[37]!==H||t[38]!==Z?(Q=(0,j.jsx)(H,{children:Z}),t[37]=H,t[38]=Z,t[39]=Q):Q=t[39];let $;return t[40]!==E||t[41]!==_||t[42]!==O||t[43]!==P||t[44]!==M||t[45]!==n||t[46]!==v||t[47]!==I||t[48]!==a||t[49]!==L.Root||t[50]!==V||t[51]!==Q?($=(0,j.jsxs)(L.Root,{id:n,collection:E,className:I,style:a,disabled:_,invalid:v,onInputValueChange:O,onValueChange:M,onOpenChange:P,closeOnSelect:!0,children:[V,Q]}),t[40]=E,t[41]=_,t[42]=O,t[43]=P,t[44]=M,t[45]=n,t[46]=v,t[47]=I,t[48]=a,t[49]=L.Root,t[50]=V,t[51]=Q,t[52]=$):$=t[52],$}})),P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;t((()=>{P=e(n(),1),s(),N(),F=r(),{fn:I}=__STORYBOOK_MODULE_TEST__,L={title:`Design System/Autocomplete`,component:M,parameters:{layout:`centered`},argTypes:{options:{control:`object`,description:`Options to display in the autocomplete dropdown`},placeholder:{control:`text`,description:`Placeholder text when input is empty`},highlightMatch:{control:`boolean`,description:`Whether to highlight the matching text in the dropdown options`},showTrigger:{control:`boolean`,description:`Whether to show the dropdown trigger (arrow) button`},startAdornment:{control:`object`,description:`Content to display at the start of the input (e.g., a search icon)`},locale:{control:`object`,description:`Locale strings for the autocomplete component`}},args:{onValueChange:I(),onInputValueChange:I()}},R=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`},{value:`elderberry`,label:`Elderberry`},{value:`fig`,label:`Fig`},{value:`grape`,label:`Grape`},{value:`honeydew`,label:`Honeydew`},{value:`kiwi`,label:`Kiwi`},{value:`lemon`,label:`Lemon`},{value:`mango`,label:`Mango`},{value:`nectarine`,label:`Nectarine`}],z=[{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`},{value:`au`,label:`Australia`},{value:`de`,label:`Germany`},{value:`fr`,label:`France`},{value:`it`,label:`Italy`},{value:`es`,label:`Spain`},{value:`jp`,label:`Japan`},{value:`cn`,label:`China`}],B={render:e=>(0,F.jsx)(M,{...e}),args:{options:R,showTrigger:!0,placeholder:`Select or type to search...`,style:{width:`300px`}}},V={render:e=>(0,F.jsx)(M,{...e}),args:{options:R,showTrigger:!1,placeholder:`Start typing to search...`,style:{width:`300px`}}},H={render:e=>(0,F.jsx)(M,{...e}),args:{options:z,showTrigger:!1,startAdornment:(0,F.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`,style:{width:`300px`}}},U={render:()=>(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,F.jsxs)(`div`,{style:{width:`300px`},children:[(0,F.jsx)(`p`,{children:`Default (with trigger)`}),(0,F.jsx)(M,{options:R,showTrigger:!0,placeholder:`Select or type...`})]}),(0,F.jsxs)(`div`,{style:{width:`300px`},children:[(0,F.jsx)(`p`,{children:`Search Mode (no trigger)`}),(0,F.jsx)(M,{options:R,showTrigger:!1,placeholder:`Start typing...`})]}),(0,F.jsxs)(`div`,{style:{width:`300px`},children:[(0,F.jsx)(`p`,{children:`Search with Icon`}),(0,F.jsx)(M,{options:z,showTrigger:!1,startAdornment:(0,F.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`})]})]})},W={render:()=>(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,F.jsxs)(`div`,{style:{width:`300px`},children:[(0,F.jsx)(`p`,{children:`Disabled`}),(0,F.jsx)(M,{options:R,disabled:!0,placeholder:`Disabled autocomplete...`})]}),(0,F.jsxs)(`div`,{style:{width:`300px`},children:[(0,F.jsx)(`p`,{children:`Invalid`}),(0,F.jsx)(M,{options:R,invalid:!0,placeholder:`Invalid autocomplete...`})]})]})},G=150,K=async e=>(await new Promise(e=>setTimeout(e,G)),z.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))),q=async()=>(await new Promise(e=>setTimeout(e,G)),z),J={render:e=>{let[t,n]=(0,P.useState)([]),[r,i]=(0,P.useState)(!1),a=async t=>{if(e.onInputValueChange?.(t),!t){n([]);return}i(!0),n(await K(t)),i(!1)};return(0,F.jsx)(M,{...e,options:t,loading:r,onInputValueChange:a,showTrigger:!1,startAdornment:(0,F.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries (async)...`,locale:{noMatches:`No results found`},style:{width:`300px`}})}},Y={render:e=>{let[t,n]=(0,P.useState)([]),[r,i]=(0,P.useState)(!0);return(0,P.useEffect)(()=>{q().then(e=>{n(e),i(!1)})},[]),(0,F.jsx)(M,{...e,options:t,loading:r,placeholder:`Select a country...`,style:{width:`300px`}})}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <DsAutocomplete {...args} />,
  args: {
    options: mockOptions,
    showTrigger: true,
    placeholder: 'Select or type to search...',
    style: {
      width: '300px'
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <DsAutocomplete {...args} />,
  args: {
    options: mockOptions,
    showTrigger: false,
    placeholder: 'Start typing to search...',
    style: {
      width: '300px'
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`SearchMode`,`SearchWithIcon`,`AllVariants`,`States`,`AsyncSearch`,`AsyncOptions`]}))();export{U as AllVariants,Y as AsyncOptions,J as AsyncSearch,B as Default,V as SearchMode,H as SearchWithIcon,W as States,X as __namedExportsOrder,L as default};