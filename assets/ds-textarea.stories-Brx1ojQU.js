import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t,t as n}from"./ds-textarea-HdK_BZAG.js";var r,i,a,o,s;e((()=>{t(),r={title:`Components/Textarea`,component:n,parameters:{layout:`centered`,docs:{description:{component:`A multi-line text input for longer free-form content such as comments or descriptions.`}}},argTypes:{placeholder:{control:`text`,description:`Placeholder text`},value:{control:`text`,description:`The current value`},rows:{control:{type:`number`,min:1,max:20},description:`Number of visible text lines`},disabled:{control:`boolean`,description:`Whether the textarea is disabled`},maxLength:{control:{type:`number`,min:1},description:`Maximum number of characters`},onChange:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},i={args:{placeholder:`Enter your text here...`,rows:3}},a={args:{value:`This textarea is disabled`,disabled:!0,placeholder:`Disabled textarea`}},o={args:{placeholder:`Maximum 50 characters allowed`,maxLength:50,rows:3}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your text here...',
    rows: 3
  }
}`,...i.parameters?.docs?.source},description:{story:"The default multi-line input. Set `rows` to control the initial visible\nheight; the field still scrolls once content exceeds it.",...i.parameters?.docs?.description}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This textarea is disabled',
    disabled: true,
    placeholder: 'Disabled textarea'
  }
}`,...a.parameters?.docs?.source},description:{story:`Disabled textarea that cannot be focused or edited. Use for content that is
temporarily unavailable.`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Maximum 50 characters allowed',
    maxLength: 50,
    rows: 3
  }
}`,...o.parameters?.docs?.source},description:{story:"Cap the amount of text with `maxLength`. The native input prevents typing\nbeyond the limit, which is useful for length-restricted fields.",...o.parameters?.docs?.description}}},s=[`Default`,`Disabled`,`MaxLength`]}))();export{i as Default,a as Disabled,o as MaxLength,s as __namedExportsOrder,r as default};