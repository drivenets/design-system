import{j as b}from"./jsx-runtime-u17CrQMm.js";import{r as k}from"./iframe-foGZe_Iu.js";import{D as x}from"./ds-tag-BpJ_uizN.js";import{D as h}from"./ds-icon-BH94ZUSb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CMjPrJCW.js";import"./ds-typography-DkXTvhMW.js";import"./index-DLoHK7I_.js";import"./index-DetwsqN6.js";const E=["medium","small"],f=["default","include","exclude"],{expect:e,fn:l,userEvent:s,waitFor:D,within:c}=__STORYBOOK_MODULE_TEST__,R={title:"Design System/Tag",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label text to display in the tag"},size:{control:"select",options:E,description:"Size of the tag"},variant:{control:"select",options:f,description:"Variant of the tag"},selected:{control:"boolean",description:"Whether the tag is in a selected state"},disabled:{control:"boolean",description:"Whether the tag is disabled"},onClick:{action:"changed",description:"Function called when clicked"},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},u={args:{label:"Default Tag",onClick:void 0},play:async({canvasElement:a})=>{const t=c(a);await e(t.getByText("Default Tag")).toBeInTheDocument()}},g={args:{label:"Clickable Tag",onClick:l()},play:async({args:a,canvasElement:t})=>{const o=c(t).getByText("Clickable Tag");await e(o).toBeInTheDocument(),await s.click(o),await e(a.onClick).toHaveBeenCalledTimes(1),await s.click(o),await e(a.onClick).toHaveBeenCalledTimes(2)}},p={render:function(){const[t,n]=k.useState(!1),[o,i]=k.useState(!0);return t?b.jsx("span",{children:"Poof! Deleted!"}):b.jsx(x,{selected:o,label:"Controlled",onDelete:()=>n(!0),onClick:()=>i(!o)})},play:async({canvasElement:a})=>{const t=c(a),n=t.getByLabelText("Controlled");await e(n).toHaveAttribute("aria-pressed","true"),await s.click(n),await D(async()=>{await e(n).not.toHaveAttribute("aria-pressed")}),await s.click(n),await D(async()=>{await e(n).toHaveAttribute("aria-pressed","true")});const o=t.getByLabelText("Delete tag");await s.click(o),await D(async()=>{await e(t.getByText("Poof! Deleted!")).toBeInTheDocument()})}},m={args:{label:"Include Tag",variant:"include",onDelete:l()},play:async({canvasElement:a})=>{const t=c(a);await e(t.getByText("Include Tag")).toBeInTheDocument(),await e(t.getByText("check_circle")).toBeInTheDocument()}},T={args:{label:"Exclude Tag",variant:"exclude",onDelete:l()},play:async({canvasElement:a})=>{const t=c(a);await e(t.getByText("Exclude Tag")).toBeInTheDocument(),await e(t.getByText("do_not_disturb_on")).toBeInTheDocument()}},y={args:{label:"Small Tag",size:"small"}},w={args:{label:"Disabled Tag",selected:!0,disabled:!0,onClick:l(),onDelete:l()},play:async({args:a,canvasElement:t})=>{const n=c(t),o=n.getByText("Disabled Tag");await e(o).toBeInTheDocument(),await e(n.queryByLabelText("Delete tag")).not.toBeInTheDocument(),await s.click(o,{pointerEventsCheck:0}),await e(a.onClick).not.toHaveBeenCalled()}},v={args:{label:"Custom Icon Tag",variant:"include",slots:{icon:b.jsx(h,{icon:"star",size:"tiny"})}},play:async({canvasElement:a})=>{const t=c(a);await e(t.getByText("Custom Icon Tag")).toBeInTheDocument(),await e(t.getByText("star")).toBeInTheDocument(),await e(t.queryByText("check_circle")).not.toBeInTheDocument()}},C={args:{label:"Keyboard Tag",onClick:l(),onDelete:l()},play:async({args:a,canvasElement:t,step:n})=>{const o=c(t),i=o.getByRole("button",{name:/Keyboard Tag/i}),B=o.getByLabelText("Delete tag");let r=0,d=0;await n("Tag Enter/Space keys trigger onClick",async()=>{i.focus(),await e(i).toHaveFocus(),await s.keyboard("{Enter}"),await e(a.onClick).toHaveBeenCalledTimes(++r),await s.keyboard(" "),await e(a.onClick).toHaveBeenCalledTimes(++r)}),await n("Tag Backspace/Delete keys trigger onDelete",async()=>{i.focus(),await s.keyboard("{Backspace}"),await e(a.onDelete).toHaveBeenCalledTimes(++d),await s.keyboard("{Delete}"),await e(a.onDelete).toHaveBeenCalledTimes(++d),await e(a.onClick).toHaveBeenCalledTimes(r)}),await n("Delete button Enter/Space keys trigger onDelete and stop propagation",async()=>{B.focus(),await e(B).toHaveFocus(),await s.keyboard("{Enter}"),await e(a.onDelete).toHaveBeenCalledTimes(++d),await s.keyboard(" "),await e(a.onDelete).toHaveBeenCalledTimes(++d),await e(a.onClick).toHaveBeenCalledTimes(r)})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Tag',
    size: 'small'
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Keyboard Tag',
    onClick: fn(),
    onDelete: fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const tag = canvas.getByRole('button', {
      name: /Keyboard Tag/i
    });
    const deleteButton = canvas.getByLabelText('Delete tag');
    let onClickCalls = 0;
    let onDeleteCalls = 0;
    await step('Tag Enter/Space keys trigger onClick', async () => {
      tag.focus();
      await expect(tag).toHaveFocus();
      await userEvent.keyboard('{Enter}');
      await expect(args.onClick).toHaveBeenCalledTimes(++onClickCalls);
      await userEvent.keyboard(' ');
      await expect(args.onClick).toHaveBeenCalledTimes(++onClickCalls);
    });
    await step('Tag Backspace/Delete keys trigger onDelete', async () => {
      tag.focus();
      await userEvent.keyboard('{Backspace}');
      await expect(args.onDelete).toHaveBeenCalledTimes(++onDeleteCalls);
      await userEvent.keyboard('{Delete}');
      await expect(args.onDelete).toHaveBeenCalledTimes(++onDeleteCalls);

      // onClick should not have been called additionally
      await expect(args.onClick).toHaveBeenCalledTimes(onClickCalls);
    });
    await step('Delete button Enter/Space keys trigger onDelete and stop propagation', async () => {
      deleteButton.focus();
      await expect(deleteButton).toHaveFocus();
      await userEvent.keyboard('{Enter}');
      await expect(args.onDelete).toHaveBeenCalledTimes(++onDeleteCalls);
      await userEvent.keyboard(' ');
      await expect(args.onDelete).toHaveBeenCalledTimes(++onDeleteCalls);

      // onClick should not be called (propagation stopped)
      await expect(args.onClick).toHaveBeenCalledTimes(onClickCalls);
    });
  }
}`,...C.parameters?.docs?.source}}};const j=["Default","Clickable","Controlled","Include","Exclude","Small","Disabled","CustomIcon","KeyboardInteraction"];export{g as Clickable,p as Controlled,v as CustomIcon,u as Default,w as Disabled,T as Exclude,m as Include,C as KeyboardInteraction,y as Small,j as __namedExportsOrder,R as default};
