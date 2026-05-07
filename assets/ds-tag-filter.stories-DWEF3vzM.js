import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-vTeSIeRQ.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./ds-tag-filter-BxmijRuV.js";var o,s,c,l,u,d=t((()=>{o=`_container_z9hxz_1`,s=`_controlsContainer_z9hxz_7`,c=`_addButton_z9hxz_12`,l=`_infoText_z9hxz_20`,u={container:o,controlsContainer:s,addButton:c,infoText:l}})),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;t((()=>{f=e(n(),1),i(),d(),p=r(),{expect:m,fn:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/TagFilter`,component:a,parameters:{layout:`padded`,docs:{description:{component:`A component for displaying active filters as tags with overflow handling. Non-tag elements (label, expand/collapse, clear) sit in a header row. Tags wrap in a dedicated area below.`}}},argTypes:{items:{control:`object`,description:`Array of tag items to display`},locale:{description:`Locale-specific options for customizing text content`,control:`object`},onClearAll:{action:`clear-all`,description:`Callback when "Clear all filters" is clicked`},onItemDelete:{action:`delete-item`,description:`Callback when item is deleted`},onItemSelect:{action:`select-item`,description:`Callback when item is selected`},onExpand:{action:`expand`,description:`Callback when expand/collapse is clicked`}}},b=[{id:`1`,label:`Status: Active`},{id:`2`,label:`Running: From 100 to 10,000`},{id:`3`,label:`Completed from 20,000 to 100,000`},{id:`4`,label:`Executor: Category 1, Layer 1 transporter`},{id:`5`,label:`Executor: Category 2, Layer 11 transporter`},{id:`6`,label:`Executor: Category 2, Layer 12 transporter`},{id:`7`,label:`Executor: Category 2, Layer 13 transporter`},{id:`8`,label:`Version: 000.0001-3`},{id:`9`,label:`Version: 000.0001-4`},{id:`10`,label:`Version: 000.0001-5`},{id:`11`,label:`Version: 000.0001-6`},{id:`12`,label:`Last editor: Kevin Levin`},{id:`13`,label:`Last editor: Emery Dance`}],x={render:function(e){let[t,n]=(0,f.useState)(b),r=()=>{n([])},i=()=>{let e=`new-${String(Date.now())}`;n(t=>[...t,{id:e,label:`New Filter ${String(t.length+1)}`}])},o=e=>{n(t=>t.filter(t=>t.id!==e.id))},s=e=>{n(t=>t.map(t=>t.id===e.id?{...t,selected:!t.selected}:t))};return(0,p.jsxs)(`div`,{className:u.container,children:[(0,p.jsx)(a,{...e,items:t,onClearAll:r,onItemDelete:o,onItemSelect:s}),(0,p.jsxs)(`div`,{className:u.controlsContainer,children:[(0,p.jsx)(`button`,{type:`button`,onClick:i,className:u.addButton,children:`Add Filter`}),(0,p.jsxs)(`p`,{className:u.infoText,children:[`Total filters: `,t.length]}),(0,p.jsxs)(`p`,{className:u.infoText,children:[`Selected filters: [`,t.filter(e=>e.selected).map(e=>`"${e.label}"`).join(`, `),`]`]})]})]})},play:async({canvasElement:e})=>{let t=v(e);await _(async()=>{await m(t.getByRole(`button`,{name:`Status: Active`})).toBeInTheDocument()}),await m(t.getByText(`Filtered by:`)).toBeInTheDocument(),await m(t.getByRole(`button`,{name:/Clear all filters/})).toBeInTheDocument();let n=t.getByRole(`button`,{name:`Status: Active`});await g.click(n),await _(async()=>{await m(n).toHaveAttribute(`aria-pressed`,`true`)}),await m(t.getByText(/Selected filters:.*"Status: Active"/)).toBeInTheDocument(),await g.click(n),await _(async()=>{await m(n).not.toHaveAttribute(`aria-pressed`)}),n.focus(),await _(async()=>{await m(t.getByRole(`button`,{name:`Delete tag`})).toBeVisible()});let r=t.getByRole(`button`,{name:`Delete tag`});await g.click(r),await _(async()=>{await m(t.queryByRole(`button`,{name:`Status: Active`})).not.toBeInTheDocument(),await m(t.getByText(`Total filters: 12`)).toBeInTheDocument()});let i=t.getByRole(`button`,{name:/Clear all filters/});await g.click(i),await _(async()=>{await m(t.getByText(`Total filters: 0`)).toBeInTheDocument()})}},S={render:function(e){let[t,n]=(0,f.useState)([{id:`1`,label:`Status: Active`},{id:`2`,label:`Version: 1.0.0`},{id:`3`,label:`Author: John Doe`}]),r=()=>{n([])},i=e=>{n(t=>t.filter(t=>t.id!==e.id))},o=e=>{n(t=>t.map(t=>t.id===e.id?{...t,selected:!t.selected}:t))};return(0,p.jsx)(a,{...e,items:t,onClearAll:r,onItemDelete:i,onItemSelect:o})},play:async({canvasElement:e})=>{let t=v(e);await _(async()=>{await m(t.getByRole(`button`,{name:`Status: Active`})).toBeInTheDocument()}),await m(t.getByRole(`button`,{name:`Version: 1.0.0`})).toBeInTheDocument(),await m(t.getByRole(`button`,{name:`Author: John Doe`})).toBeInTheDocument();let n=t.getByRole(`button`,{name:`Status: Active`});await g.click(n),await _(async()=>{await m(n).toHaveAttribute(`aria-pressed`,`true`)}),n.focus(),await _(async()=>{await m(t.getByRole(`button`,{name:`Delete tag`})).toBeVisible()});let r=t.getByRole(`button`,{name:`Delete tag`});await g.click(r),await _(async()=>{await m(t.queryByRole(`button`,{name:`Status: Active`})).not.toBeInTheDocument()}),await m(t.getByRole(`button`,{name:`Version: 1.0.0`})).toBeInTheDocument(),await m(t.getByRole(`button`,{name:`Author: John Doe`})).toBeInTheDocument()}},C={render:function(e){let[t,n]=(0,f.useState)(b.slice(0,5)),r=e=>{n(t=>t.filter(t=>t.id!==e.id))};return(0,p.jsx)(a,{...e,items:t,onClearAll:void 0,onItemDelete:r})},play:async({canvasElement:e})=>{let t=v(e);await _(async()=>{await m(t.getByRole(`button`,{name:`Status: Active`})).toBeInTheDocument()}),await m(t.queryByRole(`button`,{name:/Clear all filters/})).not.toBeInTheDocument(),t.getByRole(`button`,{name:`Status: Active`}).focus(),await _(async()=>{await m(t.getByRole(`button`,{name:`Delete tag`})).toBeVisible()});let n=t.getByRole(`button`,{name:`Delete tag`});await g.click(n),await _(async()=>{await m(t.queryByRole(`button`,{name:`Status: Active`})).not.toBeInTheDocument()})}},w={render:function(e){let t=b.slice(0,5);return(0,p.jsx)(a,{...e,items:t,onClearAll:void 0,onItemDelete:void 0,onItemSelect:void 0,locale:{label:`Applied filters:`}})},play:async({canvasElement:e})=>{let t=v(e);await _(async()=>{await m(t.getByText(`Status: Active`)).toBeInTheDocument()}),await m(t.getByText(`Applied filters:`)).toBeInTheDocument(),await m(t.queryByRole(`button`,{name:`Delete tag`})).not.toBeInTheDocument(),await m(t.queryByRole(`button`,{name:/Clear all filters/})).not.toBeInTheDocument()}},T={render:function(e){let[t,n]=(0,f.useState)(b.slice(0,5)),r=()=>{n([])},i=e=>{n(t=>t.filter(t=>t.id!==e.id))};return(0,p.jsx)(a,{...e,items:t,locale:{label:``},onClearAll:r,onItemDelete:i})},play:async({canvasElement:e})=>{let t=v(e);await _(async()=>{await m(t.getByRole(`button`,{name:`Status: Active`})).toBeInTheDocument()}),await m(t.queryByText(`Filtered by:`)).not.toBeInTheDocument(),await m(t.getByRole(`button`,{name:/Clear all filters/})).toBeInTheDocument(),t.getByRole(`button`,{name:`Status: Active`}).focus(),await _(async()=>{await m(t.getByRole(`button`,{name:`Delete tag`})).toBeVisible()});let n=t.getByRole(`button`,{name:`Delete tag`});await g.click(n),await _(async()=>{await m(t.queryByRole(`button`,{name:`Status: Active`})).not.toBeInTheDocument()})}},E={render:function(e){let[t,n]=(0,f.useState)(b),r=()=>{n([])},i=e=>{n(t=>t.filter(t=>t.id!==e.id))};return(0,p.jsx)(a,{...e,items:t,locale:{label:`Aktywne filtry:`,clearButton:`Zresetuj`,showMore:`Pokaż więcej`,showLess:`Pokaż mniej`},onClearAll:r,onItemDelete:i})},play:async({canvasElement:e})=>{let t=v(e);await _(async()=>{await m(t.getByRole(`button`,{name:`Status: Active`})).toBeInTheDocument()}),await m(t.getByText(`Aktywne filtry:`)).toBeInTheDocument(),await m(t.getByRole(`button`,{name:/Zresetuj/})).toBeInTheDocument(),await m(t.getByRole(`button`,{name:/Pokaż więcej/})).toBeInTheDocument(),await m(t.queryByText(`Filtered by:`)).not.toBeInTheDocument(),await m(t.queryByRole(`button`,{name:/Clear all filters/})).not.toBeInTheDocument(),await m(t.queryByRole(`button`,{name:/Show more/})).not.toBeInTheDocument()}},D={args:{items:b,onExpand:h()},play:async({canvasElement:e,args:t})=>{let n=v(e);await _(async()=>{await m(n.getByRole(`button`,{name:/Show more \(\d+\)/})).toBeInTheDocument()});let r=n.getByRole(`button`,{name:/Show more \(\d+\)/});await g.click(r),await _(async()=>{await m(t.onExpand).toHaveBeenCalledWith(!0)}),await _(async()=>{await m(n.getByRole(`button`,{name:/Show less/})).toBeInTheDocument()});let i=n.getByRole(`button`,{name:/Show less/});await g.click(i),await _(async()=>{await m(t.onExpand).toHaveBeenCalledWith(!1)}),await _(async()=>{await m(n.getByRole(`button`,{name:/Show more \(\d+\)/})).toBeInTheDocument()})}},O={render:function(e){let[t,n]=(0,f.useState)(b.slice(0,6).map(e=>({...e,slotProps:{tag:{size:`small`}}}))),r=()=>{n([])},i=e=>{n(t=>t.filter(t=>t.id!==e.id))};return(0,p.jsx)(a,{...e,items:t,onClearAll:r,onItemDelete:i})},play:async({canvasElement:e})=>{let t=v(e);await _(async()=>{await m(t.getByRole(`button`,{name:`Status: Active`})).toBeInTheDocument()}),await m(t.getByText(`Filtered by:`)).toBeInTheDocument(),await m(t.getByRole(`button`,{name:/Clear all filters/})).toBeInTheDocument()}},k={render:function(e){let[t,n]=(0,f.useState)([{id:`1`,label:`Status: Active`,selected:!0},{id:`2`,label:`Running: From 100 to 10,000`,selected:!1},{id:`3`,label:`Completed from 20,000 to 100,000`,selected:!0},{id:`4`,label:`Executor: Category 1`,selected:!1},{id:`5`,label:`Version: 1.0.0`,selected:!0}]),r=()=>{n([])},i=e=>{n(t=>t.filter(t=>t.id!==e.id))},o=e=>{n(t=>t.map(t=>t.id===e.id?{...t,selected:!t.selected}:t))};return(0,p.jsx)(a,{...e,items:t,onClearAll:r,onItemDelete:i,onItemSelect:o})},play:async({canvasElement:e})=>{let t=v(e);await _(async()=>{await m(t.getByRole(`button`,{name:`Status: Active`})).toBeInTheDocument()});let n=t.getByRole(`button`,{name:`Status: Active`}),r=t.getByRole(`button`,{name:`Completed from 20,000 to 100,000`}),i=t.getByRole(`button`,{name:`Version: 1.0.0`});await m(n).toHaveAttribute(`aria-pressed`,`true`),await m(r).toHaveAttribute(`aria-pressed`,`true`),await m(i).toHaveAttribute(`aria-pressed`,`true`);let a=t.getByRole(`button`,{name:`Running: From 100 to 10,000`}),o=t.getByRole(`button`,{name:`Executor: Category 1`});await m(a).not.toHaveAttribute(`aria-pressed`),await m(o).not.toHaveAttribute(`aria-pressed`),await g.click(n),await _(async()=>{await m(n).not.toHaveAttribute(`aria-pressed`)}),await g.click(a),await _(async()=>{await m(a).toHaveAttribute(`aria-pressed`,`true`)})}},A={args:{items:[]},play:async({canvasElement:e})=>{await m(v(e).queryByText(`Filtered by:`)).not.toBeInTheDocument()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState(sampleFilters);
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
}`,...x.parameters?.docs?.source},description:{story:`Default story demonstrating the TagFilter component with interactive controls.
Try adding, removing, and selecting filters to see the component in action.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Story showing fewer filters that fit within the visible area without overflow.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState(sampleFilters.slice(0, 5));
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
}`,...C.parameters?.docs?.source},description:{story:`Story showing TagFilter without the "Clear all" button.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Story showing TagFilter without delete functionality (read-only tags).`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState(sampleFilters.slice(0, 5));
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
}`,...T.parameters?.docs?.source},description:{story:`Story showing TagFilter without a label.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState(sampleFilters);
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
}`,...E.parameters?.docs?.source},description:{story:`Story demonstrating full locale customization with both label and clearButton.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Story testing the expand/collapse functionality and onExpand callback.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const smallFilters: TagFilterItem[] = sampleFilters.slice(0, 6).map(item => ({
      ...item,
      slotProps: {
        tag: {
          size: 'small'
        }
      }
    }));
    const [filters, setFilters] = useState(smallFilters);
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
}`,...O.parameters?.docs?.source},description:{story:`Story showing TagFilter with small tags via slotProps.tag on each item.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Story showing TagFilter with pre-selected items.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByText('Filtered by:')).not.toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source},description:{story:`Story verifying the component renders nothing when items is empty.`,...A.parameters?.docs?.description}}},j=[`Default`,`FewFilters`,`WithoutClearAll`,`ReadOnly`,`WithoutLabel`,`CustomLocale`,`ExpandCollapse`,`SmallSize`,`WithPreSelectedItems`,`EmptyState`]}))();export{E as CustomLocale,x as Default,A as EmptyState,D as ExpandCollapse,S as FewFilters,w as ReadOnly,O as SmallSize,k as WithPreSelectedItems,C as WithoutClearAll,T as WithoutLabel,j as __namedExportsOrder,y as default};