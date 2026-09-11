import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./iframe-sRVif9um.js";import{n as i,t as a}from"./ds-bot-button-pBD-7ucR.js";var o,s,c,l,u,d,f,p,m,h,g;t((()=>{o=e(n(),1),a(),s=r(),c={title:`Components/BotButton`,component:i,parameters:{layout:`centered`,docs:{description:{component:"\nLauncher for the NetGen AI companion — one instance per screen, mounted in the platform chrome\n(`DsTopBarNavigation.Actions`).\n\nA `DsButtonV3` preset — `primary-subtle`, `small`, high-emphasis — with fixed branding for\ncontent: the NetGen mark plus the bot's name. Reach for `DsButtonV3` itself for any other\naction; this button is not a general-purpose control.\n\n- `selected` — the bot panel is open; drive it from the panel's own open state\n- `loading` — the bot is starting up or answering; a spinner replaces the mark and interaction is blocked\n- `disabled` — the bot is unavailable (permission or license)\n\n`disabled` overrides both other states; `loading` composes with `selected`, so a panel that\nis open while the bot answers keeps its pressed look under the spinner.\n                "}}},argTypes:{className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},l={args:{selected:!1,loading:!1,disabled:!1}},u={args:{selected:!0}},d={args:{loading:!0}},f={args:{selected:!0,loading:!0}},p={args:{disabled:!0}},m={args:{locale:{label:`NetGen (DE)`}}},h={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,o.useState)(!1);return(0,s.jsx)(i,{selected:e,onClick:()=>t(e=>!e)})}},g=[`Default`,`Selected`,`Loading`,`SelectedLoading`,`Disabled`,`Localized`,`Toggle`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    selected: false,
    loading: false,
    disabled: false
  }
}`,...l.parameters?.docs?.source},description:{story:"The resting launcher. Wire `onClick` to open the NetGen panel.",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true
  }
}`,...u.parameters?.docs?.source},description:{story:"The pressed look for while the panel is open. Mirror the panel's open state here — the button\nexposes it as `aria-pressed`, so a stale value misreports the panel to screen readers.",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...d.parameters?.docs?.source},description:{story:`While the bot boots or composes an answer. The spinner takes the mark's slot so the button keeps
its width, and clicks are blocked until it clears.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    selected: true,
    loading: true
  }
}`,...f.parameters?.docs?.source},description:{story:"The panel is open and the bot is still answering. `loading` blocks interaction without clearing\nthe pressed look, so the button keeps reporting the panel as open while the spinner runs.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source},description:{story:`The bot is unavailable — no license, or the signed-in user lacks permission. The mark drops to
its greyscale tone rather than being dimmed, matching the NetGen logo's own inactive variant.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    locale: {
      label: 'NetGen (DE)'
    }
  }
}`,...m.parameters?.docs?.source},description:{story:"The label doubles as the accessible name, so translate it through `locale` rather than wrapping\nthe button. The bot's name is branding — translate it, never repurpose it.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [open, setOpen] = useState(false);
    return <DsBotButton selected={open} onClick={() => setOpen(wasOpen => !wasOpen)} />;
  }
}`,...h.parameters?.docs?.source},description:{story:`How a shell drives it: the launcher and the panel share one piece of state, so the pressed look
and the panel can never disagree.`,...h.parameters?.docs?.description}}}}))();export{l as Default,p as Disabled,d as Loading,m as Localized,u as Selected,f as SelectedLoading,h as Toggle,g as __namedExportsOrder,c as default};