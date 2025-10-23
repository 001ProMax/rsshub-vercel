import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./cache-CpEhLexq.js";import{t as r}from"./render-d6AVTUl2.js";import{t as i}from"./parse-date-CHEO0z5G.js";import{t as a}from"./got-BlqYKpVp.js";import o from"node:path";import{load as s}from"cheerio";e();const c={path:`/:language?/:category?/:type?`,categories:[`multimedia`],example:`/7mmtv/zh/censored_list/all`,parameters:{language:"Language, see below, `en` as English by default",category:"Category, see below, `censored_list` as Censored by default",type:`Server, see below, all server by default`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1,nsfw:!0},name:`Category`,maintainers:[`nczitzk`],handler:l,description:`**Language**

| English | 日本語 | 한국의 | 中文 |
| ------- | ------ | ------ | ---- |
| en      | ja     | ko     | zh   |

  **Category**

| Chinese subtitles AV | Censored       | Amateur          | Uncensored       | Asian self-timer | H comics     |
| -------------------- | -------------- | ---------------- | ---------------- | ---------------- | ------------ |
| chinese_list        | censored_list | amateurjav_list | uncensored_list | amateur_list    | hcomic_list |

| Chinese subtitles AV random | Censored random  | Amateur random     | Uncensored random  | Asian self-timer random | H comics random |
| --------------------------- | ---------------- | ------------------ | ------------------ | ----------------------- | --------------- |
| chinese_random             | censored_random | amateurjav_random | uncensored_random | amateur_random         | hcomic_random  |

  **Server**

| All Server | fembed(Full DL) | streamsb(Full DL) | doodstream | streamtape(Full DL) | avgle | embedgram | videovard(Full DL) |
| ---------- | --------------- | ----------------- | ---------- | ------------------- | ----- | --------- | ------------------ |
| all        | 21              | 30                | 28         | 29                  | 17    | 34        | 33                 |`};async function l(e){let c=`https://7mmtv.sx/${e.req.param(`language`)??`en`}/${e.req.param(`category`)??`censored_list`}/${e.req.param(`type`)??`all`}/1.html`,l=s((await a({method:`get`,url:c})).data),u=l(`.video`).toArray().map(e=>{e=l(e);let t=e.find(`.video-title a`);return{title:t.text(),author:e.find(`.video-channel`).text(),pubDate:i(e.find(`.small`).text()),link:t.attr(`href`),poster:e.find(`img`).attr(`data-src`),video:e.find(`video`).attr(`data-src`)}});return u=await Promise.all(u.map(e=>n.tryGet(e.link,async()=>{let n=s((await a({method:`get`,url:e.link})).data);return e.description=r(o.join(t,`templates/description-7c12cbba.art`),{cover:n(`.content_main_cover img`).attr(`src`),images:n(`.owl-lazy`).toArray().map(e=>n(e).attr(`data-src`)),description:n(`.video-introduction-images-text`).html(),poster:e.poster,video:e.video}),e.category=n(`.categories a`).toArray().map(e=>n(e).text()),delete e.poster,delete e.video,e}))),{title:l(`title`).text().replace(/ - Watch JAV Online/,``),link:c,item:u,description:l(`meta[name="description"]`).attr(`content`)}}export{c as route};