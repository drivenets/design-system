import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as D}from"./iframe-msTs8qn0.js";import{f as R,u as L,a as G,F as U,C as S,o as Y,e as $,b as W,s as C}from"./types-BUfu2BWX.js";import{D as i}from"./ds-modal-Dp6LLFcm.js";import{D as v}from"./ds-button-BuZ8mtOe.js";import{D as y}from"./ds-form-control-CSkg0Y2K.js";import{D as E}from"./ds-radio-group-DN_vLZVI.js";import{D as J}from"./ds-checkbox-DPmRIq0i.js";import{D as Z}from"./ds-icon-DFpW76RW.js";import{D as K}from"./dialog-title-D0wrypoT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DpFyz-Lw.js";import"./ds-typography-Dilj0ZGK.js";import"./index-CUhDGnXB.js";import"./index-DLvNrMFn.js";import"./portal-D4QFhVos.js";import"./create-split-props-u5h9OPvL.js";import"./index-DE7EfUWw.js";import"./index-CvhxhYzK.js";import"./index-CSwBWWe1.js";import"./use-locale-context-BQeNMJqG.js";import"./ds-button-legacy-ZEy36DZG.js";import"./ds-button-new-CZF5WK3X.js";import"./ds-select-BYXNLXfL.js";import"./ds-chip-CdkFqsXl.js";import"./ds-text-input-l9U381cv.js";import"./list-collection-Cwp_T2xo.js";import"./index-6966ules.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-D1AB9nlB.js";import"./use-field-context-CpVfbhRk.js";import"./use-presence-B3gHxFPT.js";import"./ds-textarea-x9Amyn4W.js";import"./ds-number-input-DinHmlDU.js";import"./ds-password-input-ClzPOR3I.js";import"./ds-date-input-D5XS5zRw.js";import"./index-DExeGW4_.js";import"./index-Bgtu4sKj.js";import"./index-CRW7Grpu.js";import"./index-BILGFtO0.js";import"./render-strategy-CLius_kC.js";const Q="_storyContainer_1il54_1",X="_storyHeader_1il54_6",ee="_formResults_1il54_10",te="_formResultsTitle_1il54_18",ae="_formResultsGrid_1il54_23",se="_clearResultsButton_1il54_28",oe="_formSection_1il54_32",ne="_formSectionTitle_1il54_38",ie="_formGrid_1il54_45",re="_formGridThree_1il54_51",le="_inputLabel_1il54_58",ce="_inputField_1il54_64",de="_customHeader_1il54_72",ue="_headerButton_1il54_79",me="_customFooter_1il54_86",pe="_customActions_1il54_94",he="_statusBadge_1il54_98",ve="_footerButton_1il54_107",ge="_footerButtonPrimary_1il54_115",ye="_fileUploadArea_1il54_124",xe="_uploadButton_1il54_132",be="_uploadText_1il54_143",we="_addButton_1il54_148",Be="_errorMessage_1il54_159",t={storyContainer:Q,storyHeader:X,formResults:ee,formResultsTitle:te,formResultsGrid:ae,clearResultsButton:se,formSection:oe,formSectionTitle:ne,formGrid:ie,formGridThree:re,inputLabel:le,inputField:ce,customHeader:de,headerButton:ue,customFooter:me,customActions:pe,statusBadge:he,footerButton:ve,footerButtonPrimary:ge,fileUploadArea:ye,uploadButton:xe,uploadText:be,addButton:we,errorMessage:Be},{expect:o,screen:s,userEvent:a,waitFor:r,within:T}=__STORYBOOK_MODULE_TEST__,dt={title:"Design System/Modal",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{open:!1},argTypes:{open:{control:"boolean",description:"Controls whether the modal is open"},dividers:{control:"boolean",description:"Show full-width dividers between header, body, and footer sections"},columns:{control:"select",options:Array(12).fill(0).map((d,l)=>l+1),description:"Number of grid columns for modal width"},className:{control:"text",description:"Additional CSS class names"}}},fe=Y({name:C().min(1,"Name is required"),email:C().email("Invalid email address"),department:C().min(1,"Please select a department"),role:C().min(1,"Please select a role"),description:C().min(20,"Description must be at least 20 characters"),acceptTerms:W().refine(d=>d,"You must accept the terms and conditions"),subscription:$(["basic","pro","enterprise"],{errorMap:()=>({message:"Please select a subscription plan"})})}),z={name:"",email:"",department:"",role:"",description:"",acceptTerms:!1,subscription:"basic"},_={render:function(){const[l,n]=D.useState(!1);return e.jsxs("div",{className:t.storyContainer,children:[e.jsxs("div",{className:t.storyHeader,children:[e.jsx("h2",{children:"Default Modal"}),e.jsx("p",{children:"The default variant has an inset header underline and no footer border."}),e.jsx(v,{design:"v1.2",size:"large",onClick:()=>n(!0),children:"Open Modal"})]}),e.jsxs(i,{open:l,columns:4,onOpenChange:n,children:[e.jsxs(i.Header,{children:[e.jsx(i.Title,{children:"Modal Title"}),e.jsx(i.CloseTrigger,{})]}),e.jsx(i.Body,{children:e.jsx("p",{children:"This is the default modal variant with simple content."})}),e.jsx(i.Footer,{children:e.jsxs(i.Actions,{children:[e.jsx(v,{design:"v1.2",buttonType:"secondary",size:"large",onClick:()=>n(!1),children:"Cancel"}),e.jsx(v,{design:"v1.2",variant:"filled",size:"large",onClick:()=>n(!1),children:"Confirm"})]})})]})]})},play:async({canvasElement:d})=>{const n=T(d).getByRole("button",{name:/open modal/i});await a.click(n),await r(()=>o(s.getByRole("dialog")).toBeVisible()),await o(s.getByRole("heading",{name:/modal title/i})).toBeVisible();const u=s.getByRole("button",{name:/confirm/i});await a.click(u),await r(()=>o(s.queryByRole("dialog")).not.toBeInTheDocument())},parameters:{docs:{description:{story:"Default modal variant with inset header underline and no footer border."}}}},V={render:function(){const[l,n]=D.useState(!1),[u,g]=D.useState(null),x=L({resolver:G(fe),defaultValues:z,mode:"onChange"}),{register:F,handleSubmit:k,formState:{errors:m,isValid:w,touchedFields:B,isDirty:N},setValue:q,watch:I,trigger:j,reset:M,control:f}=x,b=c=>{g(c),n(!1),M(z)},A=()=>{M(z)},h=(c,p)=>{q(c,p==="indeterminate"?!1:p,{shouldValidate:!0,shouldTouch:!0,shouldDirty:!0})};return e.jsxs("div",{className:t.storyContainer,children:[e.jsxs("div",{className:t.storyHeader,children:[e.jsx("h2",{children:"Interactive Form Modal Demo"}),e.jsx("p",{children:'Click the button below to open a form modal. Fill out the form and click "Save Changes" to see the results displayed here.'}),e.jsx(v,{design:"v1.2",size:"large",onClick:()=>n(!0),children:"Open Form Modal"})]}),u&&e.jsxs("div",{className:t.formResults,children:[e.jsx("h3",{className:t.formResultsTitle,children:"Form Results:"}),e.jsxs("div",{className:t.formResultsGrid,children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Name:"})," ",u.name]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Email:"})," ",u.email]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Department:"})," ",u.department]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Role:"})," ",u.role||"Not specified"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Description:"})," ",u.description]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Subscription:"})," ",u.subscription]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Terms Accepted:"})," ",u.acceptTerms?"Yes":"No"]})]}),e.jsx(v,{design:"v1.2",buttonType:"secondary",size:"small",onClick:()=>g(null),className:t.clearResultsButton,children:"Clear Results"})]}),e.jsxs(i,{open:l,columns:8,dividers:!0,onOpenChange:n,children:[e.jsxs(i.Header,{children:[e.jsx(i.Title,{children:"User Profile Form"}),e.jsx(i.CloseTrigger,{})]}),e.jsx(i.Body,{children:e.jsx(U,{...x,children:e.jsxs("div",{className:t.formSection,children:[e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Basic Information"}),e.jsxs("div",{className:t.formGrid,children:[e.jsx(y,{label:"Full Name",required:!0,status:"error",messageIcon:"cancel",message:B.name?m.name?.message:void 0,children:e.jsx(S,{name:"name",control:f,render:({field:c})=>e.jsx(y.TextInput,{value:c.value,placeholder:"Enter full name",onChange:p=>h("name",p.target.value),onBlur:p=>h("name",p.target.value)})})}),e.jsx(y,{label:"Email Address",required:!0,status:"error",messageIcon:"cancel",message:B.email?m.email?.message:void 0,children:e.jsx(S,{name:"email",control:f,render:({field:c})=>e.jsx(y.TextInput,{type:"email",value:c.value,placeholder:"Enter email address",onChange:p=>h("email",p.target.value),onBlur:p=>h("email",p.target.value)})})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Work Information"}),e.jsxs("div",{className:t.formGrid,children:[e.jsx(y,{label:"Department",required:!0,status:"error",messageIcon:"cancel",message:B.department?m.department?.message:void 0,children:e.jsx(S,{name:"department",control:f,render:({field:c})=>e.jsx(y.Select,{value:c.value,placeholder:"Select a department",options:[{label:"Engineering",value:"engineering"},{label:"Product",value:"product"},{label:"Design",value:"design"},{label:"Marketing",value:"marketing"},{label:"Sales",value:"sales"},{label:"HR",value:"hr"}],clearable:!0,onValueChange:p=>h("department",p),onBlur:()=>h("department",c.value)})})}),e.jsx(y,{label:"Role",required:!0,status:"error",messageIcon:"cancel",message:B.role?m.role?.message:void 0,children:e.jsx(S,{name:"role",control:f,render:({field:c})=>e.jsx(y.Select,{value:c.value,placeholder:"Select a role",options:[{label:"Manager",value:"manager"},{label:"Senior",value:"senior"},{label:"Mid-level",value:"mid"},{label:"Junior",value:"junior"},{label:"Intern",value:"intern"}],clearable:!0,onValueChange:p=>h("role",p),onBlur:()=>h("role",c.value)})})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Subscription Plan"}),e.jsxs(E.Root,{value:I("subscription"),onValueChange:c=>h("subscription",c),children:[e.jsx(E.Item,{value:"basic",label:"Basic"}),e.jsx(E.Item,{value:"pro",label:"Pro"}),e.jsx(E.Item,{value:"enterprise",label:"Enterprise"})]}),m.subscription&&e.jsx("span",{className:t.errorMessage,children:m.subscription.message})]}),e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Additional Information"}),e.jsx(y,{label:"Description",required:!0,status:"error",messageIcon:"cancel",message:B.description?m.description?.message:void 0,children:e.jsx(y.Textarea,{placeholder:"Enter a brief description about the user (min. 20 characters)...",...F("description",{onBlur:()=>j("description"),onChange:()=>j("description")})})})]}),e.jsxs("div",{children:[e.jsx(J,{label:"I accept the terms and conditions",checked:I("acceptTerms"),onCheckedChange:c=>h("acceptTerms",c)}),m.acceptTerms&&e.jsx("span",{className:t.errorMessage,children:m.acceptTerms.message})]})]})})}),e.jsx(i.Footer,{children:e.jsxs(i.Actions,{children:[e.jsx(v,{design:"v1.2",buttonType:"secondary",size:"large",onClick:A,children:"Reset"}),e.jsx(v,{design:"v1.2",size:"large",disabled:!N||!w,onClick:k(b),children:"Save Changes"})]})})]})]})},play:async({canvasElement:d})=>{const l=T(d),n=async h=>{await r(()=>o(s.getByText(h)).toBeInTheDocument())},u=l.getByRole("button",{name:/open form modal/i});await a.click(u),await r(()=>o(s.getByText("User Profile Form")).toBeVisible());const g=s.getByLabelText("Full Name");await a.click(g),await a.tab(),await n("Name is required");const x=s.getByLabelText("Email Address");await a.click(x),await a.tab(),await n("Invalid email address");const F=s.getByLabelText("Department");await a.click(F),await a.tab(),await n("Please select a department");const k=s.getByLabelText("Role");await a.click(k),await a.tab(),await n("Please select a role");const m=s.getByLabelText("Description");await a.click(m),await a.tab(),await n("Description must be at least 20 characters");const w=s.getByLabelText("I accept the terms and conditions");await a.click(w),await a.click(w),await n("You must accept the terms and conditions");const B=`${R.person.firstName()} ${R.person.lastName()}`;await a.type(g,B),await r(()=>o(s.queryByText("Name is required")).not.toBeInTheDocument());const N=R.internet.email();await a.clear(x),await a.type(x,N),await r(()=>o(s.queryByText("Invalid email address")).not.toBeInTheDocument()),await a.click(F);const q=s.getByRole("option",{name:"Product"});await a.click(q),await r(()=>o(s.queryByText("Please select a department")).not.toBeInTheDocument()),await a.click(k);const I=s.getByRole("option",{name:"Manager"});await a.click(I),await r(()=>o(s.queryByText("Please select a role")).not.toBeInTheDocument());const j=R.lorem.sentence(5);await a.clear(m),await a.type(m,j),await r(()=>o(s.queryByText("Description must be at least 20 characters")).not.toBeInTheDocument());const M=s.getByLabelText("Pro");await a.click(M),await r(()=>o(s.queryByText("Please select a subscription plan")).not.toBeInTheDocument()),await a.click(w),await r(()=>o(s.queryByText("You must accept the terms and conditions")).not.toBeInTheDocument());const f=s.getByRole("button",{name:/save changes/i});await r(()=>o(f).toBeEnabled()),await a.click(f),await r(()=>o(s.queryByText("User Profile Form")).not.toBeVisible());const b=h=>o(l.getByText((c,p)=>p?.textContent===h)).toBeInTheDocument();await r(async()=>{await o(l.getByText("Form Results:")).toBeInTheDocument(),await b(`Name: ${B}`),await b(`Email: ${N}`),await b("Role: manager"),await b("Department: product"),await b(`Description: ${j}`),await b("Subscription: pro"),await b("Terms Accepted: Yes")}),await a.click(u),await r(()=>o(s.getByText("User Profile Form")).toBeInTheDocument()),await r(async()=>{await o(g).toHaveValue(""),await o(x).toHaveValue(""),await o(m).toHaveValue(""),await o(w).not.toBeChecked()}),await a.type(g,"Test Name"),await a.type(x,"test@example.com"),await a.type(m,"This is a test description that is long enough"),await a.click(w);const A=s.getByRole("button",{name:/reset/i});await a.click(A),await r(async()=>{await o(g).toHaveValue(""),await o(x).toHaveValue(""),await o(m).toHaveValue(""),await o(w).not.toBeChecked()}),await a.keyboard("{Escape}"),await a.click(l.getByRole("button",{name:/clear results/i})),await r(()=>o(l.queryByText("Form Results:")).not.toBeInTheDocument())},parameters:{docs:{description:{story:"The divided layout adds full-width borders on header and footer for clear visual separation. This example demonstrates form state management using react-hook-form with Zod validation."}}}},O={render:function(){const[l,n]=D.useState(!1);return e.jsxs("div",{className:t.storyContainer,children:[e.jsxs("div",{className:t.storyHeader,children:[e.jsx("h2",{children:"Custom Modal Demo"}),e.jsx("p",{children:"Click the button below to open a custom modal with custom header and footer content."}),e.jsx(v,{design:"v1.2",size:"large",onClick:()=>n(!0),children:"Open Custom Modal"})]}),e.jsxs(i,{open:l,columns:4,dividers:!0,onOpenChange:n,children:[e.jsx(i.Header,{children:e.jsxs("div",{className:t.customHeader,children:[e.jsx("button",{className:t.headerButton,children:"⋯"}),e.jsx(K,{className:t.headerButton,children:"✕"})]})}),e.jsx(i.Body,{children:e.jsxs("div",{className:t.formSection,children:[e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Project Details"}),e.jsxs("div",{className:t.formGrid,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"project-name",className:t.inputLabel,children:"Project Name"}),e.jsx("input",{id:"project-name",type:"text",placeholder:"Enter project name",className:t.inputField})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"category",className:t.inputLabel,children:"Category"}),e.jsx("input",{id:"category",type:"text",placeholder:"Select category",className:t.inputField})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Team Information"}),e.jsxs("div",{className:t.formGrid,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"team-lead",className:t.inputLabel,children:"Team Lead"}),e.jsx("input",{id:"team-lead",type:"text",placeholder:"Enter team lead name",className:t.inputField})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"team-size",className:t.inputLabel,children:"Team Size"}),e.jsx("input",{id:"team-size",type:"text",placeholder:"Number of team members",className:t.inputField})]})]})]}),e.jsx("div",{children:e.jsxs("div",{className:t.formGridThree,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"budget",className:t.inputLabel,children:"Budget"}),e.jsx("input",{id:"budget",type:"text",placeholder:"Enter budget amount",className:t.inputField})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"timeline",className:t.inputLabel,children:"Timeline"}),e.jsx("input",{id:"timeline",type:"text",placeholder:"Project duration",className:t.inputField})]}),e.jsx("button",{className:t.addButton,children:"+"})]})}),e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Project Documents"}),e.jsxs("div",{className:t.fileUploadArea,children:[e.jsx("button",{className:t.uploadButton,children:"☁️ Upload file"}),e.jsx("div",{className:t.uploadText,children:"or drag and drop to upload"})]})]})]})}),e.jsx(i.Footer,{children:e.jsxs("div",{className:t.customFooter,children:[e.jsx("div",{className:t.statusBadge,children:"All done"}),e.jsxs(i.Actions,{className:t.customActions,children:[e.jsx("button",{className:t.footerButton,children:"Discard"}),e.jsx("button",{className:t.footerButtonPrimary,children:"Save Changes"})]})]})})]})]})},play:async({canvasElement:d})=>{const n=T(d).getByRole("button",{name:/open custom modal/i});await a.click(n),await r(()=>o(s.getByRole("dialog")).toBeVisible()),await o(s.getByText("Project Details")).toBeVisible();const u=s.getByRole("button",{name:/✕/i});await a.click(u),await r(()=>o(s.queryByRole("dialog")).not.toBeInTheDocument())},parameters:{docs:{description:{story:"A custom modal with custom header and footer content, demonstrating how to override the default modal structure with custom components."}}}},H={render:function(){const[l,n]=D.useState(!1);return e.jsxs("div",{className:t.storyContainer,children:[e.jsxs("div",{className:t.storyHeader,children:[e.jsx("h2",{children:"Modal with Icon"}),e.jsx("p",{children:"Example showing how to add an icon to the modal header."}),e.jsx(v,{design:"v1.2",size:"large",onClick:()=>n(!0),children:"Open Modal"})]}),e.jsxs(i,{open:l,columns:4,onOpenChange:n,children:[e.jsxs(i.Header,{children:[e.jsx(Z,{icon:"info",size:"small"}),e.jsx(i.Title,{children:"Session Timeout"}),e.jsx(i.CloseTrigger,{})]}),e.jsx(i.Body,{children:e.jsx("p",{children:"Your session will expire in 5 minutes due to inactivity."})})]})]})},play:async({canvasElement:d})=>{const n=T(d).getByRole("button",{name:/open modal/i});await a.click(n),await r(()=>o(s.getByRole("dialog")).toBeVisible()),await o(s.getByRole("heading",{name:/session timeout/i})).toBeVisible(),await o(s.getByText(/session will expire/i)).toBeVisible(),await a.keyboard("{Escape}"),await r(()=>o(s.queryByRole("dialog")).not.toBeInTheDocument())},parameters:{docs:{description:{story:"Example showing how to add an icon to the modal header by composing DsIcon with DsModal.Header."}}}},P={render:function(){const[l,n]=D.useState(!1);return e.jsxs("div",{className:t.storyContainer,children:[e.jsxs("div",{className:t.storyHeader,children:[e.jsx("h2",{children:"Modal Without Header"}),e.jsx("p",{children:"Modal with only body and footer content, no header section."}),e.jsx(v,{design:"v1.2",size:"large",onClick:()=>n(!0),children:"Open Modal"})]}),e.jsxs(i,{open:l,columns:4,onOpenChange:n,children:[e.jsx(i.Body,{children:e.jsx("p",{children:"This modal has no header section. Use this pattern when you want a cleaner look without the header underline."})}),e.jsx(i.Footer,{children:e.jsxs(i.Actions,{children:[e.jsx(v,{design:"v1.2",buttonType:"secondary",size:"large",onClick:()=>n(!1),children:"Close"}),e.jsx(v,{design:"v1.2",variant:"filled",size:"large",onClick:()=>n(!1),children:"Continue"})]})})]})]})},play:async({canvasElement:d})=>{const n=T(d).getByRole("button",{name:/open modal/i});await a.click(n),await r(()=>o(s.getByRole("dialog")).toBeVisible());const u=s.getByRole("dialog");await o(T(u).getByText(/no header section/i)).toBeVisible();const g=s.getByRole("button",{name:/continue/i});await o(g).toBeVisible(),await a.click(g),await r(()=>o(s.queryByRole("dialog")).not.toBeInTheDocument())},parameters:{docs:{description:{story:"Modal without a header component - use this pattern instead of a variant when you want no header underline."}}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};const ut=["Default","Divided","Custom","WithIcon","WithoutHeader"];export{O as Custom,_ as Default,V as Divided,H as WithIcon,P as WithoutHeader,ut as __namedExportsOrder,dt as default};
