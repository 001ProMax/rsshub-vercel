import{n as e,t}from"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as n}from"./render-d6AVTUl2.js";import{t as r}from"./parse-date-CHEO0z5G.js";import{t as i}from"./got-BlqYKpVp.js";import a from"node:path";e();const o={path:`/blog/:username`,categories:[`blog`],example:`/hashnode/blog/inklings`,parameters:{username:`博主名称，用户头像 URL 中找到`},features:{requireConfig:!1,requirePuppeteer:!1,antiCrawler:!1,supportBT:!1,supportPodcast:!1,supportScihub:!1},radar:[{source:[`hashnode.dev/`]}],name:`用户博客`,maintainers:[`hnrainll`],handler:s,url:`hashnode.dev/`,description:"::: tip\n  username 为博主用户名，而非`xxx.hashnode.dev`中`xxx`所代表的 blog 地址。\n:::"};async function s(e){let o=e.req.param(`username`);if(!o)return;let s=`
    {
        user(username: "${o}") {
            publication {
                posts{
                    slug
                    title
                    brief
                    coverImage
                    dateAdded
                }
            }
        }
    }
    `,c=`https://${o}.hashnode.dev`,l=(await i({method:`POST`,url:`https://api.hashnode.com`,headers:{Referer:c,"Content-type":`application/json`},body:JSON.stringify({query:s})})).data.data.user.publication;if(!l)return;let u=l.posts;return{title:`Hashnode by ${o}`,link:c,item:u.map(e=>({title:e.title,description:n(a.join(t,`templates/description-88dc298d.art`),{image:e.coverImage,brief:e.brief}),pubDate:r(e.dateAdded),link:`${c}/${e.slug}`})).filter(e=>e!==``)}}export{o as route};