import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{t as r}from"./compiler-runtime-Ct8J1Lnh.js";import{t as i}from"./classnames-Bkdxq3RN.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./ds-button-v3-Pztt1k09.js";import{n as d,t as f}from"./ds-stack-5oRwpvZl.js";var p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{p=`_matrix_2qas9_1`,m=`_sectionTitle_2qas9_8`,h=`_columnHeaders_2qas9_18`,g=`_columnHeader_2qas9_18`,_=`_rowLabel_2qas9_35`,v=`_onDark_2qas9_45`,y=`_onDarkLabel_2qas9_51`,b=`_onDarkSectionTitle_2qas9_55`,x=`_sectionTitleSpaced_2qas9_59`,S=`_onDarkColumnHeader_2qas9_63`,C={matrix:p,sectionTitle:m,columnHeaders:h,columnHeader:g,rowLabel:_,onDark:v,onDarkLabel:y,onDarkSectionTitle:b,sectionTitleSpaced:x,onDarkColumnHeader:S}})),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;t((()=>{T=r(),E=e(i(),1),s(),c(),w(),d(),D=n(),{fn:O}=__STORYBOOK_MODULE_TEST__,k={title:`Components/ButtonV3`,component:u,parameters:{layout:`centered`},argTypes:{color:{control:`select`,options:l},variant:{control:`select`,options:a},size:{control:`select`,options:o},loading:{control:`boolean`},disabled:{control:`boolean`},highEmphasis:{control:`boolean`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}},args:{onClick:O()}},A={args:{color:`default`,variant:`primary`,size:`medium`,icon:`check_circle`,children:`Button`}},j={color:`default`,size:`medium`,icon:`check_circle`,children:`Button`},M={args:{...j,variant:`primary`,loading:!0}},N={args:{...j,variant:`primary`,disabled:!0}},P={args:{color:`default`,size:`medium`,variant:`primary`,icon:`check_circle`,"aria-label":`Confirm`}},F={args:{...j,variant:`secondary`,selected:!0}},I={args:{...j,variant:`primary`,highEmphasis:!0}},L={args:{...j,color:`light`,variant:`primary`},decorators:[e=>(0,D.jsx)(`div`,{className:C.onDark,children:(0,D.jsx)(e,{})})]},R={render:()=>(0,D.jsxs)(f,{direction:`row`,alignItems:`center`,gap:`var(--sm)`,children:[(0,D.jsx)(u,{size:{lg:`large`,md:`small`},children:`lg: large / md: small`}),(0,D.jsx)(u,{size:{lg:`medium`,md:`tiny`},children:`lg: medium / md: tiny`}),(0,D.jsx)(u,{size:`medium`,children:`static: medium`})]})},z=e=>[...(e===`light`?a.filter(e=>e!==`primary-subtle`):a).map(e=>({label:e,loading:!1})),{label:`loading`,loading:!0}],B=[{label:`check circle`,icon:`check_circle`,variant:`primary`,color:`default`,loading:!1},{label:`info`,icon:`info`,variant:`secondary`,color:`default`,loading:!1},{label:`delete`,icon:`delete`,variant:`tertiary`,color:`error`,loading:!1},{label:`loading`,icon:`check_circle`,variant:`primary`,color:`default`,loading:!0}],V=[{label:`arrow down`,icon:`keyboard_arrow_down`,variant:`primary`,color:`light`,loading:!1},{label:`home`,icon:`home`,variant:`secondary`,color:`light`,loading:!1},{label:`info`,icon:`info`,variant:`tertiary`,color:`light`,loading:!1},{label:`loading`,icon:`info`,variant:`primary`,color:`light`,loading:!0}],H=e=>{let t=(0,T.c)(7),{color:n}=e,r=n===`light`,i;if(t[0]!==n||t[1]!==r){let e=z(n),a;t[3]===r?a=t[4]:(a=o.map(e=>(0,D.jsx)(`span`,{className:(0,E.default)(C.columnHeader,{[C.onDarkColumnHeader]:r}),children:e},e)),t[3]=r,t[4]=a);let s;t[5]===a?s=t[6]:(s=(0,D.jsx)(`div`,{className:C.columnHeaders,children:a}),t[5]=a,t[6]=s),i=(0,D.jsxs)(f,{gap:`var(--sm)`,children:[s,e.map(e=>{let{label:t,loading:i}=e;return(0,D.jsxs)(f,{direction:`row`,alignItems:`center`,gap:`var(--sm)`,children:[(0,D.jsx)(`span`,{className:(0,E.default)(C.rowLabel,{[C.onDarkLabel]:r}),children:t}),o.map(e=>(0,D.jsx)(f,{direction:`row`,justifyContent:`center`,flex:1,children:(0,D.jsx)(u,{color:n,variant:i?`primary`:t,size:e,icon:`check_circle`,loading:i,children:e===`tiny`?void 0:`Button`})},e))]},t)})]}),t[0]=n,t[1]=r,t[2]=i}else i=t[2];return i},U=e=>{let t=(0,T.c)(12),{rows:n,isOnDark:r}=e,i=r!==void 0&&r,a;t[0]===i?a=t[1]:(a=o.map(e=>(0,D.jsx)(`span`,{className:(0,E.default)(C.columnHeader,{[C.onDarkColumnHeader]:i}),children:e},e)),t[0]=i,t[1]=a);let s;t[2]===a?s=t[3]:(s=(0,D.jsx)(`div`,{className:C.columnHeaders,children:a}),t[2]=a,t[3]=s);let c;if(t[4]!==i||t[5]!==n){let e;t[7]===i?e=t[8]:(e=e=>{let{label:t,icon:n,loading:r,variant:a,color:s}=e;return(0,D.jsxs)(f,{direction:`row`,alignItems:`center`,gap:`var(--sm)`,children:[(0,D.jsx)(`span`,{className:(0,E.default)(C.rowLabel,{[C.onDarkLabel]:i}),children:t}),o.map(e=>{let i=`${t} ${e}`;return(0,D.jsx)(f,{direction:`row`,justifyContent:`center`,flex:1,children:(0,D.jsx)(u,{color:s,variant:a,size:e,icon:n,loading:r,"aria-label":i})},e)})]},t)},t[7]=i,t[8]=e),c=n.map(e),t[4]=i,t[5]=n,t[6]=c}else c=t[6];let l;return t[9]!==s||t[10]!==c?(l=(0,D.jsxs)(f,{gap:`var(--sm)`,children:[s,c]}),t[9]=s,t[10]=c,t[11]=l):l=t[11],l},W={tags:[`!manifest`],parameters:{layout:`fullscreen`,docs:{canvas:{sourceState:`none`}}},render:()=>(0,D.jsxs)(`div`,{className:C.matrix,children:[(0,D.jsx)(`p`,{className:C.sectionTitle,children:`Default`}),(0,D.jsx)(H,{color:`default`})]})},G={tags:[`!manifest`],parameters:{layout:`fullscreen`,docs:{canvas:{sourceState:`none`}}},render:()=>(0,D.jsxs)(`div`,{className:C.matrix,children:[(0,D.jsx)(`p`,{className:C.sectionTitle,children:`Error`}),(0,D.jsx)(H,{color:`error`})]})},K={tags:[`!manifest`],parameters:{layout:`fullscreen`,docs:{canvas:{sourceState:`none`}}},render:()=>(0,D.jsx)(`div`,{className:C.matrix,children:(0,D.jsxs)(`div`,{className:C.onDark,children:[(0,D.jsx)(`p`,{className:(0,E.default)(C.sectionTitle,C.onDarkSectionTitle),children:`On Dark — Default`}),(0,D.jsx)(H,{color:`light`})]})})},q={tags:[`!manifest`],parameters:{layout:`fullscreen`,docs:{canvas:{sourceState:`none`}}},render:()=>(0,D.jsxs)(`div`,{className:C.matrix,children:[(0,D.jsx)(`p`,{className:C.sectionTitle,children:`Icons — Default`}),(0,D.jsx)(U,{rows:B}),(0,D.jsxs)(`div`,{className:C.onDark,children:[(0,D.jsx)(`p`,{className:(0,E.default)(C.sectionTitle,C.onDarkSectionTitle,C.sectionTitleSpaced),children:`Icons — On Dark`}),(0,D.jsx)(U,{rows:V,isOnDark:!0})]})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    variant: 'primary',
    size: 'medium',
    icon: 'check_circle',
    children: 'Button'
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'primary',
    loading: true
  }
}`,...M.parameters?.docs?.source},description:{story:`Shows a spinner in place of the icon and blocks interaction. Use while an
async action triggered by the button is in progress.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'primary',
    disabled: true
  }
}`,...N.parameters?.docs?.source},description:{story:`Non-interactive state for an action that is currently unavailable.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    size: 'medium',
    variant: 'primary',
    icon: 'check_circle',
    'aria-label': 'Confirm'
  }
}`,...P.parameters?.docs?.source},description:{story:"Compact square layout rendered when an `icon` is set without children. Always\npass an `aria-label` so the action is announced to assistive technology.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'secondary',
    selected: true
  }
}`,...F.parameters?.docs?.source},description:{story:"Pressed / active state for toggle buttons and segmented controls. Reflected via\n`aria-pressed` for assistive technology.",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'primary',
    highEmphasis: true
  }
}`,...I.parameters?.docs?.source},description:{story:`Raised corner radius (12px instead of 4px) for high-emphasis surfaces such as
Sign in, Landing, and NetGen. Only affects rounding — color and priority are
unchanged.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    color: 'light',
    variant: 'primary'
  },
  decorators: [Story => <div className={storyStyles.onDark}>
                <Story />
            </div>]
}`,...L.parameters?.docs?.source},description:{story:`Palette tuned for dark-background surfaces. Use when the button sits on a dark
container rather than the default light UI.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <DsStack direction="row" alignItems="center" gap="var(--sm)">
            <DsButtonV3 size={{
      lg: 'large',
      md: 'small'
    }}>lg: large / md: small</DsButtonV3>
            <DsButtonV3 size={{
      lg: 'medium',
      md: 'tiny'
    }}>lg: medium / md: tiny</DsButtonV3>
            <DsButtonV3 size="medium">static: medium</DsButtonV3>
        </DsStack>
}`,...R.parameters?.docs?.source},description:{story:"The `size` prop accepts a responsive object (`{ lg, md }`) as well as a static value.\nUse the object form to adapt the button size across breakpoints; the static form\nkeeps a single size everywhere.",...R.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <div className={storyStyles.matrix}>
            <p className={storyStyles.sectionTitle}>Default</p>
            <MatrixGrid color="default" />
        </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <div className={storyStyles.matrix}>
            <p className={storyStyles.sectionTitle}>Error</p>
            <MatrixGrid color="error" />
        </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <div className={storyStyles.matrix}>
            <div className={storyStyles.onDark}>
                <p className={classNames(storyStyles.sectionTitle, storyStyles.onDarkSectionTitle)}>
                    On Dark — Default
                </p>
                <MatrixGrid color="light" />
            </div>
        </div>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <div className={storyStyles.matrix}>
            <p className={storyStyles.sectionTitle}>Icons — Default</p>
            <IconMatrixGrid rows={defaultIconMatrixRows} />

            <div className={storyStyles.onDark}>
                <p className={classNames(storyStyles.sectionTitle, storyStyles.onDarkSectionTitle, storyStyles.sectionTitleSpaced)}>
                    Icons — On Dark
                </p>
                <IconMatrixGrid rows={onDarkIconMatrixRows} isOnDark />
            </div>
        </div>
}`,...q.parameters?.docs?.source}}},J=[`Default`,`Loading`,`Disabled`,`IconOnly`,`Selected`,`HighEmphasis`,`OnDark`,`ResponsiveSize`,`MatrixDefault`,`MatrixError`,`MatrixOnDark`,`MatrixIcons`]}))();export{A as Default,N as Disabled,I as HighEmphasis,P as IconOnly,M as Loading,W as MatrixDefault,G as MatrixError,q as MatrixIcons,K as MatrixOnDark,L as OnDark,R as ResponsiveSize,F as Selected,J as __namedExportsOrder,k as default};