"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[2544],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=p(o),m=r,b=y["".concat(l,".").concat(m)]||y[m]||u[m]||a;return o?n.createElement(b,i(i({ref:t},c),{},{components:o})):n.createElement(b,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},7970:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const a={title:"netboot.xyz"},i=void 0,s={unversionedId:"applications/system-tools/netbootxyz",id:"applications/system-tools/netbootxyz",title:"netboot.xyz",description:"Homepage:",source:"@site/docs/applications/system-tools/netbootxyz.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/netbootxyz",permalink:"/docs/applications/system-tools/netbootxyz",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/system-tools/netbootxyz.md",tags:[],version:"current",frontMatter:{title:"netboot.xyz"},sidebar:"tutorialSidebar",previous:{title:"Mergerfs",permalink:"/docs/applications/system-tools/mergerfs"},next:{title:"phpMyAdmin",permalink:"/docs/applications/system-tools/phpmyadmin"}},l={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Homepage: ",(0,r.kt)("a",{parentName:"p",href:"https://netboot.xyz/"},"https://netboot.xyz/")),(0,r.kt)("p",null,"Docker Container: ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/linuxserver/netbootxyz"},"https://hub.docker.com/r/linuxserver/netbootxyz")),(0,r.kt)("p",null,"netboot.xyz is a way to PXE boot various operating system installers or utilities from one place within the BIOS without the need of having to go retrieve the media to run the tool. ",(0,r.kt)("a",{parentName:"p",href:"https://ipxe.org/"},"iPXE")," is used to provide a user friendly menu from within the BIOS that lets you easily choose the operating system you want along with any specific types of versions or bootable flags."),(0,r.kt)("p",null,"You can remote attach the ISO to servers, set it up as a rescue option in Grub, or even set up your home network to boot to it by default so that it's always available."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"netbootxyz_enabled: true")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,r.kt)("p",null,"The netbooxyz web interface can be found at ",(0,r.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:3002"},"http://ansible_nas_host_or_ip:3002"),"."))}u.isMDXComponent=!0}}]);