import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-typography-CNcYGTxd.js";import{n as o,t as s}from"./ds-button-v3-BnV8s8Ko.js";import{n as c,t as l}from"./ds-stack-GU0hZWeR.js";import{n as u,t as d}from"./ds-table-D8JcB1ey.js";import{n as f,t as p}from"./story-decorators-B0BgvTCA.js";import{n as m,r as h,t as g}from"./story-data-DABjxFNS.js";var _,v,y,b,x,S,C,w,T,E;t((()=>{_=e(n(),1),o(),c(),a(),u(),h(),f(),v=r(),y=e(n(),1),b={title:`Components/Table/Resizable Columns`,component:d,parameters:{layout:`fullscreen`},args:{data:m,columns:g,resizableColumns:!0,stickyHeader:!0,bordered:!0,fullWidth:!0},decorators:[p]},x={args:{resizableColumns:!0}},S={args:{columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:200},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:200},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:120},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),enableResizing:!1,size:120},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()}]}},C={args:{columns:[{id:`identity`,header:`Identity`,columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),minSize:80,maxSize:280},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()}]},{id:`activity`,header:`Activity`,columns:[{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue()},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()},{accessorKey:`progress`,header:`Progress`,cell:e=>`${String(e.getValue())}%`}]}]}},w={args:{columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:200,minSize:80,maxSize:280},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:200,minSize:120},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:120,maxSize:180},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),size:120},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()}]}},T={name:`Persisted widths`,parameters:{docs:{source:{type:`code`}}},render:function(e){let t=`storybook.ds-table.resizable.persisted-widths`,[n,r]=(0,_.useState)(0),a;try{a=JSON.parse(localStorage.getItem(t)??`{}`)}catch{a={}}return(0,v.jsxs)(l,{direction:`column`,gap:16,width:`100%`,children:[(0,v.jsxs)(l,{direction:`column`,gap:8,children:[(0,v.jsx)(i,{variant:`heading4`,children:`Persisted widths`}),(0,v.jsx)(i,{variant:`body-sm-reg`,color:`secondary`,children:`Persist the map from onColumnSizingChange, then pass it back as the columnSizing prop on the next mount to restore widths — no need to stamp columnDef.size. Columns absent from the map are measured automatically. Resize a column, refresh the story, and the widths come back. Reset stored widths remounts from the default layout.`})]}),(0,v.jsx)(l,{direction:`row`,children:(0,v.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>{localStorage.removeItem(t),r(e=>e+1)},children:`Reset stored widths`})}),(0,y.createElement)(d,{...e,key:n,columnSizing:a,onColumnSizingChange:e=>{localStorage.setItem(t,JSON.stringify(e))}})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"Restore column widths across remounts via `columnSizing`.",...T.parameters?.docs?.description}}},E=[`Default`,`FixedAndFill`,`GroupedColumns`,`MinAndMaxSize`,`PersistedWidths`]}))();export{x as Default,S as FixedAndFill,C as GroupedColumns,w as MinAndMaxSize,T as PersistedWidths,E as __namedExportsOrder,b as default};