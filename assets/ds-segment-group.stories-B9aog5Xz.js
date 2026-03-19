import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-1UwOlSWK.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{t as i}from"./classnames-Ce489xFf.js";import{i as a}from"./ds-icon.types-DfRGdZ8f.js";import{t as o}from"./ds-icon-C6ILb6x3.js";import{t as s}from"./ds-typography-DI6mMftn.js";import{t as c}from"./ds-typography-no8iUrhx.js";import{a as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./segment-group-BR8Ty9Hm.js";var g=t((()=>{h()})),_,v,y,b,x,S,C=t((()=>{_=`_segmentGroupRoot_4abqb_1`,v=`_small_4abqb_12`,y=`_segmentItem_4abqb_16`,b=`_segmentItemText_4abqb_32`,x=`_segmentIndicator_4abqb_75`,S={segmentGroupRoot:_,small:v,segmentItem:y,segmentItemText:b,segmentIndicator:x}})),w=t((()=>{e(n(),1)})),T,E,D,O,k,A,j=t((()=>{g(),T=e(i(),1),C(),c(),w(),E=r(),D=({className:e,children:t,onValueChange:n,size:r=`default`,...i})=>(0,E.jsxs)(d,{className:(0,T.default)(S.segmentGroupRoot,r===`small`&&S.small,e),onValueChange:e=>n?.(e.value),...i,children:[(0,E.jsx)(m,{className:S.segmentIndicator}),t]}),O=({value:e,label:t,className:n,style:r,children:i,...a})=>(0,E.jsxs)(f,{value:e,className:(0,T.default)(S.segmentItem,n),style:r,...a,children:[t?(0,E.jsx)(k,{children:t}):i,(0,E.jsx)(l,{}),(0,E.jsx)(u,{})]}),k=({className:e,children:t,...n})=>(0,E.jsx)(p,{className:(0,T.default)(S.segmentItemText,e),...n,asChild:!0,children:(0,E.jsx)(s,{variant:`body-sm-reg`,children:t})}),A={Root:D,Item:O,ItemText:k}})),M,N,P,F=t((()=>{M=`_controlledContainer_1f71b_1`,N=`_selectedValue_1f71b_8`,P={controlledContainer:M,selectedValue:N}})),I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;t((()=>{I=e(n(),1),j(),o(),F(),L=r(),{expect:R,userEvent:z,within:B}=__STORYBOOK_MODULE_TEST__,V={title:`Design System/SegmentGroup`,component:A.Root,parameters:{layout:`centered`}},H={parameters:{docs:{description:{story:`A basic segment group with text labels. Segment groups allow users to select one option from a set of choices with immediate feedback.`}}},render:function(){let[e,t]=(0,I.useState)(`react`);return(0,L.jsxs)(A.Root,{value:e,onValueChange:t,children:[(0,L.jsx)(A.Item,{value:`react`,label:`React`}),(0,L.jsx)(A.Item,{value:`vue`,label:`Vue`}),(0,L.jsx)(A.Item,{value:`angular`,label:`Angular`}),(0,L.jsx)(A.Item,{value:`svelte`,label:`Svelte`})]})},play:async({canvasElement:e})=>{let t=B(e),n=await t.findByRole(`radio`,{name:/React/i}),r=await t.findByRole(`radio`,{name:/Vue/i}),i=await t.findByRole(`radio`,{name:/Angular/i});await R(n).toBeChecked(),await z.click(r),await R(n).not.toBeChecked(),await R(r).toBeChecked(),await z.click(i),await R(i).toBeChecked(),await R(r).not.toBeChecked()}},U={parameters:{docs:{description:{story:`Small size variant for compact UIs.`}}},render:function(){let[e,t]=(0,I.useState)(`list`);return(0,L.jsxs)(A.Root,{value:e,onValueChange:t,size:`small`,children:[(0,L.jsx)(A.Item,{value:`list`,label:`List`}),(0,L.jsx)(A.Item,{value:`grid`,label:`Grid`}),(0,L.jsx)(A.Item,{value:`table`,label:`Table`})]})}},W={parameters:{docs:{description:{story:`Segment groups can include icons alongside text for better visual communication. Icons are composable via children.`}}},render:function(){let[e,t]=(0,I.useState)(`day`);return(0,L.jsxs)(A.Root,{value:e,onValueChange:t,children:[(0,L.jsxs)(A.Item,{value:`day`,children:[(0,L.jsx)(a,{icon:`wb_sunny`,size:`tiny`}),(0,L.jsx)(A.ItemText,{children:`Day`})]}),(0,L.jsxs)(A.Item,{value:`week`,children:[(0,L.jsx)(a,{icon:`date_range`,size:`tiny`}),(0,L.jsx)(A.ItemText,{children:`Week`})]}),(0,L.jsxs)(A.Item,{value:`month`,children:[(0,L.jsx)(a,{icon:`calendar_month`,size:`tiny`}),(0,L.jsx)(A.ItemText,{children:`Month`})]})]})}},G={parameters:{docs:{description:{story:`Segment groups with only icons for a more compact design.`}}},render:function(){let[e,t]=(0,I.useState)(`list`);return(0,L.jsxs)(A.Root,{value:e,onValueChange:t,size:`small`,children:[(0,L.jsx)(A.Item,{value:`list`,children:(0,L.jsx)(a,{icon:`view_list`,size:`tiny`})}),(0,L.jsx)(A.Item,{value:`grid`,children:(0,L.jsx)(a,{icon:`grid_view`,size:`tiny`})}),(0,L.jsx)(A.Item,{value:`kanban`,children:(0,L.jsx)(a,{icon:`view_kanban`,size:`tiny`})}),(0,L.jsx)(A.Item,{value:`timeline`,children:(0,L.jsx)(a,{icon:`timeline`,size:`tiny`})})]})}},K={parameters:{docs:{description:{story:`Individual segment items can be disabled to prevent user interaction.`}}},render:function(){let[e,t]=(0,I.useState)(`option2`);return(0,L.jsxs)(A.Root,{value:e,onValueChange:t,children:[(0,L.jsx)(A.Item,{value:`option1`,label:`Disabled`,disabled:!0}),(0,L.jsx)(A.Item,{value:`option2`,label:`Available`}),(0,L.jsx)(A.Item,{value:`option3`,label:`Also Available`})]})},play:async({canvasElement:e})=>{let t=B(e),n=await t.findByRole(`radio`,{name:/Disabled/i}),r=await t.findByRole(`radio`,{name:/^Available$/i});await R(r).toBeChecked(),await z.click(n,{pointerEventsCheck:0}),await R(n).not.toBeChecked(),await R(r).toBeChecked()}},q={parameters:{docs:{description:{story:`Uncontrolled segment group where the component manages its own state internally via defaultValue. Use this when you don't need to control the selected value from a parent component.`}}},render:function(){return(0,L.jsxs)(A.Root,{defaultValue:`option2`,children:[(0,L.jsx)(A.Item,{value:`option1`,label:`Option 1`}),(0,L.jsx)(A.Item,{value:`option2`,label:`Option 2`}),(0,L.jsx)(A.Item,{value:`option3`,label:`Option 3`})]})}},J={parameters:{docs:{description:{story:`Fully controlled segment group where the parent component manages the selected value state.`}}},render:function(){let[e,t]=(0,I.useState)(`option2`);return(0,L.jsxs)(`div`,{className:P.controlledContainer,children:[(0,L.jsxs)(A.Root,{value:e,onValueChange:t,children:[(0,L.jsx)(A.Item,{value:`option1`,label:`Option 1`}),(0,L.jsx)(A.Item,{value:`option2`,label:`Option 2`}),(0,L.jsx)(A.Item,{value:`option3`,label:`Option 3`})]}),(0,L.jsxs)(`div`,{className:P.selectedValue,children:[`Selected: `,e||`None`]})]})}},Y={parameters:{docs:{description:{story:`Segment groups work well with just two options for binary choices.`}}},render:function(){let[e,t]=(0,I.useState)(`on`);return(0,L.jsxs)(A.Root,{value:e,onValueChange:t,children:[(0,L.jsx)(A.Item,{value:`on`,label:`On`}),(0,L.jsx)(A.Item,{value:`off`,label:`Off`})]})}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`Small`,`WithIcons`,`IconOnly`,`WithDisabledItems`,`Uncontrolled`,`Controlled`,`TwoOptions`]}))();export{J as Controlled,H as Default,G as IconOnly,U as Small,Y as TwoOptions,q as Uncontrolled,K as WithDisabledItems,W as WithIcons,X as __namedExportsOrder,V as default};