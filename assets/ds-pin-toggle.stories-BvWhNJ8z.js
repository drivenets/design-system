import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-CjiQ0Gqr.js";import{n as r,t as i}from"./ds-checkbox-oPS25dpH.js";import{n as a,t as o}from"./ds-stack-rLkmoLJd.js";import{n as s,t as c}from"./ds-pin-toggle-F1uQPeZG.js";var l,u;function d(){return(d=e((()=>{l=`_checkboxRows_1igb7_1`,u={checkboxRows:l}})))()}var f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{f=t(),c(),i(),a(),d(),p=n(),m={title:`Components/PinToggle`,component:s,parameters:{layout:`centered`},argTypes:{itemLabel:{control:`text`,description:"Row name composed into the accessible name as `Pin {itemLabel}`"},pinned:{control:`boolean`,description:"Controlled pinned state, reported as `aria-pressed`"},disabled:{control:`boolean`,description:`Disables the pin, preventing user interaction`},locale:{control:!1,description:"Override for the `Pin` verb in the accessible name"},onPinnedChange:{description:"Called on activation with the negation of `pinned`"},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},h={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)(!1);return(0,p.jsx)(s,{itemLabel:`Notifications`,pinned:e,onPinnedChange:t})}},g={args:{itemLabel:`Notifications`,pinned:!0}},_={args:{itemLabel:`Notifications`,pinned:!0,disabled:!0}},v={args:{itemLabel:`Notifications`,locale:{pin:`Keep`}}},y={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,p.jsxs)(o,{direction:`row`,gap:`var(--xs)`,children:[(0,p.jsx)(s,{itemLabel:`unpinned row`}),(0,p.jsx)(s,{itemLabel:`pinned row`,pinned:!0}),(0,p.jsx)(s,{itemLabel:`disabled row`,disabled:!0}),(0,p.jsx)(s,{itemLabel:`disabled pinned row`,pinned:!0,disabled:!0})]})},b={parameters:{docs:{source:{type:`code`}}},render:function(){let e=[`Active`,`Deprecated`,`Inactive`,`Pending`,`Draft`],[t,n]=(0,f.useState)([`Active`]),i=e=>t.includes(e);return(0,p.jsx)(o,{gap:`var(--3xs)`,className:u.checkboxRows,children:e.map(e=>(0,p.jsx)(r,{label:e,actions:(0,p.jsx)(s,{itemLabel:e,pinned:i(e),onPinnedChange:t=>n(n=>t?[...n,e]:n.filter(t=>t!==e))})},e))})}},x=[`Default`,`Pinned`,`Disabled`,`Localized`,`States`,`InCheckboxRow`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [pinned, setPinned] = useState(false);
    return <DsPinToggle itemLabel="Notifications" pinned={pinned} onPinnedChange={setPinned} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    itemLabel: 'Notifications',
    pinned: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    itemLabel: 'Notifications',
    pinned: true,
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    itemLabel: 'Notifications',
    locale: {
      pin: 'Keep'
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="row" gap="var(--xs)">
            <DsPinToggle itemLabel="unpinned row" />
            <DsPinToggle itemLabel="pinned row" pinned />
            <DsPinToggle itemLabel="disabled row" disabled />
            <DsPinToggle itemLabel="disabled pinned row" pinned disabled />
        </DsStack>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const rows = ['Active', 'Deprecated', 'Inactive', 'Pending', 'Draft'];
    const [pinned, setPinned] = useState<string[]>(['Active']);
    const isPinned = (row: string) => pinned.includes(row);
    return <DsStack gap="var(--3xs)" className={styles.checkboxRows}>
                {rows.map(row => <DsCheckbox key={row} label={row} actions={<DsPinToggle itemLabel={row} pinned={isPinned(row)} onPinnedChange={next => setPinned(current => next ? [...current, row] : current.filter(name => name !== row))} />} />)}
            </DsStack>;
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{h as Default,_ as Disabled,b as InCheckboxRow,v as Localized,g as Pinned,y as States,x as __namedExportsOrder,m as default};