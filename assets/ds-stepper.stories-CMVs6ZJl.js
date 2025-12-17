import{j as i}from"./jsx-runtime-u17CrQMm.js";import{r as f}from"./iframe-scWdy9I7.js";import{c as C}from"./index-BfwItnWH.js";import{v as M,E as g,D as q,Z as O,_ as G,$ as W,y as H,z as X,V as K}from"./index-1nE72n8G.js";import{D as U}from"./ds-icon-CDgp51PA.js";import{D as Y}from"./ds-button-CJ5VENl5.js";import{D as Z}from"./ds-panel-BT9EaLdX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbvqvABB.js";import"./index-DlfcXfSu.js";import"./ds-button-legacy-BfRNxEOb.js";import"./ds-button-new-UyikxupT.js";import"./index-YaTj5zmu.js";import"./index-BdJcV4Bk.js";import"./index-BIqsn3IP.js";var J=q("steps").parts("root","list","item","trigger","indicator","separator","content","nextTrigger","prevTrigger","progress"),m=J.build(),Q=t=>t.ids?.root??`steps:${t.id}`,tt=t=>t.ids?.list??`steps:${t.id}:list`,B=(t,e)=>t.ids?.triggerId?.(e)??`steps:${t.id}:trigger:${e}`,et=(t,e)=>t.ids?.contentId?.(e)??`steps:${t.id}:content:${e}`;function nt(t,e){const{context:n,send:a,computed:c,prop:s,scope:p}=t,l=n.get("step"),u=s("count"),h=c("percent"),v=c("hasNextStep"),P=c("hasPrevStep"),x=r=>({triggerId:B(p,r.index),contentId:et(p,r.index),current:r.index===l,completed:r.index<l,incomplete:r.index>l,index:r.index,first:r.index===0,last:r.index===u-1}),E=()=>{a({type:"STEP.NEXT",src:"next.trigger.click"})},k=()=>{a({type:"STEP.PREV",src:"prev.trigger.click"})},L=()=>{a({type:"STEP.RESET",src:"reset.trigger.click"})},z=r=>{a({type:"STEP.SET",value:r,src:"api.setValue"})};return{value:l,count:u,percent:h,hasNextStep:v,hasPrevStep:P,isCompleted:c("completed"),goToNextStep:E,goToPrevStep:k,resetStep:L,getItemState:x,setStep:z,getRootProps(){return e.element({...m.root.attrs,id:Q(p),dir:s("dir"),"data-orientation":s("orientation"),style:{"--percent":`${h}%`}})},getListProps(){const o=O(u).map((I,$)=>B(p,$));return e.element({...m.list.attrs,dir:s("dir"),id:tt(p),role:"tablist","aria-owns":o.join(" "),"aria-orientation":s("orientation"),"data-orientation":s("orientation")})},getItemProps(r){const o=x(r);return e.element({...m.item.attrs,dir:s("dir"),"aria-current":o.current?"step":void 0,"data-orientation":s("orientation")})},getTriggerProps(r){const o=x(r);return e.button({...m.trigger.attrs,id:o.triggerId,role:"tab",dir:s("dir"),tabIndex:!s("linear")||o.current?0:-1,"aria-selected":o.current,"aria-controls":o.contentId,"data-state":o.current?"open":"closed","data-orientation":s("orientation"),"data-complete":g(o.completed),"data-current":g(o.current),"data-incomplete":g(o.incomplete),onClick(I){I.defaultPrevented||s("linear")||a({type:"STEP.SET",value:r.index,src:"trigger.click"})}})},getContentProps(r){const o=x(r);return e.element({...m.content.attrs,dir:s("dir"),id:o.contentId,role:"tabpanel",tabIndex:0,hidden:!o.current,"data-state":o.current?"open":"closed","data-orientation":s("orientation"),"aria-labelledby":o.triggerId})},getIndicatorProps(r){const o=x(r);return e.element({...m.indicator.attrs,dir:s("dir"),"aria-hidden":!0,"data-complete":g(o.completed),"data-current":g(o.current),"data-incomplete":g(o.incomplete)})},getSeparatorProps(r){const o=x(r);return e.element({...m.separator.attrs,dir:s("dir"),"data-orientation":s("orientation"),"data-complete":g(o.completed),"data-current":g(o.current),"data-incomplete":g(o.incomplete)})},getNextTriggerProps(){return e.button({...m.nextTrigger.attrs,dir:s("dir"),type:"button",disabled:!v,onClick(r){r.defaultPrevented||E()}})},getPrevTriggerProps(){return e.button({dir:s("dir"),...m.prevTrigger.attrs,type:"button",disabled:!P,onClick(r){r.defaultPrevented||k()}})},getProgressProps(){return e.element({dir:s("dir"),...m.progress.attrs,role:"progressbar","aria-valuenow":h,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":`${h}% complete`,"data-complete":g(h===100)})}}}var st=M({props({props:t}){return{defaultStep:0,count:1,linear:!1,orientation:"horizontal",...t}},context({prop:t,bindable:e}){return{step:e(()=>({defaultValue:t("defaultStep"),value:t("step"),onChange(n){t("onStepChange")?.({step:n}),n==t("count")&&t("onStepComplete")?.()}}))}},computed:{percent:G(({context:t,prop:e})=>[t.get("step"),e("count")],([t,e])=>t/e*100),hasNextStep:({context:t,prop:e})=>t.get("step")<e("count"),hasPrevStep:({context:t})=>t.get("step")>0,completed:({context:t,prop:e})=>t.get("step")===e("count")},initialState(){return"idle"},entry:["validateStep"],states:{idle:{on:{"STEP.SET":{actions:["setStep"]},"STEP.NEXT":{actions:["goToNextStep"]},"STEP.PREV":{actions:["goToPrevStep"]},"STEP.RESET":{actions:["resetStep"]}}}},implementations:{actions:{goToNextStep({context:t,prop:e}){const n=Math.min(t.get("step")+1,e("count"));t.set("step",n)},goToPrevStep({context:t}){const e=Math.max(t.get("step")-1,0);t.set("step",e)},resetStep({context:t}){t.set("step",0)},setStep({context:t,event:e}){t.set("step",e.value)},validateStep({context:t,prop:e}){it(e("count"),t.get("step"))}}}}),it=(t,e)=>{if(!W(e,0,t))throw new RangeError(`[zag-js/steps] step index ${e} is out of bounds`)};H()(["count","dir","getRootNode","id","ids","linear","onStepChange","onStepComplete","orientation","step","defaultStep"]);const at="_step_1roiz_1",rt="_root_1roiz_10",ot="_variantSingle_1roiz_10",ct="_indicatorContainer_1roiz_23",pt="_indicator_1roiz_23",lt="_separator_1roiz_49",dt="_stepContent_1roiz_64",ut="_stepContentSingle_1roiz_69",gt="_stepLabel_1roiz_73",mt="_stepDescription_1roiz_83",St="_stepActions_1roiz_101",d={step:at,root:rt,variantSingle:ot,indicatorContainer:ct,indicator:pt,separator:lt,stepContent:dt,stepContentSingle:ut,stepLabel:gt,stepDescription:mt,stepActions:St};function xt({count:t,activeStep:e,onStepChange:n,onComplete:a}){const c=X(st,{id:f.useId(),count:t,step:e,onStepChange:n,onStepComplete:a});return nt(c,K)}const A=f.createContext(null);function j(){const t=f.useContext(A);if(!t)throw new Error("useStepper must be used within a DsStepper");return t}function y({count:t,variant:e,activeStep:n,onStepChange:a,onComplete:c,children:s}){const p=xt({count:t,activeStep:n,onStepChange:a,onComplete:c});return i.jsx(A.Provider,{value:{stepsApi:p,variant:e},children:i.jsx("div",{...p.getRootProps(),className:C(d.root,{[d.variantSingle]:e==="single"}),children:s})})}y.__docgenInfo={description:"",methods:[],displayName:"DsStepper"};function N({index:t,children:e,className:n}){const a=j(),{completed:c,current:s,last:p}=a.stepsApi.getItemState({index:t}),l=a.variant==="single",u=p&&a.stepsApi.value===t+1;if(l&&!s&&!u)return null;const v=c&&!l,P=v?"button":"div",x=v?{onClick:()=>{a.stepsApi.setStep(t)}}:{};return i.jsxs(P,{...a.stepsApi.getItemProps({index:t}),"data-current":s?"":void 0,"data-complete":c?"":void 0,className:C(d.step,n),...x,children:[i.jsxs("div",{...a.stepsApi.getIndicatorProps({index:t}),className:d.indicatorContainer,children:[c?i.jsx(U,{icon:"check",className:d.indicator}):i.jsx("span",{className:d.indicator,children:t+1}),i.jsx("div",{...a.stepsApi.getSeparatorProps({index:t}),className:d.separator})]}),e]})}N.__docgenInfo={description:"",methods:[],displayName:"DsStep"};function F({children:t}){return i.jsx("span",{className:d.stepLabel,children:t})}F.__docgenInfo={description:"",methods:[],displayName:"DsStepLabel"};function V({children:t}){return i.jsx("p",{className:d.stepDescription,children:t})}V.__docgenInfo={description:"",methods:[],displayName:"DsStepDescription"};function T({index:t,label:e,description:n,actions:a}){const{variant:c,stepsApi:s}=j(),{current:p}=s.getItemState({index:t});return i.jsxs("div",{className:C(d.stepContent,{[d.stepContentSingle]:c==="single"}),children:[i.jsx(F,{children:e}),c!=="single"&&n&&i.jsx(V,{children:n}),a&&p&&i.jsx("div",{className:d.stepActions,children:a})]})}T.__docgenInfo={description:"",methods:[],displayName:"DsStepContent",props:{index:{required:!0,tsType:{name:"number"},description:""},label:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}}};function b({children:t}){const e=j();return i.jsx(Y,{...e.stepsApi.getNextTriggerProps(),size:"small",children:t})}b.__docgenInfo={description:"",methods:[],displayName:"DsNextStepButton"};const{expect:ht,userEvent:R}=__STORYBOOK_MODULE_TEST__,Bt={title:"Design System/Stepper",component:y,parameters:{layout:"centered"},tags:["autodocs"]},S=[{label:"Project details",description:"The swift red fox leaps over the sleepy hound"},{label:"Select market",description:"The swift red fox leaps over the sleepy hound"},{label:"Design policy",description:"The swift red fox leaps over the sleepy hound"}],D={render:function(){return i.jsx("div",{style:{width:300},children:i.jsx(y,{count:S.length,onComplete:()=>alert("Everything completed!"),children:S.map((e,n)=>i.jsx(N,{index:n,children:i.jsx(T,{index:n,label:e.label,description:e.description,actions:i.jsx(b,{children:n===S.length-1?"Finish":"Next"})})},n))})})}},_={render:function(){return i.jsx("div",{style:{width:300},children:i.jsx(y,{count:S.length,onComplete:()=>alert("Everything completed!"),children:S.map((e,n)=>i.jsx(N,{index:n,children:i.jsx(T,{index:n,label:e.label,actions:i.jsx(b,{children:n===S.length-1?"Finish":"Next"})})},n))})})}},w={render:function(){const[e,n]=f.useState(0),[a,c]=f.useState("docked"),s=a==="floating",p=()=>{c(s?"docked":"floating")};return i.jsx(Z,{open:!0,variant:a,disablePadding:s,slotProps:{collapseButton:{onClick:p,collapsed:s}},children:i.jsx(y,{count:S.length,activeStep:e,onStepChange:({step:l})=>n(l),variant:s?"single":void 0,children:S.map((l,u)=>i.jsx(N,{index:u,children:i.jsx(T,{index:u,label:l.label,description:l.description,actions:i.jsx(b,{children:u===S.length-1?"Finish":"Next"})})},u))})})},play:async({canvas:t,step:e})=>{function n(c){const s=t.getByRole("button",{name:new RegExp(c,"i")});return R.click(s)}const a=async()=>{await R.click(t.getByLabelText("Toggle panel"))};await e("Iterate steps - Docked",async()=>{await n("Next"),await n("Next"),await n("Finish")}),await e("Go to first step",async()=>{await n("Project details")}),await e("Minimize panel",async()=>{await a()}),await ht(t.queryByText(/The swift red fox/)).not.toBeInTheDocument(),await e("Iterate steps - Floating",async()=>{await n("Next"),await n("Next"),await n("Finish")}),await e("Maximize panel",async()=>{await a()}),await e("Go to first step",async()=>{await n("Project details")})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      width: 300
    }}>
                <DsStepper count={steps.length} onComplete={() => alert('Everything completed!')}>
                    {steps.map((step, index) => <DsStep index={index} key={index}>
                            <DsStepContent index={index} label={step.label} description={step.description} actions={<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>} />
                        </DsStep>)}
                </DsStepper>
            </div>;
  }
}`,...D.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div style={{
      width: 300
    }}>
                <DsStepper count={steps.length} onComplete={() => alert('Everything completed!')}>
                    {steps.map((step, index) => <DsStep index={index} key={index}>
                            <DsStepContent index={index} label={step.label} actions={<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>} />
                        </DsStep>)}
                </DsStepper>
            </div>;
  }
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [activeStep, setActiveStep] = useState(0);
    const [panelVariant, setPanelVariant] = useState<DsPanelVariant>('docked');
    const isFloating = panelVariant === 'floating';
    const togglePanelVariant = () => {
      setPanelVariant(isFloating ? 'docked' : 'floating');
    };
    return <DsPanel open variant={panelVariant} disablePadding={isFloating} slotProps={{
      collapseButton: {
        onClick: togglePanelVariant,
        collapsed: isFloating
      }
    }}>
                <DsStepper count={steps.length} activeStep={activeStep} onStepChange={({
        step
      }) => setActiveStep(step)} variant={isFloating ? 'single' : undefined}>
                    {steps.map((step, index) => <DsStep index={index} key={index}>
                            <DsStepContent index={index} label={step.label} description={step.description} actions={<DsNextStepButton>{index === steps.length - 1 ? 'Finish' : 'Next'}</DsNextStepButton>} />
                        </DsStep>)}
                </DsStepper>
            </DsPanel>;
  },
  play: async ({
    canvas,
    step
  }) => {
    function click(name: string) {
      const nextButton = canvas.getByRole('button', {
        name: new RegExp(name, 'i')
      });
      return userEvent.click(nextButton);
    }
    const togglePanel = async () => {
      await userEvent.click(canvas.getByLabelText('Toggle panel'));
    };
    await step('Iterate steps - Docked', async () => {
      await click('Next');
      await click('Next');
      await click('Finish');
    });
    await step('Go to first step', async () => {
      await click('Project details');
    });
    await step('Minimize panel', async () => {
      await togglePanel();
    });
    await expect(canvas.queryByText(/The swift red fox/)).not.toBeInTheDocument();
    await step('Iterate steps - Floating', async () => {
      await click('Next');
      await click('Next');
      await click('Finish');
    });
    await step('Maximize panel', async () => {
      await togglePanel();
    });
    await step('Go to first step', async () => {
      await click('Project details');
    });
  }
}`,...w.parameters?.docs?.source}}};const Rt=["Default","Compact","WithPanel"];export{_ as Compact,D as Default,w as WithPanel,Rt as __namedExportsOrder,Bt as default};
