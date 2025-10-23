import"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as e}from"./cache-CpEhLexq.js";import{t}from"./parse-date-CHEO0z5G.js";import{t as n}from"./got-BlqYKpVp.js";import{load as r}from"cheerio";const i={path:`/yjsy/zhaosheng/:id?`,categories:[`university`],example:`/sdust/yjsy/zhaosheng`,parameters:{id:`栏目 id，见下表，默认为通知公告`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`研究生招生网`,maintainers:[`nczitzk`],handler:a,description:`栏目

| 招生简章 | 专业目录 | 往届录取 | 管理规定 | 资料下载 |
| -------- | -------- | -------- | -------- | -------- |
| zsjz     | zyml     | wjlq     | glgd     | zlxz     |

| 通知公告 | 博士招生 | 硕士招生 | 推免生招生 | 招生宣传 |
| -------- | -------- | -------- | ---------- | -------- |
| tzgg     | bszs     | sszs     | tms        | zsxc     |`};async function a(i){let a=`https://yjsy.sdust.edu.cn/zhaosheng/${i.req.param(`id`)??`tzgg`}.htm`,o=r((await n({method:`get`,url:a})).data),s=o(`.pageUl ul li a`).toArray().map(e=>(e=o(e),{title:e.attr(`title`),link:new URL(e.attr(`href`),a).href,pubDate:t(e.find(`span`).text())}));return s=await Promise.all(s.map(t=>e.tryGet(t.link,async()=>(t.description=r((await n({method:`get`,url:t.link})).data)(`.txt, .v_news_content`).html(),t)))),{title:o(`title`).text(),link:a,item:s}}export{i as route};