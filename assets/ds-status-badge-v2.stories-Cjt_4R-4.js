import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";import{t as r}from"./classnames-DN2IqHsz.js";import{t as i}from"./compiler-runtime-BShUMaY9.js";import{t as a}from"./ds-icon-BlnBCw-h.js";import{t as o}from"./ds-icon-B64iV1-z.js";import{n as s,t as c}from"./ds-typography-D4JcJBSg.js";import{r as l,t as u}from"./responsive-CDiuPh_k.js";import{t as ee}from"./ds-tooltip-BmsqSfol.js";import{t as d}from"./ds-tooltip-fktOimPe.js";import{n as f,t as p}from"./ds-stack-BkbsFTI1.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=t((()=>{m=`_root_tjnl4_1`,h=`_icon_tjnl4_8`,g=`_label_tjnl4_14`,_=`_medium_tjnl4_18`,v=`_small_tjnl4_24`,y=`_iconOnly_tjnl4_34`,b=`_textOnly_tjnl4_45`,x=`_temporary_tjnl4_58`,S=`_pending_tjnl4_70`,C=`_active_tjnl4_76`,w=`_execution_tjnl4_82`,T=`_deprecated_tjnl4_106`,E=`_secondary_tjnl4_112`,D={root:m,icon:h,label:g,medium:_,small:v,iconOnly:y,textOnly:b,"not-started":`_not-started_tjnl4_52`,temporary:x,"in-review":`_in-review_tjnl4_64`,pending:S,active:C,execution:w,"result-succeeded":`_result-succeeded_tjnl4_88`,"result-warning":`_result-warning_tjnl4_94`,"result-failed":`_result-failed_tjnl4_100`,deprecated:T,secondary:E}})),k,A=t((()=>{k=Object.freeze({"not-started":`lasso_select`,temporary:`hourglass_empty`,"in-review":`document_search`,pending:`timer_pause`,active:`power_settings_circle`,execution:`timelapse`,"result-succeeded":`verified`,"result-warning":`warning`,"result-failed":`cancel`,deprecated:`inventory_2`})})),j,M,N,P,F=t((()=>{j=i(),M=e(r(),1),O(),A(),o(),d(),c(),N=n(),P=e=>{let t=(0,j.c)(26),{phase:n,label:r,icon:i,iconOnly:o,variant:c,size:l,className:u,style:d,ref:f,"aria-label":p}=e,m=o===void 0?!1:o,h=c===void 0?`primary`:c,g=l===void 0?`medium`:l,_=i===null?null:i??k[n],v=_!==null,y=!v,b=m?r:void 0,x;t[0]===g?x=t[1]:(x=g===`small`?{fontSize:`var(--_badge-icon-size)`,width:`var(--_badge-icon-size)`,height:`var(--_badge-icon-size)`}:void 0,t[0]=g,t[1]=x);let S=x,C=D[n],w=D[g],T=h===`secondary`,E;t[2]!==u||t[3]!==m||t[4]!==y||t[5]!==C||t[6]!==w||t[7]!==T?(E=(0,M.default)(D.root,C,w,{[D.secondary]:T,[D.iconOnly]:m,[D.textOnly]:y},u),t[2]=u,t[3]=m,t[4]=y,t[5]=C,t[6]=w,t[7]=T,t[8]=E):E=t[8];let O=E,A=f,P=p??r,F;t[9]!==v||t[10]!==S||t[11]!==_?(F=v&&(0,N.jsx)(`span`,{className:D.icon,children:(0,N.jsx)(a,{icon:_,size:`tiny`,filled:!0,"aria-hidden":`true`,style:S})}),t[9]=v,t[10]=S,t[11]=_,t[12]=F):F=t[12];let I;t[13]!==m||t[14]!==r?(I=!m&&(0,N.jsx)(s,{className:D.label,variant:`body-xs-reg`,children:r}),t[13]=m,t[14]=r,t[15]=I):I=t[15];let L;t[16]!==O||t[17]!==d||t[18]!==P||t[19]!==F||t[20]!==I||t[21]!==A?(L=(0,N.jsxs)(`div`,{ref:A,className:O,style:d,role:`status`,"aria-label":P,children:[F,I]}),t[16]=O,t[17]=d,t[18]=P,t[19]=F,t[20]=I,t[21]=A,t[22]=L):L=t[22];let R=L;if(m){let e;return t[23]!==R||t[24]!==b?(e=(0,N.jsx)(ee,{content:b,children:R}),t[23]=R,t[24]=b,t[25]=e):e=t[25],e}return R}})),I,L,R,te=t((()=>{I=[`not-started`,`temporary`,`in-review`,`pending`,`active`,`execution`,`result-succeeded`,`result-warning`,`result-failed`,`deprecated`],L=[`primary`,`secondary`],R=[`medium`,`small`]})),z,ne=t((()=>{u(),F(),z=l(P,[`size`])})),B,V,H,re=t((()=>{B=`_sectionTitle_1bz3v_1`,V=`_docsTable_1bz3v_7`,H={sectionTitle:B,docsTable:V}})),U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{F(),ne(),te(),A(),o(),f(),re(),U=n(),W={"not-started":`Vacant`,temporary:`Draft`,"in-review":`In Review`,pending:`Reserved`,active:`Active`,execution:`Testing`,"result-succeeded":`Provisioned`,"result-warning":`Warning`,"result-failed":`Failed`,deprecated:`Decommissioned`},G={title:`Components/StatusBadgeV2`,component:P,parameters:{layout:`centered`},argTypes:{phase:{control:`select`,options:I,description:`Lifecycle phase determining color and default icon`},label:{control:`text`,description:`Domain-specific text label (always required)`},icon:{control:`text`,description:`Icon override; pass null for text-only`},iconOnly:{control:`boolean`,description:`Hide label text, show as tooltip instead`},variant:{control:`select`,options:L,description:`Visual variant: primary (tinted bg) or secondary (transparent)`},size:{control:`select`,options:R,description:`Badge size`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},K={args:{phase:`active`,label:`Active`}},q={render:()=>(0,U.jsxs)(p,{direction:`column`,gap:`var(--xl)`,children:[(0,U.jsxs)(p,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Primary — Medium`}),(0,U.jsxs)(p,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(P,{phase:`not-started`,label:W[`not-started`]}),(0,U.jsx)(P,{phase:`temporary`,label:W.temporary}),(0,U.jsx)(P,{phase:`in-review`,label:W[`in-review`]}),(0,U.jsx)(P,{phase:`pending`,label:W.pending}),(0,U.jsx)(P,{phase:`active`,label:W.active}),(0,U.jsx)(P,{phase:`execution`,label:W.execution}),(0,U.jsx)(P,{phase:`result-succeeded`,label:W[`result-succeeded`]}),(0,U.jsx)(P,{phase:`result-warning`,label:W[`result-warning`]}),(0,U.jsx)(P,{phase:`result-failed`,label:W[`result-failed`]}),(0,U.jsx)(P,{phase:`deprecated`,label:W.deprecated})]})]}),(0,U.jsxs)(p,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Primary — Small`}),(0,U.jsxs)(p,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(P,{phase:`not-started`,label:W[`not-started`],size:`small`}),(0,U.jsx)(P,{phase:`temporary`,label:W.temporary,size:`small`}),(0,U.jsx)(P,{phase:`in-review`,label:W[`in-review`],size:`small`}),(0,U.jsx)(P,{phase:`pending`,label:W.pending,size:`small`}),(0,U.jsx)(P,{phase:`active`,label:W.active,size:`small`}),(0,U.jsx)(P,{phase:`execution`,label:W.execution,size:`small`}),(0,U.jsx)(P,{phase:`result-succeeded`,label:W[`result-succeeded`],size:`small`}),(0,U.jsx)(P,{phase:`result-warning`,label:W[`result-warning`],size:`small`}),(0,U.jsx)(P,{phase:`result-failed`,label:W[`result-failed`],size:`small`}),(0,U.jsx)(P,{phase:`deprecated`,label:W.deprecated,size:`small`})]})]}),(0,U.jsxs)(p,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Secondary — Medium`}),(0,U.jsxs)(p,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(P,{phase:`not-started`,label:W[`not-started`],variant:`secondary`}),(0,U.jsx)(P,{phase:`temporary`,label:W.temporary,variant:`secondary`}),(0,U.jsx)(P,{phase:`in-review`,label:W[`in-review`],variant:`secondary`}),(0,U.jsx)(P,{phase:`pending`,label:W.pending,variant:`secondary`}),(0,U.jsx)(P,{phase:`active`,label:W.active,variant:`secondary`}),(0,U.jsx)(P,{phase:`execution`,label:W.execution,variant:`secondary`}),(0,U.jsx)(P,{phase:`result-succeeded`,label:W[`result-succeeded`],variant:`secondary`}),(0,U.jsx)(P,{phase:`result-warning`,label:W[`result-warning`],variant:`secondary`}),(0,U.jsx)(P,{phase:`result-failed`,label:W[`result-failed`],variant:`secondary`}),(0,U.jsx)(P,{phase:`deprecated`,label:W.deprecated,variant:`secondary`})]})]}),(0,U.jsxs)(p,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Secondary — Small`}),(0,U.jsxs)(p,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(P,{phase:`not-started`,label:W[`not-started`],variant:`secondary`,size:`small`}),(0,U.jsx)(P,{phase:`temporary`,label:W.temporary,variant:`secondary`,size:`small`}),(0,U.jsx)(P,{phase:`in-review`,label:W[`in-review`],variant:`secondary`,size:`small`}),(0,U.jsx)(P,{phase:`pending`,label:W.pending,variant:`secondary`,size:`small`}),(0,U.jsx)(P,{phase:`active`,label:W.active,variant:`secondary`,size:`small`}),(0,U.jsx)(P,{phase:`execution`,label:W.execution,variant:`secondary`,size:`small`}),(0,U.jsx)(P,{phase:`result-succeeded`,label:W[`result-succeeded`],variant:`secondary`,size:`small`}),(0,U.jsx)(P,{phase:`result-warning`,label:W[`result-warning`],variant:`secondary`,size:`small`}),(0,U.jsx)(P,{phase:`result-failed`,label:W[`result-failed`],variant:`secondary`,size:`small`}),(0,U.jsx)(P,{phase:`deprecated`,label:W.deprecated,variant:`secondary`,size:`small`})]})]})]})},J={render:()=>(0,U.jsxs)(p,{direction:`column`,gap:`var(--xl)`,children:[(0,U.jsxs)(p,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Icon-only (hover for tooltip)`}),(0,U.jsxs)(p,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(P,{phase:`not-started`,label:W[`not-started`],iconOnly:!0}),(0,U.jsx)(P,{phase:`temporary`,label:W.temporary,iconOnly:!0}),(0,U.jsx)(P,{phase:`in-review`,label:W[`in-review`],iconOnly:!0}),(0,U.jsx)(P,{phase:`pending`,label:W.pending,iconOnly:!0}),(0,U.jsx)(P,{phase:`active`,label:W.active,iconOnly:!0}),(0,U.jsx)(P,{phase:`execution`,label:W.execution,iconOnly:!0}),(0,U.jsx)(P,{phase:`result-succeeded`,label:W[`result-succeeded`],iconOnly:!0}),(0,U.jsx)(P,{phase:`result-warning`,label:W[`result-warning`],iconOnly:!0}),(0,U.jsx)(P,{phase:`result-failed`,label:W[`result-failed`],iconOnly:!0}),(0,U.jsx)(P,{phase:`deprecated`,label:W.deprecated,iconOnly:!0})]})]}),(0,U.jsxs)(p,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Icon-only — Small`}),(0,U.jsxs)(p,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(P,{phase:`not-started`,label:W[`not-started`],iconOnly:!0,size:`small`}),(0,U.jsx)(P,{phase:`temporary`,label:W.temporary,iconOnly:!0,size:`small`}),(0,U.jsx)(P,{phase:`in-review`,label:W[`in-review`],iconOnly:!0,size:`small`}),(0,U.jsx)(P,{phase:`pending`,label:W.pending,iconOnly:!0,size:`small`}),(0,U.jsx)(P,{phase:`active`,label:W.active,iconOnly:!0,size:`small`}),(0,U.jsx)(P,{phase:`execution`,label:W.execution,iconOnly:!0,size:`small`}),(0,U.jsx)(P,{phase:`result-succeeded`,label:W[`result-succeeded`],iconOnly:!0,size:`small`}),(0,U.jsx)(P,{phase:`result-warning`,label:W[`result-warning`],iconOnly:!0,size:`small`}),(0,U.jsx)(P,{phase:`result-failed`,label:W[`result-failed`],iconOnly:!0,size:`small`}),(0,U.jsx)(P,{phase:`deprecated`,label:W.deprecated,iconOnly:!0,size:`small`})]})]}),(0,U.jsxs)(p,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Icon-only Secondary`}),(0,U.jsxs)(p,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(P,{phase:`not-started`,label:W[`not-started`],iconOnly:!0,variant:`secondary`}),(0,U.jsx)(P,{phase:`temporary`,label:W.temporary,iconOnly:!0,variant:`secondary`}),(0,U.jsx)(P,{phase:`in-review`,label:W[`in-review`],iconOnly:!0,variant:`secondary`}),(0,U.jsx)(P,{phase:`pending`,label:W.pending,iconOnly:!0,variant:`secondary`}),(0,U.jsx)(P,{phase:`active`,label:W.active,iconOnly:!0,variant:`secondary`}),(0,U.jsx)(P,{phase:`execution`,label:W.execution,iconOnly:!0,variant:`secondary`}),(0,U.jsx)(P,{phase:`result-succeeded`,label:W[`result-succeeded`],iconOnly:!0,variant:`secondary`}),(0,U.jsx)(P,{phase:`result-warning`,label:W[`result-warning`],iconOnly:!0,variant:`secondary`}),(0,U.jsx)(P,{phase:`result-failed`,label:W[`result-failed`],iconOnly:!0,variant:`secondary`}),(0,U.jsx)(P,{phase:`deprecated`,label:W.deprecated,iconOnly:!0,variant:`secondary`})]})]})]})},Y={render:()=>(0,U.jsxs)(p,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Text-only (icon=null)`}),(0,U.jsxs)(p,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(P,{phase:`not-started`,label:W[`not-started`],icon:null}),(0,U.jsx)(P,{phase:`temporary`,label:W.temporary,icon:null}),(0,U.jsx)(P,{phase:`in-review`,label:W[`in-review`],icon:null}),(0,U.jsx)(P,{phase:`pending`,label:W.pending,icon:null}),(0,U.jsx)(P,{phase:`active`,label:W.active,icon:null}),(0,U.jsx)(P,{phase:`execution`,label:W.execution,icon:null}),(0,U.jsx)(P,{phase:`result-succeeded`,label:W[`result-succeeded`],icon:null}),(0,U.jsx)(P,{phase:`result-warning`,label:W[`result-warning`],icon:null}),(0,U.jsx)(P,{phase:`result-failed`,label:W[`result-failed`],icon:null}),(0,U.jsx)(P,{phase:`deprecated`,label:W.deprecated,icon:null})]})]})},X={"not-started":`Vacant, Spare`,temporary:`Design, Draft`,"in-review":`PnR, L1 design complete`,pending:`Reserved, Pending, Ordered`,active:`Active, Installed, In-use`,execution:`Testing, Upgrading, Initializing`,"result-succeeded":`Test passed, Provisioning complete`,"result-warning":`Domain-specific warnings`,"result-failed":`Cancelled, Fault, Failed, Disconnected`,deprecated:`Decommissioned, Sacrificed`},Z={render:()=>(0,U.jsx)(p,{direction:`column`,gap:`var(--xs)`,children:(0,U.jsxs)(`table`,{className:H.docsTable,children:[(0,U.jsx)(`thead`,{children:(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`th`,{children:`Phase`}),(0,U.jsx)(`th`,{children:`Badge`}),(0,U.jsx)(`th`,{children:`Icon`}),(0,U.jsx)(`th`,{children:`Example Domain Statuses`})]})}),(0,U.jsxs)(`tbody`,{children:[(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`not-started`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(P,{phase:`not-started`,label:W[`not-started`]})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:k[`not-started`],size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X[`not-started`]})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`temporary`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(P,{phase:`temporary`,label:W.temporary})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:k.temporary,size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X.temporary})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`in-review`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(P,{phase:`in-review`,label:W[`in-review`]})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:k[`in-review`],size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X[`in-review`]})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`pending`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(P,{phase:`pending`,label:W.pending})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:k.pending,size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X.pending})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`active`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(P,{phase:`active`,label:W.active})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:k.active,size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X.active})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`execution`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(P,{phase:`execution`,label:W.execution})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:k.execution,size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X.execution})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`result-succeeded`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(P,{phase:`result-succeeded`,label:W[`result-succeeded`]})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:k[`result-succeeded`],size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X[`result-succeeded`]})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`result-warning`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(P,{phase:`result-warning`,label:W[`result-warning`]})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:k[`result-warning`],size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X[`result-warning`]})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`result-failed`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(P,{phase:`result-failed`,label:W[`result-failed`]})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:k[`result-failed`],size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X[`result-failed`]})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`deprecated`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(P,{phase:`deprecated`,label:W.deprecated})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:k.deprecated,size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X.deprecated})]})]})]})})},Q={parameters:{layout:`centered`},render:()=>(0,U.jsxs)(p,{direction:`row`,gap:`var(--sm)`,alignItems:`center`,flexWrap:`wrap`,children:[(0,U.jsx)(z,{phase:`active`,label:`lg: medium / md: small`,size:{lg:`medium`,md:`small`}}),(0,U.jsx)(z,{phase:`pending`,label:`lg: small / md: medium`,size:{lg:`small`,md:`medium`}}),(0,U.jsx)(z,{phase:`execution`,label:`static: medium`,size:`medium`})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    phase: 'active',
    label: 'Active'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <DsStack direction="column" gap="var(--xl)">
            <DsStack direction="column" gap="var(--xs)">
                <div className={styles.sectionTitle}>Primary — Medium</div>
                <DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
                    <DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} />
                    <DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} />
                    <DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} />
                    <DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} />
                    <DsStatusBadgeV2 phase="active" label={phaseLabels.active} />
                    <DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} />
                    <DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} />
                    <DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} />
                    <DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} />
                    <DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} />
                </DsStack>
            </DsStack>

            <DsStack direction="column" gap="var(--xs)">
                <div className={styles.sectionTitle}>Primary — Small</div>
                <DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
                    <DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} size="small" />
                    <DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} size="small" />
                    <DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} size="small" />
                    <DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} size="small" />
                    <DsStatusBadgeV2 phase="active" label={phaseLabels.active} size="small" />
                    <DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} size="small" />
                    <DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} size="small" />
                    <DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} size="small" />
                    <DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} size="small" />
                    <DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} size="small" />
                </DsStack>
            </DsStack>

            <DsStack direction="column" gap="var(--xs)">
                <div className={styles.sectionTitle}>Secondary — Medium</div>
                <DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
                    <DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} variant="secondary" />
                    <DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} variant="secondary" />
                    <DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} variant="secondary" />
                    <DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} variant="secondary" />
                    <DsStatusBadgeV2 phase="active" label={phaseLabels.active} variant="secondary" />
                    <DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} variant="secondary" />
                    <DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} variant="secondary" />
                    <DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} variant="secondary" />
                    <DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} variant="secondary" />
                    <DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} variant="secondary" />
                </DsStack>
            </DsStack>

            <DsStack direction="column" gap="var(--xs)">
                <div className={styles.sectionTitle}>Secondary — Small</div>
                <DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
                    <DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} variant="secondary" size="small" />
                    <DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} variant="secondary" size="small" />
                    <DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} variant="secondary" size="small" />
                    <DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} variant="secondary" size="small" />
                    <DsStatusBadgeV2 phase="active" label={phaseLabels.active} variant="secondary" size="small" />
                    <DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} variant="secondary" size="small" />
                    <DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} variant="secondary" size="small" />
                    <DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} variant="secondary" size="small" />
                    <DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} variant="secondary" size="small" />
                    <DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} variant="secondary" size="small" />
                </DsStack>
            </DsStack>
        </DsStack>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <DsStack direction="column" gap="var(--xl)">
            <DsStack direction="column" gap="var(--xs)">
                <div className={styles.sectionTitle}>Icon-only (hover for tooltip)</div>
                <DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
                    <DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} iconOnly />
                    <DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} iconOnly />
                    <DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} iconOnly />
                    <DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} iconOnly />
                    <DsStatusBadgeV2 phase="active" label={phaseLabels.active} iconOnly />
                    <DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} iconOnly />
                    <DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} iconOnly />
                    <DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} iconOnly />
                    <DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} iconOnly />
                    <DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} iconOnly />
                </DsStack>
            </DsStack>

            <DsStack direction="column" gap="var(--xs)">
                <div className={styles.sectionTitle}>Icon-only — Small</div>
                <DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
                    <DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} iconOnly size="small" />
                    <DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} iconOnly size="small" />
                    <DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} iconOnly size="small" />
                    <DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} iconOnly size="small" />
                    <DsStatusBadgeV2 phase="active" label={phaseLabels.active} iconOnly size="small" />
                    <DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} iconOnly size="small" />
                    <DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} iconOnly size="small" />
                    <DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} iconOnly size="small" />
                    <DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} iconOnly size="small" />
                    <DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} iconOnly size="small" />
                </DsStack>
            </DsStack>

            <DsStack direction="column" gap="var(--xs)">
                <div className={styles.sectionTitle}>Icon-only Secondary</div>
                <DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
                    <DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} iconOnly variant="secondary" />
                    <DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} iconOnly variant="secondary" />
                    <DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} iconOnly variant="secondary" />
                    <DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} iconOnly variant="secondary" />
                    <DsStatusBadgeV2 phase="active" label={phaseLabels.active} iconOnly variant="secondary" />
                    <DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} iconOnly variant="secondary" />
                    <DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} iconOnly variant="secondary" />
                    <DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} iconOnly variant="secondary" />
                    <DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} iconOnly variant="secondary" />
                    <DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} iconOnly variant="secondary" />
                </DsStack>
            </DsStack>
        </DsStack>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <DsStack direction="column" gap="var(--xs)">
            <div className={styles.sectionTitle}>Text-only (icon=null)</div>
            <DsStack direction="row" flexWrap="wrap" gap="var(--standard)" alignItems="center">
                <DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} icon={null} />
                <DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} icon={null} />
                <DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} icon={null} />
                <DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} icon={null} />
                <DsStatusBadgeV2 phase="active" label={phaseLabels.active} icon={null} />
                <DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} icon={null} />
                <DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} icon={null} />
                <DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} icon={null} />
                <DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} icon={null} />
                <DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} icon={null} />
            </DsStack>
        </DsStack>
}`,...Y.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <DsStack direction="column" gap="var(--xs)">
            <table className={styles.docsTable}>
                <thead>
                    <tr>
                        <th>Phase</th>
                        <th>Badge</th>
                        <th>Icon</th>
                        <th>Example Domain Statuses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <code>not-started</code>
                        </td>
                        <td>
                            <DsStatusBadgeV2 phase="not-started" label={phaseLabels['not-started']} />
                        </td>
                        <td>
                            <DsIcon icon={phaseIconMap['not-started']} size="tiny" filled />
                        </td>
                        <td>{phaseExamples['not-started']}</td>
                    </tr>
                    <tr>
                        <td>
                            <code>temporary</code>
                        </td>
                        <td>
                            <DsStatusBadgeV2 phase="temporary" label={phaseLabels.temporary} />
                        </td>
                        <td>
                            <DsIcon icon={phaseIconMap.temporary} size="tiny" filled />
                        </td>
                        <td>{phaseExamples.temporary}</td>
                    </tr>
                    <tr>
                        <td>
                            <code>in-review</code>
                        </td>
                        <td>
                            <DsStatusBadgeV2 phase="in-review" label={phaseLabels['in-review']} />
                        </td>
                        <td>
                            <DsIcon icon={phaseIconMap['in-review']} size="tiny" filled />
                        </td>
                        <td>{phaseExamples['in-review']}</td>
                    </tr>
                    <tr>
                        <td>
                            <code>pending</code>
                        </td>
                        <td>
                            <DsStatusBadgeV2 phase="pending" label={phaseLabels.pending} />
                        </td>
                        <td>
                            <DsIcon icon={phaseIconMap.pending} size="tiny" filled />
                        </td>
                        <td>{phaseExamples.pending}</td>
                    </tr>
                    <tr>
                        <td>
                            <code>active</code>
                        </td>
                        <td>
                            <DsStatusBadgeV2 phase="active" label={phaseLabels.active} />
                        </td>
                        <td>
                            <DsIcon icon={phaseIconMap.active} size="tiny" filled />
                        </td>
                        <td>{phaseExamples.active}</td>
                    </tr>
                    <tr>
                        <td>
                            <code>execution</code>
                        </td>
                        <td>
                            <DsStatusBadgeV2 phase="execution" label={phaseLabels.execution} />
                        </td>
                        <td>
                            <DsIcon icon={phaseIconMap.execution} size="tiny" filled />
                        </td>
                        <td>{phaseExamples.execution}</td>
                    </tr>
                    <tr>
                        <td>
                            <code>result-succeeded</code>
                        </td>
                        <td>
                            <DsStatusBadgeV2 phase="result-succeeded" label={phaseLabels['result-succeeded']} />
                        </td>
                        <td>
                            <DsIcon icon={phaseIconMap['result-succeeded']} size="tiny" filled />
                        </td>
                        <td>{phaseExamples['result-succeeded']}</td>
                    </tr>
                    <tr>
                        <td>
                            <code>result-warning</code>
                        </td>
                        <td>
                            <DsStatusBadgeV2 phase="result-warning" label={phaseLabels['result-warning']} />
                        </td>
                        <td>
                            <DsIcon icon={phaseIconMap['result-warning']} size="tiny" filled />
                        </td>
                        <td>{phaseExamples['result-warning']}</td>
                    </tr>
                    <tr>
                        <td>
                            <code>result-failed</code>
                        </td>
                        <td>
                            <DsStatusBadgeV2 phase="result-failed" label={phaseLabels['result-failed']} />
                        </td>
                        <td>
                            <DsIcon icon={phaseIconMap['result-failed']} size="tiny" filled />
                        </td>
                        <td>{phaseExamples['result-failed']}</td>
                    </tr>
                    <tr>
                        <td>
                            <code>deprecated</code>
                        </td>
                        <td>
                            <DsStatusBadgeV2 phase="deprecated" label={phaseLabels.deprecated} />
                        </td>
                        <td>
                            <DsIcon icon={phaseIconMap.deprecated} size="tiny" filled />
                        </td>
                        <td>{phaseExamples.deprecated}</td>
                    </tr>
                </tbody>
            </table>
        </DsStack>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: () => <DsStack direction="row" gap="var(--sm)" alignItems="center" flexWrap="wrap">
            <DsStatusBadgeV2Responsive phase="active" label="lg: medium / md: small" size={{
      lg: 'medium',
      md: 'small'
    }} />
            <DsStatusBadgeV2Responsive phase="pending" label="lg: small / md: medium" size={{
      lg: 'small',
      md: 'medium'
    }} />
            <DsStatusBadgeV2Responsive phase="execution" label="static: medium" size="medium" />
        </DsStack>
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`AllPhases`,`IconOnly`,`TextOnly`,`PhaseReference`,`ResponsiveSize`]}))();export{q as AllPhases,K as Default,J as IconOnly,Z as PhaseReference,Q as ResponsiveSize,Y as TextOnly,$ as __namedExportsOrder,G as default};