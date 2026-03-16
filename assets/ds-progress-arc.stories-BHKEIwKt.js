import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-6sF1Ejqi.js";import{t as r}from"./classnames-Ce489xFf.js";import{i}from"./ds-icon.types-X5ul5i9A.js";import{t as a}from"./ds-icon-BOH4c93P.js";import{t as ee}from"./ds-typography-CxNsLysB.js";import{t as o}from"./ds-typography-D0JoYwMO.js";import{n as s,t as te}from"./numbers-CgLycUcZ.js";var c,l,u,d,f,p,m,h,g,_,v,y=t((()=>{c=`_root_1u5sm_1`,l=`_svg_1u5sm_8`,u=`_track_1u5sm_13`,d=`_progress_1u5sm_18`,f=`_success_1u5sm_26`,p=`_error_1u5sm_30`,m=`_center_1u5sm_34`,h=`_iconSuccess_1u5sm_42`,g=`_iconError_1u5sm_46`,_=`_iconMediumSize_1u5sm_50`,v={root:c,svg:l,track:u,progress:d,default:`_default_1u5sm_22`,success:f,error:p,center:m,iconSuccess:h,iconError:g,iconMediumSize:_}})),b,x,S,C,w,T,E,D,O,k=t((()=>{s(),b=270,x=360,S=135,C=b/x,w=Object.freeze({small:80,medium:120}),T=Object.freeze({small:4,medium:6}),E=e=>{let t=w[e],n=T[e],r=(t-n)/2,i=2*Math.PI*r;return{containerSize:t,strokeWidth:n,radius:r,circumference:i,arcLength:C*i,center:t/2,startRotation:S}},D=(e,t)=>`${String(e)} ${String(t)}`,O=(e,t,n)=>{let r=e/100*t;return`${String(r)} ${String(n)}`}})),A,j,M,N,ne=t((()=>{A=e(r(),1),a(),o(),y(),k(),j=n(),M=Object.freeze({default:v.default,success:v.success,error:v.error}),N=({value:e=0,size:t=`medium`,variant:n=`default`,children:r,className:a,style:o,ref:s,...c})=>{let{containerSize:l,strokeWidth:u,radius:d,circumference:f,arcLength:p,center:m,startRotation:h}=E(t),g=n===`success`?100:te(e),_=D(p,f),y=O(g,p,f),b=(e,n)=>(0,j.jsx)(i,{variant:`rounded`,icon:e,size:`large`,className:(0,A.default)({[v.iconMediumSize]:t===`medium`},n)}),x=()=>r||(n===`success`?b(`check`,v.iconSuccess):n===`error`?b(`close`,v.iconError):(0,j.jsx)(ee,{variant:t===`medium`?`heading3`:`body-md-md`,asChild:!0,children:(0,j.jsxs)(`span`,{children:[g,`%`]})}));return(0,j.jsxs)(`div`,{...c,className:(0,A.default)(v.root,a),style:{width:l,height:l,...o},ref:s,role:`progressbar`,"aria-valuenow":g,"aria-valuemin":0,"aria-valuemax":100,children:[(0,j.jsxs)(`svg`,{className:v.svg,width:l,height:l,viewBox:`0 0 ${String(l)} ${String(l)}`,children:[(0,j.jsx)(`circle`,{className:v.track,cx:m,cy:m,r:d,fill:`none`,strokeWidth:u,strokeDasharray:_,strokeLinecap:`round`,transform:`rotate(${String(h)} ${String(m)} ${String(m)})`}),(0,j.jsx)(`circle`,{className:(0,A.default)(v.progress,M[n]),cx:m,cy:m,r:d,fill:`none`,strokeWidth:u,strokeDasharray:y,strokeLinecap:`round`,transform:`rotate(${String(h)} ${String(m)} ${String(m)})`})]}),(0,j.jsx)(`div`,{className:v.center,children:x()})]})},N.__docgenInfo={description:``,methods:[],displayName:`DsProgressArc`,props:{value:{required:!1,tsType:{name:`number`},description:`Progress value between 0 and 100
@default 0`,defaultValue:{value:`0`,computed:!1}},size:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof progressArcSizes)[number]`},description:`Size of the arc progress indicator
@default 'medium'`,defaultValue:{value:`'medium'`,computed:!1}},variant:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof progressArcVariants)[number]`},description:`Visual variant of the arc progress indicator
@default 'default'`,defaultValue:{value:`'default'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Custom content to display in the center of the arc, overriding the default text or icon`},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`},description:``}},composes:[`ComponentPropsWithoutRef`]}})),P,F,re=t((()=>{P=[`small`,`medium`],F=[`default`,`success`,`error`]})),ie=t((()=>{ne(),re()})),I,L,R,z,B,ae=t((()=>{I=`_grid_1bra3_1`,L=`_cell_1bra3_9`,R=`_label_1bra3_16`,z=`_row_1bra3_21`,B={grid:I,cell:L,label:R,row:z}})),V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{a(),ie(),ae(),V=n(),{expect:H,within:U}=__STORYBOOK_MODULE_TEST__,W={title:`Design System/ProgressArc`,component:N,parameters:{layout:`centered`},argTypes:{value:{control:{type:`range`,min:0,max:100,step:1}},size:{control:{type:`select`},options:P},variant:{control:{type:`select`},options:F}}},G={args:{value:50},play:async({canvasElement:e})=>{let t=U(e),n=t.getByRole(`progressbar`);await H(n).toBeInTheDocument(),await H(n).toHaveAttribute(`aria-valuenow`,`50`),await H(n).toHaveAttribute(`aria-valuemin`,`0`),await H(n).toHaveAttribute(`aria-valuemax`,`100`),await H(t.getByText(`50%`)).toBeVisible()}},K={render:()=>(0,V.jsxs)(`div`,{className:B.grid,children:[(0,V.jsxs)(`div`,{className:B.cell,children:[(0,V.jsx)(N,{size:`small`,value:50}),(0,V.jsx)(`span`,{className:B.label,children:`Small / Default`})]}),(0,V.jsxs)(`div`,{className:B.cell,children:[(0,V.jsx)(N,{size:`small`,variant:`success`}),(0,V.jsx)(`span`,{className:B.label,children:`Small / Success`})]}),(0,V.jsxs)(`div`,{className:B.cell,children:[(0,V.jsx)(N,{size:`small`,variant:`error`,value:50}),(0,V.jsx)(`span`,{className:B.label,children:`Small / Error`})]}),(0,V.jsxs)(`div`,{className:B.cell,children:[(0,V.jsx)(N,{size:`medium`,value:50}),(0,V.jsx)(`span`,{className:B.label,children:`Medium / Default`})]}),(0,V.jsxs)(`div`,{className:B.cell,children:[(0,V.jsx)(N,{size:`medium`,variant:`success`}),(0,V.jsx)(`span`,{className:B.label,children:`Medium / Success`})]}),(0,V.jsxs)(`div`,{className:B.cell,children:[(0,V.jsx)(N,{size:`medium`,variant:`error`,value:50}),(0,V.jsx)(`span`,{className:B.label,children:`Medium / Error`})]})]}),play:async({canvasElement:e})=>{await H(U(e).getAllByRole(`progressbar`)).toHaveLength(6)}},q={render:()=>(0,V.jsxs)(`div`,{className:B.row,children:[(0,V.jsxs)(`div`,{className:B.cell,children:[(0,V.jsx)(N,{size:`small`,value:75}),(0,V.jsx)(`span`,{className:B.label,children:`Small`})]}),(0,V.jsxs)(`div`,{className:B.cell,children:[(0,V.jsx)(N,{size:`medium`,value:75}),(0,V.jsx)(`span`,{className:B.label,children:`Medium`})]})]}),play:async({canvasElement:e})=>{let t=U(e);await H(t.getAllByRole(`progressbar`)).toHaveLength(2),await H(t.getAllByText(`75%`)).toHaveLength(2)}},J={args:{variant:`success`},play:async({canvasElement:e})=>{let t=U(e),n=t.getByRole(`progressbar`);await H(n).toBeInTheDocument(),await H(n).toHaveAttribute(`aria-valuenow`,`100`),await H(t.getByText(`check`)).toBeVisible()}},Y={args:{variant:`error`,value:50},play:async({canvasElement:e})=>{let t=U(e),n=t.getByRole(`progressbar`);await H(n).toBeInTheDocument(),await H(n).toHaveAttribute(`aria-valuenow`,`50`),await H(t.getByText(`close`)).toBeVisible()}},X={args:{value:80,children:(0,V.jsx)(i,{icon:`warning`,size:`small`})},play:async({canvasElement:e})=>{let t=U(e),n=t.getByRole(`progressbar`);await H(n).toBeInTheDocument(),await H(n).toHaveAttribute(`aria-valuenow`,`80`),await H(t.getByText(`warning`)).toBeVisible()}},Z={args:{value:0},play:async({canvasElement:e})=>{let t=U(e);await H(t.getByRole(`progressbar`)).toHaveAttribute(`aria-valuenow`,`0`),await H(t.getByText(`0%`)).toBeVisible()}},Q={args:{value:100},play:async({canvasElement:e})=>{let t=U(e);await H(t.getByRole(`progressbar`)).toHaveAttribute(`aria-valuenow`,`100`),await H(t.getByText(`100%`)).toBeVisible()}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toBeInTheDocument();
    await expect(progress).toHaveAttribute('aria-valuenow', '50');
    await expect(progress).toHaveAttribute('aria-valuemin', '0');
    await expect(progress).toHaveAttribute('aria-valuemax', '100');
    await expect(canvas.getByText('50%')).toBeVisible();
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.grid}>
            <div className={styles.cell}>
                <DsProgressArc size="small" value={50} />
                <span className={styles.label}>Small / Default</span>
            </div>
            <div className={styles.cell}>
                <DsProgressArc size="small" variant="success" />
                <span className={styles.label}>Small / Success</span>
            </div>
            <div className={styles.cell}>
                <DsProgressArc size="small" variant="error" value={50} />
                <span className={styles.label}>Small / Error</span>
            </div>

            <div className={styles.cell}>
                <DsProgressArc size="medium" value={50} />
                <span className={styles.label}>Medium / Default</span>
            </div>
            <div className={styles.cell}>
                <DsProgressArc size="medium" variant="success" />
                <span className={styles.label}>Medium / Success</span>
            </div>
            <div className={styles.cell}>
                <DsProgressArc size="medium" variant="error" value={50} />
                <span className={styles.label}>Medium / Error</span>
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressBars = canvas.getAllByRole('progressbar');
    await expect(progressBars).toHaveLength(6);
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.row}>
            <div className={styles.cell}>
                <DsProgressArc size="small" value={75} />
                <span className={styles.label}>Small</span>
            </div>
            <div className={styles.cell}>
                <DsProgressArc size="medium" value={75} />
                <span className={styles.label}>Medium</span>
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressBars = canvas.getAllByRole('progressbar');
    await expect(progressBars).toHaveLength(2);
    await expect(canvas.getAllByText('75%')).toHaveLength(2);
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toBeInTheDocument();
    await expect(progress).toHaveAttribute('aria-valuenow', '100');
    await expect(canvas.getByText('check')).toBeVisible();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    value: 50
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toBeInTheDocument();
    await expect(progress).toHaveAttribute('aria-valuenow', '50');
    await expect(canvas.getByText('close')).toBeVisible();
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    children: <DsIcon icon="warning" size="small" />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toBeInTheDocument();
    await expect(progress).toHaveAttribute('aria-valuenow', '80');
    await expect(canvas.getByText('warning')).toBeVisible();
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toHaveAttribute('aria-valuenow', '0');
    await expect(canvas.getByText('0%')).toBeVisible();
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toHaveAttribute('aria-valuenow', '100');
    await expect(canvas.getByText('100%')).toBeVisible();
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`AllVariants`,`Sizes`,`Success`,`Error`,`CustomIcon`,`ZeroProgress`,`FullProgress`]}))();export{K as AllVariants,X as CustomIcon,G as Default,Y as Error,Q as FullProgress,q as Sizes,J as Success,Z as ZeroProgress,$ as __namedExportsOrder,W as default};