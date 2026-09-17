import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-CXNbvdbt.js";import{n as r,t as i}from"./ds-icon-CzachMSt.js";import{t as a}from"./ds-select-CAekEIC5.js";import{n as o,t as s}from"./ds-typography-BQGAhO_3.js";import{t as c}from"./ds-select-Bc1dvsaT.js";import{n as l,t as u}from"./ds-tag-DxRtNtPJ.js";var d,f,p;function m(){return(m=e((()=>{d=[`medium`,`small`],f=[`default`,`include`,`exclude`,`key-value`,`operator-filter`,`query-filter`],p=[`default`,`round`]})))()}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{h=t(),l(),m(),i(),c(),s(),g=n(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/Tag`,component:u,parameters:{layout:`centered`,docs:{description:{component:'\nA compact, labelled token for attributes, filters and selections.\n\n**`shape="round"` vs `DsChip`** — `DsChip` is the only other pill-shaped token in the system\nand it is **deprecated in favour of `DsTag`**, so there is no "pick by role" decision here:\n\n- Always reach for `DsTag`. `shape="round"` gives the pill radius (`9999px`, the same pill shape\n  `DsChip` used) on any variant at any size, so a round `DsTag` is the drop-in replacement when\n  migrating a `DsChip` — plus you keep the `key-value` / `operator-filter` / `query-filter`\n  variants, include/exclude, the warning dot and the expand chevron, none of which `DsChip` has.\n- Do not add new `DsChip` usages to get a pill, and do not fork a component for the radius.\n- `shape="default"` (4px) stays the default: use `round` only to match a surface whose other\n  tokens are already round.\n                '}}},argTypes:{label:{control:`text`,description:`The label text to display in the tag`},value:{control:`text`,description:"Value rendered after the label. Required for the `key-value`, `operator-filter` and `query-filter` variants"},size:{control:`select`,options:d,description:`Size of the tag`},variant:{control:`select`,options:f,description:`Variant of the tag`},shape:{control:`select`,options:p,description:"Border radius of the tag: `default` (4px) or `round` (pill)"},warning:{control:`boolean`,description:`Whether to render a trailing warning dot`},onExpandClick:{description:`Function called when the expand chevron is clicked. Providing it renders the chevron`},selected:{control:`boolean`,description:`Whether the tag is in a selected state`},disabled:{control:`boolean`,description:`Whether the tag is disabled`},onClick:{action:`changed`,description:`Function called when clicked`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},y={args:{label:`Default Tag`}},b={args:{label:`Clickable Tag`,onClick:_()}},x={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,h.useState)(!1),[n,r]=(0,h.useState)(!0);return e?(0,g.jsx)(o,{variant:`body-md-reg`,children:`Poof! Deleted!`}):(0,g.jsx)(u,{selected:n,label:`Controlled`,onDelete:()=>t(!0),onClick:()=>r(!n)})}},S={args:{label:`Include Tag`,variant:`include`,onDelete:_()}},C={args:{label:`Exclude Tag`,variant:`exclude`,onDelete:_()}},w={args:{label:`Small Tag`,size:`small`}},T={args:{variant:`key-value`,label:`Category`,value:`Networking`}},E={args:{variant:`key-value`,label:`Category`,value:`Networking`,selected:!0,onClick:_()}},D={args:{variant:`key-value`,label:`Category`,value:`Networking`,disabled:!0}},O={args:{variant:`key-value`,label:`Category`,value:`Networking`,onDelete:_()}},k={args:{variant:`key-value`,label:`Category`,value:`Networking`,size:`small`}},A={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,h.useState)(`ne`);return(0,g.jsx)(u,{variant:`operator-filter`,label:`Latency`,value:`120 ms`,slots:{operator:(0,g.jsx)(a,{size:`small`,value:e,onValueChange:t,options:[{label:`=`,value:`eq`},{label:`≠`,value:`ne`},{label:`>`,value:`gt`},{label:`<`,value:`lt`}]})}})}},j={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,h.useState)(`ne`);return(0,g.jsx)(u,{variant:`operator-filter`,label:`Latency`,value:`120 ms`,size:`small`,slots:{operator:(0,g.jsx)(a,{size:`small`,value:e,onValueChange:t,options:[{label:`=`,value:`eq`},{label:`≠`,value:`ne`},{label:`>`,value:`gt`},{label:`<`,value:`lt`}]})}})}},M={args:{variant:`operator-filter`,label:`Latency`,value:`120 ms`}},N={args:{variant:`query-filter`,label:`Region`,value:`us-east-1`}},P={args:{variant:`query-filter`,label:`Region`,value:`us-east-1`,size:`small`}},F={args:{variant:`key-value`,label:`Category`,value:`Networking`,shape:`round`}},I={args:{label:`Round Tag`,shape:`round`,size:`small`}},L={args:{variant:`query-filter`,label:`Region`,value:`us-east-1`,warning:!0}},R={args:{variant:`key-value`,label:`Threshold`,value:`95%`,warning:!0,locale:{warningAriaLabel:`Threshold is above the configured limit`}}},z={args:{variant:`operator-filter`,label:`Latency`,value:`120 ms`,onExpandClick:_()}},B={args:{label:`Expandable Tag`,size:`small`,warning:!0,onExpandClick:_()}},V={args:{label:`Disabled Tag`,selected:!0,disabled:!0,onClick:_(),onDelete:_()}},H={args:{label:`Custom Icon Tag`,variant:`include`,slots:{icon:(0,g.jsx)(r,{icon:`star`,size:`tiny`})}}},U=[`Default`,`Clickable`,`Controlled`,`Include`,`Exclude`,`Small`,`KeyValue`,`KeyValueSelected`,`KeyValueDisabled`,`KeyValueWithDelete`,`KeyValueSmall`,`OperatorFilter`,`OperatorFilterSmall`,`OperatorFilterWithoutOperator`,`QueryFilter`,`QueryFilterSmall`,`Round`,`RoundSmall`,`Warning`,`WarningLocalized`,`Expandable`,`ExpandableSmall`,`Disabled`,`CustomIcon`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Tag'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Clickable Tag',
    onClick: fn()
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Include Tag',
    variant: 'include',
    onDelete: fn()
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Exclude Tag',
    variant: 'exclude',
    onDelete: fn()
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Tag',
    size: 'small'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking'
  }
}`,...T.parameters?.docs?.source},description:{story:'Use the `key-value` variant to display a labeled attribute, e.g. `Category: Networking`.\nThe `label` is the bold key (`--font-main`); `value` is the secondary-colored value\n(`--font-secondary`). The colon is appended automatically — pass `label="Category"`, not\n`label="Category:"`.',...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking',
    selected: true,
    onClick: fn()
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking',
    disabled: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking',
    onDelete: fn()
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking',
    size: 'small'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [operator, setOperator] = useState('ne');
    return <DsTag variant="operator-filter" label="Latency" value="120 ms" slots={{
      operator: <DsSelect size="small" value={operator} onValueChange={setOperator} options={[{
        label: '=',
        value: 'eq'
      }, {
        label: '≠',
        value: 'ne'
      }, {
        label: '>',
        value: 'gt'
      }, {
        label: '<',
        value: 'lt'
      }]} />
    }} />;
  }
}`,...A.parameters?.docs?.source},description:{story:"Use the `operator-filter` variant for a `field ≠ value` filter chip. The comparison control is\nyours: pass a fully wired `DsSelect` (or `DsDropdownMenu`) through `slots.operator` so the tag\nstays a layout primitive and the operator set can follow the field's type. Clicks and keystrokes\ninside the slot never reach the tag's own `onClick` / delete shortcuts.\n\nThe tag cannot disable a node it does not own, so `disabled` leaves a slotted control live —\npass `disabled` to the control as well.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [operator, setOperator] = useState('ne');
    return <DsTag variant="operator-filter" label="Latency" value="120 ms" size="small" slots={{
      operator: <DsSelect size="small" value={operator} onValueChange={setOperator} options={[{
        label: '=',
        value: 'eq'
      }, {
        label: '≠',
        value: 'ne'
      }, {
        label: '>',
        value: 'gt'
      }, {
        label: '<',
        value: 'lt'
      }]} />
    }} />;
  }
}`,...j.parameters?.docs?.source},description:{story:'The same variant at `size="small"`. Size the slotted control to match — a `small` `DsSelect`\ninside a `small` tag.',...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'operator-filter',
    label: 'Latency',
    value: '120 ms'
  }
}`,...M.parameters?.docs?.source},description:{story:`\`slots.operator\` is optional. With no operator the tag renders no wrapper for it, so the layout
reserves no gap for a control that is not there — useful while the operator is still being
resolved, or for a filter whose comparison is implicit.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'query-filter',
    label: 'Region',
    value: 'us-east-1'
  }
}`,...N.parameters?.docs?.source},description:{story:"Use the `query-filter` variant for a drill-down path, e.g. `Region › Site`. The emphasis is\ninverted compared with `key-value`: the leaf (`value`) is the semi-bold segment the user is\nlooking at, and `label` is the regular-weight context it came from.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'query-filter',
    label: 'Region',
    value: 'us-east-1',
    size: 'small'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Category',
    value: 'Networking',
    shape: 'round'
  }
}`,...F.parameters?.docs?.source},description:{story:'`shape="round"` swaps the 4px radius for a pill on any variant at any size. Reach for it to match\na surface whose other tokens are round, or when migrating a deprecated `DsChip` — it is the same\npill shape that component used.',...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Round Tag',
    shape: 'round',
    size: 'small'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'query-filter',
    label: 'Region',
    value: 'us-east-1',
    warning: true
  }
}`,...L.parameters?.docs?.source},description:{story:"`warning` marks a tag whose value needs attention — an out-of-range threshold, a filter that\nmatches nothing. The dot is presentation plus an accessible name only; wrap the tag in\n`DsTooltip` and own the copy yourself.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'key-value',
    label: 'Threshold',
    value: '95%',
    warning: true,
    locale: {
      warningAriaLabel: 'Threshold is above the configured limit'
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`Override the dot's accessible name through \`locale.warningAriaLabel\` so screen-reader users hear
what is wrong instead of a bare "Warning".`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'operator-filter',
    label: 'Latency',
    value: '120 ms',
    onExpandClick: fn()
  }
}`,...z.parameters?.docs?.source},description:{story:"Passing `onExpandClick` renders the chevron — the same contract as `onDelete`. The tag keeps no\nexpanded state, so the consumer decides what the chevron reveals; `disabled` suppresses it.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Expandable Tag',
    size: 'small',
    warning: true,
    onExpandClick: fn()
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Tag',
    selected: true,
    disabled: true,
    onClick: fn(),
    onDelete: fn()
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Icon Tag',
    variant: 'include',
    slots: {
      icon: <DsIcon icon="star" size="tiny" />
    }
  }
}`,...H.parameters?.docs?.source}}}})))()}W();export{b as Clickable,x as Controlled,H as CustomIcon,y as Default,V as Disabled,C as Exclude,z as Expandable,B as ExpandableSmall,S as Include,T as KeyValue,D as KeyValueDisabled,E as KeyValueSelected,k as KeyValueSmall,O as KeyValueWithDelete,A as OperatorFilter,j as OperatorFilterSmall,M as OperatorFilterWithoutOperator,N as QueryFilter,P as QueryFilterSmall,F as Round,I as RoundSmall,w as Small,L as Warning,R as WarningLocalized,U as __namedExportsOrder,v as default};