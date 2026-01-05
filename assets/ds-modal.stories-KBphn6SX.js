import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as O}from"./iframe-RxI9bAYy.js";import{f as S,u as A,a as H,F as q,C as I,o as L,e as G,b as z,s as B}from"./types-BJ1v9juZ.js";import{D as m}from"./ds-modal-QiykmC1T.js";import{D}from"./ds-button-DQiwnNK1.js";import{D as h}from"./ds-form-control-bbJ5x0gk.js";import{D as _}from"./ds-radio-group-CwgzSKK1.js";import{D as U}from"./ds-checkbox-CV8-uRa_.js";import{D as Y}from"./dialog-title-DgLT6jjz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlcxGCkW.js";import"./ds-icon-BRUdx6bJ.js";import"./ds-typography-DYk-6nhB.js";import"./index-Decedjlc.js";import"./index-DMghN3K2.js";import"./portal-CBB3-NF6.js";import"./create-split-props-u5h9OPvL.js";import"./index-Bxh9dWS5.js";import"./index-gwzPaq3b.js";import"./index-CWucLLfh.js";import"./use-locale-context-DghkyWl0.js";import"./ds-button-legacy-q92oxbfe.js";import"./ds-button-new-D4SbnZH0.js";import"./ds-select-BldCZfiM.js";import"./ds-chip-B-lwrDi8.js";import"./ds-text-input-DWSzgCW_.js";import"./index-9DcJS-GW.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-BxvCWgkP.js";import"./use-field-context-b-Dc8fcY.js";import"./use-presence-DRZhKhn3.js";import"./ds-textarea-Cq_WdP3H.js";import"./ds-number-input-DyyiYWd8.js";import"./ds-password-input-BJ-TIEvO.js";import"./index-5RVX9NjX.js";import"./index-CVVss3u_.js";import"./index-BSNazpzB.js";import"./index-C_0rDp91.js";import"./render-strategy-DW7kmbuQ.js";const $="_storyContainer_1il54_1",W="_storyHeader_1il54_6",J="_formResults_1il54_10",Z="_formResultsTitle_1il54_18",K="_formResultsGrid_1il54_23",Q="_clearResultsButton_1il54_28",X="_formSection_1il54_32",ee="_formSectionTitle_1il54_38",te="_formGrid_1il54_45",ae="_formGridThree_1il54_51",se="_inputLabel_1il54_58",oe="_inputField_1il54_64",re="_customHeader_1il54_72",ne="_headerButton_1il54_79",ie="_customFooter_1il54_86",le="_customActions_1il54_94",ce="_statusBadge_1il54_98",de="_footerButton_1il54_107",me="_footerButtonPrimary_1il54_115",ue="_fileUploadArea_1il54_124",pe="_uploadButton_1il54_132",he="_uploadText_1il54_143",ve="_addButton_1il54_148",ge="_errorMessage_1il54_159",t={storyContainer:$,storyHeader:W,formResults:J,formResultsTitle:Z,formResultsGrid:K,clearResultsButton:Q,formSection:X,formSectionTitle:ee,formGrid:te,formGridThree:ae,inputLabel:se,inputField:oe,customHeader:re,headerButton:ne,customFooter:ie,customActions:le,statusBadge:ce,footerButton:de,footerButtonPrimary:me,fileUploadArea:ue,uploadButton:pe,uploadText:he,addButton:ve,errorMessage:ge},{expect:s,screen:o,userEvent:a,waitFor:l,within:be}=__STORYBOOK_MODULE_TEST__,ot={title:"Design System/Modal",component:m,parameters:{layout:"centered"},tags:["autodocs"],args:{open:!1},argTypes:{open:{control:"boolean",description:"Controls whether the modal is open"},columns:{control:"select",options:Array(12).fill(0).map((w,u)=>u+1),description:"Number of grid columns for modal width"},className:{control:"text",description:"Additional CSS class names"}}},ye=L({name:B().min(1,"Name is required"),email:B().email("Invalid email address"),department:B().min(1,"Please select a department"),role:B().min(1,"Please select a role"),description:B().min(20,"Description must be at least 20 characters"),acceptTerms:z().refine(w=>w,"You must accept the terms and conditions"),subscription:G(["basic","pro","enterprise"],{errorMap:()=>({message:"Please select a subscription plan"})})}),P={name:"",email:"",department:"",role:"",description:"",acceptTerms:!1,subscription:"basic"},R={render:function(){const[u,d]=O.useState(!1),[p,b]=O.useState(null),v=A({resolver:H(ye),defaultValues:P,mode:"onChange"}),{register:j,handleSubmit:F,formState:{errors:n,isValid:y,touchedFields:x,isDirty:N},setValue:M,watch:C,trigger:T,reset:k,control:f}=v,g=r=>{b(r),d(!1),k(P)},V=()=>{k(P)},c=(r,i)=>{M(r,i==="indeterminate"?!1:i,{shouldValidate:!0,shouldTouch:!0,shouldDirty:!0})};return e.jsxs("div",{className:t.storyContainer,children:[e.jsxs("div",{className:t.storyHeader,children:[e.jsx("h2",{children:"Interactive Form Modal Demo"}),e.jsx("p",{children:'Click the button below to open a form modal. Fill out the form and click "Save Changes" to see the results displayed here.'}),e.jsx(D,{design:"v1.2",size:"large",onClick:()=>d(!0),children:"Open Form Modal"})]}),p&&e.jsxs("div",{className:t.formResults,children:[e.jsx("h3",{className:t.formResultsTitle,children:"Form Results:"}),e.jsxs("div",{className:t.formResultsGrid,children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Name:"})," ",p.name]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Email:"})," ",p.email]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Department:"})," ",p.department]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Role:"})," ",p.role||"Not specified"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Description:"})," ",p.description]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Subscription:"})," ",p.subscription]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Terms Accepted:"})," ",p.acceptTerms?"Yes":"No"]})]}),e.jsx(D,{design:"v1.2",buttonType:"secondary",size:"small",onClick:()=>b(null),className:t.clearResultsButton,children:"Clear Results"})]}),e.jsxs(m,{open:u,onOpenChange:d,columns:8,children:[e.jsxs(m.Header,{children:[e.jsx(m.Title,{children:"User Profile Form"}),e.jsx(m.CloseTrigger,{})]}),e.jsx(m.Body,{children:e.jsx(q,{...v,children:e.jsxs("div",{className:t.formSection,children:[e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Basic Information"}),e.jsxs("div",{className:t.formGrid,children:[e.jsx(h,{label:"Full Name",required:!0,status:"error",messageIcon:"cancel",message:x.name?n.name?.message:void 0,children:e.jsx(I,{name:"name",control:f,render:({field:r})=>e.jsx(h.TextInput,{value:r.value,placeholder:"Enter full name",onChange:i=>c("name",i.target.value),onBlur:i=>c("name",i.target.value)})})}),e.jsx(h,{label:"Email Address",required:!0,status:"error",messageIcon:"cancel",message:x.email?n.email?.message:void 0,children:e.jsx(I,{name:"email",control:f,render:({field:r})=>e.jsx(h.TextInput,{type:"email",value:r.value,placeholder:"Enter email address",onChange:i=>c("email",i.target.value),onBlur:i=>c("email",i.target.value)})})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Work Information"}),e.jsxs("div",{className:t.formGrid,children:[e.jsx(h,{label:"Department",required:!0,status:"error",messageIcon:"cancel",message:x.department?n.department?.message:void 0,children:e.jsx(I,{name:"department",control:f,render:({field:r})=>e.jsx(h.Select,{value:r.value,placeholder:"Select a department",options:[{label:"Engineering",value:"engineering"},{label:"Product",value:"product"},{label:"Design",value:"design"},{label:"Marketing",value:"marketing"},{label:"Sales",value:"sales"},{label:"HR",value:"hr"}],clearable:!0,onValueChange:i=>c("department",i),onBlur:()=>c("department",r.value)})})}),e.jsx(h,{label:"Role",required:!0,status:"error",messageIcon:"cancel",message:x.role?n.role?.message:void 0,children:e.jsx(I,{name:"role",control:f,render:({field:r})=>e.jsx(h.Select,{value:r.value,placeholder:"Select a role",options:[{label:"Manager",value:"manager"},{label:"Senior",value:"senior"},{label:"Mid-level",value:"mid"},{label:"Junior",value:"junior"},{label:"Intern",value:"intern"}],clearable:!0,onValueChange:i=>c("role",i),onBlur:()=>c("role",r.value)})})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Subscription Plan"}),e.jsxs(_.Root,{value:C("subscription"),onValueChange:r=>c("subscription",r),children:[e.jsx(_.Item,{value:"basic",label:"Basic"}),e.jsx(_.Item,{value:"pro",label:"Pro"}),e.jsx(_.Item,{value:"enterprise",label:"Enterprise"})]}),n.subscription&&e.jsx("span",{className:t.errorMessage,children:n.subscription.message})]}),e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Additional Information"}),e.jsx(h,{label:"Description",required:!0,status:"error",messageIcon:"cancel",message:x.description?n.description?.message:void 0,children:e.jsx(h.Textarea,{placeholder:"Enter a brief description about the user (min. 20 characters)...",...j("description",{onBlur:()=>T("description"),onChange:()=>T("description")})})})]}),e.jsxs("div",{children:[e.jsx(U,{label:"I accept the terms and conditions",checked:C("acceptTerms"),onCheckedChange:r=>c("acceptTerms",r)}),n.acceptTerms&&e.jsx("span",{className:t.errorMessage,children:n.acceptTerms.message})]})]})})}),e.jsx(m.Footer,{children:e.jsxs(m.Actions,{children:[e.jsx(D,{design:"v1.2",buttonType:"secondary",size:"large",onClick:V,children:"Reset"}),e.jsx(D,{design:"v1.2",size:"large",disabled:!N||!y,onClick:F(g),children:"Save Changes"})]})})]})]})},play:async({canvasElement:w})=>{const u=be(w),d=async c=>{await l(()=>s(o.getByText(c)).toBeInTheDocument())},p=u.getByRole("button",{name:/open form modal/i});await a.click(p),await l(()=>s(o.getByText("User Profile Form")).toBeVisible());const b=o.getByLabelText("Full Name");await a.click(b),await a.tab(),await d("Name is required");const v=o.getByLabelText("Email Address");await a.click(v),await a.tab(),await d("Invalid email address");const j=o.getByLabelText("Department");await a.click(j),await a.tab(),await d("Please select a department");const F=o.getByLabelText("Role");await a.click(F),await a.tab(),await d("Please select a role");const n=o.getByLabelText("Description");await a.click(n),await a.tab(),await d("Description must be at least 20 characters");const y=o.getByLabelText("I accept the terms and conditions");await a.click(y),await a.click(y),await d("You must accept the terms and conditions");const x=`${S.person.firstName()} ${S.person.lastName()}`;await a.type(b,x),await l(()=>s(o.queryByText("Name is required")).not.toBeInTheDocument());const N=S.internet.email();await a.clear(v),await a.type(v,N),await l(()=>s(o.queryByText("Invalid email address")).not.toBeInTheDocument()),await a.click(j);const M=o.getByRole("option",{name:"Product"});await a.click(M),await l(()=>s(o.queryByText("Please select a department")).not.toBeInTheDocument()),await a.click(F);const C=o.getByRole("option",{name:"Manager"});await a.click(C),await l(()=>s(o.queryByText("Please select a role")).not.toBeInTheDocument());const T=S.lorem.sentence(5);await a.clear(n),await a.type(n,T),await l(()=>s(o.queryByText("Description must be at least 20 characters")).not.toBeInTheDocument());const k=o.getByLabelText("Pro");await a.click(k),await l(()=>s(o.queryByText("Please select a subscription plan")).not.toBeInTheDocument()),await a.click(y),await l(()=>s(o.queryByText("You must accept the terms and conditions")).not.toBeInTheDocument());const f=o.getByRole("button",{name:/save changes/i});await l(()=>s(f).toBeEnabled()),await a.click(f),await l(()=>s(o.queryByText("User Profile Form")).not.toBeVisible());const g=c=>s(u.getByText((r,i)=>i?.textContent===c)).toBeInTheDocument();await l(async()=>{await s(u.getByText("Form Results:")).toBeInTheDocument(),await g(`Name: ${x}`),await g(`Email: ${N}`),await g("Role: manager"),await g("Department: product"),await g(`Description: ${T}`),await g("Subscription: pro"),await g("Terms Accepted: Yes")}),await a.click(p),await l(()=>s(o.getByText("User Profile Form")).toBeInTheDocument()),await l(async()=>{await s(b).toHaveValue(""),await s(v).toHaveValue(""),await s(n).toHaveValue(""),await s(y).not.toBeChecked()}),await a.type(b,"Test Name"),await a.type(v,"test@example.com"),await a.type(n,"This is a test description that is long enough"),await a.click(y);const V=o.getByRole("button",{name:/reset/i});await a.click(V),await l(async()=>{await s(b).toHaveValue(""),await s(v).toHaveValue(""),await s(n).toHaveValue(""),await s(y).not.toBeChecked()}),await a.keyboard("{Escape}"),await a.click(u.getByRole("button",{name:/clear results/i})),await l(()=>s(u.queryByText("Form Results:")).not.toBeInTheDocument())},parameters:{docs:{description:{story:"An interactive form modal that demonstrates proper form state management using react-hook-form, validation with Zod, and displaying results in the parent component. The form includes various input types and shows how data flows from the modal back to the parent."}}}},E={render:function(){const[u,d]=O.useState(!1);return e.jsxs("div",{className:t.storyContainer,children:[e.jsxs("div",{className:t.storyHeader,children:[e.jsx("h2",{children:"Custom Modal Demo"}),e.jsx("p",{children:"Click the button below to open a custom modal with custom header and footer content."}),e.jsx(D,{design:"v1.2",size:"large",onClick:()=>d(!0),children:"Open Custom Modal"})]}),e.jsxs(m,{open:u,onOpenChange:d,columns:4,children:[e.jsx(m.Header,{children:e.jsxs("div",{className:t.customHeader,children:[e.jsx("button",{className:t.headerButton,children:"⋯"}),e.jsx(Y,{className:t.headerButton,children:"✕"})]})}),e.jsx(m.Body,{children:e.jsxs("div",{className:t.formSection,children:[e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Project Details"}),e.jsxs("div",{className:t.formGrid,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"project-name",className:t.inputLabel,children:"Project Name"}),e.jsx("input",{id:"project-name",type:"text",placeholder:"Enter project name",className:t.inputField})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"category",className:t.inputLabel,children:"Category"}),e.jsx("input",{id:"category",type:"text",placeholder:"Select category",className:t.inputField})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Team Information"}),e.jsxs("div",{className:t.formGrid,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"team-lead",className:t.inputLabel,children:"Team Lead"}),e.jsx("input",{id:"team-lead",type:"text",placeholder:"Enter team lead name",className:t.inputField})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"team-size",className:t.inputLabel,children:"Team Size"}),e.jsx("input",{id:"team-size",type:"text",placeholder:"Number of team members",className:t.inputField})]})]})]}),e.jsx("div",{children:e.jsxs("div",{className:t.formGridThree,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"budget",className:t.inputLabel,children:"Budget"}),e.jsx("input",{id:"budget",type:"text",placeholder:"Enter budget amount",className:t.inputField})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"timeline",className:t.inputLabel,children:"Timeline"}),e.jsx("input",{id:"timeline",type:"text",placeholder:"Project duration",className:t.inputField})]}),e.jsx("button",{className:t.addButton,children:"+"})]})}),e.jsxs("div",{children:[e.jsx("h3",{className:t.formSectionTitle,children:"Project Documents"}),e.jsxs("div",{className:t.fileUploadArea,children:[e.jsx("button",{className:t.uploadButton,children:"☁️ Upload file"}),e.jsx("div",{className:t.uploadText,children:"or drag and drop to upload"})]})]})]})}),e.jsx(m.Footer,{children:e.jsxs("div",{className:t.customFooter,children:[e.jsx("div",{className:t.statusBadge,children:"All done"}),e.jsxs(m.Actions,{className:t.customActions,children:[e.jsx("button",{className:t.footerButton,children:"Discard"}),e.jsx("button",{className:t.footerButtonPrimary,children:"Save Changes"})]})]})})]})]})},parameters:{docs:{description:{story:"A custom modal with custom header and footer content, demonstrating how to override the default modal structure with custom components."}}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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

                <DsModal open={isOpen} onOpenChange={setIsOpen} columns={8}>
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

    // Helper function to wait for validation messages
    const waitForMessage = async (text: string) => {
      await waitFor(() => {
        return expect(screen.getByText(text)).toBeInTheDocument();
      });
    };

    // 1. Open the modal
    const openModalButton = canvas.getByRole('button', {
      name: /open form modal/i
    });
    await userEvent.click(openModalButton);

    // Wait for modal to be visible
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

    // Helper function to wait for validation messages
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
        story: 'An interactive form modal that demonstrates proper form state management using react-hook-form, validation with Zod, and displaying results in the parent component. The form includes various input types and shows how data flows from the modal back to the parent.'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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

                <DsModal open={isOpen} onOpenChange={setIsOpen} columns={4}>
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
  parameters: {
    docs: {
      description: {
        story: 'A custom modal with custom header and footer content, demonstrating how to override the default modal structure with custom components.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};const rt=["Default","Custom"];export{E as Custom,R as Default,rt as __namedExportsOrder,ot as default};
