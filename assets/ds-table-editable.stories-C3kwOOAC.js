import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n}from"./iframe-DQdiKAZ-.js";import{t as r}from"./ds-tag-BazGjZiF.js";import{t as i}from"./ds-tag-CxINh6EB.js";import{n as a,t as o}from"./ds-table-s91WVM1g.js";import{c as s,i as c,l,n as u,o as d,t as f}from"./cell-editors-BtXPc5kZ.js";import{t as p}from"./ds-form-control-DKCB1Up8.js";import{t as m}from"./ds-form-control-BMZfuubS.js";import{n as h,t as g}from"./story-decorators-DLaeAQm_.js";import{n as _,r as v}from"./story-data-UTijnOh6.js";import{i as y,o as b,s as x}from"./schemas-BdRc8nGk.js";import{n as S,t as C}from"./story-notes-data-Bq75SAxG.js";import{n as w,t as T}from"./ds-table-editable.stories.module-VORbXvAA.js";var E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{E=t(),y(),a(),m(),i(),s(),f(),h(),v(),S(),w(),D=n(),{fn:O}=__STORYBOOK_MODULE_TEST__,k={title:`Components/Table/Editable`,tags:[`visual`],component:o,parameters:{layout:`fullscreen`},args:{stickyHeader:!0,bordered:!0,fullWidth:!0},decorators:[g]},A={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,E.useState)(_),i=[{label:`Single`,value:`single`},{label:`Relationship`,value:`relationship`},{label:`Complicated`,value:`complicated`}],a={single:`Single`,relationship:`Relationship`,complicated:`Complicated`},s=[25,50,75,100],f=({cellContext:e})=>{let{value:t,setValue:n,error:i}=l({cellContext:e});return(0,D.jsxs)(p,{hideLabel:!0,label:`Profile Progress`,className:T.progressEditor,status:i?`error`:void 0,message:i??void 0,messageIcon:`cancel`,children:[(0,D.jsx)(`div`,{className:T.presetList,children:s.map(e=>(0,D.jsx)(r,{size:`small`,label:`${String(e)}%`,onClick:()=>n(e)},e))}),(0,D.jsx)(p.NumberInput,{value:t,min:0,max:100,onValueChange:n})]})},m=[{accessorKey:`id`,header:`ID`,size:60,cell:e=>(0,D.jsx)(`span`,{className:T.readOnlyCell,children:e.getValue()})},{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),editCell:e=>(0,D.jsx)(d,{cellContext:e,placeholder:`Enter first name`})},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),editCell:e=>(0,D.jsx)(d,{cellContext:e,placeholder:`Enter last name`})},{accessorKey:`age`,header:`Age`,size:100,cell:e=>e.getValue(),editCell:e=>(0,D.jsx)(c,{cellContext:e,min:0,max:120})},{accessorKey:`visits`,header:`Visits`,size:100,cell:e=>e.getValue(),editCell:e=>(0,D.jsx)(c,{cellContext:e,min:0}),editDisabled:e=>e.row.original.status===`complicated`?{reason:`Visits are locked while the status is “Complicated”.`}:e.row.original.age>=40},{accessorKey:`status`,header:`Status`,size:160,cell:e=>a[e.getValue()],editCell:e=>(0,D.jsx)(u,{cellContext:e,options:i})},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>(0,D.jsx)(`span`,{className:T.tagDisplay,children:`${String(e.getValue())}%`}),editCell:e=>(0,D.jsx)(f,{cellContext:e})}];return(0,D.jsx)(o,{...e,data:t,columns:m,selectable:!0,onRowClick:O(),primaryRowActions:[{icon:`delete_outline`,label:`Delete`,onClick:O()}],secondaryRowActions:[{icon:`info`,label:`Details`,onClick:O()}],onCellEdit:(e,t,r)=>{n(n=>n.map(n=>n.id===e.id?{...n,[t]:r}:n))}})}},j={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,E.useState)(_),r=b({firstName:x().trim().min(1,`First name is required`).max(50,`Max 50 characters`),lastName:x().trim().min(1,`Last name is required`).max(50,`Max 50 characters`)}),i=(e,t)=>{let n=r.shape[e];if(!n)return null;let i=n.safeParse(t);return i.success?null:i.error.issues[0]?.message??null},a=[{accessorKey:`id`,header:`ID`,size:60,cell:e=>(0,D.jsx)(`span`,{className:T.readOnlyCell,children:e.getValue()})},{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),editCell:e=>(0,D.jsx)(d,{cellContext:e,placeholder:`Enter first name`})},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),editCell:e=>(0,D.jsx)(d,{cellContext:e,placeholder:`Enter last name`})}];return(0,D.jsx)(o,{...e,data:t,columns:a,onCellValidate:(e,t,n)=>i(t,n),onCellEdit:(e,t,r)=>{n(n=>n.map(n=>n.id===e.id?{...n,[t]:r}:n))}})}},M={name:`Validate on Async Save`,parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,E.useState)(_),r=(e,t)=>new Promise((n,r)=>{let i=setTimeout(()=>{let t=e.trim();t.length===0?n(`First name is required`):t.toLowerCase()===`taken`?n(`This name is already taken`):n(null)},900);t.addEventListener(`abort`,()=>{clearTimeout(i),r(new DOMException(`Aborted`,`AbortError`))})}),i=[{accessorKey:`id`,header:`ID`,size:60,cell:e=>(0,D.jsx)(`span`,{className:T.readOnlyCell,children:e.getValue()})},{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),editCell:e=>(0,D.jsx)(d,{cellContext:e,placeholder:`Enter first name`})},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()}];return(0,D.jsx)(o,{...e,data:t,columns:i,onCellEdit:async(e,t,i,a)=>{let o=await r(i,a);if(o!==null)return o;n(n=>n.map(n=>n.id===e.id?{...n,[t]:i}:n))}})}},N={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,E.useState)(()=>C(6));return(0,D.jsx)(o,{bordered:!0,fullWidth:!0,stickyHeader:!0,rowSize:`auto`,data:e,columns:[{accessorKey:`change`,header:`Change`,cell:e=>e.getValue(),size:140},{accessorKey:`owner`,header:`Owner`,cell:e=>e.getValue(),editCell:e=>(0,D.jsx)(d,{cellContext:e}),size:200},{accessorKey:`notes`,header:`Notes`,cell:e=>e.getValue(),editCell:e=>(0,D.jsx)(d,{cellContext:e}),size:420}],onCellEdit:(e,n,r)=>{t(t=>t.map(t=>t.id===e.id?{...t,[n]:r}:t))}})}},P=[`Editable`,`LiveValidation`,`ValidateOnAsyncSave`,`AutoRowHeight`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`\`onCellValidate\` runs synchronously on every keystroke. It shows an inline error
and disables the Confirm button until the value is valid.

Try clearing the first name to see the error appear as you type.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"`onCellEdit` may be async: save inside it, resolve to an error `string` to keep\nthe cell open or `void`/`null` to commit. The editor locks while saving, and\n`signal` aborts if you Cancel/Escape. Try `taken` to see a server-side rejection.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [data, setData] = useState(() => generateChangeNotes(6));
    const columns: ColumnDef<ChangeNote>[] = [{
      accessorKey: 'change',
      header: 'Change',
      cell: info => info.getValue(),
      size: 140
    }, {
      accessorKey: 'owner',
      header: 'Owner',
      cell: info => info.getValue(),
      editCell: (info: CellContext<ChangeNote, string>) => <DsTableEditCellText cellContext={info} />,
      size: 200
    }, {
      accessorKey: 'notes',
      header: 'Notes',
      cell: info => info.getValue(),
      editCell: (info: CellContext<ChangeNote, string>) => <DsTableEditCellText cellContext={info} />,
      size: 420
    }];
    return <DsTable bordered fullWidth stickyHeader rowSize="auto" data={data} columns={columns} onCellEdit={(row, columnId, value) => {
      setData(rows => rows.map(note => note.id === row.id ? {
        ...note,
        [columnId]: value
      } : note));
    }} />;
  }
}`,...N.parameters?.docs?.source},description:{story:'Editable cells with `rowSize="auto"`. Long values wrap and grow the row.\nDouble-click a cell to edit it.',...N.parameters?.docs?.description}}}})))()}F();export{N as AutoRowHeight,A as Editable,j as LiveValidation,M as ValidateOnAsyncSave,P as __namedExportsOrder,k as default};