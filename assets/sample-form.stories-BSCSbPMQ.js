import{o as C,s as v,e as q,b as M,n as j,u as F,a as N,F as O,C as T,f as k}from"./types-BJ1v9juZ.js";import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as l}from"./ds-form-control-bbJ5x0gk.js";import{D as B}from"./ds-radio-group-CwgzSKK1.js";import{D as P}from"./ds-checkbox-CV8-uRa_.js";import{D as V}from"./ds-button-DQiwnNK1.js";import"./iframe-RxI9bAYy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlcxGCkW.js";import"./ds-icon-BRUdx6bJ.js";import"./ds-select-BldCZfiM.js";import"./ds-chip-B-lwrDi8.js";import"./ds-typography-DYk-6nhB.js";import"./index-Decedjlc.js";import"./index-DMghN3K2.js";import"./use-locale-context-DghkyWl0.js";import"./index-Bxh9dWS5.js";import"./index-gwzPaq3b.js";import"./index-CWucLLfh.js";import"./ds-text-input-DWSzgCW_.js";import"./index-9DcJS-GW.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-BxvCWgkP.js";import"./use-field-context-b-Dc8fcY.js";import"./portal-CBB3-NF6.js";import"./create-split-props-u5h9OPvL.js";import"./use-presence-DRZhKhn3.js";import"./ds-textarea-Cq_WdP3H.js";import"./ds-number-input-DyyiYWd8.js";import"./ds-password-input-BJ-TIEvO.js";import"./index-5RVX9NjX.js";import"./index-CVVss3u_.js";import"./index-BSNazpzB.js";import"./index-C_0rDp91.js";import"./ds-button-legacy-q92oxbfe.js";import"./ds-button-new-D4SbnZH0.js";const H=["basic","pro","enterprise"],L=C({name:v().min(1,"Name is required"),email:v().email("Invalid email address"),description:v().min(20,"Short description is required (min. 20 chars)"),quantity:j().min(1,"Quantity must be at least 1").max(100,"Quantity cannot exceed 100"),acceptTerms:M().refine(d=>d,"You must accept the terms and conditions"),subscription:q(H,{errorMap:()=>({message:"Please select a subscription plan"})}),contactMethod:v().nonempty("Please select a contact method")}),D={name:"",email:"",description:"",quantity:void 0,acceptTerms:!1,subscription:"",contactMethod:""},S=()=>{const d=F({resolver:N(L),defaultValues:D,mode:"onChange"}),{register:i,handleSubmit:E,formState:{errors:n,isValid:h,touchedFields:c,isDirty:y},setValue:p,watch:u,trigger:g,reset:x,control:w}=d,b=e=>{alert(JSON.stringify(e,null,2)),x(D)},r=(e,s)=>{const f=typeof e=="string"?e:e.name;p(f,s,{shouldValidate:!0,shouldTouch:!0,shouldDirty:!0})};return t.jsx(O,{...d,children:t.jsxs("form",{onSubmit:E(b),style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[t.jsx(l,{id:"name",label:"Name",required:!0,status:"error",messageIcon:"cancel",message:c.name?n.name?.message:"",children:t.jsx(T,{name:"name",control:w,render:({field:e})=>t.jsx(l.TextInput,{value:e.value,placeholder:"Enter your name",onChange:s=>r(e,s.target.value),onBlur:s=>r(e,s.target.value)})})}),t.jsx(l,{label:"Email",required:!0,status:"error",messageIcon:"cancel",message:c.email?n.email?.message:"",children:t.jsx(T,{name:"email",control:w,render:({field:e})=>t.jsx(l.TextInput,{type:"email",value:e.value,placeholder:"Enter your email",onChange:s=>r(e,s.target.value),onBlur:s=>r(e,s.target.value)})})}),t.jsx(l,{label:"Quantity",required:!0,status:"error",messageIcon:"cancel",message:c.quantity?n.quantity?.message:"",children:t.jsx(T,{name:"quantity",control:w,render:({field:e})=>t.jsx(l.NumberInput,{placeholder:"Enter quantity",min:1,max:100,step:1,onValueChange:s=>r(e,s)})})}),t.jsx(l,{label:"Preferred Contact Method",required:!0,status:"error",messageIcon:"cancel",message:c.contactMethod?n.contactMethod?.message:"",children:t.jsx(T,{name:"contactMethod",control:w,render:({field:e})=>t.jsx(l.Select,{value:e.value,placeholder:"Select a contact method",options:[{label:"Phone Call",value:"phone",icon:"call"},{label:"Email",value:"email",icon:"email"},{label:"SMS",value:"sms",icon:"sms"},{label:"In-App Notification",value:"in_app",icon:"notifications"}],clearable:!0,onClear:()=>r(e,""),onValueChange:s=>r(e,s),onBlur:()=>r(e,e.value)})})}),t.jsx(l,{label:"Description",required:!0,status:"error",messageIcon:"cancel",message:c.description?n.description?.message:"",children:t.jsx(l.Textarea,{placeholder:"Enter your description",...i("description",{onBlur:()=>g("description"),onChange:()=>g("description")})})}),t.jsxs(B.Root,{value:u("subscription"),onValueChange:e=>r("subscription",e),children:[t.jsx(B.Item,{value:"basic",label:"Basic"}),t.jsx(B.Item,{value:"pro",label:"Pro"}),t.jsx(B.Item,{value:"enterprise",label:"Enterprise"})]}),n.subscription&&t.jsx("span",{style:{color:"red",fontSize:"12px"},children:n.subscription.message}),t.jsx(P,{label:"I accept the terms and conditions",checked:u("acceptTerms"),onCheckedChange:e=>r("acceptTerms",e)}),n.acceptTerms&&t.jsx("span",{style:{color:"red",fontSize:"12px"},children:n.acceptTerms.message}),t.jsx(V,{type:"submit",disabled:!y||!h,children:"Submit"})]})})};S.__docgenInfo={description:"",methods:[],displayName:"SampleForm"};const{expect:o,screen:_,spyOn:R,userEvent:a,waitFor:m,within:Y}=__STORYBOOK_MODULE_TEST__,Ee={title:"Examples/Simple form",component:S,parameters:{layout:"centered"}},I={args:{},play:async({canvasElement:d})=>{const i=Y(d),E=R(window,"alert").mockImplementation(()=>{}),n=async f=>{await m(async()=>{await o(i.getByText(f)).toBeInTheDocument()})},h=i.getByLabelText("Name");await a.click(h),await a.tab(),await n("Name is required");const c=i.getByPlaceholderText("Enter your email");await a.click(c),await a.tab(),await n("Invalid email address");const y=i.getByLabelText("Preferred Contact Method");await a.click(y),await a.keyboard("{Escape}"),await a.click(c),await n("Please select a contact method");const p=i.getByLabelText("Description");await a.click(p),await a.tab(),await n("Short description is required (min. 20 chars)");const u=i.getByLabelText("I accept the terms and conditions");await a.click(u),await a.click(u),await n("You must accept the terms and conditions"),await a.type(c,"invalid-email"),await n("Invalid email address");const g=k.internet.email();await a.clear(c),await a.type(c,g),await m(async()=>{await o(i.queryByText("Invalid email address")).not.toBeInTheDocument()});const x=`${k.person.firstName()} ${k.person.lastName()}`;await a.type(h,x),await m(async()=>{await o(i.queryByText("Name is required")).not.toBeInTheDocument()}),await a.click(y);const w=_.getByRole("option",{name:"Email"});await a.click(w),await m(async()=>{await o(i.queryByText("Please select a contact method")).not.toBeInTheDocument()}),await a.type(p,"Short text"),await n("Short description is required (min. 20 chars)");const b=k.lorem.sentence(5);await a.clear(p),await a.type(p,b),await m(async()=>{await o(i.queryByText("Short description is required (min. 20 chars)")).not.toBeInTheDocument()}),await a.click(u),await m(async()=>{await o(i.queryByText("You must accept the terms and conditions")).not.toBeInTheDocument()});const r=i.getByRole("button",{name:/submit/i});await o(r).toBeDisabled();const e=i.getByLabelText("Pro");await a.click(e),await m(async()=>{await o(r).toBeEnabled()}),await a.click(r);const s=JSON.stringify({name:x,email:g,description:b,quantity:1,acceptTerms:!0,subscription:"pro",contactMethod:"email"},null,2);await m(async()=>{await o(E).toHaveBeenCalledWith(s)}),await m(async()=>{await o(h).toHaveValue(""),await o(c).toHaveValue(""),await o(y).toHaveTextContent(/Select a contact method|^$/),await o(p).toHaveValue(""),await o(u).not.toBeChecked(),await o(e).not.toBeChecked()})}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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

    // 6. Typing random text inside email will (still) show message
    await userEvent.type(emailInput, 'invalid-email');
    await waitForMessage('Invalid email address');

    // 7. Typing random email inside email will hide the message
    const fakeEmail = faker.internet.email();
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, fakeEmail);
    await waitFor(async () => {
      await expect(canvas.queryByText('Invalid email address')).not.toBeInTheDocument();
    });

    // 8. Typing name inside name will hide the message
    const fakeName = \`\${faker.person.firstName()} \${faker.person.lastName()}\`;
    await userEvent.type(nameInput, fakeName);
    await waitFor(async () => {
      await expect(canvas.queryByText('Name is required')).not.toBeInTheDocument();
    });

    // 9. Selecting contactMethod inside contactMethod will hide the message
    await userEvent.click(contactMethodTrigger);
    const contactOption = screen.getByRole('option', {
      name: 'Email'
    });
    await userEvent.click(contactOption);
    await waitFor(async () => {
      await expect(canvas.queryByText('Please select a contact method')).not.toBeInTheDocument();
    });

    // 10. Typing random text (less than 20 chars) inside description will (still) show message
    await userEvent.type(descriptionInput, 'Short text');
    await waitForMessage('Short description is required (min. 20 chars)');

    // 11. Typing random text (more than 20 chars) inside description will hide the message
    const fakeDescription = faker.lorem.sentence(5);
    await userEvent.clear(descriptionInput);
    await userEvent.type(descriptionInput, fakeDescription);
    await waitFor(async () => {
      await expect(canvas.queryByText('Short description is required (min. 20 chars)')).not.toBeInTheDocument();
    });

    // 12. Checking acceptTerms will hide the message
    await userEvent.click(acceptTermsCheckbox);
    await waitFor(async () => {
      await expect(canvas.queryByText('You must accept the terms and conditions')).not.toBeInTheDocument();
    });

    // 13. Submit still disabled when subscription not selected
    const submitButton = canvas.getByRole('button', {
      name: /submit/i
    });
    await expect(submitButton).toBeDisabled();

    // 14. When subscription selected submit will be enabled
    const subscriptionOption = canvas.getByLabelText('Pro');
    await userEvent.click(subscriptionOption);
    await waitFor(async () => {
      await expect(submitButton).toBeEnabled();
    });

    // 15. Clicking submit will show alert containing stringified json of the values
    await userEvent.click(submitButton);
    const expectedData = JSON.stringify({
      name: fakeName,
      email: fakeEmail,
      description: fakeDescription,
      quantity: 1,
      acceptTerms: true,
      subscription: 'pro',
      contactMethod: 'email'
    }, null, 2);
    await waitFor(async () => {
      await expect(alertSpy).toHaveBeenCalledWith(expectedData);
    });

    // 16. When closing the alert form is empty again (reset)
    await waitFor(async () => {
      await expect(nameInput).toHaveValue('');
      await expect(emailInput).toHaveValue('');
      await expect(contactMethodTrigger).toHaveTextContent(/Select a contact method|^$/);
      await expect(descriptionInput).toHaveValue('');
      await expect(acceptTermsCheckbox).not.toBeChecked();
      await expect(subscriptionOption).not.toBeChecked();
    });
  }
}`,...I.parameters?.docs?.source}}};const fe=["Default"];export{I as Default,fe as __namedExportsOrder,Ee as default};
