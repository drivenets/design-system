import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-B7s6RIoB.js";import{n as r,t as i}from"./ds-icon-PUaD2-ko.js";import{i as a,n as o,r as s,t as c}from"./ds-segment-group-Cs8lSiE6.js";import{n as l,t as u}from"./ds-typography-BdLOKfGv.js";import{n as d,t as f}from"./ds-stack-DbPEq4gn.js";var p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{p=t(),o(),s(),i(),d(),u(),m=n(),h={title:`Components/SegmentGroup`,component:c.Root,parameters:{layout:`centered`,docs:{description:{component:`A single-select control that shows every option inline as connected segments. Use it for 2–4 mutually exclusive choices that should stay visible at once (view toggle, unit switch) as a compact alternative to a radio group. Prefer Tabs for more than about five options or long labels, and Select for large or searchable lists. Icon-only items need an aria-label.`}}},argTypes:{size:{control:`select`,options:a},disabled:{control:`boolean`},defaultValue:{table:{disable:!0}},name:{table:{disable:!0}},value:{table:{disable:!0}},onValueChange:{table:{disable:!0}},children:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}}},g={render:e=>(0,m.jsxs)(c.Root,{...e,defaultValue:`react`,children:[(0,m.jsx)(c.Item,{value:`react`,label:`React`}),(0,m.jsx)(c.Item,{value:`vue`,label:`Vue`}),(0,m.jsx)(c.Item,{value:`angular`,label:`Angular`}),(0,m.jsx)(c.Item,{value:`svelte`,label:`Svelte`})]})},_={render:()=>(0,m.jsxs)(c.Root,{defaultValue:`list`,size:`small`,children:[(0,m.jsx)(c.Item,{value:`list`,label:`List`,size:`small`}),(0,m.jsx)(c.Item,{value:`grid`,label:`Grid`,size:`small`}),(0,m.jsx)(c.Item,{value:`table`,label:`Table`,size:`small`})]})},v={render:()=>(0,m.jsxs)(c.Root,{defaultValue:`day`,size:`small`,children:[(0,m.jsxs)(c.Item,{value:`day`,children:[(0,m.jsx)(r,{icon:`wb_sunny`,size:`tiny`,color:`main`}),(0,m.jsx)(c.ItemText,{size:`small`,children:`Day`})]}),(0,m.jsxs)(c.Item,{value:`week`,children:[(0,m.jsx)(r,{icon:`date_range`,size:`tiny`,color:`main`}),(0,m.jsx)(c.ItemText,{size:`small`,children:`Week`})]}),(0,m.jsxs)(c.Item,{value:`month`,children:[(0,m.jsx)(r,{icon:`calendar_month`,size:`tiny`,color:`main`}),(0,m.jsx)(c.ItemText,{size:`small`,children:`Month`})]})]})},y={render:()=>(0,m.jsxs)(c.Root,{defaultValue:`list`,size:`small`,children:[(0,m.jsx)(c.Item,{value:`list`,"aria-label":`List`,children:(0,m.jsx)(r,{icon:`view_list`,size:`tiny`,color:`main`})}),(0,m.jsx)(c.Item,{value:`grid`,"aria-label":`Grid`,children:(0,m.jsx)(r,{icon:`grid_view`,size:`tiny`,color:`main`})}),(0,m.jsx)(c.Item,{value:`kanban`,"aria-label":`Kanban`,children:(0,m.jsx)(r,{icon:`view_kanban`,size:`tiny`,color:`main`})}),(0,m.jsx)(c.Item,{value:`timeline`,"aria-label":`Timeline`,children:(0,m.jsx)(r,{icon:`timeline`,size:`tiny`,color:`main`})})]})},b={render:()=>(0,m.jsxs)(c.Root,{defaultValue:`react`,disabled:!0,children:[(0,m.jsx)(c.Item,{value:`react`,label:`React`}),(0,m.jsx)(c.Item,{value:`vue`,label:`Vue`}),(0,m.jsx)(c.Item,{value:`angular`,label:`Angular`})]})},x={render:()=>(0,m.jsxs)(c.Root,{defaultValue:`option2`,children:[(0,m.jsx)(c.Item,{value:`option1`,label:`Disabled`,disabled:!0}),(0,m.jsx)(c.Item,{value:`option2`,label:`Available`}),(0,m.jsx)(c.Item,{value:`option3`,label:`Also Available`})]})},S={render:()=>(0,m.jsxs)(c.Root,{defaultValue:`on`,children:[(0,m.jsx)(c.Item,{value:`on`,label:`On`}),(0,m.jsx)(c.Item,{value:`off`,label:`Off`})]})},C={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,p.useState)(`option2`);return(0,m.jsxs)(f,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,children:[(0,m.jsxs)(c.Root,{value:e,onValueChange:t,children:[(0,m.jsx)(c.Item,{value:`option1`,label:`Option 1`}),(0,m.jsx)(c.Item,{value:`option2`,label:`Option 2`}),(0,m.jsx)(c.Item,{value:`option3`,label:`Option 3`})]}),(0,m.jsxs)(l,{variant:`body-sm-reg`,color:`secondary`,children:[`Selected: `,e??`None`]})]})}},w=[`Default`,`Small`,`WithIcons`,`IconOnly`,`Disabled`,`WithDisabledItems`,`TwoOptions`,`Controlled`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <DsSegmentGroup.Root {...args} defaultValue="react">
            <DsSegmentGroup.Item value="react" label="React" />
            <DsSegmentGroup.Item value="vue" label="Vue" />
            <DsSegmentGroup.Item value="angular" label="Angular" />
            <DsSegmentGroup.Item value="svelte" label="Svelte" />
        </DsSegmentGroup.Root>
}`,...g.parameters?.docs?.source},description:{story:"A basic segment group with text labels. Compose `Root` with `Item` children\nand seed the initial choice with `defaultValue` for uncontrolled usage.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <DsSegmentGroup.Root defaultValue="list" size="small">
            <DsSegmentGroup.Item value="list" label="List" size="small" />
            <DsSegmentGroup.Item value="grid" label="Grid" size="small" />
            <DsSegmentGroup.Item value="table" label="Table" size="small" />
        </DsSegmentGroup.Root>
}`,..._.parameters?.docs?.source},description:{story:`Compact size for toolbars and dense layouts where vertical space is limited.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <DsSegmentGroup.Root defaultValue="day" size="small">
            <DsSegmentGroup.Item value="day">
                <DsIcon icon="wb_sunny" size="tiny" color="main" />
                <DsSegmentGroup.ItemText size="small">Day</DsSegmentGroup.ItemText>
            </DsSegmentGroup.Item>
            <DsSegmentGroup.Item value="week">
                <DsIcon icon="date_range" size="tiny" color="main" />
                <DsSegmentGroup.ItemText size="small">Week</DsSegmentGroup.ItemText>
            </DsSegmentGroup.Item>
            <DsSegmentGroup.Item value="month">
                <DsIcon icon="calendar_month" size="tiny" color="main" />
                <DsSegmentGroup.ItemText size="small">Month</DsSegmentGroup.ItemText>
            </DsSegmentGroup.Item>
        </DsSegmentGroup.Root>
}`,...v.parameters?.docs?.source},description:{story:"Pair an icon with a label by composing `DsIcon` and `Item.ItemText` inside an\n`Item`. Use icons to reinforce the meaning of each option.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <DsSegmentGroup.Root defaultValue="list" size="small">
            <DsSegmentGroup.Item value="list" aria-label="List">
                <DsIcon icon="view_list" size="tiny" color="main" />
            </DsSegmentGroup.Item>
            <DsSegmentGroup.Item value="grid" aria-label="Grid">
                <DsIcon icon="grid_view" size="tiny" color="main" />
            </DsSegmentGroup.Item>
            <DsSegmentGroup.Item value="kanban" aria-label="Kanban">
                <DsIcon icon="view_kanban" size="tiny" color="main" />
            </DsSegmentGroup.Item>
            <DsSegmentGroup.Item value="timeline" aria-label="Timeline">
                <DsIcon icon="timeline" size="tiny" color="main" />
            </DsSegmentGroup.Item>
        </DsSegmentGroup.Root>
}`,...y.parameters?.docs?.source},description:{story:`Icon-only segments for a compact switcher where the glyphs are self-explanatory.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <DsSegmentGroup.Root defaultValue="react" disabled>
            <DsSegmentGroup.Item value="react" label="React" />
            <DsSegmentGroup.Item value="vue" label="Vue" />
            <DsSegmentGroup.Item value="angular" label="Angular" />
        </DsSegmentGroup.Root>
}`,...b.parameters?.docs?.source},description:{story:`Disable the entire group when no option can be changed.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <DsSegmentGroup.Root defaultValue="option2">
            <DsSegmentGroup.Item value="option1" label="Disabled" disabled />
            <DsSegmentGroup.Item value="option2" label="Available" />
            <DsSegmentGroup.Item value="option3" label="Also Available" />
        </DsSegmentGroup.Root>
}`,...x.parameters?.docs?.source},description:{story:"Disable individual segments with the `disabled` prop on an `Item` to prevent\nselecting an unavailable option.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <DsSegmentGroup.Root defaultValue="on">
            <DsSegmentGroup.Item value="on" label="On" />
            <DsSegmentGroup.Item value="off" label="Off" />
        </DsSegmentGroup.Root>
}`,...S.parameters?.docs?.source},description:{story:`A two-option segment group works well for binary choices as a labelled
alternative to a toggle.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Fully controlled segment group where the parent owns the value via\n`value`/`onValueChange`. Use when other UI must react to the selection.",...C.parameters?.docs?.description}}}})))()}T();export{C as Controlled,g as Default,b as Disabled,y as IconOnly,_ as Small,S as TwoOptions,x as WithDisabledItems,v as WithIcons,w as __namedExportsOrder,h as default};