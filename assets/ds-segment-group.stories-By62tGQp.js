import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{t as i}from"./ds-icon-DMuQRurV.js";import{t as a}from"./ds-icon-hk1K6-z2.js";import{n as o,t as s}from"./ds-segment-group-DsuVYw97.js";import{n as c,t as l}from"./ds-typography-BLoO5j9q.js";import{n as u,t as d}from"./ds-stack-GU0hZWeR.js";var f,p,m,h,g,_,v,y,b,x,S;t((()=>{f=e(n(),1),o(),a(),u(),l(),p=r(),m={title:`Components/SegmentGroup`,component:s.Root,parameters:{layout:`centered`,docs:{description:{component:`A single-select control that shows every option inline as connected segments. Use it for a small set of mutually exclusive choices, such as a view or range switcher.`}}}},h={render:()=>(0,p.jsxs)(s.Root,{defaultValue:`react`,children:[(0,p.jsx)(s.Item,{value:`react`,label:`React`}),(0,p.jsx)(s.Item,{value:`vue`,label:`Vue`}),(0,p.jsx)(s.Item,{value:`angular`,label:`Angular`}),(0,p.jsx)(s.Item,{value:`svelte`,label:`Svelte`})]})},g={render:()=>(0,p.jsxs)(s.Root,{defaultValue:`list`,size:`small`,children:[(0,p.jsx)(s.Item,{value:`list`,label:`List`}),(0,p.jsx)(s.Item,{value:`grid`,label:`Grid`}),(0,p.jsx)(s.Item,{value:`table`,label:`Table`})]})},_={render:()=>(0,p.jsxs)(s.Root,{defaultValue:`day`,children:[(0,p.jsxs)(s.Item,{value:`day`,children:[(0,p.jsx)(i,{icon:`wb_sunny`,size:`tiny`}),(0,p.jsx)(s.ItemText,{children:`Day`})]}),(0,p.jsxs)(s.Item,{value:`week`,children:[(0,p.jsx)(i,{icon:`date_range`,size:`tiny`}),(0,p.jsx)(s.ItemText,{children:`Week`})]}),(0,p.jsxs)(s.Item,{value:`month`,children:[(0,p.jsx)(i,{icon:`calendar_month`,size:`tiny`}),(0,p.jsx)(s.ItemText,{children:`Month`})]})]})},v={render:()=>(0,p.jsxs)(s.Root,{defaultValue:`list`,size:`small`,children:[(0,p.jsx)(s.Item,{value:`list`,children:(0,p.jsx)(i,{icon:`view_list`,size:`tiny`})}),(0,p.jsx)(s.Item,{value:`grid`,children:(0,p.jsx)(i,{icon:`grid_view`,size:`tiny`})}),(0,p.jsx)(s.Item,{value:`kanban`,children:(0,p.jsx)(i,{icon:`view_kanban`,size:`tiny`})}),(0,p.jsx)(s.Item,{value:`timeline`,children:(0,p.jsx)(i,{icon:`timeline`,size:`tiny`})})]})},y={render:()=>(0,p.jsxs)(s.Root,{defaultValue:`option2`,children:[(0,p.jsx)(s.Item,{value:`option1`,label:`Disabled`,disabled:!0}),(0,p.jsx)(s.Item,{value:`option2`,label:`Available`}),(0,p.jsx)(s.Item,{value:`option3`,label:`Also Available`})]})},b={render:()=>(0,p.jsxs)(s.Root,{defaultValue:`on`,children:[(0,p.jsx)(s.Item,{value:`on`,label:`On`}),(0,p.jsx)(s.Item,{value:`off`,label:`Off`})]})},x={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,f.useState)(`option2`);return(0,p.jsxs)(d,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,children:[(0,p.jsxs)(s.Root,{value:e,onValueChange:t,children:[(0,p.jsx)(s.Item,{value:`option1`,label:`Option 1`}),(0,p.jsx)(s.Item,{value:`option2`,label:`Option 2`}),(0,p.jsx)(s.Item,{value:`option3`,label:`Option 3`})]}),(0,p.jsxs)(c,{variant:`body-sm-reg`,color:`secondary`,children:[`Selected: `,e??`None`]})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <DsSegmentGroup.Root defaultValue="react">
            <DsSegmentGroup.Item value="react" label="React" />
            <DsSegmentGroup.Item value="vue" label="Vue" />
            <DsSegmentGroup.Item value="angular" label="Angular" />
            <DsSegmentGroup.Item value="svelte" label="Svelte" />
        </DsSegmentGroup.Root>
}`,...h.parameters?.docs?.source},description:{story:"A basic segment group with text labels. Compose `Root` with `Item` children\nand seed the initial choice with `defaultValue` for uncontrolled usage.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <DsSegmentGroup.Root defaultValue="list" size="small">
            <DsSegmentGroup.Item value="list" label="List" />
            <DsSegmentGroup.Item value="grid" label="Grid" />
            <DsSegmentGroup.Item value="table" label="Table" />
        </DsSegmentGroup.Root>
}`,...g.parameters?.docs?.source},description:{story:`Compact size for toolbars and dense layouts where vertical space is limited.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <DsSegmentGroup.Root defaultValue="day">
            <DsSegmentGroup.Item value="day">
                <DsIcon icon="wb_sunny" size="tiny" />
                <DsSegmentGroup.ItemText>Day</DsSegmentGroup.ItemText>
            </DsSegmentGroup.Item>
            <DsSegmentGroup.Item value="week">
                <DsIcon icon="date_range" size="tiny" />
                <DsSegmentGroup.ItemText>Week</DsSegmentGroup.ItemText>
            </DsSegmentGroup.Item>
            <DsSegmentGroup.Item value="month">
                <DsIcon icon="calendar_month" size="tiny" />
                <DsSegmentGroup.ItemText>Month</DsSegmentGroup.ItemText>
            </DsSegmentGroup.Item>
        </DsSegmentGroup.Root>
}`,..._.parameters?.docs?.source},description:{story:"Pair an icon with a label by composing `DsIcon` and `Item.ItemText` inside an\n`Item`. Use icons to reinforce the meaning of each option.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <DsSegmentGroup.Root defaultValue="list" size="small">
            <DsSegmentGroup.Item value="list">
                <DsIcon icon="view_list" size="tiny" />
            </DsSegmentGroup.Item>
            <DsSegmentGroup.Item value="grid">
                <DsIcon icon="grid_view" size="tiny" />
            </DsSegmentGroup.Item>
            <DsSegmentGroup.Item value="kanban">
                <DsIcon icon="view_kanban" size="tiny" />
            </DsSegmentGroup.Item>
            <DsSegmentGroup.Item value="timeline">
                <DsIcon icon="timeline" size="tiny" />
            </DsSegmentGroup.Item>
        </DsSegmentGroup.Root>
}`,...v.parameters?.docs?.source},description:{story:`Icon-only segments for a compact switcher where the glyphs are self-explanatory.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <DsSegmentGroup.Root defaultValue="option2">
            <DsSegmentGroup.Item value="option1" label="Disabled" disabled />
            <DsSegmentGroup.Item value="option2" label="Available" />
            <DsSegmentGroup.Item value="option3" label="Also Available" />
        </DsSegmentGroup.Root>
}`,...y.parameters?.docs?.source},description:{story:"Disable individual segments with the `disabled` prop on an `Item` to prevent\nselecting an unavailable option.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <DsSegmentGroup.Root defaultValue="on">
            <DsSegmentGroup.Item value="on" label="On" />
            <DsSegmentGroup.Item value="off" label="Off" />
        </DsSegmentGroup.Root>
}`,...b.parameters?.docs?.source},description:{story:`A two-option segment group works well for binary choices as a labelled
alternative to a toggle.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | null>('option2');
    return <DsStack direction="column" gap="var(--sm)" alignItems="center">
                <DsSegmentGroup.Root value={value} onValueChange={setValue}>
                    <DsSegmentGroup.Item value="option1" label="Option 1" />
                    <DsSegmentGroup.Item value="option2" label="Option 2" />
                    <DsSegmentGroup.Item value="option3" label="Option 3" />
                </DsSegmentGroup.Root>
                <DsTypography variant="body-sm-reg" color="secondary">
                    Selected: {value ?? 'None'}
                </DsTypography>
            </DsStack>;
  }
}`,...x.parameters?.docs?.source},description:{story:"Fully controlled segment group where the parent owns the value via\n`value`/`onValueChange`. Use when other UI must react to the selection.",...x.parameters?.docs?.description}}},S=[`Default`,`Small`,`WithIcons`,`IconOnly`,`WithDisabledItems`,`TwoOptions`,`Controlled`]}))();export{x as Controlled,h as Default,v as IconOnly,g as Small,b as TwoOptions,y as WithDisabledItems,_ as WithIcons,S as __namedExportsOrder,m as default};