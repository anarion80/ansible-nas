"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7767],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Speedtest-Tracker"},i=void 0,p={unversionedId:"applications/monitoring/speedtest",id:"applications/monitoring/speedtest",title:"Speedtest-Tracker",description:"Homepage:",source:"@site/docs/applications/monitoring/speedtest.md",sourceDirName:"applications/monitoring",slug:"/applications/monitoring/speedtest",permalink:"/docs/applications/monitoring/speedtest",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/monitoring/speedtest.md",tags:[],version:"current",frontMatter:{title:"Speedtest-Tracker"},sidebar:"tutorialSidebar",previous:{title:"Librespeed",permalink:"/docs/applications/monitoring/librespeed"},next:{title:"Stats",permalink:"/docs/applications/monitoring/stats"}},s={},c=[{value:"Usage",id:"usage",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/henrywhitaker3/Speedtest-Tracker"},"https://github.com/henrywhitaker3/Speedtest-Tracker")),(0,a.kt)("p",null,"Docker Container: ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/henrywhitaker3/speedtest-tracker"},"https://hub.docker.com/r/henrywhitaker3/speedtest-tracker")),(0,a.kt)("p",null,"Continuously track your internet speed"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"speedtest_tracker_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,a.kt)("p",null,"If you want to access Speedtest-Tracker externally, don't forget to set ",(0,a.kt)("inlineCode",{parentName:"p"},"speedtest_tracker_available_externally: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,a.kt)("p",null,"The Speedtest-Tracker interface can be found at ",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8765"},"http://ansible_nas_host_or_ip:8765"),"."))}d.isMDXComponent=!0}}]);