"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[1359],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={title:"Shaarli",description:"Personal, minimalist, super-fast, database free, bookmarking service"},o=void 0,s={unversionedId:"applications/other/shaarli",id:"applications/other/shaarli",title:"Shaarli",description:"Personal, minimalist, super-fast, database free, bookmarking service",source:"@site/docs/applications/other/shaarli.md",sourceDirName:"applications/other",slug:"/applications/other/shaarli",permalink:"/docs/applications/other/shaarli",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/shaarli.md",tags:[],version:"current",frontMatter:{title:"Shaarli",description:"Personal, minimalist, super-fast, database free, bookmarking service"},sidebar:"tutorialSidebar",previous:{title:"SearxNG",permalink:"/docs/applications/other/searxng"},next:{title:"Stirling-PDF",permalink:"/docs/applications/other/stirlingpdf"}},l={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Homepage: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/shaarli/Shaarli"},"https://github.com/shaarli/Shaarli")),(0,n.kt)("p",null,"The personal, minimalist, super-fast, database free, bookmarking service."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"shaarli_enabled: true")," in your ",(0,n.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,n.kt)("p",null,"shaarli web interface can be found at ",(0,n.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8102"},"http://ansible_nas_host_or_ip:8102"),"."))}f.isMDXComponent=!0}}]);