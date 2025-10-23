import"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import"./cache-CpEhLexq.js";import"./render-d6AVTUl2.js";import"./parse-date-CHEO0z5G.js";import{t as e}from"./got-BlqYKpVp.js";import{t}from"./utils-CmOalgCJ.js";import{load as n}from"cheerio";const r={path:`/channel/:id`,categories:[`new-media`],example:`/thepaper/channel/25950`,parameters:{id:`频道 id，可在频道页 URL 中找到`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`频道`,maintainers:[`xyqfer`,`nczitzk`,`bigfei`],handler:i,description:`| 频道 ID | 频道名 |
| ------- | ------ |
| 26916   | 视频   |
| 108856  | 战疫   |
| 25950   | 时事   |
| 25951   | 财经   |
| 36079   | 澎湃号 |
| 119908  | 科技   |
| 25952   | 思想   |
| 119489  | 智库   |
| 25953   | 生活   |
| 26161   | 问吧   |
| 122908  | 国际   |
| -21     | 体育   |
| -24     | 评论   |`};async function i(r){let i=r.req.param(`id`),a=`https://m.thepaper.cn/channel/${i}`,o=await e(a),s=JSON.parse(n(o.data)(`#__NEXT_DATA__`).html()),c=(await e.post(`https://api.thepaper.cn/contentapi/nodeCont/getByChannelId`,{json:{channelId:i}})).data.data.list,l=await Promise.all(c.map(e=>t.ProcessItem(e,r)));return{title:`澎湃新闻频道 - ${t.ChannelIdToName(i,s)}`,link:a,item:l,itunes_author:`澎湃新闻`,image:t.ExtractLogo(o)}}export{r as route};