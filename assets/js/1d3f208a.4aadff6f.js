"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[8044],{7718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(5893),o=n(1151);const a={title:"Authentik"},s=void 0,r={id:"applications/other/authentik",title:"Authentik",description:"Homepage//goauthentik.io",source:"@site/docs/applications/other/authentik.md",sourceDirName:"applications/other",slug:"/applications/other/authentik",permalink:"/ansible-nas/docs/applications/other/authentik",draft:!1,unlisted:!1,editUrl:"https://github.com/anarion80/ansible-nas/tree/main/website/docs/applications/other/authentik.md",tags:[],version:"current",frontMatter:{title:"Authentik"},sidebar:"tutorialSidebar",previous:{title:"Authelia",permalink:"/ansible-nas/docs/applications/other/authelia"},next:{title:"Barcode Buddy",permalink:"/ansible-nas/docs/applications/other/barcodebuddy"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Homepage: ",(0,i.jsx)(t.a,{href:"https://goauthentik.io",children:"https://goauthentik.io"})]}),"\n",(0,i.jsx)(t.p,{children:"authentik is an open-source Identity Provider focused on flexibility and versatility. You can use authentik in an existing environment to add support for new protocols, implement sign-up/recovery/etc. in your application so you don't have to deal with it, and many other things."}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"authentik_enabled: true"})," in your ",(0,i.jsx)(t.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,i.jsxs)(t.p,{children:["Set all ",(0,i.jsx)(t.code,{children:"authentik_*"})," variables in ",(0,i.jsx)(t.code,{children:"inventories/<your_inventory>/group_vars/all.yml"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The Authentik web interface can be found at ",(0,i.jsx)(t.a,{href:"http://ansible_nas_host_or_ip:9001",children:"http://ansible_nas_host_or_ip:9001"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To start the initial setup, navigate to ",(0,i.jsx)(t.a,{href:"http://ansible_nas_host_or_ip:9001/if/flow/initial-setup/",children:"http://ansible_nas_host_or_ip:9001/if/flow/initial-setup/"}),". There you will be prompted to set a password for the akadmin user."]}),"\n",(0,i.jsx)(t.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["Check ",(0,i.jsx)(t.a,{href:"https://goauthentik.io/docs/installation/configuration",children:"https://goauthentik.io/docs/installation/configuration"})," for full list of configuration options."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(7294);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);