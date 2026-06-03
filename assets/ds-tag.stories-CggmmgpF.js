import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BJfd4buQ.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./ds-icon-DePVMGSi.js";import{t as a}from"./ds-icon-BuIdktpr.js";import{a as o,i as s,n as c,r as l,t as u}from"./ds-tag.types-BWKFY5WU.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{d=t(n(),1),o(),u(),a(),f=r(),{expect:p,fn:m,userEvent:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/Tag`,component:s,parameters:{layout:`centered`},argTypes:{label:{control:`text`,description:`The label text to display in the tag`},size:{control:`select`,options:c,description:`Size of the tag`},variant:{control:`select`,options:l,description:`Variant of the tag`},selected:{control:`boolean`,description:`Whether the tag is in a selected state`},disabled:{control:`boolean`,description:`Whether the tag is disabled`},onClick:{action:`changed`,description:`Function called when clicked`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},y={args:{label:`Default Tag`,onClick:void 0},play:async({canvasElement:e})=>{await p(_(e).getByText(`Default Tag`)).toBeInTheDocument()}},b={args:{label:`Clickable Tag`,onClick:m()},play:async({args:e,canvasElement:t})=>{let n=_(t).getByText(`Clickable Tag`);await p(n).toBeInTheDocument(),await h.click(n),await p(e.onClick).toHaveBeenCalledTimes(1),await h.click(n),await p(e.onClick).toHaveBeenCalledTimes(2)}},x={render:function(){let[e,t]=(0,d.useState)(!1),[n,r]=(0,d.useState)(!0);return e?(0,f.jsx)(`span`,{children:`Poof! Deleted!`}):(0,f.jsx)(s,{selected:n,label:`Controlled`,onDelete:()=>t(!0),onClick:()=>r(!n)})},play:async({canvasElement:e})=>{let t=_(e),n=t.getByLabelText(`Controlled`);await p(n).toHaveAttribute(`aria-pressed`,`true`),await h.click(n),await g(async()=>{await p(n).not.toHaveAttribute(`aria-pressed`)}),await h.click(n),await g(async()=>{await p(n).toHaveAttribute(`aria-pressed`,`true`)});let r=t.getByLabelText(`Delete tag`);await h.click(r),await g(async()=>{await p(t.getByText(`Poof! Deleted!`)).toBeInTheDocument()})}},S={args:{label:`Include Tag`,variant:`include`,onDelete:m()},play:async({canvasElement:e})=>{let t=_(e);await p(t.getByText(`Include Tag`)).toBeInTheDocument(),await p(t.getByText(`check_circle`)).toBeInTheDocument()}},C={args:{label:`Exclude Tag`,variant:`exclude`,onDelete:m()},play:async({canvasElement:e})=>{let t=_(e);await p(t.getByText(`Exclude Tag`)).toBeInTheDocument(),await p(t.getByText(`do_not_disturb_on`)).toBeInTheDocument()}},w={args:{label:`Small Tag`,size:`small`}},T={args:{label:`Disabled Tag`,selected:!0,disabled:!0,onClick:m(),onDelete:m()},play:async({args:e,canvasElement:t})=>{let n=_(t),r=n.getByText(`Disabled Tag`);await p(r).toBeInTheDocument(),await p(n.queryByLabelText(`Delete tag`)).not.toBeInTheDocument(),await h.click(r,{pointerEventsCheck:0}),await p(e.onClick).not.toHaveBeenCalled()}},E={args:{label:`Custom Icon Tag`,variant:`include`,slots:{icon:(0,f.jsx)(i,{icon:`star`,size:`tiny`})}},play:async({canvasElement:e})=>{let t=_(e);await p(t.getByText(`Custom Icon Tag`)).toBeInTheDocument(),await p(t.getByText(`star`)).toBeInTheDocument(),await p(t.queryByText(`check_circle`)).not.toBeInTheDocument()}},D={args:{label:`Keyboard Tag`,onClick:m(),onDelete:m()},play:async({args:e,canvasElement:t,step:n})=>{let r=_(t),i=r.getByRole(`button`,{name:/Keyboard Tag/i}),a=r.getByLabelText(`Delete tag`),o=0,s=0;await n(`Tag Enter/Space keys trigger onClick`,async()=>{i.focus(),await p(i).toHaveFocus(),await h.keyboard(`{Enter}`),await p(e.onClick).toHaveBeenCalledTimes(++o),await h.keyboard(` `),await p(e.onClick).toHaveBeenCalledTimes(++o)}),await n(`Tag Backspace/Delete keys trigger onDelete`,async()=>{i.focus(),await h.keyboard(`{Backspace}`),await p(e.onDelete).toHaveBeenCalledTimes(++s),await h.keyboard(`{Delete}`),await p(e.onDelete).toHaveBeenCalledTimes(++s),await p(e.onClick).toHaveBeenCalledTimes(o)}),await n(`Delete button Enter/Space keys trigger onDelete and stop propagation`,async()=>{a.focus(),await p(a).toHaveFocus(),await h.keyboard(`{Enter}`),await p(e.onDelete).toHaveBeenCalledTimes(++s),await h.keyboard(` `),await p(e.onDelete).toHaveBeenCalledTimes(++s),await p(e.onClick).toHaveBeenCalledTimes(o)})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Tag',
    size: 'small'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Clickable`,`Controlled`,`Include`,`Exclude`,`Small`,`Disabled`,`CustomIcon`,`KeyboardInteraction`]}))();export{b as Clickable,x as Controlled,E as CustomIcon,y as Default,T as Disabled,C as Exclude,S as Include,D as KeyboardInteraction,w as Small,O as __namedExportsOrder,v as default};