import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{t as i}from"./compiler-runtime-Ct8J1Lnh.js";import{i as a,t as o}from"./ds-checkbox-BHk-Fxbg.js";import{t as s}from"./ds-radio-group-Bg0kdR98.js";import{n as c,t as l}from"./ds-typography-DQkQX8dt.js";import{n as u,t as d}from"./ds-button-v3-DkA0VfAb.js";import{r as f}from"./ds-form-control.types-Dc1SJuf4.js";import{t as p}from"./ds-form-control-CdTd7oXN.js";import{n as m,t as h}from"./ds-date-range-picker-DgkF_vIs.js";import{t as g}from"./ds-radio-group-DcOAR0bU.js";import{a as _,c as v,i as y,n as b,o as x,r as S,s as ee,t as C,u as w}from"./zod-BfgemHL3.js";import{c as T,i as E,l as D,n as O,r as k,s as A,t as j}from"./zod-BJg-qOEy.js";var M,N,P=t((()=>{j(),M=[`basic`,`pro`,`enterprise`],N=T({name:D().min(1,`Name is required`),email:D().email(`Invalid email address`),description:D().min(20,`Short description is required (min. 20 chars)`),quantity:A(`Quantity is required`).min(1,`Quantity must be at least 1`).max(100,`Quantity cannot exceed 100`),birthDate:E(`Birth date is required`),eventStartDate:E(`Event start date is required`),eventEndDate:E(`Event end date is required`),acceptTerms:k().refine(e=>e,`You must accept the terms and conditions`),subscription:O(M,{error:()=>`Please select a subscription plan`}),contactMethod:D().nonempty(`Please select a contact method`)})}));function F(e){return setTimeout(e,1e3)}function I(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(f,{label:`Name`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(f.TextInput,{placeholder:`Enter your name`,...t})})}function L(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(f,{label:`Email`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(f.TextInput,{type:`email`,placeholder:`Enter your email`,...t})})}function te(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(f,{label:`Quantity`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(f.NumberInput,{placeholder:`Enter quantity`,min:1,max:100,step:1,value:t.value,onValueChange:t.onChange,onBlur:t.onBlur})})}function ne(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(f,{label:`Birth Date`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(f.DatePicker,{...t})})}function re(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(f,{label:`Preferred Contact Method`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(f.Select,{value:t.value,placeholder:`Select a contact method`,options:[{label:`Phone Call`,value:`phone`,icon:`call`},{label:`Email`,value:`email`,icon:`email`},{label:`SMS`,value:`sms`,icon:`sms`},{label:`In-App Notification`,value:`in_app`,icon:`notifications`}],clearable:!0,onClear:()=>t.onChange(``),onValueChange:t.onChange,onBlur:t.onBlur})})}function ie(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(f,{label:`Description`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(f.Textarea,{placeholder:`Enter your description`,...t})})}function ae(e){let{field:t,fieldState:n}=e;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(s.Root,{value:t.value,onValueChange:e=>t.onChange(e??``),children:[(0,B.jsx)(s.Item,{value:`basic`,label:`Basic`}),(0,B.jsx)(s.Item,{value:`pro`,label:`Pro`}),(0,B.jsx)(s.Item,{value:`enterprise`,label:`Enterprise`})]}),n.error&&(0,B.jsx)(c,{variant:`body-xs-reg`,style:{color:`var(--background-error)`},children:n.error.message})]})}function oe(e){let{field:t,fieldState:n}=e;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(a,{label:`I accept the terms and conditions`,checked:t.value,onCheckedChange:e=>t.onChange(e===!0),onBlur:t.onBlur}),n.error&&(0,B.jsx)(c,{variant:`body-xs-reg`,style:{color:`var(--background-error)`},children:n.error.message})]})}var R,z,B,V,H,U=t((()=>{R=i(),_(),C(),p(),h(),g(),o(),l(),P(),z=e(n(),1),u(),B=r(),V={name:``,email:``,description:``,quantity:null,birthDate:null,eventStartDate:null,eventEndDate:null,acceptTerms:!1,subscription:``,contactMethod:``},H=()=>{let e=(0,R.c)(60),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=b(N),e[0]=t):t=e[0];let n;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n={resolver:t,defaultValues:V,mode:`onChange`},e[1]=n):n=e[1];let r=ee(n),{handleSubmit:i,formState:a,control:o}=r,{errors:s}=a,c;e[2]===o?c=e[3]:(c={name:`eventStartDate`,control:o},e[2]=o,e[3]=c);let{field:l}=x(c),u;e[4]===o?u=e[5]:(u={name:`eventEndDate`,control:o},e[4]=o,e[5]=u);let{field:f}=x(u),[p,h]=(0,z.useState)(!1),g;e[6]===Symbol.for(`react.memo_cache_sentinel`)?(g=async e=>{h(!0),await new Promise(F),alert(JSON.stringify(e,null,2)),h(!1)},e[6]=g):g=e[6];let _=g,v;e[7]===i?v=e[8]:(v=i(_),e[7]=i,e[8]=v);let C;e[9]===Symbol.for(`react.memo_cache_sentinel`)?(C={display:`flex`,flexDirection:`column`,gap:`16px`,width:`300px`},e[9]=C):C=e[9];let w,T,E,D;e[10]===o?(w=e[11],T=e[12],E=e[13],D=e[14]):(E=(0,B.jsx)(S,{name:`name`,control:o,render:I}),D=(0,B.jsx)(S,{name:`email`,control:o,render:L}),w=(0,B.jsx)(S,{name:`quantity`,control:o,render:te}),T=(0,B.jsx)(S,{name:`birthDate`,control:o,render:ne}),e[10]=o,e[11]=w,e[12]=T,e[13]=E,e[14]=D);let O;e[15]!==f.value||e[16]!==l.value?(O=[l.value,f.value],e[15]=f.value,e[16]=l.value,e[17]=O):O=e[17];let k;e[18]!==f||e[19]!==l?(k=e=>{let[t,n]=e;l.onChange(t),f.onChange(n)},e[18]=f,e[19]=l,e[20]=k):k=e[20];let A;e[21]===l.onBlur?A=e[22]:(A={onBlur:l.onBlur},e[21]=l.onBlur,e[22]=A);let j;e[23]===f.onBlur?j=e[24]:(j={onBlur:f.onBlur},e[23]=f.onBlur,e[24]=j);let M=s.eventStartDate?.message,P;e[25]===M?P=e[26]:(P={required:!0,status:`error`,messageIcon:`cancel`,message:M},e[25]=M,e[26]=P);let H=s.eventEndDate?.message,U;e[27]===H?U=e[28]:(U={required:!0,status:`error`,messageIcon:`cancel`,message:H},e[27]=H,e[28]=U);let W;e[29]!==A||e[30]!==j||e[31]!==P||e[32]!==U?(W={startDatePicker:A,endDatePicker:j,startDateFormControl:P,endDateFormControl:U},e[29]=A,e[30]=j,e[31]=P,e[32]=U,e[33]=W):W=e[33];let G;e[34]!==O||e[35]!==k||e[36]!==W?(G=(0,B.jsx)(m,{value:O,onChange:k,orientation:`vertical`,hideClearAll:!0,slotProps:W}),e[34]=O,e[35]=k,e[36]=W,e[37]=G):G=e[37];let K,q,J,Y;e[38]===o?(K=e[39],q=e[40],J=e[41],Y=e[42]):(K=(0,B.jsx)(S,{name:`contactMethod`,control:o,render:re}),q=(0,B.jsx)(S,{name:`description`,control:o,render:ie}),J=(0,B.jsx)(S,{name:`subscription`,control:o,render:ae}),Y=(0,B.jsx)(S,{name:`acceptTerms`,control:o,render:oe}),e[38]=o,e[39]=K,e[40]=q,e[41]=J,e[42]=Y);let X;e[43]===p?X=e[44]:(X=(0,B.jsx)(d,{type:`submit`,disabled:p,loading:p,children:`Submit`}),e[43]=p,e[44]=X);let Z;e[45]!==w||e[46]!==T||e[47]!==G||e[48]!==K||e[49]!==q||e[50]!==J||e[51]!==Y||e[52]!==X||e[53]!==v||e[54]!==E||e[55]!==D?(Z=(0,B.jsxs)(`form`,{onSubmit:v,style:C,children:[E,D,w,T,G,K,q,J,Y,X]}),e[45]=w,e[46]=T,e[47]=G,e[48]=K,e[49]=q,e[50]=J,e[51]=Y,e[52]=X,e[53]=v,e[54]=E,e[55]=D,e[56]=Z):Z=e[56];let Q;return e[57]!==r||e[58]!==Z?(Q=(0,B.jsx)(y,{...r,children:Z}),e[57]=r,e[58]=Z,e[59]=Q):Q=e[59],Q}})),W,G,K,q,J,Y,X,Z,Q,$;t((()=>{v(),U(),{expect:W,screen:G,spyOn:K,userEvent:q,waitFor:J,within:Y}=__STORYBOOK_MODULE_TEST__,X={title:`Examples/SampleForm`,component:H,tags:[`!autodocs`],parameters:{layout:`centered`}},Z=q.setup({delay:null}),Q={play:async({canvasElement:e})=>{let t=Y(e),n=K(window,`alert`).mockImplementation(()=>{}),r=async e=>{await J(async()=>{await W(t.getByText(e)).toBeInTheDocument()})},i=async e=>{await J(async()=>{await W(t.queryByText(e)).not.toBeInTheDocument()})},a=t.getByLabelText(`Name`);await W(t.queryByText(`Name is required`)).not.toBeInTheDocument();let o=t.getByRole(`button`,{name:/submit/i});await Z.click(o),await r(`Name is required`);let s=`${w.person.firstName()} ${w.person.lastName()}`;await Z.type(a,s),await i(`Name is required`);let c=t.getByPlaceholderText(`Enter your email`);await r(`Invalid email address`),await Z.type(c,`invalid-email`),await r(`Invalid email address`);let l=w.internet.email();await Z.clear(c),await Z.type(c,l),await i(`Invalid email address`);let u=t.getByPlaceholderText(`Enter quantity`);await r(`Quantity is required`),await Z.type(u,`0`),await r(`Quantity must be at least 1`),await Z.clear(u),await Z.type(u,`1`),await i(`Quantity must be at least 1`);let d=t.getAllByPlaceholderText(`mm/dd/yyyy`),f=d[0],p=d[1],m=d[2];await r(`Birth date is required`),await Z.type(f,`12/25/2002`),await Z.tab(),await i(`Birth date is required`),await r(`Event start date is required`),await Z.type(p,`01/15/2025`),await Z.tab(),await i(`Event start date is required`),await r(`Event end date is required`),await Z.type(m,`01/20/2025`),await Z.tab(),await i(`Event end date is required`),await r(`Please select a contact method`);let h=t.getByLabelText(`Preferred Contact Method`);await Z.click(h);let g=G.getByRole(`option`,{name:`Email`});await Z.click(g),await i(`Please select a contact method`);let _=t.getByLabelText(`Description`);await r(`Short description is required (min. 20 chars)`),await Z.type(_,`Short text`),await r(`Short description is required (min. 20 chars)`);let v=w.lorem.sentence(5);await Z.clear(_),await Z.type(_,v),await i(`Short description is required (min. 20 chars)`),await r(`Please select a subscription plan`);let y=t.getByLabelText(`Pro`);await Z.click(y),await i(`Please select a subscription plan`),await r(`You must accept the terms and conditions`);let b=t.getByLabelText(`I accept the terms and conditions`);await Z.click(b),await i(`You must accept the terms and conditions`),await Z.click(b),await r(`You must accept the terms and conditions`),await Z.click(b),await i(`You must accept the terms and conditions`),await Z.click(o);let x=JSON.stringify({name:s,email:l,description:v,quantity:1,birthDate:new Date(2002,11,25).toISOString(),eventStartDate:new Date(2025,0,15).toISOString(),eventEndDate:new Date(2025,0,20).toISOString(),acceptTerms:!0,subscription:`pro`,contactMethod:`email`},null,2);await J(async()=>{await W(n).toHaveBeenCalledWith(x)})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const alertSpy = spyOn(window, 'alert').mockImplementation(() => {});
    const waitForMessage = async (text: string) => {
      await waitFor(async () => {
        await expect(canvas.getByText(text)).toBeInTheDocument();
      });
    };
    const waitForMessageGone = async (text: string) => {
      await waitFor(async () => {
        await expect(canvas.queryByText(text)).not.toBeInTheDocument();
      });
    };

    // 1. Initial state: first field has no error message
    const nameInput = canvas.getByLabelText('Name');
    await expect(canvas.queryByText('Name is required')).not.toBeInTheDocument();

    // 2. Click submit on empty form to trigger validation on all fields
    const submitButton = canvas.getByRole('button', {
      name: /submit/i
    });
    await userEvent.click(submitButton);

    // 3. Name
    await waitForMessage('Name is required');
    const fakeName = \`\${faker.person.firstName()} \${faker.person.lastName()}\`;
    await userEvent.type(nameInput, fakeName);
    await waitForMessageGone('Name is required');

    // 4. Email — invalid text keeps the message, valid email removes it
    const emailInput = canvas.getByPlaceholderText('Enter your email');
    await waitForMessage('Invalid email address');
    await userEvent.type(emailInput, 'invalid-email');
    await waitForMessage('Invalid email address');
    const fakeEmail = faker.internet.email();
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, fakeEmail);
    await waitForMessageGone('Invalid email address');

    // 5. Quantity — value below min keeps the message, valid value removes it
    const quantityInput = canvas.getByPlaceholderText('Enter quantity');
    await waitForMessage('Quantity is required');
    await userEvent.type(quantityInput, '0');
    await waitForMessage('Quantity must be at least 1');
    await userEvent.clear(quantityInput);
    await userEvent.type(quantityInput, '1');
    await waitForMessageGone('Quantity must be at least 1');

    // 6. Birth date
    const dateInputs = canvas.getAllByPlaceholderText('mm/dd/yyyy');
    const birthDateInput = dateInputs[0] as HTMLElement;
    const eventStartDateInput = dateInputs[1] as HTMLElement;
    const eventEndDateInput = dateInputs[2] as HTMLElement;
    await waitForMessage('Birth date is required');
    await userEvent.type(birthDateInput, '12/25/2002');
    await userEvent.tab();
    await waitForMessageGone('Birth date is required');

    // 7. Event start date
    await waitForMessage('Event start date is required');
    await userEvent.type(eventStartDateInput, '01/15/2025');
    await userEvent.tab();
    await waitForMessageGone('Event start date is required');

    // 8. Event end date
    await waitForMessage('Event end date is required');
    await userEvent.type(eventEndDateInput, '01/20/2025');
    await userEvent.tab();
    await waitForMessageGone('Event end date is required');

    // 9. Contact method
    await waitForMessage('Please select a contact method');
    const contactMethodTrigger = canvas.getByLabelText('Preferred Contact Method');
    await userEvent.click(contactMethodTrigger);
    const contactOption = screen.getByRole('option', {
      name: 'Email'
    });
    await userEvent.click(contactOption);
    await waitForMessageGone('Please select a contact method');

    // 10. Description — short text keeps the message, long text removes it
    const descriptionInput = canvas.getByLabelText('Description');
    await waitForMessage('Short description is required (min. 20 chars)');
    await userEvent.type(descriptionInput, 'Short text');
    await waitForMessage('Short description is required (min. 20 chars)');
    const fakeDescription = faker.lorem.sentence(5);
    await userEvent.clear(descriptionInput);
    await userEvent.type(descriptionInput, fakeDescription);
    await waitForMessageGone('Short description is required (min. 20 chars)');

    // 11. Subscription
    await waitForMessage('Please select a subscription plan');
    const subscriptionOption = canvas.getByLabelText('Pro');
    await userEvent.click(subscriptionOption);
    await waitForMessageGone('Please select a subscription plan');

    // 12. Accept terms — check hides, uncheck shows again, check hides again
    await waitForMessage('You must accept the terms and conditions');
    const acceptTermsCheckbox = canvas.getByLabelText('I accept the terms and conditions');
    await userEvent.click(acceptTermsCheckbox);
    await waitForMessageGone('You must accept the terms and conditions');
    await userEvent.click(acceptTermsCheckbox);
    await waitForMessage('You must accept the terms and conditions');
    await userEvent.click(acceptTermsCheckbox);
    await waitForMessageGone('You must accept the terms and conditions');

    // 13. Submit again — alert is shown with stringified form values
    await userEvent.click(submitButton);
    const expectedData = JSON.stringify({
      name: fakeName,
      email: fakeEmail,
      description: fakeDescription,
      quantity: 1,
      birthDate: new Date(2002, 11, 25).toISOString(),
      eventStartDate: new Date(2025, 0, 15).toISOString(),
      eventEndDate: new Date(2025, 0, 20).toISOString(),
      acceptTerms: true,
      subscription: 'pro',
      contactMethod: 'email'
    }, null, 2);
    await waitFor(async () => {
      await expect(alertSpy).toHaveBeenCalledWith(expectedData);
    });
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`]}))();export{Q as Default,$ as __namedExportsOrder,X as default};