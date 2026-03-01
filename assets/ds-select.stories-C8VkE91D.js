import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as z}from"./iframe-BiS-jv3t.js";import{D as f}from"./ds-select-LI2qhI1J.js";import{D as A}from"./ds-tag-DDaeiU0q.js";import{D as U}from"./ds-icon-C6_c7cen.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dcf9nKpk.js";import"./ds-checkbox-BNhEkuOX.js";import"./index-BkQEma7U.js";import"./index-Ca6npegj.js";import"./index-Du5p6qUX.js";import"./index-B86gb8ra.js";import"./index-CFFkCUe2.js";import"./ds-button-vZfWUYJV.js";import"./ds-button-legacy-Bn3u2PEj.js";import"./ds-button-new-EwZ5B5rn.js";import"./ds-chip-DKqHYnUc.js";import"./ds-typography-BBurbS9a.js";import"./index-ItqqaAbT.js";import"./use-locale-context-BRV_gY9N.js";import"./create-anatomy-rI760qwe.js";import"./ds-text-input-COOSt4JL.js";import"./list-collection-BEtYSm8O.js";import"./equal-DfFTejAs.js";import"./use-field-context-N8Ehj3xz.js";import"./event-CBXSxTbR.js";import"./form-DRYsdxZR.js";import"./typeahead-Dds_o26r.js";import"./set-CK6CiRoH.js";import"./query-CjgVAlRR.js";import"./visually-hidden-BShGFMbX.js";import"./get-styles-BMCKPuke.js";import"./floating-ui.dom-D3zTlarL.js";import"./raf-CC9hSMXO.js";import"./use-presence-CrfHhwjR.js";import"./index-BknwlxAh.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-73PcSIXb.js";import"./portal-CLV-NGsi.js";import"./create-split-props-u5h9OPvL.js";const W="_sizesContainer_s49e8_1",_="_sizeItem_s49e8_7",N="_sizeLabel_s49e8_12",V="_customOption_s49e8_18",w={sizesContainer:W,sizeItem:_,sizeLabel:N,customOption:V},{expect:a,screen:n,userEvent:e,within:d}=__STORYBOOK_MODULE_TEST__,Ee={title:"Design System/Select",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object",description:"Options to display in the select dropdown"},value:{control:"text",description:"Value of the selected option"},onValueChange:{action:"value changed",description:"Callback when the selected value changes",table:{disable:!0}},placeholder:{control:"text",description:"Placeholder text when no option is selected"},style:{control:"object",description:"Additional styles to apply to the select container"},multiple:{control:"boolean",description:"Whether multiple selections are allowed"},clearable:{control:"boolean",description:"Whether the selection can be cleared"}}},m=({options:t,style:l,size:i,placeholder:o,clearable:c,multiple:r,disabled:u,renderOption:g})=>{const[h,y]=z.useState(""),S=j=>{y(j)};return s.jsx(f,{options:t,value:h,onValueChange:S,style:l,size:i,placeholder:o,disabled:u,multiple:r,clearable:c,renderOption:g})},D=async t=>{const l=d(t),i=l.getByRole("combobox"),o=p[0],c=p[1];if(!o||!c)throw new Error("mockOptions must have at least 2 items");await e.click(i);const r=n.getByRole("option",{name:o.label});await a(r).not.toHaveAttribute("data-state","checked"),await e.click(r),await a(i).toHaveTextContent(o.label),await e.click(i);const u=n.getByRole("option",{name:c.label});await e.click(u),await a(i).toHaveTextContent(c.label),await e.click(i);const g=n.getByRole("option",{name:o.label});await a(g).not.toHaveAttribute("data-state","checked");const h=n.getByRole("option",{name:c.label});await a(h).toHaveAttribute("data-state","checked"),await e.click(i);const y=l.getByRole("button",{name:"Clear value"});await e.click(y),await a(i).toHaveTextContent("Click to select a value")},p=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"indian-fig",label:"Indian fig"},{value:"jackfruit",label:"Jackfruit"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"melon",label:"Melon"}],v={render:t=>s.jsx(m,{...t}),args:{options:p,clearable:!0,style:{width:"200px"}},play:async({canvasElement:t})=>{await D(t)}},b={render:t=>s.jsx(m,{...t}),args:{options:p.slice(0,3).map(t=>({...t,icon:"nutrition"})),style:{width:"200px"},clearable:!0},play:async({canvasElement:t})=>{await D(t)}},x={render:t=>s.jsxs("div",{className:w.sizesContainer,children:[s.jsxs("div",{className:w.sizeItem,children:[s.jsx("div",{className:w.sizeLabel,children:"Default"}),s.jsx(m,{...t,size:"default"})]}),s.jsxs("div",{className:w.sizeItem,children:[s.jsx("div",{className:w.sizeLabel,children:"Small"}),s.jsx(m,{...t,size:"small"})]})]}),args:{options:p.slice(0,5),clearable:!0,style:{width:"200px"}},argTypes:{size:{table:{disable:!0}}}},B={render:t=>s.jsx(m,{...t}),args:{options:[...p,{value:"nectarine",label:"Nectarine"}],clearable:!0,style:{width:"200px"}}},k={render:t=>s.jsx(m,{...t}),args:{options:p,style:{width:"250px"},multiple:!0,clearable:!0},play:async({canvasElement:t})=>{const i=d(t).getByRole("combobox");await e.click(i);const o=n.getByRole("option",{name:"All"});await e.click(o);const c=n.getByRole("button",{name:/^\+\d+$/});await e.click(c);for(const y of p){const S=n.getByRole("button",{name:y.label});await a(S).toBeInTheDocument()}await e.click(i);for(const y of p)await a(i).toHaveTextContent(y.label);await e.click(i);const r=p[0],u=n.getByRole("button",{name:r.label}),g=d(u).getByRole("button",{name:"Delete chip"});await e.click(g),await a(u).not.toBeInTheDocument();const h=n.getByRole("button",{name:"Clear All"});await e.click(h),await e.click(i),await a(i).toHaveTextContent("Click to select a value")}},C={render:t=>s.jsx(m,{...t}),args:{options:[...p,{value:"nectarine",label:"Nectarine"}],style:{width:"250px"},multiple:!0,clearable:!0},play:async({canvasElement:t,step:l})=>{const o=d(t).getByRole("combobox"),c="Click to select a value";await l("Search input appears and filters items",async()=>{await e.click(o);const r=n.getByPlaceholderText("Search");await a(r).toBeInTheDocument(),await e.type(r,"berry"),await a(n.getByRole("option",{name:"Elderberry"})).toBeInTheDocument(),await a(n.queryByRole("option",{name:"Apple"})).not.toBeInTheDocument(),await a(n.queryByRole("option",{name:"Banana"})).not.toBeInTheDocument(),await a(n.queryByRole("option",{name:"Date"})).not.toBeInTheDocument(),await e.clear(r)}),await l("Select multiple options",async()=>{const r=n.getByRole("option",{name:"Apple"});await e.click(r);const u=n.getByRole("option",{name:"Banana"});await e.click(u);const g=n.getByRole("option",{name:"Cherry"});await e.click(g),await a(o).toHaveTextContent("Apple"),await a(o).toHaveTextContent("Banana"),await a(o).toHaveTextContent("Cherry")}),await l("Clear all selections with Backspace",async()=>{await e.keyboard("{Escape}"),await e.keyboard("{Backspace}"),await a(o).toHaveTextContent(c),await a(o).not.toHaveTextContent("Apple"),await a(o).not.toHaveTextContent("Banana"),await a(o).not.toHaveTextContent("Cherry")})}},I=[{value:"us",label:"United States"},{value:"gb",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"jp",label:"Japan"},{value:"fr",label:"France"}],H=t=>s.jsxs("span",{className:w.customOption,children:[s.jsx(A,{label:t.value.toUpperCase(),size:"small"}),t.label]}),O={render:t=>s.jsx(m,{...t}),args:{options:I,renderOption:H,clearable:!0,style:{width:"250px"}},play:async({canvasElement:t})=>{const i=d(t).getByRole("combobox");await e.click(i);const o=n.getByRole("option",{name:/United States/});await a(o).toBeInTheDocument(),await e.click(o),await a(i).toHaveTextContent("United States"),await e.click(i);const c=n.getByRole("option",{name:/France/});await e.click(c),await a(i).toHaveTextContent("France")}},R={render:t=>s.jsx(m,{...t}),args:{options:I,renderOption:H,multiple:!0,clearable:!0,style:{width:"300px"}},play:async({canvasElement:t})=>{const i=d(t).getByRole("combobox");await e.click(i);const o=n.getByRole("option",{name:/United States/});await e.click(o);const c=n.getByRole("option",{name:/United Kingdom/});await e.click(c);const r=n.getByRole("button",{name:"United States"});await a(r).toBeInTheDocument();const u=n.getByRole("button",{name:"United Kingdom"});await a(u).toBeInTheDocument()}},T={render:t=>s.jsx(m,{...t}),args:{options:[...p,...I],renderOption:t=>s.jsxs("span",{className:w.customOption,children:[s.jsx(U,{icon:"public",size:"tiny"}),t.label]}),clearable:!0,style:{width:"300px"}},play:async({canvasElement:t,step:l})=>{const o=d(t).getByRole("combobox");await l("Search filters options by string label",async()=>{await e.click(o);const c=n.getByPlaceholderText("Search");await e.type(c,"United"),await a(n.getByRole("option",{name:/United States/})).toBeInTheDocument(),await a(n.getByRole("option",{name:/United Kingdom/})).toBeInTheDocument(),await a(n.queryByRole("option",{name:/Apple/})).not.toBeInTheDocument(),await a(n.queryByRole("option",{name:/Germany/})).not.toBeInTheDocument(),await e.clear(c)}),await l("Select an option from search results",async()=>{const c=n.getByPlaceholderText("Search");await e.type(c,"Japan");const r=n.getByRole("option",{name:/Japan/});await e.click(r),await a(o).toHaveTextContent("Japan")})}},E={render:t=>s.jsx(m,{...t}),args:{options:[...p,{value:"nectarine",label:"Nectarine"}],clearable:!0,style:{width:"250px"}},play:async({canvasElement:t,step:l})=>{const o=d(t).getByRole("combobox"),c="Click to select a value";await l("Backspace key clears selected value",async()=>{await e.click(o);const r=n.getByRole("option",{name:"Apple"});await e.click(r),await a(o).toHaveTextContent("Apple"),await e.keyboard("{Escape}"),await e.keyboard("{Backspace}"),await a(o).toHaveTextContent(c)}),await l("Delete key clears selected value",async()=>{await e.click(o);const r=n.getByRole("option",{name:"Banana"});await e.click(r),await a(o).toHaveTextContent("Banana"),await e.keyboard("{Escape}"),await e.keyboard("{Delete}"),await a(o).toHaveTextContent(c)}),await l("Space key works normally in search input",async()=>{await e.click(o);const r=n.getByPlaceholderText("Search");await e.click(r),await e.type(r,"indian fig"),await a(r).toHaveValue("indian fig");const u=n.getByRole("option",{name:"Indian fig"});await a(u).toBeInTheDocument(),await e.clear(r),await e.keyboard("{Escape}")})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    await step('Select an option from search results', async () => {
      const searchInput = screen.getByPlaceholderText('Search');
      await userEvent.type(searchInput, 'Japan');
      const jpOption = screen.getByRole('option', {
        name: /Japan/
      });
      await userEvent.click(jpOption);
      await expect(trigger).toHaveTextContent('Japan');
    });
  }
}`,...T.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const Se=["Default","WithIcons","Sizes","WithSearch","MultiSelect","MultiSelectWithSearch","CustomRenderOption","CustomRenderOptionMultiSelect","CustomRenderOptionWithSearch","KeyboardInteractions"];export{O as CustomRenderOption,R as CustomRenderOptionMultiSelect,T as CustomRenderOptionWithSearch,v as Default,E as KeyboardInteractions,k as MultiSelect,C as MultiSelectWithSearch,x as Sizes,b as WithIcons,B as WithSearch,Se as __namedExportsOrder,Ee as default};
