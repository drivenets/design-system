import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as C}from"./iframe-hX6RJ0lO.js";import{D as w}from"./ds-select-DJMBDQEN.js";import{D as U}from"./ds-tag-ud63_tFq.js";import{D as K}from"./ds-icon-Z8R3sgkZ.js";import{D as b}from"./ds-status-badge-CqDSTzmh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CWgD-Ehn.js";import"./ds-checkbox-DboNs0sf.js";import"./index-BOG25DB0.js";import"./index-CHrmt6p2.js";import"./index-BSv9PtnA.js";import"./index-BpBNV4QJ.js";import"./index-C4OK4fVO.js";import"./ds-button-CjfyH5PN.js";import"./ds-button-legacy-DArMtP95.js";import"./ds-button-new-CDjIDG_w.js";import"./ds-chip-CUuNox8S.js";import"./ds-typography-CAMxDqG2.js";import"./index-qtNTaQSg.js";import"./use-locale-context-COxKOAQQ.js";import"./create-anatomy-Ccxhhfdi.js";import"./ds-text-input-itnwN9-Z.js";import"./list-collection-DAA8gpKC.js";import"./chunk-QZ7TP4HQ-O9Gy0rNO.js";import"./equal-DfFTejAs.js";import"./use-field-context-DhGob0Vu.js";import"./event-CBXSxTbR.js";import"./form-XAg0DKJC.js";import"./initial-focus-CLFk_HTN.js";import"./set-D1dbFaLb.js";import"./typeahead-DAcUL0j8.js";import"./query-CjgVAlRR.js";import"./visually-hidden-BShGFMbX.js";import"./get-styles-B6adI-5I.js";import"./floating-ui.dom-o9At5h4Q.js";import"./raf-CC9hSMXO.js";import"./computed-style-BNDx_gJ5.js";import"./index-BQ6D5N3W.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-BSo0AIGK.js";import"./portal-D3eDC6sh.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-Wt1xbaUh.js";const q="_sizesContainer_s49e8_1",F="_sizeItem_s49e8_7",J="_sizeLabel_s49e8_12",G="_customOption_s49e8_18",u={sizesContainer:q,sizeItem:F,sizeLabel:J,customOption:G},{expect:n,screen:c,userEvent:t,within:v}=__STORYBOOK_MODULE_TEST__,_e={title:"Design System/Select",component:w,parameters:{layout:"centered"},argTypes:{options:{control:"object",description:"Options to display in the select dropdown"},value:{control:"text",description:"Value of the selected option"},onValueChange:{action:"value changed",description:"Callback when the selected value changes",table:{disable:!0}},placeholder:{control:"text",description:"Placeholder text when no option is selected"},style:{control:"object",description:"Additional styles to apply to the select container"},multiple:{control:"boolean",description:"Whether multiple selections are allowed"},clearable:{control:"boolean",description:"Whether the selection can be cleared"}}},g=({options:e,style:r,size:a,placeholder:s,clearable:o,multiple:i,disabled:p,renderOption:d,renderValue:h})=>{const[y,A]=C.useState(""),M=P=>{A(P)};return l.jsx(w,{options:e,value:y,onValueChange:M,style:r,size:a,placeholder:s,disabled:p,multiple:i,clearable:o,renderOption:d,renderValue:h})},W=async e=>{const r=v(e),a=r.getByRole("combobox"),s=m[0],o=m[1];if(!s||!o)throw new Error("mockOptions must have at least 2 items");await t.click(a);const i=c.getByRole("option",{name:s.label});await n(i).not.toHaveAttribute("data-state","checked"),await t.click(i),await n(a).toHaveTextContent(s.label),await t.click(a);const p=c.getByRole("option",{name:o.label});await t.click(p),await n(a).toHaveTextContent(o.label),await t.click(a);const d=c.getByRole("option",{name:s.label});await n(d).not.toHaveAttribute("data-state","checked");const h=c.getByRole("option",{name:o.label});await n(h).toHaveAttribute("data-state","checked"),await t.click(a);const y=r.getByRole("button",{name:"Clear value"});await t.click(y),await n(a).toHaveTextContent("Click to select a value")},m=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"indian-fig",label:"Indian fig"},{value:"jackfruit",label:"Jackfruit"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"melon",label:"Melon"}],k={render:e=>l.jsx(g,{...e}),args:{options:m,clearable:!0,style:{width:"200px"}},play:async({canvasElement:e})=>{await W(e)}},B={render:e=>l.jsx(g,{...e}),args:{options:m.slice(0,3).map(e=>({...e,icon:"nutrition"})),style:{width:"200px"},clearable:!0},play:async({canvasElement:e})=>{await W(e)}},O={render:e=>l.jsxs("div",{className:u.sizesContainer,children:[l.jsxs("div",{className:u.sizeItem,children:[l.jsx("div",{className:u.sizeLabel,children:"Default"}),l.jsx(g,{...e,size:"default"})]}),l.jsxs("div",{className:u.sizeItem,children:[l.jsx("div",{className:u.sizeLabel,children:"Small"}),l.jsx(g,{...e,size:"small"})]})]}),args:{options:m.slice(0,5),clearable:!0,style:{width:"200px"}},argTypes:{size:{table:{disable:!0}}}},T={render:e=>l.jsx(g,{...e}),args:{options:[...m,{value:"nectarine",label:"Nectarine"}],clearable:!0,style:{width:"200px"}}},R={render:e=>l.jsx(g,{...e}),args:{options:m,style:{width:"250px"},multiple:!0,clearable:!0},play:async({canvasElement:e})=>{const a=v(e).getByRole("combobox");await t.click(a);const s=c.getByRole("option",{name:"All"});await t.click(s);const o=c.getByRole("button",{name:/^\+\d+$/});await t.click(o);for(const y of m){const A=c.getByRole("button",{name:y.label});await n(A).toBeInTheDocument()}await t.click(a);for(const y of m)await n(a).toHaveTextContent(y.label);await t.click(a);const i=m[0],p=c.getByRole("button",{name:i.label}),d=v(p).getByRole("button",{name:"Delete chip"});await t.click(d),await n(p).not.toBeInTheDocument();const h=c.getByRole("button",{name:"Clear All"});await t.click(h),await t.click(a),await n(a).toHaveTextContent("Click to select a value")}},S={render:e=>l.jsx(g,{...e}),args:{options:[...m,{value:"nectarine",label:"Nectarine"}],style:{width:"250px"},multiple:!0,clearable:!0},play:async({canvasElement:e,step:r})=>{const s=v(e).getByRole("combobox"),o="Click to select a value";await r("Search input appears and filters items",async()=>{await t.click(s);const i=c.getByPlaceholderText("Search");await n(i).toBeInTheDocument(),await t.type(i,"berry"),await n(c.getByRole("option",{name:"Elderberry"})).toBeInTheDocument(),await n(c.queryByRole("option",{name:"Apple"})).not.toBeInTheDocument(),await n(c.queryByRole("option",{name:"Banana"})).not.toBeInTheDocument(),await n(c.queryByRole("option",{name:"Date"})).not.toBeInTheDocument(),await t.clear(i)}),await r("Select multiple options",async()=>{const i=c.getByRole("option",{name:"Apple"});await t.click(i);const p=c.getByRole("option",{name:"Banana"});await t.click(p);const d=c.getByRole("option",{name:"Cherry"});await t.click(d),await n(s).toHaveTextContent("Apple"),await n(s).toHaveTextContent("Banana"),await n(s).toHaveTextContent("Cherry")}),await r("Clear all selections with Backspace",async()=>{await t.keyboard("{Escape}"),await t.keyboard("{Backspace}"),await n(s).toHaveTextContent(o),await n(s).not.toHaveTextContent("Apple"),await n(s).not.toHaveTextContent("Banana"),await n(s).not.toHaveTextContent("Cherry")})}},N=[{value:"us",label:"United States"},{value:"gb",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"jp",label:"Japan"},{value:"fr",label:"France"}],L=e=>l.jsxs("span",{className:u.customOption,children:[l.jsx(U,{label:e.value.toUpperCase(),size:"small"}),e.label]}),_=[{value:"v0.8",label:"v0.8"},{value:"v1.0",label:"v1.0"},{value:"v1.4",label:"v1.4"},{value:"v2.3",label:"v2.3"},{value:"v3.6",label:"v3.6"},{value:"v4.1",label:"v4.1"}],x={"v0.8":{status:"active",label:"Live"},"v1.0":{status:"active",label:"Live"},"v1.4":{status:"running",label:"Running"},"v2.3":{status:"pending",label:"Pending"},"v3.6":{status:"draft",label:"Draft"},"v4.1":{status:"failed",label:"Failed"}},f={render:e=>l.jsx(g,{...e}),args:{options:N,renderOption:L,clearable:!0,style:{width:"250px"}},play:async({canvasElement:e})=>{const a=v(e).getByRole("combobox");await t.click(a);const s=c.getByRole("option",{name:/United States/});await n(s).toBeInTheDocument(),await t.click(s),await n(a).toHaveTextContent("United States"),await t.click(a);const o=c.getByRole("option",{name:/France/});await t.click(o),await n(a).toHaveTextContent("France")}},E={render:e=>l.jsx(g,{...e}),args:{options:N,renderOption:L,multiple:!0,clearable:!0,style:{width:"300px"}},play:async({canvasElement:e})=>{const a=v(e).getByRole("combobox");await t.click(a);const s=c.getByRole("option",{name:/United States/});await t.click(s);const o=c.getByRole("option",{name:/United Kingdom/});await t.click(o);const i=c.getByRole("button",{name:"United States"});await n(i).toBeInTheDocument();const p=c.getByRole("button",{name:"United Kingdom"});await n(p).toBeInTheDocument()}},H={render:e=>l.jsx(g,{...e}),args:{options:[...m,...N],renderOption:e=>l.jsxs("span",{className:u.customOption,children:[l.jsx(K,{icon:"public",size:"tiny"}),e.label]}),clearable:!0,style:{width:"300px"}},play:async({canvasElement:e,step:r})=>{const s=v(e).getByRole("combobox");await r("Search filters options by string label",async()=>{await t.click(s);const o=c.getByPlaceholderText("Search");await t.type(o,"United"),await n(c.getByRole("option",{name:/United States/})).toBeInTheDocument(),await n(c.getByRole("option",{name:/United Kingdom/})).toBeInTheDocument(),await n(c.queryByRole("option",{name:/Apple/})).not.toBeInTheDocument(),await n(c.queryByRole("option",{name:/Germany/})).not.toBeInTheDocument(),await t.clear(o)}),await r("should select an option from search results",async()=>{const o=c.getByPlaceholderText("Search");await t.type(o,"Japan");const i=c.getByRole("option",{name:/Japan/});await t.click(i),await n(s).toHaveTextContent("Japan")})}},D={render:()=>{const[e,r]=C.useState(""),a=s=>{const o=x[s.value];return l.jsxs("span",{className:u.customOption,children:[s.label,o&&l.jsx(b,{status:o.status,label:o.label,size:"small",ghost:!0,icon:"check_circle"})]})};return l.jsx(w,{options:_,value:e,onValueChange:r,renderValue:a,clearable:!0,style:{width:"250px"}})},play:async({canvasElement:e})=>{const a=v(e).getByRole("combobox");await n(a).toHaveTextContent("Click to select a value"),await t.click(a);const s=c.getByRole("option",{name:"v0.8"});await t.click(s),await n(a).toHaveTextContent("v0.8"),await n(a).toHaveTextContent("Live"),await t.click(a);const o=c.getByRole("option",{name:"v2.3"});await t.click(o),await n(a).toHaveTextContent("v2.3"),await n(a).toHaveTextContent("Pending")}},I={render:()=>{const[e,r]=C.useState([]),a=o=>l.jsxs("span",{className:u.customOption,children:[l.jsx(U,{label:o.value.toUpperCase(),size:"small"}),o.label]}),s=o=>l.jsx("span",{className:u.customOption,children:o.map(i=>l.jsx(U,{label:i.value.toUpperCase(),size:"small"},i.value))});return l.jsx(w,{options:N,value:e,onValueChange:r,renderOption:a,renderValue:s,multiple:!0,clearable:!0,style:{width:"300px"}})},play:async({canvasElement:e})=>{const a=v(e).getByRole("combobox");await t.click(a);const s=c.getByRole("option",{name:/United States/});await t.click(s);const o=c.getByRole("option",{name:/Germany/});await t.click(o),await n(a).toHaveTextContent("US"),await n(a).toHaveTextContent("DE")}},V={render:()=>{const[e,r]=C.useState(""),a=o=>{const i=x[o.value];return i?l.jsxs("span",{className:u.customOption,children:[o.label,l.jsx(b,{status:i.status,label:i.label,size:"small",ghost:!0,icon:"check_circle"})]}):o.label},s=o=>{const i=x[o.value];return l.jsxs("span",{className:u.customOption,children:[o.label,i&&l.jsx(b,{status:i.status,label:i.label,size:"small",ghost:!0,icon:"check_circle"})]})};return l.jsx(w,{options:_,value:e,onValueChange:r,renderOption:a,renderValue:s,clearable:!0,style:{width:"250px"}})},play:async({canvasElement:e})=>{const a=v(e).getByRole("combobox");await n(a).toHaveTextContent("Click to select a value"),await t.click(a);const s=c.getByRole("option",{name:/v0.8/});await n(s).toHaveTextContent("Live"),await t.click(s),await n(a).toHaveTextContent("v0.8"),await n(a).toHaveTextContent("Live"),await t.click(a);const o=c.getByRole("option",{name:/v1.4/});await n(o).toHaveTextContent("Running"),await t.click(o),await n(a).toHaveTextContent("v1.4"),await n(a).toHaveTextContent("Running")}},j={render:()=>{const[e,r]=C.useState([]),a=o=>{const i=x[o.value];return i?l.jsxs("span",{className:u.customOption,children:[o.label,l.jsx(b,{status:i.status,label:i.label,size:"small",ghost:!0,icon:"check_circle"})]}):o.label},s=o=>{const i=o[0],p=i?x[i.value]:void 0;return l.jsxs("span",{className:u.customOption,children:[i?.label,p&&l.jsx(b,{status:p.status,label:p.label,size:"small",ghost:!0,icon:"check_circle"}),o.length>1&&` +${String(o.length-1)}`]})};return l.jsx(w,{options:_,value:e,onValueChange:r,renderOption:a,renderValue:s,multiple:!0,clearable:!0,style:{width:"300px"}})},play:async({canvasElement:e})=>{const a=v(e).getByRole("combobox");await t.click(a);const s=c.getByRole("option",{name:/v0.8/});await n(s).toHaveTextContent("Live"),await t.click(s),await n(a).toHaveTextContent("v0.8"),await n(a).toHaveTextContent("Live");const o=c.getByRole("option",{name:/v3.6/});await n(o).toHaveTextContent("Draft"),await t.click(o),await n(a).toHaveTextContent("v0.8"),await n(a).toHaveTextContent("+1")}},z={render:e=>l.jsx(g,{...e}),args:{options:[...m,{value:"nectarine",label:"Nectarine"}],clearable:!0,style:{width:"250px"}},play:async({canvasElement:e,step:r})=>{const s=v(e).getByRole("combobox"),o="Click to select a value";await r("Backspace key clears selected value",async()=>{await t.click(s);const i=c.getByRole("option",{name:"Apple"});await t.click(i),await n(s).toHaveTextContent("Apple"),await t.keyboard("{Escape}"),await t.keyboard("{Backspace}"),await n(s).toHaveTextContent(o)}),await r("Delete key clears selected value",async()=>{await t.click(s);const i=c.getByRole("option",{name:"Banana"});await t.click(i),await n(s).toHaveTextContent("Banana"),await t.keyboard("{Escape}"),await t.keyboard("{Delete}"),await n(s).toHaveTextContent(o)}),await r("Space key works normally in search input",async()=>{await t.click(s);const i=c.getByPlaceholderText("Search");await t.click(i),await t.type(i,"indian fig"),await n(i).toHaveValue("indian fig");const p=c.getByRole("option",{name:"Indian fig"});await n(p).toBeInTheDocument(),await t.clear(i),await t.keyboard("{Escape}")})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};const We=["Default","WithIcons","Sizes","WithSearch","MultiSelect","MultiSelectWithSearch","CustomRenderOption","CustomRenderOptionMultiSelect","CustomRenderOptionWithSearch","CustomRenderValue","CustomRenderValueMultiSelect","CustomRenderValueAndOption","CustomRenderValueAndOptionMultiSelect","KeyboardInteractions"];export{f as CustomRenderOption,E as CustomRenderOptionMultiSelect,H as CustomRenderOptionWithSearch,D as CustomRenderValue,V as CustomRenderValueAndOption,j as CustomRenderValueAndOptionMultiSelect,I as CustomRenderValueMultiSelect,k as Default,z as KeyboardInteractions,R as MultiSelect,S as MultiSelectWithSearch,O as Sizes,B as WithIcons,T as WithSearch,We as __namedExportsOrder,_e as default};
