"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"MySql",description:"The world's most popular open source database"},s=void 0,i={unversionedId:"applications/system-tools/mysql",id:"applications/system-tools/mysql",title:"MySql",description:"The world's most popular open source database",source:"@site/docs/applications/system-tools/mysql.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/mysql",permalink:"/docs/applications/system-tools/mysql",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/system-tools/mysql.md",tags:[],version:"current",frontMatter:{title:"MySql",description:"The world's most popular open source database"},sidebar:"tutorialSidebar",previous:{title:"Mergerfs",permalink:"/docs/applications/system-tools/mergerfs"},next:{title:"netboot.xyz",permalink:"/docs/applications/system-tools/netbootxyz"}},l={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://www.mysql.net/"},"https://www.mysql.net/")," / ",(0,a.kt)("a",{parentName:"p",href:"https://mariadb.org/"},"https://mariadb.org/")),(0,a.kt)("p",null,"MySQL is an open-source relational database management system (RDBMS).\nMariaDB Server is one of the most popular open source relational databases. It\u2019s made by the original developers of MySQL and guaranteed to stay open source. It is part of most cloud offerings and the default in most Linux distributions."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file and set ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql_db_type")," to the type of database you want: either ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"mariadb"),".\nSet ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql_adminer_enabled: true")," to also install Adminer - a database management utility. Adminer web interface can be found at ",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8098"},"http://ansible_nas_host_or_ip:8098"),"."))}m.isMDXComponent=!0}}]);