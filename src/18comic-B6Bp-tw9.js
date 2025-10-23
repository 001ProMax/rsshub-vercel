import"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import"./cache-CpEhLexq.js";import"./render-d6AVTUl2.js";import"./parse-date-CHEO0z5G.js";import"./md5-CWsm3r0H.js";import"./got-BlqYKpVp.js";import"./config-not-found-CX6cWM57.js";import{a as e,r as t,t as n}from"./utils-BPM4Nady.js";const r={path:`/:category?/:time?/:order?/:keyword?`,categories:[`anime`],example:`/18comic`,parameters:{category:"分类，见下表，默认为 `all` 即全部",time:"时间范围，见下表，默认为 `a` 即全部",order:"排列顺序，见下表，默认为 `mr` 即最新",keyword:`关键字，见下表，默认为空`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1,nsfw:!0},radar:[{source:[`jmcomic.group/`]}],name:`成人 A 漫`,maintainers:[`nczitzk`],handler:i,url:`jmcomic.group/`,description:`分类

| 全部 | 其他漫畫 | 同人   | 韓漫   | 美漫   | 短篇  | 单本   |
| ---- | -------- | ------ | ------ | ------ | ----- | ------ |
| all  | another  | doujin | hanman | meiman | short | single |

  时间范围

| 全部 | 今天 | 这周 | 本月 |
| ---- | ---- | ---- | ---- |
| a    | t    | w    | m    |

  排列顺序

| 最新 | 最多点阅的 | 最多图片 | 最高评分 | 最多评论 | 最多爱心 |
| ---- | ---------- | -------- | -------- | -------- | -------- |
| mr   | mv         | mp       | tr       | md       | tf       |

  关键字（供参考）

| YAOI | 女性向 | NTR | 非 H | 3D | 獵奇 |
| ---- | ------ | --- | ---- | -- | ---- |`};async function i(r){let i=r.req.param(`category`)??`all`,a=r.req.param(`keyword`)??``,o=r.req.param(`time`)??`a`,s=r.req.param(`order`)??`mr`,{domain:c=t}=r.req.query(),l=e(c);return await n(r,`${l}/albums${i===`all`?``:`/${i}`}${a?`?screen=${a}`:`?`}${o===`a`?``:`&t=${o}`}${s===`mr`?``:`&o=${s}`}`,l)}export{r as route};