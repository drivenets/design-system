import{D as x}from"./ds-textarea-CKtTNr03.js";import"./jsx-runtime-u17CrQMm.js";import"./index-Cofx8SB_.js";import"./iframe-KTy4jNs7.js";import"./preload-helper-PPVm8Dsz.js";const{expect:s,userEvent:i,waitFor:d,within:o}=__STORYBOOK_MODULE_TEST__,g={title:"Design System/Textarea",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Inline styles to apply to the component"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"The current value"},rows:{control:{type:"number",min:1,max:20},description:"Number of visible text lines"},disabled:{control:"boolean",description:"Whether the textarea is disabled"},maxLength:{control:{type:"number",min:1},description:"Maximum number of characters"},onChange:{action:"changed",description:"Function called when value changes"}}},a={args:{placeholder:"Enter your text here...",rows:3},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");await s(e).toBeTruthy(),await i.type(e,"Hello world Design System!"),await d(()=>s(e).toHaveValue("Hello world Design System!"))}},n={args:{value:"This textarea is disabled",disabled:!0,placeholder:"Disabled textarea"},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox");await s(e).toBeDisabled()}},r={args:{placeholder:"Maximum 50 characters allowed",maxLength:50,rows:3},play:async({canvasElement:t})=>{const e=o(t).getByRole("textbox"),l="This is a very long text that should be truncated at 50 characters";await i.type(e,l),await d(()=>s(e).toHaveValue(l.substring(0,50)))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const v=["Default","Disabled","MaxLength"];export{a as Default,n as Disabled,r as MaxLength,v as __namedExportsOrder,g as default};
