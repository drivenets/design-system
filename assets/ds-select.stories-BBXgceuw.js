import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as R}from"./iframe-GhvvmIvk.js";import{D as O}from"./ds-select-DpfazRWF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CFg2X2TO.js";import"./ds-icon-CLW5u7Mu.js";import"./ds-checkbox-BrUyzovv.js";import"./index-CeNUtHxB.js";import"./index-DxcPRp5N.js";import"./index-CEuCMGL6.js";import"./index-NLLiC9mu.js";import"./index-F-ZmvGfS.js";import"./ds-button-BSRbDzy_.js";import"./ds-button-legacy-C5BL7mxE.js";import"./ds-button-new-0DK6HokA.js";import"./ds-chip-Ee-qCc2I.js";import"./ds-typography-CR12Hdjh.js";import"./index-DzhYLBvp.js";import"./use-locale-context-CO5JyQiY.js";import"./index-1-mst_J2.js";import"./ds-text-input-Pe-j-GUX.js";import"./list-collection-CjQrhn-f.js";import"./index-DCchWidZ.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-DG2oXFOr.js";import"./use-field-context-Dh9jCJNy.js";import"./portal-BSS_yJhf.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-CDlVlhdb.js";const S="_sizesContainer_19suf_1",I="_sizeItem_19suf_7",D="_sizeLabel_19suf_12",w={sizesContainer:S,sizeItem:I,sizeLabel:D},{expect:a,screen:i,userEvent:e,within:h}=__STORYBOOK_MODULE_TEST__,re={title:"Design System/Select",component:O,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object",description:"Options to display in the select dropdown"},value:{control:"text",description:"Value of the selected option"},onValueChange:{action:"value changed",description:"Callback when the selected value changes",table:{disable:!0}},placeholder:{control:"text",description:"Placeholder text when no option is selected"},style:{control:"object",description:"Additional styles to apply to the select container"},multiple:{control:"boolean",description:"Whether multiple selections are allowed"},clearable:{control:"boolean",description:"Whether the selection can be cleared"}}},m=({options:t,style:c,size:l,placeholder:n,clearable:s,multiple:o,disabled:u})=>{const[d,g]=R.useState(""),y=f=>{g(f)};return r.jsx(O,{options:t,value:d,onValueChange:y,style:c,size:l,placeholder:n,disabled:u,multiple:o,clearable:s})},T=async t=>{const c=h(t),l=c.getByRole("combobox"),n=p[0],s=p[1];if(!n||!s)throw new Error("mockOptions must have at least 2 items");await e.click(l);const o=i.getByRole("option",{name:n.label});await a(o).not.toHaveAttribute("data-state","checked"),await e.click(o),await a(l).toHaveTextContent(n.label),await e.click(l);const u=i.getByRole("option",{name:s.label});await e.click(u),await a(l).toHaveTextContent(s.label),await e.click(l);const d=i.getByRole("option",{name:n.label});await a(d).not.toHaveAttribute("data-state","checked");const g=i.getByRole("option",{name:s.label});await a(g).toHaveAttribute("data-state","checked"),await e.click(l);const y=c.getByRole("button",{name:"Clear value"});await e.click(y),await a(l).toHaveTextContent("Click to select a value")},p=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"indian-fig",label:"Indian fig"},{value:"jackfruit",label:"Jackfruit"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"melon",label:"Melon"}],v={render:t=>r.jsx(m,{...t}),args:{options:p,clearable:!0,style:{width:"200px"}},play:async({canvasElement:t})=>{await T(t)}},b={render:t=>r.jsx(m,{...t}),args:{options:p.slice(0,3).map(t=>({...t,icon:"nutrition"})),style:{width:"200px"},clearable:!0},play:async({canvasElement:t})=>{await T(t)}},k={render:t=>r.jsxs("div",{className:w.sizesContainer,children:[r.jsxs("div",{className:w.sizeItem,children:[r.jsx("div",{className:w.sizeLabel,children:"Default"}),r.jsx(m,{...t,size:"default"})]}),r.jsxs("div",{className:w.sizeItem,children:[r.jsx("div",{className:w.sizeLabel,children:"Small"}),r.jsx(m,{...t,size:"small"})]})]}),args:{options:p.slice(0,5),clearable:!0,style:{width:"200px"}},argTypes:{size:{table:{disable:!0}}}},x={render:t=>r.jsx(m,{...t}),args:{options:[...p,{value:"nectarine",label:"Nectarine"}],clearable:!0,style:{width:"200px"}}},B={render:t=>r.jsx(m,{...t}),args:{options:p,style:{width:"250px"},multiple:!0,clearable:!0},play:async({canvasElement:t})=>{const l=h(t).getByRole("combobox");await e.click(l);const n=i.getByRole("option",{name:"All"});await e.click(n);const s=i.getByRole("button",{name:/^\+\d+$/});await e.click(s);for(const y of p){const f=i.getByRole("button",{name:y.label});await a(f).toBeInTheDocument()}await e.click(l);for(const y of p)await a(l).toHaveTextContent(y.label);await e.click(l);const o=p[0],u=i.getByRole("button",{name:o.label}),d=h(u).getByRole("button",{name:"Delete chip"});await e.click(d),await a(u).not.toBeInTheDocument();const g=i.getByRole("button",{name:"Clear All"});await e.click(g),await e.click(l),await a(l).toHaveTextContent("Click to select a value")}},C={render:t=>r.jsx(m,{...t}),args:{options:[...p,{value:"nectarine",label:"Nectarine"}],style:{width:"250px"},multiple:!0,clearable:!0},play:async({canvasElement:t,step:c})=>{const n=h(t).getByRole("combobox"),s="Click to select a value";await c("Search input appears and filters items",async()=>{await e.click(n);const o=i.getByPlaceholderText("Search");await a(o).toBeInTheDocument(),await e.type(o,"berry"),await a(i.getByRole("option",{name:"Elderberry"})).toBeInTheDocument(),await a(i.queryByRole("option",{name:"Apple"})).not.toBeInTheDocument(),await a(i.queryByRole("option",{name:"Banana"})).not.toBeInTheDocument(),await a(i.queryByRole("option",{name:"Date"})).not.toBeInTheDocument(),await e.clear(o)}),await c("Select multiple options",async()=>{const o=i.getByRole("option",{name:"Apple"});await e.click(o);const u=i.getByRole("option",{name:"Banana"});await e.click(u);const d=i.getByRole("option",{name:"Cherry"});await e.click(d),await a(n).toHaveTextContent("Apple"),await a(n).toHaveTextContent("Banana"),await a(n).toHaveTextContent("Cherry")}),await c("Clear all selections with Backspace",async()=>{await e.keyboard("{Escape}"),await e.keyboard("{Backspace}"),await a(n).toHaveTextContent(s),await a(n).not.toHaveTextContent("Apple"),await a(n).not.toHaveTextContent("Banana"),await a(n).not.toHaveTextContent("Cherry")})}},E={render:t=>r.jsx(m,{...t}),args:{options:[...p,{value:"nectarine",label:"Nectarine"}],clearable:!0,style:{width:"250px"}},play:async({canvasElement:t,step:c})=>{const n=h(t).getByRole("combobox"),s="Click to select a value";await c("Backspace key clears selected value",async()=>{await e.click(n);const o=i.getByRole("option",{name:"Apple"});await e.click(o),await a(n).toHaveTextContent("Apple"),await e.keyboard("{Escape}"),await e.keyboard("{Backspace}"),await a(n).toHaveTextContent(s)}),await c("Delete key clears selected value",async()=>{await e.click(n);const o=i.getByRole("option",{name:"Banana"});await e.click(o),await a(n).toHaveTextContent("Banana"),await e.keyboard("{Escape}"),await e.keyboard("{Delete}"),await a(n).toHaveTextContent(s)}),await c("Space key works normally in search input",async()=>{await e.click(n);const o=i.getByPlaceholderText("Search");await e.click(o),await e.type(o,"indian fig"),await a(o).toHaveValue("indian fig");const u=i.getByRole("option",{name:"Indian fig"});await a(u).toBeInTheDocument(),await e.clear(o),await e.keyboard("{Escape}")})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const ce=["Default","WithIcons","Sizes","WithSearch","MultiSelect","MultiSelectWithSearch","KeyboardInteractions"];export{v as Default,E as KeyboardInteractions,B as MultiSelect,C as MultiSelectWithSearch,k as Sizes,b as WithIcons,x as WithSearch,ce as __namedExportsOrder,re as default};
