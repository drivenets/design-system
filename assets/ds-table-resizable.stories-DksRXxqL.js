import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-CjiQ0Gqr.js";import{n as r,t as i}from"./ds-typography-C-FUbCAY.js";import{n as a,t as o}from"./ds-button-v3-JsnnMoG0.js";import{n as s,t as c}from"./ds-stack-rLkmoLJd.js";import{n as l,t as u}from"./ds-table-DLFVzHB0.js";import{n as d,t as f}from"./story-decorators-Ch24_KSx.js";import{n as p,r as m,t as h}from"./story-data-CNz-shmS.js";var g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{g=t(),a(),s(),i(),l(),m(),d(),_=n(),v=t(),y={title:`Components/Table/Resizable Columns`,component:u,parameters:{layout:`fullscreen`},args:{data:p,columns:h,resizableColumns:!0,stickyHeader:!0,bordered:!0,fullWidth:!0},decorators:[f]},b={args:{resizableColumns:!0}},x={args:{columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:200},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:200},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:120},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),enableResizing:!1,size:120},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()}]}},S={args:{columns:[{id:`identity`,header:`Identity`,columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),minSize:80,maxSize:280},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()}]},{id:`activity`,header:`Activity`,columns:[{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue()},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()},{accessorKey:`progress`,header:`Progress`,cell:e=>`${String(e.getValue())}%`}]}]}},C={args:{columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:200,minSize:80,maxSize:280},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:200,minSize:120},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:120,maxSize:180},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),size:120},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()}]}},w={name:`Persisted widths`,parameters:{docs:{source:{type:`code`}}},render:function(e){let t=`storybook.ds-table.resizable.persisted-widths`,[n,i]=(0,g.useState)(0),a;try{a=JSON.parse(localStorage.getItem(t)??`{}`)}catch{a={}}return(0,_.jsxs)(c,{direction:`column`,gap:16,width:`100%`,children:[(0,_.jsxs)(c,{direction:`column`,gap:8,children:[(0,_.jsx)(r,{variant:`heading4`,children:`Persisted widths`}),(0,_.jsx)(r,{variant:`body-sm-reg`,color:`secondary`,children:`Persist the map from onColumnSizingChange, then pass it back as the columnSizing prop on the next mount to restore widths — no need to stamp columnDef.size. Columns absent from the map are measured automatically. Resize a column, refresh the story, and the widths come back. Reset stored widths remounts from the default layout.`})]}),(0,_.jsx)(c,{direction:`row`,children:(0,_.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>{localStorage.removeItem(t),i(e=>e+1)},children:`Reset stored widths`})}),(0,v.createElement)(u,{...e,key:n,columnSizing:a,onColumnSizingChange:e=>{localStorage.setItem(t,JSON.stringify(e))}})]})}},T=[`Default`,`FixedAndFill`,`GroupedColumns`,`MinAndMaxSize`,`PersistedWidths`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    resizableColumns: true
  }
}`,...b.parameters?.docs?.source},description:{story:`Drag the right edge of any header cell to resize its column. Widths are
snapshotted from the first layout, then update live while dragging. A
full-height indicator marks the boundary. Double-click a handle to restore
the snapshotted width.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"A mix of fixed-width and fill columns. `Visits` opts out of resizing via\n`enableResizing: false`, so it has no handle. `Status` has no explicit size\nand is snapshotted from its filled width when resizing is enabled.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Resizing works on grouped headers too. Leaves without an explicit `size`\nfill the table on first layout, then snapshot to pixels. Dragging a leaf\nboundary resizes that column; dragging a group-header boundary scales its\nleaf columns proportionally. `First Name` has `minSize` / `maxSize` so that\nleaf (and the group, when it hits that bound) stop independently of siblings.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Leaf columns may set `minSize` and `maxSize` (px). Dragging stops at those\nbounds; the default min is 52px when `minSize` is omitted. Group-level\nmin/max is ignored — each leaf clamps independently.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"Restore column widths across remounts via `columnSizing`.",...w.parameters?.docs?.description}}}})))()}E();export{b as Default,x as FixedAndFill,S as GroupedColumns,C as MinAndMaxSize,w as PersistedWidths,T as __namedExportsOrder,y as default};