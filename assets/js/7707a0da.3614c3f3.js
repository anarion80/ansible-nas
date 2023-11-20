"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[3176],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={title:"Miniserve",description:"CLI tool to serve files and dirs over HTTP"},a=void 0,s={unversionedId:"applications/other/miniserve",id:"applications/other/miniserve",title:"Miniserve",description:"CLI tool to serve files and dirs over HTTP",source:"@site/docs/applications/other/miniserve.md",sourceDirName:"applications/other",slug:"/applications/other/miniserve",permalink:"/docs/applications/other/miniserve",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/miniserve.md",tags:[],version:"current",frontMatter:{title:"Miniserve",description:"CLI tool to serve files and dirs over HTTP"},sidebar:"tutorialSidebar",previous:{title:"Mealie",permalink:"/docs/applications/other/mealie"},next:{title:"Mumble",permalink:"/docs/applications/other/mumble"}},l={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Homepage: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/svenstaro/miniserve"},"https://github.com/svenstaro/miniserve")),(0,i.kt)("p",null,"miniserve is a small, self-contained cross-platform CLI tool that allows you to just grab the binary and serve some file(s) via HTTP. Sometimes this is just a more practical and quick way than doing things properly."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"miniserve_enabled: true")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file. Optionally, edit ",(0,i.kt)("inlineCode",{parentName:"p"},"miniserve_options")," to set the needed miniserve options."),(0,i.kt)("p",null,"miniserve web interface can be found at ",(0,i.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8117"},"http://ansible_nas_host_or_ip:8117"),"."))}m.isMDXComponent=!0}}]);