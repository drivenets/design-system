import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{n,t as r}from"./ds-button-CG4R5GW1.js";import{r as i}from"./ds-checkbox.types-zW6JBWPh.js";import{t as a}from"./ds-checkbox-DDTF_n1_.js";import{r as o}from"./ds-form-control.types-DoEHGMFi.js";import{t as s}from"./ds-form-control-ZtPbUr2u.js";import{n as c,t as l}from"./ds-date-range-picker-MDIb1tZn.js";import{t as u}from"./ds-radio-group-CDdB-_sq.js";import{t as d}from"./ds-radio-group-n0jfL3ok.js";import{a as f,c as p,d as m,f as h,g,h as _,i as v,l as y,m as b,n as x,o as S,p as C,r as w,s as T,t as E,u as D}from"./zod-BoAiMtPQ.js";var O=e((()=>{c()})),k,A,j=e((()=>{E(),k=[`basic`,`pro`,`enterprise`],A=S({name:T().min(1,`Name is required`),email:v(`Invalid email address`),description:T().min(20,`Short description is required (min. 20 chars)`),quantity:f().min(1,`Quantity must be at least 1`).max(100,`Quantity cannot exceed 100`),birthDate:p(`Birth date is required`),acceptTerms:w().refine(e=>e,`You must accept the terms and conditions`),subscription:x(k,{error:()=>`Please select a subscription plan`}),contactMethod:T().nonempty(`Please select a contact method`),eventStartDate:p(`Event start date is required`),eventEndDate:p(`Event end date is required`)})})),M,N,P,F=e((()=>{C(),D(),s(),O(),d(),a(),r(),j(),M=t(),N={name:``,email:``,description:``,quantity:void 0,birthDate:void 0,eventStartDate:void 0,eventEndDate:void 0,acceptTerms:!1,subscription:``,contactMethod:``},P=()=>{let e=b({resolver:y(A),defaultValues:N,mode:`onChange`}),{register:t,handleSubmit:r,formState:{errors:a,isValid:s,touchedFields:c,isDirty:d},setValue:f,watch:p,trigger:g,reset:_,control:v}=e,x=e=>{alert(JSON.stringify(e,null,2)),_(N)},S=(e,t)=>{f(typeof e==`string`?e:e.name,t??``,{shouldValidate:!0,shouldTouch:!0,shouldDirty:!0})};return(0,M.jsx)(h,{...e,children:(0,M.jsxs)(`form`,{onSubmit:r(x),style:{display:`flex`,flexDirection:`column`,gap:`16px`,width:`300px`},children:[(0,M.jsx)(o,{id:`name`,label:`Name`,required:!0,status:`error`,messageIcon:`cancel`,message:c.name?a.name?.message:``,children:(0,M.jsx)(m,{name:`name`,control:v,render:({field:e})=>(0,M.jsx)(o.TextInput,{value:e.value,placeholder:`Enter your name`,onChange:t=>S(e,t.target.value),onBlur:t=>S(e,t.target.value)})})}),(0,M.jsx)(o,{label:`Email`,required:!0,status:`error`,messageIcon:`cancel`,message:c.email?a.email?.message:``,children:(0,M.jsx)(m,{name:`email`,control:v,render:({field:e})=>(0,M.jsx)(o.TextInput,{type:`email`,value:e.value,placeholder:`Enter your email`,onChange:t=>S(e,t.target.value),onBlur:t=>S(e,t.target.value)})})}),(0,M.jsx)(o,{label:`Quantity`,required:!0,status:`error`,messageIcon:`cancel`,message:c.quantity?a.quantity?.message:``,children:(0,M.jsx)(m,{name:`quantity`,control:v,render:({field:e})=>(0,M.jsx)(o.NumberInput,{placeholder:`Enter quantity`,min:1,max:100,step:1,onValueChange:t=>S(e,t)})})}),(0,M.jsx)(o,{label:`Birth Date`,required:!0,status:`error`,messageIcon:`cancel`,message:c.birthDate?a.birthDate?.message:void 0,children:(0,M.jsx)(m,{name:`birthDate`,control:v,render:({field:e})=>(0,M.jsx)(o.DatePicker,{value:e.value?new Date(e.value):null,onChange:t=>{S(e,t?t.toISOString():``)}})})}),(0,M.jsx)(l,{value:[p(`eventStartDate`)?new Date(p(`eventStartDate`)):null,p(`eventEndDate`)?new Date(p(`eventEndDate`)):null],onChange:([e,t])=>{S(`eventStartDate`,e?e.toISOString():``),S(`eventEndDate`,t?t.toISOString():``)},orientation:`vertical`,hideClearAll:!0,slotProps:{startDateFormControl:{required:!0,status:`error`,messageIcon:`cancel`,message:c.eventStartDate?a.eventStartDate?.message:void 0},endDateFormControl:{required:!0,status:`error`,messageIcon:`cancel`,message:c.eventEndDate?a.eventEndDate?.message:void 0}}}),(0,M.jsx)(o,{label:`Preferred Contact Method`,required:!0,status:`error`,messageIcon:`cancel`,message:c.contactMethod?a.contactMethod?.message:``,children:(0,M.jsx)(m,{name:`contactMethod`,control:v,render:({field:e})=>(0,M.jsx)(o.Select,{value:e.value,placeholder:`Select a contact method`,options:[{label:`Phone Call`,value:`phone`,icon:`call`},{label:`Email`,value:`email`,icon:`email`},{label:`SMS`,value:`sms`,icon:`sms`},{label:`In-App Notification`,value:`in_app`,icon:`notifications`}],clearable:!0,onClear:()=>S(e,``),onValueChange:t=>S(e,t),onBlur:()=>S(e,e.value)})})}),(0,M.jsx)(o,{label:`Description`,required:!0,status:`error`,messageIcon:`cancel`,message:c.description?a.description?.message:``,children:(0,M.jsx)(o.Textarea,{placeholder:`Enter your description`,...t(`description`,{onBlur:()=>g(`description`),onChange:()=>g(`description`)})})}),(0,M.jsxs)(u.Root,{value:p(`subscription`),onValueChange:e=>S(`subscription`,e),children:[(0,M.jsx)(u.Item,{value:`basic`,label:`Basic`}),(0,M.jsx)(u.Item,{value:`pro`,label:`Pro`}),(0,M.jsx)(u.Item,{value:`enterprise`,label:`Enterprise`})]}),a.subscription&&(0,M.jsx)(`span`,{style:{color:`red`,fontSize:`12px`},children:a.subscription.message}),(0,M.jsx)(i,{label:`I accept the terms and conditions`,checked:p(`acceptTerms`),onCheckedChange:e=>S(`acceptTerms`,e)}),a.acceptTerms&&(0,M.jsx)(`span`,{style:{color:`red`,fontSize:`12px`},children:a.acceptTerms.message}),(0,M.jsx)(n,{type:`submit`,disabled:!d||!s,children:`Submit`})]})})},P.__docgenInfo={description:``,methods:[],displayName:`SampleForm`}})),I,L,R,z,B,V,H,U,W;e((()=>{_(),F(),{expect:I,screen:L,spyOn:R,userEvent:z,waitFor:B,within:V}=__STORYBOOK_MODULE_TEST__,H={title:`Examples/SampleForm`,component:P,tags:[`!autodocs`],parameters:{layout:`centered`}},U={args:{},play:async({canvasElement:e})=>{let t=V(e),n=R(window,`alert`).mockImplementation(()=>{}),r=async e=>{await B(async()=>{await I(t.getByText(e)).toBeInTheDocument()})},i=t.getByLabelText(`Name`);await z.click(i),await z.tab(),await r(`Name is required`);let a=t.getByPlaceholderText(`Enter your email`);await z.click(a),await z.tab(),await r(`Invalid email address`);let o=t.getByLabelText(`Preferred Contact Method`);await z.click(o),await z.keyboard(`{Escape}`),await z.click(a),await r(`Please select a contact method`);let s=t.getByLabelText(`Description`);await z.click(s),await z.tab(),await r(`Short description is required (min. 20 chars)`);let c=t.getByLabelText(`I accept the terms and conditions`);await z.click(c),await z.click(c),await r(`You must accept the terms and conditions`);let l=t.getAllByPlaceholderText(`mm/dd/yyyy`),u=l[0],d=l[1],f=l[2];await z.click(u),await z.tab(),await r(`Birth date is required`),await z.click(d),await z.tab(),await r(`Event start date is required`),await z.click(f),await z.tab(),await r(`Event end date is required`),await z.type(a,`invalid-email`),await r(`Invalid email address`);let p=g.internet.email();await z.clear(a),await z.type(a,p),await B(async()=>{await I(t.queryByText(`Invalid email address`)).not.toBeInTheDocument()});let m=`${g.person.firstName()} ${g.person.lastName()}`;await z.type(i,m),await B(async()=>{await I(t.queryByText(`Name is required`)).not.toBeInTheDocument()}),await z.click(o);let h=L.getByRole(`option`,{name:`Email`});await z.click(h),await B(async()=>{await I(t.queryByText(`Please select a contact method`)).not.toBeInTheDocument()}),await z.clear(u),await z.type(u,`12/25/2002`),await z.tab(),await B(async()=>{await I(t.queryByText(`Birth date is required`)).not.toBeInTheDocument()}),await z.clear(d),await z.type(d,`01/15/2025`),await z.tab(),await B(async()=>{await I(t.queryByText(`Event start date is required`)).not.toBeInTheDocument()}),await z.clear(f),await z.type(f,`01/20/2025`),await z.tab(),await B(async()=>{await I(t.queryByText(`Event end date is required`)).not.toBeInTheDocument()}),await z.type(s,`Short text`),await r(`Short description is required (min. 20 chars)`);let _=g.lorem.sentence(5);await z.clear(s),await z.type(s,_),await B(async()=>{await I(t.queryByText(`Short description is required (min. 20 chars)`)).not.toBeInTheDocument()}),await z.click(c),await B(async()=>{await I(t.queryByText(`You must accept the terms and conditions`)).not.toBeInTheDocument()});let v=t.getByRole(`button`,{name:/submit/i});await I(v).toBeDisabled();let y=t.getByLabelText(`Pro`);await z.click(y),await B(async()=>{await I(v).toBeEnabled()}),await z.click(v);let b=JSON.stringify({name:m,email:p,description:_,quantity:1,birthDate:`2002-12-25T00:00:00.000Z`,acceptTerms:!0,subscription:`pro`,contactMethod:`email`,eventStartDate:`2025-01-15T00:00:00.000Z`,eventEndDate:`2025-01-20T00:00:00.000Z`},null,2);await B(async()=>{await I(n).toHaveBeenCalledWith(b)}),await B(async()=>{await I(i).toHaveValue(``),await I(a).toHaveValue(``),await I(o).toHaveTextContent(/Select a contact method|^$/),await I(s).toHaveValue(``),await I(u).toHaveValue(``),await I(d).toHaveValue(``),await I(f).toHaveValue(``),await I(c).not.toBeChecked(),await I(y).not.toBeChecked()})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
    const dateInputs = canvas.getAllByPlaceholderText('mm/dd/yyyy');
    const birthDateInput = dateInputs[0] as HTMLElement;
    const eventStartDateInput = dateInputs[1] as HTMLElement;
    const eventEndDateInput = dateInputs[2] as HTMLElement;
    await userEvent.click(birthDateInput);
    await userEvent.tab();
    await waitForMessage('Birth date is required');

    // 6a. Activate event start date and then blur it will show message
    await userEvent.click(eventStartDateInput);
    await userEvent.tab();
    await waitForMessage('Event start date is required');

    // 6b. Activate event end date and then blur it will show message
    await userEvent.click(eventEndDateInput);
    await userEvent.tab();
    await waitForMessage('Event end date is required');

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

    // 11. Typing a valid date in birth date will hide the message
    await userEvent.clear(birthDateInput);
    const fakeDate = '12/25/2002';
    await userEvent.type(birthDateInput, fakeDate);
    await userEvent.tab(); // Blur to trigger validation
    await waitFor(async () => {
      await expect(canvas.queryByText('Birth date is required')).not.toBeInTheDocument();
    });

    // 11a. Typing a valid date in event start date will hide the message
    await userEvent.clear(eventStartDateInput);
    await userEvent.type(eventStartDateInput, '01/15/2025');
    await userEvent.tab();
    await waitFor(async () => {
      await expect(canvas.queryByText('Event start date is required')).not.toBeInTheDocument();
    });

    // 11b. Typing a valid date in event end date will hide the message
    await userEvent.clear(eventEndDateInput);
    await userEvent.type(eventEndDateInput, '01/20/2025');
    await userEvent.tab();
    await waitFor(async () => {
      await expect(canvas.queryByText('Event end date is required')).not.toBeInTheDocument();
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
      birthDate: '2002-12-25T00:00:00.000Z',
      acceptTerms: true,
      subscription: 'pro',
      contactMethod: 'email',
      eventStartDate: '2025-01-15T00:00:00.000Z',
      eventEndDate: '2025-01-20T00:00:00.000Z'
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
      await expect(birthDateInput).toHaveValue('');
      await expect(eventStartDateInput).toHaveValue('');
      await expect(eventEndDateInput).toHaveValue('');
      await expect(acceptTermsCheckbox).not.toBeChecked();
      await expect(subscriptionOption).not.toBeChecked();
    });
  }
}`,...U.parameters?.docs?.source}}},W=[`Default`]}))();export{U as Default,W as __namedExportsOrder,H as default};