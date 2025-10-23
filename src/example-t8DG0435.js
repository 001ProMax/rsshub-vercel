import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./render-d6AVTUl2.js";import{t as r}from"./got-BlqYKpVp.js";import i from"node:path";import{load as a}from"cheerio";e();const o={path:`/:category?/:language?`,categories:[`study`],example:`/mindmeister/mind-map-examples`,parameters:{category:"Categories, see the table below, `mind-map-examples` by default",language:"Languages, see the table below, `en` by default"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`Public Maps`,maintainers:[`TonyRL`],handler:s,description:`| Categories    | parameter         |
| ------------- | ----------------- |
| Featured Map  | mind-map-examples |
| Business      | business          |
| Design        | design            |
| Education     | education         |
| Entertainment | entertainment     |
| Life          | life              |
| Marketing     | marketing         |
| Productivity  | productivity      |
| Summaries     | summaries         |
| Technology    | technology        |
| Other         | other             |

| Languages  | parameter |
| ---------- | --------- |
| English    | en        |
| Deutsch    | de        |
| Français   | fr        |
| Español    | es        |
| Português  | pt        |
| Nederlands | nl        |
| Dansk      | da        |
| Русский    | ru        |
| 日本語     | ja        |
| Italiano   | it        |
| 简体中文   | zh        |
| 한국어     | ko        |
| Other      | other     |`};async function s(e){let{category:o=`mind-map-examples`,language:s=`en`}=e.req.param(),c=`https://www.mindmeister.com${s===`en`||s===`other`?``:`/${s}`}/${o===`mind-map-examples`?o:`mind-maps/${o}?language=${s}`}`,l=a((await r(c)).data),u=l(`#public-listing .map-tile-wrapper`).toArray().map(e=>{e=l(e);let r=new URL(e.find(`.map-wrapper`).attr(`style`).match(/url\('(.*)'\);/)[1]).href;return{title:e.find(`.title`).text(),description:n(i.join(t,`templates/image-e463f33f.art`),{src:r.split(`?`)[0],alt:e.find(`.title`).text().trim()}),link:e.find(`.title`).attr(`href`),author:e.find(`.author`).text().trim().replace(/^by/,``),category:e.find(`.fw-bold`).text()}});return{title:l(`head title`).text(),description:l(`head meta[name=description]`).text(),link:c,item:u,language:s}}export{o as route};