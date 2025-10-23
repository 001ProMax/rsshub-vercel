import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./cache-CpEhLexq.js";import{t as r}from"./render-d6AVTUl2.js";import{t as i}from"./parse-date-CHEO0z5G.js";import{t as a}from"./got-BlqYKpVp.js";import o from"node:path";import{load as s}from"cheerio";e();const c={path:`/cx/:category?/:city?`,categories:[`shopping`],example:`/tesla/cx/生活方式/北京`,parameters:{category:`分类，见下表，默认为空，即全部`,city:`城市，默认为空，即全国`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},name:`权益中心`,maintainers:[`simonsmh`,`nczitzk`],handler:l,description:`| 充电免停 | 酒店 | 美食 | 生活方式 |
| -------- | ---- | ---- | -------- |

::: tip
  分类为 **充电免停** 时，城市参数不起作用
:::

<details>
<summary>可选城市</summary>

| 成都 | 深圳 | 洛阳 | 北京 | 南京 | 绍兴 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 西安 | 上海 | 阿坝藏族羌族自治州 | 重庆 | 郑州 | 天津 |
| ---- | ---- | ------------------ | ---- | ---- | ---- |

| 晋中 | 三亚 | 湖州 | 苏州 | 扬州 | 秦皇岛 |
| ---- | ---- | ---- | ---- | ---- | ------ |

| 长沙 | 武汉 | 安阳 | 温州 | 瑞安 | 石家庄 |
| ---- | ---- | ---- | ---- | ---- | ------ |

| 佛山 | 广州 | 杭州 | 烟台 | 沧州 | 张家港 |
| ---- | ---- | ---- | ---- | ---- | ------ |

| 金华 | 临沧 | 大理 | 南昌 | 贵阳 | 信阳 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 张家口 | 铜仁 | 沈阳 | 合肥 | 黔东 | 高邮 |
| ------ | ---- | ---- | ---- | ---- | ---- |

| 三河 | 安顺 | 莆田 | 阳江 | 南宁 | 台州 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 余姚 | 淄博 | 三明 | 中山 | 宁波 | 厦门 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 永康 | 慈溪 | 台山 | 福州 | 无锡 | 宜昌 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 泉州 | 肇庆 | 太仓 | 珠海 | 邢台 | 衡水 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 温岭 | 宜兴 | 东莞 | 威海 | 南通 | 舟山 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 都匀 | 长治 | 江阴 | 云浮 | 常州 | 唐山 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 平湖 | 商丘 | 保定 | 泰州 | 青岛 | 龙口 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 泰安 | 岳阳 | 惠州 | 徐州 | 哈尔滨 | 潍坊 |
| ---- | ---- | ---- | ---- | ------ | ---- |

| 大同 | 嘉兴 | 毕节 | 临汾 | 江门 | 诸暨 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 儋州 | 衢州 | 大连 | 昆山 | 靖江 | 常熟 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 罗定 | 丽江 | 晋江 | 乐清 | 茂名 | 福清 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 廊坊 | 兰溪 | 汕尾 | 滨州 | 昆明 | 玉环 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 绵阳 | 漳州 | 德州 | 聊城 | 龙岩 | 临沂 |
| ---- | ---- | ---- | ---- | ---- | ---- |

| 新沂 | 桐乡 | 迪庆藏族自治州 | 汕头 | 潮州 | 驻马店 |
| ---- | ---- | -------------- | ---- | ---- | ------ |

| 曲阜 | 郴州 | 济源 | 兴义 |
| ---- | ---- | ---- | ---- |
</details>`};async function l(e){let{category:c,city:l}=e.req.param(),u=e.req.query(`limit`)?Number.parseInt(e.req.query(`limit`),10):10,d=`https://cx.tesla.cn`,f=`https://community-api.tesla.cn`,p=new URL(`user-right/list${c?`/${c}`:``}`,d).href,m=new URL(`api/voucherpackage/merchant`,f).href,h=new URL(`api/category`,f).href,g=e=>new URL(`user-right/list/${e}`,d).href,_=e=>new URL(`community-media/${e}`,`https://china-community-app.tesla.cn`).href;r.defaults.imports.categoryToUrl=g,r.defaults.imports.mediaToUrl=_;let{data:v}=await a(h,{searchParams:{type:2}}),y=v.data.findLast(e=>e.name===c),{data:b}=await a(m,{searchParams:{pageSize:u,pageNumber:0,benefitCategoryId:y?.id??void 0,category:y?void 0:c===`充电免停`?2:void 0,city:l}}),x=b.data.pageDatas.slice(0,u).map(e=>({title:e.venueName??e.title,link:new URL(`user-right/detail/${e.id}`,d).href,description:r(o.join(t,`templates/description-4592022f.art`),{image:e.coverImage?{src:e.coverImage,alt:e.venueName??e.title}:void 0,description:e.description?.replaceAll(/\["|"]/g,``)??void 0,data:e.parkingLocationId?{title:e.venueName??e.title,categories:[c],description:`充电停车减免${e.parkingVoucherValue}小时`}:void 0}),category:e.categories,guid:e.id,pubDate:i(e.publishedAt),parkingLocationId:e.parkingLocationId}));x=await Promise.all(x.map(e=>n.tryGet(e.link,async()=>{if(e.parkingLocationId)return e.guid=`tesla-user-right#${e.guid}`,delete e.parkingLocationId,e;let n=new URL(`api/voucherpackage/merchant/${e.guid}`,f).href,{data:i}=await a(n),s=i.data;return e.title=s.title??e.title,e.description=r(o.join(t,`templates/description-4592022f.art`),{data:s}),e.author=s.merchants?s.merchants.map(e=>e.name).join(`/`):void 0,e.category=[...new Set([...e.category,...s.categories])].filter(Boolean),e.guid=`tesla-user-right#${e.guid}`,e})));let{data:S}=await a(p),C=s(S),w=C(`title`).text(),T=`${l??``}${c??``}`,E=new URL(C(`link[rel="icon"]`).prop(`href`),d).href;return{item:x,title:`${w}权益中心${T?` - ${T}`:``}`,link:p,description:T,language:C(`html`).prop(`lang`),image:C(`meta[property="og:image"]`).prop(`content`),icon:E,logo:E,subtitle:T,author:w,allowEmpty:!0}}export{c as route};