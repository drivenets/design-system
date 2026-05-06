import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";import{t as r}from"./classnames-DN2IqHsz.js";import{t as i}from"./compiler-runtime-CC4-2Ql_.js";import{a,c as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./ds-button-v3-DMmjpp3A.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=t((()=>{p=`_matrix_11f3n_1`,m=`_section_11f3n_8`,h=`_sectionTitle_11f3n_14`,g=`_columnHeaders_11f3n_24`,_=`_columnHeader_11f3n_24`,v=`_row_11f3n_41`,y=`_rowLabel_11f3n_47`,b=`_cell_11f3n_57`,x=`_onDark_11f3n_63`,S=`_onDarkLabel_11f3n_69`,C=`_onDarkSectionTitle_11f3n_73`,w=`_sectionTitleSpaced_11f3n_77`,T=`_onDarkColumnHeader_11f3n_81`,E=`_responsiveRow_11f3n_85`,D={matrix:p,section:m,sectionTitle:h,columnHeaders:g,columnHeader:_,row:v,rowLabel:y,cell:b,onDark:x,onDarkLabel:S,onDarkSectionTitle:C,sectionTitleSpaced:w,onDarkColumnHeader:T,responsiveRow:E}})),k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;t((()=>{k=i(),A=e(r(),1),o(),c(),l(),O(),j=n(),{fn:M}=__STORYBOOK_MODULE_TEST__,N={title:`Components/ButtonV3`,component:d,parameters:{layout:`centered`},argTypes:{color:{control:`select`,options:u},variant:{control:`select`,options:a},size:{control:`select`,options:s},loading:{control:`boolean`},disabled:{control:`boolean`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}},args:{onClick:M()}},P={args:{color:`default`,variant:`primary`,size:`medium`,icon:`check_circle`,children:`Button`}},F=[...a.map(e=>({label:e,loading:!1})),{label:`loading`,loading:!0}],I=[{label:`check circle`,icon:`check_circle`,variant:`primary`,color:`default`,loading:!1},{label:`info`,icon:`info`,variant:`secondary`,color:`default`,loading:!1},{label:`delete`,icon:`delete`,variant:`tertiary`,color:`error`,loading:!1},{label:`loading`,icon:`check_circle`,variant:`primary`,color:`default`,loading:!0}],L=[{label:`arrow down`,icon:`keyboard_arrow_down`,variant:`primary`,color:`light`,loading:!1},{label:`home`,icon:`home`,variant:`secondary`,color:`light`,loading:!1},{label:`info`,icon:`info`,variant:`tertiary`,color:`light`,loading:!1},{label:`loading`,icon:`info`,variant:`primary`,color:`light`,loading:!0}],R=e=>{let t=(0,k.c)(10),{color:n}=e,r=n===`light`,i;t[0]===r?i=t[1]:(i=s.map(e=>(0,j.jsx)(`span`,{className:(0,A.default)(D.columnHeader,{[D.onDarkColumnHeader]:r}),children:e},e)),t[0]=r,t[1]=i);let a;t[2]===i?a=t[3]:(a=(0,j.jsx)(`div`,{className:D.columnHeaders,children:i}),t[2]=i,t[3]=a);let o;t[4]!==n||t[5]!==r?(o=F.map(e=>{let{label:t,loading:i}=e;return(0,j.jsxs)(`div`,{className:D.row,children:[(0,j.jsx)(`span`,{className:(0,A.default)(D.rowLabel,{[D.onDarkLabel]:r}),children:t}),s.map(e=>(0,j.jsx)(`div`,{className:D.cell,children:(0,j.jsx)(d,{color:n,variant:i?`primary`:t,size:e,icon:`check_circle`,loading:i,onClick:M(),children:e===`tiny`?void 0:`Button`})},e))]},t)}),t[4]=n,t[5]=r,t[6]=o):o=t[6];let c;return t[7]!==a||t[8]!==o?(c=(0,j.jsxs)(`div`,{className:D.section,children:[a,o]}),t[7]=a,t[8]=o,t[9]=c):c=t[9],c},z=e=>{let t=(0,k.c)(12),{rows:n,isOnDark:r}=e,i=r===void 0?!1:r,a;t[0]===i?a=t[1]:(a=s.map(e=>(0,j.jsx)(`span`,{className:(0,A.default)(D.columnHeader,{[D.onDarkColumnHeader]:i}),children:e},e)),t[0]=i,t[1]=a);let o;t[2]===a?o=t[3]:(o=(0,j.jsx)(`div`,{className:D.columnHeaders,children:a}),t[2]=a,t[3]=o);let c;if(t[4]!==i||t[5]!==n){let e;t[7]===i?e=t[8]:(e=e=>{let{label:t,icon:n,loading:r,variant:a,color:o}=e;return(0,j.jsxs)(`div`,{className:D.row,children:[(0,j.jsx)(`span`,{className:(0,A.default)(D.rowLabel,{[D.onDarkLabel]:i}),children:t}),s.map(e=>{let i=`${t} ${e}`;return(0,j.jsx)(`div`,{className:D.cell,children:(0,j.jsx)(d,{color:o,variant:a,size:e,icon:n,loading:r,"aria-label":i,onClick:M()})},e)})]},t)},t[7]=i,t[8]=e),c=n.map(e),t[4]=i,t[5]=n,t[6]=c}else c=t[6];let l;return t[9]!==o||t[10]!==c?(l=(0,j.jsxs)(`div`,{className:D.section,children:[o,c]}),t[9]=o,t[10]=c,t[11]=l):l=t[11],l},B={parameters:{layout:`fullscreen`},render:()=>(0,j.jsxs)(`div`,{className:D.matrix,children:[(0,j.jsx)(`p`,{className:D.sectionTitle,children:`Default`}),(0,j.jsx)(R,{color:`default`})]})},V={parameters:{layout:`fullscreen`},render:()=>(0,j.jsxs)(`div`,{className:D.matrix,children:[(0,j.jsx)(`p`,{className:D.sectionTitle,children:`Error`}),(0,j.jsx)(R,{color:`error`})]})},H={parameters:{layout:`fullscreen`},render:()=>(0,j.jsx)(`div`,{className:D.matrix,children:(0,j.jsxs)(`div`,{className:D.onDark,children:[(0,j.jsx)(`p`,{className:(0,A.default)(D.sectionTitle,D.onDarkSectionTitle),children:`On Dark — Default`}),(0,j.jsx)(R,{color:`light`})]})})},U={parameters:{layout:`fullscreen`},render:()=>(0,j.jsxs)(`div`,{className:D.matrix,children:[(0,j.jsx)(`p`,{className:D.sectionTitle,children:`Icons — Default`}),(0,j.jsx)(z,{rows:I}),(0,j.jsxs)(`div`,{className:D.onDark,children:[(0,j.jsx)(`p`,{className:(0,A.default)(D.sectionTitle,D.onDarkSectionTitle,D.sectionTitleSpaced),children:`Icons — On Dark`}),(0,j.jsx)(z,{rows:L,isOnDark:!0})]})]})},W={parameters:{layout:`centered`},render:()=>(0,j.jsxs)(`div`,{className:D.responsiveRow,children:[(0,j.jsx)(f,{size:{lg:`large`,md:`small`},icon:`check_circle`,onClick:M(),children:`lg: large / md: small`}),(0,j.jsx)(f,{size:{lg:`medium`,md:`tiny`},icon:`check_circle`,onClick:M(),children:`lg: medium / md: tiny`}),(0,j.jsx)(f,{size:`medium`,icon:`check_circle`,onClick:M(),children:`static: medium`})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    variant: 'primary',
    size: 'medium',
    icon: 'check_circle',
    children: 'Button'
  }
}`,...P.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div className={storyStyles.matrix}>
            <p className={storyStyles.sectionTitle}>Default</p>
            <MatrixGrid color="default" />
        </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div className={storyStyles.matrix}>
            <p className={storyStyles.sectionTitle}>Error</p>
            <MatrixGrid color="error" />
        </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div className={storyStyles.matrix}>
            <div className={storyStyles.onDark}>
                <p className={classNames(storyStyles.sectionTitle, storyStyles.onDarkSectionTitle)}>
                    On Dark — Default
                </p>
                <MatrixGrid color="light" />
            </div>
        </div>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: () => <div className={storyStyles.responsiveRow}>
            <DsButtonV3Wrapped size={{
      lg: 'large',
      md: 'small'
    }} icon="check_circle" onClick={fn()}>
                lg: large / md: small
            </DsButtonV3Wrapped>

            <DsButtonV3Wrapped size={{
      lg: 'medium',
      md: 'tiny'
    }} icon="check_circle" onClick={fn()}>
                lg: medium / md: tiny
            </DsButtonV3Wrapped>

            <DsButtonV3Wrapped size="medium" icon="check_circle" onClick={fn()}>
                static: medium
            </DsButtonV3Wrapped>
        </div>
}`,...W.parameters?.docs?.source}}},G=[`Default`,`MatrixDefault`,`MatrixError`,`MatrixOnDark`,`MatrixIcons`,`ResponsiveSize`]}))();export{P as Default,B as MatrixDefault,V as MatrixError,U as MatrixIcons,H as MatrixOnDark,W as ResponsiveSize,G as __namedExportsOrder,N as default};