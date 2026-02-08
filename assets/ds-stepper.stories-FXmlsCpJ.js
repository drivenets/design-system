import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as f}from"./iframe-BVDryuZ7.js";import{c as C}from"./index-MjCKlByz.js";import{d as q,j as u,a6 as G,o as W,a7 as X,a8 as H,p as K,P as U,a1 as Y}from"./index-Bj9KoGAY.js";import{D as J}from"./ds-icon-B2GnEIzh.js";import{D as Q}from"./ds-button-K8yUnA_I.js";import{D as Z}from"./ds-panel-BOrzx8bk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1l1cBOW.js";import"./index-DB1HQx6-.js";import"./ds-button-legacy-BwiC0-_p.js";import"./ds-button-new-BdA7VWyz.js";import"./index-BPqqd7HI.js";import"./index-B2B6AqRj.js";import"./index-Dna13Ya8.js";var ee=W("steps").parts("root","list","item","trigger","indicator","separator","content","nextTrigger","prevTrigger","progress"),S=ee.build(),te=e=>e.ids?.root??`steps:${e.id}`,ne=e=>e.ids?.list??`steps:${e.id}:list`,R=(e,t)=>e.ids?.triggerId?.(t)??`steps:${e.id}:trigger:${t}`,se=(e,t)=>e.ids?.contentId?.(t)??`steps:${e.id}:content:${t}`;function ie(e,t){const{context:n,send:i,computed:p,prop:s,scope:c}=e,l=n.get("step"),g=s("count"),x=p("percent"),v=p("hasNextStep"),P=p("hasPrevStep"),D=a=>s("isStepValid")?.(a)??!0,j=a=>s("isStepSkippable")?.(a)??!1,h=a=>({triggerId:R(c,a.index),contentId:se(c,a.index),current:a.index===l,completed:a.index<l,incomplete:a.index>l,index:a.index,first:a.index===0,last:a.index===g-1,skippable:j(a.index),isValid:()=>D(a.index)}),E=()=>{i({type:"STEP.NEXT",src:"next.trigger.click"})},V=()=>{i({type:"STEP.PREV",src:"prev.trigger.click"})},M=()=>{i({type:"STEP.RESET",src:"reset.trigger.click"})},$=a=>{i({type:"STEP.SET",value:a,src:"api.setValue"})};return{value:l,count:g,percent:x,hasNextStep:v,hasPrevStep:P,isCompleted:p("completed"),isStepValid:D,isStepSkippable:j,goToNextStep:E,goToPrevStep:V,resetStep:M,getItemState:h,setStep:$,getRootProps(){return t.element({...S.root.attrs,id:te(c),dir:s("dir"),"data-orientation":s("orientation"),style:{"--percent":`${x}%`}})},getListProps(){const o=G(g).map((B,O)=>R(c,O));return t.element({...S.list.attrs,dir:s("dir"),id:ne(c),role:"tablist","aria-owns":o.join(" "),"aria-orientation":s("orientation"),"data-orientation":s("orientation")})},getItemProps(a){const o=h(a);return t.element({...S.item.attrs,dir:s("dir"),"aria-current":o.current?"step":void 0,"data-orientation":s("orientation"),"data-skippable":u(o.skippable)})},getTriggerProps(a){const o=h(a);return t.button({...S.trigger.attrs,id:o.triggerId,role:"tab",dir:s("dir"),tabIndex:!s("linear")||o.current?0:-1,"aria-selected":o.current,"aria-controls":o.contentId,"data-state":o.current?"open":"closed","data-orientation":s("orientation"),"data-complete":u(o.completed),"data-current":u(o.current),"data-incomplete":u(o.incomplete),onClick(B){B.defaultPrevented||s("linear")||i({type:"STEP.SET",value:a.index,src:"trigger.click"})}})},getContentProps(a){const o=h(a);return t.element({...S.content.attrs,dir:s("dir"),id:o.contentId,role:"tabpanel",tabIndex:0,hidden:!o.current,"data-state":o.current?"open":"closed","data-orientation":s("orientation"),"aria-labelledby":o.triggerId})},getIndicatorProps(a){const o=h(a);return t.element({...S.indicator.attrs,dir:s("dir"),"aria-hidden":!0,"data-complete":u(o.completed),"data-current":u(o.current),"data-incomplete":u(o.incomplete)})},getSeparatorProps(a){const o=h(a);return t.element({...S.separator.attrs,dir:s("dir"),"data-orientation":s("orientation"),"data-complete":u(o.completed),"data-current":u(o.current),"data-incomplete":u(o.incomplete)})},getNextTriggerProps(){return t.button({...S.nextTrigger.attrs,dir:s("dir"),type:"button",disabled:!v,onClick(a){a.defaultPrevented||E()}})},getPrevTriggerProps(){return t.button({dir:s("dir"),...S.prevTrigger.attrs,type:"button",disabled:!P,onClick(a){a.defaultPrevented||V()}})},getProgressProps(){return t.element({dir:s("dir"),...S.progress.attrs,role:"progressbar","aria-valuenow":x,"aria-valuemin":0,"aria-valuemax":100,"aria-valuetext":`${x}% complete`,"data-complete":u(x===100)})}}}var ae=q({props({props:e}){return{defaultStep:0,count:1,linear:!1,orientation:"horizontal",...e}},context({prop:e,bindable:t}){return{step:t(()=>({defaultValue:e("defaultStep"),value:e("step"),onChange(n){e("onStepChange")?.({step:n}),n==e("count")&&e("onStepComplete")?.()}}))}},computed:{percent:X(({context:e,prop:t})=>[e.get("step"),t("count")],([e,t])=>e/t*100),hasNextStep:({context:e,prop:t})=>e.get("step")<t("count"),hasPrevStep:({context:e})=>e.get("step")>0,completed:({context:e,prop:t})=>e.get("step")===t("count")},initialState(){return"idle"},entry:["validateStepIndex"],states:{idle:{on:{"STEP.SET":[{guard:"isValidStepNavigation",actions:["setStep"]},{actions:["invokeOnStepInvalid"]}],"STEP.NEXT":[{guard:"isCurrentStepValid",actions:["goToNextStep"]},{actions:["invokeOnStepInvalid"]}],"STEP.PREV":{actions:["goToPrevStep"]},"STEP.RESET":{actions:["resetStep"]}}}},implementations:{guards:{isCurrentStepValid({context:e,prop:t}){const n=e.get("step");if(t("isStepSkippable")?.(n))return!0;const i=t("isStepValid");return i?i(n):!0},isValidStepNavigation({context:e,event:t,prop:n}){const i=e.get("step");if(t.value<=i||n("isStepSkippable")?.(i))return!0;const p=n("isStepValid");return p?p(i):!0}},actions:{goToNextStep({context:e,prop:t}){const n=t("count");e.set("step",Math.min(e.get("step")+1,n))},goToPrevStep({context:e}){e.set("step",Math.max(e.get("step")-1,0))},resetStep({context:e}){e.set("step",0)},setStep({context:e,event:t}){e.set("step",t.value)},validateStepIndex({context:e,prop:t}){re(t("count"),e.get("step"))},invokeOnStepInvalid({context:e,event:t,prop:n}){n("onStepInvalid")?.({step:e.get("step"),action:t.type==="STEP.NEXT"?"next":"set",targetStep:t.value})}}}}),re=(e,t)=>{if(!H(t,0,e))throw new RangeError(`[zag-js/steps] step index ${t} is out of bounds`)};K()(["count","defaultStep","dir","getRootNode","id","ids","isStepSkippable","isStepValid","linear","onStepChange","onStepComplete","onStepInvalid","orientation","step"]);const oe="_step_1roiz_1",pe="_root_1roiz_10",ce="_variantSingle_1roiz_10",le="_indicatorContainer_1roiz_23",de="_indicator_1roiz_23",ue="_separator_1roiz_49",ge="_stepContent_1roiz_64",Se="_stepContentSingle_1roiz_69",me="_stepLabel_1roiz_73",xe="_stepDescription_1roiz_83",he="_stepActions_1roiz_101",d={step:oe,root:pe,variantSingle:ce,indicatorContainer:le,indicator:de,separator:ue,stepContent:ge,stepContentSingle:Se,stepLabel:me,stepDescription:xe,stepActions:he};function ve({count:e,activeStep:t,onStepChange:n,onComplete:i}){const p=U(ae,{id:f.useId(),count:e,step:t,onStepChange:n,onStepComplete:i});return ie(p,Y)}const F=f.createContext(null);function I(){const e=f.useContext(F);if(!e)throw new Error("useStepper must be used within a DsStepper");return e}function y({count:e,variant:t,activeStep:n,onStepChange:i,onComplete:p,children:s}){const c=ve({count:e,activeStep:n,onStepChange:i,onComplete:p});return r.jsx(F.Provider,{value:{stepsApi:c,variant:t},children:r.jsx("div",{...c.getRootProps(),className:C(d.root,{[d.variantSingle]:t==="single"}),children:s})})}y.__docgenInfo={description:"",methods:[],displayName:"DsStepper"};function N({index:e,children:t,className:n}){const i=I(),{completed:p,current:s,last:c}=i.stepsApi.getItemState({index:e}),l=i.variant==="single",g=c&&i.stepsApi.value===e+1;if(l&&!s&&!g)return null;const v=p&&!l,P=v?"button":"div",D=v?{onClick:()=>{i.stepsApi.setStep(e)}}:{};return r.jsxs(P,{...i.stepsApi.getItemProps({index:e}),"data-current":s?"":void 0,"data-complete":p?"":void 0,className:C(d.step,n),...D,children:[r.jsxs("div",{...i.stepsApi.getIndicatorProps({index:e}),className:d.indicatorContainer,children:[p?r.jsx(J,{icon:"check",className:d.indicator}):r.jsx("span",{className:d.indicator,children:e+1}),r.jsx("div",{...i.stepsApi.getSeparatorProps({index:e}),className:d.separator})]}),t]})}N.__docgenInfo={description:"",methods:[],displayName:"DsStep"};function L({children:e}){return r.jsx("span",{className:d.stepLabel,children:e})}L.__docgenInfo={description:"",methods:[],displayName:"DsStepLabel"};function z({children:e}){return r.jsx("p",{className:d.stepDescription,children:e})}z.__docgenInfo={description:"",methods:[],displayName:"DsStepDescription"};function T({index:e,label:t,description:n,actions:i}){const{variant:p,stepsApi:s}=I(),{current:c}=s.getItemState({index:e});return r.jsxs("div",{className:C(d.stepContent,{[d.stepContentSingle]:p==="single"}),children:[r.jsx(L,{children:t}),p!=="single"&&n&&r.jsx(z,{children:n}),i&&c&&r.jsx("div",{className:d.stepActions,children:i})]})}T.__docgenInfo={description:"",methods:[],displayName:"DsStepContent",props:{index:{required:!0,tsType:{name:"number"},description:""},label:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""}}};function k({children:e}){const t=I();return r.jsx(Q,{...t.stepsApi.getNextTriggerProps(),size:"small",children:e})}k.__docgenInfo={description:"",methods:[],displayName:"DsNextStepButton"};const{expect:fe,userEvent:A}=__STORYBOOK_MODULE_TEST__,Re={title:"Design System/Stepper",component:y,parameters:{layout:"centered"},tags:["autodocs"]},m=[{label:"Project details",description:"The swift red fox leaps over the sleepy hound"},{label:"Select market",description:"The swift red fox leaps over the sleepy hound"},{label:"Design policy",description:"The swift red fox leaps over the sleepy hound"}],b={render:function(){return r.jsx("div",{style:{width:300},children:r.jsx(y,{count:m.length,onComplete:()=>alert("Everything completed!"),children:m.map((t,n)=>r.jsx(N,{index:n,children:r.jsx(T,{index:n,label:t.label,description:t.description,actions:r.jsx(k,{children:n===m.length-1?"Finish":"Next"})})},n))})})}},_={render:function(){return r.jsx("div",{style:{width:300},children:r.jsx(y,{count:m.length,onComplete:()=>alert("Everything completed!"),children:m.map((t,n)=>r.jsx(N,{index:n,children:r.jsx(T,{index:n,label:t.label,actions:r.jsx(k,{children:n===m.length-1?"Finish":"Next"})})},n))})})}},w={render:function(){const[t,n]=f.useState(0),[i,p]=f.useState("docked"),s=i==="floating",c=()=>{p(s?"docked":"floating")};return r.jsx(Z,{open:!0,variant:i,disablePadding:s,slotProps:{collapseButton:{onClick:c,collapsed:s}},children:r.jsx(y,{count:m.length,activeStep:t,onStepChange:({step:l})=>n(l),variant:s?"single":void 0,children:m.map((l,g)=>r.jsx(N,{index:g,children:r.jsx(T,{index:g,label:l.label,description:l.description,actions:r.jsx(k,{children:g===m.length-1?"Finish":"Next"})})},g))})})},play:async({canvas:e,step:t})=>{function n(p){const s=e.getByRole("button",{name:new RegExp(p,"i")});return A.click(s)}const i=async()=>{await A.click(e.getByLabelText("Toggle panel"))};await t("Iterate steps - Docked",async()=>{await n("Next"),await n("Next"),await n("Finish")}),await t("Go to first step",async()=>{await n("Project details")}),await t("Minimize panel",async()=>{await i()}),await fe(e.queryByText(/The swift red fox/)).not.toBeInTheDocument(),await t("Iterate steps - Floating",async()=>{await n("Next"),await n("Next"),await n("Finish")}),await t("Maximize panel",async()=>{await i()}),await t("Go to first step",async()=>{await n("Project details")})}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const Ae=["Default","Compact","WithPanel"];export{_ as Compact,b as Default,w as WithPanel,Ae as __namedExportsOrder,Re as default};
