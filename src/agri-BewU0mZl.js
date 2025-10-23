import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./cache-CpEhLexq.js";import{t as r}from"./render-d6AVTUl2.js";import{t as i}from"./parse-date-CHEO0z5G.js";import{t as a}from"./got-BlqYKpVp.js";import{t as o}from"./timezone-BPfwRbwD.js";import s from"node:path";import{load as c}from"cheerio";e();const l=async e=>{let{category:l=`zx/zxfb/`}=e.req.param(),u=e.req.query(`limit`)?Number.parseInt(e.req.query(`limit`),10):10,d=`http://www.agri.cn`,f=new URL(l.endsWith(`/`)?l:`${l}/`,d).href,{data:p}=await a(f),m=c(p),h=m(`html`).prop(`lang`),g=m(`div.list_li_con, div.nxw_video_com`).slice(0,u).toArray().map(e=>{e=m(e);let n=e.find(`a`).first(),a=n.text(),o=e.find(`img`).first().prop(`src`)?new URL(e.find(`img`).first().prop(`src`),d).href:void 0,c=r(s.join(t,`templates/description-881baa33.art`),{intro:e.find(`p.con_text`).text()||void 0,images:o?[{src:o,alt:a}]:void 0});return{title:a,description:c,pubDate:i(e.find(`span.con_date_span`).text()||`${e.find(`div.com_time_p2`).text().trim()}${e.find(`div.com_time_p1`).text()}`,[`YYYY-MM-DD`,`YYYY.MM.DD`]),link:new URL(n.prop(`href`),f).href,content:{html:c,text:e.find(`p.con_text`).text()||void 0},image:o,banner:o,language:h}});g=await Promise.all(g.map(e=>n.tryGet(e.link,async()=>{let{data:n}=await a(e.link),l=c(n),u=l(`div.detailCon_info_tit`).text().trim(),d=r(s.join(t,`templates/description-881baa33.art`),{description:l(`div.content_body_box`).html()});return e.title=u,e.description=d,e.pubDate=o(i(l(`meta[name="publishdate"]`).prop(`content`)),8),e.author=l(`meta[name="author"]`).prop(`content`)||l(`meta[name="source"]`).prop(`content`),e.content={html:d,text:l(`div.content_body_box`).text()},e.language=h,e.enclosure_url=l(`div.content_body_box video`).prop(`src`)??void 0,e.enclosure_type=e.enclosure_url?`video/mp4`:void 0,e.enclosure_title=e.enclosure_url?u:void 0,e})));let _=new URL(m(`div.logo img`).prop(`src`),d).href;return{title:m(`title`).text(),link:f,item:g,allowEmpty:!0,image:_,language:h}},u={path:`/:category{.+}?`,name:`分类`,url:`www.agri.cn`,maintainers:[`nczitzk`],handler:l,example:`/agri/zx/zxfb`,parameters:{category:"分类，默认为 `zx/zxfb`，即最新发布，可在对应分类页 URL 中找到"},description:`::: tip
  若订阅 [最新发布](http://www.agri.cn/zx/zxfb/)，网址为 \`http://www.agri.cn/zx/zxfb/\`。截取 \`https://www.agri.cn/\` 到末尾的部分 \`zx/zxfb\` 作为参数填入，此时路由为 [\`/agri/zx/zxfb\`](https://rsshub.app/agri/zx/zxfb)。
:::

#### [机构](http://www.agri.cn/jg/)

| 分类                                    | ID                                         |
| --------------------------------------- | ------------------------------------------ |
| [成果展示](http://www.agri.cn/jg/cgzs/) | [jg/cgzs](https://rsshub.app/agri/jg/cgzs) |

#### [资讯](http://www.agri.cn/zx/)

| 分类                                        | ID                                         |
| ------------------------------------------- | ------------------------------------------ |
| [最新发布](http://www.agri.cn/zx/zxfb/)     | [zx/zxfb](https://rsshub.app/agri/zx/zxfb) |
| [农业要闻](http://www.agri.cn/zx/nyyw/)     | [zx/nyyw](https://rsshub.app/agri/zx/nyyw) |
| [中心动态](http://www.agri.cn/zx/zxdt/)     | [zx/zxdt](https://rsshub.app/agri/zx/zxdt) |
| [通知公告](http://www.agri.cn/zx/hxgg/)     | [zx/hxgg](https://rsshub.app/agri/zx/hxgg) |
| [全国信息联播](http://www.agri.cn/zx/xxlb/) | [zx/xxlb](https://rsshub.app/agri/zx/xxlb) |

#### [生产](http://www.agri.cn/sc/)

| 分类                                    | ID                                         |
| --------------------------------------- | ------------------------------------------ |
| [生产动态](http://www.agri.cn/sc/scdt/) | [sc/scdt](https://rsshub.app/agri/sc/scdt) |
| [农业品种](http://www.agri.cn/sc/nypz/) | [sc/nypz](https://rsshub.app/agri/sc/nypz) |
| [农事指导](http://www.agri.cn/sc/nszd/) | [sc/nszd](https://rsshub.app/agri/sc/nszd) |
| [农业气象](http://www.agri.cn/sc/nyqx/) | [sc/nyqx](https://rsshub.app/agri/sc/nyqx) |
| [专项监测](http://www.agri.cn/sc/zxjc/) | [sc/zxjc](https://rsshub.app/agri/sc/zxjc) |

#### [数据](http://www.agri.cn/sj/)

| 分类                                    | ID                                         |
| --------------------------------------- | ------------------------------------------ |
| [市场动态](http://www.agri.cn/sj/scdt/) | [sj/scdt](https://rsshub.app/agri/sj/scdt) |
| [供需形势](http://www.agri.cn/sj/gxxs/) | [sj/gxxs](https://rsshub.app/agri/sj/gxxs) |
| [监测预警](http://www.agri.cn/sj/jcyj/) | [sj/jcyj](https://rsshub.app/agri/sj/jcyj) |

#### [信息化](http://www.agri.cn/xxh/)

| 分类                                           | ID                                               |
| ---------------------------------------------- | ------------------------------------------------ |
| [智慧农业](http://www.agri.cn/xxh/zhny/)       | [xxh/zhny](https://rsshub.app/agri/xxh/zhny)     |
| [信息化标准](http://www.agri.cn/xxh/xxhbz/)    | [xxh/xxhbz](https://rsshub.app/agri/xxh/xxhbz)   |
| [中国乡村资讯](http://www.agri.cn/xxh/zgxczx/) | [xxh/zgxczx](https://rsshub.app/agri/xxh/zgxczx) |

#### [视频](http://www.agri.cn/video/)

| 分类                                               | ID                                                               |
| -------------------------------------------------- | ---------------------------------------------------------------- |
| [新闻资讯](http://www.agri.cn/video/xwzx/nyxw/)    | [video/xwzx/nyxw](https://rsshub.app/agri/video/xwzx/nyxw)       |
| [致富天地](http://www.agri.cn/video/zftd/)         | [video/zftd](https://rsshub.app/agri/video/zftd)                 |
| [地方农业](http://www.agri.cn/video/dfny/beijing/) | [video/dfny/beijing](https://rsshub.app/agri/video/dfny/beijing) |
| [气象农业](http://www.agri.cn/video/qxny/)         | [video/qxny](https://rsshub.app/agri/video/qxny)                 |
| [讲座培训](http://www.agri.cn/video/jzpx/)         | [video/jzpx](https://rsshub.app/agri/video/jzpx)                 |
| [文化生活](http://www.agri.cn/video/whsh/)         | [video/whsh](https://rsshub.app/agri/video/whsh)                 |
  `,categories:[`new-media`],features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportRadar:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`www.agri.cn/:category?`],target:e=>{let t=e.category;return t?`/${t}`:``}},{title:`机构 - 成果展示`,source:[`www.agri.cn/jg/cgzs/`],target:`/jg/cgzs`},{title:`资讯 - 最新发布`,source:[`www.agri.cn/zx/zxfb/`],target:`/zx/zxfb`},{title:`资讯 - 农业要闻`,source:[`www.agri.cn/zx/nyyw/`],target:`/zx/nyyw`},{title:`资讯 - 中心动态`,source:[`www.agri.cn/zx/zxdt/`],target:`/zx/zxdt`},{title:`资讯 - 通知公告`,source:[`www.agri.cn/zx/hxgg/`],target:`/zx/hxgg`},{title:`资讯 - 全国信息联播`,source:[`www.agri.cn/zx/xxlb/`],target:`/zx/xxlb`},{title:`生产 - 生产动态`,source:[`www.agri.cn/sc/scdt/`],target:`/sc/scdt`},{title:`生产 - 农业品种`,source:[`www.agri.cn/sc/nypz/`],target:`/sc/nypz`},{title:`生产 - 农事指导`,source:[`www.agri.cn/sc/nszd/`],target:`/sc/nszd`},{title:`生产 - 农业气象`,source:[`www.agri.cn/sc/nyqx/`],target:`/sc/nyqx`},{title:`生产 - 专项监测`,source:[`www.agri.cn/sc/zxjc/`],target:`/sc/zxjc`},{title:`数据 - 市场动态`,source:[`www.agri.cn/sj/scdt/`],target:`/sj/scdt`},{title:`数据 - 供需形势`,source:[`www.agri.cn/sj/gxxs/`],target:`/sj/gxxs`},{title:`数据 - 监测预警`,source:[`www.agri.cn/sj/jcyj/`],target:`/sj/jcyj`},{title:`信息化 - 智慧农业`,source:[`www.agri.cn/xxh/zhny/`],target:`/xxh/zhny`},{title:`信息化 - 信息化标准`,source:[`www.agri.cn/xxh/xxhbz/`],target:`/xxh/xxhbz`},{title:`信息化 - 中国乡村资讯`,source:[`www.agri.cn/xxh/zgxczx/`],target:`/xxh/zgxczx`},{title:`视频 - 新闻资讯`,source:[`www.agri.cn/video/xwzx/nyxw/`],target:`/video/xwzx/nyxw`},{title:`视频 - 致富天地`,source:[`www.agri.cn/video/zftd/`],target:`/video/zftd`},{title:`视频 - 地方农业`,source:[`www.agri.cn/video/dfny/beijing/`],target:`/video/dfny/beijing`},{title:`视频 - 气象农业`,source:[`www.agri.cn/video/qxny/`],target:`/video/qxny`},{title:`视频 - 讲座培训`,source:[`www.agri.cn/video/jzpx/`],target:`/video/jzpx`},{title:`视频 - 文化生活`,source:[`www.agri.cn/video/whsh/`],target:`/video/whsh`}]};export{l as handler,u as route};