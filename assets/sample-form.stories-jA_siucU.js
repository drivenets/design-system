import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{n,t as r}from"./ds-button-CIN9q4P7.js";import{r as i}from"./ds-checkbox.types-D4n5gpGs.js";import{t as a}from"./ds-checkbox-CKHohpMJ.js";import{t as o}from"./ds-radio-group-CY9PjgqK.js";import{t as s}from"./ds-radio-group-DHs4PsGy.js";import{t as c}from"./ds-form-control-DDjzUWYX.js";import{_ as l,a as u,c as d,d as f,f as p,g as m,h,i as g,l as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T}from"./ds-form-control-CnNhId7g.js";var E,D,O=e((()=>{y(),E=[`basic`,`pro`,`enterprise`],D=C({name:d().min(1,`Name is required`),email:u(`Invalid email address`),description:d().min(20,`Short description is required (min. 20 chars)`),quantity:b().min(1,`Quantity must be at least 1`).max(100,`Quantity cannot exceed 100`),startDate:_(`Start date is required`),acceptTerms:g().refine(e=>e,`You must accept the terms and conditions`),subscription:S(E,{error:()=>`Please select a subscription plan`}),contactMethod:d().nonempty(`Please select a contact method`)})})),k,A,j,M=e((()=>{v(),f(),w(),s(),a(),r(),O(),k=t(),A={name:``,email:``,description:``,quantity:void 0,startDate:void 0,acceptTerms:!1,subscription:``,contactMethod:``},j=()=>{let e=h({resolver:T(D),defaultValues:A,mode:`onChange`}),{register:t,handleSubmit:r,formState:{errors:a,isValid:s,touchedFields:l,isDirty:u},setValue:d,watch:f,trigger:m,reset:g,control:_}=e,v=e=>{alert(JSON.stringify(e,null,2)),g(A)},y=(e,t)=>{d(typeof e==`string`?e:e.name,t??``,{shouldValidate:!0,shouldTouch:!0,shouldDirty:!0})};return(0,k.jsx)(x,{...e,children:(0,k.jsxs)(`form`,{onSubmit:r(v),style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`300px`},children:[(0,k.jsx)(c,{id:`name`,label:`Name`,required:!0,status:`error`,messageIcon:`cancel`,message:l.name?a.name?.message:``,children:(0,k.jsx)(p,{name:`name`,control:_,render:({field:e})=>(0,k.jsx)(c.TextInput,{value:e.value,placeholder:`Enter your name`,onChange:t=>y(e,t.target.value),onBlur:t=>y(e,t.target.value)})})}),(0,k.jsx)(c,{label:`Email`,required:!0,status:`error`,messageIcon:`cancel`,message:l.email?a.email?.message:``,children:(0,k.jsx)(p,{name:`email`,control:_,render:({field:e})=>(0,k.jsx)(c.TextInput,{type:`email`,value:e.value,placeholder:`Enter your email`,onChange:t=>y(e,t.target.value),onBlur:t=>y(e,t.target.value)})})}),(0,k.jsx)(c,{label:`Quantity`,required:!0,status:`error`,messageIcon:`cancel`,message:l.quantity?a.quantity?.message:``,children:(0,k.jsx)(p,{name:`quantity`,control:_,render:({field:e})=>(0,k.jsx)(c.NumberInput,{placeholder:`Enter quantity`,min:1,max:100,step:1,onValueChange:t=>y(e,t)})})}),(0,k.jsx)(c,{label:`Start Date`,required:!0,status:`error`,messageIcon:`cancel`,message:l.startDate?a.startDate?.message:void 0,children:(0,k.jsx)(p,{name:`startDate`,control:_,render:({field:e})=>(0,k.jsx)(c.DateInput,{value:e.value,onValueChange:t=>y(e,t)})})}),(0,k.jsx)(c,{label:`Preferred Contact Method`,required:!0,status:`error`,messageIcon:`cancel`,message:l.contactMethod?a.contactMethod?.message:``,children:(0,k.jsx)(p,{name:`contactMethod`,control:_,render:({field:e})=>(0,k.jsx)(c.Select,{value:e.value,placeholder:`Select a contact method`,options:[{label:`Phone Call`,value:`phone`,icon:`call`},{label:`Email`,value:`email`,icon:`email`},{label:`SMS`,value:`sms`,icon:`sms`},{label:`In-App Notification`,value:`in_app`,icon:`notifications`}],clearable:!0,onClear:()=>y(e,``),onValueChange:t=>y(e,t),onBlur:()=>y(e,e.value)})})}),(0,k.jsx)(c,{label:`Description`,required:!0,status:`error`,messageIcon:`cancel`,message:l.description?a.description?.message:``,children:(0,k.jsx)(c.Textarea,{placeholder:`Enter your description`,...t(`description`,{onBlur:()=>m(`description`),onChange:()=>m(`description`)})})}),(0,k.jsxs)(o.Root,{value:f(`subscription`),onValueChange:e=>y(`subscription`,e),children:[(0,k.jsx)(o.Item,{value:`basic`,label:`Basic`}),(0,k.jsx)(o.Item,{value:`pro`,label:`Pro`}),(0,k.jsx)(o.Item,{value:`enterprise`,label:`Enterprise`})]}),a.subscription&&(0,k.jsx)(`span`,{style:{color:`red`,fontSize:`12px`},children:a.subscription.message}),(0,k.jsx)(i,{label:`I accept the terms and conditions`,checked:f(`acceptTerms`),onCheckedChange:e=>y(`acceptTerms`,e)}),a.acceptTerms&&(0,k.jsx)(`span`,{style:{color:`red`,fontSize:`12px`},children:a.acceptTerms.message}),(0,k.jsx)(n,{type:`submit`,disabled:!u||!s,children:`Submit`})]})})},j.__docgenInfo={description:``,methods:[],displayName:`SampleForm`}})),N,P,F,I,L,R,z,B,V;e((()=>{m(),M(),{expect:N,screen:P,spyOn:F,userEvent:I,waitFor:L,within:R}=__STORYBOOK_MODULE_TEST__,z={title:`Examples/SampleForm`,component:j,tags:[`!autodocs`],parameters:{layout:`centered`}},B={args:{},play:async({canvasElement:e})=>{let t=R(e),n=F(window,`alert`).mockImplementation(()=>{}),r=async e=>{await L(async()=>{await N(t.getByText(e)).toBeInTheDocument()})},i=t.getByLabelText(`Name`);await I.click(i),await I.tab(),await r(`Name is required`);let a=t.getByPlaceholderText(`Enter your email`);await I.click(a),await I.tab(),await r(`Invalid email address`);let o=t.getByLabelText(`Preferred Contact Method`);await I.click(o),await I.keyboard(`{Escape}`),await I.click(a),await r(`Please select a contact method`);let s=t.getByLabelText(`Description`);await I.click(s),await I.tab(),await r(`Short description is required (min. 20 chars)`);let c=t.getByLabelText(`I accept the terms and conditions`);await I.click(c),await I.click(c),await r(`You must accept the terms and conditions`);let u=t.getByPlaceholderText(`MM/DD/YYYY`);await I.click(u),await I.tab(),await r(`Start date is required`),await I.type(a,`invalid-email`),await r(`Invalid email address`);let d=l.internet.email();await I.clear(a),await I.type(a,d),await L(async()=>{await N(t.queryByText(`Invalid email address`)).not.toBeInTheDocument()});let f=`${l.person.firstName()} ${l.person.lastName()}`;await I.type(i,f),await L(async()=>{await N(t.queryByText(`Name is required`)).not.toBeInTheDocument()}),await I.click(o);let p=P.getByRole(`option`,{name:`Email`});await I.click(p),await L(async()=>{await N(t.queryByText(`Please select a contact method`)).not.toBeInTheDocument()}),await I.clear(u),await I.type(u,`12/25/2024`),await I.tab(),await L(async()=>{await N(t.queryByText(`Start date is required`)).not.toBeInTheDocument()}),await I.type(s,`Short text`),await r(`Short description is required (min. 20 chars)`);let m=l.lorem.sentence(5);await I.clear(s),await I.type(s,m),await L(async()=>{await N(t.queryByText(`Short description is required (min. 20 chars)`)).not.toBeInTheDocument()}),await I.click(c),await L(async()=>{await N(t.queryByText(`You must accept the terms and conditions`)).not.toBeInTheDocument()});let h=t.getByRole(`button`,{name:/submit/i});await N(h).toBeDisabled();let g=t.getByLabelText(`Pro`);await I.click(g),await L(async()=>{await N(h).toBeEnabled()}),await I.click(h);let _=JSON.stringify({name:f,email:d,description:m,quantity:1,startDate:`2024-12-25`,acceptTerms:!0,subscription:`pro`,contactMethod:`email`},null,2);await L(async()=>{await N(n).toHaveBeenCalledWith(_)}),await L(async()=>{await N(i).toHaveValue(``),await N(a).toHaveValue(``),await N(o).toHaveTextContent(/Select a contact method|^$/),await N(s).toHaveValue(``),await N(u).toHaveValue(``),await N(c).not.toBeChecked(),await N(g).not.toBeChecked()})}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alertSpy = spyOn(window, 'alert').mockImplementation(() => {});

    // Helper function to wait for validation messages
    const waitForMessage = async (text: string) => {
      await waitFor(async () => {
        await expect(canvas.getByText(text)).toBeInTheDocument();
      });
    };

    // 1. Activate name and then blur it will show message
    const nameInput = canvas.getByLabelText('Name');
    await userEvent.click(nameInput);
    await userEvent.tab();
    await waitForMessage('Name is required');

    // 2. Activate email and then blur it will show message
    const emailInput = canvas.getByPlaceholderText('Enter your email');
    await userEvent.click(emailInput);
    await userEvent.tab();
    await waitForMessage('Invalid email address');

    // 3. Activate contact method and then blur it will show message
    const contactMethodTrigger = canvas.getByLabelText('Preferred Contact Method');
    await userEvent.click(contactMethodTrigger);
    // tab doesn't really work here
    await userEvent.keyboard('{Escape}');
    await userEvent.click(emailInput);
    await waitForMessage('Please select a contact method');

    // 4. Activate description and then blur it will show message
    const descriptionInput = canvas.getByLabelText('Description');
    await userEvent.click(descriptionInput);
    await userEvent.tab();
    await waitForMessage('Short description is required (min. 20 chars)');

    // 5. Checking acceptTerms and then uncheck will show message
    const acceptTermsCheckbox = canvas.getByLabelText('I accept the terms and conditions');
    await userEvent.click(acceptTermsCheckbox);
    await userEvent.click(acceptTermsCheckbox);
    await waitForMessage('You must accept the terms and conditions');

    // 6. Activate start date and then blur it will show message
    const startDateInput = canvas.getByPlaceholderText('MM/DD/YYYY');
    await userEvent.click(startDateInput);
    await userEvent.tab();
    await waitForMessage('Start date is required');

    // 7. Typing random text inside email will (still) show message
    await userEvent.type(emailInput, 'invalid-email');
    await waitForMessage('Invalid email address');

    // 8. Typing random email inside email will hide the message
    const fakeEmail = faker.internet.email();
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, fakeEmail);
    await waitFor(async () => {
      await expect(canvas.queryByText('Invalid email address')).not.toBeInTheDocument();
    });

    // 9. Typing name inside name will hide the message
    const fakeName = \`\${faker.person.firstName()} \${faker.person.lastName()}\`;
    await userEvent.type(nameInput, fakeName);
    await waitFor(async () => {
      await expect(canvas.queryByText('Name is required')).not.toBeInTheDocument();
    });

    // 10. Selecting contactMethod inside contactMethod will hide the message
    await userEvent.click(contactMethodTrigger);
    const contactOption = screen.getByRole('option', {
      name: 'Email'
    });
    await userEvent.click(contactOption);
    await waitFor(async () => {
      await expect(canvas.queryByText('Please select a contact method')).not.toBeInTheDocument();
    });

    // 11. Typing a valid date in start date will hide the message
    await userEvent.clear(startDateInput);
    const fakeDate = '12/25/2024';
    await userEvent.type(startDateInput, fakeDate);
    await userEvent.tab(); // Blur to trigger validation
    await waitFor(async () => {
      await expect(canvas.queryByText('Start date is required')).not.toBeInTheDocument();
    });

    // 12. Typing random text (less than 20 chars) inside description will (still) show message
    await userEvent.type(descriptionInput, 'Short text');
    await waitForMessage('Short description is required (min. 20 chars)');

    // 13. Typing random text (more than 20 chars) inside description will hide the message
    const fakeDescription = faker.lorem.sentence(5);
    await userEvent.clear(descriptionInput);
    await userEvent.type(descriptionInput, fakeDescription);
    await waitFor(async () => {
      await expect(canvas.queryByText('Short description is required (min. 20 chars)')).not.toBeInTheDocument();
    });

    // 14. Checking acceptTerms will hide the message
    await userEvent.click(acceptTermsCheckbox);
    await waitFor(async () => {
      await expect(canvas.queryByText('You must accept the terms and conditions')).not.toBeInTheDocument();
    });

    // 15. Submit still disabled when subscription not selected
    const submitButton = canvas.getByRole('button', {
      name: /submit/i
    });
    await expect(submitButton).toBeDisabled();

    // 16. When subscription selected submit will be enabled
    const subscriptionOption = canvas.getByLabelText('Pro');
    await userEvent.click(subscriptionOption);
    await waitFor(async () => {
      await expect(submitButton).toBeEnabled();
    });

    // 17. Clicking submit will show alert containing stringified json of the values
    await userEvent.click(submitButton);
    const expectedData = JSON.stringify({
      name: fakeName,
      email: fakeEmail,
      description: fakeDescription,
      quantity: 1,
      startDate: '2024-12-25',
      acceptTerms: true,
      subscription: 'pro',
      contactMethod: 'email'
    }, null, 2);
    await waitFor(async () => {
      await expect(alertSpy).toHaveBeenCalledWith(expectedData);
    });

    // 18. When closing the alert form is empty again (reset)
    await waitFor(async () => {
      await expect(nameInput).toHaveValue('');
      await expect(emailInput).toHaveValue('');
      await expect(contactMethodTrigger).toHaveTextContent(/Select a contact method|^$/);
      await expect(descriptionInput).toHaveValue('');
      await expect(startDateInput).toHaveValue('');
      await expect(acceptTermsCheckbox).not.toBeChecked();
      await expect(subscriptionOption).not.toBeChecked();
    });
  }
}`,...B.parameters?.docs?.source}}},V=[`Default`]}))();export{B as Default,V as __namedExportsOrder,z as default};