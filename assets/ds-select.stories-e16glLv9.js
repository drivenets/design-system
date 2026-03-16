import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CCq6bv3x.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{i}from"./ds-icon.types-DO-j-_np.js";import{t as a}from"./ds-icon-BdpcGtWb.js";import{t as o}from"./ds-status-badge-CwZwlWmo.js";import{t as s}from"./ds-status-badge-CHd5ICGH.js";import{i as c}from"./ds-tag.types-pNU5KLRL.js";import{t as l}from"./ds-tag-C9usoiLQ.js";import{n as u,t as d}from"./ds-select-6uzVyeBw.js";var f,p,m,h,g,_=t((()=>{f=`_sizesContainer_s49e8_1`,p=`_sizeItem_s49e8_7`,m=`_sizeLabel_s49e8_12`,h=`_customOption_s49e8_18`,g={sizesContainer:f,sizeItem:p,sizeLabel:m,customOption:h}})),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;t((()=>{v=e(n(),1),u(),l(),a(),s(),_(),y=r(),{expect:b,screen:x,userEvent:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Design System/Select`,component:d,parameters:{layout:`centered`},argTypes:{options:{control:`object`,description:`Options to display in the select dropdown`},value:{control:`text`,description:`Value of the selected option`},onValueChange:{action:`value changed`,description:`Callback when the selected value changes`,table:{disable:!0}},placeholder:{control:`text`,description:`Placeholder text when no option is selected`},style:{control:`object`,description:`Additional styles to apply to the select container`},multiple:{control:`boolean`,description:`Whether multiple selections are allowed`},clearable:{control:`boolean`,description:`Whether the selection can be cleared`}}},T=({options:e,style:t,size:n,placeholder:r,clearable:i,multiple:a,disabled:o,renderOption:s,renderValue:c})=>{let[l,u]=(0,v.useState)(``);return(0,y.jsx)(d,{options:e,value:l,onValueChange:e=>{u(e)},style:t,size:n,placeholder:r,disabled:o,multiple:a,clearable:i,renderOption:s,renderValue:c})},E=async e=>{let t=C(e),n=t.getByRole(`combobox`),r=D[0],i=D[1];if(!r||!i)throw Error(`mockOptions must have at least 2 items`);await S.click(n);let a=x.getByRole(`option`,{name:r.label});await b(a).not.toHaveAttribute(`data-state`,`checked`),await S.click(a),await b(n).toHaveTextContent(r.label),await S.click(n);let o=x.getByRole(`option`,{name:i.label});await S.click(o),await b(n).toHaveTextContent(i.label),await S.click(n),await b(x.getByRole(`option`,{name:r.label})).not.toHaveAttribute(`data-state`,`checked`),await b(x.getByRole(`option`,{name:i.label})).toHaveAttribute(`data-state`,`checked`),await S.click(n);let s=t.getByRole(`button`,{name:`Clear value`});await S.click(s),await b(n).toHaveTextContent(`Click to select a value`)},D=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`},{value:`elderberry`,label:`Elderberry`},{value:`fig`,label:`Fig`},{value:`grape`,label:`Grape`},{value:`honeydew`,label:`Honeydew`},{value:`indian-fig`,label:`Indian fig`},{value:`jackfruit`,label:`Jackfruit`},{value:`kiwi`,label:`Kiwi`},{value:`lemon`,label:`Lemon`},{value:`melon`,label:`Melon`}],O={render:e=>(0,y.jsx)(T,{...e}),args:{options:D,clearable:!0,style:{width:`200px`}},play:async({canvasElement:e})=>{await E(e)}},k={render:e=>(0,y.jsx)(T,{...e}),args:{options:D.slice(0,3).map(e=>({...e,icon:`nutrition`})),style:{width:`200px`},clearable:!0},play:async({canvasElement:e})=>{await E(e)}},A={render:e=>(0,y.jsxs)(`div`,{className:g.sizesContainer,children:[(0,y.jsxs)(`div`,{className:g.sizeItem,children:[(0,y.jsx)(`div`,{className:g.sizeLabel,children:`Default`}),(0,y.jsx)(T,{...e,size:`default`})]}),(0,y.jsxs)(`div`,{className:g.sizeItem,children:[(0,y.jsx)(`div`,{className:g.sizeLabel,children:`Small`}),(0,y.jsx)(T,{...e,size:`small`})]})]}),args:{options:D.slice(0,5),clearable:!0,style:{width:`200px`}},argTypes:{size:{table:{disable:!0}}}},j={render:e=>(0,y.jsx)(T,{...e}),args:{options:[...D,{value:`nectarine`,label:`Nectarine`}],clearable:!0,style:{width:`200px`}}},M={render:e=>(0,y.jsx)(T,{...e}),args:{options:D,style:{width:`250px`},multiple:!0,clearable:!0},play:async({canvasElement:e})=>{let t=C(e).getByRole(`combobox`);await S.click(t);let n=x.getByRole(`option`,{name:`All`});await S.click(n);let r=x.getByRole(`button`,{name:/^\+\d+$/});await S.click(r);for(let e of D)await b(x.getByRole(`button`,{name:e.label})).toBeInTheDocument();await S.click(t);for(let e of D)await b(t).toHaveTextContent(e.label);await S.click(t);let i=D[0],a=x.getByRole(`button`,{name:i.label}),o=C(a).getByRole(`button`,{name:`Delete chip`});await S.click(o),await b(a).not.toBeInTheDocument();let s=x.getByRole(`button`,{name:`Clear All`});await S.click(s),await S.click(t),await b(t).toHaveTextContent(`Click to select a value`)}},N={render:e=>(0,y.jsx)(T,{...e}),args:{options:[...D,{value:`nectarine`,label:`Nectarine`}],style:{width:`250px`},multiple:!0,clearable:!0},play:async({canvasElement:e,step:t})=>{let n=C(e).getByRole(`combobox`);await t(`Search input appears and filters items`,async()=>{await S.click(n);let e=x.getByPlaceholderText(`Search`);await b(e).toBeInTheDocument(),await S.type(e,`berry`),await b(x.getByRole(`option`,{name:`Elderberry`})).toBeInTheDocument(),await b(x.queryByRole(`option`,{name:`Apple`})).not.toBeInTheDocument(),await b(x.queryByRole(`option`,{name:`Banana`})).not.toBeInTheDocument(),await b(x.queryByRole(`option`,{name:`Date`})).not.toBeInTheDocument(),await S.clear(e)}),await t(`Select multiple options`,async()=>{let e=x.getByRole(`option`,{name:`Apple`});await S.click(e);let t=x.getByRole(`option`,{name:`Banana`});await S.click(t);let r=x.getByRole(`option`,{name:`Cherry`});await S.click(r),await b(n).toHaveTextContent(`Apple`),await b(n).toHaveTextContent(`Banana`),await b(n).toHaveTextContent(`Cherry`)}),await t(`Clear all selections with Backspace`,async()=>{await S.keyboard(`{Escape}`),await S.keyboard(`{Backspace}`),await b(n).toHaveTextContent(`Click to select a value`),await b(n).not.toHaveTextContent(`Apple`),await b(n).not.toHaveTextContent(`Banana`),await b(n).not.toHaveTextContent(`Cherry`)})}},P=[{value:`us`,label:`United States`},{value:`gb`,label:`United Kingdom`},{value:`de`,label:`Germany`},{value:`jp`,label:`Japan`},{value:`fr`,label:`France`}],F=e=>(0,y.jsxs)(`span`,{className:g.customOption,children:[(0,y.jsx)(c,{label:e.value.toUpperCase(),size:`small`}),e.label]}),I=[{value:`v0.8`,label:`v0.8`},{value:`v1.0`,label:`v1.0`},{value:`v1.4`,label:`v1.4`},{value:`v2.3`,label:`v2.3`},{value:`v3.6`,label:`v3.6`},{value:`v4.1`,label:`v4.1`}],L={"v0.8":{status:`active`,label:`Live`},"v1.0":{status:`active`,label:`Live`},"v1.4":{status:`running`,label:`Running`},"v2.3":{status:`pending`,label:`Pending`},"v3.6":{status:`draft`,label:`Draft`},"v4.1":{status:`failed`,label:`Failed`}},R={render:e=>(0,y.jsx)(T,{...e}),args:{options:P,renderOption:F,clearable:!0,style:{width:`250px`}},play:async({canvasElement:e})=>{let t=C(e).getByRole(`combobox`);await S.click(t);let n=x.getByRole(`option`,{name:/United States/});await b(n).toBeInTheDocument(),await S.click(n),await b(t).toHaveTextContent(`United States`),await S.click(t);let r=x.getByRole(`option`,{name:/France/});await S.click(r),await b(t).toHaveTextContent(`France`)}},z={render:e=>(0,y.jsx)(T,{...e}),args:{options:P,renderOption:F,multiple:!0,clearable:!0,style:{width:`300px`}},play:async({canvasElement:e})=>{let t=C(e).getByRole(`combobox`);await S.click(t);let n=x.getByRole(`option`,{name:/United States/});await S.click(n);let r=x.getByRole(`option`,{name:/United Kingdom/});await S.click(r),await b(x.getByRole(`button`,{name:`United States`})).toBeInTheDocument(),await b(x.getByRole(`button`,{name:`United Kingdom`})).toBeInTheDocument()}},B={render:e=>(0,y.jsx)(T,{...e}),args:{options:[...D,...P],renderOption:e=>(0,y.jsxs)(`span`,{className:g.customOption,children:[(0,y.jsx)(i,{icon:`public`,size:`tiny`}),e.label]}),clearable:!0,style:{width:`300px`}},play:async({canvasElement:e,step:t})=>{let n=C(e).getByRole(`combobox`);await t(`Search filters options by string label`,async()=>{await S.click(n);let e=x.getByPlaceholderText(`Search`);await S.type(e,`United`),await b(x.getByRole(`option`,{name:/United States/})).toBeInTheDocument(),await b(x.getByRole(`option`,{name:/United Kingdom/})).toBeInTheDocument(),await b(x.queryByRole(`option`,{name:/Apple/})).not.toBeInTheDocument(),await b(x.queryByRole(`option`,{name:/Germany/})).not.toBeInTheDocument(),await S.clear(e)}),await t(`should select an option from search results`,async()=>{let e=x.getByPlaceholderText(`Search`);await S.type(e,`Japan`);let t=x.getByRole(`option`,{name:/Japan/});await S.click(t),await b(n).toHaveTextContent(`Japan`)})}},V={render:()=>{let[e,t]=(0,v.useState)(``);return(0,y.jsx)(d,{options:I,value:e,onValueChange:t,renderValue:e=>{let t=L[e.value];return(0,y.jsxs)(`span`,{className:g.customOption,children:[e.label,t&&(0,y.jsx)(o,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]})},clearable:!0,style:{width:`250px`}})},play:async({canvasElement:e})=>{let t=C(e).getByRole(`combobox`);await b(t).toHaveTextContent(`Click to select a value`),await S.click(t);let n=x.getByRole(`option`,{name:`v0.8`});await S.click(n),await b(t).toHaveTextContent(`v0.8`),await b(t).toHaveTextContent(`Live`),await S.click(t);let r=x.getByRole(`option`,{name:`v2.3`});await S.click(r),await b(t).toHaveTextContent(`v2.3`),await b(t).toHaveTextContent(`Pending`)}},H={render:()=>{let[e,t]=(0,v.useState)([]);return(0,y.jsx)(d,{options:P,value:e,onValueChange:t,renderOption:e=>(0,y.jsxs)(`span`,{className:g.customOption,children:[(0,y.jsx)(c,{label:e.value.toUpperCase(),size:`small`}),e.label]}),renderValue:e=>(0,y.jsx)(`span`,{className:g.customOption,children:e.map(e=>(0,y.jsx)(c,{label:e.value.toUpperCase(),size:`small`},e.value))}),multiple:!0,clearable:!0,style:{width:`300px`}})},play:async({canvasElement:e})=>{let t=C(e).getByRole(`combobox`);await S.click(t);let n=x.getByRole(`option`,{name:/United States/});await S.click(n);let r=x.getByRole(`option`,{name:/Germany/});await S.click(r),await b(t).toHaveTextContent(`US`),await b(t).toHaveTextContent(`DE`)}},U={render:()=>{let[e,t]=(0,v.useState)(``);return(0,y.jsx)(d,{options:I,value:e,onValueChange:t,renderOption:e=>{let t=L[e.value];return t?(0,y.jsxs)(`span`,{className:g.customOption,children:[e.label,(0,y.jsx)(o,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]}):e.label},renderValue:e=>{let t=L[e.value];return(0,y.jsxs)(`span`,{className:g.customOption,children:[e.label,t&&(0,y.jsx)(o,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]})},clearable:!0,style:{width:`250px`}})},play:async({canvasElement:e})=>{let t=C(e).getByRole(`combobox`);await b(t).toHaveTextContent(`Click to select a value`),await S.click(t);let n=x.getByRole(`option`,{name:/v0.8/});await b(n).toHaveTextContent(`Live`),await S.click(n),await b(t).toHaveTextContent(`v0.8`),await b(t).toHaveTextContent(`Live`),await S.click(t);let r=x.getByRole(`option`,{name:/v1.4/});await b(r).toHaveTextContent(`Running`),await S.click(r),await b(t).toHaveTextContent(`v1.4`),await b(t).toHaveTextContent(`Running`)}},W={render:()=>{let[e,t]=(0,v.useState)([]);return(0,y.jsx)(d,{options:I,value:e,onValueChange:t,renderOption:e=>{let t=L[e.value];return t?(0,y.jsxs)(`span`,{className:g.customOption,children:[e.label,(0,y.jsx)(o,{status:t.status,label:t.label,size:`small`,ghost:!0,icon:`check_circle`})]}):e.label},renderValue:e=>{let t=e[0],n=t?L[t.value]:void 0;return(0,y.jsxs)(`span`,{className:g.customOption,children:[t?.label,n&&(0,y.jsx)(o,{status:n.status,label:n.label,size:`small`,ghost:!0,icon:`check_circle`}),e.length>1&&` +${String(e.length-1)}`]})},multiple:!0,clearable:!0,style:{width:`300px`}})},play:async({canvasElement:e})=>{let t=C(e).getByRole(`combobox`);await S.click(t);let n=x.getByRole(`option`,{name:/v0.8/});await b(n).toHaveTextContent(`Live`),await S.click(n),await b(t).toHaveTextContent(`v0.8`),await b(t).toHaveTextContent(`Live`);let r=x.getByRole(`option`,{name:/v3.6/});await b(r).toHaveTextContent(`Draft`),await S.click(r),await b(t).toHaveTextContent(`v0.8`),await b(t).toHaveTextContent(`+1`)}},G={render:e=>(0,y.jsx)(T,{...e}),args:{options:[...D,{value:`nectarine`,label:`Nectarine`}],clearable:!0,style:{width:`250px`}},play:async({canvasElement:e,step:t})=>{let n=C(e).getByRole(`combobox`),r=`Click to select a value`;await t(`Backspace key clears selected value`,async()=>{await S.click(n);let e=x.getByRole(`option`,{name:`Apple`});await S.click(e),await b(n).toHaveTextContent(`Apple`),await S.keyboard(`{Escape}`),await S.keyboard(`{Backspace}`),await b(n).toHaveTextContent(r)}),await t(`Delete key clears selected value`,async()=>{await S.click(n);let e=x.getByRole(`option`,{name:`Banana`});await S.click(e),await b(n).toHaveTextContent(`Banana`),await S.keyboard(`{Escape}`),await S.keyboard(`{Delete}`),await b(n).toHaveTextContent(r)}),await t(`Space key works normally in search input`,async()=>{await S.click(n);let e=x.getByPlaceholderText(`Search`);await S.click(e),await S.type(e,`indian fig`),await b(e).toHaveValue(`indian fig`),await b(x.getByRole(`option`,{name:`Indian fig`})).toBeInTheDocument(),await S.clear(e),await S.keyboard(`{Escape}`)})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K=[`Default`,`WithIcons`,`Sizes`,`WithSearch`,`MultiSelect`,`MultiSelectWithSearch`,`CustomRenderOption`,`CustomRenderOptionMultiSelect`,`CustomRenderOptionWithSearch`,`CustomRenderValue`,`CustomRenderValueMultiSelect`,`CustomRenderValueAndOption`,`CustomRenderValueAndOptionMultiSelect`,`KeyboardInteractions`]}))();export{R as CustomRenderOption,z as CustomRenderOptionMultiSelect,B as CustomRenderOptionWithSearch,V as CustomRenderValue,U as CustomRenderValueAndOption,W as CustomRenderValueAndOptionMultiSelect,H as CustomRenderValueMultiSelect,O as Default,G as KeyboardInteractions,M as MultiSelect,N as MultiSelectWithSearch,A as Sizes,k as WithIcons,j as WithSearch,K as __namedExportsOrder,w as default};