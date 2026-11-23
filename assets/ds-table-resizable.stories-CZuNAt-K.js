import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n}from"./iframe-BJBM3kaA.js";import{n as r,t as i}from"./ds-typography-CpFc16Nt.js";import{n as a,t as o}from"./ds-button-v3-CGjWpj2J.js";import{n as s,t as c}from"./ds-stack-DASX2VPV.js";import{n as l,t as u}from"./ds-table-DD2g_A4D.js";import{n as d,t as f}from"./story-decorators-DvWcNqDM.js";import{n as p,r as m,t as h}from"./story-data-UTijnOh6.js";import{n as g,t as _}from"./story-notes-data-Bq75SAxG.js";var v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{v=t(),a(),s(),i(),l(),m(),d(),g(),y=n(),b={title:`Components/Table/Resizable Columns`,tags:[`visual`],component:u,parameters:{layout:`fullscreen`},args:{data:p,columns:h,resizableColumns:!0,stickyHeader:!0,bordered:!0,fullWidth:!0},decorators:[f]},x={args:{resizableColumns:!0}},S={args:{columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:200},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:200},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:120},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),enableResizing:!1,size:120},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()}]}},C={args:{columns:[{id:`identity`,header:`Identity`,columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),minSize:80,maxSize:280},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()}]},{id:`activity`,header:`Activity`,columns:[{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue()},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()},{accessorKey:`progress`,header:`Progress`,cell:e=>`${String(e.getValue())}%`}]}]}},w={args:{columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:200,minSize:80,maxSize:280},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:200,minSize:120},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:120,maxSize:180},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),size:120},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()}]}},T={args:{columnDisplay:!0}},E={name:`Persisted widths`,parameters:{docs:{source:{type:`code`}}},render:function(e){let t=`storybook.ds-table.resizable.persisted-widths`,[n,i]=(0,v.useState)(0),a;try{a=JSON.parse(localStorage.getItem(t)??`{}`)}catch{a={}}return(0,y.jsxs)(c,{direction:`column`,gap:16,width:`100%`,children:[(0,y.jsxs)(c,{direction:`column`,gap:8,children:[(0,y.jsx)(r,{variant:`heading4`,children:`Persisted widths`}),(0,y.jsx)(r,{variant:`body-sm-reg`,color:`secondary`,children:`Persist the map from onColumnSizingChange, then pass it back as the columnSizing prop on the next mount to restore widths — no need to stamp columnDef.size. Columns absent from the map are measured automatically. Resize a column, refresh the story, and the widths come back. Reset stored widths remounts from the default layout.`})]}),(0,y.jsx)(c,{direction:`row`,children:(0,y.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>{localStorage.removeItem(t),i(e=>e+1)},children:`Reset stored widths`})}),(0,v.createElement)(u,{...e,key:n,columnSizing:a,onColumnSizingChange:e=>{localStorage.setItem(t,JSON.stringify(e))}})]})}},D={render:()=>(0,y.jsx)(u,{bordered:!0,fullWidth:!0,stickyHeader:!0,resizableColumns:!0,rowSize:`auto`,data:_(6),columns:[{accessorKey:`change`,header:`Change`,cell:e=>e.getValue(),size:140},{accessorKey:`owner`,header:`Owner`,cell:e=>e.getValue(),size:200},{accessorKey:`notes`,header:`Notes`,cell:e=>e.getValue(),size:420}]})},O=[`Default`,`FixedAndFill`,`GroupedColumns`,`MinAndMaxSize`,`WithColumnDisplay`,`PersistedWidths`,`AutoRowHeight`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    resizableColumns: true
  }
}`,...x.parameters?.docs?.source},description:{story:`Drag the right edge of any header cell to resize its column. Widths are
snapshotted from the first layout, then update live while dragging. A
full-height indicator marks the boundary. Double-click a handle to restore
the snapshotted width.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      accessorKey: 'firstName',
      header: 'First Name',
      cell: info => info.getValue(),
      size: 200
    }, {
      accessorKey: 'lastName',
      header: 'Last Name',
      cell: info => info.getValue(),
      size: 200
    }, {
      accessorKey: 'age',
      header: 'Age',
      cell: info => info.getValue(),
      size: 120
    }, {
      accessorKey: 'visits',
      header: 'Visits',
      cell: info => info.getValue(),
      enableResizing: false,
      size: 120
    }, {
      accessorKey: 'status',
      header: 'Status',
      cell: info => info.getValue()
    }]
  }
}`,...S.parameters?.docs?.source},description:{story:"A mix of fixed-width and fill columns. `Visits` opts out of resizing via\n`enableResizing: false`, so it has no handle. `Status` has no explicit size\nand is snapshotted from its filled width when resizing is enabled.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'identity',
      header: 'Identity',
      columns: [{
        accessorKey: 'firstName',
        header: 'First Name',
        cell: info => info.getValue<string>(),
        minSize: 80,
        maxSize: 280
      }, {
        accessorKey: 'lastName',
        header: 'Last Name',
        cell: info => info.getValue<string>()
      }]
    }, {
      id: 'activity',
      header: 'Activity',
      columns: [{
        accessorKey: 'visits',
        header: 'Visits',
        cell: info => info.getValue<number>()
      }, {
        accessorKey: 'status',
        header: 'Status',
        cell: info => info.getValue<string>()
      }, {
        accessorKey: 'progress',
        header: 'Progress',
        cell: info => \`\${String(info.getValue<number>())}%\`
      }]
    }]
  }
}`,...C.parameters?.docs?.source},description:{story:"Resizing works on grouped headers too. Leaves without an explicit `size`\nfill the table on first layout, then snapshot to pixels. Dragging a leaf\nboundary resizes that column; dragging a group-header boundary scales its\nleaf columns proportionally. `First Name` has `minSize` / `maxSize` so that\nleaf (and the group, when it hits that bound) stop independently of siblings.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      accessorKey: 'firstName',
      header: 'First Name',
      cell: info => info.getValue(),
      size: 200,
      minSize: 80,
      maxSize: 280
    }, {
      accessorKey: 'lastName',
      header: 'Last Name',
      cell: info => info.getValue(),
      size: 200,
      minSize: 120
    }, {
      accessorKey: 'age',
      header: 'Age',
      cell: info => info.getValue(),
      size: 120,
      maxSize: 180
    }, {
      accessorKey: 'visits',
      header: 'Visits',
      cell: info => info.getValue(),
      size: 120
    }, {
      accessorKey: 'status',
      header: 'Status',
      cell: info => info.getValue()
    }]
  }
}`,...w.parameters?.docs?.source},description:{story:"Leaf columns may set `minSize` and `maxSize` (px). Dragging stops at those\nbounds; the default min is 52px when `minSize` is omitted. Group-level\nmin/max is ignored — each leaf clamps independently.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    columnDisplay: true
  }
}`,...T.parameters?.docs?.source},description:{story:`Resizable columns with the Columns button. The Columns cell keeps its fixed
width and has no resize handle.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Persisted widths',
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const STORAGE_KEY = 'storybook.ds-table.resizable.persisted-widths';
    const [tableKey, setTableKey] = useState(0);
    let persistedWidths: Record<string, number>;
    try {
      persistedWidths = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Record<string, number>;
    } catch {
      persistedWidths = {};
    }
    return <DsStack direction="column" gap={16} width="100%">
                <DsStack direction="column" gap={8}>
                    <DsTypography variant="heading4">Persisted widths</DsTypography>
                    <DsTypography variant="body-sm-reg" color="secondary">
                        Persist the map from onColumnSizingChange, then pass it back as the columnSizing prop on the next
                        mount to restore widths — no need to stamp columnDef.size. Columns absent from the map are
                        measured automatically. Resize a column, refresh the story, and the widths come back. Reset stored
                        widths remounts from the default layout.
                    </DsTypography>
                </DsStack>

                <DsStack direction="row">
                    <DsButtonV3 variant="secondary" size="small" onClick={() => {
          localStorage.removeItem(STORAGE_KEY);
          setTableKey(key => key + 1);
        }}>
                        Reset stored widths
                    </DsButtonV3>
                </DsStack>

                <DsTable {...args} key={tableKey} columnSizing={persistedWidths} onColumnSizingChange={columnSizing => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(columnSizing));
      }} />
            </DsStack>;
  }
}`,...E.parameters?.docs?.source},description:{story:"Restore column widths across remounts via `columnSizing`.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <DsTable bordered fullWidth stickyHeader resizableColumns rowSize="auto" data={generateChangeNotes(6)} columns={[{
    accessorKey: 'change',
    header: 'Change',
    cell: info => info.getValue(),
    size: 140
  }, {
    accessorKey: 'owner',
    header: 'Owner',
    cell: info => info.getValue(),
    size: 200
  }, {
    accessorKey: 'notes',
    header: 'Notes',
    cell: info => info.getValue(),
    size: 420
  }]} />
}`,...D.parameters?.docs?.source},description:{story:'Resizable columns with `rowSize="auto"`. Narrow the Notes column and its text\nwraps onto more lines, growing the rows; widen it and the rows shrink back.',...D.parameters?.docs?.description}}}})))()}k();export{D as AutoRowHeight,x as Default,S as FixedAndFill,C as GroupedColumns,w as MinAndMaxSize,E as PersistedWidths,T as WithColumnDisplay,O as __namedExportsOrder,b as default};