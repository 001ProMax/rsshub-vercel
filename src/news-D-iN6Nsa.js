import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./cache-CpEhLexq.js";import{t as r}from"./render-d6AVTUl2.js";import{t as i}from"./parse-date-CHEO0z5G.js";import{t as a}from"./got-BlqYKpVp.js";import o from"node:path";import{load as s}from"cheerio";e();const c={path:`/news/:category?`,categories:[`new-media`],example:`/kamen-rider-official/news`,parameters:{category:`Category, see below, すべて by default`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`最新情報`,maintainers:[`nczitzk`],handler:l,description:`| Category                               |
| -------------------------------------- |
| すべて                                 |
| テレビ                                 |
| 映画・V シネマ等                       |
| Blu-ray・DVD、配信等                   |
| 20 作記念グッズ・東映 EC 商品          |
| 石ノ森章太郎生誕 80 周年記念商品       |
| 玩具・カード                           |
| 食品・飲料・菓子                       |
| 子供生活雑貨                           |
| アパレル・大人向け雑貨                 |
| フィギュア・ホビー・一番くじ・プライズ |
| ゲーム・デジタル                       |
| 雑誌・書籍・漫画                       |
| 音楽                                   |
| 映像                                   |
| イベント                               |
| ホテル・レストラン等                   |
| キャンペーン・タイアップ等             |
| その他                                 |
| KAMEN RIDER STORE                      |
| THE 鎧武祭り                           |
| 鎧武外伝                               |
| 仮面ライダーリバイス                   |
| ファイナルステージ                     |
| THE50 周年展                           |
| 風都探偵                               |
| 仮面ライダーギーツ                     |
| 仮面ライダーアウトサイダーズ           |
| 仮面ライダーガッチャード               |
| 仮面ライダー BLACK SUN                 |`};async function l(e){let c=e.req.param(`category`),l=e.req.query(`limit`)?Number.parseInt(e.req.query(`limit`),10):50,u=`https://www.kamen-rider-official.com`,d=new URL(`api/v1/news_articles`,u).href,f=new URL(`news_articles/${c?`?category=${c}`:``}`,u).href,{data:p}=await a(f),m=p.match(/"buildId":"(.*?)"/)[1],h=new URL(`_next/data/${m}/news_articles.json`,u).href,{data:g}=await a(h),_=g.pageProps.categoryIds[c],{data:v}=await a(d,{searchParams:{category_id:_,limit:l,offset:0}}),y=v.news_articles.slice(0,l).map(e=>({title:e.list_title,link:new URL(e.path,u).href,description:r(o.join(t,`templates/description-cb541d55.art`),{image:e.list_image_path?{src:new URL(e.list_image_path,u).href,alt:e.list_title}:void 0}),author:e.author,category:[e.category_name,e.category_2_name].filter(Boolean),guid:`kamen-rider-official-${e.id}`,pubDate:i(e.release_date)}));y=await Promise.all(y.map(e=>n.tryGet(e.link,async()=>{let{data:n}=await a(e.link),i=s(n);return i(`a.c-button`).each(function(){i(this).parent().remove()}),i(`img`).each(function(){i(this).replaceWith(r(o.join(t,`templates/description-cb541d55.art`),{image:{src:i(this).prop(`src`)}}))}),e.title=i(`h1.p-post__title`).text()||e.title,e.description=i(`main.p-post__main`).html(),e.author=i(`div.p-post__responsibility p`).toArray().map(e=>i(e).text()).join(` / `),e.category=[...new Set([...e.category,...i(`ul.p-post__categories li a.p-post__category`).toArray().map(e=>i(e).text().trim())].filter(Boolean))],e})));let b=s(p),x=new URL(b(`link[rel="icon"]`).prop(`href`),u).href;return{item:y,title:`${b(`title`).text().split(/ー/)[0]}${c?` - ${c}`:``}`,link:f,description:b(`meta[property="og:description"]`).prop(`content`),language:b(`html`).prop(`lang`),image:b(`meta[property="og:image"]`).prop(`content`),icon:x,logo:x,subtitle:b(`meta[property="keywords"]`).prop(`content`),author:b(`meta[property="og:site_name"]`).prop(`content`),allowEmpty:!0}}export{c as route};