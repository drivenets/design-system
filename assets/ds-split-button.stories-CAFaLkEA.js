import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-DVysNJuQ.js";import{n as r,t as i}from"./ds-split-button-BbPsFT_-.js";var a;function o(){return(o=e((()=>{a=[`medium`,`small`]})))()}var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s=t(),r(),o(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/SplitButton`,component:i,parameters:{layout:`centered`},args:{size:`medium`,disabled:!1},argTypes:{size:{control:`radio`,options:a},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},slotProps:{table:{disable:!0}}}},d={args:{slotProps:{button:{icon:`refresh`,"aria-label":`Refresh`},select:{options:[{label:`30s`,value:`30`},{label:`1m`,value:`60`}],value:`30`,onValueChange:l(),multiple:!1}}}},f={args:{size:`small`,slotProps:{button:{icon:`refresh`,"aria-label":`Refresh`},select:{options:[{label:`30s`,value:`30`},{label:`1m`,value:`60`}],value:`30`,onValueChange:l(),multiple:!1}}}},p={args:{slotProps:{button:{icon:`refresh`,"aria-label":`Refresh`,loading:!0},select:{options:[{label:`30s`,value:`30`},{label:`1m`,value:`60`}],value:`30`,onValueChange:l(),multiple:!1}}}},m={args:{disabled:!0,slotProps:{button:{icon:`refresh`,"aria-label":`Refresh`},select:{options:[{label:`30s`,value:`30`},{label:`1m`,value:`60`}],value:`30`,onValueChange:l(),multiple:!1}}}},h={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,s.useState)(`30`),[r,a]=(0,s.useState)(!1),o=()=>{a(!0),setTimeout(()=>a(!1),2e3)};return(0,c.jsx)(i,{...e,slotProps:{button:{icon:`refresh`,"aria-label":`Refresh`,loading:r,onClick:o},select:{options:[{label:`30s`,value:`30`},{label:`1m`,value:`60`}],value:t,onValueChange:n,multiple:!1}}})}},g=[`Default`,`Small`,`Loading`,`Disabled`,`Controlled`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    slotProps: {
      button: {
        icon: 'refresh',
        'aria-label': 'Refresh'
      },
      select: {
        options: [{
          label: '30s',
          value: '30'
        }, {
          label: '1m',
          value: '60'
        }],
        value: '30',
        onValueChange: fn(),
        multiple: false
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    slotProps: {
      button: {
        icon: 'refresh',
        'aria-label': 'Refresh'
      },
      select: {
        options: [{
          label: '30s',
          value: '30'
        }, {
          label: '1m',
          value: '60'
        }],
        value: '30',
        onValueChange: fn(),
        multiple: false
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`Compact layout for dense toolbars; the select switches to its small size to
stay aligned with the primary action.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    slotProps: {
      button: {
        icon: 'refresh',
        'aria-label': 'Refresh',
        loading: true
      },
      select: {
        options: [{
          label: '30s',
          value: '30'
        }, {
          label: '1m',
          value: '60'
        }],
        value: '30',
        onValueChange: fn(),
        multiple: false
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`Shows a spinner on the primary action and blocks its click. Use while the
action triggered by the button is in progress; the select stays interactive.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    slotProps: {
      button: {
        icon: 'refresh',
        'aria-label': 'Refresh'
      },
      select: {
        options: [{
          label: '30s',
          value: '30'
        }, {
          label: '1m',
          value: '60'
        }],
        value: '30',
        onValueChange: fn(),
        multiple: false
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`Non-interactive state for both slots when the action is currently unavailable.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [value, setValue] = useState('30');
    const [loading, setLoading] = useState(false);
    const handleAction = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return <DsSplitButton {...args} slotProps={{
      button: {
        icon: 'refresh',
        'aria-label': 'Refresh',
        loading,
        onClick: handleAction
      },
      select: {
        options: [{
          label: '30s',
          value: '30'
        }, {
          label: '1m',
          value: '60'
        }],
        value,
        onValueChange: setValue,
        multiple: false
      }
    }} />;
  }
}`,...h.parameters?.docs?.source},description:{story:"Wire the select `value`/`onValueChange` to local state and drive the button\n`loading` flag from the async action to reflect real usage.",...h.parameters?.docs?.description}}}})))()}_();export{h as Controlled,d as Default,m as Disabled,p as Loading,f as Small,g as __namedExportsOrder,u as default};