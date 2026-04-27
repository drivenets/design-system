import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-Dn-yBGel.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./compiler-runtime-CXWjecuE.js";import{i as a}from"./ds-icon.types-DwsAlL1N.js";import{t as o}from"./ds-icon-BgScCPrd.js";import{t as s}from"./ds-status-badge-DxozarYu.js";import{t as c}from"./ds-status-badge-C2bPkphV.js";import{i as l}from"./ds-tag.types-D5XFXBzg.js";import{t as u}from"./ds-tag-Da40W4yw.js";import{n as d,t as f}from"./ds-select-IMatDe5v.js";var p,m,h,g,_,v=t((()=>{p=`_sizesContainer_s49e8_1`,m=`_sizeItem_s49e8_7`,h=`_sizeLabel_s49e8_12`,g=`_customOption_s49e8_18`,_={sizesContainer:p,sizeItem:m,sizeLabel:h,customOption:g}})),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;t((()=>{y=i(),b=e(n(),1),d(),u(),o(),c(),v(),x=r(),{expect:S,screen:C,userEvent:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Design System/Select`,component:f,parameters:{layout:`centered`},argTypes:{options:{control:`object`,description:`Options to display in the select dropdown`},value:{control:`text`,description:`Value of the selected option`},onValueChange:{action:`value changed`,description:`Callback when the selected value changes`,table:{disable:!0}},placeholder:{control:`text`,description:`Placeholder text when no option is selected`},style:{control:`object`,description:`Additional styles to apply to the select container`},multiple:{control:`boolean`,description:`Whether multiple selections are allowed`},clearable:{control:`boolean`,description:`Whether the selection can be cleared`},disabled:{control:`boolean`,description:`Whether the select is disabled`}}},D=e=>{let t=(0,y.c)(12),{options:n,style:r,size:i,placeholder:a,clearable:o,multiple:s,disabled:c,renderOption:l,renderValue:u}=e,[d,p]=(0,b.useState)(``),m;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(m=e=>{p(e)},t[0]=m):m=t[0];let h=m,g=d,_=s,v=o,S=u,C;return t[1]!==c||t[2]!==n||t[3]!==a||t[4]!==l||t[5]!==i||t[6]!==r||t[7]!==g||t[8]!==_||t[9]!==v||t[10]!==S?(C=(0,x.jsx)(f,{options:n,value:g,onValueChange:h,style:r,size:i,placeholder:a,disabled:c,multiple:_,clearable:v,renderOption:l,renderValue:S}),t[1]=c,t[2]=n,t[3]=a,t[4]=l,t[5]=i,t[6]=r,t[7]=g,t[8]=_,t[9]=v,t[10]=S,t[11]=C):C=t[11],C},O=async e=>{let t=T(e),n=t.getByRole(`combobox`),r=k[0],i=k[1];if(!r||!i)throw Error(`mockOptions must have at least 2 items`);await w.click(n);let a=C.getByRole(`option`,{name:r.label});await S(a).not.toHaveAttribute(`data-state`,`checked`),await w.click(a),await S(n).toHaveTextContent(r.label),await w.click(n);let o=C.getByRole(`option`,{name:i.label});await w.click(o),await S(n).toHaveTextContent(i.label),await w.click(n),await S(C.getByRole(`option`,{name:r.label})).not.toHaveAttribute(`data-state`,`checked`),await S(C.getByRole(`option`,{name:i.label})).toHaveAttribute(`data-state`,`checked`),await w.click(n);let s=t.getByRole(`button`,{name:`Clear value`});await w.click(s),await S(n).toHaveTextContent(`Click to select a value`)},k=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`},{value:`elderberry`,label:`Elderberry`},{value:`fig`,label:`Fig`},{value:`grape`,label:`Grape`},{value:`honeydew`,label:`Honeydew`},{value:`indian-fig`,label:`Indian fig`},{value:`jackfruit`,label:`Jackfruit`},{value:`kiwi`,label:`Kiwi`},{value:`lemon`,label:`Lemon`},{value:`melon`,label:`Melon`}],A={render:e=>(0,x.jsx)(D,{...e}),args:{options:k,clearable:!0,style:{width:`200px`}},play:async({canvasElement:e})=>{await O(e)}},j={render:e=>(0,x.jsx)(D,{...e}),args:{options:k.slice(0,3).map(e=>({...e,icon:`nutrition`})),style:{width:`200px`},clearable:!0},play:async({canvasElement:e})=>{await O(e)}},M={render:e=>(0,x.jsxs)(`div`,{className:_.sizesContainer,children:[(0,x.jsxs)(`div`,{className:_.sizeItem,children:[(0,x.jsx)(`div`,{className:_.sizeLabel,children:`Default`}),(0,x.jsx)(D,{...e,size:`default`})]}),(0,x.jsxs)(`div`,{className:_.sizeItem,children:[(0,x.jsx)(`div`,{className:_.sizeLabel,children:`Small`}),(0,x.jsx)(D,{...e,size:`small`})]})]}),args:{options:k.slice(0,5),clearable:!0,style:{width:`200px`}},argTypes:{size:{table:{disable:!0}}}},N={render:e=>(0,x.jsx)(D,{...e}),args:{options:[...k,{value:`nectarine`,label:`Nectarine`}],clearable:!0,style:{width:`200px`}}},P={render:e=>(0,x.jsx)(D,{...e}),args:{options:k,style:{width:`250px`},multiple:!0,clearable:!0},play:async({canvasElement:e})=>{let t=T(e).getByRole(`combobox`);await w.click(t);let n=C.getByRole(`option`,{name:`All`});await w.click(n);let r=C.getByRole(`button`,{name:/^\+\d+$/});await w.click(r);for(let e of k)await S(C.getByRole(`button`,{name:e.label})).toBeInTheDocument();await w.click(t);for(let e of k)await S(t).toHaveTextContent(e.label);await w.click(t);let i=k[0],a=C.getByRole(`button`,{name:i.label}),o=T(a).getByRole(`button`,{name:`Delete chip`});await w.click(o),await S(a).not.toBeInTheDocument();let s=C.getByRole(`button`,{name:`Clear All`});await w.click(s),await w.click(t),await S(t).toHaveTextContent(`Click to select a value`)}},F={render:e=>(0,x.jsx)(D,{...e}),args:{options:[...k,{value:`nectarine`,label:`Nectarine`}],style:{width:`250px`},multiple:!0,clearable:!0},play:async({canvasElement:e,step:t})=>{let n=T(e).getByRole(`combobox`);await t(`Search input appears and filters items`,async()=>{await w.click(n);let e=C.getByPlaceholderText(`Search`);await S(e).toBeInTheDocument(),await w.type(e,`berry`),await S(C.getByRole(`option`,{name:`Elderberry`})).toBeInTheDocument(),await S(C.queryByRole(`option`,{name:`Apple`})).not.toBeInTheDocument(),await S(C.queryByRole(`option`,{name:`Banana`})).not.toBeInTheDocument(),await S(C.queryByRole(`option`,{name:`Date`})).not.toBeInTheDocument(),await w.clear(e)}),await t(`Select multiple options`,async()=>{let e=C.getByRole(`option`,{name:`Apple`});await w.click(e);let t=C.getByRole(`option`,{name:`Banana`});await w.click(t);let r=C.getByRole(`option`,{name:`Cherry`});await w.click(r),await S(n).toHaveTextContent(`Apple`),await S(n).toHaveTextContent(`Banana`),await S(n).toHaveTextContent(`Cherry`)}),await t(`Clear all selections with Backspace`,async()=>{await w.keyboard(`{Escape}`),await w.keyboard(`{Backspace}`),await S(n).toHaveTextContent(`Click to select a value`),await S(n).not.toHaveTextContent(`Apple`),await S(n).not.toHaveTextContent(`Banana`),await S(n).not.toHaveTextContent(`Cherry`)})}},I=[{value:`us`,label:`United States`},{value:`gb`,label:`United Kingdom`},{value:`de`,label:`Germany`},{value:`jp`,label:`Japan`},{value:`fr`,label:`France`}],L=e=>(0,x.jsxs)(`span`,{className:_.customOption,children:[(0,x.jsx)(l,{label:e.value.toUpperCase(),size:`small`}),e.label]}),R=[{value:`v0.8`,label:`v0.8`},{value:`v1.0`,label:`v1.0`},{value:`v1.4`,label:`v1.4`},{value:`v2.3`,label:`v2.3`},{value:`v3.6`,label:`v3.6`},{value:`v4.1`,label:`v4.1`}],z={"v0.8":{status:`active`,label:`Live`},"v1.0":{status:`active`,label:`Live`},"v1.4":{status:`running`,label:`Running`},"v2.3":{status:`pending`,label:`Pending`},"v3.6":{status:`draft`,label:`Draft`},"v4.1":{status:`failed`,label:`Failed`}},B={render:e=>(0,x.jsx)(D,{...e}),args:{options:I,renderOption:L,clearable:!0,style:{width:`250px`}},play:async({canvasElement:e})=>{let t=T(e).getByRole(`combobox`);await w.click(t);let n=C.getByRole(`option`,{name:/United States/});await S(n).toBeInTheDocument(),await w.click(n),await S(t).toHaveTextContent(`United States`),await w.click(t);let r=C.getByRole(`option`,{name:/France/});await w.click(r),await S(t).toHaveTextContent(`France`)}},V={render:e=>(0,x.jsx)(D,{...e}),args:{options:I,renderOption:L,multiple:!0,clearable:!0,style:{width:`300px`}},play:async({canvasElement:e})=>{let t=T(e).getByRole(`combobox`);await w.click(t);let n=C.getByRole(`option`,{name:/United States/});await w.click(n);let r=C.getByRole(`option`,{name:/United Kingdom/});await w.click(r),await S(C.getByRole(`button`,{name:`United States`})).toBeInTheDocument(),await S(C.getByRole(`button`,{name:`United Kingdom`})).toBeInTheDocument()}},H={render:e=>(0,x.jsx)(D,{...e}),args:{options:[...k,...I],renderOption:e=>(0,x.jsxs)(`span`,{className:_.customOption,children:[(0,x.jsx)(a,{icon:`public`,size:`tiny`}),e.label]}),clearable:!0,style:{width:`300px`}},play:async({canvasElement:e,step:t})=>{let n=T(e).getByRole(`combobox`);await t(`Search filters options by string label`,async()=>{await w.click(n);let e=C.getByPlaceholderText(`Search`);await w.type(e,`United`),await S(C.getByRole(`option`,{name:/United States/})).toBeInTheDocument(),await S(C.getByRole(`option`,{name:/United Kingdom/})).toBeInTheDocument(),await S(C.queryByRole(`option`,{name:/Apple/})).not.toBeInTheDocument(),await S(C.queryByRole(`option`,{name:/Germany/})).not.toBeInTheDocument(),await w.clear(e)}),await t(`should select an option from search results`,async()=>{let e=C.getByPlaceholderText(`Search`);await w.type(e,`Japan`);let t=C.getByRole(`option`,{name:/Japan/});await w.click(t),await S(n).toHaveTextContent(`Japan`)})}},U={render:()=>{let[e,t]=(0,b.useState)(``);return(0,x.jsx)(f,{options:R,value:e,onValueChange:t,renderValue:e=>{let t=z[e.value];return(0,x.jsxs)(`span`,{className:_.customOption,children:[e.label,t&&(0,x.jsx)(s,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]})},clearable:!0,style:{width:`250px`}})},play:async({canvasElement:e})=>{let t=T(e).getByRole(`combobox`);await S(t).toHaveTextContent(`Click to select a value`),await w.click(t);let n=C.getByRole(`option`,{name:`v0.8`});await w.click(n),await S(t).toHaveTextContent(`v0.8`),await S(t).toHaveTextContent(`Live`),await w.click(t);let r=C.getByRole(`option`,{name:`v2.3`});await w.click(r),await S(t).toHaveTextContent(`v2.3`),await S(t).toHaveTextContent(`Pending`)}},W={render:()=>{let[e,t]=(0,b.useState)([]);return(0,x.jsx)(f,{options:I,value:e,onValueChange:t,renderOption:e=>(0,x.jsxs)(`span`,{className:_.customOption,children:[(0,x.jsx)(l,{label:e.value.toUpperCase(),size:`small`}),e.label]}),renderValue:e=>(0,x.jsx)(`span`,{className:_.customOption,children:e.map(e=>(0,x.jsx)(l,{label:e.value.toUpperCase(),size:`small`},e.value))}),multiple:!0,clearable:!0,style:{width:`300px`}})},play:async({canvasElement:e})=>{let t=T(e).getByRole(`combobox`);await w.click(t);let n=C.getByRole(`option`,{name:/United States/});await w.click(n);let r=C.getByRole(`option`,{name:/Germany/});await w.click(r),await S(t).toHaveTextContent(`US`),await S(t).toHaveTextContent(`DE`)}},G={render:()=>{let[e,t]=(0,b.useState)(``);return(0,x.jsx)(f,{options:R,value:e,onValueChange:t,renderOption:e=>{let t=z[e.value];return t?(0,x.jsxs)(`span`,{className:_.customOption,children:[e.label,(0,x.jsx)(s,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]}):e.label},renderValue:e=>{let t=z[e.value];return(0,x.jsxs)(`span`,{className:_.customOption,children:[e.label,t&&(0,x.jsx)(s,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]})},clearable:!0,style:{width:`250px`}})},play:async({canvasElement:e})=>{let t=T(e).getByRole(`combobox`);await S(t).toHaveTextContent(`Click to select a value`),await w.click(t);let n=C.getByRole(`option`,{name:/v0.8/});await S(n).toHaveTextContent(`Live`),await w.click(n),await S(t).toHaveTextContent(`v0.8`),await S(t).toHaveTextContent(`Live`),await w.click(t);let r=C.getByRole(`option`,{name:/v1.4/});await S(r).toHaveTextContent(`Running`),await w.click(r),await S(t).toHaveTextContent(`v1.4`),await S(t).toHaveTextContent(`Running`)}},K={render:()=>{let[e,t]=(0,b.useState)([]);return(0,x.jsx)(f,{options:R,value:e,onValueChange:t,renderOption:e=>{let t=z[e.value];return t?(0,x.jsxs)(`span`,{className:_.customOption,children:[e.label,(0,x.jsx)(s,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]}):e.label},renderValue:e=>{let t=e[0],n=t?z[t.value]:void 0;return(0,x.jsxs)(`span`,{className:_.customOption,children:[t?.label,n&&(0,x.jsx)(s,{status:n.status,label:n.label,size:`small`,ghost:!0,icon:`check_circle`}),e.length>1&&` +${String(e.length-1)}`]})},multiple:!0,clearable:!0,style:{width:`300px`}})},play:async({canvasElement:e})=>{let t=T(e).getByRole(`combobox`);await w.click(t);let n=C.getByRole(`option`,{name:/v0.8/});await S(n).toHaveTextContent(`Live`),await w.click(n),await S(t).toHaveTextContent(`v0.8`),await S(t).toHaveTextContent(`Live`);let r=C.getByRole(`option`,{name:/v3.6/});await S(r).toHaveTextContent(`Draft`),await w.click(r),await S(t).toHaveTextContent(`v0.8`),await S(t).toHaveTextContent(`+1`)}},q={render:e=>(0,x.jsx)(D,{...e}),args:{options:[...k,{value:`nectarine`,label:`Nectarine`}],clearable:!0,style:{width:`250px`}},play:async({canvasElement:e,step:t})=>{let n=T(e).getByRole(`combobox`),r=`Click to select a value`;await t(`Backspace key clears selected value`,async()=>{await w.click(n);let e=C.getByRole(`option`,{name:`Apple`});await w.click(e),await S(n).toHaveTextContent(`Apple`),await w.keyboard(`{Escape}`),await w.keyboard(`{Backspace}`),await S(n).toHaveTextContent(r)}),await t(`Delete key clears selected value`,async()=>{await w.click(n);let e=C.getByRole(`option`,{name:`Banana`});await w.click(e),await S(n).toHaveTextContent(`Banana`),await w.keyboard(`{Escape}`),await w.keyboard(`{Delete}`),await S(n).toHaveTextContent(r)}),await t(`Space key works normally in search input`,async()=>{await w.click(n);let e=C.getByPlaceholderText(`Search`);await w.click(e),await w.type(e,`indian fig`),await S(e).toHaveValue(`indian fig`),await S(C.getByRole(`option`,{name:`Indian fig`})).toBeInTheDocument(),await w.clear(e),await w.keyboard(`{Escape}`)})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: mockOptions,
    style: {
      width: '250px'
    },
    multiple: true,
    clearable: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');

    // Open the dropdown to access multi-select options
    await userEvent.click(trigger);

    // Click "All" to select all available options
    const allOption = screen.getByRole('option', {
      name: 'All'
    });
    await userEvent.click(allOption);

    // Click the "+7" chip to expand and show all selected items
    const expandChip = screen.getByRole('button', {
      name: /^\\+\\d+$/
    });
    await userEvent.click(expandChip);

    // Verify all options from mockOptions are displayed as chips
    for (const option of mockOptions) {
      const chip = screen.getByRole('button', {
        name: option.label
      });
      await expect(chip).toBeInTheDocument();
    }

    // Close the dropdown by clicking the trigger
    await userEvent.click(trigger);

    // Verify the trigger contains all selected option labels (text may have ellipsis in UI but full text is in DOM)
    for (const option of mockOptions) {
      await expect(trigger).toHaveTextContent(option.label);
    }

    // Open the dropdown again
    await userEvent.click(trigger);

    // Delete the first option by clicking its delete button
    const firstOption = mockOptions[0] as DsSelectOption;
    const firstOptionChip = screen.getByRole('button', {
      name: firstOption.label
    });
    const deleteButton = within(firstOptionChip).getByRole('button', {
      name: 'Delete chip'
    });
    await userEvent.click(deleteButton);

    // Verify deleted option is no longer visible
    await expect(firstOptionChip).not.toBeInTheDocument();

    // Click the "Clear All" button
    const clearAllButton = screen.getByRole('button', {
      name: 'Clear All'
    });
    await userEvent.click(clearAllButton);

    // Close the dropdown
    await userEvent.click(trigger);

    // Verify the trigger is empty
    await expect(trigger).toHaveTextContent('Click to select a value');
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    const placeholder = 'Click to select a value';
    await step('Search input appears and filters items', async () => {
      await userEvent.click(trigger);

      // Verify search input is present
      const searchInput = screen.getByPlaceholderText('Search');
      await expect(searchInput).toBeInTheDocument();
      await userEvent.type(searchInput, 'berry');

      // Verify matching items are visible
      await expect(screen.getByRole('option', {
        name: 'Elderberry'
      })).toBeInTheDocument();

      // Verify non-matching items are not visible
      await expect(screen.queryByRole('option', {
        name: 'Apple'
      })).not.toBeInTheDocument();
      await expect(screen.queryByRole('option', {
        name: 'Banana'
      })).not.toBeInTheDocument();
      await expect(screen.queryByRole('option', {
        name: 'Date'
      })).not.toBeInTheDocument();
      await userEvent.clear(searchInput);
    });
    await step('Select multiple options', async () => {
      const appleOption = screen.getByRole('option', {
        name: 'Apple'
      });
      await userEvent.click(appleOption);
      const bananaOption = screen.getByRole('option', {
        name: 'Banana'
      });
      await userEvent.click(bananaOption);
      const cherryOption = screen.getByRole('option', {
        name: 'Cherry'
      });
      await userEvent.click(cherryOption);

      // Verify multiple selections in trigger
      await expect(trigger).toHaveTextContent('Apple');
      await expect(trigger).toHaveTextContent('Banana');
      await expect(trigger).toHaveTextContent('Cherry');
    });
    await step('Clear all selections with Backspace', async () => {
      await userEvent.keyboard('{Escape}');
      await userEvent.keyboard('{Backspace}');

      // Verify all values are cleared
      await expect(trigger).toHaveTextContent(placeholder);
      await expect(trigger).not.toHaveTextContent('Apple');
      await expect(trigger).not.toHaveTextContent('Banana');
      await expect(trigger).not.toHaveTextContent('Cherry');
    });
  }
}`,...F.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: countryOptions,
    renderOption: renderCountryOption,
    clearable: true,
    style: {
      width: '250px'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await userEvent.click(trigger);
    const usOption = screen.getByRole('option', {
      name: /United States/
    });
    await expect(usOption).toBeInTheDocument();
    await userEvent.click(usOption);
    await expect(trigger).toHaveTextContent('United States');
    await userEvent.click(trigger);
    const franceOption = screen.getByRole('option', {
      name: /France/
    });
    await userEvent.click(franceOption);
    await expect(trigger).toHaveTextContent('France');
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledSelectWrapper {...args} />,
  args: {
    options: countryOptions,
    renderOption: renderCountryOption,
    multiple: true,
    clearable: true,
    style: {
      width: '300px'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await userEvent.click(trigger);
    const usOption = screen.getByRole('option', {
      name: /United States/
    });
    await userEvent.click(usOption);
    const gbOption = screen.getByRole('option', {
      name: /United Kingdom/
    });
    await userEvent.click(gbOption);
    const usChip = screen.getByRole('button', {
      name: 'United States'
    });
    await expect(usChip).toBeInTheDocument();
    const gbChip = screen.getByRole('button', {
      name: 'United Kingdom'
    });
    await expect(gbChip).toBeInTheDocument();
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await step('Search filters options by string label', async () => {
      await userEvent.click(trigger);
      const searchInput = screen.getByPlaceholderText('Search');
      await userEvent.type(searchInput, 'United');
      await expect(screen.getByRole('option', {
        name: /United States/
      })).toBeInTheDocument();
      await expect(screen.getByRole('option', {
        name: /United Kingdom/
      })).toBeInTheDocument();
      await expect(screen.queryByRole('option', {
        name: /Apple/
      })).not.toBeInTheDocument();
      await expect(screen.queryByRole('option', {
        name: /Germany/
      })).not.toBeInTheDocument();
      await userEvent.clear(searchInput);
    });
    await step('should select an option from search results', async () => {
      const searchInput = screen.getByPlaceholderText('Search');
      await userEvent.type(searchInput, 'Japan');
      const jpOption = screen.getByRole('option', {
        name: /Japan/
      });
      await userEvent.click(jpOption);
      await expect(trigger).toHaveTextContent('Japan');
    });
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await expect(trigger).toHaveTextContent('Click to select a value');
    await userEvent.click(trigger);
    const v08 = screen.getByRole('option', {
      name: 'v0.8'
    });
    await userEvent.click(v08);
    await expect(trigger).toHaveTextContent('v0.8');
    await expect(trigger).toHaveTextContent('Live');
    await userEvent.click(trigger);
    const v23 = screen.getByRole('option', {
      name: 'v2.3'
    });
    await userEvent.click(v23);
    await expect(trigger).toHaveTextContent('v2.3');
    await expect(trigger).toHaveTextContent('Pending');
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await userEvent.click(trigger);
    const usOption = screen.getByRole('option', {
      name: /United States/
    });
    await userEvent.click(usOption);
    const deOption = screen.getByRole('option', {
      name: /Germany/
    });
    await userEvent.click(deOption);
    await expect(trigger).toHaveTextContent('US');
    await expect(trigger).toHaveTextContent('DE');
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await expect(trigger).toHaveTextContent('Click to select a value');
    await userEvent.click(trigger);
    const v08 = screen.getByRole('option', {
      name: /v0.8/
    });
    await expect(v08).toHaveTextContent('Live');
    await userEvent.click(v08);
    await expect(trigger).toHaveTextContent('v0.8');
    await expect(trigger).toHaveTextContent('Live');
    await userEvent.click(trigger);
    const v14 = screen.getByRole('option', {
      name: /v1.4/
    });
    await expect(v14).toHaveTextContent('Running');
    await userEvent.click(v14);
    await expect(trigger).toHaveTextContent('v1.4');
    await expect(trigger).toHaveTextContent('Running');
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await userEvent.click(trigger);
    const v08 = screen.getByRole('option', {
      name: /v0.8/
    });
    await expect(v08).toHaveTextContent('Live');
    await userEvent.click(v08);
    await expect(trigger).toHaveTextContent('v0.8');
    await expect(trigger).toHaveTextContent('Live');
    const v36 = screen.getByRole('option', {
      name: /v3.6/
    });
    await expect(v36).toHaveTextContent('Draft');
    await userEvent.click(v36);
    await expect(trigger).toHaveTextContent('v0.8');
    await expect(trigger).toHaveTextContent('+1');
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    const placeholder = 'Click to select a value';
    await step('Backspace key clears selected value', async () => {
      await userEvent.click(trigger);
      const appleOption = screen.getByRole('option', {
        name: 'Apple'
      });
      await userEvent.click(appleOption);
      await expect(trigger).toHaveTextContent('Apple');
      await userEvent.keyboard('{Escape}');
      await userEvent.keyboard('{Backspace}');
      await expect(trigger).toHaveTextContent(placeholder);
    });
    await step('Delete key clears selected value', async () => {
      await userEvent.click(trigger);
      const bananaOption = screen.getByRole('option', {
        name: 'Banana'
      });
      await userEvent.click(bananaOption);
      await expect(trigger).toHaveTextContent('Banana');
      await userEvent.keyboard('{Escape}');
      await userEvent.keyboard('{Delete}');
      await expect(trigger).toHaveTextContent(placeholder);
    });
    await step('Space key works normally in search input', async () => {
      await userEvent.click(trigger);
      const searchInput = screen.getByPlaceholderText('Search');
      await userEvent.click(searchInput);
      await userEvent.type(searchInput, 'indian fig');
      await expect(searchInput).toHaveValue('indian fig');
      const indianFigOption = screen.getByRole('option', {
        name: 'Indian fig'
      });
      await expect(indianFigOption).toBeInTheDocument();
      await userEvent.clear(searchInput);
      await userEvent.keyboard('{Escape}');
    });
  }
}`,...q.parameters?.docs?.source}}},J=[`Default`,`WithIcons`,`Sizes`,`WithSearch`,`MultiSelect`,`MultiSelectWithSearch`,`CustomRenderOption`,`CustomRenderOptionMultiSelect`,`CustomRenderOptionWithSearch`,`CustomRenderValue`,`CustomRenderValueMultiSelect`,`CustomRenderValueAndOption`,`CustomRenderValueAndOptionMultiSelect`,`KeyboardInteractions`]}))();export{B as CustomRenderOption,V as CustomRenderOptionMultiSelect,H as CustomRenderOptionWithSearch,U as CustomRenderValue,G as CustomRenderValueAndOption,K as CustomRenderValueAndOptionMultiSelect,W as CustomRenderValueMultiSelect,A as Default,q as KeyboardInteractions,P as MultiSelect,F as MultiSelectWithSearch,M as Sizes,j as WithIcons,N as WithSearch,J as __namedExportsOrder,E as default};