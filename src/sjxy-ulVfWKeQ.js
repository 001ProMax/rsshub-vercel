import"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import{ofetch_default as e}from"./ofetch-CeMUzp5K.js";import{cache_default as t}from"./cache-Dfid4xgQ.js";import{parseDate as n}from"./parse-date-DHsdom8D.js";import{timezone as r}from"./timezone-CMz5pnRe.js";import{load as i}from"cheerio";const a=`https://www.qztc.edu.cn/sjxy/`,o={path:`/sjxy/:type`,categories:[`university`],example:`/qztc/sjxy/1939`,parameters:{type:`分类，见下表`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`数学与计算机科学学院 软件学院`,maintainers:[`iQNRen`],url:`www.qztc.edu.cn`,handler:s,radar:[{source:[`www.qztc.edu.cn/sjxy/:type/list.htm`],target:`/sjxy/:type`}],description:`| 板块 | 参数 |
| ------- | ------- |
| 学院概况 | 1938 |
| 学院动态 | 1939 |
| 学科建设 | 1940 |
| 教学教务 | 1941 |
| 人才培养 | 1942 |
| 科研工作 | 1943 |
| 党群工作 | 1944 |
| 团学工作 | 1945 |
| 资料下载 | 1947 |
| 采购信息 | 1948 |
| 信息公开 | xxgk |
`};async function s(o){let s=o.req.param(`type`),c=i(await e(a+s+`/list.htm`)),l=c(`.news.clearfix`).toArray().map(e=>{let t=c(e),i=t.find(`a`);try{let e=i.attr(`title`)||``,o=i.attr(`href`);o?o.startsWith(`http`)||(o=a.slice(0,-1)+o):o=``;let s=r(n(t.find(`.news_meta`).text()),8);return{title:e,link:o,pubDate:s}}catch{return{title:``,link:``,pubDate:Date.now()}}}).filter(e=>e.title&&e.link),u=await Promise.all(l.map(n=>t.tryGet(n.link,async()=>{let t={...n,description:``};return new URL(n.link).hostname===`www.qztc.edu.cn`?new URL(n.link).pathname.startsWith(`/_upload`)?t.description=n.link:t.description=i(await e(n.link))(`.wp_articlecontent`).html()||``:t.description=n.link,t})));return{title:c(`head > title`).text()+` - 泉州师范学院-数学与计算机科学学院 软件学院`,link:a+s+`/list.htm`,item:u}}export{o as route};