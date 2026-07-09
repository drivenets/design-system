import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Z as n,k as r}from"./iframe-BzOV0upS.js";import{i,n as a,r as o,t as s}from"./ds-split-button-Dhf2H2WF.js";var c,l,u,d,f,p,m,h,g,_;e((()=>{c=t(n(),1),a(),o(),l=r(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/SplitButton`,component:s,parameters:{layout:`centered`},args:{size:`medium`,disabled:!1},argTypes:{size:{control:`radio`,options:i},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},slotProps:{table:{disable:!0}}}},f={args:{slotProps:{button:{icon:`refresh`,"aria-label":`Refresh`},select:{options:[{label:`30s`,value:`30`},{label:`1m`,value:`60`}],value:`30`,onValueChange:u(),multiple:!1}}}},p={args:{size:`small`,slotProps:{button:{icon:`refresh`,"aria-label":`Refresh`},select:{options:[{label:`30s`,value:`30`},{label:`1m`,value:`60`}],value:`30`,onValueChange:u(),multiple:!1}}}},m={args:{slotProps:{button:{icon:`refresh`,"aria-label":`Refresh`,loading:!0},select:{options:[{label:`30s`,value:`30`},{label:`1m`,value:`60`}],value:`30`,onValueChange:u(),multiple:!1}}}},h={args:{disabled:!0,slotProps:{button:{icon:`refresh`,"aria-label":`Refresh`},select:{options:[{label:`30s`,value:`30`},{label:`1m`,value:`60`}],value:`30`,onValueChange:u(),multiple:!1}}}},g={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,c.useState)(`30`),[r,i]=(0,c.useState)(!1),a=()=>{i(!0),setTimeout(()=>i(!1),2e3)};return(0,l.jsx)(s,{...e,slotProps:{button:{icon:`refresh`,"aria-label":`Refresh`,loading:r,onClick:a},select:{options:[{label:`30s`,value:`30`},{label:`1m`,value:`60`}],value:t,onValueChange:n,multiple:!1}}})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Compact layout for dense toolbars; the select switches to its small size to
stay aligned with the primary action.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Shows a spinner on the primary action and blocks its click. Use while the
action triggered by the button is in progress; the select stays interactive.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Non-interactive state for both slots when the action is currently unavailable.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Wire the select `value`/`onValueChange` to local state and drive the button\n`loading` flag from the async action to reflect real usage.",...g.parameters?.docs?.description}}},_=[`Default`,`Small`,`Loading`,`Disabled`,`Controlled`]}))();export{g as Controlled,f as Default,h as Disabled,m as Loading,p as Small,_ as __namedExportsOrder,d as default};