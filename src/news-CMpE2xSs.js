import"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as e}from"./cache-CpEhLexq.js";import"./render-d6AVTUl2.js";import"./parse-date-CHEO0z5G.js";import{t}from"./got-BlqYKpVp.js";import"./timezone-BPfwRbwD.js";import{r as n,t as r}from"./utils-cpSUkcK-.js";const i={path:`/news/:id?`,categories:[`traditional-media`],example:`/yicai/news`,parameters:{id:`分类 id，见下表，可在对应分类页中找到，默认为新闻`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`yicai.com/news/:id`,`yicai.com/news`],target:`/news/:id`}],name:`新闻`,maintainers:[`nczitzk`],handler:a,description:`| Id                       | 名称       |
| ------------------------ | ---------- |
| gushi                    | A 股       |
| kechuangban              | 科创板     |
| hongguan                 | 大政       |
| jinrong                  | 金融       |
| quanqiushichang          | 海外市场   |
| gongsi                   | 产经       |
| shijie                   | 全球       |
| kechuang                 | 科技       |
| quyu                     | 区域       |
| comment                  | 评论       |
| dafengwenhua             | 商业人文   |
| books                    | 阅读周刊   |
| loushi                   | 地产       |
| automobile               | 汽车       |
| china_financial_herald | 对话陆家嘴 |
| fashion                  | 时尚       |
| ad                       | 商业资讯   |
| info                     | 资讯       |
| jzfxb                    | 价值风向标 |
| shuducaijing             | 数读财经   |
| shujujiepan              | 数据解盘   |
| shudushenghuo            | 数读生活   |
| cbndata                  | CBNData    |
| dtcj                     | DT 财经    |
| xfsz                     | 消费数知   |`};async function a(i){let a=i.req.param(`id`)??``,o;if(a){let e=await t({method:`get`,url:`${n}/api/ajax/getnavs`});for(let t of e.data.header.news)if(t.EnglishName===a||t.ChannelID===a){o={id:t.ChannelID,name:t.ChannelName,slug:t.EnglishName};break}}let s=`${n}/news${a?`/${o.slug}`:``}`,c=await r(`${n}/api/ajax/${a?`getlistbycid?cid=${o.id}`:`getjuhelist?action=news`}&page=1&pagesize=${i.req.query(`limit`)??30}`,e.tryGet);return{title:`第一财经 - ${o?.name??`新闻`}`,link:s,item:c}}export{i as route};