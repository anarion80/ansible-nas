"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[6930],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),f=n,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Flame"},i=void 0,l={unversionedId:"applications/dashboards/flame",id:"applications/dashboards/flame",title:"Flame",description:"Homepage:",source:"@site/docs/applications/dashboards/flame.md",sourceDirName:"applications/dashboards",slug:"/applications/dashboards/flame",permalink:"/docs/applications/dashboards/flame",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/dashboards/flame.md",tags:[],version:"current",frontMatter:{title:"Flame"},sidebar:"tutorialSidebar",previous:{title:"Dashy",permalink:"/docs/applications/dashboards/dashy"},next:{title:"Heimdall",permalink:"/docs/applications/dashboards/heimdall"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Homepage: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pawelmalak/flame"},"https://github.com/pawelmalak/flame")),(0,n.kt)("p",null,"Flame is self-hosted startpage for your server. Easily manage your apps and bookmarks with built-in editors."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"flame_enabled: true")," in your ",(0,n.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,n.kt)("p",null,"Set all ",(0,n.kt)("inlineCode",{parentName:"p"},"flame_*")," variables in ",(0,n.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/group_vars/all.yml"),"."),(0,n.kt)("p",null,"The flame web interface can be found at ",(0,n.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:5005"},"http://ansible_nas_host_or_ip:5005"),"."),(0,n.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,n.kt)("p",null,"Check ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pawelmalak/flame"},"https://github.com/pawelmalak/flame")," for more details on using the docker integration."))}m.isMDXComponent=!0}}]);