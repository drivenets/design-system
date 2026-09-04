import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-typography-BLoO5j9q.js";import{n as o,t as s}from"./ds-button-v3-BnV8s8Ko.js";import{n as c,t as l}from"./ds-stack-GU0hZWeR.js";import{n as u,t as d}from"./ds-tag-filter-DeLS_fn4.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;t((()=>{f=e(n(),1),u(),o(),c(),a(),p=r(),m={title:`Components/TagFilter`,component:d,parameters:{layout:`padded`,docs:{description:{component:`Displays active filters as tags with overflow handling. Tags fill the left of a single row; the actions block (expand/collapse toggle, clear all) is pinned to the top-right and stays aligned with the first tag row when tags wrap.`}}},argTypes:{items:{control:`object`,description:`Array of tag items to display`},locale:{description:`Locale-specific options for customizing text content`,control:`object`},onClearAll:{action:`clear-all`,description:`Callback when "Clear all filters" is clicked`},onItemDelete:{action:`delete-item`,description:`Callback when item is deleted`},onItemSelect:{action:`select-item`,description:`Callback when item is selected`},onExpand:{action:`expand`,description:`Callback when expand/collapse is clicked`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1}}},h={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)([{id:`status`,label:`Status: Active`},{id:`running`,label:`Running: 100 to 10,000`},{id:`completed`,label:`Completed: 20,000 to 100,000`},{id:`executor`,label:`Executor: Category 1, Layer 1`},{id:`version`,label:`Version: 000.0001-3`},{id:`editor`,label:`Last editor: Kevin Levin`}]);return(0,p.jsx)(d,{items:e,onClearAll:()=>t([]),onItemDelete:e=>t(t=>t.filter(t=>t.id!==e.id)),onItemSelect:e=>t(t=>t.map(t=>t.id===e.id?{...t,selected:!t.selected}:t))})}},g={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:function(){let[e,t]=(0,f.useState)([{id:`1`,label:`Status: Active`},{id:`2`,label:`Running: 100 to 10,000`},{id:`3`,label:`Completed: 20,000 to 100,000`},{id:`4`,label:`Executor: Category 1, Layer 1`},{id:`5`,label:`Version: 000.0001-3`},{id:`6`,label:`Last editor: Kevin Levin`}]),n=e.filter(e=>e.selected).length;return(0,p.jsxs)(l,{direction:`column`,gap:`var(--standard)`,children:[(0,p.jsx)(d,{items:e,onClearAll:()=>t([]),onItemDelete:e=>t(t=>t.filter(t=>t.id!==e.id)),onItemSelect:e=>t(t=>t.map(t=>t.id===e.id?{...t,selected:!t.selected}:t))}),(0,p.jsxs)(l,{direction:`row`,gap:`var(--xs)`,alignItems:`center`,children:[(0,p.jsx)(s,{variant:`secondary`,size:`small`,icon:`add`,onClick:()=>t(e=>[...e,{id:`new-${String(Date.now())}`,label:`New Filter ${String(e.length+1)}`}]),children:`Add Filter`}),(0,p.jsxs)(i,{variant:`body-sm-reg`,color:`secondary`,children:[`Total: `,e.length,` · Selected: `,n]})]})]})}},_={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)([{id:`1`,label:`Status: Active`},{id:`2`,label:`Version: 1.0.0`},{id:`3`,label:`Author: John Doe`}]);return(0,p.jsx)(d,{items:e,onClearAll:()=>t([]),onItemDelete:e=>t(t=>t.filter(t=>t.id!==e.id)),onItemSelect:e=>t(t=>t.map(t=>t.id===e.id?{...t,selected:!t.selected}:t))})}},v={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)([{id:`1`,label:`Status: Active`},{id:`2`,label:`Running: 100 to 10,000`},{id:`3`,label:`Completed: 20,000 to 100,000`},{id:`4`,label:`Executor: Category 1, Layer 1`},{id:`5`,label:`Version: 000.0001-3`}]);return(0,p.jsx)(d,{items:e,onItemDelete:e=>t(t=>t.filter(t=>t.id!==e.id))})}},y={render:()=>(0,p.jsx)(d,{items:[{id:`1`,label:`Status: Active`},{id:`2`,label:`Running: 100 to 10,000`},{id:`3`,label:`Completed: 20,000 to 100,000`},{id:`4`,label:`Executor: Category 1, Layer 1`},{id:`5`,label:`Version: 000.0001-3`}]})},b={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)([{id:`1`,label:`Status: Active`},{id:`2`,label:`Running: 100 to 10,000`},{id:`3`,label:`Completed: 20,000 to 100,000`},{id:`4`,label:`Executor: Category 1, Layer 1`},{id:`5`,label:`Version: 000.0001-3`}]);return(0,p.jsx)(d,{items:e,locale:{clearButton:`Zresetuj`,showMore:`Pokaż więcej`,showLess:`Pokaż mniej`},onClearAll:()=>t([]),onItemDelete:e=>t(t=>t.filter(t=>t.id!==e.id))})}},x={args:{items:[{id:`1`,label:`Status: Active`},{id:`2`,label:`Running: From 100 to 10,000`},{id:`3`,label:`Completed from 20,000 to 100,000`},{id:`4`,label:`Executor: Category 1, Layer 1 transporter`},{id:`5`,label:`Executor: Category 2, Layer 11 transporter`},{id:`6`,label:`Executor: Category 2, Layer 12 transporter`},{id:`7`,label:`Executor: Category 2, Layer 13 transporter`},{id:`8`,label:`Version: 000.0001-3`},{id:`9`,label:`Version: 000.0001-4`},{id:`10`,label:`Version: 000.0001-5`},{id:`11`,label:`Last editor: Kevin Levin`},{id:`12`,label:`Last editor: Emery Dance`}]}},S={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)([{id:`1`,label:`Status: Active`,slotProps:{tag:{size:`small`}}},{id:`2`,label:`Running: 100 to 10,000`,slotProps:{tag:{size:`small`}}},{id:`3`,label:`Completed: 20,000 to 100,000`,slotProps:{tag:{size:`small`}}},{id:`4`,label:`Executor: Category 1, Layer 1`,slotProps:{tag:{size:`small`}}},{id:`5`,label:`Version: 000.0001-3`,slotProps:{tag:{size:`small`}}},{id:`6`,label:`Last editor: Kevin Levin`,slotProps:{tag:{size:`small`}}}]);return(0,p.jsx)(d,{items:e,onClearAll:()=>t([]),onItemDelete:e=>t(t=>t.filter(t=>t.id!==e.id))})}},C={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)([{id:`1`,label:`Status: Active`,selected:!0},{id:`2`,label:`Running: 100 to 10,000`,selected:!1},{id:`3`,label:`Completed: 20,000 to 100,000`,selected:!0},{id:`4`,label:`Executor: Category 1`,selected:!1},{id:`5`,label:`Version: 1.0.0`,selected:!0}]);return(0,p.jsx)(d,{items:e,onClearAll:()=>t([]),onItemDelete:e=>t(t=>t.filter(t=>t.id!==e.id)),onItemSelect:e=>t(t=>t.map(t=>t.id===e.id?{...t,selected:!t.selected}:t))})}},w={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)([{id:`1`,label:`Status: Active`},{id:`2`,label:`Running: 100 to 10,000`},{id:`3`,label:`Completed: 20,000 to 100,000`},{id:`4`,label:`Executor: Category 1, Layer 1`},{id:`5`,label:`Version: 000.0001-3`}]);return(0,p.jsx)(d,{items:e,locale:{label:`This heading is ignored`},onClearAll:()=>t([]),onItemDelete:e=>t(t=>t.filter(t=>t.id!==e.id))})}},T={args:{items:[]}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [items, setItems] = useState<TagFilterItem[]>([{
      id: 'status',
      label: 'Status: Active'
    }, {
      id: 'running',
      label: 'Running: 100 to 10,000'
    }, {
      id: 'completed',
      label: 'Completed: 20,000 to 100,000'
    }, {
      id: 'executor',
      label: 'Executor: Category 1, Layer 1'
    }, {
      id: 'version',
      label: 'Version: 000.0001-3'
    }, {
      id: 'editor',
      label: 'Last editor: Kevin Levin'
    }]);
    return <DsTagFilter items={items} onClearAll={() => setItems([])} onItemDelete={item => setItems(prev => prev.filter(f => f.id !== item.id))} onItemSelect={item => setItems(prev => prev.map(f => f.id === item.id ? {
      ...f,
      selected: !f.selected
    } : f))} />;
  }
}`,...h.parameters?.docs?.source},description:{story:'Active filters render as tags that users can select or remove, with a "Clear all" action.\nWire `onItemSelect`, `onItemDelete`, and `onClearAll` to your filter state.',...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: function Render() {
    const [items, setItems] = useState<TagFilterItem[]>([{
      id: '1',
      label: 'Status: Active'
    }, {
      id: '2',
      label: 'Running: 100 to 10,000'
    }, {
      id: '3',
      label: 'Completed: 20,000 to 100,000'
    }, {
      id: '4',
      label: 'Executor: Category 1, Layer 1'
    }, {
      id: '5',
      label: 'Version: 000.0001-3'
    }, {
      id: '6',
      label: 'Last editor: Kevin Levin'
    }]);
    const selectedCount = items.filter(item => item.selected).length;
    return <DsStack direction="column" gap="var(--standard)">
                <DsTagFilter items={items} onClearAll={() => setItems([])} onItemDelete={item => setItems(prev => prev.filter(f => f.id !== item.id))} onItemSelect={item => setItems(prev => prev.map(f => f.id === item.id ? {
        ...f,
        selected: !f.selected
      } : f))} />
                <DsStack direction="row" gap="var(--xs)" alignItems="center">
                    <DsButtonV3 variant="secondary" size="small" icon="add" onClick={() => setItems(prev => [...prev, {
          id: \`new-\${String(Date.now())}\`,
          label: \`New Filter \${String(prev.length + 1)}\`
        }])}>
                        Add Filter
                    </DsButtonV3>
                    <DsTypography variant="body-sm-reg" color="secondary">
                        Total: {items.length} · Selected: {selectedCount}
                    </DsTypography>
                </DsStack>
            </DsStack>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Interactive demo wiring add / remove / select handlers to local state, with live counters.
Human-facing playground — excluded from the manifest.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [items, setItems] = useState<TagFilterItem[]>([{
      id: '1',
      label: 'Status: Active'
    }, {
      id: '2',
      label: 'Version: 1.0.0'
    }, {
      id: '3',
      label: 'Author: John Doe'
    }]);
    return <DsTagFilter items={items} onClearAll={() => setItems([])} onItemDelete={item => setItems(prev => prev.filter(f => f.id !== item.id))} onItemSelect={item => setItems(prev => prev.map(f => f.id === item.id ? {
      ...f,
      selected: !f.selected
    } : f))} />;
  }
}`,..._.parameters?.docs?.source},description:{story:`A short list that fits on one row without overflow — no "Show more" toggle appears.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [items, setItems] = useState<TagFilterItem[]>([{
      id: '1',
      label: 'Status: Active'
    }, {
      id: '2',
      label: 'Running: 100 to 10,000'
    }, {
      id: '3',
      label: 'Completed: 20,000 to 100,000'
    }, {
      id: '4',
      label: 'Executor: Category 1, Layer 1'
    }, {
      id: '5',
      label: 'Version: 000.0001-3'
    }]);
    return <DsTagFilter items={items} onItemDelete={item => setItems(prev => prev.filter(f => f.id !== item.id))} />;
  }
}`,...v.parameters?.docs?.source},description:{story:'Omit `onClearAll` to hide the "Clear all" button — useful when clearing is handled elsewhere.',...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <DsTagFilter items={[{
    id: '1',
    label: 'Status: Active'
  }, {
    id: '2',
    label: 'Running: 100 to 10,000'
  }, {
    id: '3',
    label: 'Completed: 20,000 to 100,000'
  }, {
    id: '4',
    label: 'Executor: Category 1, Layer 1'
  }, {
    id: '5',
    label: 'Version: 000.0001-3'
  }]} />
}`,...y.parameters?.docs?.source},description:{story:`Omit all callbacks to render non-interactive, read-only tags.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [items, setItems] = useState<TagFilterItem[]>([{
      id: '1',
      label: 'Status: Active'
    }, {
      id: '2',
      label: 'Running: 100 to 10,000'
    }, {
      id: '3',
      label: 'Completed: 20,000 to 100,000'
    }, {
      id: '4',
      label: 'Executor: Category 1, Layer 1'
    }, {
      id: '5',
      label: 'Version: 000.0001-3'
    }]);
    return <DsTagFilter items={items} locale={{
      // cspell:disable-next-line
      clearButton: 'Zresetuj',
      // cspell:disable-next-line
      showMore: 'Pokaż więcej',
      // cspell:disable-next-line
      showLess: 'Pokaż mniej'
    }} onClearAll={() => setItems([])} onItemDelete={item => setItems(prev => prev.filter(f => f.id !== item.id))} />;
  }
}`,...b.parameters?.docs?.source},description:{story:"Pass `locale` to translate the action buttons (clear, show more, show less).",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      label: 'Status: Active'
    }, {
      id: '2',
      label: 'Running: From 100 to 10,000'
    }, {
      id: '3',
      label: 'Completed from 20,000 to 100,000'
    }, {
      id: '4',
      label: 'Executor: Category 1, Layer 1 transporter'
    }, {
      id: '5',
      label: 'Executor: Category 2, Layer 11 transporter'
    }, {
      id: '6',
      label: 'Executor: Category 2, Layer 12 transporter'
    }, {
      id: '7',
      label: 'Executor: Category 2, Layer 13 transporter'
    }, {
      id: '8',
      label: 'Version: 000.0001-3'
    }, {
      id: '9',
      label: 'Version: 000.0001-4'
    }, {
      id: '10',
      label: 'Version: 000.0001-5'
    }, {
      id: '11',
      label: 'Last editor: Kevin Levin'
    }, {
      id: '12',
      label: 'Last editor: Emery Dance'
    }]
  }
}`,...x.parameters?.docs?.source},description:{story:`When tags overflow the first row, a "Show more (N)" toggle reveals the rest; the hidden
count stays stable between "Show more (N)" and "Show less (N)".`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [items, setItems] = useState<TagFilterItem[]>([{
      id: '1',
      label: 'Status: Active',
      slotProps: {
        tag: {
          size: 'small'
        }
      }
    }, {
      id: '2',
      label: 'Running: 100 to 10,000',
      slotProps: {
        tag: {
          size: 'small'
        }
      }
    }, {
      id: '3',
      label: 'Completed: 20,000 to 100,000',
      slotProps: {
        tag: {
          size: 'small'
        }
      }
    }, {
      id: '4',
      label: 'Executor: Category 1, Layer 1',
      slotProps: {
        tag: {
          size: 'small'
        }
      }
    }, {
      id: '5',
      label: 'Version: 000.0001-3',
      slotProps: {
        tag: {
          size: 'small'
        }
      }
    }, {
      id: '6',
      label: 'Last editor: Kevin Levin',
      slotProps: {
        tag: {
          size: 'small'
        }
      }
    }]);
    return <DsTagFilter items={items} onClearAll={() => setItems([])} onItemDelete={item => setItems(prev => prev.filter(f => f.id !== item.id))} />;
  }
}`,...S.parameters?.docs?.source},description:{story:"Set `slotProps.tag.size` per item to render compact tags.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [items, setItems] = useState<TagFilterItem[]>([{
      id: '1',
      label: 'Status: Active',
      selected: true
    }, {
      id: '2',
      label: 'Running: 100 to 10,000',
      selected: false
    }, {
      id: '3',
      label: 'Completed: 20,000 to 100,000',
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
    return <DsTagFilter items={items} onClearAll={() => setItems([])} onItemDelete={item => setItems(prev => prev.filter(f => f.id !== item.id))} onItemSelect={item => setItems(prev => prev.map(f => f.id === item.id ? {
      ...f,
      selected: !f.selected
    } : f))} />;
  }
}`,...C.parameters?.docs?.source},description:{story:"Mark items `selected` to render them in a pressed state on first paint.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [items, setItems] = useState<TagFilterItem[]>([{
      id: '1',
      label: 'Status: Active'
    }, {
      id: '2',
      label: 'Running: 100 to 10,000'
    }, {
      id: '3',
      label: 'Completed: 20,000 to 100,000'
    }, {
      id: '4',
      label: 'Executor: Category 1, Layer 1'
    }, {
      id: '5',
      label: 'Version: 000.0001-3'
    }]);
    return <DsTagFilter items={items} locale={{
      label: 'This heading is ignored'
    }} onClearAll={() => setItems([])} onItemDelete={item => setItems(prev => prev.filter(f => f.id !== item.id))} />;
  }
}`,...w.parameters?.docs?.source},description:{story:"`locale.label` is deprecated and never rendered — passing it has no visible effect.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...T.parameters?.docs?.source},description:{story:"The component renders nothing when `items` is empty.",...T.parameters?.docs?.description}}},E=[`Default`,`Interactive`,`FewFilters`,`WithoutClearAll`,`ReadOnly`,`CustomLocale`,`ExpandCollapse`,`SmallSize`,`WithPreSelectedItems`,`DeprecatedLabelIgnored`,`EmptyState`]}))();export{b as CustomLocale,h as Default,w as DeprecatedLabelIgnored,T as EmptyState,x as ExpandCollapse,_ as FewFilters,g as Interactive,y as ReadOnly,S as SmallSize,C as WithPreSelectedItems,v as WithoutClearAll,E as __namedExportsOrder,m as default};