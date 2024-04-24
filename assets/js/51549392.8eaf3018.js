"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7219],{8907:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var a=n(5893),s=n(1151);const t={title:"Time Machine"},o=void 0,c={id:"applications/system-tools/timemachine",title:"Time Machine",description:"Apple docs//support.apple.com/en-us/HT201250",source:"@site/docs/applications/system-tools/timemachine.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/timemachine",permalink:"/docs/applications/system-tools/timemachine",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/system-tools/timemachine.md",tags:[],version:"current",frontMatter:{title:"Time Machine"},sidebar:"tutorialSidebar",previous:{title:"Syncthing",permalink:"/docs/applications/system-tools/syncthing"},next:{title:"Watchtower",permalink:"/docs/applications/system-tools/watchtower"}},r={},l=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2},{value:"Upgrading from AFP to SMB-based Time Machine",id:"upgrading-from-afp-to-smb-based-time-machine",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:["Apple docs: ",(0,a.jsx)(i.a,{href:"https://support.apple.com/en-us/HT201250",children:"https://support.apple.com/en-us/HT201250"})]}),"\n",(0,a.jsxs)(i.p,{children:["Docker image: ",(0,a.jsx)(i.a,{href:"https://github.com/awlx/samba-timemachine",children:"https://github.com/awlx/samba-timemachine"})]}),"\n",(0,a.jsx)(i.p,{children:"Time Machine is an application that allows you to backup files from your Mac."}),"\n",(0,a.jsx)(i.p,{children:'Older versions of Time Machine relied on AFP (netatalk) shares. Apple has deprecated Time Machine over AFP in favor of SMB (Samba), and current versions of Ansible-NAS use a Samba-based Time Machine share. If you are upgrading from an older version of Ansible-NAS, you will need to re-select your Time Machine back up disk by opening Time Machine Preferences and Selecting your backup disk via the "Select Disk..." option. Your Mac will find the old backups on the share and use them.'}),"\n",(0,a.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(i.p,{children:["Set ",(0,a.jsx)(i.code,{children:"timemachine_enabled: true"})," in your ",(0,a.jsx)(i.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,a.jsxs)(i.p,{children:["Enabling Time Machine will result in the installation of Avahi on the NAS system (if it is not already installed) and a Time Machine service configuration file for Avahi will be added to the system (at ",(0,a.jsx)(i.code,{children:"/etc/avahi/services/timemachine.service"}),") to allow for Time Machine discovery by Macs on the local network. Avahi runs on the system, rather than in a container, as the same Avahi instance can be used to announce any number of services."]}),"\n",(0,a.jsxs)(i.p,{children:["The Samba server included in the Time Machine docker container logs to ",(0,a.jsx)(i.code,{children:"STDOUT"})," and is compatible with ",(0,a.jsx)(i.a,{href:"https://docs.docker.com/config/containers/logging/",children:"Docker's built-in logging infrastructure."})]}),"\n",(0,a.jsx)(i.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"timemachine_data_directory"}),": The absolute path on Ansible NAS where the backup files will be stored"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"timemachine_volume_size_limit"}),": The maximum amount of space Time Machine can use for the backups in units of MiB.  Set it to 0 for no limit."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"timemachine_share_name"}),": The name of the share as it will appear in the Time Machine application. Default is 'Data'"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"timemachine_password"}),": The password used to access the share.  Default is 'timemachine'"]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"upgrading-from-afp-to-smb-based-time-machine",children:"Upgrading from AFP to SMB-based Time Machine"}),"\n",(0,a.jsx)(i.p,{children:'Older versions of Time Machine included in Ansible-NAS relied on AFP (netatalk) shares. Apple has deprecated Time Machine over AFP in favor of SMB (Samba), and current versions of Ansible-NAS use a Samba-based Time Machine share. If you are upgrading from an older version of Ansible-NAS with the AFP-based Time Machine, you will need to re-select your Time Machine back up disk by opening Time Machine Preferences and Selecting your backup disk via the "Select Disk..." option. Your Mac will find the old backups on the share and use them.'})]})}function d(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>o});var a=n(7294);const s={},t=a.createContext(s);function o(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:i},e.children)}}}]);