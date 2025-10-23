import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./cache-CpEhLexq.js";import{t as r}from"./render-d6AVTUl2.js";import{t as i}from"./parse-date-CHEO0z5G.js";import{t as a}from"./got-BlqYKpVp.js";import{t as o}from"./types-Bn7An2Wc.js";import s from"node:path";import{load as c}from"cheerio";e();const l={recommend:{url:`content/recommend`,title:`推荐`},hkstock:{url:`content/hkstock`,title:`港股`},meigu:{url:`content/meigu`,title:`美股`},agu:{url:`content/agu`,title:`沪深`},ct:{url:`content/ct`,title:`创投`},esg:{url:`content/esg`,title:`ESG`},aqs:{url:`content/aqs`,title:`券商`},ajj:{url:`content/ajj`,title:`基金`},focus:{url:`focus`,title:`要闻`},announcement:{url:`announcement`,title:`公告`},research:{url:`research`,title:`研究`},shares:{url:`shares`,title:`新股`},bazaar:{url:`bazaar`,title:`市场`},company:{url:`company`,title:`公司`}},u={path:`/:id?/:category?`,categories:[`finance`],view:o.Articles,example:`/zhitongcaijing`,parameters:{id:`栏目 id，可在对应栏目页 URL 中找到，默认为 recommend，即推荐`,category:`分类 id，可在对应栏目子分类页 URL 中找到，默认为全部`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`推荐`,maintainers:[`nczitzk`],handler:d,description:`| id           | 栏目 |
| ------------ | ---- |
| recommend    | 推荐 |
| hkstock      | 港股 |
| meigu        | 美股 |
| agu          | 沪深 |
| ct           | 创投 |
| esg          | ESG  |
| aqs          | 券商 |
| ajj          | 基金 |
| focus        | 要闻 |
| announcement | 公告 |
| research     | 研究 |
| shares       | 新股 |
| bazaar       | 市场 |
| company      | 公司 |`};async function d(e){let o=e.req.param(`id`)??`recommend`,u=e.req.param(`category`)??``,d=e.req.query(`limit`)?Number.parseInt(e.req.query(`limit`)):20,f=`https://www.zhitongcaijing.com`,p=`${f}/${l[o].url}.html${u===``?``:`?category_key=${u}`}`,m=(await a({method:`get`,url:`${f}/${l[o].url}.html?data_type=1&page=1${u===``?``:`&category_key=${u}`}`})).data.data.slice(0,d).map(e=>({title:e.title,link:`${f}${e.url}`,description:e.digest,author:e.author_info.author_name,pubDate:i((e.create_time??Number.parseInt(e.original_time))*1e3),category:[...e.keywords?.split(`,`)??[],e.category_name??e.type_tag]}));return m=await Promise.all(m.map(e=>n.tryGet(e.link,async()=>{let n=c((await a({method:`get`,url:e.link})).data);return n(`#subscribe-vip-box`).remove(),n(`#news-content`).remove(),e.description=r(s.join(t,`templates/description-6a029b99.art`),{digest:n(`.digetst-box`).html()||n(`.telegram-origin-contentn`).html(),description:n(`.news-body-content`).html()}),e}))),{title:`智通财经 - ${l[o].title}`,link:p,item:m}}export{u as route};