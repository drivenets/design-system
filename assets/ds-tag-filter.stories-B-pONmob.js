import{j as u}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-B5H9TSHI.js";import{r as ee}from"./index-Cyp0CLjZ.js";import{c as te}from"./index-CC7AmmE_.js";import{D as G}from"./ds-typography-C4e9tJNq.js";import{D as O}from"./ds-tag-Bf63mA5N.js";import{D as K}from"./ds-button-DE6b6_Ey.js";import{D as M}from"./ds-icon-C0rtgFCX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5z8G6Qj.js";import"./index-C-uoLK1k.js";import"./index-D3x7BCKa.js";import"./ds-button-legacy-7EtXkqPT.js";import"./ds-button-new-B_EEpcaa.js";const ae="_container_1q4o9_1",ne="_expanded_1q4o9_12",oe="_row1_1q4o9_16",le="_row2_1q4o9_24",se="_label_1q4o9_32",ie="_expandTag_1q4o9_38",re="_clearContent_1q4o9_48",ce="_clearButton_1q4o9_52",ue="_measurementContainer_1q4o9_58",g={container:ae,expanded:ne,row1:oe,row2:le,label:se,expandTag:ie,clearContent:re,clearButton:ce,measurementContainer:ue};function z(n,e,t){let o=0,l=0;for(const r of n){const s=r+(l>0?t:0);if(o+s<=e)o+=s,l++;else break}return{count:l,usedWidth:o}}function de(n){const e=n.getBoundingClientRect(),t=getComputedStyle(n),o=parseFloat(t.paddingLeft)||0,l=parseFloat(t.paddingRight)||0;return e.width-o-l}function me(n){const e=Array.from(n.querySelectorAll("[data-measure-tag]")),t=n.querySelector("[data-measure-label]"),o=n.querySelector("[data-measure-clear]"),l=n.querySelector("[data-measure-expand]"),r=getComputedStyle(n),s=parseFloat(r.gap)||8,c=e.map(B=>B.getBoundingClientRect().width),i=t?t.getBoundingClientRect().width+s:0,p=o?o.getBoundingClientRect().width+s:0,T=l?l.getBoundingClientRect().width+s:100;return{tagWidths:c,labelWidth:i,clearButtonWidth:p,expandTagWidth:T,gap:s}}const P=20,pe=({containerRef:n,measurementRef:e,totalItems:t,expanded:o})=>{const[l,r]=y.useState({row1TagCount:0,row2TagCount:0,hasOverflow:!1}),s=y.useCallback(()=>{if(!n.current||!e.current)return;const c=n.current,i=e.current,{tagWidths:p,labelWidth:T,clearButtonWidth:B,expandTagWidth:x,gap:F}=me(i);if(p.length===0){r({row1TagCount:0,row2TagCount:0,hasOverflow:!1});return}const D=de(c),C=D-T-B-P,h=z(p,C,F),v=p.slice(h.count);if(v.length===0){r({row1TagCount:h.count,row2TagCount:0,hasOverflow:!1});return}const L=D-x-P,R=z(v,L,F);if(v.length>R.count)r({row1TagCount:h.count,row2TagCount:R.count,hasOverflow:!0});else{const N=D-P,H=z(v,N,F);H.count<v.length?r({row1TagCount:h.count,row2TagCount:R.count,hasOverflow:!0}):r({row1TagCount:h.count,row2TagCount:H.count,hasOverflow:!1})}},[n,e]);return y.useLayoutEffect(()=>{const c=requestAnimationFrame(()=>{s()}),i=new ResizeObserver(()=>{requestAnimationFrame(()=>{s()})});return n.current&&i.observe(n.current),()=>{cancelAnimationFrame(c),i.disconnect()}},[n,e,t,o,s]),o?{row1TagCount:l.row1TagCount,row2TagCount:t-l.row1TagCount,hasOverflow:!0}:l},f=({items:n,locale:e={},className:t,style:o,onClearAll:l,onItemDelete:r,onItemSelect:s,onExpand:c})=>{const[i,p]=y.useState(!1),T=y.useRef(null),B=y.useRef(null),{row1TagCount:x,row2TagCount:F,hasOverflow:D}=pe({containerRef:T,measurementRef:B,totalItems:n.length,expanded:i}),{label:C="Filtered by:",clearButton:h="Clear all filters",hiddenCountPlural:v="filters",hiddenCountSingular:L="filter",collapseTagLabel:R="Collapse"}=e,$=n.slice(0,x),N=n.slice(x,x+F),H=i?[]:n.slice(x+F);if(n.length===0)return null;const J=H.length,U=N.length>0||D,Z=m=>{const X=m.slotProps?.tag||{};return y.createElement(O,{...X,key:m.id,label:m.label,selected:m.selected,onClick:s?()=>s(m):void 0,onDelete:r?()=>r(m):void 0})},Y=()=>{const m=!i;p(m),c?.(m)},Q=u.jsxs("div",{ref:B,className:g.measurementContainer,"aria-hidden":"true",children:[C&&u.jsx("span",{"data-measure-label":"",children:u.jsx(G,{variant:"body-sm-reg",className:g.label,children:C})}),n.map(m=>u.jsx(O,{"data-measure-tag":"",label:m.label,selected:m.selected,onClick:s?()=>s(m):void 0,onDelete:r?()=>r(m):void 0},m.id)),l&&u.jsxs(K,{"data-measure-clear":"",design:"v1.2",buttonType:"tertiary",variant:"ghost",className:g.clearButton,contentClassName:g.clearContent,size:"small",children:[u.jsx(M,{icon:"close"}),h]}),u.jsx(O,{"data-measure-expand":"",label:"+99 filters",className:g.expandTag})]});return u.jsxs(u.Fragment,{children:[u.jsxs("div",{ref:T,className:te(g.container,i&&g.expanded,t),style:o,children:[u.jsxs("div",{className:g.row1,children:[C&&u.jsx(G,{variant:"body-sm-reg",className:g.label,children:C}),$.map(m=>Z(m)),l&&u.jsxs(K,{design:"v1.2",buttonType:"tertiary",variant:"ghost",className:g.clearButton,contentClassName:g.clearContent,size:"small",onClick:l,children:[u.jsx(M,{icon:"close"}),h]})]}),U&&u.jsxs("div",{className:g.row2,children:[N.map(m=>Z(m)),D&&u.jsx(O,{label:i?R:`+${String(J)} ${J===1?L:v}`,selected:i,className:g.expandTag,onClick:Y})]})]}),ee.createPortal(Q,document.body)]})};f.__docgenInfo={description:`Design system TagFilter component

A component for displaying active filters as tags with overflow handling.
Shows visible tags in up to 2 rows, with the Expand button to show hidden items.`,methods:[],displayName:"DsTagFilter",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TagFilterItem"}],raw:"TagFilterItem[]"},description:"Array of tag items to display"},locale:{required:!1,tsType:{name:"signature",type:"object",raw:`{
	label?: string;
	clearButton?: string;
	collapseTagLabel?: string;
	hiddenCountSingular?: string;
	hiddenCountPlural?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"clearButton",value:{name:"string",required:!1}},{key:"collapseTagLabel",value:{name:"string",required:!1}},{key:"hiddenCountSingular",value:{name:"string",required:!1}},{key:"hiddenCountPlural",value:{name:"string",required:!1}}]}},description:"Locale object (you can pass custom strings for localization)",defaultValue:{value:"{}",computed:!1}},onClearAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:'Callback when "Clear all" is clicked'},onItemDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TagFilterItem) => void",signature:{arguments:[{type:{name:"TagFilterItem"},name:"item"}],return:{name:"void"}}},description:"Callback when a tag is deleted/removed"},onItemSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TagFilterItem) => void",signature:{arguments:[{type:{name:"TagFilterItem"},name:"item"}],return:{name:"void"}}},description:"Callback when a tag is selected"},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded?: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:"Callback when the Expand button is clicked"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional styles to apply to the component"}}};const ge="_container_z9hxz_1",ye="_controlsContainer_z9hxz_7",we="_addButton_z9hxz_12",fe="_infoText_z9hxz_20",S={container:ge,controlsContainer:ye,addButton:we,infoText:fe},{expect:a,fn:he,userEvent:w,waitFor:d,within:b}=__STORYBOOK_MODULE_TEST__,_e={title:"Design System/Tag Filter",component:f,parameters:{layout:"padded",docs:{description:{component:"A component for displaying active filters as tags with overflow handling. Shows visible tags in up to 2 rows, with an expand button to show hidden items in a dialog."}}},tags:["autodocs"],argTypes:{items:{control:"object",description:"Array of tag items to display"},locale:{description:"Locale-specific options for customizing text content",control:"object"},onClearAll:{action:"clear-all",description:'Callback when "Clear all filters" is clicked'},onItemDelete:{action:"delete-item",description:"Callback when item is deleted"},onItemSelect:{action:"select-item",description:"Callback when item is selected"},onExpand:{action:"expand",description:"Callback when expand/collapse is clicked"}}},A=[{id:"1",label:"Status: Active"},{id:"2",label:"Running: From 100 to 10,000"},{id:"3",label:"Completed from 20,000 to 100,000"},{id:"4",label:"Executor: Category 1, Layer 1 transporter"},{id:"5",label:"Executor: Category 2, Layer 11 transporter"},{id:"6",label:"Executor: Category 2, Layer 12 transporter"},{id:"7",label:"Executor: Category 2, Layer 13 transporter"},{id:"8",label:"Version: 000.0001-3"},{id:"9",label:"Version: 000.0001-4"},{id:"10",label:"Version: 000.0001-5"},{id:"11",label:"Version: 000.0001-6"},{id:"12",label:"Last editor: Kevin Levin"},{id:"13",label:"Last editor: Emery Dance"}],I={render:function(){const[e,t]=y.useState(A),o=()=>{t([])},l=()=>{const c=`new-${String(Date.now())}`;t(i=>[...i,{id:c,label:`New Filter ${String(i.length+1)}`}])},r=c=>{t(i=>i.filter(p=>p.id!==c.id))},s=c=>{t(i=>i.map(p=>p.id===c.id?{...p,selected:!p.selected}:p))};return u.jsxs("div",{className:S.container,children:[u.jsx(f,{items:e,onClearAll:o,onItemDelete:r,onItemSelect:s}),u.jsxs("div",{className:S.controlsContainer,children:[u.jsx("button",{type:"button",onClick:l,className:S.addButton,children:"Add Filter"}),u.jsxs("p",{className:S.infoText,children:["Total filters: ",e.length]}),u.jsxs("p",{className:S.infoText,children:["Selected filters: [",e.filter(c=>c.selected).map(c=>`"${c.label}"`).join(", "),"]"]})]})]})},play:async({canvasElement:n})=>{const e=b(n);await d(async()=>{await a(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await a(e.getByText("Filtered by:")).toBeInTheDocument(),await a(e.getByRole("button",{name:/Clear all filters/})).toBeInTheDocument();const t=e.getByRole("button",{name:"Status: Active"});await w.click(t),await d(async()=>{await a(t).toHaveAttribute("aria-pressed","true")}),await a(e.getByText(/Selected filters:.*"Status: Active"/)).toBeInTheDocument(),await w.click(t),await d(async()=>{await a(t).not.toHaveAttribute("aria-pressed")}),t.focus(),await d(async()=>{await a(e.getByRole("button",{name:"Delete tag"})).toBeVisible()});const o=e.getByRole("button",{name:"Delete tag"});await w.click(o),await d(async()=>{await a(e.queryByRole("button",{name:"Status: Active"})).not.toBeInTheDocument(),await a(e.getByText("Total filters: 12")).toBeInTheDocument()});const l=e.getByRole("button",{name:/Clear all filters/});await w.click(l),await d(async()=>{await a(e.getByText("Total filters: 0")).toBeInTheDocument()})}},E={render:function(){const[e,t]=y.useState([{id:"1",label:"Status: Active"},{id:"2",label:"Version: 1.0.0"},{id:"3",label:"Author: John Doe"}]),o=()=>{t([])},l=s=>{t(c=>c.filter(i=>i.id!==s.id))},r=s=>{t(c=>c.map(i=>i.id===s.id?{...i,selected:!i.selected}:i))};return u.jsx(f,{items:e,onClearAll:o,onItemDelete:l,onItemSelect:r})},play:async({canvasElement:n})=>{const e=b(n);await d(async()=>{await a(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await a(e.getByRole("button",{name:"Version: 1.0.0"})).toBeInTheDocument(),await a(e.getByRole("button",{name:"Author: John Doe"})).toBeInTheDocument();const t=e.getByRole("button",{name:"Status: Active"});await w.click(t),await d(async()=>{await a(t).toHaveAttribute("aria-pressed","true")}),t.focus(),await d(async()=>{await a(e.getByRole("button",{name:"Delete tag"})).toBeVisible()});const o=e.getByRole("button",{name:"Delete tag"});await w.click(o),await d(async()=>{await a(e.queryByRole("button",{name:"Status: Active"})).not.toBeInTheDocument()}),await a(e.getByRole("button",{name:"Version: 1.0.0"})).toBeInTheDocument(),await a(e.getByRole("button",{name:"Author: John Doe"})).toBeInTheDocument()}},k={render:function(){const[e,t]=y.useState(A.slice(0,5)),o=l=>{t(r=>r.filter(s=>s.id!==l.id))};return u.jsx(f,{items:e,onItemDelete:o})},play:async({canvasElement:n})=>{const e=b(n);await d(async()=>{await a(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await a(e.queryByRole("button",{name:/Clear all filters/})).not.toBeInTheDocument(),e.getByRole("button",{name:"Status: Active"}).focus(),await d(async()=>{await a(e.getByRole("button",{name:"Delete tag"})).toBeVisible()});const o=e.getByRole("button",{name:"Delete tag"});await w.click(o),await d(async()=>{await a(e.queryByRole("button",{name:"Status: Active"})).not.toBeInTheDocument()})}},_={render:function(){const e=A.slice(0,5);return u.jsx(f,{items:e,locale:{label:"Applied filters:"}})},play:async({canvasElement:n})=>{const e=b(n);await d(async()=>{await a(e.getByText("Status: Active")).toBeInTheDocument()}),await a(e.getByText("Applied filters:")).toBeInTheDocument(),await a(e.queryByRole("button",{name:"Delete tag"})).not.toBeInTheDocument(),await a(e.queryByRole("button",{name:/Clear all filters/})).not.toBeInTheDocument()}},q={render:function(){const[e,t]=y.useState(A.slice(0,5)),o=()=>{t([])},l=r=>{t(s=>s.filter(c=>c.id!==r.id))};return u.jsx(f,{items:e,locale:{label:""},onClearAll:o,onItemDelete:l})},play:async({canvasElement:n})=>{const e=b(n);await d(async()=>{await a(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await a(e.queryByText("Filtered by:")).not.toBeInTheDocument(),await a(e.getByRole("button",{name:/Clear all filters/})).toBeInTheDocument(),e.getByRole("button",{name:"Status: Active"}).focus(),await d(async()=>{await a(e.getByRole("button",{name:"Delete tag"})).toBeVisible()});const o=e.getByRole("button",{name:"Delete tag"});await w.click(o),await d(async()=>{await a(e.queryByRole("button",{name:"Status: Active"})).not.toBeInTheDocument()})}},V={render:function(){const[e,t]=y.useState(A.slice(0,5)),o=()=>{t([])},l=r=>{t(s=>s.filter(c=>c.id!==r.id))};return u.jsx(f,{items:e,locale:{label:"Aktywne filtry:",clearButton:"Zresetuj"},onClearAll:o,onItemDelete:l})},play:async({canvasElement:n})=>{const e=b(n);await d(async()=>{await a(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()}),await a(e.getByText("Aktywne filtry:")).toBeInTheDocument(),await a(e.getByRole("button",{name:/Zresetuj/})).toBeInTheDocument(),await a(e.queryByText("Filtered by:")).not.toBeInTheDocument(),await a(e.queryByRole("button",{name:/Clear all filters/})).not.toBeInTheDocument()}},j={args:{items:A,onExpand:he()},play:async({canvasElement:n,args:e})=>{const t=b(n);await d(async()=>{await a(t.getByRole("button",{name:/\+\d+ filters?/})).toBeInTheDocument()});const o=t.getByRole("button",{name:/\+\d+ filters?/});await w.click(o),await d(async()=>{await a(e.onExpand).toHaveBeenCalledWith(!0)}),await d(async()=>{await a(t.getByRole("button",{name:"Collapse"})).toBeInTheDocument()});const l=t.getByRole("button",{name:"Collapse"});await w.click(l),await d(async()=>{await a(e.onExpand).toHaveBeenCalledWith(!1)}),await d(async()=>{await a(t.getByRole("button",{name:/\+\d+ filters?/})).toBeInTheDocument()})}},W={render:function(){const[e,t]=y.useState([{id:"1",label:"Status: Active",selected:!0},{id:"2",label:"Running: From 100 to 10,000",selected:!1},{id:"3",label:"Completed from 20,000 to 100,000",selected:!0},{id:"4",label:"Executor: Category 1",selected:!1},{id:"5",label:"Version: 1.0.0",selected:!0}]),o=()=>{t([])},l=s=>{t(c=>c.filter(i=>i.id!==s.id))},r=s=>{t(c=>c.map(i=>i.id===s.id?{...i,selected:!i.selected}:i))};return u.jsx(f,{items:e,onClearAll:o,onItemDelete:l,onItemSelect:r})},play:async({canvasElement:n})=>{const e=b(n);await d(async()=>{await a(e.getByRole("button",{name:"Status: Active"})).toBeInTheDocument()});const t=e.getByRole("button",{name:"Status: Active"}),o=e.getByRole("button",{name:"Completed from 20,000 to 100,000"}),l=e.getByRole("button",{name:"Version: 1.0.0"});await a(t).toHaveAttribute("aria-pressed","true"),await a(o).toHaveAttribute("aria-pressed","true"),await a(l).toHaveAttribute("aria-pressed","true");const r=e.getByRole("button",{name:"Running: From 100 to 10,000"}),s=e.getByRole("button",{name:"Executor: Category 1"});await a(r).not.toHaveAttribute("aria-pressed"),await a(s).not.toHaveAttribute("aria-pressed"),await w.click(t),await d(async()=>{await a(t).not.toHaveAttribute("aria-pressed")}),await w.click(r),await d(async()=>{await a(r).toHaveAttribute("aria-pressed","true")})}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters);
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleAddFilter = () => {
      const newId = \`new-\${String(Date.now())}\`;
      setFilters(prev => [...prev, {
        id: newId,
        label: \`New Filter \${String(prev.length + 1)}\`
      }]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    const handleFilterSelect = (filter: TagFilterItem) => {
      setFilters(prev => prev.map(f => f.id === filter.id ? {
        ...f,
        selected: !f.selected
      } : f));
    };
    return <div className={styles.container}>
                <DsTagFilter items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} onItemSelect={handleFilterSelect} />
                <div className={styles.controlsContainer}>
                    <button type="button" onClick={handleAddFilter} className={styles.addButton}>
                        Add Filter
                    </button>
                    <p className={styles.infoText}>Total filters: {filters.length}</p>
                    <p className={styles.infoText}>
                        Selected filters: [
                        {filters.filter(filter => filter.selected).map(filter => \`"\${filter.label}"\`).join(', ')}
                        ]
                    </p>
                </div>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Status: Active'
      })).toBeInTheDocument();
    });
    await expect(canvas.getByText('Filtered by:')).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: /Clear all filters/
    })).toBeInTheDocument();
    const firstTag = canvas.getByRole('button', {
      name: 'Status: Active'
    });
    await userEvent.click(firstTag);
    await waitFor(async () => {
      await expect(firstTag).toHaveAttribute('aria-pressed', 'true');
    });

    // Verify selection is reflected in the info text
    await expect(canvas.getByText(/Selected filters:.*"Status: Active"/)).toBeInTheDocument();

    // Click again to deselect
    await userEvent.click(firstTag);
    await waitFor(async () => {
      await expect(firstTag).not.toHaveAttribute('aria-pressed');
    });
    firstTag.focus();

    // Wait for delete button to become visible after focus
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Delete tag'
      })).toBeVisible();
    });
    const deleteButton = canvas.getByRole('button', {
      name: 'Delete tag'
    });
    await userEvent.click(deleteButton);
    await waitFor(async () => {
      await expect(canvas.queryByRole('button', {
        name: 'Status: Active'
      })).not.toBeInTheDocument();
      await expect(canvas.getByText('Total filters: 12')).toBeInTheDocument();
    });

    // Test clear all functionality
    const clearAllButton = canvas.getByRole('button', {
      name: /Clear all filters/
    });
    await userEvent.click(clearAllButton);
    await waitFor(async () => {
      await expect(canvas.getByText('Total filters: 0')).toBeInTheDocument();
    });
  }
}`,...I.parameters?.docs?.source},description:{story:`Default story demonstrating the TagFilter component with interactive controls.
Try adding, removing, and selecting filters to see the component in action.`,...I.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [filters, setFilters] = useState<TagFilterItem[]>([{
      id: '1',
      label: 'Status: Active'
    }, {
      id: '2',
      label: 'Version: 1.0.0'
    }, {
      id: '3',
      label: 'Author: John Doe'
    }]);
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    const handleFilterSelect = (filter: TagFilterItem) => {
      setFilters(prev => prev.map(f => f.id === filter.id ? {
        ...f,
        selected: !f.selected
      } : f));
    };
    return <DsTagFilter items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} onItemSelect={handleFilterSelect} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Status: Active'
      })).toBeInTheDocument();
    });

    // Verify all filters are visible
    await expect(canvas.getByRole('button', {
      name: 'Version: 1.0.0'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Author: John Doe'
    })).toBeInTheDocument();

    // Test selection interaction
    const statusTag = canvas.getByRole('button', {
      name: 'Status: Active'
    });
    await userEvent.click(statusTag);
    await waitFor(async () => {
      await expect(statusTag).toHaveAttribute('aria-pressed', 'true');
    });

    // Test deletion interaction - focus the tag to reveal delete button
    statusTag.focus();

    // Wait for delete button to become visible after focus
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Delete tag'
      })).toBeVisible();
    });
    const deleteButton = canvas.getByRole('button', {
      name: 'Delete tag'
    });
    await userEvent.click(deleteButton);
    await waitFor(async () => {
      await expect(canvas.queryByRole('button', {
        name: 'Status: Active'
      })).not.toBeInTheDocument();
    });

    // Verify remaining filters
    await expect(canvas.getByRole('button', {
      name: 'Version: 1.0.0'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Author: John Doe'
    })).toBeInTheDocument();
  }
}`,...E.parameters?.docs?.source},description:{story:"Story showing fewer filters that fit within the visible area without overflow.",...E.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters.slice(0, 5));
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    return <DsTagFilter items={filters} onItemDelete={handleFilterDelete} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Status: Active'
      })).toBeInTheDocument();
    });

    // Verify "Clear all filters" button is NOT present
    await expect(canvas.queryByRole('button', {
      name: /Clear all filters/
    })).not.toBeInTheDocument();

    // Verify deletion still works - focus the tag to reveal delete button
    const firstTag = canvas.getByRole('button', {
      name: 'Status: Active'
    });
    firstTag.focus();

    // Wait for delete button to become visible after focus
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Delete tag'
      })).toBeVisible();
    });
    const deleteButton = canvas.getByRole('button', {
      name: 'Delete tag'
    });
    await userEvent.click(deleteButton);
    await waitFor(async () => {
      await expect(canvas.queryByRole('button', {
        name: 'Status: Active'
      })).not.toBeInTheDocument();
    });
  }
}`,...k.parameters?.docs?.source},description:{story:'Story showing TagFilter without the "Clear all" button.',...k.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const filters: TagFilterItem[] = sampleFilters.slice(0, 5);
    return <DsTagFilter items={filters} locale={{
      label: 'Applied filters:'
    }} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByText('Status: Active')).toBeInTheDocument();
    });

    // Verify custom label is shown
    await expect(canvas.getByText('Applied filters:')).toBeInTheDocument();

    // Verify delete buttons are NOT visible (read-only)
    await expect(canvas.queryByRole('button', {
      name: 'Delete tag'
    })).not.toBeInTheDocument();

    // Verify "Clear all filters" button is NOT present
    await expect(canvas.queryByRole('button', {
      name: /Clear all filters/
    })).not.toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source},description:{story:"Story showing TagFilter without delete functionality (read-only tags).",..._.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters.slice(0, 5));
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    return <DsTagFilter items={filters} locale={{
      label: ''
    }} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Status: Active'
      })).toBeInTheDocument();
    });

    // Verify "Filtered by:" label is NOT present
    await expect(canvas.queryByText('Filtered by:')).not.toBeInTheDocument();

    // Verify "Clear all filters" button is still present and works
    await expect(canvas.getByRole('button', {
      name: /Clear all filters/
    })).toBeInTheDocument();

    // Verify deletion still works - focus the tag to reveal delete button
    const firstTag = canvas.getByRole('button', {
      name: 'Status: Active'
    });
    firstTag.focus();

    // Wait for delete button to become visible after focus
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Delete tag'
      })).toBeVisible();
    });
    const deleteButton = canvas.getByRole('button', {
      name: 'Delete tag'
    });
    await userEvent.click(deleteButton);
    await waitFor(async () => {
      await expect(canvas.queryByRole('button', {
        name: 'Status: Active'
      })).not.toBeInTheDocument();
    });
  }
}`,...q.parameters?.docs?.source},description:{story:"Story showing TagFilter without a label.",...q.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [filters, setFilters] = useState<TagFilterItem[]>(sampleFilters.slice(0, 5));
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    return <DsTagFilter items={filters} locale={{
      // cspell:disable-next-line
      label: 'Aktywne filtry:',
      // cspell:disable-next-line
      clearButton: 'Zresetuj'
    }} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Status: Active'
      })).toBeInTheDocument();
    });

    // Verify custom label is rendered
    // cspell:disable-next-line
    await expect(canvas.getByText('Aktywne filtry:')).toBeInTheDocument();

    // cspell:disable-next-line
    await expect(canvas.getByRole('button', {
      name: /Zresetuj/
    })).toBeInTheDocument();
    await expect(canvas.queryByText('Filtered by:')).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: /Clear all filters/
    })).not.toBeInTheDocument();
  }
}`,...V.parameters?.docs?.source},description:{story:"Story demonstrating full locale customization with both label and clearButton.",...V.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleFilters,
    onExpand: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and overflow tag to appear
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: /\\+\\d+ filters?/
      })).toBeInTheDocument();
    });
    const expandButton = canvas.getByRole('button', {
      name: /\\+\\d+ filters?/
    });

    // Click expand button
    await userEvent.click(expandButton);

    // Verify onExpand was called with true (expanded)
    await waitFor(async () => {
      await expect(args.onExpand).toHaveBeenCalledWith(true);
    });

    // Verify the button now shows "Collapse"
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Collapse'
      })).toBeInTheDocument();
    });
    const collapseButton = canvas.getByRole('button', {
      name: 'Collapse'
    });

    // Click collapse button
    await userEvent.click(collapseButton);

    // Verify onExpand was called with false (collapsed)
    await waitFor(async () => {
      await expect(args.onExpand).toHaveBeenCalledWith(false);
    });

    // Verify the expand button is back
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: /\\+\\d+ filters?/
      })).toBeInTheDocument();
    });
  }
}`,...j.parameters?.docs?.source},description:{story:"Story testing the expand/collapse functionality and onExpand callback.",...j.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [filters, setFilters] = useState<TagFilterItem[]>([{
      id: '1',
      label: 'Status: Active',
      selected: true
    }, {
      id: '2',
      label: 'Running: From 100 to 10,000',
      selected: false
    }, {
      id: '3',
      label: 'Completed from 20,000 to 100,000',
      selected: true
    }, {
      id: '4',
      label: 'Executor: Category 1',
      selected: false
    }, {
      id: '5',
      label: 'Version: 1.0.0',
      selected: true
    }]);
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    const handleFilterSelect = (filter: TagFilterItem) => {
      setFilters(prev => prev.map(f => f.id === filter.id ? {
        ...f,
        selected: !f.selected
      } : f));
    };
    return <DsTagFilter items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} onItemSelect={handleFilterSelect} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for layout calculation to complete and tags to be rendered
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'Status: Active'
      })).toBeInTheDocument();
    });

    // Verify pre-selected tags have aria-pressed="true"
    const activeTag = canvas.getByRole('button', {
      name: 'Status: Active'
    });
    const completedTag = canvas.getByRole('button', {
      name: 'Completed from 20,000 to 100,000'
    });
    const versionTag = canvas.getByRole('button', {
      name: 'Version: 1.0.0'
    });
    await expect(activeTag).toHaveAttribute('aria-pressed', 'true');
    await expect(completedTag).toHaveAttribute('aria-pressed', 'true');
    await expect(versionTag).toHaveAttribute('aria-pressed', 'true');

    // Verify non-selected tags do not have aria-pressed
    const runningTag = canvas.getByRole('button', {
      name: 'Running: From 100 to 10,000'
    });
    const executorTag = canvas.getByRole('button', {
      name: 'Executor: Category 1'
    });
    await expect(runningTag).not.toHaveAttribute('aria-pressed');
    await expect(executorTag).not.toHaveAttribute('aria-pressed');

    // Test toggling selection on a pre-selected tag
    await userEvent.click(activeTag);
    await waitFor(async () => {
      await expect(activeTag).not.toHaveAttribute('aria-pressed');
    });

    // Test toggling selection on a non-selected tag
    await userEvent.click(runningTag);
    await waitFor(async () => {
      await expect(runningTag).toHaveAttribute('aria-pressed', 'true');
    });
  }
}`,...W.parameters?.docs?.source},description:{story:"Story showing TagFilter with pre-selected items.",...W.parameters?.docs?.description}}};const qe=["Default","FewFilters","WithoutClearAll","ReadOnly","WithoutLabel","CustomLocale","ExpandCollapse","WithPreSelectedItems"];export{V as CustomLocale,I as Default,j as ExpandCollapse,E as FewFilters,_ as ReadOnly,W as WithPreSelectedItems,k as WithoutClearAll,q as WithoutLabel,qe as __namedExportsOrder,_e as default};
