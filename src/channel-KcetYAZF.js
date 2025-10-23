import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./render-d6AVTUl2.js";import{t as r}from"./parse-date-CHEO0z5G.js";import{t as i}from"./got-BlqYKpVp.js";import{t as a}from"./timezone-BPfwRbwD.js";import o from"node:path";import{load as s}from"cheerio";e();const c={path:`/channel/:id?`,categories:[`forecast`],example:`/cma/channel/380`,parameters:{id:`分类，见下表，可在对应频道页 URL 中找到，默认为 380，即每日天气提示`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`天气预报频道`,maintainers:[`nczitzk`],handler:l,description:`#### 天气实况

| 频道名称 | 频道 id                          |
| -------- | -------------------------------- |
| 卫星云图 | d3236549863e453aab0ccc4027105bad |
| 单站雷达 | 103                              |
| 降水量   | 18                               |
| 气温     | 32                               |
| 土壤水分 | 45                               |

#### 气象公报

| 频道名称       | 频道 id                          |
| -------------- | -------------------------------- |
| 每日天气提示   | 380                              |
| 重要天气提示   | da5d55817ad5430fb9796a0780178533 |
| 天气公报       | 3780                             |
| 强对流天气预报 | 383                              |
| 交通气象预报   | 423                              |
| 森林火险预报   | 424                              |
| 海洋天气公报   | 452                              |
| 环境气象公报   | 467                              |

::: tip
  订阅更多细分频道，请前往对应上级频道页，使用下拉菜单选择项目后跳转到目标频道页，查看其 URL 找到对应频道 id
:::`};async function l(e){let{id:c=`380`}=e.req.param(),l=`中国气象局·天气预报`,u=`https://weather.cma.cn`,d=new URL(`api/channel`,u).href,f=new URL(`web/channel-${c}.html`,u).href,{data:p}=await i(d,{searchParams:{id:c}}),m=p?.data?.pop()??{};m.image=m.image?.replace(/\?.*$/,``)??void 0;let{data:h}=await i(f),g=s(h),_=[...new Set(g(`ol#breadcrumb li`).slice(1).toArray().map(e=>g(e).text()))].join(` > `),v=g(`div.xml`).html(),y=new URL(g(`li.active a img`).prop(`src`),u).href,b=new URL(g(`link[rel="shortcut icon"]`).prop(`href`),u).href;return{item:m?[{title:`${m.title} ${m.releaseTime}`,link:new URL(m.link,u).href,description:n(o.join(t,`templates/description-c39fef51.art`),{description:v,image:m.image?{src:new URL(m.image,u).href,alt:m.title}:void 0}),author:g(g(`div.col-xs-8 span`).toArray().filter(e=>g(e).text().startsWith(`来源`))?.pop())?.text()?.split(/：/)?.pop()||l,guid:`cma${m.link}#${m.releaseTime.replaceAll(/\s/g,`-`)}`,pubDate:a(r(m.releaseTime),8),enclosure_url:new URL(m.image,u).href,enclosure_type:m.image?`image/${m.image.split(/\./).pop()}`:void 0}]:[],title:`${l} - ${_}`,link:f,description:g(`meta[name="description"]`).prop(`content`),language:`zh`,image:y,icon:b,logo:b,subtitle:g(`meta[name="keywords"]`).prop(`content`),author:l,allowEmpty:!0}}export{c as route};