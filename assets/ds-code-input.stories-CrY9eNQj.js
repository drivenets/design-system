import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-B68LYriB.js";import{n as r,t as i}from"./ds-tooltip-BwFV_sW9.js";import{n as a,t as o}from"./ds-button-v3-r5RBr4Hk.js";import{n as s,t as c}from"./ds-code-input-CG9eJPeY.js";var l;function u(){return(u=e((()=>{l=[`small`,`default`,`large`]})))()}var d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{d=t(),a(),i(),c(),u(),f=n(),p={title:`Components/CodeInput`,component:s,parameters:{layout:`padded`,docs:{source:{type:`dynamic`}}},argTypes:{size:{control:`select`,options:l},locale:{table:{disable:!0}},slots:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},m={args:{placeholder:`Enter query`}},h={args:{defaultValue:`Status = Active AND trigger = Scheduled
AND site IN ("tel-aviv", "tokyo", "haifa")
AND lastSeen > now() - 24h`}},g={args:{defaultExpanded:!0,defaultValue:`Status = Active AND trigger = Scheduled
AND site IN ("tel-aviv", "tokyo", "haifa")
AND lastSeen > now() - 24h`}},_={args:{size:`small`,defaultValue:`Status = Active AND trigger = Scheduled`}},v={args:{size:`large`,defaultValue:`Status = Active AND trigger = Scheduled`}},y={args:{readOnly:!0,defaultValue:`Status = Active AND trigger = Scheduled`}},b={args:{disabled:!0,defaultValue:`Status = Active
AND trigger = Scheduled`}},x={parameters:{docs:{source:{type:`code`}}},render:()=>(0,f.jsx)(s,{defaultValue:`Status = Active AND trigger = Scheduled`,slots:{endAdornment:(0,f.jsx)(r,{content:`Query syntax`,children:(0,f.jsx)(o,{variant:`tertiary`,size:`small`,icon:`help`,"aria-label":`Query syntax`})})}})},S={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,d.useState)(`Status = Active AND trigger = Scheduled`);return(0,f.jsx)(s,{value:e,onValueChange:t})}},C={args:{placeholder:`Enter query`,locale:{expand:`Open editor`,collapse:`Close editor`,searchPlaceholder:`Find in code`}}},w=[`Default`,`WithValue`,`Expanded`,`Small`,`Large`,`ReadOnly`,`Disabled`,`WithHelpAdornment`,`Controlled`,`Localized`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter query'
  }
}`,...m.parameters?.docs?.source},description:{story:`Empty field. The trailing button opens a larger overlay with search; both
viewports edit the same document.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Status = Active AND trigger = Scheduled\\nAND site IN ("tel-aviv", "tokyo", "haifa")\\nAND lastSeen > now() - 24h'
  }
}`,...h.parameters?.docs?.source},description:{story:`A multiline value. While collapsed and unfocused the field shows logical line 1
and how many additional lines are hidden. Expand to review the full query.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    defaultValue: 'Status = Active AND trigger = Scheduled\\nAND site IN ("tel-aviv", "tokyo", "haifa")\\nAND lastSeen > now() - 24h'
  }
}`,...g.parameters?.docs?.source},description:{story:"Open on mount. Type in the search box to highlight every occurrence — matching is\nliteral and case-insensitive, so `status` marks `Status` too. The compact field stays\nvisible as a one-line echo of the line that contains the caret.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    defaultValue: 'Status = Active AND trigger = Scheduled'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    defaultValue: 'Status = Active AND trigger = Scheduled'
  }
}`,...v.parameters?.docs?.source},description:{story:`The largest field chrome. The overlay still matches the field width.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: 'Status = Active AND trigger = Scheduled'
  }
}`,...y.parameters?.docs?.source},description:{story:`Read-only still expands, so a long value stays searchable, but neither surface accepts
edits.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Status = Active\\nAND trigger = Scheduled'
  }
}`,...b.parameters?.docs?.source},description:{story:`Disabled still expands, so a long value stays searchable, but neither surface accepts
edits.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => <DsCodeInput defaultValue="Status = Active AND trigger = Scheduled" slots={{
    endAdornment: <DsTooltip content="Query syntax">
                        <DsButtonV3 variant="tertiary" size="small" icon="help" aria-label="Query syntax" />
                    </DsTooltip>
  }} />
}`,...x.parameters?.docs?.source},description:{story:`The component owns only the expand button. Anything else in the trailing slot — a
syntax-help tooltip, for instance — is passed by the consumer and renders after it.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState('Status = Active AND trigger = Scheduled');
    return <DsCodeInput value={value} onValueChange={setValue} />;
  }
}`,...S.parameters?.docs?.source},description:{story:"The parent owns the value via `value` and `onValueChange`. Use this when other UI\nneeds to react to edits.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter query',
    locale: {
      expand: 'Open editor',
      collapse: 'Close editor',
      searchPlaceholder: 'Find in code'
    }
  }
}`,...C.parameters?.docs?.source},description:{story:"Override built-in strings with `locale`. Omitted keys keep their defaults.",...C.parameters?.docs?.description}}}})))()}T();export{S as Controlled,m as Default,b as Disabled,g as Expanded,v as Large,C as Localized,y as ReadOnly,_ as Small,x as WithHelpAdornment,h as WithValue,w as __namedExportsOrder,p as default};