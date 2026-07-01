import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-DYpMTqmh.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./ds-icon-CIb1sCgn.js";import{t as a}from"./ds-icon-By0s4Csi.js";import{a as o,i as s,n as c,r as l,t as u}from"./ds-tag.types-CVHkz1qL.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{d=t(n(),1),o(),u(),a(),f=r(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/Tag`,component:s,parameters:{layout:`centered`},argTypes:{label:{control:`text`,description:`The label text to display in the tag`},value:{control:`text`,description:"Value rendered after the key. Required for the `key-value` variant"},size:{control:`select`,options:c,description:`Size of the tag`},variant:{control:`select`,options:l,description:`Variant of the tag`},selected:{control:`boolean`,description:`Whether the tag is in a selected state`},disabled:{control:`boolean`,description:`Whether the tag is disabled`},onClick:{action:`changed`,description:`Function called when clicked`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},h={args:{label:`Default Tag`,onClick:void 0}},g={args:{label:`Clickable Tag`,onClick:p()}},_={render:function(){let[e,t]=(0,d.useState)(!1),[n,r]=(0,d.useState)(!0);return e?(0,f.jsx)(`span`,{children:`Poof! Deleted!`}):(0,f.jsx)(s,{selected:n,label:`Controlled`,onDelete:()=>t(!0),onClick:()=>r(!n)})}},v={args:{label:`Include Tag`,variant:`include`,onDelete:p()}},y={args:{label:`Exclude Tag`,variant:`exclude`,onDelete:p()}},b={args:{label:`Small Tag`,size:`small`}},x={args:{variant:`key-value`,label:`Category`,value:`Networking`}},S={args:{variant:`key-value`,label:`Category`,value:`Networking`,selected:!0,onClick:p()}},C={args:{variant:`key-value`,label:`Category`,value:`Networking`,disabled:!0}},w={args:{variant:`key-value`,label:`Category`,value:`Networking`,onDelete:p()}},T={args:{variant:`key-value`,label:`Category`,value:`Networking`,size:`small`}},E={args:{label:`Disabled Tag`,selected:!0,disabled:!0,onClick:p(),onDelete:p()}},D={args:{label:`Custom Icon Tag`,variant:`include`,slots:{icon:(0,f.jsx)(i,{icon:`star`,size:`tiny`})}}},O={args:{label:`Keyboard Tag`,onClick:p(),onDelete:p()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Tag',
    onClick: undefined
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Clickable Tag',
    onClick: fn()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [deleted, setDeleted] = useState(false);
    const [selected, setSelected] = useState(true);
    if (deleted) {
      return <span>Poof! Deleted!</span>;
    }
    return <DsTag selected={selected} label="Controlled" onDelete={() => setDeleted(true)} onClick={() => setSelected(!selected)} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Include Tag',
    variant: 'include',
    onDelete: fn()
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Exclude Tag',
    variant: 'exclude',
    onDelete: fn()
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Tag',
    size: 'small'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking'
  }
}`,...x.parameters?.docs?.source},description:{story:'Use the `key-value` variant to display a labeled attribute, e.g. `Category: Networking`.\nThe `label` is the bold key (`--font-main`); `value` is the secondary-colored value\n(`--font-secondary`). The colon is appended automatically — pass `label="Category"`, not\n`label="Category:"`.',...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking',
    selected: true,
    onClick: fn()
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking',
    disabled: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking',
    onDelete: fn()
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking',
    size: 'small'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Tag',
    selected: true,
    disabled: true,
    onClick: fn(),
    onDelete: fn()
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Icon Tag',
    variant: 'include',
    slots: {
      icon: <DsIcon icon="star" size="tiny" />
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Keyboard Tag',
    onClick: fn(),
    onDelete: fn()
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Clickable`,`Controlled`,`Include`,`Exclude`,`Small`,`KeyValue`,`KeyValueSelected`,`KeyValueDisabled`,`KeyValueWithDelete`,`KeyValueSmall`,`Disabled`,`CustomIcon`,`KeyboardInteraction`]}))();export{g as Clickable,_ as Controlled,D as CustomIcon,h as Default,E as Disabled,y as Exclude,v as Include,x as KeyValue,C as KeyValueDisabled,S as KeyValueSelected,T as KeyValueSmall,w as KeyValueWithDelete,O as KeyboardInteraction,b as Small,k as __namedExportsOrder,m as default};