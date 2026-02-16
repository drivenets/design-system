import{j as k}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-JBeCcR5A.js";import{D as d}from"./ds-checkbox-ddwjq2AY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B8A52F7t.js";import"./index-oog5SL_f.js";import"./index-Da6ZeaQY.js";import"./index-0JB0pZiv.js";import"./index-CGC233cy.js";import"./index-DbK7uH_F.js";import"./ds-icon-TYqKh3hH.js";const{expect:a,userEvent:r,within:l}=__STORYBOOK_MODULE_TEST__,D={title:"Design System/Checkbox",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label for the checkbox"},labelInfo:{control:"text",description:"Additional label info for the checkbox"},className:{control:"text",description:"Additional CSS class names"}}},h="Text for label",c="Text for info",o={args:{label:h,labelInfo:c,className:"custom-checkbox"},play:async({canvasElement:n})=>{const t=l(n),e=await t.findByRole("checkbox");await a(e).not.toBeChecked(),await a(t.getByText(c)).toBeInTheDocument(),await r.click(e),await a(e).toBeChecked(),await r.click(e),await a(e).not.toBeChecked()}},s={render:function(){const[t,e]=x.useState("indeterminate");return k.jsx(d,{label:h,labelInfo:c,checked:t,onCheckedChange:b=>e(b)})},play:async({canvasElement:n})=>{const t=l(n),e=await t.findByRole("checkbox");await a(e).toHaveAttribute("data-state","indeterminate"),await a(t.getByText(c)).toBeInTheDocument()}},i={args:{label:h,labelInfo:c,disabled:!0},play:async({canvasElement:n})=>{const t=l(n),e=await t.findByRole("checkbox");await a(e).toBeDisabled(),await a(t.getByText(c)).toBeInTheDocument(),await r.click(e,{pointerEventsCheck:0}),await a(e).not.toBeChecked()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    className: 'custom-checkbox'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Locate the checkbox by its role
    const checkbox = await canvas.findByRole('checkbox');

    // Assert that the checkbox is initially unchecked
    await expect(checkbox).not.toBeChecked();

    // Assert that label info is displayed
    await expect(canvas.getByText(labelInfo)).toBeInTheDocument();

    // Click to check the checkbox
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();

    // Click again to uncheck the checkbox
    await userEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');
    return <DsCheckbox label={label} labelInfo={labelInfo} checked={checked} onCheckedChange={newState => setChecked(newState)} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Locate the checkbox by its role
    const checkbox = await canvas.findByRole('checkbox');

    // Assert that the checkbox is initially indeterminate
    await expect(checkbox).toHaveAttribute('data-state', 'indeterminate');

    // Assert that label info is displayed
    await expect(canvas.getByText(labelInfo)).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Locate the checkbox by its role
    const checkbox = await canvas.findByRole('checkbox');

    // Assert that the checkbox is disabled
    await expect(checkbox).toBeDisabled();

    // Assert that label info is displayed
    await expect(canvas.getByText(labelInfo)).toBeInTheDocument();

    // Attempt to click the disabled checkbox
    await userEvent.click(checkbox, {
      pointerEventsCheck: 0
    });

    // Assert that the checkbox remains unchecked
    await expect(checkbox).not.toBeChecked();
  }
}`,...i.parameters?.docs?.source}}};const E=["Default","Indeterminate","Disabled"];export{o as Default,i as Disabled,s as Indeterminate,E as __namedExportsOrder,D as default};
