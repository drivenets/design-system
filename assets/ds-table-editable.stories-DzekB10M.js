import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BehKMwn5.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./ds-table-CCyaKVQ0.js";import{c as o,i as s,l as c,n as l,o as u,t as d}from"./cell-editors-WZ-s1gi0.js";import{r as f}from"./ds-form-control.types-0F3lbyMs.js";import{t as p}from"./ds-form-control-Dhg-Gch8.js";import{i as m}from"./ds-tag.types-CePi1PE1.js";import{t as h}from"./ds-tag-CCX3O7jt.js";import{c as g,l as _,n as v,s as y,t as b}from"./zod-zO8Mb99G.js";import{l as x,n as S,t as C,u as w}from"./components-Bu2sSxE5.js";import{n as T,t as E}from"./story-decorators-9jfApPlh.js";import{n as D,t as O}from"./ds-table-editable.stories.module-Bg2ECWAK.js";var k,A,j,M,N,P;e((()=>{k=t(n(),1),b(),i(),p(),h(),o(),d(),T(),w(),C(),D(),A=r(),{fn:j}=__STORYBOOK_MODULE_TEST__,M={title:`Components/Table/Editable`,component:a,parameters:{layout:`fullscreen`,docs:{description:{component:"Inline editable cells. Define `ColumnDef.editCell` to make a column editable. Double-click the view cell to enter edit mode. Press Enter or the check button to commit, Escape or the close button to cancel. Only one cell can be in edit mode at a time."}}},args:{stickyHeader:!0,bordered:!0,fullWidth:!0,emptyState:(0,A.jsx)(S,{})},decorators:[E]},N={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,k.useState)(x),r=[{label:`Single`,value:`single`},{label:`Relationship`,value:`relationship`},{label:`Complicated`,value:`complicated`}],i={single:`Single`,relationship:`Relationship`,complicated:`Complicated`},o=g({firstName:_().trim().min(1,`First name is required`).max(50,`Max 50 characters`),lastName:_().trim().min(1,`Last name is required`).max(50,`Max 50 characters`),age:y().int(`Whole number only`).min(18,`Must be ≥ 18`).max(120,`Must be ≤ 120`),visits:y().int(`Whole number only`).min(0,`Must be ≥ 0`).max(1e4,`Must be ≤ 10000`),status:v([`single`,`relationship`,`complicated`]),progress:y().int(`Whole number only`).min(0,`Must be ≥ 0`).max(100,`Must be ≤ 100`)}).refine(e=>!(e.status===`complicated`&&e.progress===100),{path:[`progress`],message:`A complicated profile can’t be 100% complete`}),d=(e,t,n)=>{let r=o.safeParse({...n,[e]:t});return r.success?null:r.error.issues.find(t=>t.path[0]===e)?.message??null},p=[25,50,75,100],h=({cellContext:e})=>{let{value:t,setValue:n,error:r}=c({cellContext:e});return(0,A.jsxs)(f,{hideLabel:!0,label:`Profile Progress`,className:O.progressEditor,status:r?`error`:void 0,message:r??void 0,messageIcon:`cancel`,children:[(0,A.jsx)(`div`,{className:O.presetList,children:p.map(e=>(0,A.jsx)(m,{size:`small`,label:`${String(e)}%`,onClick:()=>n(e)},e))}),(0,A.jsx)(f.NumberInput,{value:t,min:0,max:100,onValueChange:n})]})},b=[{accessorKey:`id`,header:`ID`,size:60,cell:e=>(0,A.jsx)(`span`,{className:O.readOnlyCell,children:e.getValue()})},{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),editCell:e=>(0,A.jsx)(u,{cellContext:e,placeholder:`Enter first name`})},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),editCell:e=>(0,A.jsx)(u,{cellContext:e,placeholder:`Enter last name`})},{accessorKey:`age`,header:`Age`,size:100,cell:e=>e.getValue(),editCell:e=>(0,A.jsx)(s,{cellContext:e,min:0,max:120})},{accessorKey:`visits`,header:`Visits`,size:100,cell:e=>e.getValue(),editCell:e=>(0,A.jsx)(s,{cellContext:e,min:0})},{accessorKey:`status`,header:`Status`,size:160,cell:e=>i[e.getValue()],editCell:e=>(0,A.jsx)(l,{cellContext:e,options:r})},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>(0,A.jsx)(`span`,{className:O.tagDisplay,children:`${String(e.getValue())}%`}),editCell:e=>(0,A.jsx)(h,{cellContext:e})}];return(0,A.jsx)(a,{...e,data:t,columns:b,selectable:!0,onRowClick:j(),primaryRowActions:[{icon:`delete_outline`,label:`Delete`,onClick:j()}],secondaryRowActions:[{icon:`info`,label:`Details`,onClick:j()}],onCellValidate:(e,t,n)=>d(t,n,e),onCellEdit:(e,t,r)=>{n(n=>n.map(n=>n.id===e.id?{...n,[t]:r}:n))}})}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [data, setData] = useState(defaultData);
    const statusOptions = [{
      label: 'Single',
      value: 'single'
    }, {
      label: 'Relationship',
      value: 'relationship'
    }, {
      label: 'Complicated',
      value: 'complicated'
    }];
    const statusLabels: Record<Status, string> = {
      single: 'Single',
      relationship: 'Relationship',
      complicated: 'Complicated'
    };
    const personSchema = z.object({
      firstName: z.string().trim().min(1, 'First name is required').max(50, 'Max 50 characters'),
      lastName: z.string().trim().min(1, 'Last name is required').max(50, 'Max 50 characters'),
      age: z.number().int('Whole number only').min(18, 'Must be ≥ 18').max(120, 'Must be ≤ 120'),
      visits: z.number().int('Whole number only').min(0, 'Must be ≥ 0').max(10_000, 'Must be ≤ 10000'),
      status: z.enum(['single', 'relationship', 'complicated']),
      progress: z.number().int('Whole number only').min(0, 'Must be ≥ 0').max(100, 'Must be ≤ 100')
    }).refine(row => !(row.status === 'complicated' && row.progress === 100), {
      path: ['progress'],
      message: 'A complicated profile can’t be 100% complete'
    });
    const validateField = (columnId: keyof Person, value: unknown, row: Person): string | null => {
      const result = personSchema.safeParse({
        ...row,
        [columnId]: value
      });
      if (result.success) {
        return null;
      }
      return result.error.issues.find(issue => issue.path[0] === columnId)?.message ?? null;
    };
    const progressPresets = [25, 50, 75, 100];
    const ProgressEditor = ({
      cellContext
    }: {
      cellContext: CellContext<Person, number>;
    }) => {
      const {
        value,
        setValue,
        error
      } = useCellEditor<Person, number>({
        cellContext
      });
      return <DsFormControl hideLabel label="Profile Progress" className={editableStyles.progressEditor} status={error ? 'error' : undefined} message={error ?? undefined} messageIcon="cancel">
                    <div className={editableStyles.presetList}>
                        {progressPresets.map(preset => <DsTag key={preset} size="small" label={\`\${String(preset)}%\`} onClick={() => setValue(preset)} />)}
                    </div>
                    <DsFormControl.NumberInput value={value} min={0} max={100} onValueChange={setValue} />
                </DsFormControl>;
    };
    const columns: ColumnDef<Person>[] = [{
      accessorKey: 'id',
      header: 'ID',
      size: 60,
      cell: info => <span className={editableStyles.readOnlyCell}>{info.getValue() as string}</span>
    }, {
      accessorKey: 'firstName',
      header: 'First Name',
      cell: info => info.getValue(),
      editCell: (info: CellContext<Person, string>) => <DsTableEditCellText cellContext={info} placeholder="Enter first name" />
    }, {
      accessorKey: 'lastName',
      header: 'Last Name',
      cell: info => info.getValue(),
      editCell: (info: CellContext<Person, string>) => <DsTableEditCellText cellContext={info} placeholder="Enter last name" />
    }, {
      accessorKey: 'age',
      header: 'Age',
      size: 100,
      cell: info => info.getValue(),
      editCell: (info: CellContext<Person, number>) => <DsTableEditCellNumber cellContext={info} min={0} max={120} />
    }, {
      accessorKey: 'visits',
      header: 'Visits',
      size: 100,
      cell: info => info.getValue(),
      editCell: (info: CellContext<Person, number>) => <DsTableEditCellNumber cellContext={info} min={0} />
    }, {
      accessorKey: 'status',
      header: 'Status',
      size: 160,
      cell: info => statusLabels[info.getValue() as Status],
      editCell: (info: CellContext<Person, string>) => <DsTableEditCellSelect cellContext={info} options={statusOptions} />
    }, {
      accessorKey: 'progress',
      header: 'Profile Progress',
      cell: info => <span className={editableStyles.tagDisplay}>{\`\${String(info.getValue())}%\`}</span>,
      editCell: (info: CellContext<Person, number>) => <ProgressEditor cellContext={info} />
    }];
    return <DsTable {...args} data={data} columns={columns} selectable onRowClick={fn()} primaryRowActions={[{
      icon: 'delete_outline',
      label: 'Delete',
      onClick: fn()
    }]} secondaryRowActions={[{
      icon: 'info',
      label: 'Details',
      onClick: fn()
    }]} onCellValidate={(row, columnId, value) => validateField(columnId as keyof Person, value, row)} onCellEdit={(row, columnId, value) => {
      setData(rows => rows.map(person => person.id === row.id ? {
        ...person,
        [columnId]: value
      } : person));
    }} />;
  }
}`,...N.parameters?.docs?.source}}},P=[`Editable`]}))();export{N as Editable,P as __namedExportsOrder,M as default};