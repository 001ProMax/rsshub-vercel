import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import{t as n}from"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as r}from"./cache-CpEhLexq.js";import{t as i}from"./render-d6AVTUl2.js";import{t as a}from"./parse-date-CHEO0z5G.js";import{t as o}from"./got-BlqYKpVp.js";import s from"node:path";e();const c=`https://bbs-api-os.hoyolab.com`,l=`https://www.hoyolab.com`,u={2:27,6:39,8:47,1:31,4:35,5:43},d=e=>e(`hoyolab:gameNameList`,async()=>{let{data:e}=await o(`https://bbs-api-os-static.hoyolab.com/community/apihub/static/api/getAppConfig`);return JSON.parse(e.data.config.hoyolab_game_info_list)}),f=async(e,t,n)=>{let r=(await d(n)).find(t=>t.game_id===Number.parseInt(e,10));return{name:r?.game_name_list.find(e=>e.locale===t)?.raw_name??r?.game_name_list.find(e=>e.locale===`en-us`)?.raw_name,icon:r?.game_icon}},p=(e,t)=>t(`hoyolab:type:${e}`,async()=>{let{data:t}=await o(`https://webstatic.hoyoverse.com/admin/mi18n/bbs_oversea/m07281525151831/m07281525151831-${e}.json`);return{1:{title:t.official_notify,sort:`notices`},2:{title:t.official_activity,sort:`events`},3:{title:t.official_info,sort:`news`}}}),m=async({type:e,gids:t,size:n,language:r})=>(await o({method:`get`,url:`${c}/community/post/wapi/getNewsList?${new URLSearchParams({type:e,gids:t,page_size:n}).toString()}`,headers:{"X-Rpc-Language":r}}))?.data?.data?.list||[],h=e=>e.replaceAll(`<img src="https://hoyolab-upload-private.hoyolab.com/upload`,`<img src="https://upload-os-bbs.hoyolab.com/upload`),g=(e,{language:n})=>Promise.all(e.map(async e=>{let u=e.post,d=u.post_id,f=`${c}/community/post/wapi/getPostFull?${new URLSearchParams({post_id:d,language:n}).toString()}`;return await r.tryGet(f,async()=>{let r=await o({method:`get`,url:f,headers:{"X-Rpc-Language":n}}),c=r?.data?.data?.post?.user?.nickname||``,p=r?.data?.data?.post?.post?.content||``;(p===n||!p)&&(p=u.content);let m=i(s.join(t,`templates/post-b135d099.art`),{hasCover:u.has_cover,coverList:e.cover_list,content:h(p)});return{title:u.subject,link:`${l}/article/${d}`,description:m,pubDate:a(u.created_at*1e3),author:c}})})),_={path:`/news/:language/:gids/:type`,categories:[`game`],example:`/hoyolab/news/zh-cn/2/2`,parameters:{language:`Language`,gids:`Game ID`,type:`Announcement type`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`Official Announcement`,maintainers:[`ZenoTian`],handler:v,description:`| Language         | Code  |
| ---------------- | ----- |
| 简体中文         | zh-cn |
| 繁體中文         | zh-tw |
| 日本語           | ja-jp |
| 한국어           | ko-kr |
| English (US)     | en-us |
| Español (EU)     | es-es |
| Français         | fr-fr |
| Deutsch          | de-de |
| Русский          | ru-ru |
| Português        | pt-pt |
| Español (Latino) | es-mx |
| Indonesia        | id-id |
| Tiếng Việt       | vi-vn |
| ภาษาไทย          | th-th |

| Honkai Impact 3rd | Genshin Impact | Tears of Themis | HoYoLAB | Honkai: Star Rail | Zenless Zone Zero |
| ----------------- | -------------- | --------------- | ------- | ----------------- | ----------------- |
| 1                 | 2              | 4               | 5       | 6                 | 8                 |

| Notices | Events | Info |
| ------- | ------ | ---- |
| 1       | 2      | 3    |`};async function v(e){try{let{type:t,gids:n,language:i}=e.req.param(),a={type:t,gids:n,language:i,size:Number.parseInt(e.req.query(`limit`))||15},o=await f(n,i,r.tryGet),s=await p(i,r.tryGet),c=await g(await m(a),a);return{title:`HoYoLAB-${o.name}-${s[t].title}`,link:`${l}/circles/${n}/${u[n]}/official?page_type=${u[n]}&page_sort=${s[t].sort}`,item:c,image:o.icon,icon:o.icon,logo:o.icon}}catch(e){n.error(e)}}export{_ as route};