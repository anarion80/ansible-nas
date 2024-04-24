"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[8349],{1248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(5893),s=n(1151);const a={title:"Ghost",description:"A powerful app for new-media creators to publish, share, and grow a business around their content"},i=void 0,r={id:"applications/content-management/ghost",title:"Ghost",description:"A powerful app for new-media creators to publish, share, and grow a business around their content",source:"@site/docs/applications/content-management/ghost.md",sourceDirName:"applications/content-management",slug:"/applications/content-management/ghost",permalink:"/docs/applications/content-management/ghost",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/content-management/ghost.md",tags:[],version:"current",frontMatter:{title:"Ghost",description:"A powerful app for new-media creators to publish, share, and grow a business around their content"},sidebar:"tutorialSidebar",previous:{title:"Flatnotes",permalink:"/docs/applications/content-management/flatnotes"},next:{title:"Huntly",permalink:"/docs/applications/content-management/huntly"}},c={},l=[{value:"Usage",id:"usage",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Homepage: ",(0,o.jsx)(t.a,{href:"https://ghost.org/",children:"https://ghost.org/"})]}),"\n",(0,o.jsx)(t.p,{children:"Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content. It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members."}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"ghost_enabled: true"})," in your ",(0,o.jsx)(t.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file.\nSet all the ",(0,o.jsx)(t.code,{children:"ghost_*"})," environment variables in your inventory, especially the mail related ones. Refer to ",(0,o.jsx)(t.a,{href:"https://ghost.org/docs/config/",children:"Ghost documentaion"})," for configuration details."]}),"\n",(0,o.jsxs)(t.p,{children:["Ghost web interface can be found at ",(0,o.jsx)(t.a,{href:"http://ansible_nas_host_or_ip:2368",children:"http://ansible_nas_host_or_ip:2368"}),". Wait for initialization to finish and then login to admin interface to setup your Ghost instance: ",(0,o.jsx)(t.a,{href:"http://ansible_nas_host_or_ip:2368/ghost",children:"http://ansible_nas_host_or_ip:2368/ghost"}),", starting from admin user."]}),"\n",(0,o.jsxs)(t.p,{children:["By default Ghost uses local storage to store your uploaded media files. If you want to use Cloudinary for that, you can use my own Ghost image with built-in Cloudinary Storage Connector. Just set ",(0,o.jsx)(t.code,{children:"ghost_image_name: anarion/ghost_cloudinary"})," in your inventory and update your Cloudinary account details in relevant environment varialbes."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(7294);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);