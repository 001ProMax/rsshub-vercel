import{__dirname as e,init_esm_shims as t}from"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-CeMUzp5K.js";import"./helpers-qpI1t-yV.js";import{cache_default as n}from"./cache-Dfid4xgQ.js";import{art as r}from"./render-DftO2d-b.js";import{parseDate as i}from"./parse-date-DHsdom8D.js";import{got_default as a}from"./got-Di2lBekK.js";import{timezone as o}from"./timezone-CMz5pnRe.js";import s from"node:path";import{load as c}from"cheerio";t();const l={path:`/app/:column?`,categories:[`traditional-media`],example:`/gzdaily/app/74`,parameters:{column:`栏目 ID，点击对应栏目后在地址栏找到`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`客户端`,maintainers:[`TimWu007`],handler:u,description:`::: tip
  在北京时间深夜可能无法获取内容。
:::

  常用栏目 ID：

| 栏目名 | ID   |
| ------ | ---- |
| 首页   | 74   |
| 时局   | 374  |
| 广州   | 371  |
| 大湾区 | 397  |
| 城区   | 2980 |`};async function u(t){let l=t.req.param(`column`)??74,{data:u}=await a(`https://app.gzdaily.cn/app_if/getArticles?columnId=${l}&page=1`),d=u.list.filter(e=>e.newstype===0).map(t=>({title:t.title,description:r(s.join(e,`templates/description-60b509f9.art`),{thumb:t.picBig}),pubDate:o(i(t.publishtime),8),link:t.shareUrl,colName:t.colName,author:t.arthorName})),f=``,p=await Promise.all(d.map(e=>n.tryGet(e.link,async()=>{let t=c((await a({method:`get`,url:e.link})).data);return f=f===``?e.colName:f,t(`.abstract`).text()&&(t(`.abstract`).find(`span`).remove(),e.description+=`<blockquote>`+t(`.abstract`).text()+`</blockquote>`),e.description+=t(`.article`).html()??``,e})));return{title:`广州日报客户端 - ${f}`,link:`https://www.gzdaily.cn/amucsite/web/index.html#/home/${l}`,item:p}}export{l as route};