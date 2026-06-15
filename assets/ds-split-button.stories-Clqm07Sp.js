import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-Bi79Gcw7.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{i,n as a,r as o,t as s}from"./ds-split-button-DNTuiXcZ.js";var c,l,u,d,f,p,m,h,g;e((()=>{c=t(n(),1),a(),o(),l=r(),{fn:u}=__STORYBOOK_MODULE_TEST__,d=[{label:`30s`,value:`30`},{label:`1m`,value:`60`},{label:`5m`,value:`300`},{label:`10m`,value:`600`}],f={title:`Components/SplitButton`,component:s,parameters:{layout:`centered`},args:{size:`medium`,disabled:!1,slotProps:{button:{icon:`refresh`},select:{options:d,value:`30`,onValueChange:u(),multiple:!1}}},argTypes:{size:{control:`radio`,options:i},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},slotProps:{table:{disable:!0}}}},p={render:e=>{let[t,n]=(0,c.useState)(`30`),[r,i]=(0,c.useState)(!1),a=()=>{i(!0),setTimeout(()=>i(!1),2e3)};return(0,l.jsx)(s,{...e,slotProps:{button:{...e.slotProps.button,loading:r,icon:`refresh`,onClick:a},select:{...e.slotProps.select,value:t,onValueChange:n}}})}},m={args:{slotProps:{button:{loading:!0},select:{options:d,value:`30`,onValueChange:u()}}}},h={args:{disabled:!0}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('30');
    const [loading, setLoading] = useState(false);
    const handleAction = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return <DsSplitButton {...args} slotProps={{
      button: {
        ...args.slotProps.button,
        loading,
        icon: 'refresh',
        onClick: handleAction
      },
      select: {
        ...args.slotProps.select,
        value,
        onValueChange: setValue
      } as DsSelectProps
    }} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    slotProps: {
      button: {
        loading: true
      },
      select: {
        options: refreshOptions,
        value: '30',
        onValueChange: fn()
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Loading`,`Disabled`]}))();export{p as Default,h as Disabled,m as Loading,g as __namedExportsOrder,f as default};