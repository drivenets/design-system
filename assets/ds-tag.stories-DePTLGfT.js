import{j as y}from"./jsx-runtime-u17CrQMm.js";import{r as w}from"./iframe-B2oe-xAg.js";import{D as x}from"./ds-tag-Cwhlsb52.js";import{D as b}from"./ds-icon-BhO764TM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LPV9uRn0.js";import"./ds-typography-ChGmLcT1.js";import"./index-COONa7JH.js";import"./index-DgHThz7K.js";const B=["medium","small"],h=["default","include","exclude"],{expect:t,fn:l,userEvent:o,waitFor:v,within:s}=__STORYBOOK_MODULE_TEST__,L={title:"Design System/Tag",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label text to display in the tag"},size:{control:"select",options:B,description:"Size of the tag"},variant:{control:"select",options:h,description:"Variant of the tag"},selected:{control:"boolean",description:"Whether the tag is in a selected state"},disabled:{control:"boolean",description:"Whether the tag is disabled"},onClick:{action:"changed",description:"Function called when clicked"},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},r={args:{label:"Default Tag",onClick:void 0},play:async({canvasElement:a})=>{const e=s(a);await t(e.getByText("Default Tag")).toBeInTheDocument()}},i={args:{label:"Clickable Tag",onClick:l()},play:async({args:a,canvasElement:e})=>{const c=s(e).getByText("Clickable Tag");await t(c).toBeInTheDocument(),await o.click(c),await t(a.onClick).toHaveBeenCalledTimes(1),await o.click(c),await t(a.onClick).toHaveBeenCalledTimes(2)}},d={render:function(){const[e,n]=w.useState(!1),[c,D]=w.useState(!0);return e?y.jsx("span",{children:"Poof! Deleted!"}):y.jsx(x,{selected:c,label:"Controlled",onDelete:()=>n(!0),onClick:()=>D(!c)})},play:async({canvasElement:a})=>{const e=s(a),n=e.getByLabelText("Controlled");await t(n).toHaveAttribute("aria-pressed","true"),await o.click(n),await v(async()=>{await t(n).not.toHaveAttribute("aria-pressed")}),await o.click(n),await v(async()=>{await t(n).toHaveAttribute("aria-pressed","true")});const c=e.getByLabelText("Delete tag");await o.click(c),await v(async()=>{await t(e.getByText("Poof! Deleted!")).toBeInTheDocument()})}},u={args:{label:"Include Tag",variant:"include",onDelete:l()},play:async({canvasElement:a})=>{const e=s(a);await t(e.getByText("Include Tag")).toBeInTheDocument(),await t(e.getByText("check_circle")).toBeInTheDocument()}},g={args:{label:"Exclude Tag",variant:"exclude",onDelete:l()},play:async({canvasElement:a})=>{const e=s(a);await t(e.getByText("Exclude Tag")).toBeInTheDocument(),await t(e.getByText("do_not_disturb_on")).toBeInTheDocument()}},m={args:{label:"Small Tag",size:"small"}},p={args:{label:"Disabled Tag",selected:!0,disabled:!0,onClick:l(),onDelete:l()},play:async({args:a,canvasElement:e})=>{const n=s(e),c=n.getByText("Disabled Tag");await t(c).toBeInTheDocument(),await t(n.queryByLabelText("Delete tag")).not.toBeInTheDocument(),await o.click(c,{pointerEventsCheck:0}),await t(a.onClick).not.toHaveBeenCalled()}},T={args:{label:"Custom Icon Tag",variant:"include",slots:{icon:y.jsx(b,{icon:"star",size:"tiny"})}},play:async({canvasElement:a})=>{const e=s(a);await t(e.getByText("Custom Icon Tag")).toBeInTheDocument(),await t(e.getByText("star")).toBeInTheDocument(),await t(e.queryByText("check_circle")).not.toBeInTheDocument()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Tag',
    onClick: undefined
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Default Tag')).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Clickable Tag',
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tag = canvas.getByText('Clickable Tag');
    await expect(tag).toBeInTheDocument();

    // Click triggers onClick
    await userEvent.click(tag);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await userEvent.click(tag);
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [deleted, setDeleted] = useState(false);
    const [selected, setSelected] = useState(true);
    if (deleted) {
      return <span>Poof! Deleted!</span>;
    }
    return <DsTag selected={selected} label="Controlled" onDelete={() => setDeleted(true)} onClick={() => setSelected(!selected)} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tag = canvas.getByLabelText('Controlled');
    await expect(tag).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(tag);
    await waitFor(async () => {
      await expect(tag).not.toHaveAttribute('aria-pressed');
    });
    await userEvent.click(tag);
    await waitFor(async () => {
      await expect(tag).toHaveAttribute('aria-pressed', 'true');
    });
    const deleteButton = canvas.getByLabelText('Delete tag');
    await userEvent.click(deleteButton);
    await waitFor(async () => {
      await expect(canvas.getByText('Poof! Deleted!')).toBeInTheDocument();
    });
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Include Tag',
    variant: 'include',
    onDelete: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Include Tag')).toBeInTheDocument();
    await expect(canvas.getByText('check_circle')).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Exclude Tag',
    variant: 'exclude',
    onDelete: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Exclude Tag')).toBeInTheDocument();
    await expect(canvas.getByText('do_not_disturb_on')).toBeInTheDocument();
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Tag',
    size: 'small'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Tag',
    selected: true,
    disabled: true,
    onClick: fn(),
    onDelete: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tag = canvas.getByText('Disabled Tag');
    await expect(tag).toBeInTheDocument();

    // Delete button should not be visible when disabled
    await expect(canvas.queryByLabelText('Delete tag')).not.toBeInTheDocument();

    // Click should not trigger callbacks when disabled
    await userEvent.click(tag, {
      pointerEventsCheck: 0
    });
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...p.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Custom Icon Tag',
    variant: 'include',
    slots: {
      icon: <DsIcon icon="star" size="tiny" />
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Custom Icon Tag')).toBeInTheDocument();

    // Custom icon should be rendered instead of the variant icon
    await expect(canvas.getByText('star')).toBeInTheDocument();
    await expect(canvas.queryByText('check_circle')).not.toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source}}};const A=["Default","Clickable","Controlled","Include","Exclude","Small","Disabled","CustomIcon"];export{i as Clickable,d as Controlled,T as CustomIcon,r as Default,p as Disabled,g as Exclude,u as Include,m as Small,A as __namedExportsOrder,L as default};
