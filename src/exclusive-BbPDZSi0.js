import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./cache-CpEhLexq.js";import{t as r}from"./render-d6AVTUl2.js";import{t as i}from"./parse-date-CHEO0z5G.js";import{t as a}from"./got-BlqYKpVp.js";import{t as o}from"./timezone-BPfwRbwD.js";import s from"node:path";import{load as c}from"cheerio";e();const l={"":{id:`BAI5E21O`,title:`首页`},qsyk:{id:`BD21K0DL`,title:`轻松一刻`},cz:{id:`CICMICLU`,title:`槽值`},rj:{id:`CICMOMBL`,title:`人间`},dgxm:{id:`CICMPVC5`,title:`大国小民`},ssyg:{id:`CICMLCOU`,title:`三三有梗`},sd:{id:`D551V75C`,title:`数读`},kk:{id:`D55253RH`,title:`看客`},xhx:{id:`D553A53L`,title:`下划线`},txs:{id:`D553PGHQ`,title:`谈心社`},dd:{id:`CICMS5BI`,title:`哒哒`},pbgl:{id:`CQ9UDVKO`,title:`胖编怪聊`},qyd:{id:`CQ9UJIJN`,title:`曲一刀`},jrzs:{id:`BD284UM8`,title:`今日之声`},lc:{id:`CICMMGBH`,title:`浪潮`},fd:{id:`D5543R68`,title:`沸点`}},u={path:`/exclusive/:id?`,categories:[`new-media`],example:`/163/exclusive/qsyk`,parameters:{id:`栏目, 默认为首页`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`3g.163.com/touch/exclusive/sub/:id`]}],name:`栏目`,maintainers:[`nczitzk`],handler:d,description:`| 分类     | 编号 |
| -------- | ---- |
| 首页     |      |
| 轻松一刻 | qsyk |
| 槽值     | cz   |
| 人间     | rj   |
| 大国小民 | dgxm |
| 三三有梗 | ssyg |
| 数读     | sd   |
| 看客     | kk   |
| 下划线   | xhx  |
| 谈心社   | txs  |
| 哒哒     | dd   |
| 胖编怪聊 | pbgl |
| 曲一刀   | qyd  |
| 今日之声 | jrzs |
| 浪潮     | lc   |
| 沸点     | fd   |`};async function d(e){let u=e.req.param(`id`)??``,d=`https://3g.163.com`,f=`${d}/touch/exclusive${u?`/sub/${u}`:``}`,p=await a({method:`get`,url:`${d}/touch/reconstruct/article/list/${l[u].id}wangning/0-20.html`}),m=JSON.parse(p.data.match(/^artiList\((.*)\)$/)[1])[`${l[u].id}wangning`].map(e=>({title:e.title,author:e.source,link:e.skipURL||e.url||`${d}/dy/article/${e.docid}.html`,pubDate:o(i(e.ptime),8),videoId:e.skipType===`video`?e.stitle:``}));return m=await Promise.all(m.map(e=>n.tryGet(e.link,async()=>{try{if(e.videoId){let n=await a({method:`get`,url:`${d}/touch/video/detail/jsonp/VIA8K0PTB.html?callback=videoList`}),i=JSON.parse(n.data.match(/^videoList\((.*)\)$/)[1])?.mp4_url;e.description=r(s.join(t,`templates/exclusive-d4c229b8.art`),{video:i})}else{let n=c((await a({method:`get`,url:e.link})).data);n(`.m-linkCard`).remove(),n(`.m-photo`).each(function(){n(this).html(r(s.join(t,`templates/exclusive-d4c229b8.art`),{image:n(this).find(`img`).attr(`data-src`)}))}),e.description=n(`.article-body`).html()}}catch{}return delete e.videoId,e}))),{title:`网易独家 - ${l[u].title}`,link:f,item:m}}export{u as route};