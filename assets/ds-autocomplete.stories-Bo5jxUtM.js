import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Z as n,k as r}from"./iframe-DxiyBJXc.js";import{t as i}from"./compiler-runtime-Cp9TWDx8.js";import{t as a}from"./classnames-Dm_LJ4P4.js";import{t as o}from"./ds-icon-S5xNQLyx.js";import{t as s}from"./ds-icon-DipHTmpM.js";import{G as ee,H as te,K as ne,M as re,N as ie,U as ae,V as c,W as oe}from"./dist-DM3X2MFN.js";import{r as se}from"./tooltip-Dzg6y03u.js";import{n as l,t as ce}from"./ds-typography-BkHg4Xv1.js";import{a as u}from"./ds-tooltip.types-CEqP6w6c.js";import{n as le,t as d}from"./ds-stack-Bd34Uibw.js";var f=e((()=>{oe(),te()})),ue=e((()=>{ee()})),p=e((()=>{ie()})),m,h,g,_,v,y,b,de,fe,x,S,pe,C,me,w,T,E,D,O,k,A,j,M=e((()=>{m=`_root_oawgu_45`,h=`_control_oawgu_52`,g=`_input_oawgu_63`,_=`_iconButton_oawgu_77`,v=`_startAdornment_oawgu_133`,y=`_iconContainer_oawgu_141`,b=`_clearButton_oawgu_148`,de=`_trigger_oawgu_176`,fe=`_positioner_oawgu_209`,x=`_content_oawgu_214`,S=`_expand_oawgu_1`,pe=`_collapse_oawgu_1`,C=`_itemGroup_oawgu_275`,me=`_item_oawgu_275`,w=`_indicator_oawgu_297`,T=`_itemIcon_oawgu_298`,E=`_itemText_oawgu_328`,D=`_noMatches_oawgu_342`,O=`_loading_oawgu_343`,k=`_disabled_oawgu_350`,A=`_invalid_oawgu_369`,j={root:m,control:h,input:g,iconButton:_,startAdornment:v,iconContainer:y,clearButton:b,trigger:de,positioner:fe,content:x,expand:S,collapse:pe,itemGroup:C,item:me,indicator:w,itemIcon:T,itemText:E,noMatches:D,loading:O,disabled:k,invalid:A}}));function he(e){return e.label}function ge(e){return e.value}var _e,ve,ye,N,P,F=e((()=>{_e=i(),ve=t(n(),1),f(),ue(),p(),u(),ye=t(a(),1),M(),s(),N=r(),P=e=>{let t=(0,_e.c)(53),{id:n,options:r,loading:i,style:a,className:s,placeholder:ee,disabled:te,invalid:ie,onValueChange:oe,onInputValueChange:l,onOpenChange:ce,locale:u,highlightMatch:le,showTrigger:d,startAdornment:f}=e,ue=r===void 0?[]:r,p=i===void 0?!1:i,m=ee===void 0?`Start typing to search...`:ee,h=te===void 0?!1:te,g=ie===void 0?!1:ie,_;t[0]===u?_=t[1]:(_=u===void 0?{}:u,t[0]=u,t[1]=_);let{loading:v,noMatches:y}=_,b=v===void 0?`Loading...`:v,de=y===void 0?`No matches found`:y,fe=le===void 0?!0:le,x=d===void 0?!0:d,[S,pe]=(0,ve.useState)(``),C;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(C={sensitivity:`base`},t[2]=C):C=t[2];let me=ne(C),w=ae({items:S?ue.filter(e=>me.contains(e.label,S)):ue,itemToString:he,itemToValue:ge}),T;t[3]===l?T=t[4]:(T=e=>{pe(e.inputValue),l?.(e.inputValue)},t[3]=l,t[4]=T);let E=T,D;t[5]===oe?D=t[6]:(D=e=>{let t=e.items[0];oe?.(t?.value??``)},t[5]=oe,t[6]=D);let O=D,k;t[7]===ce?k=t[8]:(k=e=>{ce?.(e.open)},t[7]=ce,t[8]=k);let A=k,M;t[9]!==s||t[10]!==h||t[11]!==g?(M=(0,ye.default)(j.root,{[j.disabled]:h,[j.invalid]:g},s),t[9]=s,t[10]=h,t[11]=g,t[12]=M):M=t[12];let P=M,F=c,I;t[13]===f?I=t[14]:(I=f&&(0,N.jsx)(`span`,{className:j.startAdornment,children:f}),t[13]=f,t[14]=I);let L;t[15]===m?L=t[16]:(L=(0,N.jsx)(c.Input,{className:j.input,placeholder:m}),t[15]=m,t[16]=L);let R;t[17]!==h||t[18]!==x?(R=(0,N.jsx)(c.Context,{children:e=>(0,N.jsxs)(`div`,{className:j.iconContainer,children:[e.inputValue&&!h&&(0,N.jsx)(`button`,{type:`button`,className:j.clearButton,"aria-label":`Clear`,onClick:()=>{e.setValue([]),e.setInputValue(``)},children:(0,N.jsx)(o,{icon:`close`,size:`medium`})}),x&&(0,N.jsx)(c.Trigger,{className:j.trigger,"aria-label":`Toggle dropdown`,children:(0,N.jsx)(o,{icon:`keyboard_arrow_down`,size:`medium`})})]})}),t[17]=h,t[18]=x,t[19]=R):R=t[19];let z;t[20]!==I||t[21]!==L||t[22]!==R?(z=(0,N.jsxs)(c.Control,{className:j.control,children:[I,L,R]}),t[20]=I,t[21]=L,t[22]=R,t[23]=z):z=t[23];let B=se,V=c,H=j,U=c,W=j,G;t[24]!==p||t[25]!==b?(G=p&&(0,N.jsx)(`div`,{className:j.loading,children:b}),t[24]=p,t[25]=b,t[26]=G):G=t[26];let K=!p&&w.items.length===0&&(0,N.jsx)(`div`,{className:j.noMatches,children:de}),q=!p&&w.items.length>0&&(0,N.jsx)(c.ItemGroup,{className:j.itemGroup,children:w.items.map(e=>(0,N.jsxs)(c.Item,{item:e,className:j.item,children:[e.icon&&(0,N.jsx)(o,{className:j.itemIcon,icon:e.icon,"aria-hidden":`true`}),(0,N.jsx)(c.ItemText,{className:j.itemText,children:fe?(0,N.jsx)(re,{query:S,text:e.label,ignoreCase:!0}):e.label})]},e.value))}),J;t[27]!==U.Content||t[28]!==W.content||t[29]!==G||t[30]!==K||t[31]!==q?(J=(0,N.jsxs)(U.Content,{className:W.content,children:[G,K,q]}),t[27]=U.Content,t[28]=W.content,t[29]=G,t[30]=K,t[31]=q,t[32]=J):J=t[32];let Y;t[33]!==V.Positioner||t[34]!==H.positioner||t[35]!==J?(Y=(0,N.jsx)(V.Positioner,{className:H.positioner,children:J}),t[33]=V.Positioner,t[34]=H.positioner,t[35]=J,t[36]=Y):Y=t[36];let X;t[37]!==B||t[38]!==Y?(X=(0,N.jsx)(B,{children:Y}),t[37]=B,t[38]=Y,t[39]=X):X=t[39];let Z;return t[40]!==w||t[41]!==h||t[42]!==E||t[43]!==A||t[44]!==O||t[45]!==n||t[46]!==g||t[47]!==P||t[48]!==a||t[49]!==F.Root||t[50]!==z||t[51]!==X?(Z=(0,N.jsxs)(F.Root,{id:n,collection:w,className:P,style:a,disabled:h,invalid:g,onInputValueChange:E,onValueChange:O,onOpenChange:A,closeOnSelect:!0,children:[z,X]}),t[40]=w,t[41]=h,t[42]=E,t[43]=A,t[44]=O,t[45]=n,t[46]=g,t[47]=P,t[48]=a,t[49]=F.Root,t[50]=z,t[51]=X,t[52]=Z):Z=t[52],Z},P.displayName=`DsAutocomplete`})),I,L,R=e((()=>{I=`_field_1f04r_1`,L={field:I}})),z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,be;e((()=>{z=t(n(),1),s(),le(),ce(),F(),R(),B=r(),V={title:`Components/Autocomplete`,component:P,parameters:{layout:`centered`},decorators:[e=>(0,B.jsx)(`div`,{className:L.field,children:(0,B.jsx)(e,{})})],argTypes:{options:{control:`object`},placeholder:{control:`text`},highlightMatch:{control:`boolean`},showTrigger:{control:`boolean`},loading:{control:`boolean`},disabled:{control:`boolean`},invalid:{control:`boolean`},locale:{control:`object`},startAdornment:{control:!1},onValueChange:{action:`valueChange`},onInputValueChange:{action:`inputValueChange`},onOpenChange:{action:`openChange`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},H={args:{placeholder:`Select or type to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},U={args:{showTrigger:!1,placeholder:`Start typing to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},W={args:{showTrigger:!1,startAdornment:(0,B.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`,options:[{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}]}},G={args:{placeholder:`Select a fruit...`,options:[{value:`apple`,label:`Apple`,icon:`nutrition`},{value:`banana`,label:`Banana`,icon:`nutrition`},{value:`cherry`,label:`Cherry`,icon:`nutrition`}]}},K={args:{highlightMatch:!1,placeholder:`Select or type to search...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},q={args:{loading:!0,placeholder:`Loading options...`,options:[]}},J={args:{disabled:!0,placeholder:`Disabled autocomplete`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},Y={args:{invalid:!0,placeholder:`Invalid autocomplete`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},X={args:{locale:{loading:`Fetching...`,noMatches:`No matching options found`},placeholder:`Search or type...`,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}]}},Z={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,z.useState)([]),[r,i]=(0,z.useState)(!1),a=async t=>{if(e.onInputValueChange?.(t),!t){n([]);return}i(!0),await new Promise(e=>setTimeout(e,150)),n([{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}].filter(e=>e.label.toLowerCase().includes(t.toLowerCase()))),i(!1)};return(0,B.jsx)(P,{...e,options:t,loading:r,onInputValueChange:a,showTrigger:!1,startAdornment:(0,B.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries (async)...`,locale:{noMatches:`No results found`}})}},Q={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,z.useState)([]),[r,i]=(0,z.useState)(!0);return(0,z.useEffect)(()=>{(async()=>{await new Promise(e=>setTimeout(e,150)),n([{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`}]),i(!1)})()},[]),(0,B.jsx)(P,{...e,options:t,loading:r,placeholder:`Select a country...`})}},$={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>{let e=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`}];return(0,B.jsxs)(d,{direction:`column`,gap:`var(--standard)`,width:`320px`,children:[(0,B.jsxs)(d,{direction:`column`,gap:`var(--2xs)`,children:[(0,B.jsx)(l,{variant:`body-xs-reg`,color:`secondary`,children:`Disabled`}),(0,B.jsx)(P,{options:e,disabled:!0,placeholder:`Disabled autocomplete`})]}),(0,B.jsxs)(d,{direction:`column`,gap:`var(--2xs)`,children:[(0,B.jsx)(l,{variant:`body-xs-reg`,color:`secondary`,children:`Invalid`}),(0,B.jsx)(P,{options:e,invalid:!0,placeholder:`Invalid autocomplete`})]})]})}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select or type to search...',
    options: [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }]
  }
}`,...H.parameters?.docs?.source},description:{story:`The default autocomplete opens its dropdown from the trigger arrow or by typing,
and highlights the matching text while the list is filtered. Reach for this when the
user should be able to both browse the full list and search within it.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    showTrigger: false,
    placeholder: 'Start typing to search...',
    options: [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }]
  }
}`,...U.parameters?.docs?.source},description:{story:`Search mode hides the trigger arrow so the list only opens while typing. Use it for
search-style inputs where a persistent dropdown affordance would imply a short, fixed list.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    showTrigger: false,
    startAdornment: <DsIcon icon="search" size="medium" aria-label="search icon" />,
    placeholder: 'Search countries...',
    options: [{
      value: 'us',
      label: 'United States'
    }, {
      value: 'uk',
      label: 'United Kingdom'
    }, {
      value: 'ca',
      label: 'Canada'
    }]
  }
}`,...W.parameters?.docs?.source},description:{story:"A `startAdornment` renders content before the input — most often a search icon — to\nreinforce the search intent without adding a separate label.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a fruit...',
    options: [{
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
    }]
  }
}`,...G.parameters?.docs?.source},description:{story:"Each option can carry an `icon` that renders alongside its label, useful for giving\noptions a recognizable visual anchor.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    highlightMatch: false,
    placeholder: 'Select or type to search...',
    options: [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }]
  }
}`,...K.parameters?.docs?.source},description:{story:"Disable match highlighting when the emphasized `mark` styling would compete with the\noption content, or when matches are handled server-side and no local query is available.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    placeholder: 'Loading options...',
    options: []
  }
}`,...q.parameters?.docs?.source},description:{story:"While `loading` is true a loading message replaces the option list, signalling that\nresults are being fetched. Pair it with server-driven `options` (see AsyncSearch).",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled autocomplete',
    options: [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }]
  }
}`,...J.parameters?.docs?.source},description:{story:`The disabled state blocks all interaction and dims the control. Use it when the field
depends on another selection that has not been made yet.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true,
    placeholder: 'Invalid autocomplete',
    options: [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }]
  }
}`,...Y.parameters?.docs?.source},description:{story:`The invalid state applies an error border for use with external validation — the input
stays focusable so the user can correct their entry.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    locale: {
      loading: 'Fetching...',
      noMatches: 'No matching options found'
    },
    placeholder: 'Search or type...',
    options: [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }]
  }
}`,...X.parameters?.docs?.source},description:{story:"The `locale` prop overrides the loading and empty-state messages so the component can be\ntranslated. Only the strings passed are overridden; omitted keys keep their defaults.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
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
      const countries: DsAutocompleteOption[] = [{
        value: 'us',
        label: 'United States'
      }, {
        value: 'uk',
        label: 'United Kingdom'
      }, {
        value: 'ca',
        label: 'Canada'
      }];
      await new Promise(resolve => setTimeout(resolve, 150));
      setOptions(countries.filter(c => c.label.toLowerCase().includes(value.toLowerCase())));
      setLoading(false);
    };
    return <DsAutocomplete {...args} options={options} loading={loading} onInputValueChange={handleInputValueChange} showTrigger={false} startAdornment={<DsIcon icon="search" size="medium" aria-label="search icon" />} placeholder="Search countries (async)..." locale={{
      noMatches: 'No results found'
    }} />;
  }
}`,...Z.parameters?.docs?.source},description:{story:"For server-driven search, keep the fetched results in local state and feed them back via\n`options` while toggling `loading`. This is the recommended pattern for large or remote\ndatasets that should not be filtered on the client.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [options, setOptions] = useState<DsAutocompleteOption[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const load = async () => {
        await new Promise(resolve => setTimeout(resolve, 150));
        setOptions([{
          value: 'us',
          label: 'United States'
        }, {
          value: 'uk',
          label: 'United Kingdom'
        }, {
          value: 'ca',
          label: 'Canada'
        }]);
        setLoading(false);
      };
      void load();
    }, []);
    return <DsAutocomplete {...args} options={options} loading={loading} placeholder="Select a country..." />;
  }
}`,...Q.parameters?.docs?.source},description:{story:"When the full option set is fetched once on mount, start in a `loading` state and swap in\nthe results when the request resolves. After that the component filters locally.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => {
    const options: DsAutocompleteOption[] = [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry'
    }];
    return <DsStack direction="column" gap="var(--standard)" width="320px">
                <DsStack direction="column" gap="var(--2xs)">
                    <DsTypography variant="body-xs-reg" color="secondary">
                        Disabled
                    </DsTypography>
                    <DsAutocomplete options={options} disabled placeholder="Disabled autocomplete" />
                </DsStack>
                <DsStack direction="column" gap="var(--2xs)">
                    <DsTypography variant="body-xs-reg" color="secondary">
                        Invalid
                    </DsTypography>
                    <DsAutocomplete options={options} invalid placeholder="Invalid autocomplete" />
                </DsStack>
            </DsStack>;
  }
}`,...$.parameters?.docs?.source},description:{story:`Visual comparison of the disabled and invalid states side by side. Reference only —
behavior for each state is covered by the individual stories and browser tests.`,...$.parameters?.docs?.description}}},be=[`Default`,`SearchMode`,`WithStartAdornment`,`WithOptionIcons`,`WithoutHighlight`,`Loading`,`Disabled`,`Invalid`,`Localized`,`AsyncSearch`,`AsyncOptions`,`States`]}))();export{Q as AsyncOptions,Z as AsyncSearch,H as Default,J as Disabled,Y as Invalid,q as Loading,X as Localized,U as SearchMode,$ as States,G as WithOptionIcons,W as WithStartAdornment,K as WithoutHighlight,be as __namedExportsOrder,V as default};