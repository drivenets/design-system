import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-typography-BLoO5j9q.js";import{n as o,t as s}from"./ds-button-v3-r44tD_RJ.js";import{n as c,t as l}from"./ds-stack-GU0hZWeR.js";import{n as u,t as d}from"./ds-table-i4tz0ysf.js";import{c as f,l as p,n as m,t as h,u as g}from"./components-DJJkaLII.js";import{n as _,t as v}from"./story-decorators--tHA5VUw.js";var y,b,x,S,C,w,T,E,D,O;t((()=>{y=e(n(),1),o(),c(),a(),u(),g(),_(),h(),b=r(),x=e(n(),1),S={title:`Components/Table/Resizable Columns`,component:d,parameters:{layout:`fullscreen`},args:{data:p,columns:f,resizableColumns:!0,stickyHeader:!0,bordered:!0,fullWidth:!0,emptyState:(0,b.jsx)(m,{})},decorators:[v]},C={args:{resizableColumns:!0}},w={args:{columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:200},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:200},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:120},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),enableResizing:!1,size:120},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()}]}},T={args:{columns:[{id:`identity`,header:`Identity`,columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),minSize:80,maxSize:280},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()}]},{id:`activity`,header:`Activity`,columns:[{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue()},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()},{accessorKey:`progress`,header:`Progress`,cell:e=>`${String(e.getValue())}%`}]}]}},E={args:{columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:200,minSize:80,maxSize:280},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:200,minSize:120},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:120,maxSize:180},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),size:120},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()}]}},D={name:`Persisted widths`,parameters:{docs:{source:{type:`code`}}},render:function(e){let t=`storybook.ds-table.resizable.persisted-widths`,[n,r]=(0,y.useState)(0),a;try{a=JSON.parse(localStorage.getItem(t)??`{}`)}catch{a={}}return(0,b.jsxs)(l,{direction:`column`,gap:16,width:`100%`,children:[(0,b.jsxs)(l,{direction:`column`,gap:8,children:[(0,b.jsx)(i,{variant:`heading4`,children:`Persisted widths`}),(0,b.jsx)(i,{variant:`body-sm-reg`,color:`secondary`,children:`Persist the map from onColumnSizingChange, then pass it back as the columnSizing prop on the next mount to restore widths — no need to stamp columnDef.size. Columns absent from the map are measured automatically. Resize a column, refresh the story, and the widths come back. Reset stored widths remounts from the default layout.`})]}),(0,b.jsx)(l,{direction:`row`,children:(0,b.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>{localStorage.removeItem(t),r(e=>e+1)},children:`Reset stored widths`})}),(0,x.createElement)(d,{...e,key:n,columnSizing:a,onColumnSizingChange:e=>{localStorage.setItem(t,JSON.stringify(e))}})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    resizableColumns: true
  }
}`,...C.parameters?.docs?.source},description:{story:`Drag the right edge of any header cell to resize its column. Widths are
snapshotted from the first layout, then update live while dragging. A
full-height indicator marks the boundary. Double-click a handle to restore
the snapshotted width.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:"A mix of fixed-width and fill columns. `Visits` opts out of resizing via\n`enableResizing: false`, so it has no handle. `Status` has no explicit size\nand is snapshotted from its filled width when resizing is enabled.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"Resizing works on grouped headers too. Leaves without an explicit `size`\nfill the table on first layout, then snapshot to pixels. Dragging a leaf\nboundary resizes that column; dragging a group-header boundary scales its\nleaf columns proportionally. `First Name` has `minSize` / `maxSize` so that\nleaf (and the group, when it hits that bound) stop independently of siblings.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"Leaf columns may set `minSize` and `maxSize` (px). Dragging stops at those\nbounds; the default min is 52px when `minSize` is omitted. Group-level\nmin/max is ignored — each leaf clamps independently.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"Restore column widths across remounts via `columnSizing`.",...D.parameters?.docs?.description}}},O=[`Default`,`FixedAndFill`,`GroupedColumns`,`MinAndMaxSize`,`PersistedWidths`]}))();export{C as Default,w as FixedAndFill,T as GroupedColumns,E as MinAndMaxSize,D as PersistedWidths,O as __namedExportsOrder,S as default};