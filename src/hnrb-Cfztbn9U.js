import"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-CeMUzp5K.js";import"./helpers-qpI1t-yV.js";import{cache_default as e}from"./cache-Dfid4xgQ.js";import{parseDate as t}from"./parse-date-DHsdom8D.js";import{got_default as n}from"./got-Di2lBekK.js";import{timezone as r}from"./timezone-CMz5pnRe.js";import{load as i}from"cheerio";const a={path:`/:id?`,categories:[`traditional-media`],example:`/hnrb`,parameters:{id:`编号，见下表，默认为全部`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`voc.com.cn/`],target:`/:id`}],name:`电子刊物`,maintainers:[`nczitzk`],handler:o,url:`voc.com.cn/`,description:`| 版                   | 编号 |
| -------------------- | ---- |
| 全部                 |      |
| 第 01 版：头版       | 1    |
| 第 02 版：要闻       | 2    |
| 第 03 版：要闻       | 3    |
| 第 04 版：深度       | 4    |
| 第 05 版：市州       | 5    |
| 第 06 版：理论・学习 | 6    |
| 第 07 版：观察       | 7    |
| 第 08 版：时事       | 8    |
| 第 09 版：中缝       | 9    |`};async function o(a){let o=a.req.param(`id`),s=`https://hnrb.voc.com.cn`,c=`${s}/hnrb_epaper`,l=await n({method:`get`,url:c});l=await n({method:`get`,url:`${c}/${o?l.data.match(/URL=(.*)"/)[1].replace(/node_\d+\.htm$/,`node_20${o}.htm`):l.data.match(/URL=(.*)"/)[1]}`});let u=i(l.data),d=l.data.match(/images\/(\d{4}-\d{2}\/\d{2})\/\d{2}\/\d+_brief/),f=`${s}/hnrb_epaper/html/${d[1]}`,p=u(`tbody`).eq(1).find(`a`).toArray().map(e=>`${f}/${u(e).attr(`href`).replace(/\.\//,``)}`).filter(e=>e.endsWith(`div=-1`));return o||await Promise.all(u(`#pageLink`).slice(1).toArray().map(e=>`${f}/${u(e).attr(`href`).replace(/\.\//,``)}`).map(async e=>{let t=i((await n({method:`get`,url:e})).data);p.push(...t(`tbody`).eq(1).find(`a`).toArray().map(e=>`${f}/${t(e).attr(`href`).replace(/\.\//,``)}`).filter(e=>e.endsWith(`div=-1`)))})),p=await Promise.all(p.map(a=>e.tryGet(a,async()=>{let e=i((await n({method:`get`,url:a})).data);return{link:a,title:e(`.font01`).text(),description:e(`#ozoom`).html(),pubDate:r(t(d[1],`YYYY-MM/DD`),8)}}))),{title:`湖南日报${o?` - ${u(`strong`).first().parent().text()}`:``}`,link:c,item:p}}export{a as route};