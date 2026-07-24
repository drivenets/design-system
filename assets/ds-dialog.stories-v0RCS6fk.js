import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Z as n,k as r}from"./iframe-Dirquu7f.js";import{t as i}from"./classnames-Dm_LJ4P4.js";import{n as a,t as o}from"./ds-button-00zxa8gT.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./dist-DG7NcQpT.js";var g,_,v,y,b,x,S=e((()=>{g=`_overlay_cw3f2_45`,_=`_dialog_cw3f2_52`,v=`_title_cw3f2_80`,y=`_description_cw3f2_91`,b=`_customPlacement_cw3f2_102`,x={overlay:g,dialog:_,title:v,description:y,customPlacement:b}})),C,w,T,E=e((()=>{u(),d(),C=t(i(),1),S(),w=r(),T=({open:e,onOpenChange:t,title:n,hideTitle:r,description:i,hideDescription:a,children:o,className:u,anchorRef:d,customPosition:g,modal:_=!0})=>{let v={};if(g)v={position:`fixed`,...g};else if(d?.current){let e=d.current.getBoundingClientRect();v={position:`fixed`,top:e.bottom,left:e.left}}return(0,w.jsx)(m,{open:e,onOpenChange:t,children:(0,w.jsxs)(f,{children:[_&&(0,w.jsx)(s,{className:x.overlay}),(0,w.jsxs)(p,{className:(0,C.default)(x.dialog,u,{[x.customPlacement]:g||d}),style:g||d?v:void 0,children:[(0,w.jsx)(c,{asChild:!0,children:r?(0,w.jsx)(h,{children:(0,w.jsx)(c,{className:x.title,children:n})}):(0,w.jsx)(c,{className:x.title,children:n})}),i&&(0,w.jsx)(l,{asChild:!0,children:a?(0,w.jsx)(h,{children:(0,w.jsx)(l,{className:x.description,children:i})}):(0,w.jsx)(l,{className:x.description,children:i})}),o]})]})})},T.displayName=`DsDialog`,T.__docgenInfo={description:`@summary Lightweight controlled dialog for simple panels and popovers.

Renders a Radix dialog with required accessible title, optional description,
and custom body content. Use for focused overlays and menu-style panels.
Prefer \`DsModal\` when you need structured header, body, and footer sections.`,methods:[],displayName:`DsDialog`,props:{open:{required:!0,tsType:{name:`boolean`},description:`Controls whether the dialog is open.`},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:`Callback fired when the open state should change.`},title:{required:!0,tsType:{name:`string`},description:`The accessible title for the dialog. Required for accessibility.`},hideTitle:{required:!1,tsType:{name:`boolean`},description:`If true, the dialog title will be visually hidden but accessible to screen readers.`},description:{required:!1,tsType:{name:`string`},description:`The accessible description for the dialog. Optional, but recommended for accessibility.`},hideDescription:{required:!1,tsType:{name:`boolean`},description:`If true, the dialog description will be visually hidden but accessible to screen readers.`},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The content to render inside the dialog.`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class names for the dialog container.`},anchorRef:{required:!1,tsType:{name:`ReactRefObject`,raw:`React.RefObject<HTMLElement | null>`,elements:[{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]}]},description:`Ref to the element the dialog should be anchored to (for relative placement)`},customPosition:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
	/**
	 * Distance in pixels from the top of the viewport.
	 */
	top: number;
	/**
	 * Distance in pixels from the left of the viewport.
	 */
	left: number;
}`,signature:{properties:[{key:`top`,value:{name:`number`,required:!0},description:`Distance in pixels from the top of the viewport.`},{key:`left`,value:{name:`number`,required:!0},description:`Distance in pixels from the left of the viewport.`}]}},description:`Custom fixed position (e.g., { top: number, left: number })`},modal:{required:!1,tsType:{name:`boolean`},description:`If true, show modal overlay and center dialog (default: true)`,defaultValue:{value:`true`,computed:!1}}}}})),D=e((()=>{})),O=e((()=>{E(),D()})),k,A,j,M,N,P,F,I,L;e((()=>{k=t(n(),1),o(),O(),A=r(),j={title:`Components/Dialog`,component:T,parameters:{layout:`centered`},argTypes:{open:{control:`boolean`},title:{control:`text`},description:{control:`text`},hideTitle:{control:`boolean`},hideDescription:{control:`boolean`},modal:{control:`boolean`},customPosition:{control:`object`},className:{table:{disable:!0}},anchorRef:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}}},M={parameters:{docs:{source:{type:`code`}}},args:{title:`Confirm action`,description:`Review the details before continuing.`},render:function(e){let[t,n]=(0,k.useState)(!1);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(a,{onClick:()=>n(!0),children:`Open Dialog`}),(0,A.jsx)(T,{...e,open:t,onOpenChange:n,children:(0,A.jsx)(`p`,{children:`Dialog body content goes here.`})})]})}},N={parameters:{docs:{source:{type:`code`}}},args:{title:`Fixed position panel`,description:`This dialog is positioned at fixed viewport coordinates.`,customPosition:{top:60,left:20}},render:function(e){let[t,n]=(0,k.useState)(!1);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(a,{onClick:()=>n(!0),children:`Open at fixed position`}),(0,A.jsx)(T,{...e,open:t,onOpenChange:n,children:(0,A.jsx)(`p`,{children:`Content appears at the configured top and left offsets.`})})]})}},P={parameters:{docs:{source:{type:`code`}}},args:{title:`Menu panel`,description:`Options related to the menu trigger.`},render:function(e){let[t,n]=(0,k.useState)(!1),r=(0,k.useRef)(null);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`button`,{type:`button`,ref:r,onClick:()=>n(!0),children:`Open menu`}),(0,A.jsx)(T,{...e,anchorRef:r,open:t,onOpenChange:n,children:(0,A.jsx)(`p`,{children:`Panel content anchored below the trigger.`})})]})}},F={parameters:{docs:{source:{type:`code`}}},args:{title:`Non-modal panel`,description:`This dialog has no overlay backdrop.`,modal:!1},render:function(e){let[t,n]=(0,k.useState)(!1);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(a,{onClick:()=>n(!0),children:`Open Dialog`}),(0,A.jsx)(T,{...e,open:t,onOpenChange:n,children:(0,A.jsx)(`p`,{children:`The page behind stays interactive while this panel is open.`})})]})}},I={parameters:{docs:{source:{type:`code`}}},args:{title:`Settings`,description:`Adjust your preferences.`,hideTitle:!0,hideDescription:!0},render:function(e){let[t,n]=(0,k.useState)(!1);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(a,{onClick:()=>n(!0),children:`Open settings`}),(0,A.jsxs)(T,{...e,open:t,onOpenChange:n,children:[(0,A.jsx)(`h2`,{children:`Settings`}),(0,A.jsx)(`p`,{children:`Title and description are hidden visually but announced to assistive tech.`})]})]})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    title: 'Confirm action',
    description: 'Review the details before continuing.'
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <>
                <DsButton onClick={() => setOpen(true)}>Open Dialog</DsButton>
                <DsDialog {...args} open={open} onOpenChange={setOpen}>
                    <p>Dialog body content goes here.</p>
                </DsDialog>
            </>;
  }
}`,...M.parameters?.docs?.source},description:{story:`Default modal dialog centered on the screen with an overlay backdrop. Use when
you need to focus attention on a short task or confirmation.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    title: 'Fixed position panel',
    description: 'This dialog is positioned at fixed viewport coordinates.',
    customPosition: {
      top: 60,
      left: 20
    }
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <>
                <DsButton onClick={() => setOpen(true)}>Open at fixed position</DsButton>
                <DsDialog {...args} open={open} onOpenChange={setOpen}>
                    <p>Content appears at the configured top and left offsets.</p>
                </DsDialog>
            </>;
  }
}`,...N.parameters?.docs?.source},description:{story:"Dialog placed at fixed viewport coordinates instead of centered. Pass pixel\n`top` and `left` values relative to the viewport — not relative to a trigger.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    title: 'Menu panel',
    description: 'Options related to the menu trigger.'
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);
    return <>
                <button type="button" ref={anchorRef} onClick={() => setOpen(true)}>
                    Open menu
                </button>
                <DsDialog {...args} anchorRef={anchorRef} open={open} onOpenChange={setOpen}>
                    <p>Panel content anchored below the trigger.</p>
                </DsDialog>
            </>;
  }
}`,...P.parameters?.docs?.source},description:{story:"Positions the dialog below the trigger element using `anchorRef`. Prefer this\nover `customPosition` when the panel should follow a specific button or control.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    title: 'Non-modal panel',
    description: 'This dialog has no overlay backdrop.',
    modal: false
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <>
                <DsButton onClick={() => setOpen(true)}>Open Dialog</DsButton>
                <DsDialog {...args} open={open} onOpenChange={setOpen}>
                    <p>The page behind stays interactive while this panel is open.</p>
                </DsDialog>
            </>;
  }
}`,...F.parameters?.docs?.source},description:{story:`Non-modal dialog without an overlay backdrop. The page behind remains
interactive while the dialog is open.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    title: 'Settings',
    description: 'Adjust your preferences.',
    hideTitle: true,
    hideDescription: true
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <>
                <DsButton onClick={() => setOpen(true)}>Open settings</DsButton>
                <DsDialog {...args} open={open} onOpenChange={setOpen}>
                    <h2>Settings</h2>
                    <p>Title and description are hidden visually but announced to assistive tech.</p>
                </DsDialog>
            </>;
  }
}`,...I.parameters?.docs?.source},description:{story:`Visually hides the title and description while keeping them available to screen
readers. Use when the dialog content already provides a visible heading.`,...I.parameters?.docs?.description}}},L=[`Default`,`CustomPosition`,`AnchoredToTrigger`,`NonModal`,`HiddenAccessibleLabels`]}))();export{P as AnchoredToTrigger,N as CustomPosition,M as Default,I as HiddenAccessibleLabels,F as NonModal,L as __namedExportsOrder,j as default};