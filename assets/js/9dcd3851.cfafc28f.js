"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[5586],{262:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=n(5893),a=n(1151);const s={title:"Cloudflare DDNS"},l=void 0,i={id:"applications/system-tools/cloudflare_ddns",title:"Cloudflare DDNS",description:"Homepage//github.com/joshuaavalon/docker-cloudflare",source:"@site/docs/applications/system-tools/cloudflare_ddns.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/cloudflare_ddns",permalink:"/ansible-nas/docs/applications/system-tools/cloudflare_ddns",draft:!1,unlisted:!1,editUrl:"https://github.com/anarion80/ansible-nas/tree/main/website/docs/applications/system-tools/cloudflare_ddns.md",tags:[],version:"current",frontMatter:{title:"Cloudflare DDNS"},sidebar:"tutorialSidebar",previous:{title:"Cloud Commander",permalink:"/ansible-nas/docs/applications/system-tools/cloudcmd"},next:{title:"DbGate",permalink:"/ansible-nas/docs/applications/system-tools/dbgate"}},r={},c=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["Homepage: ",(0,t.jsx)(o.a,{href:"https://github.com/joshuaavalon/docker-cloudflare",children:"https://github.com/joshuaavalon/docker-cloudflare"})]}),"\n",(0,t.jsxs)(o.p,{children:["Cloudflare: ",(0,t.jsx)(o.a,{href:"https://www.cloudflare.com",children:"https://www.cloudflare.com"})]}),"\n",(0,t.jsx)(o.p,{children:"If you want your Ansible-NAS accessible externally then you'll need a domain name. You'll also need to set a wildcard\nhost A record to point to your static IP, or enable this container to automatically update Cloudflare with your dynamic IP address."}),"\n",(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"cloudflare_ddns_enabled: true"})," in your ",(0,t.jsx)(o.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"cloudflare_ddns_token"})," to the one you grab from the Cloudflare UI (more below)."]}),"\n",(0,t.jsx)(o.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,t.jsxs)(o.p,{children:["Make sure you set your domain (if different than the ansible-nas default) and access token details within your ",(0,t.jsx)(o.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file. If you need to create an API token, see ",(0,t.jsx)(o.a,{href:"https://github.com/joshuaavalon/docker-cloudflare/#api-token",children:"https://github.com/joshuaavalon/docker-cloudflare/#api-token"})," for instructions."]}),"\n",(0,t.jsxs)(o.p,{children:["Cloudflare has deprecated global API key authentication. If you have an older ansible-nas configuration using a global API key, you can upgrade to the API token-based authentication by removing the ",(0,t.jsx)(o.code,{children:"cloudflare_ddns_api_key"})," variable from your local ",(0,t.jsx)(o.code,{children:"nas.yml"})," configuration file and setting the ",(0,t.jsx)(o.code,{children:"cloudflare_ddns_token"})," variable appropriately."]})]})}function u(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>i,a:()=>l});var t=n(7294);const a={},s=t.createContext(a);function l(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);