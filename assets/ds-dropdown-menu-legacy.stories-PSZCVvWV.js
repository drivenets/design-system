import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-icon-BRZFUTMz.js";import{n as i,r as a}from"./ds-dropdown-menu-CnU5rWRR.js";import{t as o}from"./ds-dropdown-menu.stories-B_hFqmk1.js";var s,c,l,u,d,f;e((()=>{a(),o(),r(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DropdownMenuLegacy (Deprecated)`,component:i,parameters:{layout:`centered`},tags:[`deprecated`],argTypes:{children:{control:`text`,description:`Content to display inside the component`},contentGap:{control:`number`,description:`The gap between the trigger and dropdown content in pixels`}}},u={parameters:{docs:{description:{story:`Dropdown menu with a custom trigger styled to match the design. The menu items can include icons and can be disabled.`}}},args:{options:[{label:`Edit`,icon:`edit`,onClick:c()},{label:`Delete`,icon:`delete`,onClick:c()},{label:`Share`,icon:`share`,onClick:c()},{label:`Disabled Option`,icon:`block`,disabled:!0,onClick:c()}],contentGap:4},render:function(e){return(0,s.jsx)(i,{...e,children:(0,s.jsxs)(`div`,{className:`trigger`,role:`button`,children:[(0,s.jsx)(`span`,{className:`label`,children:`Actions`}),(0,s.jsx)(n,{className:`arrow`,icon:`more_vert`})]})})}},d={args:{options:[{label:`Rename`,onClick:c()},{label:`Duplicate`,onClick:c()},{label:`Archive`,onClick:c()}],contentGap:8},render:function(e){return(0,s.jsx)(i,{...e,children:(0,s.jsxs)(`div`,{className:`trigger`,role:`button`,children:[(0,s.jsx)(`span`,{className:`label`,children:`Options`}),(0,s.jsx)(n,{className:`arrow`,icon:`expand_more`})]})})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu with a custom trigger styled to match the design. The menu items can include icons and can be disabled.'
      }
    }
  },
  args: {
    options: [{
      label: 'Edit',
      icon: 'edit',
      onClick: fn()
    }, {
      label: 'Delete',
      icon: 'delete',
      onClick: fn()
    }, {
      label: 'Share',
      icon: 'share',
      onClick: fn()
    }, {
      label: 'Disabled Option',
      icon: 'block',
      disabled: true,
      onClick: fn()
    }],
    contentGap: 4
  },
  render: function Render(args) {
    return <DsDropdownMenuLegacy {...args}>
                <div className="trigger" role="button">
                    <span className="label">Actions</span>
                    <DsIcon className="arrow" icon="more_vert" />
                </div>
            </DsDropdownMenuLegacy>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Rename',
      onClick: fn()
    }, {
      label: 'Duplicate',
      onClick: fn()
    }, {
      label: 'Archive',
      onClick: fn()
    }],
    contentGap: 8
  },
  render: function Render(args) {
    return <DsDropdownMenuLegacy {...args}>
                <div className="trigger" role="button">
                    <span className="label">Options</span>
                    <DsIcon className="arrow" icon="expand_more" />
                </div>
            </DsDropdownMenuLegacy>;
  }
}`,...d.parameters?.docs?.source},description:{story:"`options` items work without icons — pass just `label` and `onClick` for a\ncompact, text-only action list. `contentGap` sets the space between the trigger\nand the menu.",...d.parameters?.docs?.description}}},f=[`Default`,`WithoutIcons`]}))();export{u as Default,d as WithoutIcons,f as __namedExportsOrder,l as default};