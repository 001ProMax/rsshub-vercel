import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./render-d6AVTUl2.js";import{t as r}from"./parse-date-CHEO0z5G.js";import{t as i}from"./got-BlqYKpVp.js";import a from"node:path";e();const o={path:`/:column`,categories:[`multimedia`],example:`/cntv/TOPC1451528971114112`,parameters:{column:`栏目ID, 可在对应CNTV栏目页面找到`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`navi.cctv.com/`]}],name:`栏目`,maintainers:[`WhoIsSure`,`Fatpandac`],handler:s,url:`navi.cctv.com/`,description:`::: tip
栏目 ID 查找示例:
打开栏目具体某一期页面，F12 控制台输入\`column_id\`得到栏目 ID。
:::

  栏目

| 新闻联播             | 新闻周刊             | 天下足球             |
| -------------------- | -------------------- | -------------------- |
| TOPC1451528971114112 | TOPC1451559180488841 | TOPC1451551777876756 |`};async function s(e){let o=(await i({method:`get`,url:`https://api.cntv.cn/NewVideo/getVideoListByColumn?id=${e.req.param(`column`)}&n=${Number.isNaN(Number.parseInt(e.req.query(`limit`)))?25:Number.parseInt(e.req.query(`limit`))}&sort=desc&p=1&mode=0&serviceId=tvcctv`})).data.data.list,s=o[0].title.match(/《(.*?)》/)[1];return{title:`CNTV 栏目 - ${s}`,description:`${s} 栏目的视频更新`,item:o.map(e=>({title:e.title,description:n(a.join(t,`templates/column-4b5da82e.art`),{item:e}),pubDate:r(e.time),link:e.url}))}}export{o as route};