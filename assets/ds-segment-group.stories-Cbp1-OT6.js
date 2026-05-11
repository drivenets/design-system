import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DnjGr5uC.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./ds-icon-DWrdQ9cp.js";import{t as a}from"./ds-icon-CHu4lUOa.js";import{n as o,t as s}from"./ds-segment-group-CINkewsg.js";var c,l,u,d=t((()=>{c=`_controlledContainer_1mrq3_1`,l=`_selectedValue_1mrq3_8`,u={controlledContainer:c,selectedValue:l}})),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;t((()=>{f=e(n(),1),o(),a(),d(),p=r(),{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/SegmentGroup`,component:s.Root,parameters:{layout:`centered`}},v={parameters:{docs:{description:{story:`A basic segment group with text labels. Segment groups allow users to select one option from a set of choices with immediate feedback.`}}},render:function(){let[e,t]=(0,f.useState)(`react`);return(0,p.jsxs)(s.Root,{value:e,onValueChange:t,children:[(0,p.jsx)(s.Item,{value:`react`,label:`React`}),(0,p.jsx)(s.Item,{value:`vue`,label:`Vue`}),(0,p.jsx)(s.Item,{value:`angular`,label:`Angular`}),(0,p.jsx)(s.Item,{value:`svelte`,label:`Svelte`})]})},play:async({canvasElement:e})=>{let t=g(e),n=await t.findByRole(`radio`,{name:/React/i}),r=await t.findByRole(`radio`,{name:/Vue/i}),i=await t.findByRole(`radio`,{name:/Angular/i});await m(n).toBeChecked(),await h.click(r),await m(n).not.toBeChecked(),await m(r).toBeChecked(),await h.click(i),await m(i).toBeChecked(),await m(r).not.toBeChecked()}},y={parameters:{docs:{description:{story:`Small size variant for compact UIs.`}}},render:function(){let[e,t]=(0,f.useState)(`list`);return(0,p.jsxs)(s.Root,{value:e,onValueChange:t,size:`small`,children:[(0,p.jsx)(s.Item,{value:`list`,label:`List`}),(0,p.jsx)(s.Item,{value:`grid`,label:`Grid`}),(0,p.jsx)(s.Item,{value:`table`,label:`Table`})]})}},b={parameters:{docs:{description:{story:`Segment groups can include icons alongside text for better visual communication. Icons are composable via children.`}}},render:function(){let[e,t]=(0,f.useState)(`day`);return(0,p.jsxs)(s.Root,{value:e,onValueChange:t,children:[(0,p.jsxs)(s.Item,{value:`day`,children:[(0,p.jsx)(i,{icon:`wb_sunny`,size:`tiny`}),(0,p.jsx)(s.ItemText,{children:`Day`})]}),(0,p.jsxs)(s.Item,{value:`week`,children:[(0,p.jsx)(i,{icon:`date_range`,size:`tiny`}),(0,p.jsx)(s.ItemText,{children:`Week`})]}),(0,p.jsxs)(s.Item,{value:`month`,children:[(0,p.jsx)(i,{icon:`calendar_month`,size:`tiny`}),(0,p.jsx)(s.ItemText,{children:`Month`})]})]})}},x={parameters:{docs:{description:{story:`Segment groups with only icons for a more compact design.`}}},render:function(){let[e,t]=(0,f.useState)(`list`);return(0,p.jsxs)(s.Root,{value:e,onValueChange:t,size:`small`,children:[(0,p.jsx)(s.Item,{value:`list`,children:(0,p.jsx)(i,{icon:`view_list`,size:`tiny`})}),(0,p.jsx)(s.Item,{value:`grid`,children:(0,p.jsx)(i,{icon:`grid_view`,size:`tiny`})}),(0,p.jsx)(s.Item,{value:`kanban`,children:(0,p.jsx)(i,{icon:`view_kanban`,size:`tiny`})}),(0,p.jsx)(s.Item,{value:`timeline`,children:(0,p.jsx)(i,{icon:`timeline`,size:`tiny`})})]})}},S={parameters:{docs:{description:{story:`Individual segment items can be disabled to prevent user interaction.`}}},render:function(){let[e,t]=(0,f.useState)(`option2`);return(0,p.jsxs)(s.Root,{value:e,onValueChange:t,children:[(0,p.jsx)(s.Item,{value:`option1`,label:`Disabled`,disabled:!0}),(0,p.jsx)(s.Item,{value:`option2`,label:`Available`}),(0,p.jsx)(s.Item,{value:`option3`,label:`Also Available`})]})},play:async({canvasElement:e})=>{let t=g(e),n=await t.findByRole(`radio`,{name:/Disabled/i}),r=await t.findByRole(`radio`,{name:/^Available$/i});await m(r).toBeChecked(),await h.click(n,{pointerEventsCheck:0}),await m(n).not.toBeChecked(),await m(r).toBeChecked()}},C={parameters:{docs:{description:{story:`Uncontrolled segment group where the component manages its own state internally via defaultValue. Use this when you don't need to control the selected value from a parent component.`}}},render:function(){return(0,p.jsxs)(s.Root,{defaultValue:`option2`,children:[(0,p.jsx)(s.Item,{value:`option1`,label:`Option 1`}),(0,p.jsx)(s.Item,{value:`option2`,label:`Option 2`}),(0,p.jsx)(s.Item,{value:`option3`,label:`Option 3`})]})}},w={parameters:{docs:{description:{story:`Fully controlled segment group where the parent component manages the selected value state.`}}},render:function(){let[e,t]=(0,f.useState)(`option2`);return(0,p.jsxs)(`div`,{className:u.controlledContainer,children:[(0,p.jsxs)(s.Root,{value:e,onValueChange:t,children:[(0,p.jsx)(s.Item,{value:`option1`,label:`Option 1`}),(0,p.jsx)(s.Item,{value:`option2`,label:`Option 2`}),(0,p.jsx)(s.Item,{value:`option3`,label:`Option 3`})]}),(0,p.jsxs)(`div`,{className:u.selectedValue,children:[`Selected: `,e||`None`]})]})}},T={parameters:{docs:{description:{story:`Segment groups work well with just two options for binary choices.`}}},render:function(){let[e,t]=(0,f.useState)(`on`);return(0,p.jsxs)(s.Root,{value:e,onValueChange:t,children:[(0,p.jsx)(s.Item,{value:`on`,label:`On`}),(0,p.jsx)(s.Item,{value:`off`,label:`Off`})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A basic segment group with text labels. Segment groups allow users to select one option from a set of choices with immediate feedback.'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | null>('react');
    return <DsSegmentGroup.Root value={value} onValueChange={setValue}>
                <DsSegmentGroup.Item value="react" label="React" />
                <DsSegmentGroup.Item value="vue" label="Vue" />
                <DsSegmentGroup.Item value="angular" label="Angular" />
                <DsSegmentGroup.Item value="svelte" label="Svelte" />
            </DsSegmentGroup.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Locate the segment buttons by their role
    const react = await canvas.findByRole('radio', {
      name: /React/i
    });
    const vue = await canvas.findByRole('radio', {
      name: /Vue/i
    });
    const angular = await canvas.findByRole('radio', {
      name: /Angular/i
    });

    // Assert that React is initially selected
    await expect(react).toBeChecked();

    // Click on Vue
    await userEvent.click(vue);

    // Assert that React is no longer selected
    await expect(react).not.toBeChecked();

    // Assert that Vue is now selected
    await expect(vue).toBeChecked();

    // Click on Angular
    await userEvent.click(angular);

    // Assert that Angular is now selected
    await expect(angular).toBeChecked();
    await expect(vue).not.toBeChecked();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Small size variant for compact UIs.'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | null>('list');
    return <DsSegmentGroup.Root value={value} onValueChange={setValue} size="small">
                <DsSegmentGroup.Item value="list" label="List" />
                <DsSegmentGroup.Item value="grid" label="Grid" />
                <DsSegmentGroup.Item value="table" label="Table" />
            </DsSegmentGroup.Root>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Segment groups can include icons alongside text for better visual communication. Icons are composable via children.'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | null>('day');
    return <DsSegmentGroup.Root value={value} onValueChange={setValue}>
                <DsSegmentGroup.Item value="day">
                    <DsIcon icon="wb_sunny" size="tiny" />
                    <DsSegmentGroup.ItemText>Day</DsSegmentGroup.ItemText>
                </DsSegmentGroup.Item>
                <DsSegmentGroup.Item value="week">
                    <DsIcon icon="date_range" size="tiny" />
                    <DsSegmentGroup.ItemText>Week</DsSegmentGroup.ItemText>
                </DsSegmentGroup.Item>
                <DsSegmentGroup.Item value="month">
                    <DsIcon icon="calendar_month" size="tiny" />
                    <DsSegmentGroup.ItemText>Month</DsSegmentGroup.ItemText>
                </DsSegmentGroup.Item>
            </DsSegmentGroup.Root>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Segment groups with only icons for a more compact design.'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | null>('list');
    return <DsSegmentGroup.Root value={value} onValueChange={setValue} size="small">
                <DsSegmentGroup.Item value="list">
                    <DsIcon icon="view_list" size="tiny" />
                </DsSegmentGroup.Item>
                <DsSegmentGroup.Item value="grid">
                    <DsIcon icon="grid_view" size="tiny" />
                </DsSegmentGroup.Item>
                <DsSegmentGroup.Item value="kanban">
                    <DsIcon icon="view_kanban" size="tiny" />
                </DsSegmentGroup.Item>
                <DsSegmentGroup.Item value="timeline">
                    <DsIcon icon="timeline" size="tiny" />
                </DsSegmentGroup.Item>
            </DsSegmentGroup.Root>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Individual segment items can be disabled to prevent user interaction.'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | null>('option2');
    return <DsSegmentGroup.Root value={value} onValueChange={setValue}>
                <DsSegmentGroup.Item value="option1" label="Disabled" disabled />
                <DsSegmentGroup.Item value="option2" label="Available" />
                <DsSegmentGroup.Item value="option3" label="Also Available" />
            </DsSegmentGroup.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Locate the segment buttons
    const option1 = await canvas.findByRole('radio', {
      name: /Disabled/i
    });
    const option2 = await canvas.findByRole('radio', {
      name: /^Available$/i
    });

    // Assert that Option 2 is initially selected
    await expect(option2).toBeChecked();

    // Attempt to click the disabled Option 1
    await userEvent.click(option1, {
      pointerEventsCheck: 0
    });

    // Assert that Option 1 remains unchecked
    await expect(option1).not.toBeChecked();
    // Assert that Option 2 is still selected
    await expect(option2).toBeChecked();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uncontrolled segment group where the component manages its own state internally via defaultValue. Use this when you don't need to control the selected value from a parent component."
      }
    }
  },
  render: function Render() {
    return <DsSegmentGroup.Root defaultValue="option2">
                <DsSegmentGroup.Item value="option1" label="Option 1" />
                <DsSegmentGroup.Item value="option2" label="Option 2" />
                <DsSegmentGroup.Item value="option3" label="Option 3" />
            </DsSegmentGroup.Root>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Fully controlled segment group where the parent component manages the selected value state.'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | null>('option2');
    return <div className={styles.controlledContainer}>
                <DsSegmentGroup.Root value={value} onValueChange={setValue}>
                    <DsSegmentGroup.Item value="option1" label="Option 1" />
                    <DsSegmentGroup.Item value="option2" label="Option 2" />
                    <DsSegmentGroup.Item value="option3" label="Option 3" />
                </DsSegmentGroup.Root>
                <div className={styles.selectedValue}>Selected: {value || 'None'}</div>
            </div>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Segment groups work well with just two options for binary choices.'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<string | null>('on');
    return <DsSegmentGroup.Root value={value} onValueChange={setValue}>
                <DsSegmentGroup.Item value="on" label="On" />
                <DsSegmentGroup.Item value="off" label="Off" />
            </DsSegmentGroup.Root>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Small`,`WithIcons`,`IconOnly`,`WithDisabledItems`,`Uncontrolled`,`Controlled`,`TwoOptions`]}))();export{w as Controlled,v as Default,x as IconOnly,y as Small,T as TwoOptions,C as Uncontrolled,S as WithDisabledItems,b as WithIcons,E as __namedExportsOrder,_ as default};