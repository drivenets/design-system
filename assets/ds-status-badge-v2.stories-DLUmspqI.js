import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{t as r}from"./classnames-Dm_LJ4P4.js";import{t as i}from"./compiler-runtime-lBQrPoKW.js";import{t as a}from"./ds-icon-jszT4y__.js";import{t as o}from"./ds-icon-CjNy_GDk.js";import{n as ee,t as s}from"./ds-typography-Le6SDFLS.js";import{r as c,t as l}from"./responsive-CLfAbpIL.js";import{t as te}from"./ds-tooltip-B4a0V428.js";import{t as u}from"./ds-tooltip-C6Lihin0.js";import{n as d,t as f}from"./ds-stack-CbYA14hq.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D=e((()=>{p=`_root_tjnl4_1`,m=`_icon_tjnl4_8`,h=`_label_tjnl4_14`,g=`_medium_tjnl4_18`,_=`_small_tjnl4_24`,v=`_iconOnly_tjnl4_34`,y=`_textOnly_tjnl4_45`,b=`_temporary_tjnl4_58`,x=`_pending_tjnl4_70`,S=`_active_tjnl4_76`,C=`_execution_tjnl4_82`,w=`_deprecated_tjnl4_106`,T=`_secondary_tjnl4_112`,E={root:p,icon:m,label:h,medium:g,small:_,iconOnly:v,textOnly:y,"not-started":`_not-started_tjnl4_52`,temporary:b,"in-review":`_in-review_tjnl4_64`,pending:x,active:S,execution:C,"result-succeeded":`_result-succeeded_tjnl4_88`,"result-warning":`_result-warning_tjnl4_94`,"result-failed":`_result-failed_tjnl4_100`,deprecated:w,secondary:T}})),O,k=e((()=>{O=Object.freeze({"not-started":`lasso_select`,temporary:`hourglass_empty`,"in-review":`document_search`,pending:`timer_pause`,active:`power_settings_circle`,execution:`timelapse`,"result-succeeded":`verified`,"result-warning":`warning`,"result-failed":`cancel`,deprecated:`inventory_2`})})),A,j,M,N,P=e((()=>{A=i(),j=t(r(),1),D(),k(),o(),u(),s(),M=n(),N=e=>{let t=(0,A.c)(26),{phase:n,label:r,icon:i,iconOnly:o,variant:s,size:c,className:l,style:u,ref:d,"aria-label":f}=e,p=o===void 0?!1:o,m=s===void 0?`primary`:s,h=c===void 0?`medium`:c,g=i===null?null:i??O[n],_=g!==null,v=!_,y=p?r:void 0,b;t[0]===h?b=t[1]:(b=h===`small`?{fontSize:`var(--_badge-icon-size)`,width:`var(--_badge-icon-size)`,height:`var(--_badge-icon-size)`}:void 0,t[0]=h,t[1]=b);let x=b,S=E[n],C=E[h],w=m===`secondary`,T;t[2]!==l||t[3]!==p||t[4]!==v||t[5]!==S||t[6]!==C||t[7]!==w?(T=(0,j.default)(E.root,S,C,{[E.secondary]:w,[E.iconOnly]:p,[E.textOnly]:v},l),t[2]=l,t[3]=p,t[4]=v,t[5]=S,t[6]=C,t[7]=w,t[8]=T):T=t[8];let D=T,k=d,N=f??r,P;t[9]!==_||t[10]!==x||t[11]!==g?(P=_&&(0,M.jsx)(`span`,{className:E.icon,children:(0,M.jsx)(a,{icon:g,size:`tiny`,filled:!0,"aria-hidden":`true`,style:x})}),t[9]=_,t[10]=x,t[11]=g,t[12]=P):P=t[12];let F;t[13]!==p||t[14]!==r?(F=!p&&(0,M.jsx)(ee,{className:E.label,variant:`body-xs-reg`,children:r}),t[13]=p,t[14]=r,t[15]=F):F=t[15];let I;t[16]!==D||t[17]!==u||t[18]!==N||t[19]!==P||t[20]!==F||t[21]!==k?(I=(0,M.jsxs)(`div`,{ref:k,className:D,style:u,role:`status`,"aria-label":N,children:[P,F]}),t[16]=D,t[17]=u,t[18]=N,t[19]=P,t[20]=F,t[21]=k,t[22]=I):I=t[22];let L=I;if(p){let e;return t[23]!==L||t[24]!==y?(e=(0,M.jsx)(te,{content:y,children:L}),t[23]=L,t[24]=y,t[25]=e):e=t[25],e}return L}})),F,I,L,R=e((()=>{F=[`not-started`,`temporary`,`in-review`,`pending`,`active`,`execution`,`result-succeeded`,`result-warning`,`result-failed`,`deprecated`],I=[`primary`,`secondary`],L=[`medium`,`small`]})),z,ne=e((()=>{l(),P(),R(),z=c(N,[`size`])})),B,V,H,re=e((()=>{B=`_sectionTitle_1bz3v_1`,V=`_docsTable_1bz3v_7`,H={sectionTitle:B,docsTable:V}})),U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{P(),ne(),R(),k(),o(),d(),re(),U=n(),W={"not-started":`Vacant`,temporary:`Draft`,"in-review":`In Review`,pending:`Reserved`,active:`Active`,execution:`Testing`,"result-succeeded":`Provisioned`,"result-warning":`Warning`,"result-failed":`Failed`,deprecated:`Decommissioned`},G={title:`Components/StatusBadgeV2`,component:N,parameters:{layout:`centered`},argTypes:{phase:{control:`select`,options:F,description:`Lifecycle phase determining color and default icon`},label:{control:`text`,description:`Domain-specific text label (always required)`},icon:{control:`text`,description:`Icon override; pass null for text-only`},iconOnly:{control:`boolean`,description:`Hide label text, show as tooltip instead`},variant:{control:`select`,options:I,description:`Visual variant: primary (tinted bg) or secondary (transparent)`},size:{control:`select`,options:L,description:`Badge size`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},K={args:{phase:`active`,label:`Active`}},q={render:()=>(0,U.jsxs)(f,{direction:`column`,gap:`var(--xl)`,children:[(0,U.jsxs)(f,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Primary — Medium`}),(0,U.jsxs)(f,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(N,{phase:`not-started`,label:W[`not-started`]}),(0,U.jsx)(N,{phase:`temporary`,label:W.temporary}),(0,U.jsx)(N,{phase:`in-review`,label:W[`in-review`]}),(0,U.jsx)(N,{phase:`pending`,label:W.pending}),(0,U.jsx)(N,{phase:`active`,label:W.active}),(0,U.jsx)(N,{phase:`execution`,label:W.execution}),(0,U.jsx)(N,{phase:`result-succeeded`,label:W[`result-succeeded`]}),(0,U.jsx)(N,{phase:`result-warning`,label:W[`result-warning`]}),(0,U.jsx)(N,{phase:`result-failed`,label:W[`result-failed`]}),(0,U.jsx)(N,{phase:`deprecated`,label:W.deprecated})]})]}),(0,U.jsxs)(f,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Primary — Small`}),(0,U.jsxs)(f,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(N,{phase:`not-started`,label:W[`not-started`],size:`small`}),(0,U.jsx)(N,{phase:`temporary`,label:W.temporary,size:`small`}),(0,U.jsx)(N,{phase:`in-review`,label:W[`in-review`],size:`small`}),(0,U.jsx)(N,{phase:`pending`,label:W.pending,size:`small`}),(0,U.jsx)(N,{phase:`active`,label:W.active,size:`small`}),(0,U.jsx)(N,{phase:`execution`,label:W.execution,size:`small`}),(0,U.jsx)(N,{phase:`result-succeeded`,label:W[`result-succeeded`],size:`small`}),(0,U.jsx)(N,{phase:`result-warning`,label:W[`result-warning`],size:`small`}),(0,U.jsx)(N,{phase:`result-failed`,label:W[`result-failed`],size:`small`}),(0,U.jsx)(N,{phase:`deprecated`,label:W.deprecated,size:`small`})]})]}),(0,U.jsxs)(f,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Secondary — Medium`}),(0,U.jsxs)(f,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(N,{phase:`not-started`,label:W[`not-started`],variant:`secondary`}),(0,U.jsx)(N,{phase:`temporary`,label:W.temporary,variant:`secondary`}),(0,U.jsx)(N,{phase:`in-review`,label:W[`in-review`],variant:`secondary`}),(0,U.jsx)(N,{phase:`pending`,label:W.pending,variant:`secondary`}),(0,U.jsx)(N,{phase:`active`,label:W.active,variant:`secondary`}),(0,U.jsx)(N,{phase:`execution`,label:W.execution,variant:`secondary`}),(0,U.jsx)(N,{phase:`result-succeeded`,label:W[`result-succeeded`],variant:`secondary`}),(0,U.jsx)(N,{phase:`result-warning`,label:W[`result-warning`],variant:`secondary`}),(0,U.jsx)(N,{phase:`result-failed`,label:W[`result-failed`],variant:`secondary`}),(0,U.jsx)(N,{phase:`deprecated`,label:W.deprecated,variant:`secondary`})]})]}),(0,U.jsxs)(f,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Secondary — Small`}),(0,U.jsxs)(f,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(N,{phase:`not-started`,label:W[`not-started`],variant:`secondary`,size:`small`}),(0,U.jsx)(N,{phase:`temporary`,label:W.temporary,variant:`secondary`,size:`small`}),(0,U.jsx)(N,{phase:`in-review`,label:W[`in-review`],variant:`secondary`,size:`small`}),(0,U.jsx)(N,{phase:`pending`,label:W.pending,variant:`secondary`,size:`small`}),(0,U.jsx)(N,{phase:`active`,label:W.active,variant:`secondary`,size:`small`}),(0,U.jsx)(N,{phase:`execution`,label:W.execution,variant:`secondary`,size:`small`}),(0,U.jsx)(N,{phase:`result-succeeded`,label:W[`result-succeeded`],variant:`secondary`,size:`small`}),(0,U.jsx)(N,{phase:`result-warning`,label:W[`result-warning`],variant:`secondary`,size:`small`}),(0,U.jsx)(N,{phase:`result-failed`,label:W[`result-failed`],variant:`secondary`,size:`small`}),(0,U.jsx)(N,{phase:`deprecated`,label:W.deprecated,variant:`secondary`,size:`small`})]})]})]})},J={render:()=>(0,U.jsxs)(f,{direction:`column`,gap:`var(--xl)`,children:[(0,U.jsxs)(f,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Icon-only (hover for tooltip)`}),(0,U.jsxs)(f,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(N,{phase:`not-started`,label:W[`not-started`],iconOnly:!0}),(0,U.jsx)(N,{phase:`temporary`,label:W.temporary,iconOnly:!0}),(0,U.jsx)(N,{phase:`in-review`,label:W[`in-review`],iconOnly:!0}),(0,U.jsx)(N,{phase:`pending`,label:W.pending,iconOnly:!0}),(0,U.jsx)(N,{phase:`active`,label:W.active,iconOnly:!0}),(0,U.jsx)(N,{phase:`execution`,label:W.execution,iconOnly:!0}),(0,U.jsx)(N,{phase:`result-succeeded`,label:W[`result-succeeded`],iconOnly:!0}),(0,U.jsx)(N,{phase:`result-warning`,label:W[`result-warning`],iconOnly:!0}),(0,U.jsx)(N,{phase:`result-failed`,label:W[`result-failed`],iconOnly:!0}),(0,U.jsx)(N,{phase:`deprecated`,label:W.deprecated,iconOnly:!0})]})]}),(0,U.jsxs)(f,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Icon-only — Small`}),(0,U.jsxs)(f,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(N,{phase:`not-started`,label:W[`not-started`],iconOnly:!0,size:`small`}),(0,U.jsx)(N,{phase:`temporary`,label:W.temporary,iconOnly:!0,size:`small`}),(0,U.jsx)(N,{phase:`in-review`,label:W[`in-review`],iconOnly:!0,size:`small`}),(0,U.jsx)(N,{phase:`pending`,label:W.pending,iconOnly:!0,size:`small`}),(0,U.jsx)(N,{phase:`active`,label:W.active,iconOnly:!0,size:`small`}),(0,U.jsx)(N,{phase:`execution`,label:W.execution,iconOnly:!0,size:`small`}),(0,U.jsx)(N,{phase:`result-succeeded`,label:W[`result-succeeded`],iconOnly:!0,size:`small`}),(0,U.jsx)(N,{phase:`result-warning`,label:W[`result-warning`],iconOnly:!0,size:`small`}),(0,U.jsx)(N,{phase:`result-failed`,label:W[`result-failed`],iconOnly:!0,size:`small`}),(0,U.jsx)(N,{phase:`deprecated`,label:W.deprecated,iconOnly:!0,size:`small`})]})]}),(0,U.jsxs)(f,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Icon-only Secondary`}),(0,U.jsxs)(f,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(N,{phase:`not-started`,label:W[`not-started`],iconOnly:!0,variant:`secondary`}),(0,U.jsx)(N,{phase:`temporary`,label:W.temporary,iconOnly:!0,variant:`secondary`}),(0,U.jsx)(N,{phase:`in-review`,label:W[`in-review`],iconOnly:!0,variant:`secondary`}),(0,U.jsx)(N,{phase:`pending`,label:W.pending,iconOnly:!0,variant:`secondary`}),(0,U.jsx)(N,{phase:`active`,label:W.active,iconOnly:!0,variant:`secondary`}),(0,U.jsx)(N,{phase:`execution`,label:W.execution,iconOnly:!0,variant:`secondary`}),(0,U.jsx)(N,{phase:`result-succeeded`,label:W[`result-succeeded`],iconOnly:!0,variant:`secondary`}),(0,U.jsx)(N,{phase:`result-warning`,label:W[`result-warning`],iconOnly:!0,variant:`secondary`}),(0,U.jsx)(N,{phase:`result-failed`,label:W[`result-failed`],iconOnly:!0,variant:`secondary`}),(0,U.jsx)(N,{phase:`deprecated`,label:W.deprecated,iconOnly:!0,variant:`secondary`})]})]})]})},Y={render:()=>(0,U.jsxs)(f,{direction:`column`,gap:`var(--xs)`,children:[(0,U.jsx)(`div`,{className:H.sectionTitle,children:`Text-only (icon=null)`}),(0,U.jsxs)(f,{direction:`row`,flexWrap:`wrap`,gap:`var(--standard)`,alignItems:`center`,children:[(0,U.jsx)(N,{phase:`not-started`,label:W[`not-started`],icon:null}),(0,U.jsx)(N,{phase:`temporary`,label:W.temporary,icon:null}),(0,U.jsx)(N,{phase:`in-review`,label:W[`in-review`],icon:null}),(0,U.jsx)(N,{phase:`pending`,label:W.pending,icon:null}),(0,U.jsx)(N,{phase:`active`,label:W.active,icon:null}),(0,U.jsx)(N,{phase:`execution`,label:W.execution,icon:null}),(0,U.jsx)(N,{phase:`result-succeeded`,label:W[`result-succeeded`],icon:null}),(0,U.jsx)(N,{phase:`result-warning`,label:W[`result-warning`],icon:null}),(0,U.jsx)(N,{phase:`result-failed`,label:W[`result-failed`],icon:null}),(0,U.jsx)(N,{phase:`deprecated`,label:W.deprecated,icon:null})]})]})},X={"not-started":`Vacant, Spare`,temporary:`Design, Draft`,"in-review":`PnR, L1 design complete`,pending:`Reserved, Pending, Ordered`,active:`Active, Installed, In-use`,execution:`Testing, Upgrading, Initializing`,"result-succeeded":`Test passed, Provisioning complete`,"result-warning":`Domain-specific warnings`,"result-failed":`Cancelled, Fault, Failed, Disconnected`,deprecated:`Decommissioned, Sacrificed`},Z={render:()=>(0,U.jsx)(f,{direction:`column`,gap:`var(--xs)`,children:(0,U.jsxs)(`table`,{className:H.docsTable,children:[(0,U.jsx)(`thead`,{children:(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`th`,{children:`Phase`}),(0,U.jsx)(`th`,{children:`Badge`}),(0,U.jsx)(`th`,{children:`Icon`}),(0,U.jsx)(`th`,{children:`Example Domain Statuses`})]})}),(0,U.jsxs)(`tbody`,{children:[(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`not-started`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(N,{phase:`not-started`,label:W[`not-started`]})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:O[`not-started`],size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X[`not-started`]})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`temporary`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(N,{phase:`temporary`,label:W.temporary})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:O.temporary,size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X.temporary})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`in-review`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(N,{phase:`in-review`,label:W[`in-review`]})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:O[`in-review`],size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X[`in-review`]})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`pending`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(N,{phase:`pending`,label:W.pending})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:O.pending,size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X.pending})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`active`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(N,{phase:`active`,label:W.active})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:O.active,size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X.active})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`execution`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(N,{phase:`execution`,label:W.execution})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:O.execution,size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X.execution})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`result-succeeded`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(N,{phase:`result-succeeded`,label:W[`result-succeeded`]})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:O[`result-succeeded`],size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X[`result-succeeded`]})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`result-warning`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(N,{phase:`result-warning`,label:W[`result-warning`]})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:O[`result-warning`],size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X[`result-warning`]})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`result-failed`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(N,{phase:`result-failed`,label:W[`result-failed`]})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:O[`result-failed`],size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X[`result-failed`]})]}),(0,U.jsxs)(`tr`,{children:[(0,U.jsx)(`td`,{children:(0,U.jsx)(`code`,{children:`deprecated`})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(N,{phase:`deprecated`,label:W.deprecated})}),(0,U.jsx)(`td`,{children:(0,U.jsx)(a,{icon:O.deprecated,size:`tiny`,filled:!0})}),(0,U.jsx)(`td`,{children:X.deprecated})]})]})]})})},Q={parameters:{layout:`centered`},render:()=>(0,U.jsxs)(f,{direction:`row`,gap:`var(--sm)`,alignItems:`center`,flexWrap:`wrap`,children:[(0,U.jsx)(z,{phase:`active`,label:`lg: medium / md: small`,size:{lg:`medium`,md:`small`}}),(0,U.jsx)(z,{phase:`pending`,label:`lg: small / md: medium`,size:{lg:`small`,md:`medium`}}),(0,U.jsx)(z,{phase:`execution`,label:`static: medium`,size:`medium`})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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