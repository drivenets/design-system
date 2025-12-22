import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-CrKoyclE.js";import{a as t}from"./ds-dropdown-menu-CY8EQ7mF.js";import{D as r}from"./ds-icon-B3VL92JP.js";import{D as C}from"./ds-text-input-tm9Sihjv.js";import{D as M}from"./ds-checkbox-C7M8CFkQ.js";import{D as m}from"./ds-typography-NpA8sy-N.js";import{D}from"./ds-button-CJk72Ddc.js";import{D as j}from"./ds-radio-group-BfwX2Vjb.js";/* empty css                                 */import"./preload-helper-PPVm8Dsz.js";import"./index-bm4-Gj90.js";import"./index-zpfBgx4-.js";import"./index-BR9ujVP8.js";import"./index-BpBDy8QV.js";import"./index-Bue7XJyq.js";import"./Combination-BHgmgM-w.js";import"./index-UC1doAsX.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-ok7lY3Kn.js";import"./index-C7FJVLc0.js";import"./index-B7MZ7Dst.js";import"./portal-DacfcflF.js";import"./create-split-props-u5h9OPvL.js";import"./index-BaVJ3Qd-.js";import"./use-locale-context-DHT2xEWG.js";import"./use-presence-N_OTFOi1.js";import"./index-BibYMVKi.js";import"./index-DuqyvYPX.js";import"./index-B5DP01bl.js";import"./ds-button-legacy-BVY0W3Vi.js";import"./ds-button-new-7hDcZWeC.js";const re={title:"Design System/DropdownMenu",parameters:{layout:"centered"},tags:["autodocs"]},S={parameters:{docs:{description:{story:"A basic dropdown menu with action items. Each item can have an icon and onSelect handler. Items can be disabled. Use separators to divide different action groups."}}},render:()=>{const g=()=>console.log("Edit clicked"),c=()=>console.log("Duplicate clicked"),l=()=>console.log("Share clicked"),a=()=>console.log("Delete clicked");return e.jsxs(t.Root,{children:[e.jsxs(t.Trigger,{className:"trigger",children:[e.jsx("span",{children:"Actions"}),e.jsx(r,{icon:"more_vert"})]}),e.jsxs(t.Content,{children:[e.jsxs(t.Item,{value:"edit",onSelect:g,children:[e.jsx(r,{icon:"edit"}),e.jsx("span",{children:"Edit"})]}),e.jsxs(t.Item,{value:"duplicate",onSelect:c,children:[e.jsx(r,{icon:"content_copy"}),e.jsx("span",{children:"Duplicate"})]}),e.jsxs(t.Item,{value:"share",onSelect:l,children:[e.jsx(r,{icon:"share"}),e.jsx("span",{children:"Share"})]}),e.jsx(t.Separator,{}),e.jsxs(t.Item,{value:"delete",onSelect:a,className:"danger",children:[e.jsx(r,{icon:"delete"}),e.jsx("span",{children:"Delete"})]}),e.jsxs(t.Item,{value:"disabled",disabled:!0,children:[e.jsx(r,{icon:"block"}),e.jsx("span",{children:"Disabled Option"})]})]})]})}},v={name:"Selectable List with Search",parameters:{docs:{description:{story:"Dropdown with search functionality and selection tracking. Users can filter items and see which item is selected with a check indicator."}}},render:function(){const[c,l]=p.useState(""),[a,d]=p.useState("option1"),s=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],u=s.find(n=>n.value===a)?.label,x=s.filter(n=>n.label.toLowerCase().includes(c.toLowerCase()));return e.jsxs(t.Root,{onSelect:d,positioning:{sameWidth:!0},children:[e.jsxs(t.Trigger,{className:"trigger fixedWidth",children:[e.jsx("span",{children:u||"Select an option"}),e.jsx(r,{icon:"arrow_drop_down"})]}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{children:e.jsx(C,{placeholder:"Search",value:c,onValueChange:l,onKeyDown:n=>n.stopPropagation(),slots:{startAdornment:e.jsx(r,{icon:"search",size:"tiny"})}})}),x.map(n=>e.jsxs(t.Item,{value:n.value,selected:a===n.value,children:[n.label,a===n.value&&e.jsx(t.ItemIndicator,{})]},n.value))]})]})}},f={name:"Checkbox List with Groups",parameters:{docs:{description:{story:"Dropdown with checkbox items in collapsible groups. Uses DsCheckbox component for each item. Includes search and action buttons."}}},render:function(){const[c,l]=p.useState(!1),[a,d]=p.useState(""),[s,u]=p.useState(new Set(["item1"])),x=[{id:"item1",label:"Menu text 1",description:"Info Text"},{id:"item2",label:"Menu text 2",description:"Info Text"}],n=[{id:"item3",label:"Menu text 3",description:"Info Text"},{id:"item4",label:"Menu text 4",description:"Info Text"},{id:"item5",label:"Menu text 5",description:"Info Text"},{id:"item6",label:"Menu text 6",description:"Info Text"},{id:"item7",label:"Menu text 7",description:"Info Text"}],y=x.filter(o=>o.label.toLowerCase().includes(a.toLowerCase())),w=n.filter(o=>o.label.toLowerCase().includes(a.toLowerCase())),h=o=>{const b=new Set(s);b.has(o)?b.delete(o):b.add(o),u(b)},i=()=>{console.log("Applied selections:",Array.from(s))},T=()=>{console.log("Cancelled"),l(!1),d("")};return e.jsxs(t.Root,{open:c,onOpenChange:l,onSelect:h,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[e.jsxs(t.Trigger,{className:"trigger fixedWidth",children:[e.jsxs("span",{children:["Multi Select (",s.size,")"]}),e.jsx(r,{icon:"arrow_drop_down"})]}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{children:e.jsx(C,{placeholder:"Search",value:a,onValueChange:d,onKeyDown:o=>o.stopPropagation(),slots:{startAdornment:e.jsx(r,{icon:"search",size:"tiny"})}})}),y.map(o=>e.jsxs(t.Item,{value:o.id,children:[e.jsx(M,{tabIndex:-1,checked:s.has(o.id),onCheckedChange:()=>h(o.id)}),e.jsxs("div",{className:"item-content",children:[e.jsx(m,{className:"item-label",variant:"body-sm-reg",children:o.label}),e.jsx(m,{className:"item-description",variant:"body-xs-reg",children:o.description})]})]},o.id)),!!w.length&&e.jsxs(t.ItemGroup,{children:[e.jsx(t.ItemGroupLabel,{children:"Group Name"}),e.jsx(t.ItemGroupContent,{children:w.map(o=>e.jsxs(t.Item,{value:o.id,children:[e.jsx(M,{tabIndex:-1,checked:s.has(o.id),onCheckedChange:()=>h(o.id)}),e.jsxs("div",{className:"item-content",children:[e.jsx(m,{className:"item-label",variant:"body-sm-reg",children:o.label}),e.jsx(m,{className:"item-description",variant:"body-xs-reg",children:o.description})]})]},o.id))})]}),e.jsxs(t.Actions,{children:[e.jsx(D,{design:"v1.2",buttonType:"secondary",size:"small",onClick:T,children:"Cancel"}),e.jsx(D,{design:"v1.2",buttonType:"primary",size:"small",onClick:i,children:"Apply"})]})]})]})}},I={name:"Radio List with Actions",parameters:{docs:{description:{story:"Dropdown with radio items using DsRadioGroup. Single selection with search and action buttons. Blue background for selected items."}}},render:function(){const[c,l]=p.useState(!1),[a,d]=p.useState(""),[s,u]=p.useState(null),n=[{value:"option1",label:"Menu text 1",description:"Info Text"},{value:"option2",label:"Menu text 2",description:"Info Text"},{value:"option3",label:"Menu text 3",description:"Info Text"},{value:"option4",label:"Menu text 4",description:"Info Text"}].filter(i=>i.label.toLowerCase().includes(a.toLowerCase())),y=()=>{l(!1),console.log(`Applied: ${JSON.stringify(s)}`)},w=()=>{console.log("Cancelled"),l(!1),d("")},h=()=>{console.log("Reset"),u(""),l(!1),d("")};return e.jsxs(t.Root,{open:c,onOpenChange:l,onSelect:u,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[e.jsxs(t.Trigger,{className:"trigger fixedWidth",children:[e.jsx("span",{children:s||"Select an option"}),e.jsx(r,{icon:"arrow_drop_down"})]}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{children:e.jsx(C,{placeholder:"Search",value:a,onValueChange:d,onKeyDown:i=>i.stopPropagation(),slots:{startAdornment:e.jsx(r,{icon:"search",size:"tiny"})}})}),e.jsx(j.Root,{className:"radio-group",value:s,onValueChange:u,children:n.map(i=>e.jsxs(t.Item,{value:i.value,className:s===i.value?"radio-selected":"",children:[e.jsx(j.Item,{value:i.value}),e.jsxs("div",{className:"item-content",children:[e.jsx(m,{className:"item-label",variant:"body-sm-reg",children:i.label}),e.jsx(m,{className:"item-description",variant:"body-xs-reg",children:i.description})]})]},i.value))}),e.jsxs(t.Actions,{children:[e.jsx(D,{design:"v1.2",variant:"danger",size:"small",onClick:h,children:"Reset"}),e.jsx(D,{design:"v1.2",buttonType:"secondary",size:"small",onClick:w,children:"Cancel"}),e.jsx(D,{design:"v1.2",buttonType:"primary",size:"small",onClick:y,children:"Apply"})]})]})]})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const le=["Default","SelectableList","CheckboxList","RadioList"];export{f as CheckboxList,S as Default,I as RadioList,v as SelectableList,le as __namedExportsOrder,re as default};
