import"./esm-shims-rNwigI-Q.js";import{config as e}from"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import{ofetch_default as t}from"./ofetch-CeMUzp5K.js";import{cache_default as n}from"./cache-Dfid4xgQ.js";import{parseDate as r}from"./parse-date-DHsdom8D.js";import{load as i}from"cheerio";const a={path:`/arknights/announce/:platform?/:group?`,categories:[`game`],example:`/hypergryph/arknights/announce`,parameters:{platform:`平台，默认为 Android`,group:`分组，默认为 ALL`},name:`明日方舟 - 游戏内公告`,maintainers:[`swwind`],handler:o,description:`平台

|  安卓服 | iOS 服 |   B 服   |
| :-----: | :----: | :------: |
| Android |   IOS  | Bilibili |

  分组

| 全部 | 系统公告 | 活动公告 |
| :--: | :------: | :------: |
|  ALL |  SYSTEM  | ACTIVITY |`};async function o(a){let{platform:o=`Android`,group:s=`ALL`}=a.req.param(),c=await n.tryGet(`hypergryph:arknights:announce_meta:${o}`,async()=>{let{announceList:e}=await t(`https://ak-conf.hypergryph.com/config/prod/announce_meta/${o}/announcement.meta.json`);return e},e.cache.routeExpire,!1);s!==`ALL`&&(c=c.filter(e=>e.group===s));let l=await Promise.all(c.map(e=>n.tryGet(e.webUrl,async()=>{let n=i(await t(e.webUrl)),a=n(`.content`).html()??n(`.banner-image-container.cover`).html()??`No Description`;return a=a.replace(/href="uniwebview:\/\/.+?"/,`href="#"`),{title:e.title,description:a,pubDate:r(`${e.month}-${e.day}`,`M-D`),link:e.webUrl}})));return{title:`《明日方舟》${s===`SYSTEM`?`系统`:s===`ACTIVITY`?`活动`:`全部`}公告`,link:`https://ak.hypergryph.com/`,item:l}}export{a as route};