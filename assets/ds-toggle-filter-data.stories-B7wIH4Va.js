import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-V7H8WQFa.js";import{n as i,t as a}from"./classnames-DavMFNTn.js";import{n as o,t as s}from"./ds-typography-ClnFnIDB.js";import{n as c,t as l}from"./ds-stack-DC_qSfFt.js";var u,d,f,p,m;function h(){return(h=t((()=>{u=`_pill_17itv_1`,d=`_active_17itv_27`,f=`_value_17itv_49`,p=`_label_17itv_53`,m={pill:u,active:d,value:f,label:p}})))()}var g,_,v,y;function b(){return(b=t((()=>{g=i(),_=e(a(),1),h(),s(),v=r(),y=e=>{let t=(0,g.c)(20),{ref:n,label:r,value:i,active:a,disabled:s,className:c,style:l,onActiveChange:u,onClick:d}=e,f=s!==void 0&&s,p;t[0]!==a||t[1]!==u||t[2]!==d?(p=e=>{d?.(e),u?.(!a)},t[0]=a,t[1]=u,t[2]=d,t[3]=p):p=t[3];let h=p,y;t[4]!==a||t[5]!==c?(y=(0,_.default)(m.pill,{[m.active]:a},c),t[4]=a,t[5]=c,t[6]=y):y=t[6];let b;t[7]===r?b=t[8]:(b=(0,v.jsx)(o,{variant:`body-xs-md`,className:m.label,children:r}),t[7]=r,t[8]=b);let x;t[9]===i?x=t[10]:(x=(0,v.jsx)(o,{variant:`body-xs-reg`,className:m.value,children:i}),t[9]=i,t[10]=x);let S;return t[11]!==a||t[12]!==f||t[13]!==h||t[14]!==n||t[15]!==l||t[16]!==y||t[17]!==b||t[18]!==x?(S=(0,v.jsxs)(`button`,{ref:n,type:`button`,className:y,style:l,disabled:f,"aria-pressed":a,onClick:h,children:[b,x]}),t[11]=a,t[12]=f,t[13]=h,t[14]=n,t[15]=l,t[16]=y,t[17]=b,t[18]=x,t[19]=S):S=t[19],S},y.displayName=`DsToggleFilterData`})))()}function x(){return(x=t((()=>{b()})))()}var S,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{S=n(),x(),c(),C=r(),w={title:`Components/ToggleFilterData`,component:y,tags:[`!manifest`],parameters:{layout:`centered`,docs:{description:{component:'\nA data pill that toggles on and off, pairing a `label` with its `value`, used in a filter row\nabove a table or list.\n\n**Internal component.** Per design, the pill is always part of the filters component and is not\nexported from `@drivenets/design-system`. These stories document it for internal review; consumers\nget it through filters, never directly.\n\n**Controlled only.** `active` is required and the pill keeps no state of its own: it reports the\nnext value through `onActiveChange` and re-renders from whatever the parent decides. Selection\nrules — single-select, multi-select, clearing — belong to the row that owns the pills.\n\n**Hover and focus are CSS states, not props.** The pill is a real `<button type="button">`, so\n`aria-pressed`, Enter/Space activation, the disabled state and the focus ring are all native.\n`aria-pressed` stays exposed while `disabled`, so a greyed pill still announces whether it is on.\n\nThere is no group component: `DsToggleFiltersGroupV1` is a plain row of pills — see the\n**Filters Group** story.\n                '}}},argTypes:{label:{control:`text`,description:`Emphasized leading segment naming the data the pill filters on`},value:{control:`text`,description:`Secondary-colored trailing segment, typically a count`},active:{control:`boolean`,description:"Whether the pill is toggled on. Controlled — surfaced as `aria-pressed`"},disabled:{control:`boolean`,description:`Whether the pill is disabled. Neither callback fires while set`},onActiveChange:{action:`activeChange`,description:"Called on click and on keyboard activation with the next `active` value"},onClick:{action:`click`,description:"Called with the raw click event, before `onActiveChange`"},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},T={args:{label:`Toggle`,value:`#`,active:!1}},E={args:{label:`Toggle`,value:`#`,active:!0}},D={args:{label:`Toggle`,value:`#`,active:!1,disabled:!0}},O={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,S.useState)(!1);return(0,C.jsx)(y,{label:`Errors`,value:`12`,active:e,onActiveChange:t})}},k={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,S.useState)(`errors`);return(0,C.jsx)(l,{gap:`var(--xs)`,alignItems:`center`,flexWrap:`wrap`,children:[{id:`errors`,label:`Errors`,value:`12`},{id:`warnings`,label:`Warnings`,value:`48`},{id:`healthy`,label:`Healthy`,value:`1,204`}].map(n=>(0,C.jsx)(y,{label:n.label,value:n.value,active:e===n.id,onActiveChange:e=>t(e?n.id:null)},n.id))})}},A={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,S.useState)([`region`]),n=(e,n)=>t(t=>n?[...t,e]:t.filter(t=>t!==e));return(0,C.jsx)(l,{gap:`var(--xs)`,alignItems:`center`,flexWrap:`wrap`,children:[{id:`region`,label:`Region`,value:`3`},{id:`tenant`,label:`Tenant`,value:`17`},{id:`interface`,label:`Interface`,value:`92`},{id:`archived`,label:`Archived`,value:`0`,disabled:!0}].map(t=>(0,C.jsx)(y,{label:t.label,value:t.value,active:e.includes(t.id),disabled:t.disabled,onActiveChange:e=>n(t.id,e)},t.id))})}},j=[`Default`,`Active`,`Disabled`,`Controlled`,`ControlledSingleSelect`,`FiltersGroup`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Toggle',
    value: '#',
    active: false
  }
}`,...T.parameters?.docs?.source},description:{story:`The resting pill: white background, grey border. This is the state a filter row starts in, before
the user narrows anything down.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Toggle',
    value: '#',
    active: true
  }
}`,...E.parameters?.docs?.source},description:{story:'The toggled-on pill. Reach for `active` to show that the filter it represents is currently\napplied — the blue border and tinted background read as "this is narrowing the list".',...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Toggle',
    value: '#',
    active: false,
    disabled: true
  }
}`,...D.parameters?.docs?.source},description:{story:"Use `disabled` when the filter exists but cannot be applied yet — an empty bucket, or a dimension\nthe current query does not expose. The pill drops out of the tab order and neither callback fires.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"The minimal wiring: hold `active` in the parent and feed it back through `onActiveChange`.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Single-select row: the parent holds the active id, so toggling one pill clears the others.
Selection coordination lives here rather than in the pill, which is why \`active\` is a required
prop instead of an internal state.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"`DsToggleFiltersGroupV1` with `type=data` is a plain row of pills — there is no group component\nto import. Multi-select is the parent tracking a set of active ids; each pill toggles\nindependently, and a pill whose bucket is empty is passed `disabled`.",...A.parameters?.docs?.description}}}})))()}M();export{E as Active,O as Controlled,k as ControlledSingleSelect,T as Default,D as Disabled,A as FiltersGroup,j as __namedExportsOrder,w as default};