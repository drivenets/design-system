import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BMCu72D4.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{t as i}from"./classnames-BKwtnCRs.js";import{t as a}from"./compiler-runtime-CN24a0fP.js";import{i as o}from"./ds-icon.types-uxL3NVCO.js";import{t as s}from"./ds-icon-DFxPL3R9.js";import{t as c}from"./ds-typography-Dhy_dKTQ.js";import{t as l}from"./ds-typography-Dc_-l6b2.js";import{a as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./segment-group-IDXB5LGk.js";var _=t((()=>{g()})),v,y,b,x,S,C,w=t((()=>{v=`_segmentGroupRoot_4abqb_1`,y=`_small_4abqb_12`,b=`_segmentItem_4abqb_16`,x=`_segmentItemText_4abqb_32`,S=`_segmentIndicator_4abqb_75`,C={segmentGroupRoot:v,small:y,segmentItem:b,segmentItemText:x,segmentIndicator:S}})),T=t((()=>{n()})),E,D,O,k,A,j,M,N=t((()=>{E=a(),_(),D=e(i(),1),w(),l(),T(),O=r(),k=e=>{let t=(0,E.c)(17),n,r,i,a,o;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5]):({className:r,children:n,onValueChange:i,size:o,...a}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o);let s=(o===void 0?`default`:o)===`small`&&C.small,c;t[6]!==r||t[7]!==s?(c=(0,D.default)(C.segmentGroupRoot,s,r),t[6]=r,t[7]=s,t[8]=c):c=t[8];let l;t[9]===i?l=t[10]:(l=e=>i?.(e.value),t[9]=i,t[10]=l);let u;t[11]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,O.jsx)(h,{className:C.segmentIndicator}),t[11]=u):u=t[11];let d;return t[12]!==n||t[13]!==a||t[14]!==c||t[15]!==l?(d=(0,O.jsxs)(f,{className:c,onValueChange:l,...a,children:[u,n]}),t[12]=n,t[13]=a,t[14]=c,t[15]=l,t[16]=d):d=t[16],d},A=e=>{let t=(0,E.c)(20),n,r,i,a,o,s;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6]):({value:s,label:i,className:r,style:o,children:n,...a}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s);let c;t[7]===r?c=t[8]:(c=(0,D.default)(C.segmentItem,r),t[7]=r,t[8]=c);let l;t[9]!==n||t[10]!==i?(l=i?(0,O.jsx)(j,{children:i}):n,t[9]=n,t[10]=i,t[11]=l):l=t[11];let f,m;t[12]===Symbol.for(`react.memo_cache_sentinel`)?(f=(0,O.jsx)(u,{}),m=(0,O.jsx)(d,{}),t[12]=f,t[13]=m):(f=t[12],m=t[13]);let h;return t[14]!==a||t[15]!==o||t[16]!==c||t[17]!==l||t[18]!==s?(h=(0,O.jsxs)(p,{value:s,className:c,style:o,...a,children:[l,f,m]}),t[14]=a,t[15]=o,t[16]=c,t[17]=l,t[18]=s,t[19]=h):h=t[19],h},j=e=>{let t=(0,E.c)(12),n,r,i;t[0]===e?(n=t[1],r=t[2],i=t[3]):({className:r,children:n,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i);let a;t[4]===r?a=t[5]:(a=(0,D.default)(C.segmentItemText,r),t[4]=r,t[5]=a);let o;t[6]===n?o=t[7]:(o=(0,O.jsx)(c,{variant:`body-sm-reg`,children:n}),t[6]=n,t[7]=o);let s;return t[8]!==i||t[9]!==a||t[10]!==o?(s=(0,O.jsx)(m,{className:a,...i,asChild:!0,children:o}),t[8]=i,t[9]=a,t[10]=o,t[11]=s):s=t[11],s},M={Root:k,Item:A,ItemText:j}})),P,F,I,L=t((()=>{P=`_controlledContainer_1f71b_1`,F=`_selectedValue_1f71b_8`,I={controlledContainer:P,selectedValue:F}})),R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;t((()=>{R=e(n(),1),N(),s(),L(),z=r(),{expect:B,userEvent:V,within:H}=__STORYBOOK_MODULE_TEST__,U={title:`Design System/SegmentGroup`,component:M.Root,parameters:{layout:`centered`}},W={parameters:{docs:{description:{story:`A basic segment group with text labels. Segment groups allow users to select one option from a set of choices with immediate feedback.`}}},render:function(){let[e,t]=(0,R.useState)(`react`);return(0,z.jsxs)(M.Root,{value:e,onValueChange:t,children:[(0,z.jsx)(M.Item,{value:`react`,label:`React`}),(0,z.jsx)(M.Item,{value:`vue`,label:`Vue`}),(0,z.jsx)(M.Item,{value:`angular`,label:`Angular`}),(0,z.jsx)(M.Item,{value:`svelte`,label:`Svelte`})]})},play:async({canvasElement:e})=>{let t=H(e),n=await t.findByRole(`radio`,{name:/React/i}),r=await t.findByRole(`radio`,{name:/Vue/i}),i=await t.findByRole(`radio`,{name:/Angular/i});await B(n).toBeChecked(),await V.click(r),await B(n).not.toBeChecked(),await B(r).toBeChecked(),await V.click(i),await B(i).toBeChecked(),await B(r).not.toBeChecked()}},G={parameters:{docs:{description:{story:`Small size variant for compact UIs.`}}},render:function(){let[e,t]=(0,R.useState)(`list`);return(0,z.jsxs)(M.Root,{value:e,onValueChange:t,size:`small`,children:[(0,z.jsx)(M.Item,{value:`list`,label:`List`}),(0,z.jsx)(M.Item,{value:`grid`,label:`Grid`}),(0,z.jsx)(M.Item,{value:`table`,label:`Table`})]})}},K={parameters:{docs:{description:{story:`Segment groups can include icons alongside text for better visual communication. Icons are composable via children.`}}},render:function(){let[e,t]=(0,R.useState)(`day`);return(0,z.jsxs)(M.Root,{value:e,onValueChange:t,children:[(0,z.jsxs)(M.Item,{value:`day`,children:[(0,z.jsx)(o,{icon:`wb_sunny`,size:`tiny`}),(0,z.jsx)(M.ItemText,{children:`Day`})]}),(0,z.jsxs)(M.Item,{value:`week`,children:[(0,z.jsx)(o,{icon:`date_range`,size:`tiny`}),(0,z.jsx)(M.ItemText,{children:`Week`})]}),(0,z.jsxs)(M.Item,{value:`month`,children:[(0,z.jsx)(o,{icon:`calendar_month`,size:`tiny`}),(0,z.jsx)(M.ItemText,{children:`Month`})]})]})}},q={parameters:{docs:{description:{story:`Segment groups with only icons for a more compact design.`}}},render:function(){let[e,t]=(0,R.useState)(`list`);return(0,z.jsxs)(M.Root,{value:e,onValueChange:t,size:`small`,children:[(0,z.jsx)(M.Item,{value:`list`,children:(0,z.jsx)(o,{icon:`view_list`,size:`tiny`})}),(0,z.jsx)(M.Item,{value:`grid`,children:(0,z.jsx)(o,{icon:`grid_view`,size:`tiny`})}),(0,z.jsx)(M.Item,{value:`kanban`,children:(0,z.jsx)(o,{icon:`view_kanban`,size:`tiny`})}),(0,z.jsx)(M.Item,{value:`timeline`,children:(0,z.jsx)(o,{icon:`timeline`,size:`tiny`})})]})}},J={parameters:{docs:{description:{story:`Individual segment items can be disabled to prevent user interaction.`}}},render:function(){let[e,t]=(0,R.useState)(`option2`);return(0,z.jsxs)(M.Root,{value:e,onValueChange:t,children:[(0,z.jsx)(M.Item,{value:`option1`,label:`Disabled`,disabled:!0}),(0,z.jsx)(M.Item,{value:`option2`,label:`Available`}),(0,z.jsx)(M.Item,{value:`option3`,label:`Also Available`})]})},play:async({canvasElement:e})=>{let t=H(e),n=await t.findByRole(`radio`,{name:/Disabled/i}),r=await t.findByRole(`radio`,{name:/^Available$/i});await B(r).toBeChecked(),await V.click(n,{pointerEventsCheck:0}),await B(n).not.toBeChecked(),await B(r).toBeChecked()}},Y={parameters:{docs:{description:{story:`Uncontrolled segment group where the component manages its own state internally via defaultValue. Use this when you don't need to control the selected value from a parent component.`}}},render:function(){return(0,z.jsxs)(M.Root,{defaultValue:`option2`,children:[(0,z.jsx)(M.Item,{value:`option1`,label:`Option 1`}),(0,z.jsx)(M.Item,{value:`option2`,label:`Option 2`}),(0,z.jsx)(M.Item,{value:`option3`,label:`Option 3`})]})}},X={parameters:{docs:{description:{story:`Fully controlled segment group where the parent component manages the selected value state.`}}},render:function(){let[e,t]=(0,R.useState)(`option2`);return(0,z.jsxs)(`div`,{className:I.controlledContainer,children:[(0,z.jsxs)(M.Root,{value:e,onValueChange:t,children:[(0,z.jsx)(M.Item,{value:`option1`,label:`Option 1`}),(0,z.jsx)(M.Item,{value:`option2`,label:`Option 2`}),(0,z.jsx)(M.Item,{value:`option3`,label:`Option 3`})]}),(0,z.jsxs)(`div`,{className:I.selectedValue,children:[`Selected: `,e||`None`]})]})}},Z={parameters:{docs:{description:{story:`Segment groups work well with just two options for binary choices.`}}},render:function(){let[e,t]=(0,R.useState)(`on`);return(0,z.jsxs)(M.Root,{value:e,onValueChange:t,children:[(0,z.jsx)(M.Item,{value:`on`,label:`On`}),(0,z.jsx)(M.Item,{value:`off`,label:`Off`})]})}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Small`,`WithIcons`,`IconOnly`,`WithDisabledItems`,`Uncontrolled`,`Controlled`,`TwoOptions`]}))();export{X as Controlled,W as Default,q as IconOnly,G as Small,Z as TwoOptions,Y as Uncontrolled,J as WithDisabledItems,K as WithIcons,Q as __namedExportsOrder,U as default};