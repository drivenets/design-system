import{j as i}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-scWdy9I7.js";import{D as c}from"./ds-dropdown-menu-DGMGa7A4.js";/* empty css                                 */import{D as d}from"./ds-icon-CDgp51PA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-YaTj5zmu.js";import"./index-DbvqvABB.js";import"./index-DlfcXfSu.js";import"./index-BdJcV4Bk.js";import"./index-BhLy1AGA.js";import"./Combination-DEeB6M5x.js";import"./index-RXJmxl47.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-CDVEj4M6.js";import"./index-BIqsn3IP.js";import"./index-BfwItnWH.js";import"./ds-typography-DN5hY2h2.js";import"./index-BgL5W9Er.js";import"./ds-text-input-CENRD0_d.js";import"./portal-B-zg9Etn.js";import"./create-split-props-u5h9OPvL.js";import"./index-1nE72n8G.js";import"./use-locale-context-CA6nG6sV.js";import"./use-presence-CcGCDL2y.js";import"./index-693eaRwx.js";import"./index-DgmXvMMj.js";const{expect:t,userEvent:n,within:p}=__STORYBOOK_MODULE_TEST__,P={title:"Design System/DropdownMenu (Legacy)",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text",description:"Content to display inside the component"},contentGap:{control:"number",description:"The gap between the trigger and dropdown content in pixels"}}},s={parameters:{docs:{description:{story:"Dropdown menu with a custom trigger styled to match the design. The menu items can include icons and can be disabled."}}},args:{options:[{label:"Edit",icon:"edit",onClick:()=>console.log("Edit clicked")},{label:"Delete",icon:"delete",onClick:()=>console.log("Delete clicked")},{label:"Share",icon:"share",onClick:()=>console.log("Share clicked")},{label:"Disabled Option",icon:"block",disabled:!0,onClick:()=>console.log("Disabled clicked")}],contentGap:4},render:function(a){const[,e]=m.useState("");return a.__reset=async()=>{e(""),await u(100)},i.jsx(c,{...a,children:i.jsxs("div",{className:"trigger",role:"button",children:[i.jsx("span",{className:"label",children:"Actions"}),i.jsx(d,{className:"arrow",icon:"more_vert"})]})})},play:async({canvasElement:o,args:a})=>{const e=p(o),r=a.__reset;await t(e.getByText("Actions")).toBeInTheDocument(),await n.click(e.getByText("Actions")),await t(e.getByRole("menuitem",{name:/Edit/})).toBeInTheDocument(),await t(e.getByRole("menuitem",{name:/Delete/})).toBeInTheDocument(),await t(e.getByRole("menuitem",{name:/Share/})).toBeInTheDocument(),await t(e.getByRole("menuitem",{name:/Disabled Option/})).toBeInTheDocument();const l=e.getByRole("menuitem",{name:/Disabled Option/});await t(l).toHaveAttribute("aria-disabled","true"),await n.click(e.getByRole("menuitem",{name:/Edit/})),await n.keyboard("{Escape}"),await r(),await n.click(e.getByText("Actions")),await t(e.getByRole("menuitem",{name:/Edit/})).toBeInTheDocument(),await t(e.getByRole("menuitem",{name:/Delete/})).toBeInTheDocument(),await t(e.getByRole("menuitem",{name:/Share/})).toBeInTheDocument(),await t(e.getByRole("menuitem",{name:/Disabled Option/})).toBeInTheDocument(),await n.keyboard("{Escape}")}};function u(o){return new Promise(a=>setTimeout(a,o))}s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      onClick: () => console.log('Edit clicked')
    }, {
      label: 'Delete',
      icon: 'delete',
      onClick: () => console.log('Delete clicked')
    }, {
      label: 'Share',
      icon: 'share',
      onClick: () => console.log('Share clicked')
    }, {
      label: 'Disabled Option',
      icon: 'block',
      disabled: true,
      onClick: () => console.log('Disabled clicked')
    }],
    contentGap: 4
  },
  render: function Render(args) {
    const [, setClicked] = useState<string>('');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (args as any).__reset = async () => {
      setClicked('');
      await delay(100);
    };
    return <DsDropdownMenuLegacy {...args}>
                <div className="trigger" role="button">
                    <span className="label">Actions</span>
                    <DsIcon className="arrow" icon="more_vert" />
                </div>
            </DsDropdownMenuLegacy>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reset = (args as any).__reset;

    // Check initial state
    await expect(canvas.getByText('Actions')).toBeInTheDocument();

    // Open dropdown menu
    await userEvent.click(canvas.getByText('Actions'));

    // Check all menu items are present
    await expect(canvas.getByRole('menuitem', {
      name: /Edit/
    })).toBeInTheDocument();
    await expect(canvas.getByRole('menuitem', {
      name: /Delete/
    })).toBeInTheDocument();
    await expect(canvas.getByRole('menuitem', {
      name: /Share/
    })).toBeInTheDocument();
    await expect(canvas.getByRole('menuitem', {
      name: /Disabled Option/
    })).toBeInTheDocument();

    // Check disabled state
    const disabledOption = canvas.getByRole('menuitem', {
      name: /Disabled Option/
    });
    await expect(disabledOption).toHaveAttribute('aria-disabled', 'true');

    // Click an option
    await userEvent.click(canvas.getByRole('menuitem', {
      name: /Edit/
    }));

    // Close dropdown with Escape key
    await userEvent.keyboard('{Escape}');

    // Reset using the wrapper's reset method
    await reset();

    // Open dropdown again
    await userEvent.click(canvas.getByText('Actions'));

    // Check all options are shown again
    await expect(canvas.getByRole('menuitem', {
      name: /Edit/
    })).toBeInTheDocument();
    await expect(canvas.getByRole('menuitem', {
      name: /Delete/
    })).toBeInTheDocument();
    await expect(canvas.getByRole('menuitem', {
      name: /Share/
    })).toBeInTheDocument();
    await expect(canvas.getByRole('menuitem', {
      name: /Disabled Option/
    })).toBeInTheDocument();

    // Close dropdown with Escape key
    await userEvent.keyboard('{Escape}');
  }
}`,...s.parameters?.docs?.source}}};const U=["Default"];export{s as Default,U as __namedExportsOrder,P as default};
