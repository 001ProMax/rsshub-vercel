import{__dirname as e,init_esm_shims as t}from"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import{ofetch_default as n}from"./ofetch-CeMUzp5K.js";import{cache_default as r}from"./cache-Dfid4xgQ.js";import{art as i}from"./render-DftO2d-b.js";import{parseDate as a}from"./parse-date-DHsdom8D.js";import{timezone as o}from"./timezone-CMz5pnRe.js";import{ViewType as s}from"./types-Bi82qguM.js";import c from"node:path";import{load as l}from"cheerio";t();const u=async t=>{let{id:s}=t.req.param(),u=Number.parseInt(t.req.query(`limit`)??`10`,10),d=`https://www.oschina.net`,f=String.raw`https://my\.oschina\.net`,p=new URL(`news/column?columnId=${s}`,d).href,m=l(await n(p)),h=m(`html`).attr(`lang`)??`zh-CN`,g=[];g=m(`div.news-item`).slice(0,u).toArray().map(t=>{let n=m(t),r=n.find(`div.title`).text(),s=i(c.join(e,`templates/description-881baa33.art`),{intro:n.find(`div.description p.line-clamp`).text()}),l=n.find(`inddiv.item`).contents().last().text().trim(),u=n.attr(`data-url`),d=n.find(`inddiv.item a`).toArray().map(e=>{let t=m(e);return{name:t.text(),url:t.attr(`href`)}}),f=n.find(`img`).attr(`src`),p=l;return{title:r,description:s,pubDate:l?o(a(l),8):void 0,link:u,author:d,content:{html:s,text:s},image:f,banner:f,updated:p?o(a(p),8):void 0,language:h}}),g=(await Promise.all(g.map(t=>t.link?r.tryGet(t.link,async()=>{let r=l(await n(t.link));r(`.ad-wrap`).remove();let s=r(`h1.article-box__title`).text(),u=i(c.join(e,`templates/description-881baa33.art`),{description:r(`div.content`).html()}),p=r(`div.article-box__meta div.item-list div.item`).toArray().find(e=>/\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/.test(r(e).text())),m=p?r(p).text():void 0,g=r(`val[data-name="shareUrl"]`).attr(`data-value`),_=[...r(`div.breadcrumb-box a.item`).toArray().slice(0,-1),...r(`div.article-box__meta div.item-list div.item span.label`).toArray(),...r(`div.tags-box a.tag-item`).toArray()],v=[...new Set(_.map(e=>r(e).text()).filter(Boolean))],y=r(`div.article-box__meta div.item-list div.item a`).toArray().filter(e=>r(e).attr(`href`)?RegExp(`^${f}/u/\\d+$`).test(r(e).attr(`href`)):!1).map(e=>{let t=r(e);return{name:t.text(),url:t.attr(`href`)}}),b=`oschina-${r(`val[data-name="objId"]`).attr(`data-value`)}`,x=r(`val[data-name="sharePic"]`).attr(`data-value`),S=r(`meta[property="bytedance:updated_time"]`).attr(`content`)||m,C={title:s,description:u,pubDate:m?o(a(m),8):t.pubDate,link:g?new URL(g,d).href:t.link,category:v,author:y,guid:b,id:b,content:{html:u,text:u},image:x,banner:x,updated:S?a(S):t.updated,language:h},w=r(`div.related-links-box ul.link-list li a`).toArray().map(e=>{let t=r(e);return{url:t.attr(`href`),type:`related`,content_html:t.parent().html()}}).filter(e=>!0);return w&&(C={...C,_extra:{links:w}}),{...t,...C}}):t))).filter(e=>!0);let _=m(`a.logo`).attr(`title`);return{title:`${_} - ${m(`div#tabDropdownListOpen a.selected`).text()}`,description:m(`meta[name="description"]`).attr(`content`),link:p,item:g,allowEmpty:!0,image:m(`a.logo img`).attr(`src`),author:_,language:h,id:m(`val[data-name="weixinShareUrl"]`).attr(`data-value`)}},d={path:`/column/:id`,name:`专栏`,url:`www.oschina.net`,maintainers:[`nczitzk`],handler:u,example:`/oschina/column/14`,parameters:{id:`专栏 id，可在对应专栏页 URL 中找到`},description:`::: tip
若订阅 [开源安全专栏](https://www.oschina.net/news/column?columnId=14)，网址为 \`https://www.oschina.net/news/column?columnId=14\`，请截取 \`https://www.oschina.net/news/column?columnId=\` 到末尾的部分 \`14\` 作为 \`id\` 参数填入，此时目标路由为 [\`/oschina/column/14\`](https://rsshub.app/oschina/column/14)。
:::

<details>
<summary>更多专栏</summary>

| 名称            | ID  |
| --------------- | --- |
| 古典主义 Debian | 4   |
| 自由&开源       | 5   |
| 溯源            | 6   |
| 开源先懂协议    | 7   |
| 开源变局        | 8   |
| 创造者说        | 9   |
| 精英主义 BSD    | 10  |
| 苹果有开源      | 11  |
| 开源访谈        | 12  |
| 抱团找组织      | 13  |
| 开源安全        | 14  |
| OSPO            | 15  |
| 创业小辑        | 16  |
| 星推荐          | 17  |
| 单口开源        | 18  |
| 编辑部观察直播  | 19  |
| 开源商业化      | 20  |
| ChatGPT 专题    | 21  |
| 开源新思        | 24  |
| 开源日报        | 25  |
| 大模型思辨      | 26  |
| 家里有个程序员  | 27  |
| 开源漫谈        | 23  |

</details>
`,categories:[`programming`],features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportRadar:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`www.oschina.net`],target:(e,t)=>`/oschina/column/${new URL(t).searchParams.get(`id`)??void 0}`}],view:s.Articles};export{u as handler,d as route};