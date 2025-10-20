import"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-CeMUzp5K.js";import"./helpers-qpI1t-yV.js";import{cache_default as e}from"./cache-Dfid4xgQ.js";import"./parse-date-DHsdom8D.js";import{got_default as t}from"./got-Di2lBekK.js";import"./timezone-CMz5pnRe.js";import{utils_default as n}from"./utils-BbV9J_1M.js";import{load as r}from"cheerio";const i={path:`/tag/:tag/:type/:option?`,categories:[`new-media`],example:`/pingwest/tag/ChinaJoy/1`,parameters:{tag:`话题名或话题id, 可从话题页url中得到`,type:`内容类型`,option:`参数, 默认无`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`话题动态`,maintainers:[`sanmmm`],handler:a,description:`内容类型

| 最新 | 热门 |
| ---- | ---- |
| 1    | 2    |

  参数

  -   \`fulltext\`，全文输出，例如：\`/pingwest/tag/ChinaJoy/1/fulltext\`

::: tip
  该路由一次最多显示 30 条文章
:::`};async function a(i){let{tag:a,type:o,option:s}=i.req.param(),c=s===`fulltext`,l=`https://www.pingwest.com`,u=`${l}/tag/${a}`,{tagId:d,tagName:f}=await e.tryGet(`pingwest:tag:${a}`,async()=>{let e=r((await t(u,{headers:{Referer:l}})).data);return{tagId:e(`.tag-detail`).attr(`data-id`),tagName:e(`.tag-detail .info .title`).text()}}),p=r((await t(`${l}/api/tag_article_list`,{searchParams:{id:d,type:o-1},headers:{Referer:l}})).data.data.list),m=await n.articleListParser(p,c,e);return{title:`品玩 - ${f}`,description:`品玩 - ${f}`,link:u,item:m}}export{i as route};