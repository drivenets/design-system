import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DLMDGCUl.js";import{a as n}from"./ds-dropdown-menu-BO5xW2Ax.js";import{D as t}from"./ds-icon-DahQ-ftt.js";import{D as j}from"./ds-text-input-CGLbEP-v.js";import{D as C}from"./ds-checkbox-BFxN5nnb.js";import{D as h}from"./ds-typography-BE9vI6-J.js";import{D}from"./ds-button-Th9pp1mU.js";import{D as k}from"./ds-radio-group-DzwQzMku.js";/* empty css                                 */import"./preload-helper-PPVm8Dsz.js";import"./index-Ccoi4OM8.js";import"./index-_lRCdW41.js";import"./index-CXuil9IB.js";import"./index-H_XcGL9U.js";import"./index-wK_2Xdwh.js";import"./Combination-CHa5CDef.js";import"./index-DU4jNjNk.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-BK68o3fZ.js";import"./index-BXejAFVA.js";import"./index-CZjfX2qz.js";import"./portal-CwCYN8ZL.js";import"./create-split-props-u5h9OPvL.js";import"./index-BiDlDip1.js";import"./use-locale-context-DHYoAyl8.js";import"./use-presence-o92RzSjt.js";import"./index-Dg000g9R.js";import"./index-JG2nMdqM.js";import"./index-CCOlAiJE.js";import"./ds-button-legacy-8uD__cm1.js";import"./ds-button-new-Cimz2Z-c.js";import"./index-VSan72Ph.js";import"./index-BF-1Gui2.js";const de={title:"Design System/DropdownMenu",parameters:{layout:"centered"},tags:["autodocs"]},b={parameters:{docs:{description:{story:"A basic dropdown menu with action items. Each item can have an icon and onSelect handler. Items can be disabled. Use separators to divide different action groups."}}},render:()=>{const m=()=>console.log("Edit clicked"),c=()=>console.log("Duplicate clicked"),r=()=>console.log("Share clicked"),i=()=>console.log("Delete clicked");return e.jsxs(n.Root,{children:[e.jsxs(n.Trigger,{className:"trigger",children:[e.jsx("span",{children:"Actions"}),e.jsx(t,{icon:"more_vert"})]}),e.jsxs(n.Content,{children:[e.jsxs(n.Item,{value:"edit",onSelect:m,children:[e.jsx(t,{icon:"edit"}),e.jsx("span",{children:"Edit"})]}),e.jsxs(n.Item,{value:"duplicate",onSelect:c,children:[e.jsx(t,{icon:"content_copy"}),e.jsx("span",{children:"Duplicate"})]}),e.jsxs(n.Item,{value:"share",onSelect:r,children:[e.jsx(t,{icon:"share"}),e.jsx("span",{children:"Share"})]}),e.jsx(n.Separator,{}),e.jsxs(n.Item,{value:"delete",onSelect:i,className:"danger",children:[e.jsx(t,{icon:"delete"}),e.jsx("span",{children:"Delete"})]}),e.jsxs(n.Item,{value:"disabled",disabled:!0,children:[e.jsx(t,{icon:"block"}),e.jsx("span",{children:"Disabled Option"})]})]})]})}},I={name:"Selectable List with Search",parameters:{docs:{description:{story:"Dropdown with search functionality and selection tracking. Users can filter items and see which item is selected with a check indicator."}}},render:function(){const[c,r]=p.useState(""),[i,d]=p.useState("option1"),s=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],u=s.find(a=>a.value===i)?.label,x=s.filter(a=>a.label.toLowerCase().includes(c.toLowerCase()));return e.jsxs(n.Root,{onSelect:d,positioning:{sameWidth:!0},children:[e.jsxs(n.Trigger,{className:"trigger fixedWidth",children:[e.jsx("span",{children:u||"Select an option"}),e.jsx(t,{icon:"arrow_drop_down"})]}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:e.jsx(j,{placeholder:"Search",value:c,onValueChange:r,onKeyDown:a=>a.stopPropagation(),slots:{startAdornment:e.jsx(t,{icon:"search",size:"tiny"})}})}),x.map(a=>e.jsxs(n.Item,{value:a.value,selected:i===a.value,children:[a.label,i===a.value&&e.jsx(n.ItemIndicator,{})]},a.value))]})]})}},v={name:"Checkbox List with Groups",parameters:{docs:{description:{story:"Dropdown with checkbox items in collapsible groups. Uses DsCheckbox component for each item. Includes search and action buttons."}}},render:function(){const[c,r]=p.useState(!1),[i,d]=p.useState(""),[s,u]=p.useState(new Set(["item1"])),x=[{id:"item1",label:"Menu text 1",description:"Info Text"},{id:"item2",label:"Menu text 2",description:"Info Text"}],a=[{id:"item3",label:"Menu text 3",description:"Info Text"},{id:"item4",label:"Menu text 4",description:"Info Text"},{id:"item5",label:"Menu text 5",description:"Info Text"},{id:"item6",label:"Menu text 6",description:"Info Text"},{id:"item7",label:"Menu text 7",description:"Info Text"}],f=x.filter(o=>o.label.toLowerCase().includes(i.toLowerCase())),w=a.filter(o=>o.label.toLowerCase().includes(i.toLowerCase())),g=o=>{const S=new Set(s);S.has(o)?S.delete(o):S.add(o),u(S)},l=()=>{console.log("Applied selections:",Array.from(s))},T=()=>{console.log("Cancelled"),r(!1),d("")};return e.jsxs(n.Root,{open:c,onOpenChange:r,onSelect:g,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[e.jsxs(n.Trigger,{className:"trigger fixedWidth",children:[e.jsxs("span",{children:["Multi Select (",s.size,")"]}),e.jsx(t,{icon:"arrow_drop_down"})]}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:e.jsx(j,{placeholder:"Search",value:i,onValueChange:d,onKeyDown:o=>o.stopPropagation(),slots:{startAdornment:e.jsx(t,{icon:"search",size:"tiny"})}})}),f.map(o=>e.jsxs(n.Item,{value:o.id,children:[e.jsx(C,{tabIndex:-1,checked:s.has(o.id),onCheckedChange:()=>g(o.id)}),e.jsxs("div",{className:"item-content",children:[e.jsx(h,{className:"item-label",variant:"body-sm-reg",children:o.label}),e.jsx(h,{className:"item-description",variant:"body-xs-reg",children:o.description})]})]},o.id)),!!w.length&&e.jsxs(n.ItemGroup,{children:[e.jsx(n.ItemGroupLabel,{children:"Group Name"}),e.jsx(n.ItemGroupContent,{children:w.map(o=>e.jsxs(n.Item,{value:o.id,children:[e.jsx(C,{tabIndex:-1,checked:s.has(o.id),onCheckedChange:()=>g(o.id)}),e.jsxs("div",{className:"item-content",children:[e.jsx(h,{className:"item-label",variant:"body-sm-reg",children:o.label}),e.jsx(h,{className:"item-description",variant:"body-xs-reg",children:o.description})]})]},o.id))})]}),e.jsxs(n.Actions,{children:[e.jsx(D,{design:"v1.2",buttonType:"secondary",size:"small",onClick:T,children:"Cancel"}),e.jsx(D,{design:"v1.2",buttonType:"primary",size:"small",onClick:l,children:"Apply"})]})]})]})}},M={name:"Radio List with Actions",parameters:{docs:{description:{story:"Dropdown with radio items using DsRadioGroup. Single selection with search and action buttons. Blue background for selected items."}}},render:function(){const[c,r]=p.useState(!1),[i,d]=p.useState(""),[s,u]=p.useState(null),a=[{value:"option1",label:"Menu text 1",description:"Info Text"},{value:"option2",label:"Menu text 2",description:"Info Text"},{value:"option3",label:"Menu text 3",description:"Info Text"},{value:"option4",label:"Menu text 4",description:"Info Text"}].filter(l=>l.label.toLowerCase().includes(i.toLowerCase())),f=()=>{r(!1),console.log(`Applied: ${JSON.stringify(s)}`)},w=()=>{console.log("Cancelled"),r(!1),d("")},g=()=>{console.log("Reset"),u(""),r(!1),d("")};return e.jsxs(n.Root,{open:c,onOpenChange:r,onSelect:u,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[e.jsxs(n.Trigger,{className:"trigger fixedWidth",children:[e.jsx("span",{children:s||"Select an option"}),e.jsx(t,{icon:"arrow_drop_down"})]}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:e.jsx(j,{placeholder:"Search",value:i,onValueChange:d,onKeyDown:l=>l.stopPropagation(),slots:{startAdornment:e.jsx(t,{icon:"search",size:"tiny"})}})}),e.jsx(k.Root,{className:"radio-group",value:s,onValueChange:u,children:a.map(l=>e.jsxs(n.Item,{value:l.value,className:s===l.value?"radio-selected":"",children:[e.jsx(k.Item,{value:l.value}),e.jsxs("div",{className:"item-content",children:[e.jsx(h,{className:"item-label",variant:"body-sm-reg",children:l.label}),e.jsx(h,{className:"item-description",variant:"body-xs-reg",children:l.description})]})]},l.value))}),e.jsxs(n.Actions,{children:[e.jsx(D,{design:"v1.2",variant:"danger",size:"small",onClick:g,children:"Reset"}),e.jsx(D,{design:"v1.2",buttonType:"secondary",size:"small",onClick:w,children:"Cancel"}),e.jsx(D,{design:"v1.2",buttonType:"primary",size:"small",onClick:f,children:"Apply"})]})]})]})}},y={parameters:{docs:{description:{story:"Action Menu pattern from Figma design system demonstrating nested submenus. Features both full-size button and icon button variants. Menu items can trigger submenus using TriggerItem with right arrow indicators. Includes separators and danger-styled items for risky actions."}}},render:()=>{const m=()=>console.log("Edit clicked"),c=()=>console.log("Duplicate clicked"),r=()=>console.log("Share via Email clicked"),i=()=>console.log("Copy Link clicked"),d=()=>console.log("Share to Social Media clicked"),s=()=>console.log("Delete item clicked");return e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx(D,{design:"v1.2",buttonType:"secondary",children:e.jsx(t,{icon:"more_vert"})})}),e.jsxs(n.Content,{children:[e.jsxs(n.Item,{value:"edit",onSelect:m,children:[e.jsx(t,{icon:"edit"}),e.jsx("span",{children:"Edit"})]}),e.jsxs(n.Item,{value:"duplicate",onSelect:c,children:[e.jsx(t,{icon:"content_copy"}),e.jsx("span",{children:"Duplicate"})]}),e.jsxs(n.Root,{positioning:{placement:"right-start"},children:[e.jsxs(n.TriggerItem,{className:"action-menu-item",children:[e.jsx(t,{icon:"share"}),e.jsx("span",{children:"Share"})]}),e.jsxs(n.Content,{children:[e.jsxs(n.Item,{value:"share-email",onSelect:r,children:[e.jsx(t,{icon:"mail"}),e.jsx("span",{children:"Email"})]}),e.jsxs(n.Item,{value:"share-link",onSelect:i,children:[e.jsx(t,{icon:"link"}),e.jsx("span",{children:"Copy Link"})]}),e.jsxs(n.Item,{value:"share-social",onSelect:d,children:[e.jsx(t,{icon:"public"}),e.jsx("span",{children:"Social Media"})]})]})]}),e.jsx(n.Separator,{}),e.jsxs(n.Item,{value:"delete",onSelect:s,className:"danger",children:[e.jsx(t,{icon:"delete"}),e.jsx("span",{children:"Delete item"})]})]})]})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
  }
}`,...v.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const pe=["Default","SelectableList","CheckboxList","RadioList","ActionMenu"];export{y as ActionMenu,v as CheckboxList,b as Default,M as RadioList,I as SelectableList,pe as __namedExportsOrder,de as default};
