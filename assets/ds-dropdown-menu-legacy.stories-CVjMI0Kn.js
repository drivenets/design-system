import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BeLkEoK-.js";import{n,t as r}from"./ds-icon-9oJOi3yZ.js";import{n as i,r as a}from"./ds-dropdown-menu-CHwZUYpA.js";import"./ds-dropdown-menu.stories-CNSs1cEV.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{a(),r(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DropdownMenuLegacy (Deprecated)`,component:i,parameters:{layout:`centered`},tags:[`deprecated`],argTypes:{children:{control:`text`,description:`Content to display inside the component`},contentGap:{control:`number`,description:`The gap between the trigger and dropdown content in pixels`}}},l={parameters:{docs:{description:{story:`Dropdown menu with a custom trigger styled to match the design. The menu items can include icons and can be disabled.`}}},args:{options:[{label:`Edit`,icon:`edit`,onClick:s()},{label:`Delete`,icon:`delete`,onClick:s()},{label:`Share`,icon:`share`,onClick:s()},{label:`Disabled Option`,icon:`block`,disabled:!0,onClick:s()}],contentGap:4},render:function(e){return(0,o.jsx)(i,{...e,children:(0,o.jsxs)(`div`,{className:`trigger`,role:`button`,children:[(0,o.jsx)(`span`,{className:`label`,children:`Actions`}),(0,o.jsx)(n,{className:`arrow`,icon:`more_vert`})]})})}},u={args:{options:[{label:`Rename`,onClick:s()},{label:`Duplicate`,onClick:s()},{label:`Archive`,onClick:s()}],contentGap:8},render:function(e){return(0,o.jsx)(i,{...e,children:(0,o.jsxs)(`div`,{className:`trigger`,role:`button`,children:[(0,o.jsx)(`span`,{className:`label`,children:`Options`}),(0,o.jsx)(n,{className:`arrow`,icon:`expand_more`})]})})}},d=[`Default`,`WithoutIcons`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"`options` items work without icons — pass just `label` and `onClick` for a\ncompact, text-only action list. `contentGap` sets the space between the trigger\nand the menu.",...u.parameters?.docs?.description}}}})))()}f();export{l as Default,u as WithoutIcons,d as __namedExportsOrder,c as default};