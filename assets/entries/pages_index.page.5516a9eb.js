import{j as e,a,R as o,F as l}from"../chunks/chunk-735224b2.js";import{_ as d}from"../chunks/chunk-101896b7.js";function c(n){return e("header",{className:"w3-display-topleft w3-padding-large w3-xlarge",children:"Logo"})}function u(n={}){const{wrapper:t}=n.components||{};return t?e(t,Object.assign({},n,{children:e(c,n)})):c()}function r(n){const t=Object.assign({p:"p"},n.components);return a("footer",{className:"w3-display-bottomleft w3-padding-large",children:[e(t.p,{children:"Powered by"}),e("a",{href:"https://www.w3schools.com/w3css/default.asp",target:"_blank",children:e(t.p,{children:"w3.css"})})]})}function m(n={}){const{wrapper:t}=n.components||{};return t?e(t,Object.assign({},n,{children:e(r,n)})):r(n)}function p({children:n}){return e("main",{className:"w3-display-middle",children:n})}function f(){const[n,t]=o.useState(()=>s);return o.useEffect(()=>{t(()=>o.lazy(()=>d(()=>import("../chunks/chunk-8a2faf70.js"),["assets/chunks/chunk-8a2faf70.js","assets/chunks/chunk-735224b2.js"])))},[]),e(o.Suspense,{fallback:e(s,{}),children:a("p",{className:"w3-large w3-center",children:[e(n,{})," days left"]})})}function s(){return e("span",{})}const h={title:"Coming Soon",description:"A scaffold for a coming soon page with diy-pwa and vite-plugin-ssr"};function i(n){const t=Object.assign({h1:"h1"},n.components);return a(l,{children:[e(u,{}),`
`,a(p,{children:[e(t.h1,{children:h.title}),e("hr",{className:"w3-border-grey"}),e(f,{})]}),`
`,e(m,{})]})}function _(n={}){const{wrapper:t}=n.components||{};return t?e(t,Object.assign({},n,{children:e(i,n)})):i(n)}export{_ as default,h as documentProps};