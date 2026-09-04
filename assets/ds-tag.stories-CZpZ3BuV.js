import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-icon-BRZFUTMz.js";import{n as o,t as s}from"./ds-typography-BLoO5j9q.js";import{n as c,t as l}from"./ds-tag-BChxSDTB.js";var u,d,f=t((()=>{u=[`medium`,`small`],d=[`default`,`include`,`exclude`,`key-value`]})),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;t((()=>{p=e(n(),1),c(),f(),a(),s(),m=r(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Tag`,component:l,parameters:{layout:`centered`},argTypes:{label:{control:`text`,description:`The label text to display in the tag`},value:{control:`text`,description:"Value rendered after the key. Required for the `key-value` variant"},size:{control:`select`,options:u,description:`Size of the tag`},variant:{control:`select`,options:d,description:`Variant of the tag`},selected:{control:`boolean`,description:`Whether the tag is in a selected state`},disabled:{control:`boolean`,description:`Whether the tag is disabled`},onClick:{action:`changed`,description:`Function called when clicked`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},_={args:{label:`Default Tag`}},v={args:{label:`Clickable Tag`,onClick:h()}},y={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,p.useState)(!1),[n,r]=(0,p.useState)(!0);return e?(0,m.jsx)(o,{variant:`body-md-reg`,children:`Poof! Deleted!`}):(0,m.jsx)(l,{selected:n,label:`Controlled`,onDelete:()=>t(!0),onClick:()=>r(!n)})}},b={args:{label:`Include Tag`,variant:`include`,onDelete:h()}},x={args:{label:`Exclude Tag`,variant:`exclude`,onDelete:h()}},S={args:{label:`Small Tag`,size:`small`}},C={args:{variant:`key-value`,label:`Category`,value:`Networking`}},w={args:{variant:`key-value`,label:`Category`,value:`Networking`,selected:!0,onClick:h()}},T={args:{variant:`key-value`,label:`Category`,value:`Networking`,disabled:!0}},E={args:{variant:`key-value`,label:`Category`,value:`Networking`,onDelete:h()}},D={args:{variant:`key-value`,label:`Category`,value:`Networking`,size:`small`}},O={args:{label:`Disabled Tag`,selected:!0,disabled:!0,onClick:h(),onDelete:h()}},k={args:{label:`Custom Icon Tag`,variant:`include`,slots:{icon:(0,m.jsx)(i,{icon:`star`,size:`tiny`})}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Tag'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Clickable Tag',
    onClick: fn()
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [deleted, setDeleted] = useState(false);
    const [selected, setSelected] = useState(true);
    if (deleted) {
      return <DsTypography variant="body-md-reg">Poof! Deleted!</DsTypography>;
    }
    return <DsTag selected={selected} label="Controlled" onDelete={() => setDeleted(true)} onClick={() => setSelected(!selected)} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Include Tag',
    variant: 'include',
    onDelete: fn()
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Exclude Tag',
    variant: 'exclude',
    onDelete: fn()
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Tag',
    size: 'small'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking'
  }
}`,...C.parameters?.docs?.source},description:{story:'Use the `key-value` variant to display a labeled attribute, e.g. `Category: Networking`.\nThe `label` is the bold key (`--font-main`); `value` is the secondary-colored value\n(`--font-secondary`). The colon is appended automatically — pass `label="Category"`, not\n`label="Category:"`.',...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking',
    selected: true,
    onClick: fn()
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking',
    disabled: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking',
    onDelete: fn()
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking',
    size: 'small'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Tag',
    selected: true,
    disabled: true,
    onClick: fn(),
    onDelete: fn()
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Icon Tag',
    variant: 'include',
    slots: {
      icon: <DsIcon icon="star" size="tiny" />
    }
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Clickable`,`Controlled`,`Include`,`Exclude`,`Small`,`KeyValue`,`KeyValueSelected`,`KeyValueDisabled`,`KeyValueWithDelete`,`KeyValueSmall`,`Disabled`,`CustomIcon`]}))();export{v as Clickable,y as Controlled,k as CustomIcon,_ as Default,O as Disabled,x as Exclude,b as Include,C as KeyValue,T as KeyValueDisabled,w as KeyValueSelected,D as KeyValueSmall,E as KeyValueWithDelete,S as Small,A as __namedExportsOrder,g as default};