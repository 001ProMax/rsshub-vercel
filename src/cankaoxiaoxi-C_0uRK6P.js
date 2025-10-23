import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./cache-CpEhLexq.js";import{t as r}from"./render-d6AVTUl2.js";import{t as i}from"./parse-date-CHEO0z5G.js";import{t as a}from"./got-BlqYKpVp.js";import{t as o}from"./timezone-BPfwRbwD.js";import s from"node:path";e();const c={path:[`/column/:id?`,`/:id?`],categories:[`traditional-media`],example:`/cankaoxiaoxi/column/diyi`,parameters:{id:"栏目 id，默认为 `diyi`，即第一关注"},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`栏目`,maintainers:[`yuxinliu-alex`,`nczitzk`],handler:l,description:`| 栏目           | id       |
| -------------- | -------- |
| 第一关注       | diyi     |
| 中国           | zhongguo |
| 国际           | gj       |
| 观点           | guandian |
| 锐参考         | ruick    |
| 体育健康       | tiyujk   |
| 科技应用       | kejiyy   |
| 文化旅游       | wenhualy |
| 参考漫谈       | cankaomt |
| 研究动态       | yjdt     |
| 海外智库       | hwzk     |
| 业界信息・观点 | yjxx     |
| 海外看中国城市 | hwkzgcs  |
| 译名趣谈       | ymymqt   |
| 译名发布       | ymymfb   |
| 双语汇         | ymsyh    |
| 参考视频       | video    |
| 军事           | junshi   |
| 参考人物       | cankaorw |`};async function l(e){let c=e.req.param(`id`)??`diyi`,l=e.req.query(`limit`)?Number.parseInt(e.req.query(`limit`)):50,u=`https://china.cankaoxiaoxi.com`,d=`${u}/json/channel/${c}/list.json`,f=`${u}/json/channel/${c}.channeljson`,p=`${u}/#/generalColumns/${c}`,m=await a({method:`get`,url:d}),h=await a({method:`get`,url:f}),g=m.data.list.slice(0,l).map(e=>({title:e.data.title,author:e.data.userName,category:e.data.channelName,pubDate:o(i(e.data.publishTime),8),link:e.data.moVideoPath?e.data.sourceUrl:`${u}/json/content/${e.data.url.match(/\/pages\/(.*?)\.html/)[1]}.detailjson`,video:e.data.moVideoPath,cover:e.data.mCoverImg}));return g=await Promise.all(g.map(e=>n.tryGet(e.link,async()=>{if(e.video)e.description=r(s.join(t,`templates/description-5183a709.art`),{video:e.video,cover:e.cover});else{let t=(await a({method:`get`,url:e.link})).data;e.link=`${u}/#/detailsPage/${c}/${t.id}/1/${t.publishTime.split(` `)[0]}`,e.description=t.txt}return e}))),{title:`参考消息 - ${h.data.name}`,link:p,description:`参考消息`,language:`zh-cn`,item:g}}export{c as route};