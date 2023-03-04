"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[5506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),l=(n(7294),n(3905));const r={title:"Rclone"},a=void 0,i={unversionedId:"applications/system-tools/rclone",id:"applications/system-tools/rclone",title:"Rclone",description:"Homepage:",source:"@site/docs/applications/system-tools/rclone.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/rclone",permalink:"/docs/applications/system-tools/rclone",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/system-tools/rclone.md",tags:[],version:"current",frontMatter:{title:"Rclone"},sidebar:"tutorialSidebar",previous:{title:"Portainer",permalink:"/docs/applications/system-tools/portainer"},next:{title:"Restic",permalink:"/docs/applications/system-tools/restic"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Basic",id:"basic",level:3},{value:"Rclone mount",id:"rclone-mount",level:3},{value:"Cloud upload",id:"cloud-upload",level:3},{value:"Disabling",id:"disabling",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Homepage: ",(0,l.kt)("a",{parentName:"p",href:"https://rclone.org"},"https://rclone.org")),(0,l.kt)("p",null,"Rclone is a command-line program to manage files on cloud storage. It is a feature-rich alternative to cloud vendors' web storage interfaces. Over 40 cloud storage products support rclone including S3 object stores, business & consumer file storage services, as well as standard transfer protocols."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"basic"},"Basic"),(0,l.kt)("p",null,"Set ",(0,l.kt)("inlineCode",{parentName:"p"},"rclone_enabled: true")," in your ",(0,l.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,l.kt)("p",null,"Set all the rclone variables that you need (see ",(0,l.kt)("inlineCode",{parentName:"p"},"defaults/main.yml")," for reference), especially the ",(0,l.kt)("inlineCode",{parentName:"p"},"rclone_configs")," variable to have your remotes added to rclone config."),(0,l.kt)("p",null,"The base version just installs Rclone using ",(0,l.kt)("a",{parentName:"p",href:"https://galaxy.ansible.com/stefangweichinger/ansible_rclone"},"stefangweichinger.ansible_rclone")," role."),(0,l.kt)("h3",{id:"rclone-mount"},"Rclone mount"),(0,l.kt)("p",null,"Optionally, you can enable ",(0,l.kt)("inlineCode",{parentName:"p"},"rclone_mount_enabled: true")," and then an Rclone service will be created based on you config, which will automatically mount the selected ",(0,l.kt)("inlineCode",{parentName:"p"},"rclone_remote_to_mount")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"rclone_remote_path_to_mount")," location."),(0,l.kt)("h3",{id:"cloud-upload"},"Cloud upload"),(0,l.kt)("p",null,"Optionally, if Rclone mount is enabled and mergerfs is enabled, you can enable ",(0,l.kt)("inlineCode",{parentName:"p"},"rclone_cloud_upload_enabled: true")," and then a script will be created and added as a cron job, that will periodically execute ",(0,l.kt)("inlineCode",{parentName:"p"},"rclone move")," command to move files from your ",(0,l.kt)("inlineCode",{parentName:"p"},"mergerfs_rclone_local_mount")," to your ",(0,l.kt)("inlineCode",{parentName:"p"},"rclone_remote_to_mount"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Only files older than ",(0,l.kt)("inlineCode",{parentName:"li"},"rclone_cloud_upload_min_age")," will be moved."),(0,l.kt)("li",{parentName:"ul"},"Files matching ",(0,l.kt)("inlineCode",{parentName:"li"},"rclone_cloud_upload_excludes")," will be excluded from moving to remote")),(0,l.kt)("p",null,"This is useful when you indeed use mergerfs to merge together some local directory (where you add new stuff) and Rclone remote (backup location). This way your applications can always see full content, but in the background a script will move files from local storage to remote storage, transparently to your applications."),(0,l.kt)("h3",{id:"disabling"},"Disabling"),(0,l.kt)("p",null,"Disabling both ",(0,l.kt)("inlineCode",{parentName:"p"},"rclone_enabled")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"rclone_mount_enabled")," and rerunning the playbook will disable and mask the created Rclone service.\nDisabling ",(0,l.kt)("inlineCode",{parentName:"p"},"rclone_cloud_upload_enbled")," will remove the cron job and script files."))}u.isMDXComponent=!0}}]);