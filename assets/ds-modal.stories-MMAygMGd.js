import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-WTiOXMpf.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./ds-icon-DlJlTnsu.js";import{t as a}from"./ds-icon-DQeun4-5.js";import{P as o}from"./dist-Dv5OSJi_.js";import{n as s,t as c}from"./ds-button-35VzR_pK.js";import{r as l}from"./ds-checkbox.types-Bc9Tu63z.js";import{t as u}from"./ds-checkbox-C_VgAm7l.js";import{r as d}from"./ds-form-control.types-DsZ2gOqd.js";import{t as f}from"./ds-form-control-DcIoQlum.js";import{r as p}from"./use-ark-dialog-body-lock-cleanup-Dt8uNePb.js";import{n as m,t as h}from"./ds-modal-ebHP5Wx5.js";import{t as g}from"./ds-radio-group-CyE29GVX.js";import{t as _}from"./ds-radio-group-BrTYxZjE.js";import{a as v,c as y,i as ee,l as b,n as te,r as x,s as ne,t as re}from"./zod-SKi3epq5.js";import{a as ie,c as S,l as C,n as ae,r as oe,t as se}from"./zod-zO8Mb99G.js";var ce,le,ue,de,fe,pe,me,he,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,ge,z,_e=e((()=>{ce=`_storyContainer_1il54_1`,le=`_storyHeader_1il54_6`,ue=`_formResults_1il54_10`,de=`_formResultsTitle_1il54_18`,fe=`_formResultsGrid_1il54_23`,pe=`_clearResultsButton_1il54_28`,me=`_formSection_1il54_32`,he=`_formSectionTitle_1il54_38`,w=`_formGrid_1il54_45`,T=`_formGridThree_1il54_51`,E=`_inputLabel_1il54_58`,D=`_inputField_1il54_64`,O=`_customHeader_1il54_72`,k=`_headerButton_1il54_79`,A=`_customFooter_1il54_86`,j=`_customActions_1il54_94`,M=`_statusBadge_1il54_98`,N=`_footerButton_1il54_107`,P=`_footerButtonPrimary_1il54_115`,F=`_fileUploadArea_1il54_124`,I=`_uploadButton_1il54_132`,L=`_uploadText_1il54_143`,R=`_addButton_1il54_148`,ge=`_errorMessage_1il54_159`,z={storyContainer:ce,storyHeader:le,formResults:ue,formResultsTitle:de,formResultsGrid:fe,clearResultsButton:pe,formSection:me,formSectionTitle:he,formGrid:w,formGridThree:T,inputLabel:E,inputField:D,customHeader:O,headerButton:k,customFooter:A,customActions:j,statusBadge:M,footerButton:N,footerButtonPrimary:P,fileUploadArea:F,uploadButton:I,uploadText:L,addButton:R,errorMessage:ge}})),B,V,H,U,W,G,K,q,ve,J,Y,X,Z,Q,$,ye;e((()=>{B=t(n(),1),p(),y(),v(),re(),se(),m(),_e(),c(),f(),_(),u(),a(),V=r(),{expect:H,screen:U,userEvent:W,waitFor:G,within:K}=__STORYBOOK_MODULE_TEST__,q={title:`Components/Modal`,component:h,parameters:{layout:`centered`},args:{open:!1},argTypes:{open:{control:`boolean`,description:`Controls whether the modal is open`},dividers:{control:`boolean`,description:`Show full-width dividers between header, body, and footer sections`},columns:{control:`select`,options:Array(12).fill(0).map((e,t)=>t+1),description:`Number of grid columns for modal width`},className:{control:`text`,description:`Additional CSS class names`}}},ve=S({name:C().min(1,`Name is required`),email:ie(`Invalid email address`),department:C().min(1,`Please select a department`),role:C().min(1,`Please select a role`),description:C().min(20,`Description must be at least 20 characters`),acceptTerms:oe().refine(e=>e,`You must accept the terms and conditions`),subscription:ae([`basic`,`pro`,`enterprise`],{error:()=>`Please select a subscription plan`})}),J={name:``,email:``,department:``,role:``,description:``,acceptTerms:!1,subscription:`basic`},Y={render:function(){let[e,t]=(0,B.useState)(!1);return(0,V.jsxs)(`div`,{className:z.storyContainer,children:[(0,V.jsxs)(`div`,{className:z.storyHeader,children:[(0,V.jsx)(`h2`,{children:`Default Modal`}),(0,V.jsx)(`p`,{children:`The default variant has an inset header underline and no footer border.`}),(0,V.jsx)(s,{design:`v1.2`,size:`large`,onClick:()=>t(!0),children:`Open Modal`})]}),(0,V.jsxs)(h,{open:e,columns:4,onOpenChange:t,children:[(0,V.jsxs)(h.Header,{children:[(0,V.jsx)(h.Title,{children:`Modal Title`}),(0,V.jsx)(h.CloseTrigger,{})]}),(0,V.jsx)(h.Body,{children:(0,V.jsx)(`p`,{children:`This is the default modal variant with simple content.`})}),(0,V.jsx)(h.Footer,{children:(0,V.jsxs)(h.Actions,{children:[(0,V.jsx)(s,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>t(!1),children:`Cancel`}),(0,V.jsx)(s,{design:`v1.2`,variant:`filled`,size:`large`,onClick:()=>t(!1),children:`Confirm`})]})})]})]})},play:async({canvasElement:e})=>{let t=K(e).getByRole(`button`,{name:/open modal/i});await W.click(t),await G(()=>H(U.getByRole(`dialog`)).toBeVisible()),await H(U.getByRole(`heading`,{name:/modal title/i})).toBeVisible();let n=U.getByRole(`button`,{name:/confirm/i});await W.click(n),await G(()=>H(U.queryByRole(`dialog`)).not.toBeInTheDocument())},parameters:{docs:{description:{story:`Default modal variant with inset header underline and no footer border.`}}}},X={render:function(){let[e,t]=(0,B.useState)(!1),[n,r]=(0,B.useState)(null),i=ne({resolver:te(ve),defaultValues:J,mode:`onChange`}),{register:a,handleSubmit:o,formState:{errors:c,isValid:u,touchedFields:f,isDirty:p},setValue:m,watch:_,trigger:v,reset:y,control:b}=i,re=e=>{r(e),t(!1),y(J)},ie=()=>{y(J)},S=(e,t)=>{m(e,t===`indeterminate`?!1:t,{shouldValidate:!0,shouldTouch:!0,shouldDirty:!0})};return(0,V.jsxs)(`div`,{className:z.storyContainer,children:[(0,V.jsxs)(`div`,{className:z.storyHeader,children:[(0,V.jsx)(`h2`,{children:`Interactive Form Modal Demo`}),(0,V.jsx)(`p`,{children:`Click the button below to open a form modal. Fill out the form and click "Save Changes" to see the results displayed here.`}),(0,V.jsx)(s,{design:`v1.2`,size:`large`,onClick:()=>t(!0),children:`Open Form Modal`})]}),n&&(0,V.jsxs)(`div`,{className:z.formResults,children:[(0,V.jsx)(`h3`,{className:z.formResultsTitle,children:`Form Results:`}),(0,V.jsxs)(`div`,{className:z.formResultsGrid,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:`Name:`}),` `,n.name]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:`Email:`}),` `,n.email]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:`Department:`}),` `,n.department]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:`Role:`}),` `,n.role||`Not specified`]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:`Description:`}),` `,n.description]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:`Subscription:`}),` `,n.subscription]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`strong`,{children:`Terms Accepted:`}),` `,n.acceptTerms?`Yes`:`No`]})]}),(0,V.jsx)(s,{design:`v1.2`,buttonType:`secondary`,size:`small`,onClick:()=>r(null),className:z.clearResultsButton,children:`Clear Results`})]}),(0,V.jsxs)(h,{open:e,columns:8,dividers:!0,onOpenChange:t,children:[(0,V.jsxs)(h.Header,{children:[(0,V.jsx)(h.Title,{children:`User Profile Form`}),(0,V.jsx)(h.CloseTrigger,{})]}),(0,V.jsx)(h.Body,{children:(0,V.jsx)(ee,{...i,children:(0,V.jsxs)(`div`,{className:z.formSection,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:z.formSectionTitle,children:`Basic Information`}),(0,V.jsxs)(`div`,{className:z.formGrid,children:[(0,V.jsx)(d,{label:`Full Name`,required:!0,status:`error`,messageIcon:`cancel`,message:f.name?c.name?.message:void 0,children:(0,V.jsx)(x,{name:`name`,control:b,render:({field:e})=>(0,V.jsx)(d.TextInput,{value:e.value,placeholder:`Enter full name`,onChange:e=>S(`name`,e.target.value),onBlur:e=>S(`name`,e.target.value)})})}),(0,V.jsx)(d,{label:`Email Address`,required:!0,status:`error`,messageIcon:`cancel`,message:f.email?c.email?.message:void 0,children:(0,V.jsx)(x,{name:`email`,control:b,render:({field:e})=>(0,V.jsx)(d.TextInput,{type:`email`,value:e.value,placeholder:`Enter email address`,onChange:e=>S(`email`,e.target.value),onBlur:e=>S(`email`,e.target.value)})})})]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:z.formSectionTitle,children:`Work Information`}),(0,V.jsxs)(`div`,{className:z.formGrid,children:[(0,V.jsx)(d,{label:`Department`,required:!0,status:`error`,messageIcon:`cancel`,message:f.department?c.department?.message:void 0,children:(0,V.jsx)(x,{name:`department`,control:b,render:({field:e})=>(0,V.jsx)(d.Select,{value:e.value,placeholder:`Select a department`,options:[{label:`Engineering`,value:`engineering`},{label:`Product`,value:`product`},{label:`Design`,value:`design`},{label:`Marketing`,value:`marketing`},{label:`Sales`,value:`sales`},{label:`HR`,value:`hr`}],clearable:!0,onValueChange:e=>S(`department`,e),onBlur:()=>S(`department`,e.value)})})}),(0,V.jsx)(d,{label:`Role`,required:!0,status:`error`,messageIcon:`cancel`,message:f.role?c.role?.message:void 0,children:(0,V.jsx)(x,{name:`role`,control:b,render:({field:e})=>(0,V.jsx)(d.Select,{value:e.value,placeholder:`Select a role`,options:[{label:`Manager`,value:`manager`},{label:`Senior`,value:`senior`},{label:`Mid-level`,value:`mid`},{label:`Junior`,value:`junior`},{label:`Intern`,value:`intern`}],clearable:!0,onValueChange:e=>S(`role`,e),onBlur:()=>S(`role`,e.value)})})})]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:z.formSectionTitle,children:`Subscription Plan`}),(0,V.jsxs)(g.Root,{value:_(`subscription`),onValueChange:e=>S(`subscription`,e),children:[(0,V.jsx)(g.Item,{value:`basic`,label:`Basic`}),(0,V.jsx)(g.Item,{value:`pro`,label:`Pro`}),(0,V.jsx)(g.Item,{value:`enterprise`,label:`Enterprise`})]}),c.subscription&&(0,V.jsx)(`span`,{className:z.errorMessage,children:c.subscription.message})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:z.formSectionTitle,children:`Additional Information`}),(0,V.jsx)(d,{label:`Description`,required:!0,status:`error`,messageIcon:`cancel`,message:f.description?c.description?.message:void 0,children:(0,V.jsx)(d.Textarea,{placeholder:`Enter a brief description about the user (min. 20 characters)...`,...a(`description`,{onBlur:()=>v(`description`),onChange:()=>v(`description`)})})})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(l,{label:`I accept the terms and conditions`,checked:_(`acceptTerms`),onCheckedChange:e=>S(`acceptTerms`,e)}),c.acceptTerms&&(0,V.jsx)(`span`,{className:z.errorMessage,children:c.acceptTerms.message})]})]})})}),(0,V.jsx)(h.Footer,{children:(0,V.jsxs)(h.Actions,{children:[(0,V.jsx)(s,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:ie,children:`Reset`}),(0,V.jsx)(s,{design:`v1.2`,size:`large`,disabled:!p||!u,onClick:o(re),children:`Save Changes`})]})})]})]})},play:async({canvasElement:e})=>{let t=K(e),n=async e=>{await G(()=>H(U.getByText(e)).toBeInTheDocument())},r=t.getByRole(`button`,{name:/open form modal/i});await W.click(r),await G(()=>H(U.getByText(`User Profile Form`)).toBeVisible());let i=U.getByLabelText(`Full Name`);await W.click(i),await W.tab(),await n(`Name is required`);let a=U.getByLabelText(`Email Address`);await W.click(a),await W.tab(),await n(`Invalid email address`);let o=U.getByLabelText(`Department`);await W.click(o),await W.tab(),await n(`Please select a department`);let s=U.getByLabelText(`Role`);await W.click(s),await W.tab(),await n(`Please select a role`);let c=U.getByLabelText(`Description`);await W.click(c),await W.tab(),await n(`Description must be at least 20 characters`);let l=U.getByLabelText(`I accept the terms and conditions`);await W.click(l),await W.click(l),await n(`You must accept the terms and conditions`);let u=`${b.person.firstName()} ${b.person.lastName()}`;await W.type(i,u),await G(()=>H(U.queryByText(`Name is required`)).not.toBeInTheDocument());let d=b.internet.email();await W.clear(a),await W.type(a,d),await G(()=>H(U.queryByText(`Invalid email address`)).not.toBeInTheDocument()),await W.click(o);let f=U.getByRole(`option`,{name:`Product`});await W.click(f),await G(()=>H(U.queryByText(`Please select a department`)).not.toBeInTheDocument()),await W.click(s);let p=U.getByRole(`option`,{name:`Manager`});await W.click(p),await G(()=>H(U.queryByText(`Please select a role`)).not.toBeInTheDocument());let m=b.lorem.sentence(5);await W.clear(c),await W.type(c,m),await G(()=>H(U.queryByText(`Description must be at least 20 characters`)).not.toBeInTheDocument());let h=U.getByLabelText(`Pro`);await W.click(h),await G(()=>H(U.queryByText(`Please select a subscription plan`)).not.toBeInTheDocument()),await W.click(l),await G(()=>H(U.queryByText(`You must accept the terms and conditions`)).not.toBeInTheDocument());let g=U.getByRole(`button`,{name:/save changes/i});await G(()=>H(g).toBeEnabled()),await W.click(g),await G(()=>H(U.queryByText(`User Profile Form`)).not.toBeVisible());let _=e=>H(t.getByText((t,n)=>n?.textContent===e)).toBeInTheDocument();await G(async()=>{await H(t.getByText(`Form Results:`)).toBeInTheDocument(),await _(`Name: ${u}`),await _(`Email: ${d}`),await _(`Role: manager`),await _(`Department: product`),await _(`Description: ${m}`),await _(`Subscription: pro`),await _(`Terms Accepted: Yes`)}),await W.click(r),await G(()=>H(U.getByText(`User Profile Form`)).toBeInTheDocument()),await G(async()=>{await H(i).toHaveValue(``),await H(a).toHaveValue(``),await H(c).toHaveValue(``),await H(l).not.toBeChecked()}),await W.type(i,`Test Name`),await W.type(a,`test@example.com`),await W.type(c,`This is a test description that is long enough`),await W.click(l);let v=U.getByRole(`button`,{name:/reset/i});await W.click(v),await G(async()=>{await H(i).toHaveValue(``),await H(a).toHaveValue(``),await H(c).toHaveValue(``),await H(l).not.toBeChecked()}),await W.keyboard(`{Escape}`),await W.click(t.getByRole(`button`,{name:/clear results/i})),await G(()=>H(t.queryByText(`Form Results:`)).not.toBeInTheDocument())},parameters:{docs:{description:{story:`The divided layout adds full-width borders on header and footer for clear visual separation. This example demonstrates form state management using react-hook-form with Zod validation.`}}}},Z={render:function(){let[e,t]=(0,B.useState)(!1);return(0,V.jsxs)(`div`,{className:z.storyContainer,children:[(0,V.jsxs)(`div`,{className:z.storyHeader,children:[(0,V.jsx)(`h2`,{children:`Custom Modal Demo`}),(0,V.jsx)(`p`,{children:`Click the button below to open a custom modal with custom header and footer content.`}),(0,V.jsx)(s,{design:`v1.2`,size:`large`,onClick:()=>t(!0),children:`Open Custom Modal`})]}),(0,V.jsxs)(h,{open:e,columns:4,dividers:!0,onOpenChange:t,children:[(0,V.jsx)(h.Header,{children:(0,V.jsxs)(`div`,{className:z.customHeader,children:[(0,V.jsx)(`button`,{className:z.headerButton,children:`⋯`}),(0,V.jsx)(o.CloseTrigger,{className:z.headerButton,children:`✕`})]})}),(0,V.jsx)(h.Body,{children:(0,V.jsxs)(`div`,{className:z.formSection,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:z.formSectionTitle,children:`Project Details`}),(0,V.jsxs)(`div`,{className:z.formGrid,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`label`,{htmlFor:`project-name`,className:z.inputLabel,children:`Project Name`}),(0,V.jsx)(`input`,{id:`project-name`,type:`text`,placeholder:`Enter project name`,className:z.inputField})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`label`,{htmlFor:`category`,className:z.inputLabel,children:`Category`}),(0,V.jsx)(`input`,{id:`category`,type:`text`,placeholder:`Select category`,className:z.inputField})]})]})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:z.formSectionTitle,children:`Team Information`}),(0,V.jsxs)(`div`,{className:z.formGrid,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`label`,{htmlFor:`team-lead`,className:z.inputLabel,children:`Team Lead`}),(0,V.jsx)(`input`,{id:`team-lead`,type:`text`,placeholder:`Enter team lead name`,className:z.inputField})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`label`,{htmlFor:`team-size`,className:z.inputLabel,children:`Team Size`}),(0,V.jsx)(`input`,{id:`team-size`,type:`text`,placeholder:`Number of team members`,className:z.inputField})]})]})]}),(0,V.jsx)(`div`,{children:(0,V.jsxs)(`div`,{className:z.formGridThree,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`label`,{htmlFor:`budget`,className:z.inputLabel,children:`Budget`}),(0,V.jsx)(`input`,{id:`budget`,type:`text`,placeholder:`Enter budget amount`,className:z.inputField})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`label`,{htmlFor:`timeline`,className:z.inputLabel,children:`Timeline`}),(0,V.jsx)(`input`,{id:`timeline`,type:`text`,placeholder:`Project duration`,className:z.inputField})]}),(0,V.jsx)(`button`,{className:z.addButton,children:`+`})]})}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h3`,{className:z.formSectionTitle,children:`Project Documents`}),(0,V.jsxs)(`div`,{className:z.fileUploadArea,children:[(0,V.jsx)(`button`,{className:z.uploadButton,children:`☁️ Upload file`}),(0,V.jsx)(`div`,{className:z.uploadText,children:`or drag and drop to upload`})]})]})]})}),(0,V.jsx)(h.Footer,{children:(0,V.jsxs)(`div`,{className:z.customFooter,children:[(0,V.jsx)(`div`,{className:z.statusBadge,children:`All done`}),(0,V.jsxs)(h.Actions,{className:z.customActions,children:[(0,V.jsx)(`button`,{className:z.footerButton,children:`Discard`}),(0,V.jsx)(`button`,{className:z.footerButtonPrimary,children:`Save Changes`})]})]})})]})]})},play:async({canvasElement:e})=>{let t=K(e).getByRole(`button`,{name:/open custom modal/i});await W.click(t),await G(()=>H(U.getByRole(`dialog`)).toBeVisible()),await H(U.getByText(`Project Details`)).toBeVisible();let n=U.getByRole(`button`,{name:/✕/i});await W.click(n),await G(()=>H(U.queryByRole(`dialog`)).not.toBeInTheDocument())},parameters:{docs:{description:{story:`A custom modal with custom header and footer content, demonstrating how to override the default modal structure with custom components.`}}}},Q={render:function(){let[e,t]=(0,B.useState)(!1);return(0,V.jsxs)(`div`,{className:z.storyContainer,children:[(0,V.jsxs)(`div`,{className:z.storyHeader,children:[(0,V.jsx)(`h2`,{children:`Modal with Icon`}),(0,V.jsx)(`p`,{children:`Example showing how to add an icon to the modal header.`}),(0,V.jsx)(s,{design:`v1.2`,size:`large`,onClick:()=>t(!0),children:`Open Modal`})]}),(0,V.jsxs)(h,{open:e,columns:4,onOpenChange:t,children:[(0,V.jsxs)(h.Header,{children:[(0,V.jsx)(i,{icon:`info`,size:`small`}),(0,V.jsx)(h.Title,{children:`Session Timeout`}),(0,V.jsx)(h.CloseTrigger,{})]}),(0,V.jsx)(h.Body,{children:(0,V.jsx)(`p`,{children:`Your session will expire in 5 minutes due to inactivity.`})})]})]})},play:async({canvasElement:e})=>{let t=K(e).getByRole(`button`,{name:/open modal/i});await W.click(t),await G(()=>H(U.getByRole(`dialog`)).toBeVisible()),await H(U.getByRole(`heading`,{name:/session timeout/i})).toBeVisible(),await H(U.getByText(/session will expire/i)).toBeVisible(),await W.keyboard(`{Escape}`),await G(()=>H(U.queryByRole(`dialog`)).not.toBeInTheDocument())},parameters:{docs:{description:{story:`Example showing how to add an icon to the modal header by composing DsIcon with DsModal.Header.`}}}},$={render:function(){let[e,t]=(0,B.useState)(!1);return(0,V.jsxs)(`div`,{className:z.storyContainer,children:[(0,V.jsxs)(`div`,{className:z.storyHeader,children:[(0,V.jsx)(`h2`,{children:`Modal Without Header`}),(0,V.jsx)(`p`,{children:`Modal with only body and footer content, no header section.`}),(0,V.jsx)(s,{design:`v1.2`,size:`large`,onClick:()=>t(!0),children:`Open Modal`})]}),(0,V.jsxs)(h,{open:e,columns:4,onOpenChange:t,children:[(0,V.jsx)(h.Body,{children:(0,V.jsx)(`p`,{children:`This modal has no header section. Use this pattern when you want a cleaner look without the header underline.`})}),(0,V.jsx)(h.Footer,{children:(0,V.jsxs)(h.Actions,{children:[(0,V.jsx)(s,{design:`v1.2`,buttonType:`secondary`,size:`large`,onClick:()=>t(!1),children:`Close`}),(0,V.jsx)(s,{design:`v1.2`,variant:`filled`,size:`large`,onClick:()=>t(!1),children:`Continue`})]})})]})]})},play:async({canvasElement:e})=>{let t=K(e).getByRole(`button`,{name:/open modal/i});await W.click(t),await G(()=>H(U.getByRole(`dialog`)).toBeVisible()),await H(K(U.getByRole(`dialog`)).getByText(/no header section/i)).toBeVisible();let n=U.getByRole(`button`,{name:/continue/i});await H(n).toBeVisible(),await W.click(n),await G(()=>H(U.queryByRole(`dialog`)).not.toBeInTheDocument())},parameters:{docs:{description:{story:`Modal without a header component - use this pattern instead of a variant when you want no header underline.`}}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},ye=[`Default`,`Divided`,`Custom`,`WithIcon`,`WithoutHeader`]}))();export{Z as Custom,Y as Default,X as Divided,Q as WithIcon,$ as WithoutHeader,ye as __namedExportsOrder,q as default};