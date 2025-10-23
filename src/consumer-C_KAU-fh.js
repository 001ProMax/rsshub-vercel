import"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as e}from"./cache-CpEhLexq.js";import{t}from"./parse-date-CHEO0z5G.js";import{t as n}from"./got-BlqYKpVp.js";import{load as r}from"cheerio";const i={path:`/:category?/:language?/:keyword?`,categories:[`new-media`],example:`/consumer`,parameters:{category:`分类，见下表，默认为測試及調查`,language:`语言，见下表，默认为繁体中文`,keyword:`关键字，默认为空`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`consumer.org.hk/`]}],name:`文章`,maintainers:[`nczitzk`],handler:a,url:`consumer.org.hk/`,description:`分类

| 测试及调查 | 生活资讯 | 投诉实录  | 议题评论 |
| ---------- | -------- | --------- | -------- |
| test       | life     | complaint | topic    |

  语言

| 简体中文 | 繁体中文 |
| -------- | -------- |
| sc       | tc       |`};async function a(i){let a=i.req.param(`category`)??`test`,o=i.req.param(`language`)??`tc`,s=i.req.param(`keyword`)??``,c=`https://www.consumer.org.hk`,l=`${c}/${o}/free-article/free-article-${a}?category=free-article-${a}&q=${s}`,u=r((await n({method:`get`,url:l})).data),d=u(`.half-img-blk__title, .img-plate-blk__title`).find(`a`).toArray().map(e=>(e=u(e),{title:e.text(),link:`${c}${e.attr(`href`)}`,pubDate:t(e.parent().prev().find(`li`).first().text(),`YYYY.MM`)}));return d=await Promise.all(d.map(t=>e.tryGet(t.link,async()=>(t.description=r((await n({method:`get`,url:t.link})).data)(`.ckec`).html(),t)))),{title:u(`title`).text(),link:l,item:d}}export{i as route};