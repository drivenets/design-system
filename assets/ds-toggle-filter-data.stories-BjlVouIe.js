import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-DhmfSyCd.js";import{n as r,t as i}from"./ds-stack-Bs826QDs.js";import{n as a,t as o}from"./ds-toggle-filter-data-BNc-xdpm.js";var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s=t(),o(),r(),c=n(),l={title:`Components/FiltersBar/Internal/ToggleFilterData`,component:a,tags:[`!manifest`],parameters:{layout:`centered`,docs:{description:{component:'\nA data pill that toggles on and off, pairing a `label` with its `value`, used in a filter row\nabove a table or list.\n\n**Internal component.** Per design, the pill is always part of the filters component and is not\nexported from `@drivenets/design-system`. These stories document it for internal review; consumers\nget it through filters, never directly.\n\n**Controlled only.** `active` is required and the pill keeps no state of its own: it reports the\nnext value through `onActiveChange` and re-renders from whatever the parent decides. Selection\nrules — single-select, multi-select, clearing — belong to the row that owns the pills.\n\n**Hover and focus are CSS states, not props.** The pill is a real `<button type="button">`, so\n`aria-pressed`, Enter/Space activation, the disabled state and the focus ring are all native.\n`aria-pressed` stays exposed while `disabled`, so a greyed pill still announces whether it is on.\n\nThere is no group component: `DsToggleFiltersGroupV1` is a plain row of pills — see the\n**Filters Group** story.\n                '}}},argTypes:{label:{control:`text`,description:`Emphasized leading segment naming the data the pill filters on`},value:{control:`text`,description:`Secondary-colored trailing segment, typically a count`},active:{control:`boolean`,description:"Whether the pill is toggled on. Controlled — surfaced as `aria-pressed`"},disabled:{control:`boolean`,description:`Whether the pill is disabled. Neither callback fires while set`},onActiveChange:{action:`activeChange`,description:"Called on click and on keyboard activation with the next `active` value"},onClick:{action:`click`,description:"Called with the raw click event, before `onActiveChange`"},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},u={args:{label:`Toggle`,value:`#`,active:!1}},d={args:{label:`Toggle`,value:`#`,active:!0}},f={args:{label:`Toggle`,value:`#`,active:!1,disabled:!0}},p={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,s.useState)(!1);return(0,c.jsx)(a,{label:`Errors`,value:`12`,active:e,onActiveChange:t})}},m={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,s.useState)(`errors`);return(0,c.jsx)(i,{gap:`var(--xs)`,alignItems:`center`,flexWrap:`wrap`,children:[{id:`errors`,label:`Errors`,value:`12`},{id:`warnings`,label:`Warnings`,value:`48`},{id:`healthy`,label:`Healthy`,value:`1,204`}].map(n=>(0,c.jsx)(a,{label:n.label,value:n.value,active:e===n.id,onActiveChange:e=>t(e?n.id:null)},n.id))})}},h={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,s.useState)([`region`]),n=(e,n)=>t(t=>n?[...t,e]:t.filter(t=>t!==e));return(0,c.jsx)(i,{gap:`var(--xs)`,alignItems:`center`,flexWrap:`wrap`,children:[{id:`region`,label:`Region`,value:`3`},{id:`tenant`,label:`Tenant`,value:`17`},{id:`interface`,label:`Interface`,value:`92`},{id:`archived`,label:`Archived`,value:`0`,disabled:!0}].map(t=>(0,c.jsx)(a,{label:t.label,value:t.value,active:e.includes(t.id),disabled:t.disabled,onActiveChange:e=>n(t.id,e)},t.id))})}},g=[`Default`,`Active`,`Disabled`,`Controlled`,`ControlledSingleSelect`,`FiltersGroup`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Toggle',
    value: '#',
    active: false
  }
}`,...u.parameters?.docs?.source},description:{story:`The resting pill: white background, grey border. This is the state a filter row starts in, before
the user narrows anything down.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Toggle',
    value: '#',
    active: true
  }
}`,...d.parameters?.docs?.source},description:{story:'The toggled-on pill. Reach for `active` to show that the filter it represents is currently\napplied — the blue border and tinted background read as "this is narrowing the list".',...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Toggle',
    value: '#',
    active: false,
    disabled: true
  }
}`,...f.parameters?.docs?.source},description:{story:"Use `disabled` when the filter exists but cannot be applied yet — an empty bucket, or a dimension\nthe current query does not expose. The pill drops out of the tab order and neither callback fires.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const [active, setActive] = useState(false);
    return <DsToggleFilterData label="Errors" value="12" active={active} onActiveChange={setActive} />;
  }
}`,...p.parameters?.docs?.source},description:{story:"The minimal wiring: hold `active` in the parent and feed it back through `onActiveChange`.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const [activeId, setActiveId] = useState<string | null>('errors');
    return <DsStack gap="var(--xs)" alignItems="center" flexWrap="wrap">
                {[{
        id: 'errors',
        label: 'Errors',
        value: '12'
      }, {
        id: 'warnings',
        label: 'Warnings',
        value: '48'
      }, {
        id: 'healthy',
        label: 'Healthy',
        value: '1,204'
      }].map(item => <DsToggleFilterData key={item.id} label={item.label} value={item.value} active={activeId === item.id} onActiveChange={next => setActiveId(next ? item.id : null)} />)}
            </DsStack>;
  }
}`,...m.parameters?.docs?.source},description:{story:`Single-select row: the parent holds the active id, so toggling one pill clears the others.
Selection coordination lives here rather than in the pill, which is why \`active\` is a required
prop instead of an internal state.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const [activeIds, setActiveIds] = useState<string[]>(['region']);
    const toggle = (id: string, next: boolean) => setActiveIds(ids => next ? [...ids, id] : ids.filter(current => current !== id));
    return <DsStack gap="var(--xs)" alignItems="center" flexWrap="wrap">
                {[{
        id: 'region',
        label: 'Region',
        value: '3'
      }, {
        id: 'tenant',
        label: 'Tenant',
        value: '17'
      }, {
        id: 'interface',
        label: 'Interface',
        value: '92'
      }, {
        id: 'archived',
        label: 'Archived',
        value: '0',
        disabled: true
      }].map(item => <DsToggleFilterData key={item.id} label={item.label} value={item.value} active={activeIds.includes(item.id)} disabled={item.disabled} onActiveChange={next => toggle(item.id, next)} />)}
            </DsStack>;
  }
}`,...h.parameters?.docs?.source},description:{story:"`DsToggleFiltersGroupV1` with `type=data` is a plain row of pills — there is no group component\nto import. Multi-select is the parent tracking a set of active ids; each pill toggles\nindependently, and a pill whose bucket is empty is passed `disabled`.",...h.parameters?.docs?.description}}}})))()}_();export{d as Active,p as Controlled,m as ControlledSingleSelect,u as Default,f as Disabled,h as FiltersGroup,g as __namedExportsOrder,l as default};