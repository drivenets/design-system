import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CZ5iBjtE.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,s as a}from"./blocks-Cc17joAG.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Guidelines/Z-index`}),`
`,(0,c.jsx)(t.h1,{id:`z-index`,children:`Z-index`}),`
`,(0,c.jsxs)(t.p,{children:[`Portaled overlays stack in tiers. Each tier is a CSS custom property on `,(0,c.jsx)(t.code,{children:`:root`}),`, so an app can place its own
overlays between the DS tiers, or move a tier, without reading the compiled CSS.`]}),`
`,(0,c.jsx)(t.p,{children:`Tokens come in two layers, like the colors: value tokens hold the numbers, and tier tokens point at them. Components
and apps read the tier tokens.`}),`
`,(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:`Tier token`}),(0,c.jsx)(t.th,{children:`Value token`}),(0,c.jsx)(t.th,{children:`Default`}),(0,c.jsx)(t.th,{children:`Tier`}),(0,c.jsx)(t.th,{children:`Read by today`})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--z-index-popover`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--z-index-1000`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`1000`})}),(0,c.jsx)(t.td,{children:`Popovers anchored to page content`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`DsPopover`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--z-index-drawer`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--z-index-1200`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`1200`})}),(0,c.jsx)(t.td,{children:`Drawer panels`}),(0,c.jsx)(t.td,{children:`—`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--z-index-modal`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--z-index-1200`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`1200`})}),(0,c.jsx)(t.td,{children:`Modal and dialog content`}),(0,c.jsx)(t.td,{children:`—`})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--z-index-dropdown`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--z-index-9999`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`9999`})}),(0,c.jsx)(t.td,{children:`Select, autocomplete and dropdown menus`}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`DsAutocomplete`})})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--z-index-tooltip`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`--z-index-9999`})}),(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:`9999`})}),(0,c.jsx)(t.td,{children:`Tooltips`}),(0,c.jsx)(t.td,{children:`—`})]})]})]}),`
`,(0,c.jsx)(t.p,{children:`Overlays are moving onto these tokens one component at a time. Until a component reads its token, overriding the
token doesn't move that component.`}),`
`,(0,c.jsx)(t.h2,{id:`placing-an-app-overlay`,children:`Placing an app overlay`}),`
`,(0,c.jsx)(t.p,{children:`Read the tokens instead of copying their numbers:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.app-banner {
	z-index: calc(var(--z-index-modal) + 1);
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`moving-a-tier`,children:`Moving a tier`}),`
`,(0,c.jsxs)(t.p,{children:[`Override the token on `,(0,c.jsx)(t.code,{children:`:root`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`:root {
	--z-index-popover: 1100;
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};