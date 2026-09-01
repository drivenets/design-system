import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{t as n}from"./ds-icon-BW3ZMuEi.js";import{t as r}from"./ds-icon-m9JGPUU6.js";import{i}from"./ds-avatar.types-DC6ugQMT.js";import{n as a,t as o}from"./ds-typography-DvFMkhNF.js";import{n as s,t as c}from"./ds-button-v3-DKBJbP0e.js";import{n as l,t as u}from"./ds-stack-5oRwpvZl.js";import{t as d}from"./ds-avatar-C7SKoaP0.js";import{t as f}from"./ds-divider-qdszEwb_.js";import{t as p}from"./ds-divider-DfbSnRD5.js";import{a as m,i as h,n as g,r as _,t as v}from"./ds-popover.types-yWbwIs-f.js";import{n as y,t as b}from"./ds-status-badge-v2-361x7qNt.js";var x,S,C=e((()=>{x=`_image_1wbyz_1`,S={image:x}})),w,T,E,D,O,k,A,j;e((()=>{s(),r(),d(),p(),y(),l(),o(),m(),v(),C(),w=t(),T=`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22352%22%20height%3D%22200%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23e5e8ed%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%234c5f76%22%20font-family%3D%22Roboto%2C%20sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EMap%20preview%3C%2Ftext%3E%3C%2Fsvg%3E`,E={title:`Components/Popover`,component:h.Root,parameters:{layout:`centered`},args:{side:`bottom`,align:`center`,gutter:8,modal:!1,defaultOpen:!1},argTypes:{side:{control:`select`,options:_},align:{control:`select`,options:g},gutter:{control:`number`},modal:{control:`boolean`},open:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},children:{table:{disable:!0}}}},D={render:e=>(0,w.jsxs)(h.Root,{...e,children:[(0,w.jsx)(h.Trigger,{children:(0,w.jsx)(c,{variant:`secondary`,children:`Release lock`})}),(0,w.jsxs)(h.Panel,{children:[(0,w.jsx)(h.Header,{icon:(0,w.jsx)(n,{icon:`lock`,color:`action-secondary`}),children:`Release lock`}),(0,w.jsxs)(h.Content,{children:[(0,w.jsx)(h.ContentItem,{status:(0,w.jsx)(b,{phase:`active`,label:`Active`,size:`small`}),children:`Releases a physical lock on a device or asset, granting immediate access to the selected inventory item.`}),(0,w.jsx)(f,{}),(0,w.jsx)(h.ContentItem,{headline:`Last version: 2.3.4`,children:(0,w.jsxs)(u,{direction:`row`,alignItems:`center`,gap:`var(--xs)`,children:[(0,w.jsx)(i,{name:`John Smith`,size:`xsm`}),(0,w.jsx)(a,{variant:`body-xs-reg`,color:`secondary`,children:`John Smith • 23-May-2024 04:47 PM`})]})}),(0,w.jsx)(f,{}),(0,w.jsxs)(h.ContentItem,{headline:`Category`,children:[(0,w.jsx)(n,{icon:`sell`,size:`small`,color:`secondary`}),`DAP / Inventory / Physical`]})]}),(0,w.jsx)(h.Footer,{children:(0,w.jsx)(c,{variant:`secondary`,size:`small`,icon:`check_circle`,children:`Confirm`})})]})]})},O={render:e=>(0,w.jsxs)(h.Root,{...e,children:[(0,w.jsx)(h.Trigger,{children:(0,w.jsx)(c,{variant:`secondary`,children:`Set element status`})}),(0,w.jsxs)(h.Panel,{children:[(0,w.jsx)(h.Header,{icon:(0,w.jsx)(n,{icon:`account_tree`,color:`action-secondary`}),children:`Set element status`}),(0,w.jsx)(h.Content,{children:(0,w.jsx)(h.ContentItem,{status:(0,w.jsx)(b,{phase:`not-started`,label:`Node not connected`,size:`small`}),children:`This node has no outgoing connections. Link it to another node to continue the workflow.`})})]})]})},k={tags:[`deprecated`],render:()=>(0,w.jsxs)(h,{side:`top`,trigger:(0,w.jsx)(c,{variant:`secondary`,children:`Legacy call form`}),children:[(0,w.jsx)(h.Header,{icon:(0,w.jsx)(n,{icon:`lock`,color:`action-secondary`}),children:`Legacy call form`}),(0,w.jsx)(h.Content,{children:(0,w.jsx)(h.ContentItem,{children:`Still works after the rewrite — same one-liner, new panel styling.`})})]})},A={render:e=>(0,w.jsxs)(h.Root,{...e,children:[(0,w.jsx)(h.Trigger,{children:(0,w.jsx)(c,{variant:`secondary`,children:`London`})}),(0,w.jsxs)(h.Panel,{children:[(0,w.jsx)(h.Header,{icon:(0,w.jsx)(n,{icon:`location_on`,color:`action-secondary`}),children:`London`}),(0,w.jsx)(h.Content,{children:(0,w.jsx)(h.ContentItem,{children:(0,w.jsx)(`img`,{className:S.image,src:T,alt:`Map of London`})})})]})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <DsPopover.Root {...args}>
            <DsPopover.Trigger>
                <DsButtonV3 variant="secondary">Release lock</DsButtonV3>
            </DsPopover.Trigger>
            <DsPopover.Panel>
                <DsPopover.Header icon={<DsIcon icon="lock" color="action-secondary" />}>
                    Release lock
                </DsPopover.Header>
                <DsPopover.Content>
                    <DsPopover.ContentItem status={<DsStatusBadgeV2 phase="active" label="Active" size="small" />}>
                        Releases a physical lock on a device or asset, granting immediate access to the selected inventory
                        item.
                    </DsPopover.ContentItem>
                    <DsDivider />
                    <DsPopover.ContentItem headline="Last version: 2.3.4">
                        <DsStack direction="row" alignItems="center" gap="var(--xs)">
                            <DsAvatar name="John Smith" size="xsm" />
                            <DsTypography variant="body-xs-reg" color="secondary">
                                John Smith &bull; 23-May-2024 04:47 PM
                            </DsTypography>
                        </DsStack>
                    </DsPopover.ContentItem>
                    <DsDivider />
                    <DsPopover.ContentItem headline="Category">
                        <DsIcon icon="sell" size="small" color="secondary" />
                        DAP / Inventory / Physical
                    </DsPopover.ContentItem>
                </DsPopover.Content>
                <DsPopover.Footer>
                    <DsButtonV3 variant="secondary" size="small" icon="check_circle">
                        Confirm
                    </DsButtonV3>
                </DsPopover.Footer>
            </DsPopover.Panel>
        </DsPopover.Root>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <DsPopover.Root {...args}>
            <DsPopover.Trigger>
                <DsButtonV3 variant="secondary">Set element status</DsButtonV3>
            </DsPopover.Trigger>
            <DsPopover.Panel>
                <DsPopover.Header icon={<DsIcon icon="account_tree" color="action-secondary" />}>
                    Set element status
                </DsPopover.Header>
                <DsPopover.Content>
                    <DsPopover.ContentItem status={<DsStatusBadgeV2 phase="not-started" label="Node not connected" size="small" />}>
                        This node has no outgoing connections. Link it to another node to continue the workflow.
                    </DsPopover.ContentItem>
                </DsPopover.Content>
            </DsPopover.Panel>
        </DsPopover.Root>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['deprecated'],
  render: () => <DsPopover side="top" trigger={<DsButtonV3 variant="secondary">Legacy call form</DsButtonV3>}>
            <DsPopover.Header icon={<DsIcon icon="lock" color="action-secondary" />}>
                Legacy call form
            </DsPopover.Header>
            <DsPopover.Content>
                <DsPopover.ContentItem>
                    Still works after the rewrite — same one-liner, new panel styling.
                </DsPopover.ContentItem>
            </DsPopover.Content>
        </DsPopover>
}`,...k.parameters?.docs?.source},description:{story:"Legacy single-element call form (`@deprecated`). The old `trigger` / `side` /\n`align` API still compiles and runs — it now renders the new light panel.\nPrefer the compound API shown above.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <DsPopover.Root {...args}>
            <DsPopover.Trigger>
                <DsButtonV3 variant="secondary">London</DsButtonV3>
            </DsPopover.Trigger>
            <DsPopover.Panel>
                <DsPopover.Header icon={<DsIcon icon="location_on" color="action-secondary" />}>
                    London
                </DsPopover.Header>
                <DsPopover.Content>
                    <DsPopover.ContentItem>
                        <img className={styles.image} src={PLACEHOLDER_IMAGE} alt="Map of London" />
                    </DsPopover.ContentItem>
                </DsPopover.Content>
            </DsPopover.Panel>
        </DsPopover.Root>
}`,...A.parameters?.docs?.source}}},j=[`WithContentItemsAndCTA`,`SingleContentItem`,`Legacy`,`WithImage`]}))();export{k as Legacy,O as SingleContentItem,D as WithContentItemsAndCTA,A as WithImage,j as __namedExportsOrder,E as default};