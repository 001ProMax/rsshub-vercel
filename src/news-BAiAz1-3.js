import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./cache-CpEhLexq.js";import{t as r}from"./render-d6AVTUl2.js";import{t as i}from"./parse-date-CHEO0z5G.js";import{t as a}from"./got-BlqYKpVp.js";import{t as o}from"./timezone-BPfwRbwD.js";import s from"node:path";import{load as c}from"cheerio";e();const l={path:`/:language/news/:category?`,categories:[`new-media`],example:`/dn/en-us/news`,parameters:{language:`Language, see below`,category:`Category, see below, The Latest by default`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`News`,maintainers:[`nczitzk`],handler:u,description:`#### Language

| English | 中文  |
| ------- | ----- |
| en-us   | zh-cn |

#### Category

| English Category     | 中文分类 | Category id |
| -------------------- | -------- | ----------- |
| The Latest           | 最新     |             |
| Industry Information | 行业资讯 | category-1  |
| Knowledge            | 域名知识 | category-2  |
| Investment           | 域名投资 | category-3  |`};async function u(e){let{language:l,category:u=``}=e.req.param(),d=e.req.query(`limit`)?Number.parseInt(e.req.query(`limit`),10):10,f=`https://dn.com`,p=new URL(`/${l}/news/${u}`,f).href,{data:m}=await a(p),h=c(m),g=h(`a.list-item`).slice(0,d).toArray().map(e=>{e=h(e);let n=e.find(`div.img img`);return{title:e.find(`h2.ellipse2`).text(),link:new URL(e.prop(`href`),f).href,description:r(s.join(t,`templates/description-024a8505.art`),{image:n?{src:n.prop(`src`),alt:n.prop(`alt`)}:void 0,abstracts:e.find(`p.abstract`).html()}),category:e.find(`span.cat`).toArray().map(e=>h(e).text()),pubDate:o(i(e.find(`span.time`).text()),8)}});g=await Promise.all(g.map(e=>n.tryGet(e.link,async()=>{let{data:n}=await a(e.link),l=c(n);return e.title=l(`h1.tit`).text(),e.description=r(s.join(t,`templates/description-024a8505.art`),{abstracts:l(`div.abstract`).html(),description:l(`div.detail`).html()}),e.author=l(`span.author`).text().replace(/(By|作者)\s/,``),e.category=[...e.category,...l(`div.tags p a`).toArray().map(e=>l(e).text())],e.pubDate=o(i(l(`span.date`).text()),8),e})));let _=h(`a.logo img`).prop(`alt`),v=h(`link[rel="icon"]`).prop(`href`);return{item:g,title:`${_} - ${h(`div.group a.active`).text()}`,link:p,description:h(`meta[name="description"]`).prop(`content`),language:h(`html`).prop(`lang`),image:new URL(h(`a.logo img`).prop(`src`),f).href,icon:v,logo:v,subtitle:h(`title`).text(),author:_}}export{l as route};