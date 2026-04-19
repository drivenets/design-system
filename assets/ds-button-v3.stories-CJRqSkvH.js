import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";import{t as r}from"./classnames-DN2IqHsz.js";import{t as i}from"./compiler-runtime-Dz_Efnd5.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./ds-button-v3.types-CPHERja_.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=t((()=>{d=`_matrix_1fhzm_469`,f=`_section_1fhzm_476`,p=`_sectionTitle_1fhzm_482`,m=`_columnHeaders_1fhzm_492`,h=`_columnHeader_1fhzm_492`,g=`_row_1fhzm_509`,_=`_rowLabel_1fhzm_515`,v=`_cell_1fhzm_525`,y=`_onDark_1fhzm_531`,b=`_onDarkLabel_1fhzm_537`,x=`_onDarkSectionTitle_1fhzm_541`,S=`_sectionTitleSpaced_1fhzm_545`,C=`_onDarkColumnHeader_1fhzm_549`,w={matrix:d,section:f,sectionTitle:p,columnHeaders:m,columnHeader:h,row:g,rowLabel:_,cell:v,onDark:y,onDarkLabel:b,onDarkSectionTitle:x,sectionTitleSpaced:S,onDarkColumnHeader:C}})),E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;t((()=>{E=i(),D=e(r(),1),c(),o(),T(),O=n(),{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:`Design System/ButtonV3`,component:a,parameters:{layout:`centered`},argTypes:{color:{control:`select`,options:u},variant:{control:`select`,options:l},size:{control:`select`,options:s},loading:{control:`boolean`},disabled:{control:`boolean`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}},args:{onClick:k()}},j={args:{color:`default`,variant:`primary`,size:`medium`,icon:`check_circle`,children:`Button`}},M=[...l.map(e=>({label:e,loading:!1})),{label:`loading`,loading:!0}],N=[{label:`check circle`,icon:`check_circle`,variant:`primary`,color:`default`,loading:!1},{label:`info`,icon:`info`,variant:`secondary`,color:`default`,loading:!1},{label:`delete`,icon:`delete`,variant:`tertiary`,color:`error`,loading:!1},{label:`loading`,icon:`check_circle`,variant:`primary`,color:`default`,loading:!0}],P=[{label:`arrow down`,icon:`keyboard_arrow_down`,variant:`primary`,color:`light`,loading:!1},{label:`home`,icon:`home`,variant:`secondary`,color:`light`,loading:!1},{label:`info`,icon:`info`,variant:`tertiary`,color:`light`,loading:!1},{label:`loading`,icon:`info`,variant:`primary`,color:`light`,loading:!0}],F=e=>{let t=(0,E.c)(10),{color:n}=e,r=n===`light`,i;t[0]===r?i=t[1]:(i=s.map(e=>(0,O.jsx)(`span`,{className:(0,D.default)(w.columnHeader,{[w.onDarkColumnHeader]:r}),children:e},e)),t[0]=r,t[1]=i);let o;t[2]===i?o=t[3]:(o=(0,O.jsx)(`div`,{className:w.columnHeaders,children:i}),t[2]=i,t[3]=o);let c;t[4]!==n||t[5]!==r?(c=M.map(e=>{let{label:t,loading:i}=e;return(0,O.jsxs)(`div`,{className:w.row,children:[(0,O.jsx)(`span`,{className:(0,D.default)(w.rowLabel,{[w.onDarkLabel]:r}),children:t}),s.map(e=>(0,O.jsx)(`div`,{className:w.cell,children:(0,O.jsx)(a,{color:n,variant:i?`primary`:t,size:e,icon:`check_circle`,loading:i,onClick:k(),children:e===`tiny`?void 0:`Button`})},e))]},t)}),t[4]=n,t[5]=r,t[6]=c):c=t[6];let l;return t[7]!==o||t[8]!==c?(l=(0,O.jsxs)(`div`,{className:w.section,children:[o,c]}),t[7]=o,t[8]=c,t[9]=l):l=t[9],l},I=e=>{let t=(0,E.c)(12),{rows:n,isOnDark:r}=e,i=r===void 0?!1:r,o;t[0]===i?o=t[1]:(o=s.map(e=>(0,O.jsx)(`span`,{className:(0,D.default)(w.columnHeader,{[w.onDarkColumnHeader]:i}),children:e},e)),t[0]=i,t[1]=o);let c;t[2]===o?c=t[3]:(c=(0,O.jsx)(`div`,{className:w.columnHeaders,children:o}),t[2]=o,t[3]=c);let l;if(t[4]!==i||t[5]!==n){let e;t[7]===i?e=t[8]:(e=e=>{let{label:t,icon:n,loading:r,variant:o,color:c}=e;return(0,O.jsxs)(`div`,{className:w.row,children:[(0,O.jsx)(`span`,{className:(0,D.default)(w.rowLabel,{[w.onDarkLabel]:i}),children:t}),s.map(e=>{let i=`${t} ${e}`;return(0,O.jsx)(`div`,{className:w.cell,children:(0,O.jsx)(a,{color:c,variant:o,size:e,icon:n,loading:r,"aria-label":i,onClick:k()})},e)})]},t)},t[7]=i,t[8]=e),l=n.map(e),t[4]=i,t[5]=n,t[6]=l}else l=t[6];let u;return t[9]!==c||t[10]!==l?(u=(0,O.jsxs)(`div`,{className:w.section,children:[c,l]}),t[9]=c,t[10]=l,t[11]=u):u=t[11],u},L={parameters:{layout:`fullscreen`},render:()=>(0,O.jsxs)(`div`,{className:w.matrix,children:[(0,O.jsx)(`p`,{className:w.sectionTitle,children:`Default`}),(0,O.jsx)(F,{color:`default`})]})},R={parameters:{layout:`fullscreen`},render:()=>(0,O.jsxs)(`div`,{className:w.matrix,children:[(0,O.jsx)(`p`,{className:w.sectionTitle,children:`Error`}),(0,O.jsx)(F,{color:`error`})]})},z={parameters:{layout:`fullscreen`},render:()=>(0,O.jsx)(`div`,{className:w.matrix,children:(0,O.jsxs)(`div`,{className:w.onDark,children:[(0,O.jsx)(`p`,{className:(0,D.default)(w.sectionTitle,w.onDarkSectionTitle),children:`On Dark — Default`}),(0,O.jsx)(F,{color:`light`})]})})},B={parameters:{layout:`fullscreen`},render:()=>(0,O.jsxs)(`div`,{className:w.matrix,children:[(0,O.jsx)(`p`,{className:w.sectionTitle,children:`Icons — Default`}),(0,O.jsx)(I,{rows:N}),(0,O.jsxs)(`div`,{className:w.onDark,children:[(0,O.jsx)(`p`,{className:(0,D.default)(w.sectionTitle,w.onDarkSectionTitle,w.sectionTitleSpaced),children:`Icons — On Dark`}),(0,O.jsx)(I,{rows:P,isOnDark:!0})]})]})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'default',
    variant: 'primary',
    size: 'medium',
    icon: 'check_circle',
    children: 'Button'
  }
}`,...j.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div className={storyStyles.matrix}>
            <p className={storyStyles.sectionTitle}>Default</p>
            <MatrixGrid color="default" />
        </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div className={storyStyles.matrix}>
            <p className={storyStyles.sectionTitle}>Error</p>
            <MatrixGrid color="error" />
        </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`Default`,`MatrixDefault`,`MatrixError`,`MatrixOnDark`,`MatrixIcons`]}))();export{j as Default,L as MatrixDefault,R as MatrixError,B as MatrixIcons,z as MatrixOnDark,V as __namedExportsOrder,A as default};