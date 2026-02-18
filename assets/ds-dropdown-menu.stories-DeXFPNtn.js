import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as D}from"./iframe-GhvvmIvk.js";import{a as t}from"./ds-dropdown-menu-DozyBWMo.js";import{D as o}from"./ds-icon-CLW5u7Mu.js";import{D as B}from"./ds-text-input-Pe-j-GUX.js";import{D as L}from"./ds-checkbox-BrUyzovv.js";import{D as g}from"./ds-typography-CR12Hdjh.js";import{D as x}from"./ds-button-BSRbDzy_.js";import{D as R}from"./ds-radio-group-Bcdnpkro.js";/* empty css                                 */import"./preload-helper-PPVm8Dsz.js";import"./index-DxcPRp5N.js";import"./index-CEuCMGL6.js";import"./index-NLLiC9mu.js";import"./index-CeNUtHxB.js";import"./index-V3APV3sx.js";import"./Combination-IiBGZ5kP.js";import"./index-ChR1TCUG.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-F-ZmvGfS.js";import"./index-D0squdRH.js";import"./index-CFg2X2TO.js";import"./portal-BSS_yJhf.js";import"./create-split-props-u5h9OPvL.js";import"./index-1-mst_J2.js";import"./use-locale-context-CO5JyQiY.js";import"./use-presence-CDlVlhdb.js";import"./index-DCchWidZ.js";import"./index-DG2oXFOr.js";import"./index-DzhYLBvp.js";import"./ds-button-legacy-C5BL7mxE.js";import"./ds-button-new-0DK6HokA.js";import"./index-CG5vZhBN.js";import"./index-C10BVI5B.js";const{expect:c,fn:G,screen:h,userEvent:w,within:N}=__STORYBOOK_MODULE_TEST__,ge={title:"Design System/DropdownMenu",parameters:{layout:"centered"},tags:["autodocs"]},y={parameters:{docs:{description:{story:"A basic dropdown menu with action items. Each item can have an icon and onSelect handler. Items can be disabled. Use separators to divide different action groups."}}},render:()=>{const u=()=>console.log("Edit clicked"),r=()=>console.log("Duplicate clicked"),l=()=>console.log("Share clicked"),a=()=>console.log("Delete clicked");return e.jsxs(t.Root,{children:[e.jsxs(t.Trigger,{className:"trigger",children:[e.jsx("span",{children:"Actions"}),e.jsx(o,{icon:"more_vert"})]}),e.jsxs(t.Content,{children:[e.jsxs(t.Item,{value:"edit",onSelect:u,children:[e.jsx(o,{icon:"edit"}),e.jsx("span",{children:"Edit"})]}),e.jsxs(t.Item,{value:"duplicate",onSelect:r,children:[e.jsx(o,{icon:"content_copy"}),e.jsx("span",{children:"Duplicate"})]}),e.jsxs(t.Item,{value:"share",onSelect:l,children:[e.jsx(o,{icon:"share"}),e.jsx("span",{children:"Share"})]}),e.jsx(t.Separator,{}),e.jsxs(t.Item,{value:"delete",onSelect:a,className:"danger",children:[e.jsx(o,{icon:"delete"}),e.jsx("span",{children:"Delete"})]}),e.jsxs(t.Item,{value:"disabled",disabled:!0,children:[e.jsx(o,{icon:"block"}),e.jsx("span",{children:"Disabled Option"})]})]})]})}},v={name:"Selectable List with Search",parameters:{docs:{description:{story:"Dropdown with search functionality and selection tracking. Users can filter items and see which item is selected with a check indicator."}}},render:function(){const[r,l]=D.useState(""),[a,i]=D.useState("option1"),n=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],m=n.find(d=>d.value===a)?.label,b=n.filter(d=>d.label.toLowerCase().includes(r.toLowerCase()));return e.jsxs(t.Root,{onSelect:i,positioning:{sameWidth:!0},children:[e.jsxs(t.Trigger,{className:"trigger fixedWidth",children:[e.jsx("span",{children:m||"Select an option"}),e.jsx(o,{icon:"arrow_drop_down"})]}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{children:e.jsx(B,{placeholder:"Search",value:r,onValueChange:l,onKeyDown:d=>d.stopPropagation(),slots:{startAdornment:e.jsx(o,{icon:"search",size:"tiny"})}})}),b.map(d=>e.jsxs(t.Item,{value:d.value,selected:a===d.value,children:[d.label,a===d.value&&e.jsx(t.ItemIndicator,{})]},d.value))]})]})}},M={name:"Checkbox List with Groups",parameters:{docs:{description:{story:"Dropdown with checkbox items in collapsible groups. Uses DsCheckbox component for each item. Includes search and action buttons."}}},render:function(){const[r,l]=D.useState(!1),[a,i]=D.useState(""),[n,m]=D.useState(new Set(["item1"])),b=[{id:"item1",label:"Menu text 1",description:"Info Text"},{id:"item2",label:"Menu text 2",description:"Info Text"}],d=[{id:"item3",label:"Menu text 3",description:"Info Text"},{id:"item4",label:"Menu text 4",description:"Info Text"},{id:"item5",label:"Menu text 5",description:"Info Text"},{id:"item6",label:"Menu text 6",description:"Info Text"},{id:"item7",label:"Menu text 7",description:"Info Text"}],k=b.filter(s=>s.label.toLowerCase().includes(a.toLowerCase())),C=d.filter(s=>s.label.toLowerCase().includes(a.toLowerCase())),I=s=>{const S=new Set(n);S.has(s)?S.delete(s):S.add(s),m(S)},p=()=>{console.log("Applied selections:",Array.from(n))},O=()=>{console.log("Cancelled"),l(!1),i("")};return e.jsxs(t.Root,{open:r,onOpenChange:l,onSelect:I,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[e.jsxs(t.Trigger,{className:"trigger fixedWidth",children:[e.jsxs("span",{children:["Multi Select (",n.size,")"]}),e.jsx(o,{icon:"arrow_drop_down"})]}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{children:e.jsx(B,{placeholder:"Search",value:a,onValueChange:i,onKeyDown:s=>s.stopPropagation(),slots:{startAdornment:e.jsx(o,{icon:"search",size:"tiny"})}})}),k.map(s=>e.jsxs(t.Item,{value:s.id,children:[e.jsx(L,{tabIndex:-1,checked:n.has(s.id),onCheckedChange:()=>I(s.id)}),e.jsxs("div",{className:"item-content",children:[e.jsx(g,{className:"item-label",variant:"body-sm-reg",children:s.label}),e.jsx(g,{className:"item-description",variant:"body-xs-reg",children:s.description})]})]},s.id)),!!C.length&&e.jsxs(t.ItemGroup,{children:[e.jsx(t.ItemGroupLabel,{children:"Group Name"}),e.jsx(t.ItemGroupContent,{children:C.map(s=>e.jsxs(t.Item,{value:s.id,children:[e.jsx(L,{tabIndex:-1,checked:n.has(s.id),onCheckedChange:()=>I(s.id)}),e.jsxs("div",{className:"item-content",children:[e.jsx(g,{className:"item-label",variant:"body-sm-reg",children:s.label}),e.jsx(g,{className:"item-description",variant:"body-xs-reg",children:s.description})]})]},s.id))})]}),e.jsxs(t.Actions,{children:[e.jsx(x,{design:"v1.2",buttonType:"secondary",size:"small",onClick:O,children:"Cancel"}),e.jsx(x,{design:"v1.2",buttonType:"primary",size:"small",onClick:p,children:"Apply"})]})]})]})},play:async({canvasElement:u})=>{const l=N(u).getByRole("button",{name:/Multi Select/i});await w.click(l);const a=await h.findByText("Group Name");await c(a).toBeInTheDocument();const i=a.closest("button");await c(i).toBeInTheDocument();const n=await h.findByText("keyboard_arrow_down");await c(n).toBeInTheDocument();const m=h.getByText("Menu text 3");await c(m).toBeVisible(),await w.click(i),await c(h.queryByText("Menu text 3")).not.toBeInTheDocument(),await c(h.queryByText("Menu text 4")).not.toBeInTheDocument(),await w.click(i),await c(h.getByText("Menu text 3")).toBeVisible(),await c(h.getByText("Menu text 4")).toBeVisible()}},f={name:"Collapsible Group (Controlled)",parameters:{docs:{description:{story:"The collapsed state is controlled externally via props, and the onCollapsedChange callback is triggered when the user clicks the group label."}}},render:function(r){const[l,a]=D.useState(!1),i=n=>{a(n),r.onCollapsedChange?.(n)};return e.jsxs(t.Root,{positioning:{sameWidth:!0},children:[e.jsxs(t.Trigger,{className:"trigger fixedWidth",children:[e.jsx("span",{children:"Controlled Group"}),e.jsx(o,{icon:"arrow_drop_down"})]}),e.jsx(t.Content,{children:e.jsxs(t.ItemGroup,{collapsed:l,onCollapsedChange:i,children:[e.jsx(t.ItemGroupLabel,{children:"Settings"}),e.jsxs(t.ItemGroupContent,{children:[e.jsxs(t.Item,{value:"profile",children:[e.jsx(o,{icon:"person"}),e.jsx("span",{children:"Profile"})]}),e.jsxs(t.Item,{value:"preferences",children:[e.jsx(o,{icon:"settings"}),e.jsx("span",{children:"Preferences"})]}),e.jsxs(t.Item,{value:"notifications",children:[e.jsx(o,{icon:"notifications"}),e.jsx("span",{children:"Notifications"})]})]})]})})]})},args:{onCollapsedChange:G()},play:async({canvasElement:u,args:r})=>{const a=N(u).getByRole("button",{name:/Controlled Group/i});await w.click(a);const i=await h.findByText("Settings");await c(i).toBeInTheDocument();const n=i.closest("button");await c(n).toBeInTheDocument();const m=await h.findByText("Profile");await c(m).toBeInTheDocument(),await w.click(n),await c(r.onCollapsedChange).toHaveBeenCalledWith(!0),await c(r.onCollapsedChange).toHaveBeenCalledTimes(1),await c(h.queryByText("Profile")).not.toBeInTheDocument(),await w.click(n),await c(r.onCollapsedChange).toHaveBeenCalledWith(!1),await c(r.onCollapsedChange).toHaveBeenCalledTimes(2),await c(await h.findByText("Profile")).toBeVisible()}},T={name:"Radio List with Actions",parameters:{docs:{description:{story:"Dropdown with radio items using DsRadioGroup. Single selection with search and action buttons. Blue background for selected items."}}},render:function(){const[r,l]=D.useState(!1),[a,i]=D.useState(""),[n,m]=D.useState(null),d=[{value:"option1",label:"Menu text 1",description:"Info Text"},{value:"option2",label:"Menu text 2",description:"Info Text"},{value:"option3",label:"Menu text 3",description:"Info Text"},{value:"option4",label:"Menu text 4",description:"Info Text"}].filter(p=>p.label.toLowerCase().includes(a.toLowerCase())),k=()=>{l(!1),console.log(`Applied: ${JSON.stringify(n)}`)},C=()=>{console.log("Cancelled"),l(!1),i("")},I=()=>{console.log("Reset"),m(""),l(!1),i("")};return e.jsxs(t.Root,{open:r,onOpenChange:l,onSelect:m,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[e.jsxs(t.Trigger,{className:"trigger fixedWidth",children:[e.jsx("span",{children:n||"Select an option"}),e.jsx(o,{icon:"arrow_drop_down"})]}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{children:e.jsx(B,{placeholder:"Search",value:a,onValueChange:i,onKeyDown:p=>p.stopPropagation(),slots:{startAdornment:e.jsx(o,{icon:"search",size:"tiny"})}})}),e.jsx(R.Root,{className:"radio-group",value:n,onValueChange:m,children:d.map(p=>e.jsxs(t.Item,{value:p.value,className:n===p.value?"radio-selected":"",children:[e.jsx(R.Item,{value:p.value}),e.jsxs("div",{className:"item-content",children:[e.jsx(g,{className:"item-label",variant:"body-sm-reg",children:p.label}),e.jsx(g,{className:"item-description",variant:"body-xs-reg",children:p.description})]})]},p.value))}),e.jsxs(t.Actions,{children:[e.jsx(x,{design:"v1.2",variant:"danger",size:"small",onClick:I,children:"Reset"}),e.jsx(x,{design:"v1.2",buttonType:"secondary",size:"small",onClick:C,children:"Cancel"}),e.jsx(x,{design:"v1.2",buttonType:"primary",size:"small",onClick:k,children:"Apply"})]})]})]})}},j={parameters:{docs:{description:{story:"Action Menu pattern from Figma design system demonstrating nested submenus. Features both full-size button and icon button variants. Menu items can trigger submenus using TriggerItem with right arrow indicators. Includes separators and danger-styled items for risky actions."}}},render:()=>{const u=()=>console.log("Edit clicked"),r=()=>console.log("Duplicate clicked"),l=()=>console.log("Share via Email clicked"),a=()=>console.log("Copy Link clicked"),i=()=>console.log("Share to Social Media clicked"),n=()=>console.log("Delete item clicked");return e.jsxs(t.Root,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(x,{design:"v1.2",buttonType:"secondary",children:e.jsx(o,{icon:"more_vert"})})}),e.jsxs(t.Content,{children:[e.jsxs(t.Item,{value:"edit",onSelect:u,children:[e.jsx(o,{icon:"edit"}),e.jsx("span",{children:"Edit"})]}),e.jsxs(t.Item,{value:"duplicate",onSelect:r,children:[e.jsx(o,{icon:"content_copy"}),e.jsx("span",{children:"Duplicate"})]}),e.jsxs(t.Root,{positioning:{placement:"right-start"},children:[e.jsxs(t.TriggerItem,{className:"action-menu-item",children:[e.jsx(o,{icon:"share"}),e.jsx("span",{children:"Share"})]}),e.jsxs(t.Content,{children:[e.jsxs(t.Item,{value:"share-email",onSelect:l,children:[e.jsx(o,{icon:"mail"}),e.jsx("span",{children:"Email"})]}),e.jsxs(t.Item,{value:"share-link",onSelect:a,children:[e.jsx(o,{icon:"link"}),e.jsx("span",{children:"Copy Link"})]}),e.jsxs(t.Item,{value:"share-social",onSelect:i,children:[e.jsx(o,{icon:"public"}),e.jsx("span",{children:"Social Media"})]})]})]}),e.jsx(t.Separator,{}),e.jsxs(t.Item,{value:"delete",onSelect:n,className:"danger",children:[e.jsx(o,{icon:"delete"}),e.jsx("span",{children:"Delete item"})]})]})]})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A basic dropdown menu with action items. Each item can have an icon and onSelect handler. Items can be disabled. Use separators to divide different action groups.'
      }
    }
  },
  render: () => {
    const handleEdit = () => console.log('Edit clicked');
    const handleDuplicate = () => console.log('Duplicate clicked');
    const handleShare = () => console.log('Share clicked');
    const handleDelete = () => console.log('Delete clicked');
    return <DsDropdownMenu.Root>
                <DsDropdownMenu.Trigger className="trigger">
                    <span>Actions</span>
                    <DsIcon icon="more_vert" />
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsDropdownMenu.Item value="edit" onSelect={handleEdit}>
                        <DsIcon icon="edit" />
                        <span>Edit</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Item value="duplicate" onSelect={handleDuplicate}>
                        <DsIcon icon="content_copy" />
                        <span>Duplicate</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Item value="share" onSelect={handleShare}>
                        <DsIcon icon="share" />
                        <span>Share</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Separator />
                    <DsDropdownMenu.Item value="delete" onSelect={handleDelete} className="danger">
                        <DsIcon icon="delete" />
                        <span>Delete</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Item value="disabled" disabled>
                        <DsIcon icon="block" />
                        <span>Disabled Option</span>
                    </DsDropdownMenu.Item>
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Selectable List with Search',
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with search functionality and selection tracking. Users can filter items and see which item is selected with a check indicator.'
      }
    }
  },
  render: function Render() {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState<string | undefined>('option1');
    const options = [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }, {
      value: 'option4',
      label: 'Option 4'
    }];
    const selectedOption = options.find(opt => opt.value === selected)?.label;
    const filteredOptions = options.filter(opt => opt.label.toLowerCase().includes(search.toLowerCase()));
    return <DsDropdownMenu.Root onSelect={setSelected} positioning={{
      sameWidth: true
    }}>
                <DsDropdownMenu.Trigger className="trigger fixedWidth">
                    <span>{selectedOption || 'Select an option'}</span>
                    <DsIcon icon="arrow_drop_down" />
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsDropdownMenu.Header>
                        <DsTextInput placeholder="Search" value={search} onValueChange={setSearch} onKeyDown={e => e.stopPropagation()} slots={{
            startAdornment: <DsIcon icon="search" size="tiny" />
          }} />
                    </DsDropdownMenu.Header>
                    {filteredOptions.map(option => <DsDropdownMenu.Item key={option.value} value={option.value} selected={selected === option.value}>
                            {option.label}
                            {selected === option.value && <DsDropdownMenu.ItemIndicator />}
                        </DsDropdownMenu.Item>)}
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  }
}`,...v.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Checkbox List with Groups',
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with checkbox items in collapsible groups. Uses DsCheckbox component for each item. Includes search and action buttons.'
      }
    }
  },
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState(new Set(['item1']));
    const items = [{
      id: 'item1',
      label: 'Menu text 1',
      description: 'Info Text'
    }, {
      id: 'item2',
      label: 'Menu text 2',
      description: 'Info Text'
    }];
    const groupedItems = [{
      id: 'item3',
      label: 'Menu text 3',
      description: 'Info Text'
    }, {
      id: 'item4',
      label: 'Menu text 4',
      description: 'Info Text'
    }, {
      id: 'item5',
      label: 'Menu text 5',
      description: 'Info Text'
    }, {
      id: 'item6',
      label: 'Menu text 6',
      description: 'Info Text'
    }, {
      id: 'item7',
      label: 'Menu text 7',
      description: 'Info Text'
    }];
    const filteredItems = items.filter(item => item.label.toLowerCase().includes(search.toLowerCase()));
    const filteredGroupedItems = groupedItems.filter(item => item.label.toLowerCase().includes(search.toLowerCase()));
    const toggleSelection = (id: string) => {
      const newSelected = new Set(selected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      setSelected(newSelected);
    };
    const handleApply = () => {
      console.log('Applied selections:', Array.from(selected));
    };
    const handleCancel = () => {
      console.log('Cancelled');
      setOpen(false);
      setSearch('');
    };
    return <DsDropdownMenu.Root open={open} onOpenChange={setOpen} onSelect={toggleSelection} positioning={{
      sameWidth: true
    }} preventCloseOnSelect>
                <DsDropdownMenu.Trigger className="trigger fixedWidth">
                    <span>Multi Select ({selected.size})</span>
                    <DsIcon icon="arrow_drop_down" />
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsDropdownMenu.Header>
                        <DsTextInput placeholder="Search" value={search} onValueChange={setSearch} onKeyDown={e => e.stopPropagation()} slots={{
            startAdornment: <DsIcon icon="search" size="tiny" />
          }} />
                    </DsDropdownMenu.Header>
                    {filteredItems.map(item => <DsDropdownMenu.Item key={item.id} value={item.id}>
                            <DsCheckbox tabIndex={-1} checked={selected.has(item.id)} onCheckedChange={() => toggleSelection(item.id)} />
                            <div className="item-content">
                                <DsTypography className="item-label" variant="body-sm-reg">
                                    {item.label}
                                </DsTypography>
                                <DsTypography className="item-description" variant="body-xs-reg">
                                    {item.description}
                                </DsTypography>
                            </div>
                        </DsDropdownMenu.Item>)}
                    {!!filteredGroupedItems.length && <DsDropdownMenu.ItemGroup>
                            <DsDropdownMenu.ItemGroupLabel>Group Name</DsDropdownMenu.ItemGroupLabel>
                            <DsDropdownMenu.ItemGroupContent>
                                {filteredGroupedItems.map(item => <DsDropdownMenu.Item key={item.id} value={item.id}>
                                        <DsCheckbox tabIndex={-1} checked={selected.has(item.id)} onCheckedChange={() => toggleSelection(item.id)} />
                                        <div className="item-content">
                                            <DsTypography className="item-label" variant="body-sm-reg">
                                                {item.label}
                                            </DsTypography>
                                            <DsTypography className="item-description" variant="body-xs-reg">
                                                {item.description}
                                            </DsTypography>
                                        </div>
                                    </DsDropdownMenu.Item>)}
                            </DsDropdownMenu.ItemGroupContent>
                        </DsDropdownMenu.ItemGroup>}
                    <DsDropdownMenu.Actions>
                        <DsButton design="v1.2" buttonType="secondary" size="small" onClick={handleCancel}>
                            Cancel
                        </DsButton>
                        <DsButton design="v1.2" buttonType="primary" size="small" onClick={handleApply}>
                            Apply
                        </DsButton>
                    </DsDropdownMenu.Actions>
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /Multi Select/i
    });
    await userEvent.click(trigger);
    const groupLabelText = await screen.findByText('Group Name');
    await expect(groupLabelText).toBeInTheDocument();
    const groupLabel = groupLabelText.closest('button') as HTMLElement;
    await expect(groupLabel).toBeInTheDocument();
    const collapseIcon = await screen.findByText('keyboard_arrow_down');
    await expect(collapseIcon).toBeInTheDocument();
    const groupItem = screen.getByText('Menu text 3');
    await expect(groupItem).toBeVisible();
    await userEvent.click(groupLabel);
    await expect(screen.queryByText('Menu text 3')).not.toBeInTheDocument();
    await expect(screen.queryByText('Menu text 4')).not.toBeInTheDocument();
    await userEvent.click(groupLabel);
    await expect(screen.getByText('Menu text 3')).toBeVisible();
    await expect(screen.getByText('Menu text 4')).toBeVisible();
  }
}`,...M.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Collapsible Group (Controlled)',
  parameters: {
    docs: {
      description: {
        story: 'The collapsed state is controlled externally via props, and the onCollapsedChange callback is triggered when the user clicks the group label.'
      }
    }
  },
  render: function Render(args) {
    const [collapsed, setCollapsed] = useState(false);
    const handleCollapsedChange = (newCollapsed: boolean) => {
      setCollapsed(newCollapsed);
      args.onCollapsedChange?.(newCollapsed);
    };
    return <DsDropdownMenu.Root positioning={{
      sameWidth: true
    }}>
                <DsDropdownMenu.Trigger className="trigger fixedWidth">
                    <span>Controlled Group</span>
                    <DsIcon icon="arrow_drop_down" />
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsDropdownMenu.ItemGroup collapsed={collapsed} onCollapsedChange={handleCollapsedChange}>
                        <DsDropdownMenu.ItemGroupLabel>Settings</DsDropdownMenu.ItemGroupLabel>
                        <DsDropdownMenu.ItemGroupContent>
                            <DsDropdownMenu.Item value="profile">
                                <DsIcon icon="person" />
                                <span>Profile</span>
                            </DsDropdownMenu.Item>
                            <DsDropdownMenu.Item value="preferences">
                                <DsIcon icon="settings" />
                                <span>Preferences</span>
                            </DsDropdownMenu.Item>
                            <DsDropdownMenu.Item value="notifications">
                                <DsIcon icon="notifications" />
                                <span>Notifications</span>
                            </DsDropdownMenu.Item>
                        </DsDropdownMenu.ItemGroupContent>
                    </DsDropdownMenu.ItemGroup>
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  },
  args: {
    onCollapsedChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /Controlled Group/i
    });
    await userEvent.click(trigger);
    const groupLabelText = await screen.findByText('Settings');
    await expect(groupLabelText).toBeInTheDocument();
    const groupLabel = groupLabelText.closest('button') as HTMLElement;
    await expect(groupLabel).toBeInTheDocument();
    const profileItem = await screen.findByText('Profile');
    await expect(profileItem).toBeInTheDocument();
    await userEvent.click(groupLabel);
    await expect(args.onCollapsedChange).toHaveBeenCalledWith(true);
    await expect(args.onCollapsedChange).toHaveBeenCalledTimes(1);
    await expect(screen.queryByText('Profile')).not.toBeInTheDocument();
    await userEvent.click(groupLabel);
    await expect(args.onCollapsedChange).toHaveBeenCalledWith(false);
    await expect(args.onCollapsedChange).toHaveBeenCalledTimes(2);
    await expect(await screen.findByText('Profile')).toBeVisible();
  }
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Radio List with Actions',
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with radio items using DsRadioGroup. Single selection with search and action buttons. Blue background for selected items.'
      }
    }
  },
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [tempSelected, setTempSelected] = useState<string | null>(null);
    const options = [{
      value: 'option1',
      label: 'Menu text 1',
      description: 'Info Text'
    }, {
      value: 'option2',
      label: 'Menu text 2',
      description: 'Info Text'
    }, {
      value: 'option3',
      label: 'Menu text 3',
      description: 'Info Text'
    }, {
      value: 'option4',
      label: 'Menu text 4',
      description: 'Info Text'
    }];
    const filteredOptions = options.filter(opt => opt.label.toLowerCase().includes(search.toLowerCase()));
    const handleApply = () => {
      setOpen(false);
      console.log(\`Applied: \${JSON.stringify(tempSelected)}\`);
    };
    const handleCancel = () => {
      console.log('Cancelled');
      setOpen(false);
      setSearch('');
    };
    const handleReset = () => {
      console.log('Reset');
      setTempSelected('');
      setOpen(false);
      setSearch('');
    };
    return <DsDropdownMenu.Root open={open} onOpenChange={setOpen} onSelect={setTempSelected} positioning={{
      sameWidth: true
    }} preventCloseOnSelect>
                <DsDropdownMenu.Trigger className="trigger fixedWidth">
                    <span>{tempSelected || 'Select an option'}</span>
                    <DsIcon icon="arrow_drop_down" />
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsDropdownMenu.Header>
                        <DsTextInput placeholder="Search" value={search} onValueChange={setSearch} onKeyDown={e => e.stopPropagation()} slots={{
            startAdornment: <DsIcon icon="search" size="tiny" />
          }} />
                    </DsDropdownMenu.Header>
                    <DsRadioGroup.Root className="radio-group" value={tempSelected} onValueChange={setTempSelected}>
                        {filteredOptions.map(option => <DsDropdownMenu.Item key={option.value} value={option.value} className={tempSelected === option.value ? 'radio-selected' : ''}>
                                <DsRadioGroup.Item value={option.value} />
                                <div className="item-content">
                                    <DsTypography className="item-label" variant="body-sm-reg">
                                        {option.label}
                                    </DsTypography>
                                    <DsTypography className="item-description" variant="body-xs-reg">
                                        {option.description}
                                    </DsTypography>
                                </div>
                            </DsDropdownMenu.Item>)}
                    </DsRadioGroup.Root>
                    <DsDropdownMenu.Actions>
                        <DsButton design="v1.2" variant="danger" size="small" onClick={handleReset}>
                            Reset
                        </DsButton>
                        <DsButton design="v1.2" buttonType="secondary" size="small" onClick={handleCancel}>
                            Cancel
                        </DsButton>
                        <DsButton design="v1.2" buttonType="primary" size="small" onClick={handleApply}>
                            Apply
                        </DsButton>
                    </DsDropdownMenu.Actions>
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Action Menu pattern from Figma design system demonstrating nested submenus. Features both full-size button and icon button variants. Menu items can trigger submenus using TriggerItem with right arrow indicators. Includes separators and danger-styled items for risky actions.'
      }
    }
  },
  render: () => {
    const handleEdit = () => console.log('Edit clicked');
    const handleDuplicate = () => console.log('Duplicate clicked');
    const handleShareEmail = () => console.log('Share via Email clicked');
    const handleShareLink = () => console.log('Copy Link clicked');
    const handleShareSocial = () => console.log('Share to Social Media clicked');
    const handleDelete = () => console.log('Delete item clicked');
    return <DsDropdownMenu.Root>
                <DsDropdownMenu.Trigger asChild>
                    <DsButton design="v1.2" buttonType="secondary">
                        <DsIcon icon="more_vert" />
                    </DsButton>
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsDropdownMenu.Item value="edit" onSelect={handleEdit}>
                        <DsIcon icon="edit" />
                        <span>Edit</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Item value="duplicate" onSelect={handleDuplicate}>
                        <DsIcon icon="content_copy" />
                        <span>Duplicate</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Root positioning={{
          placement: 'right-start'
        }}>
                        <DsDropdownMenu.TriggerItem className="action-menu-item">
                            <DsIcon icon="share" />
                            <span>Share</span>
                        </DsDropdownMenu.TriggerItem>
                        <DsDropdownMenu.Content>
                            <DsDropdownMenu.Item value="share-email" onSelect={handleShareEmail}>
                                <DsIcon icon="mail" />
                                <span>Email</span>
                            </DsDropdownMenu.Item>
                            <DsDropdownMenu.Item value="share-link" onSelect={handleShareLink}>
                                <DsIcon icon="link" />
                                <span>Copy Link</span>
                            </DsDropdownMenu.Item>
                            <DsDropdownMenu.Item value="share-social" onSelect={handleShareSocial}>
                                <DsIcon icon="public" />
                                <span>Social Media</span>
                            </DsDropdownMenu.Item>
                        </DsDropdownMenu.Content>
                    </DsDropdownMenu.Root>
                    <DsDropdownMenu.Separator />
                    <DsDropdownMenu.Item value="delete" onSelect={handleDelete} className="danger">
                        <DsIcon icon="delete" />
                        <span>Delete item</span>
                    </DsDropdownMenu.Item>
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  }
}`,...j.parameters?.docs?.source}}};const xe=["Default","SelectableList","CheckboxList","CollapsibleGroupControlled","RadioList","ActionMenu"];export{j as ActionMenu,M as CheckboxList,f as CollapsibleGroupControlled,y as Default,T as RadioList,v as SelectableList,xe as __namedExportsOrder,ge as default};
