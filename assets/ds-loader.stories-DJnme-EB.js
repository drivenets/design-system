import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as y}from"./index-C6HRAoS7.js";import"./iframe-DP30Lve1.js";import"./preload-helper-PPVm8Dsz.js";const x="_loaderContainer_20i85_1",L="_loader_20i85_1",C="_pulsingIcon_20i85_19",j="_pulsingOuter_20i85_24",N="_pulsingInner_20i85_31",I="_spinnerGradient_20i85_45",i={loaderContainer:x,loader:L,pulsingIcon:C,pulsingOuter:j,pulsingInner:N,spinnerGradient:I},g=()=>e.jsxs("svg",{className:i.pulsingIcon,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{className:i.pulsingOuter,cx:"12",cy:"12",r:"8"}),e.jsx("circle",{className:i.pulsingInner,cx:"12",cy:"12",r:"5.5"})]});g.__docgenInfo={description:"",methods:[],displayName:"PulsingIcon"};const v=()=>e.jsxs("svg",{className:i.loader,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"path-2-inside-1_14836_15182",fill:"white",children:e.jsx("path",{d:"M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"})}),e.jsx("g",{clipPath:"url(#paint0_angular_14836_15182_clip_path)",mask:"url(#path-2-inside-1_14836_15182)",children:e.jsx("g",{transform:"matrix(-0.008 0 0 0.008 12 12)",children:e.jsx("foreignObject",{x:"-1375",y:"-1375",width:"2750",height:"2750",children:e.jsx("div",{className:i.spinnerGradient})})})}),e.jsx("path",{d:"M12 4L12 7C9.23858 7 7 9.23858 7 12L4 12L1 12C1 5.92487 5.92487 1 12 1L12 4ZM4 12L7 12C7 14.7614 9.23858 17 12 17L12 20L12 23C5.92487 23 1 18.0751 1 12L4 12ZM12 20L12 17C14.7614 17 17 14.7614 17 12L20 12L23 12C23 18.0751 18.0751 23 12 23L12 20ZM20 12L17 12C17 9.23858 14.7614 7 12 7L12 4L12 1C18.0751 1 23 5.92487 23 12L20 12Z",mask:"url(#path-2-inside-1_14836_15182)"}),e.jsx("defs",{children:e.jsx("clipPath",{id:"paint0_angular_14836_15182_clip_path",children:e.jsx("path",{d:"M12 4L12 7C9.23858 7 7 9.23858 7 12L4 12L1 12C1 5.92487 5.92487 1 12 1L12 4ZM4 12L7 12C7 14.7614 9.23858 17 12 17L12 20L12 23C5.92487 23 1 18.0751 1 12L4 12ZM12 20L12 17C14.7614 17 17 14.7614 17 12L20 12L23 12C23 18.0751 18.0751 23 12 23L12 20ZM20 12L17 12C17 9.23858 14.7614 7 12 7L12 4L12 1C18.0751 1 23 5.92487 23 12L20 12Z",mask:"url(#path-2-inside-1_14836_15182)"})})})]});v.__docgenInfo={description:"",methods:[],displayName:"SpinnerIcon"};const n=({variant:t="spinner",className:r,...a})=>e.jsx("div",{className:y(i.loaderContainer,r),...a,children:t==="pulsing"?e.jsx(g,{}):e.jsx(v,{})});n.__docgenInfo={description:"Design system Loader component",methods:[],displayName:"DsLoader",props:{variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof loaderVariants)[number]"},description:`Loader variant
@default 'spinner'`,defaultValue:{value:"'spinner'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional styles to apply to the component"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref to the loader container element"}}};const w=["spinner","pulsing"],S="_inlineContainer_9rylp_1",f="_variantComparisonContainer_9rylp_7",D="_variantItem_9rylp_13",P="_variantLabel_9rylp_20",T="_usageExamplesContainer_9rylp_25",E="_usageSection_9rylp_31",B="_centeredContainer_9rylp_35",M="_multipleLoadersContainer_9rylp_45",q="_customPropsLoader_9rylp_50",s={inlineContainer:S,variantComparisonContainer:f,variantItem:D,variantLabel:P,usageExamplesContainer:T,usageSection:E,centeredContainer:B,multipleLoadersContainer:M,customPropsLoader:q},{expect:o,within:h}=__STORYBOOK_MODULE_TEST__,Z={title:"Design System/Loader",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"radio",options:w}}},c={args:{"data-testid":"loader"},play:async({canvasElement:t})=>{const a=h(t).getByTestId("loader");await o(a).toBeInTheDocument()}},l={args:{variant:"pulsing"},play:async({canvasElement:t})=>{const r=t.querySelector("svg");await o(r).toBeInTheDocument();const a=r?.querySelectorAll("circle");await o(a?.length).toBe(2);const _=r?.querySelector("mask");await o(_).not.toBeInTheDocument()}},d={render:()=>e.jsxs("div",{className:s.inlineContainer,children:[e.jsx(n,{}),e.jsx("span",{children:"Loading..."})]})},p={render:()=>e.jsxs("div",{className:s.variantComparisonContainer,children:[e.jsxs("div",{className:s.variantItem,children:[e.jsx(n,{variant:"spinner"}),e.jsx("span",{className:s.variantLabel,children:"Spinner"})]}),e.jsxs("div",{className:s.variantItem,children:[e.jsx(n,{variant:"pulsing"}),e.jsx("span",{className:s.variantLabel,children:"Pulsing"})]})]})},m={render:()=>e.jsxs("div",{className:s.usageExamplesContainer,children:[e.jsxs("div",{children:[e.jsx("h4",{className:s.usageSection,children:"Inline with text"}),e.jsxs("div",{className:s.inlineContainer,children:[e.jsx(n,{}),e.jsx("span",{children:"Processing request..."})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:s.usageSection,children:"Centered in container"}),e.jsx("div",{className:s.centeredContainer,children:e.jsx(n,{})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:s.usageSection,children:"Multiple loaders"}),e.jsxs("div",{className:s.multipleLoadersContainer,children:[e.jsx(n,{}),e.jsx(n,{}),e.jsx(n,{})]})]})]})},u={args:{className:s.customPropsLoader,"data-testid":"loader-test-id"},play:async({canvasElement:t})=>{const a=h(t).getByTestId("loader-test-id");await o(a).toBeInTheDocument(),await o(a.className).toContain("customPropsLoader")}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    'data-testid': 'loader'
  } as React.ComponentProps<typeof DsLoader>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loader = canvas.getByTestId('loader');
    await expect(loader).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source},description:{story:"Default loader - rotating spinner arc",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pulsing'
  },
  play: async ({
    canvasElement
  }) => {
    // Assert pulsing SVG is rendered
    const svg = canvasElement.querySelector('svg');
    await expect(svg).toBeInTheDocument();

    // PulsingIcon uses two circle elements (outer pulsing + inner static)
    const circles = svg?.querySelectorAll('circle');
    await expect(circles?.length).toBe(2);

    // PulsingIcon does NOT have the mask element (unique to spinner)
    const mask = svg?.querySelector('mask');
    await expect(mask).not.toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source},description:{story:"Pulsing loader - inner circle stays static, outer circle pulsates",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.inlineContainer}>
            <DsLoader />
            <span>Loading...</span>
        </div>
}`,...d.parameters?.docs?.source},description:{story:"Loader displayed inline with text",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.variantComparisonContainer}>
            <div className={styles.variantItem}>
                <DsLoader variant="spinner" />
                <span className={styles.variantLabel}>Spinner</span>
            </div>
            <div className={styles.variantItem}>
                <DsLoader variant="pulsing" />
                <span className={styles.variantLabel}>Pulsing</span>
            </div>
        </div>
}`,...p.parameters?.docs?.source},description:{story:"Comparison of both loader variants",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.usageExamplesContainer}>
            <div>
                <h4 className={styles.usageSection}>Inline with text</h4>
                <div className={styles.inlineContainer}>
                    <DsLoader />
                    <span>Processing request...</span>
                </div>
            </div>
            <div>
                <h4 className={styles.usageSection}>Centered in container</h4>
                <div className={styles.centeredContainer}>
                    <DsLoader />
                </div>
            </div>
            <div>
                <h4 className={styles.usageSection}>Multiple loaders</h4>
                <div className={styles.multipleLoadersContainer}>
                    <DsLoader />
                    <DsLoader />
                    <DsLoader />
                </div>
            </div>
        </div>
}`,...m.parameters?.docs?.source},description:{story:"Multiple loaders in different contexts",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.customPropsLoader,
    'data-testid': 'loader-test-id'
  } as React.ComponentProps<typeof DsLoader>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loader = canvas.getByTestId('loader-test-id');
    await expect(loader).toBeInTheDocument();
    await expect(loader.className).toContain('customPropsLoader');
  }
}`,...u.parameters?.docs?.source},description:{story:"Test that custom props (className, style, data-testid) are forwarded to the container",...u.parameters?.docs?.description}}};const V=["Default","Pulsing","InlineWithText","VariantComparison","UsageExamples","CustomProps"];export{u as CustomProps,c as Default,d as InlineWithText,l as Pulsing,m as UsageExamples,p as VariantComparison,V as __namedExportsOrder,Z as default};
