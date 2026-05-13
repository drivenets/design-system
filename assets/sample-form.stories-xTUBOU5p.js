import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-BWaP-iJi.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./compiler-runtime-DvQtijjt.js";import{n as a,t as o}from"./ds-typography-D3d4Ff_4.js";import{n as s,t as c}from"./ds-button-v3-CsCVVrm4.js";import{r as l}from"./ds-checkbox.types-CA2lnSD2.js";import{t as u}from"./ds-checkbox-DJyS-USv.js";import{r as d}from"./ds-form-control.types-D0HWgw1i.js";import{t as f}from"./ds-form-control-CeyrkTFB.js";import{n as p,t as m}from"./ds-date-range-picker-BozCct2z.js";import{t as h}from"./ds-radio-group-BAFHRl1q.js";import{t as g}from"./ds-radio-group-i0VvyNek.js";import{_,c as v,d as y,f as b,g as x,h as S,i as C,l as ee,m as w,n as T,o as E,p as D,r as O,s as k,t as A,u as j}from"./zod-CQ7SjP_G.js";var M=t((()=>{p()})),N,P,F=t((()=>{A(),N=[`basic`,`pro`,`enterprise`],P=k({name:v().min(1,`Name is required`),email:v().email(`Invalid email address`),description:v().min(20,`Short description is required (min. 20 chars)`),quantity:E(`Quantity is required`).min(1,`Quantity must be at least 1`).max(100,`Quantity cannot exceed 100`),birthDate:C(`Birth date is required`),eventStartDate:C(`Event start date is required`),eventEndDate:C(`Event end date is required`),acceptTerms:O().refine(e=>e,`You must accept the terms and conditions`),subscription:T(N,{error:()=>`Please select a subscription plan`}),contactMethod:v().nonempty(`Please select a contact method`)})}));function te(e){return setTimeout(e,1e3)}function ne(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(d,{label:`Name`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(d.TextInput,{placeholder:`Enter your name`,...t})})}function re(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(d,{label:`Email`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(d.TextInput,{type:`email`,placeholder:`Enter your email`,...t})})}function ie(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(d,{label:`Quantity`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(d.NumberInput,{placeholder:`Enter quantity`,min:1,max:100,step:1,value:t.value,onValueChange:t.onChange,onBlur:t.onBlur})})}function ae(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(d,{label:`Birth Date`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(d.DatePicker,{...t})})}function oe(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(d,{label:`Preferred Contact Method`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(d.Select,{value:t.value,placeholder:`Select a contact method`,options:[{label:`Phone Call`,value:`phone`,icon:`call`},{label:`Email`,value:`email`,icon:`email`},{label:`SMS`,value:`sms`,icon:`sms`},{label:`In-App Notification`,value:`in_app`,icon:`notifications`}],clearable:!0,onClear:()=>t.onChange(``),onValueChange:t.onChange,onBlur:t.onBlur})})}function se(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(d,{label:`Description`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(d.Textarea,{placeholder:`Enter your description`,...t})})}function I(e){let{field:t,fieldState:n}=e;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h.Root,{value:t.value,onValueChange:e=>t.onChange(e??``),children:[(0,B.jsx)(h.Item,{value:`basic`,label:`Basic`}),(0,B.jsx)(h.Item,{value:`pro`,label:`Pro`}),(0,B.jsx)(h.Item,{value:`enterprise`,label:`Enterprise`})]}),n.error&&(0,B.jsx)(a,{variant:`body-xs-reg`,style:{color:`var(--background-error)`},children:n.error.message})]})}function L(e){let{field:t,fieldState:n}=e;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(l,{label:`I accept the terms and conditions`,checked:t.value,onCheckedChange:e=>t.onChange(e===!0),onBlur:t.onBlur}),n.error&&(0,B.jsx)(a,{variant:`body-xs-reg`,style:{color:`var(--background-error)`},children:n.error.message})]})}var R,z,B,V,H,U=t((()=>{R=i(),D(),j(),f(),M(),g(),u(),o(),F(),z=e(n(),1),s(),B=r(),V={name:``,email:``,description:``,quantity:null,birthDate:null,eventStartDate:null,eventEndDate:null,acceptTerms:!1,subscription:``,contactMethod:``},H=()=>{let e=(0,R.c)(60),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=ee(P),e[0]=t):t=e[0];let n;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n={resolver:t,defaultValues:V,mode:`onChange`},e[1]=n):n=e[1];let r=S(n),{handleSubmit:i,formState:a,control:o}=r,{errors:s}=a,l;e[2]===o?l=e[3]:(l={name:`eventStartDate`,control:o},e[2]=o,e[3]=l);let{field:u}=w(l),d;e[4]===o?d=e[5]:(d={name:`eventEndDate`,control:o},e[4]=o,e[5]=d);let{field:f}=w(d),[p,h]=(0,z.useState)(!1),g;e[6]===Symbol.for(`react.memo_cache_sentinel`)?(g=async e=>{h(!0),await new Promise(te),alert(JSON.stringify(e,null,2)),h(!1)},e[6]=g):g=e[6];let _=g,v;e[7]===i?v=e[8]:(v=i(_),e[7]=i,e[8]=v);let x;e[9]===Symbol.for(`react.memo_cache_sentinel`)?(x={display:`flex`,flexDirection:`column`,gap:`16px`,width:`300px`},e[9]=x):x=e[9];let C,T,E,D;e[10]===o?(C=e[11],T=e[12],E=e[13],D=e[14]):(E=(0,B.jsx)(y,{name:`name`,control:o,render:ne}),D=(0,B.jsx)(y,{name:`email`,control:o,render:re}),C=(0,B.jsx)(y,{name:`quantity`,control:o,render:ie}),T=(0,B.jsx)(y,{name:`birthDate`,control:o,render:ae}),e[10]=o,e[11]=C,e[12]=T,e[13]=E,e[14]=D);let O;e[15]!==f.value||e[16]!==u.value?(O=[u.value,f.value],e[15]=f.value,e[16]=u.value,e[17]=O):O=e[17];let k;e[18]!==f||e[19]!==u?(k=e=>{let[t,n]=e;u.onChange(t),f.onChange(n)},e[18]=f,e[19]=u,e[20]=k):k=e[20];let A;e[21]===u.onBlur?A=e[22]:(A={onBlur:u.onBlur},e[21]=u.onBlur,e[22]=A);let j;e[23]===f.onBlur?j=e[24]:(j={onBlur:f.onBlur},e[23]=f.onBlur,e[24]=j);let M=s.eventStartDate?.message,N;e[25]===M?N=e[26]:(N={required:!0,status:`error`,messageIcon:`cancel`,message:M},e[25]=M,e[26]=N);let F=s.eventEndDate?.message,H;e[27]===F?H=e[28]:(H={required:!0,status:`error`,messageIcon:`cancel`,message:F},e[27]=F,e[28]=H);let U;e[29]!==A||e[30]!==j||e[31]!==N||e[32]!==H?(U={startDatePicker:A,endDatePicker:j,startDateFormControl:N,endDateFormControl:H},e[29]=A,e[30]=j,e[31]=N,e[32]=H,e[33]=U):U=e[33];let W;e[34]!==O||e[35]!==k||e[36]!==U?(W=(0,B.jsx)(m,{value:O,onChange:k,orientation:`vertical`,hideClearAll:!0,slotProps:U}),e[34]=O,e[35]=k,e[36]=U,e[37]=W):W=e[37];let G,K,q,J;e[38]===o?(G=e[39],K=e[40],q=e[41],J=e[42]):(G=(0,B.jsx)(y,{name:`contactMethod`,control:o,render:oe}),K=(0,B.jsx)(y,{name:`description`,control:o,render:se}),q=(0,B.jsx)(y,{name:`subscription`,control:o,render:I}),J=(0,B.jsx)(y,{name:`acceptTerms`,control:o,render:L}),e[38]=o,e[39]=G,e[40]=K,e[41]=q,e[42]=J);let Y;e[43]===p?Y=e[44]:(Y=(0,B.jsx)(c,{type:`submit`,disabled:p,loading:p,children:`Submit`}),e[43]=p,e[44]=Y);let X;e[45]!==C||e[46]!==T||e[47]!==W||e[48]!==G||e[49]!==K||e[50]!==q||e[51]!==J||e[52]!==Y||e[53]!==v||e[54]!==E||e[55]!==D?(X=(0,B.jsxs)(`form`,{onSubmit:v,style:x,children:[E,D,C,T,W,G,K,q,J,Y]}),e[45]=C,e[46]=T,e[47]=W,e[48]=G,e[49]=K,e[50]=q,e[51]=J,e[52]=Y,e[53]=v,e[54]=E,e[55]=D,e[56]=X):X=e[56];let Z;return e[57]!==r||e[58]!==X?(Z=(0,B.jsx)(b,{...r,children:X}),e[57]=r,e[58]=X,e[59]=Z):Z=e[59],Z}})),W,G,K,q,J,Y,X,Z,Q,$;t((()=>{x(),U(),{expect:W,screen:G,spyOn:K,userEvent:q,waitFor:J,within:Y}=__STORYBOOK_MODULE_TEST__,X={title:`Examples/SampleForm`,component:H,tags:[`!autodocs`],parameters:{layout:`centered`}},Z=q.setup({delay:null}),Q={play:async({canvasElement:e})=>{let t=Y(e),n=K(window,`alert`).mockImplementation(()=>{}),r=async e=>{await J(async()=>{await W(t.getByText(e)).toBeInTheDocument()})},i=async e=>{await J(async()=>{await W(t.queryByText(e)).not.toBeInTheDocument()})},a=t.getByLabelText(`Name`);await W(t.queryByText(`Name is required`)).not.toBeInTheDocument();let o=t.getByRole(`button`,{name:/submit/i});await Z.click(o),await r(`Name is required`);let s=`${_.person.firstName()} ${_.person.lastName()}`;await Z.type(a,s),await i(`Name is required`);let c=t.getByPlaceholderText(`Enter your email`);await r(`Invalid email address`),await Z.type(c,`invalid-email`),await r(`Invalid email address`);let l=_.internet.email();await Z.clear(c),await Z.type(c,l),await i(`Invalid email address`);let u=t.getByPlaceholderText(`Enter quantity`);await r(`Quantity is required`),await Z.type(u,`0`),await r(`Quantity must be at least 1`),await Z.clear(u),await Z.type(u,`1`),await i(`Quantity must be at least 1`);let d=t.getAllByPlaceholderText(`mm/dd/yyyy`),f=d[0],p=d[1],m=d[2];await r(`Birth date is required`),await Z.type(f,`12/25/2002`),await Z.tab(),await i(`Birth date is required`),await r(`Event start date is required`),await Z.type(p,`01/15/2025`),await Z.tab(),await i(`Event start date is required`),await r(`Event end date is required`),await Z.type(m,`01/20/2025`),await Z.tab(),await i(`Event end date is required`),await r(`Please select a contact method`);let h=t.getByLabelText(`Preferred Contact Method`);await Z.click(h);let g=G.getByRole(`option`,{name:`Email`});await Z.click(g),await i(`Please select a contact method`);let v=t.getByLabelText(`Description`);await r(`Short description is required (min. 20 chars)`),await Z.type(v,`Short text`),await r(`Short description is required (min. 20 chars)`);let y=_.lorem.sentence(5);await Z.clear(v),await Z.type(v,y),await i(`Short description is required (min. 20 chars)`),await r(`Please select a subscription plan`);let b=t.getByLabelText(`Pro`);await Z.click(b),await i(`Please select a subscription plan`),await r(`You must accept the terms and conditions`);let x=t.getByLabelText(`I accept the terms and conditions`);await Z.click(x),await i(`You must accept the terms and conditions`),await Z.click(x),await r(`You must accept the terms and conditions`),await Z.click(x),await i(`You must accept the terms and conditions`),await Z.click(o);let S=JSON.stringify({name:s,email:l,description:y,quantity:1,birthDate:new Date(2002,11,25).toISOString(),eventStartDate:new Date(2025,0,15).toISOString(),eventEndDate:new Date(2025,0,20).toISOString(),acceptTerms:!0,subscription:`pro`,contactMethod:`email`},null,2);await J(async()=>{await W(n).toHaveBeenCalledWith(S)})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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