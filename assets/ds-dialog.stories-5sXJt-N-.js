import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-Dn-yBGel.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./classnames-DN2IqHsz.js";import{i as a}from"./ds-icon.types-DwsAlL1N.js";import{t as o}from"./ds-icon-BgScCPrd.js";import{n as s,t as c}from"./ds-button-DuDhqCg5.js";import{a as l,c as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _}from"./dist-BQ9FzXsp.js";var v,y,b,x,S,C,w=t((()=>{v=`_overlay_1o4nm_41`,y=`_dialog_1o4nm_48`,b=`_title_1o4nm_76`,x=`_description_1o4nm_87`,S=`_customPlacement_1o4nm_98`,C={overlay:v,dialog:y,title:b,description:x,customPlacement:S}})),T,E,D,O=t((()=>{f(),p(),T=e(i(),1),w(),E=r(),D=({open:e,onOpenChange:t,title:n,hideTitle:r,description:i,hideDescription:a,children:o,className:s,anchorRef:c,customPosition:f,modal:p=!0})=>{let v={};if(f)v={position:`fixed`,...f};else if(c?.current){let e=c.current.getBoundingClientRect();v={position:`fixed`,top:e.bottom,left:e.left}}return(0,E.jsx)(g,{open:e,onOpenChange:t,children:(0,E.jsxs)(m,{children:[p&&(0,E.jsx)(l,{className:C.overlay}),(0,E.jsxs)(h,{className:(0,T.default)(C.dialog,s,{[C.customPlacement]:f||c}),style:f||c?v:void 0,children:[(0,E.jsx)(u,{asChild:!0,children:r?(0,E.jsx)(_,{children:(0,E.jsx)(u,{className:C.title,children:n})}):(0,E.jsx)(u,{className:C.title,children:n})}),i&&(0,E.jsx)(d,{asChild:!0,children:a?(0,E.jsx)(_,{children:(0,E.jsx)(d,{className:C.description,children:i})}):(0,E.jsx)(d,{className:C.description,children:i})}),o]})]})})},D.__docgenInfo={description:``,methods:[],displayName:`DsDialog`,props:{open:{required:!0,tsType:{name:`boolean`},description:`Controls whether the dialog is open.`},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:`Callback fired when the open state should change.`},title:{required:!0,tsType:{name:`string`},description:`The accessible title for the dialog. Required for accessibility.`},hideTitle:{required:!1,tsType:{name:`boolean`},description:`If true, the dialog title will be visually hidden but accessible to screen readers.`},description:{required:!1,tsType:{name:`string`},description:`The accessible description for the dialog. Optional, but recommended for accessibility.`},hideDescription:{required:!1,tsType:{name:`boolean`},description:`If true, the dialog description will be visually hidden but accessible to screen readers.`},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The content to render inside the dialog.`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class names for the dialog container.`},anchorRef:{required:!1,tsType:{name:`ReactRefObject`,raw:`React.RefObject<HTMLElement>`,elements:[{name:`HTMLElement`}]},description:`Ref to the element the dialog should be anchored to (for relative placement)`},customPosition:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
	/**
	 * Distance in pixels from the top of the viewport.
	 */
	top: number;
	/**
	 * Distance in pixels from the left of the viewport.
	 */
	left: number;
}`,signature:{properties:[{key:`top`,value:{name:`number`,required:!0},description:`Distance in pixels from the top of the viewport.`},{key:`left`,value:{name:`number`,required:!0},description:`Distance in pixels from the left of the viewport.`}]}},description:`Custom fixed position (e.g., { top: number, left: number })`},modal:{required:!1,tsType:{name:`boolean`},description:`If true, show modal overlay and center dialog (default: true)`,defaultValue:{value:`true`,computed:!1}}}}})),k=t((()=>{})),A=t((()=>{O(),k()})),j,M,N,P=t((()=>{j=`_dialogContent_wldeh_1`,M=`_menuIcon_wldeh_6`,N={dialogContent:j,menuIcon:M}})),F,I,L,R,z,B,V,H,U,W,G;t((()=>{F=e(n(),1),o(),c(),A(),P(),I=r(),{expect:L,screen:R,userEvent:z,waitFor:B,within:V}=__STORYBOOK_MODULE_TEST__,H={title:`Design System/Dialog`,component:D,parameters:{layout:`centered`},argTypes:{open:{control:`boolean`,description:`Controls whether the dialog is open`},onOpenChange:{action:`onOpenChange`,description:`Function called when dialog open state changes`},title:{control:`text`,description:`Title of the dialog`},description:{control:`text`,description:`Description text for the dialog`},hideTitle:{control:`boolean`,description:`Whether to hide the title visually`},hideDescription:{control:`boolean`,description:`Whether to hide the description visually`},modal:{control:`boolean`,description:`Whether the dialog should be modal`},customPosition:{control:`object`,description:`Custom position for the dialog in pixels relative to the viewport. Expects {top: number, left: number}`}}},U={render:function(e){let[t,n]=F.useState(!1);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(s,{onClick:()=>n(!0),children:`Open Dialog`}),(0,I.jsx)(D,{...e,open:t,onOpenChange:n,title:`Centered Dialog`,description:`This dialog appears in the center of the screen`,children:(0,I.jsx)(`div`,{className:N.dialogContent,children:`This is a centered dialog example`})})]})},play:async({canvasElement:e})=>{let t=V(e).getByText(`Open Dialog`);await z.click(t),await B(()=>L(R.getByText(/Centered Dialog/)).toBeTruthy()),await z.keyboard(`{Escape}`),await B(()=>L(R.queryByText(/Centered Dialog/)).toBeNull())}},W={render:function(e){let[t,n]=F.useState(!1);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a,{className:N.menuIcon,icon:`menu`,size:`large`,onClick:()=>n(!0)}),(0,I.jsx)(D,{...e,open:t,onOpenChange:n,title:`Custom Position Dialog`,description:`This dialog appears relative to the menu icon`,customPosition:{top:60,left:20},children:(0,I.jsx)(`div`,{className:N.dialogContent,children:`This is a custom positioned dialog example`})})]})},play:async({canvasElement:e})=>{let t=V(e).getByText(/menu/i);await z.click(t),await B(()=>L(R.getByText(/Custom Position Dialog/)).toBeTruthy()),await z.keyboard(`{Escape}`),await B(()=>L(R.queryByText(/Custom Position Dialog/)).toBeNull())}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G=[`Centered`,`CustomPosition`]}))();export{U as Centered,W as CustomPosition,G as __namedExportsOrder,H as default};