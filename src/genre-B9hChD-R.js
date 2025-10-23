import"./esm-shims-CMsyBHYK.js";import"./config-DZMnNPig.js";import"./logger-asV68Lay.js";import"./ofetch-CRUPiVpr.js";import"./helpers-Cqaav28H.js";import{t as e}from"./cache-CpEhLexq.js";import"./render-d6AVTUl2.js";import"./parse-date-CHEO0z5G.js";import"./got-BlqYKpVp.js";import{a as t,n,o as r,r as i,t as a}from"./utils-D1Ss_qsj.js";const o={path:[`/videos/genre/:genre?/:language?/:mode?`,`/genre/:genre?/:language?/:mode?`],name:`Unknown`,maintainers:[],handler:s,description:`| videos with comments (by date) | everything (by date) |
| ------------------------------ | -------------------- |
| 1                              | 2                    |

::: tip
  See [Categories](https://www.javlibrary.com/en/genres.php) to view all categories.
:::`,features:{nsfw:!0}};async function s(o){let s=o.req.param(`mode`)??t,c=o.req.param(`genre`)??n,l=o.req.param(`language`)??i;return await a(l,`${r}/${l}/vl_genre.php?list&g=${c}&mode=${s}`,e.tryGet)}export{o as route};