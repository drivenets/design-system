import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as h}from"./index-vR7H37t8.js";import"./iframe-C35wd6OW.js";import"./preload-helper-PPVm8Dsz.js";const N="_divider_94krl_1",x="_horizontal_94krl_10",w="_vertical_94krl_15",d={divider:N,horizontal:x,vertical:w},t=({orientation:a="horizontal",component:m,style:v,className:p})=>{const c=a==="vertical",y=m??(c?"div":"hr"),C=h(d.divider,{[d.vertical]:c,[d.horizontal]:!c},p);return e.jsx(y,{role:"separator","aria-orientation":a,className:C,style:v})};t.__docgenInfo={description:"",methods:[],displayName:"DsDivider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Controls orientation of the divider. Horizontal by default.",defaultValue:{value:"'horizontal'",computed:!1}},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`Underlying element/component to render.
Examples: "hr", "div", "span", Link, etc.`},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional CSS styles."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes."}}};const _="_showcaseContainer_5q5ai_1",j="_showcaseTable_5q5ai_6",u="_showcaseHeader_5q5ai_11",D="_showcaseCell_5q5ai_17",g="_showcaseCellBold_5q5ai_23",z="_showcaseCellInline_5q5ai_28",f="_storyContainer_5q5ai_37",T="_storyContainerVertical_5q5ai_49",S="_storyContent_5q5ai_53",q="_storyContentSide_5q5ai_57",b="_storyText_5q5ai_62",B="_horizontalContainer_5q5ai_66",V="_horizontalDividerWrapper_5q5ai_70",H="_verticalDividerContainer_5q5ai_74",R="_verticalDividerContent_5q5ai_81",s={showcaseContainer:_,showcaseTable:j,showcaseHeader:u,showcaseCell:D,showcaseCellBold:g,showcaseCellInline:z,storyContainer:f,storyContainerVertical:T,storyContent:S,storyContentSide:q,storyText:b,horizontalContainer:B,horizontalDividerWrapper:V,verticalDividerContainer:H,verticalDividerContent:R},E={title:"Design System/Divider",component:t,parameters:{layout:"centered"},args:{orientation:"horizontal"},tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"],description:"Controls orientation of the divider."},component:{control:"select",options:["(default)","hr","div","span"],mapping:{"(default)":void 0,hr:"hr",div:"div",span:"span"},description:"Underlying element/component to render."},style:{control:!1},className:{control:!1}}},n={render:a=>e.jsx("div",{className:h(s.storyContainer,{[s.storyContainerVertical]:a.orientation==="vertical"}),children:a.orientation==="vertical"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:s.storyContentSide,children:"Left content"}),e.jsx(t,{...a}),e.jsx("div",{className:s.storyContentSide,children:"Right content"})]}):e.jsxs("div",{className:s.storyContent,children:[e.jsx("div",{className:s.storyText,children:"Top content"}),e.jsx(t,{...a}),e.jsx("div",{className:s.storyText,children:"Bottom content"})]})})},r={render:()=>e.jsx("div",{className:s.showcaseContainer,children:e.jsxs("table",{className:s.showcaseTable,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:s.showcaseHeader,children:"Variant"}),e.jsx("th",{className:s.showcaseHeader,children:"Preview"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{className:s.showcaseCell,children:[e.jsx("span",{className:s.showcaseCellBold,children:"Horizontal"}),e.jsx("span",{className:s.showcaseCellInline,children:"default"})]}),e.jsx("td",{className:s.showcaseCell,children:e.jsx("div",{className:s.horizontalDividerWrapper,children:e.jsx(t,{})})})]}),e.jsxs("tr",{children:[e.jsxs("td",{className:s.showcaseCell,children:[e.jsx("span",{className:s.showcaseCellBold,children:"Vertical"}),e.jsx("span",{className:s.showcaseCellInline,children:"default"})]}),e.jsx("td",{className:s.showcaseCell,children:e.jsxs("div",{className:s.verticalDividerContainer,children:[e.jsx("div",{className:s.verticalDividerContent,children:"Left"}),e.jsx(t,{orientation:"vertical"}),e.jsx("div",{className:s.verticalDividerContent,children:"Right"})]})})]}),e.jsxs("tr",{children:[e.jsxs("td",{className:s.showcaseCell,children:[e.jsx("span",{className:s.showcaseCellBold,children:"Custom"}),e.jsx("span",{className:s.showcaseCellInline,children:'component="span"'})]}),e.jsx("td",{className:s.showcaseCell,children:e.jsx("div",{className:s.horizontalDividerWrapper,children:e.jsx(t,{component:"span"})})})]})]})]})})},o={args:{orientation:"horizontal"},render:a=>e.jsxs("div",{className:s.horizontalContainer,children:[e.jsx("div",{className:s.storyText,children:"Above"}),e.jsx(t,{...a}),e.jsx("div",{className:s.storyText,children:"Below"})]})},i={args:{orientation:"vertical"},render:a=>e.jsxs("div",{className:h(s.storyContainer,s.storyContainerVertical),children:[e.jsx("div",{className:s.storyContentSide,children:"Left"}),e.jsx(t,{...a}),e.jsx("div",{className:s.storyContentSide,children:"Right"})]})},l={args:{orientation:"horizontal",component:"span"},render:a=>e.jsxs("div",{className:s.horizontalContainer,children:[e.jsx("div",{className:s.storyText,children:"Above"}),e.jsx(t,{...a}),e.jsx("div",{className:s.storyText,children:"Below"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className={classNames(styles.storyContainer, {
    [styles.storyContainerVertical]: args.orientation === 'vertical'
  })}>
            {args.orientation === 'vertical' ? <>
                    <div className={styles.storyContentSide}>Left content</div>
                    <DsDivider {...args} />
                    <div className={styles.storyContentSide}>Right content</div>
                </> : <div className={styles.storyContent}>
                    <div className={styles.storyText}>Top content</div>
                    <DsDivider {...args} />
                    <div className={styles.storyText}>Bottom content</div>
                </div>}
        </div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.showcaseContainer}>
            <table className={styles.showcaseTable}>
                <thead>
                    <tr>
                        <th className={styles.showcaseHeader}>Variant</th>
                        <th className={styles.showcaseHeader}>Preview</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className={styles.showcaseCell}>
                            <span className={styles.showcaseCellBold}>Horizontal</span>
                            <span className={styles.showcaseCellInline}>default</span>
                        </td>
                        <td className={styles.showcaseCell}>
                            <div className={styles.horizontalDividerWrapper}>
                                <DsDivider />
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className={styles.showcaseCell}>
                            <span className={styles.showcaseCellBold}>Vertical</span>
                            <span className={styles.showcaseCellInline}>default</span>
                        </td>
                        <td className={styles.showcaseCell}>
                            <div className={styles.verticalDividerContainer}>
                                <div className={styles.verticalDividerContent}>Left</div>
                                <DsDivider orientation="vertical" />
                                <div className={styles.verticalDividerContent}>Right</div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className={styles.showcaseCell}>
                            <span className={styles.showcaseCellBold}>Custom</span>
                            <span className={styles.showcaseCellInline}>component=&quot;span&quot;</span>
                        </td>
                        <td className={styles.showcaseCell}>
                            <div className={styles.horizontalDividerWrapper}>
                                <DsDivider component="span" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => <div className={styles.horizontalContainer}>
            <div className={styles.storyText}>Above</div>
            <DsDivider {...args} />
            <div className={styles.storyText}>Below</div>
        </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <div className={classNames(styles.storyContainer, styles.storyContainerVertical)}>
            <div className={styles.storyContentSide}>Left</div>
            <DsDivider {...args} />
            <div className={styles.storyContentSide}>Right</div>
        </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    component: 'span'
  },
  render: args => <div className={styles.horizontalContainer}>
            <div className={styles.storyText}>Above</div>
            <DsDivider {...args} />
            <div className={styles.storyText}>Below</div>
        </div>
}`,...l.parameters?.docs?.source}}};const k=["Default","Showcase","Horizontal","Vertical","WithCustomComponent"];export{n as Default,o as Horizontal,r as Showcase,i as Vertical,l as WithCustomComponent,k as __namedExportsOrder,E as default};
