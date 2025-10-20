import{__dirname as e,init_esm_shims as t}from"./esm-shims-rNwigI-Q.js";import"./config-CVBRPN4O.js";import"./logger-BvonkID1.js";import{ofetch_default as n}from"./ofetch-CeMUzp5K.js";import{cache_default as r}from"./cache-Dfid4xgQ.js";import{art as i}from"./render-DftO2d-b.js";import{ViewType as a}from"./types-Bi82qguM.js";import o from"node:path";import{load as s}from"cheerio";t();const c=async t=>{let{category:a=`0`,sort:c=`latest`}=t.req.param(),l=Number.parseInt(t.req.query(`limit`)??`30`,10),u=`https://koyso.to`,d=new URL(`?${a===`0`?``:`category=${a}&`}sort=${c}`,u).href,f=s(await n(d)),p=f(`html`).attr(`lang`)??`en`,m=[];m=f(`a.game_item`).slice(0,l).toArray().map(t=>{let n=f(t),r=n.find(`div.game_info`).text(),a=n.find(`div.game_media img`).attr(`data-src`),s=i(o.join(e,`templates/description-463c9506.art`),{images:a?[{src:a,alt:r}]:void 0}),c=n.attr(`href`);return{title:r,description:s,link:c?new URL(c,u).href:void 0,content:{html:s,text:s},image:a,banner:a,language:p}}),m=await Promise.all(m.map(e=>e.link?r.tryGet(e.link,async()=>{let t=s(await n(e.link));t(`div.ind`).remove(),t(`div.download_div`).remove();let r=t(`h1.content_title`).text();t(`h1.content_title`).remove();let i=e.description+(t(`div.game_content`).html()||``),a={title:r,description:i,content:{html:i,text:i},language:p};return{...e,...a}}):e));let h=f(`ul.category li#category_${a}`).text(),g=f(`div.genres_content ul li.${c}`).text();return{title:`${f(`title`).text()} - ${h} - ${g}`,description:f(`meta[name="description"]`).attr(`content`),link:d,item:m,allowEmpty:!0,language:p,id:d}},l={path:`/:category?/:sort?`,name:`游戏`,url:`koyso.to`,maintainers:[`nczitzk`],handler:c,example:`/koyso/0/latest`,parameters:{category:{description:"排序，默认为 `0`，即全部，可在对应分类页 URL 中找到",options:[{label:`全部游戏`,value:`0`},{label:`动作游戏`,value:`3`},{label:`冒险游戏`,value:`5`},{label:`绅士游戏`,value:`7`},{label:`射击游戏`,value:`1`},{label:`休闲游戏`,value:`2`},{label:`体育竞速`,value:`4`},{label:`模拟经营`,value:`6`},{label:`角色扮演`,value:`8`},{label:`策略游戏`,value:`9`},{label:`格斗游戏`,value:`10`},{label:`恐怖游戏`,value:`11`},{label:`即时战略`,value:`12`},{label:`卡牌游戏`,value:`13`},{label:`独立游戏`,value:`14`},{label:`局域网联机`,value:`15`}]},sort:{description:"排序，默认为 `latest`，即最新，可在对应页 URL 中找到",options:[{label:`热度`,value:`views`},{label:`最新`,value:`latest`}]}},description:`::: tip
订阅 [最新动作游戏](https://koyso.to/?category=3&sort=latest)，其源网址为 \`https://koyso.to/?category=3&sort=latest\`，请参考该 URL 指定部分构成参数，此时路由为 [\`/koyso/3/latest\`](https://koyso.to/?category=3&sort=latest)。
:::

#### 分类

| 分类                                        | ID                                |
| ------------------------------------------- | --------------------------------- |
| [全部游戏](https://koyso.to/)               | [0](https://rsshub.app/koyso/0)   |
| [动作游戏](https://koyso.to/?category=3)    | [3](https://rsshub.app/koyso/3)   |
| [冒险游戏](https://koyso.to/?category=5)    | [5](https://rsshub.app/koyso/5)   |
| [绅士游戏](https://koyso.to/?category=7)    | [7](https://rsshub.app/koyso/7)   |
| [射击游戏](https://koyso.to/?category=1)    | [1](https://rsshub.app/koyso/1)   |
| [休闲游戏](https://koyso.to/?category=2)    | [2](https://rsshub.app/koyso/2)   |
| [体育竞速](https://koyso.to/?category=4)    | [4](https://rsshub.app/koyso/4)   |
| [模拟经营](https://koyso.to/?category=6)    | [6](https://rsshub.app/koyso/6)   |
| [角色扮演](https://koyso.to/?category=8)    | [8](https://rsshub.app/koyso/8)   |
| [策略游戏](https://koyso.to/?category=9)    | [9](https://rsshub.app/koyso/9)   |
| [格斗游戏](https://koyso.to/?category=10)   | [10](https://rsshub.app/koyso/10) |
| [恐怖游戏](https://koyso.to/?category=11)   | [11](https://rsshub.app/koyso/11) |
| [即时战略](https://koyso.to/?category=12)   | [12](https://rsshub.app/koyso/12) |
| [卡牌游戏](https://koyso.to/?category=13)   | [13](https://rsshub.app/koyso/13) |
| [独立游戏](https://koyso.to/?category=14)   | [14](https://rsshub.app/koyso/14) |
| [局域网联机](https://koyso.to/?category=15) | [15](https://rsshub.app/koyso/15) |

#### 排序

| 排序                                  | ID                                          |
| ------------------------------------- | ------------------------------------------- |
| [热度](https://koyso.to/?sort=views)  | [views](https://rsshub.app/koyso/0/views)   |
| [最新](https://koyso.to/?sort=latest) | [latest](https://rsshub.app/koyso/0/latest) |
`,categories:[`game`],features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportRadar:!0,supportBT:!1,supportPodcast:!1,supportScihub:!1,nsfw:!0},radar:[{source:[`koyso.to`],target:(e,t)=>{let n=new URL(t),r=n.searchParams.get(`category`)??void 0,i=n.searchParams.get(`sort`)??void 0;return`/koyso${r?`/${r}`:`0`}${i?`/${i}`:``}`}},{title:`全部游戏`,source:[`koyso.to`],target:`/0`},{title:`动作游戏`,source:[`koyso.to`],target:`/3`},{title:`冒险游戏`,source:[`koyso.to`],target:`/5`},{title:`绅士游戏`,source:[`koyso.to`],target:`/7`},{title:`射击游戏`,source:[`koyso.to`],target:`/1`},{title:`休闲游戏`,source:[`koyso.to`],target:`/2`},{title:`体育竞速`,source:[`koyso.to`],target:`/4`},{title:`模拟经营`,source:[`koyso.to`],target:`/6`},{title:`角色扮演`,source:[`koyso.to`],target:`/8`},{title:`策略游戏`,source:[`koyso.to`],target:`/9`},{title:`格斗游戏`,source:[`koyso.to`],target:`/10`},{title:`恐怖游戏`,source:[`koyso.to`],target:`/11`},{title:`即时战略`,source:[`koyso.to`],target:`/12`},{title:`卡牌游戏`,source:[`koyso.to`],target:`/13`},{title:`独立游戏`,source:[`koyso.to`],target:`/14`},{title:`局域网联机`,source:[`koyso.to`],target:`/15`}],view:a.Articles};export{c as handler,l as route};