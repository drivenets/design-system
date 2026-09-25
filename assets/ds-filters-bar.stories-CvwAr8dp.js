import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-CjiQ0Gqr.js";import{t as ee}from"./compiler-runtime-qQQXpJgv.js";import{n as r,t as i}from"./use-controlled-ZWS8M5qg.js";var a,o,s;function c(){return(c=e((()=>{a=t(),o=(0,a.createContext)(null),s=()=>{let e=(0,a.useContext)(o);if(!e)throw Error(`DsFiltersBar compound components must be used within DsFiltersBar.Root`);return e}})))()}var l;function u(){return(u=e((()=>{c(),l=()=>(s(),null),l.displayName=`DsFiltersBar.ClearAll`})))()}var d,f,p;function m(){return(m=e((()=>{c(),d=()=>(s(),null),d.displayName=`DsFiltersBar.Pinned`,f=()=>(s(),null),f.displayName=`DsFiltersBar.PinnedGroup`,p=()=>(s(),null),p.displayName=`DsFiltersBar.PinnedToggle`})))()}var h,g;function _(){return(_=e((()=>{c(),h=()=>(s(),null),h.displayName=`DsFiltersBar.SavedFilters`,g=()=>(s(),null),g.displayName=`DsFiltersBar.SaveFilter`})))()}var v;function y(){return(y=e((()=>{c(),v=()=>(s(),null),v.displayName=`DsFiltersBar.Search`})))()}var b;function x(){return(x=e((()=>{c(),b=()=>(s(),null),b.displayName=`DsFiltersBar.Summary`})))()}var S;function C(){return(C=e((()=>{c(),S=()=>(s(),null),S.displayName=`DsFiltersBar.Toolbar`})))()}var w;function T(){return(T=e((()=>{c(),w=()=>(s(),null),w.displayName=`DsFiltersBar.View`})))()}var E;function D(){return(D=e((()=>{c(),E=()=>(s(),null),E.displayName=`DsFiltersBar.ViewSwitch`})))()}var O;function k(){return(k=e((()=>{c(),O=()=>(s(),null),O.displayName=`DsFiltersBar.Builder`})))()}function A(){return(A=e((()=>{k()})))()}var j;function M(){return(M=e((()=>{c(),j=()=>(s(),null),j.displayName=`DsFiltersBar.Conditions`})))()}function N(){return(N=e((()=>{M()})))()}var P;function F(){return(F=e((()=>{c(),P=()=>(s(),null),P.displayName=`DsFiltersBar.Query`})))()}function I(){return(I=e((()=>{F()})))()}function L(){return(L=e((()=>{u(),m(),_(),y(),x(),C(),T(),D(),A(),N(),I()})))()}var R,te;function z(){return(z=e((()=>{R=[`filters`,`builder`,`advanced`],te=Object.freeze({label:`Filters`,expand:`Show filters`,collapse:`Hide filters`}),Object.freeze({resultCount:e=>`${String(e)} results`,activeSavedFilter:`Filter`,emptyLabel:`View`,emptyValue:`All`}),Object.freeze({label:`Search`,placeholder:`Type ‘/’ to search`}),Object.freeze({label:`Filter view`,views:Object.freeze({filters:`Filters`,builder:`Query builder`,advanced:`Advanced query`}),lockedView:`Clear the advanced query to switch views`}),Object.freeze({label:`Clear all`}),Object.freeze({label:`Pinned`})})))()}var B,V,ne,re,ie,ae,oe;function H(){return(H=e((()=>{z(),B=Object.freeze([`filters`,`builder`]),V=Object.freeze([]),ne=e=>e?.trim()?e:null,re=e=>e===null?V:B,ie=(e,t)=>[...e,t],ae=(e,t)=>e.map(e=>e.id===t.id?t:e),oe=(e,t)=>e.filter(e=>e.id!==t)})))()}var se,ce,le,ue,U,de,fe,W,G;function K(){return(K=e((()=>{se=ee(),ce=t(),i(),L(),c(),z(),H(),le=n(),ue=Object.freeze([]),U=Object.freeze([]),de=Object.freeze([]),fe=()=>``,W=e=>{let t=(0,se.c)(43),{fields:n,conditions:ee,defaultConditions:i,query:a,defaultQuery:s,pins:c,defaultPins:l,expanded:u,defaultExpanded:d,view:f,defaultView:p,formatQuery:m,locale:h,children:g,onConditionsChange:_,onQueryChange:v,onPinsChange:y,onExpandedChange:b,onViewChange:x}=e,S=n===void 0?ue:n,C=i===void 0?U:i,w=s===void 0?null:s,T=l===void 0?de:l,E=d!==void 0&&d,D=p===void 0?`filters`:p,O=m===void 0?fe:m,[k,A]=r(ee,_,C),[j,M]=r(a,v,w),[N,P]=r(c,y,T),[F,I]=r(u,b,E),[L,R]=r(f,x,D),z=(0,ce.useId)(),B;t[0]!==k||t[1]!==S||t[2]!==O||t[3]!==j?(B=j??O(k,S),t[0]=k,t[1]=S,t[2]=O,t[3]=j,t[4]=B):B=t[4];let V=j===null&&k.length===0,H;t[5]===j?H=t[6]:(H=re(j),t[5]=j,t[6]=H);let W;t[7]===h?W=t[8]:(W={...te,...h},t[7]=h,t[8]=W);let G,K,q;t[9]!==k||t[10]!==A?(G=e=>A(ie(k,e)),K=e=>A(ae(k,e)),q=e=>A(oe(k,e)),t[9]=k,t[10]=A,t[11]=G,t[12]=K,t[13]=q):(G=t[11],K=t[12],q=t[13]);let J;t[14]===M?J=t[15]:(J=e=>M(ne(e)),t[14]=M,t[15]=J);let Y;t[16]!==A||t[17]!==M?(Y=()=>{A(U),M(null)},t[16]=A,t[17]=M,t[18]=Y):Y=t[18];let X;t[19]!==k||t[20]!==F||t[21]!==S||t[22]!==N||t[23]!==j||t[24]!==A||t[25]!==I||t[26]!==P||t[27]!==R||t[28]!==H||t[29]!==W||t[30]!==G||t[31]!==K||t[32]!==q||t[33]!==J||t[34]!==Y||t[35]!==B||t[36]!==V||t[37]!==z||t[38]!==L?(X={fields:S,conditions:k,query:j,queryText:B,pins:N,isEmpty:V,lockedViews:H,expanded:F,view:L,toolbarId:z,locale:W,setConditions:A,addCondition:G,updateCondition:K,removeCondition:q,setQuery:J,setPins:P,clear:Y,setExpanded:I,setView:R},t[19]=k,t[20]=F,t[21]=S,t[22]=N,t[23]=j,t[24]=A,t[25]=I,t[26]=P,t[27]=R,t[28]=H,t[29]=W,t[30]=G,t[31]=K,t[32]=q,t[33]=J,t[34]=Y,t[35]=B,t[36]=V,t[37]=z,t[38]=L,t[39]=X):X=t[39];let Z;return t[40]!==g||t[41]!==X?(Z=(0,le.jsx)(o.Provider,{value:X,children:g}),t[40]=g,t[41]=X,t[42]=Z):Z=t[42],Z},W.displayName=`DsFiltersBar.Root`,G={Root:W,Summary:b,Toolbar:S,SavedFilters:h,SaveFilter:g,Search:v,ViewSwitch:E,View:w,Conditions:j,Builder:O,Query:P,ClearAll:l,Pinned:d,PinnedGroup:f,PinnedToggle:p}})))()}function q(){return(q=e((()=>{K()})))()}var J,Y,X,Z,Q,$,pe;function me(){return(me=e((()=>{q(),z(),J=n(),{fn:Y}=__STORYBOOK_MODULE_TEST__,X={title:`Components/FiltersBar`,component:G.Root,tags:[`!manifest`],parameters:{layout:`padded`,docs:{description:{component:`
**Work in progress — the API is wired, the parts render nothing yet.**

**Internal component.** Not exported from \`@drivenets/design-system\` while it is being built.

A toolbar above a table or list for narrowing the data with filters, a query builder or an advanced
query, with **Saved filters** and a pinned row of quick toggles.

**One filter document.** \`Root\` owns \`conditions\` and \`query\` (controlled or uncontrolled)
and describes what can be filtered through \`fields\`. Every view reads and writes that same
document, so a condition built in the query builder shows as a chip in the filters view and in the
collapsed summary.

**One source at a time.** While \`query\` is \`null\` the conditions filter the data and the
advanced view shows them through \`formatQuery\`. Once the user edits the query it becomes the only
source, the conditions are ignored, and the filters and builder views lock. Clearing hands control
back to the conditions.

**The bar does not own the query language.** It never parses \`query\`; \`formatQuery\` renders
conditions in the consumer's syntax.

**Pins are a user preference,** not part of the document: loading a saved filter or clearing leaves
them alone.

**Collapsed shows a summary, expanded shows the toolbar.** \`Summary\` renders while collapsed,
\`Toolbar\` while expanded; \`Pinned\` renders in both.
                `}}},argTypes:{expanded:{control:`boolean`},defaultExpanded:{control:`boolean`},view:{control:`select`,options:R},defaultView:{control:`select`,options:R},children:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}},args:{onConditionsChange:Y(),onQueryChange:Y(),onPinsChange:Y(),onExpandedChange:Y(),onViewChange:Y()}},Z={args:{defaultExpanded:!0,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`pending`,label:`Pending`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`>`,label:`greater than`,symbol:`>`},{value:`<`,label:`less than`,symbol:`<`}]},{type:`date`,id:`lastRun`,label:`Last run`,operators:[{value:`=`,label:`is`,symbol:`=`},{value:`between`,label:`between`}],presets:[{value:`today`,label:`Today`},{value:`last7Days`,label:`Last 7 days`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`name`,label:`Name`,operators:[{value:`~`,label:`contains`},{value:`^`,label:`starts with`}]},{type:`text`,id:`vendor`,label:`Vendor`,operators:[{value:`=`,label:`equals`}]}]}],defaultConditions:[{kind:`search`,id:`c1`,text:`AAA`},{kind:`field`,id:`c2`,field:`status`,operator:`!=`,value:[`active`]},{kind:`field`,id:`c3`,field:`input`,subfield:`name`,operator:`~`,value:`WF456`},{kind:`field`,id:`c4`,field:`lastRun`,operator:`=`,value:`last7Days`}],defaultPins:[{field:`status`,value:`active`},{field:`status`,value:`pending`}]},render:e=>(0,J.jsxs)(G.Root,{...e,children:[(0,J.jsx)(G.Summary,{count:18}),(0,J.jsxs)(G.Toolbar,{children:[(0,J.jsx)(G.SavedFilters,{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`,count:1}],value:null,onValueChange:Y(),onClear:Y(),onRename:Y(),onDelete:Y()}),(0,J.jsx)(G.Search,{}),(0,J.jsx)(G.ViewSwitch,{}),(0,J.jsx)(G.View,{value:`filters`,children:(0,J.jsx)(G.Conditions,{})}),(0,J.jsx)(G.View,{value:`builder`,children:(0,J.jsx)(G.Builder,{suggestedFields:[`input`,`status`]})}),(0,J.jsx)(G.View,{value:`advanced`,children:(0,J.jsx)(G.Query,{})}),(0,J.jsx)(G.SaveFilter,{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`,count:1}],value:null,onUpdate:Y(),onSaveAs:Y()}),(0,J.jsx)(G.ClearAll,{})]}),(0,J.jsx)(G.Pinned,{children:(0,J.jsxs)(G.PinnedGroup,{label:`Status`,children:[(0,J.jsx)(G.PinnedToggle,{label:`Active`,count:10,active:!0}),(0,J.jsx)(G.PinnedToggle,{label:`Pending`,count:0,active:!1})]})})]})},Q={args:{defaultExpanded:!0,defaultView:`advanced`,defaultQuery:`status = "Active" OR trigger = "Scheduled"`},render:e=>(0,J.jsx)(G.Root,{...e,children:(0,J.jsxs)(G.Toolbar,{children:[(0,J.jsx)(G.ViewSwitch,{}),(0,J.jsx)(G.View,{value:`advanced`,children:(0,J.jsx)(G.Query,{})})]})})},$={args:{defaultExpanded:!0,locale:{label:`Refine results`,expand:`Show refinements`,collapse:`Hide refinements`}},render:e=>(0,J.jsx)(G.Root,{...e,children:(0,J.jsxs)(G.Toolbar,{children:[(0,J.jsx)(G.Search,{locale:{label:`Find`,placeholder:`Press ‘/’ to find`}}),(0,J.jsx)(G.ViewSwitch,{locale:{views:{filters:`Quick filters`,builder:`Guided query`,advanced:`Query editor`}}}),(0,J.jsx)(G.ClearAll,{locale:{label:`Reset`}})]})})},pe=[`Default`,`LockedViews`,`Localized`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    fields: [{
      type: 'enum',
      id: 'status',
      label: 'Status',
      operators: [{
        value: '=',
        label: 'equals',
        symbol: '='
      }, {
        value: '!=',
        label: 'not equals',
        symbol: '≠'
      }],
      options: [{
        value: 'active',
        label: 'Active'
      }, {
        value: 'deprecated',
        label: 'Deprecated'
      }, {
        value: 'pending',
        label: 'Pending'
      }]
    }, {
      type: 'number',
      id: 'parents',
      label: 'Parents',
      operators: [{
        value: '>',
        label: 'greater than',
        symbol: '>'
      }, {
        value: '<',
        label: 'less than',
        symbol: '<'
      }]
    }, {
      type: 'date',
      id: 'lastRun',
      label: 'Last run',
      operators: [{
        value: '=',
        label: 'is',
        symbol: '='
      }, {
        value: 'between',
        label: 'between'
      }],
      presets: [{
        value: 'today',
        label: 'Today'
      }, {
        value: 'last7Days',
        label: 'Last 7 days'
      }]
    }, {
      type: 'compound',
      id: 'input',
      label: 'Input',
      subfields: [{
        type: 'text',
        id: 'name',
        label: 'Name',
        operators: [{
          value: '~',
          label: 'contains'
        }, {
          value: '^',
          label: 'starts with'
        }]
      }, {
        type: 'text',
        id: 'vendor',
        label: 'Vendor',
        operators: [{
          value: '=',
          label: 'equals'
        }]
      }]
    }],
    defaultConditions: [{
      kind: 'search',
      id: 'c1',
      text: 'AAA'
    }, {
      kind: 'field',
      id: 'c2',
      field: 'status',
      operator: '!=',
      value: ['active']
    }, {
      kind: 'field',
      id: 'c3',
      field: 'input',
      subfield: 'name',
      operator: '~',
      value: 'WF456'
    }, {
      kind: 'field',
      id: 'c4',
      field: 'lastRun',
      operator: '=',
      value: 'last7Days'
    }],
    defaultPins: [{
      field: 'status',
      value: 'active'
    }, {
      field: 'status',
      value: 'pending'
    }]
  },
  render: args => <DsFiltersBar.Root {...args}>
            <DsFiltersBar.Summary count={18} />

            <DsFiltersBar.Toolbar>
                <DsFiltersBar.SavedFilters items={[{
        id: '1',
        name: 'MyFilter_1',
        count: 2
      }, {
        id: '2',
        name: 'MyFilter_2',
        count: 1
      }]} value={null} onValueChange={fn()} onClear={fn()} onRename={fn()} onDelete={fn()} />
                <DsFiltersBar.Search />
                <DsFiltersBar.ViewSwitch />
                <DsFiltersBar.View value="filters">
                    <DsFiltersBar.Conditions />
                </DsFiltersBar.View>
                <DsFiltersBar.View value="builder">
                    <DsFiltersBar.Builder suggestedFields={['input', 'status']} />
                </DsFiltersBar.View>
                <DsFiltersBar.View value="advanced">
                    <DsFiltersBar.Query />
                </DsFiltersBar.View>
                <DsFiltersBar.SaveFilter items={[{
        id: '1',
        name: 'MyFilter_1',
        count: 2
      }, {
        id: '2',
        name: 'MyFilter_2',
        count: 1
      }]} value={null} onUpdate={fn()} onSaveAs={fn()} />
                <DsFiltersBar.ClearAll />
            </DsFiltersBar.Toolbar>

            <DsFiltersBar.Pinned>
                <DsFiltersBar.PinnedGroup label="Status">
                    <DsFiltersBar.PinnedToggle label="Active" count={10} active />
                    <DsFiltersBar.PinnedToggle label="Pending" count={0} active={false} />
                </DsFiltersBar.PinnedGroup>
            </DsFiltersBar.Pinned>
        </DsFiltersBar.Root>
}`,...Z.parameters?.docs?.source},description:{story:"The canonical layout. `fields` describes what can be filtered; `defaultConditions` seeds the\ndocument with a search, an enum, a compound-field and a date-preset condition — one of each shape.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    defaultView: 'advanced',
    defaultQuery: 'status = "Active" OR trigger = "Scheduled"'
  },
  render: args => <DsFiltersBar.Root {...args}>
            <DsFiltersBar.Toolbar>
                <DsFiltersBar.ViewSwitch />
                <DsFiltersBar.View value="advanced">
                    <DsFiltersBar.Query />
                </DsFiltersBar.View>
            </DsFiltersBar.Toolbar>
        </DsFiltersBar.Root>
}`,...Q.parameters?.docs?.source},description:{story:`An edited advanced query is the only source: the conditions are ignored and the filters and
builder views lock until the query is cleared.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    locale: {
      label: 'Refine results',
      expand: 'Show refinements',
      collapse: 'Hide refinements'
    }
  },
  render: args => <DsFiltersBar.Root {...args}>
            <DsFiltersBar.Toolbar>
                <DsFiltersBar.Search locale={{
        label: 'Find',
        placeholder: 'Press ‘/’ to find'
      }} />
                <DsFiltersBar.ViewSwitch locale={{
        views: {
          filters: 'Quick filters',
          builder: 'Guided query',
          advanced: 'Query editor'
        }
      }} />
                <DsFiltersBar.ClearAll locale={{
        label: 'Reset'
      }} />
            </DsFiltersBar.Toolbar>
        </DsFiltersBar.Root>
}`,...$.parameters?.docs?.source},description:{story:"`Root` takes its own strings through `locale`; each part takes its own `locale` too.",...$.parameters?.docs?.description}}}})))()}me();export{Z as Default,$ as Localized,Q as LockedViews,pe as __namedExportsOrder,X as default};