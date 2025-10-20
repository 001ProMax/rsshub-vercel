import{__dirname as e,init_esm_shims as t}from"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import"./ofetch-CeMUzp5K.js";import"./helpers-qpI1t-yV.js";import{art as n}from"./render-DftO2d-b.js";import{parseDate as r}from"./parse-date-DHsdom8D.js";import{got_default as i}from"./got-Di2lBekK.js";import{invalid_parameter_default as a}from"./invalid-parameter-CfUmvEUg.js";import{isValidHost as o}from"./valid-host-BYPA8xwv.js";import s from"node:path";t();const c={path:[`/global/:lang/:type?`,`/ff14_global/:lang/:type?`],categories:[`game`],example:`/ff14/global/na/all`,parameters:{lang:`Region`,type:"Category, `all` by default"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`FINAL FANTASY XIV (The Lodestone)`,maintainers:[`kmod-midori`],handler:l,description:`Region

| North Ameria | Europe | France | Germany | Japan |
| ------------ | ------ | ------ | ------- | ----- |
| na           | eu     | fr     | de      | jp    |

  Category

| all | topics | notices | maintenance | updates | status | developers |
| --- | ------ | ------- | ----------- | ------- | ------ | ---------- |`};async function l(t){let c=t.req.param(`lang`),l=t.req.param(`type`)??`all`;if(!o(c))throw new a(`Invalid lang`);let u=await i({method:`get`,url:`https://lodestonenews.com/news/${l}?locale=${c}`}),d;if(l===`all`){d=[];for(let e of Object.values(u.data))d=[...d,...e]}else d=u.data;return{title:`FFXIV Lodestone updates (${l})`,link:`https://${c}.finalfantasyxiv.com/lodestone/news/`,item:d.map(({id:t,url:i,title:a,time:o,description:c,image:l})=>({title:a,link:i,description:n(s.join(e,`templates/description-fc190f49.art`),{image:l,description:c}),pubDate:r(o),guid:t}))}}export{c as route};