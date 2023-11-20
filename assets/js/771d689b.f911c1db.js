"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[5409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={title:"Littlelink-server",description:"Self-hosted alternative to linktree"},l=void 0,a={unversionedId:"applications/other/littlelink",id:"applications/other/littlelink",title:"Littlelink-server",description:"Self-hosted alternative to linktree",source:"@site/docs/applications/other/littlelink.md",sourceDirName:"applications/other",slug:"/applications/other/littlelink",permalink:"/docs/applications/other/littlelink",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/littlelink.md",tags:[],version:"current",frontMatter:{title:"Littlelink-server",description:"Self-hosted alternative to linktree"},sidebar:"tutorialSidebar",previous:{title:"Listmonk",permalink:"/docs/applications/other/listmonk"},next:{title:"Mattermost",permalink:"/docs/applications/other/mattermost"}},p={},s=[{value:"Usage",id:"usage",level:2}],c={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Homepage: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/techno-tim/littlelink-server"},"https://github.com/techno-tim/littlelink-server")),(0,i.kt)("p",null,"A lightweight, open source, and self-hosted alternative to linktree in a Docker container!"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"littlelink_enabled: true")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,i.kt)("p",null,"littlelink web interface can be found at ",(0,i.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8114"},"http://ansible_nas_host_or_ip:8114"),"."))}f.isMDXComponent=!0}}]);