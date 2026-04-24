import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./ds-textarea-uVyGQnlS.js";var r,i,a,o,s,c,l,u,d;e((()=>{t(),{expect:r,userEvent:i,waitFor:a,within:o}=__STORYBOOK_MODULE_TEST__,s={title:`Design System/Textarea`,component:n,parameters:{layout:`centered`},argTypes:{className:{control:`text`,description:`Additional CSS class names`},style:{control:`object`,description:`Inline styles to apply to the component`},placeholder:{control:`text`,description:`Placeholder text`},value:{control:`text`,description:`The current value`},rows:{control:{type:`number`,min:1,max:20},description:`Number of visible text lines`},disabled:{control:`boolean`,description:`Whether the textarea is disabled`},maxLength:{control:{type:`number`,min:1},description:`Maximum number of characters`},onChange:{action:`changed`,description:`Function called when value changes`}}},c={args:{placeholder:`Enter your text here...`,rows:3},play:async({canvasElement:e})=>{let t=o(e).getByRole(`textbox`);await r(t).toBeTruthy(),await i.type(t,`Hello world Design System!`),await a(()=>r(t).toHaveValue(`Hello world Design System!`))}},l={args:{value:`This textarea is disabled`,disabled:!0,placeholder:`Disabled textarea`},play:async({canvasElement:e})=>{await r(o(e).getByRole(`textbox`)).toBeDisabled()}},u={args:{placeholder:`Maximum 50 characters allowed`,maxLength:50,rows:3},play:async({canvasElement:e})=>{let t=o(e).getByRole(`textbox`),n=`This is a very long text that should be truncated at 50 characters`;await i.type(t,n),await a(()=>r(t).toHaveValue(n.substring(0,50)))}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your text here...',
    rows: 3
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify component renders correctly
    const textarea = canvas.getByRole('textbox');
    await expect(textarea).toBeTruthy();

    // Test typing in the textarea
    await userEvent.type(textarea, 'Hello world Design System!');
    await waitFor(() => {
      return expect(textarea).toHaveValue('Hello world Design System!');
    });
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This textarea is disabled',
    disabled: true,
    placeholder: 'Disabled textarea'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox');
    await expect(textarea).toBeDisabled();
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Maximum 50 characters allowed',
    maxLength: 50,
    rows: 3
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox');

    // Test typing beyond max length
    const longText = 'This is a very long text that should be truncated at 50 characters';
    await userEvent.type(textarea, longText);
    await waitFor(() => {
      return expect(textarea).toHaveValue(longText.substring(0, 50));
    });
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Disabled`,`MaxLength`]}))();export{c as Default,l as Disabled,u as MaxLength,d as __namedExportsOrder,s as default};