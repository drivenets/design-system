import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-wIFIhz9k.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{i}from"./ds-icon.types-C8R610YQ.js";import{t as a}from"./ds-icon-B_49iixT.js";import{n as o,t as s}from"./ds-button-CNl_bP4L.js";import{r as c}from"./ds-checkbox.types-CzGqkzPn.js";import{t as l}from"./ds-checkbox-DuvoI3rV.js";import{o as u}from"./dialog-DrO_1Wlq.js";import{t as d}from"./dialog-DKKwtrWa.js";import{n as f,t as p}from"./ds-modal-CvdHjdCv.js";import{t as m}from"./ds-radio-group-CbV-6NvA.js";import{t as h}from"./ds-radio-group-h7C0AKSj.js";import{t as g}from"./ds-form-control-DaQOuvgG.js";import{_,a as v,c as y,d as b,f as x,g as ee,h as te,i as S,m as C,n as ne,p as re,r as ie,s as ae,t as oe,u as se}from"./ds-form-control-C4JQZJen.js";var ce,le,ue,de,fe,pe,me,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,he,z,B,ge=t((()=>{ce=`_storyContainer_1il54_1`,le=`_storyHeader_1il54_6`,ue=`_formResults_1il54_10`,de=`_formResultsTitle_1il54_18`,fe=`_formResultsGrid_1il54_23`,pe=`_clearResultsButton_1il54_28`,me=`_formSection_1il54_32`,w=`_formSectionTitle_1il54_38`,T=`_formGrid_1il54_45`,E=`_formGridThree_1il54_51`,D=`_inputLabel_1il54_58`,O=`_inputField_1il54_64`,k=`_customHeader_1il54_72`,A=`_headerButton_1il54_79`,j=`_customFooter_1il54_86`,M=`_customActions_1il54_94`,N=`_statusBadge_1il54_98`,P=`_footerButton_1il54_107`,F=`_footerButtonPrimary_1il54_115`,I=`_fileUploadArea_1il54_124`,L=`_uploadButton_1il54_132`,R=`_uploadText_1il54_143`,he=`_addButton_1il54_148`,z=`_errorMessage_1il54_159`,B={storyContainer:ce,storyHeader:le,formResults:ue,formResultsTitle:de,formResultsGrid:fe,clearResultsButton:pe,formSection:me,formSectionTitle:w,formGrid:T,formGridThree:E,inputLabel:D,inputField:O,customHeader:k,headerButton:A,customFooter:j,customActions:M,statusBadge:N,footerButton:P,footerButtonPrimary:F,fileUploadArea:I,uploadButton:L,uploadText:R,addButton:he,errorMessage:z}})),V,H,U,W,G,K,q,_e,ve,J,Y,X,Z,Q,$,ye;t((()=>{V=e(n(),1),d(),ee(),C(),b(),ne(),f(),ge(),s(),oe(),h(),l(),a(),H=r(),{expect:U,screen:W,userEvent:G,waitFor:K,within:q}=__STORYBOOK_MODULE_TEST__,_e={title:`Design System/Modal`,component:p,parameters:{layout:`centered`},args:{open:!1},argTypes:{open:{control:`boolean`,description:`Controls whether the modal is open`},dividers:{control:`boolean`,description:`Show full-width dividers between header, body, and footer sections`},columns:{control:`select`,options:Array(12).fill(0).map((e,t)=>t+1),description:`Number of grid columns for modal width`},className:{control:`text`,description:`Additional CSS class names`}}},ve=ae({name:y().min(1,`Name is required`),email:v(`Invalid email address`),department:y().min(1,`Please select a department`),role:y().min(1,`Please select a role`),description:y().min(20,`Description must be at least 20 characters`),acceptTerms:S().refine(e=>e,`You must accept the terms and conditions`),subscription:ie([`basic`,`pro`,`enterprise`],{error:()=>`Please select a subscription plan`})}),J={name:``,email:``,department:``,role:``,description:``,acceptTerms:!1,subscription:`basic`},Y={render:function(){let[e,t]=(0,V.useState)(!1);return(0,H.jsxs)(`div`,{className:B.storyContainer,children:[(0,H.jsxs)(`div`,{className:B.storyHeader,children:[(0,H.jsx)(`h2`,{children:`Default Modal`}),(0,H.jsx)(`p`,{children:`The default variant has an inset header underline and no footer border.`}),(0,H.jsx)(o,{design:`v1.2`,size:`large`,onClick:()=>t(!0),children:`Open Modal`})]}),(0,H.jsxs)(p,{open:e,columns:4,onOpenChange:t,children:[(0,H.jsxs)(p.Header,{children:[(0,H.jsx)(p.Title,{children:`Modal Title`}),(0,H.jsx)(p.CloseTrigger,{})]}),(0,H.jsx)(p.Body,{children:(0,H.jsx)(`p`,{children:`This is the default modal variant with simple content.`})}),(0,H.jsx)(p.Footer,{children:(0,H.jsxs)(p.Actions,{children:[(0,H.jsx)(o,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>t(!1),children:`Cancel`}),(0,H.jsx)(o,{design:`v1.2`,variant:`filled`,size:`large`,onClick:()=>t(!1),children:`Confirm`})]})})]})]})},play:async({canvasElement:e})=>{let t=q(e).getByRole(`button`,{name:/open modal/i});await G.click(t),await K(()=>U(W.getByRole(`dialog`)).toBeVisible()),await U(W.getByRole(`heading`,{name:/modal title/i})).toBeVisible();let n=W.getByRole(`button`,{name:/confirm/i});await G.click(n),await K(()=>U(W.queryByRole(`dialog`)).not.toBeInTheDocument())},parameters:{docs:{description:{story:`Default modal variant with inset header underline and no footer border.`}}}},X={render:function(){let[e,t]=(0,V.useState)(!1),[n,r]=(0,V.useState)(null),i=te({resolver:se(ve),defaultValues:J,mode:`onChange`}),{register:a,handleSubmit:s,formState:{errors:l,isValid:u,touchedFields:d,isDirty:f},setValue:h,watch:_,trigger:v,reset:y,control:b}=i,ee=e=>{r(e),t(!1),y(J)},S=()=>{y(J)},C=(e,t)=>{h(e,t===`indeterminate`?!1:t,{shouldValidate:!0,shouldTouch:!0,shouldDirty:!0})};return(0,H.jsxs)(`div`,{className:B.storyContainer,children:[(0,H.jsxs)(`div`,{className:B.storyHeader,children:[(0,H.jsx)(`h2`,{children:`Interactive Form Modal Demo`}),(0,H.jsx)(`p`,{children:`Click the button below to open a form modal. Fill out the form and click "Save Changes" to see the results displayed here.`}),(0,H.jsx)(o,{design:`v1.2`,size:`large`,onClick:()=>t(!0),children:`Open Form Modal`})]}),n&&(0,H.jsxs)(`div`,{className:B.formResults,children:[(0,H.jsx)(`h3`,{className:B.formResultsTitle,children:`Form Results:`}),(0,H.jsxs)(`div`,{className:B.formResultsGrid,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Name:`}),` `,n.name]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Email:`}),` `,n.email]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Department:`}),` `,n.department]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Role:`}),` `,n.role||`Not specified`]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Description:`}),` `,n.description]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Subscription:`}),` `,n.subscription]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`strong`,{children:`Terms Accepted:`}),` `,n.acceptTerms?`Yes`:`No`]})]}),(0,H.jsx)(o,{design:`v1.2`,buttonType:`secondary`,size:`small`,onClick:()=>r(null),className:B.clearResultsButton,children:`Clear Results`})]}),(0,H.jsxs)(p,{open:e,columns:8,dividers:!0,onOpenChange:t,children:[(0,H.jsxs)(p.Header,{children:[(0,H.jsx)(p.Title,{children:`User Profile Form`}),(0,H.jsx)(p.CloseTrigger,{})]}),(0,H.jsx)(p.Body,{children:(0,H.jsx)(re,{...i,children:(0,H.jsxs)(`div`,{className:B.formSection,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h3`,{className:B.formSectionTitle,children:`Basic Information`}),(0,H.jsxs)(`div`,{className:B.formGrid,children:[(0,H.jsx)(g,{label:`Full Name`,required:!0,status:`error`,messageIcon:`cancel`,message:d.name?l.name?.message:void 0,children:(0,H.jsx)(x,{name:`name`,control:b,render:({field:e})=>(0,H.jsx)(g.TextInput,{value:e.value,placeholder:`Enter full name`,onChange:e=>C(`name`,e.target.value),onBlur:e=>C(`name`,e.target.value)})})}),(0,H.jsx)(g,{label:`Email Address`,required:!0,status:`error`,messageIcon:`cancel`,message:d.email?l.email?.message:void 0,children:(0,H.jsx)(x,{name:`email`,control:b,render:({field:e})=>(0,H.jsx)(g.TextInput,{type:`email`,value:e.value,placeholder:`Enter email address`,onChange:e=>C(`email`,e.target.value),onBlur:e=>C(`email`,e.target.value)})})})]})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h3`,{className:B.formSectionTitle,children:`Work Information`}),(0,H.jsxs)(`div`,{className:B.formGrid,children:[(0,H.jsx)(g,{label:`Department`,required:!0,status:`error`,messageIcon:`cancel`,message:d.department?l.department?.message:void 0,children:(0,H.jsx)(x,{name:`department`,control:b,render:({field:e})=>(0,H.jsx)(g.Select,{value:e.value,placeholder:`Select a department`,options:[{label:`Engineering`,value:`engineering`},{label:`Product`,value:`product`},{label:`Design`,value:`design`},{label:`Marketing`,value:`marketing`},{label:`Sales`,value:`sales`},{label:`HR`,value:`hr`}],clearable:!0,onValueChange:e=>C(`department`,e),onBlur:()=>C(`department`,e.value)})})}),(0,H.jsx)(g,{label:`Role`,required:!0,status:`error`,messageIcon:`cancel`,message:d.role?l.role?.message:void 0,children:(0,H.jsx)(x,{name:`role`,control:b,render:({field:e})=>(0,H.jsx)(g.Select,{value:e.value,placeholder:`Select a role`,options:[{label:`Manager`,value:`manager`},{label:`Senior`,value:`senior`},{label:`Mid-level`,value:`mid`},{label:`Junior`,value:`junior`},{label:`Intern`,value:`intern`}],clearable:!0,onValueChange:e=>C(`role`,e),onBlur:()=>C(`role`,e.value)})})})]})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h3`,{className:B.formSectionTitle,children:`Subscription Plan`}),(0,H.jsxs)(m.Root,{value:_(`subscription`),onValueChange:e=>C(`subscription`,e),children:[(0,H.jsx)(m.Item,{value:`basic`,label:`Basic`}),(0,H.jsx)(m.Item,{value:`pro`,label:`Pro`}),(0,H.jsx)(m.Item,{value:`enterprise`,label:`Enterprise`})]}),l.subscription&&(0,H.jsx)(`span`,{className:B.errorMessage,children:l.subscription.message})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h3`,{className:B.formSectionTitle,children:`Additional Information`}),(0,H.jsx)(g,{label:`Description`,required:!0,status:`error`,messageIcon:`cancel`,message:d.description?l.description?.message:void 0,children:(0,H.jsx)(g.Textarea,{placeholder:`Enter a brief description about the user (min. 20 characters)...`,...a(`description`,{onBlur:()=>v(`description`),onChange:()=>v(`description`)})})})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(c,{label:`I accept the terms and conditions`,checked:_(`acceptTerms`),onCheckedChange:e=>C(`acceptTerms`,e)}),l.acceptTerms&&(0,H.jsx)(`span`,{className:B.errorMessage,children:l.acceptTerms.message})]})]})})}),(0,H.jsx)(p.Footer,{children:(0,H.jsxs)(p.Actions,{children:[(0,H.jsx)(o,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:S,children:`Reset`}),(0,H.jsx)(o,{design:`v1.2`,size:`large`,disabled:!f||!u,onClick:s(ee),children:`Save Changes`})]})})]})]})},play:async({canvasElement:e})=>{let t=q(e),n=async e=>{await K(()=>U(W.getByText(e)).toBeInTheDocument())},r=t.getByRole(`button`,{name:/open form modal/i});await G.click(r),await K(()=>U(W.getByText(`User Profile Form`)).toBeVisible());let i=W.getByLabelText(`Full Name`);await G.click(i),await G.tab(),await n(`Name is required`);let a=W.getByLabelText(`Email Address`);await G.click(a),await G.tab(),await n(`Invalid email address`);let o=W.getByLabelText(`Department`);await G.click(o),await G.tab(),await n(`Please select a department`);let s=W.getByLabelText(`Role`);await G.click(s),await G.tab(),await n(`Please select a role`);let c=W.getByLabelText(`Description`);await G.click(c),await G.tab(),await n(`Description must be at least 20 characters`);let l=W.getByLabelText(`I accept the terms and conditions`);await G.click(l),await G.click(l),await n(`You must accept the terms and conditions`);let u=`${_.person.firstName()} ${_.person.lastName()}`;await G.type(i,u),await K(()=>U(W.queryByText(`Name is required`)).not.toBeInTheDocument());let d=_.internet.email();await G.clear(a),await G.type(a,d),await K(()=>U(W.queryByText(`Invalid email address`)).not.toBeInTheDocument()),await G.click(o);let f=W.getByRole(`option`,{name:`Product`});await G.click(f),await K(()=>U(W.queryByText(`Please select a department`)).not.toBeInTheDocument()),await G.click(s);let p=W.getByRole(`option`,{name:`Manager`});await G.click(p),await K(()=>U(W.queryByText(`Please select a role`)).not.toBeInTheDocument());let m=_.lorem.sentence(5);await G.clear(c),await G.type(c,m),await K(()=>U(W.queryByText(`Description must be at least 20 characters`)).not.toBeInTheDocument());let h=W.getByLabelText(`Pro`);await G.click(h),await K(()=>U(W.queryByText(`Please select a subscription plan`)).not.toBeInTheDocument()),await G.click(l),await K(()=>U(W.queryByText(`You must accept the terms and conditions`)).not.toBeInTheDocument());let g=W.getByRole(`button`,{name:/save changes/i});await K(()=>U(g).toBeEnabled()),await G.click(g),await K(()=>U(W.queryByText(`User Profile Form`)).not.toBeVisible());let v=e=>U(t.getByText((t,n)=>n?.textContent===e)).toBeInTheDocument();await K(async()=>{await U(t.getByText(`Form Results:`)).toBeInTheDocument(),await v(`Name: ${u}`),await v(`Email: ${d}`),await v(`Role: manager`),await v(`Department: product`),await v(`Description: ${m}`),await v(`Subscription: pro`),await v(`Terms Accepted: Yes`)}),await G.click(r),await K(()=>U(W.getByText(`User Profile Form`)).toBeInTheDocument()),await K(async()=>{await U(i).toHaveValue(``),await U(a).toHaveValue(``),await U(c).toHaveValue(``),await U(l).not.toBeChecked()}),await G.type(i,`Test Name`),await G.type(a,`test@example.com`),await G.type(c,`This is a test description that is long enough`),await G.click(l);let y=W.getByRole(`button`,{name:/reset/i});await G.click(y),await K(async()=>{await U(i).toHaveValue(``),await U(a).toHaveValue(``),await U(c).toHaveValue(``),await U(l).not.toBeChecked()}),await G.keyboard(`{Escape}`),await G.click(t.getByRole(`button`,{name:/clear results/i})),await K(()=>U(t.queryByText(`Form Results:`)).not.toBeInTheDocument())},parameters:{docs:{description:{story:`The divided layout adds full-width borders on header and footer for clear visual separation. This example demonstrates form state management using react-hook-form with Zod validation.`}}}},Z={render:function(){let[e,t]=(0,V.useState)(!1);return(0,H.jsxs)(`div`,{className:B.storyContainer,children:[(0,H.jsxs)(`div`,{className:B.storyHeader,children:[(0,H.jsx)(`h2`,{children:`Custom Modal Demo`}),(0,H.jsx)(`p`,{children:`Click the button below to open a custom modal with custom header and footer content.`}),(0,H.jsx)(o,{design:`v1.2`,size:`large`,onClick:()=>t(!0),children:`Open Custom Modal`})]}),(0,H.jsxs)(p,{open:e,columns:4,dividers:!0,onOpenChange:t,children:[(0,H.jsx)(p.Header,{children:(0,H.jsxs)(`div`,{className:B.customHeader,children:[(0,H.jsx)(`button`,{className:B.headerButton,children:`⋯`}),(0,H.jsx)(u,{className:B.headerButton,children:`✕`})]})}),(0,H.jsx)(p.Body,{children:(0,H.jsxs)(`div`,{className:B.formSection,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h3`,{className:B.formSectionTitle,children:`Project Details`}),(0,H.jsxs)(`div`,{className:B.formGrid,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`label`,{htmlFor:`project-name`,className:B.inputLabel,children:`Project Name`}),(0,H.jsx)(`input`,{id:`project-name`,type:`text`,placeholder:`Enter project name`,className:B.inputField})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`label`,{htmlFor:`category`,className:B.inputLabel,children:`Category`}),(0,H.jsx)(`input`,{id:`category`,type:`text`,placeholder:`Select category`,className:B.inputField})]})]})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h3`,{className:B.formSectionTitle,children:`Team Information`}),(0,H.jsxs)(`div`,{className:B.formGrid,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`label`,{htmlFor:`team-lead`,className:B.inputLabel,children:`Team Lead`}),(0,H.jsx)(`input`,{id:`team-lead`,type:`text`,placeholder:`Enter team lead name`,className:B.inputField})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`label`,{htmlFor:`team-size`,className:B.inputLabel,children:`Team Size`}),(0,H.jsx)(`input`,{id:`team-size`,type:`text`,placeholder:`Number of team members`,className:B.inputField})]})]})]}),(0,H.jsx)(`div`,{children:(0,H.jsxs)(`div`,{className:B.formGridThree,children:[(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`label`,{htmlFor:`budget`,className:B.inputLabel,children:`Budget`}),(0,H.jsx)(`input`,{id:`budget`,type:`text`,placeholder:`Enter budget amount`,className:B.inputField})]}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`label`,{htmlFor:`timeline`,className:B.inputLabel,children:`Timeline`}),(0,H.jsx)(`input`,{id:`timeline`,type:`text`,placeholder:`Project duration`,className:B.inputField})]}),(0,H.jsx)(`button`,{className:B.addButton,children:`+`})]})}),(0,H.jsxs)(`div`,{children:[(0,H.jsx)(`h3`,{className:B.formSectionTitle,children:`Project Documents`}),(0,H.jsxs)(`div`,{className:B.fileUploadArea,children:[(0,H.jsx)(`button`,{className:B.uploadButton,children:`☁️ Upload file`}),(0,H.jsx)(`div`,{className:B.uploadText,children:`or drag and drop to upload`})]})]})]})}),(0,H.jsx)(p.Footer,{children:(0,H.jsxs)(`div`,{className:B.customFooter,children:[(0,H.jsx)(`div`,{className:B.statusBadge,children:`All done`}),(0,H.jsxs)(p.Actions,{className:B.customActions,children:[(0,H.jsx)(`button`,{className:B.footerButton,children:`Discard`}),(0,H.jsx)(`button`,{className:B.footerButtonPrimary,children:`Save Changes`})]})]})})]})]})},play:async({canvasElement:e})=>{let t=q(e).getByRole(`button`,{name:/open custom modal/i});await G.click(t),await K(()=>U(W.getByRole(`dialog`)).toBeVisible()),await U(W.getByText(`Project Details`)).toBeVisible();let n=W.getByRole(`button`,{name:/✕/i});await G.click(n),await K(()=>U(W.queryByRole(`dialog`)).not.toBeInTheDocument())},parameters:{docs:{description:{story:`A custom modal with custom header and footer content, demonstrating how to override the default modal structure with custom components.`}}}},Q={render:function(){let[e,t]=(0,V.useState)(!1);return(0,H.jsxs)(`div`,{className:B.storyContainer,children:[(0,H.jsxs)(`div`,{className:B.storyHeader,children:[(0,H.jsx)(`h2`,{children:`Modal with Icon`}),(0,H.jsx)(`p`,{children:`Example showing how to add an icon to the modal header.`}),(0,H.jsx)(o,{design:`v1.2`,size:`large`,onClick:()=>t(!0),children:`Open Modal`})]}),(0,H.jsxs)(p,{open:e,columns:4,onOpenChange:t,children:[(0,H.jsxs)(p.Header,{children:[(0,H.jsx)(i,{icon:`info`,size:`small`}),(0,H.jsx)(p.Title,{children:`Session Timeout`}),(0,H.jsx)(p.CloseTrigger,{})]}),(0,H.jsx)(p.Body,{children:(0,H.jsx)(`p`,{children:`Your session will expire in 5 minutes due to inactivity.`})})]})]})},play:async({canvasElement:e})=>{let t=q(e).getByRole(`button`,{name:/open modal/i});await G.click(t),await K(()=>U(W.getByRole(`dialog`)).toBeVisible()),await U(W.getByRole(`heading`,{name:/session timeout/i})).toBeVisible(),await U(W.getByText(/session will expire/i)).toBeVisible(),await G.keyboard(`{Escape}`),await K(()=>U(W.queryByRole(`dialog`)).not.toBeInTheDocument())},parameters:{docs:{description:{story:`Example showing how to add an icon to the modal header by composing DsIcon with DsModal.Header.`}}}},$={render:function(){let[e,t]=(0,V.useState)(!1);return(0,H.jsxs)(`div`,{className:B.storyContainer,children:[(0,H.jsxs)(`div`,{className:B.storyHeader,children:[(0,H.jsx)(`h2`,{children:`Modal Without Header`}),(0,H.jsx)(`p`,{children:`Modal with only body and footer content, no header section.`}),(0,H.jsx)(o,{design:`v1.2`,size:`large`,onClick:()=>t(!0),children:`Open Modal`})]}),(0,H.jsxs)(p,{open:e,columns:4,onOpenChange:t,children:[(0,H.jsx)(p.Body,{children:(0,H.jsx)(`p`,{children:`This modal has no header section. Use this pattern when you want a cleaner look without the header underline.`})}),(0,H.jsx)(p.Footer,{children:(0,H.jsxs)(p.Actions,{children:[(0,H.jsx)(o,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>t(!1),children:`Close`}),(0,H.jsx)(o,{design:`v1.2`,variant:`filled`,size:`large`,onClick:()=>t(!1),children:`Continue`})]})})]})]})},play:async({canvasElement:e})=>{let t=q(e).getByRole(`button`,{name:/open modal/i});await G.click(t),await K(()=>U(W.getByRole(`dialog`)).toBeVisible()),await U(q(W.getByRole(`dialog`)).getByText(/no header section/i)).toBeVisible();let n=W.getByRole(`button`,{name:/continue/i});await U(n).toBeVisible(),await G.click(n),await K(()=>U(W.queryByRole(`dialog`)).not.toBeInTheDocument())},parameters:{docs:{description:{story:`Modal without a header component - use this pattern instead of a variant when you want no header underline.`}}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className={styles.storyContainer}>
                <div className={styles.storyHeader}>
                    <h2>Default Modal</h2>
                    <p>The default variant has an inset header underline and no footer border.</p>
                    <DsButton design="v1.2" size="large" onClick={() => setIsOpen(true)}>
                        Open Modal
                    </DsButton>
                </div>

                <DsModal open={isOpen} columns={4} onOpenChange={setIsOpen}>
                    <DsModal.Header>
                        <DsModal.Title>Modal Title</DsModal.Title>
                        <DsModal.CloseTrigger />
                    </DsModal.Header>
                    <DsModal.Body>
                        <p>This is the default modal variant with simple content.</p>
                    </DsModal.Body>
                    <DsModal.Footer>
                        <DsModal.Actions>
                            <DsButton design="v1.2" buttonType="secondary" size="large" onClick={() => setIsOpen(false)}>
                                Cancel
                            </DsButton>
                            <DsButton design="v1.2" variant="filled" size="large" onClick={() => setIsOpen(false)}>
                                Confirm
                            </DsButton>
                        </DsModal.Actions>
                    </DsModal.Footer>
                </DsModal>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openModalButton = canvas.getByRole('button', {
      name: /open modal/i
    });
    await userEvent.click(openModalButton);
    await waitFor(() => {
      return expect(screen.getByRole('dialog')).toBeVisible();
    });
    await expect(screen.getByRole('heading', {
      name: /modal title/i
    })).toBeVisible();
    const confirmButton = screen.getByRole('button', {
      name: /confirm/i
    });
    await userEvent.click(confirmButton);
    await waitFor(() => {
      return expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Default modal variant with inset header underline and no footer border.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const [submittedData, setSubmittedData] = useState<ModalFormValues | null>(null);
    const methods = useForm<ModalFormValues>({
      resolver: zodResolver(modalFormSchema),
      defaultValues: defaultFormValues,
      mode: 'onChange'
    });
    const {
      register,
      handleSubmit,
      formState: {
        errors,
        isValid,
        touchedFields,
        isDirty
      },
      setValue,
      watch,
      trigger,
      reset,
      control
    } = methods;
    const onSubmit: SubmitHandler<ModalFormValues> = (data: ModalFormValues) => {
      setSubmittedData(data);
      setIsOpen(false);
      reset(defaultFormValues);
    };
    const handleReset = () => {
      reset(defaultFormValues);
    };
    const handleValueChange = (field: keyof ModalFormValues, value: string | boolean | null) => {
      setValue(field, value === 'indeterminate' ? false : value as ModalFormValues[typeof field], {
        shouldValidate: true,
        shouldTouch: true,
        shouldDirty: true
      });
    };
    return <div className={styles.storyContainer}>
                <div className={styles.storyHeader}>
                    <h2>Interactive Form Modal Demo</h2>
                    <p>
                        Click the button below to open a form modal. Fill out the form and click &#34;Save Changes&#34; to
                        see the results displayed here.
                    </p>
                    <DsButton design="v1.2" size="large" onClick={() => setIsOpen(true)}>
                        Open Form Modal
                    </DsButton>
                </div>

                {submittedData && <div className={styles.formResults}>
                        <h3 className={styles.formResultsTitle}>Form Results:</h3>
                        <div className={styles.formResultsGrid}>
                            <div>
                                <strong>Name:</strong> {submittedData.name}
                            </div>
                            <div>
                                <strong>Email:</strong> {submittedData.email}
                            </div>
                            <div>
                                <strong>Department:</strong> {submittedData.department}
                            </div>
                            <div>
                                <strong>Role:</strong> {submittedData.role || 'Not specified'}
                            </div>
                            <div>
                                <strong>Description:</strong> {submittedData.description}
                            </div>
                            <div>
                                <strong>Subscription:</strong> {submittedData.subscription}
                            </div>
                            <div>
                                <strong>Terms Accepted:</strong> {submittedData.acceptTerms ? 'Yes' : 'No'}
                            </div>
                        </div>
                        <DsButton design="v1.2" buttonType="secondary" size="small" onClick={() => setSubmittedData(null)} className={styles.clearResultsButton}>
                            Clear Results
                        </DsButton>
                    </div>}

                <DsModal open={isOpen} columns={8} dividers onOpenChange={setIsOpen}>
                    <DsModal.Header>
                        <DsModal.Title>User Profile Form</DsModal.Title>
                        <DsModal.CloseTrigger />
                    </DsModal.Header>
                    <DsModal.Body>
                        <FormProvider {...methods}>
                            <div className={styles.formSection}>
                                {/* Basic Information Section */}
                                <div>
                                    <h3 className={styles.formSectionTitle}>Basic Information</h3>
                                    <div className={styles.formGrid}>
                                        <DsFormControl label="Full Name" required status="error" messageIcon="cancel" message={touchedFields.name ? errors.name?.message : undefined}>
                                            <Controller name="name" control={control} render={({
                      field
                    }) => <DsFormControl.TextInput value={field.value} placeholder="Enter full name" onChange={event => handleValueChange('name', event.target.value)} onBlur={event => handleValueChange('name', event.target.value)} />} />
                                        </DsFormControl>
                                        <DsFormControl label="Email Address" required status="error" messageIcon="cancel" message={touchedFields.email ? errors.email?.message : undefined}>
                                            <Controller name="email" control={control} render={({
                      field
                    }) => <DsFormControl.TextInput type="email" value={field.value} placeholder="Enter email address" onChange={event => handleValueChange('email', event.target.value)} onBlur={event => handleValueChange('email', event.target.value)} />} />
                                        </DsFormControl>
                                    </div>
                                </div>

                                {/* Work Information Section */}
                                <div>
                                    <h3 className={styles.formSectionTitle}>Work Information</h3>
                                    <div className={styles.formGrid}>
                                        <DsFormControl label="Department" required status="error" messageIcon="cancel" message={touchedFields.department ? errors.department?.message : undefined}>
                                            <Controller name="department" control={control} render={({
                      field
                    }) => <DsFormControl.Select value={field.value} placeholder="Select a department" options={[{
                      label: 'Engineering',
                      value: 'engineering'
                    }, {
                      label: 'Product',
                      value: 'product'
                    }, {
                      label: 'Design',
                      value: 'design'
                    }, {
                      label: 'Marketing',
                      value: 'marketing'
                    }, {
                      label: 'Sales',
                      value: 'sales'
                    }, {
                      label: 'HR',
                      value: 'hr'
                    }]} clearable onValueChange={value => handleValueChange('department', value)} onBlur={() => handleValueChange('department', field.value)} />} />
                                        </DsFormControl>
                                        <DsFormControl label="Role" required status="error" messageIcon="cancel" message={touchedFields.role ? errors.role?.message : undefined}>
                                            <Controller name="role" control={control} render={({
                      field
                    }) => <DsFormControl.Select value={field.value} placeholder="Select a role" options={[{
                      label: 'Manager',
                      value: 'manager'
                    }, {
                      label: 'Senior',
                      value: 'senior'
                    }, {
                      label: 'Mid-level',
                      value: 'mid'
                    }, {
                      label: 'Junior',
                      value: 'junior'
                    }, {
                      label: 'Intern',
                      value: 'intern'
                    }]} clearable onValueChange={value => handleValueChange('role', value)} onBlur={() => handleValueChange('role', field.value)} />} />
                                        </DsFormControl>
                                    </div>
                                </div>

                                {/* Subscription Section */}
                                <div>
                                    <h3 className={styles.formSectionTitle}>Subscription Plan</h3>
                                    <DsRadioGroup.Root value={watch('subscription')} onValueChange={value => handleValueChange('subscription', value)}>
                                        <DsRadioGroup.Item value="basic" label="Basic" />
                                        <DsRadioGroup.Item value="pro" label="Pro" />
                                        <DsRadioGroup.Item value="enterprise" label="Enterprise" />
                                    </DsRadioGroup.Root>
                                    {errors.subscription && <span className={styles.errorMessage}>{errors.subscription.message}</span>}
                                </div>

                                {/* Additional Information Section */}
                                <div>
                                    <h3 className={styles.formSectionTitle}>Additional Information</h3>
                                    <DsFormControl label="Description" required status="error" messageIcon="cancel" message={touchedFields.description ? errors.description?.message : undefined}>
                                        <DsFormControl.Textarea placeholder="Enter a brief description about the user (min. 20 characters)..." {...register('description', {
                    onBlur: () => trigger('description'),
                    onChange: () => trigger('description')
                  })} />
                                    </DsFormControl>
                                </div>

                                {/* Terms and Conditions */}
                                <div>
                                    <DsCheckbox label="I accept the terms and conditions" checked={watch('acceptTerms')} onCheckedChange={value => handleValueChange('acceptTerms', value)} />
                                    {errors.acceptTerms && <span className={styles.errorMessage}>{errors.acceptTerms.message}</span>}
                                </div>
                            </div>
                        </FormProvider>
                    </DsModal.Body>
                    <DsModal.Footer>
                        <DsModal.Actions>
                            <DsButton design="v1.2" buttonType="secondary" size="large" onClick={handleReset}>
                                Reset
                            </DsButton>
                            <DsButton design="v1.2" size="large" disabled={!isDirty || !isValid} onClick={handleSubmit(onSubmit)}>
                                Save Changes
                            </DsButton>
                        </DsModal.Actions>
                    </DsModal.Footer>
                </DsModal>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const waitForMessage = async (text: string) => {
      await waitFor(() => {
        return expect(screen.getByText(text)).toBeInTheDocument();
      });
    };
    const openModalButton = canvas.getByRole('button', {
      name: /open form modal/i
    });
    await userEvent.click(openModalButton);
    await waitFor(() => {
      return expect(screen.getByText('User Profile Form')).toBeVisible();
    });

    // 2. Test form validation by interacting with fields and blurring them
    // Test name field validation
    const nameInput = screen.getByLabelText('Full Name');
    await userEvent.click(nameInput);
    await userEvent.tab();
    await waitForMessage('Name is required');

    // Test email field validation
    const emailInput = screen.getByLabelText('Email Address');
    await userEvent.click(emailInput);
    await userEvent.tab();
    await waitForMessage('Invalid email address');

    // Test department field validation
    const departmentSelect = screen.getByLabelText('Department');
    await userEvent.click(departmentSelect);
    await userEvent.tab();
    await waitForMessage('Please select a department');

    // Test role field validation
    const roleSelect = screen.getByLabelText('Role');
    await userEvent.click(roleSelect);
    await userEvent.tab();
    await waitForMessage('Please select a role');

    // Test description field validation
    const descriptionInput = screen.getByLabelText('Description');
    await userEvent.click(descriptionInput);
    await userEvent.tab();
    await waitForMessage('Description must be at least 20 characters');

    // Test terms checkbox validation
    const acceptTermsCheckbox = screen.getByLabelText('I accept the terms and conditions');
    await userEvent.click(acceptTermsCheckbox);
    await userEvent.click(acceptTermsCheckbox);
    await waitForMessage('You must accept the terms and conditions');

    // 3. Fill out the form with valid data
    // Fill name
    const fakeName = \`\${faker.person.firstName()} \${faker.person.lastName()}\`;
    await userEvent.type(nameInput, fakeName);
    await waitFor(() => {
      return expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
    });

    // Fill email
    const fakeEmail = faker.internet.email();
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, fakeEmail);
    await waitFor(() => {
      return expect(screen.queryByText('Invalid email address')).not.toBeInTheDocument();
    });

    // Select department
    await userEvent.click(departmentSelect);
    const departmentOption = screen.getByRole('option', {
      name: 'Product'
    });
    await userEvent.click(departmentOption);
    await waitFor(() => {
      return expect(screen.queryByText('Please select a department')).not.toBeInTheDocument();
    });

    // Select role
    await userEvent.click(roleSelect);
    const roleOption = screen.getByRole('option', {
      name: 'Manager'
    });
    await userEvent.click(roleOption);
    await waitFor(() => {
      return expect(screen.queryByText('Please select a role')).not.toBeInTheDocument();
    });

    // Fill description
    const fakeDescription = faker.lorem.sentence(5);
    await userEvent.clear(descriptionInput);
    await userEvent.type(descriptionInput, fakeDescription);
    await waitFor(() => {
      return expect(screen.queryByText('Description must be at least 20 characters')).not.toBeInTheDocument();
    });

    // Select subscription
    const subscriptionOption = screen.getByLabelText('Pro');
    await userEvent.click(subscriptionOption);
    await waitFor(() => {
      return expect(screen.queryByText('Please select a subscription plan')).not.toBeInTheDocument();
    });

    // Accept terms
    await userEvent.click(acceptTermsCheckbox);
    await waitFor(() => {
      return expect(screen.queryByText('You must accept the terms and conditions')).not.toBeInTheDocument();
    });

    // 4. Verify submit button is enabled
    const saveButton = screen.getByRole('button', {
      name: /save changes/i
    });
    await waitFor(() => {
      return expect(saveButton).toBeEnabled();
    });

    // 5. Submit the form
    await userEvent.click(saveButton);

    // 6. Verify modal is closed and results are displayed
    await waitFor(() => {
      return expect(screen.queryByText('User Profile Form')).not.toBeVisible();
    });
    const checkResult = (text: string) => {
      return expect(canvas.getByText((content, element) => {
        return element?.textContent === text;
      })).toBeInTheDocument();
    };

    // Verify results are displayed
    await waitFor(async () => {
      await expect(canvas.getByText('Form Results:')).toBeInTheDocument();
      await checkResult(\`Name: \${fakeName}\`);
      await checkResult(\`Email: \${fakeEmail}\`);
      await checkResult('Role: manager');
      await checkResult('Department: product');
      await checkResult(\`Description: \${fakeDescription}\`);
      await checkResult('Subscription: pro');
      await checkResult('Terms Accepted: Yes');
    });

    // 7. Test reset functionality
    await userEvent.click(openModalButton);
    await waitFor(() => {
      return expect(screen.getByText('User Profile Form')).toBeInTheDocument();
    });

    // Verify form is reset to default values
    await waitFor(async () => {
      await expect(nameInput).toHaveValue('');
      await expect(emailInput).toHaveValue('');
      await expect(descriptionInput).toHaveValue('');
      await expect(acceptTermsCheckbox).not.toBeChecked();
    });

    // 8. Test reset button
    // Fill some data first
    await userEvent.type(nameInput, 'Test Name');
    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(descriptionInput, 'This is a test description that is long enough');
    await userEvent.click(acceptTermsCheckbox);

    // Click reset button
    const resetButton = screen.getByRole('button', {
      name: /reset/i
    });
    await userEvent.click(resetButton);

    // Verify form is reset
    await waitFor(async () => {
      await expect(nameInput).toHaveValue('');
      await expect(emailInput).toHaveValue('');
      await expect(descriptionInput).toHaveValue('');
      await expect(acceptTermsCheckbox).not.toBeChecked();
    });

    // Exit the modal form
    await userEvent.keyboard('{Escape}');

    // 9. Test clear results functionality
    await userEvent.click(canvas.getByRole('button', {
      name: /clear results/i
    }));
    await waitFor(() => {
      return expect(canvas.queryByText('Form Results:')).not.toBeInTheDocument();
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'The divided layout adds full-width borders on header and footer for clear visual separation. This example demonstrates form state management using react-hook-form with Zod validation.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className={styles.storyContainer}>
                <div className={styles.storyHeader}>
                    <h2>Custom Modal Demo</h2>
                    <p>Click the button below to open a custom modal with custom header and footer content.</p>
                    <DsButton design="v1.2" size="large" onClick={() => setIsOpen(true)}>
                        Open Custom Modal
                    </DsButton>
                </div>

                <DsModal open={isOpen} columns={4} dividers onOpenChange={setIsOpen}>
                    <DsModal.Header>
                        <div className={styles.customHeader}>
                            <button className={styles.headerButton}>⋯</button>
                            <Dialog.CloseTrigger className={styles.headerButton}>✕</Dialog.CloseTrigger>
                        </div>
                    </DsModal.Header>
                    <DsModal.Body>
                        <div className={styles.formSection}>
                            {/* First Section */}
                            <div>
                                <h3 className={styles.formSectionTitle}>Project Details</h3>
                                <div className={styles.formGrid}>
                                    <div>
                                        <label htmlFor="project-name" className={styles.inputLabel}>
                                            Project Name
                                        </label>
                                        <input id="project-name" type="text" placeholder="Enter project name" className={styles.inputField} />
                                    </div>
                                    <div>
                                        <label htmlFor="category" className={styles.inputLabel}>
                                            Category
                                        </label>
                                        <input id="category" type="text" placeholder="Select category" className={styles.inputField} />
                                    </div>
                                </div>
                            </div>

                            {/* Second Section */}
                            <div>
                                <h3 className={styles.formSectionTitle}>Team Information</h3>
                                <div className={styles.formGrid}>
                                    <div>
                                        <label htmlFor="team-lead" className={styles.inputLabel}>
                                            Team Lead
                                        </label>
                                        <input id="team-lead" type="text" placeholder="Enter team lead name" className={styles.inputField} />
                                    </div>
                                    <div>
                                        <label htmlFor="team-size" className={styles.inputLabel}>
                                            Team Size
                                        </label>
                                        <input id="team-size" type="text" placeholder="Number of team members" className={styles.inputField} />
                                    </div>
                                </div>
                            </div>

                            {/* Third Group */}
                            <div>
                                <div className={styles.formGridThree}>
                                    <div>
                                        <label htmlFor="budget" className={styles.inputLabel}>
                                            Budget
                                        </label>
                                        <input id="budget" type="text" placeholder="Enter budget amount" className={styles.inputField} />
                                    </div>
                                    <div>
                                        <label htmlFor="timeline" className={styles.inputLabel}>
                                            Timeline
                                        </label>
                                        <input id="timeline" type="text" placeholder="Project duration" className={styles.inputField} />
                                    </div>
                                    <button className={styles.addButton}>+</button>
                                </div>
                            </div>

                            {/* File Upload Section */}
                            <div>
                                <h3 className={styles.formSectionTitle}>Project Documents</h3>
                                <div className={styles.fileUploadArea}>
                                    <button className={styles.uploadButton}>☁️ Upload file</button>
                                    <div className={styles.uploadText}>or drag and drop to upload</div>
                                </div>
                            </div>
                        </div>
                    </DsModal.Body>
                    <DsModal.Footer>
                        <div className={styles.customFooter}>
                            <div className={styles.statusBadge}>All done</div>
                            <DsModal.Actions className={styles.customActions}>
                                <button className={styles.footerButton}>Discard</button>
                                <button className={styles.footerButtonPrimary}>Save Changes</button>
                            </DsModal.Actions>
                        </div>
                    </DsModal.Footer>
                </DsModal>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', {
      name: /open custom modal/i
    });
    await userEvent.click(openButton);
    await waitFor(() => {
      return expect(screen.getByRole('dialog')).toBeVisible();
    });
    await expect(screen.getByText('Project Details')).toBeVisible();
    const closeButton = screen.getByRole('button', {
      name: /✕/i
    });
    await userEvent.click(closeButton);
    await waitFor(() => {
      return expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'A custom modal with custom header and footer content, demonstrating how to override the default modal structure with custom components.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className={styles.storyContainer}>
                <div className={styles.storyHeader}>
                    <h2>Modal with Icon</h2>
                    <p>Example showing how to add an icon to the modal header.</p>
                    <DsButton design="v1.2" size="large" onClick={() => setIsOpen(true)}>
                        Open Modal
                    </DsButton>
                </div>

                <DsModal open={isOpen} columns={4} onOpenChange={setIsOpen}>
                    <DsModal.Header>
                        <DsIcon icon="info" size="small" />
                        <DsModal.Title>Session Timeout</DsModal.Title>
                        <DsModal.CloseTrigger />
                    </DsModal.Header>
                    <DsModal.Body>
                        <p>Your session will expire in 5 minutes due to inactivity.</p>
                    </DsModal.Body>
                </DsModal>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openModalButton = canvas.getByRole('button', {
      name: /open modal/i
    });
    await userEvent.click(openModalButton);
    await waitFor(() => {
      return expect(screen.getByRole('dialog')).toBeVisible();
    });
    await expect(screen.getByRole('heading', {
      name: /session timeout/i
    })).toBeVisible();
    await expect(screen.getByText(/session will expire/i)).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      return expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing how to add an icon to the modal header by composing DsIcon with DsModal.Header.'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return <div className={styles.storyContainer}>
                <div className={styles.storyHeader}>
                    <h2>Modal Without Header</h2>
                    <p>Modal with only body and footer content, no header section.</p>
                    <DsButton design="v1.2" size="large" onClick={() => setIsOpen(true)}>
                        Open Modal
                    </DsButton>
                </div>

                <DsModal open={isOpen} columns={4} onOpenChange={setIsOpen}>
                    <DsModal.Body>
                        <p>
                            This modal has no header section. Use this pattern when you want a cleaner look without the
                            header underline.
                        </p>
                    </DsModal.Body>
                    <DsModal.Footer>
                        <DsModal.Actions>
                            <DsButton design="v1.2" buttonType="secondary" size="large" onClick={() => setIsOpen(false)}>
                                Close
                            </DsButton>
                            <DsButton design="v1.2" variant="filled" size="large" onClick={() => setIsOpen(false)}>
                                Continue
                            </DsButton>
                        </DsModal.Actions>
                    </DsModal.Footer>
                </DsModal>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openModalButton = canvas.getByRole('button', {
      name: /open modal/i
    });
    await userEvent.click(openModalButton);
    await waitFor(() => {
      return expect(screen.getByRole('dialog')).toBeVisible();
    });
    const dialog = screen.getByRole('dialog');
    await expect(within(dialog).getByText(/no header section/i)).toBeVisible();
    const continueButton = screen.getByRole('button', {
      name: /continue/i
    });
    await expect(continueButton).toBeVisible();
    await userEvent.click(continueButton);
    await waitFor(() => {
      return expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal without a header component - use this pattern instead of a variant when you want no header underline.'
      }
    }
  }
}`,...$.parameters?.docs?.source}}},ye=[`Default`,`Divided`,`Custom`,`WithIcon`,`WithoutHeader`]}))();export{Z as Custom,Y as Default,X as Divided,Q as WithIcon,$ as WithoutHeader,ye as __namedExportsOrder,_e as default};