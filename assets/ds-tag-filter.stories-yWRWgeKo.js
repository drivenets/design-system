import{j as m}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-C6f-ocMF.js";import{D as w}from"./ds-tag-filter-BXgRjGNq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL-TAQed.js";import"./index-BeNDvfjG.js";import"./index-CUdr-Bxm.js";import"./ds-typography-CFYklv8R.js";import"./index-CZt3HLRd.js";import"./index-Dcu7xVmh.js";import"./ds-tag-0YUUnUL0.js";import"./ds-icon-CMQ5iV8t.js";import"./ds-button-BgQbhMI2.js";import"./ds-button-legacy-ilS0Kzna.js";import"./ds-button-new-DwcRouZ6.js";const C="_container_z9hxz_1",E="_controlsContainer_z9hxz_7",k="_addButton_z9hxz_12",V="_infoText_z9hxz_20",h={container:C,controlsContainer:E,addButton:k,infoText:V},{expect:t,fn:j,userEvent:y,waitFor:l,within:p}=__STORYBOOK_MODULE_TEST__,Y={title:"Design System/Tag Filter",component:w,parameters:{layout:"padded",docs:{description:{component:"A component for displaying active filters as tags with overflow handling. Non-tag elements (label, expand/collapse, clear) sit in a header row. Tags wrap in a dedicated area below."}}},tags:["autodocs"],argTypes:{items:{control:"object",description:"Array of tag items to display"},locale:{description:"Locale-specific options for customizing text content",control:"object"},onClearAll:{action:"clear-all",description:'Callback when "Clear all filters" is clicked'},onItemDelete:{action:"delete-item",description:"Callback when item is deleted"},onItemSelect:{action:"select-item",description:"Callback when item is selected"},onExpand:{action:"expand",description:"Callback when expand/collapse is clicked"}}},f=[{id:"1",label:"Status: Active"},{id:"2",label:"Running: From 100 to 10,000"},{id:"3",label:"Completed from 20,000 to 100,000"},{id:"4",label:"Executor: Category 1, Layer 1 transporter"},{id:"5",label:"Executor: Category 2, Layer 11 transporter"},{id:"6",label:"Executor: Category 2, Layer 12 transporter"},{id:"7",label:"Executor: Category 2, Layer 13 transporter"},{id:"8",label:"Version: 000.0001-3"},{id:"9",label:"Version: 000.0001-4"},{id:"10",label:"Version: 000.0001-5"},{id:"11",label:"Version: 000.0001-6"},{id:"12",label:"Last editor: Kevin Levin"},{id:"13",label:"Last editor: Emery Dance"}],v={render:function(e){const[n,a]=g.useState(f),r=()=>{a([])},u=()=>{const i=`new-${String(Date.now())}`;a(s=>[...s,{id:i,label:`New Filter ${String(s.length+1)}`}])},d=i=>{a(s=>s.filter(b=>b.id!==i.id))},c=i=>{a(s=>s.map(b=>b.id===i.id?{...b,selected:!b.selected}:b))};return m.jsxs("div",{className:h.container,children:[m.jsx(w,{...e,items:n,onClearAll:r,onItemDelete:d,onItemSelect:c}),m.jsxs("div",{className:h.controlsContainer,children:[m.jsx("button",{type:"button",onClick:u,className:h.addButton,children:"Add Filter"}),m.jsxs("p",{className:h.infoText,children:["Total filters: ",n.length]}),m.jsxs("p",{className:h.infoText,children:["Selected filters: [",n.filter(i=>i.selected).map(i=>`"${i.label}"`).join(", "),"]"]})]})]})},play:async({canvasElement:o})=>{const e=p(o);await l(async()=>{await t(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await t(e.getByText("Filtered by:")).toBeInTheDocument(),await t(e.getByRole("button",{name:/Clear all filters/})).toBeInTheDocument();const n=e.getByRole("button",{name:"Status: Active"});await y.click(n),await l(async()=>{await t(n).toHaveAttribute("aria-pressed","true")}),await t(e.getByText(/Selected filters:.*"Status: Active"/)).toBeInTheDocument(),await y.click(n),await l(async()=>{await t(n).not.toHaveAttribute("aria-pressed")}),n.focus(),await l(async()=>{await t(e.getByRole("button",{name:"Delete tag"})).toBeVisible()});const a=e.getByRole("button",{name:"Delete tag"});await y.click(a),await l(async()=>{await t(e.queryByRole("button",{name:"Status: Active"})).not.toBeInTheDocument(),await t(e.getByText("Total filters: 12")).toBeInTheDocument()});const r=e.getByRole("button",{name:/Clear all filters/});await y.click(r),await l(async()=>{await t(e.getByText("Total filters: 0")).toBeInTheDocument()})}},B={render:function(e){const[n,a]=g.useState([{id:"1",label:"Status: Active"},{id:"2",label:"Version: 1.0.0"},{id:"3",label:"Author: John Doe"}]),r=()=>{a([])},u=c=>{a(i=>i.filter(s=>s.id!==c.id))},d=c=>{a(i=>i.map(s=>s.id===c.id?{...s,selected:!s.selected}:s))};return m.jsx(w,{...e,items:n,onClearAll:r,onItemDelete:u,onItemSelect:d})},play:async({canvasElement:o})=>{const e=p(o);await l(async()=>{await t(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await t(e.getByRole("button",{name:"Version: 1.0.0"})).toBeInTheDocument(),await t(e.getByRole("button",{name:"Author: John Doe"})).toBeInTheDocument();const n=e.getByRole("button",{name:"Status: Active"});await y.click(n),await l(async()=>{await t(n).toHaveAttribute("aria-pressed","true")}),n.focus(),await l(async()=>{await t(e.getByRole("button",{name:"Delete tag"})).toBeVisible()});const a=e.getByRole("button",{name:"Delete tag"});await y.click(a),await l(async()=>{await t(e.queryByRole("button",{name:"Status: Active"})).not.toBeInTheDocument()}),await t(e.getByRole("button",{name:"Version: 1.0.0"})).toBeInTheDocument(),await t(e.getByRole("button",{name:"Author: John Doe"})).toBeInTheDocument()}},T={render:function(e){const[n,a]=g.useState(f.slice(0,5)),r=u=>{a(d=>d.filter(c=>c.id!==u.id))};return m.jsx(w,{...e,items:n,onClearAll:void 0,onItemDelete:r})},play:async({canvasElement:o})=>{const e=p(o);await l(async()=>{await t(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await t(e.queryByRole("button",{name:/Clear all filters/})).not.toBeInTheDocument(),e.getByRole("button",{name:"Status: Active"}).focus(),await l(async()=>{await t(e.getByRole("button",{name:"Delete tag"})).toBeVisible()});const a=e.getByRole("button",{name:"Delete tag"});await y.click(a),await l(async()=>{await t(e.queryByRole("button",{name:"Status: Active"})).not.toBeInTheDocument()})}},F={render:function(e){const n=f.slice(0,5);return m.jsx(w,{...e,items:n,onClearAll:void 0,onItemDelete:void 0,onItemSelect:void 0,locale:{label:"Applied filters:"}})},play:async({canvasElement:o})=>{const e=p(o);await l(async()=>{await t(e.getByText("Status: Active")).toBeInTheDocument()}),await t(e.getByText("Applied filters:")).toBeInTheDocument(),await t(e.queryByRole("button",{name:"Delete tag"})).not.toBeInTheDocument(),await t(e.queryByRole("button",{name:/Clear all filters/})).not.toBeInTheDocument()}},D={render:function(e){const[n,a]=g.useState(f.slice(0,5)),r=()=>{a([])},u=d=>{a(c=>c.filter(i=>i.id!==d.id))};return m.jsx(w,{...e,items:n,locale:{label:""},onClearAll:r,onItemDelete:u})},play:async({canvasElement:o})=>{const e=p(o);await l(async()=>{await t(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await t(e.queryByText("Filtered by:")).not.toBeInTheDocument(),await t(e.getByRole("button",{name:/Clear all filters/})).toBeInTheDocument(),e.getByRole("button",{name:"Status: Active"}).focus(),await l(async()=>{await t(e.getByRole("button",{name:"Delete tag"})).toBeVisible()});const a=e.getByRole("button",{name:"Delete tag"});await y.click(a),await l(async()=>{await t(e.queryByRole("button",{name:"Status: Active"})).not.toBeInTheDocument()})}},x={render:function(e){const[n,a]=g.useState(f),r=()=>{a([])},u=d=>{a(c=>c.filter(i=>i.id!==d.id))};return m.jsx(w,{...e,items:n,locale:{label:"Aktywne filtry:",clearButton:"Zresetuj",showMore:"Pokaż więcej",showLess:"Pokaż mniej"},onClearAll:r,onItemDelete:u})},play:async({canvasElement:o})=>{const e=p(o);await l(async()=>{await t(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await t(e.getByText("Aktywne filtry:")).toBeInTheDocument(),await t(e.getByRole("button",{name:/Zresetuj/})).toBeInTheDocument(),await t(e.getByRole("button",{name:/Pokaż więcej/})).toBeInTheDocument(),await t(e.queryByText("Filtered by:")).not.toBeInTheDocument(),await t(e.queryByRole("button",{name:/Clear all filters/})).not.toBeInTheDocument(),await t(e.queryByRole("button",{name:/Show more/})).not.toBeInTheDocument()}},I={args:{items:f,onExpand:j()},play:async({canvasElement:o,args:e})=>{const n=p(o);await l(async()=>{await t(n.getByRole("button",{name:/Show more \(\d+\)/})).toBeInTheDocument()});const a=n.getByRole("button",{name:/Show more \(\d+\)/});await y.click(a),await l(async()=>{await t(e.onExpand).toHaveBeenCalledWith(!0)}),await l(async()=>{await t(n.getByRole("button",{name:/Show less/})).toBeInTheDocument()});const r=n.getByRole("button",{name:/Show less/});await y.click(r),await l(async()=>{await t(e.onExpand).toHaveBeenCalledWith(!1)}),await l(async()=>{await t(n.getByRole("button",{name:/Show more \(\d+\)/})).toBeInTheDocument()})}},S={render:function(e){const n=f.slice(0,6).map(c=>({...c,slotProps:{tag:{size:"small"}}})),[a,r]=g.useState(n),u=()=>{r([])},d=c=>{r(i=>i.filter(s=>s.id!==c.id))};return m.jsx(w,{...e,items:a,onClearAll:u,onItemDelete:d})},play:async({canvasElement:o})=>{const e=p(o);await l(async()=>{await t(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await t(e.getByText("Filtered by:")).toBeInTheDocument(),await t(e.getByRole("button",{name:/Clear all filters/})).toBeInTheDocument()}},A={render:function(e){const[n,a]=g.useState([{id:"1",label:"Status: Active",selected:!0},{id:"2",label:"Running: From 100 to 10,000",selected:!1},{id:"3",label:"Completed from 20,000 to 100,000",selected:!0},{id:"4",label:"Executor: Category 1",selected:!1},{id:"5",label:"Version: 1.0.0",selected:!0}]),r=()=>{a([])},u=c=>{a(i=>i.filter(s=>s.id!==c.id))},d=c=>{a(i=>i.map(s=>s.id===c.id?{...s,selected:!s.selected}:s))};return m.jsx(w,{...e,items:n,onClearAll:r,onItemDelete:u,onItemSelect:d})},play:async({canvasElement:o})=>{const e=p(o);await l(async()=>{await t(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()});const n=e.getByRole("button",{name:"Status: Active"}),a=e.getByRole("button",{name:"Completed from 20,000 to 100,000"}),r=e.getByRole("button",{name:"Version: 1.0.0"});await t(n).toHaveAttribute("aria-pressed","true"),await t(a).toHaveAttribute("aria-pressed","true"),await t(r).toHaveAttribute("aria-pressed","true");const u=e.getByRole("button",{name:"Running: From 100 to 10,000"}),d=e.getByRole("button",{name:"Executor: Category 1"});await t(u).not.toHaveAttribute("aria-pressed"),await t(d).not.toHaveAttribute("aria-pressed"),await y.click(n),await l(async()=>{await t(n).not.toHaveAttribute("aria-pressed")}),await y.click(u),await l(async()=>{await t(u).toHaveAttribute("aria-pressed","true")})}},R={args:{items:[]},play:async({canvasElement:o})=>{const e=p(o);await t(e.queryByText("Filtered by:")).not.toBeInTheDocument()}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
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
                <DsTagFilter {...args} items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} onItemSelect={handleFilterSelect} />
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
  render: function Render(args) {
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
    return <DsTagFilter {...args} items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} onItemSelect={handleFilterSelect} />;
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
}`,...B.parameters?.docs?.source},description:{story:"Story showing fewer filters that fit within the visible area without overflow.",...B.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters.slice(0, 5));
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };

    // Storybook injects \`onClearAll\` via args by default — pass \`undefined\` explicitly
    // so the component hides the "Clear all" button.
    return <DsTagFilter {...args} items={filters} onClearAll={undefined} onItemDelete={handleFilterDelete} />;
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
}`,...T.parameters?.docs?.source},description:{story:'Story showing TagFilter without the "Clear all" button.',...T.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const filters: TagFilterItem[] = sampleFilters.slice(0, 5);

    // Storybook injects callbacks via args by default — pass \`undefined\` explicitly
    // so the component renders in read-only mode (no clear, delete, or select).
    return <DsTagFilter {...args} items={filters} onClearAll={undefined} onItemDelete={undefined} onItemSelect={undefined} locale={{
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
}`,...F.parameters?.docs?.source},description:{story:"Story showing TagFilter without delete functionality (read-only tags).",...F.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters.slice(0, 5));
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    return <DsTagFilter {...args} items={filters} locale={{
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
}`,...D.parameters?.docs?.source},description:{story:"Story showing TagFilter without a label.",...D.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters);
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    return <DsTagFilter {...args} items={filters} locale={{
      // cspell:disable-next-line
      label: 'Aktywne filtry:',
      // cspell:disable-next-line
      clearButton: 'Zresetuj',
      // cspell:disable-next-line
      showMore: 'Pokaż więcej',
      // cspell:disable-next-line
      showLess: 'Pokaż mniej'
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

    // Verify custom showMore locale
    // cspell:disable-next-line
    await expect(canvas.getByRole('button', {
      name: /Pokaż więcej/
    })).toBeInTheDocument();
    await expect(canvas.queryByText('Filtered by:')).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: /Clear all filters/
    })).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: /Show more/
    })).not.toBeInTheDocument();
  }
}`,...x.parameters?.docs?.source},description:{story:"Story demonstrating full locale customization with both label and clearButton.",...x.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleFilters,
    onExpand: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and "Show more" button to appear
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: /Show more \\(\\d+\\)/
      })).toBeInTheDocument();
    });
    const expandButton = canvas.getByRole('button', {
      name: /Show more \\(\\d+\\)/
    });

    // Click an expand button
    await userEvent.click(expandButton);

    // Verify onExpand was called with true (expanded)
    await waitFor(async () => {
      await expect(args.onExpand).toHaveBeenCalledWith(true);
    });

    // Verify the button now shows "Show less"
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: /Show less/
      })).toBeInTheDocument();
    });
    const collapseButton = canvas.getByRole('button', {
      name: /Show less/
    });

    // Click collapse button
    await userEvent.click(collapseButton);

    // Verify onExpand was called with false (collapsed)
    await waitFor(async () => {
      await expect(args.onExpand).toHaveBeenCalledWith(false);
    });

    // Verify an expand button is back
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: /Show more \\(\\d+\\)/
      })).toBeInTheDocument();
    });
  }
}`,...I.parameters?.docs?.source},description:{story:"Story testing the expand/collapse functionality and onExpand callback.",...I.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const smallFilters: TagFilterItem[] = sampleFilters.slice(0, 6).map(item => ({
      ...item,
      slotProps: {
        tag: {
          size: 'small'
        }
      }
    }));
    const [filters, setFilters] = useState<TagFilterItem[]>(smallFilters);
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    return <DsTagFilter {...args} items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Status: Active'
      })).toBeInTheDocument();
    });
    await expect(canvas.getByText('Filtered by:')).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: /Clear all filters/
    })).toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source},description:{story:"Story showing TagFilter with small tags via slotProps.tag on each item.",...S.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
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
    return <DsTagFilter {...args} items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} onItemSelect={handleFilterSelect} />;
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
}`,...A.parameters?.docs?.source},description:{story:"Story showing TagFilter with pre-selected items.",...A.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByText('Filtered by:')).not.toBeInTheDocument();
  }
}`,...R.parameters?.docs?.source},description:{story:"Story verifying the component renders nothing when items is empty.",...R.parameters?.docs?.description}}};const G=["Default","FewFilters","WithoutClearAll","ReadOnly","WithoutLabel","CustomLocale","ExpandCollapse","SmallSize","WithPreSelectedItems","EmptyState"];export{x as CustomLocale,v as Default,R as EmptyState,I as ExpandCollapse,B as FewFilters,F as ReadOnly,S as SmallSize,A as WithPreSelectedItems,T as WithoutClearAll,D as WithoutLabel,G as __namedExportsOrder,Y as default};
