import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./render-d6AVTUl2.js";import{t as r}from"./parse-date-CHEO0z5G.js";import{t as i}from"./got-BlqYKpVp.js";import a from"node:path";e();const o={focus:{tc:`要聞`,sc:`要闻`},instant:{tc:`快訊`,sc:`快讯`},local:{tc:`港澳`,sc:`港澳`},greaterchina:{tc:`兩岸`,sc:`两岸`},world:{tc:`國際`,sc:`国际`},finance:{tc:`財經`,sc:`财经`},sports:{tc:`體育`,sc:`体育`},parliament:{tc:`法庭`,sc:`法庭`},weather:{tc:`天氣`,sc:`天气`}},s={path:`/news/:category?/:language?`,categories:[`traditional-media`],example:`/tvb/news`,parameters:{category:`分类，见下表，默认为要聞`,language:`语言，见下表`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`tvb.com/:language/:category`,`tvb.com/`]}],name:`新闻`,maintainers:[`nczitzk`],handler:c,description:`分类

| 要聞  | 快訊    | 港澳  | 兩岸         | 國際  | 財經    | 體育   | 法庭       | 天氣    |
| ----- | ------- | ----- | ------------ | ----- | ------- | ------ | ---------- | ------- |
| focus | instant | local | greaterchina | world | finance | sports | parliament | weather |

  语言

| 繁 | 简 |
| -- | -- |
| tc | sc |`};async function c(e){let s=e.req.param(`category`)??`focus`,c=e.req.param(`language`)??`tc`,l=`https://inews-api.tvb.com`,u=`${l}/news/entry/category`,d=`${l}/${c}/${s}`,f=await i({method:`get`,url:u,searchParams:{id:s,lang:c,page:1,limit:e.req.query(`limit`)??50,country:`HK`}}),p=f.data.content.map(e=>({title:e.title,link:`https://news.tvb.com/${c}/${s}/${e.id}`,pubDate:r(e.publish_datetime),category:[...e.category.map(e=>e.title),...e.tags],description:n(a.join(t,`templates/description-18071f47.art`),{description:e.desc,images:e.media.image?.map(e=>e.thumbnail.replace(/_\d+x\d+\./,`.`))??[]})}));return{title:`${f.data.meta.title} - ${o[s][c]}`,link:d,item:p}}export{s as route};