import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r}from"./iframe-DJk3Qs0k.js";import{n as i,t as a}from"./classnames-BngcLiyu.js";import{s as o,t as s}from"./ds-map-pin-B6XvGFYi.js";var c,l;function u(){return(u=t((()=>{c=[`general`,`iof`,`loop`,`tie`],l=[`solid`,`dotted`,`dashed`]})))()}var d,f;function p(){return(p=t((()=>{d=({x:e,y:t})=>Number.isFinite(e)&&Number.isFinite(t),f=(e,t,n)=>{if(!d(e)||!d(t)||!Number.isFinite(n))return null;let r=`M${String(e.x)} ${String(e.y)}`,i=`${String(t.x)} ${String(t.y)}`;if(n===0)return`${r}L${i}`;let a=t.x-e.x,o=t.y-e.y,s=(e.x+t.x)/2+o*n,c=(e.y+t.y)/2-a*n;return`${r}Q${String(s)} ${String(c)} ${i}`}})))()}var m,h,g,_,v,y,b;function x(){return(x=t((()=>{m=`_root_1v6lu_1`,h=`_line_1v6lu_20`,g=`_hitArea_1v6lu_39`,_=`_focusRing_1v6lu_40`,v=`_focusGap_1v6lu_41`,y=`_cable_1v6lu_57`,b={root:m,line:h,hitArea:g,focusRing:_,focusGap:v,cable:y}})))()}var S,C,w,T;function E(){return(E=t((()=>{S=i(),C=e(a(),1),p(),x(),w=r(),T=e=>{let t=(0,S.c)(23),{ref:n,from:r,to:i,curvature:a,path:o,type:s,line:c,selected:l,"aria-label":u,className:d,style:p,onClick:m}=e,h=a===void 0?0:a,g=s===void 0?`general`:s,_=c===void 0?`solid`:c,v=l!==void 0&&l,y;t[0]!==h||t[1]!==o||t[2]!==r||t[3]!==i?(y=o??f(r,i,h),t[0]=h,t[1]=o,t[2]=r,t[3]=i,t[4]=y):y=t[4];let x=y;if(!x)return null;let T;t[5]===m?T=t[6]:(T=e=>{e.repeat||e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),m?.(e))},t[5]=m,t[6]=T);let E=T,D;t[7]===d?D=t[8]:(D=(0,C.default)(b.root,d),t[7]=d,t[8]=D);let O=v||void 0,k;t[9]!==u||t[10]!==E||t[11]!==m||t[12]!==x||t[13]!==v?(k=m?(0,w.jsxs)(`g`,{className:b.cable,role:`button`,tabIndex:0,"aria-label":u,"aria-current":v?!0:void 0,onClick:m,onKeyDown:E,children:[(0,w.jsx)(`path`,{className:b.hitArea,d:x}),(0,w.jsx)(`path`,{className:b.focusRing,d:x}),(0,w.jsx)(`path`,{className:b.focusGap,d:x}),(0,w.jsx)(`path`,{className:b.line,d:x})]}):(0,w.jsx)(`g`,{role:`img`,"aria-label":u,"aria-current":v?!0:void 0,children:(0,w.jsx)(`path`,{className:b.line,d:x})}),t[9]=u,t[10]=E,t[11]=m,t[12]=x,t[13]=v,t[14]=k):k=t[14];let A;return t[15]!==_||t[16]!==n||t[17]!==p||t[18]!==D||t[19]!==O||t[20]!==k||t[21]!==g?(A=(0,w.jsx)(`svg`,{ref:n,className:D,style:p,"data-type":g,"data-line":_,"data-selected":O,children:k}),t[15]=_,t[16]=n,t[17]=p,t[18]=D,t[19]=O,t[20]=k,t[21]=g,t[22]=A):A=t[22],A},T.displayName=`DsCable`})))()}function D(){return(D=t((()=>{E()})))()}var O,k,A,j,M;function N(){return(N=t((()=>{O=`_stage_1pqeg_1`,k=`_map_1pqeg_7`,A=`_pin_1pqeg_15`,j=`_matrix_1pqeg_20`,M={stage:O,map:k,pin:A,matrix:j}})))()}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{P=n(),s(),u(),D(),N(),F=r(),I={title:`Components/Cable`,component:T,parameters:{layout:`centered`},decorators:[e=>(0,F.jsx)(`div`,{className:M.stage,children:(0,F.jsx)(e,{})})],argTypes:{from:{control:`object`},to:{control:`object`},curvature:{control:{type:`number`,step:.05}},path:{control:`text`},type:{control:`select`,options:c},line:{control:`select`,options:l},selected:{control:`boolean`},"aria-label":{control:`text`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},onClick:{table:{disable:!0}}}},L={args:{from:{x:40,y:60},to:{x:320,y:60},"aria-label":`Cable, Haifa North to Haifa South`}},R={args:{from:{x:40,y:60},to:{x:320,y:60},type:`iof`,"aria-label":`IOF cable, Haifa North to Haifa South`}},z={args:{from:{x:40,y:60},to:{x:320,y:60},type:`tie`,line:`dotted`,"aria-label":`Tie cable, Haifa North to Haifa South, planned`}},B={args:{from:{x:40,y:60},to:{x:320,y:60},type:`loop`,line:`dashed`,"aria-label":`Loop cable, Haifa North to Haifa South, designed`}},V={args:{from:{x:40,y:100},to:{x:320,y:100},curvature:.25,type:`iof`,"aria-label":`IOF cable, Haifa North to Haifa South`}},H={args:{path:`M40 100C120 100 120 20 180 20S240 100 320 100`,type:`tie`,"aria-label":`Tie cable, Haifa North to Haifa South`}},U={args:{from:{x:40,y:60},to:{x:320,y:60},selected:!0,"aria-label":`Cable, Haifa North to Haifa South`}},W={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,P.useState)(!1);return(0,F.jsx)(T,{from:{x:40,y:60},to:{x:320,y:60},type:`iof`,selected:e,"aria-label":`IOF cable, Haifa North to Haifa South`,onClick:()=>t(!e)})}},G={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,P.useState)(`iof`);return(0,F.jsxs)(`div`,{className:M.map,children:[(0,F.jsx)(T,{from:{x:80,y:200},to:{x:400,y:120},type:`iof`,selected:e===`iof`,"aria-label":`IOF cable, Haifa North to Haifa South`,onClick:()=>t(`iof`)}),(0,F.jsx)(T,{from:{x:80,y:200},to:{x:400,y:120},curvature:.2,type:`tie`,line:`dotted`,selected:e===`tie`,"aria-label":`Tie cable, Haifa North to Haifa South, planned`,onClick:()=>t(`tie`)}),(0,F.jsx)(T,{from:{x:80,y:200},to:{x:400,y:120},curvature:-.2,type:`loop`,line:`dashed`,selected:e===`loop`,"aria-label":`Loop cable, Haifa North to Haifa South, designed`,onClick:()=>t(`loop`)}),(0,F.jsx)(o,{className:M.pin,style:{left:80,top:200},label:`T1`,"aria-label":`Central office T1, Haifa North`}),(0,F.jsx)(o,{className:M.pin,style:{left:400,top:120},label:`T2`,"aria-label":`Central office T2, Haifa South`})]})}},K=112,q=32,J=64,Y=20,X=[{name:`default`,selected:!1},{name:`selected`,selected:!0}],Z={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,F.jsx)(`div`,{className:M.matrix,children:l.flatMap((e,t)=>c.flatMap((n,r)=>X.flatMap((i,a)=>[!1,!0].map((o,s)=>{let l=Y+(a*2+s)*K,u=Y+(t*c.length+r)*q,d=`${n} ${e} ${i.name}${o?` interactive`:``}`;return(0,F.jsx)(T,{from:{x:l,y:u},to:{x:l+J,y:u},type:n,line:e,selected:i.selected,"aria-label":d,onClick:o?()=>void 0:void 0},d)}))))})},Q=[`Default`,`Type`,`Dotted`,`Dashed`,`Curved`,`CustomPath`,`Selected`,`Interactive`,`BetweenPins`,`AllVariants`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    from: {
      x: 40,
      y: 60
    },
    to: {
      x: 320,
      y: 60
    },
    'aria-label': 'Cable, Haifa North to Haifa South'
  }
}`,...L.parameters?.docs?.source},description:{story:"A cable between two points of its positioned parent. Without `onClick` it is a static image.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    from: {
      x: 40,
      y: 60
    },
    to: {
      x: 320,
      y: 60
    },
    type: 'iof',
    'aria-label': 'IOF cable, Haifa North to Haifa South'
  }
}`,...R.parameters?.docs?.source},description:{story:`Each kind of cable has its own color; keep one type per kind across the map.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    from: {
      x: 40,
      y: 60
    },
    to: {
      x: 320,
      y: 60
    },
    type: 'tie',
    line: 'dotted',
    'aria-label': 'Tie cable, Haifa North to Haifa South, planned'
  }
}`,...z.parameters?.docs?.source},description:{story:`A dotted line marks a secondary status, e.g. a planned cable in Network View.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    from: {
      x: 40,
      y: 60
    },
    to: {
      x: 320,
      y: 60
    },
    type: 'loop',
    line: 'dashed',
    'aria-label': 'Loop cable, Haifa North to Haifa South, designed'
  }
}`,...B.parameters?.docs?.source},description:{story:`A dashed line marks another status, e.g. a cable still being designed in Network View.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    from: {
      x: 40,
      y: 100
    },
    to: {
      x: 320,
      y: 100
    },
    curvature: 0.25,
    type: 'iof',
    'aria-label': 'IOF cable, Haifa North to Haifa South'
  }
}`,...V.parameters?.docs?.source},description:{story:`Bend a cable to route it around other content, or to tell apart cables that share both ends.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    path: 'M40 100C120 100 120 20 180 20S240 100 320 100',
    type: 'tie',
    'aria-label': 'Tie cable, Haifa North to Haifa South'
  }
}`,...H.parameters?.docs?.source},description:{story:`Pass path data when the route is more than a single bend, e.g. one projected from map coordinates.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    from: {
      x: 40,
      y: 60
    },
    to: {
      x: 320,
      y: 60
    },
    selected: true,
    'aria-label': 'Cable, Haifa North to Haifa South'
  }
}`,...U.parameters?.docs?.source},description:{story:`The selected cable is heavier and stays above unselected cables.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [selected, setSelected] = useState(false);
    return <DsCable from={{
      x: 40,
      y: 60
    }} to={{
      x: 320,
      y: 60
    }} type="iof" selected={selected} aria-label="IOF cable, Haifa North to Haifa South" onClick={() => setSelected(!selected)} />;
  }
}`,...W.parameters?.docs?.source},description:{story:"With `onClick` the cable reacts to hover, takes keyboard focus and is activated with Enter or Space.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [selectedId, setSelectedId] = useState<string | null>('iof');
    return <div className={styles.map}>
                <DsCable from={{
        x: 80,
        y: 200
      }} to={{
        x: 400,
        y: 120
      }} type="iof" selected={selectedId === 'iof'} aria-label="IOF cable, Haifa North to Haifa South" onClick={() => setSelectedId('iof')} />
                <DsCable from={{
        x: 80,
        y: 200
      }} to={{
        x: 400,
        y: 120
      }} curvature={0.2} type="tie" line="dotted" selected={selectedId === 'tie'} aria-label="Tie cable, Haifa North to Haifa South, planned" onClick={() => setSelectedId('tie')} />
                <DsCable from={{
        x: 80,
        y: 200
      }} to={{
        x: 400,
        y: 120
      }} curvature={-0.2} type="loop" line="dashed" selected={selectedId === 'loop'} aria-label="Loop cable, Haifa North to Haifa South, designed" onClick={() => setSelectedId('loop')} />
                <DsMapPin className={styles.pin} style={{
        left: 80,
        top: 200
      }} label="T1" aria-label="Central office T1, Haifa North" />
                <DsMapPin className={styles.pin} style={{
        left: 400,
        top: 120
      }} label="T2" aria-label="Central office T2, Haifa South" />
            </div>;
  }
}`,...G.parameters?.docs?.source},description:{story:`Cables and pins share one positioned parent, so cable ends and pin tips use the same coordinates.`,...G.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <div className={styles.matrix}>
            {cableLines.flatMap((line, lineIndex) => cableTypes.flatMap((type, typeIndex) => matrixStates.flatMap((state, stateIndex) => [false, true].map((interactive, interactiveIndex) => {
      const x = MATRIX_PADDING + (stateIndex * 2 + interactiveIndex) * MATRIX_COLUMN_WIDTH;
      const y = MATRIX_PADDING + (lineIndex * cableTypes.length + typeIndex) * MATRIX_ROW_HEIGHT;
      const name = \`\${type} \${line} \${state.name}\${interactive ? ' interactive' : ''}\`;
      return <DsCable key={name} from={{
        x,
        y
      }} to={{
        x: x + MATRIX_CABLE_LENGTH,
        y
      }} type={type} line={line} selected={state.selected} aria-label={name} onClick={interactive ? () => undefined : undefined} />;
    }))))}
        </div>
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as AllVariants,G as BetweenPins,V as Curved,H as CustomPath,B as Dashed,L as Default,z as Dotted,W as Interactive,U as Selected,R as Type,Q as __namedExportsOrder,I as default};