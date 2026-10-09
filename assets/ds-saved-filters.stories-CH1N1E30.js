import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-DhmfSyCd.js";import{n as r,t as i}from"./ds-typography-DzX3m9OW.js";import{n as a,t as o}from"./ds-stack-Bs826QDs.js";import{n as s,t as c}from"./ds-saved-filters-DD7xG57h.js";var l,u,d;function f(){return(f=e((()=>{l=`_bar_1chnt_1`,u=`_spacer_1chnt_7`,d={bar:l,spacer:u}})))()}var p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{p=t(),c(),a(),i(),f(),m=n(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/FiltersBar/Internal/SavedFilters`,component:s.Trigger,tags:[`!manifest`],parameters:{layout:`centered`,docs:{description:{component:`
Picker for named filter snapshots: a trigger tag, an anchored list, save / rename, and delete.

**Internal component.** Per design, saved filters belong to the filters bar and are not
exported from \`@drivenets/design-system\`. These stories document it for internal review;
consumers get it through the bar, never directly.`}}},args:{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`,count:1},{id:`3`,name:`MyFilter_3`,count:5}],value:null,dirty:!1,onValueChange:h(),onClear:h(),onUpdate:h(),onSaveAs:h(),onRename:h(),onDelete:h()},argTypes:{items:{control:`object`,description:"Named snapshots. `count` is the number of Filter conditions in that snapshot.",type:{name:`array`,value:{name:`object`,value:{id:{name:`string`,required:!0},name:{name:`string`,required:!0},count:{name:`number`}}}},table:{type:{summary:`DsSavedFilterItem[]`,detail:`{ id: string; name: string; count?: number }`}}},value:{control:`text`,description:`Id of the Active saved filter. Leave empty when none is applied.`},dirty:{control:`boolean`,description:`Whether the working document diverged from the Active saved filter`},locale:{control:`object`,description:`Override built-in copy`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},onValueChange:{action:`valueChange`,table:{disable:!0}},onClear:{action:`clear`,table:{disable:!0}},onUpdate:{action:`update`,table:{disable:!0}},onSaveAs:{action:`saveAs`,table:{disable:!0}},onRename:{action:`rename`,table:{disable:!0}},onDelete:{action:`delete`,table:{disable:!0}}}},_={args:{items:[],value:null,dirty:!1},parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,p.useState)(e.value);return(0,m.jsx)(s.Trigger,{items:e.items,value:t,dirty:e.dirty,locale:e.locale,onValueChange:t=>{e.onValueChange(t),n(t)},onClear:()=>{e.onClear(),n(null)},onRename:e.onRename,onDelete:e.onDelete})}},v={args:{value:null,dirty:!1},parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,p.useState)(e.value),[r,i]=(0,p.useState)([...e.items]);return(0,m.jsx)(s.Trigger,{items:r,value:t,dirty:e.dirty,locale:e.locale,onValueChange:t=>{e.onValueChange(t),n(t)},onClear:()=>{e.onClear(),n(null)},onRename:(t,n)=>{e.onRename(t,n),i(e=>e.map(e=>e.id===t?{...e,name:n}:e))},onDelete:t=>{e.onDelete(t),i(e=>e.filter(e=>e.id!==t))}})}},y={args:{value:`1`,dirty:!1},parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,p.useState)(e.value),[r,i]=(0,p.useState)([...e.items]);return(0,m.jsx)(s.Trigger,{items:r,value:t,dirty:e.dirty,locale:e.locale,onValueChange:t=>{e.onValueChange(t),n(t)},onClear:()=>{e.onClear(),n(null)},onRename:(t,n)=>{e.onRename(t,n),i(e=>e.map(e=>e.id===t?{...e,name:n}:e))},onDelete:t=>{e.onDelete(t),i(e=>e.filter(e=>e.id!==t)),n(e=>e===t?null:e)}})}},b={args:{value:`1`,dirty:!0},parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,p.useState)(e.value),[r,i]=(0,p.useState)([...e.items]);return(0,m.jsxs)(o,{direction:`row`,alignItems:`center`,gap:`var(--xs)`,children:[(0,m.jsx)(s.Trigger,{items:r,value:t,dirty:e.dirty,locale:e.locale,onValueChange:t=>{e.onValueChange(t),n(t)},onClear:()=>{e.onClear(),n(null)},onRename:(t,n)=>{e.onRename(t,n),i(e=>e.map(e=>e.id===t?{...e,name:n}:e))},onDelete:t=>{e.onDelete(t),i(e=>e.filter(e=>e.id!==t)),n(e=>e===t?null:e)}}),(0,m.jsx)(s.Save,{items:r,value:t,locale:e.locale,onUpdate:e.onUpdate,onSaveAs:t=>{e.onSaveAs(t),i(e=>[...e,{id:t,name:t,count:0}]),n(t)}})]})}},x={args:{value:null,dirty:!1},parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,p.useState)(e.value),[r,i]=(0,p.useState)([...e.items]);return(0,m.jsx)(s.Trigger,{items:r,value:t,dirty:e.dirty,locale:e.locale,onValueChange:t=>{e.onValueChange(t),n(t)},onClear:()=>{e.onClear(),n(null)},onRename:(t,n)=>{e.onRename(t,n),i(e=>e.map(e=>e.id===t?{...e,name:n}:e))},onDelete:t=>{e.onDelete(t),i(e=>e.filter(e=>e.id!==t))}})}},S={args:{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`}],value:null,dirty:!1},parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,p.useState)(e.value),[i,a]=(0,p.useState)([...e.items]);return(0,m.jsxs)(`div`,{className:d.bar,children:[(0,m.jsx)(s.Trigger,{items:i,value:t,dirty:e.dirty,locale:e.locale,onValueChange:t=>{e.onValueChange(t),n(t)},onClear:()=>{e.onClear(),n(null)},onRename:(t,n)=>{e.onRename(t,n),a(e=>e.map(e=>e.id===t?{...e,name:n}:e))},onDelete:t=>{e.onDelete(t),a(e=>e.filter(e=>e.id!==t))}}),(0,m.jsx)(`div`,{className:d.spacer}),(0,m.jsx)(r,{variant:`body-sm-reg`,color:`secondary`,children:`Query / pins`}),(0,m.jsx)(s.Save,{items:i,value:t,locale:e.locale,onUpdate:e.onUpdate,onSaveAs:t=>{e.onSaveAs(t),a(e=>[...e,{id:t,name:t}]),n(t)}})]})}},C={args:{value:`1`,dirty:!0},parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,p.useState)(e.value),[r,i]=(0,p.useState)([...e.items]),a=()=>new Promise(e=>setTimeout(e,800));return(0,m.jsxs)(o,{direction:`row`,alignItems:`center`,gap:`var(--xs)`,children:[(0,m.jsx)(s.Trigger,{items:r,value:t,dirty:e.dirty,locale:e.locale,onValueChange:t=>{e.onValueChange(t),n(t)},onClear:async()=>{e.onClear(),await a(),n(null)},onRename:async(t,n)=>{e.onRename(t,n),await a(),i(e=>e.map(e=>e.id===t?{...e,name:n}:e))},onDelete:async t=>{e.onDelete(t),await a(),i(e=>e.filter(e=>e.id!==t)),n(e=>e===t?null:e)}}),(0,m.jsx)(s.Save,{items:r,value:t,locale:e.locale,onUpdate:async()=>{e.onUpdate(),await a()},onSaveAs:async t=>{e.onSaveAs(t),await a(),i(e=>[...e,{id:t,name:t,count:0}]),n(t)}})]})}},w={args:{items:[{id:`1`,name:`MyFilter_1`,count:2}],value:null,dirty:!1,locale:{savedFilters:`My saved filters`,noSavedFilters:`Nothing saved yet. Build a filter, then choose “Save this filter”.`,saveFilter:`Save this filter`,expandAriaLabel:`Show saved filters`,clearAriaLabel:`Clear saved filter`}},parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,p.useState)(e.value);return(0,m.jsx)(s.Trigger,{items:e.items,value:t,dirty:e.dirty,locale:e.locale,onValueChange:t=>{e.onValueChange(t),n(t)},onClear:()=>{e.onClear(),n(null)},onRename:e.onRename,onDelete:e.onDelete})}},T=[`NoSavedFilters`,`ListNoneActive`,`ListActive`,`DirtyActive`,`RowActions`,`CompoundBar`,`AsyncActions`,`Localized`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    value: null,
    dirty: false
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    return <DsSavedFilters.Trigger items={args.items} value={value} dirty={args.dirty} locale={args.locale} onValueChange={id => {
      args.onValueChange(id);
      setValue(id);
    }} onClear={() => {
      void args.onClear();
      setValue(null);
    }} onRename={args.onRename} onDelete={args.onDelete} />;
  }
}`,..._.parameters?.docs?.source},description:{story:`Empty list: the picker shows the no-data empty state. Build a filter, then save it.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: null,
    dirty: false
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    const [items, setItems] = useState<DsSavedFilterItem[]>([...args.items]);
    return <DsSavedFilters.Trigger items={items} value={value} dirty={args.dirty} locale={args.locale} onValueChange={id => {
      args.onValueChange(id);
      setValue(id);
    }} onClear={() => {
      void args.onClear();
      setValue(null);
    }} onRename={(id, name) => {
      void args.onRename(id, name);
      setItems(current => current.map(item => item.id === id ? {
        ...item,
        name
      } : item));
    }} onDelete={id => {
      void args.onDelete(id);
      setItems(current => current.filter(item => item.id !== id));
    }} />;
  }
}`,...v.parameters?.docs?.source},description:{story:`Saved snapshots exist but none is applied. The tag reads “Saved filters” with a chevron.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: '1',
    dirty: false
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    const [items, setItems] = useState<DsSavedFilterItem[]>([...args.items]);
    return <DsSavedFilters.Trigger items={items} value={value} dirty={args.dirty} locale={args.locale} onValueChange={id => {
      args.onValueChange(id);
      setValue(id);
    }} onClear={() => {
      void args.onClear();
      setValue(null);
    }} onRename={(id, name) => {
      void args.onRename(id, name);
      setItems(current => current.map(item => item.id === id ? {
        ...item,
        name
      } : item));
    }} onDelete={id => {
      void args.onDelete(id);
      setItems(current => current.filter(item => item.id !== id));
      setValue(current => current === id ? null : current);
    }} />;
  }
}`,...y.parameters?.docs?.source},description:{story:`An applied snapshot: the tag and the matching row both use a filled bookmark.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: '1',
    dirty: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    const [items, setItems] = useState<DsSavedFilterItem[]>([...args.items]);
    return <DsStack direction="row" alignItems="center" gap="var(--xs)">
                <DsSavedFilters.Trigger items={items} value={value} dirty={args.dirty} locale={args.locale} onValueChange={id => {
        args.onValueChange(id);
        setValue(id);
      }} onClear={() => {
        void args.onClear();
        setValue(null);
      }} onRename={(id, name) => {
        void args.onRename(id, name);
        setItems(current => current.map(item => item.id === id ? {
          ...item,
          name
        } : item));
      }} onDelete={id => {
        void args.onDelete(id);
        setItems(current => current.filter(item => item.id !== id));
        setValue(current => current === id ? null : current);
      }} />
                <DsSavedFilters.Save items={items} value={value} locale={args.locale} onUpdate={args.onUpdate} onSaveAs={name => {
        void args.onSaveAs(name);
        setItems(current => [...current, {
          id: name,
          name,
          count: 0
        }]);
        setValue(name);
      }} />
            </DsStack>;
  }
}`,...b.parameters?.docs?.source},description:{story:`The working document diverged from the applied snapshot. The tag shows a warning and Save is mounted.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: null,
    dirty: false
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    const [items, setItems] = useState<DsSavedFilterItem[]>([...args.items]);
    return <DsSavedFilters.Trigger items={items} value={value} dirty={args.dirty} locale={args.locale} onValueChange={id => {
      args.onValueChange(id);
      setValue(id);
    }} onClear={() => {
      void args.onClear();
      setValue(null);
    }} onRename={(id, name) => {
      void args.onRename(id, name);
      setItems(current => current.map(item => item.id === id ? {
        ...item,
        name
      } : item));
    }} onDelete={id => {
      void args.onDelete(id);
      setItems(current => current.filter(item => item.id !== id));
    }} />;
  }
}`,...x.parameters?.docs?.source},description:{story:`Row overflow: rename (name modal) and delete. Save is omitted so the picker is the focus.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      name: 'MyFilter_1',
      count: 2
    }, {
      id: '2',
      name: 'MyFilter_2'
    }],
    value: null,
    dirty: false
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    const [items, setItems] = useState<DsSavedFilterItem[]>([...args.items]);
    return <div className={styles.bar}>
                <DsSavedFilters.Trigger items={items} value={value} dirty={args.dirty} locale={args.locale} onValueChange={id => {
        args.onValueChange(id);
        setValue(id);
      }} onClear={() => {
        void args.onClear();
        setValue(null);
      }} onRename={(id, name) => {
        void args.onRename(id, name);
        setItems(current => current.map(item => item.id === id ? {
          ...item,
          name
        } : item));
      }} onDelete={id => {
        void args.onDelete(id);
        setItems(current => current.filter(item => item.id !== id));
      }} />
                <div className={styles.spacer} />
                <DsTypography variant="body-sm-reg" color="secondary">
                    Query / pins
                </DsTypography>
                <DsSavedFilters.Save items={items} value={value} locale={args.locale} onUpdate={args.onUpdate} onSaveAs={name => {
        void args.onSaveAs(name);
        setItems(current => [...current, {
          id: name,
          name
        }]);
        setValue(name);
      }} />
            </div>;
  }
}`,...S.parameters?.docs?.source},description:{story:`Sibling layout: trigger, other bar chrome, then Save. The filters bar will interleave regions this way.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: '1',
    dirty: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    const [items, setItems] = useState<DsSavedFilterItem[]>([...args.items]);
    const persist = () => new Promise<void>(resolve => setTimeout(resolve, 800));
    return <DsStack direction="row" alignItems="center" gap="var(--xs)">
                <DsSavedFilters.Trigger items={items} value={value} dirty={args.dirty} locale={args.locale} onValueChange={id => {
        args.onValueChange(id);
        setValue(id);
      }} onClear={async () => {
        void args.onClear();
        await persist();
        setValue(null);
      }} onRename={async (id, name) => {
        void args.onRename(id, name);
        await persist();
        setItems(current => current.map(item => item.id === id ? {
          ...item,
          name
        } : item));
      }} onDelete={async id => {
        void args.onDelete(id);
        await persist();
        setItems(current => current.filter(item => item.id !== id));
        setValue(current => current === id ? null : current);
      }} />
                <DsSavedFilters.Save items={items} value={value} locale={args.locale} onUpdate={async () => {
        void args.onUpdate();
        await persist();
      }} onSaveAs={async name => {
        void args.onSaveAs(name);
        await persist();
        setItems(current => [...current, {
          id: name,
          name,
          count: 0
        }]);
        setValue(name);
      }} />
            </DsStack>;
  }
}`,...C.parameters?.docs?.source},description:{story:`Callbacks may return a Promise. The launching control stays in a loading state until it settles.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      name: 'MyFilter_1',
      count: 2
    }],
    value: null,
    dirty: false,
    locale: {
      savedFilters: 'My saved filters',
      noSavedFilters: 'Nothing saved yet. Build a filter, then choose “Save this filter”.',
      saveFilter: 'Save this filter',
      expandAriaLabel: 'Show saved filters',
      clearAriaLabel: 'Clear saved filter'
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [value, setValue] = useState(args.value);
    return <DsSavedFilters.Trigger items={args.items} value={value} dirty={args.dirty} locale={args.locale} onValueChange={id => {
      args.onValueChange(id);
      setValue(id);
    }} onClear={() => {
      void args.onClear();
      setValue(null);
    }} onRename={args.onRename} onDelete={args.onDelete} />;
  }
}`,...w.parameters?.docs?.source},description:{story:"Override built-in strings with `locale`. Omitted keys keep their defaults.",...w.parameters?.docs?.description}}}})))()}E();export{C as AsyncActions,S as CompoundBar,b as DirtyActive,y as ListActive,v as ListNoneActive,w as Localized,_ as NoSavedFilters,x as RowActions,T as __namedExportsOrder,g as default};