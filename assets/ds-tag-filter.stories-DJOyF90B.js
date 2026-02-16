import{j as d}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-JBeCcR5A.js";import{D as p}from"./ds-tag-filter-OYgCWuZo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Da6ZeaQY.js";import"./index-0JB0pZiv.js";import"./index-DbK7uH_F.js";import"./ds-typography-DDtxUSw6.js";import"./index-C9Ze5EHI.js";import"./index-B8A52F7t.js";import"./ds-tag-2LiaZMmu.js";import"./ds-icon-TYqKh3hH.js";import"./ds-button-CBJvpLBq.js";import"./ds-button-legacy-Bhoee-uX.js";import"./ds-button-new-BUDdRzKz.js";const R="_container_z9hxz_1",I="_controlsContainer_z9hxz_7",S="_addButton_z9hxz_12",C="_infoText_z9hxz_20",b={container:R,controlsContainer:I,addButton:S,infoText:C},{expect:t,fn:E,userEvent:m,waitFor:n,within:y}=__STORYBOOK_MODULE_TEST__,P={title:"Design System/Tag Filter",component:p,parameters:{layout:"padded",docs:{description:{component:"A component for displaying active filters as tags with overflow handling. Shows visible tags in up to 2 rows, with an expand button to show hidden items in a dialog."}}},tags:["autodocs"],argTypes:{items:{control:"object",description:"Array of tag items to display"},locale:{description:"Locale-specific options for customizing text content",control:"object"},onClearAll:{action:"clear-all",description:'Callback when "Clear all filters" is clicked'},onItemDelete:{action:"delete-item",description:"Callback when item is deleted"},onItemSelect:{action:"select-item",description:"Callback when item is selected"},onExpand:{action:"expand",description:"Callback when expand/collapse is clicked"}}},f=[{id:"1",label:"Status: Active"},{id:"2",label:"Running: From 100 to 10,000"},{id:"3",label:"Completed from 20,000 to 100,000"},{id:"4",label:"Executor: Category 1, Layer 1 transporter"},{id:"5",label:"Executor: Category 2, Layer 11 transporter"},{id:"6",label:"Executor: Category 2, Layer 12 transporter"},{id:"7",label:"Executor: Category 2, Layer 13 transporter"},{id:"8",label:"Version: 000.0001-3"},{id:"9",label:"Version: 000.0001-4"},{id:"10",label:"Version: 000.0001-5"},{id:"11",label:"Version: 000.0001-6"},{id:"12",label:"Last editor: Kevin Levin"},{id:"13",label:"Last editor: Emery Dance"}],v={render:function(){const[e,a]=g.useState(f),o=()=>{a([])},r=()=>{const i=`new-${String(Date.now())}`;a(s=>[...s,{id:i,label:`New Filter ${String(s.length+1)}`}])},u=i=>{a(s=>s.filter(w=>w.id!==i.id))},c=i=>{a(s=>s.map(w=>w.id===i.id?{...w,selected:!w.selected}:w))};return d.jsxs("div",{className:b.container,children:[d.jsx(p,{items:e,onClearAll:o,onItemDelete:u,onItemSelect:c}),d.jsxs("div",{className:b.controlsContainer,children:[d.jsx("button",{type:"button",onClick:r,className:b.addButton,children:"Add Filter"}),d.jsxs("p",{className:b.infoText,children:["Total filters: ",e.length]}),d.jsxs("p",{className:b.infoText,children:["Selected filters: [",e.filter(i=>i.selected).map(i=>`"${i.label}"`).join(", "),"]"]})]})]})},play:async({canvasElement:l})=>{const e=y(l);await n(async()=>{await t(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await t(e.getByText("Filtered by:")).toBeInTheDocument(),await t(e.getByRole("button",{name:/Clear all filters/})).toBeInTheDocument();const a=e.getByRole("button",{name:"Status: Active"});await m.click(a),await n(async()=>{await t(a).toHaveAttribute("aria-pressed","true")}),await t(e.getByText(/Selected filters:.*"Status: Active"/)).toBeInTheDocument(),await m.click(a),await n(async()=>{await t(a).not.toHaveAttribute("aria-pressed")}),a.focus(),await n(async()=>{await t(e.getByRole("button",{name:"Delete tag"})).toBeVisible()});const o=e.getByRole("button",{name:"Delete tag"});await m.click(o),await n(async()=>{await t(e.queryByRole("button",{name:"Status: Active"})).not.toBeInTheDocument(),await t(e.getByText("Total filters: 12")).toBeInTheDocument()});const r=e.getByRole("button",{name:/Clear all filters/});await m.click(r),await n(async()=>{await t(e.getByText("Total filters: 0")).toBeInTheDocument()})}},B={render:function(){const[e,a]=g.useState([{id:"1",label:"Status: Active"},{id:"2",label:"Version: 1.0.0"},{id:"3",label:"Author: John Doe"}]),o=()=>{a([])},r=c=>{a(i=>i.filter(s=>s.id!==c.id))},u=c=>{a(i=>i.map(s=>s.id===c.id?{...s,selected:!s.selected}:s))};return d.jsx(p,{items:e,onClearAll:o,onItemDelete:r,onItemSelect:u})},play:async({canvasElement:l})=>{const e=y(l);await n(async()=>{await t(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await t(e.getByRole("button",{name:"Version: 1.0.0"})).toBeInTheDocument(),await t(e.getByRole("button",{name:"Author: John Doe"})).toBeInTheDocument();const a=e.getByRole("button",{name:"Status: Active"});await m.click(a),await n(async()=>{await t(a).toHaveAttribute("aria-pressed","true")}),a.focus(),await n(async()=>{await t(e.getByRole("button",{name:"Delete tag"})).toBeVisible()});const o=e.getByRole("button",{name:"Delete tag"});await m.click(o),await n(async()=>{await t(e.queryByRole("button",{name:"Status: Active"})).not.toBeInTheDocument()}),await t(e.getByRole("button",{name:"Version: 1.0.0"})).toBeInTheDocument(),await t(e.getByRole("button",{name:"Author: John Doe"})).toBeInTheDocument()}},h={render:function(){const[e,a]=g.useState(f.slice(0,5)),o=r=>{a(u=>u.filter(c=>c.id!==r.id))};return d.jsx(p,{items:e,onItemDelete:o})},play:async({canvasElement:l})=>{const e=y(l);await n(async()=>{await t(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await t(e.queryByRole("button",{name:/Clear all filters/})).not.toBeInTheDocument(),e.getByRole("button",{name:"Status: Active"}).focus(),await n(async()=>{await t(e.getByRole("button",{name:"Delete tag"})).toBeVisible()});const o=e.getByRole("button",{name:"Delete tag"});await m.click(o),await n(async()=>{await t(e.queryByRole("button",{name:"Status: Active"})).not.toBeInTheDocument()})}},T={render:function(){const e=f.slice(0,5);return d.jsx(p,{items:e,locale:{label:"Applied filters:"}})},play:async({canvasElement:l})=>{const e=y(l);await n(async()=>{await t(e.getByText("Status: Active")).toBeInTheDocument()}),await t(e.getByText("Applied filters:")).toBeInTheDocument(),await t(e.queryByRole("button",{name:"Delete tag"})).not.toBeInTheDocument(),await t(e.queryByRole("button",{name:/Clear all filters/})).not.toBeInTheDocument()}},F={render:function(){const[e,a]=g.useState(f.slice(0,5)),o=()=>{a([])},r=u=>{a(c=>c.filter(i=>i.id!==u.id))};return d.jsx(p,{items:e,locale:{label:""},onClearAll:o,onItemDelete:r})},play:async({canvasElement:l})=>{const e=y(l);await n(async()=>{await t(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await t(e.queryByText("Filtered by:")).not.toBeInTheDocument(),await t(e.getByRole("button",{name:/Clear all filters/})).toBeInTheDocument(),e.getByRole("button",{name:"Status: Active"}).focus(),await n(async()=>{await t(e.getByRole("button",{name:"Delete tag"})).toBeVisible()});const o=e.getByRole("button",{name:"Delete tag"});await m.click(o),await n(async()=>{await t(e.queryByRole("button",{name:"Status: Active"})).not.toBeInTheDocument()})}},D={render:function(){const[e,a]=g.useState(f.slice(0,5)),o=()=>{a([])},r=u=>{a(c=>c.filter(i=>i.id!==u.id))};return d.jsx(p,{items:e,locale:{label:"Aktywne filtry:",clearButton:"Zresetuj"},onClearAll:o,onItemDelete:r})},play:async({canvasElement:l})=>{const e=y(l);await n(async()=>{await t(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await t(e.getByText("Aktywne filtry:")).toBeInTheDocument(),await t(e.getByRole("button",{name:/Zresetuj/})).toBeInTheDocument(),await t(e.queryByText("Filtered by:")).not.toBeInTheDocument(),await t(e.queryByRole("button",{name:/Clear all filters/})).not.toBeInTheDocument()}},x={args:{items:f,onExpand:E()},play:async({canvasElement:l,args:e})=>{const a=y(l);await n(async()=>{await t(a.getByRole("button",{name:/\+\d+ filters?/})).toBeInTheDocument()});const o=a.getByRole("button",{name:/\+\d+ filters?/});await m.click(o),await n(async()=>{await t(e.onExpand).toHaveBeenCalledWith(!0)}),await n(async()=>{await t(a.getByRole("button",{name:"Collapse"})).toBeInTheDocument()});const r=a.getByRole("button",{name:"Collapse"});await m.click(r),await n(async()=>{await t(e.onExpand).toHaveBeenCalledWith(!1)}),await n(async()=>{await t(a.getByRole("button",{name:/\+\d+ filters?/})).toBeInTheDocument()})}},A={render:function(){const[e,a]=g.useState([{id:"1",label:"Status: Active",selected:!0},{id:"2",label:"Running: From 100 to 10,000",selected:!1},{id:"3",label:"Completed from 20,000 to 100,000",selected:!0},{id:"4",label:"Executor: Category 1",selected:!1},{id:"5",label:"Version: 1.0.0",selected:!0}]),o=()=>{a([])},r=c=>{a(i=>i.filter(s=>s.id!==c.id))},u=c=>{a(i=>i.map(s=>s.id===c.id?{...s,selected:!s.selected}:s))};return d.jsx(p,{items:e,onClearAll:o,onItemDelete:r,onItemSelect:u})},play:async({canvasElement:l})=>{const e=y(l);await n(async()=>{await t(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()});const a=e.getByRole("button",{name:"Status: Active"}),o=e.getByRole("button",{name:"Completed from 20,000 to 100,000"}),r=e.getByRole("button",{name:"Version: 1.0.0"});await t(a).toHaveAttribute("aria-pressed","true"),await t(o).toHaveAttribute("aria-pressed","true"),await t(r).toHaveAttribute("aria-pressed","true");const u=e.getByRole("button",{name:"Running: From 100 to 10,000"}),c=e.getByRole("button",{name:"Executor: Category 1"});await t(u).not.toHaveAttribute("aria-pressed"),await t(c).not.toHaveAttribute("aria-pressed"),await m.click(a),await n(async()=>{await t(a).not.toHaveAttribute("aria-pressed")}),await m.click(u),await n(async()=>{await t(u).toHaveAttribute("aria-pressed","true")})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters);
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleAddFilter = () => {
      const newId = \`new-\${String(Date.now())}\`;
      setFilters(prev => [...prev, {
        id: newId,
        label: \`New Filter \${String(prev.length + 1)}\`
      }]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    const handleFilterSelect = (filter: TagFilterItem) => {
      setFilters(prev => prev.map(f => f.id === filter.id ? {
        ...f,
        selected: !f.selected
      } : f));
    };
    return <div className={styles.container}>
                <DsTagFilter items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} onItemSelect={handleFilterSelect} />
                <div className={styles.controlsContainer}>
                    <button type="button" onClick={handleAddFilter} className={styles.addButton}>
                        Add Filter
                    </button>
                    <p className={styles.infoText}>Total filters: {filters.length}</p>
                    <p className={styles.infoText}>
                        Selected filters: [
                        {filters.filter(filter => filter.selected).map(filter => \`"\${filter.label}"\`).join(', ')}
                        ]
                    </p>
                </div>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Status: Active'
      })).toBeInTheDocument();
    });
    await expect(canvas.getByText('Filtered by:')).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: /Clear all filters/
    })).toBeInTheDocument();
    const firstTag = canvas.getByRole('button', {
      name: 'Status: Active'
    });
    await userEvent.click(firstTag);
    await waitFor(async () => {
      await expect(firstTag).toHaveAttribute('aria-pressed', 'true');
    });

    // Verify selection is reflected in the info text
    await expect(canvas.getByText(/Selected filters:.*"Status: Active"/)).toBeInTheDocument();

    // Click again to deselect
    await userEvent.click(firstTag);
    await waitFor(async () => {
      await expect(firstTag).not.toHaveAttribute('aria-pressed');
    });
    firstTag.focus();

    // Wait for delete button to become visible after focus
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Delete tag'
      })).toBeVisible();
    });
    const deleteButton = canvas.getByRole('button', {
      name: 'Delete tag'
    });
    await userEvent.click(deleteButton);
    await waitFor(async () => {
      await expect(canvas.queryByRole('button', {
        name: 'Status: Active'
      })).not.toBeInTheDocument();
      await expect(canvas.getByText('Total filters: 12')).toBeInTheDocument();
    });

    // Test clear all functionality
    const clearAllButton = canvas.getByRole('button', {
      name: /Clear all filters/
    });
    await userEvent.click(clearAllButton);
    await waitFor(async () => {
      await expect(canvas.getByText('Total filters: 0')).toBeInTheDocument();
    });
  }
}`,...v.parameters?.docs?.source},description:{story:`Default story demonstrating the TagFilter component with interactive controls.
Try adding, removing, and selecting filters to see the component in action.`,...v.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [filters, setFilters] = useState<TagFilterItem[]>([{
      id: '1',
      label: 'Status: Active'
    }, {
      id: '2',
      label: 'Version: 1.0.0'
    }, {
      id: '3',
      label: 'Author: John Doe'
    }]);
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    const handleFilterSelect = (filter: TagFilterItem) => {
      setFilters(prev => prev.map(f => f.id === filter.id ? {
        ...f,
        selected: !f.selected
      } : f));
    };
    return <DsTagFilter items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} onItemSelect={handleFilterSelect} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Status: Active'
      })).toBeInTheDocument();
    });

    // Verify all filters are visible
    await expect(canvas.getByRole('button', {
      name: 'Version: 1.0.0'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Author: John Doe'
    })).toBeInTheDocument();

    // Test selection interaction
    const statusTag = canvas.getByRole('button', {
      name: 'Status: Active'
    });
    await userEvent.click(statusTag);
    await waitFor(async () => {
      await expect(statusTag).toHaveAttribute('aria-pressed', 'true');
    });

    // Test deletion interaction - focus the tag to reveal delete button
    statusTag.focus();

    // Wait for delete button to become visible after focus
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Delete tag'
      })).toBeVisible();
    });
    const deleteButton = canvas.getByRole('button', {
      name: 'Delete tag'
    });
    await userEvent.click(deleteButton);
    await waitFor(async () => {
      await expect(canvas.queryByRole('button', {
        name: 'Status: Active'
      })).not.toBeInTheDocument();
    });

    // Verify remaining filters
    await expect(canvas.getByRole('button', {
      name: 'Version: 1.0.0'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Author: John Doe'
    })).toBeInTheDocument();
  }
}`,...B.parameters?.docs?.source},description:{story:"Story showing fewer filters that fit within the visible area without overflow.",...B.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters.slice(0, 5));
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    return <DsTagFilter items={filters} onItemDelete={handleFilterDelete} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Status: Active'
      })).toBeInTheDocument();
    });

    // Verify "Clear all filters" button is NOT present
    await expect(canvas.queryByRole('button', {
      name: /Clear all filters/
    })).not.toBeInTheDocument();

    // Verify deletion still works - focus the tag to reveal delete button
    const firstTag = canvas.getByRole('button', {
      name: 'Status: Active'
    });
    firstTag.focus();

    // Wait for delete button to become visible after focus
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Delete tag'
      })).toBeVisible();
    });
    const deleteButton = canvas.getByRole('button', {
      name: 'Delete tag'
    });
    await userEvent.click(deleteButton);
    await waitFor(async () => {
      await expect(canvas.queryByRole('button', {
        name: 'Status: Active'
      })).not.toBeInTheDocument();
    });
  }
}`,...h.parameters?.docs?.source},description:{story:'Story showing TagFilter without the "Clear all" button.',...h.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const filters: TagFilterItem[] = sampleFilters.slice(0, 5);
    return <DsTagFilter items={filters} locale={{
      label: 'Applied filters:'
    }} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByText('Status: Active')).toBeInTheDocument();
    });

    // Verify custom label is shown
    await expect(canvas.getByText('Applied filters:')).toBeInTheDocument();

    // Verify delete buttons are NOT visible (read-only)
    await expect(canvas.queryByRole('button', {
      name: 'Delete tag'
    })).not.toBeInTheDocument();

    // Verify "Clear all filters" button is NOT present
    await expect(canvas.queryByRole('button', {
      name: /Clear all filters/
    })).not.toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source},description:{story:"Story showing TagFilter without delete functionality (read-only tags).",...T.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters.slice(0, 5));
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    return <DsTagFilter items={filters} locale={{
      label: ''
    }} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Status: Active'
      })).toBeInTheDocument();
    });

    // Verify "Filtered by:" label is NOT present
    await expect(canvas.queryByText('Filtered by:')).not.toBeInTheDocument();

    // Verify "Clear all filters" button is still present and works
    await expect(canvas.getByRole('button', {
      name: /Clear all filters/
    })).toBeInTheDocument();

    // Verify deletion still works - focus the tag to reveal delete button
    const firstTag = canvas.getByRole('button', {
      name: 'Status: Active'
    });
    firstTag.focus();

    // Wait for delete button to become visible after focus
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Delete tag'
      })).toBeVisible();
    });
    const deleteButton = canvas.getByRole('button', {
      name: 'Delete tag'
    });
    await userEvent.click(deleteButton);
    await waitFor(async () => {
      await expect(canvas.queryByRole('button', {
        name: 'Status: Active'
      })).not.toBeInTheDocument();
    });
  }
}`,...F.parameters?.docs?.source},description:{story:"Story showing TagFilter without a label.",...F.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters.slice(0, 5));
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    return <DsTagFilter items={filters} locale={{
      // cspell:disable-next-line
      label: 'Aktywne filtry:',
      // cspell:disable-next-line
      clearButton: 'Zresetuj'
    }} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Status: Active'
      })).toBeInTheDocument();
    });

    // Verify custom label is rendered
    // cspell:disable-next-line
    await expect(canvas.getByText('Aktywne filtry:')).toBeInTheDocument();

    // cspell:disable-next-line
    await expect(canvas.getByRole('button', {
      name: /Zresetuj/
    })).toBeInTheDocument();
    await expect(canvas.queryByText('Filtered by:')).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: /Clear all filters/
    })).not.toBeInTheDocument();
  }
}`,...D.parameters?.docs?.source},description:{story:"Story demonstrating full locale customization with both label and clearButton.",...D.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleFilters,
    onExpand: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and overflow tag to appear
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: /\\+\\d+ filters?/
      })).toBeInTheDocument();
    });
    const expandButton = canvas.getByRole('button', {
      name: /\\+\\d+ filters?/
    });

    // Click expand button
    await userEvent.click(expandButton);

    // Verify onExpand was called with true (expanded)
    await waitFor(async () => {
      await expect(args.onExpand).toHaveBeenCalledWith(true);
    });

    // Verify the button now shows "Collapse"
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Collapse'
      })).toBeInTheDocument();
    });
    const collapseButton = canvas.getByRole('button', {
      name: 'Collapse'
    });

    // Click collapse button
    await userEvent.click(collapseButton);

    // Verify onExpand was called with false (collapsed)
    await waitFor(async () => {
      await expect(args.onExpand).toHaveBeenCalledWith(false);
    });

    // Verify the expand button is back
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: /\\+\\d+ filters?/
      })).toBeInTheDocument();
    });
  }
}`,...x.parameters?.docs?.source},description:{story:"Story testing the expand/collapse functionality and onExpand callback.",...x.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [filters, setFilters] = useState<TagFilterItem[]>([{
      id: '1',
      label: 'Status: Active',
      selected: true
    }, {
      id: '2',
      label: 'Running: From 100 to 10,000',
      selected: false
    }, {
      id: '3',
      label: 'Completed from 20,000 to 100,000',
      selected: true
    }, {
      id: '4',
      label: 'Executor: Category 1',
      selected: false
    }, {
      id: '5',
      label: 'Version: 1.0.0',
      selected: true
    }]);
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    const handleFilterSelect = (filter: TagFilterItem) => {
      setFilters(prev => prev.map(f => f.id === filter.id ? {
        ...f,
        selected: !f.selected
      } : f));
    };
    return <DsTagFilter items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} onItemSelect={handleFilterSelect} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Status: Active'
      })).toBeInTheDocument();
    });

    // Verify pre-selected tags have aria-pressed="true"
    const activeTag = canvas.getByRole('button', {
      name: 'Status: Active'
    });
    const completedTag = canvas.getByRole('button', {
      name: 'Completed from 20,000 to 100,000'
    });
    const versionTag = canvas.getByRole('button', {
      name: 'Version: 1.0.0'
    });
    await expect(activeTag).toHaveAttribute('aria-pressed', 'true');
    await expect(completedTag).toHaveAttribute('aria-pressed', 'true');
    await expect(versionTag).toHaveAttribute('aria-pressed', 'true');

    // Verify non-selected tags do not have aria-pressed
    const runningTag = canvas.getByRole('button', {
      name: 'Running: From 100 to 10,000'
    });
    const executorTag = canvas.getByRole('button', {
      name: 'Executor: Category 1'
    });
    await expect(runningTag).not.toHaveAttribute('aria-pressed');
    await expect(executorTag).not.toHaveAttribute('aria-pressed');

    // Test toggling selection on a pre-selected tag
    await userEvent.click(activeTag);
    await waitFor(async () => {
      await expect(activeTag).not.toHaveAttribute('aria-pressed');
    });

    // Test toggling selection on a non-selected tag
    await userEvent.click(runningTag);
    await waitFor(async () => {
      await expect(runningTag).toHaveAttribute('aria-pressed', 'true');
    });
  }
}`,...A.parameters?.docs?.source},description:{story:"Story showing TagFilter with pre-selected items.",...A.parameters?.docs?.description}}};const M=["Default","FewFilters","WithoutClearAll","ReadOnly","WithoutLabel","CustomLocale","ExpandCollapse","WithPreSelectedItems"];export{D as CustomLocale,v as Default,x as ExpandCollapse,B as FewFilters,T as ReadOnly,A as WithPreSelectedItems,h as WithoutClearAll,F as WithoutLabel,M as __namedExportsOrder,P as default};
