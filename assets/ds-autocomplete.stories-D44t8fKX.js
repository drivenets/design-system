import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Bowpj2Im.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{t as i}from"./classnames-BKwtnCRs.js";import{t as a}from"./compiler-runtime-D1S0sxXa.js";import{i as o}from"./ds-icon.types-CDSzrCw1.js";import{t as s}from"./ds-icon-B9LMLd-3.js";import{n as ee,t as te}from"./list-collection-DSnHeuXB.js";import{c as ne,d as re,f as ie,g as ae,h as oe,i as se,l as ce,m as le,n as ue,p as de,r as c,s as fe,t as pe,u as me}from"./highlight-C3S0uBTN.js";import{t as he}from"./portal-egTz6nUk.js";import{t as l}from"./portal-xm-0Vv0f.js";var u=t((()=>{ee(),ne()})),d=t((()=>{c()})),ge=t((()=>{ue()})),f,p,m,h,g,_,v,y,b,x,S,_e,ve,C,w,ye,T,be,E,D,O,k,A=t((()=>{f=`_root_13b80_41`,p=`_control_13b80_48`,m=`_input_13b80_59`,h=`_iconButton_13b80_74`,g=`_startAdornment_13b80_130`,_=`_iconContainer_13b80_138`,v=`_clearButton_13b80_145`,y=`_trigger_13b80_173`,b=`_positioner_13b80_206`,x=`_content_13b80_211`,S=`_expand_13b80_1`,_e=`_collapse_13b80_1`,ve=`_itemGroup_13b80_272`,C=`_item_13b80_272`,w=`_indicator_13b80_293`,ye=`_itemIcon_13b80_294`,T=`_itemText_13b80_324`,be=`_noMatches_13b80_338`,E=`_loading_13b80_339`,D=`_disabled_13b80_346`,O=`_invalid_13b80_366`,k={root:f,control:p,input:m,iconButton:h,startAdornment:g,iconContainer:_,clearButton:v,trigger:y,positioner:b,content:x,expand:S,collapse:_e,itemGroup:ve,item:C,indicator:w,itemIcon:ye,itemText:T,noMatches:be,loading:E,disabled:D,invalid:O}}));function xe(e){return e.label}function Se(e){return e.value}var Ce,we,Te,j,M,N=t((()=>{Ce=a(),we=e(n(),1),u(),d(),ge(),l(),Te=e(i(),1),A(),s(),j=r(),M=e=>{let t=(0,Ce.c)(53),{id:n,options:r,loading:i,style:a,className:s,placeholder:ee,disabled:ne,invalid:ue,onValueChange:c,onInputValueChange:l,onOpenChange:u,locale:d,highlightMatch:ge,showTrigger:f,startAdornment:p}=e,m=r===void 0?[]:r,h=i===void 0?!1:i,g=ee===void 0?`Start typing to search...`:ee,_=ne===void 0?!1:ne,v=ue===void 0?!1:ue,y;t[0]===d?y=t[1]:(y=d===void 0?{}:d,t[0]=d,t[1]=y);let{loading:b,noMatches:x}=y,S=b===void 0?`Loading...`:b,_e=x===void 0?`No matches found`:x,ve=ge===void 0?!0:ge,C=f===void 0?!0:f,[w,ye]=(0,we.useState)(``),T;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(T={sensitivity:`base`},t[2]=T):T=t[2];let be=se(T),E=te({items:w?m.filter(e=>be.contains(e.label,w)):m,itemToString:xe,itemToValue:Se}),D;t[3]===l?D=t[4]:(D=e=>{ye(e.inputValue),l?.(e.inputValue)},t[3]=l,t[4]=D);let O=D,A;t[5]===c?A=t[6]:(A=e=>{let t=e.items[0];t&&c?.(t.value)},t[5]=c,t[6]=A);let M=A,N;t[7]===u?N=t[8]:(N=e=>{u?.(e.open)},t[7]=u,t[8]=N);let P=N,F;t[9]!==s||t[10]!==_||t[11]!==v?(F=(0,Te.default)(k.root,{[k.disabled]:_,[k.invalid]:v},s),t[9]=s,t[10]=_,t[11]=v,t[12]=F):F=t[12];let I=F,L=fe,R;t[13]===p?R=t[14]:(R=p&&(0,j.jsx)(`span`,{className:k.startAdornment,children:p}),t[13]=p,t[14]=R);let z;t[15]===g?z=t[16]:(z=(0,j.jsx)(de,{className:k.input,placeholder:g}),t[15]=g,t[16]=z);let B;t[17]!==_||t[18]!==C?(B=(0,j.jsx)(oe,{children:e=>(0,j.jsxs)(`div`,{className:k.iconContainer,children:[e.inputValue&&!_&&(0,j.jsx)(ae,{className:k.clearButton,"aria-label":`Clear`,children:(0,j.jsx)(o,{icon:`close`,size:`medium`})}),C&&(0,j.jsx)(ce,{className:k.trigger,"aria-label":`Toggle dropdown`,children:(0,j.jsx)(o,{icon:`keyboard_arrow_down`,size:`medium`})})]})}),t[17]=_,t[18]=C,t[19]=B):B=t[19];let V;t[20]!==R||t[21]!==z||t[22]!==B?(V=(0,j.jsxs)(le,{className:k.control,children:[R,z,B]}),t[20]=R,t[21]=z,t[22]=B,t[23]=V):V=t[23];let H=he,U=fe,W=k,G=fe,K=k,q;t[24]!==h||t[25]!==S?(q=h&&(0,j.jsx)(`div`,{className:k.loading,children:S}),t[24]=h,t[25]=S,t[26]=q):q=t[26];let J=!h&&E.items.length===0&&(0,j.jsx)(`div`,{className:k.noMatches,children:_e}),Y=!h&&E.items.length>0&&(0,j.jsx)(re,{className:k.itemGroup,children:E.items.map(e=>(0,j.jsxs)(ie,{item:e,className:k.item,children:[e.icon&&(0,j.jsx)(o,{className:k.itemIcon,icon:e.icon,"aria-hidden":`true`}),(0,j.jsx)(me,{className:k.itemText,children:ve?(0,j.jsx)(pe,{query:w,text:e.label,ignoreCase:!0}):e.label})]},e.value))}),X;t[27]!==G.Content||t[28]!==K.content||t[29]!==q||t[30]!==J||t[31]!==Y?(X=(0,j.jsxs)(G.Content,{className:K.content,children:[q,J,Y]}),t[27]=G.Content,t[28]=K.content,t[29]=q,t[30]=J,t[31]=Y,t[32]=X):X=t[32];let Z;t[33]!==U.Positioner||t[34]!==W.positioner||t[35]!==X?(Z=(0,j.jsx)(U.Positioner,{className:W.positioner,children:X}),t[33]=U.Positioner,t[34]=W.positioner,t[35]=X,t[36]=Z):Z=t[36];let Q;t[37]!==H||t[38]!==Z?(Q=(0,j.jsx)(H,{children:Z}),t[37]=H,t[38]=Z,t[39]=Q):Q=t[39];let $;return t[40]!==E||t[41]!==_||t[42]!==O||t[43]!==P||t[44]!==M||t[45]!==n||t[46]!==v||t[47]!==I||t[48]!==a||t[49]!==L.Root||t[50]!==V||t[51]!==Q?($=(0,j.jsxs)(L.Root,{id:n,collection:E,className:I,style:a,disabled:_,invalid:v,onInputValueChange:O,onValueChange:M,onOpenChange:P,closeOnSelect:!0,children:[V,Q]}),t[40]=E,t[41]=_,t[42]=O,t[43]=P,t[44]=M,t[45]=n,t[46]=v,t[47]=I,t[48]=a,t[49]=L.Root,t[50]=V,t[51]=Q,t[52]=$):$=t[52],$}})),P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ee;t((()=>{P=e(n(),1),s(),N(),F=r(),{expect:I,fn:L,screen:R,userEvent:z,within:B}=__STORYBOOK_MODULE_TEST__,V={title:`Design System/Autocomplete`,component:M,parameters:{layout:`centered`},argTypes:{options:{control:`object`,description:`Options to display in the autocomplete dropdown`},placeholder:{control:`text`,description:`Placeholder text when input is empty`},highlightMatch:{control:`boolean`,description:`Whether to highlight the matching text in the dropdown options`},showTrigger:{control:`boolean`,description:`Whether to show the dropdown trigger (arrow) button`},startAdornment:{control:`object`,description:`Content to display at the start of the input (e.g., a search icon)`},locale:{control:`object`,description:`Locale strings for the autocomplete component`}},args:{onValueChange:L(),onInputValueChange:L()}},H=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`},{value:`elderberry`,label:`Elderberry`},{value:`fig`,label:`Fig`},{value:`grape`,label:`Grape`},{value:`honeydew`,label:`Honeydew`},{value:`kiwi`,label:`Kiwi`},{value:`lemon`,label:`Lemon`},{value:`mango`,label:`Mango`},{value:`nectarine`,label:`Nectarine`}],U=[{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`},{value:`au`,label:`Australia`},{value:`de`,label:`Germany`},{value:`fr`,label:`France`},{value:`it`,label:`Italy`},{value:`es`,label:`Spain`},{value:`jp`,label:`Japan`},{value:`cn`,label:`China`}],W={render:e=>(0,F.jsx)(M,{...e}),args:{options:H,showTrigger:!0,placeholder:`Select or type to search...`,style:{width:`300px`}},play:async({args:e,canvasElement:t})=>{let n=B(t),r=n.getByRole(`combobox`),i=n.getByRole(`button`,{name:/toggle dropdown/i});await I(i).toBeInTheDocument(),await z.click(i),await I(await R.findByRole(`option`,{name:/Apple/i})).toBeInTheDocument(),await z.click(r),await I(r).toHaveFocus(),await z.type(r,`b`),await I(R.queryByRole(`option`,{name:/Apple/i})).not.toBeInTheDocument(),await I(R.getByRole(`option`,{name:/Banana/i})).toBeInTheDocument(),await I(e.onInputValueChange).toHaveBeenLastCalledWith(`b`),await z.click(R.getByRole(`option`,{name:/Banana/i})),await I(e.onInputValueChange).toHaveBeenLastCalledWith(`Banana`),await I(e.onValueChange).toHaveBeenCalledWith(`banana`);let a=n.getByLabelText(`Clear`);await z.click(a),await I(e.onInputValueChange).toHaveBeenCalledWith(``)}},G={render:e=>(0,F.jsx)(M,{...e}),args:{options:H,showTrigger:!1,placeholder:`Start typing to search...`,style:{width:`300px`}},play:async({args:e,canvasElement:t})=>{let n=B(t),r=n.getByRole(`combobox`);await I(n.queryByLabelText(`Toggle dropdown`)).not.toBeInTheDocument(),await z.click(r),await I(r).toHaveFocus(),await I(n.queryByRole(`listbox`)).not.toBeInTheDocument(),await z.type(r,`a`),await I(e.onInputValueChange).toHaveBeenLastCalledWith(`a`);let i=await R.findByRole(`option`,{name:/Apple/i});await I(i).toBeInTheDocument(),await z.click(i),await I(e.onInputValueChange).toHaveBeenLastCalledWith(`Apple`),await I(e.onValueChange).toHaveBeenCalledWith(`apple`);let a=n.getByLabelText(`Clear`);await z.click(a),await I(e.onInputValueChange).toHaveBeenCalledWith(``)}},K={render:e=>(0,F.jsx)(M,{...e}),args:{options:U,showTrigger:!1,startAdornment:(0,F.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`,style:{width:`300px`}},play:async({args:e,canvasElement:t})=>{let n=B(t),r=n.getByRole(`combobox`);await I(n.getByLabelText(`search icon`)).toBeInTheDocument(),await z.type(r,`Sta`),await I(e.onInputValueChange).toHaveBeenLastCalledWith(`Sta`);let i=await R.findByRole(`option`,{name:/United States/i});await I(i).toBeInTheDocument(),await z.click(i),await I(e.onInputValueChange).toHaveBeenCalledWith(`United States`),await I(e.onValueChange).toHaveBeenCalledWith(`us`),await I(r).toHaveValue(`United States`)}},q={render:()=>(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,F.jsxs)(`div`,{style:{width:`300px`},children:[(0,F.jsx)(`p`,{children:`Default (with trigger)`}),(0,F.jsx)(M,{options:H,showTrigger:!0,placeholder:`Select or type...`})]}),(0,F.jsxs)(`div`,{style:{width:`300px`},children:[(0,F.jsx)(`p`,{children:`Search Mode (no trigger)`}),(0,F.jsx)(M,{options:H,showTrigger:!1,placeholder:`Start typing...`})]}),(0,F.jsxs)(`div`,{style:{width:`300px`},children:[(0,F.jsx)(`p`,{children:`Search with Icon`}),(0,F.jsx)(M,{options:U,showTrigger:!1,startAdornment:(0,F.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`})]})]}),play:async({canvasElement:e})=>{let t=B(e).getAllByRole(`combobox`);await I(t).toHaveLength(3);let n=t[0];await z.click(n),await I(n).toHaveFocus(),await z.type(n,`ap`),await I(await R.findByText(`Apple`)).toBeInTheDocument(),await z.clear(n),await z.keyboard(`{Escape}`);let r=t[1];await z.click(r),await z.type(r,`ban`),await I(await R.findByText(`Banana`)).toBeInTheDocument(),await z.clear(r),await z.keyboard(`{Escape}`)}},J={render:()=>(0,F.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,F.jsxs)(`div`,{style:{width:`300px`},children:[(0,F.jsx)(`p`,{children:`Disabled`}),(0,F.jsx)(M,{options:H,disabled:!0,placeholder:`Disabled autocomplete...`})]}),(0,F.jsxs)(`div`,{style:{width:`300px`},children:[(0,F.jsx)(`p`,{children:`Invalid`}),(0,F.jsx)(M,{options:H,invalid:!0,placeholder:`Invalid autocomplete...`})]})]}),play:async({canvasElement:e})=>{let t=B(e).getAllByRole(`combobox`);await I(t).toHaveLength(2);let n=t[0];await I(n).toBeDisabled();let r=t[1];await I(r).toBeInTheDocument(),await I(r).not.toBeDisabled()}},Y=150,X=async e=>(await new Promise(e=>setTimeout(e,Y)),U.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))),Z=async()=>(await new Promise(e=>setTimeout(e,Y)),U),Q={render:e=>{let[t,n]=(0,P.useState)([]),[r,i]=(0,P.useState)(!1),a=async t=>{if(e.onInputValueChange?.(t),!t){n([]);return}i(!0),n(await X(t)),i(!1)};return(0,F.jsx)(M,{...e,options:t,loading:r,onInputValueChange:a,showTrigger:!1,startAdornment:(0,F.jsx)(o,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries (async)...`,locale:{noMatches:`No results found`},style:{width:`300px`}})},play:async({args:e,canvasElement:t})=>{let n=B(t),r=n.getByRole(`combobox`);await z.type(r,`Uni`);let i=await R.findByRole(`option`,{name:/United States/i});await I(i).toBeInTheDocument(),await I(R.getByRole(`option`,{name:/United Kingdom/i})).toBeInTheDocument(),await I(e.onInputValueChange).toHaveBeenLastCalledWith(`Uni`),await z.click(i),await I(e.onValueChange).toHaveBeenCalledWith(`us`),await I(e.onInputValueChange).toHaveBeenLastCalledWith(`United States`),await I(r).toHaveValue(`United States`);let a=n.getByLabelText(`Clear`);await z.click(a),await I(e.onInputValueChange).toHaveBeenLastCalledWith(``),await I(r).toHaveValue(``),await z.type(r,`zzz`),await R.findByText(`No results found`),await I(R.queryByRole(`option`)).not.toBeInTheDocument(),await z.clear(r),await z.type(r,`an`),await I((await R.findAllByRole(`option`)).length).toBeGreaterThanOrEqual(2),await I(R.getByRole(`option`,{name:/Canada/i})).toBeInTheDocument(),await I(R.getByRole(`option`,{name:/France/i})).toBeInTheDocument(),await z.type(r,`ad`),await R.findByRole(`option`,{name:/Canada/i}),await I(R.queryByRole(`option`,{name:/France/i})).not.toBeInTheDocument()}},$={render:e=>{let[t,n]=(0,P.useState)([]),[r,i]=(0,P.useState)(!0);return(0,P.useEffect)(()=>{Z().then(e=>{n(e),i(!1)})},[]),(0,F.jsx)(M,{...e,options:t,loading:r,placeholder:`Select a country...`,style:{width:`300px`}})},play:async({args:e,canvasElement:t})=>{let n=B(t),r=n.getByRole(`combobox`),i=n.getByRole(`button`,{name:/toggle dropdown/i});await z.click(i),await I(await R.findByRole(`option`,{name:/United States/i})).toBeInTheDocument(),await I(R.getByRole(`option`,{name:/Japan/i})).toBeInTheDocument(),await z.type(r,`Un`),await I(R.getByRole(`option`,{name:/United States/i})).toBeInTheDocument(),await I(R.getByRole(`option`,{name:/United Kingdom/i})).toBeInTheDocument(),await I(R.queryByRole(`option`,{name:/Japan/i})).not.toBeInTheDocument(),await z.click(R.getByRole(`option`,{name:/United States/i})),await I(e.onValueChange).toHaveBeenCalledWith(`us`)}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <DsAutocomplete {...args} />,
  args: {
    options: mockOptions,
    showTrigger: true,
    placeholder: 'Select or type to search...',
    style: {
      width: '300px'
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    const trigger = canvas.getByRole('button', {
      name: /toggle dropdown/i
    });
    await expect(trigger).toBeInTheDocument();
    await userEvent.click(trigger);
    const appleOption = await screen.findByRole('option', {
      name: /Apple/i
    });
    await expect(appleOption).toBeInTheDocument();
    await userEvent.click(input);
    await expect(input).toHaveFocus();
    await userEvent.type(input, 'b');
    await expect(screen.queryByRole('option', {
      name: /Apple/i
    })).not.toBeInTheDocument();
    await expect(screen.getByRole('option', {
      name: /Banana/i
    })).toBeInTheDocument();
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('b');
    await userEvent.click(screen.getByRole('option', {
      name: /Banana/i
    }));
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('Banana');
    await expect(args.onValueChange).toHaveBeenCalledWith('banana');
    const clearButton = canvas.getByLabelText('Clear');
    await userEvent.click(clearButton);
    await expect(args.onInputValueChange).toHaveBeenCalledWith('');
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <DsAutocomplete {...args} />,
  args: {
    options: mockOptions,
    showTrigger: false,
    placeholder: 'Start typing to search...',
    style: {
      width: '300px'
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    const trigger = canvas.queryByLabelText('Toggle dropdown');
    await expect(trigger).not.toBeInTheDocument();
    await userEvent.click(input);
    await expect(input).toHaveFocus();
    await expect(canvas.queryByRole('listbox')).not.toBeInTheDocument();
    await userEvent.type(input, 'a');
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('a');
    const appleOption = await screen.findByRole('option', {
      name: /Apple/i
    });
    await expect(appleOption).toBeInTheDocument();
    await userEvent.click(appleOption);
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('Apple');
    await expect(args.onValueChange).toHaveBeenCalledWith('apple');
    const clearButton = canvas.getByLabelText('Clear');
    await userEvent.click(clearButton);
    await expect(args.onInputValueChange).toHaveBeenCalledWith('');
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <DsAutocomplete {...args} />,
  args: {
    options: countries,
    showTrigger: false,
    startAdornment: <DsIcon icon="search" size="medium" aria-label="search icon" />,
    placeholder: 'Search countries...',
    style: {
      width: '300px'
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    const searchIcon = canvas.getByLabelText('search icon');
    await expect(searchIcon).toBeInTheDocument();
    await userEvent.type(input, 'Sta');
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('Sta');
    const usOption = await screen.findByRole('option', {
      name: /United States/i
    });
    await expect(usOption).toBeInTheDocument();
    await userEvent.click(usOption);
    await expect(args.onInputValueChange).toHaveBeenCalledWith('United States');
    await expect(args.onValueChange).toHaveBeenCalledWith('us');
    await expect(input).toHaveValue('United States');
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole('combobox');
    await expect(inputs).toHaveLength(3);
    const defaultInput = inputs[0] as HTMLInputElement;
    await userEvent.click(defaultInput);
    await expect(defaultInput).toHaveFocus();
    await userEvent.type(defaultInput, 'ap');
    const appleOption = await screen.findByText('Apple');
    await expect(appleOption).toBeInTheDocument();
    await userEvent.clear(defaultInput);
    await userEvent.keyboard('{Escape}');
    const searchModeInput = inputs[1] as HTMLInputElement;
    await userEvent.click(searchModeInput);
    await userEvent.type(searchModeInput, 'ban');
    const bananaOption = await screen.findByText('Banana');
    await expect(bananaOption).toBeInTheDocument();
    await userEvent.clear(searchModeInput);
    await userEvent.keyboard('{Escape}');
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole('combobox');
    await expect(inputs).toHaveLength(2);
    const disabledInput = inputs[0] as HTMLInputElement;
    await expect(disabledInput).toBeDisabled();
    const invalidInput = inputs[1] as HTMLInputElement;
    await expect(invalidInput).toBeInTheDocument();
    await expect(invalidInput).not.toBeDisabled();
  }
}`,...J.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.type(input, 'Uni');
    const usOption = await screen.findByRole('option', {
      name: /United States/i
    });
    await expect(usOption).toBeInTheDocument();
    await expect(screen.getByRole('option', {
      name: /United Kingdom/i
    })).toBeInTheDocument();
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('Uni');
    await userEvent.click(usOption);
    await expect(args.onValueChange).toHaveBeenCalledWith('us');
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('United States');
    await expect(input).toHaveValue('United States');
    const clearButton = canvas.getByLabelText('Clear');
    await userEvent.click(clearButton);
    await expect(args.onInputValueChange).toHaveBeenLastCalledWith('');
    await expect(input).toHaveValue('');
    await userEvent.type(input, 'zzz');
    await screen.findByText('No results found');
    await expect(screen.queryByRole('option')).not.toBeInTheDocument();
    await userEvent.clear(input);
    await userEvent.type(input, 'an');
    const options = await screen.findAllByRole('option');
    await expect(options.length).toBeGreaterThanOrEqual(2);
    await expect(screen.getByRole('option', {
      name: /Canada/i
    })).toBeInTheDocument();
    await expect(screen.getByRole('option', {
      name: /France/i
    })).toBeInTheDocument();
    await userEvent.type(input, 'ad');
    await screen.findByRole('option', {
      name: /Canada/i
    });
    await expect(screen.queryByRole('option', {
      name: /France/i
    })).not.toBeInTheDocument();
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    const trigger = canvas.getByRole('button', {
      name: /toggle dropdown/i
    });
    await userEvent.click(trigger);
    const usOption = await screen.findByRole('option', {
      name: /United States/i
    });
    await expect(usOption).toBeInTheDocument();
    await expect(screen.getByRole('option', {
      name: /Japan/i
    })).toBeInTheDocument();
    await userEvent.type(input, 'Un');
    await expect(screen.getByRole('option', {
      name: /United States/i
    })).toBeInTheDocument();
    await expect(screen.getByRole('option', {
      name: /United Kingdom/i
    })).toBeInTheDocument();
    await expect(screen.queryByRole('option', {
      name: /Japan/i
    })).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('option', {
      name: /United States/i
    }));
    await expect(args.onValueChange).toHaveBeenCalledWith('us');
  }
}`,...$.parameters?.docs?.source}}},Ee=[`Default`,`SearchMode`,`SearchWithIcon`,`AllVariants`,`States`,`AsyncSearch`,`AsyncOptions`]}))();export{q as AllVariants,$ as AsyncOptions,Q as AsyncSearch,W as Default,G as SearchMode,K as SearchWithIcon,J as States,Ee as __namedExportsOrder,V as default};