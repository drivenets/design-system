import{j as e}from"./jsx-runtime-u17CrQMm.js";import{a as D}from"./iframe-DLMDGCUl.js";import{D as B}from"./ds-icon-DahQ-ftt.js";import{D as E}from"./ds-button-Th9pp1mU.js";import{R as N,P as R,O as q,C as k,T as f,a as v,D as x}from"./index-vPva7_3E.js";import{c as P}from"./index-CZjfX2qz.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-button-legacy-8uD__cm1.js";import"./ds-button-new-Cimz2Z-c.js";import"./index-Ccoi4OM8.js";import"./index-_lRCdW41.js";import"./index-CXuil9IB.js";import"./index-H_XcGL9U.js";import"./index-BXejAFVA.js";import"./index-wK_2Xdwh.js";import"./Combination-CHa5CDef.js";import"./index-CCOlAiJE.js";const I="_overlay_1o4nm_41",S="_dialog_1o4nm_48",F="_title_1o4nm_76",V="_description_1o4nm_87",L="_customPlacement_1o4nm_98",s={overlay:I,dialog:S,title:F,description:V,customPlacement:L},g=({open:o,onOpenChange:i,title:t,hideTitle:n,description:h,hideDescription:w,children:_,className:O,anchorRef:a,customPosition:r,modal:j=!0})=>{let y={};if(r)y={position:"fixed",...r};else if(a?.current){const C=a.current.getBoundingClientRect();y={position:"fixed",top:C.bottom,left:C.left}}return e.jsx(N,{open:o,onOpenChange:i,children:e.jsxs(R,{children:[j&&e.jsx(q,{className:s.overlay}),e.jsxs(k,{className:P(s.dialog,O,{[s.customPlacement]:r||a}),style:r||a?y:void 0,children:[e.jsx(f,{asChild:!0,children:n?e.jsx(v,{children:e.jsx(f,{className:s.title,children:t})}):e.jsx(f,{className:s.title,children:t})}),h&&e.jsx(x,{asChild:!0,children:w?e.jsx(v,{children:e.jsx(x,{className:s.description,children:h})}):e.jsx(x,{className:s.description,children:h})}),_]})]})})};g.__docgenInfo={description:"",methods:[],displayName:"DsDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:"Controls whether the dialog is open."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback fired when the open state should change."},title:{required:!0,tsType:{name:"string"},description:"The accessible title for the dialog. Required for accessibility."},hideTitle:{required:!1,tsType:{name:"boolean"},description:"If true, the dialog title will be visually hidden but accessible to screen readers."},description:{required:!1,tsType:{name:"string"},description:"The accessible description for the dialog. Optional, but recommended for accessibility."},hideDescription:{required:!1,tsType:{name:"boolean"},description:"If true, the dialog description will be visually hidden but accessible to screen readers."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to render inside the dialog."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names for the dialog container."},anchorRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Ref to the element the dialog should be anchored to (for relative placement)"},customPosition:{required:!1,tsType:{name:"signature",type:"object",raw:"{ top: number; left: number }",signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}},description:"Custom fixed position (e.g., { top: number, left: number })"},modal:{required:!1,tsType:{name:"boolean"},description:"If true, show modal overlay and center dialog (default: true)",defaultValue:{value:"true",computed:!1}}}};const M="_dialogContent_wldeh_1",W="_menuIcon_wldeh_6",T={dialogContent:M,menuIcon:W},{expect:d,screen:p,userEvent:u,waitFor:m,within:b}=__STORYBOOK_MODULE_TEST__,se={title:"Design System/Dialog",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Controls whether the dialog is open"},onOpenChange:{action:"onOpenChange",description:"Function called when dialog open state changes"},title:{control:"text",description:"Title of the dialog"},description:{control:"text",description:"Description text for the dialog"},hideTitle:{control:"boolean",description:"Whether to hide the title visually"},hideDescription:{control:"boolean",description:"Whether to hide the description visually"},modal:{control:"boolean",description:"Whether the dialog should be modal"},customPosition:{control:"object",description:"Custom position for the dialog in pixels relative to the viewport. Expects {top: number, left: number}"}}},l={render:function(i){const[t,n]=D.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(E,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsx(g,{...i,open:t,onOpenChange:n,title:"Centered Dialog",description:"This dialog appears in the center of the screen",children:e.jsx("div",{className:T.dialogContent,children:"This is a centered dialog example"})})]})},play:async({canvasElement:o})=>{const t=b(o).getByText("Open Dialog");await u.click(t),await m(()=>d(p.getByText(/Centered Dialog/)).toBeTruthy()),await u.keyboard("{Escape}"),await m(()=>d(p.queryByText(/Centered Dialog/)).toBeNull())}},c={render:function(i){const[t,n]=D.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(B,{className:T.menuIcon,icon:"menu",size:"large",onClick:()=>n(!0)}),e.jsx(g,{...i,open:t,onOpenChange:n,title:"Custom Position Dialog",description:"This dialog appears relative to the menu icon",customPosition:{top:60,left:20},children:e.jsx("div",{className:T.dialogContent,children:"This is a custom positioned dialog example"})})]})},play:async({canvasElement:o})=>{const t=b(o).getByText(/menu/i);await u.click(t),await m(()=>d(p.getByText(/Custom Position Dialog/)).toBeTruthy()),await u.keyboard("{Escape}"),await m(()=>d(p.queryByText(/Custom Position Dialog/)).toBeNull())}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [open, setOpen] = React.useState(false);
    return <>
                <DsButton onClick={() => setOpen(true)}>Open Dialog</DsButton>
                <DsDialog {...args} open={open} onOpenChange={setOpen} title="Centered Dialog" description="This dialog appears in the center of the screen">
                    <div className={styles.dialogContent}>This is a centered dialog example</div>
                </DsDialog>
            </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('Open Dialog');
    await userEvent.click(trigger);
    // Verify dialog is opened
    await waitFor(() => {
      return expect(screen.getByText(/Centered Dialog/)).toBeTruthy();
    });
    // Close dialog with Escape key
    await userEvent.keyboard('{Escape}');
    // Verify dialog is closed
    await waitFor(() => {
      return expect(screen.queryByText(/Centered Dialog/)).toBeNull();
    });
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [open, setOpen] = React.useState(false);
    return <>
                <DsIcon className={styles.menuIcon} icon="menu" size="large" onClick={() => setOpen(true)} />
                <DsDialog {...args} open={open} onOpenChange={setOpen} title="Custom Position Dialog" description="This dialog appears relative to the menu icon" customPosition={{
        top: 60,
        left: 20
      }}>
                    <div className={styles.dialogContent}>This is a custom positioned dialog example</div>
                </DsDialog>
            </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText(/menu/i);
    await userEvent.click(trigger);
    // Verify dialog is opened
    await waitFor(() => {
      return expect(screen.getByText(/Custom Position Dialog/)).toBeTruthy();
    });
    // Close dialog with Escape key
    await userEvent.keyboard('{Escape}');
    // Verify dialog is closed
    await waitFor(() => {
      return expect(screen.queryByText(/Custom Position Dialog/)).toBeNull();
    });
  }
}`,...c.parameters?.docs?.source}}};const ae=["Centered","CustomPosition"];export{l as Centered,c as CustomPosition,ae as __namedExportsOrder,se as default};
