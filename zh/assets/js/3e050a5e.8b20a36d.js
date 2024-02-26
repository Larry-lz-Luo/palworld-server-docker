"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[49],{8015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var n=r(4848),s=r(8453);const d={sidebar_position:4},i="\u81ea\u52a8\u91cd\u542f",o={id:"guides/automatic-reboots",title:"\u81ea\u52a8\u91cd\u542f",description:"\u4f7f\u7528 Cron \u914d\u7f6e\u81ea\u52a8\u91cd\u542f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/guides/automatic-reboots.md",sourceDirName:"guides",slug:"/guides/automatic-reboots",permalink:"/zh/guides/automatic-reboots",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/guides/automatic-reboots.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 discord webhooks",permalink:"/zh/guides/discord/discord-webhooks"},next:{title:"\u81ea\u52a8\u66f4\u65b0",permalink:"/zh/guides/automatic-updates"}},c={},l=[{value:"\u4f7f\u7528 Cron \u914d\u7f6e\u81ea\u52a8\u91cd\u542f",id:"\u4f7f\u7528-cron-\u914d\u7f6e\u81ea\u52a8\u91cd\u542f",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u81ea\u52a8\u91cd\u542f",children:"\u81ea\u52a8\u91cd\u542f"}),"\n",(0,n.jsx)(t.h2,{id:"\u4f7f\u7528-cron-\u914d\u7f6e\u81ea\u52a8\u91cd\u542f",children:"\u4f7f\u7528 Cron \u914d\u7f6e\u81ea\u52a8\u91cd\u542f"}),"\n",(0,n.jsxs)(t.p,{children:["\u8981\u4f7f\u7528\u6b64\u670d\u52a1\u5668\u7684\u81ea\u52a8\u91cd\u542f\u529f\u80fd\uff0c\u5fc5\u987b\u5c06\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\u8bbe\u7f6e\u4e3a ",(0,n.jsx)(t.code,{children:"true"}),"\uff1a"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"RCON_ENABLED"})}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsxs)(t.p,{children:["\u5982\u679c docker \u91cd\u542f\u672a\u8bbe\u7f6e\u4e3a\u7b56\u7565 ",(0,n.jsx)(t.code,{children:"always"})," \u6216 ",(0,n.jsx)(t.code,{children:"unless-stopped"}),"\uff0c\n\u5219\u670d\u52a1\u5668\u5c06\u5173\u95ed\u5e76\u9700\u8981\u624b\u52a8\u91cd\u65b0\u542f\u52a8\u3002"]}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://palworld-server-docker.loef.dev/zh/",children:"\u5feb\u901f\u8bbe\u7f6e"}),"\u4e2d\u7684\u793a\u4f8b docker run \u547d\u4ee4\u548c docker-compose \u6587\u4ef6\u5df2\u4f7f\u7528\u6240\u9700\u7684\u7b56\u7565\u3002"]})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u53d8\u91cf"}),(0,n.jsx)(t.th,{children:"\u4fe1\u606f"}),(0,n.jsx)(t.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(t.th,{children:"\u5141\u8bb8\u7684\u503c"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AUTO_REBOOT_CRON_EXPRESSION"}),(0,n.jsx)(t.td,{children:"\u8bbe\u7f6e\u5f71\u54cd\u81ea\u52a8\u66f4\u65b0\u7684\u9891\u7387\u3002"}),(0,n.jsx)(t.td,{children:"0 0 * * *"}),(0,n.jsxs)(t.td,{children:["\u9700\u8981 Cron \u8868\u8fbe\u5f0f - \u8bf7\u53c2\u89c1 ",(0,n.jsx)(t.a,{href:"https://palworld-server-docker.loef.dev/zh/guides/backup/automated-backup/",children:"\u4f7f\u7528 Cron \u914d\u7f6e\u81ea\u52a8\u5907\u4efd"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AUTO_REBOOT_ENABLED"}),(0,n.jsx)(t.td,{children:"\u542f\u7528\u81ea\u52a8\u91cd\u542f"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"true/false"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AUTO_REBOOT_WARN_MINUTES"}),(0,n.jsx)(t.td,{children:"\u5728\u901a\u77e5\u73a9\u5bb6\u540e\u7b49\u5f85\u591a\u957f\u65f6\u95f4\u91cd\u542f\u670d\u52a1\u5668"}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"!0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AUTO_REBOOT_EVEN_IF_PLAYERS_ONLINE"}),(0,n.jsx)(t.td,{children:"\u5373\u4f7f\u6709\u73a9\u5bb6\u5728\u7ebf\uff0c\u4e5f\u91cd\u65b0\u542f\u52a8\u670d\u52a1\u5668"}),(0,n.jsx)(t.td,{children:"false"}),(0,n.jsx)(t.td,{children:"true/false"})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["\u8be5\u955c\u50cf\u4f7f\u7528 Supercronic \u8fdb\u884c cron \u4f5c\u4e1a\u3002\n\u8bf7\u53c2\u9605 ",(0,n.jsx)(t.a,{href:"https://github.com/aptible/supercronic#crontab-format",children:"supercronic"}),"\n\u6216 ",(0,n.jsx)(t.a,{href:"https://crontab-generator.org",children:"Crontab Generator"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["\u8bbe\u7f6e ",(0,n.jsx)(t.code,{children:"AUTO_REBOOT_CRON_EXPRESSION"})," \u4ee5\u66f4\u6539\u65f6\u7a0b\uff0c \u9ed8\u8ba4\u4e3a\u6bcf\u5929\u5348\u591c\uff0c\u6839\u636e\u8bbe\u7f6e\u7684\u65f6\u533a\u8fdb\u884c\u8c03\u6574\u3002"]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(6540);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);