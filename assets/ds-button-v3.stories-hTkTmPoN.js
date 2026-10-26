import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-BQmAIhht.js";import{n as r,t as i}from"./classnames-S7U-2yfe.js";import{n as a,t as o}from"./ds-tooltip-Dqr1pmKp.js";import{n as s,t as c}from"./ds-button-v3-Bh1Ygx9-.js";import{n as l,t as u}from"./ds-stack-xyUZfo84.js";var d,f,p;function m(){return(m=t((()=>{d=[`primary`,`primary-subtle`,`secondary`,`tertiary`],f=[`default`,`error`,`light`],p=[`large`,`medium`,`small`,`tiny`]})))()}var h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=t((()=>{h=`_matrix_2qas9_1`,g=`_sectionTitle_2qas9_8`,_=`_columnHeaders_2qas9_18`,v=`_columnHeader_2qas9_18`,y=`_rowLabel_2qas9_35`,b=`_onDark_2qas9_45`,x=`_onDarkLabel_2qas9_51`,S=`_onDarkSectionTitle_2qas9_55`,C=`_sectionTitleSpaced_2qas9_59`,w=`_onDarkColumnHeader_2qas9_63`,T={matrix:h,sectionTitle:g,columnHeaders:_,columnHeader:v,rowLabel:y,onDark:b,onDarkLabel:x,onDarkSectionTitle:S,sectionTitleSpaced:C,onDarkColumnHeader:w}})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=t((()=>{D=r(),O=e(i(),1),s(),m(),E(),l(),o(),k=n(),{fn:A}=__STORYBOOK_MODULE_TEST__,j={title:`Components/ButtonV3`,component:c,parameters:{layout:`centered`},argTypes:{color:{control:`select`,options:f},variant:{control:`select`,options:d},size:{control:`select`,options:p},loading:{control:`boolean`},disabled:{control:`boolean`},highEmphasis:{control:`boolean`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}},args:{onClick:A()}},M={args:{color:`default`,variant:`primary`,size:`medium`,icon:`check_circle`,children:`Button`}},N={color:`default`,size:`medium`,icon:`check_circle`,children:`Button`},P={args:{...N,variant:`primary`,loading:!0}},F={args:{...N,variant:`primary`,disabled:!0}},I={args:{color:`default`,variant:`primary`,size:`medium`,icon:`delete`,children:`Delete`,disabled:!0},render:e=>(0,k.jsx)(a,{content:`You need edit access to delete this item`,children:(0,k.jsx)(c,{...e})})},L={args:{color:`default`,size:`medium`,variant:`primary`,icon:`check_circle`,"aria-label":`Confirm`}},R={args:{...N,variant:`secondary`,selected:!0}},z={args:{...N,variant:`primary`,highEmphasis:!0}},B={args:{...N,color:`light`,variant:`primary`},decorators:[e=>(0,k.jsx)(`div`,{className:T.onDark,children:(0,k.jsx)(e,{})})]},V={render:()=>(0,k.jsxs)(u,{direction:`row`,alignItems:`center`,gap:`var(--sm)`,children:[(0,k.jsx)(c,{size:{lg:`large`,md:`small`},children:`lg: large / md: small`}),(0,k.jsx)(c,{size:{lg:`medium`,md:`tiny`},children:`lg: medium / md: tiny`}),(0,k.jsx)(c,{size:`medium`,children:`static: medium`})]})},H=e=>[...(e===`light`?d.filter(e=>e!==`primary-subtle`):d).map(e=>({label:e,loading:!1})),{label:`loading`,loading:!0}],U=[{label:`check circle`,icon:`check_circle`,variant:`primary`,color:`default`,loading:!1},{label:`info`,icon:`info`,variant:`secondary`,color:`default`,loading:!1},{label:`delete`,icon:`delete`,variant:`tertiary`,color:`error`,loading:!1},{label:`loading`,icon:`check_circle`,variant:`primary`,color:`default`,loading:!0}],W=[{label:`arrow down`,icon:`keyboard_arrow_down`,variant:`primary`,color:`light`,loading:!1},{label:`home`,icon:`home`,variant:`secondary`,color:`light`,loading:!1},{label:`info`,icon:`info`,variant:`tertiary`,color:`light`,loading:!1},{label:`loading`,icon:`info`,variant:`primary`,color:`light`,loading:!0}],G=e=>{let t=(0,D.c)(7),{color:n}=e,r=n===`light`,i;if(t[0]!==n||t[1]!==r){let e=H(n),a;t[3]===r?a=t[4]:(a=p.map(e=>(0,k.jsx)(`span`,{className:(0,O.default)(T.columnHeader,{[T.onDarkColumnHeader]:r}),children:e},e)),t[3]=r,t[4]=a);let o;t[5]===a?o=t[6]:(o=(0,k.jsx)(`div`,{className:T.columnHeaders,children:a}),t[5]=a,t[6]=o),i=(0,k.jsxs)(u,{gap:`var(--sm)`,children:[o,e.map(e=>{let{label:t,loading:i}=e;return(0,k.jsxs)(u,{direction:`row`,alignItems:`center`,gap:`var(--sm)`,children:[(0,k.jsx)(`span`,{className:(0,O.default)(T.rowLabel,{[T.onDarkLabel]:r}),children:t}),p.map(e=>(0,k.jsx)(u,{direction:`row`,justifyContent:`center`,flex:1,children:(0,k.jsx)(c,{color:n,variant:i?`primary`:t,size:e,icon:`check_circle`,loading:i,children:e===`tiny`?void 0:`Button`})},e))]},t)})]}),t[0]=n,t[1]=r,t[2]=i}else i=t[2];return i},K=e=>{let t=(0,D.c)(12),{rows:n,isOnDark:r}=e,i=r!==void 0&&r,a;t[0]===i?a=t[1]:(a=p.map(e=>(0,k.jsx)(`span`,{className:(0,O.default)(T.columnHeader,{[T.onDarkColumnHeader]:i}),children:e},e)),t[0]=i,t[1]=a);let o;t[2]===a?o=t[3]:(o=(0,k.jsx)(`div`,{className:T.columnHeaders,children:a}),t[2]=a,t[3]=o);let s;if(t[4]!==i||t[5]!==n){let e;t[7]===i?e=t[8]:(e=e=>{let{label:t,icon:n,loading:r,variant:a,color:o}=e;return(0,k.jsxs)(u,{direction:`row`,alignItems:`center`,gap:`var(--sm)`,children:[(0,k.jsx)(`span`,{className:(0,O.default)(T.rowLabel,{[T.onDarkLabel]:i}),children:t}),p.map(e=>{let i=`${t} ${e}`;return(0,k.jsx)(u,{direction:`row`,justifyContent:`center`,flex:1,children:(0,k.jsx)(c,{color:o,variant:a,size:e,icon:n,loading:r,"aria-label":i})},e)})]},t)},t[7]=i,t[8]=e),s=n.map(e),t[4]=i,t[5]=n,t[6]=s}else s=t[6];let l;return t[9]!==o||t[10]!==s?(l=(0,k.jsxs)(u,{gap:`var(--sm)`,children:[o,s]}),t[9]=o,t[10]=s,t[11]=l):l=t[11],l},q={tags:[`!manifest`],parameters:{layout:`fullscreen`,docs:{canvas:{sourceState:`none`}}},render:()=>(0,k.jsxs)(`div`,{className:T.matrix,children:[(0,k.jsx)(`p`,{className:T.sectionTitle,children:`Default`}),(0,k.jsx)(G,{color:`default`})]})},J={tags:[`!manifest`],parameters:{layout:`fullscreen`,docs:{canvas:{sourceState:`none`}}},render:()=>(0,k.jsxs)(`div`,{className:T.matrix,children:[(0,k.jsx)(`p`,{className:T.sectionTitle,children:`Error`}),(0,k.jsx)(G,{color:`error`})]})},Y={tags:[`!manifest`],parameters:{layout:`fullscreen`,docs:{canvas:{sourceState:`none`}}},render:()=>(0,k.jsx)(`div`,{className:T.matrix,children:(0,k.jsxs)(`div`,{className:T.onDark,children:[(0,k.jsx)(`p`,{className:(0,O.default)(T.sectionTitle,T.onDarkSectionTitle),children:`On Dark — Default`}),(0,k.jsx)(G,{color:`light`})]})})},X={tags:[`!manifest`],parameters:{layout:`fullscreen`,docs:{canvas:{sourceState:`none`}}},render:()=>(0,k.jsxs)(`div`,{className:T.matrix,children:[(0,k.jsx)(`p`,{className:T.sectionTitle,children:`Icons — Default`}),(0,k.jsx)(K,{rows:U}),(0,k.jsxs)(`div`,{className:T.onDark,children:[(0,k.jsx)(`p`,{className:(0,O.default)(T.sectionTitle,T.onDarkSectionTitle,T.sectionTitleSpaced),children:`Icons — On Dark`}),(0,k.jsx)(K,{rows:W,isOnDark:!0})]})]})},Z=[`Default`,`Loading`,`Disabled`,`DisabledWithTooltip`,`IconOnly`,`Selected`,`HighEmphasis`,`OnDark`,`ResponsiveSize`,`MatrixDefault`,`MatrixError`,`MatrixOnDark`,`MatrixIcons`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    variant: 'primary',
    size: 'medium',
    icon: 'check_circle',
    children: 'Button'
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'primary',
    loading: true
  }
}`,...P.parameters?.docs?.source},description:{story:`Shows a spinner in place of the icon and blocks interaction. Use while an
async action triggered by the button is in progress.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'primary',
    disabled: true
  }
}`,...F.parameters?.docs?.source},description:{story:`Non-interactive state for an action that is currently unavailable.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    variant: 'primary',
    size: 'medium',
    icon: 'delete',
    children: 'Delete',
    disabled: true
  },
  render: args => <DsTooltip content="You need edit access to delete this item">
            <DsButtonV3 {...args} />
        </DsTooltip>
}`,...I.parameters?.docs?.source},description:{story:"Wrap a disabled button in `DsTooltip` to explain why it is unavailable. The button stays\nfocusable, so the tooltip opens on hover and keyboard focus.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    size: 'medium',
    variant: 'primary',
    icon: 'check_circle',
    'aria-label': 'Confirm'
  }
}`,...L.parameters?.docs?.source},description:{story:"Compact square layout rendered when an `icon` is set without children. Always\npass an `aria-label` so the action is announced to assistive technology.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'secondary',
    selected: true
  }
}`,...R.parameters?.docs?.source},description:{story:"Pressed / active state for toggle buttons and segmented controls. Reflected via\n`aria-pressed` for assistive technology.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'primary',
    highEmphasis: true
  }
}`,...z.parameters?.docs?.source},description:{story:`Raised corner radius (12px instead of 4px) for high-emphasis surfaces such as
Sign in, Landing, and NetGen. Only affects rounding — color and priority are
unchanged.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    color: 'light',
    variant: 'primary'
  },
  decorators: [Story => <div className={storyStyles.onDark}>
                <Story />
            </div>]
}`,...B.parameters?.docs?.source},description:{story:`Palette tuned for dark-background surfaces. Use when the button sits on a dark
container rather than the default light UI.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"The `size` prop accepts a responsive object (`{ lg, md }`) as well as a static value.\nUse the object form to adapt the button size across breakpoints; the static form\nkeeps a single size everywhere.",...V.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}}})))()}Q();export{M as Default,F as Disabled,I as DisabledWithTooltip,z as HighEmphasis,L as IconOnly,P as Loading,q as MatrixDefault,J as MatrixError,X as MatrixIcons,Y as MatrixOnDark,B as OnDark,V as ResponsiveSize,R as Selected,Z as __namedExportsOrder,j as default};