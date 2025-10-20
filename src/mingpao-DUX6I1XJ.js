import{__dirname as e,init_esm_shims as t}from"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import{ofetch_default as n}from"./ofetch-CeMUzp5K.js";import{cache_default as r}from"./cache-Dfid4xgQ.js";import{art as i}from"./render-DftO2d-b.js";import{parseDate as a}from"./parse-date-DHsdom8D.js";import{rss_parser_default as o}from"./rss-parser-PDXVbDgf.js";import s from"node:path";import*as c from"cheerio";t();const l=t=>i(s.join(e,`templates/fancybox-7e47a3a4.art`),{media:t}),u=(t,n)=>i(s.join(e,`templates/description-15d467fb.art`),{media:l(t),desc:n}),d=(e,t)=>{let n=t(e),r=new URL(n.attr(`href`)),i;return r.hostname===`videop.mingpao.com`&&(i=new URL(r.searchParams.get(`file`)),i.hostname=`cfrvideo.mingpao.com`,i=i.href),{href:r.href,title:n.attr(`title`),video:i}},f={path:`/:type?/:category?`,name:`新聞`,example:`/mingpao/ins/all`,parameters:{type:{description:`新聞類型`,default:`ins`,options:[{value:`ins`,label:`即時新聞`},{value:`pns`,label:`每日明報`}]},category:`頻道，見下表`},radar:[{title:`即時新聞`,source:[`news.mingpao.com/ins/:categoryName/section/:date/:category`],target:`/mingpao/ins/:category`},{title:`每日明報`,source:[`news.mingpao.com/pns/:categoryName/section/:date/:category`],target:`/mingpao/pns/:category`}],maintainers:[`TonyRL`],handler:p,description:`| category | 即時新聞頻道 |
| -------- | ------------ |
| all      | 總目錄       |
| s00001   | 港聞         |
| s00002   | 經濟         |
| s00003   | 地產         |
| s00004   | 兩岸         |
| s00005   | 國際         |
| s00006   | 體育         |
| s00007   | 娛樂         |
| s00022   | 文摘         |
| s00024   | 熱點         |

| category | 每日明報頻道 |
| -------- | ------------ |
| s00001   | 要聞         |
| s00002   | 港聞         |
| s00003   | 社評         |
| s00004   | 經濟         |
| s00005   | 副刊         |
| s00011   | 教育         |
| s00012   | 觀點         |
| s00013   | 中國         |
| s00014   | 國際         |
| s00015   | 體育         |
| s00016   | 娛樂         |
| s00017   | English      |
| s00018   | 作家專欄     |`};async function p(e){let t=e.req.param(`type`)??`ins`,i=`https://news.mingpao.com/rss/${t}/${e.req.param(`category`)??(t===`ins`?`all`:`s00001`)}.xml`,s=await o.parseURL(i),l=await Promise.all(s.items.map(e=>r.tryGet(e.link,async()=>{let t=await n(e.link,{headers:{Referer:`https://news.mingpao.com/`}}),r=c.load(t),i=r(`#topvideo`).length?r(`#topvideo iframe`).toArray().map(e=>r(e).attr(`href`,r(e).attr(`src`))).map(e=>d(e,r)):[],o=r(`a.fancybox`).length?r(`a.fancybox`):r(`a.fancybox-buttons`);r(`div.ad300ins_m`).remove(),r(`div.clear, div.inReadLrecGroup, div.clr`).remove(),r(`div#ssm2`).remove(),r(`iframe`).remove(),r(`p[dir=ltr]`).remove(),e.category=e.categories;let s=[...i,...o.toArray().map(e=>d(e,r))],l=r(`script`).toArray().find(e=>r(e).text()?.includes(`$('#lower').prepend('`)),f=l?r(l).text()?.match(/\$\('#lower'\)\.prepend\('(.*)'\);/)?.[1]?.replaceAll(String.raw`\"`,`"`):``;if(f){let e=c.load(f,null,!1);s=[...s,...e(`a.fancybox`).toArray().map(t=>d(t,e))]}return delete e.categories,delete e.content,delete e.contentSnippet,delete e.creator,delete e.isoDate,e.description=u(s,r(`.txt4`).html()??r(`.article_content.line_1_5em`).html()??r(`.txt3`).html()),e.pubDate=a(e.pubDate),e.guid=e.link.includes(`?`)?e.link:e.link.slice(0,e.link.lastIndexOf(`/`)),e})));return{title:s.title,link:s.link,description:s.description,item:l,image:s.image.url,language:s.language}}export{f as route};