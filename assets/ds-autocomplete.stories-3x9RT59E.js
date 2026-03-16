import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CCq6bv3x.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{t as i}from"./classnames-Ce489xFf.js";import{i as a}from"./ds-icon.types-DO-j-_np.js";import{t as o}from"./ds-icon-BdpcGtWb.js";import{n as s,t as ee}from"./list-collection-DmAZ2P8_.js";import{_ as te,c as ne,d as re,f as ie,g as ae,h as oe,i as se,l as ce,m as le,n as c,p as ue,r as l,s as u,t as de,u as fe,v as pe}from"./highlight-DqISsmC7.js";import{t as me}from"./portal-rrUFDbsc.js";import{t as he}from"./portal-BqXUxJ0w.js";var ge=t((()=>{s(),u()})),_e=t((()=>{l()})),d=t((()=>{c()})),f,p,m,h,g,_,v,y,b,x,ve,S,C,w,T,E,D,O,k,A,j,M,ye=t((()=>{f=`_root_13b80_41`,p=`_control_13b80_48`,m=`_input_13b80_59`,h=`_iconButton_13b80_74`,g=`_startAdornment_13b80_130`,_=`_iconContainer_13b80_138`,v=`_clearButton_13b80_145`,y=`_trigger_13b80_173`,b=`_positioner_13b80_206`,x=`_content_13b80_211`,ve=`_expand_13b80_1`,S=`_collapse_13b80_1`,C=`_itemGroup_13b80_272`,w=`_item_13b80_272`,T=`_indicator_13b80_293`,E=`_itemIcon_13b80_294`,D=`_itemText_13b80_324`,O=`_noMatches_13b80_338`,k=`_loading_13b80_339`,A=`_disabled_13b80_346`,j=`_invalid_13b80_366`,M={root:f,control:p,input:m,iconButton:h,startAdornment:g,iconContainer:_,clearButton:v,trigger:y,positioner:b,content:x,expand:ve,collapse:S,itemGroup:C,item:w,indicator:T,itemIcon:E,itemText:D,noMatches:O,loading:k,disabled:A,invalid:j}})),N,P,F,I,be=t((()=>{N=e(n(),1),ge(),_e(),d(),he(),P=e(i(),1),ye(),o(),F=r(),I=({id:e,options:t=[],loading:n=!1,style:r,className:i,placeholder:o=`Start typing to search...`,disabled:s=!1,invalid:c=!1,onValueChange:l,onInputValueChange:u,onOpenChange:he,locale:{loading:ge=`Loading...`,noMatches:_e=`No matches found`}={},highlightMatch:d=!0,showTrigger:f=!0,startAdornment:p})=>{let[m,h]=(0,N.useState)(``),g=se({sensitivity:`base`}),_=ee({items:m?t.filter(e=>g.contains(e.label,m)):t,itemToString:e=>e.label,itemToValue:e=>e.value}),v=e=>{h(e.inputValue),u?.(e.inputValue)},y=e=>{let t=e.items[0];t&&l?.(t.value)},b=e=>{he?.(e.open)},x=(0,P.default)(M.root,{[M.disabled]:s,[M.invalid]:c},i);return(0,F.jsxs)(ce,{id:e,collection:_,className:x,style:r,disabled:s,invalid:c,onInputValueChange:v,onValueChange:y,onOpenChange:b,closeOnSelect:!0,children:[(0,F.jsxs)(oe,{className:M.control,children:[p&&(0,F.jsx)(`span`,{className:M.startAdornment,children:p}),(0,F.jsx)(le,{className:M.input,placeholder:o}),(0,F.jsx)(ae,{children:e=>(0,F.jsxs)(`div`,{className:M.iconContainer,children:[e.inputValue&&!s&&(0,F.jsx)(pe,{className:M.clearButton,"aria-label":`Clear`,children:(0,F.jsx)(a,{icon:`close`,size:`medium`})}),f&&(0,F.jsx)(ne,{className:M.trigger,"aria-label":`Toggle dropdown`,children:(0,F.jsx)(a,{icon:`keyboard_arrow_down`,size:`medium`})})]})})]}),(0,F.jsx)(me,{children:(0,F.jsx)(fe,{className:M.positioner,children:(0,F.jsxs)(te,{className:M.content,children:[n&&(0,F.jsx)(`div`,{className:M.loading,children:ge}),!n&&_.items.length===0&&(0,F.jsx)(`div`,{className:M.noMatches,children:_e}),!n&&_.items.length>0&&(0,F.jsx)(ie,{className:M.itemGroup,children:_.items.map(e=>(0,F.jsxs)(ue,{item:e,className:M.item,children:[e.icon&&(0,F.jsx)(a,{className:M.itemIcon,icon:e.icon,"aria-hidden":`true`}),(0,F.jsx)(re,{className:M.itemText,children:d?(0,F.jsx)(de,{query:m,text:e.label,ignoreCase:!0}):e.label})]},e.value))})]})})})]})},I.__docgenInfo={description:``,methods:[],displayName:`DsAutocomplete`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier for the autocomplete component`},options:{required:!1,tsType:{name:`Array`,elements:[{name:`DsAutocompleteOption`}],raw:`DsAutocompleteOption[]`},description:`Options to display in the dropdown.
For async/server-driven search, update this prop with fetched results.`,defaultValue:{value:`[]`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:`Whether the autocomplete is in a loading state.
When true, a loading message is shown in the dropdown.`,defaultValue:{value:`false`,computed:!1}},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Additional styles to apply to the component`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class names`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text to display when input is empty`,defaultValue:{value:`'Start typing to search...'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the autocomplete is disabled`,defaultValue:{value:`false`,computed:!1}},invalid:{required:!1,tsType:{name:`boolean`},description:`Whether the autocomplete is in an invalid state`,defaultValue:{value:`false`,computed:!1}},locale:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
	/**
	 * Message to display while results are loading
	 * @default 'Loading...'
	 */
	loading?: string;
	/**
	 * Message to display when no options match the input
	 * @default 'No matches found'
	 */
	noMatches?: string;
}`,signature:{properties:[{key:`loading`,value:{name:`string`,required:!1},description:`Message to display while results are loading
@default 'Loading...'`},{key:`noMatches`,value:{name:`string`,required:!1},description:`Message to display when no options match the input
@default 'No matches found'`}]}},description:`Locale strings for the autocomplete component`,defaultValue:{value:`{}`,computed:!1}},highlightMatch:{required:!1,tsType:{name:`boolean`},description:`Whether to highlight the matching text in the dropdown options
@default true`,defaultValue:{value:`true`,computed:!1}},showTrigger:{required:!1,tsType:{name:`boolean`},description:`Whether to show the dropdown trigger (arrow) button.
If false, the dropdown will only open on typing.
@default true`,defaultValue:{value:`true`,computed:!1}},startAdornment:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Content to display at the start of the input (e.g., a search icon).`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Event handler called when the value changes (when an option is selected)`},onInputValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Event handler called when the input value changes (on every keystroke)`},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:`Event handler called when the dropdown opens or closes`}}}})),L,R,z,B,V,H,U,xe,W,G,K,q,J,Y,X,Z,Se,Ce,Q,$,we;t((()=>{L=e(n(),1),o(),be(),R=r(),{expect:z,fn:B,screen:V,userEvent:H,within:U}=__STORYBOOK_MODULE_TEST__,xe={title:`Design System/Autocomplete`,component:I,parameters:{layout:`centered`},argTypes:{options:{control:`object`,description:`Options to display in the autocomplete dropdown`},placeholder:{control:`text`,description:`Placeholder text when input is empty`},highlightMatch:{control:`boolean`,description:`Whether to highlight the matching text in the dropdown options`},showTrigger:{control:`boolean`,description:`Whether to show the dropdown trigger (arrow) button`},startAdornment:{control:`object`,description:`Content to display at the start of the input (e.g., a search icon)`},locale:{control:`object`,description:`Locale strings for the autocomplete component`}},args:{onValueChange:B(),onInputValueChange:B()}},W=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`},{value:`elderberry`,label:`Elderberry`},{value:`fig`,label:`Fig`},{value:`grape`,label:`Grape`},{value:`honeydew`,label:`Honeydew`},{value:`kiwi`,label:`Kiwi`},{value:`lemon`,label:`Lemon`},{value:`mango`,label:`Mango`},{value:`nectarine`,label:`Nectarine`}],G=[{value:`us`,label:`United States`},{value:`uk`,label:`United Kingdom`},{value:`ca`,label:`Canada`},{value:`au`,label:`Australia`},{value:`de`,label:`Germany`},{value:`fr`,label:`France`},{value:`it`,label:`Italy`},{value:`es`,label:`Spain`},{value:`jp`,label:`Japan`},{value:`cn`,label:`China`}],K={render:e=>(0,R.jsx)(I,{...e}),args:{options:W,showTrigger:!0,placeholder:`Select or type to search...`,style:{width:`300px`}},play:async({args:e,canvasElement:t})=>{let n=U(t),r=n.getByRole(`combobox`),i=n.getByRole(`button`,{name:/toggle dropdown/i});await z(i).toBeInTheDocument(),await H.click(i),await z(await V.findByRole(`option`,{name:/Apple/i})).toBeInTheDocument(),await H.click(r),await z(r).toHaveFocus(),await H.type(r,`b`),await z(V.queryByRole(`option`,{name:/Apple/i})).not.toBeInTheDocument(),await z(V.getByRole(`option`,{name:/Banana/i})).toBeInTheDocument(),await z(e.onInputValueChange).toHaveBeenLastCalledWith(`b`),await H.click(V.getByRole(`option`,{name:/Banana/i})),await z(e.onInputValueChange).toHaveBeenLastCalledWith(`Banana`),await z(e.onValueChange).toHaveBeenCalledWith(`banana`);let a=n.getByLabelText(`Clear`);await H.click(a),await z(e.onInputValueChange).toHaveBeenCalledWith(``)}},q={render:e=>(0,R.jsx)(I,{...e}),args:{options:W,showTrigger:!1,placeholder:`Start typing to search...`,style:{width:`300px`}},play:async({args:e,canvasElement:t})=>{let n=U(t),r=n.getByRole(`combobox`);await z(n.queryByLabelText(`Toggle dropdown`)).not.toBeInTheDocument(),await H.click(r),await z(r).toHaveFocus(),await z(n.queryByRole(`listbox`)).not.toBeInTheDocument(),await H.type(r,`a`),await z(e.onInputValueChange).toHaveBeenLastCalledWith(`a`);let i=await V.findByRole(`option`,{name:/Apple/i});await z(i).toBeInTheDocument(),await H.click(i),await z(e.onInputValueChange).toHaveBeenLastCalledWith(`Apple`),await z(e.onValueChange).toHaveBeenCalledWith(`apple`);let a=n.getByLabelText(`Clear`);await H.click(a),await z(e.onInputValueChange).toHaveBeenCalledWith(``)}},J={render:e=>(0,R.jsx)(I,{...e}),args:{options:G,showTrigger:!1,startAdornment:(0,R.jsx)(a,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`,style:{width:`300px`}},play:async({args:e,canvasElement:t})=>{let n=U(t),r=n.getByRole(`combobox`);await z(n.getByLabelText(`search icon`)).toBeInTheDocument(),await H.type(r,`Sta`),await z(e.onInputValueChange).toHaveBeenLastCalledWith(`Sta`);let i=await V.findByRole(`option`,{name:/United States/i});await z(i).toBeInTheDocument(),await H.click(i),await z(e.onInputValueChange).toHaveBeenCalledWith(`United States`),await z(e.onValueChange).toHaveBeenCalledWith(`us`),await z(r).toHaveValue(`United States`)}},Y={render:()=>(0,R.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,R.jsxs)(`div`,{style:{width:`300px`},children:[(0,R.jsx)(`p`,{children:`Default (with trigger)`}),(0,R.jsx)(I,{options:W,showTrigger:!0,placeholder:`Select or type...`})]}),(0,R.jsxs)(`div`,{style:{width:`300px`},children:[(0,R.jsx)(`p`,{children:`Search Mode (no trigger)`}),(0,R.jsx)(I,{options:W,showTrigger:!1,placeholder:`Start typing...`})]}),(0,R.jsxs)(`div`,{style:{width:`300px`},children:[(0,R.jsx)(`p`,{children:`Search with Icon`}),(0,R.jsx)(I,{options:G,showTrigger:!1,startAdornment:(0,R.jsx)(a,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries...`})]})]}),play:async({canvasElement:e})=>{let t=U(e).getAllByRole(`combobox`);await z(t).toHaveLength(3);let n=t[0];await H.click(n),await z(n).toHaveFocus(),await H.type(n,`ap`),await z(await V.findByText(`Apple`)).toBeInTheDocument(),await H.clear(n),await H.keyboard(`{Escape}`);let r=t[1];await H.click(r),await H.type(r,`ban`),await z(await V.findByText(`Banana`)).toBeInTheDocument(),await H.clear(r),await H.keyboard(`{Escape}`)}},X={render:()=>(0,R.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,R.jsxs)(`div`,{style:{width:`300px`},children:[(0,R.jsx)(`p`,{children:`Disabled`}),(0,R.jsx)(I,{options:W,disabled:!0,placeholder:`Disabled autocomplete...`})]}),(0,R.jsxs)(`div`,{style:{width:`300px`},children:[(0,R.jsx)(`p`,{children:`Invalid`}),(0,R.jsx)(I,{options:W,invalid:!0,placeholder:`Invalid autocomplete...`})]})]}),play:async({canvasElement:e})=>{let t=U(e).getAllByRole(`combobox`);await z(t).toHaveLength(2);let n=t[0];await z(n).toBeDisabled();let r=t[1];await z(r).toBeInTheDocument(),await z(r).not.toBeDisabled()}},Z=150,Se=async e=>(await new Promise(e=>setTimeout(e,Z)),G.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()))),Ce=async()=>(await new Promise(e=>setTimeout(e,Z)),G),Q={render:e=>{let[t,n]=(0,L.useState)([]),[r,i]=(0,L.useState)(!1),o=async t=>{if(e.onInputValueChange?.(t),!t){n([]);return}i(!0),n(await Se(t)),i(!1)};return(0,R.jsx)(I,{...e,options:t,loading:r,onInputValueChange:o,showTrigger:!1,startAdornment:(0,R.jsx)(a,{icon:`search`,size:`medium`,"aria-label":`search icon`}),placeholder:`Search countries (async)...`,locale:{noMatches:`No results found`},style:{width:`300px`}})},play:async({args:e,canvasElement:t})=>{let n=U(t),r=n.getByRole(`combobox`);await H.type(r,`Uni`);let i=await V.findByRole(`option`,{name:/United States/i});await z(i).toBeInTheDocument(),await z(V.getByRole(`option`,{name:/United Kingdom/i})).toBeInTheDocument(),await z(e.onInputValueChange).toHaveBeenLastCalledWith(`Uni`),await H.click(i),await z(e.onValueChange).toHaveBeenCalledWith(`us`),await z(e.onInputValueChange).toHaveBeenLastCalledWith(`United States`),await z(r).toHaveValue(`United States`);let a=n.getByLabelText(`Clear`);await H.click(a),await z(e.onInputValueChange).toHaveBeenLastCalledWith(``),await z(r).toHaveValue(``),await H.type(r,`zzz`),await V.findByText(`No results found`),await z(V.queryByRole(`option`)).not.toBeInTheDocument(),await H.clear(r),await H.type(r,`an`),await z((await V.findAllByRole(`option`)).length).toBeGreaterThanOrEqual(2),await z(V.getByRole(`option`,{name:/Canada/i})).toBeInTheDocument(),await z(V.getByRole(`option`,{name:/France/i})).toBeInTheDocument(),await H.type(r,`ad`),await V.findByRole(`option`,{name:/Canada/i}),await z(V.queryByRole(`option`,{name:/France/i})).not.toBeInTheDocument()}},$={render:e=>{let[t,n]=(0,L.useState)([]),[r,i]=(0,L.useState)(!0);return(0,L.useEffect)(()=>{Ce().then(e=>{n(e),i(!1)})},[]),(0,R.jsx)(I,{...e,options:t,loading:r,placeholder:`Select a country...`,style:{width:`300px`}})},play:async({args:e,canvasElement:t})=>{let n=U(t),r=n.getByRole(`combobox`),i=n.getByRole(`button`,{name:/toggle dropdown/i});await H.click(i),await z(await V.findByRole(`option`,{name:/United States/i})).toBeInTheDocument(),await z(V.getByRole(`option`,{name:/Japan/i})).toBeInTheDocument(),await H.type(r,`Un`),await z(V.getByRole(`option`,{name:/United States/i})).toBeInTheDocument(),await z(V.getByRole(`option`,{name:/United Kingdom/i})).toBeInTheDocument(),await z(V.queryByRole(`option`,{name:/Japan/i})).not.toBeInTheDocument(),await H.click(V.getByRole(`option`,{name:/United States/i})),await z(e.onValueChange).toHaveBeenCalledWith(`us`)}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},we=[`Default`,`SearchMode`,`SearchWithIcon`,`AllVariants`,`States`,`AsyncSearch`,`AsyncOptions`]}))();export{Y as AllVariants,$ as AsyncOptions,Q as AsyncSearch,K as Default,q as SearchMode,J as SearchWithIcon,X as States,we as __namedExportsOrder,xe as default};