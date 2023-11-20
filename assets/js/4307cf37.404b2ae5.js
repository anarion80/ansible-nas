"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[1171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const o={title:"Invidious",description:"an alternative front-end to YouTube "},a=void 0,s={unversionedId:"applications/media-serving/invidious",id:"applications/media-serving/invidious",title:"Invidious",description:"an alternative front-end to YouTube ",source:"@site/docs/applications/media-serving/invidious.md",sourceDirName:"applications/media-serving",slug:"/applications/media-serving/invidious",permalink:"/docs/applications/media-serving/invidious",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/media-serving/invidious.md",tags:[],version:"current",frontMatter:{title:"Invidious",description:"an alternative front-end to YouTube "},sidebar:"tutorialSidebar",previous:{title:"Gaps",permalink:"/docs/applications/media-serving/gaps"},next:{title:"Jellyfin",permalink:"/docs/applications/media-serving/jellyfin"}},p={},l=[{value:"Usage",id:"usage",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Homepage: ",(0,r.kt)("a",{parentName:"p",href:"https://invidious.io/"},"https://invidious.io/")),(0,r.kt)("p",null,"Invidious is an open source alternative front-end to YouTube."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"invidious_enabled: true")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file. Set ",(0,r.kt)("inlineCode",{parentName:"p"},"invidious_config")," according to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iv-org/invidious/blob/master/config/config.example.yml"},"https://github.com/iv-org/invidious/blob/master/config/config.example.yml")," and your needs."),(0,r.kt)("p",null,"invidious web interface can be found at ",(0,r.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:3002"},"http://ansible_nas_host_or_ip:3002"),"."))}d.isMDXComponent=!0}}]);