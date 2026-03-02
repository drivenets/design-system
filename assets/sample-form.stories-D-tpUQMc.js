import{o as M,s as E,_ as j,b as F,n as N,d as P,e as O,u as V,a as Y,F as H,C as x,f as T}from"./schemas-aPZrBYrT.js";import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as l}from"./ds-form-control-NBXal71P.js";import{D as B}from"./ds-radio-group-D1tspiNw.js";import{D as _}from"./ds-checkbox-DIyS8pzQ.js";import{D as L}from"./ds-button-D-cEgAHJ.js";import"./iframe-C9HeFeN4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D1Jr-yOf.js";import"./ds-icon-qceOxx15.js";import"./ds-select-DSWa4iKL.js";import"./ds-chip-DXNPziVW.js";import"./ds-typography-BoGB02z5.js";import"./index-DacD_HS5.js";import"./index-DqmfwFE4.js";import"./use-locale-context-DS51nLeU.js";import"./create-anatomy-Cd6VaHaP.js";import"./index-2OhZl8Tc.js";import"./index-Dp1tOaX-.js";import"./ds-text-input-BYuh4m6k.js";import"./list-collection-D0ULkmVb.js";import"./equal-DfFTejAs.js";import"./use-field-context-BkmmABRS.js";import"./event-CBXSxTbR.js";import"./form-DttX16pU.js";import"./typeahead-BHrAEzZ0.js";import"./set-BXJwmBMb.js";import"./query-CjgVAlRR.js";import"./visually-hidden-BShGFMbX.js";import"./get-styles-CEbrKovt.js";import"./floating-ui.dom-D3zTlarL.js";import"./raf-CC9hSMXO.js";import"./use-presence-CwUE1V9t.js";import"./index--zolotfl.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-BemikHtc.js";import"./portal-DeGjqhyD.js";import"./create-split-props-u5h9OPvL.js";import"./ds-textarea-Dgeqew19.js";import"./ds-number-input-DS04HAT2.js";import"./number-Bu-e0fmS.js";import"./memo-BRlFl984.js";import"./caret-BrXylHYy.js";import"./ds-password-input-Brlun2eV.js";import"./ds-date-input-BeUtXWLz.js";import"./radio-group.machine-BiLZr-1w.js";import"./resize-observer-B_vWVByV.js";import"./index-COYMcdJv.js";import"./index-BeWXQAI-.js";import"./ds-button-legacy-a8N6Cu5i.js";import"./ds-button-new-C1pZYrFM.js";const R=["basic","pro","enterprise"],A=M({name:E().min(1,"Name is required"),email:O("Invalid email address"),description:E().min(20,"Short description is required (min. 20 chars)"),quantity:N().min(1,"Quantity must be at least 1").max(100,"Quantity cannot exceed 100"),startDate:P("Start date is required"),acceptTerms:F().refine(h=>h,"You must accept the terms and conditions"),subscription:j(R,{error:()=>"Please select a subscription plan"}),contactMethod:E().nonempty("Please select a contact method")}),f={name:"",email:"",description:"",quantity:void 0,startDate:void 0,acceptTerms:!1,subscription:"",contactMethod:""},q=()=>{const h=V({resolver:Y(A),defaultValues:f,mode:"onChange"}),{register:s,handleSubmit:I,formState:{errors:n,isValid:y,touchedFields:r,isDirty:g},setValue:u,watch:d,trigger:w,reset:v,control:p}=h,D=e=>{alert(JSON.stringify(e,null,2)),v(f)},c=(e,i)=>{const b=typeof e=="string"?e:e.name;u(b,i??"",{shouldValidate:!0,shouldTouch:!0,shouldDirty:!0})};return a.jsx(H,{...h,children:a.jsxs("form",{onSubmit:I(D),style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[a.jsx(l,{id:"name",label:"Name",required:!0,status:"error",messageIcon:"cancel",message:r.name?n.name?.message:"",children:a.jsx(x,{name:"name",control:p,render:({field:e})=>a.jsx(l.TextInput,{value:e.value,placeholder:"Enter your name",onChange:i=>c(e,i.target.value),onBlur:i=>c(e,i.target.value)})})}),a.jsx(l,{label:"Email",required:!0,status:"error",messageIcon:"cancel",message:r.email?n.email?.message:"",children:a.jsx(x,{name:"email",control:p,render:({field:e})=>a.jsx(l.TextInput,{type:"email",value:e.value,placeholder:"Enter your email",onChange:i=>c(e,i.target.value),onBlur:i=>c(e,i.target.value)})})}),a.jsx(l,{label:"Quantity",required:!0,status:"error",messageIcon:"cancel",message:r.quantity?n.quantity?.message:"",children:a.jsx(x,{name:"quantity",control:p,render:({field:e})=>a.jsx(l.NumberInput,{placeholder:"Enter quantity",min:1,max:100,step:1,onValueChange:i=>c(e,i)})})}),a.jsx(l,{label:"Start Date",required:!0,status:"error",messageIcon:"cancel",message:r.startDate?n.startDate?.message:void 0,children:a.jsx(x,{name:"startDate",control:p,render:({field:e})=>a.jsx(l.DateInput,{value:e.value,onValueChange:i=>c(e,i)})})}),a.jsx(l,{label:"Preferred Contact Method",required:!0,status:"error",messageIcon:"cancel",message:r.contactMethod?n.contactMethod?.message:"",children:a.jsx(x,{name:"contactMethod",control:p,render:({field:e})=>a.jsx(l.Select,{value:e.value,placeholder:"Select a contact method",options:[{label:"Phone Call",value:"phone",icon:"call"},{label:"Email",value:"email",icon:"email"},{label:"SMS",value:"sms",icon:"sms"},{label:"In-App Notification",value:"in_app",icon:"notifications"}],clearable:!0,onClear:()=>c(e,""),onValueChange:i=>c(e,i),onBlur:()=>c(e,e.value)})})}),a.jsx(l,{label:"Description",required:!0,status:"error",messageIcon:"cancel",message:r.description?n.description?.message:"",children:a.jsx(l.Textarea,{placeholder:"Enter your description",...s("description",{onBlur:()=>w("description"),onChange:()=>w("description")})})}),a.jsxs(B.Root,{value:d("subscription"),onValueChange:e=>c("subscription",e),children:[a.jsx(B.Item,{value:"basic",label:"Basic"}),a.jsx(B.Item,{value:"pro",label:"Pro"}),a.jsx(B.Item,{value:"enterprise",label:"Enterprise"})]}),n.subscription&&a.jsx("span",{style:{color:"red",fontSize:"12px"},children:n.subscription.message}),a.jsx(_,{label:"I accept the terms and conditions",checked:d("acceptTerms"),onCheckedChange:e=>c("acceptTerms",e)}),n.acceptTerms&&a.jsx("span",{style:{color:"red",fontSize:"12px"},children:n.acceptTerms.message}),a.jsx(L,{type:"submit",disabled:!g||!y,children:"Submit"})]})})};q.__docgenInfo={description:"",methods:[],displayName:"SampleForm"};const{expect:o,screen:$,spyOn:W,userEvent:t,waitFor:m,within:J}=__STORYBOOK_MODULE_TEST__,$e={title:"Examples/Simple form",component:q,parameters:{layout:"centered"}},k={args:{},play:async({canvasElement:h})=>{const s=J(h),I=W(window,"alert").mockImplementation(()=>{}),n=async C=>{await m(async()=>{await o(s.getByText(C)).toBeInTheDocument()})},y=s.getByLabelText("Name");await t.click(y),await t.tab(),await n("Name is required");const r=s.getByPlaceholderText("Enter your email");await t.click(r),await t.tab(),await n("Invalid email address");const g=s.getByLabelText("Preferred Contact Method");await t.click(g),await t.keyboard("{Escape}"),await t.click(r),await n("Please select a contact method");const u=s.getByLabelText("Description");await t.click(u),await t.tab(),await n("Short description is required (min. 20 chars)");const d=s.getByLabelText("I accept the terms and conditions");await t.click(d),await t.click(d),await n("You must accept the terms and conditions");const w=s.getByPlaceholderText("MM/DD/YYYY");await t.click(w),await t.tab(),await n("Start date is required"),await t.type(r,"invalid-email"),await n("Invalid email address");const v=T.internet.email();await t.clear(r),await t.type(r,v),await m(async()=>{await o(s.queryByText("Invalid email address")).not.toBeInTheDocument()});const p=`${T.person.firstName()} ${T.person.lastName()}`;await t.type(y,p),await m(async()=>{await o(s.queryByText("Name is required")).not.toBeInTheDocument()}),await t.click(g);const D=$.getByRole("option",{name:"Email"});await t.click(D),await m(async()=>{await o(s.queryByText("Please select a contact method")).not.toBeInTheDocument()}),await t.clear(w),await t.type(w,"12/25/2024"),await t.tab(),await m(async()=>{await o(s.queryByText("Start date is required")).not.toBeInTheDocument()}),await t.type(u,"Short text"),await n("Short description is required (min. 20 chars)");const e=T.lorem.sentence(5);await t.clear(u),await t.type(u,e),await m(async()=>{await o(s.queryByText("Short description is required (min. 20 chars)")).not.toBeInTheDocument()}),await t.click(d),await m(async()=>{await o(s.queryByText("You must accept the terms and conditions")).not.toBeInTheDocument()});const i=s.getByRole("button",{name:/submit/i});await o(i).toBeDisabled();const b=s.getByLabelText("Pro");await t.click(b),await m(async()=>{await o(i).toBeEnabled()}),await t.click(i);const S=JSON.stringify({name:p,email:v,description:e,quantity:1,startDate:"2024-12-25",acceptTerms:!0,subscription:"pro",contactMethod:"email"},null,2);await m(async()=>{await o(I).toHaveBeenCalledWith(S)}),await m(async()=>{await o(y).toHaveValue(""),await o(r).toHaveValue(""),await o(g).toHaveTextContent(/Select a contact method|^$/),await o(u).toHaveValue(""),await o(w).toHaveValue(""),await o(d).not.toBeChecked(),await o(b).not.toBeChecked()})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const We=["Default"];export{k as Default,We as __namedExportsOrder,$e as default};
