import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-BVDryuZ7.js";import{c as D}from"./index-MjCKlByz.js";import{D as E}from"./ds-typography-DkRjcEs2.js";import{c as V}from"./create-split-props-u5h9OPvL.js";import{c as R,a as u,u as U,d as q}from"./use-locale-context-D57UDjLC.js";import{a as L,m as W,c as M}from"./index-B5lPqhxn.js";import{Q as p,P as H,a1 as $}from"./index-Bj9KoGAY.js";import{D as m}from"./ds-icon-B2GnEIzh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-OMhoANJc.js";import"./index-B2B6AqRj.js";import"./index-Bmu5SW2y.js";import"./index-B1l1cBOW.js";import"./index-DB1HQx6-.js";const[F,g]=R({name:"SegmentGroupContext",hookName:"useSegmentGroupContext",providerName:"<SegmentGroupProvider />"}),K=L.rename("segment-group"),v=K.build(),k=l.forwardRef((s,t)=>{const o=g(),a=p(o.getIndicatorProps(),v.indicator.attrs,s);return e.jsx(u.div,{...a,ref:t})});k.displayName="SegmentGroupIndicator";const[Q]=R({name:"SegmentGroupItemContext",hookName:"useSegmentGroupItemContext",providerName:"<SegmentGroupItemProvider />"}),[Y,j]=R({name:"SegmentGroupItemPropsContext",hookName:"useSegmentGroupItemPropsContext",providerName:"<SegmentGroupItemPropsProvider />"}),J=V(),_=l.forwardRef((s,t)=>{const[o,a]=J(s,["value","disabled","invalid"]),r=g(),i=p(r.getItemProps(o),v.item.attrs,a),z=r.getItemState(o);return e.jsx(Y,{value:o,children:e.jsx(Q,{value:z,children:e.jsx(u.label,{...i,ref:t})})})});_.displayName="SegmentGroupItem";const P=l.forwardRef((s,t)=>{const o=g(),a=j(),r=p(o.getItemControlProps(a),v.itemControl.attrs,s);return e.jsx(u.div,{...r,ref:t})});P.displayName="SegmentGroupItemControl";const O=l.forwardRef((s,t)=>{const o=g(),a=j(),r=p(o.getItemHiddenInputProps(a),s);return e.jsx(u.input,{...r,ref:t})});O.displayName="SegmentGroupItemHiddenInput";const B=l.forwardRef((s,t)=>{const o=g(),a=j(),r=p(o.getItemTextProps(a),v.itemText.attrs,s);return e.jsx(u.span,{...r,ref:t})});B.displayName="SegmentGroupItemText";const X=s=>{const t=l.useId(),{getRootNode:o}=U(),{dir:a}=q(),r={id:t,dir:a,getRootNode:o,...s},i=H(W,r);return M(i,$)},Z=V(),T=l.forwardRef((s,t)=>{const[o,a]=Z(s,["defaultValue","disabled","form","id","ids","invalid","name","onValueChange","orientation","readOnly","required","value"]),r=X(o),i=p(r.getRootProps(),v.root.attrs,a);return e.jsx(F,{value:r,children:e.jsx(u.div,{...i,ref:t})})});T.displayName="SegmentGroupRoot";const ee="_segmentGroupRoot_4abqb_1",te="_small_4abqb_12",oe="_segmentItem_4abqb_16",ne="_segmentItemText_4abqb_32",se="_segmentIndicator_4abqb_75",d={segmentGroupRoot:ee,small:te,segmentItem:oe,segmentItemText:ne,segmentIndicator:se},ae=({className:s,children:t,onValueChange:o,size:a="default",...r})=>e.jsxs(T,{className:D(d.segmentGroupRoot,a==="small"&&d.small,s),onValueChange:i=>o?.(i.value),...r,children:[e.jsx(k,{className:d.segmentIndicator}),t]}),re=({value:s,label:t,className:o,style:a,children:r,...i})=>e.jsxs(_,{value:s,className:D(d.segmentItem,o),style:a,...i,children:[t?e.jsx(A,{children:t}):r,e.jsx(P,{}),e.jsx(O,{})]}),A=({className:s,children:t,...o})=>e.jsx(B,{className:D(d.segmentItemText,s),...o,asChild:!0,children:e.jsx(E,{variant:"body-sm-reg",children:t})}),n={Root:ae,Item:re,ItemText:A},le="_controlledContainer_1f71b_1",ie="_selectedValue_1f71b_8",C={controlledContainer:le,selectedValue:ie},{expect:c,userEvent:w,within:N}=__STORYBOOK_MODULE_TEST__,we={title:"Design System/SegmentGroup",parameters:{layout:"centered"},tags:["autodocs"]},I={parameters:{docs:{description:{story:"A basic segment group with text labels. Segment groups allow users to select one option from a set of choices with immediate feedback."}}},render:function(){const[t,o]=l.useState("react");return e.jsxs(n.Root,{value:t,onValueChange:o,children:[e.jsx(n.Item,{value:"react",label:"React"}),e.jsx(n.Item,{value:"vue",label:"Vue"}),e.jsx(n.Item,{value:"angular",label:"Angular"}),e.jsx(n.Item,{value:"svelte",label:"Svelte"})]})},play:async({canvasElement:s})=>{const t=N(s),o=await t.findByRole("radio",{name:/React/i}),a=await t.findByRole("radio",{name:/Vue/i}),r=await t.findByRole("radio",{name:/Angular/i});await c(o).toBeChecked(),await w.click(a),await c(o).not.toBeChecked(),await c(a).toBeChecked(),await w.click(r),await c(r).toBeChecked(),await c(a).not.toBeChecked()}},S={parameters:{docs:{description:{story:"Small size variant for compact UIs."}}},render:function(){const[t,o]=l.useState("list");return e.jsxs(n.Root,{value:t,onValueChange:o,size:"small",children:[e.jsx(n.Item,{value:"list",label:"List"}),e.jsx(n.Item,{value:"grid",label:"Grid"}),e.jsx(n.Item,{value:"table",label:"Table"})]})}},h={parameters:{docs:{description:{story:"Segment groups can include icons alongside text for better visual communication. Icons are composable via children."}}},render:function(){const[t,o]=l.useState("day");return e.jsxs(n.Root,{value:t,onValueChange:o,children:[e.jsxs(n.Item,{value:"day",children:[e.jsx(m,{icon:"wb_sunny",size:"tiny"}),e.jsx(n.ItemText,{children:"Day"})]}),e.jsxs(n.Item,{value:"week",children:[e.jsx(m,{icon:"date_range",size:"tiny"}),e.jsx(n.ItemText,{children:"Week"})]}),e.jsxs(n.Item,{value:"month",children:[e.jsx(m,{icon:"calendar_month",size:"tiny"}),e.jsx(n.ItemText,{children:"Month"})]})]})}},x={parameters:{docs:{description:{story:"Segment groups with only icons for a more compact design."}}},render:function(){const[t,o]=l.useState("list");return e.jsxs(n.Root,{value:t,onValueChange:o,size:"small",children:[e.jsx(n.Item,{value:"list",children:e.jsx(m,{icon:"view_list",size:"tiny"})}),e.jsx(n.Item,{value:"grid",children:e.jsx(m,{icon:"grid_view",size:"tiny"})}),e.jsx(n.Item,{value:"kanban",children:e.jsx(m,{icon:"view_kanban",size:"tiny"})}),e.jsx(n.Item,{value:"timeline",children:e.jsx(m,{icon:"timeline",size:"tiny"})})]})}},G={parameters:{docs:{description:{story:"Individual segment items can be disabled to prevent user interaction."}}},render:function(){const[t,o]=l.useState("option2");return e.jsxs(n.Root,{value:t,onValueChange:o,children:[e.jsx(n.Item,{value:"option1",label:"Disabled",disabled:!0}),e.jsx(n.Item,{value:"option2",label:"Available"}),e.jsx(n.Item,{value:"option3",label:"Also Available"})]})},play:async({canvasElement:s})=>{const t=N(s),o=await t.findByRole("radio",{name:/Disabled/i}),a=await t.findByRole("radio",{name:/^Available$/i});await c(a).toBeChecked(),await w.click(o,{pointerEventsCheck:0}),await c(o).not.toBeChecked(),await c(a).toBeChecked()}},b={parameters:{docs:{description:{story:"Uncontrolled segment group where the component manages its own state internally via defaultValue. Use this when you don't need to control the selected value from a parent component."}}},render:function(){return e.jsxs(n.Root,{defaultValue:"option2",children:[e.jsx(n.Item,{value:"option1",label:"Option 1"}),e.jsx(n.Item,{value:"option2",label:"Option 2"}),e.jsx(n.Item,{value:"option3",label:"Option 3"})]})}},y={parameters:{docs:{description:{story:"Fully controlled segment group where the parent component manages the selected value state."}}},render:function(){const[t,o]=l.useState("option2");return e.jsxs("div",{className:C.controlledContainer,children:[e.jsxs(n.Root,{value:t,onValueChange:o,children:[e.jsx(n.Item,{value:"option1",label:"Option 1"}),e.jsx(n.Item,{value:"option2",label:"Option 2"}),e.jsx(n.Item,{value:"option3",label:"Option 3"})]}),e.jsxs("div",{className:C.selectedValue,children:["Selected: ",t||"None"]})]})}},f={parameters:{docs:{description:{story:"Segment groups work well with just two options for binary choices."}}},render:function(){const[t,o]=l.useState("on");return e.jsxs(n.Root,{value:t,onValueChange:o,children:[e.jsx(n.Item,{value:"on",label:"On"}),e.jsx(n.Item,{value:"off",label:"Off"})]})}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const De=["Default","Small","WithIcons","IconOnly","WithDisabledItems","Uncontrolled","Controlled","TwoOptions"];export{y as Controlled,I as Default,x as IconOnly,S as Small,f as TwoOptions,b as Uncontrolled,G as WithDisabledItems,h as WithIcons,De as __namedExportsOrder,we as default};
