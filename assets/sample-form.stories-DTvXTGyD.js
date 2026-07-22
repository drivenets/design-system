import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Z as n,k as r}from"./iframe-Mes93TAY.js";import{t as i}from"./compiler-runtime-CUdbb1L3.js";import{n as a,t as o}from"./ds-typography-C1uV5KQ9.js";import{n as s,t as c}from"./ds-button-v3-CPWaJEi5.js";import{i as l,t as u}from"./ds-checkbox-_zBVmw7v.js";import{r as d}from"./ds-form-control.types-CZSE3s2G.js";import{t as f}from"./ds-form-control-FLOskOpa.js";import{n as p,t as m}from"./ds-date-range-picker-MH5nFxkV.js";import{t as h}from"./ds-radio-group-DGrXyZxw.js";import{t as g}from"./ds-radio-group-PejCMVlJ.js";import{a as _,c as v,i as y,l as b,n as x,o as S,r as C,s as w,t as T}from"./zod-D-RrYL1W.js";import{c as E,i as D,l as O,n as k,r as A,s as j,t as M}from"./zod-zO8Mb99G.js";var N,P,F=e((()=>{M(),N=[`basic`,`pro`,`enterprise`],P=E({name:O().min(1,`Name is required`),email:O().email(`Invalid email address`),description:O().min(20,`Short description is required (min. 20 chars)`),quantity:j(`Quantity is required`).min(1,`Quantity must be at least 1`).max(100,`Quantity cannot exceed 100`),birthDate:D(`Birth date is required`),eventStartDate:D(`Event start date is required`),eventEndDate:D(`Event end date is required`),acceptTerms:A().refine(e=>e,`You must accept the terms and conditions`),subscription:k(N,{error:()=>`Please select a subscription plan`}),contactMethod:O().nonempty(`Please select a contact method`)})}));function I(e){return setTimeout(e,1e3)}function L(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(d,{label:`Name`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(d.TextInput,{placeholder:`Enter your name`,...t})})}function ee(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(d,{label:`Email`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(d.TextInput,{type:`email`,placeholder:`Enter your email`,...t})})}function te(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(d,{label:`Quantity`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(d.NumberInput,{placeholder:`Enter quantity`,min:1,max:100,step:1,value:t.value,onValueChange:t.onChange,onBlur:t.onBlur})})}function ne(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(d,{label:`Birth Date`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(d.DatePicker,{...t})})}function re(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(d,{label:`Preferred Contact Method`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(d.Select,{value:t.value,placeholder:`Select a contact method`,options:[{label:`Phone Call`,value:`phone`,icon:`call`},{label:`Email`,value:`email`,icon:`email`},{label:`SMS`,value:`sms`,icon:`sms`},{label:`In-App Notification`,value:`in_app`,icon:`notifications`}],clearable:!0,onClear:()=>t.onChange(``),onValueChange:t.onChange,onBlur:t.onBlur})})}function ie(e){let{field:t,fieldState:n}=e;return(0,B.jsx)(d,{label:`Description`,required:!0,status:`error`,messageIcon:`cancel`,message:n.error?.message,children:(0,B.jsx)(d.Textarea,{placeholder:`Enter your description`,...t})})}function ae(e){let{field:t,fieldState:n}=e;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h.Root,{value:t.value,onValueChange:e=>t.onChange(e??``),children:[(0,B.jsx)(h.Item,{value:`basic`,label:`Basic`}),(0,B.jsx)(h.Item,{value:`pro`,label:`Pro`}),(0,B.jsx)(h.Item,{value:`enterprise`,label:`Enterprise`})]}),n.error&&(0,B.jsx)(a,{variant:`body-xs-reg`,style:{color:`var(--background-error)`},children:n.error.message})]})}function oe(e){let{field:t,fieldState:n}=e;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(l,{label:`I accept the terms and conditions`,checked:t.value,onCheckedChange:e=>t.onChange(e===!0),onBlur:t.onBlur}),n.error&&(0,B.jsx)(a,{variant:`body-xs-reg`,style:{color:`var(--background-error)`},children:n.error.message})]})}var R,z,B,V,H,U=e((()=>{R=i(),_(),T(),f(),m(),g(),u(),o(),F(),z=t(n(),1),s(),B=r(),V={name:``,email:``,description:``,quantity:null,birthDate:null,eventStartDate:null,eventEndDate:null,acceptTerms:!1,subscription:``,contactMethod:``},H=()=>{let e=(0,R.c)(60),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=x(P),e[0]=t):t=e[0];let n;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n={resolver:t,defaultValues:V,mode:`onChange`},e[1]=n):n=e[1];let r=w(n),{handleSubmit:i,formState:a,control:o}=r,{errors:s}=a,l;e[2]===o?l=e[3]:(l={name:`eventStartDate`,control:o},e[2]=o,e[3]=l);let{field:u}=S(l),d;e[4]===o?d=e[5]:(d={name:`eventEndDate`,control:o},e[4]=o,e[5]=d);let{field:f}=S(d),[m,h]=(0,z.useState)(!1),g;e[6]===Symbol.for(`react.memo_cache_sentinel`)?(g=async e=>{h(!0),await new Promise(I),alert(JSON.stringify(e,null,2)),h(!1)},e[6]=g):g=e[6];let _=g,v;e[7]===i?v=e[8]:(v=i(_),e[7]=i,e[8]=v);let b;e[9]===Symbol.for(`react.memo_cache_sentinel`)?(b={display:`flex`,flexDirection:`column`,gap:`16px`,width:`300px`},e[9]=b):b=e[9];let T,E,D,O;e[10]===o?(T=e[11],E=e[12],D=e[13],O=e[14]):(D=(0,B.jsx)(C,{name:`name`,control:o,render:L}),O=(0,B.jsx)(C,{name:`email`,control:o,render:ee}),T=(0,B.jsx)(C,{name:`quantity`,control:o,render:te}),E=(0,B.jsx)(C,{name:`birthDate`,control:o,render:ne}),e[10]=o,e[11]=T,e[12]=E,e[13]=D,e[14]=O);let k;e[15]!==f.value||e[16]!==u.value?(k=[u.value,f.value],e[15]=f.value,e[16]=u.value,e[17]=k):k=e[17];let A;e[18]!==f||e[19]!==u?(A=e=>{let[t,n]=e;u.onChange(t),f.onChange(n)},e[18]=f,e[19]=u,e[20]=A):A=e[20];let j;e[21]===u.onBlur?j=e[22]:(j={onBlur:u.onBlur},e[21]=u.onBlur,e[22]=j);let M;e[23]===f.onBlur?M=e[24]:(M={onBlur:f.onBlur},e[23]=f.onBlur,e[24]=M);let N=s.eventStartDate?.message,F;e[25]===N?F=e[26]:(F={required:!0,status:`error`,messageIcon:`cancel`,message:N},e[25]=N,e[26]=F);let H=s.eventEndDate?.message,U;e[27]===H?U=e[28]:(U={required:!0,status:`error`,messageIcon:`cancel`,message:H},e[27]=H,e[28]=U);let W;e[29]!==j||e[30]!==M||e[31]!==F||e[32]!==U?(W={startDatePicker:j,endDatePicker:M,startDateFormControl:F,endDateFormControl:U},e[29]=j,e[30]=M,e[31]=F,e[32]=U,e[33]=W):W=e[33];let G;e[34]!==k||e[35]!==A||e[36]!==W?(G=(0,B.jsx)(p,{value:k,onChange:A,orientation:`vertical`,hideClearAll:!0,slotProps:W}),e[34]=k,e[35]=A,e[36]=W,e[37]=G):G=e[37];let K,q,J,Y;e[38]===o?(K=e[39],q=e[40],J=e[41],Y=e[42]):(K=(0,B.jsx)(C,{name:`contactMethod`,control:o,render:re}),q=(0,B.jsx)(C,{name:`description`,control:o,render:ie}),J=(0,B.jsx)(C,{name:`subscription`,control:o,render:ae}),Y=(0,B.jsx)(C,{name:`acceptTerms`,control:o,render:oe}),e[38]=o,e[39]=K,e[40]=q,e[41]=J,e[42]=Y);let X;e[43]===m?X=e[44]:(X=(0,B.jsx)(c,{type:`submit`,disabled:m,loading:m,children:`Submit`}),e[43]=m,e[44]=X);let Z;e[45]!==T||e[46]!==E||e[47]!==G||e[48]!==K||e[49]!==q||e[50]!==J||e[51]!==Y||e[52]!==X||e[53]!==v||e[54]!==D||e[55]!==O?(Z=(0,B.jsxs)(`form`,{onSubmit:v,style:b,children:[D,O,T,E,G,K,q,J,Y,X]}),e[45]=T,e[46]=E,e[47]=G,e[48]=K,e[49]=q,e[50]=J,e[51]=Y,e[52]=X,e[53]=v,e[54]=D,e[55]=O,e[56]=Z):Z=e[56];let Q;return e[57]!==r||e[58]!==Z?(Q=(0,B.jsx)(y,{...r,children:Z}),e[57]=r,e[58]=Z,e[59]=Q):Q=e[59],Q}})),W,G,K,q,J,Y,X,Z,Q,$;e((()=>{v(),U(),{expect:W,screen:G,spyOn:K,userEvent:q,waitFor:J,within:Y}=__STORYBOOK_MODULE_TEST__,X={title:`Examples/SampleForm`,component:H,tags:[`!autodocs`],parameters:{layout:`centered`}},Z=q.setup({delay:null}),Q={play:async({canvasElement:e})=>{let t=Y(e),n=K(window,`alert`).mockImplementation(()=>{}),r=async e=>{await J(async()=>{await W(t.getByText(e)).toBeInTheDocument()})},i=async e=>{await J(async()=>{await W(t.queryByText(e)).not.toBeInTheDocument()})},a=t.getByLabelText(`Name`);await W(t.queryByText(`Name is required`)).not.toBeInTheDocument();let o=t.getByRole(`button`,{name:/submit/i});await Z.click(o),await r(`Name is required`);let s=`${b.person.firstName()} ${b.person.lastName()}`;await Z.type(a,s),await i(`Name is required`);let c=t.getByPlaceholderText(`Enter your email`);await r(`Invalid email address`),await Z.type(c,`invalid-email`),await r(`Invalid email address`);let l=b.internet.email();await Z.clear(c),await Z.type(c,l),await i(`Invalid email address`);let u=t.getByPlaceholderText(`Enter quantity`);await r(`Quantity is required`),await Z.type(u,`0`),await r(`Quantity must be at least 1`),await Z.clear(u),await Z.type(u,`1`),await i(`Quantity must be at least 1`);let d=t.getAllByPlaceholderText(`mm/dd/yyyy`),f=d[0],p=d[1],m=d[2];await r(`Birth date is required`),await Z.type(f,`12/25/2002`),await Z.tab(),await i(`Birth date is required`),await r(`Event start date is required`),await Z.type(p,`01/15/2025`),await Z.tab(),await i(`Event start date is required`),await r(`Event end date is required`),await Z.type(m,`01/20/2025`),await Z.tab(),await i(`Event end date is required`),await r(`Please select a contact method`);let h=t.getByLabelText(`Preferred Contact Method`);await Z.click(h);let g=G.getByRole(`option`,{name:`Email`});await Z.click(g),await i(`Please select a contact method`);let _=t.getByLabelText(`Description`);await r(`Short description is required (min. 20 chars)`),await Z.type(_,`Short text`),await r(`Short description is required (min. 20 chars)`);let v=b.lorem.sentence(5);await Z.clear(_),await Z.type(_,v),await i(`Short description is required (min. 20 chars)`),await r(`Please select a subscription plan`);let y=t.getByLabelText(`Pro`);await Z.click(y),await i(`Please select a subscription plan`),await r(`You must accept the terms and conditions`);let x=t.getByLabelText(`I accept the terms and conditions`);await Z.click(x),await i(`You must accept the terms and conditions`),await Z.click(x),await r(`You must accept the terms and conditions`),await Z.click(x),await i(`You must accept the terms and conditions`),await Z.click(o);let S=JSON.stringify({name:s,email:l,description:v,quantity:1,birthDate:new Date(2002,11,25).toISOString(),eventStartDate:new Date(2025,0,15).toISOString(),eventEndDate:new Date(2025,0,20).toISOString(),acceptTerms:!0,subscription:`pro`,contactMethod:`email`},null,2);await J(async()=>{await W(n).toHaveBeenCalledWith(S)})}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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