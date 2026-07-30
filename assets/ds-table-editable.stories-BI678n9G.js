import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-table-dAmA_m8N.js";import{c as o,i as s,l as c,n as l,o as u,t as d}from"./cell-editors-QHU2mVVu.js";import{r as f}from"./ds-form-control.types-C1HYKRwp.js";import{t as p}from"./ds-form-control-HULQXx08.js";import{t as m}from"./ds-tag-BQcBHSGE.js";import{t as h}from"./ds-tag-C28i6glH.js";import{c as g,l as _,t as v}from"./zod-BJg-qOEy.js";import{l as y,n as b,t as x,u as S}from"./components-B31jbPMJ.js";import{n as C,t as w}from"./story-decorators-BtxI4Q4K.js";import{n as T,t as E}from"./ds-table-editable.stories.module-Bf5VXULp.js";var D,O,k,A,j,M,N,P;t((()=>{D=e(n(),1),v(),i(),p(),h(),o(),d(),C(),S(),x(),T(),O=r(),{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/Table/Editable`,component:a,parameters:{layout:`fullscreen`},args:{stickyHeader:!0,bordered:!0,fullWidth:!0,emptyState:(0,O.jsx)(b,{})},decorators:[w]},j={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,D.useState)(y),r=[{label:`Single`,value:`single`},{label:`Relationship`,value:`relationship`},{label:`Complicated`,value:`complicated`}],i={single:`Single`,relationship:`Relationship`,complicated:`Complicated`},o=[25,50,75,100],d=({cellContext:e})=>{let{value:t,setValue:n,error:r}=c({cellContext:e});return(0,O.jsxs)(f,{hideLabel:!0,label:`Profile Progress`,className:E.progressEditor,status:r?`error`:void 0,message:r??void 0,messageIcon:`cancel`,children:[(0,O.jsx)(`div`,{className:E.presetList,children:o.map(e=>(0,O.jsx)(m,{size:`small`,label:`${String(e)}%`,onClick:()=>n(e)},e))}),(0,O.jsx)(f.NumberInput,{value:t,min:0,max:100,onValueChange:n})]})},p=[{accessorKey:`id`,header:`ID`,size:60,cell:e=>(0,O.jsx)(`span`,{className:E.readOnlyCell,children:e.getValue()})},{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),editCell:e=>(0,O.jsx)(u,{cellContext:e,placeholder:`Enter first name`})},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),editCell:e=>(0,O.jsx)(u,{cellContext:e,placeholder:`Enter last name`})},{accessorKey:`age`,header:`Age`,size:100,cell:e=>e.getValue(),editCell:e=>(0,O.jsx)(s,{cellContext:e,min:0,max:120})},{accessorKey:`visits`,header:`Visits`,size:100,cell:e=>e.getValue(),editCell:e=>(0,O.jsx)(s,{cellContext:e,min:0}),editDisabled:e=>e.row.original.status===`complicated`?{reason:`Visits are locked while the status is “Complicated”.`}:e.row.original.age>=40},{accessorKey:`status`,header:`Status`,size:160,cell:e=>i[e.getValue()],editCell:e=>(0,O.jsx)(l,{cellContext:e,options:r})},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>(0,O.jsx)(`span`,{className:E.tagDisplay,children:`${String(e.getValue())}%`}),editCell:e=>(0,O.jsx)(d,{cellContext:e})}];return(0,O.jsx)(a,{...e,data:t,columns:p,selectable:!0,onRowClick:k(),primaryRowActions:[{icon:`delete_outline`,label:`Delete`,onClick:k()}],secondaryRowActions:[{icon:`info`,label:`Details`,onClick:k()}],onCellEdit:(e,t,r)=>{n(n=>n.map(n=>n.id===e.id?{...n,[t]:r}:n))}})}},M={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,D.useState)(y),r=g({firstName:_().trim().min(1,`First name is required`).max(50,`Max 50 characters`),lastName:_().trim().min(1,`Last name is required`).max(50,`Max 50 characters`)}),i=(e,t)=>{let n=r.shape[e];if(!n)return null;let i=n.safeParse(t);return i.success?null:i.error.issues[0]?.message??null},o=[{accessorKey:`id`,header:`ID`,size:60,cell:e=>(0,O.jsx)(`span`,{className:E.readOnlyCell,children:e.getValue()})},{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),editCell:e=>(0,O.jsx)(u,{cellContext:e,placeholder:`Enter first name`})},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),editCell:e=>(0,O.jsx)(u,{cellContext:e,placeholder:`Enter last name`})}];return(0,O.jsx)(a,{...e,data:t,columns:o,onCellValidate:(e,t,n)=>i(t,n),onCellEdit:(e,t,r)=>{n(n=>n.map(n=>n.id===e.id?{...n,[t]:r}:n))}})}},N={name:`Validate on Async Save`,parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,D.useState)(y),r=(e,t)=>new Promise((n,r)=>{let i=setTimeout(()=>{let t=e.trim();if(t.length===0){n(`First name is required`);return}if(t.toLowerCase()===`taken`){n(`This name is already taken`);return}n(null)},900);t.addEventListener(`abort`,()=>{clearTimeout(i),r(new DOMException(`Aborted`,`AbortError`))})}),i=[{accessorKey:`id`,header:`ID`,size:60,cell:e=>(0,O.jsx)(`span`,{className:E.readOnlyCell,children:e.getValue()})},{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),editCell:e=>(0,O.jsx)(u,{cellContext:e,placeholder:`Enter first name`})},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()}];return(0,O.jsx)(a,{...e,data:t,columns:i,onCellEdit:async(e,t,i,a)=>{let o=await r(i,a);if(o!==null)return o;n(n=>n.map(n=>n.id===e.id?{...n,[t]:i}:n))}})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
      editCell: (info: CellContext<Person, number>) => <DsTableEditCellNumber cellContext={info} min={0} />,
      editDisabled: (info: CellContext<Person, number>) => {
        if (info.row.original.status === 'complicated') {
          return {
            reason: 'Visits are locked while the status is “Complicated”.'
          };
        }
        if (info.row.original.age >= 40) {
          return true;
        }
        return false;
      }
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
    }]} onCellEdit={(row, columnId, value) => {
      setData(rows => rows.map(person => person.id === row.id ? {
        ...person,
        [columnId]: value
      } : person));
    }} />;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [data, setData] = useState(defaultData);
    const personSchema = z.object({
      firstName: z.string().trim().min(1, 'First name is required').max(50, 'Max 50 characters'),
      lastName: z.string().trim().min(1, 'Last name is required').max(50, 'Max 50 characters')
    });
    const validateField = (columnId: string, value: unknown): string | null => {
      const shape: Record<string, z.ZodTypeAny | undefined> = personSchema.shape;
      const fieldSchema = shape[columnId];
      if (!fieldSchema) {
        return null;
      }
      const result = fieldSchema.safeParse(value);
      return result.success ? null : result.error.issues[0]?.message ?? null;
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
    }];
    return <DsTable {...args} data={data} columns={columns} onCellValidate={(_row, columnId, value) => validateField(columnId, value)} onCellEdit={(row, columnId, value) => {
      setData(rows => rows.map(person => person.id === row.id ? {
        ...person,
        [columnId]: value
      } : person));
    }} />;
  }
}`,...M.parameters?.docs?.source},description:{story:`\`onCellValidate\` runs synchronously on every keystroke. It shows an inline error
and disables the Confirm button until the value is valid.

Try clearing the first name to see the error appear as you type.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Validate on Async Save',
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [data, setData] = useState(defaultData);
    const saveFirstName = (value: string, signal: AbortSignal): Promise<string | null> => new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        const trimmed = value.trim();
        if (trimmed.length === 0) {
          resolve('First name is required');
          return;
        }
        if (trimmed.toLowerCase() === 'taken') {
          resolve('This name is already taken');
          return;
        }
        resolve(null);
      }, 900);
      signal.addEventListener('abort', () => {
        clearTimeout(timeout);
        reject(new DOMException('Aborted', 'AbortError'));
      });
    });
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
      cell: info => info.getValue()
    }];
    return <DsTable {...args} data={data} columns={columns} onCellEdit={async (row, columnId, value, signal) => {
      const error = await saveFirstName(value as string, signal);
      if (error !== null) {
        return error;
      }
      setData(rows => rows.map(person => person.id === row.id ? {
        ...person,
        [columnId]: value
      } : person));
    }} />;
  }
}`,...N.parameters?.docs?.source},description:{story:"`onCellEdit` may be async: save inside it, resolve to an error `string` to keep\nthe cell open or `void`/`null` to commit. The editor locks while saving, and\n`signal` aborts if you Cancel/Escape. Try `taken` to see a server-side rejection.",...N.parameters?.docs?.description}}},P=[`Editable`,`LiveValidation`,`ValidateOnAsyncSave`]}))();export{j as Editable,M as LiveValidation,N as ValidateOnAsyncSave,P as __namedExportsOrder,A as default};